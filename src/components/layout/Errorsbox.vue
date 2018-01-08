<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="errors.message">
      <p class="alert-heading"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <b>{{errors.message}}</b></p>
      <hr v-if="errors.errors">
      <div class="mb-0" v-for="error in errors.errors">
        <p class="mb-0" v-for="er in error">- {{er}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['errors']
  }
</script>
