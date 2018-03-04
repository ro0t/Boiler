import Vue from 'vue';
import Template from './components/main';
import log from './boiler/logger';

export default class Application {

	constructor() {

		this.boiler = document.createElement('div');
		this.boiler.id = 'boiler-application';
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

	render() {

		log('Rendering Main Vue component');


		const instance = new Template({
			propsData: {
				type: 'main',
				message: 'Shut the faqqer up!'
			}
		});

		instance.$slots.default = ['Click me'];
		instance.$mount();

		this.boiler.append(instance.$el);

	}

	// attachedCallback() {
	//
	// 	log('Application attached');
	// 	this.attachDefaultStyle();
	//
	// 	log('Render template from route');
	// 	this.template = new Template(this.router);
	//
	// 	this.append(this.template);
	//
	// }
	//
	// attachDefaultStyle() {
	//
	// 	this.style.display = 'block';
	// 	this.style.height = '100%';
	//
	// }

}
