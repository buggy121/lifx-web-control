import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from './Layout.jsx';


module.exports = (
    <Router history={browserHistory} createElement={typeof window === 'object' ? function (Component, props) {
        return <Component {...props} custom={window.PROPS}/>;
    } : function () {
    }}>
        <Route path='/' component={require('./Layout.jsx')}>
            <IndexRoute component={require('./Home.jsx')}/>
        </Route>
    </Router>
);