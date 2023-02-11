import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import { Auth } from "aws-amplify";
import { useAuthStore } from "@/stores/auth";
import LogoutView from "@/views/LogoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: LogoutView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    //create a dashboard view for loggedin users. it has id parameter
    path: "/dashboard/:id",
    name: "DashboardView",
    component: DashboardView,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log("to", to);
  console.log("from", from);
  let user = useAuthStore().user;
  if (!user) {
    try {
      user = await Auth.currentAuthenticatedUser();
      useAuthStore().user = user;
    } catch (error) {
      console.log("error", error);
    }
  }
  next();
});

export default router;
