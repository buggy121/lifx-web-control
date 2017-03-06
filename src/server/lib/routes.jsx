/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

import Router from 'koa-router';
import ErrorHandler from './ErrorHandler';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import clientRoutes from '../../client/jsx/routes.jsx';
import {Provider} from 'react-redux';
import store from './store';

var router = new Router();

router.get('/api/discoverLights/:type', ErrorHandler.actionInit, function*(next) {

});

router.get('*', ErrorHandler.actionInit, function*(next) {
    var that = this;
    yield next;

    match({
        routes: clientRoutes,
        location: this.url
    }, function (error, redirectLocation, renderProps) {
        if (error) {
            console.log(error);
        }
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            );

            that.body = html;
        }
        else {
            that.status = 404;
        }
    });
});


module.exports = router.routes();
