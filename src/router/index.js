import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ServicesView from '../views/ServicesView.vue';
import UponView from '../views/UponView.vue';
import ReceptView from '../views/ReceptView.vue';
import LoginView from '../views/LoginView.vue';
import FormView from '../views/FormView.vue';
import MainView from '../views/MainView.vue';

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
  {
    path: '/recept',
    name: 'Recept',
    component: ReceptView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/form',
    name: 'Form',
    component: FormView,
  },
  {
    path: '/main',
    name: 'Main',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
