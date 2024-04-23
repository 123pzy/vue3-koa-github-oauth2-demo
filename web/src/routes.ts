import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/Index.vue';
import Redirect from './components/Redirect.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/oauth/redirect',
    name: 'redirect',
    component: Redirect,
  },
];
const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});
export { router };
