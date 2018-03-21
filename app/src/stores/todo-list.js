import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default (new Vuex.Store({
	state: {
		todos: [
			{ id: 1, text: 'Install the boiler framework 🔥', done: true },
			{ id: 2, text: 'Buy groceries 🛒', done: false },
			{ id: 3, text: 'Create an awesome website 🤟', done: false },
			{ id: 4, text: 'Change the cats 🐈 diaper', done: false },
			{ id: 5, text: 'Implement the todo list as a part of the global store', done: false }
		]
	},
	mutations: {
		toggleTask(state, { todo }) {
			todo.done = !todo.done;
		}
	},
	getters: {
		tasksTotal: state => {
			return state.todos.length
		},
		tasksLeft: state => {
			return state.todos.filter(todo => !todo.done).length
		},
		todoItems: state => {
			return state.todos
		}
	}
}));
