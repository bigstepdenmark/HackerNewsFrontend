/*
|--------------------------------------------------------------------------
| Imports
|--------------------------------------------------------------------------
*/
import Vue from 'vue';
import App from './components/App.vue';
import Router from './routes';
import VueResource from 'vue-resource';
import Auth from './components/packages/auth/Auth';


/*
|--------------------------------------------------------------------------
| Uses
|--------------------------------------------------------------------------
*/
Vue.use(VueResource);
Vue.use(Auth);


/*
|--------------------------------------------------------------------------
| Global variables
|--------------------------------------------------------------------------
| These semi-global variables is available to each Vue instance by defining them on the prototype.
| Source: https://vuejs.org/v2/cookbook/adding-instance-properties.html#Simple-Example
| Production url: http://165.227.136.184/api/
| Local: url http://localhost:9000/api/
*/
Vue.prototype.$apiUrl = 'http://localhost:9000/api/';


/*
|--------------------------------------------------------------------------
| Instantiations
|--------------------------------------------------------------------------
*/
new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
});
