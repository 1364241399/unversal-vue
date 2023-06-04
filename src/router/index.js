import { createRouter, createWebHistory } from "vue-router";

// 创建路由对象，参数是要使用的路由配置文件列表，每个文件都必须
const routes = [{ 
    path: "/",
    name: "home",
    component: () => import("@/components/HelloWorld.vue") },
  {
    path:"/test",
    name:"Test",
    component: () => import("@/components/TestDemo.vue"), 
  },{
    path: "/login",
    name: "登陆",
    component: () => import("@/view/login.vue"),
  }
];

const router = createRouter({ 
  history: createWebHistory(), 
  routes 
});

export default router;