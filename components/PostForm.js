import React, { useCallback, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostFormWrap = styled(Form)`
  margin: 10px 0 20px;
`

const PostFeedButton = styled(Button)`
  float: right;
`

const PostImage = styled.div`
  display: inline-block;
`

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post)
  const dispatch = useDispatch()
  const imageInput = useRef()
  const [ text, setText ] = useState('')

  const onChangeText = useCallback((e) => {
    const { value } = e.target
    setText(value)
  }, [])

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onSubmit = useCallback(() => {
    dispatch(addPost)
  }, [])

  return (
    <PostFormWrap encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={(e) => onChangeText(e)}
        maxLength={140}
        placeholder="일상을 적어주세요."
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <PostFeedButton type="primary" htmlType="submit">
          게시하기
        </PostFeedButton>
      </div>
      <div>
        {imagePaths.map(i =>
          <PostImage key={i}>
            <img src={i} style={{ width: '200px' }} alt={i} />
            <div>
              <Button>제거</Button>
            </div>
          </PostImage>
        )}
      </div>
    </PostFormWrap>
  )
}

export default PostForm;