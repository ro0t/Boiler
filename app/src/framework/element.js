export default function mainframe(applicationId) {

	let boiler = document.createElement('div');

	boiler.id = applicationId;
	boiler.style.height = '100%';

	document.body.append(boiler);

	return boiler

}
