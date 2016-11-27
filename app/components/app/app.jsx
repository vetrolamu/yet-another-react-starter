import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../../routes';

const App = React.createClass({
    propTypes: {
        history: React.PropTypes.object,
        onUpdate: React.PropTypes.func,
        store: React.PropTypes.object
    },

    render() {
        const {store, history, onUpdate} = this.props;

        return (
            <Provider store={store}>
                <Router history={history} onUpdate={onUpdate} routes={routes} />
            </Provider>
        );
    }
});

export default App;
