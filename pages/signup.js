import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Button, Checkbox, Form, Input } from 'antd';
import { useInput } from '../hooks/useInput';
import Layout from '../components/Layout';

const ErrorMessage = styled.div`
  color: red;
`

const ConfirmButton = styled.div`
  margin-top: 10px;
`

const SignUp = () => {
  const [ id, onChangeId ] = useInput('')
  const [ nickname, onChangeNickname ] = useInput('')
  const [ password, onChangePassword ] = useInput('')
  const [ passwordCheck, setPasswordCheck ] = useState('')
  const [ passwordError, setPasswordError ] = useState(false)
  const [ term, setTerm ] = useState(false)
  const [ termError, setTermError ] = useState(false)

  const onChangePasswordCheck = useCallback((e) => {
    const { value } = e.target
    setPasswordCheck(value)
  }, [])

  const onChangeTerm = useCallback(() => {
    setTerm(!term)
  }, [term])

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
  }, [password, passwordCheck, term])

  return (
    <>
      <Head>
        <title>Sign Up | Social Book</title>
      </Head>
      <Layout>
        <Form onFinish={onSubmit}>
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
              type="text"
              name="nickname"
              value={nickname}
              placeholder="닉네임"
              onChange={(e) => onChangeNickname(e)}
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
          <div>
            <Input
              type="password"
              name="passwordCheck"
              value={passwordCheck}
              placeholder="비밀번호 확인"
              onChange={(e) => onChangePasswordCheck(e)}
              required
            />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>
          <div>
            <Checkbox
              name="term"
              checked={term}
              onChange={onChangeTerm}
            >매너 있게 글을 쓸 것입니다.</Checkbox>
            {termError && <ErrorMessage>약관에 동의 하셔야 합니다.</ErrorMessage>}
          </div>
          <ConfirmButton>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </ConfirmButton>
        </Form>
      </Layout>
    </>
  )
}

export default SignUp;