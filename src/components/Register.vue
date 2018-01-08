<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <errorsbox :errors="errors"></errorsbox>

        <div class="well">
          <h2 class="text-center">Create account</h2>
          <hr>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" v-model="user.name">
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" v-model="user.password">
          </div>
          <div class="form-group">
            <label for="password_confirmation">Password Confirm</label>
            <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirm password"
                   v-model="user.password_confirmation">
          </div>
          <button class="btn btn-lg btn-block btn-dark" @click="register">Register</button>
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
          name: null,
          username: null,
          password: null,
          password_confirmation: null
        },
        errors: {
          message: null,
          errors: []
        }
      }
    },

    methods: {
      register() {

        this.errors.message = null
        this.errors.errors = []

        let data = {
          name: this.user.name,
          username: this.user.username,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
        }

        post('http://localhost:9000/api/users/register', data).then(response => {

          let data = this.$auth.getAuthRequestData(this.user.username, this.user.password);

          post('http://localhost:9000/oauth/token', data).then(response => {

            this.$auth.setToken(response.access_token, response.expires_in + Date.now())

            // Redirect user to profile page
            this.$router.push('/profile');

            // Reload app (resolves auth button behavior in navigation bar)
            location.reload()

          }).catch(error => {
            console.log(error.response);
            this.errors.message = error.response.data.message;
            this.errors.errors = error.response.data.errors;
          });

        }).catch(error => {
          console.log(error.response);
          this.errors.message = error.response.data.message;
          this.errors.errors = error.response.data.errors;
        });
      }
    }
  }
</script>
