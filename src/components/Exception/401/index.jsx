import React from 'react';
import { Result } from 'antd';

export default () => (
  <Result
    status="403"
    title="401"
    style={{
      background: 'none'
    }}
    subTitle="用户登录失效"
  />
)