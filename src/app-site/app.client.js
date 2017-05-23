import React from 'react';
import ReactDOM from 'react-dom';

import config from './configuration/config';
import serviceContext from 'platform/contribution/serviceRegistration.client';
import storeContext from 'platform/contribution/storeRegistration';

import Root from 'platform/views/components/Root';

serviceContext(config);
storeContext();

ReactDOM.render(<Root />, document.getElementsByClassName('react-root')[0]);
