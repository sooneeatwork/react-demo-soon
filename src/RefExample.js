import React, { useRef } from 'react'
import { useLogger } from './UseLogger'

export function RefExample() {
  const logRef = useLogger('useRef')
  const inputRef = useRef(null)
  logRef(`inputRef: ${inputRef.current}`)

  return (
    <div REF={inputRef}>
      <h3>useRef</h3>
      <input ref={inputRef} placeholder="Focus me!" />
      <button
        onClick={() => {
          logRef('focusing input')
          inputRef.current.focus()
        }}
      >
        Focus the input
      </button>
    </div>
  )
}
