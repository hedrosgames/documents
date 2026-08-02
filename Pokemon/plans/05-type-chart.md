# 05 — Plano: pokemon-type-chart

**Página-alvo:** `pokemon-type-chart.html`

## Objetivo

Documentar a **matriz de fraquezas/resistências** de Pokémon e derivar a versão reduzida para os **7 tipos do Bestiary**: FOGO, AR, PLANTA, ÁGUA, ROCHA, ELÉTRICO e GELO.

## Pesquisa necessária

- Tabela completa de Pokemon (18 tipos) e como ela se reduz — que relações fazem sentido manter.
- Manter o núcleo de efetividade: dano 2x / 0.5x / 0x, STAB, precisão.
- Como o Bestiary já tem (Apêndice D do GDD) a matriz 7×7 — validar consistência.

## Perguntas que responde

- Quais resistências dos 18 tipos (Fogo, Planta, etc.) continuam relevantes nos 7 do Bestiary?
- Que fraquezas cruzadas criar (relação FOGO×ÁGUA, ELÉTRICO×ÁGUA) para dar identidade a cada dungeon?

## Conexão com o Bestiary

- **Adotar:** a matriz do Apêndice D do GDD como base.
- **Adaptar:** versão reduzida exemplificada; não usar os 18 tipos.
- **Rejeitar:** dual-typing completo (Bestiary usa tipagem única, sem dupla).

## Dados

Tabela-tipo de referência (Pokémon) + matriz 7×7 resolvida em `data/mechanics.json`.