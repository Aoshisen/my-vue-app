import { RouteRecordRaw } from "vue-router";

import { Home, About } from "@/pages";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about/:id?", component: About },
];
