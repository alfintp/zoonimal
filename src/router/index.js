import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/zoonimal",
    name: "zoonimal",
    component: () => import("../views/ZoonimaL.vue"),
  },
  {
    path: "/zoonimal/:id",
    name: "animal",
    component: () => import("../views/anAnimal.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
