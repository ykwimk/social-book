import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowListWrap = styled(List)`
  margin-bottom: 20px;
`

const FollowList = ({ header, data }) => {
  return (
    <FollowListWrap
      header={ <div>{header}</div> }
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>More</Button>
        </div>
      }
      dataSource={data}
      bordered
      renderItem={(item) => (
        <List.Item style={{ marginTop: '20px' }}>
          <Card actions={[ <StopOutlined key="stop" /> ]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    >

    </FollowListWrap>
  )
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default FollowList;