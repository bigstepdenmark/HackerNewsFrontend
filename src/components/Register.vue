<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="well">
					<h2 class="text-center">Create account</h2>
					<hr>
					<form>
						<div class="form-group">
							<label for="email">Email address</label>
							<input type="text" class="form-control" id="email" name="email" placeholder="Enter email address">
						</div>
						<div class="form-group">
							<label for="username">Username</label>
							<input type="text" class="form-control" id="username" name="username" placeholder="Enter username">
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" class="form-control" id="password" name="password" placeholder="Enter password">
						</div>
						<button type="submit" class="btn btn-lg btn-block btn-dark">Register</button>
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