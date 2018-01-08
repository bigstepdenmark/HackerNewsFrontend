<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <successbox :successMessage="successMessage"></successbox>
        <errorsbox :errors="errors"></errorsbox>

        <div class="well">
          <h2 class="text-center">Edit account</h2>
          <hr>
          <div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name" placeholder="Enter your  name" v-model="user.name">
            </div>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" v-model="user.username">
            </div>
            <div class="form-group">
              <label for="about">About</label>
              <textarea class="form-control" id="about" name="about" rows="6" v-model="user.about">{{user.about}}</textarea>
            </div>
            <button class="btn btn-lg btn-block btn-dark" @click="updateUser">Save profile</button>
          </div>
          <hr>
          <div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" v-model="user.password">
            </div>
            <div class="form-group">
              <label for="password_confirmation">Password Confirm</label>
              <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirm password"
                     v-model="user.password_confirmation">
            </div>
            <button class="btn btn-lg btn-block btn-warning" @click="updatePassword">Change password</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {get, post} from '../../utils/functions'
  import Errorsbox from "../layout/Errorsbox";
  import Successbox from "../layout/SuccessBox";

  export default {
    components: {
      'successbox': Successbox,
      'errorsbox': Errorsbox
    },
    data() {
      return {
        user: {},
        errors: {
          message: null,
          errors: []
        },
        successMessage: null
      }
    },
    methods: {
      getAuthenticatedUser() {

        this.errors.message = null
        this.errors.errors = []
        this.successMessage = null

        if (this.$auth.isAuthenticated()) {

          let config = {
            headers: {
              Accept: 'application/json',
              Authorization: "Bearer " + this.$auth.getToken(),
            }
          };

          get('http://localhost:9000/api/user', config).then(response => {

            this.user = response;

          }).catch(error => {
            //console.log('error', error.response);
            this.errors.message = error.response.data.message;
            this.errors.errors = error.response.data.errors;
          });
        }
      },
      updateUser() {

        this.errors.message = null
        this.errors.errors = []
        this.successMessage = null

        let config = {
          headers: {
            Accept: 'application/json',
            Authorization: "Bearer " + this.$auth.getToken(),
          }
        };

        let data = {
          name: this.user.name,
          username: this.user.username,
          about: this.user.about
        }

        post('http://localhost:9000/api/users/update', data, config).then(response => {

          this.successMessage = response.message;

          this.user = response.user;

          console.log('updated', response)

        }).catch(error => {
          console.log('error');
          console.log(error.response);
          this.errors.message = error.response.data.message;
          this.errors.errors = error.response.data.errors;
        });
      },
      updatePassword() {

        this.errors.message = null
        this.errors.errors = []
        this.successMessage = null

        var config = {
          headers: {
            Accept: 'application/json',
            Authorization: "Bearer " + this.$auth.getToken(),
          }
        };

        var data = {
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
        }

        post('http://localhost:9000/api/users/updatepass', data, config).then(response => {

          this.successMessage = response.message;

          this.user = response.user;

          console.log('updated pass', response)

        }).catch(error => {
          console.log('error');
          console.log(error.response);
          this.errors.message = error.response.data.message;
          this.errors.errors = error.response.data.errors;

          this.getAuthenticatedUser();

        });
      }
    },
    created() {
      this.getAuthenticatedUser();
    }
  }
</script>

<style lang="scss" scoped>
  .well {
    background: #f3f3f3;
    padding: 30px;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
  }
</style>
