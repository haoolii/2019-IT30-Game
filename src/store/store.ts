import { reducer, createStore } from '@/store/index'

let store = createStore(reducer, {
  chip: '1000',
  balance: 99999,
  betChip: {
    banker: 0,
    player: 0,
    bankerking: 0,
    playerking: 0,
    tie: 0,
    tiepair: 0,
    bpair: 0,
    ppair: 0
  }
})

export default store
