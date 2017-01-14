import React from 'react';

function ExternalContent({ title, model }) {
	return (
		<div>
			<h1>{ title }</h1>
			<p>{ model }</p>
		</div>
	);
}

ExternalContent.displayName = 'ExternalContent';
ExternalContent.propTypes = {
	title: React.PropTypes.string,
	model: React.PropTypes.array
};

export default ExternalContent;
