import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './components/page/page.jsx';
import Home from './components/home/home.jsx';
import HomeFetchData from './components/home/home.fetch';
import Todd from './components/todd/todd.jsx';

export default (
    <Route component={Page} path="/">
        <IndexRoute component={Home} fetchData={HomeFetchData} />
        <Route component={Todd} path="page" />
    </Route>
);
