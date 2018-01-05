<template lang="html">
  <div class="container">
	    <div class="jumbotron">
		  <h1 class="display-4">Welcome to Hacker News</h1>
		  <p class="lead">Created by Ismail Cam, Mazlum D. Sert, Mustafa Hakimi and Mert Turan</p>
		  <hr class="my-4">
		  <p>You need to login first before you can add a Story or Comment</p>
		  <p class="lead">
		    <router-link class="btn btn-dark btn-lg" :to="{ name: 'login'}" role="button">Login <i class="fa fa-sign-in" aria-hidden="true"></i></router-link>
			  <router-link class="btn btn-light btn-lg" :to="{ name: 'register'}" role="button">Register <i class="fa fa-user-plus" aria-hidden="true"></i></router-link> <small>or</small>
		    <router-link class="btn btn-success btn-lg" :to="{ path: '/stories'}" role="button">Stories</router-link>
		  </p>
		</div>
	</div>
</template>
