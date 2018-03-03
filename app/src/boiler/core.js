export function link(Router, Application) {

	let BoilerApplication = document.registerElement('boiler-app', Application);
	let BoilerInstance = new BoilerApplication();

	// Link the Router to the Application
	BoilerInstance.setRouter(new Router());

	document.body.append(BoilerInstance);


};
