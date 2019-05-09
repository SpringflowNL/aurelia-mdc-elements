/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["tabScroller"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["tabScroller"] = factory();
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 155);
    }({
        0: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var MDCFoundation = function() {
                function MDCFoundation(adapter) {
                    if (adapter === void 0) {
                        adapter = {};
                    }
                    this.adapter_ = adapter;
                }
                Object.defineProperty(MDCFoundation, "cssClasses", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "strings", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "numbers", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "defaultAdapter", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFoundation.prototype.init = function() {};
                MDCFoundation.prototype.destroy = function() {};
                return MDCFoundation;
            }();
            exports.MDCFoundation = MDCFoundation;
            exports.default = MDCFoundation;
        },
        1: function(module, exports, __webpack_require__) {
            "use strict";
            var __read = this && this.__read || function(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value);
                    }
                } catch (error) {
                    e = {
                        error: error
                    };
                } finally {
                    try {
                        if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            };
            var __spread = this && this.__spread || function() {
                for (var ar = [], i = 0; i < arguments.length; i++) {
                    ar = ar.concat(__read(arguments[i]));
                }
                return ar;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var MDCComponent = function() {
                function MDCComponent(root, foundation) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    this.root_ = root;
                    this.initialize.apply(this, __spread(args));
                    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                    this.foundation_.init();
                    this.initialSyncWithDOM();
                }
                MDCComponent.attachTo = function(root) {
                    return new MDCComponent(root, new foundation_1.MDCFoundation({}));
                };
                MDCComponent.prototype.initialize = function() {
                    var _args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _args[_i] = arguments[_i];
                    }
                };
                MDCComponent.prototype.getDefaultFoundation = function() {
                    throw new Error("Subclasses must override getDefaultFoundation to return a properly configured " + "foundation class");
                };
                MDCComponent.prototype.initialSyncWithDOM = function() {};
                MDCComponent.prototype.destroy = function() {
                    this.foundation_.destroy();
                };
                MDCComponent.prototype.listen = function(evtType, handler) {
                    this.root_.addEventListener(evtType, handler);
                };
                MDCComponent.prototype.unlisten = function(evtType, handler) {
                    this.root_.removeEventListener(evtType, handler);
                };
                MDCComponent.prototype.emit = function(evtType, evtData, shouldBubble) {
                    if (shouldBubble === void 0) {
                        shouldBubble = false;
                    }
                    var evt;
                    if (typeof CustomEvent === "function") {
                        evt = new CustomEvent(evtType, {
                            bubbles: shouldBubble,
                            detail: evtData
                        });
                    } else {
                        evt = document.createEvent("CustomEvent");
                        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                    }
                    this.root_.dispatchEvent(evt);
                };
                return MDCComponent;
            }();
            exports.MDCComponent = MDCComponent;
            exports.default = MDCComponent;
        },
        155: function(module, exports, __webpack_require__) {
            "use strict";
            function __export(m) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) {
                    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var util = __importStar(__webpack_require__(36));
            exports.util = util;
            __export(__webpack_require__(43));
            __export(__webpack_require__(35));
        },
        17: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var MDCTabScrollerRTL = function() {
                function MDCTabScrollerRTL(adapter) {
                    this.adapter_ = adapter;
                }
                return MDCTabScrollerRTL;
            }();
            exports.MDCTabScrollerRTL = MDCTabScrollerRTL;
            exports.default = MDCTabScrollerRTL;
        },
        2: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
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
            exports.closest = closest;
            function matches(element, selector) {
                var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            exports.matches = matches;
        },
        32: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var cssClasses = {
                ANIMATING: "mdc-tab-scroller--animating",
                SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
                SCROLL_TEST: "mdc-tab-scroller__test"
            };
            exports.cssClasses = cssClasses;
            var strings = {
                AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
                CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
            };
            exports.strings = strings;
        },
        35: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __assign = this && this.__assign || function() {
                __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) {
                            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                        }
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __read = this && this.__read || function(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value);
                    }
                } catch (error) {
                    e = {
                        error: error
                    };
                } finally {
                    try {
                        if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(32);
            var rtl_default_scroller_1 = __webpack_require__(44);
            var rtl_negative_scroller_1 = __webpack_require__(45);
            var rtl_reverse_scroller_1 = __webpack_require__(46);
            var MDCTabScrollerFoundation = function(_super) {
                __extends(MDCTabScrollerFoundation, _super);
                function MDCTabScrollerFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
                    _this.isAnimating_ = false;
                    return _this;
                }
                Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabScrollerFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            eventTargetMatchesSelector: function eventTargetMatchesSelector() {
                                return false;
                            },
                            addClass: function addClass() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            },
                            addScrollAreaClass: function addScrollAreaClass() {
                                return undefined;
                            },
                            setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {
                                return undefined;
                            },
                            setScrollContentStyleProperty: function setScrollContentStyleProperty() {
                                return undefined;
                            },
                            getScrollContentStyleValue: function getScrollContentStyleValue() {
                                return "";
                            },
                            setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {
                                return undefined;
                            },
                            getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
                                return 0;
                            },
                            getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
                                return 0;
                            },
                            getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
                                return 0;
                            },
                            computeScrollAreaClientRect: function computeScrollAreaClientRect() {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            },
                            computeScrollContentClientRect: function computeScrollContentClientRect() {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            },
                            computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
                                return 0;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTabScrollerFoundation.prototype.init = function() {
                    var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
                    this.adapter_.setScrollAreaStyleProperty("margin-bottom", -horizontalScrollbarHeight + "px");
                    this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
                };
                MDCTabScrollerFoundation.prototype.getScrollPosition = function() {
                    if (this.isRTL_()) {
                        return this.computeCurrentScrollPositionRTL_();
                    }
                    var currentTranslateX = this.calculateCurrentTranslateX_();
                    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    return scrollLeft - currentTranslateX;
                };
                MDCTabScrollerFoundation.prototype.handleInteraction = function() {
                    if (!this.isAnimating_) {
                        return;
                    }
                    this.stopScrollAnimation_();
                };
                MDCTabScrollerFoundation.prototype.handleTransitionEnd = function(evt) {
                    var evtTarget = evt.target;
                    if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
                        return;
                    }
                    this.isAnimating_ = false;
                    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
                };
                MDCTabScrollerFoundation.prototype.incrementScroll = function(scrollXIncrement) {
                    if (scrollXIncrement === 0) {
                        return;
                    }
                    if (this.isRTL_()) {
                        return this.incrementScrollRTL_(scrollXIncrement);
                    }
                    this.incrementScroll_(scrollXIncrement);
                };
                MDCTabScrollerFoundation.prototype.scrollTo = function(scrollX) {
                    if (this.isRTL_()) {
                        return this.scrollToRTL_(scrollX);
                    }
                    this.scrollTo_(scrollX);
                };
                MDCTabScrollerFoundation.prototype.getRTLScroller = function() {
                    if (!this.rtlScrollerInstance_) {
                        this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
                    }
                    return this.rtlScrollerInstance_;
                };
                MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function() {
                    var transformValue = this.adapter_.getScrollContentStyleValue("transform");
                    if (transformValue === "none") {
                        return 0;
                    }
                    var match = /\((.+?)\)/.exec(transformValue);
                    if (!match) {
                        return 0;
                    }
                    var matrixParams = match[1];
                    var _a = __read(matrixParams.split(","), 6), a = _a[0], b = _a[1], c = _a[2], d = _a[3], tx = _a[4], ty = _a[5];
                    return parseFloat(tx);
                };
                MDCTabScrollerFoundation.prototype.clampScrollValue_ = function(scrollX) {
                    var edges = this.calculateScrollEdges_();
                    return Math.min(Math.max(edges.left, scrollX), edges.right);
                };
                MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function() {
                    var translateX = this.calculateCurrentTranslateX_();
                    return this.getRTLScroller().getScrollPositionRTL(translateX);
                };
                MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function() {
                    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
                    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
                    return {
                        left: 0,
                        right: contentWidth - rootWidth
                    };
                };
                MDCTabScrollerFoundation.prototype.scrollTo_ = function(scrollX) {
                    var currentScrollX = this.getScrollPosition();
                    var safeScrollX = this.clampScrollValue_(scrollX);
                    var scrollDelta = safeScrollX - currentScrollX;
                    this.animate_({
                        finalScrollPosition: safeScrollX,
                        scrollDelta: scrollDelta
                    });
                };
                MDCTabScrollerFoundation.prototype.scrollToRTL_ = function(scrollX) {
                    var animation = this.getRTLScroller().scrollToRTL(scrollX);
                    this.animate_(animation);
                };
                MDCTabScrollerFoundation.prototype.incrementScroll_ = function(scrollX) {
                    var currentScrollX = this.getScrollPosition();
                    var targetScrollX = scrollX + currentScrollX;
                    var safeScrollX = this.clampScrollValue_(targetScrollX);
                    var scrollDelta = safeScrollX - currentScrollX;
                    this.animate_({
                        finalScrollPosition: safeScrollX,
                        scrollDelta: scrollDelta
                    });
                };
                MDCTabScrollerFoundation.prototype.incrementScrollRTL_ = function(scrollX) {
                    var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
                    this.animate_(animation);
                };
                MDCTabScrollerFoundation.prototype.animate_ = function(animation) {
                    var _this = this;
                    if (animation.scrollDelta === 0) {
                        return;
                    }
                    this.stopScrollAnimation_();
                    this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
                    this.adapter_.setScrollContentStyleProperty("transform", "translateX(" + animation.scrollDelta + "px)");
                    this.adapter_.computeScrollAreaClientRect();
                    requestAnimationFrame(function() {
                        _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
                        _this.adapter_.setScrollContentStyleProperty("transform", "none");
                    });
                    this.isAnimating_ = true;
                };
                MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function() {
                    this.isAnimating_ = false;
                    var currentScrollPosition = this.getAnimatingScrollPosition_();
                    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
                    this.adapter_.setScrollContentStyleProperty("transform", "translateX(0px)");
                    this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
                };
                MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function() {
                    var currentTranslateX = this.calculateCurrentTranslateX_();
                    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    if (this.isRTL_()) {
                        return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
                    }
                    return scrollLeft - currentTranslateX;
                };
                MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function() {
                    var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
                    var newScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    if (newScrollLeft < 0) {
                        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
                        return new rtl_negative_scroller_1.MDCTabScrollerRTLNegative(this.adapter_);
                    }
                    var rootClientRect = this.adapter_.computeScrollAreaClientRect();
                    var contentClientRect = this.adapter_.computeScrollContentClientRect();
                    var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
                    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
                    if (rightEdgeDelta === newScrollLeft) {
                        return new rtl_reverse_scroller_1.MDCTabScrollerRTLReverse(this.adapter_);
                    }
                    return new rtl_default_scroller_1.MDCTabScrollerRTLDefault(this.adapter_);
                };
                MDCTabScrollerFoundation.prototype.isRTL_ = function() {
                    return this.adapter_.getScrollContentStyleValue("direction") === "rtl";
                };
                return MDCTabScrollerFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCTabScrollerFoundation = MDCTabScrollerFoundation;
            exports.default = MDCTabScrollerFoundation;
        },
        36: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var constants_1 = __webpack_require__(32);
            var horizontalScrollbarHeight_;
            function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
                if (shouldCacheResult === void 0) {
                    shouldCacheResult = true;
                }
                if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== "undefined") {
                    return horizontalScrollbarHeight_;
                }
                var el = documentObj.createElement("div");
                el.classList.add(constants_1.cssClasses.SCROLL_TEST);
                documentObj.body.appendChild(el);
                var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
                documentObj.body.removeChild(el);
                if (shouldCacheResult) {
                    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
                }
                return horizontalScrollbarHeight;
            }
            exports.computeHorizontalScrollbarHeight = computeHorizontalScrollbarHeight;
        },
        43: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) {
                    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var component_1 = __webpack_require__(1);
            var ponyfill_1 = __webpack_require__(2);
            var foundation_1 = __webpack_require__(35);
            var util = __importStar(__webpack_require__(36));
            var MDCTabScroller = function(_super) {
                __extends(MDCTabScroller, _super);
                function MDCTabScroller() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTabScroller.attachTo = function(root) {
                    return new MDCTabScroller(root);
                };
                MDCTabScroller.prototype.initialize = function() {
                    this.area_ = this.root_.querySelector(foundation_1.MDCTabScrollerFoundation.strings.AREA_SELECTOR);
                    this.content_ = this.root_.querySelector(foundation_1.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
                };
                MDCTabScroller.prototype.initialSyncWithDOM = function() {
                    var _this = this;
                    this.handleInteraction_ = function() {
                        return _this.foundation_.handleInteraction();
                    };
                    this.handleTransitionEnd_ = function(evt) {
                        return _this.foundation_.handleTransitionEnd(evt);
                    };
                    this.area_.addEventListener("wheel", this.handleInteraction_);
                    this.area_.addEventListener("touchstart", this.handleInteraction_);
                    this.area_.addEventListener("pointerdown", this.handleInteraction_);
                    this.area_.addEventListener("mousedown", this.handleInteraction_);
                    this.area_.addEventListener("keydown", this.handleInteraction_);
                    this.content_.addEventListener("transitionend", this.handleTransitionEnd_);
                };
                MDCTabScroller.prototype.destroy = function() {
                    _super.prototype.destroy.call(this);
                    this.area_.removeEventListener("wheel", this.handleInteraction_);
                    this.area_.removeEventListener("touchstart", this.handleInteraction_);
                    this.area_.removeEventListener("pointerdown", this.handleInteraction_);
                    this.area_.removeEventListener("mousedown", this.handleInteraction_);
                    this.area_.removeEventListener("keydown", this.handleInteraction_);
                    this.content_.removeEventListener("transitionend", this.handleTransitionEnd_);
                };
                MDCTabScroller.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
                            return ponyfill_1.matches(evtTarget, selector);
                        },
                        addClass: function addClass(className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function removeClass(className) {
                            return _this.root_.classList.remove(className);
                        },
                        addScrollAreaClass: function addScrollAreaClass(className) {
                            return _this.area_.classList.add(className);
                        },
                        setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
                            return _this.area_.style.setProperty(prop, value);
                        },
                        setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
                            return _this.content_.style.setProperty(prop, value);
                        },
                        getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
                            return window.getComputedStyle(_this.content_).getPropertyValue(propName);
                        },
                        setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
                            return _this.area_.scrollLeft = scrollX;
                        },
                        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
                            return _this.area_.scrollLeft;
                        },
                        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
                            return _this.content_.offsetWidth;
                        },
                        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
                            return _this.area_.offsetWidth;
                        },
                        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
                            return _this.area_.getBoundingClientRect();
                        },
                        computeScrollContentClientRect: function computeScrollContentClientRect() {
                            return _this.content_.getBoundingClientRect();
                        },
                        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
                            return util.computeHorizontalScrollbarHeight(document);
                        }
                    };
                    return new foundation_1.MDCTabScrollerFoundation(adapter);
                };
                MDCTabScroller.prototype.getScrollPosition = function() {
                    return this.foundation_.getScrollPosition();
                };
                MDCTabScroller.prototype.getScrollContentWidth = function() {
                    return this.content_.offsetWidth;
                };
                MDCTabScroller.prototype.incrementScroll = function(scrollXIncrement) {
                    this.foundation_.incrementScroll(scrollXIncrement);
                };
                MDCTabScroller.prototype.scrollTo = function(scrollX) {
                    this.foundation_.scrollTo(scrollX);
                };
                return MDCTabScroller;
            }(component_1.MDCComponent);
            exports.MDCTabScroller = MDCTabScroller;
        },
        44: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var rtl_scroller_1 = __webpack_require__(17);
            var MDCTabScrollerRTLDefault = function(_super) {
                __extends(MDCTabScrollerRTLDefault, _super);
                function MDCTabScrollerRTLDefault() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function() {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var right = this.calculateScrollEdges_().right;
                    return Math.round(right - currentScrollLeft);
                };
                MDCTabScrollerRTLDefault.prototype.scrollToRTL = function(scrollX) {
                    var edges = this.calculateScrollEdges_();
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
                    return {
                        finalScrollPosition: clampedScrollLeft,
                        scrollDelta: clampedScrollLeft - currentScrollLeft
                    };
                };
                MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function(scrollX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
                    return {
                        finalScrollPosition: clampedScrollLeft,
                        scrollDelta: clampedScrollLeft - currentScrollLeft
                    };
                };
                MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function(scrollX) {
                    return scrollX;
                };
                MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function() {
                    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
                    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
                    return {
                        left: 0,
                        right: contentWidth - rootWidth
                    };
                };
                MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function(scrollX) {
                    var edges = this.calculateScrollEdges_();
                    return Math.min(Math.max(edges.left, scrollX), edges.right);
                };
                return MDCTabScrollerRTLDefault;
            }(rtl_scroller_1.MDCTabScrollerRTL);
            exports.MDCTabScrollerRTLDefault = MDCTabScrollerRTLDefault;
            exports.default = MDCTabScrollerRTLDefault;
        },
        45: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var rtl_scroller_1 = __webpack_require__(17);
            var MDCTabScrollerRTLNegative = function(_super) {
                __extends(MDCTabScrollerRTLNegative, _super);
                function MDCTabScrollerRTLNegative() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function(translateX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    return Math.round(translateX - currentScrollLeft);
                };
                MDCTabScrollerRTLNegative.prototype.scrollToRTL = function(scrollX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var clampedScrollLeft = this.clampScrollValue_(-scrollX);
                    return {
                        finalScrollPosition: clampedScrollLeft,
                        scrollDelta: clampedScrollLeft - currentScrollLeft
                    };
                };
                MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function(scrollX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
                    return {
                        finalScrollPosition: clampedScrollLeft,
                        scrollDelta: clampedScrollLeft - currentScrollLeft
                    };
                };
                MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function(scrollX, translateX) {
                    return scrollX - translateX;
                };
                MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function() {
                    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
                    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
                    return {
                        left: rootWidth - contentWidth,
                        right: 0
                    };
                };
                MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function(scrollX) {
                    var edges = this.calculateScrollEdges_();
                    return Math.max(Math.min(edges.right, scrollX), edges.left);
                };
                return MDCTabScrollerRTLNegative;
            }(rtl_scroller_1.MDCTabScrollerRTL);
            exports.MDCTabScrollerRTLNegative = MDCTabScrollerRTLNegative;
            exports.default = MDCTabScrollerRTLNegative;
        },
        46: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var rtl_scroller_1 = __webpack_require__(17);
            var MDCTabScrollerRTLReverse = function(_super) {
                __extends(MDCTabScrollerRTLReverse, _super);
                function MDCTabScrollerRTLReverse() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function(translateX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    return Math.round(currentScrollLeft - translateX);
                };
                MDCTabScrollerRTLReverse.prototype.scrollToRTL = function(scrollX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var clampedScrollLeft = this.clampScrollValue_(scrollX);
                    return {
                        finalScrollPosition: clampedScrollLeft,
                        scrollDelta: currentScrollLeft - clampedScrollLeft
                    };
                };
                MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function(scrollX) {
                    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
                    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
                    return {
                        finalScrollPosition: clampedScrollLeft,
                        scrollDelta: currentScrollLeft - clampedScrollLeft
                    };
                };
                MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function(scrollX, translateX) {
                    return scrollX + translateX;
                };
                MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function() {
                    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
                    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
                    return {
                        left: contentWidth - rootWidth,
                        right: 0
                    };
                };
                MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function(scrollX) {
                    var edges = this.calculateScrollEdges_();
                    return Math.min(Math.max(edges.right, scrollX), edges.left);
                };
                return MDCTabScrollerRTLReverse;
            }(rtl_scroller_1.MDCTabScrollerRTL);
            exports.MDCTabScrollerRTLReverse = MDCTabScrollerRTLReverse;
            exports.default = MDCTabScrollerRTLReverse;
        }
    });
});
//# sourceMappingURL=mdc.tabScroller.js.map