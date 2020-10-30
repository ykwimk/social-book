import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useInput } from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const ButtonWrap = styled.div`
  margin-top: 10px;
`

const FormWrap = styled(Form)`
  padding: 10px;
`

const LoginForm = () => {
  const dispatch = useDispatch()
  const [ id, onChangeId ] = useInput('')
  const [ password, onChangePassword ] = useInput('')

  const onSubmit = useCallback(() => {
    dispatch(loginAction({ id, password }))
  }, [id, password])

  return (
    <FormWrap onFinish={onSubmit}>
      <div>
        <Input
          type="text"
          name="id"
          value={id}
          placeholder="아이디"
          onChange={(e) => onChangeId(e)}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => onChangePassword(e)}
          required
        />
      </div>
      <ButtonWrap>
        <Button
          type="primary"
          htmlType="submit"
          loading={false}
        >로그인</Button>
        <Link href="signup">
          <a><Button>회원가입</Button></a>
        </Link>
      </ButtonWrap>
    </FormWrap>
  )
}

export default LoginForm;