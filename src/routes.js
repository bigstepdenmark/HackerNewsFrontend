/*
|--------------------------------------------------------------------------
| Imports
|--------------------------------------------------------------------------
*/
import Vue from 'vue';
import Router from 'vue-router';

// Vue Components
import Story from './components/Story.vue';
import Home from './components/Home.vue';
import Stories from './components/Stories.vue';
import StoryDefault from './components/StoryDefault.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Comments from './components/Comments.vue';
import Comment from './components/Comment.vue';

// Vue Auth Components
import Profile from './components/auth/Profile.vue';
import CreateStory from './components/auth/CreateStory.vue';


/*
|--------------------------------------------------------------------------
| Uses
|--------------------------------------------------------------------------
*/
Vue.use(Router);


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
| Source: https://router.vuejs.org/en/essentials/getting-started.html
*/
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        forGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        forGuest: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/createstory',
      name: 'createstory',
      component: CreateStory,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/stories',
      name: 'stories',
      component: Stories,
      children: [
        {
          path: ':id',
          name: 'story',
          component: Story,
          props: true,
        },
        {
          path: '',
          name: 'storydefault',
          component: StoryDefault,
        }],
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments,
      children: [
        {
          path: ':id',
          name: 'comment',
          component: Comment,
          props: true,
        },
        {
          path: '',
          name: 'storydefault',
          component: StoryDefault,
        }],
    },
  ],
  // Scroll to top every navigation.
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  },
});


/*
|--------------------------------------------------------------------------
| Navigation Guards (Middlewares)
|--------------------------------------------------------------------------
| Source: https://router.vuejs.org/en/advanced/navigation-guards.html
*/
router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forGuest)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: "/profile"
        })
      } else next()
    } else next()
  }
);

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: "/login"
        })
      } else next()
    } else next()
  }
);

// Export router
export default router;
