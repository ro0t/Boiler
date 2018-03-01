import log from './boiler/logger';

export default class Application extends HTMLElement {

	constructor() {

		super();

	}

	connectedCallback() {

		log('Connected');

	}

	attachedCallback() {

		log('Application attached');
		log(1);
		log('yo', {"lol":"true"});

	}

}
