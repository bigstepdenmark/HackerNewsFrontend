<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './layout/Nav'

  export default {
    components:{
      'navbar' : Navbar
    },
  }
</script>
