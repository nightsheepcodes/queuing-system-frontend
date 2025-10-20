import { createRouter, createWebHistory } from 'vue-router';

// Components imports
import Login from '../components/Login.vue';
import Queue from '../components/Queue.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import Tickets from '../components/dashboard/Tickets.vue';
import QueueList from '../components/dashboard/QueueList.vue';
//import QueueList from '../components/dashboard/QueueList.vue';

const routes = [
  { path: '/', name: 'home', component: Queue },
  { path: '/queue', name: 'queue', component: Queue },
  { path: '/login', name: 'login', component: Login },
  //{ path: '/', redirect: '/queue' },

  { path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'tickets', component: Tickets },
      { path: 'queue-list', component: QueueList },
    ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;