var React = require('react');
var DefaultLayout = require('./layouts/default');

var Error = React.createClass({
	render: function () {
		return (
			<DefaultLayout title={this.props.title}>
				<div className="content">
					<h1>{this.props.message}</h1>
					<h2>{this.props.error.status}</h2>
					<pre>{this.props.error.stack}</pre>
				</div>
			</DefaultLayout>
		);
	}
});

module.exports = Error;

