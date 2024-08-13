import React, { useState, useTransition } from 'react'
import { Button, message, Switch, Typography, Space } from 'antd'
import * as originalService from './userService'
import * as axiosService from './userServiceAxios'
import UserTable from './UserTable'
import UserForm from './UserForm'

const { Title, Text } = Typography

const initialUserState = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: { lat: '', lng: '' }
  },
  company: { name: '', catchPhrase: '', bs: '' }
}

export function UserList() {
  const [users, setUsers] = useState([])
  const [isPending, startTransition] = useTransition()
  const [useAxios, setUseAxios] = useState(false)
  const [newUser, setNewUser] = useState(initialUserState)
  const [editUser, setEditUser] = useState({ id: null, ...initialUserState })

  const service = useAxios ? axiosService : originalService

  const handleFetchUsers = () => {
    startTransition(async () => {
      try {
        const data = await service.fetchUsers()
        setUsers(data)
        message.success('Users fetched successfully')
      } catch (error) {
        message.error(error.message)
      }
    })
  }

  const handleCreateUser = async (values) => {
    try {
      const createdUser = await service.createUser(values)
      setUsers([...users, createdUser])
      setNewUser(initialUserState)
      message.success('User created successfully')
    } catch (error) {
      message.error(error.message)
    }
  }

  const handleUpdateUser = async (values) => {
    if (!editUser.id) return
    try {
      const updatedUser = await service.updateUser(editUser.id, values)
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      )
      setEditUser({ ...initialUserState })
      message.success('User updated successfully')
    } catch (error) {
      message.error(error.message)
    }
  }

  const handleEditUser = (user) => {
    setEditUser({ ...user })
  }

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title>User List</Title>

      <Space>
        <Switch
          checked={useAxios}
          onChange={setUseAxios}
          checkedChildren="Axios"
          unCheckedChildren="Original"
        />
        <Text>Currently using: {useAxios ? 'Axios' : 'Original'} service</Text>
      </Space>

      <Button onClick={handleFetchUsers} loading={isPending} type="primary">
        Fetch Users
      </Button>

      <Title level={2}>Create New User</Title>
      <UserForm onSubmit={handleCreateUser} initialValues={newUser} />

      <Title level={2}>Edit User</Title>
      <UserForm onSubmit={handleUpdateUser} initialValues={editUser} />

      <UserTable users={users} onEditUser={handleEditUser} />
    </Space>
  )
}
