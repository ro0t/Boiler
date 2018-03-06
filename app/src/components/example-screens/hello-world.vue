<template>
	<div class="hello-world">
		<div>
			<h1>
				Welcome to the boiler!
			</h1>
			<h2>
				You've successfully installed the framework, now go make an awesome application! 🤪
			</h2>
		</div>
	</div>
</template>

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

	h2 {
		font-size: 1em;
		font-weight: 300;
		color: $secondary;
		padding: 0 $gutter;

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
		@include transition(color, 5s, $easeOutQuart);
	}
</style>
