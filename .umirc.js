// ref: https://umijs.org/config/
import routes from './config/router';
export default {
  treeShaking: true,
  routes,
  proxy: {
    "/api": {
      "target": "https://www.easy-mock.com/mock/5c1368ab2398210dab1f28a0/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'tlh5',
        dll: true,
        locale: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

