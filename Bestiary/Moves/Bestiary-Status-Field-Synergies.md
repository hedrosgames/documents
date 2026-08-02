# Bestiary — Status, Field & Synergies

## Why status exists

Status moves pay for their turn by **arming** a state that makes a later damage move clearly stronger (×1.5+, skip charge, or KO breakpoint change). Weak −1 cosmetic effects are rejected.

## Ailments

| Id | Effect | Immunity |
| --- | --- | --- |
| Burn | ~1/16 DoT + physical Atk ×0.5 | Fire |
| Poison | ~1/8 DoT | — |
| Paralysis | Spe ×0.5 (no full turn-skip RNG) | Electric |
| Sleep | Skip actions 1–2 turns | — |
| Freeze | Skip until thaw (~70%/turn) | Ice |
| Bind | ~1/16 chip (+ anti-flee later) | Plant |

## Weather

| Id | Role |
| --- | --- |
| Rain | Water charge skip / Water amps |
| Sun | Fire charge skip / Fire amps |
| Sandstorm | Rock synergies |
| Snow | Ice synergies |

Duration default: 5 turns. One weather at a time.

## Stages / utility

- Setup: +2 (or +1/+1 compound)
- Disrupt: foe −2
- Protect: escalating fail if repeated
- Heal: 40–50% max HP
- Haze: clear stages both sides

## Synergies (on damage moves)

`when`: weather / foeAilment / selfAilment / selfStage  
`apply`: damageMultiplier (≥1.5) | skipChargeTurn | extraPower

Examples:

- Rain + charged Water move → `skipChargeTurn`
- Foe Poison + finisher → `damageMultiplier: 3`
- Foe Burn + execute → `damageMultiplier: 2`

## Runtime (implemented)

- Domain: `AilmentId`, `WeatherId`, `MoveEffectSpec`, `MoveSynergySpec`
- `BeastMoveDefinition`: `moveId`, `chargeTurns`, `effects`, `synergies`
- `BeastInstance`: stages, ailment, protect, charge
- `BattleFieldState` + `SynergyResolver` + `MoveEffectResolver`
- `BattleSession` / `DamageCalculator` apply field + synergies

## Out of scope here

Battle AI move scoring (separate feature).
Hazards/screens full system (v2).
