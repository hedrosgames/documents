# 07 — Plano: pokemon-monster-data

**Página-alvo:** `pokemon-monster-data.html`

## Objetivo

Documentar os **stats, EV/IV, natures e BST** de Pokémon, e como o Bestiary reproduz a ideia com determinismo (sem IVs randômicos).

## Pesquisa necessária

- Atributos (HP/Atk/Def/SpA/SpD/Spd) e como o Bestiary reduz (HP/ATK/DEF/SPA/SPD/SPE).
- EVs: 510 total, máx 252/atributo, ganho +1 a cada 4 → Bestiary usa exatamente isso (seção 11 do GDD).
- IVs ocultos: retirados no Bestiary (dois iguais = stats iguais).
- Natures: 1/25, +10%/−10%, HP não escalado.
- BST por estágio (base ~318 → stage2 ~405 → final ~530 → deuses 680) — origem da tabela do GDD.

## Perguntas que a página responde

- Como fazer "customização" sem aleatoriedade oculta (Bestiary)?
- Que BST sustenta o tema dos três iniciais balanceados em 318?

## Conexão com o Bestiary

- **Adotar:** curva de BST, EVs direcionados, natures (Adamant/Modest/Jolly), suplementos do hub (Proteína/Cálcio/Carbo).
- **Adaptar:** nomear atributos no dondo brasileiro; retirar IVs dos status.
- **Rejeitar:** EVs obtidos por grind de combates repetidos; locks por Choice Band (Bestiary já define itens próprios).

## Dados

Tabela de BST por estágio, regras de EV, lista de natures — em `data/mechanics.json`.