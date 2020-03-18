/**
 * @author fatdoge
 * @doc 路由配置文件，组件流转:SecurityLayout异步流程校验 -> BasicLayout基础容器 -> home等业务页面
 */
const routes = [
  {
    /**
     * 页面级别的校验
     */
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      { 
        path: '/error',
        component: '../components/Exception/401'
      },
      { 
        path: '/', 
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/', 
            component: './List'
          },
        ]
      },
      /**
       * 异常页面
       */
      
    ]
  },

]

export default routes;