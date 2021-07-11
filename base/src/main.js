import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入element-ui vue
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入乾坤 registerMicroApps：注册应用  start：启动
import {registerMicroApps,start} from 'qiankun'
//应用列表
const apps = [
  {
    name:'vueApp', //应用的名字
    entry:'//localhost:10000', //默认会加载这个html，解析里面的js，动态的执行，但是子应用必须支持跨域(内部是用fatch读取的) //前有协议,此处省略写法
    container:'#vue', //容器：挂载子应用到的元素上 -- 对应App.vue
    activeRule:'/vue', //激活的路径：启动规则 - 当访问/vue时，就把entry挂载到container上
    props:{ //传给子应用的数据 -- 可在协议中拿到-就是子应用抛出的三个方法中
      token:'parentToken'
    }
  },
  {
    name:'reactApp',
    entry:'//localhost:20000',
    container:'#react',
    activeRule:'/react'
  }
]
//注册
registerMicroApps(apps)
//开启
start({
  prefetch:false //取消预加载--当访问到对应子应用时才进行加载
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
