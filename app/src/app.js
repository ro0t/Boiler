import log from './boiler/logger';

export default class Application extends HTMLElement {

	constructor() {

		super();

		this.router = null;

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

	attachedCallback() {

		log('Application attached');

	}

}
