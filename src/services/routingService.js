import director from 'director';
import routes from 'configuration/routes';
import NavigateAction from 'actions/NavigateActionCreator';

let bindEvents = { routes: routes };

for (let route in routes) {
	if (routes.hasOwnProperty(route)) {
		let _route = route === 'index' ? '' : route;
		let callback = new CallbackObj(route);
		bindEvents[_route] = callback.fn;
	}
}

function CallbackObj(_route) {
	this.fn = () => NavigateAction.navigateTo(_route);
}

delete bindEvents.routes;

export default new director.Router(bindEvents).configure({ html5history: true });
