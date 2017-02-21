/**
 * Created by Dawid Kulpa on 20.02.2017.
 */

import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers/index';

export default createStore(reducers);