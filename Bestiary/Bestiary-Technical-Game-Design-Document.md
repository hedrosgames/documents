# BESTIARY

**Hub-based Dungeon Crawler & Monster Taming**

## Technical Game Design Document

**A Fantasia de Capturar 100%:** O verdadeiro jogo de capturar todos e se tornar o mestre absoluto do bestiário. A progressão orbita uma Cidade Central interagível (HUB), enquanto a captura tática ocorre em Dungeons instanciadas. A tensão é máxima: completar o catálogo exige maestria contra um sistema hardcoded de Morte Permanente (Nuzlocke).

---

## 2. Core Game Loop

A experiência de Bestiary baseia-se em um ciclo Hub-and-Spoke (Cidade Central para Dungeons instanciadas), dividindo o pacing do jogador entre gestão segura e exploração de alto risco.

| Fase | Descrição |
|------|-----------|
| **O HUB (A Cidade Segura)** | Navegação via Point & Click. Curar, comprar itens, gerenciar PC Box, aceitar Quests e dialogar (Visual Novel). |
| **A Expedição (Dungeons)** | Navegar em grids (WASD), lidar com RNG de encontros e usar táticas roguelite para avançar os andares. |
| **Batalha (Morte ou Captura)** | Luta de turnos com tensão. Cada captura importa e toda morte de membro da equipe é permanente. |
| **Retorno ao Hub** | Vitória no Boss ou Fuga via Teleporte. |

**Macro Objetivo:** Progredir pelos andares das Dungeons desbloqueáveis para registrar as 70 espécies no Bestiário, otimizar atributos sem perder membros chave, e enfrentar os Lendários que governam os Domínios.

---

## 3. Fluxo de Telas (Screen Flow)

### O Hub Central (Cidade)

| Tela | Descrição |
|------|-----------|
| **Tela Principal (Overworld Mouse-driven)** | Visão isométrica rica. O jogador clica no chão ou nos prédios. |
| **Diálogos (Estilo Visual Novel)** | Ao clicar em NPCs ou Lojistas, transição para tela 2D com portraits dos personagens e TextBox. |
| **Telas de Gerenciamento** | PC Box (Cemitério/Armazenamento), Status do Time, Mochila de Itens e Codex. |

### A Expedição (Dungeons)

| Tela | Descrição |
|------|-----------|
| **Tela de Exploração (Grid Keyboard)** | Navegação pixel-perfect tile-based focada em ação e posicionamento. |
| **Transição de Encontro** | Efeito visual de screen wipe ao pisar na grama ou entrar na linha de visão (LoS) de inimigo. |
| **Tela de Batalha** | UI dividida em turnos clássica. Painel inferior focado com botões diretos de comando tático. |

---

## 4. Esquema de Controles (Inputs)

A divisão clara entre Mouse no HUB e Teclado/Controle na Dungeon separa mentalmente o modo "Gestão Relaxante" do modo "Ação e Risco Tático".

### Mouse (Hub Central)

| Input | Ação |
|-------|------|
| **Click-to-Move** | Clicar no chão usa Pathfinding (A*) para mover o avatar automaticamente até o local desviando de colisões. |
| **Interagir/UI** | Clicar em prédios/NPCs abre menus. Arrastar itens para monstros ou gerenciar a PC Box com fluidez. |

### Teclado (Dungeons)

| Input | Ação |
|-------|------|
| **WASD / Setas** | Movimentação manual travada em grid. Sem movimentação diagonal. |
| **Espaço / E** | Interagir / Confirmar Ação. |
| **Esc / X** | Cancelar / Menu Pause. |
| **1, 2, 3, 4** | Atalhos rápidos para golpes na batalha. |

### Controle (Gamepad)

| Input | Ação |
|-------|------|
| **Analógico / D-Pad** | Navegação na dungeon. |
| **Botões Frontais** | Confirmar (A), Voltar/Correr (B). Start abre o Menu. |

---

## 5. Seleção dos Iniciais (Starters)

O jogador entra na Guilda (HUB) para se registrar. É levado a uma mesa com 3 cápsulas contendo os Riftmons Básicos, perfeitamente equilibrados em **318 de Base Stat Total (BST)** para garantir fair-play absoluto no Early Game.

| Elemento | Nome | ID | Perfil | Stats |
|----------|------|-----|--------|-------|
| 🔥 | **Hellhound** | #001 | O cão flamejante. Foco em Ataques Especiais rápidos. Transforma-se no guardião de três cabeças. | HP: 45 \| ATK: 60 \| SPA: 65 \| SPE: 63 |
| 💧 | **Lakezard** | #028 | O lagarto das chuvas. Focado em balanceamento e utilidade. Evolui para um predador massivo. | HP: 50 \| ATK: 55 \| SPA: 60 \| SPE: 53 |
| 🍃 | **Sunseed** | #019 | A semente de amanhã. Crescimento defensivo fantástico, transformando-se num guerreiro formidável. | HP: 45 \| ATK: 50 \| DEF: 50 \| SPE: 53 |

**Tutorial Integrado:** Imediatamente após a seleção, o Mestre da Guilda desafia o jogador. O inicial começará no **Lv. 5** com 1 golpe Físico ("Investida Tática") e 1 magia Elemental ("Brasa").

---

## 6. Movimentação & Encounters (Dungeons)

### Grid Movement (Tile-based)

Nas Expedições, a movimentação é estrita e matemática. Pressionar a seta move o jogador exatos **16x16 pixels** para a célula vizinha.

| Elemento | Regra |
|----------|-------|
| **Obstáculos Duros** | Árvores, pedras e água são intransponíveis inicialmente. |
| **Ledges (Barrancos)** | Permitem o pulo unilateral para baixo, servindo como rotas de escape rápidas e one-way. |

### Geração de Encontros (RNG & LoS)

| Tipo | Regra |
|------|-------|
| **RNG (Grama/Tiles)** | Tiles especiais acionam RNG a cada passo (Ex: 10% de chance de combate). Cada andar da dungeon tem uma Encounter Table fixa. |
| **Visão de Inimigos (Line of Sight - LoS)** | Membros de guildas rivais e Chefes escaneiam o terreno (Raio linear de 5 tiles). Pisar nesta linha inicia batalha forçada. Não há opção de [Fugir] em batalhas forçadas. |

---

## 7. O Bestiário (Registro Pessoal)

O Menu Principal contém a aba **"O Bestiário"**. Completar os **70 registros** dele é o Core Goal narrativo.

### Status do Registro

| Condição | Condição Sistêmica | Como a UI renderiza o Slot |
|----------|--------------------|----------------------------|
| **NÃO VISTO** | A flag do array nunca foi tocada. | Nome ofuscado por hifens (???). Caixa vazia. |
| **AVISTADO** | Lutou ou viu um inimigo usando. | Sprite renderizado em silhueta escura. Mostra Nome e Habitat. |
| **CAPTURADO** | A esfera funcionou, ovo rachou ou evoluiu. | Sprite full-color. Lore, Base Stats, Pegadas e Tipagem. |

**Recompensas por Milestone:** O NPC Mestre lê o `array.length` de criaturas Owned para destravar acessos.

| Milestone | Recompensa |
|-----------|------------|
| 10 espécies | Libera Subsolo |
| 70 espécies | Libera Templo Lendário |

---

## 8. Lógica de Turnos e Dano

### Fluxo de Turno

1. **Fase de Declaração:** O jogo aguarda comandos de ambas as IAs.
2. **Bracket de Prioridade (+/-):** Trocar e Itens ignoram Speed e executam primeiro.
3. **Resolução de Velocidade (SPE):** Quem tiver o maior atributo SPE atual ataca primeiro. Empates = 50/50 RNG.
4. **Execução:** Rola-se a precisão (Acc). Se Hit, subtrai HP. Se HP ≤ 0, chama `is_dead()`.

### Fórmula Oficial de Dano

$$
Dano = \left( \frac{\left( \frac{2 \times Lvl}{5} + 2 \right) \times Power \times \frac{A}{D}}{50} + 2 \right) \times Mods
$$

### Multiplicadores Essenciais (Mods)

| Mod | Valor |
|-----|-------|
| **STAB** | 1.5x (Se o tipo do Riftmon for igual ao do ataque). |
| **Efetividade** | 2x (Vantagem), 0.5x (Resistência), 0x (Imunidade). |
| **Roll Aleatório** | Variância de 0.85 a 1.0. |

---

## 9. Morte Permanente (Nuzlocke System)

### A Regra Absoluta (Perma-Death)

Ao chegar a 0 HP, o Riftmon morre. A flag `is_dead` vira `true`. Ele é bloqueado eternamente na PC Box **"Cemitério"**.

| Regra | Descrição |
|-------|-----------|
| **Captura Única (First Encounter Lock)** | O jogo grava uma Flag para cada andar individual (Ex: `dungeon1_floor2_caught`). Você só pode lançar Esferas no PRIMEIRO Riftmon selvagem do andar. Se ele morrer ou fugir, o item Esfera é desativado para aquele andar para sempre. |
| **Vínculo** | A UI obriga nomear a criatura ao capturar (Forced Nickname). |
| **Wipe = Fim da Expedição** | Se os 6 da party morrerem, você volta pra guilda sem loot e com metade do ouro. Sem reservas no HUB = Game Over Definitivo. |

---

## 10. Condições de Status e Estágios

### Status Majoritário

| Status | Efeito Mecânico (Persiste após batalha) |
|--------|-----------------------------------------|
| **Queimadura (BRN)** | Dreno de 1/16 HP Máx/Turno. Corta poder Físico (ATK) em 0.5x. |
| **Paralisia (PAR)** | 25% chance de perder o turno. Corta Velocidade (SPE) em 25%. |
| **Veneno (PSN)** | Dreno de 1/8 HP Máx/Turno. |
| **Sono (SLP)** | Impossibilitado de agir. Desperta via RNG (1 a 3 turnos). |
| **Congelamento (FRZ)** | Não age. Descongela se atingido por Fogo ou 20% RNG/Turno. |

### Estágios Temporários em Batalha (-6 a +6)

Zera ao trocar de monstro.

| Tipo | Valores |
|------|---------|
| **Buffs** | +1 (1.5x), +2 (2.0x), +6 (4.0x) |
| **Debuffs** | -1 (0.66x), -2 (0.50x), -6 (0.25x) |

---

## 11. Treino Direcionado (Sem IVs Randômicos)

O jogo exclui a genética oculta aleatória (Sem IVs). Dois monstros iguais com mesmo treino terão status idênticos.

| Sistema | Regra |
|---------|-------|
| **Valores de Esforço (EVs)** | Todo monstro nasce com **510 EVs** para gastar. Máximo de **252** pontos por atributo. A cada 4 EVs, ganha +1 Ponto Real no status. |
| **Suplementos do HUB** | Farme Ouro e compre Treinos Específicos (Proteína para ATK, Cálcio para SPA, Carbo para SPE). Transforma dinheiro ocioso em customização bruta (Tanques ou Glass Cannons sob demanda). |

---

## 12. Naturezas Genéticas (Natures)

A única variação genética na captura é a **"Natureza"** (1/25 de chance). Ela aplica **+10%** permanente num atributo, e **-10%** permanente em outro (HP não é afetado).

| Natureza | Efeito | Uso |
|----------|--------|-----|
| **Adamant (Firme)** | +10% ATK \| -10% SPA | Perfeito para monstros porradeiros. |
| **Modest (Modesto)** | +10% SPA \| -10% ATK | Perfeito para magos. |
| **Jolly (Alegre)** | +10% SPE \| -10% SPA | Crucial para Fast Sweepers. |

---

## 13. Habilidades Passivas (Abilities)

Todo espécime nasce com uma Passiva fixa atuando no background da batalha.

| Ability | Efeito |
|---------|--------|
| **Stoic** | Imune a mudanças de Status Majoritário. |
| **Stubborn** | Ao errar (Miss), ganha +25% de dano garantido no próximo ataque certeiro. |
| **Duelist** | Aumenta ATK e SpA em +25% contra inimigos de Tipo diferente. |
| **Domain Ruler** | Golpes do mesmo tipo (STAB) sobem +25% extra e ganham Precisão Perfeita. |
| **Second Strike** | Ataques batem duas vezes, mas com -50% de Poder Base. |
| **Thorns** | Inimigo que causa dano de contato perde -10% da vida total. |
| **Sense Danger** | 100% de Evasão garantida contra o 1º ataque de cada novo oponente. |
| **Weather Change** | Ao tomar dano elementar, copia a Tipagem recebida. |
| **Marksman** | Golpes ofensivos nunca erram. |
| **Solar Power** | Magias de Planta escalam: T1 (-25%), T2 (Normal), T3+ (+25%). |
| **Vampirism** | Cura +25% baseados no dano infligido. |
| **Intimidation** | Ao entrar, aplica debuff numérico de -25% no ATK/SpA do oponente. |
| **Trickster** | Magias de Suporte ganham Acc Perfeita e Prioridade máxima. |
| **Pacifist** | Sofre Metade (0.5x) do dano recebido até conseguir infligir dano. |
| **Blitzkrieg** | Seus movimentos sempre agem primeiro ignorando Speed. |
| **Royalty** | HP > 50% = Sofre 0.5x Dano. HP < 50% = Sofre 2.0x Dano. |

---

## 14. Experiência Não-Compartilhada

A EXP é dividida estritamente pelos Riftmons que participaram ativamente da batalha e terminaram vivos. Reservas recebem **0 XP**.

**Switch Training (Risco):** O fraco (Lv 1) entra contra o Chefe (Lv 30) no Turno 1. Não ataca, apenas faz Switch para o Tank. O Tank mata o Chefe. Ambos (Fraco e Tank) recebem 50% de XP astronômica. A tensão é o Hit-Kill no Turno 1.

---

## 15. Matemática da Captura (Esferas)

Motor calcula um **"Modified Catch Rate"** baseado em HP e Status.

$$
A = \frac{\left( 3 \times HP_{max} - 2 \times HP_{atual} \right) \times BaseRate \times BallBonus}{3 \times HP_{max}} \times StatusBonus
$$

| Condição | Resultado |
|----------|-----------|
| Se \( A \ge 255 \) | Captura 100% garantida. |
| Se menor | Divide-se o valor para criar 3 rolagens isoladas de RNG (as 3 sacudidas da esfera antes de travar). |

---

## 16. Climas & Terrenos (Weather Modifiers)

Alteram regras globais por exatos **5 Turnos**.

| Clima | Efeito |
|-------|--------|
| **Chuva (Rain)** | +50% dano Água. -50% dano Fogo. Trovão não falha. |
| **Sol Forte (Sun)** | +50% dano Fogo. -50% dano Água. Impossível Congelar. |
| **Tempestade de Areia** | 1/16 dano por turno (Ignora Pedra). +50% SpDEF na Rocha. |
| **Nevasca (Hail)** | 1/16 dano (Ignora Gelo). Curas restauram metade. |
| **Terrenos (Grama/Elétrico/Nevoeiro)** | Afetam quem toca o chão (ex: Terreno Elétrico anula Sono). |

---

## 17. Aprendizado de Golpes & TMs

| Regra | Descrição |
|-------|-----------|
| **Limite Físico** | Teto máximo de 4 Magias ativas. |
| **Fontes** | Level-Up, Discos TMs (Loot), Egg Moves (Berçário). |
| **O Tutor da Guilda (Move Relearner)** | O jogador entrega minério raro para reequipar magias apagadas por acidente ou esquecidas no passado sem custo de XP. |

---

## 18. Equipamentos em Batalha (Held Items)

Máximo de **1 Item Equipado** por Riftmon.

| Item | Efeito |
|------|--------|
| **Restos (Leftovers)** | Cura +1/16 HP máximo ao final da execução. |
| **Faixa Escolha (Choice Band)** | +50% Atk Físico, mas bloqueia menu forçando repetir o 1º golpe. |
| **Faixa de Foco (Focus Sash)** | Consumível. Impede Hit-Kill (Se 100% HP, segura em 1 HP). |
| **Fruta Sitrus (Sitrus Berry)** | Consumível. Cura +25% automaticamente se HP cair ≤ 50%. |
| **Orbe da Vida (Life Orb)** | +30% Dano infligido, rebote de -10% Max HP no usuário. |

---

## 19. Economia HUB (Lojas e Ouro)

| Sistema | Regra |
|---------|-------|
| **Loot** | Vender itens excedentes recupera 50% do valor. |
| **Wipe Penalty** | Morte da party e resgate retira -50% do fundo bancário. |
| **Mercador** | Estoque escalável (Poções → Suplementos → Curas Totais) conforme avança a Main Quest. |

---

## 20. Procriação e Herança Genética (Breeding)

A Senhora do Berçário no HUB cruza monstros para mesclar golpes poderosos ou repovoar a PC Box (Nuzlocke).

| Sistema | Regra |
|---------|-------|
| **Egg Group** | Macho + Fêmea devem ter o mesmo grupo morfológico. |
| **Herança** | Mãe cede a forma física. Pai cede "Egg Moves". Pedra Eterna na mãe trava a Natureza. |
| **Incubação** | Ovo ocupa 1 Slot. Choca via ciclos de passos andados exclusivamente dentro dos grids da Dungeon. |

---

## 21. Evolução Sistêmica (Nível/Gatilhos)

Evolução engatilha no pós-luta se `current_lvl >= trigger_lvl`.

**Bloqueio Tático (Botão "B"):** Pressionar cancelar aborta a mutação. Formas não-evoluídas possuem curva de aprendizado acelerada (aprendem golpes letais muitos níveis antes das formas adultas). O jogador abdica poder de Base Stat por moveset precoce.

---

## 22. Mutações Complexas

| Tipo | Regra |
|------|-------|
| **Pedras de Afinidade** | Evolução via item do Hub. Penalidade: Formas pedras têm array de learnset travado (não aprendem mais nada por Level Up). |
| **Afinidade Noturna** | Exige bater felicidade e subir de nível apenas durante a noite (Clock do SO). |
| **Condicionamento** | Trocar itens de inventário ao engatilhar level up. |

---

## 23. Apêndice A: Dicionário de Itens Globais

| Categoria | ID Visual | Ação no Script | Valor (G) |
|-----------|-----------|----------------|-----------|
| Curativo | Poção Comum | Soma HP 20 | 300 |
| Curativo | Super Poção | Soma HP 50 | 700 |
| Curativo | Hiper Poção | Preenche HP 100% | 2500 |
| Limpeza | Full Heal | Expurga Enums de Status | 600 |
| Captura | Esfera Base | Modificador x1 | 200 |
| Captura | Esfera Avançada | Modificador x1.5 | 600 |
| Captura | Master Sphere | Catch = True, bypass 100% | Drop Raro |
| Transp. | Corda Arcana | Teleporte p/ Spawn do HUB | 500 |

---

## 24. Apêndice B: Movepool (49 Habilidades)

*(Amostra estrutural — A lista completa engloba 49 movimentos balanceados).*

| Move | Tipo | Cat | BP | Efeito Engine | Acc |
|------|------|-----|----|---------------|-----|
| Prime Power | NORMAL | Suporte | - | Buffa todos os status em +10% | 100% |
| Burning Charge | FOGO | Físico | 70 | 10% Recuo, 10% chance Burn | 100% |
| Overheat Strike | FOGO | Físico | 110 | Usuário perde próximo turno. Dano x2 se alvo tem Burn | 100% |
| Torrential Slash | ÁGUA | Físico | 60 | Inimigo forçado a Switch | 100% |
| Tornado Prison | AR | Especial | 90 | Alvo perde turno (Flinch) | 50% |
| Earth's Will | ROCHA | Especial | 80 | 30% chance buffar DEF e SpDEF +25% | 80% |
| Absolute Zero | GELO | Especial | 100 | 20% chance Flinch | 80% |
| Sun Cannon | PLANTA | Especial | 100 | Acumula Dano +50% se usado em cadeia | 100% |
| Zeus's Thunder | ELÉT | Especial | 150 | 10% chance Paralisar | 80% |

---

## 25. Apêndice C: O Roster Oficial (70 Registros Base)

*(Amostra dos Estágios 1, 2, 3 e Deuses. Total de 70).*

**Curva BST:** Base ~318 → Stage 2 ~405 → Final ~530 → Deuses 680.

| ID | Nome | Tipo | HP | ATK | DEF | SPA | SPD | SPE | Total |
|----|------|------|----|-----|-----|-----|-----|-----|-------|
| #001 | Hellhound | FOGO | 45 | 60 | 40 | 65 | 45 | 63 | 318 |
| #002 | Twinflame | FOGO | 60 | 75 | 55 | 85 | 60 | 70 | 405 |
| #003 | Emberus | FOGO | 80 | 95 | 75 | 115 | 80 | 85 | 530 |
| #019 | Sunseed | PLANTA | 45 | 50 | 50 | 60 | 60 | 53 | 318 |
| #028 | Lakezard | ÁGUA | 50 | 55 | 50 | 60 | 50 | 53 | 318 |
| #064 | Dragoon | FOGO | 105 | 130 | 100 | 150 | 100 | 95 | 680 |
| #066 | Yggdrasil | PLANTA | 150 | 90 | 130 | 100 | 150 | 60 | 680 |

---

## 26. Apêndice D: Tabela de Vantagens e Fraquezas

Matriz de Multiplicadores de Dano (Atacante na linha → Defensor na Coluna).

| ATK \ DEF | 🔥 Fogo | 💨 Ar | 🍃 Planta | 💧 Água | 🧱 Pedra | ⚡ Elétrico | 🧊 Gelo |
|-----------|---------|-------|-----------|---------|----------|-------------|---------|
| 🔥 Fogo | 0.5x | 1x | 2x | 0.5x | 0.5x | 1x | 2x |
| 💨 Ar | 1x | 1x | 2x | 1x | 0.5x | 0.5x | 0.5x |
| 🍃 Planta | 0.5x | 0.5x | 0.5x | 2x | 2x | 1x | 0.5x |
| 💧 Água | 2x | 1x | 0.5x | 0.5x | 2x | 0.5x | 1x |
| 🧱 Pedra | 2x | 2x | 0.5x | 0.5x | 1x | 1x | 2x |
| ⚡ Elétrico | 1x | 2x | 1x | 2x | 0.5x | 0.5x | 1x |
| 🧊 Gelo | 0.5x | 2x | 2x | 1x | 0.5x | 1x | 0.5x |

---

## 27. Apêndice E: Diretório de NPCs da Guilda (HUB)

O núcleo de progressão gerenciado por NPCs estacionários.

| NPC | Função |
|-----|--------|
| **Mestre da Guilda** | Emissor de Main Quests. Entrega prêmios lendo a Pokédex. |
| **Mercador** | Loja de consumíveis baseada na ProgressionFlag. |
| **Mestre de Treino** | Comercializa Suplementos (Vitaminas EV). |
| **O Reaprendedor** | Permite consultar array de `old_moves` cobrando moedas. |
| **Lady Berçário** | Daycare de ovos, validação de EggGroups. |
| **Enfermeira Chefe** | Cura e salva `checkpoint_spawn` em caso de Wipe. |

---

## 28. Apêndice F: Engine Data, Save e Wipe

| Sistema | Regra |
|---------|-------|
| **Save Profile JSON Core** | Grava Party Array, PC Box (Normais e Cemitério), Gold, Dicionário de Lock de Encounter e Pokedex Array. |
| **Wipe & Prevenção** | No Hardcore Nuzlocke, o botão manual "Save Game" é desativado nas Dungeons. Auto-Save imediato engatilha nos eventos de Morte, Captura e Troca de Cenários (Inibe Save Scumming). |

---

## 29. Apêndice G: O Codex (Guia do Aventureiro)

Painel UI liberado no tutorial para reter o jogador sem uso de Wikis.

| Sistema | Regra |
|---------|-------|
| **Glossário de Combate** | Desbloqueia a leitura e penalidade matemática de Passivas e Status sempre que elas acontecem na tela do player pela 1ª vez. |
| **Matriz Dinâmica** | A Célula "Fogo → Pedra" do Codex só é preenchida após o jogador testar o golpe no jogo e a engine processar resistência. Mini-Game de Dedução. |

---

## 30. Apêndice H: Sistema de Quests e Recompensas

O Motor Narrativo que dá propósito à exploração Roguelite.

| Tipo | Descrição |
|------|-----------|
| **Main Quests** | Ditadas pelo Mestre. Libertam avanço para novos biomas bloqueados. |
| **Caças (Bounties)** | "Mate 10 Heatruns". Geram ouro recorrente para manter suprimentos da run. |
| **Fator Roguelite** | Andares resetam spawns, permitindo que o player farme gold em low-level sem arriscar o wipe das áreas High-Level. |
