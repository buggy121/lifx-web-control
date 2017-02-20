/**
 * Created by Dawid Kulpa on 15.02.2017.
 */
'use strict';

import Koa from 'koa';
import KoaStatic from 'koa-static';
import routes from './lib/routes.jsx';

class Server {
    start() {
        var app = new Koa();

        app.use(KoaStatic('./dist/client/'));
        app.use(routes);

        app.listen(3001);
        this.state = true;
        console.log('Server started');
    }
};

module.exports = Server;