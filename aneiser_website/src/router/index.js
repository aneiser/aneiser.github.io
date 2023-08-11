import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
// Instead of importing preload...
// import About from "../views/About.vue";
// import Resume from "../views/Resume.vue";
// import Blog from "../views/Blog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/",       name: "home",   component: Home },
    // ...Use "route level code-splitting" to optimize the loading and rendering.
    // This can significantly reduce the initial load time and improve the overall performance.
    { path: "/about", name: "about", component: () => import("../views/About.vue") },
    { path: "/resume", name: "resume", component: () => import("../views/Resume.vue") },
    { path: "/blog", name: "blog", component: () => import("../views/Blog.vue") },
    { path: "/projects/ubisoft", name: "ubisoft", component: () => import("../views/Ubisoft.vue") },
    { path: "/projects/smartcontact", name: "smartcontact", component: () => import("../views/Smartcontact.vue") },
    { path: "/projects/insignum", name: "insignum", component: () => import("../views/Insignum.vue") },
    { path: "/projects/hera", name: "hera", component: () => import("../views/Hera.vue") },
    { path: "/projects/el-mundo", name: "el-mundo", component: () => import("../views/Elmundo.vue") },
  ],
});

export default router;
