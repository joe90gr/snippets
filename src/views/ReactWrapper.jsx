import React from 'react';
import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';

export default React.createClass({
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