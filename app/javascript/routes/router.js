import Vue from "vue";
import Router from "vue-router";
import Store from "../store/store.js";
Vue.use(Router);
import DashBoard from "../views/admin/DashBoard.vue";
import ManageUser from "../views/admin/ManageUser.vue";
import TaskIndex from "../views/tasks/Index.vue";
import Signin from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";
import Error404 from "../views/errors/404.vue";
import Error500 from "../views/errors/500.vue";
const router = new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: "/",
      component: TaskIndex,
      meta: {
        isPublic: false,
      },
    },
    {
      path: "/tasks/index",
      component: TaskIndex,
      meta: {
        isPublic: false,
      },
    },
    {
      path: "/admin/dashboard",
      component: DashBoard,
      meta: {
        isPublic: false,
      },
    },
    {
      path: "/admin/user",
      name: "manage_user",
      component: ManageUser,
      props: true,
      meta: {
        isPublic: false,
      },
    },
    {
      path: "/signin",
      component: Signin,
      meta: {
        isPublic: true,
      },
    },

    {
      path: "/signup",
      component: SignUp,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "/500error",
      component: Error500,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "*",
      component: Error404,
      meta: {
        isPublic: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((page) => page.meta.isPublic)) {
    next();
  } else if (Store.state.auth.token) {
    next();
  } else {
    next("/signin");
  }
});
export default router;
