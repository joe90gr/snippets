import React from 'react';

function ExternalContent({ model }) {
	return (<div>{ model }</div>);
}

ExternalContent.displayName = 'ExternalContent';
ExternalContent.propTypes = {
	title: React.PropTypes.string,
	model: React.PropTypes.object
};

export default ExternalContent;
