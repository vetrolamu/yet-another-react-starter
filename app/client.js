import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app/app.jsx';
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
    <AppContainer>
        <App {...{store, history, onUpdate}} />
    </AppContainer>,
    document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    // TODO: Find proper way to avoid warning from https://github.com/gaearon/react-hot-loader/issues/298
    module.hot.accept('./components/app/app.jsx', () => {
        const NextApp = require('./components/app/app.jsx').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp {...{store, history, onUpdate}} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
