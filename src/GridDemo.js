import React from 'react'
import { Layout, Typography, Row, Col, Tooltip } from 'antd'

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

const GridDemo = () => {
  const colStyle = {
    padding: '20px',
    border: '1px solid #000',
    textAlign: 'center',
    fontWeight: 'bold'
  }

  const slotStyle = {
    height: '80px',
    backgroundColor: '#f0f2f5',
    border: '1px dashed #1890ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '10px',
    color: '#1890ff',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s'
  }

  // Generate 24 slots for a single row
  const generateGridSlots = (rowNumber) =>
    Array(24)
      .fill()
      .map((_, index) => (
        <Col key={`${rowNumber}-${index}`} span={1}>
          <Tooltip title={`Row ${rowNumber}, Column ${index + 1}`}>
            <div
              style={slotStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1890ff'
                e.target.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f0f2f5'
                e.target.style.color = '#1890ff'
              }}
            >
              R{rowNumber} C{index + 1}
            </div>
          </Tooltip>
        </Col>
      ))

  return (
    <Layout>
      <Header style={{ backgroundColor: '#1890ff', padding: '0 16px' }}>
        <Title level={3} style={{ color: 'white', margin: '14px 0' }}>
          Ant Design Grid Demo
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Title level={4}>24-Column Grid System (2 Rows)</Title>
            <Text>
              Hover over each slot to see how UI components can fit into the
              grid.
            </Text>
            <Row style={{ marginTop: '20px' }}>{generateGridSlots(1)}</Row>
            <Row style={{ marginTop: '10px' }}>{generateGridSlots(2)}</Row>
          </Col>

          {/* Existing sections remain unchanged */}
          <Col span={24}>
            <Title level={4}>1. Basic Grid</Title>
            <Row gutter={16}>
              <Col span={8}>
                <div style={{ ...colStyle, backgroundColor: '#ff4d4f' }}>
                  Column 1
                </div>
              </Col>
              <Col span={8}>
                <div style={{ ...colStyle, backgroundColor: '#fff566' }}>
                  Column 2
                </div>
              </Col>
              <Col span={8}>
                <div style={{ ...colStyle, backgroundColor: '#95de64' }}>
                  Column 3
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Title level={4}>2. Gutter</Title>
            <Row
              gutter={[32, 16]}
              style={{ backgroundColor: '#e6f7ff', padding: '20px' }}
            >
              <Col span={6}>
                <div style={{ ...colStyle, backgroundColor: '#69c0ff' }}>
                  Col-6
                </div>
              </Col>
              <Col span={6}>
                <div style={{ ...colStyle, backgroundColor: '#40a9ff' }}>
                  Col-6
                </div>
              </Col>
              <Col span={6}>
                <div style={{ ...colStyle, backgroundColor: '#096dd9' }}>
                  Col-6
                </div>
              </Col>
              <Col span={6}>
                <div style={{ ...colStyle, backgroundColor: '#0050b3' }}>
                  Col-6
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Title level={4}>3. Offset</Title>
            <Row style={{ backgroundColor: '#f6ffed', padding: '20px' }}>
              <Col span={8}>
                <div style={{ ...colStyle, backgroundColor: '#b7eb8f' }}>
                  Col-8
                </div>
              </Col>
              <Col span={8} offset={8}>
                <div style={{ ...colStyle, backgroundColor: '#73d13d' }}>
                  Col-8 Offset-8
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Title level={4}>4. Flex Layout</Title>
            <Row
              style={{ backgroundColor: '#fff2e8', padding: '20px' }}
              justify="space-between"
              align="middle"
            >
              <Col span={4}>
                <div
                  style={{
                    ...colStyle,
                    height: '60px',
                    backgroundColor: '#ffd591'
                  }}
                >
                  Col-4
                </div>
              </Col>
              <Col span={4}>
                <div
                  style={{
                    ...colStyle,
                    height: '100px',
                    backgroundColor: '#ffa940'
                  }}
                >
                  Col-4
                </div>
              </Col>
              <Col span={4}>
                <div
                  style={{
                    ...colStyle,
                    height: '80px',
                    backgroundColor: '#fa8c16'
                  }}
                >
                  Col-4
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Title level={4}>5. Responsive Layout</Title>
            <Row
              gutter={16}
              style={{ backgroundColor: '#f9f0ff', padding: '20px' }}
            >
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={{ ...colStyle, backgroundColor: '#d3adf7' }}>
                  Col
                </div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={{ ...colStyle, backgroundColor: '#b37feb' }}>
                  Col
                </div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={{ ...colStyle, backgroundColor: '#9254de' }}>
                  Col
                </div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={{ ...colStyle, backgroundColor: '#722ed1' }}>
                  Col
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#001529' }}>
        <Text style={{ color: 'white' }}>
          Ant Design ©2023 Created by Ant UED
        </Text>
      </Footer>
    </Layout>
  )
}

export default GridDemo
