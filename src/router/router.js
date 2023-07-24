import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import PlayVideo from "../view/PlayVideo.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/video",
    component: PlayVideo,
  },
];

export default createRouter({
  history: createWebHistory("/"),
  routes,
});
