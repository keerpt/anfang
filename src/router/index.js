import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
var pageType;

export default new Router({
	
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
              
                {
                    path: '/resultAll',
                    component: () => import(/* webpackChunkName: "resultAll" */ '../components/page/CaseResultAll.vue'),
                    meta: { title: '执行情况' }
                },
            
				
                {
                    path: '/perform/:pageType',
                    component: () => import(/* webpackChunkName: "CasePerform" */ '../components/page/CasePerform.vue'),
                    meta: { title: pageType}
                },
                
                
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: '生态长稳' }
                },
                
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                
                {
                    path: '/about',
                    component: () => import(/* webpackChunkName: "about" */ '../components/page/About.vue'),
                    meta: { title: '联系我们' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        //{
        //    path: '*',
        //    redirect: '/404'
        //}
    ]
});
