<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #ff6600;">
    <router-link class="navbar-brand" style="color:#343a40;" to="/">Hacker News</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item" v-for="item in items">
          <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
        </li>

      </ul>
      <ul class="nav navbar-nav justify-content-end">
        <li class="nav-item">
          <router-link class="btn btn-dark btn-md" :to="{ name: 'login'}" v-if="!isAuth">Login
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </router-link>
          <router-link class="btn btn-light btn-md" :to="{ name: 'register'}" role="button" v-if="!isAuth">Register
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </router-link>
        </li>

        <li class="nav-item dropdown" v-if="isAuth">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
             aria-expanded="false">
            Welcome to H.N
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/profile"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Profile</router-link>
            <router-link class="dropdown-item" to="/createstory"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Create Story</router-link>
            <a class="dropdown-item text-danger" @click="logout" style="cursor: pointer"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
  //import {get} from '../../utils/functions'

  export default {
    props: ['items', 'isAuth', 'logout']

/*    methods: {
      setAuthenticatedUser() {

        if (this.$auth.isAuthenticated()) {

          var config = {
            headers: {
              Accept: 'application/json',
              Authorization: "Bearer " + this.$auth.getToken(),
            }
          };


          get('http://localhost:9000/api/user', config).then(response => {

            this.$auth.setAuthenticatedUser(response);
            console.log('Authenticated User', this.$auth.getAuthenticatedUser());

          }).catch(error => {
            console.log('error');
            console.log(error.response);
          });
        }

      }
    },
    created() {
      this.setAuthenticatedUser();
    }**/
  }
</script>

<style>
</style>
