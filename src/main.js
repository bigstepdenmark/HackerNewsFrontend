import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Story from './components/Story.vue';
import Home from './components/Home.vue';
import Stories from './components/Stories.vue';
import StoryDefault from './components/StoryDefault.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

// Auth routes
import Profile from './components/auth/Profile.vue';
import CreateStory from './components/auth/CreateStory.vue';

Vue.use(Router);

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
                              },
                              {
                                path: '/login',
                                name: 'login',
                                component: Login,
                              },
                              {
                                path: '/profile',
                                name: 'profile',
                                component: Profile,
                              },
                              {
                                path: '/createstory',
                                name: 'createstory',
                                component: CreateStory,
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
                            ],
                            scrollBehavior(to, from, savedPosition){
                              return {x: 0, y: 0};
                            },
                          });

new Vue({
          el: '#app',
          render: h => h(App),
          router,
        });
