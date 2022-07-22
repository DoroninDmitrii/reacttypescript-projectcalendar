import { Layout, Menu, Row } from 'antd';
import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/userAction';

const Navbar: FC = () => {

  const {logout} = useActions();
  const navigate = useNavigate();

  const login = () => {
    navigate(RouteNames.LOGIN)
  }

  const {isAuth, user} = useTypedSelector(state => state.authReducer)
  
  return (
    <Layout.Header>
      <Row justify="end">

        {isAuth

        ?

        <Menu theme="dark" mode="horizontal" selectable={false}>
          <div style={{color: 'white'}}>
            {user.username}
          </div>
          <Menu.Item key={1} onClick={() => logout()}>Logout</Menu.Item>
        </Menu>

        :

      
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key={1} onClick={login}>Login</Menu.Item>
        </Menu>

        }

      </Row>
    </Layout.Header>
  );
}

export default Navbar;
