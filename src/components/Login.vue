<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="well">
          <h2 class="text-center">Login</h2>
          <hr>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" v-model="user.username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-dark">Login</button>
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
          username: null,
          password: null
        }
      }
    },
  }
</script>
