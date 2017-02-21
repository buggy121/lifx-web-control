import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={require('./Layout.jsx').default}>
            <IndexRoute component={require('./Home.jsx').default}/>
        </Route>
    </Router>
);