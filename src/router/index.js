import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BlogPostDetails from '@/components/BlogPostDetails.vue';
import CreateBlog from '@/views/CreateBlog.vue';

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
  {
    path: '/create-blog',
    name: 'CreateBlog',
    component: CreateBlog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
