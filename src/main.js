//js
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui';
import store from './store/'
import cookie from '@/../static/js/cookie.js'
import filters from './filters/index.js'
import directives from '@/directives/index.js'
import VueI18n from 'vue-i18n'; //多语言
import messages from '@/lang/index';
//css
import '../static/css/reset.css'

//less
import "./less/index.less"

Vue.use(Mint);
Vue.use(VueI18n)

router.beforeEach((to, from, next) => {

    if (false) {
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

const browserLanguage = (navigator.language || navigator.browserLanguage)
    .toLowerCase(),
    i18n = new VueI18n({
        //定义默认语言
        locale: browserLanguage,
        messages,
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
    i18n,
    //组件
    components: {
    }
});