import React from 'react';
import PrintConsole from './components/PrintConsole/PrintConsole';

class PrimaryContent extends React.Component {
	constructor(props) {
		super(props);
	}

	_executeBlock(itemText, index) {
		var arr = [];

		var returnedFromFunction = itemText(function (result) {
			// events.emit('example' + index, result);
			arr.push(<p key={ 'line-' + arr.length } >{result}</p>);
		});

		return {
			returnedFromFunction: returnedFromFunction,
			arr: arr
		};
	}

	_createItem(itemText, index) {
		var result = this._executeBlock(itemText, index);

		return (
			<pre id={'example-' + (index + 1)} className="example" key={'code-block-' + (index + 1)}>
				<div>
					<h2>{itemText.name}</h2>
					<div className="example">
						{itemText.toString()}
					</div>
					<div className="example">
						{result.returnedFromFunction}
					</div>
					{result.arr.map((item) => item)}
					<PrintConsole context={'example' + index} />
				</div>
			</pre>
		);
	}

	render() {
		return (
			<div>
				<h1 className="main-title"> {this.props.title} </h1>
				{this.props.model.map((itemText, index) => this._createItem(itemText, index))}
			</div>
		);
	}
}

PrimaryContent.displayName = 'PrimaryContent';

PrimaryContent.propTypes = {
	title: React.PropTypes.string,
	model: React.PropTypes.array
};

export default PrimaryContent;
