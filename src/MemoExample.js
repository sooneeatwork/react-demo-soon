import React, { useState, useMemo, useEffect } from 'react'

const expensiveCalculation = (num) => {
  console.log('Calculating...')
  for (let i = 0; i < 1000000000; i++) {
    num += 1
  }
  return num
}

export function WithMemo() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const calculation = useMemo(() => {
    console.log('WithMemo: Performing expensive calculation')
    return expensiveCalculation(count)
  }, [count])

  useEffect(() => {
    console.log('WithMemo: Component rendered')
  })

  const increment = () => {
    console.log('WithMemo: Incrementing count')
    setCount((c) => c + 1)
  }
  const addTodo = () => {
    console.log('WithMemo: Adding todo')
    setTodos((t) => [...t, 'New Todo'])
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>With useMemo</h2>
      <div>
        <h3>My Todos</h3>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h3>Expensive Calculation</h3>
        {calculation}
      </div>
    </div>
  )
}

export function WithoutMemo() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const calculation = (() => {
    console.log('WithoutMemo: Performing expensive calculation')
    return expensiveCalculation(count)
  })()

  useEffect(() => {
    console.log('WithoutMemo: Component rendered')
  })

  const increment = () => {
    console.log('WithoutMemo: Incrementing count')
    setCount((c) => c + 1)
  }
  const addTodo = () => {
    console.log('WithoutMemo: Adding todo')
    setTodos((t) => [...t, 'New Todo'])
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Without useMemo</h2>
      <div>
        <h3>My Todos</h3>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h3>Expensive Calculation</h3>
        {calculation}
      </div>
    </div>
  )
}

export function MemoExample() {
  return (
    <div>
      <WithMemo />
      <WithoutMemo />
    </div>
  )
}
