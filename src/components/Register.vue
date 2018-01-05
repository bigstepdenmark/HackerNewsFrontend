<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="well">
          <h2 class="text-center">Create account</h2>
          <hr>
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address" v-model="user.email">
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
              <label for="password_confirm">Password Confirm</label>
              <input type="password" class="form-control" id="password_confirm" name="password_confirm" placeholder="Confirm password"
                     v-model="user.password_confirm">
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-dark">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: null,
          username: null,
          password: null,
          password_confirm: null
        }
      }
    },
  }
</script>
