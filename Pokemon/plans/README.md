# Diretório de planos — kit Pokémon

Este `README.md` indexa os planos de construção do kit de documentação **Pokémon** em `USO GERAL/documents/Pokemon`.

## Contexto mínimo

- O jogo é o **Bestiary** (hub-based dungeon crawler & monster taming com cidade point-and-click + dungeons + batalha por turnos + Nuzlocke, sem mundo aberto).
- Os **Pokémon** são a principal referência de design.
- Formato final das páginas: **HTML kit + dados JSON**. Os **planos** abaixo são **Markdown puro** e não vão pro render do kit.

## Planos

| Plano | Página HTML-alvo | Foco |
|------|------------------|------|
| [00-architecture](00-architecture.md) | (base) | Arquitetura do kit, padrões, regras, modelo de dados |
| [01-pokemon-firered](01-pokemon-firered.md) | `pokemon-firered.html` | A referência clássica (Fire Red) |
| [02-pokemon-modern](02-pokemon-modern.md) | `pokemon-modern.html` | Geração moderna (Abilidades, Natures, EVs/IVs, TERA) |
| [03-pokemon-champions](03-pokemon-champions.md) | `pokemon-champions.html` | Pokémon Champions (o "só combate" oficial) |
| [04-battle-only-games](04-battle-only-games.md) | `pokemon-battle-only-games.html` | Stadium / Battle Revolution / Showdown |
| [05-type-chart](05-type-chart.md) | `pokemon-type-chart.html` | Matriz de fraquezas adaptada aos 7 tipos do Bestiary |
| [06-battle-logic](06-battle-logic.md) | `pokemon-battle-logic.html` | Turno, prioridade, dano, status, crítico, stages |
| [07-monster-data](07-monster-data.md) | `pokemon-monster-data.html` | Stats, EV/IV, natures, BST |
| [08-moves-abilities](08-moves-abilities.md) | `pokemon-moves-abilities.html` | Movepool, categorias, Abilidades |
| [09-capture-economy](09-capture-economy.md) | `pokemon-capture-economy.html` | Captura, itens, economia da cidade |
| [10-overview](10-overview.md) | `pokemon-mechanics-overview.html` | Visão geral das mecânicas entre gerações |
| [11-index-connection](11-index-connection.md) | `pokemon-index.html` | Entrada do kit + consolidação das adoções no Bestiary |

## Regras

- Pesquisa profunda (Fire Red, modernos, Champions, games só-batalha) acontece **no preenchimento de cada página**, seguindo o plano.
- Cada plano vira uma página HTML + a fatia correspondente de `data/mechanics.json`.
- Conteúdo pt-BR, sem metadado de chat.