import vue from 'vue';
import HelloWorld from '../../templates/components/hello-world/';

export default class Template {

	constructor(router) {

		let data = {
			component: 'hello-world',
			title: 'Hello there'
		};

		this.router = router;

		return this.render(data);

	}

	render(data) {

		return HelloWorld.$el;

	}

}
