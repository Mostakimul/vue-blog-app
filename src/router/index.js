import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BlogDetails from '@/views/BlogDetails';
import CreateBlog from '@/views/CreateBlog.vue';
import BlogTag from '@/views/BlogTag.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true,
  },
  {
    path: '/create-blog',
    name: 'CreateBlog',
    component: CreateBlog,
  },
  {
    path: '/tag-blog/:tag',
    name: 'BlogTag',
    component: BlogTag,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
