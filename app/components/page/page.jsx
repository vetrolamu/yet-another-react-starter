import React from 'react';

import PageMeta from './__meta/page__meta.jsx';
import { AppContainer } from 'react-hot-loader';


const Page = ({children}) => (
    <AppContainer>
        <div className="page">
            <PageMeta />
            {children}
        </div>
    </AppContainer>
);

Page.propTypes = {
    children: React.PropTypes.node
};

export default Page;
