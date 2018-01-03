<template>

<div class="container-fluid">
  <h1 class="display-4">Stories</h1>
  <p class="lead">latest {{posts.length}} stories</p>
  <hr>
  <div class="row">
    <div class="col-md-4" style="border-right:1px solid #e6e6e6; overflow:auto; height:650px">
      <div class="container">
        <div v-for="post in posts" style="margin-bottom: 20px;">
            <router-link
              active-class="is-active"
              class="link"
              :to="{ name: 'story', params: { id: post.id } }">
              {{post.id}}. {{post.title | printsub}}
            </router-link>
            <span v-html="$options.filters.username(post.user)"></span> <span v-html="$options.filters.point(post.points)"></span>
            <hr>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      endpoint: 'http://165.227.136.184/api/stories',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      axios.get(this.endpoint)
        .then(response => {
          this.posts = response.data.data;
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        })
    }
  },
  filters: {
  printsub: function (value) {
    if (value.length <= 45) return value;
    return value.substring(0, 45) + '...';
  },
  username: function (value) {
    return '<span class="badge badge-pill badge-warning" data-toggle="tooltip" data-placement="top" title="Posted by"><i class="fa fa-user-circle-o" aria-hidden="true"></i> ' + value + '</span>';
  },
  point: function (value) {
    return '<span class="badge badge-pill badge-dark" data-toggle="tooltip" data-placement="top" title="Points"><i class="fa fa-star" aria-hidden="true"></i> ' + value + '</span>';
  },
}
}
</script>

<style lang="scss">
  .link {
    display: block;
    text-decoration: none;
    margin-bottom: 0px;
    color: #2c3e50;
    &--home {
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    &.is-active {
      color: #ff6600;
    }
  }
</style>