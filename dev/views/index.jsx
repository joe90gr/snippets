var React = require('react');
var DefaultLayout = require('./layouts/default');
var Navigation = require('./components/Navigation.jsx');
var PrimaryContent = require('./PrimaryContent.jsx');

var HelloMessage = React.createClass({
	render: function () {
		return (
			<DefaultLayout title={this.props.title}>
				<div className="parent-wrapper">
					<Navigation />
					<PrimaryContent />
				</div>
			</DefaultLayout>
		);
	}
});

module.exports = HelloMessage;
