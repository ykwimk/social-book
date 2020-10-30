import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import EditNicknameForm from '../components/EditNicknameForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [{ nickname: 'ykwimk' }, { nickname: 'aaa' }, { nickname: 'bbb' }]
  const followerList = [{ nickname: 'ykwimk' }, { nickname: 'aaa' }, { nickname: 'bbb' }]

  return (
    <>
      <Head>
        <title>Profile | Social Book</title>
      </Head>
      <Layout>
        <EditNicknameForm />
        <FollowList
          header="팔로잉 목록"
          data={followingList}
        />
        <FollowList
          header="팔로워 목록"
          data={followerList}
        />
      </Layout>
    </>
  )
}

export default Profile;