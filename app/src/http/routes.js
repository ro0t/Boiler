import HelloWorld from '../components/example-screens/hello-world.vue';
import ExampleScreen from '../components/example-screens/example-screen.vue';
import TodoList from '../components/example-screens/todo-list.vue';
import DetailScreen from '../components/example-screens/detail-screen.vue';

export default [
	{ path: '/', component: HelloWorld },
	{ path: '/example', component: ExampleScreen },
	{ path: '/todos', component: TodoList },
	{ path: '/detail/:id', component: DetailScreen },
];
