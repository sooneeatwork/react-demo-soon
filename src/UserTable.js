import React from 'react'
import { Table, Button } from 'antd'

const UserTable = ({ users, onEditUser }) => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Website', dataIndex: 'website', key: 'website' },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (address) =>
        `${address.street}, ${address.city}, ${address.zipcode}`
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      render: (company) => company.name
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => onEditUser(record)}>Edit</Button>
      )
    }
  ]

  return <Table dataSource={users} columns={columns} rowKey="id" />
}

export default UserTable
