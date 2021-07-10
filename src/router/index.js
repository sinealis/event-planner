import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import NewEvent from "@/components/NewEvent.vue";
import ViewEvent from "@/components/ViewEvent.vue";
import EditEvent from "@/components/EditEvent.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/new",
    name: "new-event",
    component: NewEvent,
  },
  {
    path: "/:event_id",
    name: "view-event",
    component: ViewEvent,
  },
  {
    path: "/edit/:event_id",
    name: "edit-event",
    component: EditEvent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
