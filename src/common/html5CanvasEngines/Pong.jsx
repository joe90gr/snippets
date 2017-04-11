import React from 'react';
import PongEngine from 'common/lib/PongCanvasEngine';

class Pong extends React.Component {
	constructor() {
		super(...arguments);

		this.pongEngine = new PongEngine();
	}

	componentDidMount() {
		this.pongEngine.initialise(this.canvas);
	}

	componentWillUnmount() {
		this.pongEngine.destroy();
	}

	render() {
		return (
			<canvas width={ 470 } height={ 640 } ref={(node) => {
				this.canvas = node;
			}}>Canvas Not Supported</canvas>
		);
	}
}

Pong.displayName = 'Pong';

export default Pong;
