var React = require('react');
var Navigation = require('./components/Navigation');
var PrimaryContent = require('./PrimaryContent');

var ReactWrapper = React.createClass({
	displayName: 'reactWrapper',

	render: function () {
		return (
			<div className="react-wrapper">
				<Navigation />
				<div className="content">
					<PrimaryContent title={this.props.title} model= {this.props.model} />
				</div>
			</div>
		);
	}
});

module.exports = ReactWrapper;
