import React from 'react';
import { createStore } from 'redux';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Html from './components/html/html.jsx';
import reducers from './reducers';
import routes from './routes';

export default (req, res) => {
	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		if(error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if(renderProps) {
            const body = process.env.NODE_ENV === 'production'
                ? renderToString(
                    <Provider store={createStore(reducers)}>
                        <RouterContext {...renderProps} />
                    </Provider>
                )
                : null;

            res.status(200).send(`<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html, {body}))}`);
		} else {
			res.status(404).send('Not found');
		}
	});
};
