import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Card, Popover } from 'antd';
import {
  EllipsisOutlined, HeartOutlined, HeartTwoTone,
  MessageOutlined, MessageTwoTone, RetweetOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import styled from 'styled-components';
import CommentForm from './CommentForm';

const PostCardWrap = styled.div`
  margin-bottom: 20px;
`

const PostCard = ({ post }) => {
  const id = useSelector(state => state.user.me?.id)
  const [ isLiked, setIsLiked ] = useState(false)
  const [ isCommentForm, setIsCommentForm ] = useState(false)

  const onClickToggleHeart = useCallback(() => {
    setIsLiked(prev => !prev)
  }, [isLiked])

  const onClickToggleComment = useCallback(() => {
    setIsCommentForm(prev => !prev)
  }, [isCommentForm])

  return (
    <PostCardWrap >
      <Card
        cover={post.images[0] && <PostImages images={post.images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <>
            {isLiked
              ? <HeartTwoTone
                  key="heart"
                  twoToneColor="#eb2f96"
                  onClick={onClickToggleHeart}
                />
              : <HeartOutlined
                  key="heart"
                  onClick={onClickToggleHeart}
                />
            }
          </>
          ,
          <>
            {isCommentForm
              ? <MessageTwoTone
                  key="comment"
                  onClick={onClickToggleComment}
                />
              : <MessageOutlined
                  key="comment"
                  onClick={onClickToggleComment}
                />
            }
          </>
          ,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.user.id === id ? (
                <>
                  <Button type="primary">수정</Button>
                  <Button type="danger">삭제</Button>
                </>
              ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta
          title={post.user.nickname}
          avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
          description={post.content}
        />
        <Button></Button>
      </Card>
      {isCommentForm && <CommentForm />}
      {/* <CommentForm />
      <Comments /> */}
    </PostCardWrap>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object),
    images: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
}

export default PostCard;