import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 路由器 创建一个路由器对象，用于处理请求和匹配路


const app = createApp(App)
    app.use(router) // 使用路由器对象替换 vue 实例中的 router-view 和 el 属性。 这意味着可以在你的程序中使用 javascript 自带的方法来实现路由功能

    app.mount('#app')
