import React from 'react';
import NavigateAction from 'actions/NavigateActionCreator';

class Link extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// TODO: to be revisited, normalise the / and index.
		const to = this.props.to === 'index' ? '/' : this.props.to;

		return (
			<a href={ to } onClick={ this.clickFunction.bind(this) }> { this.props.children } </a>
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
