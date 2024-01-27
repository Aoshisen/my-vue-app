import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import "./mock";

import "./assets/styles/_global.scss";

import { RouterView } from "vue-router";

const pinia = createPinia();
const mountNode = document.getElementById("app") as Element;

const app = createApp(RouterView);
app.use(pinia);
app.use(router);
app.mount(mountNode);
