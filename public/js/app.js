import React from 'react';
import ReactDOM from 'react-dom';

import PrimaryContent from '../../src/views/PrimaryContent';
import Navigation from '../../src/views/components/Navigation';

ReactDOM.render(<Navigation />, document.getElementsByClassName('nav-menu')[0]);
ReactDOM.render(<PrimaryContent title="Home" model= {[]} />, document.getElementsByClassName('content')[0]);

