# 06 — Plano: pokemon-battle-logic

**Página-alvo:** `pokemon-battle-logic.html`

## Objetivo

Documentar a **lógica de batalha** pokémon (ordem de turno, prioridade, fórmula de dano, status, crítico, stages) e validar/refinar a implementação do Bestiary.

## Pesquisa necessária

- Ordem: Speed maior age primeiro; empates = RNG 50/50 (Bestiary já adota).
- Prioridade de troca/itens antes dos ataques (bracket de prioridade +/−).
- Fórmula de dano (constante de geração) e mods: STAB, efetividade, random 0.85–1.0, crítico, burn.
- Stages de buff/debuff −6..+6 e sua tabela (x1.5/x2/x4 etc.), reset ao trocar.
- Status majoritários e persistência após batalha.

## Perguntas que responde

- A fórmula oficial do Bestiary confere com a referência? (damage formula da seção 8 do GDD)
- Como o Bestiary trata o "double turn" de vantagem de speed (como DW3) vs pokémon?

## Conexão com o Bestiary

- **Adotar:** modelo de stages; persistência de status pós-batalha; roll randômico.
- **Adaptar:** prioridade de itens (itens vêm do hub); o Bestiary não tem "wait" de carga.
- **Rejeitar:** regras de double battle (Bestiary é 1v1/1vN).

## Dados

Fórmula, tabelas de stages/status, regras de ordem — em `data/mechanics.json`.