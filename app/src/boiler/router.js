import log from './logger';

export default class Router {

	constructor() {

		this.location = window.location;
		this.segments = this.parseSegments();
		this.parameters = this.queryParameters();

		log('Route', this);

	}

	parseSegments() {

		return window.location.pathname.split('/').filter(item => (item != ""))

	}

	queryParameters() {

		let queryParams = this.location.search;

		return queryParams == null ? null : ((q) => {

			let params = {};

			q = q.substring(1).split('&');

			q.filter(q => q[1] !== undefined).forEach(item => {

				item = item.split('=');

				// Parameter should be an array
				if( item[0].includes('[]') ) {

					item[0] = item[0].replace('[]', '');

					if( params[item[0]] !== undefined ) {
						params[item[0]].push(item[1]);
					} else {
						params[item[0]] = [item[1]];
					}

				}  else {
					params[item[0]] = item[1];
				}

			});

			return params;

		})(queryParams);

	}

}
