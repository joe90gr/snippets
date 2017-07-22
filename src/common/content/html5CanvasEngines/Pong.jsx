import React from 'react';
import PongEngine from 'common/content/lib/PongCanvasEngine';

class Pong extends React.Component {
	constructor() {
		super(...arguments);
	}

	componentDidMount() {
		this.pongEngine = new PongEngine(this.canvas);

		this.pongEngine.initialise();
	}

	componentWillUnmount() {
		this.pongEngine.destroy();
	}

	render() {
		return (
			<canvas width={ 470 } height={ 640 } ref={(node) => this.canvas = node}>
				Canvas Not Supported
			</canvas>
		);
	}
}

Pong.displayName = 'Pong';

export default Pong;
