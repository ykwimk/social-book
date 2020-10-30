import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Index = () => {
  const { isLogin } = useSelector(state => state.user)
  const { mainPosts } = useSelector(state => state.post)

  return (
    <>
      <Head>
        <title>Social Book</title>
      </Head>
      <Layout>
        {isLogin && <PostForm />}
        {mainPosts.map(post =>
          <PostCard key={post.id} post={post} />
        )}
      </Layout>
    </>
  )
}

export default Index;