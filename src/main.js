import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from'./store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'amfe-flexible'
import 'amfe-flexible/index'
import ExTableColumn from 'ex-table-column';
import 'lib-flexible/flexible.js'
import './assets/css/scrollbar.css'

Vue.config.productionTip = false

Vue.use(Element);
Vue.component(ExTableColumn.name, ExTableColumn);


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
})
