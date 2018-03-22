<template>
	<div>
		<!-- Insert your Vue components here -->

		<!-- Example navigation bar, replace with your own. -->
		<nav>
			<router-link to="/" v-on:click.native="changePage">Home</router-link>
			<router-link to="/todos" v-on:click.native="changePage">Todo List</router-link>
			<router-link to="/example" v-on:click.native="changePage">Example Request</router-link>
			<router-link to="/detail/1" v-on:click.native="changePage">Blog Post</router-link>
		</nav>

	  	<!-- DO NOT TOUCH -->
	  	<router-view></router-view>
		<!-- Your route templates will end up here. -->
	</div>
</template>

<script>
export default {
	props: [
		// Add props here that you pass in bootstrap.js
	],
	components: {
		// Add components that you want to render in your master layout
	},
	methods: {
		changePage() {
			this.$store.commit('incrementPageChanges')
		}
	}
}
</script>

<style lang="scss" scoped>
	@import 'swag';

	nav {
		background: #fff;
		position: fixed;
		width: 100%;
		text-align: center;
		padding: $gutter;
		@include box-shadow;
		top: 0;
		left: 0;

		a {
			color: $secondary;
			text-decoration: none;
			text-transform: uppercase;
			font-size: 14px;
			margin: 0 $gutter;
			@include hover-underline($jeans);

			@include size('medium') {
				display: block;
				margin: $gutter / 2 0;
			}
		}

		@include size('medium') {
			padding: $gutter 0;
		}
	}
</style>
