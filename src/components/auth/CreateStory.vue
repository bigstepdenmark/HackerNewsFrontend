<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <successbox :successMessage="successMessage"></successbox>
        <errorsbox :errors="errors"></errorsbox>

        <div class="well">
          <h2 class="text-center">Create Story</h2>
          <hr>
          <div>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" name="title" placeholder="Enter title" v-model="story.title">
            </div>
            <div class="form-group">
              <label for="text">Description</label>
              <textarea class="form-control" id="text" name="text" rows="6" placeholder="Enter description" v-model="story.text"></textarea>
            </div>
            <div class="form-group">
              <label for="url">URL</label>
              <input type="text" class="form-control" id="url" name="url" placeholder="http://thestory.com" v-model="story.url">
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-dark" @click="createStory">Create Story</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Errorsbox from "../layout/Errorsbox";
  import Successbox from "../layout/SuccessBox";
  import {post} from '../../utils/functions'

  export default {
    components: {'errorsbox': Errorsbox, 'successbox': Successbox,},
    data() {
      return {
        story: {
          title: null,
          text: null,
          url: null
        },
        errors: {
          message: null,
          errors: []
        },
        successMessage: null
      }
    },

    methods: {
      createStory() {
        this.errors.message = null
        this.errors.errors = []
        this.successMessage = null

        if (this.$auth.isAuthenticated()) {

          var config = {
            headers: {
              Accept: 'application/json',
              Authorization: "Bearer " + this.$auth.getToken(),
            }
          };

          var data = {
            title: this.story.title,
            text: this.story.text,
            url: this.story.url
          }

          post('http://localhost:9000/api/stories/store', data, config).then(response => {

            this.successMessage = response.message;

            this.story = {};

          }).catch(error => {
            //console.log('error', error.response);
            this.errors.message = error.response.data.message;
            this.errors.errors = error.response.data.errors;
          });
        }

      }
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
