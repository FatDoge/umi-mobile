/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification, message } from 'antd';
import router from 'umi/router'
import { baseUrl } from '../../config/server'

const errorHandler = error => {
  const { response } = error;


  if (response && response.status) {
    const { status } = response;

    message.error(`请求错误${status}`)
    // @HACK
    /* eslink-disable no-underscore-dangle */
    if(status === 401) {
      router.push('/error')
    }
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }


  return response;
};
/**
 * 配置request请求时的默认参数
 */


const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  prefix: baseUrl, //统一添加/api请求前缀
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});


// request.interceptors.response.use(async (response, { backOnSuccess = false }) => {
//   const data = await response.clone().json()
//   if(data.message && response.status >= 200 && response.status < 300 && data.success) {
//     if(backOnSuccess) {
//       router.goBack() // 配置backOnSuccess的接口，请求成功之后自动返回上一页
//     }
//   }
//   return response
// })


export default request;