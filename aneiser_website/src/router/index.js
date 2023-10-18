import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
// Instead of importing preload...
// import About from "@/views/About.vue";
// import Resume from "@/views/Resume.vue";
// import Blog from "@/views/Blog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/",                      name: "home",         component: Home },
    // ...Use "route level code-splitting" to optimize the loading and rendering.
    // This can significantly reduce the initial load time and improve the overall performance.
    { path: "/about",                 name: "about",        component: () => import("@/views/About.vue") },
    { path: "/resume",                name: "resume",       component: () => import("@/views/Resume.vue") },
    { path: "/a4-resume",             name: "A4Resume",     component: () => import("@/views/A4_resume.vue") },
    { path: "/blog",                  name: "blog",         component: () => import("@/views/Blog.vue") },
    // projects
    { path: "/projects/el-mundo",     name: "el-mundo",     component: () => import("@/views/projects/ProjectElMundo.vue") },
    { path: "/projects/hera",         name: "hera",         component: () => import("@/views/projects/ProjectHera.vue") },
    { path: "/projects/insignum",     name: "insignum",     component: () => import("@/views/projects/ProjectInSignum.vue") },
    { path: "/projects/smartcontact", name: "smartcontact", component: () => import("@/views/projects/ProjectSmartcontact.vue") },
    { path: "/projects/ubisoft",      name: "ubisoft",      component: () => import("@/views/projects/ProjectUbisoft.vue") },
  ],
});

export default router;
