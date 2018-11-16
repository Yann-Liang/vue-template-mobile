<template>
    <div class="home">
        <com-header class="header">

        </com-header>
        <div class="home-container">
            <router-view class="content"></router-view>
        </div>
    </div>

</template>

<script>
    import comHeader from '@/components/Header/Header.vue'
    import ApiService from '@/services/API-servies'
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        //组件名
        name: 'Home',
        data() {
            return {
            }
        },
        //计算
        computed: {

        },
        methods: {

        },
        created() {
        },
        watch:{

        },
        components: {
            comHeader,
        },
    }
</script>

<style lang="less" scoped>
    .home {
        /*padding: 30px 0;*/
        background: #f5f6f7;
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