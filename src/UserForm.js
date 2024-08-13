import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'

const UserForm = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm()

  React.useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [initialValues, form])

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      initialValues={initialValues}
    >
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input your name!' },
              { min: 2, message: 'Name must be at least 2 characters long' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              { required: true, message: 'Please input your username!' },
              {
                min: 3,
                message: 'Username must be at least 3 characters long'
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message:
                  'Username can only contain letters, numbers and underscores'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                pattern: /^[0-9-+()]*$/,
                message: 'Please enter a valid phone number'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <Form.Item
            name="website"
            label="Website"
            rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Address">
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name={['address', 'street']}
              noStyle
              rules={[{ required: true, message: 'Please input the street!' }]}
            >
              <Input placeholder="Street" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name={['address', 'suite']} noStyle>
              <Input placeholder="Suite" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col xs={24} sm={8}>
            <Form.Item
              name={['address', 'city']}
              noStyle
              rules={[{ required: true, message: 'Please input the city!' }]}
            >
              <Input placeholder="City" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name={['address', 'zipcode']}
              noStyle
              rules={[
                { required: true, message: 'Please input the zipcode!' },
                {
                  pattern: /^\d{5}(-\d{4})?$/,
                  message: 'Please enter a valid zipcode'
                }
              ]}
            >
              <Input placeholder="Zipcode" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name={['address', 'geo', 'lat']}
              noStyle
              rules={[
                {
                  pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                  message: 'Please enter a valid latitude'
                }
              ]}
            >
              <Input placeholder="Latitude" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col xs={24} sm={8}>
            <Form.Item
              name={['address', 'geo', 'lng']}
              noStyle
              rules={[
                {
                  pattern:
                    /^-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6}$/,
                  message: 'Please enter a valid longitude'
                }
              ]}
            >
              <Input placeholder="Longitude" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Company">
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Form.Item
              name={['company', 'name']}
              noStyle
              rules={[
                { required: true, message: 'Please input the company name!' }
              ]}
            >
              <Input placeholder="Company Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item name={['company', 'catchPhrase']} noStyle>
              <Input placeholder="Catch Phrase" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item name={['company', 'bs']} noStyle>
              <Input placeholder="BS" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues.id ? 'Update User' : 'Create User'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserForm
