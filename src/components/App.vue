<template>
  <div id="app">
    <navbar :items="items" :isAuth="isAuth" :logout="logout"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './layout/Nav'

  export default {
    components: {
      'navbar': Navbar,
    },
    data() {
      return {
        items: [{name: 'Home', path: '/'},
          {name: 'Stories', path: '/stories'},
          {name: 'Comments', path: '/comments'}],
        isAuth: null,
      }
    },
    methods: {
      logout() {
        this.$auth.destroyToken();

        // Redirect user to home page
        this.$router.push('/');

        // reload app
        location.reload()
      },
    },
    created() {
      this.isAuth = this.$auth.isAuthenticated();
    },

  }
</script>
