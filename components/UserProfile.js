import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch()
  const onClickLogOut = useCallback(() => {
    dispatch(logoutAction())
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">Twit 0</div>,
        <div key="following">Following 0</div>,
        <div key="follower">Follower 0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>YK</Avatar>}
        title="ykwimk"
      />
      <Button onClick={onClickLogOut}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile;