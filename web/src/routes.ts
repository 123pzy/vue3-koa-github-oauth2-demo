import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/Index.vue';
import Hello from './components/Hello.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
];
const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});
export { router };
