import React from 'react';
import {Form, Input, Button} from 'antd';
import { rules } from '../utils/utils';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/authReducer/actionCreatorAuth';
import { useActions } from '../hooks/userAction';

const LoginForm = () => {

  const {login} = useActions()


const onFinish = () => {
  // dispatch(AuthActionCreators.login('dsds', 'dsdsds'))
  login('', '')
}


  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
