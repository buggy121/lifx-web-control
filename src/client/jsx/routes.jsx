import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={require('./Layout.jsx').default}>
            <IndexRoute component={require('./Home.jsx').default}/>
            <Route path="control/:protocol" component={require('./ControlWrapper.jsx').default}>
                <IndexRoute component={require('./Control.jsx').default}/>
                <Route path="auth" component={require('./Auth.jsx').default}/>
            </Route>
        </Route>
    </Router>
);