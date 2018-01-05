<template>

  <div class="container-fluid">
    <h1 class="display-4">Stories</h1>
    <p class="lead">latest {{stories.length}} stories</p>
    <hr>
    <div class="row">
      <div class="col-md-4" style="border-right:1px solid #e6e6e6; overflow:auto; height:650px">
        <div class="container">
          <div v-for="story in stories" style="margin-bottom: 20px;">
            <router-link
              active-class="is-active"
              class="link"
              :to="{ name: 'story', params: { id: story.id } }">
              {{story.id}}. {{story.title | printsub}}
            </router-link>
            <span v-html="$options.filters.username(story.user)"></span> <span v-html="$options.filters.point(story.points)"></span>
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

  import {get} from '../utils/functions'
  import {gLobalfilters} from '../utils/filters'

  export default {
    data() {
      return {
        stories: null,
      }
    },
    created() {
      get(this.$apiUrl + 'stories').then(data => this.stories = data);
    },
    methods: {},
    filters: gLobalfilters,
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
