module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Dawid Kulpa on 15.02.2017.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _koa = __webpack_require__(5);

var _koa2 = _interopRequireDefault(_koa);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
    function Server() {
        _classCallCheck(this, Server);
    }

    _createClass(Server, [{
        key: 'start',
        value: function start() {
            var app = new _koa2.default();

            app.use(_routes2.default);

            app.listen(3001);
            this.state = true;
            console.log('Server started');
        }
    }]);

    return Server;
}();

;

module.exports = Server;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

module.exports = {
    actionInit: regeneratorRuntime.mark(function actionInit(next) {
        return regeneratorRuntime.wrap(function actionInit$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return next;

                    case 3:
                        _context.next = 10;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context['catch'](0);

                        this.status = _context.t0.status || 500;
                        this.body = _context.t0.message;
                        this.app.emit('error', _context.t0, this);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, actionInit, this, [[0, 5]]);
    })
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

module.exports = {
    index: regeneratorRuntime.mark(function index(next) {
        return regeneratorRuntime.wrap(function index$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        this.status = 200;
                        this.body = 'index';

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, index, this);
    })
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koaRouter = __webpack_require__(6);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _ErrorHandler = __webpack_require__(2);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default(); /**
                                         * Created by Dawid Kulpa on 15.02.2017.
                                         */

router.get('/', _ErrorHandler2.default.actionInit, _actions2.default.index);

module.exports = router.routes();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);