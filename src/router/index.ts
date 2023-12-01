import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add-new-task',
    name: 'add-new-task',
    component: () => import('../views/AddNoteView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
