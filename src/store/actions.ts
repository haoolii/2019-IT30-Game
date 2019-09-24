import chipType from '@/config/chipType'
export interface Action {
  type: string
  payload: any
}

export interface chipPayload {
  chip: keyof typeof chipType
}

export interface balancePayload {
  balance: Number
}

export interface betChipPayload {
  betChip: Object
}
/*
 * action type
 */

export const UPDATE_BALANCE = 'UPDATE_BALANCE'
export const UPDATE_BET_CHIP = 'UPDATE_BET_CHIP'
export const UPDATE_CHIP = 'UPDATE_CHIP'
export const INIT = 'INIT'

/*
 * action creator
 */

export function updateBalance(payload: balancePayload) {
  return { type: UPDATE_BALANCE, payload }
}

export function updateBetChip(payload: betChipPayload) {
  return { type: UPDATE_BET_CHIP, payload }
}

export function updateChip(payload: chipPayload) {
  return { type: UPDATE_CHIP, payload }
}

export function init() {
  return { type: INIT }
}
