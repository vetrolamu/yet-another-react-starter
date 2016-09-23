import React from 'react';

const Html = ({body, preloadedState}) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const isDevelopment = process.env.NODE_ENV === 'development';
    const preloadedStateString = `window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)}`;

    return (
        <html>
            <head>
                {isProduction && [
                    <link key="bundle" rel="stylesheet" href="bundle.css" />,
                    <script key="react" src="https://unpkg.com/react@15.3.2/dist/react.min.js" />,
                    <script key="react-dom" src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js" />
                ]}
                {isDevelopment && [
                    <script key="react" src="https://unpkg.com/react@15.3.2/dist/react.js" />,
                    <script key="react-dom" src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js" />
                ]}
                <script dangerouslySetInnerHTML={{__html: preloadedStateString}} />
                <title>React App</title>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: body}} />
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
