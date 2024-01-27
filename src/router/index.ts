import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about/:id?", component: About },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});
