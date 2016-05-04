import React from 'react';
import ReactDOM from 'react-dom';
import ReactWrapper from 'views/ReactWrapper';
import { useStore } from 'src/storeRegistry';

ReactDOM.render(<ReactWrapper />, document.getElementsByClassName('react-wrapper')[0]);
