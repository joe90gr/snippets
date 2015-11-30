var $ = require('jquery');
var Backbone = require('backbone');
var events = require('../utils/events');

var Workspace = Backbone.Router.extend({
    routes: {
        "":             "root",
        "examples":     "examples",
        "iterators":    "iterators",
        "lists":    "lists"
    },
    root: function() {
        events.emit('root');
    },
    examples: function() {
        events.emit('examples');
    },
    iterators: function(query, page) {
        events.emit('iterators');
    }
	,
	lists: function(query, page) {
		events.emit('lists');
	}
});

var route = new Workspace;
Backbone.history.start({pushState: true, root: '/'});

$('div.links').delegate('a', 'click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    Backbone.history.navigate(href, { trigger: true });
})
