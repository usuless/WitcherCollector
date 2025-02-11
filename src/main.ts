import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import CardsSection from "./views/CardsSection.vue";
import HomeSection from "./views/HomeSection.vue";
import VueLazyLoad from 'vue3-lazyload'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/cards", name: "cards", component: CardsSection},
        {path:"/", name:"home", component: HomeSection}
    ]
})


createApp(App).use(router).use(VueLazyLoad, {}).mount("#app");
