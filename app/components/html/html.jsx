import React from 'react';

const Html = ({body}) => {
    return (
        <html>
            <head>
                {process.env.NODE_ENV === 'production' &&
                <link rel="stylesheet" href="bundle.css" />}
                <title>My Universal App</title>
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
