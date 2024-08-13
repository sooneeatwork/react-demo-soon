import React, { useState, useEffect } from 'react'

export function Withoutcallback() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo'])
  }

  useEffect(() => {
    console.log('WithoutCallback: addTodo function reference:', addTodo)
  }, [addTodo])

  console.log('WithoutCallback: Component rendered')

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Without useCallback</h2>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={increment}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Todos: {todos.length}</p>
    </div>
  )
}
