import { useCallback, useEffect, useRef } from 'react'

export function useLogger(hookName) {
  const isFirstRender = useRef(true)
  const hasLoggedDescription = useRef(false)

  const log = useCallback(
    (message) => {
      const timestamp = new Date().toISOString().substr(11, 12)
      console.log(
        `%c[${timestamp}] ${hookName}:`,
        'color: #00008b; font-weight: bold',
        message
      )
    },
    [hookName]
  )

  if (
    isFirstRender.current &&
    !hasLoggedDescription.current &&
    hookName === 'Component'
  ) {
    console.log(
      `
%cFirst page load description:
"Component Rendering" appears twice because of StrictMode's double-render in development.

useState: Initial name state is an empty string.
useRef: The ref object is created but not yet attached to any DOM element.
useReducer: Initial count state is 0.
useCallback: The memoized function is created.
useMemo: The expensive computation runs, but with an empty name, so the result is also empty.
useContext: The initial context value 'light' is logged.
useEffect: Runs after the render is complete. Sets the document title, then immediately cleans up and re-runs.
    `,
      'color: #4CAF50; font-weight: bold'
    )

    hasLoggedDescription.current = true
  }

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  return log
}
