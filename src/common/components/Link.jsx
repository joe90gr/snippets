import React from 'react';
import { bool, string, object } from 'prop-types';

import InjectActions from 'platform/views/viewControllers/InjectActions';

import NavigateAction from 'platform/actions/NavigateActionCreator';

export function Link({ NavigateAction: { navigateTo }, to, external, children }) {
	function clickFunction(e) {
		if (!external) {
			e.preventDefault();
			navigateTo(e.target.getAttribute('href'));
		}
	}

	return (
		<a href={ to } onClick={ clickFunction }>{ children }</a>
	);
}

Link.displayName = 'Link';
Link.propTypes = {
	children: string,
	to: string,
	external: bool,
	NavigateAction: object
};

export default InjectActions(Link, { NavigateAction });
