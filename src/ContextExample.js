import React, { useContext } from 'react'
import { useLogger } from './UseLogger'
import { ThemeContext } from './ThemeContext'

export function ContextExample() {
  const logContext = useLogger('useContext')
  const { theme, toggleTheme } = useContext(ThemeContext)

  logContext(`current theme: ${theme}`)

  return (
    <div>
      <h3>useContext</h3>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
