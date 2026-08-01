# Digimon World 3 — Mecânicas de combate e progressão

Referência de apoio ao **Balance Notes**. Tudo aqui é comportamento documentado e reproduzível do jogo (versão NA/NTSC-U), apurado de FAQs da comunidade. O jogo usa matemática inteira e não expõe as constantes exatas de dano; as relações abaixo são o que dá pra medir e confirmar. Os números finos moram nos JSON/HTML das guias; este doc trata das **regras**.

Fontes: TheFulgorah — Bestiary (GameFAQs), Rob01m — pesquisa de DV EXP, Wikimon (Digimon World 2003), DW3 FAQ v0.91 (video-games-museum), fórum de speedrun do DW3.

## Dano

Todo golpe cai em um de dois canais:

- **Físico** — ataque "Fight" e techs com triângulo vermelho. Sobe com **Strength** do atacante, cai com **Defense** do alvo.
- **Mágico** — techs com triângulo azul. Sobe com **Spirit** do atacante, cai com **Wisdom** do alvo.

Cada tech tem um elemento (ou nenhum): Fire, Water, Ice, Wind, Thunder, Machine, Dark. A **Tolerance** do alvo naquele elemento modula o dano: ≈100 é neutro, abaixo de 100 o alvo toma mais, acima toma menos. Em tech mágica elemental, Tolerance alta ainda corta a chance de dano amplificado.

Exemplo do cruzamento: um golpe **físico de fogo** passa por Fire Tolerance + Defense + Speed do alvo; um golpe **mágico de fogo** passa por Fire Tolerance + Wisdom.

Na versão NA o dano não trava em 9999 — chega a 5 dígitos.

## Acerto, crítico, ordem de turno

- **Acerto físico**: Speed do atacante vs Speed do alvo.
- **Acerto mágico**: Wisdom do atacante vs Wisdom do alvo.
- Vantagem grande o bastante = acerto garantido (o "range" interno bate ~127+).
- **Crítico**: qualquer golpe pode sair crítico; Speed alto aumenta a taxa; armas como Saber Fang e Shuriken somam crítico.
- **Ordem**: Speed maior age primeiro; com vantagem de Speed suficiente, a unidade age duas vezes seguidas — nunca no 1º turno.
- Só golpe físico pode ser contra-atacado. Counter Board e Multiple Board na versão NA ativam sempre.

## Blast

O Blast Gauge enche ao **tomar** dano de pelo menos 30% do HP máximo. Cheio, o Digimon Blast-evolui e usa signature + techs carregadas por 3 turnos sem gastar MP. Abaixo do nível 5 o blast vai pra Champion; 5–19 Ultimate; 20–39 Mega; 40+ varia.

## Duas barras de XP

- **EXP level (1–99, por Rookie)** — a única que mexe em stat. Curva em `partner-level-exp.json`.
- **Skill level (por evolução)** — sobe rápido, destrava techs e Digivolutions alternativas, **não** mexe em stat. Só sobe lutando naquela forma. A cada 5 níveis (e no 99): nada, aprende tech, tech vira carregável, ou nova evolução.

### DV EXP (o combustível do skill level)

Valor oculto de EXP por evolução. Por luta: **mín 1, máx 10**, escalado comparando o nível do seu Rookie ao inimigo — inimigo forte pro seu nível rende mais, e o mesmo inimigo rende menos conforme você sobe. É dividido entre as formas usadas na luta e acumula sem desperdício.

Custo por tier de forma:

| Tier | Custo | Total | Exemplos |
|---|---|---|---|
| 1 | 10/nível até 99 | 980 | Greymon, Growlmon, Angemon, Kyubimon, ExVeemon, Stingmon |
| 2 | 10 até 95, 50 até 99 | 1.140 | MetalGreymon, WarGrowlmon, Taomon, Paildramon, Angewomon |
| 3 | 10 até 90, 50 até 99 | 1.340 | WarGreymon, Gallantmon, Seraphimon, Imperialdramon, MetalGarurumon |
| 4 | 10 até 80, 50 até 99 | 1.740 | Imperialdramon FM, MegaGargomon, GranKuwagamon, Phoenixmon, MaloMyotismon |
| 5 | 10 até 60, 50 até 99 | 2.540 | Omnimon, Imperialdramon PM, Diaboromon, Beelzemon |

## Growth de stat

O ganho por nível é **fixo por Rookie** — cada um dos 8 tem base e curva próprias. Cada Digivolution soma um **bônus fixo** por cima, igual entre rookies para a mesma evolução (única exceção: o champion nativo do rookie não ganha +1 charisma).

DW3 **não** tem ginásio/Training Points que suba stat (isso é de outros Digimon World). Aqui stat vem só de nível + Digivolution. Equip muda stat em combate, mas é ignorado nos requisitos de Digivolution — o gate lê o stat-base sem equip.

Stats iniciais (exemplos confirmados):

| Rookie | HP | MP | Str | Def | Spr | Wis | Spd | Signature |
|---|---|---|---|---|---|---|---|---|
| Guilmon | 150 | 130 | 51 | 28 | 26 | 43 | 52 | Pyro Sphere |
| Kumamon | 180 | 10 | 56 | 58 | 19 | 17 | 49 | Bear Fist |
| Patamon | 130 | 170 | 20 | 45 | 48 | 58 | 29 | Boom Bubble |
| Renamon | 140 | 200 | 31 | 22 | 61 | 49 | 36 | Diamond Storm |

## Encontros, gates e bosses

Encontros são aleatórios, com **1 a 3** inimigos por luta. Quem aparece em cada mapa está nos dados (`mapIds`). O que trava avanço são **itens de história** (Submarimon, Digmon, Kicking Boots, Fishing Rod) e **bosses**; o nível serve à Digivolution natural (5/20/40).

Boss = HP alto + moveset de techs (algumas físicas elementais, algumas signature). Sem fases roteirizadas além de HP/moveset na maioria; Blast e Counter valem igual. HP, EXP, BIT, drop e techs por inimigo/boss saem do bestiário.

## Economia

Bits entram por kill (valor BIT por inimigo), venda e steal. Steal mira o drop do inimigo, com chance por inimigo (dados em `steal-drops`). Âncoras de loja: Power Charge (cura 500 HP) 12 BIT, Life Disk (revive) 500, Life Plug 2.400, DV Plug (enche o blast) 1.200, Power/Guard/Mach Plug 40–100.

## Equip e Powers

Slots: Head, Body, Left Hand, Right Hand e dois Accessories. Os **Powers** elementais (Fire/Water/Ice/Wind/Bolt/Metal/Dark) vêm em tiers **1 < 2 < S** e sobem o ataque daquele elemento. Buffs por tech: Mega Strength (party), Mega Protection (party), Speed Up (próprio).

> Buffs de porcentagem com nome tipo Burning Heart, Muscle Charge ou Upgrade são de **Digimon World: Next Order**, não de DW3. Não use aqui.

## Sessão

A unidade de sessão é: cidade (cura / loja / Digimon Lab) → mapa do setor → gate/boss. O **obrigatório** por área é bater o gate: nível pra Digivolution natural, item-chave exigido, vencer o boss. O **grind livre** é DV EXP, cards, steal e Bits além do gate.
