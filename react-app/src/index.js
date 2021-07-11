import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

 
//改造渲染方法
function reactRander(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if(!window.__POWERED_BY_QIANKUN){ //当不在乾坤的框架中，就独立启动
  vueRander()
}

//乾坤必须导出的三个方法(子组件的协议) props：基座传过来的数据
export async function bootstrap(props){

}
//加载的时候
export async function mount(props){
  reactRander()
}
//卸载的时候
export async function unmount(props){
  ReactDOM.unmountComponentAtNode( document.getElementById('root') )
}