import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useInput } from '../hooks/useInput';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id)
  const [ comment, onChangeComment ] = useInput('')

  const onSubmit = useCallback(() => {
    console.log(post.id, comment)
  }, [comment])

  return (
    <Form onFinish={onSubmit}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          value={comment}
          onChange={(e) => onChangeComment(e)}
          rows={4}
        />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
          type="primary"
          htmlType="submit"
        >등록</Button>
      </Form.Item>
    </Form>
  )
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
}

export default CommentForm;