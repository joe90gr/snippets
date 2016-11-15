import React from 'react';
import Head from './components/Head';
import Body from './components/Body';

class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<html>
				<Head />
				<Body />
			</html>
		);
	}
}

Index.displayName = 'Index';

export default Index;
