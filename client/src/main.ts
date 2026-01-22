import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import router from "./router/router";

createApp(App).use(router).use(VueLazyLoad, {}).mount("#app");
