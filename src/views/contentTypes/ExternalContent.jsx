import React from 'react';

class ExternalContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<p>{ this.props.model }</p>
			</div>
		);
	}
}

ExternalContent.displayName = 'ExternalContent';

ExternalContent.propTypes = {
	title: React.PropTypes.string,
	model: React.PropTypes.array
};

export default ExternalContent;
