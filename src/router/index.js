import Vue from "vue";
import Router from 'vue-router'

// 1.通过Vue.use(插件),安装插件
Vue.use(Router)

// 2.创建路由对象
const NGA = () =>import('../views/nga/NGA');

// 配置路由和组件之间的映射关系
const routes = [
    {
        path: '',
        redirect: './nga'
    },
    {
        path: '/nga',
        component: NGA,
        meta: {
            title: 'NGA',
            needLogin: false,
            index: 0
        }
    }
];

const router = new Router({
    routes
});

// 3.将router对象传入到Vue实例
export default router
