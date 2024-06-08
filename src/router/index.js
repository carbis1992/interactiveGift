// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import triviaGift from '../views/triviaGift.vue';
import questionView from '../components/questionView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: triviaGift
  },
  {
    path: '/question/:id',
    name: 'questionView',
    component: questionView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
