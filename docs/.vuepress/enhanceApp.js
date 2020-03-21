import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

import 'wang-vue-ui/dist/wang-ui.css'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue,
  options, 
  router,
  siteData
}) => {
  Vue.use(Element);
  // resolve build window is not defined
  // https://vuepress.vuejs.org/zh/guide/using-vue.html
  import('wang-vue-ui').then(module => {
    let wangUi = module.default;
    Vue.use(wangUi);
  }).catch(error => {
      console.log(error);
  });
}