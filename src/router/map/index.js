//home组件
const Index = resolve => require(['@/views/index/index.vue'], resolve)

export default {
    path: '/',
    component: Index,
    name: 'home',
    children: []
}