# 09 — Plano: pokemon-capture-economy

**Página-alvo:** `pokemon-capture-economy.html`

## Objetivo

Documentar a **captura** (catch rate, bônus de esfera/status) e a **economia de Pokémon** (lojas, itens, preços, cura), traduzindo para o Bestiary (suas esferas e economia de hub).

## Pesquisa necessária

- Catch rate: fórmula de captura, modificadores de HP/status/esfera, regra de contagem das 3 sacudidas (o Bestiary já especifica).
- Esferas e itens: custos, camadas de esfera, poções, Full Heal, preços.
- Economia: ouro do hub, venda de excesso, estoque da loja escalonável.

## Perguntas que a página responde

- O modelo de captura do Bestiary confere com a referência oficial (A ≥ 255 = 100%)?
- Como a economia do hub financia a customização (EVs/suplementos) e os itens de cura?

## Conexão com o Bestiary

- **Adotar:** fórmula de captura, esferas base/avançada/master, poções escalonáveis, Full Heal, retorno de 50% ao vender.
- **Adaptar:** bônus de status (Dormir/Paralisia) no contexto do combate; ajustar preços.
- **Rejeitar:** compra de itens de cura ilimitados em campo (Bestiary usa corda de fuga/teleporte).

## Dados

Fórmulas de captura, tabela de itens/preços (base/super/hyper, esferas) — em `data/mechanics.json`.