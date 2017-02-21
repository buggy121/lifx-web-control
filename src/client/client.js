/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './jsx/routes.jsx';
import {Provider} from 'react-redux';
import store from '../server/lib/store';

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);