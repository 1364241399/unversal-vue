import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 路由器 创建一个路由器对象，用于处理请求和匹配路
import './permission' // 权限验证器 使用该功能在页面加载时就绪后自动调用一次。不需要手动调用此函数
import '@/assets/style/index.scss' // 全局样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {createMetaManager} from "vue-meta"

const app = createApp(App)

const metaManager = createMetaManager()
    app.use(ElementPlus)  
    app.use(metaManager)
    app.use(router)
    for (const [key,component] of Object.entries(ElementPlusIconsVue)) {
        
        app.component(key,component)
    }
    app.mount('#app')

// console.info(store.setting.isAside)
// store.setting.isAside = true
// console.info(store.setting.isAside)
