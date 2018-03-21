<template>
	<div class="hello-world">
		<div>
			<h1>
				Todo List
			</h1>
			<p>Tasks todo: <strong>{{ tasksLeft }}</strong> of <strong>{{ tasksTotal }}</strong></p>
			<p>This page is demonstrating a Store that is not a part of the Global store.</p>
			<div>
				<ul v-for="todo in todoItems">
					<li v-bind:class="{ done: todo.done }" @click="toggleTask(todo)">
						{{ todo.text }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import todoStore from '../../stores/todo-list';

export default {
	computed: {
		todoItems() {
			return todoStore.getters.todoItems
		},
		tasksLeft() {
			return todoStore.getters.tasksLeft
		},
		tasksTotal() {
			return todoStore.getters.tasksTotal
		},
		count() {
			return this.$store.state.pageChanges
		}
	},
	methods: {
		toggleTask(todo) {
			todoStore.commit('toggleTask', {
				todo
			});

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

	ul {
		width: 400px;
		margin: 0 auto;
		text-align: left;
		list-style-type: none;

		li {
			line-height: 30px;
			@include transition;
			cursor: pointer;
			position: relative;

			&:before, &:after {
				content: '';
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background: #fff;
				position: absolute;
				left: -30px;
				top: 50%;
				transform: translateY(-50%);
				display: block;
			}

			&:after {
				display: none;
			}

			&:hover {
				opacity: .8;
			}

			&.done:after {
				display: block;
				width: 12px;
				height: 12px;
				background: $avocado;
				left: -26px;
			}
		}
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
