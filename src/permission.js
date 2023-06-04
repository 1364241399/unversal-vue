import router from "./router";

// 全局前置守卫
router.beforeEach((to,from,next)=>{
    console.log(to.path)
    //判断用户是否登陆
    const isLogin = localStorage.getItem('token')?true :false;
    //如果用户未登陆，则跳转到登陆页面。已经登陆就跳转到页面
    if(!isLogin && to.path !== '/login'){
        next('/login')
    }else if (isLogin && to.path === '/login') {
        // 用户已经登录，但要访问登录页面时，直接跳转到首页
        next('/');

      } else {
        // 其他情况，直接放行
        next();
      }
    });