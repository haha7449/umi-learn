import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  dva: {},
  antd: {},
  // "proxy": {
  //   "/api": {
  //     // "target": "https://pvp.qq.com"
  //     "target": "https://search.smzdm.com",
  //     "changeOrigin": true,
  //     // "pathRewrite": { "^/api": "https://pvp.qq.com" }
  //     "pathRewrite": { "^/api": "https://search.smzdm.com" }
  //   }
  // }
});

