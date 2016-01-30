import $ from 'jquery';
import Backbone from 'backbone';
import events from '../../../src/utils/events';
import routes from '../../../src/configuration/routes';

export default function clientRouter() {
	let bindEvents = {
		routes: routes
	};

	for (let route in routes) {
		if (routes.hasOwnProperty(route)) {
			let _route = route === '' ? routes[route] : route;
			let callback = new CallbackObj(_route);
			bindEvents[routes[route]] = callback.fn;
		}
	}

	function CallbackObj(_route) {
		this.fn = function () {
			events.emit(_route);
		};
	}

	let BackboneRouter = Backbone.Router.extend(bindEvents);
	new BackboneRouter;

	Backbone.history.start({ pushState: true, root: '/' });

	$('ul.links').delegate('a', 'click', function (e) {
		var href = $(this).attr('href');
		e.preventDefault();
		Backbone.history.navigate(href, { trigger: true });
	});
}
