import { createRouter, createWebHashHistory } from "vue-router";

// 创建路由对象，参数是要使用的路由配置文件列表，每个文件都必须
const routes = [
  { path: "/", component: () => import("@/components/HelloWorld.vue") },
];
export default createRouter({ 
    history: createWebHashHistory(), 
    routes 
});
