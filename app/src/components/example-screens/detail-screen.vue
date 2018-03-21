<template>
	<div class="hello-world">
		<div>
			<h1>
				Detail for id: {{$route.params.id}}
			</h1>
			<p>Amount of pageChanges: {{ count }}</p>
			<p>
				Carrot cake pastry marzipan bonbon. Croissant sweet bear claw donut pastry. Brownie macaroon apple pie marshmallow sesame snaps jelly beans cake tootsie roll. Jelly-o carrot cake gummies sweet roll biscuit marzipan tootsie roll.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		count() {
			return this.$store.state.pageChanges
		}
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
</style>
