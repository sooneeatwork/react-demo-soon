import React, { useState } from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Table,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Tabs,
  Steps,
  Card,
  Modal,
  message,
  Calendar
} from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout
const { Option } = Select
const { TabPane } = Tabs
const { Step } = Steps

export function AdminPanel() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [selectedMenuItem, setSelectedMenuItem] = useState('1')

  // Extended mock data for the table
  const dataSource = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      email: 'john@example.com',
      role: 'Admin'
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Bridge Street',
      email: 'jim@example.com',
      role: 'User'
    },
    {
      key: 3,
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 York Street',
      email: 'joe@example.com',
      role: 'User'
    },
    {
      key: 4,
      name: 'Jim Red',
      age: 28,
      address: 'London No. 2 Bridge Street',
      email: 'jimred@example.com',
      role: 'Guest'
    },
    {
      key: 5,
      name: 'Jake White',
      age: 35,
      address: 'New York No. 2 River Road',
      email: 'jake@example.com',
      role: 'Admin'
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'User', value: 'User' },
        { text: 'Guest', value: 'Guest' }
      ],
      onFilter: (value, record) => record.role === value
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            danger
          >
            Delete
          </Button>
        </>
      )
    }
  ]

  const handleEdit = (record) => {
    form.setFieldsValue(record)
    setIsModalVisible(true)
  }

  const handleDelete = (record) => {
    message.success(`Deleted ${record.name}`)
  }

  const onFinish = (values) => {
    console.log('Form values:', values)
    message.success('Form submitted successfully')
    setIsModalVisible(false)
  }

  const next = () => {
    setCurrentStep(currentStep + 1)
  }

  const prev = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key)
  }

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return (
          <Tabs defaultActiveKey="1">
            <TabPane tab="User List" key="1">
              <Button
                icon={<PlusOutlined />}
                onClick={() => setIsModalVisible(true)}
                style={{ marginBottom: 16 }}
              >
                Add User
              </Button>
              <Table dataSource={dataSource} columns={columns} />
            </TabPane>
            <TabPane tab="User Wizard" key="2">
              <Steps current={currentStep}>
                <Step title="Basic Info" description="Name and email" />
                <Step title="Contact" description="Phone and address" />
                <Step title="Confirm" description="Review information" />
              </Steps>
              {/* ... (wizard content remains the same) ... */}
            </TabPane>
          </Tabs>
        )
      case '4':
        return <h2>Posts Management</h2>
      case '5':
        return <h2>Pages Management</h2>
      case '6':
        return (
          <div>
            <h2>Calendar</h2>
            <Calendar />
          </div>
        )
      default:
        return <h2>Content for menu item {selectedMenuItem}</h2>
    }
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Admin</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleMenuClick}
          >
            <Menu.SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="User Management"
            >
              <Menu.Item key="1">Users</Menu.Item>
              <Menu.Item key="2">Roles</Menu.Item>
              <Menu.Item key="3">Permissions</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub2"
              icon={<LaptopOutlined />}
              title="Content Management"
            >
              <Menu.Item key="4">Posts</Menu.Item>
              <Menu.Item key="5">Pages</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Notifications"
            >
              <Menu.Item key="6">Calendar</Menu.Item>
              <Menu.Item key="7">SMS</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>

      <Modal
        title="User Form"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, type: 'number' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="birthdate" label="Birth Date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="role" label="Role">
            <Select>
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
              <Option value="guest">Guest</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  )
}
