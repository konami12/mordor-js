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
            arrowPrevious: "#barrow_previus",
            arrowNext: "#barrow_next",
            contentItem: "#bswipe",
            time: 1,
            isInfinite: true,
            jump: 64
        };
        _orcaslide2.default.config = {
            arrowPrevious: "#carrow_previus",
            arrowNext: "#carrow_next",
            contentItem: "#cswipe",
            time: 1,
            jump: 64
        };
        _orcaslide2.default.config = {
            arrowPrevious: "#darrow_previus",
            arrowNext: "#darrow_next",
            contentItem: "#dswipe",
            time: 1,
            jump: 128
        };
    }
};

/***/ }),
/* 1 */
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
}(),
    _OrcaSlide = __webpack_require__(2),
    _OrcaSlide2 = _interopRequireDefault(_OrcaSlide);function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}var Config = { arrowNext: "", arrowPrevious: "", autoPlay: !1, callbacks: [], contentItem: "", ctrlStop: "", ctrlPlay: "", jump: 64, time: 1, timeAutoPlay: 2, isInfinite: !1, position: 0, active: !1, swipeConfig: { direction: "", startX: 0, startY: 0, endX: 0, endY: 0, min_x: 20, max_x: 40, min_y: 40, max_y: 50 } },
    initOrcaSlide = function () {
  function a() {
    _classCallCheck(this, a);
  }return _createClass(a, null, [{ key: "config", set: function set(a) {
      var b = JSON.stringify(Config),
          c = JSON.parse(b);return Object.assign(c, a), new _OrcaSlide2.default(c);
    } }]), a;
}();exports.default = initOrcaSlide;

/***/ }),
/* 2 */
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
}(),
    _Utils = __webpack_require__(3),
    _Utils2 = _interopRequireDefault(_Utils);function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}var OrcaSlide = function () {
  function a(b) {
    _classCallCheck(this, a), this.configSlide = b, this.autoPlayTimer = null, this.initSlider();
  }var b = Math.ceil;return _createClass(a, [{ key: "animateSlide", value: function value() {
      var a = this,
          b = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
          c = this.configSlide,
          d = c.active,
          e = c.contentItem,
          f = c.itemWidth,
          g = c.items,
          h = c.moveTo,
          i = c.time,
          j = c.position,
          k = c.isInfinite,
          l = b ? h : -h,
          m = b ? j + 1 : j - 1,
          n = g < m || 0 > m;if (d) if (this.callbacks(b, m), k && n) this.isInfinite = m;else if (!n) {
        this.configSlide.position += b ? 1 : -1, this.configSlide.active = !1, this.isInfinite = m;var o = 0,
            p = setInterval(function () {
          if (_Utils2.default.moveToScroll(l, e), o += h, o >= f) {
            clearInterval(p);var b = f * a.configSlide.position;_Utils2.default.moveToScroll(b, e, !1), a.configSlide.active = !0;
          }
        }, i);
      }
    } }, { key: "autoPlay", value: function a() {
      var b = this,
          c = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];this.configSlide.autoPlay = c;var d = this.configSlide,
          a = d.autoPlay,
          e = d.timeAutoPlay;c || a ? c && a && (this.autoPlayTimer = setInterval(function () {
        b.animateSlide();
      }, e)) : clearInterval(this.autoPlayTimer);
    } }, { key: "callbacks", value: function a(b, c) {
      var d = this.configSlide,
          a = d.callbacks,
          e = d.items,
          f = b ? c - 1 : c + 1,
          g = a["Slide" + f] || null;if (g) {
        var h = g.next === b || g.previus && !b,
            i = g.next === b ? "next" : "previus",
            j = "next" === i ? f + 1 : f - 1;j = 0 > j ? e : j, j = j > e ? 0 : j;try {
          var k = { action: i, slide: j, lastSlide: f };h && g.callback(k);
        } catch (a) {
          console.groupCollapsed("%c \uD83D\uDEAB [OrcaSlide => Error]", "color:#FFF;"), console.error(a), console.groupEnd("[OrcaSlide => Error]");
        }
      }
    } }, { key: "displayArrow", value: function value(a) {
      var b = this.configSlide,
          c = b.autoPlay,
          d = b.arrowNext,
          e = b.arrowPrevious,
          f = b.items,
          g = b.isInfinite,
          h = 0 < a ? "" : "none",
          i = f === a ? "none" : "";_Utils2.default.displayToggle(d, i), _Utils2.default.displayToggle(e, h), c && !g && "none" === i && this.autoPlay(!1);
    } }, { key: "initSlider", value: function value() {
      return this.validateConfig.setActionButton.resizeSlide.startTouch(), this.configSlide.autoPlay && this.autoPlay(), 0;
    } }, { key: "startTouch", value: function value() {
      var a = this,
          b = _Utils2.default.isMobile,
          c = this.configSlide,
          d = c.contentItem,
          e = c.swipeConfig;if ("desktop" !== b) {
        var f = e,
            g = void 0;d.addEventListener("touchstart", function (a) {
          var b = _Utils2.default.existFields(a, "touches.0", null);g = 0, b && (f.startX = b.screenX, f.startY = b.screenY);
        }, !1), d.addEventListener("touchmove", function (a) {
          var b = _Utils2.default.existFields(a, "touches.0", null);b && (f.endX = b.screenX, g = 0 <= f.startX - f.endX ? f.startX - f.endX : -1 * (f.startX - f.endX), f.endY = b.screenY, f.direction = _Utils2.default.getDirecctionSlide(f));
        }, !1), d.addEventListener("touchend", function () {
          var b = "left" === f.direction;a.autoPlay(!1), 60 < g && a.animateSlide(b);
        }, !1);
      }
    } }, { key: "isInfinite", set: function set(a) {
      var b = this.configSlide,
          c = b.contentItem,
          d = b.isInfinite,
          e = b.items,
          f = b.itemWidth,
          g = (0 > a || a > e) && a;if (d) {
        if (0 > a || a > e) {
          c.style.scrollBehavior = "smooth";var h = 0 > g ? e * f : 0;_Utils2.default.moveToScroll(h, c, !1), this.configSlide.position = 0 > g ? e : 0, this.configSlide.active = !0, c.removeAttribute("style");
        }
      } else this.displayArrow(a);
    } }, { key: "resizeSlide", get: function get() {
      var a = this,
          c = this.configSlide,
          d = _Utils2.default.existFields(c, "item", null),
          e = _Utils2.default.existFields(c, "content", null),
          f = "desktop" === _Utils2.default.isMobile ? 128 : c.jump;return null !== d && null !== e && window.addEventListener("resize", function () {
        a.configSlide.scrollWidth = e.scrollWidth, a.configSlide.moveTo = b(d.offsetWidth / f), a.configSlide.itemWidth = d.offsetWidth;var g = d.offsetWidth * a.configSlide.position;_Utils2.default.moveToScroll(g, c.contentItem, !1);
      }), this;
    } }, { key: "setActionButton", get: function get() {
      var a = this;return ["arrowNext", "arrowPrevious", "ctrlStop", "ctrlPlay"].forEach(function (b) {
        var c = a.configSlide[b],
            d = function d() {};b.includes("ctrl") ? (d = function d() {
          a.autoPlay("ctrlPlay" === b);
        }, _Utils2.default.actionButton(c, d)) : (d = function d() {
          a.animateSlide("arrowNext" === b), a.autoPlay(!1);
        }, _Utils2.default.actionButton(c, d));
      }), this;
    } }, { key: "validateConfig", get: function get() {
      var a = this,
          c = this.configSlide,
          d = c.callbacks,
          e = c.jump,
          f = window.devicePixelRatio;return ["arrowNext", "arrowPrevious", "contentItem"].forEach(function (c) {
        var d = a.configSlide[c],
            f = _Utils2.default.getElementDom(d),
            g = "desktop" === _Utils2.default.isMobile ? 128 : e;if (f && (a.configSlide[c] = f, "contentItem" === c)) {
          var h = f.children[0] || {},
              i = h.offsetWidth || 0,
              j = b(i / g),
              k = { items: f.children.length - 1, itemWidth: i, moveTo: j, scrollWidth: f.scrollWidth || 0, time: 1e3 * a.configSlide.time / 512, item: h, content: f };a.configSlide.active = 0 < k.items && 0 < k.moveTo, Object.assign(a.configSlide, k), a.configSlide.isInfinite || _Utils2.default.displayToggle(a.configSlide.arrowPrevious, "none");
        }
      }), this.configSlide.callbacks = _Utils2.default.getCallbacksConfig(d), this.validateConfigAutoPlay;
    } }, { key: "validateConfigAutoPlay", get: function get() {
      var a = this.configSlide,
          b = a.active,
          c = a.ctrlPlay,
          d = a.ctrlStop,
          e = a.timeAutoPlay;if (b) {
        var f = { timeAutoPlay: 1e3 * e, ctrlPlay: _Utils2.default.getElementDom(c), ctrlStop: _Utils2.default.getElementDom(d) };Object.assign(this.configSlide, f);
      }return this;
    } }]), a;
}();exports.default = OrcaSlide;

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
  }return _createClass(a, null, [{ key: "actionButton", value: function value(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
          c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "click";a && a.addEventListener(c, function () {
        "function" == typeof b && b();
      });
    } }, { key: "displayToggle", value: function value(a) {
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
    } }, { key: "getElementDom", value: function value() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          b = null;return a && (b = document.querySelector(a) || b), b;
    } }, { key: "moveToScroll", value: function value(a, b) {
      var c = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
          d = b;c ? d.scrollLeft += a : d.scrollLeft = a;
    } }, { key: "getCallbacksConfig", value: function value(a) {
      var b = { callback: function callback() {}, next: !1, previus: !1 },
          c = a.reduce(function (a, c) {
        var d = "Slide" + (c.slide - 1),
            e = {},
            f = Object.assign({}, b);return Object.assign(f, c), e[d] = f, Object.assign(a, e);
      }, {});return c;
    } }, { key: "getDirecctionSlide", value: function value(a) {
      var b = a.endX - a.min_x > a.startX,
          c = a.endX + a.min_x < a.startX,
          d = a.endY < a.startY + a.max_y,
          e = a.startY > a.endY - a.max_y,
          f = a.endY - a.min_y > a.startY,
          g = a.endY + a.min_y < a.startY,
          h = a.endX < a.startX + a.max_x,
          i = a.startX > a.endX - a.max_x,
          j = "";return (b || c) && d && e ? j = a.endX > a.startX ? "right" : "left" : (f || g) && h && i && (j = a.endY > a.startY ? "bottom" : "top"), j;
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