import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 路由器 创建一个路由器对象，用于处理请求和匹配路
import './permission' // 权限验证器 如果你的项目中有这么一个库，请在你的库中注释掉上
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import {createStore}from "vuex"
import {createMetaManager} from "vue-meta"

const app = createApp(App)
const store = createStore()

const metaManager = createMetaManager()
    app.use(store)
    app.use(metaManager)
    app.use(ElementPlus)  
    app.use(router)
    app.mount('#app')
