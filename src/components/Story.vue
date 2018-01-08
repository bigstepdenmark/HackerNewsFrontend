<template lang="html">
  <div class="post" v-if="story">
    <h1 class="post__title">{{ story.title }}</h1>
    <p class="post__body">{{ story.text }}</p>
    <p class="post__id">{{ story.id }}</p>
    <hr>
    <p class="post__body"><i class="fa fa-user-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Posted by"></i> {{
      story.user }}
      <span class="float-right">
          <span class="badge badge-pill badge-dark" data-toggle="tooltip" data-placement="top" title="Points">
            <i class="fa fa-star" aria-hidden="true"></i> {{ story.points }}
          </span>
          <span class="badge badge-pill badge-success" data-toggle="tooltip" data-placement="top" title="Hanesst ID">
            <i class="fa fa-id-badge" aria-hidden="true"></i> {{ story.hanesst_id }}
          </span>
        </span>
    <div class="clearfix"></div>
    </p>
    <a class="post__body" :href="story.url" target="_blank"><i class="fa fa-external-link-square" aria-hidden="true"></i> {{ story.url }}</a>
    <br>
    <div class="btn-group btn-group-sm" role="group" aria-label="" style="margin-top: 20px">
      <button type="button" class="btn btn-warning">Up-vote <i class="fa fa-arrow-up" aria-hidden="true"></i></button>
      <button type="button" class="btn btn-dark">Down-vote <i class="fa fa-arrow-down" aria-hidden="true"></i></button>
    </div>
  </div>
</template>

<script>
  import {get} from '../utils/functions'

  export default {
    props: ['id'],

    data() {
      return {
        story: null,
      }
    },

    methods: {
      getStory(id) {
        get(this.$apiUrl + 'stories/' + id).then(data => this.story = data.data);
      }
    },

    created() {
      this.getStory(this.id);
    },

    watch: {
        '$route'() {
          this.getStory(this.id);
        }
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    padding: 50px 20px 70px;
    &__title {
      position: relative;
      text-transform: uppercase;
      z-index: 1;
    }
    &__body {
      position: relative;
      z-index: 1;
    }
    &__id {
      position: absolute;
      font-size: 280px;
      bottom: -50px;
      margin: 0;
      color: #eeeeee;
      right: -20px;
      line-height: 1;
      font-weight: 900;
      z-index: 0;
    }
  }
</style>
