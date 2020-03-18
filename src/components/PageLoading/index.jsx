import {Spin} from 'antd'
import React from 'react'

/**
 * @doc Loading组件，结合dva-loading使用自动展示及去除加载遮罩
 */
const PageLoading = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }}
  >
    <Spin size="large"/>
  </div>
)

export default PageLoading;