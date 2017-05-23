import React from 'react';
import Root from 'platform/views/components/Root';

function Body() {
	return (
		<body>
			<div className="react-root">
				<Root />
			</div>
			<script type="text/javascript" src="/js/bundles/bundle.js" />
		</body>
	);
}

Body.displayName = 'Body';

export default Body;
