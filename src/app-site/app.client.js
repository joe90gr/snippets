import React from 'react';
import ReactDOM from 'react-dom';

import { registerSW } from './service-worker/register-sw';

import config from './configuration/config';
import serviceContext from 'platform/contribution/serviceRegistration.client';
import storeContext from 'platform/contribution/storeRegistration';

import AppContainer from 'platform/views/containers/AppContainer';

// registerSW();
serviceContext(config);
storeContext();

ReactDOM.render(<AppContainer />, document.getElementsByClassName('react-root')[0]);
