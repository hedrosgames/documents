/**
 * Consistency check for Pokémon (Bestiary reference kit) docs.
 * node _check.cjs
 */
const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const NAV = [
  "pokemon-mechanics-overview.html",
  "pokemon-firered.html",
  "pokemon-modern.html",
  "pokemon-champions.html",
  "pokemon-battle-only-games.html",
  "pokemon-type-chart.html",
  "pokemon-battle-logic.html",
  "pokemon-monster-data.html",
  "pokemon-moves-abilities.html",
  "pokemon-capture-economy.html"
];

const files = [...NAV, "pokemon-index.html"];
let fails = 0;
function fail(msg) { console.error("FAIL:", msg); fails++; }

for (const f of files) {
  const fp = path.join(DIR, f);
  if (!fs.existsSync(fp)) { fail(f + " missing"); continue; }
  const h = fs.readFileSync(fp, "utf8");
  if (!h.includes('href="pokemon-shell.css"')) fail(f + " missing pokemon-shell.css");
  if (!/<html[^>]*lang="pt-BR"/i.test(h)) fail(f + " lang not pt-BR");
  if (f !== "index.html") {
    if (!h.includes('class="site-header"')) fail(f + " missing site-header");
    const navOrder = [...h.matchAll(/href="(pokemon-[a-z-]+\.html)"/g)]
      .map(m => m[1])
      .filter((v, i, a) => NAV.includes(v) && a.indexOf(v) === i);
    const slice = navOrder.slice(0, 10);
    if (slice.join() !== NAV.join()) fail(f + " nav order: " + slice.join(" → "));
  }
}

if (!fs.existsSync(path.join(DIR, "pokemon-shell.css"))) fail("pokemon-shell.css missing");
if (!fs.existsSync(path.join(DIR, "data", "mechanics.json"))) fail("data/mechanics.json missing");

if (fails) { console.error("\n" + fails + " failure(s)"); process.exit(1); }
console.log("OK ·", files.length, "html · nav itemizada");