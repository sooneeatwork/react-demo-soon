import React, { useReducer } from 'react'
import { useLogger } from './UseLogger'

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export function ReducerExample() {
  const logReducer = useLogger('useReducer')
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  logReducer(`current count: ${state.count}`)

  return (
    <div>
      <h3>useReducer</h3>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          logReducer('incrementing count')
          dispatch({ type: 'INCREMENT' })
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          logReducer('decrementing count')
          dispatch({ type: 'DECREMENT' })
        }}
      >
        -
      </button>
    </div>
  )
}
