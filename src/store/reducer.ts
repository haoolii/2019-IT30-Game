import { UPDATE_BALANCE, UPDATE_CHIP, Action } from './actions'

function reducer(state = {}, action: Action) {
  switch (action.type) {
    case UPDATE_BALANCE:
      return Object.assign({}, state, { balance: action.payload.balance })
    case UPDATE_CHIP:
      return Object.assign({}, state, { chip: action.payload.chip })
    default:
      return state
  }
}

export default reducer