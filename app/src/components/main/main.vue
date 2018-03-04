<template>
	<!-- Insert your Vue components here -->
	<HelloWorld :message="defaultMessage"></HelloWorld>
</template>

<script>
import HelloWorld from '../hello-world/hello-world.vue'; // Remove this example

export default {
	props: [ 'router' ],
	components: {
		HelloWorld	// Remove me and add your own components
	},
	data: () => {
		return {
			defaultMessage: "Welcome to the Boiler" // The default welcome message..
		}
	}
}
</script>
