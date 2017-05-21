import React from 'react';
import { array } from 'prop-types';

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
PrintLine.propTypes = { items: array };

export default PrintLine;
