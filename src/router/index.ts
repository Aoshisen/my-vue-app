import { RouterOptions, createRouter, createWebHashHistory } from "vue-router";

import { routes } from "./routes";

const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes,
  strict: true,
};

export const router = createRouter(routerOptions);
