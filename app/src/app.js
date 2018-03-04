import Vue from 'vue';
import Template from './components/main';
import log from './boiler/logger';

export default class Application {

	constructor() {

		this.boiler = document.createElement('div');
		this.boiler.id = 'boiler-application';
		this.boiler.style.height = '100%';
		document.body.append(this.boiler);

		return this;
	}

	/************************************************************************
	*
	*	A router is required to determine which template will be
	*	rendered into the main container. If you want to use a custom
	*	router, you'll have to edit the application linker.
	*
	************************************************************************/
	setRouter(router) {

		log('Router linked');
		this.router = router;

	}

	/************************************************************************
	*
	*	Render the main Vue component and pass in the middleware data
	*	that has been set in the bootstrap file.
	*
	************************************************************************/
	render() {

		const instance = new Template({
			propsData: {
				router: this.router
			}
		});

		instance.$mount();
		this.boiler.append(instance.$el);

		log('Vue Component Rendered');

	}

}
