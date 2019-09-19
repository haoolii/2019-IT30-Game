import chipType from '@/config/chipType'
export interface Action {
  type: string,
  payload: any
}

export interface chipPayload {
  chip: keyof typeof chipType
}

export interface balancePayload {
  balance: Number
}
/*
 * action type
 */

export const UPDATE_BALANCE = 'UPDATE_BALANCE'
export const UPDATE_CHIP = 'UPDATE_CHIP'
export const INIT = 'INIT'

/*
 * action creator
 */

export function updateBalance(payload: balancePayload) {
  return { type: UPDATE_BALANCE, payload }
}

export function updateChip(payload: chipPayload) {
  return { type: UPDATE_CHIP, payload }
}

export function init() {
  return { type: INIT }
}
