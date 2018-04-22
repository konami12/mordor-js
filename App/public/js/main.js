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


var _orcaslide = __webpack_require__(1);

var _orcaslide2 = _interopRequireDefault(_orcaslide);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        _orcaslide2.default.config = {
            arrowPrevious: "#arrow_previus",
            arrowNext: "#arrow_next",
            contentItem: "#swipe",
            time: 1
        };
    }
};
// import OrcaSlide from "./core/mordor";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: !0 });var _OrcaSlide = __webpack_require__(2),
    _OrcaSlide2 = _interopRequireDefault(_OrcaSlide);function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}exports.default = _OrcaSlide2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++) {
      c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}(),
    _Utils2 = __webpack_require__(3),
    _Utils3 = _interopRequireDefault(_Utils2);function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b && ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) ? b : a;
}function _inherits(a, b) {
  if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (typeof b === "undefined" ? "undefined" : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}var OrcaSlide = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
  }var c = Math.ceil;return _inherits(b, a), _createClass(b, null, [{ key: "animateSlide", value: function value() {
      var a = this,
          b = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
          c = this.configSlide,
          d = c.active,
          e = c.itemWidth,
          f = c.moveTo,
          g = c.time,
          h = b ? f : -f;if (d) {
        this.configSlide.position += b ? 1 : -1, this.configSlide.active = !1;var i = 0,
            j = setInterval(function () {
          if (a.moveToScroll(h), i += f, i >= e) {
            clearInterval(j);var b = e * a.configSlide.position;a.moveToScroll(b, !1), a.configSlide.active = !0;
          }
        }, g);
      }
    } }, { key: "displayArrow", value: function value(a) {
      var b = this.configSlide,
          c = b.arrowNext,
          d = b.arrowPrevious,
          e = b.items,
          f = 0 < a ? "" : "none",
          g = e === a ? "none" : "";this.displayToggle(c, g), this.displayToggle(d, f);
    } }, { key: "startTouch", value: function value() {
      var a = this,
          b = this.isMobile,
          c = this.configSlide,
          d = c.contentItem,
          e = c.items,
          f = c.itemWidth,
          g = this.configSlide.position;if ("desktop" !== b) {
        var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = e * f;d.addEventListener("touchstart", function (a) {
          var b = a.changedTouches[0];0 !== k && (j = -1 * h), k = parseInt(b.clientX, 10);
        }), d.addEventListener("touchmove", function (b) {
          var c = b.changedTouches[0],
              d = parseInt(c.clientX, 10);i = -1 * (d - k + j), h = 0 > i ? 0 : i > l ? l : i, a.moveToScroll(h, !1);
        }), d.addEventListener("touchend", function (b) {
          var c = b.changedTouches[0],
              d = parseInt(c.clientX, 10);console.log("position", g), console.log("swipeX", d), console.log("startX", k), console.log("clientXAuxiliar", i), console.log("clientX", h), console.log("startX - swipeX", k - d);var j = 20 * f / 100;console.log("percentage", j);var l = k - d,
              m = 0 < l ? k - d : -1 * (k - d),
              n = 0 < l ? "right" : "left";console.log("direction", n), m > j && ("right" === n && g < e - 1 ? (g += 1, a.animateSlide(!0)) : 0 < g && (g += -1, a.animateSlide(!1)));
        });
      }
    } }, { key: "config", set: function set(a) {
      this.configSlide = { arrowNext: "", arrowPrevious: "", contentItem: "", time: 1, isInfinite: !1, position: 0, active: !1 }, Object.assign(this.configSlide, a), this.validateConfig.setActionButton.resizeSlide.startTouch();
    } }, { key: "isInfinite", set: function set(a) {
      var b = this.configSlide,
          c = b.isInfinite,
          d = b.items,
          e = b.itemWidth,
          f = (0 > a || a > d) && a;if (c) {
        if (0 > a || a > d) {
          var g = 0 > f ? d * e : 0;this.moveToScroll(g, !1), this.configSlide.position = 0 > f ? d : 0, this.configSlide.active = !0;
        }
      } else this.displayArrow(a);
    } }, { key: "resizeSlide", get: function get() {
      var a = this,
          b = this.configSlide,
          d = this.existFields(b, "item", null),
          e = this.existFields(b, "content", null);return null !== d && null !== e && window.addEventListener("resize", function () {
        a.configSlide.scrollWidth = e.scrollWidth, a.configSlide.moveTo = c(d.offsetWidth / 256), a.configSlide.itemWidth = d.offsetWidth;var b = d.offsetWidth * a.configSlide.position;a.moveToScroll(b, !1);
      }), this;
    } }, { key: "setActionButton", get: function get() {
      var a = this;return ["arrowNext", "arrowPrevious"].forEach(function (b) {
        var c = "arrowNext" === b,
            d = a.configSlide[b];d.addEventListener("click", function () {
          var b = a.configSlide.items,
              d = a.configSlide.position;d += c ? 1 : -1, 0 <= d && d <= b ? (a.animateSlide(c), a.isInfinite = d) : (b < d || 0 > d) && (a.isInfinite = d);
        });
      }), this;
    } }, { key: "validateConfig", get: function get() {
      var a = this;return ["arrowNext", "arrowPrevious", "contentItem"].forEach(function (b) {
        var d = a.configSlide[b],
            e = document.querySelector(d);if (e && (a.configSlide[b] = e, "contentItem" === b)) {
          var f = e.children[0] || {},
              g = f.offsetWidth || 0,
              h = { items: e.children.length - 1, itemWidth: g, moveTo: c(g / 256), scrollWidth: e.scrollWidth || 0, time: 1e3 * a.configSlide.time / 512, item: f, content: e };a.configSlide.active = 0 < h.items && 0 < h.moveTo, Object.assign(a.configSlide, h), a.configSlide.isInfinite || a.displayToggle(a.configSlide.arrowPrevious, "none");
        }
      }), this;
    } }]), b;
}(_Utils3.default);exports.default = OrcaSlide;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++) {
      c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}();function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}var Utils = function () {
  function a() {
    _classCallCheck(this, a);
  }return _createClass(a, null, [{ key: "displayToggle", value: function value(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          c = a,
          d = b;if ("" !== b) {
        var e = c.style.display || "block";d = "block" === e ? "none" : "";
      }c.style.display = d;
    } }, { key: "existFields", value: function value(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          d = b.split("."),
          e = a;return function () {
        return d.every(function (a) {
          var b = "undefined" != typeof e[a];return e = e[a], b;
        });
      }() ? e : c;
    } }, { key: "moveToScroll", value: function value(a) {
      var b = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
          c = this.configSlide.contentItem;b ? c.scrollLeft += a : c.scrollLeft = a;
    } }, { key: "isMobile", get: function get() {
      var a = "undefined" == typeof navigator ? "desktop" : navigator.userAgent.match(/iPhone|iPad|iPod|Android/i),
          b = "undefined" == typeof window ? "1024" : window.innerWidth,
          c = "desktop";return null != a && (768 >= b ? c = "phone" : 768 < b && 1024 >= b && (c = "tablet")), c;
    } }]), a;
}();exports.default = Utils;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);