import React from 'react';
import { object } from 'prop-types';
import assign from 'object-assign';
import { hyphenate } from 'utils/utilFunctions';

import Layouts from '../templates/Layouts';

function ReactWrapper(props) {
	const { page: { baseLayout } } = props;
	const _props = assign({}, props, { layoutClass: hyphenate(baseLayout) });

	return (React.createElement(Layouts[baseLayout], _props));
}

ReactWrapper.displayName = 'reactWrapper';
ReactWrapper.propTypes = {
	route: object,
	page: object
};

export default ReactWrapper;
