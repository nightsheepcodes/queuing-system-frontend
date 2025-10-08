import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Login from '../components/Login.vue';
import Queue from '../components/Queue.vue';

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/queue', name: 'queue', component: Queue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;