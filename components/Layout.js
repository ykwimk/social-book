import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';

const InputSearch = styled(Input.Search)`
  vertical-align: middle;
`

const Layout = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user)

  return (
    <div className="layout">
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>Social Book</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item>
          <InputSearch enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>Sign Up</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin
            ? <UserProfile />
            : <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/ykwimk"
            target="_blank"
            rel="noreferrer noopener"
          >Made by ykwimk</a>
        </Col>
      </Row>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;