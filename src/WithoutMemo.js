import React, { useState, useEffect, useRef, useCallback } from 'react'

function ExpensiveComputation({ name }) {
  console.log(`Computing reversed name for "${name}" (Without Memo)`)
  let startTime = performance.now()
  while (performance.now() - startTime < 100) {
    // Artificial delay to simulate expensive computation
  }
  return name.split('').reverse().join('')
}

export function WithoutMemo() {
  const [name, setName] = useState('')
  const [, forceUpdate] = useState()
  const renderCount = useRef(0)
  const computeCount = useRef(0)

  const expensiveComputation = (() => {
    computeCount.current++
    console.log(
      `Computation performed ${computeCount.current} times (Without Memo)`
    )
    return ExpensiveComputation({ name })
  })()

  useEffect(() => {
    renderCount.current += 1
    console.log(
      `Component rendered ${renderCount.current} times (Without Memo)`
    )
  })

  const handleNameChange = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const forceRender = useCallback(() => {
    console.log('Force render (Without Memo)')
    forceUpdate({})
  }, [])

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Example without useMemo</h3>
      <input
        value={name}
        onChange={handleNameChange}
        placeholder="Enter a name to reverse"
      />
      <button onClick={forceRender}>Force Render</button>
      <p>Reversed name: {expensiveComputation}</p>
      <p>Render count: {renderCount.current}</p>
      <p>Compute count: {computeCount.current}</p>
    </div>
  )
}
