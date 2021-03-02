import { createRouter, createWebHistory } from "vue-router";

import Main from "./views/Main.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;