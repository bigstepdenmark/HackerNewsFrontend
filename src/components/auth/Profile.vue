<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="well">
					<h2 class="text-center">Edit account</h2>
					<hr>
					<form>
						<div class="form-group">
							<label for="email">Email address</label>
							<input type="email" class="form-control" id="email" name="email" placeholder="Enter email address" v-model="user.email">
						</div>
						<div class="form-group">
							<label for="username">Username</label>
							<input type="text" class="form-control" id="username" name="username" placeholder="Enter username" v-model="user.username">
						</div>
						<div class="form-group">
							<label for="about">About</label>
							<textarea class="form-control" id="about" name="about" rows="6">{{user.about}}</textarea>
						</div>
						<button type="submit" class="btn btn-lg btn-block btn-dark">Save profile</button>
					</form>
					<hr>
					<form>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" class="form-control" id="password" name="password" placeholder="Enter password">
						</div>
						<div class="form-group">
							<label for="password_confirm">Password Confirm</label>
							<input type="password" class="form-control" id="password_confirm" name="password_confirm" placeholder="Confirm password">
						</div>
						<button type="submit" class="btn btn-lg btn-block btn-dark">Change password</button>
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
                user: {email: "i@bigstep.dk", username: "Ismail", about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"},
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