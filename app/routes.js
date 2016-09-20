import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home/home.jsx';
import Todd from './components/todd/todd.jsx';

export default (
    <Route path="/">
        <IndexRoute component={Home} />
        <Route path="page" component={Todd} />
    </Route>
);
