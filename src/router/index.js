import { createWebHistory, createRouter } from 'vue-router';

// Routes
import Home from '@/views/Home';
import NestedRoute from '@/views/NestedRoute';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/nested-route',
    name: 'NestedRoute',
    component: NestedRoute,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

