import React from "antd";
import { Form, Input, Button, Space, Table } from "antd";
import { dataSource, columns } from "./config";
const Text = () => {
  const FormItem = Form.Item;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    style: {
      maxWidth: 600,
    },
  };

  return (
    <div>
      <h1>Form</h1>
      <Form
        name="basic"
        {...layout}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormItem
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              validator: (rule, value) => {
                if (!value || value.length < 6) {
                  return Promise.reject(new Error("用户名需要至少6个字符!"));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password></Input.Password>
        </FormItem>
        <FormItem {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">reset</Button>
          </Space>
        </FormItem>
      </Form>

      <h1>Table</h1>
      <Table dataSource={dataSource} columns={columns} />
      <h1>Tree</h1>
    </div>
  );
};

export default Text;
