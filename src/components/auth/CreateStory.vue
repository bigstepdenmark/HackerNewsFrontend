<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="well">
					<h2 class="text-center">Create Story</h2>
					<hr>
					<form>
						<div class="form-group">
							<label for="title">Title</label>
							<input type="text" class="form-control" id="title" name="title" placeholder="Enter title">
						</div>
						<div class="form-group">
							<label for="description">Description</label>
							<textarea class="form-control" id="description" name="description" rows="6" placeholder="Enter description"></textarea>
						</div>
						<div class="form-group">
							<label for="url">URL</label>
							<input type="text" class="form-control" id="url" name="url" placeholder="http://thestory.com">
						</div>
						<button type="submit" class="btn btn-lg btn-block btn-dark">Create Story</button>
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
        post: null,
      }
    },
  }
</script>

<style lang="scss" scoped>
	.well{
		background: #f3f3f3;
		padding: 30px;
		border-radius: 6px;
		-moz-border-radius: 6px;
		-webkit-border-radius: 6px;
	}
</style>