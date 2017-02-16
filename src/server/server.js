/**
 * Created by Dawid Kulpa on 15.02.2017.
 */
'use strict';

import Koa from 'koa';
import routes from './lib/routes';



class Server {
    start() {
        var app = new Koa();

        app.use(routes);

        app.listen(3001);
        this.state = true;
        console.log('Server started');
    }
};

module.exports = Server;