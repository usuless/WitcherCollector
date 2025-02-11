import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import CardsView from "./views/CardsView.vue";
import HomeView from "./views/HomeView.vue";
import VueLazyLoad from 'vue3-lazyload'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/cards", name: "cards", component: CardsView},
        {path:"/", name:"home", component: HomeView}
    ]
})


createApp(App).use(router).use(VueLazyLoad, {}).mount("#app");
