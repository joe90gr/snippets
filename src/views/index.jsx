var React = require('react');
var DefaultLayout = require('./layouts/default');

var Index = React.createClass({
	render: function () {
		return (
			<DefaultLayout title={this.props.title} model={this.props.model}/>
		);
	}
});

module.exports = Index;

