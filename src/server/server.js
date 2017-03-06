/**
 * Created by Dawid Kulpa on 15.02.2017.
 */
'use strict';

import Koa from 'koa';
import KoaStatic from 'koa-static';
import http from 'http';
import routes from './lib/routes.jsx';
import Sockets from 'socket.io';
import socketActions from './lib/actions/socketServerActions';

class Server {
    start() {
        var app = new Koa();


        app.use(KoaStatic('./dist/client/'));
        app.use(routes);

        var srv = http.createServer(app.callback());

        var io = Sockets(srv);

        io.on('connection', socketActions);

        srv.listen(3001);
        this.state = true;
        console.log('Server started');
    }
}

module.exports = Server;