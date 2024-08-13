import React from 'react'

//export const ThemeContext = React.createContext(null)

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
})
