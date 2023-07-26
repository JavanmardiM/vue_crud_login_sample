import Vue from "vue";
import Router from "vue-router";
import mainLayout from "../layouts/mainLayout";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login"),
  },
  {
    path: "/",
    component: mainLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/home"),
      },
      {
        path: "/userDetail",
        name: "userDetail",
        component: () => import("../pages/userDetail"),
      },
    ],
  },
];

export const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");

  if (to.name !== "login") {
    if (token) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    if (token) {
      next({ name: "home" });
    } else {
      next();
    }
  }
});
