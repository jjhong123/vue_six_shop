// permission.js
import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { check } from "@/api/user";
NProgress.configure({ showSpinner: false }); // NProgress configuration

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  // 需要登入路由
  if (to.meta.requiresAuth) {
    // 確認身份
    check().then(response => {
        if (response.data.success) {
          next();
        } else {
          next(`/login?redirect=${to.path}`); // 否則全部到Login
          NProgress.done();
        }
      })
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // 結束Progress
});
