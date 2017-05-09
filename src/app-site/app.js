import React from 'react';
import ReactDOM from 'react-dom';
import 'contribution/serviceRegistration.client';
import 'contribution/storeRegistration';
import ReactWrapper from 'views/components/ReactWrapper';

ReactDOM.render(<ReactWrapper />, document.getElementsByClassName('react-root')[0]);
