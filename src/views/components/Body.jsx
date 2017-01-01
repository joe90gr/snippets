import React from 'react';
import ReactWrapper from '../ReactWrapper';

class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<body>
				<div className="react-root">
					<ReactWrapper />
				</div>
				<script type="text/javascript" src="/js/main.js" />
			</body>
		);
	}
}

Body.displayName = 'Body';

export default Body;
