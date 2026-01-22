import { createMemoryHistory, createRouter } from "vue-router";

import CardsView from "../views/CardsView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/cards", component: CardsView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
