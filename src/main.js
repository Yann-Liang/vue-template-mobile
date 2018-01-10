//js
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui';
import store from './vuex/store'
import { interceptorsOfReq, interceptorsOfRes } from './config/API-config.js'
import cookie from '@/../static/js/cookie.js'
import filters from './filters/index.js'
import directives from '@/directives/index.js'

//css
import '../static/css/reset.css'
import '../static/css/iconfont.css'

//less
import "./less/index.less"

Vue.use(Mint);

router.beforeEach((to, from, next) => {

    if(false) {
        next({
            path: '/index',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
});

//Vue.config.silent = true;
Vue.config.productionTip = false;

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {
            loginPopFlag: false,
            redirectPath: '',
        }
    },
    router,
    store,
    //组件
    components: {
    }
});