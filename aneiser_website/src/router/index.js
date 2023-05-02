import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Blog from "../views/Blog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/",       name: "home",   component: Home },
    // Use "route level code-splitting" to optimize the loading and rendering.
    // This can significantly reduce the initial load time and improve the overall performance.
    { path: "/about",  name: "about",  component: () => import("../views/About.vue") },
    { path: "/resume", name: "resume", component: () => import("../views/Resume.vue")},
    { path: "/blog",   name: "blog",   component: () => import("../views/Blog.vue")  },
  ],
});

export default router;
