import { Layout, Menu, Row } from 'antd';
import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {

  const navigate = useNavigate()

  const login = () => {
    navigate(RouteNames.LOGIN)
  }

  const {isAuth} = useTypedSelector(state => state.authReducer)
  
  return (
    <Layout.Header>
      <Row justify="end">

        {isAuth

        ?

        <Menu theme="dark" mode="horizontal" selectable={false}>
          <div style={{color: 'white'}}>
            Dima Doronin
          </div>
          <Menu.Item key={1} onClick={() => console.log('Logout')}>Logout</Menu.Item>
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
