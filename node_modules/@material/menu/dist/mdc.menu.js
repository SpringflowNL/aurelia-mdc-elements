/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["menu"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["menu"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @template F
 */

var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element}
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {boolean}
 */
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC List. Provides an interface for managing focus.
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCListAdapter = function () {
  function MDCListAdapter() {
    _classCallCheck(this, MDCListAdapter);
  }

  _createClass(MDCListAdapter, [{
    key: "getListItemCount",

    /** @return {number} */
    value: function getListItemCount() {}

    /**
     * @return {number} */

  }, {
    key: "getFocusedElementIndex",
    value: function getFocusedElementIndex() {}

    /**
     * @param {number} index
     * @param {string} attribute
     * @param {string} value
     */

  }, {
    key: "setAttributeForElementIndex",
    value: function setAttributeForElementIndex(index, attribute, value) {}

    /**
     * @param {number} index
     * @param {string} attribute
     */

  }, {
    key: "removeAttributeForElementIndex",
    value: function removeAttributeForElementIndex(index, attribute) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "addClassForElementIndex",
    value: function addClassForElementIndex(index, className) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "removeClassForElementIndex",
    value: function removeClassForElementIndex(index, className) {}

    /**
     * Focuses list item at the index specified.
     * @param {number} index
     */

  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(index) {}

    /**
     * Sets the tabindex to the value specified for all button/a element children of
     * the list item at the index specified.
     * @param {number} listItemIndex
     * @param {number} tabIndexValue
     */

  }, {
    key: "setTabIndexForListItemChildren",
    value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}

    /**
     * If the given element has an href, follows the link.
     * @param {!Element} ele
     */

  }, {
    key: "followHref",
    value: function followHref(ele) {}

    /**
     * Toggles the checkbox or radio button within a list item.
     * @param {number} index
     * @return {boolean} true if a radio button or checkbox was present.
     */

  }, {
    key: "toggleCheckbox",
    value: function toggleCheckbox(index) {}
  }]);

  return MDCListAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCListAdapter);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-list',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
};

/** @enum {string} */
var strings = {
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' a',
  FOCUSABLE_CHILD_ELEMENTS: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled), .' + cssClasses.LIST_ITEM_CLASS + ' a,\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)',
  ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
};



/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

var MDCListFoundation = function (_MDCFoundation) {
  _inherits(MDCListFoundation, _MDCFoundation);

  _createClass(MDCListFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /**
     * {@see MDCListAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCListAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCListAdapter} */{
          getListItemCount: function getListItemCount() {},
          getFocusedElementIndex: function getFocusedElementIndex() {},
          setAttributeForElementIndex: function setAttributeForElementIndex() {},
          removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
          addClassForElementIndex: function addClassForElementIndex() {},
          removeClassForElementIndex: function removeClassForElementIndex() {},
          focusItemAtIndex: function focusItemAtIndex() {},
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
          followHref: function followHref() {},
          toggleCheckbox: function toggleCheckbox() {}
        }
      );
    }

    /**
     * @param {!MDCListAdapter=} adapter
     */

  }]);

  function MDCListFoundation(adapter) {
    _classCallCheck(this, MDCListFoundation);

    /** {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCListFoundation.__proto__ || Object.getPrototypeOf(MDCListFoundation)).call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));

    _this.wrapFocus_ = false;
    /** {boolean} */
    _this.isVertical_ = true;
    /** {boolean} */
    _this.isSingleSelectionList_ = false;
    /** {number} */
    _this.selectedIndex_ = -1;
    /** {boolean} */
    _this.useActivatedClass_ = false;
    return _this;
  }

  /**
   * Sets the private wrapFocus_ variable.
   * @param {boolean} value
   */


  _createClass(MDCListFoundation, [{
    key: 'setWrapFocus',
    value: function setWrapFocus(value) {
      this.wrapFocus_ = value;
    }

    /**
     * Sets the isVertical_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setVerticalOrientation',
    value: function setVerticalOrientation(value) {
      this.isVertical_ = value;
    }

    /**
     * Sets the isSingleSelectionList_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setSingleSelection',
    value: function setSingleSelection(value) {
      this.isSingleSelectionList_ = value;
    }

    /**
     * Sets the useActivatedClass_ private variable.
     * @param {boolean} useActivated
     */

  }, {
    key: 'setUseActivatedClass',
    value: function setUseActivatedClass(useActivated) {
      this.useActivatedClass_ = useActivated;
    }

    /** @param {number} index */

  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      if (index === this.selectedIndex_) {
        return;
      }

      var className = this.useActivatedClass_ ? __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS : __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS;

      if (this.selectedIndex_ >= 0) {
        this.adapter_.removeAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED);
        this.adapter_.removeClassForElementIndex(this.selectedIndex_, className);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
      }

      if (index >= 0 && this.adapter_.getListItemCount() > index) {
        this.selectedIndex_ = index;
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, true);
        this.adapter_.addClassForElementIndex(this.selectedIndex_, className);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', 0);

        if (this.selectedIndex_ !== 0) {
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
        }
      }
    }

    /**
     * Focus in handler for the list items.
     * @param evt
     * @param {number} listItemIndex
     */

  }, {
    key: 'handleFocusIn',
    value: function handleFocusIn(evt, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
      }
    }

    /**
     * Focus out handler for the list items.
     * @param {Event} evt
     * @param {number} listItemIndex
     */

  }, {
    key: 'handleFocusOut',
    value: function handleFocusOut(evt, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
      }
    }

    /**
     * Key handler for the list.
     * @param {Event} evt
     * @param {boolean} isRootListItem
     * @param {number} listItemIndex
     */

  }, {
    key: 'handleKeydown',
    value: function handleKeydown(evt, isRootListItem, listItemIndex) {
      var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
      var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
      var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
      var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
      var isHome = evt.key === 'Home' || evt.keyCode === 36;
      var isEnd = evt.key === 'End' || evt.keyCode === 35;
      var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
      var isSpace = evt.key === 'Space' || evt.keyCode === 32;

      var currentIndex = this.adapter_.getFocusedElementIndex();
      if (currentIndex === -1) {
        currentIndex = listItemIndex;
        if (currentIndex < 0) {
          // If this event doesn't have a mdc-list-item ancestor from the
          // current list (not from a sublist), return early.
          return;
        }
      }

      if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
        this.preventDefaultEvent_(evt);
        this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
        this.preventDefaultEvent_(evt);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        this.preventDefaultEvent_(evt);
        this.focusFirstElement();
      } else if (isEnd) {
        this.preventDefaultEvent_(evt);
        this.focusLastElement();
      } else if (isEnter || isSpace) {
        if (isRootListItem) {
          if (this.isSingleSelectionList_) {
            // Check if the space key was pressed on the list item or a child element.
            this.setSelectedIndex(currentIndex);
            this.preventDefaultEvent_(evt);
          }

          // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.
          this.adapter_.followHref(currentIndex);
        }

        var checkboxFound = this.adapter_.toggleCheckbox(listItemIndex);

        if (checkboxFound) {
          this.preventDefaultEvent_(evt);
        }
      }
    }

    /**
     * Click handler for the list.
     * @param {number} index
     * @param {boolean} toggleCheckbox
     */

  }, {
    key: 'handleClick',
    value: function handleClick(index, toggleCheckbox) {
      if (index === -1) return;

      if (toggleCheckbox) {
        this.adapter_.toggleCheckbox(index);
      }

      if (this.isSingleSelectionList_) {
        this.setSelectedIndex(index);
      }
    }

    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'preventDefaultEvent_',
    value: function preventDefaultEvent_(evt) {
      var tagName = ('' + evt.target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    }

    /**
     * Focuses the next element on the list.
     * @param {number} index
     */

  }, {
    key: 'focusNextElement',
    value: function focusNextElement(index) {
      var count = this.adapter_.getListItemCount();
      var nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus_) {
          nextIndex = 0;
        } else {
          // Return early because last item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(nextIndex);
    }

    /**
     * Focuses the previous element on the list.
     * @param {number} index
     */

  }, {
    key: 'focusPrevElement',
    value: function focusPrevElement(index) {
      var prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus_) {
          prevIndex = this.adapter_.getListItemCount() - 1;
        } else {
          // Return early because first item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(prevIndex);
    }
  }, {
    key: 'focusFirstElement',
    value: function focusFirstElement() {
      if (this.adapter_.getListItemCount() > 0) {
        this.adapter_.focusItemAtIndex(0);
      }
    }
  }, {
    key: 'focusLastElement',
    value: function focusLastElement() {
      var lastIndex = this.adapter_.getListItemCount() - 1;
      if (lastIndex >= 0) {
        this.adapter_.focusItemAtIndex(lastIndex);
      }
    }
  }]);

  return MDCListFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCListFoundation);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MDCMenuSurfaceFoundation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorMargin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @typedef {{
 *   top: number,
 *   right: number,
 *   bottom: number,
 *   left: number
 * }}
 */
var AnchorMargin = void 0;

/* eslint-disable no-unused-vars */
/**
 * @typedef {{
 *   viewport: { width: number, height: number },
 *   viewportDistance: {top: number, right: number, bottom: number, left: number},
 *   anchorHeight: number,
 *   anchorWidth: number,
 *   surfaceHeight: number,
 *   surfaceWidth: number,
 *   bodyDimensions,
 *   windowScroll,
 * }}
 */
var AutoLayoutMeasurements = void 0;
/* eslint-enable no-unused-vars */





/**
 * @extends {MDCFoundation<!MDCMenuSurfaceAdapter>}
 */

var MDCMenuSurfaceFoundation = function (_MDCFoundation) {
  _inherits(MDCMenuSurfaceFoundation, _MDCFoundation);

  _createClass(MDCMenuSurfaceFoundation, null, [{
    key: 'cssClasses',

    /** @return enum{cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */];
    }

    /** @return enum{string} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* strings */];
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */];
    }

    /** @return enum{number} */

  }, {
    key: 'Corner',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */];
    }

    /**
     * {@see MDCMenuSurfaceAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCMenuSurfaceAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCMenuSurfaceAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {
            return false;
          },
          hasAnchor: function hasAnchor() {
            return false;
          },
          notifyClose: function notifyClose() {},
          notifyOpen: function notifyOpen() {},
          isElementInContainer: function isElementInContainer() {
            return false;
          },
          isRtl: function isRtl() {
            return false;
          },
          setTransformOrigin: function setTransformOrigin() {},
          isFocused: function isFocused() {
            return false;
          },
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          isFirstElementFocused: function isFirstElementFocused() {},
          isLastElementFocused: function isLastElementFocused() {},
          focusFirstElement: function focusFirstElement() {},
          focusLastElement: function focusLastElement() {},
          getInnerDimensions: function getInnerDimensions() {
            return {};
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return {};
          },
          getWindowDimensions: function getWindowDimensions() {
            return {};
          },
          getBodyDimensions: function getBodyDimensions() {
            return {};
          },
          getWindowScroll: function getWindowScroll() {
            return {};
          },
          setPosition: function setPosition() {},
          setMaxHeight: function setMaxHeight() {}
        }
      );
    }

    /** @param {!MDCMenuSurfaceAdapter} adapter */

  }]);

  function MDCMenuSurfaceFoundation(adapter) {
    _classCallCheck(this, MDCMenuSurfaceFoundation);

    /** @private {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCMenuSurfaceFoundation.__proto__ || Object.getPrototypeOf(MDCMenuSurfaceFoundation)).call(this, _extends(MDCMenuSurfaceFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    /** @private {number} */
    _this.openAnimationEndTimerId_ = 0;
    /** @private {number} */
    _this.closeAnimationEndTimerId_ = 0;
    /** @private {number} */
    _this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    _this.dimensions_;
    /** @private {!Corner} */
    _this.anchorCorner_ = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */].TOP_START;
    /** @private {!AnchorMargin} */
    _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
    /** @private {?AutoLayoutMeasurements} */
    _this.measures_ = null;
    /** @private {boolean} */
    _this.quickOpen_ = false;
    /** @private {boolean} */
    _this.hoistedElement_ = false;
    /** @private {boolean} */
    _this.isFixedPosition_ = false;
    /** @private {!{x: number, y: number}} */
    _this.position_ = { x: 0, y: 0 };
    return _this;
  }

  _createClass(MDCMenuSurfaceFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCMenuSurfaceFounda = MDCMenuSurfaceFoundation.cssClasses,
          ROOT = _MDCMenuSurfaceFounda.ROOT,
          OPEN = _MDCMenuSurfaceFounda.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.openAnimationEndTimerId_);
      clearTimeout(this.closeAnimationEndTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
    }

    /**
     * @param {!Corner} corner Default anchor corner alignment of top-left menu surface corner.
     */

  }, {
    key: 'setAnchorCorner',
    value: function setAnchorCorner(corner) {
      this.anchorCorner_ = corner;
    }

    /**
     * @param {!AnchorMargin} margin set of margin values from anchor.
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
      this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
      this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
      this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
    }

    /**
     * Used to indicate if the menu-surface is hoisted to the body.
     * @param {boolean} isHoisted
     */

  }, {
    key: 'setIsHoisted',
    value: function setIsHoisted(isHoisted) {
      this.hoistedElement_ = isHoisted;
    }

    /**
     * Used to set the menu-surface calculations based on a fixed position menu.
     * @param {boolean} isFixedPosition
     */

  }, {
    key: 'setFixedPosition',
    value: function setFixedPosition(isFixedPosition) {
      this.isFixedPosition_ = isFixedPosition;
    }

    /**
     * Sets the menu-surface position on the page.
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'setAbsolutePosition',
    value: function setAbsolutePosition(x, y) {
      this.position_.x = this.typeCheckisFinite_(x) ? x : 0;
      this.position_.y = this.typeCheckisFinite_(y) ? y : 0;
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'setQuickOpen',
    value: function setQuickOpen(quickOpen) {
      this.quickOpen_ = quickOpen;
    }

    /**
     * Handle clicks and close if not within menu-surface element.
     * @param {!Event} evt
     */

  }, {
    key: 'handleBodyClick',
    value: function handleBodyClick(evt) {
      var el = evt.target;

      if (this.adapter_.isElementInContainer(el)) {
        return;
      }

      this.close();
    }
  }, {
    key: 'handleKeydown',


    /**
     * Handle keys that close the surface.
     * @param {!Event} evt
     */
    value: function handleKeydown(evt) {
      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;


      var isEscape = key === 'Escape' || keyCode === 27;
      var isTab = key === 'Tab' || keyCode === 9;

      if (isEscape) {
        this.close();
      } else if (isTab) {
        if (this.adapter_.isLastElementFocused() && !shiftKey) {
          this.adapter_.focusFirstElement();
          evt.preventDefault();
        } else if (this.adapter_.isFirstElementFocused() && shiftKey) {
          this.adapter_.focusLastElement();
          evt.preventDefault();
        }
      }
    }

    /**
     * @return {!AutoLayoutMeasurements} Measurements used to position menu surface popup.
     */

  }, {
    key: 'getAutoLayoutMeasurements_',
    value: function getAutoLayoutMeasurements_() {
      var anchorRect = this.adapter_.getAnchorDimensions();
      var viewport = this.adapter_.getWindowDimensions();
      var bodyDimensions = this.adapter_.getBodyDimensions();
      var windowScroll = this.adapter_.getWindowScroll();

      if (!anchorRect) {
        anchorRect = /** @type {ClientRect} */{
          x: this.position_.x,
          y: this.position_.y,
          top: this.position_.y,
          bottom: this.position_.y,
          left: this.position_.x,
          right: this.position_.x,
          height: 0,
          width: 0
        };
      }

      return {
        viewport: viewport,
        bodyDimensions: bodyDimensions,
        windowScroll: windowScroll,
        viewportDistance: {
          top: anchorRect.top,
          right: viewport.width - anchorRect.right,
          left: anchorRect.left,
          bottom: viewport.height - anchorRect.bottom
        },
        anchorHeight: anchorRect.height,
        anchorWidth: anchorRect.width,
        surfaceHeight: this.dimensions_.height,
        surfaceWidth: this.dimensions_.width
      };
    }

    /**
     * Computes the corner of the anchor from which to animate and position the menu surface.
     * @return {!Corner}
     * @private
     */

  }, {
    key: 'getOriginCorner_',
    value: function getOriginCorner_() {
      // Defaults: open from the top left.
      var corner = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */].TOP_LEFT;

      var _measures_ = this.measures_,
          viewportDistance = _measures_.viewportDistance,
          anchorHeight = _measures_.anchorHeight,
          anchorWidth = _measures_.anchorWidth,
          surfaceHeight = _measures_.surfaceHeight,
          surfaceWidth = _measures_.surfaceWidth;

      var isBottomAligned = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
      var availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
      var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;

      var topOverflow = surfaceHeight - availableTop;
      var bottomOverflow = surfaceHeight - availableBottom;
      if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
        corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM;
      }

      var isRtl = this.adapter_.isRtl();
      var isFlipRtl = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].FLIP_RTL);
      var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
      var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
      var availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
      var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;

      var leftOverflow = surfaceWidth - availableLeft;
      var rightOverflow = surfaceWidth - availableRight;

      if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
        corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT;
      }

      return (/** @type {Corner} */corner
      );
    }

    /**
     * @param {!Corner} corner Origin corner of the menu surface.
     * @return {number} Horizontal offset of menu surface origin corner from corresponding anchor corner.
     * @private
     */

  }, {
    key: 'getHorizontalOriginOffset_',
    value: function getHorizontalOriginOffset_(corner) {
      var anchorWidth = this.measures_.anchorWidth;
      // isRightAligned corresponds to using the 'right' property on the surface.

      var isRightAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
      var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);

      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;

        // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
        // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
        // the right property is correct.
        if (this.hoistedElement_ || this.isFixedPosition_) {
          return rightOffset - (this.measures_.viewport.width - this.measures_.bodyDimensions.width);
        }

        return rightOffset;
      }

      return avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
    }

    /**
     * @param {!Corner} corner Origin corner of the menu surface.
     * @return {number} Vertical offset of menu surface origin corner from corresponding anchor corner.
     * @private
     */

  }, {
    key: 'getVerticalOriginOffset_',
    value: function getVerticalOriginOffset_(corner) {
      var anchorHeight = this.measures_.anchorHeight;

      var isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
      var avoidVerticalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
      var y = 0;

      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
      } else {
        y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
      }
      return y;
    }

    /**
     * @param {!Corner} corner Origin corner of the menu surface.
     * @return {number} Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     * @private
     */

  }, {
    key: 'getMenuSurfaceMaxHeight_',
    value: function getMenuSurfaceMaxHeight_(corner) {
      var maxHeight = 0;
      var viewportDistance = this.measures_.viewportDistance;

      var isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;

      // When maximum height is not specified, it is handled from css.

      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
        if (!(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM)) {
          maxHeight += this.measures_.anchorHeight;
        }
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measures_.anchorHeight - MARGIN_TO_EDGE;
        if (this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM) {
          maxHeight -= this.measures_.anchorHeight;
        }
      }

      return maxHeight;
    }

    /** @private */

  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      // Compute measurements for autoposition methods reuse.
      this.measures_ = this.getAutoLayoutMeasurements_();

      var corner = this.getOriginCorner_();
      var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
      var verticalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM ? 'bottom' : 'top';
      var horizontalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT ? 'right' : 'left';
      var horizontalOffset = this.getHorizontalOriginOffset_(corner);
      var verticalOffset = this.getVerticalOriginOffset_(corner);
      var position = (_position = {}, _defineProperty(_position, horizontalAlignment, horizontalOffset ? horizontalOffset : '0'), _defineProperty(_position, verticalAlignment, verticalOffset ? verticalOffset : '0'), _position);
      var _measures_2 = this.measures_,
          anchorWidth = _measures_2.anchorWidth,
          surfaceWidth = _measures_2.surfaceWidth;
      // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

      if (anchorWidth / surfaceWidth > __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
        horizontalAlignment = 'center';
      }

      // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
      if (this.hoistedElement_ || this.isFixedPosition_) {
        position = this.adjustPositionForHoistedElement_(position);
      }

      for (var prop in position) {
        if (position.hasOwnProperty(prop) && position[prop] !== '0') {
          position[prop] = parseInt(position[prop], 10) + 'px';
        }
      }

      this.adapter_.setTransformOrigin(horizontalAlignment + ' ' + verticalAlignment);
      this.adapter_.setPosition(position);
      this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');

      // Clear measures after positioning is complete.
      this.measures_ = null;
    }

    /**
     * Calculates the offsets for positioning the menu-surface when the menu-surface has been
     * hoisted to the body.
     * @param {!{
     *   top: (string|undefined),
     *   right: (string|undefined),
     *   bottom: (string|undefined),
     *   left: (string|undefined)
     * }} position
     * @return {!{
     *   top: (string|undefined),
     *   right: (string|undefined),
     *   bottom: (string|undefined),
     *   left: (string|undefined)
     * }} position
     * @private
     */

  }, {
    key: 'adjustPositionForHoistedElement_',
    value: function adjustPositionForHoistedElement_(position) {
      var _measures_3 = this.measures_,
          windowScroll = _measures_3.windowScroll,
          viewportDistance = _measures_3.viewportDistance;


      for (var prop in position) {
        if (position.hasOwnProperty(prop)) {
          // Hoisted surfaces need to have the anchor elements location on the page added to the
          // position properties for proper alignment on the body.
          if (viewportDistance.hasOwnProperty(prop)) {
            position[prop] = parseInt(position[prop], 10) + viewportDistance[prop];
          }

          // Surfaces that are absolutely positioned need to have additional calculations for scroll
          // and bottom positioning.
          if (!this.isFixedPosition_) {
            if (prop === 'top') {
              position[prop] = parseInt(position[prop], 10) + windowScroll.y;
            } else if (prop === 'bottom') {
              position[prop] = parseInt(position[prop], 10) - windowScroll.y;
            } else if (prop === 'left') {
              position[prop] = parseInt(position[prop], 10) + windowScroll.x;
            } else if (prop === 'right') {
              position[prop] = parseInt(position[prop], 10) - windowScroll.x;
            }
          }
        }
      }

      return position;
    }

    /**
     * Open the menu surface.
     */

  }, {
    key: 'open',
    value: function open() {
      var _this2 = this;

      this.adapter_.saveFocus();

      if (!this.quickOpen_) {
        this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
      }

      this.animationRequestId_ = requestAnimationFrame(function () {
        _this2.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
        _this2.dimensions_ = _this2.adapter_.getInnerDimensions();
        _this2.autoPosition_();
        if (_this2.quickOpen_) {
          _this2.adapter_.notifyOpen();
        } else {
          _this2.openAnimationEndTimerId_ = setTimeout(function () {
            _this2.openAnimationEndTimerId_ = 0;
            _this2.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
            _this2.adapter_.notifyOpen();
          }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].TRANSITION_OPEN_DURATION);
        }
      });
      this.isOpen_ = true;
    }

    /**
     * Closes the menu surface.
     */

  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      if (!this.quickOpen_) {
        this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
      }

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
        if (_this3.quickOpen_) {
          _this3.adapter_.notifyClose();
        } else {
          _this3.closeAnimationEndTimerId_ = setTimeout(function () {
            _this3.closeAnimationEndTimerId_ = 0;
            _this3.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
            _this3.adapter_.notifyClose();
          }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].TRANSITION_CLOSE_DURATION);
        }
      });

      this.isOpen_ = false;
      this.maybeRestoreFocus_();
    }

    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     * @private
     */

  }, {
    key: 'maybeRestoreFocus_',
    value: function maybeRestoreFocus_() {
      if (this.adapter_.isFocused() || this.adapter_.isElementInContainer(document.activeElement)) {
        this.adapter_.restoreFocus();
      }
    }

    /** @return {boolean} */

  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, but is not included in IE11.
     * @param {number} num
     * @return {boolean}
     * @private
     */

  }, {
    key: 'typeCheckisFinite_',
    value: function typeCheckisFinite_(num) {
      return typeof num === 'number' && isFinite(num);
    }
  }]);

  return MDCMenuSurfaceFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CornerBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Corner; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  ANCHOR: 'mdc-menu-surface--anchor',
  ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
  ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
  FIXED: 'mdc-menu-surface--fixed',
  OPEN: 'mdc-menu-surface--open',
  ROOT: 'mdc-menu-surface'
};

/** @enum {string} */
var strings = {
  CLOSED_EVENT: 'MDCMenuSurface:closed',
  OPENED_EVENT: 'MDCMenuSurface:opened',
  FOCUSABLE_ELEMENTS: 'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), ' + 'select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
};

/** @enum {number} */
var numbers = {
  // Total duration of menu-surface open animation.
  TRANSITION_OPEN_DURATION: 120,
  // Total duration of menu-surface close animation.
  TRANSITION_CLOSE_DURATION: 75,
  // Margin left to the edge of the viewport when menu-surface is at maximum possible height.
  MARGIN_TO_EDGE: 32,
  // Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning.
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
};

/**
 * Enum for bits in the {@see Corner) bitmap.
 * @enum {number}
 */
var CornerBit = {
  BOTTOM: 1,
  CENTER: 2,
  RIGHT: 4,
  FLIP_RTL: 8
};

/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 *
 * @enum {number}
 */
var Corner = {
  TOP_LEFT: 0,
  TOP_RIGHT: CornerBit.RIGHT,
  BOTTOM_LEFT: CornerBit.BOTTOM,
  BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
  TOP_START: CornerBit.FLIP_RTL,
  TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
  BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
  BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
};



/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCMenuSurfaceAdapter */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDCMenuSurface. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCMenuSurfaceAdapter = function () {
  function MDCMenuSurfaceAdapter() {
    _classCallCheck(this, MDCMenuSurfaceAdapter);
  }

  _createClass(MDCMenuSurfaceAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /** @return {boolean} */

  }, {
    key: "hasAnchor",
    value: function hasAnchor() {}

    /** Emits an event when the menu surface is closed. */

  }, {
    key: "notifyClose",
    value: function notifyClose() {}

    /** Emits an event when the menu surface is opened. */

  }, {
    key: "notifyOpen",
    value: function notifyOpen() {}

    /**
     * @return {boolean}
     * @param {EventTarget} el
     */

  }, {
    key: "isElementInContainer",
    value: function isElementInContainer(el) {}

    /** @return {boolean} */

  }, {
    key: "isRtl",
    value: function isRtl() {}

    /** @param {string} origin */

  }, {
    key: "setTransformOrigin",
    value: function setTransformOrigin(origin) {}

    /** @return {boolean} */

  }, {
    key: "isFocused",
    value: function isFocused() {}

    /** Saves the element that was focused before the menu surface was opened. */

  }, {
    key: "saveFocus",
    value: function saveFocus() {}

    /** Restores focus to the element that was focused before the menu surface was opened. */

  }, {
    key: "restoreFocus",
    value: function restoreFocus() {}

    /** @return {boolean} */

  }, {
    key: "isFirstElementFocused",
    value: function isFirstElementFocused() {}

    /** @return {boolean} */

  }, {
    key: "isLastElementFocused",
    value: function isLastElementFocused() {}

    /** Focuses the first focusable element in the menu-surface. */

  }, {
    key: "focusFirstElement",
    value: function focusFirstElement() {}

    /** Focuses the first focusable element in the menu-surface. */

  }, {
    key: "focusLastElement",
    value: function focusLastElement() {}

    /** @return {!{width: number, height: number}} */

  }, {
    key: "getInnerDimensions",
    value: function getInnerDimensions() {}

    /** @return {!{width: number, height: number, top: number, right: number, bottom: number, left: number}} */

  }, {
    key: "getAnchorDimensions",
    value: function getAnchorDimensions() {}

    /** @return {!{ width: number, height: number }} */

  }, {
    key: "getWindowDimensions",
    value: function getWindowDimensions() {}

    /** @return {!{ width: number, height: number }} */

  }, {
    key: "getBodyDimensions",
    value: function getBodyDimensions() {}

    /** @return {!{ width: number, height: number }} */

  }, {
    key: "getWindowScroll",
    value: function getWindowScroll() {}

    /** @param {!{
    *   top: (string|undefined),
    *   right: (string|undefined),
    *   bottom: (string|undefined),
    *   left: (string|undefined)
    * }} position */

  }, {
    key: "setPosition",
    value: function setPosition(position) {}

    /** @param {string} height */

  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(height) {}
  }]);

  return MDCMenuSurfaceAdapter;
}();



/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCList", function() { return MDCList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCListFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/**
 * @extends MDCComponent<!MDCListFoundation>
 */

var MDCList = function (_MDCComponent) {
  _inherits(MDCList, _MDCComponent);

  /** @param {...?} args */
  function MDCList() {
    var _ref;

    _classCallCheck(this, MDCList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Function} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCList.__proto__ || Object.getPrototypeOf(MDCList)).call.apply(_ref, [this].concat(args)));

    _this.handleKeydown_;
    /** @private {!Function} */
    _this.handleClick_;
    /** @private {!Function} */
    _this.focusInEventListener_;
    /** @private {!Function} */
    _this.focusOutEventListener_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCList}
   */


  _createClass(MDCList, [{
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener('click', this.handleClick_);
      this.root_.removeEventListener('focusin', this.focusInEventListener_);
      this.root_.removeEventListener('focusout', this.focusOutEventListener_);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.handleClick_ = this.handleClickEvent_.bind(this);
      this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
      this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
      this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener('focusin', this.focusInEventListener_);
      this.root_.addEventListener('focusout', this.focusOutEventListener_);
      this.root_.addEventListener('click', this.handleClick_);
      this.layout();
      this.initializeListType();
    }
  }, {
    key: 'layout',
    value: function layout() {
      var direction = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION);
      this.vertical = direction !== __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION_HORIZONTAL;

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
    }

    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'getListItemIndex_',
    value: function getListItemIndex_(evt) {
      var eventTarget = /** @type {HTMLElement} */evt.target;
      var index = -1;

      // Find the first ancestor that is a list item or the list.
      while (!eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS) && !eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].ROOT)) {
        eventTarget = eventTarget.parentElement;
      }

      // Get the index of the element if it is a list item.
      if (eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS)) {
        index = this.listElements.indexOf(eventTarget);
      }

      return index;
    }

    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleFocusInEvent_',
    value: function handleFocusInEvent_(evt) {
      var index = this.getListItemIndex_(evt);
      this.foundation_.handleFocusIn(evt, index);
    }

    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleFocusOutEvent_',
    value: function handleFocusOutEvent_(evt) {
      var index = this.getListItemIndex_(evt);
      this.foundation_.handleFocusOut(evt, index);
    }

    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleKeydownEvent_',
    value: function handleKeydownEvent_(evt) {
      var index = this.getListItemIndex_(evt);

      if (index >= 0) {
        this.foundation_.handleKeydown(evt, evt.target.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS), index);
      }
    }

    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'handleClickEvent_',
    value: function handleClickEvent_(evt) {
      var index = this.getListItemIndex_(evt);

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      var toggleCheckbox = !Object(__WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__["matches"])( /** @type {!Element} */evt.target, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
      this.foundation_.handleClick(index, toggleCheckbox);
    }
  }, {
    key: 'initializeListType',
    value: function initializeListType() {
      // Automatically set single selection if selected/activated classes are present.
      var preselectedElement = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS + ', .' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS);

      if (preselectedElement) {
        if (preselectedElement.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS)) {
          this.foundation_.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selectedIndex = this.listElements.indexOf(preselectedElement);
      }
    }

    /** @param {boolean} value */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCListFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]( /** @type {!MDCListAdapter} */_extends({
        getListItemCount: function getListItemCount() {
          return _this2.listElements.length;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return _this2.listElements.indexOf(document.activeElement);
        },
        setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
          var element = _this2.listElements[index];
          if (element) {
            element.setAttribute(attr, value);
          }
        },
        removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
          var element = _this2.listElements[index];
          if (element) {
            element.removeAttribute(attr);
          }
        },
        addClassForElementIndex: function addClassForElementIndex(index, className) {
          var element = _this2.listElements[index];
          if (element) {
            element.classList.add(className);
          }
        },
        removeClassForElementIndex: function removeClassForElementIndex(index, className) {
          var element = _this2.listElements[index];
          if (element) {
            element.classList.remove(className);
          }
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          var element = _this2.listElements[index];
          if (element) {
            element.focus();
          }
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
          var element = _this2.listElements[listItemIndex];
          var listItemChildren = [].slice.call(element.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
          listItemChildren.forEach(function (ele) {
            return ele.setAttribute('tabindex', tabIndexValue);
          });
        },
        followHref: function followHref(index) {
          var listItem = _this2.listElements[index];
          if (listItem && listItem.href) {
            listItem.click();
          }
        },
        toggleCheckbox: function toggleCheckbox(index) {
          var checkboxOrRadioExists = false;
          var listItem = _this2.listElements[index];
          var elementsToToggle = [].slice.call(listItem.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR));
          elementsToToggle.forEach(function (element) {
            var event = document.createEvent('Event');
            event.initEvent('change', true, true);

            if (!element.checked || element.type !== 'radio') {
              element.checked = !element.checked;
              element.dispatchEvent(event);
            }
            checkboxOrRadioExists = true;
          });
          return checkboxOrRadioExists;
        }
      }));
    }
  }, {
    key: 'vertical',
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    }

    /** @return Array<!Element>*/

  }, {
    key: 'listElements',
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ENABLED_ITEMS_SELECTOR));
    }

    /** @param {boolean} value */

  }, {
    key: 'wrapFocus',
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    }

    /** @param {boolean} isSingleSelectionList */

  }, {
    key: 'singleSelection',
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    }

    /** @param {number} index */

  }, {
    key: 'selectedIndex',
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCList(root);
    }
  }]);

  return MDCList;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-menu',
  MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
  MENU_SELECTION_GROUP: 'mdc-menu__selection-group'
};

/** @enum {string} */
var strings = {
  SELECTED_EVENT: 'MDCMenu:selected',
  ARIA_SELECTED_ATTR: 'aria-selected',
  LIST_SELECTOR: '.mdc-list',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]'
};



/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuSurface", function() { return MDCMenuSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuSurfaceFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorMargin", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Corner", function() { return __WEBPACK_IMPORTED_MODULE_4__constants__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CornerBit", function() { return __WEBPACK_IMPORTED_MODULE_4__constants__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_1__util__; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/**
 * @extends MDCComponent<!MDCMenuSurfaceFoundation>
 */

var MDCMenuSurface = function (_MDCComponent) {
  _inherits(MDCMenuSurface, _MDCComponent);

  /** @param {...?} args */
  function MDCMenuSurface() {
    var _ref;

    _classCallCheck(this, MDCMenuSurface);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCMenuSurface.__proto__ || Object.getPrototypeOf(MDCMenuSurface)).call.apply(_ref, [this].concat(args)));

    _this.previousFocus_;
    /** @private {!Element} */
    _this.anchorElement;
    /** @private {Element} */
    _this.firstFocusableElement_;
    /** @private {Element} */
    _this.lastFocusableElement_;
    /** @private {!Function} */
    _this.handleKeydown_;
    /** @private {!Function} */
    _this.handleBodyClick_;
    /** @private {!Function} */
    _this.registerBodyClickListener_;
    /** @private {!Function} */
    _this.deregisterBodyClickListener_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCMenuSurface}
   */


  _createClass(MDCMenuSurface, [{
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      if (this.root_.parentElement && this.root_.parentElement.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].ANCHOR)) {
        this.anchorElement = this.root_.parentElement;
      }

      if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].FIXED)) {
        this.setFixedPosition(true);
      }

      this.handleKeydown_ = function (evt) {
        return _this2.foundation_.handleKeydown(evt);
      };
      this.handleBodyClick_ = function (evt) {
        return _this2.foundation_.handleBodyClick(evt);
      };

      this.registerBodyClickListener_ = function () {
        return document.body.addEventListener('click', _this2.handleBodyClick_);
      };
      this.deregisterBodyClickListener_ = function () {
        return document.body.removeEventListener('click', _this2.handleBodyClick_);
      };

      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].OPENED_EVENT, this.registerBodyClickListener_);
      this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].CLOSED_EVENT, this.deregisterBodyClickListener_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].OPENED_EVENT, this.registerBodyClickListener_);
      this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].CLOSED_EVENT, this.deregisterBodyClickListener_);
      _get(MDCMenuSurface.prototype.__proto__ || Object.getPrototypeOf(MDCMenuSurface.prototype), 'destroy', this).call(this);
    }

    /** @return {boolean} */

  }, {
    key: 'hoistMenuToBody',


    /**
     * Removes the menu-surface from it's current location and appends it to the
     * body to overcome any overflow:hidden issues.
     */
    value: function hoistMenuToBody() {
      document.body.appendChild(this.root_.parentElement.removeChild(this.root_));
      this.setIsHoisted(true);
    }

    /**
     * Sets the foundation to use page offsets for an positioning when the menu
     * is hoisted to the body.
     * @param {boolean} isHoisted
     */

  }, {
    key: 'setIsHoisted',
    value: function setIsHoisted(isHoisted) {
      this.foundation_.setIsHoisted(isHoisted);
    }

    /**
     * Sets the element that the menu-surface is anchored to.
     * @param {!Element} element
     */

  }, {
    key: 'setMenuSurfaceAnchorElement',
    value: function setMenuSurfaceAnchorElement(element) {
      this.anchorElement = element;
    }

    /**
     * Sets the menu-surface to position: fixed.
     * @param {boolean} isFixed
     */

  }, {
    key: 'setFixedPosition',
    value: function setFixedPosition(isFixed) {
      if (isFixed) {
        this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].FIXED);
      } else {
        this.root_.classList.remove(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].FIXED);
      }

      this.foundation_.setFixedPosition(isFixed);
    }

    /**
     * Sets the absolute x/y position to position based on. Requires the menu to be hoisted.
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'setAbsolutePosition',
    value: function setAbsolutePosition(x, y) {
      this.foundation_.setAbsolutePosition(x, y);
      this.setIsHoisted(true);
    }

    /**
     * @param {!Corner} corner Default anchor corner alignment of top-left
     *     surface corner.
     */

  }, {
    key: 'setAnchorCorner',
    value: function setAnchorCorner(corner) {
      this.foundation_.setAnchorCorner(corner);
    }

    /**
     * @param {!AnchorMargin} margin
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.foundation_.setAnchorMargin(margin);
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCMenuSurfaceFoundation} */
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["b" /* MDCMenuSurfaceFoundation */](
      /** @type {!MDCMenuSurfaceAdapter} */_extends({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this3.root_.classList.contains(className);
        },
        hasAnchor: function hasAnchor() {
          return !!_this3.anchorElement;
        },
        notifyClose: function notifyClose() {
          return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["b" /* MDCMenuSurfaceFoundation */].strings.CLOSED_EVENT, {});
        },
        notifyOpen: function notifyOpen() {
          return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["b" /* MDCMenuSurfaceFoundation */].strings.OPENED_EVENT, {});
        },
        isElementInContainer: function isElementInContainer(el) {
          return _this3.root_ === el || _this3.root_.contains(el);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this3.root_.style[__WEBPACK_IMPORTED_MODULE_1__util__["getTransformPropertyName"](window) + '-origin'] = origin;
        }
      }, this.getFocusAdapterMethods_(), this.getDimensionAdapterMethods_()));
    }

    /**
     * @return {!{
     * isFocused: function(): boolean,
     * saveFocus: function(),
     * restoreFocus: function(),
     * isFirstElementFocused: function(): boolean,
     * isLastElementFocused: function(): boolean,
     * focusFirstElement: function(),
     * focusLastElement: function(),
     * }}
     * @private
     */

  }, {
    key: 'getFocusAdapterMethods_',
    value: function getFocusAdapterMethods_() {
      var _this4 = this;

      return {
        isFocused: function isFocused() {
          return document.activeElement === _this4.root_;
        },
        saveFocus: function saveFocus() {
          _this4.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this4.root_.contains(document.activeElement)) {
            if (_this4.previousFocus_ && _this4.previousFocus_.focus) {
              _this4.previousFocus_.focus();
            }
          }
        },
        isFirstElementFocused: function isFirstElementFocused() {
          return _this4.firstFocusableElement_ && _this4.firstFocusableElement_ === document.activeElement;
        },
        isLastElementFocused: function isLastElementFocused() {
          return _this4.lastFocusableElement_ && _this4.lastFocusableElement_ === document.activeElement;
        },
        focusFirstElement: function focusFirstElement() {
          return _this4.firstFocusableElement_ && _this4.firstFocusableElement_.focus && _this4.firstFocusableElement_.focus();
        },
        focusLastElement: function focusLastElement() {
          return _this4.lastFocusableElement_ && _this4.lastFocusableElement_.focus && _this4.lastFocusableElement_.focus();
        }
      };
    }

    /**
     * @return {!{
     * getInnerDimensions: function(),
     * getAnchorDimensions: function(): (HTMLElement | null | * | ClientRect),
     * getWindowDimensions: function(),
     * setPosition: function(*),
     * setMaxHeight: function(string)}}
     * @private
     */

  }, {
    key: 'getDimensionAdapterMethods_',
    value: function getDimensionAdapterMethods_() {
      var _this5 = this;

      return {
        getInnerDimensions: function getInnerDimensions() {
          return { width: _this5.root_.offsetWidth, height: _this5.root_.offsetHeight };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this5.anchorElement && _this5.anchorElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        getBodyDimensions: function getBodyDimensions() {
          return { width: document.body.clientWidth, height: document.body.clientHeight };
        },
        getWindowScroll: function getWindowScroll() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        setPosition: function setPosition(position) {
          _this5.root_.style.left = 'left' in position ? position.left : null;
          _this5.root_.style.right = 'right' in position ? position.right : null;
          _this5.root_.style.top = 'top' in position ? position.top : null;
          _this5.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        setMaxHeight: function setMaxHeight(height) {
          _this5.root_.style.maxHeight = height;
        }
      };
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }

    /** @param {boolean} value */
    ,
    set: function set(value) {
      if (value) {
        var focusableElements = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].FOCUSABLE_ELEMENTS);
        this.firstFocusableElement_ = focusableElements.length > 0 ? focusableElements[0] : null;
        this.lastFocusableElement_ = focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'quickOpen',
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCMenuSurface(root);
    }
  }]);

  return MDCMenuSurface;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropertyName", function() { return getTransformPropertyName; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @type {string|undefined} */
var storedTransformPropertyName_ = void 0;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}



/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenu", function() { return MDCMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_index__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_list_index__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorMargin", function() { return __WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Corner", function() { return __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_index__["Corner"]; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








/**
 * @extends MDCComponent<!MDCMenuFoundation>
 */

var MDCMenu = function (_MDCComponent) {
  _inherits(MDCMenu, _MDCComponent);

  /** @param {...?} args */
  function MDCMenu() {
    var _ref;

    _classCallCheck(this, MDCMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCMenuSurface} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCMenu.__proto__ || Object.getPrototypeOf(MDCMenu)).call.apply(_ref, [this].concat(args)));

    _this.menuSurface_;
    /** @private {!MDCList} */
    _this.list_;
    /** @private {!Function} */
    _this.handleKeydown_;
    /** @private {!Function} */
    _this.handleClick_;
    /** @private {!Function} */
    _this.afterOpenedCallback_;
    return _this;
  }

  /**
   * @param {!HTMLElement} root
   * @return {!MDCMenu}
   */


  _createClass(MDCMenu, [{
    key: 'initialize',
    value: function initialize() {
      var menuSurfaceFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_index__["MDCMenuSurface"](el);
      };
      var listFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_5__material_list_index__["MDCList"](el);
      };

      this.menuSurface_ = menuSurfaceFactory(this.root_);

      var list = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].LIST_SELECTOR);
      if (list) {
        this.list_ = listFactory(list);
        this.list_.wrapFocus = true;
      }
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      this.afterOpenedCallback_ = function () {
        return _this2.handleAfterOpened_();
      };
      this.handleKeydown_ = function (evt) {
        return _this2.foundation_.handleKeydown(evt);
      };
      this.handleClick_ = function (evt) {
        return _this2.foundation_.handleClick(evt);
      };

      this.menuSurface_.listen(__WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__["b" /* MDCMenuSurfaceFoundation */].strings.OPENED_EVENT, this.afterOpenedCallback_);
      this.listen('keydown', this.handleKeydown_);
      this.listen('click', this.handleClick_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.list_) {
        this.list_.destroy();
      }

      this.menuSurface_.destroy();
      this.menuSurface_.unlisten(__WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__["b" /* MDCMenuSurfaceFoundation */].strings.OPENED_EVENT, this.afterOpenedCallback_);
      this.unlisten('keydown', this.handleKeydown_);
      this.unlisten('click', this.handleClick_);
      _get(MDCMenu.prototype.__proto__ || Object.getPrototypeOf(MDCMenu.prototype), 'destroy', this).call(this);
    }

    /** @return {boolean} */

  }, {
    key: 'setAnchorCorner',


    /**
     * @param {!Corner} corner Default anchor corner alignment of top-left
     *     menu corner.
     */
    value: function setAnchorCorner(corner) {
      this.menuSurface_.setAnchorCorner(corner);
    }

    /**
     * @param {!AnchorMargin} margin
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.menuSurface_.setAnchorMargin(margin);
    }

    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     * @return {!Array<!HTMLElement>}
     */

  }, {
    key: 'getOptionByIndex',


    /**
     * Return the item within the menu at the index specified.
     * @param {number} index
     * @return {?HTMLElement}
     */
    value: function getOptionByIndex(index) {
      var items = this.items;

      if (index < items.length) {
        return this.items[index];
      } else {
        return null;
      }
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'setFixedPosition',


    /** @param {boolean} isFixed */
    value: function setFixedPosition(isFixed) {
      this.menuSurface_.setFixedPosition(isFixed);
    }
  }, {
    key: 'hoistMenuToBody',
    value: function hoistMenuToBody() {
      this.menuSurface_.hoistMenuToBody();
    }

    /** @param {boolean} isHoisted */

  }, {
    key: 'setIsHoisted',
    value: function setIsHoisted(isHoisted) {
      this.menuSurface_.setIsHoisted(isHoisted);
    }

    /**
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'setAbsolutePosition',
    value: function setAbsolutePosition(x, y) {
      this.menuSurface_.setAbsolutePosition(x, y);
    }

    /**
     * Sets the element that the menu-surface is anchored to.
     * @param {!HTMLElement} element
     */

  }, {
    key: 'setAnchorElement',
    value: function setAnchorElement(element) {
      this.menuSurface_.anchorElement = element;
    }
  }, {
    key: 'handleAfterOpened_',
    value: function handleAfterOpened_() {
      var list = this.items;
      if (list.length > 0) {
        list[0].focus();
      }
    }

    /** @return {!MDCMenuFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* MDCMenuFoundation */]({
        addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
          var list = _this3.items;
          list[index].classList.add(className);
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
          var list = _this3.items;
          list[index].classList.remove(className);
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
          var list = _this3.items;
          list[index].setAttribute(attr, value);
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
          var list = _this3.items;
          list[index].removeAttribute(attr);
        },
        elementContainsClass: function elementContainsClass(element, className) {
          return element.classList.contains(className);
        },
        closeSurface: function closeSurface() {
          return _this3.open = false;
        },
        getElementIndex: function getElementIndex(element) {
          return _this3.items.indexOf(element);
        },
        getParentElement: function getParentElement(element) {
          return element.parentElement;
        },
        getSelectedElementIndex: function getSelectedElementIndex(selectionGroup) {
          return _this3.items.indexOf(selectionGroup.querySelector('.' + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTED_LIST_ITEM));
        },
        notifySelected: function notifySelected(evtData) {
          return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].SELECTED_EVENT, {
            index: evtData.index,
            item: _this3.items[evtData.index]
          });
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.menuSurface_.open;
    }

    /** @param {boolean} value */
    ,
    set: function set(value) {
      this.menuSurface_.open = value;
    }
  }, {
    key: 'items',
    get: function get() {
      return this.list_.listElements;
    }
  }, {
    key: 'quickOpen',
    set: function set(quickOpen) {
      this.menuSurface_.quickOpen = quickOpen;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCMenu(root);
    }
  }]);

  return MDCMenu;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCMenuFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_foundation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select', 'a'];

/**
 * @extends {MDCFoundation<!MDCMenuAdapter>}
 */

var MDCMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCMenuFoundation, _MDCFoundation);

  _createClass(MDCMenuFoundation, null, [{
    key: 'cssClasses',

    /** @return enum{cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /** @return enum{strings} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /**
     * {@see MDCMenuAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCMenuAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCMenuAdapter} */{
          addClassToElementAtIndex: function addClassToElementAtIndex() {},
          removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {},
          addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {},
          removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {},
          elementContainsClass: function elementContainsClass() {},
          closeSurface: function closeSurface() {},
          getElementIndex: function getElementIndex() {},
          getParentElement: function getParentElement() {},
          getSelectedElementIndex: function getSelectedElementIndex() {},
          notifySelected: function notifySelected() {}
        }
      );
    }

    /** @param {!MDCMenuAdapter} adapter */

  }]);

  function MDCMenuFoundation(adapter) {
    _classCallCheck(this, MDCMenuFoundation);

    /** @type {number} */
    var _this = _possibleConstructorReturn(this, (MDCMenuFoundation.__proto__ || Object.getPrototypeOf(MDCMenuFoundation)).call(this, _extends(MDCMenuFoundation.defaultAdapter, adapter)));

    _this.closeAnimationEndTimerId_ = 0;
    return _this;
  }

  _createClass(MDCMenuFoundation, [{
    key: 'destroy',
    value: function destroy() {
      if (this.closeAnimationEndTimerId_) {
        clearTimeout(this.closeAnimationEndTimerId_);
      }

      this.adapter_.closeSurface();
    }

    /**
     * Handler function for the keydown events.
     * @param {!Event} evt
     */

  }, {
    key: 'handleKeydown',
    value: function handleKeydown(evt) {
      var key = evt.key,
          keyCode = evt.keyCode;


      var isSpace = key === 'Space' || keyCode === 32;
      var isEnter = key === 'Enter' || keyCode === 13;
      var isTab = key === 'Tab' || keyCode === 9;

      if (isSpace || isEnter) {
        this.handleAction_(evt);
      } else if (isTab) {
        this.adapter_.closeSurface();
      }
    }

    /**
     * Handler function for the click events.
     * @param {!Event} evt
     */

  }, {
    key: 'handleClick',
    value: function handleClick(evt) {
      this.handleAction_(evt);
    }

    /**
     * Combined action handling for click/keypress events.
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleAction_',
    value: function handleAction_(evt) {
      var listItem = this.getListItem_( /** @type {HTMLElement} */evt.target);
      if (listItem) {
        this.handleSelection(listItem);
        this.preventDefaultEvent_(evt);
      }
    }

    /**
     * Handler for a selected list item.
     * @param {?HTMLElement} listItem
     */

  }, {
    key: 'handleSelection',
    value: function handleSelection(listItem) {
      var _this2 = this;

      var index = this.adapter_.getElementIndex(listItem);
      if (index < 0) {
        return;
      }

      this.adapter_.notifySelected({ index: index });
      this.adapter_.closeSurface();

      // Wait for the menu to close before adding/removing classes that affect styles.
      this.closeAnimationEndTimerId_ = setTimeout(function () {
        var selectionGroup = _this2.getSelectionGroup_(listItem);

        if (selectionGroup !== null) {
          _this2.handleSelectionGroup_( /** @type {!HTMLElement} */selectionGroup, index);
        }
      }, __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_foundation__["b" /* MDCMenuSurfaceFoundation */].numbers.TRANSITION_CLOSE_DURATION);
    }

    /**
     * Handles toggling the selected classes in a selection group when a
     * selection is made.
     * @param {!HTMLElement} selectionGroup
     * @param {number} index The selected index value
     * @private
     */

  }, {
    key: 'handleSelectionGroup_',
    value: function handleSelectionGroup_(selectionGroup, index) {
      // De-select the previous selection in this group.
      var selectedIndex = this.adapter_.getSelectedElementIndex(selectionGroup);
      if (selectedIndex >= 0) {
        this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED_ATTR);
        this.adapter_.removeClassFromElementAtIndex(selectedIndex, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTED_LIST_ITEM);
      }
      // Select the new list item in this group.
      this.adapter_.addClassToElementAtIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTED_LIST_ITEM);
      this.adapter_.addAttributeToElementAtIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED_ATTR, 'true');
    }

    /**
     * Returns the parent selection group of an element if one exists.
     * @param listItem
     * @return {?HTMLElement} parent selection group element or null.
     * @private
     */

  }, {
    key: 'getSelectionGroup_',
    value: function getSelectionGroup_(listItem) {
      var parent = this.adapter_.getParentElement(listItem);
      var isGroup = this.adapter_.elementContainsClass(parent, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTION_GROUP);

      // Iterate through ancestors until we find the group or get to the list.
      while (!isGroup && !this.adapter_.elementContainsClass(parent, __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__["a" /* default */].cssClasses.ROOT)) {
        parent = this.adapter_.getParentElement(parent);
        isGroup = this.adapter_.elementContainsClass(parent, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTION_GROUP);
      }

      if (isGroup) {
        return parent;
      } else {
        return null;
      }
    }

    /**
     * Find the first ancestor with the mdc-list-item class.
     * @param {?HTMLElement} target
     * @return {?HTMLElement}
     * @private
     */

  }, {
    key: 'getListItem_',
    value: function getListItem_(target) {
      var isListItem = this.adapter_.elementContainsClass(target, __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__["a" /* default */].cssClasses.LIST_ITEM_CLASS);

      while (!isListItem) {
        target = this.adapter_.getParentElement(target);
        if (target) {
          isListItem = this.adapter_.elementContainsClass(target, __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__["a" /* default */].cssClasses.LIST_ITEM_CLASS);
        } else {
          // target has no parent element.
          return null;
        }
      }

      return target;
    }

    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'preventDefaultEvent_',
    value: function preventDefaultEvent_(evt) {
      var target = /** @type {!HTMLElement} */evt.target;
      var tagName = ('' + target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    }
  }]);

  return MDCMenuFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCMenuAdapter */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Menu. Provides an interface for managing
 * - selected element classes
 * - get focused elements
 * - toggling a checkbox inside a list item
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCMenuAdapter = function () {
  function MDCMenuAdapter() {
    _classCallCheck(this, MDCMenuAdapter);
  }

  _createClass(MDCMenuAdapter, [{
    key: "addClassToElementAtIndex",

    /**
     * Adds a class to the element at the index provided.
     * @param {number} index
     * @param {string} className
     */
    value: function addClassToElementAtIndex(index, className) {}

    /**
     * Removes a class from the element at the index provided
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "removeClassFromElementAtIndex",
    value: function removeClassFromElementAtIndex(index, className) {}

    /**
     * Adds an attribute, with value, to the element at the index provided.
     * @param {number} index
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "addAttributeToElementAtIndex",
    value: function addAttributeToElementAtIndex(index, attr, value) {}

    /**
     * Removes an attribute from an element at the index provided.
     * @param {number} index
     * @param {string} attr
     */

  }, {
    key: "removeAttributeFromElementAtIndex",
    value: function removeAttributeFromElementAtIndex(index, attr) {}

    /**
     * Returns true if the element contains the className.
     * @param {?HTMLElement} element
     * @param {string} className
     * @return {boolean} true if the element contains the className
     */

  }, {
    key: "elementContainsClass",
    value: function elementContainsClass(element, className) {}

    /**
     * Closes the menu-surface.
     */

  }, {
    key: "closeSurface",
    value: function closeSurface() {}

    /**
     * Returns the index for the element provided.
     * @param {?HTMLElement} element
     * @return {number} index of the element in the list or -1 if it is not in the list.
     */

  }, {
    key: "getElementIndex",
    value: function getElementIndex(element) {}

    /**
     * Returns the parentElement of the provided element.
     * @param {?HTMLElement} element
     * @return {?HTMLElement} parentElement of the element provided.
     */

  }, {
    key: "getParentElement",
    value: function getParentElement(element) {}

    /**
     * Returns the element within the selectionGroup containing the selected element class.
     * @param {!HTMLElement} selectionGroup
     * @return {number} element within the selectionGroup that contains the selected element class.
     */

  }, {
    key: "getSelectedElementIndex",
    value: function getSelectedElementIndex(selectionGroup) {}

    /**
     * Emits an event using the evtData.
     * @param {{
    *    index: number
    *   }} evtData
     */

  }, {
    key: "notifySelected",
    value: function notifySelected(evtData) {}
  }]);

  return MDCMenuAdapter;
}();



/***/ })
/******/ ]);
});
//# sourceMappingURL=mdc.menu.js.map