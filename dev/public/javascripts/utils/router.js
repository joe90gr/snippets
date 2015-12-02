var $ = require('jquery');
var Backbone = require('backbone');
var events = require('../utils/events');

var Workspace = Backbone.Router.extend({
	routes: {
		'':             'root',
		'examples':     'examples',
		'iterators':    'iterators',
		'lists':    'lists'
	},
	root: function () {
		events.emit('root');
	},
	examples: function () {
		events.emit('examples');
	},
	iterators: function () {
		events.emit('iterators');
	},
	lists: function () {
		events.emit('lists');
	}
});

new Workspace;

Backbone.history.start({ pushState: true, root: '/' });

$('div.links').delegate('a', 'click', function (e) {
	var href = $(this).attr('href');
	e.preventDefault();
	Backbone.history.navigate(href, { trigger: true });
});
