<template>
	<div class="hello-world">
		<div>
			<h1>
				Example List of Users
			</h1>
			<p>Amount of pageChanges: {{ count }}</p>
			<div>
				<button @click="fetchUsers" v-bind:class="{ isLoading: loading }">
					<div class="loader"></div>
					Fetch users
				</button>
			</div>
			<div>
				<p class="user" v-for="user in users">{{user.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		users() {
			return this.$store.state.users
		},
		loading() {
			return this.$store.state.loading
		},
		count() {
			return this.$store.state.pageChanges
		}
	},
	methods: {
		fetchUsers() {
			// Dispatch a request to the Store to fetch the users
			this.$store.dispatch('fetchUsers');
		}
	},
	beforeDestroy() {
		// Clear the user array before we destroy this component
		this.$store.commit('clearUsers');
	}
}
</script>

<style lang="scss" scoped>
	@import '../swag';

	div.hello-world {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 100vh;
	}

	button {
		background: $asphalt;
		padding: $gutter / 2 $gutter;
		border: 0;
		outline: 0;
		cursor: pointer;
		color: #fff;
		@include transition;
		position: relative;

		.loader {
		    border: 2px solid #fff; /* Light grey */
		    border-top: 2px solid $jeans; /* Blue */
		    border-radius: 50%;
		    width: 18px;
		    height: 18px;
		    animation: spin 2s linear infinite;
			position: absolute;
			top: 11px;
			left: 16px;
			display: none;
		}

		&.isLoading {
			padding-left: $gutter * 2;

			.loader {
				display: block;
			}
		}

		&:hover {
			background: $asphalt-shade;
		}
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	h1 {
		font-size: 2em;
		font-weight: 100;
		color: $secondary-lighter;
		padding: 0;

		@include size('large') {
			color: lighten($royal, 5%);
		}

		@include size('medium') {
			color: $strawberry;
		}

		@include size('small') {
			color: $pumpkin;
			font-size: 1.5em;
		}
	}

	p {
		font-size: 14px;
		font-weight: 300;
		color: $secondary;
		padding: 0 $gutter;
		max-width: 600px;
		line-height: 24px;

		@include size('small') {
			font-size: .9em;
		}
	}

	h1, h2 {
		text-align: center;
		@include transition(color, 5s, $easeOutQuart);
	}

	.user {
		animation: fadeInUser .6s ease-in;
		animation-fill-mode: forwards;
		height: 0;
		opacity: 0;

		@for $i from 1 through 15 {
			&:nth-of-type(#{$i}) {
				animation-delay: #{$i * 60}ms;
			}
		}
	}

	@keyframes fadeInUser {
		from { opacity: 0; height: 0; }
		to { opacity: 1; height: auto; }
	}
</style>
