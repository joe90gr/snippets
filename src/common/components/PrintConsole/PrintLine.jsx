import React from 'react';

function PrintLine({ items }) {
	return (
		<div>
			{ items.map((line, index) => {
				return (
					<p className={'line' + index} key={ 'pl' + (index + 1) } >{ line }</p>
				);
			}) }
		</div>
	);
}

PrintLine.displayName = 'PrintLine';
PrintLine.propTypes = {
	items: React.PropTypes.array
};

export default PrintLine;
