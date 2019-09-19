export interface Action {
  type: string,
  payload?: any
}

export interface Store {
  getState: Function,
  dispatch(action: Action): void,
  subscribe(listener: Function): Function,
  replaceReducer(newReducer: Function): void
}

export function createStore(initialReducer: Function, initalState = {}, enhancer?: Function): Store {
  if (enhancer) {
    return enhancer(createStore)(initialReducer, initalState)
  }
  let reducer = initialReducer
  let subscribes: Array<Function> = []
  let state = reducer(initalState, { type: '__INIT__' })
  return {
    getState() {
      return state
    },
    dispatch(action: Action): void {
      state = reducer(state, action)
      subscribes.forEach(subscriber => subscriber())
    },
    subscribe(listener: Function): Function {
      subscribes.push(listener)
      return () => {
        subscribes = subscribes.filter(subscriber => subscriber !== listener)
      }
    },
    replaceReducer(newReducer: Function): void {
      reducer = newReducer
      this.dispatch({ type: '__REPLACE__' })
    }
  }
}


/*
function enhancer() {
  return createStore => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState)
    function dispatch(action) {
      const res = store.dispatch(action);
      const newState = store.getState();
      return res;
    }
    return {...store, dispatch}
  }
}
*/