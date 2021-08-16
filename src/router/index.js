import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BlogPostDetails from '@/components/BlogPostDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: 'BlogPostDetails',
    component: BlogPostDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
