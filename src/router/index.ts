import {
  RouteRecordRaw,
  RouterOptions,
  createRouter,
  createWebHashHistory,
} from "vue-router";

import { Home, About } from "@/pages";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about/:id?", component: About },
];

const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes,
  strict: true,
};

export const router = createRouter(routerOptions);
