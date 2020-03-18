/**
 * @doc 利用环境变量区分不同环境的接口地址
 */

 const API_BASEURL_MAP = {
   dev: '',
   test: '',
   uat: ''
 }

 // 接口地址
 const baseUrl = API_BASEURL_MAP[process.env.UMI_ENV || 'dev']

 export {
   baseUrl
 }