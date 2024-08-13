import React, { useState } from 'react'
import { Layout, Typography, Flex, Radio, Slider, Card, Switch } from 'antd'

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

const FlexDemo = () => {
  const [direction, setDirection] = useState('row')
  const [justify, setJustify] = useState('flex-start')
  const [align, setAlign] = useState('flex-start')
  const [enableGrow, setEnableGrow] = useState(false)

  const boxStyle = {
    width: '80px',
    height: '80px',
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    transition: 'all 0.3s'
  }

  const flexContainerStyle = {
    backgroundColor: '#f0f2f5',
    border: '1px dashed #1890ff',
    padding: '20px',
    minHeight: '200px',
    transition: 'all 0.3s'
  }

  const items = ['1', '2', '3', '4']

  return (
    <Layout>
      <Header style={{ backgroundColor: '#1890ff', padding: '0 16px' }}>
        <Title level={3} style={{ color: 'white', margin: '14px 0' }}>
          Ant Design Flex Demo
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Card title="Flex Container Controls" style={{ marginBottom: '20px' }}>
          <Flex gap="middle" vertical>
            <div>
              <Text>Direction (Primary Axis):</Text>
              <Radio.Group
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              >
                <Radio.Button value="row">Horizontal</Radio.Button>
                <Radio.Button value="column">Vertical</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Text>Justify (Along Primary Axis):</Text>
              <Radio.Group
                value={justify}
                onChange={(e) => setJustify(e.target.value)}
              >
                <Radio.Button value="flex-start">Start</Radio.Button>
                <Radio.Button value="center">Center</Radio.Button>
                <Radio.Button value="flex-end">End</Radio.Button>
                <Radio.Button value="space-between">Space Between</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Text>Align (Cross Axis):</Text>
              <Radio.Group
                value={align}
                onChange={(e) => setAlign(e.target.value)}
              >
                <Radio.Button value="flex-start">Start</Radio.Button>
                <Radio.Button value="center">Center</Radio.Button>
                <Radio.Button value="flex-end">End</Radio.Button>
                <Radio.Button value="stretch">Stretch</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Text>Enable Grow:</Text>
              <Switch checked={enableGrow} onChange={setEnableGrow} />
            </div>
          </Flex>
        </Card>

        <Card title="Flex Container Demo">
          <Flex
            style={{
              ...flexContainerStyle,
              flexDirection: direction
            }}
            justify={justify}
            align={align}
          >
            {items.map((item, index) => (
              <div
                key={item}
                style={{
                  ...boxStyle,
                  backgroundColor: `hsl(${index * 60}, 70%, 80%)`,
                  flexGrow: enableGrow ? 1 : 0
                }}
              >
                {item}
              </div>
            ))}
          </Flex>
        </Card>

        <Card title="Flex Explanation" style={{ marginTop: '20px' }}>
          <ul>
            <li>
              <strong>Flexible Structure:</strong> Items can stretch or shrink
              within the container.
            </li>
            <li>
              <strong>Dynamic Sizing:</strong> Enable "Grow" to see items expand
              to fill space.
            </li>
            <li>
              <strong>Alignment Control:</strong> Use "Justify" and "Align" to
              position items.
            </li>
            <li>
              <strong>Direction Control:</strong> Switch between horizontal and
              vertical layouts.
            </li>
            <li>
              <strong>Space Distribution:</strong> "Space Between" shows
              automatic spacing adjustment.
            </li>
          </ul>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#001529' }}>
        <Text style={{ color: 'white' }}>
          Ant Design ©2023 Created by Ant UED
        </Text>
      </Footer>
    </Layout>
  )
}

export default FlexDemo
