import Vue from 'vue';
import log from './addons/logger';
import Master from './components/master.vue';

export default class Application {

	constructor() {

		// Don't touch this unless you know what ya'll doin' 😇
		this.applicationId = 'boiler-application';
		this.boiler = document.createElement('div');
		this.boiler.id = this.applicationId;
		this.boiler.style.height = '100%';
		document.body.append(this.boiler);

		log('Boiler element appended');

		this.instance = null;
		this.router = [];
		this.propsData = {};

		return this;
	}

	/************************************************************************
	*
	*	When Vue is used with a modular system we need to tell Vue to
	*	use plugins, do that in the bootstrap file.
	*
	************************************************************************/
	applyPlugin(middleware) {
		Vue.use(middleware);

		if(middleware.name !== undefined) {
			log(`Applied ${middleware.name}`);
		}
	}

	/************************************************************************
	*
	*	Set the default props data that should be passed into the
	*	main component.
	*
	************************************************************************/
	setPropsData(props = {}) {
		this.propsData = props;

		log('Did set props data');
	}

	/************************************************************************
	*
	*	Load your routes into the Boiler framework and Boiler will passed
	*	them into the Vue Router for you 💙
	*
	************************************************************************/
	setRoutes(routes = {}) {
		this.router = routes;

		log('Routes have been set');
	}

	/************************************************************************
	*
	*	Render the main Vue component and pass in the middleware and propsData
	*	data that has been set in the bootstrap file.
	*
	************************************************************************/
	render() {

		this.instance = new Vue({
			router: this.router,
			el: `#${this.applicationId}`,
			render: h => h(Master, {
				props: this.propsData
			})
		});

		log('Vue component attached & rendered');
		log('Put debug mode to false in production to disable these logs!');

	}

}
