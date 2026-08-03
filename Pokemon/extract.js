/**
 * Script to extract Pokemon data from PokeAPI for evaluated games.
 * Focuses on:
 * - FireRed/LeafGreen (version group: 'firered-leafgreen')
 * - Sword/Shield (version group: 'sword-shield')
 * - Scarlet/Violet (version group: 'scarlet-violet')
 * 
 * Run with: node extract.js [limit]
 * Default limit is 151 (Kanto Dex).
 */

const fs = require('fs');
const path = require('path');

const LIMIT = process.argv[2] ? parseInt(process.argv[2], 10) : 151;
console.log(`Starting extraction for the first ${LIMIT} Pokémon...`);

const VERSION_GROUPS = ['firered-leafgreen', 'sword-shield', 'scarlet-violet'];

async function fetchPokemonList() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch Pokemon list: ${res.statusText}`);
  const data = await res.json();
  return data.results;
}

async function fetchPokemonDetails(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch details: ${res.statusText}`);
  return await res.json();
}

function processPokemonData(raw, versionGroup) {
  const stats = {};
  let bst = 0;
  raw.stats.forEach(s => {
    const nameMap = {
      'hp': 'hp',
      'attack': 'atk',
      'defense': 'def',
      'special-attack': 'spa',
      'special-defense': 'spd',
      'speed': 'spe'
    };
    const key = nameMap[s.stat.name];
    if (key) {
      stats[key] = s.base_stat;
      bst += s.base_stat;
    }
  });

  const types = raw.types.map(t => t.type.name);
  const abilities = raw.abilities.map(a => ({
    name: a.ability.name,
    isHidden: a.is_hidden
  }));

  const moves = [];
  raw.moves.forEach(m => {
    const details = m.version_group_details.filter(
      d => d.version_group.name === versionGroup
    );

    details.forEach(d => {
      moves.push({
        name: m.move.name,
        learnMethod: d.move_learn_method.name, // 'level-up', 'machine', 'egg', 'tutor'
        level: d.level_learned_at
      });
    });
  });

  // Sort moves: level-up first (sorted by level), then others
  moves.sort((a, b) => {
    if (a.learnMethod === 'level-up' && b.learnMethod !== 'level-up') return -1;
    if (a.learnMethod !== 'level-up' && b.learnMethod === 'level-up') return 1;
    if (a.learnMethod === 'level-up' && b.learnMethod === 'level-up') {
      return a.level - b.level;
    }
    return a.learnMethod.localeCompare(b.learnMethod);
  });

  return {
    id: raw.id,
    name: raw.name.charAt(0).toUpperCase() + raw.name.slice(1),
    types,
    baseStats: stats,
    bst,
    abilities,
    moves
  };
}

async function main() {
  try {
    const list = await fetchPokemonList();
    console.log(`Found ${list.length} Pokémon. Fetching details in parallel chunks...`);

    const detailsList = [];
    const chunkSize = 10; // Request in chunks of 10 to avoid hammering the API
    for (let i = 0; i < list.length; i += chunkSize) {
      const chunk = list.slice(i, i + chunkSize);
      console.log(`Fetching chunk ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(list.length / chunkSize)}...`);
      
      const promises = chunk.map(p => fetchPokemonDetails(p.url));
      const results = await Promise.all(promises);
      detailsList.push(...results);
      
      // Brief sleep between chunks
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log("Details fetched successfully. Processing for each game...");

    for (const group of VERSION_GROUPS) {
      const processed = detailsList.map(raw => processPokemonData(raw, group));
      // Save to data folder
      const filename = `extracted_${group.replace('-', '')}.json`;
      const filepath = path.join(__dirname, 'data', filename);
      fs.writeFileSync(filepath, JSON.stringify({
        game: group,
        count: processed.length,
        pokemon: processed
      }, null, 2));
      console.log(`Saved ${processed.length} entries to ${filepath}`);
    }

    console.log("All extractions completed successfully!");
  } catch (error) {
    console.error("Extraction failed:", error);
    process.exit(1);
  }
}

main();
