import Helmet from 'react-helmet';
import React from 'react';

const REACT_SCRIPTS = {
    production: [
        {src: 'https://unpkg.com/react@15.4.0/dist/react.min.js'},
        {src: 'https://unpkg.com/react-dom@15.4.0/dist/react-dom.min.js'}
    ],
    development: [
        {src: 'https://unpkg.com/react@15.4.0/dist/react.js'},
        {src: 'https://unpkg.com/react-dom@15.4.0/dist/react-dom.js'}
    ]
};

const APP_STYLESHEETS = {
    production: [
        {rel: 'stylesheet', href: '/bundle.css'}
    ],
    development: []
};

const Html = ({body, preloadedState}) => {
    const preloadedStateString = `window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)}`;
    const header = Helmet.rewind();

    return (
        <html>
            <head>
                {header.title.toComponent()}
                {header.meta.toComponent()}
                {header.link.toComponent()}
                {APP_STYLESHEETS[process.env.NODE_ENV].map((props, key) =>
                    <link {...props} key={key} />
                )}
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: body}} />
                {REACT_SCRIPTS[process.env.NODE_ENV].map((props, key) =>
                    <script {...props} key={key} />
                )}
                <script dangerouslySetInnerHTML={{__html: preloadedStateString}} />
                <script src="bundle.js" />
            </body>
        </html>
    );
};

Html.propTypes = {
    body: React.PropTypes.string,
    preloadedState: React.PropTypes.object
};

export default Html;
