import Config from '../../../config/settings';
const { debug } = Config;

export default function logger(source, object) {

	if( !debug ) return;

	let name = "Boilertal";

	let c1 = 'color: #3F464F',
		c2 = 'color: #9398EC';

	if (typeof source === 'string' && object === undefined) {
		console.info(`%c[${name}] ` + `%c${source}`, c1, c2);
	} else if (typeof source === 'string' && object != undefined) {
		console.info(`[${source}]`, object);
	} else {
		console.warn( source );
	}

};
