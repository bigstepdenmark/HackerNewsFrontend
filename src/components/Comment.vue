<template lang="html">
  <div class="post" v-if="comment">
    <p class="post__body">{{ comment.comment }}</p>
    <p class="post__id">{{ comment.id }}</p>
    <hr>
    <p class="post__body"><i class="fa fa-user-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Posted by"></i> {{
      comment.user }}
      <span class="float-right">
          <span class="badge badge-pill badge-dark" data-toggle="tooltip" data-placement="top" title="Parent comment id">
            Parent id: {{ comment.parent_id }}
          </span>
          <span class="badge badge-pill badge-success" data-toggle="tooltip" data-placement="top" title="Created at">
            <i class="fa fa-calendar" aria-hidden="true"></i> {{ comment.created_at.date }}
          </span>
        </span>
    <div class="clearfix"></div>
    </p>
  </div>
</template>

<script>
  import {get} from '../utils/functions'

  export default {
    props: ['id'],

    data() {
      return {
        comment: null,
      }
    },

    methods: {
      getComment(id) {
        get(this.$apiUrl + 'comments/' + id).then(data => this.comment = data.data);
      }
    },

    created() {
      this.getComment(this.id);
    },

    watch: {
      '$route'() {
        this.getComment(this.id);
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
