<template>
	<h1>{{message}}</h1>
</template>

<script>
module.exports = {
	data: function() {
		return {
			message: 'Hello World'
		}
	}
}
</script>

<style scoped>
	h1 {
		font-size: 2em;
		text-align: center;
	}
</style>
