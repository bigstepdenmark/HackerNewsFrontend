<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #ff6600;">
      <router-link class="navbar-brand" style="color:#343a40;" to="/">Hacker News</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
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
        <router-link class="btn btn-dark btn-md" :to="{ name: 'login'}" v-if="!isAuth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></router-link>
        <router-link class="btn btn-light btn-md" :to="{ name: 'register'}" role="button" v-if="!isAuth">Register <i class="fa fa-user-plus" aria-hidden="true"></i></router-link>
        <a class="btn btn-dark btn-md" role="button" v-if="isAuth">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
      </li>
    </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{name: 'Home', path: '/'},
              {name: 'Stories', path: '/stories'},
              {name: 'Comments', path: '/'}],
      isAuth: false,
    }
  }
}
</script>