import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from'./store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'amfe-flexible'
import 'amfe-flexible/index'

Vue.config.productionTip = false

Vue.use(Element);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
})
