/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _OrcaSlide = __webpack_require__(1);

var _OrcaSlide2 = _interopRequireDefault(_OrcaSlide);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        _OrcaSlide2.default.config = {
            arrowPrevious: "#arrow_previus",
            arrowNext: "#arrow_next",
            ctrlStop: "#stop",
            ctrlPlay: "#play",
            contentItem: "#swipe",
            time: 1,
            timeAutoPlay: 2.5,
            isInfinite: true
        };
    }
};
// import OrcaSlide from "./core/mordor";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils2 = __webpack_require__(2);

var _Utils3 = _interopRequireDefault(_Utils2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrcaSlide = function (_Utils) {
    _inherits(OrcaSlide, _Utils);

    function OrcaSlide() {
        _classCallCheck(this, OrcaSlide);

        return _possibleConstructorReturn(this, (OrcaSlide.__proto__ || Object.getPrototypeOf(OrcaSlide)).apply(this, arguments));
    }

    _createClass(OrcaSlide, null, [{
        key: "animateSlide",

        /**
         * Genera la transicion de los sliders.
         *
         * @param  {Boolean} isNext (Optional) indica el tipo de accion.
         *
         * @return void.
         */
        value: function animateSlide() {
            var _this2 = this;

            var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var _configSlide = this.configSlide,
                active = _configSlide.active,
                itemWidth = _configSlide.itemWidth,
                items = _configSlide.items,
                moveTo = _configSlide.moveTo,
                time = _configSlide.time,
                position = _configSlide.position,
                isInfinite = _configSlide.isInfinite;


            var MOVE_TO = isNext ? moveTo : -moveTo;
            var ACTUAL_POSITION = isNext ? position + 1 : position - 1;
            var INFINITE = items < ACTUAL_POSITION || ACTUAL_POSITION < 0;

            if (active) {
                if (isInfinite && INFINITE) {
                    this.isInfinite = ACTUAL_POSITION;
                } else {
                    this.configSlide.position += isNext ? 1 : -1;
                    this.configSlide.active = false;
                    this.isInfinite = ACTUAL_POSITION;
                    var counter = 0;
                    var TIMER = setInterval(function () {
                        _this2.moveToScroll(MOVE_TO);
                        counter += moveTo;
                        if (counter >= itemWidth) {
                            clearInterval(TIMER);
                            var FULL_MOVE_TO = itemWidth * _this2.configSlide.position;
                            _this2.moveToScroll(FULL_MOVE_TO, false);
                            _this2.configSlide.active = true;
                        }
                    }, time);
                }
            }
        }

        /**
         * Permite el manejo de la accion autoPlay.
         *
         * @param  {Boolean} (Optional) Indica si el carousel esten autoPlay.
         * @return {void}.
         */

    }, {
        key: "autoPlay",
        value: function autoPlay() {
            var _this3 = this;

            var play = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.configSlide.autoPlay = play;
            var _configSlide2 = this.configSlide,
                autoPlay = _configSlide2.autoPlay,
                timeAutoPlay = _configSlide2.timeAutoPlay;

            if (!play && !autoPlay) {
                clearInterval(this.autoPlayTimer);
            } else if (play && autoPlay) {
                this.autoPlayTimer = setInterval(function () {
                    _this3.animateSlide();
                }, timeAutoPlay);
            }
        }

        /**
         * Oculta las flechas.
         *
         * @param {number} element posicion del elemento.
         *
         * @return {void}
         */

    }, {
        key: "displayArrow",
        value: function displayArrow(index) {
            var _configSlide3 = this.configSlide,
                autoPlay = _configSlide3.autoPlay,
                arrowNext = _configSlide3.arrowNext,
                arrowPrevious = _configSlide3.arrowPrevious,
                items = _configSlide3.items,
                isInfinite = _configSlide3.isInfinite;

            var DISPLAY_PREVIUS = index > 0 ? "" : "none";
            var DISPLAY_NEXT = items === index ? "none" : "";
            this.displayToggle(arrowNext, DISPLAY_NEXT);
            this.displayToggle(arrowPrevious, DISPLAY_PREVIUS);
            if (autoPlay && !isInfinite && DISPLAY_NEXT === "none") {
                this.autoPlay(false);
            }
        }

        // ================================================================= //
        //                         Setter and Getter                         //
        // ================================================================= //

        /**
         * Se carga la configuracion inicial.
         *
         * @param {Object} config  configuracion inicial.
         *
         * @return void.
         */

    }, {
        key: "startTouch",


        /**
         * Se innicializa el evento touch.
         *
         * @return {void} [description]
         */
        value: function startTouch() {
            var _this4 = this;

            var DEVICE = this.isMobile;
            var _configSlide4 = this.configSlide,
                contentItem = _configSlide4.contentItem,
                items = _configSlide4.items;

            if (DEVICE !== "desktop") {
                var startX = 0;
                contentItem.addEventListener("touchstart", function (action) {
                    var SWIPE = action.changedTouches[0];
                    startX = parseInt(SWIPE.clientX, 10);
                });
                contentItem.addEventListener("touchmove", function (action) {
                    var SWIPE = action.changedTouches[0];
                    var direction = "";
                    var swipeX = parseInt(SWIPE.clientX, 10);

                    if (swipeX - startX > 0) {
                        direction = "right";
                    } else {
                        direction = "left";
                    }

                    if (direction === "left" && _this4.configSlide.position < items) {
                        _this4.autoPlay(false);
                        _this4.animateSlide(true);
                    } else if (direction === "right" && _this4.configSlide.position > 0) {
                        _this4.autoPlay(false);
                        _this4.animateSlide(false);
                    }
                });
            }
        }

        /**
         * Permite manejar la logica de cuando el carousel es infinito.
         *
         * @param {number} index  Posicion actual del slider.
         *
         * @return {void}
         */

    }, {
        key: "config",
        set: function set(config) {
            this.configSlide = {
                arrowNext: "",
                arrowPrevious: "",
                autoPlay: false,
                contentItem: "",
                ctrlStop: "",
                ctrlPlay: "",
                time: 1,
                timeAutoPlay: 2,
                isInfinite: false,
                position: 0,
                active: false
            };
            this.autoPlayTimer = null;
            Object.assign(this.configSlide, config);

            this.validateConfig.setActionButton.resizeSlide.startTouch();

            if (this.configSlide.autoPlay) this.autoPlay();
        }
    }, {
        key: "isInfinite",
        set: function set(index) {
            var _configSlide5 = this.configSlide,
                isInfinite = _configSlide5.isInfinite,
                items = _configSlide5.items,
                itemWidth = _configSlide5.itemWidth;

            var RELOAD = (index < 0 || index > items) && index;
            if (isInfinite) {
                var INFINITE = index < 0 || index > items;
                if (INFINITE) {
                    var SCROLL = RELOAD < 0 ? items * itemWidth : 0;
                    this.moveToScroll(SCROLL, false);
                    this.configSlide.position = RELOAD < 0 ? items : 0;
                    this.configSlide.active = true;
                }
            } else {
                this.displayArrow(index);
            }
        }

        /**
         * Evita que al redimensionar el navegador se tengan problemas con los slides.
         *
         * @return self Fluent interface.
         */

    }, {
        key: "resizeSlide",
        get: function get() {
            var _this5 = this;

            var CONFIG = this.configSlide;
            var ITEM = this.existFields(CONFIG, "item", null);
            var ELEMENT = this.existFields(CONFIG, "content", null);

            if (ITEM !== null && ELEMENT !== null) {
                window.addEventListener("resize", function () {
                    _this5.configSlide.scrollWidth = ELEMENT.scrollWidth;
                    _this5.configSlide.moveTo = Math.ceil(ITEM.offsetWidth / 256);
                    _this5.configSlide.itemWidth = ITEM.offsetWidth;
                    var POST = ITEM.offsetWidth * _this5.configSlide.position;
                    _this5.moveToScroll(POST, false);
                });
            }
            return this;
        }

        /**
         * Asigna los eventos a las flechas.
         *
         * @return void.
         */

    }, {
        key: "setActionButton",
        get: function get() {
            var _this6 = this;

            var KEYS = ["arrowNext", "arrowPrevious", "ctrlStop", "ctrlPlay"];
            KEYS.forEach(function (button) {
                var BUTTON = _this6.configSlide[button];
                var IS_PLAY = button === "ctrlPlay";
                var IS_NEXT = button === "arrowNext";
                var callbacks = function callbacks() {};

                if (button.includes("ctrl")) {
                    callbacks = function callbacks() {
                        _this6.autoPlay(IS_PLAY);
                    };
                    _this6.actionButton(BUTTON, callbacks);
                } else {
                    callbacks = function callbacks() {
                        _this6.animateSlide(IS_NEXT);
                        _this6.autoPlay(false);
                    };
                    _this6.actionButton(BUTTON, callbacks);
                }
            });
            return this;
        }

        /**
         * Validacion de la configuracion base.
         *
         * @type {Object} Resive la configuracion base.
         *
         * @return self Fluent interface.
         */

    }, {
        key: "validateConfig",
        get: function get() {
            var _this7 = this;

            var KEYS = ["arrowNext", "arrowPrevious", "contentItem"];

            KEYS.forEach(function (item) {
                var SELECTOR = _this7.configSlide[item];
                var ELEMENT = _this7.getElementDom(SELECTOR);

                if (ELEMENT) {
                    _this7.configSlide[item] = ELEMENT;
                    if (item === "contentItem") {
                        var ITEM = ELEMENT.children[0] || {};
                        var ITEM_WIDTH = ITEM.offsetWidth || 0;
                        var NEW_CONFIG = {
                            items: ELEMENT.children.length - 1,
                            itemWidth: ITEM_WIDTH,
                            moveTo: Math.ceil(ITEM_WIDTH / 256),
                            scrollWidth: ELEMENT.scrollWidth || 0,
                            time: _this7.configSlide.time * 1000 / 512,
                            item: ITEM,
                            content: ELEMENT
                        };
                        _this7.configSlide.active = NEW_CONFIG.items > 0 && NEW_CONFIG.moveTo > 0;
                        Object.assign(_this7.configSlide, NEW_CONFIG);
                        if (!_this7.configSlide.isInfinite) {
                            _this7.displayToggle(_this7.configSlide.arrowPrevious, "none");
                        }
                    }
                }
            });
            return this.validateConfigAutoPlay;
        }
    }, {
        key: "validateConfigAutoPlay",
        get: function get() {
            var _configSlide6 = this.configSlide,
                active = _configSlide6.active,
                ctrlPlay = _configSlide6.ctrlPlay,
                ctrlStop = _configSlide6.ctrlStop,
                timeAutoPlay = _configSlide6.timeAutoPlay;


            if (active) {
                var CONFIG = {
                    timeAutoPlay: timeAutoPlay * 1000,
                    ctrlPlay: this.getElementDom(ctrlPlay),
                    ctrlStop: this.getElementDom(ctrlStop)
                };
                Object.assign(this.configSlide, CONFIG);
            }
            return this;
        }
    }]);

    return OrcaSlide;
}(_Utils3.default);

exports.default = OrcaSlide;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: "actionButton",

        /**
         * Permite agregar eventos a elementos de la interfaz.
         *
         * @param  {object} button Referencia a elemento del dom.
         * @param  {function} callbacks Funciones a ejecutar.
         * @param  {String} (Optional) Tipo de accion.
         *
         * @return {void}
         */
        value: function actionButton(button) {
            var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var evento = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "click";

            if (button) {
                button.addEventListener(evento, function () {
                    if (typeof callbacks === "function") {
                        callbacks();
                    }
                });
            }
        }

        /**
         * Permite ocultar y mostar un elemento.
         *
         * @param  {Object} element Referencia a elemento del dom.
         * @param  {string} display Permite setear la propiedad display.
         *
         * @return {void}
         */

    }, {
        key: "displayToggle",
        value: function displayToggle(element) {
            var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            var ELEMENT = element;
            var auxDisplay = display;

            if (display !== "") {
                var DISPLAY = ELEMENT.style.display || "block";
                auxDisplay = DISPLAY === "block" ? "none" : "";
            }
            ELEMENT.style.display = auxDisplay;
        }

        /**
         * Valida si un key existe dentro de un object.
         *
         * @param  {object} data Objeto en el que se realizara el test.
         * @param  {string} keys Llaves a buscar.
         * @param {any} requestDefault respuesta por defecto.
         *
         * @return {any}.
         */

    }, {
        key: "existFields",
        value: function existFields(data, keys) {
            var requestDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            var KEYS = keys.split(".");
            var objectTest = data;
            // funcion especial
            var VALIDATE = function VALIDATE() {
                return KEYS.every(function (key) {
                    var REQUEST = typeof objectTest[key] !== "undefined";
                    objectTest = objectTest[key];
                    return REQUEST;
                });
            };
            return VALIDATE() ? objectTest : requestDefault;
        }

        /**
         * Permite conseguir un elemento del dom identificando si esta vacio o existe.
         * @param  {String} (Optional) Selector referente al elemento del dom.
         *
         * @return {object}.
         */

    }, {
        key: "getElementDom",
        value: function getElementDom() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            var domElement = null;
            if (selector) {
                domElement = document.querySelector(selector) || domElement;
            }
            return domElement;
        }

        /**
         * Permite identificar el tipo de dispositivo.
         *
         * @type {string}
         */

    }, {
        key: "moveToScroll",


        /**
         * Permite realizar el movimiento del scroll.
         *
         * @param  {number} pixels Numero de pixeles a desplazar.
         * @param  {Boolean} isAdd (Optional) indica si los piexeles se agregan a la cuenta actual.
         *
         * @return void.
         */
        value: function moveToScroll(pixels) {
            var isAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var contentItem = this.configSlide.contentItem;

            if (isAdd) {
                contentItem.scrollLeft += pixels;
            } else {
                contentItem.scrollLeft = pixels;
            }
        }
    }, {
        key: "isMobile",
        get: function get() {
            var DEVICE = typeof navigator !== "undefined" ? navigator.userAgent.match(/iPhone|iPad|iPod|Android/i) : "desktop";
            var WIDTH_SCREEN = typeof window !== "undefined" ? window.innerWidth : "1024";
            var request = "desktop";

            if (DEVICE != null) {
                if (WIDTH_SCREEN <= 768) {
                    request = "phone";
                } else if (WIDTH_SCREEN > 768 && WIDTH_SCREEN <= 1024) {
                    request = "tablet";
                }
            }
            return request;
        }
    }]);

    return Utils;
}();

exports.default = Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);