import React from 'react';
import ReactWrapper from '../ReactWrapper';

function Body() {
	return (
		<body>
			<div className="react-root">
				<ReactWrapper />
			</div>
			<script type="text/javascript" src="/js/main.js" />
		</body>
	);
}

Body.displayName = 'Body';

export default Body;
