// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import triviaGift from '../views/triviaGift.vue';
import questionView from '../components/questionView.vue';
import endTrivia from '../views/endTrivia.vue';

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
  },
  {
    path: '/endTrivia',
    name: 'endTrivia',
    component: endTrivia
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
