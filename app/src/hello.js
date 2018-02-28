const c1 = 'color: #3F464F';
const c2 = 'color: #9398EC';

export default function hello() {

	console.log('%c [Boilertal] ' + '%cHello world! 🤟', c1, c2);
	console.log('%c [Boilertal] ' + '%cStart editing your javascript files and style files.', c1, c2);

	let h1 = document.createElement('h1');
	h1.innerText = "Hello World!";

	document.body.appendChild(h1);

}
