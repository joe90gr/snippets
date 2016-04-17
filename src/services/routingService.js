import director from 'director';
import routes from 'configuration/routes';
import ContentAction from 'actions/ContentAction';

let bindEvents = {
	routes: routes
};

for (let route in routes) {
	if (routes.hasOwnProperty(route)) {
		let _route = route === '' ? routes[route] : route;
		let callback = new CallbackObj(_route);
		bindEvents[route] = callback.fn;
	}
}

delete bindEvents.routes;

function CallbackObj(_route) {
	this.fn = () => process.nextTick(() => ContentAction.createPage(_route));
}

export default new director.Router(bindEvents).configure({ html5history: true });
