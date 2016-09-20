import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes';

function reduxDevTools() {
    return process.env.NODE_ENV === 'development' && typeof window === 'object' && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f;
}

const store = createStore(reducers, reduxDevTools());
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);

if(process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
    });
}
