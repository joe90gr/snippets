import React from 'react';
import ThreeEngine from 'common/content/lib/CubeAnimation';

class ThreeDAnimations extends React.Component {
	constructor() {
		super(...arguments);
	}

	componentDidMount() {
		this.threeEngine = new ThreeEngine();

		this.threeEngine.initialise(this.node);
	}

	componentWillUnmount() {
		this.threeEngine.destroy();
	}

	render() {
		return (<div ref={(node) => this.node = node}></div>);
	}
}

ThreeDAnimations.displayName = 'ThreeDAnimations';

export default ThreeDAnimations;
