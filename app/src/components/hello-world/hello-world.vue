<template>
	<div class="welcome-message">
		<div>
			<h1>
				{{message}}
			</h1>
			<h2>
				Remove the HelloWorld component to get rid of me and write your own components 🤪
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'message' ]
}
</script>

<style lang="scss" scoped>
	@import '../swag';

	div.welcome-message {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	h1 {
		font-size: 2em;
		font-weight: 100;
		color: $secondary-lighter;

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

	h2 {
		font-size: 1em;
		font-weight: 300;
		color: $secondary;

		@include size('large') {
			color: $royal;
		}

		@include size('medium') {
			color: $hibiscus;
		}

		@include size('small') {
			color: $carrot;
			font-size: .9em;
		}
	}

	h1, h2 {
		text-align: center;
		padding: 0 $gutter;
		@include transition(color, 5s, $easeOutQuart);
	}
</style>
