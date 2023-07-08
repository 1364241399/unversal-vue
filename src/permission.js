// import { useRouter } from "vue-router";
import store from "./store";
import { getRouters } from "@/api/menu";
import router from "./router";

const { roles } = store;
// const router = useRouter();
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  console.info(roles.routes);
  roles.index = to.path
  console.log(to.path)
  //判断用户是否登陆
  const isLogin = localStorage.getItem("token") ? true : false;
  console.info(isLogin, to.path);
  //如果用户未登陆，则跳转到登陆页面。已经登陆就跳转到页面
  if (isLogin && to.path !== "/login") {
    next("/login");
  } else if (isLogin && to.path === "/login") {
    // 用户已经登录，但要访问登录页面时，直接跳转到首页
    next("/");
  } else {
    // 其他情况，直接放行

    if (Object.keys(roles.routes).length == 0) {
      const res = await getRouters();
      const dyr = treerouter(res.data.children);
      const routes = router.getRoutes();
      let route;
      for (const a of routes) {
        if (a.name == "home") {
          route = a;
        }
      }
      if (route) {
        for (const r of dyr) {
          route.children.push(r);
        }
      }
      store.roles.routes = route;

      router.addRoute(route);
      console.info("to",to)
      return next({...to,replace:true})
    } else {

      router.addRoute(roles.routes);
    }
    console.info(router.getRoutes());
    next()
  }
});
function treerouter(data) {
  if (!data || !Array.isArray(data)) return null;
  var dyr = [];

  for (const item of data) {
    if (item.menuName) {
      const route = {
        name: item.path.charAt(0).toUpperCase() + item.path.slice(1),
        path: item.path,
        component:
          item.component == null || item.component == ""
            ? null
            : () => import("@/view/" + item.component + ".vue"),
      };

      if (item.children) {
        route.children = treerouter(item.children);
      }
      dyr.push(route);
    }
  }
  return dyr;
}
