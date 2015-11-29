var $ = require('jquery');
var Backbone = require('backbone');
var events = require('../utils/events');

var Workspace = Backbone.Router.extend({
    routes: {
        "":             "root",    // #home
        "examples":     "examples",  // #search/kiwis
        "iterators":    "iterators"   // #search/kiwis/p7
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
});

var route = new Workspace;
Backbone.history.start({pushState: true, root: '/'});

$('div.links').delegate('a', 'click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    Backbone.history.navigate(href, { trigger: true });
})
