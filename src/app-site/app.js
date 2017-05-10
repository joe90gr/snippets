import React from 'react';
import ReactDOM from 'react-dom';
import 'platform/contribution/serviceRegistration.client';
import 'platform/contribution/storeRegistration';
import ReactWrapper from 'platform/views/components/ReactWrapper';

ReactDOM.render(<ReactWrapper />, document.getElementsByClassName('react-root')[0]);
