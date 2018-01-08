<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <errorsbox :errors="errors"></errorsbox>

        <div class="well">
          <h2 class="text-center">Login</h2>
          <hr>

          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" v-model="user.password">
          </div>
          <button @click="login" class="btn btn-lg btn-block btn-dark">Login</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {post} from '../utils/functions'
  import Errorsbox from "./layout/Errorsbox";

  export default {
    components: {'errorsbox': Errorsbox},
    data() {
      return {
        user: {
          username: null,
          password: null
        },
        errors: {
          message: null,
          errors: []
        }
      }
    },
    methods: {
      login() {

        // Reset error box
        this.errors.message = null
        this.errors.errors = []

        // Auth data to API
        let data = this.$auth.getAuthRequestData(this.user.username, this.user.password);

        // Request for an token
        post('http://localhost:9000/oauth/token', data).then(response => {

          // Save the token in localStorage
          this.$auth.setToken(response.access_token, response.expires_in + Date.now())

          // Redirect to profile page
          this.$router.push('/profile');

          // Reload app (resolves auth button behavior in navigation bar)
          location.reload()

          // If any error occurs, then show error box with errors
        }).catch(error => {
          this.error.message = error.response.data.message;
          this.errors.errors = error.response.data.errors;
        });
      }
    },
  }
</script>
