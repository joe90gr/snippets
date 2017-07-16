import React from 'react';
import ThreeEngine from 'common/content/lib/CubeAnimation';

const { addOns } = React;

class ThreeDAnimations extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.threeEngine = new ThreeEngine();

		this.threeEngine.initialise(this.element);
	}

	componentWillUnmount() {
		this.threeEngine.destroy();
	}

	render() {
		return (
			<div ref={(node) => {
				this.element = node;
			}}>
			</div>
		);
	}
}

ThreeDAnimations.displayName = 'ThreeDAnimations';

export default ThreeDAnimations;
