import React, { Component } from 'react';
import router from 'umi/router'
import PageLoading from '@/components/PageLoading';
import { getLocationParams } from '@/utils';
import LoginErrorException from '@/components/Exception/401'

/**
 * 示例：若是url存在指定query-string参数则进行自定义前置操作
 */
class SecurityLayout extends Component {
  state = {
    isReady: false,
    loginError: false
  }

  componentDidMount = async () => {
    await this.applyLogin()
    this.setState({ isReady: true })
  }

  applyLogin = async () => {
    const paramsObject = getLocationParams()
    const neededParams = ['tgt']
    if(neededParams.every( e => paramsObject.hasOwnProperty(e))) {
      // 示例：根据进入时url的query-string参数进行拦截并做前置校验操作
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('example')
          this.setState({
            loginError: false
          })
          router.push('/')
        }, 5000)
      })
    }
  }

  render() {
    const { loginError, isReady } = this.state;
    const { children } = this.props;
    // 加载遮罩
    if(!isReady) {
      return <PageLoading/>;
    }

    // 登陆失败遮罩
    if(loginError) {
      return <LoginErrorException/>
    }

    return children;
  }
} 

export default SecurityLayout;
