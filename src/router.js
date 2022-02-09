import { createWebHashHistory, createRouter } from "vue-router";
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
  history: createWebHashHistory(),
  routes,
});

export default router;
