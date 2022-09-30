import Vue from "vue";
import Router from 'vue-router'

// 1.通过Vue.use(插件),安装插件
Vue.use(Router)

// 2.创建路由对象
const NGASearchMain = () =>import('../views/nga/NGASearchMain');
const NGACommentsMain = () => import('../views/nga/NGACommentsMain');


// 配置路由和组件之间的映射关系
const routes = [
    {
        path: '',
        redirect: './nga_search'
    },
    {
        path: '/nga_search',
        component: NGASearchMain,
        meta: {
            title: 'NGASearchMain',
            needLogin: false,
            index: 0
        }
    },
    {
        path: '/nga_comments',
        component: NGACommentsMain,
        meta: {
            title: 'NGACommentsMain',
            needLogin: false,
            index: 0,
        }
    }
];

const router = new Router({
    routes
});

// 3.将router对象传入到Vue实例
export default router
