# 11 — Plano: pokemon-index-connection

**Página-alvo:** `pokemon-index.html`

## Objetivo

Entrada do kit: hub que lista as páginas de referência e **consolida as decisões de adoção no Bestiary**, funcionando como mapa de navegação igual ao lobby do USO GERAL. É o documento construído por último, quando as páginas temáticas estiverem prontas.

## Conteúdo

- Card/links para cada página temática (`01`–`10`).
- Um mapa de decisões "Pokémon → Bestiary" (adotar / adaptar / rejeitar) por mecânica, com ponte para a página que justifica.
- Botão de voltar ao lobby do USO (`../index.html`).

## Conexão com o Bestiary

É a camada **decisória de alto nível**: o leitor entra pelo Pokémon e sai sabendo como o Bestiary molda cada sistema.

## Dados

`data/mechanics.json` agrega as decisões de todas as páginas (fonte única).

## Dependência

Construir por último (requer `01–10` preenchidas).