import React from 'react';

const Html = ({body}) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const isDevelopment = process.env.NODE_ENV === 'development';

    return (
        <html>
            <head>
                {isProduction && [
                    <link key="bundle" rel="stylesheet" href="bundle.css" />,
                    <script key="react" src="https://unpkg.com/react@15.3.2/dist/react.min.js"></script>,
                    <script key="react-dom" src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js"></script>
                ]}
                {isDevelopment && [
                    <script key="react" src="https://unpkg.com/react@15.3.2/dist/react.js"></script>,
                    <script key="react-dom" src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
                ]}
                <title>React App</title>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: body}}></div>
                <script src="bundle.js"></script>
            </body>
        </html>
    );
};

Html.propTypes = {
    body: React.PropTypes.string
};

export default Html;
