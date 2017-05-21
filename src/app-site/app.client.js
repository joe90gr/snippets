import React from 'react';
import ReactDOM from 'react-dom';
import 'platform/contribution/serviceRegistration.client';
import 'platform/contribution/storeRegistration';
import AppContainer from 'platform/views/containers/AppContainer';

ReactDOM.render(<AppContainer />, document.getElementsByClassName('react-root')[0]);
