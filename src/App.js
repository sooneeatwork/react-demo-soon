import React, { useState } from 'react'
import './App.css'
import { StateEffectExample } from './StateEffectExample'
import { RefExample } from './RefExample'
import { ReducerExample } from './ReducerExample'
import { CallbackExample } from './CallbackExample'
import { MemoExample } from './MemoExample'
import { ContextExample } from './ContextExample'
import { useLogger } from './UseLogger'
import { ThemeContext } from './ThemeContext'
import { UserList } from './UserList'
import { AdminPanel } from './AdminPanel'
import { ConfigProvider, Button, Space } from 'antd'
import FlexDemo from './FlexDemo' // Import the FlexDemo
import GridDemo from './GridDemo' // Import the GridDemo

function App() {
  const logComponent = useLogger('Component')

  const [theme, setTheme] = useState('light')
  const [showStateEffect, setShowStateEffect] = useState(true)
  const [showFlexDemo, setShowFlexDemo] = useState(false)
  const [showGridDemo, setShowGridDemo] = useState(false)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  logComponent('Rendering')

  return (
    <ConfigProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`App ${theme}`}>
          <header className="App-header">
            <Space direction="vertical" size="middle">
              <Button onClick={() => setShowStateEffect(!showStateEffect)}>
                {showStateEffect ? 'Hide' : 'Show'} State & Effect Example
              </Button>
              <Button onClick={() => setShowFlexDemo(!showFlexDemo)}>
                {showFlexDemo ? 'Hide' : 'Show'} Flex Demo
              </Button>
              <Button onClick={() => setShowGridDemo(!showGridDemo)}>
                {showGridDemo ? 'Hide' : 'Show'} Grid Demo
              </Button>
            </Space>

            {showStateEffect && <StateEffectExample />}
            {showFlexDemo && <FlexDemo />}
            {showGridDemo && <GridDemo />}

            <RefExample />
            <ReducerExample />
            <CallbackExample />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%'
              }}
            >
              <MemoExample />
            </div>
            <ContextExample />
            <UserList />
          </header>

          <AdminPanel />
        </div>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export default App
