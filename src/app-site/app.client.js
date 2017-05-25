import React from 'react';
import ReactDOM from 'react-dom';

import config from './configuration/config';
import serviceContext from 'platform/contribution/serviceRegistration.client';
import storeContext from 'platform/contribution/storeRegistration';

import AppContainer from 'platform/views/containers/AppContainer';

serviceContext(config);
storeContext();

ReactDOM.render(<AppContainer />, document.getElementsByClassName('react-root')[0]);
