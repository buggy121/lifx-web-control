/**
 * Created by Dawid Kulpa on 20.02.2017.
 */

import {combineReducers} from 'redux';

import layout from './layoutReducer';
import light from './lightReducer';

export default combineReducers({
    layout,
    light
});