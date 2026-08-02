# 01 — Plano: pokemon-firered

**Página-alvo:** `pokemon-firered.html`

## Objetivo

Documentar como **Pokémon Fire Red / Leaf Green** (GBA, Gen 3) implementa as mecânicas-chave, como referência clássica do bestiário de batalha, e traduzir cada uma para o Bestiary.

## Pesquisa necessária (acontece no preenchimento)

- Tipagem e tabela de efetividade usada na Gen 3.
- Fluxo de batalha por turnos, ordem por Speed, prioridades, trocas/itens.
- Fórmula de dano da Gen 3 (constante de dano, STAB, crítico, variação aleatória).
- Condições de status (BRN/PAR/PSN/SLP/FRZ) e stages de buff/debuff.
- Captura: catch rate, shaking calc, bônus de esfera, Sleep/Paralisia.
- Pacing de progressão: os 8 ginásios + Liga, evolução por nível, TMs/tutor.

## Perguntas que a página responde

- Como o Fire Red decide a ordem de ação quando Speed empata?
- Como é o modelo de captura e quanto os status influenciam?
- Como a escolha de iniciais se sustenta por BST/tipagem (318 no Bestiary)?

## Conexão com o Bestiary

- **Adotar:** fórmula de dano base, STAB 1.5x, efetividade 2x/0.5x/0x, roll 0.85–1.0; status principais; captura com 3 rolagens/sacudidas.
- **Adaptar:** tipos reduzidos aos 7 do Bestiary (FOGO/AR/PLANTA/ÁGUA/ROCHA/ELÉTRICO/GELO).
- **Rejeitar:** mundo aberto, os 18 tipos, HMs de campo (o papel do HM vira missões no hub).

## Dados (fatia de `data/mechanics.json`)

Tabela de capacidades da Gen 3 resumida, tabela de tipos, tabela de dano exemplificada, regras de captura.