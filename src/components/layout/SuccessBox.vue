<template>
  <div class="alert alert-success" role="alert" v-if="successMessage">
    <p class="alert-heading"><i class="fa fa-check" aria-hidden="true"></i> <b>{{successMessage}}</b></p>
  </div>
</template>

<script>
  export default {
    props: ['successMessage']
  }
</script>
