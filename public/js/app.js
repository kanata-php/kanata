/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var PREFIX_TO_STYLE = {
    'fas': 'solid',
    'far': 'regular',
    'fal': 'light',
    'fad': 'duotone',
    'fab': 'brands',
    'fak': 'kit',
    'fa': 'solid'
  };
  var STYLE_TO_PREFIX = {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  };
  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

  var FONT_WEIGHT_TO_PREFIX = {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal'
  };
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  var PENDING = 'pending';
  var SETTLED = 'settled';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';

  var NOOP = function NOOP() {};

  var isNode = typeof __webpack_require__.g !== 'undefined' && typeof __webpack_require__.g.process !== 'undefined' && typeof __webpack_require__.g.process.emit === 'function';
  var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var asyncQueue = [];
  var asyncTimer;

  function asyncFlush() {
    // run promise callbacks
    for (var i = 0; i < asyncQueue.length; i++) {
      asyncQueue[i][0](asyncQueue[i][1]);
    } // reset async asyncQueue


    asyncQueue = [];
    asyncTimer = false;
  }

  function asyncCall(callback, arg) {
    asyncQueue.push([callback, arg]);

    if (!asyncTimer) {
      asyncTimer = true;
      asyncSetTimer(asyncFlush, 0);
    }
  }

  function invokeResolver(resolver, promise) {
    function resolvePromise(value) {
      resolve(promise, value);
    }

    function rejectPromise(reason) {
      reject(promise, reason);
    }

    try {
      resolver(resolvePromise, rejectPromise);
    } catch (e) {
      rejectPromise(e);
    }
  }

  function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;

    if (typeof callback === 'function') {
      settled = FULFILLED;

      try {
        value = callback(value);
      } catch (e) {
        reject(promise, e);
      }
    }

    if (!handleThenable(promise, value)) {
      if (settled === FULFILLED) {
        resolve(promise, value);
      }

      if (settled === REJECTED) {
        reject(promise, value);
      }
    }
  }

  function handleThenable(promise, value) {
    var resolved;

    try {
      if (promise === value) {
        throw new TypeError('A promises callback cannot return that same promise.');
      }

      if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
        // then should be retrieved only once
        var then = value.then;

        if (typeof then === 'function') {
          then.call(value, function (val) {
            if (!resolved) {
              resolved = true;

              if (value === val) {
                fulfill(promise, val);
              } else {
                resolve(promise, val);
              }
            }
          }, function (reason) {
            if (!resolved) {
              resolved = true;
              reject(promise, reason);
            }
          });
          return true;
        }
      }
    } catch (e) {
      if (!resolved) {
        reject(promise, e);
      }

      return true;
    }

    return false;
  }

  function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) {
      fulfill(promise, value);
    }
  }

  function fulfill(promise, value) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = value;
      asyncCall(publishFulfillment, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = reason;
      asyncCall(publishRejection, promise);
    }
  }

  function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
  }

  function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
  }

  function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);

    if (!promise._handled && isNode) {
      __webpack_require__.g.process.emit('unhandledRejection', promise._data, promise);
    }
  }

  function notifyRejectionHandled(promise) {
    __webpack_require__.g.process.emit('rejectionHandled', promise);
  }
  /**
   * @class
   */


  function P(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }

    if (this instanceof P === false) {
      throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
    }

    this._then = [];
    invokeResolver(resolver, this);
  }

  P.prototype = {
    constructor: P,
    _state: PENDING,
    _then: null,
    _data: undefined,
    _handled: false,
    then: function then(onFulfillment, onRejection) {
      var subscriber = {
        owner: this,
        then: new this.constructor(NOOP),
        fulfilled: onFulfillment,
        rejected: onRejection
      };

      if ((onRejection || onFulfillment) && !this._handled) {
        this._handled = true;

        if (this._state === REJECTED && isNode) {
          asyncCall(notifyRejectionHandled, this);
        }
      }

      if (this._state === FULFILLED || this._state === REJECTED) {
        // already resolved, call callback async
        asyncCall(invokeCallback, subscriber);
      } else {
        // subscribe
        this._then.push(subscriber);
      }

      return subscriber.then;
    },
    catch: function _catch(onRejection) {
      return this.then(null, onRejection);
    }
  };

  P.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.all().');
    }

    return new P(function (resolve, reject) {
      var results = [];
      var remaining = 0;

      function resolver(index) {
        remaining++;
        return function (value) {
          results[index] = value;

          if (! --remaining) {
            resolve(results);
          }
        };
      }

      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolver(i), reject);
        } else {
          results[i] = promise;
        }
      }

      if (!remaining) {
        resolve(results);
      }
    });
  };

  P.race = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.race().');
    }

    return new P(function (resolve, reject) {
      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      }
    });
  };

  P.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === P) {
      return value;
    }

    return new P(function (resolve) {
      resolve(value);
    });
  };

  P.reject = function (reason) {
    return new P(function (resolve, reject) {
      reject(reason);
    });
  };

  var picked = typeof Promise === 'function' ? Promise : P;

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  function makeIconMasking (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        explicitMaskId = _ref.maskId,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var maskWidth = mask.width,
        maskPath = mask.icon;
    var trans = transformForSvg({
      transform: transform,
      containerWidth: maskWidth,
      iconWidth: mainWidth
    });
    var maskRect = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroupChildrenMixin = mainPath.children ? {
      children: mainPath.children.map(fillBlack)
    } : {};
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [fillBlack(_objectSpread({
        tag: mainPath.tag,
        attributes: _objectSpread({}, mainPath.attributes, trans.path)
      }, maskInnerGroupChildrenMixin))]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
    var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{
        tag: 'clipPath',
        attributes: {
          id: clipId
        },
        children: deGroup(maskPath)
      }, maskTag]
    };
    children.push(defs, {
      tag: 'rect',
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  function makeIconStandard (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"5.15.4\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  function toHex(unicode) {
    var result = '';

    for (var i = 0; i < unicode.length; i++) {
      var hex = unicode.charCodeAt(i).toString(16);
      result += ('000' + hex).slice(-4);
    }

    return result;
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = 'far' in styles;
    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }

  var styles$1 = namespace.styles;
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalIcon(values) {
    return values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (styles$1[cls]) {
        acc.prefix = cls;
      } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
        acc.prefix = cls;
      } else if (iconName) {
        var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
        acc.iconName = shim.iconName || iconName;
        acc.prefix = shim.prefix || acc.prefix;
      } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
        acc.rest.push(cls);
      }

      return acc;
    }, emptyCanonicalIcon());
  }
  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];
      var newOuterHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');

      if (node.parentNode && node.outerHTML) {
        node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
      } else if (node.parentNode) {
        var newNode = document.createElement('span');
        node.parentNode.replaceChild(newNode, node);
        newNode.outerHTML = newOuterHTML;
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
      delete abstract[0].attributes.style;
      delete abstract[0].attributes.id;
      var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute('class', splitClasses.toNode.join(' '));
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var treeCallback = options.treeCallback,
        nodeCallback = options.nodeCallback,
        pseudoElementsCallback = options.pseudoElementsCallback,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class') {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
            if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
          } else {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.prefix && innerText.length > 1) {
      val.iconName = byLigature(val.prefix, node.innerText);
    } else if (val.prefix && innerText.length === 1) {
      val.iconName = byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  }

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
      return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
        var parts = n.toLowerCase().split('-');
        var first = parts[0];
        var rest = parts.slice(1).join('-');

        if (first && rest === 'h') {
          acc.flipX = true;
          return acc;
        }

        if (first && rest === 'v') {
          acc.flipY = true;
          return acc;
        }

        rest = parseFloat(rest);

        if (isNaN(rest)) {
          return acc;
        }

        switch (first) {
          case 'grow':
            acc.size = acc.size + rest;
            break;

          case 'shrink':
            acc.size = acc.size - rest;
            break;

          case 'left':
            acc.x = acc.x - rest;
            break;

          case 'right':
            acc.x = acc.x + rest;
            break;

          case 'up':
            acc.y = acc.y - rest;
            break;

          case 'down':
            acc.y = acc.y + rest;
            break;

          case 'rotate':
            acc.rotate = acc.rotate + rest;
            break;
        }

        return acc;
      }, transform);
    }
  };
  function transformParser (node) {
    return parseTransformString(node.getAttribute('data-fa-transform'));
  }

  function symbolParser (node) {
    var symbol = node.getAttribute('data-fa-symbol');
    return symbol === null ? false : symbol === '' ? true : symbol;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function maskParser (node) {
    var mask = node.getAttribute('data-fa-mask');

    if (!mask) {
      return emptyCanonicalIcon();
    } else {
      return getCanonicalIcon(mask.split(' ').map(function (i) {
        return i.trim();
      }));
    }
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: null,
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraStyles = styleParser(node);
    var transform = transformParser(node);
    var symbol = symbolParser(node);
    var extraAttributes = attributesParser(node);
    var mask = maskParser(node);
    return {
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: transform,
      symbol: symbol,
      mask: mask,
      maskId: node.getAttribute('data-fa-mask-id'),
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    };
  }

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }
  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;

  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  var RING = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  };

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  var DOT = {
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  };
  var QUESTION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  };
  var EXCLAMATION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  };
  var missing = {
    tag: 'g',
    children: [RING, DOT, QUESTION, EXCLAMATION]
  };

  var styles$2 = namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  function findIcon(iconName, prefix) {
    return new picked(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: missing
      };

      if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
        var icon = styles$2[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      if (iconName && prefix && !config.showMissingIcons) {
        reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
      } else {
        resolve(val);
      }
    });
  }

  var styles$3 = namespace.styles;

  function generateSvgReplacementMutation(node, nodeMeta) {
    var iconName = nodeMeta.iconName,
        title = nodeMeta.title,
        titleId = nodeMeta.titleId,
        prefix = nodeMeta.prefix,
        transform = nodeMeta.transform,
        symbol = nodeMeta.symbol,
        mask = nodeMeta.mask,
        maskId = nodeMeta.maskId,
        extra = nodeMeta.extra;
    return new picked(function (resolve, reject) {
      picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            main = _ref2[0],
            mask = _ref2[1];

        resolve([node, makeInlineSvgAbstract({
          icons: {
            main: main,
            mask: mask
          },
          prefix: prefix,
          iconName: iconName,
          transform: transform,
          symbol: symbol,
          mask: mask,
          maskId: maskId,
          title: title,
          titleId: titleId,
          extra: extra,
          watchable: true
        })]);
      });
    });
  }

  function generateLayersText(node, nodeMeta) {
    var title = nodeMeta.title,
        transform = nodeMeta.transform,
        extra = nodeMeta.extra;
    var width = null;
    var height = null;

    if (IS_IE) {
      var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
      var boundingClientRect = node.getBoundingClientRect();
      width = boundingClientRect.width / computedFontSize;
      height = boundingClientRect.height / computedFontSize;
    }

    if (config.autoA11y && !title) {
      extra.attributes['aria-hidden'] = 'true';
    }

    return picked.resolve([node, makeLayersTextAbstract({
      content: node.innerHTML,
      width: width,
      height: height,
      transform: transform,
      title: title,
      extra: extra,
      watchable: true
    })]);
  }

  function generateMutation(node) {
    var nodeMeta = parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return generateLayersText(node, nodeMeta);
    } else {
      return generateSvgReplacementMutation(node, nodeMeta);
    }
  }

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return;
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return;
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return;
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e instanceof MissingIcon) {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new picked(function (resolve, reject) {
      picked.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function () {
        mark();
        reject();
      });
    });
  }
  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new picked(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
        var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
        // already done so with the same prefix and iconName

        if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));
            var element = DOCUMENT.createElement('svg');

            if (position === ':before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements (root) {
    if (!IS_DOM) return;
    return new picked(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      picked.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var baseStyles = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

  function css () {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library =
  /*#__PURE__*/
  function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    disconnect();
  };
  var _cssInserted = false;
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        ensureCss();
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }

        return onTree(node, callback);
      } else {
        return picked.reject('Operation requires a DOM of some kind.');
      }
    },
    css: css,
    insertCss: function insertCss$$1() {
      if (!_cssInserted) {
        insertCss(css());

        _cssInserted = true;
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
          observeMutationsRoot = params.observeMutationsRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements,
          observeMutationsRoot: observeMutationsRoot
        });
      });
    }
  };
  var parse = {
    transform: function transform(transformString) {
      return parseTransformString(transformString);
    }
  };
  var icon = resolveIcons(function (iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread({}, meaninglessTransform, transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  });
  var text = function text(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform2 = params.transform,
        transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
        _params$title2 = params.title,
        title = _params$title2 === void 0 ? null : _params$title2,
        _params$classes2 = params.classes,
        classes = _params$classes2 === void 0 ? [] : _params$classes2,
        _params$attributes2 = params.attributes,
        attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
        _params$styles2 = params.styles,
        styles = _params$styles2 === void 0 ? {} : _params$styles2;
    return apiObject({
      type: 'text',
      content: content
    }, function () {
      ensureCss();
      return makeLayersTextAbstract({
        content: content,
        transform: _objectSpread({}, meaninglessTransform, transform),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
        }
      });
    });
  };
  var counter = function counter(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$title3 = params.title,
        title = _params$title3 === void 0 ? null : _params$title3,
        _params$classes3 = params.classes,
        classes = _params$classes3 === void 0 ? [] : _params$classes3,
        _params$attributes3 = params.attributes,
        attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
        _params$styles3 = params.styles,
        styles = _params$styles3 === void 0 ? {} : _params$styles3;
    return apiObject({
      type: 'counter',
      content: content
    }, function () {
      ensureCss();
      return makeLayersCounterAbstract({
        content: content.toString(),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
        }
      });
    });
  };
  var layer = function layer(assembler) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$classes4 = params.classes,
        classes = _params$classes4 === void 0 ? [] : _params$classes4;
    return apiObject({
      type: 'layer'
    }, function () {
      ensureCss();
      var children = [];
      assembler(function (args) {
        Array.isArray(args) ? args.map(function (a) {
          children = children.concat(a.abstract);
        }) : children = children.concat(args.abstract);
      });
      return [{
        tag: 'span',
        attributes: {
          class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
        },
        children: children
      }];
    });
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    library: library,
    parse: parse,
    findIconDefinition: findIconDefinition,
    icon: icon,
    text: text,
    counter: counter,
    layer: layer,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function bootstrap() {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      });
    }

    namespace.hooks = _objectSpread({}, namespace.hooks, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons);
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  bunker(bootstrap);

}());


/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      Object.assign(error, {
        el,
        expression
      });
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = String(expression).match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items >= 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && String(expression).match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && String(expression).match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    let handler, listenerTarget;

    if (modifiers.includes('away')) {
      listenerTarget = document;

      handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      };
    } else {
      listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };
    }

    if (modifiers.includes('debounce')) {
      let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
      let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
      handler = debounce(handler, wait);
    }

    listenerTarget.addEventListener(event, handler, options);
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.
      // If we're cloning a component, the third parameter ensures no duplicate
      // event listeners are registered (the mutation observer will take care of them)


      this.initializeElements(this.$el, () => {}, componentForClone); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}, componentForClone = false) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars, componentForClone ? false : true);
      }, el => {
        if (!componentForClone) el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars, shouldRegisterListeners = true) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      shouldRegisterListeners && this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.2",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_doodle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-doodle */ "./node_modules/css-doodle/css-doodle.js");
/* harmony import */ var css_doodle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_doodle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./node_modules/css-doodle/css-doodle.js":
/*!***********************************************!*\
  !*** ./node_modules/css-doodle/css-doodle.js ***!
  \***********************************************/
/***/ (function(module) {

/*! css-doodle@0.24.1 */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * This is totally rewrite for the old parser module
   * I'll improve and replace them little by little.
   */

  const symbols$1 = [
    ':', ';', ',', '(', ')', '[', ']',
    '{', '}', 'π', '±', '+', '-', '*',
    '/', '%', '"', "'", '`', '@',
  ];

  const is$2 = {
    escape: c => c == '\\',
    space:  c => /[\r\n\t\s]/.test(c),
    digit:  c => /^[0-9]$/.test(c),
    sign:   c => /^[+-]$/.test(c),
    dot:    c => c == '.',
    quote:  c => /^["'`]$/.test(c),
    symbol: c => symbols$1.includes(c),
    hexNum: c => /^[0-9a-f]$/i.test(c),
    hex:           (a, b, c) => a == '0' && is$2.letter(b, 'x') && is$2.hexNum(c),
    expWithSign:   (a, b, c) => is$2.letter(a, 'e') && is$2.sign(b) && is$2.digit(c),
    exp:           (a, b) => is$2.letter(a, 'e') && is$2.digit(b),
    dots:          (a, b) => is$2.dot(a) && is$2.dot(b),
    letter:        (a, b) => String(a).toLowerCase() == String(b).toLowerCase(),
    comment:       (a, b) => a == '/' && b == '*',
    selfClosedTag: (a, b) => a == '/' && b == '>',
    closedTag:     (a, b) => a == '<' && b == '/',
  };

  class Token {
    constructor({ type, value, pos, status }) {
      this.type = type;
      this.value = value;
      this.pos = pos;
      if (status) {
        this.status = status;
      }
    }
    isSymbol(...values) {
      let isSymbol = this.type == 'Symbol';
      if (!values.length) return isSymbol;
      return values.some(c => c === this.value);
    }
    isSpace() {
      return this.type == 'Space';
    }
    isNumber() {
      return this.type == 'Number';
    }
    isWord() {
      return this.type == 'Word';
    }
  }

  function iterator$1(input) {
    let pointer = -1;
    let max = input.length;
    let col = -1, row = 0;
    return {
      curr(n = 0) {
        return input[pointer + n];
      },
      next(n = 1) {
        let next = input[pointer += n];
        if (next == '\n') row++, col = 0;
        else col += n;
        return next;
      },
      end() {
        return pointer >= max;
      },
      get() {
        return {
          prev:  input[pointer - 1],
          curr:  input[pointer + 0],
          next:  input[pointer + 1],
          next2: input[pointer + 2],
          next3: input[pointer + 3],
          pos:   [col, row],
        }
      }
    }
  }

  function skipComments(iter) {
    while (iter.next()) {
      let { curr, prev } = iter.get();
      if (is$2.comment(curr, prev)) break;
    }
  }

  function ignoreSpacingSymbol(value) {
     return [':', ';', ',', '{', '}', '(', ')', '[', ']'].includes(value);
  }

  function readWord(iter) {
    let temp = '';
    while (!iter.end()) {
      let { curr, next } = iter.get();
      temp += curr;
      let isBreak = is$2.symbol(next) || is$2.space(next) || is$2.digit(next);
      if (temp.length && isBreak) {
        if (!is$2.closedTag(curr, next)) break;
      }
      iter.next();
    }
    return temp.trim();
  }

  function readSpaces(iter) {
    let temp = '';
    while (!iter.end()) {
      let { curr, next } = iter.get();
      temp += curr;
      if (!is$2.space(next)) break;
      iter.next();
    }
    return temp;
  }

  function readNumber(iter) {
    let temp = '';
    let hasDot = false;
    while (!iter.end()) {
      let { curr, next, next2, next3 } = iter.get();
      temp += curr;
      if (hasDot && is$2.dot(next)) break;
      if (is$2.dot(curr)) hasDot = true;
      if (is$2.dots(next, next2)) break;
      if (is$2.expWithSign(next, next2, next3)) {
        temp += iter.next() + iter.next();
      }
      else if (is$2.exp(next, next2)) {
        temp += iter.next();
      }
      else if (!is$2.digit(next) && !is$2.dot(next)) {
        break;
      }
      iter.next();
    }
    return temp;
  }

  function readHexNumber(iter) {
    let temp = '0x';
    iter.next(2);
    while (!iter.end()) {
      let { curr, next } = iter.get();
      temp += curr;
      if (!is$2.hexNum(next)) break;
      iter.next();
    }
    return temp;
  }

  function last$3(array) {
    return array[array.length - 1];
  }

  function scan(source) {
    let iter = iterator$1(String(source).trim());
    let tokens = [];
    let quoteStack = [];

    while (iter.next()) {
      let { prev, curr, next, next2, pos } = iter.get();
      if (is$2.comment(curr, next)) {
        skipComments(iter);
      }
      else if (is$2.hex(curr, next, next2)) {
        let num = readHexNumber(iter);
        tokens.push(new Token({
          type: 'Number', value: num, pos
        }));
      }
      else if (is$2.digit(curr) || (
          is$2.digit(next) && is$2.dot(curr) && !is$2.dots(prev, curr))) {
        let num = readNumber(iter);
        tokens.push(new Token({
          type: 'Number', value: num, pos
        }));
      }
      else if (is$2.symbol(curr) && !is$2.selfClosedTag(curr, next)) {
        let lastToken = last$3(tokens);
        // negative
        let isNextDigit = is$2.digit(next) || (is$2.dot(next) && is$2.digit(next2));
        if (curr === '-' && isNextDigit && (!lastToken || !lastToken.isNumber())) {
          let num = readNumber(iter);
          tokens.push(new Token({
            type: 'Number', value: num, pos
          }));
          continue;
        }

        let token = {
          type: 'Symbol', value: curr, pos
        };
        // Escaped symbols
        if (quoteStack.length && is$2.escape(lastToken.value)) {
          tokens.pop();
          let word = readWord(iter);
          if (word.length) {
            tokens.push(new Token({
              type: 'Word', value: word, pos
            }));
          }
        }
        else {
          if (is$2.quote(curr)) {
            let lastQuote = last$3(quoteStack);
            if (lastQuote == curr) {
              quoteStack.pop();
              token.status = 'close';
            } else {
              quoteStack.push(curr);
              token.status = 'open';
            }
          }

          tokens.push(new Token(token));
        }
      }
      else if (is$2.space(curr)) {
        let spaces = readSpaces(iter);
        let lastToken = last$3(tokens);
        let { next } = iter.get();

        // Reduce unnecessary spaces
        if (!quoteStack.length && lastToken) {
          if (ignoreSpacingSymbol(lastToken.value) || ignoreSpacingSymbol(next)) {
            continue;
          } else {
            spaces = ' ';
          }
        }
        if (tokens.length && (next && next.trim())) {
          tokens.push(new Token({
            type: 'Space', value: spaces, pos
          }));
        }
      }
      else {
        let word = readWord(iter);
        if (word.length) {
          tokens.push(new Token({
            type: 'Word', value: word, pos
          }));
        }
      }
    }

    // Remove last space token
    let lastToken = last$3(tokens);
    if (lastToken && lastToken.isSpace()) {
      tokens.length = tokens.length - 1;
    }
    return tokens;
  }

  function parse$9(input) {
    let iter = iterator$1(scan(input));
    return walk$2(iter);
  }

  function walk$2(iter) {
    let rules = [];
    while (iter.next()) {
      let { curr, next } = iter.get();
      if (curr.value === 'var') {
        if (next && next.isSymbol('(')) {
          iter.next();
          let rule = parseVar(iter);
          if (isValid(rule.name)) {
            rules.push(rule);
          }
        }
      } else if (rules.length && !curr.isSymbol(',')) {
        break;
      }
    }
    return rules;
  }

  function parseVar(iter) {
    let ret = {};
    let tokens = [];
    while (iter.next()) {
      let { curr, next } = iter.get();
      if (curr.isSymbol(')', ';') && !ret.name) {
        ret.name = joinTokens$2(tokens);
        break;
      }
      else if (curr.isSymbol(',')) {
        if (ret.name === undefined) {
          ret.name = joinTokens$2(tokens);
          tokens = [];
        }
        if (ret.name) {
          ret.fallback = walk$2(iter);
        }
      } else {
        tokens.push(curr);
      }
    }
    return ret;
  }

  function joinTokens$2(tokens) {
    return tokens.map(n => n.value).join('');
  }

  function isValid(name) {
    if (name === undefined) return false;
    if (name.length <= 2) return false;
    if (name.substr(2).startsWith('-')) return false;
    if (!name.startsWith('--')) return false;
    return true;
  }

  function List(random) {

    function make_array(arr) {
      return Array.isArray(arr) ? arr : [arr];
    }

    function join(arr, spliter = '\n') {
      return (arr || []).join(spliter);
    }

    function last(arr, n = 1) {
      return arr[arr.length - n];
    }

    function first(arr) {
      return arr[0];
    }

    function clone(arr) {
      return JSON.parse(JSON.stringify(arr));
    }

    function shuffle(arr) {
      let ret = [...arr];
      let m = arr.length;
      while (m) {
        let i = ~~(random() * m--);
        let t = ret[m];
        ret[m] = ret[i];
        ret[i] = t;
      }
      return ret;
    }

    function duplicate(arr) {
      return [].concat(arr, arr);
    }

    function flat_map(arr, fn) {
      if (Array.prototype.flatMap) return arr.flatMap(fn);
      return arr.reduce((acc, x) => acc.concat(fn(x)), []);
    }

    function remove_empty_values(arr) {
      return arr.filter(v => (
        v !== undefined &&
        v !== null &&
        String(v).trim().length
      ));
    }

    return {
      make_array,
      join,
      last,
      first,
      clone,
      shuffle,
      flat_map,
      duplicate,
      remove_empty_values
    }
  }

  let { first, last: last$2, clone } = List();

  const Tokens = {
    func(name = '') {
      return {
        type: 'func',
        name,
        arguments: []
      };
    },
    argument() {
      return {
        type: 'argument',
        value: []
      };
    },
    text(value = '') {
      return {
        type: 'text',
        value
      };
    },
    pseudo(selector = '') {
      return {
        type: 'pseudo',
        selector,
        styles: []
      };
    },
    cond(name = '') {
      return {
        type: 'cond',
        name,
        styles: [],
        arguments: []
      };
    },
    rule(property = '') {
      return {
        type: 'rule',
        property,
        value: []
      };
    },
    keyframes(name = '') {
      return {
        type: 'keyframes',
        name,
        steps: []
      }
    },

    step(name = '') {
      return {
        type: 'step',
        name,
        styles: []
      }
    }
  };

  const is$1 = {
    white_space(c) {
      return /[\s\n\t]/.test(c);
    },
    line_break(c) {
      return /\n/.test(c);
    },
    number(n) {
      return !isNaN(n);
    },
    pair(n) {
      return ['"', '(', ')', "'"].includes(n);
    },
    pair_of(c, n) {
      return ({ '"': '"', "'": "'", '(': ')' })[c] == n;
    }
  };

  // This should not be in the parser
  // but I'll leave it here until the rewriting
  const symbols = {
    'π': Math.PI,
    '∏': Math.PI
  };

  function composible(name) {
    return ['@canvas', '@shaders', '@doodle'].includes(name);
  }

  function iterator(input = '') {
    let index = 0, col = 1, line = 1;
    return {
      curr(n = 0) {
        return input[index + n];
      },
      end() {
        return input.length <= index;
      },
      info() {
        return { index, col, line };
      },
      index(n) {
        return (n === undefined ? index : index = n);
      },
      next() {
        let next = input[index++];
        if (next == '\n') line++, col = 0;
        else col++;
        return next;
      }
    };
  }

  function throw_error(msg, { col, line }) {
    console.warn(
      `(at line ${ line }, column ${ col }) ${ msg }`
    );
  }

  function get_text_value(input) {
    if (input.trim().length) {
      return is$1.number(+input) ? +input : input.trim()
    } else {
      return input;
    }
  }

  function read_until(fn) {
    return function(it, reset) {
      let index = it.index();
      let word = '';
      while (!it.end()) {
        let c = it.next();
        if (fn(c)) break;
        else word += c;
      }
      if (reset) {
        it.index(index);
      }
      return word;
    }
  }

  function read_word(it, reset) {
    let check = c => /[^\w@]/.test(c);
    return read_until(check)(it, reset);
  }

  function read_keyframe_name(it) {
    return read_until(c => /[\s\{]/.test(c))(it);
  }

  function read_line(it, reset) {
    let check = c => is$1.line_break(c) || c == '{';
    return read_until(check)(it, reset);
  }

  function read_step(it, extra) {
    let c, step = Tokens.step();
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      if (is$1.white_space(c)) {
        it.next();
        continue;
      }
      else if (!step.name.length) {
        step.name = read_selector(it);
      }
      else {
        step.styles.push(read_rule(it, extra));
        if (it.curr() == '}') break;
      }
      it.next();
    }
    return step;
  }

  function read_steps(it, extra) {
    const steps = [];
    let c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      else if (is$1.white_space(c)) {
        it.next();
        continue;
      }
      else {
        steps.push(read_step(it, extra));
      }
      it.next();
    }
    return steps;
  }

  function read_keyframes(it, extra) {
    let keyframes = Tokens.keyframes(), c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      else if (!keyframes.name.length) {
        read_word(it);
        keyframes.name = read_keyframe_name(it);
        if (!keyframes.name.length) {
          throw_error('missing keyframes name', it.info());
          break;
        }
        continue;
      }
      else if (c == '{') {
        it.next();
        keyframes.steps = read_steps(it, extra);
        break;
      }
      it.next();
    }
    return keyframes;
  }

  function read_comments(it, flag = {}) {
    it.next();
    while (!it.end()) {
      let c = it.curr();
      if (flag.inline) {
        if (c == '\n') break;
      }
      else {
        if ((c = it.curr()) == '*' && it.curr(1) == '/') break;
      }
      it.next();
    }
    if (!flag.inline) {
      it.next(); it.next();
    }
  }

  function skip_tag(it) {
    it.next();
    while(!it.end()) {
      let c = it.curr();
      if (c == '>') break;
      it.next();
    }
  }

  function read_property(it) {
    let prop = '', c;
    while (!it.end()) {
      if ((c = it.curr()) == ':') break;
      else if (!is$1.white_space(c)) prop += c;
      it.next();
    }
    return prop;
  }

  function read_arguments(it, composition, doodle) {
    let args = [], group = [], stack = [], arg = '', c;
    while (!it.end()) {
      c = it.curr();
      if ((/[\('"`]/.test(c) && it.curr(-1) !== '\\')) {
        if (stack.length) {
          if (c != '(' && c === last$2(stack)) {
            stack.pop();
          } else {
            stack.push(c);
          }
        } else {
          stack.push(c);
        }
        arg += c;
      }
      else if (c == '@' && !doodle) {
        if (!group.length) {
          arg = arg.trimLeft();
        }
        if (arg.length) {
          group.push(Tokens.text(arg));
          arg = '';
        }
        group.push(read_func(it));
      }
      else if (doodle && /[)]/.test(c) || (!doodle && /[,)]/.test(c))) {
        if (stack.length) {
          if (c == ')') {
            stack.pop();
          }
          arg += c;
        }

        else {
          if (arg.length) {
            if (!group.length) {
              group.push(Tokens.text(get_text_value(arg)));
            } else {
              group.push(Tokens.text(arg));
            }

            if (arg.startsWith('±') && !doodle) {
              let raw = arg.substr(1);
              let cloned = clone(group);
              last$2(cloned).value = '-' + raw;
              args.push(normalize_argument(cloned));
              last$2(group).value = raw;
            }
          }

          args.push(normalize_argument(group));

          [group, arg] = [[], ''];

          if (c == ')') break;
        }
      }
      else {
        if (symbols[c] && !/[0-9]/.test(it.curr(-1))) {
          c = symbols[c];
        }
        arg += c;
      }

      if (composition && (it.curr(1) == ')' || !/[0-9a-zA-Z_\-.]/.test(it.curr())) && !stack.length) {
        if (group.length) {
          args.push(normalize_argument(group));
        }
        break;
      }
      else {
        it.next();
      }
    }
    return args;
  }

  function normalize_argument(group) {
    let result = group.map(arg => {
      if (arg.type == 'text' && typeof arg.value == 'string') {
        let value = String(arg.value);
        if (value.includes('`')) {
          arg.value = value = value.replace(/`/g, '"');
        }
        arg.value = value;
      }
      return arg;
    });

    let ft = first(result) || {};
    let ed = last$2(result) || {};
    if (ft.type == 'text' && ed.type == 'text') {
      let cf = first(ft.value);
      let ce  = last$2(ed.value);
      if (typeof ft.value == 'string' && typeof ed.value == 'string') {
        if (is$1.pair_of(cf, ce)) {
          ft.value = ft.value.slice(1);
          ed.value = ed.value.slice(0, ed.value.length - 1);
          result.cluster = true;
        }
      }
    }

    return result;
  }

  function seperate_func_name(name) {
    let fname = '', extra = '';
    if ((/\D$/.test(name) && !/\d+x\d+/.test(name)) || Math[name.substr(1)]) {
      return { fname: name, extra }
    }
    for (let i = name.length - 1; i >= 0; i--) {
      let c = name[i];
      let prev = name[i - 1];
      let next = name[i + 1];
      if (/[\d.]/.test(c) || ((c == 'x') && /\d/.test(prev) && /\d/.test(next))) {
        extra = c + extra;
      } else {
        fname = name.substring(0, i + 1);
        break;
      }
    }
    return { fname, extra };
  }

  function read_func(it) {
    let func = Tokens.func();
    let name = '@', c;
    let has_argument = false;
    it.next();

    while (!it.end()) {
      c = it.curr();
      let composition = (c == '.' && it.curr(1) == '@');
      let next = it.curr(1);
      if (c == '(' || composition) {
        has_argument = true;
        it.next();
        func.arguments = read_arguments(it, composition, composible(name));
        break;
      } else if (!has_argument && next !== '(' && !/[0-9a-zA-Z_\-.]/.test(next)) {
        name += c;
        break;
      }
      else {
        name += c;
      }
      it.next();
    }

    let { fname, extra } = seperate_func_name(name);
    func.name = fname;

    if (extra.length) {
      func.arguments.unshift([{
        type: 'text',
        value: extra
      }]);
    }

    func.position = it.info().index;
    return func;
  }

  function read_value(it) {
    let text = Tokens.text(), idx = 0, skip = true, c;
    const value = [], stack = [];
    value[idx] = [];

    while (!it.end()) {
      c = it.curr();

      if (skip && is$1.white_space(c)) {
        it.next();
        continue;
      } else {
        skip = false;
      }

      if (c == '\n' && !is$1.white_space(it.curr(-1))) {
        text.value += ' ';
      }
      else if (c == ',' && !stack.length) {
        if (text.value.length) {
          value[idx].push(text);
          text = Tokens.text();
        }
        value[++idx] = [];
        skip = true;
      }
      else if (/[;}<]/.test(c)) {
        if (text.value.length) {
          value[idx].push(text);
          text = Tokens.text();
        }
        break;
      }
      else if (c == '@') {
        if (text.value.length) {
          value[idx].push(text);
          text = Tokens.text();
        }
        value[idx].push(read_func(it));
      }
      else if (!is$1.white_space(c) || !is$1.white_space(it.curr(-1))) {
        if (c == '(') stack.push(c);
        if (c == ')') stack.pop();

        if (symbols[c] && !/[0-9]/.test(it.curr(-1))) {
          c = symbols[c];
        }

        text.value += c;
      }
      it.next();
    }
    if (text.value.length) {
      value[idx].push(text);
    }
    return value;
  }

  function read_selector(it) {
    let selector = '', c;
    while (!it.end()) {
      if ((c = it.curr()) == '{') break;
      else if (!is$1.white_space(c)) {
        selector += c;
      }
      it.next();
    }
    return selector;
  }

  function read_cond_selector(it) {
    let selector = { name: '', arguments: [] }, c;
    while (!it.end()) {
      if ((c = it.curr()) == '(') {
        it.next();
        selector.arguments = read_arguments(it);
      }
      else if (/[){]/.test(c)) break;
      else if (!is$1.white_space(c)) selector.name += c;
      it.next();
    }
    return selector;
  }

  function read_pseudo(it, extra) {
    let pseudo = Tokens.pseudo(), c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      if (is$1.white_space(c)) {
        it.next();
        continue;
      }
      else if (!pseudo.selector) {
        pseudo.selector = read_selector(it);
      }
      else {
        let rule = read_rule(it, extra);
        if (rule.property == '@use') {
          pseudo.styles = pseudo.styles.concat(
            rule.value
          );
        } else {
          pseudo.styles.push(rule);
        }
        if (it.curr() == '}') break;
      }
      it.next();
    }
    return pseudo;
  }

  function read_rule(it, extra) {
    let rule = Tokens.rule();
    while (!it.end()) {
      if ((it.curr()) == ';') break;
      else if (!rule.property.length) {
        rule.property = read_property(it);
        if (rule.property == '@use') {
          rule.value = read_var(it, extra);
          break;
        }
      }
      else {
        rule.value = read_value(it);
        break;
      }
      it.next();
    }
    return rule;
  }

  function read_cond(it, extra) {
    let cond = Tokens.cond(), c;
    while (!it.end()) {
      if ((c = it.curr()) == '}') break;
      else if (!cond.name.length) {
        Object.assign(cond, read_cond_selector(it));
      }
      else if (c == ':') {
        let pseudo = read_pseudo(it);
        if (pseudo.selector) cond.styles.push(pseudo);
      }
      else if (c == '@' && !read_line(it, true).includes(':')) {
        cond.styles.push(read_cond(it));
      }
      else if (!is$1.white_space(c)) {
        let rule = read_rule(it, extra);
        if (rule.property) cond.styles.push(rule);
        if (it.curr() == '}') break;
      }
      it.next();
    }
    return cond;
  }

  function read_variable(extra, name) {
    let rule = '';
    if (extra && extra.get_variable) {
      rule = extra.get_variable(name);
    }
    return rule;
  }

  function evaluate_value(values, extra) {
    values.forEach && values.forEach(v => {
      if (v.type == 'text' && v.value) {
        let vars = parse$9(v.value);
        v.value = vars.reduce((ret, p) => {
          let rule = '', other = '', parsed;
          rule = read_variable(extra, p.name);
          if (!rule && p.fallback) {
            p.fallback.every(n => {
              other = read_variable(extra, n.name);
              if (other) {
                rule = other;
                return false;
              }
            });
          }
          try {
            parsed = parse$8(rule, extra);
          } catch (e) { }
          if (parsed) {
            ret.push.apply(ret, parsed);
          }
          return ret;
        }, []);
      }
      if (v.type == 'func' && v.arguments) {
        v.arguments.forEach(arg => {
          evaluate_value(arg, extra);
        });
      }
    });
  }

  function read_var(it, extra) {
    it.next();
    let groups = read_value(it) || [];
    return groups.reduce((ret, group) => {
      evaluate_value(group, extra);
      let [token] = group;
      if (token.value && token.value.length) {
        ret.push(...token.value);
      }
      return ret;
    }, []);
  }

  function parse$8(input, extra) {
    const it = iterator(input);
    const Tokens = [];
    while (!it.end()) {
      let c = it.curr();
      if (is$1.white_space(c)) {
        it.next();
        continue;
      }
      else if (c == '/' && it.curr(1) == '*') {
        read_comments(it);
      }
      else if (c == '/' && it.curr(1) == '/') {
        read_comments(it, { inline: true });
      }
      else if (c == ':') {
        let pseudo = read_pseudo(it, extra);
        if (pseudo.selector) Tokens.push(pseudo);
      }
      else if (c == '@' && read_word(it, true) === '@keyframes') {
        let keyframes = read_keyframes(it, extra);
        Tokens.push(keyframes);
      }
      else if (c == '@' && !read_line(it, true).includes(':')) {
        let cond = read_cond(it, extra);
        if (cond.name.length) Tokens.push(cond);
      }
      else if (c == '<') {
        skip_tag(it);
      }
      else if (!is$1.white_space(c)) {
        let rule = read_rule(it, extra);
        if (rule.property) Tokens.push(rule);
      }
      it.next();
    }
    return Tokens;
  }

  function clamp(num, min, max) {
    return Math.max(min, Math.min(max, num));
  }

  function maybe(cond, value) {
    if (!cond) return '';
    return (typeof value === 'function') ? value() : value;
  }

  function range(start, stop, step) {
    let count = 0, old = start;
    let initial = n => (n > 0 && n < 1) ? .1 : 1;
    let length = arguments.length;
    if (length == 1) [start, stop] = [initial(start), start];
    if (length < 3) step = initial(start);
    let range = [];
    while ((step >= 0 && start <= stop)
      || (step < 0 && start > stop)) {
      range.push(start);
      start += step;
      if (count++ >= 1000) break;
    }
    if (!range.length) range.push(old);
    return range;
  }

  function alias_for(obj, names) {
    Object.keys(names).forEach(n => {
      obj[n] = obj[names[n]];
    });
    return obj;
  }

  function is_letter(c) {
    return /^[a-zA-Z]$/.test(c);
  }

  function is_nil(s) {
    return s === undefined || s === null;
  }

  function is_invalid_number(v) {
    return is_nil(v) || Number.isNaN(v);
  }

  function is_empty(value) {
    return is_nil(value) || value === '';
  }

  function lazy(fn) {
    let wrap = () => fn;
    wrap.lazy = true;
    return wrap;
  }

  function sequence(count, fn) {
    let [x, y = 1] = String(count).split('x');
    x = clamp(parseInt(x) || 1, 1, 65536);
    y = clamp(parseInt(y) || 1, 1, 65536);
    let max = x * y;
    let ret = [];
    let index = 1;
    for (let i = 1; i <= y; ++i) {
      for (let j = 1; j <= x; ++j) {
        ret.push(fn(index++, j, i, max, x, y));
      }
    }
    return ret;
  }

  function cell_id(x, y, z) {
    return 'c-' + x + '-' + y + '-' + z;
  }

  function get_value(input) {
    while (input && input.value) {
      return get_value(input.value);
    }
    return is_nil(input) ? '' : input;
  }

  function normalize_png_name(name) {
    let prefix = is_nil(name)
      ? Date.now()
      : String(name).replace(/\/.png$/g, '');
    return prefix + '.png';
  }

  function cache_image(src, fn, delay = 0) {
    let img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = function() {
      setTimeout(fn, delay);
    };
  }

  function is_safari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  function un_entity(code) {
    let textarea = document.createElement('textarea');
    textarea.innerHTML = code;
    return textarea.value;
  }

  function entity(code) {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  /* cyrb53 */
  function hash(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
  }

  function make_tag_function(fn) {
    let get_value = v => is_nil(v) ? '' : v;
    return (input, ...vars) => {
      let string = input.reduce((s, c, i) => s + c + get_value(vars[i]), '');
      return fn(string);
    };
  }

  const [ min, max, total ] = [ 1, 32, 32 * 32 ];

  function parse_grid(size) {
    let [x, y, z] = (size + '')
      .replace(/\s+/g, '')
      .replace(/[,，xX]+/g, 'x')
      .split('x')
      .map(n => parseInt(n));

    const max_xy = (x == 1 || y == 1) ? total : max;
    const max_z = (x == 1 && y == 1) ? total : min;

    const ret = {
      x: clamp(x || min, 1, max_xy),
      y: clamp(y || x || min, 1, max_xy),
      z: clamp(z || min, 1, max_z)
    };

    return Object.assign({}, ret, {
      count: ret.x * ret.y * ret.z,
      ratio: ret.x / ret.y
    });
  }

  function parse$7(input) {
    let iter = iterator$1(removeParens(scan(input)));
    let stack = [];
    let tokens = [];
    let identifier;
    let line;
    let result = {
      textures: [],
    };
    while (iter.next()) {
      let { curr, next } = iter.get();
      if (curr.isSymbol('{')) {
        if (!stack.length) {
          let name = joinToken$2(tokens);
          if (isIdentifier(name)) {
            identifier = name;
            tokens = [];
          } else {
            tokens.push(curr);
          }
        } else {
          tokens.push(curr);
        }
        stack.push('{');
      }
      else if (curr.isSymbol('}')) {
        stack.pop();
        if (!stack.length && identifier) {
          let value = joinToken$2(tokens);
          if (identifier && value.length) {
            if (identifier.startsWith('texture')) {
              result.textures.push({
                name: identifier,
                value
              });
            } else {
              result[identifier] = value;
            }
            tokens = [];
          }
          identifier = null;
        } else {
          tokens.push(curr);
        }
      }
      else {
        if (!is_empty(line) && line != curr.pos[1]) {
          tokens.push(lineBreak());
          line = null;
        }
        if (curr.isWord() && curr.value.startsWith('#')) {
          tokens.push(lineBreak());
          line = next.pos[1];
        }
        tokens.push(curr);
      }
    }

    if (is_empty(result.fragment)) {
      return {
        fragment: joinToken$2(tokens),
        textures: []
      }
    }
    return result;
  }

  function isIdentifier(name) {
    return /^texture\w*$|^(fragment|vertex)$/.test(name);
  }

  function lineBreak() {
    return new Token({ type: 'LineBreak', value: '\n' });
  }

  function removeParens(tokens) {
    let head = tokens[0];
    let last = tokens[tokens.length - 1];
    while (head && head.isSymbol('(') && last && last.isSymbol(')')) {
      tokens = tokens.slice(1, tokens.length - 1);
      head = tokens[0];
      last = tokens[tokens.length - 1];
    }
    return tokens;
  }

  function joinToken$2(tokens) {
    return removeParens(tokens).map(n => n.value).join('');
  }

  const NS = 'http://www.w3.org/2000/svg';
  const NSXLink = 'http://www.w3.org/1999/xlink';

  function create_svg_url(svg, id) {
    let encoded = encodeURIComponent(svg) + (id ? `#${ id }` : '');
    return `url("data:image/svg+xml;utf8,${ encoded }")`;
  }

  function normalize_svg(input) {
    const xmlns = `xmlns="${ NS }"`;
    const xmlnsXLink = `xmlns:xlink="${ NSXLink }"`;
    if (!input.includes('<svg')) {
      input = `<svg ${ xmlns } ${ xmlnsXLink }>${ input }</svg>`;
    }
    if (!input.includes('xmlns')) {
      input = input.replace(/<svg([\s>])/, `<svg ${ xmlns } ${ xmlnsXLink }$1`);
    }
    return input;
  }

  function svg_to_png(svg, width, height, scale) {
    return new Promise((resolve, reject) => {
      let source = `data:image/svg+xml;utf8,${ encodeURIComponent(svg) }`;
      function action() {
        let img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = source;

        img.onload = () => {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');

          let dpr = window.devicePixelRatio || 1;
          /* scale with devicePixelRatio only when the scale equals 1 */
          if (scale != 1) {
            dpr = 1;
          }

          canvas.width = width * dpr;
          canvas.height = height * dpr;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          try {
            canvas.toBlob(blob => {
              resolve({
                blob,
                source,
                url: URL.createObjectURL(blob)
              });
            });
          } catch (e) {
            reject(e);
          }
        };
      }

      if (is_safari()) {
        cache_image(source, action, 200);
      } else {
        action();
      }
    });
  }

  function generate_svg(token, element, parent) {
    if (!element) {
      element = document.createDocumentFragment();
    }
    if (token.type === 'block') {
      try {
        let el = document.createElementNS(NS, token.name);
        if (el) {
          token.value.forEach(t => {
            generate_svg(t, el, token);
          });
          element.appendChild(el);
        }
      } catch (e) {}
    }
    if (token.type === 'statement') {
      if (parent && parent.name == 'text' && token.name === 'content') {
        element.textContent = token.value;
      } else {
        try {
          let ns = token.name.startsWith('xlink:') ? NSXLink : NS;
          element.setAttributeNS(ns, token.name, token.value);
        } catch (e) {}
      }
    }
    if (!parent) {
      let child = element.childNodes[0];
      return child && child.outerHTML || '';
    }
    return element;
  }

  function Random(random) {

    function lerp(t, a, b) {
      return a + t * (b - a);
    }

    function rand(start = 0, end) {
      if (arguments.length == 1) {
        [start, end] = [0, start];
      }
      return lerp(random(), start, end);
    }

    function pick(...items) {
      let args = items.reduce((acc, n) => acc.concat(n), []);
      return args[~~(random() * args.length)];
    }

    function unique_id(prefix = '') {
      return prefix + Math.random().toString(32).substr(2);
    }

    return {
      lerp,
      rand,
      pick,
      unique_id
    };

  }

  function by_unit(fn) {
    return (...args) => {
      let unit = get_unit(args);
      return restore(fn, unit).apply(null, args);
    }
  }

  function restore(fn, unit) {
    return (...args) => {
      args = args.map(str => Number(
        String(str).replace(/\D+$/g, '')
      ));
      let result = fn.apply(null, args);
      if (!unit.length) {
        return result;
      }
      if (Array.isArray(result)) {
        return result.map(n => n + unit);
      }
      return result + unit;
    }
  }

  function get_unit(values) {
    let unit = '';
    values.some(str => {
      let input = String(str).trim();
      if (!input) return '';
      let matched = input.match(/\d(\D+)$/);
      return (unit = matched ? matched[1] : '');
    });
    return unit;
  }

  function by_charcode(fn) {
    return (...args) => {
      let codes = args.map(n => String(n).charCodeAt(0));
      let result = fn.apply(null, codes);
      return Array.isArray(result)
        ? result.map(n => String.fromCharCode(n))
        : String.fromCharCode(result);
    }
  }

  /**
   * Based on the Shunting-yard algorithm.
   */
  let { last: last$1 } = List();

  const default_context = {
    'π': Math.PI,
    gcd: (a, b) => {
      while (b) [a, b] = [b, a % b];
      return a;
    }
  };

  function calc(input, context) {
    const expr = infix_to_postfix(input);
    return calc$1(expr, Object.assign({}, default_context, context));
  }

  const operator = {
    '^': 7,
    '*': 6, '/': 6, '÷': 6, '%': 6,
    '&': 5, '|': 5,
    '+': 4, '-': 4,
    '<': 3, '<<': 3,
    '>': 3, '>>': 3,
    '=': 3, '==': 3,
    '≤': 3, '<=': 3,
    '≥': 3, '>=': 3,
    '≠': 3, '!=': 3,
    '∧': 2, '&&': 2,
    '∨': 2, '||': 2,
    '(': 1 , ')': 1,
  };

  function calc$1(expr, context, repeat = []) {
    let stack = [];
    while (expr.length) {
      let { name, value, type } = expr.shift();
      if (type === 'variable') {
        let result = context[value];
        if (is_invalid_number(result)) {
          result = Math[value];
        }
        if (is_invalid_number(result)) {
          result = expand$1(value, context);
        }
        if (is_invalid_number(result)) {
          if (/^\-\D/.test(value)) {
            result = expand$1('-1' + value.substr(1), context);
          }
        }
        if (result === undefined) {
          result = 0;
        }
        if (typeof result !== 'number') {
          repeat.push(result);
          if (is_cycle(repeat)) {
            result = 0;
            repeat = [];
          } else {
            result = calc$1(infix_to_postfix(result), context, repeat);
          }
        }
        stack.push(result);
      }
      else if (type === 'function') {
        let negative = false;
        if (/^\-/.test(name)) {
          negative = true;
          name = name.substr(1);
        }
        let output = value.map(v => calc$1(v, context));
        let fns = name.split('.');
        let fname;
        while (fname = fns.pop()) {
          if (!fname) continue;
          let fn = context[fname] || Math[fname];
          output = (typeof fn === 'function')
            ? (Array.isArray(output) ? fn(...output) : fn(output))
            : 0;
        }
        if (negative) {
          output = -1 * output;
        }
        stack.push(output);
      } else {
        if (/\d+/.test(value)) stack.push(value);
        else {
          let right = stack.pop();
          let left = stack.pop();
          stack.push(compute(
            value, Number(left), Number(right)
          ));
        }
      }
    }
    return Number(stack[0]) || 0;
  }

  function get_tokens$1(input) {
    let expr = String(input);
    let tokens = [], num = '';

    for (let i = 0; i < expr.length; ++i) {
      let c = expr[i];
      if (operator[c]) {
        let last_token = last$1(tokens);
        if (c == '=' && last_token && /^[!<>=]$/.test(last_token.value)) {
          last_token.value += c;
        }
        else if (/^[|&<>]$/.test(c) && last_token && last_token.value == c) {
          last_token.value += c;
        }
        else if (c == '-' && expr[i - 1] == 'e') {
          num += c;
        }
        else if (!tokens.length && !num.length && /[+-]/.test(c)) {
          num += c;
        } else {
          let { type, value } = last_token || {};
          if (type == 'operator'
              && !num.length
              && /[^()]/.test(c)
              && /[^()]/.test(value)) {
            num += c;
          } else {
            if (num.length) {
              tokens.push({ type: 'number', value: num });
              num = '';
            }
            tokens.push({ type: 'operator', value: c });
          }
        }
      }
      else if (/\S/.test(c)) {
        if (c == ',') {
          tokens.push({ type: 'number', value: num });
          num = '';
          tokens.push({ type: 'comma', value: c });
        } else if (c == '!') {
          tokens.push({ type: 'number', value: num });
          tokens.push({ type: 'operator', value: c });
          num = '';
        } else {
          num += c;
        }
      }
    }

    if (num.length) {
      tokens.push({ type: 'number', value: num });
    }
    return tokens;
  }

  function infix_to_postfix(input) {
    let tokens = get_tokens$1(input);
    const op_stack = [], expr = [];

    for (let i = 0; i < tokens.length; ++i) {
      let { type, value } = tokens[i];
      let next = tokens[i + 1] || {};
      if (type == 'number') {
        if (next.value == '(' && /[^\d.\-]/.test(value)) {
          let func_body = '';
          let stack = [];
          let values = [];

          i += 1;
          while (tokens[i++] !== undefined) {
            let token = tokens[i];
            if (token === undefined) break;
            let c = token.value;
            if (c == ')') {
              if (!stack.length) break;
              stack.pop();
              func_body += c;
            }
            else {
              if (c == '(') stack.push(c);
              if (c == ',' && !stack.length) {
                let arg = infix_to_postfix(func_body);
                if (arg.length) values.push(arg);
                func_body = '';
              } else {
                func_body += c;
              }
            }
          }

          if (func_body.length) {
            values.push(infix_to_postfix(func_body));
          }

          expr.push({
            type: 'function',
            name: value,
            value: values
          });
        }
        else if (/[^\d.\-]/.test(value)) {
          expr.push({ type: 'variable', value });
        }
        else {
          expr.push({ type: 'number', value });
        }
      }

      else if (type == 'operator') {
        if (value == '(') {
          op_stack.push(value);
        }

        else if (value == ')') {
          while (op_stack.length && last$1(op_stack) != '(') {
            expr.push({ type: 'operator', value: op_stack.pop() });
          }
          op_stack.pop();
        }

        else {
          while (op_stack.length && operator[last$1(op_stack)] >= operator[value]) {
            let op = op_stack.pop();
            if (!/[()]/.test(op)) expr.push({ type: 'operator', value: op });
          }
          op_stack.push(value);
        }
      }
    }

    while (op_stack.length) {
      expr.push({ type: 'operator', value: op_stack.pop() });
    }

    return expr;
  }

  function compute(op, a, b) {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '%': return a % b;
      case '|': return a | b;
      case '&': return a & b;
      case '<': return a < b;
      case '>': return a > b;
      case '^': return Math.pow(a, b);
      case '÷': case '/': return a / b;
      case '=': case '==': return a == b;
      case '≤': case '<=': return a <= b;
      case '≥': case '>=': return a >= b;
      case '≠': case '!=': return a != b;
      case '∧': case '&&': return a && b;
      case '∨': case '||': return a || b;
      case '<<': return a << b;
      case '>>': return a >> b;
    }
  }

  function expand$1(value, context) {
    let [_, num, variable] = value.match(/([\d.\-]+)(.*)/) || [];
    let v = context[variable];
    if (v === undefined) {
      return v;
    }
    if (typeof v === 'number') {
      return Number(num) * v;
    } else {
      return num * calc$1(infix_to_postfix(v), context);
    }
  }

  function is_cycle(array) {
    return (array[0] == array[2] && array[1] == array[3]);
  }

  class CacheValue {
    constructor() {
      this.cache = {};
    }
    clear() {
      this.cache = {};
    }
    set(input, value) {
      if (is_nil(input)) {
        return '';
      }
      let key = this.getKey(input);
      return this.cache[key] = value;
    }
    get(input) {
      let key = this.getKey(input);
      return this.cache[key];
    }
    getKey(input) {
      return (typeof input === 'string')
        ? hash(input)
        : hash(JSON.stringify(input));
    }
  }

  var Cache = new CacheValue();

  function memo(prefix, fn) {
    return (...args) => {
      let key = prefix + args.join('-');    return Cache.get(key) || Cache.set(key, fn.apply(null, args));
    }
  }

  const { last, flat_map } = List();

  function expand(fn) {
    return (...args) => fn.apply(null, flat_map(args, n =>
      String(n).startsWith('[') ? build_range(n) : n
    ));
  }

  function Type(type, value) {
    return { type, value };
  }

  function get_tokens(input) {
    let expr = String(input);
    let tokens = [], stack = [];
    if (!expr.startsWith('[') || !expr.endsWith(']')) {
      return tokens;
    }

    for (let i = 1; i < expr.length - 1; ++i) {
      let c = expr[i];
      if (c == '-' && expr[i - 1] == '-') {
        continue;
      }
      if (c == '-') {
        stack.push(c);
        continue;
      }
      if (last(stack) == '-') {
        stack.pop();
        let from = stack.pop();
        tokens.push(from
          ? Type('range', [ from, c ])
          : Type('char', c)
        );
        continue;
      }
      if (stack.length) {
        tokens.push(Type('char', stack.pop()));
      }
      stack.push(c);
    }
    if (stack.length) {
      tokens.push(Type('char', stack.pop()));
    }
    return tokens;
  }

  const build_range = memo('build_range', (input) => {
    let tokens = get_tokens(input);
    return flat_map(tokens, ({ type, value }) => {
      if (type == 'char') return value;
      let [ from, to ] = value;
      let reverse = false;
      if (from > to) {
        [from, to] = [ to, from ];
        reverse = true;
      }
      let result = by_charcode(range)(from, to);
      if (reverse) result.reverse();
      return result;
    });
  });

  class Node {
    constructor(data) {
      this.prev = this.next = null;
      this.data = data;
    }
  }

  class Stack {
    constructor(limit = 20) {
      this._limit = limit;
      this._size = 0;
    }

    push(data) {
      if (this._size >= this._limit) {
        this.root = this.root.next;
        this.root.prev = null;
      }

      let node = new Node(data);

      if (!this.root) {
        this.root = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }

      this._size++;
    }

    last(n = 1) {
      let node = this.tail;
      while (--n) {
        if (!node.prev) break;
        node = node.prev;
      }
      return node.data;
    }
  }

  /**
   * Improved noise by Ken Perlin
   * Translated from: https://mrl.nyu.edu/~perlin/noise/
   */

  class Perlin {
    constructor(random) {
      let { lerp } = Random(random);
      let { shuffle, duplicate } = List(random);
      this.lerp = lerp;
      this.p = duplicate(shuffle([
        151,160,137,91,90,15,
        131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
        190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
        88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,
        77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
        102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,
        135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,
        5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
        223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,
        129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,
        251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,
        49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,
        138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
      ]));
    }

    // Convert LO 4 bits of hash code into 12 gradient directions.
    grad(hash, x, y, z) {
      let h = hash & 15,
          u = h < 8 ? x : y,
          v = h < 4 ? y : h == 12 || h == 14 ? x : z;
      return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
    }

    noise(x, y, z) {
      let { p, grad, lerp } = this;
      // Find unit cube that contains point.
      let [X, Y, Z] = [x, y, z].map(n => Math.floor(n) & 255);
      // Find relative x, y, z of point in cube.
      [x, y, z] = [x, y, z].map(n => n - Math.floor(n));
      // Compute fade curves for each of x, y, z.
      let [u, v, w] = [x, y, z].map(n => n * n * n * (n * (n * 6 - 15) + 10));
      // hash coordinates of the 8 cube corners.
      let A = p[X  ]+Y, AA = p[A]+Z, AB = p[A+1]+Z,
          B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;
      // And add blended results from 8 corners of cube.
      return lerp(w, lerp(v, lerp(u, grad(p[AA  ], x  , y  , z   ),
                                     grad(p[BA  ], x-1, y  , z   )),
                             lerp(u, grad(p[AB  ], x  , y-1, z   ),
                                     grad(p[BB  ], x-1, y-1, z   ))),
                     lerp(v, lerp(u, grad(p[AA+1], x  , y  , z-1 ),
                                     grad(p[BA+1], x-1, y  , z-1 )),
                             lerp(u, grad(p[AB+1], x  , y-1, z-1 ),
                                     grad(p[BB+1], x-1, y-1, z-1 ))));
    }
  }

  function parse$6(input) {
    let iter = iterator$1(scan(input));
    let commands = {};
    let tokens = [];
    let name;
    let negative = false;
    while (iter.next()) {
      let { prev, curr, next } = iter.get();
      if (curr.isSymbol(':') && !name) {
        name = joinTokens$1(tokens);
        tokens = [];
      } else if (curr.isSymbol(';') && name) {
        commands[name] = transformNegative(name, joinTokens$1(tokens), negative);
        tokens = [];
        name = null;
        negative = false;
      } else if (!curr.isSymbol(';')) {
        let prevMinus = prev && prev.isSymbol('-');
        let nextMinus = next && next.isSymbol('-');
        let currMinus = curr.isSymbol('-');
        if (!name && !tokens.length && currMinus && !prevMinus && !nextMinus) {
          if (next && next.isSymbol(':')) {
            tokens.push(curr);
          } else {
            negative = true;
          }
        } else {
          tokens.push(curr);
        }
      }
    }
    if (tokens.length && name) {
      commands[name] = transformNegative(name, joinTokens$1(tokens), negative);
    }
    return commands;
  }

  function transformNegative(name, value, negative) {
    let excludes = ['fill-rule', 'fill'];
    if (excludes.includes(name)) {
      return value;
    }
    return negative ? `-1 * (${ value })` : value;
  }

  function joinTokens$1(tokens) {
    return tokens.map(n => n.value).join('');
  }

  function parse$5(input, noSpace) {
    let group = [];
    let tokens = [];
    let parenStack = [];
    let quoteStack = [];

    if (is_empty(input)) {
      return group;
    }

    let iter = iterator$1(scan(input));

    function isSeperator(token) {
      if (noSpace) {
        return token.isSymbol(',');
      }
      return token.isSymbol(',') || token.isSpace();
    }

    while (iter.next()) {
      let { prev, curr, next }  = iter.get();
      if (curr.isSymbol('(')) {
        parenStack.push(curr.value);
      }
      if (curr.isSymbol(')')) {
        parenStack.pop();
      }
      if (curr.status === 'open') {
        quoteStack.push(curr.value);
      }
      if (curr.status === 'close') {
        quoteStack.pop();
      }
      if (isSeperator(curr) && !parenStack.length && !quoteStack.length) {
        group.push(joinTokens(tokens));
        tokens = [];
      } else {
        tokens.push(curr);
      }
    }

    if (tokens.length) {
      group.push(joinTokens(tokens));
    }

    return group;
  }

  function joinTokens(tokens) {
    return tokens.map(n => n.value).join('');
  }

  const keywords = ['auto', 'reverse'];
  const units = ['deg', 'rad', 'grad', 'turn'];

  function parse$4(input) {
    let iter = iterator$1(scan(input));
    let matched = false;
    let unit = '';
    let ret = {
      direction: '',
      angle: '',
    };
    while (iter.next()) {
      let { prev, curr, next } = iter.get();
      if (curr.isWord() && keywords.includes(curr.value)) {
        ret.direction = curr.value;
        matched = true;
      }
      else if (curr.isNumber()) {
        ret.angle = Number(curr.value);
        matched = true;
      }
      else if (curr.isWord() && prev && prev.isNumber() && units.includes(curr.value)) {
        unit = curr.value;
      }
      else if (curr.isSpace() && ret.direction !== '' && ret.angle !== '') {
        break;
      }
    }
    if (!matched) {
      ret.direction = 'auto';
    }
    return normalizeAngle(ret, unit);
  }

  function normalizeAngle(input, unit) {
    let { angle } = input;
    if (angle === '') {
      angle = 0;
    }
    if (unit === 'rad') {
      angle /= (Math.PI / 180);
    }
    if (unit === 'grad') {
      angle *= .9;
    }
    if (unit === 'turn') {
      angle *= 360;
    }
    return Object.assign({}, input, { angle });
  }

  function parse$3(input) {
    let iter = iterator$1(scan(input));
    let ret = {};
    let matched = false;
    while (iter.next()) {
      let { prev, curr } = iter.get();
      if (curr.isNumber()) {
        ret.value = Number(curr.value);
        matched = true;
      }
      else if (matched && curr.isWord() && prev && prev.isNumber()) {
        ret.unit = curr.value;
      } else {
        break;
      }
    }
    return ret;
  }

  const { cos, sin, abs, atan2, PI } = Math;

  const _ = make_tag_function(c => {
    return create_shape_points(
      parse$6(c), {min: 3, max: 3600}
    );
  });

  const shapes = {
    circle: () => _`
    split: 180;
    scale: .99
  `,

    triangle: () => _`
    rotate: 30;
    scale: 1.1;
    move: 0 .2
  `,

    pentagon: () => _`
    split: 5;
    rotate: 54
  `,

    hexagon: () => _`
    split: 6;
    rotate: 30;
    scale: .98
  `,

    octagon: () => _`
    split: 8;
    rotat: 22.5;
    scale: .99
  `,

    star: () => _`
    split: 10;
    r: cos(5t);
    rotate: -18;
    scale: .99
  `,

    infinity: () => _`
    split: 180;
    scale: .99;
    x: cos(t)*.99 / (sin(t)^2 + 1);
    y: x * sin(t)
  `,

    heart: () => _`
    split: 180;
    rotate: 180;
    a: cos(t)*13/18 - cos(2t)*5/18;
    b: cos(3t)/18 + cos(4t)/18;
    x: (.75 * sin(t)^3) * 1.2;
    y: (a - b + .2) * -1.1
  `,

    bean: () => _`
    split: 180;
    r: sin(t)^3 + cos(t)^3;
    move: -.35 .35;
  `,

    bicorn: () => _`
    split: 180;
    x: cos(t);
    y: sin(t)^2 / (2 + sin(t)) - .5
  `,

    drop: () => _`
    split: 180;
    rotate: 90;
    scale: .95;
    x: sin(t);
    y: (1 + sin(t)) * cos(t) / 1.6
  `,

    fish: () => _`
    split: 240;
    x: cos(t) - sin(t)^2 / sqrt(2) - .04;
    y: sin(2t)/2
  `,

    whale: () => _`
    split: 240;
    rotate: 180;
    R: 3.4 * (sin(t)^2 - .5) * cos(t);
    x: cos(t) * R + .75;
    y: sin(t) * R * 1.2
  `,

    windmill:  () => _`
    split: 18;
    R: seq(.618, 1, 0);
    T: seq(t-.55, t, t);
    x: R * cos(T);
    y: R * sin(T)
  `,

    vase: () => _`
    split: 240;
    scale: .3;
    x: sin(4t) + sin(t) * 1.4;
    y: cos(t) + cos(t) * 4.8 + .3
  `,

    clover: (k = 3) => {
      k = clamp(k, 3, 5);
      if (k == 4) k = 2;
      return _`
      split: 240;
      r: cos(${k}t);
      scale: .98
    `;
    },

    hypocycloid: (k = 3) => {
      k = clamp(k, 3, 5);
      let scale = [0, 0, 0, .34, .25, .19][k];
      return _`
      split: 240;
      scale: ${scale};
      k: ${k};
      x: (k-1)*cos(t) + cos((k-1)*t);
      y: (k-1)*sin(t) - sin((k-1)*t)
    `;
    },

    bud: (k = 3) => {
      k = clamp(k, 3, 10);
      return _`
      split: 240;
      scale: .8;
      r: 1 + .2 * cos(${k}t)
    `;
    },
  };

  class Point {
    constructor(x, y, angle) {
      this.x = x;
      this.y = y;
      this.extra = angle;
    }
    valueOf() {
      return this.x + ' ' + this.y;
    }
    toString() {
      return this.valueOf();
    }
  }

  function create_polygon_points(option, fn) {
    if (typeof arguments[0] == 'function') {
      fn = option;
      option = {};
    }

    if (!fn) {
      fn = t => [ cos(t), sin(t) ];
    }

    let split = option.split || 180;
    let turn = option.turn || 1;
    let frame = option.frame;
    let fill = option['fill'] || option['fill-rule'];
    let direction = parse$4(option['direction'] || option['dir'] || '');
    let unit = option.unit;

    let rad = (PI * 2) * turn / split;
    let points = [];
    let first_point, first_point2;

    let factor = (option.scale === undefined) ? 1 : option.scale;
    let add = ([x1, y1, dx = 0, dy = 0]) => {
      if (x1 == 'evenodd' || x1 == 'nonzero') {
        return points.push(new Point(x1, '', ''));
      }
      let [x, y] = scale(x1, -y1, factor);
      let [dx1, dy2] = scale(dx, -dy, factor);
      let angle = calc_angle(x, y, dx1, dy2, direction);
      if (unit !== undefined && unit !== '%') {
        if (unit !== 'none') {
          x += unit;
          y += unit;
        }
      } else {
        x = (x + 1) * 50 + '%';
        y = (y + 1) * 50 + '%';
      }
      points.push(new Point(x, y, angle));
    };

    if (fill == 'nonzero' || fill == 'evenodd') {
      add([fill, '', '']);
    }

    for (let i = 0; i < split; ++i) {
      let t = rad * i;
      let point = fn(t, i);
      if (!i) first_point = point;
      add(point);
    }

    if (frame !== undefined) {
      add(first_point);
      let w = frame / 100;
      if (turn > 1) w *= 2;
      if (w == 0) w = .002;
      for (let i = 0; i < split; ++i) {
        let t = -rad * i;
        let [x, y, dx = 0, dy = 0] = fn(t, i);
        let theta = atan2(y + dy, x - dx);
        let point = [
          x - w * cos(theta),
          y - w * sin(theta)
        ];
        if (!i) first_point2 = point;
        add(point);
      }
      add(first_point2);
      add(first_point);
    }

    return points;
  }

  function calc_angle(x, y, dx, dy, option) {
    let base = atan2(y + dy, x - dx) * 180 / PI;
    if (option.direction === 'reverse') {
      base -= 180;
    }
    if (!option.direction) {
      base = 90;
    }
    if (option.angle) {
      base += option.angle;
    }
    return base;
  }

  function rotate(x, y, deg) {
    let rad = -PI / 180 * deg;
    return [
      x * cos(rad) - y * sin(rad),
      y * cos(rad) + x * sin(rad)
    ];
  }

  function translate(x, y, offset) {
    let [dx, dy = dx] = parse$5(offset).map(Number);
    return [
      x + (dx || 0),
      y - (dy || 0),
      dx,
      dy
    ];
  }

  function scale(x, y, factor) {
    let [fx, fy = fx] = parse$5(factor).map(Number);
    return [
      x * fx,
      y * fy
    ];
  }

  function create_shape_points(props, {min, max}) {
    let split = clamp(parseInt(props.vertices || props.points || props.split) || 0, min, max);
    let px = is_empty(props.x) ? 'cos(t)' : props.x;
    let py = is_empty(props.y) ? 'sin(t)' : props.y;
    let pr = is_empty(props.r) ? ''       : props.r;

    let { unit, value } = parse$3(pr);
    if (unit && !props[unit] && unit !== 't') {
      if (is_empty(props.unit)) {
        props.unit = unit;
      }
      pr = props.r = value;
    }

    if (props.degree) {
      props.rotate = props.degree;
    }

    if (props.origin) {
      props.move = props.origin;
    }

    let option = Object.assign({}, props, { split });

    return create_polygon_points(option, (t, i) => {
      let context = Object.assign({}, props, {
        't': t,
        'θ': t,
        'seq': (...list) => {
          if (!list.length) return '';
          return list[i % list.length];
        },
        'range': (a, b = 0) => {
          a = Number(a) || 0;
          b = Number(b) || 0;
          if (a > b) [a, b] = [b, a];
          let step = abs(b - a) / (split - 1);
          return a + step * i;
        }
      });
      let x = calc(px, context);
      let y = calc(py, context);
      let dx = 0;
      let dy = 0;
      if (pr) {
        let r = calc(pr, context);
        if (r == 0) {
          r = .00001;
        }
        x = r * cos(t);
        y = r * sin(t);
      }
      if (props.rotate) {
        [x, y] = rotate(x, y, Number(props.rotate) || 0);
      }
      if (props.move) {
        [x, y, dx, dy] = translate(x, y, props.move);
      }
      return [x, y, dx, dy];
    });
  }

  function readStatement$1(iter, token) {
    let fragment = [];
    while (iter.next()) {
      let { curr, next } = iter.get();
      let isStatementBreak = !next || curr.isSymbol(';') || next.isSymbol('}');
      fragment.push(curr);
      if (isStatementBreak) {
        break;
      }
    }
    if (fragment.length) {
      token.value = joinToken$1(fragment);
    }
    return token;
  }

  function walk$1(iter, parentToken) {
    let rules = [];
    let fragment = [];
    let tokenType = parentToken && parentToken.type || '';

    while (iter.next()) {
      let { prev, curr, next } = iter.get();
      let isBlockBreak = !next || curr.isSymbol('}');

      if (tokenType === 'block' && isBlockBreak) {
        if (!next && rules.length && !curr.isSymbol('}')) {
          rules[rules.length - 1].value += (';' + curr.value);
        }
        parentToken.value = rules;
        break;
      }
      else if (curr.isSymbol('{')) {
        let selectors = getGroups(fragment, token => token.isSpace());
        if (!selectors.length) {
          continue;
        }
        let tokenName = selectors.pop();
        let block = resolveId(walk$1(iter, {
          type: 'block',
          name: tokenName,
          value: []
        }));
        while (tokenName = selectors.pop()) {
          block = resolveId({
            type: 'block',
            name: tokenName,
            value: [block]
          });
        }
        rules.push(block);
        fragment = [];
      }
      else if (
        curr.isSymbol(':')
        && !isSpecialProperty(prev, next)
        && fragment.length
      ) {
        let props = getGroups(fragment, token => token.isSymbol(','));
        let value = readStatement$1(iter, {
          type: 'statement',
          name: 'unkown',
          value: ''
        });
        props.forEach(prop => {
          rules.push(Object.assign({}, value, { name: prop }));
        });
        if (tokenType == 'block') {
          parentToken.value = rules;
        }
        fragment = [];
      }
      else if (curr.isSymbol(';')) {
        if (rules.length && fragment.length) {
          rules[rules.length - 1].value += (';' + joinToken$1(fragment));
          fragment = [];
        }
      } else {
        fragment.push(curr);
      }
    }

    if (rules.length && tokenType == 'block') {
      parentToken.value = rules;
    }
    return tokenType ? parentToken : rules;
  }

  function isSpecialProperty(prev, next) {
    const names = [
      'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role',
      'xlink:show',    'xlink:title',   'xlink:type',
      'xml:base',      'xml:lang',      'xml:space',
    ];
    let prevValue = prev && prev.value;
    let nextValue = next && next.value;
    return names.includes(prevValue + ':' + nextValue);
  }

  function joinToken$1(tokens) {
    return tokens
      .filter((token, i) => {
        if (token.isSymbol(';', '}') && i === tokens.length - 1) return false;
        return true;
      })
      .map(n => n.value).join('');
  }

  function resolveId(block) {
    let name = block.name || '';
    let [tokenName, ...ids] = name.split(/#/);
    let id = ids[ids.length - 1];
    if (id) {
      block.name = tokenName;
      block.value.push({
        type: 'statement',
        name: 'id',
        value: id,
      });
    }
    return block;
  }

  function getGroups(tokens, fn) {
    let group = [];
    let temp = [];
    tokens.forEach(token => {
      if (fn(token)) {
        group.push(joinToken$1(temp));
        temp = [];
      } else {
        temp.push(token);
      }
    });
    if (temp.length) {
      group.push(joinToken$1(temp));
    }
    return group;
  }

  function parse$2(source, root) {
    let iter = iterator$1(scan(source));
    let tokens = walk$1(iter, root || {
      type: 'block',
      name: 'svg',
      value: []
    });
    return tokens;
  }

  const commands = 'MmLlHhVvCcSsQqTtAaZz';
  const relatives = 'mlhvcsqtaz';

  function parse$1(input) {
    let iter = iterator$1(scan(input));
    let temp = {};
    let result = {
      commands: [],
      valid: true
    };
    while (iter.next()) {
      let { curr } = iter.get();
      if (curr.isSpace() || curr.isSymbol(',')) {
        continue;
      }
      if (curr.isWord()) {
        if (temp.name) {
          result.commands.push(temp);
          temp = {};
        }
        temp.name = curr.value;
        temp.value = [];
        if (!commands.includes(curr.value)) {
          temp.type = 'unknown';
          result.valid = false;
        } else if (relatives.includes(curr.value)) {
          temp.type = 'relative';
        } else {
          temp.type = 'absolute';
        }
      } else if (temp.value) {
        let value = curr.value;
        if (curr.isNumber()) {
          value = Number(curr.value);
        }
        temp.value.push(value);
      } else if (!temp.name) {
        result.valid = false;
      }
    }
    if (temp.name) {
      result.commands.push(temp);
    }
    return result;
  }

  const uniform_time = {
    'name': 'cssd-uniform-time',
    'animation-name': 'cssd-uniform-time-animation',
    'animation-duration': 31536000000, /* one year in ms */
    'animation-iteration-count': 'infinite',
    'animation-delay': '0s',
    'animation-direction': 'normal',
    'animation-fill-mode': 'none',
    'animation-play-state': 'running',
    'animation-timing-function': 'linear',
  };

  uniform_time['animation'] = `
  ${ uniform_time['animation-duration'] }ms
  ${ uniform_time['animation-timing-function'] }
  ${ uniform_time['animation-delay'] }
  ${ uniform_time['animation-iteration-count'] }
  ${ uniform_time['animation-name'] }
`;

  function get_exposed(random) {
    const { shuffle } = List(random);
    const { pick, rand, lerp, unique_id } = Random(random);

    const Expose = {

      i({ count }) {
        return _ => count;
      },

      y({ y }) {
        return _ => y;
      },

      x({ x }) {
        return _ => x;
      },

      z({ z }) {
        return _ => z;
      },

      I({ grid }) {
        return _ => grid.count;
      },

      Y({ grid }) {
        return _ => grid.y;
      },

      X({ grid }) {
        return _ => grid.x;
      },

      Z({ grid }) {
        return _ => grid.z;
      },

      id({ x, y, z }) {
        return _ => cell_id(x, y, z);
      },

      n({ extra }) {
        return n => extra ? (extra[0] + (Number(n) || 0)) : '@n';
      },

      nx({ extra }) {
        return n => extra ? (extra[1] + (Number(n) || 0)) : '@nx';
      },

      ny({ extra }) {
        return n => extra ? (extra[2] + (Number(n) || 0)) : '@ny';
      },

      N({ extra }) {
        return n => extra ? (extra[3] + (Number(n) || 0)) : '@N';
      },

      µ: (
        make_sequence('')
      ),

      m: (
        make_sequence(',')
      ),

      M: (
        make_sequence(' ')
      ),

      p({ context }) {
        return expand((...args) => {
          return push_stack(context, 'last_pick', pick(args));
        });
      },

      pn({ context, extra, position }) {
        let counter = 'pn-counter' + position;
        return expand((...args) => {
          if (!context[counter]) context[counter] = 0;
          context[counter] += 1;
          let max = args.length;
          let [idx = context[counter]] = extra || [];
          let pos = (idx - 1) % max;
          let value = args[pos];
          return push_stack(context, 'last_pick', value);
        });
      },

      pd({ context, extra, position }) {
        let counter = 'pd-counter' + position;
        let values = 'pd-values' + position;
        return expand((...args) => {
          if (!context[counter]) context[counter] = 0;
          context[counter] += 1;
          if (!context[values]) {
            context[values] = shuffle(args || []);
          }
          let max = args.length;
          let [idx = context[counter]] = extra || [];
          let pos = (idx - 1) % max;
          let value = context[values][pos];
          return push_stack(context, 'last_pick', value);
        });
      },

      lp({ context }) {
        return (n = 1) => {
          let stack = context.last_pick;
          return stack ? stack.last(n) : '';
        };
      },

      r({ context }) {
        return (...args) => {
          let transform_type = args.every(is_letter)
            ? by_charcode
            : by_unit;
          let value = transform_type(rand).apply(null, args);
          return push_stack(context, 'last_rand', value);
        };
      },

      ri({ context }) {
        return (...args) => {
          let transform_type = args.every(is_letter)
            ? by_charcode
            : by_unit;
          let rand_int = (...args) => Math.round(rand(...args));
          let value = transform_type(rand_int).apply(null, args);
          return push_stack(context, 'last_rand', value);
        }
      },

      rn({ x, y, context, position, grid, extra }) {
        let counter = 'noise-2d' + position;
        let [ni, nx, ny, nm, NX, NY] = extra || [];
        let isSeqContext = (ni && nm);
        return (...args) => {
          let [start, end = start, freq = 1, amp = 1] = args;
          if (args.length == 1) {
            [start, end] = [0, start];
          }
          if (!context[counter]) {
            context[counter] = new Perlin(random);
          }
          freq = normalize(freq);
          amp = normalize(amp);
          let transform = [start, end].every(is_letter) ? by_charcode : by_unit;
          let t = isSeqContext
            ? context[counter].noise((nx - 1)/NX * freq, (ny - 1)/NY * freq, 0)
            : context[counter].noise((x - 1)/grid.x * freq, (y - 1)/grid.y * freq, 0);
          let fn = transform((start, end) => map2d(t * amp, start, end, amp));
          let value = fn(start, end);
          return push_stack(context, 'last_rand', value);
        };
      },

      lr({ context }) {
        return (n = 1) => {
          let stack = context.last_rand;
          return stack ? stack.last(n) : '';
        };
      },

      noise({ context, grid, position, ...rest }) {
        let vars = {
          i: rest.count, I: grid.count,
          x: rest.x, X: grid.x,
          y: rest.y, Y: grid.y,
          z: rest.z, Z: grid.z,
        };
        return (x, y, z = 0) => {
          let counter = 'raw-noise-2d' + position;
          if (!context[counter]) {
            context[counter] = new Perlin(random);
          }
          return context[counter].noise(
            calc(x, vars),
            calc(y, vars),
            calc(z, vars)
          );
        };
      },

      stripe() {
        return (...input) => {
          let colors = input.map(get_value);
          let max = colors.length;
          let default_count = 0;
          let custom_sizes = [];
          let prev;
          if (!max) {
            return '';
          }
          colors.forEach(step => {
            let [_, size] = parse$5(step);
            if (size !== undefined) custom_sizes.push(size);
            else default_count += 1;
          });
          let default_size = custom_sizes.length
            ? `(100% - ${custom_sizes.join(' - ')}) / ${default_count}`
            : `100% / ${max}`;
          return colors.map((step, i) => {
            if (custom_sizes.length) {
              let [color, size] = parse$5(step);
              let prefix = prev ? (prev + ' + ') : '';
              prev = prefix + (size !== undefined ? size : default_size);
              return `${color} 0 calc(${ prev })`
            }
            return `${step} 0 ${100 / max * (i + 1)}%`
          })
          .join(',');
        }
      },

      calc() {
        return value => calc(get_value(value));
      },

      hex() {
        return value => parseInt(get_value(value)).toString(16);
      },

      svg: lazy((...args) => {
        let value = args.map(input => get_value(input()).trim()).join(',');
        if (!value.startsWith('<')) {
          let parsed = parse$2(value);
          value = generate_svg(parsed);
        }
        let svg = normalize_svg(value);
        return create_svg_url(svg);
      }),

      filter: lazy((...args) => {
        let value = args.map(input => get_value(input()).trim()).join(',');
        let id = unique_id('filter-');
        if (!value.startsWith('<')) {
          let parsed = parse$2(value, {
            type: 'block',
            name: 'filter'
          });
          value = generate_svg(parsed);
        }
        let svg = normalize_svg(value).replace(
          /<filter([\s>])/,
          `<filter id="${ id }"$1`
        );
        return create_svg_url(svg, id);
      }),

      var() {
        return value => `var(${ get_value(value) })`;
      },

      t() {
        return value => `var(--${ uniform_time.name })`;
      },

      plot({ count, context, extra, position, grid }) {
        let key = 'offset-points' + position;
        return commands => {
          let [idx = count, _, __, max = grid.count] = extra || [];
          if (!context[key]) {
            let config = parse$6(commands);
            delete config['fill'];
            delete config['fill-rule'];
            delete config['frame'];
            config.points = max;
            context[key] = create_shape_points(config, {min: 1, max: 65536});
          }
          return context[key][idx - 1];
        };
      },

      shape() {
        return memo('shape-function', (type = '', ...args) => {
          type = String(type).trim();
          let points = [];
          if (type.length) {
            if (typeof shapes[type] === 'function') {
              points = shapes[type](args);
            } else {
              let commands = type;
              let rest = args.join(',');
              if (rest.length) {
                commands = type + ',' + rest;
              }
              let config = parse$6(commands);
              points = create_shape_points(config, {min: 3, max: 3600});
            }
          }
          return `polygon(${points.join(',')})`;
        });
      },

      doodle() {
        return value => value;
      },

      shaders() {
        return value => value;
      },

      canvas() {
        return value => value;
      },

      pattern() {
        return value => value;
      },

      invert() {
        return commands => {
          let parsed = parse$1(commands);
          if (!parsed.valid) return commands;
          return parsed.commands.map(({ name, value }) => {
            switch (name) {
              case 'v': return 'h' + value.join(' ');
              case 'V': return 'H' + value.join(' ');
              case 'h': return 'v' + value.join(' ');
              case 'H': return 'V' + value.join(' ');
              default:  return name + value.join(' ');
            }
          }).join(' ');
        };
      },

      flipH() {
        return commands => {
          let parsed = parse$1(commands);
          if (!parsed.valid) return commands;
          return parsed.commands.map(({ name, value }) => {
            switch (name) {
              case 'h':
              case 'H': return name + value.map(flip_value).join(' ');
              default:  return name + value.join(' ');
            }
          }).join(' ');
        };
      },

      flipV() {
        return commands => {
          let parsed = parse$1(commands);
          if (!parsed.valid) return commands;
          return parsed.commands.map(({ name, value }) => {
            switch (name) {
              case 'v':
              case 'V': return name + value.map(flip_value).join(' ');
              default:  return name + value.join(' ');
            }
          }).join(' ');
        };
      },

      flip(...args) {
        let flipH = Expose.flipH(...args);
        let flipV = Expose.flipV(...args);
        return commands => {
          return flipV(flipH(commands));
        }
      },

      reverse(...args) {
        return commands => {
          let parsed = parse$1(commands);
          if (!parsed.valid) return commands;
          return parsed.commands.reverse().map(({ name, value }) => {
            return name + value.join(' ');
          }).join(' ');
        }
      },

    };

    function make_sequence(c) {
      return lazy((n, ...actions) => {
        if (!actions || !n) return '';
        let count = get_value(n());
        let evaluated = calc(count);
        if (evaluated === 0) {
          evaluated = count;
        }
        return sequence(
          evaluated,
          (...args) => {
            return actions.map(action => {
              return get_value(action(...args))
            }).join(',');
          }
        ).join(c);
      });
    }

    function push_stack(context, name, value) {
      if (!context[name]) context[name] = new Stack();
      context[name].push(value);
      return value;
    }

    function flip_value(num) {
      return -1 * num;
    }

    function map2d(value, min, max, amp = 1) {
      let dimention = 2;
      let v = Math.sqrt(dimention / 4) * amp;
      let [ma, mb] = [-v, v];
      return lerp((value - ma) / (mb - ma), min * amp, max * amp);
    }

    function normalize(value) {
      value = Number(value) || 0;
      return value < 0 ? 0 : value;
    }

    return alias_for(Expose, {
      'index': 'i',
      'col': 'x',
      'row': 'y',
      'depth': 'z',
      'rand': 'r',
      'pick': 'p',

      // error prone
      'stripes': 'stripe',
      'strip':   'stripe',
      'patern':  'pattern',
      'flipv': 'flipV',
      'fliph': 'flipH',

      // legacy names, keep them before 1.0
      'svg-filter': 'filter',
      'last-rand': 'lr',
      'last-pick': 'lp',
      'multiple': 'm',
      'multi': 'm',
      'rep': 'µ',
      'repeat': 'µ',
      'ms': 'M',
      's':  'I',
      'size': 'I',
      'sx': 'X',
      'size-x': 'X',
      'size-col': 'X',
      'max-col': 'X',
      'sy': 'Y',
      'size-y': 'Y',
      'size-row': 'Y',
      'max-row': 'Y',
      'sz': 'Z',
      'size-z': 'Z',
      'size-depth': 'Z',
      'pick-by-turn': 'pn',
      'pick-n': 'pn',
      'pick-d': 'pd',
      'offset': 'plot',
      'Offset': 'Plot',
      'point': 'plot',
      'Point': 'Plot',
      'paint': 'canvas',
    });
  }

  let all = [];

  function get_props(arg) {
    if (!all.length) {
      let props = new Set();
      for (let n in document.head.style) {
        if (!n.startsWith('-')) {
          props.add(n.replace(/[A-Z]/g, '-$&').toLowerCase());
        }
      }
      if (!props.has('grid-gap')) {
        props.add('grid-gap');
      }
      all = Array.from(props);
    }
    return (arg && arg.test)
      ? all.filter(n => arg.test(n))
      : all;
  }

  function build_mapping(prefix) {
    let reg = new RegExp(`\\-?${ prefix }\\-?`);
    return get_props(reg)
      .map(n => n.replace(reg, ''))
      .reduce((obj, n) => { return obj[n] = n, obj }, {});
  }

  const props_webkit_mapping = build_mapping('webkit');
  const props_moz_mapping = build_mapping('moz');

  function prefixer(prop, rule) {
    if (props_webkit_mapping[prop]) {
      return `-webkit-${ rule } ${ rule }`;
    }
    else if (props_moz_mapping[prop]) {
      return `-moz-${ rule } ${ rule }`;
    }
    return rule;
  }

  const presets = {

   '4a0': [ 1682, 2378 ],
   '2a0': [ 1189, 1682 ],
    a0:   [ 841, 1189 ],
    a1:   [ 594, 841 ],
    a2:   [ 420, 594 ],
    a3:   [ 297, 420 ],
    a4:   [ 210, 297 ],
    a5:   [ 148, 210 ],
    a6:   [ 105, 148 ],
    a7:   [ 74, 105 ],
    a8:   [ 52, 74 ],
    a9:   [ 37, 52 ],
    a10:  [ 26, 37 ],

    b0:  [ 1000, 1414 ],
    b1:  [ 707, 1000 ],
    b2:  [ 500, 707 ],
    b3:  [ 353, 500 ],
    b4:  [ 250, 353 ],
    b5:  [ 176, 250 ],
    b6:  [ 125, 176 ],
    b7:  [ 88, 125 ],
    b8:  [ 62, 88 ],
    b9:  [ 44, 62 ],
    b10: [ 31, 44 ],
    b11: [ 22, 32 ],
    b12: [ 16, 22 ],

    c0:  [ 917, 1297 ],
    c1:  [ 648, 917 ],
    c2:  [ 458, 648 ],
    c3:  [ 324, 458 ],
    c4:  [ 229, 324 ],
    c5:  [ 162, 229 ],
    c6:  [ 114, 162 ],
    c7:  [ 81, 114 ],
    c8:  [ 57, 81 ],
    c9:  [ 40, 57 ],
    c10: [ 28, 40 ],
    c11: [ 22, 32 ],
    c12: [ 16, 22 ],

    d0: [ 764, 1064 ],
    d1: [ 532, 760 ],
    d2: [ 380, 528 ],
    d3: [ 264, 376 ],
    d4: [ 188, 260 ],
    d5: [ 130, 184 ],
    d6: [ 92, 126 ],

    letter:   [ 216, 279 ],
    postcard: [ 100, 148 ],
    poster:   [ 390, 540 ],
  };

  const modes = {
    portrait: 'p',
    pt: 'p',
    p: 'p',

    landscape: 'l',
    ls: 'l',
    l: 'l',
  };

  const unit = 'mm';

  function get_preset(name, mode) {
    name = String(name).toLowerCase();

    // Default to landscape mode
    let [h, w] = presets[name] || [];

    if (modes[mode] == 'p') {
      [w, h] = [h, w];
    }

    return [w, h].map(n => n + unit);
  }

  function is_preset(name) {
    return !!presets[name];
  }

  const Expose = {

    ['@size'](value, { is_special_selector, grid }) {
      let [w, h = w] = parse$5(value);
      if (is_preset(w)) {
        [w, h] = get_preset(w, h);
      }
      let styles = `
      width: ${ w };
      height: ${ h };
    `;
      if (is_special_selector) {
        if (w === 'auto' || h === 'auto') {
          styles += `aspect-ratio: ${ grid.ratio };`;
        }
      } else {
        styles += `
        --internal-cell-width: ${ w };
        --internal-cell-height: ${ h };
      `;
      }
      return styles;
    },

    ['@offset']: (() => {
      let map_left_right = {
        'center': '50%',
        'left': '0%', 'right': '100%',
        'top': '50%', 'bottom': '50%'
      };
      let map_top_bottom = {
        'center': '50%',
        'top': '0%', 'bottom': '100%',
        'left': '50%', 'right': '50%',
      };

      return (value, { extra }) => {
        let [left, top = '50%'] = parse$5(value);
        left = map_left_right[left] || left;
        top = map_top_bottom[top] || top;
        const cw = 'var(--internal-cell-width, 25%)';
        const ch = 'var(--internal-cell-height, 25%)';
        return `
        position: absolute;
        left: ${ left };
        top: ${ top };
        width: ${ cw };
        height: ${ ch };
        margin-left: calc(${ cw } / -2);
        margin-top: calc(${ ch } / -2);
        grid-area: unset;
        --plot-angle: ${ extra || 0 };
        transform: rotate(${ extra || 0 }deg);
      `;
      }
    })(),

    ['@grid'](value, options) {
      let [grid, ...size] = value.split('/').map(s => s.trim());
      size = size.join(' / ');
      return {
        grid: parse_grid(grid),
        size: size ? this['@size'](size, options) : ''
      };
    },

    ['@shape']: memo('shape-property', value => {
      let [type, ...args] = parse$5(value);
      let prop = 'clip-path';
      if (typeof shapes[type] !== 'function') return '';
      let points = shapes[type](...args);
      let rules = `${ prop }: polygon(${points.join(',')});`;
      return prefixer(prop, rules) + 'overflow: hidden;';
    }),

    ['@use'](rules) {
      if (rules.length > 2) {
        return rules;
      }
    }

  };

  var Property = alias_for(Expose, {

    // legacy names.
    '@place-cell': '@offset',

  });

  function nth(input, curr, max) {
    for (let i = 0; i <= max; ++i) {
      if (calc(input, { n: i }) == curr) return true;
    }
  }

  const is = {
    even: n => !(n % 2),
    odd:  n => !!(n % 2)
  };

  function even_or_odd(expr) {
    return /^(even|odd)$/.test(expr);
  }

  function Selector(random) {

    return {

      at({ x, y }) {
        return (x1, y1) => (x == x1 && y == y1);
      },

      nth({ count, grid }) {
        return (...exprs) => exprs.some(expr =>
          even_or_odd(expr)
            ? is[expr](count)
            : nth(expr, count, grid.count)
        );
      },

      row({ y, grid }) {
        return (...exprs) => exprs.some(expr =>
          even_or_odd(expr)
            ? is[expr](y)
            : nth(expr, y, grid.y)
        );
      },

      col({ x, grid }) {
        return (...exprs) => exprs.some(expr =>
          even_or_odd(expr)
            ? is[expr](x)
            : nth(expr, x, grid.x)
        );
      },

      even({ count, grid, x, y }) {
        return arg => is.odd(x + y);
      },

      odd({ count, grid, x, y}) {
        return arg => is.even(x + y);
      },

      random() {
        return (ratio = .5) => {
          if (ratio >= 1 && ratio <= 0) ratio = .5;
          return random() < ratio;
        }
      },

      match({ count, grid, x, y }) {
        return expr => {
          return !!calc('(' + expr + ')', {
            x, X: grid.x,
            y, Y: grid.y,
            i: count, I: grid.count,
            random,
          });
        }
      }

    }
  }

  // Expose all Math functions and constants.
  const methods = Object.getOwnPropertyNames(Math);

  var MathFunc = methods.reduce((expose, n) => {
    expose[n] = () => (...args) => {
      args = args.map(get_value);
      if (typeof Math[n] === 'number') return Math[n];
      return Math[n].apply(null, args.map(calc));
    };
    return expose;
  }, {});

  let { join, make_array, remove_empty_values } = List();

  function is_host_selector(s) {
    return /^\:(host|doodle)/.test(s);
  }

  function is_parent_selector(s) {
    return /^\:(container|parent)/.test(s);
  }

  function is_special_selector(s) {
    return is_host_selector(s) || is_parent_selector(s);
  }

  class Rules {

    constructor(tokens, random) {
      this.tokens = tokens;
      this.rules = {};
      this.props = {};
      this.keyframes = {};
      this.grid = null;
      this.is_grid_defined = false;
      this.coords = [];
      this.doodles = {};
      this.canvas = {};
      this.pattern = {};
      this.shaders = {};
      this.reset();
      this.Func = get_exposed(random);
      this.Selector = Selector(random);
      this.custom_properties = {};
      this.uniforms = {};
      this.unique_id = Random(random).unique_id;
    }

    reset() {
      this.styles = {
        host: '',
        container: '',
        cells: '',
        keyframes: ''
      };
      this.coords = [];
      this.doodles = {};
      this.canvas = {};
      this.pattern = {};
      this.shaders = {};
      for (let key in this.rules) {
        if (key.startsWith('#c')) {
          delete this.rules[key];
        }
      }
    }

    add_rule(selector, rule) {
      let rules = this.rules[selector];
      if (!rules) {
        rules = this.rules[selector] = [];
      }
      rules.push.apply(rules, make_array(rule));
    }

    pick_func(name) {
      return this.Func[name] || MathFunc[name];
    }

    apply_func(fn, coords, args) {
      let _fn = fn(...make_array(coords));
      let input = [];
      args.forEach(arg => {
        let type = typeof arg.value;
        let is_string_or_number = (type === 'number' || type === 'string');
        if (!arg.cluster && (is_string_or_number)) {
          input.push(...parse$5(arg.value, true));
        }
        else {
          if (typeof arg === 'function') {
            input.push(arg);
          }
          else if (!is_nil(arg.value)) {
            let value = get_value(arg.value);
            input.push(value);
          }
        }
      });
      input = remove_empty_values(input);
      let result = _fn(...make_array(input));
      return result;
    }

    compose_aname(...args) {
      return args.join('-');
    }

    compose_selector({ x, y, z}, pseudo = '') {
      return `#${ cell_id(x, y, z) }${ pseudo }`;
    }

    is_composable(name) {
      return ['doodle', 'shaders', 'canvas', 'pattern'].includes(name);
    }

    compose_argument(argument, coords, extra = []) {
      let result = argument.map(arg => {
        if (arg.type === 'text') {
          return arg.value;
        }
        else if (arg.type === 'func') {
          let fname = arg.name.substr(1);
          let fn = this.pick_func(fname);

          if (typeof fn === 'function') {
            if (fname === 't') {
              this.uniforms.time = true;
            }
            if (this.is_composable(fname)) {
              let value = get_value((arg.arguments[0] || [])[0]);
              if (!is_nil(value)) {
                switch (fname) {
                  case 'doodle':
                    return this.compose_doodle(value);
                  case 'shaders':
                    return this.compose_shaders(value, coords);
                  case 'canvas':
                    return this.compose_canvas(value, arg.arguments.slice(1));
                  case 'pattern':
                    return this.compose_pattern(value, coords);
                }
              }
            }
            coords.extra = extra;
            coords.position = arg.position;
            let args = arg.arguments.map(n => {
              return fn.lazy
                ? (...extra) => this.compose_argument(n, coords, extra)
                : this.compose_argument(n, coords, extra);
            });
            let value = this.apply_func(fn, coords, args);
            return value;
          }
        }
      });

      return {
        cluster: argument.cluster,
        value: (result.length >= 2 ? ({ value: result.join('') }) : result[0])
      }
    }

    compose_doodle(doodle) {
      let id = this.unique_id('doodle');
      this.doodles[id] = doodle;
      return '${' + id + '}';
    }

    compose_shaders(shader, {x, y, z}) {
      let id = this.unique_id('shader');
      this.shaders[id] = {
        shader,
        cell: cell_id(x, y, z)
      };
      return '${' + id + '}';
    }

    compose_pattern(code, {x, y, z}) {
      let id = this.unique_id('pattern');
      this.pattern[id] = {
        code,
        cell: cell_id(x, y, z)
      };
      return '${' + id + '}';
    }

    compose_canvas(code, rest = []) {
      let commands = code;
      let result = rest.map(group => get_value(group[0])).join(',');
      if (result.length) {
        commands = code + ',' + result;
      }
      let id = this.unique_id('canvas');
      this.canvas[id] = { code: commands };
      return '${' + id + '}';
    }

    compose_value(value, coords) {
      if (!Array.isArray(value)) {
        return {
          value: '',
          extra: '',
        }
      }
      let extra = '';
      let output = value.reduce((result, val) => {
        switch (val.type) {
          case 'text': {
            result += val.value;
            break;
          }
          case 'func': {
            let fname = val.name.substr(1);
            let fn = this.pick_func(fname);
            if (typeof fn === 'function') {
              if (fname === 't') {
                this.uniforms.time = true;
              }
              if (this.is_composable(fname)) {
                let value = get_value((val.arguments[0] || [])[0]);
                if (!is_nil(value)) {
                  switch (fname) {
                    case 'doodle':
                      result += this.compose_doodle(value); break;
                    case 'shaders':
                      result += this.compose_shaders(value, coords); break;
                    case 'pattern':
                      result += this.compose_pattern(value, coords); break;
                    case 'canvas':
                      result += this.compose_canvas(value, val.arguments.slice(1)); break;
                  }
                }
              } else {
                coords.position = val.position;
                let args = val.arguments.map(arg => {
                  return fn.lazy
                    ? (...extra) => this.compose_argument(arg, coords, extra)
                    : this.compose_argument(arg, coords);
                });

                let output = this.apply_func(fn, coords, args);
                if (!is_nil(output)) {
                  result += output;
                }
                if (output.extra) {
                  extra = output.extra;
                }
              }
            }
          }
        }
        return result;
      }, '');

      return {
        value: output,
        extra: extra,
      }
    }

    compose_rule(token, _coords, selector) {
      let coords = Object.assign({}, _coords);
      let prop = token.property;
      let extra;
      let value_group = token.value.reduce((ret, v) => {
        let composed = this.compose_value(v, coords);
        if (composed) {
          if (composed.value) {
            ret.push(composed.value);
          }
          if (composed.extra) {
            extra = composed.extra;
          }
        }
        return ret;
      }, []);

      let value = value_group.join(', ');

      if (/^animation(\-name)?$/.test(prop)) {
        this.props.has_animation = true;

        if (is_host_selector(selector)) {
          let prefix = uniform_time[prop];
          if (prefix && value) {
            value =  prefix + ',' + value;
          }
        }

        if (coords.count > 1) {
          let { count } = coords;
          switch (prop) {
            case 'animation-name': {
              value = value_group
                .map(n => this.compose_aname(n, count))
                .join(', ');
              break;
            }
            case 'animation': {
              value = value_group
                .map(n => {
                  let group = (n || '').split(/\s+/);
                  group[0] = this.compose_aname(group[0], count);
                  return group.join(' ');
                })
                .join(', ');
            }
          }
        }
      }

      if (prop === 'content') {
        if (!/["']|^none$|^(var|counter|counters|attr|url)\(/.test(value)) {
          value = `'${ value }'`;
        }
      }

      if (prop === 'transition') {
        this.props.has_transition = true;
      }

      let rule = `${ prop }: ${ value };`;
      rule = prefixer(prop, rule);

      if (prop === 'clip-path') {
        // fix clip bug
        rule += ';overflow: hidden;';
      }

      if (prop === 'width' || prop === 'height') {
        if (!is_special_selector(selector)) {
          rule += `--internal-cell-${ prop }: ${ value };`;
        }
      }

      if (prop === 'background' && (value.includes('shader') || value.includes('canvas') || value.includes('pattern'))) {
        rule += 'background-size: 100% 100%;';
      }

      if (/^\-\-/.test(prop)) {
        this.custom_properties[prop] = value;
      }

      if (Property[prop]) {
        let transformed = Property[prop](value, {
          is_special_selector: is_special_selector(selector),
          grid: coords.grid,
          extra
        });
        switch (prop) {
          case '@grid': {
            if (is_host_selector(selector)) {
              rule = transformed.size || '';
            } else {
              rule = '';
              if (!this.is_grid_defined) {
                transformed = Property[prop](value, {
                  is_special_selector: true,
                  grid: coords.grid
                });
                this.add_rule(':host', transformed.size || '');
              }
            }
            this.grid = coords.grid;
            this.is_grid_defined = true;
            break;
          }
          case '@place-cell': {
            if (!is_host_selector(selector)) {
              rule = transformed;
            }
            break;
          }
          case '@use': {
            if (token.value.length) {
              this.compose(coords, token.value);
            }
            rule = '';
            break;
          }
          default: {
            rule = transformed;
          }
        }
      }

      return rule;
    }

    pre_compose_rule(token, _coords) {
      let coords = Object.assign({}, _coords);
      let prop = token.property;

      switch (prop) {
        case '@grid': {
          let value_group = token.value.reduce((ret, v) => {
            let composed = this.compose_value(v, coords);
            if (composed && composed.value) ret.push(composed.value);
            return ret;
          }, []);
          let value = value_group.join(', ');
          let transformed = Property[prop](value, {});
          this.grid = transformed.grid;
          break;
        }
        case '@use': {
          if (token.value.length) {
            this.pre_compose(coords, token.value);
          }
          break;
        }
      }
    }

    pre_compose(coords, tokens) {
      (tokens || this.tokens).forEach(token => {
        switch (token.type) {
          case 'rule': {
            this.pre_compose_rule(token, coords);
            break;
          }
          case 'pseudo': {
            if (is_host_selector(token.selector)) {
              (token.styles || []).forEach(token => {
                this.pre_compose_rule(token, coords);
              });
            }
            break;
          }
        }
      });
    }

    compose(coords, tokens, initial) {
      this.coords.push(coords);
      (tokens || this.tokens).forEach((token, i) => {
        if (token.skip) return false;
        if (initial && this.grid) return false;

        switch (token.type) {
          case 'rule': {
            this.add_rule(
              this.compose_selector(coords),
              this.compose_rule(token, coords)
            );
            break;
          }

          case 'pseudo': {
            if (token.selector.startsWith(':doodle')) {
              token.selector = token.selector.replace(/^\:+doodle/, ':host');
            }
            let special = is_special_selector(token.selector);
            if (special) {
              token.skip = true;
            }
            token.selector.split(',').forEach(selector => {
              let pseudo = token.styles.map(s =>
                this.compose_rule(s, coords, selector)
              );
              let composed = special
                ? selector
                : this.compose_selector(coords, selector);
              this.add_rule(composed, pseudo);
            });

            break;
          }

          case 'cond': {
            let fn = this.Selector[token.name.substr(1)];
            if (fn) {
              let args = token.arguments.map(arg => {
                return this.compose_argument(arg, coords);
              });
              let result = this.apply_func(fn, coords, args);
              if (result) {
                this.compose(coords, token.styles);
              }
            }
            break;
          }

          case 'keyframes': {
            if (!this.keyframes[token.name]) {
              this.keyframes[token.name] = coords => `
              ${ join(token.steps.map(step => `
                ${ step.name } {
                  ${ join(
                    step.styles.map(s => this.compose_rule(s, coords))
                  )}
                }
              `)) }
            `;
            }
          }
        }
      });
    }

    output() {
      Object.keys(this.rules).forEach((selector, i) => {
        if (is_parent_selector(selector)) {
          this.styles.container += `
          .container {
            ${ join(this.rules[selector]) }
          }
        `;
        } else {
          let target = is_host_selector(selector) ? 'host' : 'cells';
          let value = join(this.rules[selector]).trim();
          let name = (target === 'host') ? `${ selector }, .host` : selector;
          this.styles[target] += `${ name } { ${ value  } }`;
        }
      });

      let keyframes = Object.keys(this.keyframes);

      if (this.uniforms.time) {
        this.styles.container += `
        :host, .host {
          animation: ${ uniform_time.animation };
        }
      `;
        this.styles.keyframes += `
       @keyframes ${ uniform_time['animation-name'] } {
         from { --${ uniform_time.name }: 0 }
         to { --${ uniform_time.name }: ${ uniform_time['animation-duration'] / 10 } }
       }
      `;
      }

      this.coords.forEach((coords, i) => {
        keyframes.forEach(name => {
          let aname = this.compose_aname(name, coords.count);
          this.styles.keyframes += `
          ${ maybe(i === 0,
            `@keyframes ${ name } {
              ${ this.keyframes[name](coords) }
            }`
          )}
          @keyframes ${ aname } {
            ${ this.keyframes[name](coords) }
          }
        `;
        });
      });

      return {
        props: this.props,
        styles: this.styles,
        grid: this.grid,
        doodles: this.doodles,
        shaders: this.shaders,
        canvas: this.canvas,
        pattern: this.pattern,
        uniforms: this.uniforms
      }
    }

  }

  function generator(tokens, grid_size, random) {
    let rules = new Rules(tokens, random);
    let context = {};

    rules.pre_compose({
      x: 1, y: 1, z: 1, count: 1, context: {},
      grid: { x: 1, y: 1, z: 1, count: 1 }
    });

    let { grid } = rules.output();
    if (grid) grid_size = grid;
    rules.reset();

    if (grid_size.z == 1) {
      for (let y = 1, count = 0; y <= grid_size.y; ++y) {
        for (let x = 1; x <= grid_size.x; ++x) {
          rules.compose({
            x, y, z: 1,
            count: ++count, grid: grid_size, context
          });
        }
      }
    }
    else {
      for (let z = 1, count = 0; z <= grid_size.z; ++z) {
        rules.compose({
          x: 1, y: 1, z,
          count: ++count, grid: grid_size, context
        });
      }
    }

    return rules.output();
  }

  /*
  Copyright 2019 David Bau.
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

  var global = window;
  var math = Math;
  var pool = [];

  //
  // The following constants are related to IEEE 754 limits.
  //

  var width = 256,        // each RC4 output is 0 <= x < 256
      chunks = 6,         // at least six RC4 outputs for each double
      digits = 52,        // there are 52 significant digits in a double
      rngname = 'random', // rngname: name for Math.random and Math.seedrandom
      startdenom = math.pow(width, chunks),
      significance = math.pow(2, digits),
      overflow = significance * 2,
      mask = width - 1,
      nodecrypto;         // node.js crypto module, initialized at the bottom.

  //
  // seedrandom()
  // This is the seedrandom function described above.
  //
  function seedrandom(seed, options, callback) {
    var key = [];
    options = (options == true) ? { entropy: true } : (options || {});

    // Flatten the seed string or build one from local entropy if needed.
    var shortseed = mixkey(flatten(
      options.entropy ? [seed, tostring(pool)] :
      (seed == null) ? autoseed() : seed, 3), key);

    // Use the seed to initialize an ARC4 generator.
    var arc4 = new ARC4(key);

    // This function returns a random double in [0, 1) that contains
    // randomness in every bit of the mantissa of the IEEE 754 value.
    var prng = function() {
      var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
          d = startdenom,                 //   and denominator d = 2 ^ 48.
          x = 0;                          //   and no 'extra last byte'.
      while (n < significance) {          // Fill up all significant digits by
        n = (n + x) * width;              //   shifting numerator and
        d *= width;                       //   denominator and generating a
        x = arc4.g(1);                    //   new least-significant-byte.
      }
      while (n >= overflow) {             // To avoid rounding up, before adding
        n /= 2;                           //   last byte, shift everything
        d /= 2;                           //   right using integer math until
        x >>>= 1;                         //   we have exactly the desired bits.
      }
      return (n + x) / d;                 // Form the number within [0, 1).
    };

    prng.int32 = function() { return arc4.g(4) | 0; };
    prng.quick = function() { return arc4.g(4) / 0x100000000; };
    prng.double = prng;

    // Mix the randomness into accumulated entropy.
    mixkey(tostring(arc4.S), pool);

    // Calling convention: what to return as a function of prng, seed, is_math.
    return (options.pass || callback ||
        function(prng, seed, is_math_call, state) {
          if (state) {
            // Load the arc4 state from the given state if it has an S array.
            if (state.S) { copy(state, arc4); }
            // Only provide the .state method if requested via options.state.
            prng.state = function() { return copy(arc4, {}); };
          }

          // If called as a method of Math (Math.seedrandom()), mutate
          // Math.random because that is how seedrandom.js has worked since v1.0.
          if (is_math_call) { math[rngname] = prng; return seed; }

          // Otherwise, it is a newer calling convention, so return the
          // prng directly.
          else return prng;
        })(
    prng,
    shortseed,
    'global' in options ? options.global : (this == math),
    options.state);
  }

  //
  // ARC4
  //
  // An ARC4 implementation.  The constructor takes a key in the form of
  // an array of at most (width) integers that should be 0 <= x < (width).
  //
  // The g(count) method returns a pseudorandom integer that concatenates
  // the next (count) outputs from ARC4.  Its return value is a number x
  // that is in the range 0 <= x < (width ^ count).
  //
  function ARC4(key) {
    var t, keylen = key.length,
        me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

    // The empty key [] is treated as [0].
    if (!keylen) { key = [keylen++]; }

    // Set up S using the standard key scheduling algorithm.
    while (i < width) {
      s[i] = i++;
    }
    for (i = 0; i < width; i++) {
      s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
      s[j] = t;
    }

    // The "g" method returns the next (count) outputs as one number.
    (me.g = function(count) {
      // Using instance members instead of closure state nearly doubles speed.
      var t, r = 0,
          i = me.i, j = me.j, s = me.S;
      while (count--) {
        t = s[i = mask & (i + 1)];
        r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
      }
      me.i = i; me.j = j;
      return r;
      // For robust unpredictability, the function call below automatically
      // discards an initial batch of values.  This is called RC4-drop[256].
      // See http://google.com/search?q=rsa+fluhrer+response&btnI
    })(width);
  }

  //
  // copy()
  // Copies internal state of ARC4 to or from a plain object.
  //
  function copy(f, t) {
    t.i = f.i;
    t.j = f.j;
    t.S = f.S.slice();
    return t;
  }
  //
  // flatten()
  // Converts an object tree to nested arrays of strings.
  //
  function flatten(obj, depth) {
    var result = [], typ = (typeof obj), prop;
    if (depth && typ == 'object') {
      for (prop in obj) {
        try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
      }
    }
    return (result.length ? result : typ == 'string' ? obj : obj + '\0');
  }

  //
  // mixkey()
  // Mixes a string seed into a key that is an array of integers, and
  // returns a shortened string seed that is equivalent to the result key.
  //
  function mixkey(seed, key) {
    var stringseed = seed + '', smear, j = 0;
    while (j < stringseed.length) {
      key[mask & j] =
        mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
    }
    return tostring(key);
  }

  //
  // autoseed()
  // Returns an object for autoseeding, using window.crypto and Node crypto
  // module if available.
  //
  function autoseed() {
    try {
      var out;
      if (nodecrypto && (out = nodecrypto.randomBytes)) ; else {
        out = new Uint8Array(width);
        (global.crypto || global.msCrypto).getRandomValues(out);
      }
      return tostring(out);
    } catch (e) {
      var browser = global.navigator,
          plugins = browser && browser.plugins;
      return [+new Date, global, plugins, global.screen, tostring(pool)];
    }
  }

  //
  // tostring()
  // Converts an array of charcodes to a string
  //
  function tostring(a) {
    return String.fromCharCode.apply(0, a);
  }

  //
  // When seedrandom.js is loaded, we immediately mix a few bits
  // from the built-in RNG into the entropy pool.  Because we do
  // not want to interfere with deterministic PRNG state later,
  // seedrandom will not call math.random on its own again after
  // initialization.
  //
  mixkey(math.random(), pool);

  function create_shader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }
  function create_program(gl, vss, fss) {
    let vs = create_shader(gl, gl.VERTEX_SHADER, vss);
    let fs = create_shader(gl, gl.FRAGMENT_SHADER, fss);
    let prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('Link failed: ' + gl.getProgramInfoLog(prog));
      console.warn('vs info-log: ' + gl.getShaderInfoLog(vs));
      console.warn('fs info-log: ' + gl.getShaderInfoLog(fs));
    }
    return prog;
  }

  function add_uniform(fragment, uniform) {
    if (!fragment.includes(uniform)) {
      return uniform + '\n' + fragment;
    }
    return fragment;
  }

  const fragment_head = `#version 300 es
  precision highp float;
  out vec4 FragColor;
`;

  const default_vertex_shader = `#version 300 es
  in vec4 position;
  void main() {
    gl_Position = position;
  }
`;

  // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
  function load_texture(gl, image, i) {
    const texture = gl.createTexture();
    gl.activeTexture(gl['TEXTURE' + i]);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  }

  function draw_shader(shaders, width, height) {
    let result = Cache.get(shaders);
    if (result) {
      return Promise.resolve(result);
    }
    let canvas = document.createElement('canvas');
    let ratio = window.devicePixelRatio || 1;
    width *= ratio;
    height *= ratio;
    canvas.width = width;
    canvas.height = height;

    let gl = canvas.getContext('webgl2');
    if (!gl) return Promise.resolve('');

    // resolution uniform
    let fragment = add_uniform(shaders.fragment || '', 'uniform vec2 u_resolution;');
    // texture uniform
    shaders.textures.forEach(n => {
      let uniform = `uniform sampler2D ${ n.name };`;
      fragment =  add_uniform(fragment, uniform);
    });

    let program = create_program(
      gl,
      shaders.vertex || default_vertex_shader,
      fragment_head + fragment
    );

    // position in vertex shader
    let positionAttributeLocation = gl.getAttribLocation(program, 'position');
    let positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    let vertices = [-1, -1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    // resolve uniforms
    gl.uniform2fv(gl.getUniformLocation(program, "u_resolution"), [width, height]);
    shaders.textures.forEach((n, i) => {
      load_texture(gl, n.value, i);
      gl.uniform1i(gl.getUniformLocation(program, n.name), i);
    });

    // two triangles to form a rectangle
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // resolve image data in 72dpi :(
    return Promise.resolve(Cache.set(shaders, canvas.toDataURL()));
  }

  function readStatement(iter, token) {
    let fragment = [];
    while (iter.next()) {
      let { curr, next } = iter.get();
      let isStatementBreak = !next || curr.isSymbol(';') || next.isSymbol('}');
      fragment.push(curr);
      if (isStatementBreak) {
        break;
      }
    }
    if (fragment.length) {
      token.value = joinToken(fragment);
    }
    return token;
  }

  function walk(iter, parentToken) {
    let rules = [];
    let fragment = [];
    let tokenType = parentToken && parentToken.type || '';
    let stack = [];

    while (iter.next()) {
      let { prev, curr, next } = iter.get();
      let isBlockBreak = !next || curr.isSymbol('}');
      if (tokenType === 'block' && isBlockBreak) {
        if (!next && rules.length && !curr.isSymbol('}')) {
          rules[rules.length - 1].value += (';' + curr.value);
        }
        parentToken.value = rules;
        break;
      }
      else if (curr.isSymbol('{') && fragment.length && !stack.length) {
        let selectors = parseSelector(fragment);
        if (!selectors.length) {
          continue;
        }
        let block = walk(iter, {
          type: 'block',
          name: 'unkown',
          value: []
        });

        selectors.forEach(selector => {
          let newBlock = Object.assign({}, block, {
            name: selector.name,
            args: selector.args
          });
          rules.push(newBlock);
        });
        fragment = [];
      }
      else if (curr.isSymbol(':') && fragment.length && !stack.length) {
        let prop = joinToken(fragment);
        rules.push(readStatement(iter, {
          type: 'statement',
          name: prop,
          value: ''
        }));
        if (tokenType == 'block') {
          parentToken.value = rules;
        }
        fragment = [];
      }
      else if (curr.isSymbol(';')) {
        if (rules.length && fragment.length) {
          rules[rules.length - 1].value += (';' + joinToken(fragment));
          fragment = [];
        }
      } else {
        if (curr.isSymbol('(')) {
          stack.push(curr);
        }
        if (curr.isSymbol(')')) {
          stack.pop();
        }
        fragment.push(curr);
      }
    }

    if (rules.length && tokenType == 'block') {
      parentToken.value = rules;
    }
    return tokenType ? parentToken : rules;
  }

  function joinToken(tokens) {
    return tokens
      .filter((token, i) => {
        if (token.isSymbol(';') && i === tokens.length - 1) return false;
        return true;
      })
      .map(n => n.value).join('');
  }

  function parseSelector(tokens) {
    let iter = iterator$1(tokens);
    let groups = [];
    let selectorName = '';
    let args = [];
    let fragments = [];
    let stack = [];
    while (iter.next()) {
      let { curr, next } = iter.get();
      if (!selectorName.length && curr.isWord()) {
        selectorName = curr.value;
      }
      else if (curr.isSymbol('(')) {
        if (stack.length) {
          fragments.push(curr.value);
        }
        stack.push(curr);
      }
      else if (curr.isSymbol(')')) {
        stack.pop();
        if (stack.length) {
          fragments.push(curr.value);
        } else if (fragments.length) {
          args.push(fragments.join(''));
          fragments = [];
        }
      }
      else if (curr.isSymbol(',')) {
        if (stack.length) {
          args.push(fragments.join(''));
          fragments = [];
        } else {
          if (fragments.length) {
            args.push(fragments.join(''));
            fragments = [];
          }
          if (selectorName) {
            groups.push({
              name: selectorName,
              args
            });
            selectorName = '';
            args = [];
            fragments = [];
          }
        }
      }
      else {
        fragments.push(curr.value);
      }
    }

    if (selectorName) {
      groups.push({
        name: selectorName,
        args
      });
    }

    return groups.filter((v, i, self) => {
      let idx = self.findIndex(n => {
        return (n.name === v.name && v.args.join('') == n.args.join(''));
      });
      return idx === i;
    });
  }

  function parse(source) {
    let iter = iterator$1(scan(source));
    let tokens = walk(iter);
    return tokens;
  }

  function generate_shader(input, grid) {
    return `
    vec3 mapping(vec2 uv, vec2 grid) {
      vec2 _grid = 1.0/grid;
      float x = ceil(uv.x/_grid.x);
      float y = ceil(grid.y - uv.y/_grid.y);
      float i = x + (y - 1.0) * y;
      return vec3(x, y, i);
    }
    vec4 getColor(float x, float y, float i, float I, float X, float Y) {
      vec4 color = vec4(0, 0, 0, 0);
      ${input}
      return color;
    }
    void main() {
      vec2 uv = gl_FragCoord.xy/u_resolution.xy;
      vec2 grid = vec2(${grid.x}, ${grid.y});
      vec3 p = mapping(uv, grid);
      FragColor = getColor(p.x, p.y, p.z, grid.x * grid.y, grid.x, grid.y);
    }
  `;
  }

  function generate_statement(token, extra) {
    if (token.name === 'fill') {
      let {r, g, b, a} = extra.get_rgba_color(token.value);
      return {
        type: 'statement',
        value: `\ncolor = vec4(${float(r/255)}, ${float(g/255)}, ${float(b/255)}, ${float(a)});\n`,
      }
    }
    if (token.name == 'grid') {
      return {
        type: 'grid',
        value: token.value,
      }
    }
    return {
      type: 'statement',
      value: ''
    }
  }

  function generate_block(token, extra) {
    if (token.name === 'match') {
      let cond = token.args[0];
      let values = [];
      token.value.forEach(t => {
        let statement = generate_statement(t, extra);
        if (statement.type == 'statement') {
          values.push(statement.value);
        }
      });
      return `
      if (${cond}) {
        ${values.join('')}
      }
    `
    }
    return '';
  }

  function float(n) {
    return String(n).includes('.') ? n : n + '.0';
  }

  function get_grid(input) {
    let [x, y = x] = String(input + '')
      .replace(/\s+/g, '')
      .replace(/[,，xX]+/g, 'x')
      .split('x')
      .map(n => parseInt(n));
    if (!x || x < 1) x = 1;
    if (!y || y < 1) y = 1;
    return { x, y }
  }

  function draw_pattern(code, extra) {
    let tokens = parse(code);
    let result = [];
    let grid = {x: 1, y: 1 };
    tokens.forEach(token => {
      if (token.type === 'statement') {
        let statement = generate_statement(token, extra);
        if (statement.type == 'statement') {
          result.push(statement.value);
        }
        if (statement.type === 'grid') {
          grid = get_grid(statement.value);
        }
      } else if (token.type === 'block') {
        result.push(generate_block(token, extra));
      }
    });
    return generate_shader(result.join(''), grid);
  }

  let counter = 1;

  function draw_canvas(code) {
    let result = Cache.get(code);
    if (result) {
      return Promise.resolve(result);
    }
    let name = 'css-doodle-paint-' + (counter++);
    let wrapped = generate(name, code);

    let blob = new Blob([wrapped], { type: 'text/javascript' });
    try {
      if (CSS.paintWorklet) {
        CSS.paintWorklet.addModule(URL.createObjectURL(blob));
      }
    } catch(e) {}

    return Promise.resolve(Cache.set(code, `paint(${name})`));
  }

  function generate(name, code) {
    code = un_entity(code);
    // make it so
    if (!code.includes('paint(')) {
      code = `
      paint(ctx, {width, height}, props) {
        ${code}
      }
    `;
    }
    return `
    registerPaint('${name}', class {
      ${ code }
    })
  `;
  }

  function get_all_variables(element) {
    let ret = {};
    if (element.computedStyleMap) {
      for (let [prop, value] of element.computedStyleMap()) {
        if (prop.startsWith('--')) {
          ret[prop] = value[0][0];
        }
      }
    } else {
      let styles = getComputedStyle(element);
      for (let prop of styles) {
        if (prop.startsWith('--')) {
          ret[prop] = styles.getPropertyValue(prop);
        }
      }
    }
    return inline(ret);
  }

  function get_variable(element, name) {
    return getComputedStyle(element).getPropertyValue(name)
      .trim()
      .replace(/^\(|\)$/g, '');
  }

  function inline(map) {
    let result = [];
    for (let prop in map) {
      result.push(prop + ':' + map[prop]);
    }
    return result.join(';');
  }

  function transform(color) {
    let [r, g, b, a = 1] = color
      .replace(/rgba?\((.+)\)/, (_, v) => v)
      .split(/,\s*/);
    return {r, g, b, a};
  }

  function get_rgba_color(root, value) {
    let element = root.querySelector('#defs');
    if (!element) {
      return { r: 0, g: 0, b: 0, a: 1 }
    }
    element.style.color = value;
    return transform(getComputedStyle(element).color);
  }

  class Doodle extends HTMLElement {
    constructor() {
      super();
      this.doodle = this.attachShadow({ mode: 'open' });
      this.extra = {
        get_variable: name => get_variable(this, name),
        get_rgba_color: value => get_rgba_color(this.shadowRoot, value),
      };
    }

    connectedCallback(again) {
      if (/^(complete|interactive|loaded)$/.test(document.readyState)) {
        this.load(again);
      } else {
        setTimeout(() => this.load(again));
      }
    }

    update(styles) {
      Cache.clear();
      let use = this.get_use();
      if (!styles) styles = un_entity(this.innerHTML);
      this.innerHTML = styles;

      if (!this.grid_size) {
        this.grid_size = this.get_grid();
      }

      let { x: gx, y: gy, z: gz } = this.grid_size;

      const compiled = this.generate(
        parse$8(use + styles, this.extra)
      );

      if (!this.shadowRoot.innerHTML) {
        Object.assign(this.grid_size, compiled.grid);
        return this.build_grid(compiled, compiled.grid);
      }

      if (compiled.grid) {
        let { x, y, z } = compiled.grid;
        if (gx !== x || gy !== y || gz !== z) {
          Object.assign(this.grid_size, compiled.grid);
          return this.build_grid(compiled, compiled.grid);
        }
        Object.assign(this.grid_size, compiled.grid);
      }
      else {
        let grid = this.get_grid();
        let { x, y, z } = grid;
        if (gx !== x || gy !== y || gz !== z) {
          Object.assign(this.grid_size, grid);
          return this.build_grid(
            this.generate(parse$8(use + styles, this.extra)),
            grid
          );
        }
      }

      if (compiled.uniforms.time) {
        this.register_uniform_time();
      }

      let replace = this.replace(compiled);

      this.set_content('.style-keyframes', replace(compiled.styles.keyframes));

      if (compiled.props.has_animation) {
        this.set_content('.style-cells', '');
        this.set_content('.style-container', '');
      }

      setTimeout(() => {
        this.set_content('.style-container', replace(
            get_grid_styles(this.grid_size)
          + compiled.styles.host
          + compiled.styles.container
        ));
        this.set_content('.style-cells', replace(compiled.styles.cells));
      });
    }

    get grid() {
      return Object.assign({}, this.grid_size);
    }

    set grid(grid) {
      this.attr('grid', grid);
      this.connectedCallback(true);
    }

    get seed() {
      return this._seed_value;
    }

    set seed(seed) {
      this.attr('seed', seed);
      this.connectedCallback(true);
    }

    get use() {
      return this.attr('use');
    }

    set use(use) {
      this.attr('use', use);
      this.connectedCallback(true);
    }

    static get observedAttributes() {
      return ['grid', 'use', 'seed'];
    }

    attributeChangedCallback(name, old_val, new_val) {
      if (old_val == new_val) {
        return false;
      }
      let observed = ['grid', 'use', 'seed'].includes(name);
      if (observed && !is_nil(old_val)) {
        this[name] = new_val;
      }
    }

    get_grid() {
      return parse_grid(this.attr('grid'));
    }

    get_use() {
      let use = this.attr('use') || '';
      if (use) use = `@use:${ use };`;
      return use;
    }

    attr(name, value) {
      if (arguments.length === 1) {
        return this.getAttribute(name);
      }
      if (arguments.length === 2) {
        this.setAttribute(name, value);
        return value;
      }
    }

    generate(parsed) {
      let grid = this.get_grid();
      let seed = this.attr('seed') || this.attr('data-seed');

      if (is_nil(seed)) {
        seed = Date.now();
      }

      seed = String(seed);
      this._seed_value = seed;

      let random = this.random = seedrandom(seed);
      let compiled = this.compiled = generator(parsed, grid, random);
      return compiled;
    }

    doodle_to_image(code, options, fn) {
      if (typeof options === 'function') {
        fn = options;
        options = null;
      }
      let parsed = parse$8(code, this.extra);
      let _grid = parse_grid({});
      let compiled = generator(parsed, _grid, this.random);
      let grid = compiled.grid ? compiled.grid : _grid;
      const { keyframes, host, container, cells } = compiled.styles;

      let replace = this.replace(compiled);
      let grid_container = create_grid(grid);

      let size = (options && options.width && options.height)
        ? `width="${ options.width }" height="${ options.height }"`
        : '';

      replace(`
      <svg ${ size } xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <foreignObject width="100%" height="100%">
          <div class="host" xmlns="http://www.w3.org/1999/xhtml">
            <style>
              ${ get_basic_styles() }
              ${ get_grid_styles(grid) }
              ${ host }
              ${ container }
              ${ cells }
              ${ keyframes }
            </style>
            <svg id="defs" xmlns="http://www.w3.org/2000/svg" style="width:0; height:0"></svg>
            ${ grid_container }
          </div>
        </foreignObject>
      </svg>
    `).then(result => {
        let source =`data:image/svg+xml;base64,${ window.btoa(unescape(encodeURIComponent(result))) }`;
        if (is_safari()) {
          cache_image(source);
        }
        fn(source);
      });
    }

    pattern_to_image({ code, cell }, fn) {
      let shader = draw_pattern(code, this.extra);
      this.shader_to_image({ shader, cell }, fn);
    }

    canvas_to_image({ code }, fn) {
      draw_canvas(code).then(fn);
    }

    shader_to_image({ shader, cell }, fn) {
      let parsed = parse$7(shader);
      let element = this.doodle.getElementById(cell);
      let { width, height } = element && element.getBoundingClientRect() || {
        width: 0, height: 0
      };
      let ratio = window.devicePixelRatio || 1;

      if (!parsed.textures.length) {
        draw_shader(parsed, width, height).then(fn);
      }
      // Need to bind textures first
      else {
        let transforms = parsed.textures.map(texture => {
          return new Promise(resolve => {
            this.doodle_to_image(texture.value, { width, height }, src => {
              let img = new Image();
              img.width = width * ratio;
              img.height = height * ratio;
              img.onload = () => resolve({ name: texture.name, value: img });
              img.src = src;
            });
          });
        });
        Promise.all(transforms).then(textures => {
          parsed.textures = textures;
          draw_shader(parsed, width, height).then(fn);
        });
      }
    }

    load(again) {
      if (!again) {
        if (this.hasAttribute('click-to-update')) {
          this.addEventListener('click', e => this.update());
        }
      }
      let use = this.get_use();
      let parsed = parse$8(use + un_entity(this.innerHTML), this.extra);
      let compiled = this.generate(parsed);

      this.grid_size = compiled.grid
        ? compiled.grid
        : this.get_grid();

      this.build_grid(compiled, this.grid_size);
    }

    replace({ doodles, shaders, canvas, pattern }) {
      let doodle_ids = Object.keys(doodles);
      let shader_ids = Object.keys(shaders);
      let canvas_ids = Object.keys(canvas);
      let pattern_ids = Object.keys(pattern);
      let length = doodle_ids.length + canvas_ids.length + shader_ids.length + pattern_ids.length;
      return input => {
        if (!length) {
          return Promise.resolve(input);
        }
        let mappings = [].concat(
          doodle_ids.map(id => {
            if (input.includes(id)) {
              return new Promise(resolve => {
                this.doodle_to_image(doodles[id], value => resolve({ id, value }));
              });
            } else {
              return Promise.resolve('');
            }
          }),
          shader_ids.map(id => {
            if (input.includes(id)) {
              return new Promise(resolve => {
                this.shader_to_image(shaders[id], value => resolve({ id, value }));
              });
            } else {
              return Promise.resolve('');
            }
          }),
          canvas_ids.map(id => {
            if (input.includes(id)) {
              return new Promise(resolve => {
                this.canvas_to_image(canvas[id], value => resolve({ id, value }));
              });
            } else {
              return Promise.resolve('');
            }
          }),
          pattern_ids.map(id => {
            if (input.includes(id)) {
              return new Promise(resolve => {
                this.pattern_to_image(pattern[id], value => resolve({ id, value }));
              });
            } else {
              return Promise.resolve('');
            }
          }),
        );

        return Promise.all(mappings).then(mapping => {
          if (input.replaceAll) {
            mapping.forEach(({ id, value }) => {
              input = input.replaceAll(
                '${' + id + '}',
                /^canvas/.test(id) ? value : `url(${value})`
              );
            });
          } else {
            mapping.forEach(({ id, value }) => {
              input = input.replace(
                '${' + id + '}',
                /^canvas/.test(id) ? value : `url(${value})`
              );
            });
          }
          return input;
        });
      }
    }

    build_grid(compiled, grid) {
      const { has_transition, has_animation } = compiled.props;
      let has_delay = (has_transition || has_animation);

      const { keyframes, host, container, cells } = compiled.styles;
      let style_container = get_grid_styles(grid) + host + container;
      let style_cells = has_delay ? '' : cells;

      const { uniforms } = compiled;

      let replace = this.replace(compiled);

      this.doodle.innerHTML = `
      <style>${ get_basic_styles(uniforms) }</style>
      <style class="style-keyframes">${ keyframes }</style>
      <style class="style-container">${ style_container }</style>
      <style class="style-cells">${ style_cells }</style>
      <svg id="defs" xmlns="http://www.w3.org/2000/svg" style="width:0;height:0"></svg>
      ${ create_grid(grid) }
    `;

      this.set_content('.style-container', replace(style_container));

      if (has_delay) {
        setTimeout(() => {
          this.set_content('.style-cells', replace(cells));
        }, 50);
      } else {
        this.set_content('.style-cells', replace(cells));
      }

      // might be removed in the future
      if (window.CSS && window.CSS.registerProperty) {
        if (uniforms.time) {
          this.register_uniform_time();
        }
      }
    }

    register_uniform_time() {
      if (!this.is_uniform_time_registered) {
        try {
          CSS.registerProperty({
            name: '--' + uniform_time.name,
            syntax: '<number>',
            initialValue: 0,
            inherits: true
          });
        } catch (e) {}
        this.is_uniform_time_registered = true;
      }
    }

    export({ scale, name, download, detail } = {}) {
      return new Promise((resolve, reject) => {
        let variables = get_all_variables(this);
        let html = this.doodle.innerHTML;

        let { width, height } = this.getBoundingClientRect();
        scale = parseInt(scale) || 1;

        let w = width * scale;
        let h = height * scale;

        let svg = minify(`
        <svg xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 ${ width } ${ height }"
          ${ is_safari() ? '' : `width="${ w }px" height="${ h }px"` }
        >
          <foreignObject width="100%" height="100%">
            <div
              class="host"
              xmlns="http://www.w3.org/1999/xhtml"
              style="width: ${ width }px; height: ${ height }px; "
            >
              <style>.host { ${entity(variables)} }</style>
              ${ html }
            </div>
          </foreignObject>
        </svg>
      `);

        if (download || detail) {
          svg_to_png(svg, w, h, scale)
            .then(({ source, url, blob }) => {
              resolve({
                width: w, height: h, svg, blob, source
              });
              if (download) {
                let a = document.createElement('a');
                a.download = normalize_png_name(name);
                a.href = url;
                a.click();
              }
            })
            .catch(error => {
              reject(error);
            });
        } else {
          resolve({
            width: w, height: h, svg: svg
          });
        }
      });
    }

    set_content(selector, styles) {
      if (styles instanceof Promise) {
        styles.then(value => {
          this.set_content(selector, value);
        });
      } else {
        const el = this.shadowRoot.querySelector(selector);
        el && (el.styleSheet
          ? (el.styleSheet.cssText = styles )
          : (el.innerHTML = styles));
      }
    }
  }

  if (!customElements.get('css-doodle')) {
    customElements.define('css-doodle', Doodle);
  }

  function get_basic_styles(uniforms = {}) {
    const inherited_grid_props = get_props(/grid/)
      .map(n => `${ n }: inherit;`)
      .join('');
    return `
    * {
      box-sizing: border-box
    }
    *::after, *::before {
      box-sizing: inherit
    }
    :host, .host {
      display: block;
      visibility: visible;
      width: auto;
      height: auto;
      --${ uniform_time.name }: 0
    }
    :host([hidden]), .host[hidden] {
      display: none
    }
    .container {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      ${ inherited_grid_props }
    }
    cell:empty {
      position: relative;
      line-height: 1;
      display: grid;
      place-items: center
    }
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `;
  }

  function get_grid_styles(grid_obj) {
    let { x, y } = grid_obj || {};
    return `
    :host, .host {
      grid-template-rows: repeat(${ y }, 1fr);
      grid-template-columns: repeat(${ x }, 1fr);
    }
  `;
  }

  function minify(input) {
    return input
      .replace(/\n\s+|^\s+|\n+/g, ' ')
      .trim();
  }

  function create_cell(x, y, z) {
    let cell = document.createElement('cell');
    cell.id = cell_id(x, y, z);
    return cell;
  }

  function create_grid(grid_obj) {
    let { x, y, z } = grid_obj || {};
    let grid = document.createElement('grid');
    let root = document.createDocumentFragment();
    if (z == 1) {
      for (let j = 1; j <= y; ++j) {
        for (let i = 1; i <= x; ++i) {
          root.appendChild(create_cell(i, j, 1));
        }
      }
    }
    else {
      let temp = null;
      for (let i = 1; i <= z; ++i) {
        let cell = create_cell(1, 1, i);
        (temp || root).appendChild(cell);
        temp = cell;
      }
      temp = null;
    }
    grid.className = 'container';
    grid.appendChild(root);
    return grid.outerHTML;
  }

  const CSSDoodle = make_tag_function(rules => {
    let doodle = document.createElement('css-doodle');
    if (doodle.update) {
      doodle.update(rules);
    }
    return doodle;
  });

  return CSSDoodle;

}));


/***/ }),

/***/ "./resources/css/style.css":
/*!*********************************!*\
  !*** ./resources/css/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"public/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkflight_zone"] = self["webpackChunkflight_zone"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/style"], () => (__webpack_require__("./resources/css/style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;