import React, { useState } from 'react';
import {Form, Input, Button} from 'antd';
import { rules } from '../utils/utils';
import { useActions } from '../hooks/userAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm = () => {

  const {login} = useActions();
  const {error, isLoading} = useTypedSelector(state => state.authReducer);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = () => {
    login(username, password)
  }

  return (
    <Form onFinish={onFinish}>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
