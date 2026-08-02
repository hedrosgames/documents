# 08 — Plano: pokemon-moves-abilities

**Página-alvo:** `pokemon-moves-abilities.html`

## Objetivo

Documentar o **movepool** (categorias Físico/Especial/Status, poder, precisão) e as **Abilidades** de Pokémon, cruzando com o catálogo de golpes que o Bestiary já importou (457 moves do PokeAPI) e as passivas do GDD.

## Pesquisa necessária

- Categorias de golpe (Physical/Special/Status) e como o dano usa Atk/SpA vs Def/SpD.
- TMs / Level-up / Egg moves como fontes de aprendizagem (Bestiary: level-up + Discos TM + Egg do Berçário).
- Abilidades (passivas) — referência para as 14 passivas do Bestiary (Stoic, Stubborn, Duelist, etc.).
- Contra: movimentos de status/utility.

## Perguntas que responde

- O catálogo de 457 moves do PokeAPI viro base suficiente?
- Como traduzir a mecânica de categorias para o combate do Bestiary?

## Conexão com o Bestiary

- **Adotar:** categorias físicas/especiais (poder por Atk vs Sp.Atk/SpD); STAB; limite de 4 movimentos ativos; aprendizado por Level/Disco/Tutor.
- **Adaptar:** nomes/tipos para a pixie; as passivas viram "Abilities" próprias.
- **Rejeitar:** PP/restrição estrita por agenda; pool gigante sem curadoria (Bestiary usa 49+ curados).

## Dados

Tabela de categorias, fontes de aprendizado, mapeamento Abilities→passivas — em `data/mechanics.json`.