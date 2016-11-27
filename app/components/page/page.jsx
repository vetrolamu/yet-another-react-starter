import React from 'react';

import PageMeta from './__meta/page__meta.jsx';

const Page = ({children}) => (
    <div className="page">
        <PageMeta />
        {children}
    </div>
);

Page.propTypes = {
    children: React.PropTypes.node
};

export default Page;
