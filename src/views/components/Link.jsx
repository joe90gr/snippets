import React from 'react';
import NavigateAction from 'actions/NavigateActionCreator';

class Link extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={ this.props.to } onClick={ this.clickFunction.bind(this) }> { this.props.children } </a>
		);
	}

	clickFunction(e) {
		if (!this.props.external) {
			e.preventDefault();
			NavigateAction.navigateTo(e.target.getAttribute('href'));
		}
	}
}

Link.displayName = 'Link';

Link.propTypes = {
	children: React.PropTypes.string,
	to: React.PropTypes.string,
	external: React.PropTypes.bool
};

export default Link;
