import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入第三方包element-ui框架
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui样式
import '@/styles/index.less' // 引入全局公共样式
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册element-ui框架
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
