import axios from 'axios';

export default {
	state: {
		pageChanges: 0,
		loading: false,
		users: []
	},
	mutations: {
		incrementPageChanges: state => state.pageChanges++,
		startLoading: state => { state.loading = true },
		finishedLoading: state => { state.loading = false },
		fetchUsers: (state, payload) => { state.users = payload.users },
		clearUsers: state => { state.users = [] }
	},
	actions: {
		fetchUsers({ commit, state }) {
			commit('startLoading');

			// Just to demonstrate, otherwise the request is too fast 😂
			setTimeout(() => {

				axios.get('https://jsonplaceholder.typicode.com/users')
					.then((response) => {

						// Finish loading
						commit('finishedLoading');

						commit('fetchUsers', {
							users: response.data
						});
					})
					.catch((error) => {

						// Finish loading
						console.error('Request error', error);
						alert('Woops, something went wrong. Check the developer console for the error.');

						commit('finishedLoading');
					})

			}, 1000)

		}
	}
}
