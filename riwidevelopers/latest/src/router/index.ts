import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from '../components/UserProfile.vue';
import UserProjects from '../components/UserProjects.vue';
import UserTeams from '../components/UserTeams.vue';

const routes = [
  { path: '/', component: UserProfile },
  { path: '/projects', component: UserProjects },
  { path: '/teams', component: UserTeams },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
