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


var _source = __webpack_require__(1);

var _source2 = _interopRequireDefault(_source);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        _source2.default.config = {
            arrowPrevious: "#barrow_previus",
            arrowNext: "#barrow_next",
            contentItem: "#bswipe",
            time: 1,
            jump: 120
        };
        _source2.default.config = {
            arrowPrevious: "#arrow_previus",
            arrowNext: "#arrow_next",
            ctrlStop: "#stop",
            ctrlPlay: "#play",
            contentItem: "#swipe",
            time: 1,
            jump: 120,
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

var _OrcaSlide = __webpack_require__(2);

var _OrcaSlide2 = _interopRequireDefault(_OrcaSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = {
    arrowNext: "",
    arrowPrevious: "",
    autoPlay: false,
    callbacks: [],
    contentItem: "",
    ctrlStop: "",
    ctrlPlay: "",
    jump: 16,
    time: 1,
    timeAutoPlay: 2,
    isInfinite: false,
    position: 0,
    active: false
};

/**
 * Permite inicializar orcaslide con un nuevo
 * scope.
 */

var initOrcaSlide = function () {
    function initOrcaSlide() {
        _classCallCheck(this, initOrcaSlide);
    }

    _createClass(initOrcaSlide, null, [{
        key: "config",
        set: function set(config) {
            var CONFIG = JSON.stringify(Config);
            var NEW_CONFIG = JSON.parse(CONFIG);
            Object.assign(NEW_CONFIG, config);
            return new _OrcaSlide2.default(NEW_CONFIG);
        }
    }]);

    return initOrcaSlide;
}();

exports.default = initOrcaSlide;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrcaSlide = function () {
    /**
     * Metodo inicial encargado de validar la configuracion.
     *
     * @param {object} configuracion inicial.
     *
     * @return {void}
     */
    function OrcaSlide(config) {
        _classCallCheck(this, OrcaSlide);

        this.configSlide = config;
        this.autoPlayTimer = null;
        this.initSlider();
    }

    /**
     * Genera la transicion de los sliders.
     *
     * @param  {Boolean} isNext (Optional) indica el tipo de accion.
     *
     * @return void.
     */


    _createClass(OrcaSlide, [{
        key: "animateSlide",
        value: function animateSlide() {
            var _this = this;

            var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var _configSlide = this.configSlide,
                active = _configSlide.active,
                contentItem = _configSlide.contentItem,
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
                this.callbacks(isNext, ACTUAL_POSITION);
                if (isInfinite && INFINITE) {
                    this.isInfinite = ACTUAL_POSITION;
                } else if (!INFINITE) {
                    this.configSlide.position += isNext ? 1 : -1;
                    this.configSlide.active = false;
                    this.isInfinite = ACTUAL_POSITION;
                    var counter = 0;
                    var TIMER = setInterval(function () {
                        _Utils2.default.moveToScroll(MOVE_TO, contentItem);
                        counter += moveTo;
                        if (counter >= itemWidth) {
                            clearInterval(TIMER);
                            var FULL_MOVE_TO = itemWidth * _this.configSlide.position;
                            _Utils2.default.moveToScroll(FULL_MOVE_TO, contentItem, false);
                            _this.configSlide.active = true;
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
            var _this2 = this;

            var play = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.configSlide.autoPlay = play;
            var _configSlide2 = this.configSlide,
                autoPlay = _configSlide2.autoPlay,
                timeAutoPlay = _configSlide2.timeAutoPlay;

            if (!play && !autoPlay) {
                clearInterval(this.autoPlayTimer);
            } else if (play && autoPlay) {
                this.autoPlayTimer = setInterval(function () {
                    _this2.animateSlide();
                }, timeAutoPlay);
            }
        }
    }, {
        key: "callbacks",
        value: function callbacks(isNext, position) {
            var callbacks = this.configSlide.callbacks;

            var INDEX = isNext ? position - 1 : position + 1;
            var ACTION = callbacks["Slide" + INDEX] || null;
            if (ACTION) {
                var LAUNCH = ACTION.next === isNext || ACTION.previus && !isNext;
                try {
                    if (LAUNCH) ACTION.callback();
                } catch (error) {
                    console.groupCollapsed("%c 🚫 [OrcaSlide => Error]", "color:#FFF;");
                    console.error(error);
                    console.groupEnd("[OrcaSlide => Error]");
                }
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
            _Utils2.default.displayToggle(arrowNext, DISPLAY_NEXT);
            _Utils2.default.displayToggle(arrowPrevious, DISPLAY_PREVIUS);
            if (autoPlay && !isInfinite && DISPLAY_NEXT === "none") {
                this.autoPlay(false);
            }
        }

        /**
         * Se encarga de lanzar los eventos que dan vida al slider..
         *
         * @return void.
         */

    }, {
        key: "initSlider",
        value: function initSlider() {
            this.validateConfig.setActionButton.resizeSlide.startTouch();

            if (this.configSlide.autoPlay) this.autoPlay();
            return 0;
        }

        // ================================================================= //
        //                         Setter and Getter                         //
        // ================================================================= //

        /**
         * Se innicializa el evento touch.
         *
         * @return {void} [description]
         */

    }, {
        key: "startTouch",
        value: function startTouch() {
            var _this3 = this;

            var DEVICE = _Utils2.default.isMobile;
            var _configSlide4 = this.configSlide,
                contentItem = _configSlide4.contentItem,
                items = _configSlide4.items;

            if (DEVICE !== "desktop") {
                var startX = 0;
                contentItem.addEventListener("touchstart", function (action) {
                    var SWIPE = action.changedTouches[0];
                    startX = parseInt(SWIPE.clientX, 10);
                    action.preventDefault();
                }, false);
                contentItem.addEventListener("touchmove", function (action) {
                    var SWIPE = action.changedTouches[0];
                    var direction = "";
                    var swipeX = parseInt(SWIPE.clientX, 10);

                    if (swipeX - startX > 0) {
                        direction = "right";
                    } else {
                        direction = "left";
                    }

                    if (direction === "left" && _this3.configSlide.position < items) {
                        _this3.autoPlay(false);
                        _this3.animateSlide(true);
                    } else if (direction === "right" && _this3.configSlide.position > 0) {
                        _this3.autoPlay(false);
                        _this3.animateSlide(false);
                    }
                    action.preventDefault();
                }, false);
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
        key: "isInfinite",
        set: function set(index) {
            var _configSlide5 = this.configSlide,
                contentItem = _configSlide5.contentItem,
                isInfinite = _configSlide5.isInfinite,
                items = _configSlide5.items,
                itemWidth = _configSlide5.itemWidth;

            var RELOAD = (index < 0 || index > items) && index;
            if (isInfinite) {
                var INFINITE = index < 0 || index > items;
                if (INFINITE) {
                    contentItem.style.scrollBehavior = "smooth";
                    var SCROLL = RELOAD < 0 ? items * itemWidth : 0;
                    _Utils2.default.moveToScroll(SCROLL, contentItem, false);
                    this.configSlide.position = RELOAD < 0 ? items : 0;
                    this.configSlide.active = true;
                    contentItem.removeAttribute("style");
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
            var _this4 = this;

            var CONFIG = this.configSlide;
            var ITEM = _Utils2.default.existFields(CONFIG, "item", null);
            var ELEMENT = _Utils2.default.existFields(CONFIG, "content", null);

            if (ITEM !== null && ELEMENT !== null) {
                window.addEventListener("resize", function () {
                    _this4.configSlide.scrollWidth = ELEMENT.scrollWidth;
                    _this4.configSlide.moveTo = Math.ceil(ITEM.offsetWidth / 256);
                    _this4.configSlide.itemWidth = ITEM.offsetWidth;
                    var POST = ITEM.offsetWidth * _this4.configSlide.position;
                    _Utils2.default.moveToScroll(POST, CONFIG.contentItem, false);
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
            var _this5 = this;

            var KEYS = ["arrowNext", "arrowPrevious", "ctrlStop", "ctrlPlay"];
            KEYS.forEach(function (button) {
                var BUTTON = _this5.configSlide[button];
                var IS_PLAY = button === "ctrlPlay";
                var IS_NEXT = button === "arrowNext";
                var callbacks = function callbacks() {};

                if (button.includes("ctrl")) {
                    callbacks = function callbacks() {
                        _this5.autoPlay(IS_PLAY);
                    };
                    _Utils2.default.actionButton(BUTTON, callbacks);
                } else {
                    callbacks = function callbacks() {
                        _this5.animateSlide(IS_NEXT);
                        _this5.autoPlay(false);
                    };
                    _Utils2.default.actionButton(BUTTON, callbacks);
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
            var _this6 = this;

            var KEYS = ["arrowNext", "arrowPrevious", "contentItem"];
            var _configSlide6 = this.configSlide,
                callbacks = _configSlide6.callbacks,
                jump = _configSlide6.jump;

            KEYS.forEach(function (item) {
                var SELECTOR = _this6.configSlide[item];
                var ELEMENT = _Utils2.default.getElementDom(SELECTOR);
                var JUMP = _Utils2.default.isMobile === "desktop" ? 128 : jump;
                if (ELEMENT) {
                    _this6.configSlide[item] = ELEMENT;
                    if (item === "contentItem") {
                        var ITEM = ELEMENT.children[0] || {};
                        var ITEM_WIDTH = ITEM.offsetWidth || 0;
                        var NEW_CONFIG = {
                            items: ELEMENT.children.length - 1,
                            itemWidth: ITEM_WIDTH,
                            moveTo: Math.ceil(ITEM_WIDTH / JUMP),
                            scrollWidth: ELEMENT.scrollWidth || 0,
                            time: _this6.configSlide.time * 1000 / 128,
                            item: ITEM,
                            content: ELEMENT
                        };
                        _this6.configSlide.active = NEW_CONFIG.items > 0 && NEW_CONFIG.moveTo > 0;
                        Object.assign(_this6.configSlide, NEW_CONFIG);
                        if (!_this6.configSlide.isInfinite) {
                            _Utils2.default.displayToggle(_this6.configSlide.arrowPrevious, "none");
                        }
                    }
                }
            });
            this.configSlide.callbacks = _Utils2.default.getCallbacksConfig(callbacks);
            return this.validateConfigAutoPlay;
        }
    }, {
        key: "validateConfigAutoPlay",
        get: function get() {
            var _configSlide7 = this.configSlide,
                active = _configSlide7.active,
                ctrlPlay = _configSlide7.ctrlPlay,
                ctrlStop = _configSlide7.ctrlStop,
                timeAutoPlay = _configSlide7.timeAutoPlay;


            if (active) {
                var CONFIG = {
                    timeAutoPlay: timeAutoPlay * 1000,
                    ctrlPlay: _Utils2.default.getElementDom(ctrlPlay),
                    ctrlStop: _Utils2.default.getElementDom(ctrlStop)
                };
                Object.assign(this.configSlide, CONFIG);
            }
            return this;
        }
    }]);

    return OrcaSlide;
}();

exports.default = OrcaSlide;

/***/ }),
/* 3 */
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
        value: function moveToScroll(pixels, contentItem) {
            var isAdd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var CONTENT = contentItem;
            if (isAdd) {
                CONTENT.scrollLeft += pixels;
            } else {
                CONTENT.scrollLeft = pixels;
            }
        }

        /**
         * Crea la configuracion base para el llamado de callbacks.
         *
         * @param  {array} config Listado de funciones.
         *
         * @return {object}
         */

    }, {
        key: "getCallbacksConfig",
        value: function getCallbacksConfig(config) {
            var CONFIG = {
                callback: function callback() {},
                next: false,
                previus: false
            };

            var CALLBACKS = config.reduce(function (action, item) {
                var KEY = "Slide" + (item.slide - 1);
                var DATA = {};
                var DEFAULT = Object.assign({}, CONFIG);
                Object.assign(DEFAULT, item);
                DATA[KEY] = DEFAULT;
                return Object.assign(action, DATA);
            }, {});

            return CALLBACKS;
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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
