import HelloWorld from '../components/example-screens/hello-world.vue';
import ExampleScreen from '../components/example-screens/example-screen.vue';
import DetailScreen from '../components/example-screens/detail-screen.vue';

export default [
	{ path: '/', component: HelloWorld },
	{ path: '/example', component: ExampleScreen },
	{ path: '/detail/:id', component: DetailScreen },
];
