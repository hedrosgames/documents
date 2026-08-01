# Hedros Games — Documentação

Repositório público de **documentação interna** da Hedros Games.

Aqui ficam guias, GDDs e material de referência dos projetos — pensado para uso próprio e da equipe, mesmo estando aberto no GitHub.

## Site

Com GitHub Pages ativo na raiz da `main`:

**[https://hedrosgames.github.io/documents/](https://hedrosgames.github.io/documents/)**

O lobby na raiz lista os jogos disponíveis e leva direto para a primeira página de cada kit.

## Documentação disponível

| Projeto | Pasta | Entrada |
|--------|--------|---------|
| Digimon World 3 | [`Digimon World 3/`](Digimon%20World%203/) | [`digimon-world-3-agumon-tree.html`](Digimon%20World%203/digimon-world-3-agumon-tree.html) |

Novos documentos entram como pasta nova + card no lobby da raiz.

### Digimon World 3

Kit de referência HTML:

- Partner Digivolution  
- Steal Items  
- Boosters  
- Elemental Weaknesses  
- Monster Stats  
- Level EXP  
- Walkthrough  
- Routes  
- Balance Notes  

Estilo compartilhado em `Digimon World 3/dw3-shell.css`.  
Checagem opcional: `node "Digimon World 3/_check.cjs"`.

## Clone local

```
C:\CursorProjects\documents
```

Outros docs não-Unity ficam em `C:\CursorProjects\` (`privatedocuments`, `bugstatus`).

## Como contribuir (fluxo interno)

1. Crie ou edite a pasta do projeto.  
2. Defina qual página é a entrada do kit.  
3. Adicione o card correspondente em [`index.html`](index.html) na raiz, apontando para essa página.  
4. Atualize esta tabela quando publicar um kit novo.

## Observação

O conteúdo é documentação de trabalho. Pode evoluir, ter lacunas marcadas e refletir decisões em aberto — não é material de marketing nem site institucional.
