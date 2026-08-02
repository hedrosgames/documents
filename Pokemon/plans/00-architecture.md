# 00 — Arquitetura do kit Pokémon

**Formato:** Markdown puro (este plano). As páginas finais serão HTML em `pokemon-shell.css` + `data/mechanics.json`.

## Objetivo

O **Bestiary** é o jogo; os **Pokémon** são a principal referência. Cada página responde: *"como o Pokémon faz isso, e o que isso significa para o nosso jogo?"*

Não buscamos replicar Pokémon, mas extrair princípios que orientem o design do Bestiary — um *hub-based dungeon crawler & monster taming*: cidade central point-and-click (Visual Novel), dungeons em grid e batalha por turnos com morte permanente (Nuzlocke), sem exploração de mundo aberto.

## Estrutura final do kit

```
Pokemon/
├── pokemon-index.html               # entrada do kit + mapa de decisões adotadas no Bestiary
├── pokemon-shell.css                 # shell compartilhado (tokens :root, header/nav)
├── favicon.svg
├── pokemon-mechanics-overview.html   # visão geral entre gerações
├── pokemon-firered.html              # referência clássica
├── pokemon-modern.html               # geração moderna
├── pokemon-champions.html            # "só combate" oficial
├── pokemon-battle-only-games.html    # Stadium / Battle Revolution / Showdown
├── pokemon-type-chart.html           # matriz de fraquezas (7 tipos do Bestiary)
├── pokemon-battle-logic.html         # turno, prioridade, dano, status
├── pokemon-monster-data.html         # stats, EV/IV, natures, BST
├── pokemon-moves-abilities.html      # movepool, categorias, abilidades
├── pokemon-capture-economy.html      # captura, itens, economia da cidade
├── data/mechanics.json               # dados brutos compartilhados
├── _check.cjs                        # checador opcional (espelho do DW3)
└── plans/                            # estes documentos de plano (não vão pro render)
```

## Padrões

- **Idioma:** pt-BR em HTML/MD/JSON de docs.
- **HTML:** `lang="pt-BR"`, `<meta charset="UTF-8">`, doctype HTML5. Páginas usam `pokemon-shell.css`.
- **CSS:** vanilla, tokens/variáveis no `:root`, esquema escuro, breakpoints 1100 / 700 / 520. Sem frameworks.
- **JS:** vanilla embutido. Interação opcional com progresso em `localStorage` (chaves `poke-*`).
- **Dados:** tudo centralizado em `data/mechanics.json`; nada hard-coded nos HTML.
- **Shell:** inspirado no `dw3-shell.css` (header + nav padrão), adaptado ao kit.
- **Commits:** pt-BR, curto, imperativo, no repo `documents/` (push automático).

## Modelo de dados

```json
{
  "page": "pokemon-firered",
  "topics": ["tipos", "turno", "dano", "status"],
  "source": ["Pokemon FireRed / LeafGreen (GBA, Gen 3)"],
  "bestiary_connection": { "adopt": [], "adapt": [], "reject": [] }
}
```

## Escopo desta sessão

- Criar os **planos** `00`, `01..11` e `README.md` de planos.
- **Não** construir páginas HTML nem `data/mechanics.json` ainda.
- **Não** fazer a pesquisa profunda agora (fica para o preenchimento de cada página, seguindo o plano).

## Ordem de execução

1. `00-architecture` (este).
2. `10-overview` — visão geral orienta a consolidação.
3. Páginas temáticas `01`–`09`.
4. `11-index-connection` — consolida as adoções no Bestiary.

## Referências de fonte por plano

- Fire Red / Leaf Green (GBA, Gen 3) — `01`.
- Mecânicas modernas (Abilities, Natures, EVs/IVs, TERA) — `02`.
- Pokémon Champions (combate recente) — `03`.
- Jogos "só batalha" com todo o roster (Stadium, Battle Revolution, Showdown) — `04`.
- Matriz de tipagem — `05`.
- Lógica de batalha — `06`.
- Dados de monstro — `07`.
- Golpes e abilidades — `08`.
- Captura e economia — `09`.

## Notas de regras

- Nunca reescrever arquivo inteiro; edições cirúrgicas.
- Sem metadado de conversa nos arquivos de docs.
- Ao executar estes planos: commit + push no repo `documents/`.