/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

import Router from 'koa-router';
import actions from './actions';
import ErrorHandler from './ErrorHandler';

var router = new Router();

router.get('/', ErrorHandler.actionInit, actions.index);

module.exports = router.routes();
