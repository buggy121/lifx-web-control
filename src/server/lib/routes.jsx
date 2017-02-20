/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

import Router from 'koa-router';
import ErrorHandler from './ErrorHandler';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import clientRoutes from '../../client/jsx/routes.jsx';

var router = new Router();

router.get('*', ErrorHandler.actionInit, function*(next) {
    var that = this;
    yield next;

    var props = {
        title: 'LifX Web Control'
    }

    match({
        routes: clientRoutes,
        location: this.url
    }, function(error, redirectLocation, renderProps) {
        if(error) {
            console.log(error);
        }
        if(renderProps) {
            var html = ReactDOMServer.renderToString(
                <RouterContext {...renderProps}
                    createElement={function(Component, renderProps) {
                        return <Component {...renderProps} custom={props}/>;
                    }}/>
            );

            that.body = html;
        }
        else {
            that.status = 404;
        }
    });
});


module.exports = router.routes();
