import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ServicesView from '../views/ServicesView.vue';
import UponView from '../views/UponView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },

  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
  },

  {
    path: '/upon',
    name: 'Upon',
    component: UponView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
