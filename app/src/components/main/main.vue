<template>
	<h1 :class="type">{{message}}</h1>
</template>

<script>
export default {
	props: [ 'type', 'message' ]
}
</script>

<style scoped>
	h1 {
		font-size: 2em;
		text-align: center;
	}
</style>
