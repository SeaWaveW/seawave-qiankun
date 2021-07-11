import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


//改造vue加载方法
let instance = null;
function vueRander(props){
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app') //这里还是挂载到自己的html中 基座会拿到这个挂载后的html，将其插入到规定的container中
}

if(window.__POWERED_BY_QIANKUN){ //当在乾坤的框架中，需要加载对应的webpack，动态加载
  __webpack_public_path = window.INJECTED_PUBLIC_PATH_QIANKUN__
}

if(!window.__POWERED_BY_QIANKUN){ //当不在乾坤的框架中，就独立启动
  vueRander()
}


//乾坤必须导出的三个方法(子组件的协议) props：基座传过来的数据
export async function bootstrap(props){
  console.error(props)
}
//加载的时候
export async function mount(props){
  vueRander(props)
}
//卸载的时候
export async function unmount(props){
  instance.$destroy()
}