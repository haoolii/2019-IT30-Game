import { createStore, Action } from './redux'

function reducer(state: any, action: Action) {
  if (action.type === 'UPDATE_CHOOSE_CHIP') return Object.assign(state, { chip: action.payload.chip });
  if (action.type === 'UPDATE_USER_BALANCE') return Object.assign(state, { balance: action.payload.balance });
  return state
}

const store = createStore(reducer, {
  chip: '1000',
  balance: 0
})


export default store