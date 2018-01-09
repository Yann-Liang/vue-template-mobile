<template>
    <div class="home">
        <com-header class="header">
            <div class="user-box fr" @click='userBoxClick'>
                <img class="fl" :src="userImg" src="./images/user-photo.png" />
                <span class="fl">{{username}}</span>
                <i class="icon iconfont fr">&#xe62b</i>
            </div>
        </com-header>
        <div class="home-container">
            <menu-bar class="menu" :menu='menu'></menu-bar>
            <div class="content">
                <h3 class="com-title">
                </h3>
                <router-view></router-view>
            </div>

        </div>
    </div>

</template>

<script>
    import comHeader from '@/components/Header/Header.vue'
    import MenuBar from '@/components/MenuBar/MenuBar.vue'
    import ApiService from '@/services/API-servies'
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        //组件名
        name: 'Home',
        data() {
            return {
                userImg: './images/user-photo.png',
                username: '欢迎您',
                menu: [{
                    "path": "/overview",
                    "name": "首页",
                    icon: "icon-overview"
                }, {
                    "name": "节点管理",
                    icon: 'icon-manage',
                    children: [{
                        "path": "/node-application/node-application-list",
                        "name": "节点申请",
                        icon: 'icon-record'
                    }, {
                        "path": "/node-review/review-list",
                        "name": "节点审核",
                        icon: 'icon-audit'
                    }]
                }, {
                    path: '/join-chain-history',
                    name: '创建链记录',
                    icon: ''
                }],
                breadcrumb:[]
            }
        },
        //计算
        computed: {

        },
        methods: {
            userBoxClick() {

            },
        },
        created() {
        },
        watch:{

        },
        components: {
            MenuBar,
            comHeader,
        },
    }
</script>

<style lang="less" scoped>
    .home {
        /*padding: 30px 0;*/
        background: #f5f6f7;
    }

    .user-box {
        line-height: 45px;
        color: #0b8aee;
        cursor: pointer;
        >img {
            display: inline-block;
            width: 44px;
            height: 44px;
            margin-left: 14px;
            margin-right: 12px;
        }
        >span{
            color: #fff;
        }
        >i{
             margin-left: 12px;
             color:#fff;
        }

    }



    .home-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 218px;
        padding: 30px 0 0;
    }

    .menu {
        margin: 0 20px 0 0;
        width: 274px;
        height: auto;
        background: #fff;
    }

    .content {
        flex: 1;
        border: 1px solid #bfbfbf;
        border-radius: 10px;
        background: #fff;
    }

</style>