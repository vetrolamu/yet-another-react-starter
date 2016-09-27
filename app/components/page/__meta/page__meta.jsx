import React from 'react';
import Helmet from 'react-helmet';

const config = {
    link: [],
    meta: [
        {charset: 'utf-8'},
        {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
        {name: 'description', content: ''},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        // Add to homescreen for Chrome on Android
        {name: 'mobile-web-app-capable', content: 'yes'},
        // Add to homescreen for Safari on IOS
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
        {name: 'apple-mobile-web-app-title', content: 'Yet Another React Starter'}
    ]
};

const serviceName = 'React Starter';

const PageMeta = () => (
    <Helmet
        defaultTitle={serviceName}
        link={config.link}
        meta={config.meta}
        script={config.script}
        titleTemplate={`%s — ${serviceName}`} />
);
export default PageMeta;
