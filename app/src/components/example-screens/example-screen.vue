<template>
	<div class="hello-world">
		<div>
			<h1>
				Example Page
			</h1>
			<p>
				Chupa chups powder lemon drops powder oat cake I love tart. Gingerbread I love wafer. I love gingerbread topping toffee donut tiramisu marshmallow.

Bear claw sweet roll sesame snaps bear claw jelly beans. Cookie cake I love icing ice cream tart tart. Chupa chups lemon drops I love caramels jujubes sugar plum ice cream. Cookie candy canes wafer icing caramels sesame snaps marzipan chocolate cake.
			</p>
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
