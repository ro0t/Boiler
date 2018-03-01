export default function defineBoiler(Application) {

	window.customElements.define('boiler-app', new Application());
	//window.document.body.appendChild(Application);

};
