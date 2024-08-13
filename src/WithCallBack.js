import React, { useState, useCallback, useEffect } from 'react'

export function WithCallback() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo'])
  }, [])

  useEffect(() => {
    console.log('WithCallback: addTodo function reference:', addTodo)
  }, [addTodo])

  console.log('WithCallback: Component rendered')

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>With useCallback</h2>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={increment}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Todos: {todos.length}</p>
    </div>
  )
}
