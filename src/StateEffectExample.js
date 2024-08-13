import React, { useState, useEffect } from 'react'
import { useLogger } from './UseLogger'

export function StateEffectExample() {
  // Custom loggers for useState and useEffect
  const logState = useLogger('useState')
  const logEffect = useLogger('useEffect')

  // useState hook to manage the 'name' state
  const [name, setName] = useState('')
  logState(`State updated: current name is "${name}"`)

  // useEffect hook for side effects
  useEffect(() => {
    // This function runs after every render where 'name' or 'logEffect' has changed
    logEffect(`Effect running. Title will be set to "Hello, ${name}"`)

    // Side effect: Update the document title
    document.title = `Hello, ${name}`

    // Cleanup function (optional)
    return () => {
      // This runs before the next effect or when the component unmounts
      logEffect(`Effect cleanup. Title will be reset to "React App"`)
      document.title = 'Clean Up'
    }
  }, [name, logEffect])
  // Dependency array: effect runs when these values change
  // Including logEffect ensures we always use the latest version of the function

  return (
    <div>
      <h3>useState & useEffect</h3>
      <input
        value={name}
        onChange={(e) => {
          const newName = e.target.value
          // Log and update state when input changes
          logState(`Input changed. Name will update to "${newName}"`)
          setName(newName)
        }}
        placeholder="Enter your name"
      />
      <p>Hello, {name}</p>
    </div>
  )
}
