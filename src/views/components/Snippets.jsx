import React from 'react';
import PrintConsole from '../components/PrintConsole/PrintConsole';
// import events from 'utils/events';

function Snippets({ title, model }) {
	function _executeBlock(itemText, index) {
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

	return (
		<div>
			<h1 className="main-title"> {title} </h1>
			{model.map((itemText, index) => {
				var result = _executeBlock(itemText, index);

				return (
					<pre id={'example-' + (index + 1)} className="example" key={'code-block-' + (index + 1)}>
						<div>
							<h2>{ itemText.name }</h2>
							<div className="example">
								{ itemText.toString() }
							</div>
							<div className="example">
								{ result.returnedFromFunction }
							</div>
							{ result.arr.map((item) => item) }
							<PrintConsole context={'example' + index} />
						</div>
					</pre>
				);
			})}
		</div>
	);
}

Snippets.displayName = 'Snippets';
Snippets.propTypes = {
	title: React.PropTypes.string,
	model: React.PropTypes.array
};

export default Snippets;
