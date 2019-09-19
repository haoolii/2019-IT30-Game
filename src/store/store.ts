import { reducer, createStore } from "@/store/index";

let store = createStore(reducer, { chip: '1000', balance: 99999 })

export default store