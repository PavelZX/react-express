import React from 'react';
import ReactDOM from 'react-dom';

import { Provider }        from 'react-redux';
import { Router }          from 'react-router';

import configureStore      from './redux/configureStore';
import history             from './utils/history';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
  <App />
  </Router>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
