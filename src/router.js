import { createWebHistory, createRouter } from "vue-router";
import Form from "@/views/Form.vue";
import Preview from "@/views/Preview.vue";

const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/preview",
    name: "Preview",
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
