import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './configureStore';
import fetchData from './fetchDataMiddleware';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore({preloadedState, isClient: true});
const history = syncHistoryWithStore(browserHistory, store);

function onUpdate() {
    if (window.__PRELOADED_STATE__ !== null) {
        window.__PRELOADED_STATE__ = null;
        return;
    }

    fetchData({store, ...this.state});
}

render(
    <Provider store={store}>
        <Router history={history} onUpdate={onUpdate}>
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
