// 基本使用打包方法
import Vue from 'vue'
import App from './vue/App.vue'
require('./css/style.css')

//const budai = require('./mathUtil.js') //1.使用commonjs模块化开发规范
import budai from './mathUtil' //2.ES6的模块化开发规范
import {
  a,
  b
} from "./info"
console.log(budai(1, 2));
console.log(a, b);

// const App = new Vue({
//   el: '#app',
//   template: `
//   <div>
//     <h1>{{name}}</h1>
//   </div>`,
//   data: {
//     name: "布袋酥1111111111111111"
//   }
// })


// const APP = {
//   template: ``,
//   data() {
//     return {
//       time: "2019-20-20"
//     }
//   },
//   methods: {
//     btnClick() {
//     }
//   }
// }

new Vue({
  el: "#app",
  template: '<APP/>',
  components: {
    APP
  }
})
