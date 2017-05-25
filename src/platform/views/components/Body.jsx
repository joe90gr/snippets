import React from 'react';
import AppContainer from 'platform/views/containers/AppContainer';

function Body() {
	return (
		<body>
			<div className="react-root">
				<AppContainer />
			</div>
			<script type="text/javascript" src="/js/bundles/bundle.js" />
		</body>
	);
}

Body.displayName = 'Body';

export default Body;
