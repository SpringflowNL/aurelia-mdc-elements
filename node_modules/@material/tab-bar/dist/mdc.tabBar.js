/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["tabBar"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["tabBar"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 151);
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
        151: function(module, exports, __webpack_require__) {
            "use strict";
            function __export(m) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __export(__webpack_require__(152));
            __export(__webpack_require__(77));
        },
        152: function(module, exports, __webpack_require__) {
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
            var component_1 = __webpack_require__(1);
            var component_2 = __webpack_require__(43);
            var component_3 = __webpack_require__(41);
            var foundation_1 = __webpack_require__(31);
            var foundation_2 = __webpack_require__(77);
            var strings = foundation_2.MDCTabBarFoundation.strings;
            var tabIdCounter = 0;
            var MDCTabBar = function(_super) {
                __extends(MDCTabBar, _super);
                function MDCTabBar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTabBar.attachTo = function(root) {
                    return new MDCTabBar(root);
                };
                Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
                    set: function set(focusOnActivate) {
                        this.tabList_.forEach(function(tab) {
                            return tab.focusOnActivate = focusOnActivate;
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
                    set: function set(useAutomaticActivation) {
                        this.foundation_.setUseAutomaticActivation(useAutomaticActivation);
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTabBar.prototype.initialize = function(tabFactory, tabScrollerFactory) {
                    if (tabFactory === void 0) {
                        tabFactory = function tabFactory(el) {
                            return new component_3.MDCTab(el);
                        };
                    }
                    if (tabScrollerFactory === void 0) {
                        tabScrollerFactory = function tabScrollerFactory(el) {
                            return new component_2.MDCTabScroller(el);
                        };
                    }
                    this.tabList_ = this.instantiateTabs_(tabFactory);
                    this.tabScroller_ = this.instantiateTabScroller_(tabScrollerFactory);
                };
                MDCTabBar.prototype.initialSyncWithDOM = function() {
                    var _this = this;
                    this.handleTabInteraction_ = function(evt) {
                        return _this.foundation_.handleTabInteraction(evt);
                    };
                    this.handleKeyDown_ = function(evt) {
                        return _this.foundation_.handleKeyDown(evt);
                    };
                    this.listen(foundation_1.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
                    this.listen("keydown", this.handleKeyDown_);
                    for (var i = 0; i < this.tabList_.length; i++) {
                        if (this.tabList_[i].active) {
                            this.scrollIntoView(i);
                            break;
                        }
                    }
                };
                MDCTabBar.prototype.destroy = function() {
                    _super.prototype.destroy.call(this);
                    this.unlisten(foundation_1.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
                    this.unlisten("keydown", this.handleKeyDown_);
                    this.tabList_.forEach(function(tab) {
                        return tab.destroy();
                    });
                    if (this.tabScroller_) {
                        this.tabScroller_.destroy();
                    }
                };
                MDCTabBar.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        scrollTo: function scrollTo(scrollX) {
                            return _this.tabScroller_.scrollTo(scrollX);
                        },
                        incrementScroll: function incrementScroll(scrollXIncrement) {
                            return _this.tabScroller_.incrementScroll(scrollXIncrement);
                        },
                        getScrollPosition: function getScrollPosition() {
                            return _this.tabScroller_.getScrollPosition();
                        },
                        getScrollContentWidth: function getScrollContentWidth() {
                            return _this.tabScroller_.getScrollContentWidth();
                        },
                        getOffsetWidth: function getOffsetWidth() {
                            return _this.root_.offsetWidth;
                        },
                        isRTL: function isRTL() {
                            return window.getComputedStyle(_this.root_).getPropertyValue("direction") === "rtl";
                        },
                        setActiveTab: function setActiveTab(index) {
                            return _this.foundation_.activateTab(index);
                        },
                        activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
                            return _this.tabList_[index].activate(clientRect);
                        },
                        deactivateTabAtIndex: function deactivateTabAtIndex(index) {
                            return _this.tabList_[index].deactivate();
                        },
                        focusTabAtIndex: function focusTabAtIndex(index) {
                            return _this.tabList_[index].focus();
                        },
                        getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
                            return _this.tabList_[index].computeIndicatorClientRect();
                        },
                        getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
                            return _this.tabList_[index].computeDimensions();
                        },
                        getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
                            for (var i = 0; i < _this.tabList_.length; i++) {
                                if (_this.tabList_[i].active) {
                                    return i;
                                }
                            }
                            return -1;
                        },
                        getFocusedTabIndex: function getFocusedTabIndex() {
                            var tabElements = _this.getTabElements_();
                            var activeElement = document.activeElement;
                            return tabElements.indexOf(activeElement);
                        },
                        getIndexOfTabById: function getIndexOfTabById(id) {
                            for (var i = 0; i < _this.tabList_.length; i++) {
                                if (_this.tabList_[i].id === id) {
                                    return i;
                                }
                            }
                            return -1;
                        },
                        getTabListLength: function getTabListLength() {
                            return _this.tabList_.length;
                        },
                        notifyTabActivated: function notifyTabActivated(index) {
                            return _this.emit(strings.TAB_ACTIVATED_EVENT, {
                                index: index
                            }, true);
                        }
                    };
                    return new foundation_2.MDCTabBarFoundation(adapter);
                };
                MDCTabBar.prototype.activateTab = function(index) {
                    this.foundation_.activateTab(index);
                };
                MDCTabBar.prototype.scrollIntoView = function(index) {
                    this.foundation_.scrollIntoView(index);
                };
                MDCTabBar.prototype.getTabElements_ = function() {
                    return [].slice.call(this.root_.querySelectorAll(strings.TAB_SELECTOR));
                };
                MDCTabBar.prototype.instantiateTabs_ = function(tabFactory) {
                    return this.getTabElements_().map(function(el) {
                        el.id = el.id || "mdc-tab-" + ++tabIdCounter;
                        return tabFactory(el);
                    });
                };
                MDCTabBar.prototype.instantiateTabScroller_ = function(tabScrollerFactory) {
                    var tabScrollerElement = this.root_.querySelector(strings.TAB_SCROLLER_SELECTOR);
                    if (tabScrollerElement) {
                        return tabScrollerFactory(tabScrollerElement);
                    }
                    return null;
                };
                return MDCTabBar;
            }(component_1.MDCComponent);
            exports.MDCTabBar = MDCTabBar;
        },
        153: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var strings = {
                ARROW_LEFT_KEY: "ArrowLeft",
                ARROW_RIGHT_KEY: "ArrowRight",
                END_KEY: "End",
                ENTER_KEY: "Enter",
                HOME_KEY: "Home",
                SPACE_KEY: "Space",
                TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
                TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
                TAB_SELECTOR: ".mdc-tab"
            };
            exports.strings = strings;
            var numbers = {
                ARROW_LEFT_KEYCODE: 37,
                ARROW_RIGHT_KEYCODE: 39,
                END_KEYCODE: 35,
                ENTER_KEYCODE: 13,
                EXTRA_SCROLL_AMOUNT: 20,
                HOME_KEYCODE: 36,
                SPACE_KEYCODE: 32
            };
            exports.numbers = numbers;
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
        22: function(module, exports, __webpack_require__) {
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
            var foundation_1 = __webpack_require__(8);
            var MDCFadingTabIndicatorFoundation = function(_super) {
                __extends(MDCFadingTabIndicatorFoundation, _super);
                function MDCFadingTabIndicatorFoundation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCFadingTabIndicatorFoundation.prototype.activate = function() {
                    this.adapter_.addClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
                };
                MDCFadingTabIndicatorFoundation.prototype.deactivate = function() {
                    this.adapter_.removeClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
                };
                return MDCFadingTabIndicatorFoundation;
            }(foundation_1.MDCTabIndicatorFoundation);
            exports.MDCFadingTabIndicatorFoundation = MDCFadingTabIndicatorFoundation;
            exports.default = MDCFadingTabIndicatorFoundation;
        },
        23: function(module, exports, __webpack_require__) {
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
            var foundation_1 = __webpack_require__(8);
            var MDCSlidingTabIndicatorFoundation = function(_super) {
                __extends(MDCSlidingTabIndicatorFoundation, _super);
                function MDCSlidingTabIndicatorFoundation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCSlidingTabIndicatorFoundation.prototype.activate = function(previousIndicatorClientRect) {
                    if (!previousIndicatorClientRect) {
                        this.adapter_.addClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
                        return;
                    }
                    var currentClientRect = this.computeContentClientRect();
                    var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
                    var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
                    this.adapter_.addClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
                    this.adapter_.setContentStyleProperty("transform", "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
                    this.computeContentClientRect();
                    this.adapter_.removeClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
                    this.adapter_.addClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
                    this.adapter_.setContentStyleProperty("transform", "");
                };
                MDCSlidingTabIndicatorFoundation.prototype.deactivate = function() {
                    this.adapter_.removeClass(foundation_1.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
                };
                return MDCSlidingTabIndicatorFoundation;
            }(foundation_1.MDCTabIndicatorFoundation);
            exports.MDCSlidingTabIndicatorFoundation = MDCSlidingTabIndicatorFoundation;
            exports.default = MDCSlidingTabIndicatorFoundation;
        },
        29: function(module, exports, __webpack_require__) {
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
            var component_1 = __webpack_require__(1);
            var fading_foundation_1 = __webpack_require__(22);
            var foundation_1 = __webpack_require__(8);
            var sliding_foundation_1 = __webpack_require__(23);
            var MDCTabIndicator = function(_super) {
                __extends(MDCTabIndicator, _super);
                function MDCTabIndicator() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTabIndicator.attachTo = function(root) {
                    return new MDCTabIndicator(root);
                };
                MDCTabIndicator.prototype.initialize = function() {
                    this.content_ = this.root_.querySelector(foundation_1.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
                };
                MDCTabIndicator.prototype.computeContentClientRect = function() {
                    return this.foundation_.computeContentClientRect();
                };
                MDCTabIndicator.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        addClass: function addClass(className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function removeClass(className) {
                            return _this.root_.classList.remove(className);
                        },
                        computeContentClientRect: function computeContentClientRect() {
                            return _this.content_.getBoundingClientRect();
                        },
                        setContentStyleProperty: function setContentStyleProperty(prop, value) {
                            return _this.content_.style.setProperty(prop, value);
                        }
                    };
                    if (this.root_.classList.contains(foundation_1.MDCTabIndicatorFoundation.cssClasses.FADE)) {
                        return new fading_foundation_1.MDCFadingTabIndicatorFoundation(adapter);
                    }
                    return new sliding_foundation_1.MDCSlidingTabIndicatorFoundation(adapter);
                };
                MDCTabIndicator.prototype.activate = function(previousIndicatorClientRect) {
                    this.foundation_.activate(previousIndicatorClientRect);
                };
                MDCTabIndicator.prototype.deactivate = function() {
                    this.foundation_.deactivate();
                };
                return MDCTabIndicator;
            }(component_1.MDCComponent);
            exports.MDCTabIndicator = MDCTabIndicator;
        },
        3: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var supportsCssVariables_;
            var supportsPassive_;
            function detectEdgePseudoVarBug(windowObj) {
                var document = windowObj.document;
                var node = document.createElement("div");
                node.className = "mdc-ripple-surface--test-edge-var-bug";
                document.body.appendChild(node);
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === "solid";
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return hasPseudoVarBug;
            }
            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
                var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                } else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            exports.supportsCssVariables = supportsCssVariables;
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) {
                    globalObj = window;
                }
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener("test", function() {
                            return undefined;
                        }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            }
                        });
                    } catch (e) {}
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? {
                    passive: true
                } : false;
            }
            exports.applyPassive = applyPassive;
            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return {
                        x: 0,
                        y: 0
                    };
                }
                var x = pageOffset.x, y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                if (evt.type === "touchstart") {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                } else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return {
                    x: normalizedX,
                    y: normalizedY
                };
            }
            exports.getNormalizedEventCoords = getNormalizedEventCoords;
        },
        30: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var cssClasses = {
                ACTIVE: "mdc-tab-indicator--active",
                FADE: "mdc-tab-indicator--fade",
                NO_TRANSITION: "mdc-tab-indicator--no-transition"
            };
            exports.cssClasses = cssClasses;
            var strings = {
                CONTENT_SELECTOR: ".mdc-tab-indicator__content"
            };
            exports.strings = strings;
        },
        31: function(module, exports, __webpack_require__) {
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
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(42);
            var MDCTabFoundation = function(_super) {
                __extends(MDCTabFoundation, _super);
                function MDCTabFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCTabFoundation.defaultAdapter, adapter)) || this;
                    _this.focusOnActivate_ = true;
                    return _this;
                }
                Object.defineProperty(MDCTabFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClass: function addClass() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            },
                            hasClass: function hasClass() {
                                return false;
                            },
                            setAttr: function setAttr() {
                                return undefined;
                            },
                            activateIndicator: function activateIndicator() {
                                return undefined;
                            },
                            deactivateIndicator: function deactivateIndicator() {
                                return undefined;
                            },
                            notifyInteracted: function notifyInteracted() {
                                return undefined;
                            },
                            getOffsetLeft: function getOffsetLeft() {
                                return 0;
                            },
                            getOffsetWidth: function getOffsetWidth() {
                                return 0;
                            },
                            getContentOffsetLeft: function getContentOffsetLeft() {
                                return 0;
                            },
                            getContentOffsetWidth: function getContentOffsetWidth() {
                                return 0;
                            },
                            focus: function focus() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTabFoundation.prototype.handleClick = function() {
                    this.adapter_.notifyInteracted();
                };
                MDCTabFoundation.prototype.isActive = function() {
                    return this.adapter_.hasClass(constants_1.cssClasses.ACTIVE);
                };
                MDCTabFoundation.prototype.setFocusOnActivate = function(focusOnActivate) {
                    this.focusOnActivate_ = focusOnActivate;
                };
                MDCTabFoundation.prototype.activate = function(previousIndicatorClientRect) {
                    this.adapter_.addClass(constants_1.cssClasses.ACTIVE);
                    this.adapter_.setAttr(constants_1.strings.ARIA_SELECTED, "true");
                    this.adapter_.setAttr(constants_1.strings.TABINDEX, "0");
                    this.adapter_.activateIndicator(previousIndicatorClientRect);
                    if (this.focusOnActivate_) {
                        this.adapter_.focus();
                    }
                };
                MDCTabFoundation.prototype.deactivate = function() {
                    if (!this.isActive()) {
                        return;
                    }
                    this.adapter_.removeClass(constants_1.cssClasses.ACTIVE);
                    this.adapter_.setAttr(constants_1.strings.ARIA_SELECTED, "false");
                    this.adapter_.setAttr(constants_1.strings.TABINDEX, "-1");
                    this.adapter_.deactivateIndicator();
                };
                MDCTabFoundation.prototype.computeDimensions = function() {
                    var rootWidth = this.adapter_.getOffsetWidth();
                    var rootLeft = this.adapter_.getOffsetLeft();
                    var contentWidth = this.adapter_.getContentOffsetWidth();
                    var contentLeft = this.adapter_.getContentOffsetLeft();
                    return {
                        contentLeft: rootLeft + contentLeft,
                        contentRight: rootLeft + contentLeft + contentWidth,
                        rootLeft: rootLeft,
                        rootRight: rootLeft + rootWidth
                    };
                };
                return MDCTabFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCTabFoundation = MDCTabFoundation;
            exports.default = MDCTabFoundation;
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
        4: function(module, exports, __webpack_require__) {
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
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(6);
            var util_1 = __webpack_require__(3);
            var ACTIVATION_EVENT_TYPES = [ "touchstart", "pointerdown", "mousedown", "keydown" ];
            var POINTER_DEACTIVATION_EVENT_TYPES = [ "touchend", "pointerup", "mouseup", "contextmenu" ];
            var activatedTargets = [];
            var MDCRippleFoundation = function(_super) {
                __extends(MDCRippleFoundation, _super);
                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = "0";
                    _this.frame_ = {
                        width: 0,
                        height: 0
                    };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = {
                        left: 0,
                        top: 0
                    };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function() {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function(e) {
                        return _this.activate_(e);
                    };
                    _this.deactivateHandler_ = function() {
                        return _this.deactivate_();
                    };
                    _this.focusHandler_ = function() {
                        return _this.handleFocus();
                    };
                    _this.blurHandler_ = function() {
                        return _this.handleBlur();
                    };
                    _this.resizeHandler_ = function() {
                        return _this.layout();
                    };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function get() {
                        return constants_1.numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClass: function addClass() {
                                return undefined;
                            },
                            browserSupportsCssVars: function browserSupportsCssVars() {
                                return true;
                            },
                            computeBoundingRect: function computeBoundingRect() {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            },
                            containsEventTarget: function containsEventTarget() {
                                return true;
                            },
                            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
                                return undefined;
                            },
                            deregisterInteractionHandler: function deregisterInteractionHandler() {
                                return undefined;
                            },
                            deregisterResizeHandler: function deregisterResizeHandler() {
                                return undefined;
                            },
                            getWindowPageOffset: function getWindowPageOffset() {
                                return {
                                    x: 0,
                                    y: 0
                                };
                            },
                            isSurfaceActive: function isSurfaceActive() {
                                return true;
                            },
                            isSurfaceDisabled: function isSurfaceDisabled() {
                                return true;
                            },
                            isUnbounded: function isUnbounded() {
                                return true;
                            },
                            registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
                                return undefined;
                            },
                            registerInteractionHandler: function registerInteractionHandler() {
                                return undefined;
                            },
                            registerResizeHandler: function registerResizeHandler() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            },
                            updateCssVariable: function updateCssVariable() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function() {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function() {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function() {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function() {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                MDCRippleFoundation.prototype.activate = function(evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function() {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function() {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function() {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function(unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    } else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function() {
                    var _this = this;
                    requestAnimationFrame(function() {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function() {
                    var _this = this;
                    requestAnimationFrame(function() {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.supportsPressRipple_ = function() {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function() {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false
                    };
                };
                MDCRippleFoundation.prototype.registerRootHandlers_ = function(supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler("focus", this.focusHandler_);
                    this.adapter_.registerInteractionHandler("blur", this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function(evt) {
                    var _this = this;
                    if (evt.type === "keydown") {
                        this.adapter_.registerInteractionHandler("keyup", this.deactivateHandler_);
                    } else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function() {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function() {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler("keyup", this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function() {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function(key) {
                        if (key.indexOf("VAR_") === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function(evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function(target) {
                        return _this.adapter_.containsEventTarget(target);
                    });
                    if (hasActivatedChild) {
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function() {
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === " " || evt.keyCode === 32)) {
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function(evt) {
                    return evt !== undefined && evt.type === "keydown" ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function() {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = "";
                    var translateEnd = "";
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function() {
                        return _this.activationTimerCallback_();
                    }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function() {
                    var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = util_1.getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    } else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2
                        };
                    }
                    startPoint = {
                        x: startPoint.x - this.initialSize_ / 2,
                        y: startPoint.y - this.initialSize_ / 2
                    };
                    var endPoint = {
                        x: this.frame_.width / 2 - this.initialSize_ / 2,
                        y: this.frame_.height / 2 - this.initialSize_ / 2
                    };
                    return {
                        startPoint: startPoint,
                        endPoint: endPoint
                    };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function() {
                    var _this = this;
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, constants_1.numbers.FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function() {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function() {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    setTimeout(function() {
                        return _this.previousActivationEvent_ = undefined;
                    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function() {
                    var _this = this;
                    var activationState = this.activationState_;
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = __assign({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function() {
                            return _this.animateDeactivation_(state);
                        });
                        this.resetActivationState_();
                    } else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function() {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function(_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function() {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    var getBoundedRadius = function getBoundedRadius() {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function() {
                    var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                            top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCRippleFoundation = MDCRippleFoundation;
            exports.default = MDCRippleFoundation;
        },
        41: function(module, exports, __webpack_require__) {
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
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var component_1 = __webpack_require__(1);
            var component_2 = __webpack_require__(5);
            var foundation_1 = __webpack_require__(4);
            var component_3 = __webpack_require__(29);
            var foundation_2 = __webpack_require__(31);
            var MDCTab = function(_super) {
                __extends(MDCTab, _super);
                function MDCTab() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTab.attachTo = function(root) {
                    return new MDCTab(root);
                };
                MDCTab.prototype.initialize = function(rippleFactory, tabIndicatorFactory) {
                    if (rippleFactory === void 0) {
                        rippleFactory = function rippleFactory(el, foundation) {
                            return new component_2.MDCRipple(el, foundation);
                        };
                    }
                    if (tabIndicatorFactory === void 0) {
                        tabIndicatorFactory = function tabIndicatorFactory(el) {
                            return new component_3.MDCTabIndicator(el);
                        };
                    }
                    this.id = this.root_.id;
                    var rippleSurface = this.root_.querySelector(foundation_2.MDCTabFoundation.strings.RIPPLE_SELECTOR);
                    var rippleAdapter = __assign({}, component_2.MDCRipple.createAdapter(this), {
                        addClass: function addClass(className) {
                            return rippleSurface.classList.add(className);
                        },
                        removeClass: function removeClass(className) {
                            return rippleSurface.classList.remove(className);
                        },
                        updateCssVariable: function updateCssVariable(varName, value) {
                            return rippleSurface.style.setProperty(varName, value);
                        }
                    });
                    var rippleFoundation = new foundation_1.MDCRippleFoundation(rippleAdapter);
                    this.ripple_ = rippleFactory(this.root_, rippleFoundation);
                    var tabIndicatorElement = this.root_.querySelector(foundation_2.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
                    this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
                    this.content_ = this.root_.querySelector(foundation_2.MDCTabFoundation.strings.CONTENT_SELECTOR);
                };
                MDCTab.prototype.initialSyncWithDOM = function() {
                    var _this = this;
                    this.handleClick_ = function() {
                        return _this.foundation_.handleClick();
                    };
                    this.listen("click", this.handleClick_);
                };
                MDCTab.prototype.destroy = function() {
                    this.unlisten("click", this.handleClick_);
                    this.ripple_.destroy();
                    _super.prototype.destroy.call(this);
                };
                MDCTab.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        setAttr: function setAttr(attr, value) {
                            return _this.root_.setAttribute(attr, value);
                        },
                        addClass: function addClass(className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function removeClass(className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function hasClass(className) {
                            return _this.root_.classList.contains(className);
                        },
                        activateIndicator: function activateIndicator(previousIndicatorClientRect) {
                            return _this.tabIndicator_.activate(previousIndicatorClientRect);
                        },
                        deactivateIndicator: function deactivateIndicator() {
                            return _this.tabIndicator_.deactivate();
                        },
                        notifyInteracted: function notifyInteracted() {
                            return _this.emit(foundation_2.MDCTabFoundation.strings.INTERACTED_EVENT, {
                                tabId: _this.id
                            }, true);
                        },
                        getOffsetLeft: function getOffsetLeft() {
                            return _this.root_.offsetLeft;
                        },
                        getOffsetWidth: function getOffsetWidth() {
                            return _this.root_.offsetWidth;
                        },
                        getContentOffsetLeft: function getContentOffsetLeft() {
                            return _this.content_.offsetLeft;
                        },
                        getContentOffsetWidth: function getContentOffsetWidth() {
                            return _this.content_.offsetWidth;
                        },
                        focus: function focus() {
                            return _this.root_.focus();
                        }
                    };
                    return new foundation_2.MDCTabFoundation(adapter);
                };
                Object.defineProperty(MDCTab.prototype, "active", {
                    get: function get() {
                        return this.foundation_.isActive();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
                    set: function set(focusOnActivate) {
                        this.foundation_.setFocusOnActivate(focusOnActivate);
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTab.prototype.activate = function(computeIndicatorClientRect) {
                    this.foundation_.activate(computeIndicatorClientRect);
                };
                MDCTab.prototype.deactivate = function() {
                    this.foundation_.deactivate();
                };
                MDCTab.prototype.computeIndicatorClientRect = function() {
                    return this.tabIndicator_.computeContentClientRect();
                };
                MDCTab.prototype.computeDimensions = function() {
                    return this.foundation_.computeDimensions();
                };
                MDCTab.prototype.focus = function() {
                    this.root_.focus();
                };
                return MDCTab;
            }(component_1.MDCComponent);
            exports.MDCTab = MDCTab;
        },
        42: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var cssClasses = {
                ACTIVE: "mdc-tab--active"
            };
            exports.cssClasses = cssClasses;
            var strings = {
                ARIA_SELECTED: "aria-selected",
                CONTENT_SELECTOR: ".mdc-tab__content",
                INTERACTED_EVENT: "MDCTab:interacted",
                RIPPLE_SELECTOR: ".mdc-tab__ripple",
                TABINDEX: "tabIndex",
                TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
            };
            exports.strings = strings;
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
        },
        5: function(module, exports, __webpack_require__) {
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
            var foundation_1 = __webpack_require__(4);
            var util = __importStar(__webpack_require__(3));
            var MDCRipple = function(_super) {
                __extends(MDCRipple, _super);
                function MDCRipple() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.disabled = false;
                    return _this;
                }
                MDCRipple.attachTo = function(root, opts) {
                    if (opts === void 0) {
                        opts = {
                            isUnbounded: undefined
                        };
                    }
                    var ripple = new MDCRipple(root);
                    if (opts.isUnbounded !== undefined) {
                        ripple.unbounded = opts.isUnbounded;
                    }
                    return ripple;
                };
                MDCRipple.createAdapter = function(instance) {
                    return {
                        addClass: function addClass(className) {
                            return instance.root_.classList.add(className);
                        },
                        browserSupportsCssVars: function browserSupportsCssVars() {
                            return util.supportsCssVariables(window);
                        },
                        computeBoundingRect: function computeBoundingRect() {
                            return instance.root_.getBoundingClientRect();
                        },
                        containsEventTarget: function containsEventTarget(target) {
                            return instance.root_.contains(target);
                        },
                        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                            return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
                        },
                        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                            return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
                        },
                        deregisterResizeHandler: function deregisterResizeHandler(handler) {
                            return window.removeEventListener("resize", handler);
                        },
                        getWindowPageOffset: function getWindowPageOffset() {
                            return {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            };
                        },
                        isSurfaceActive: function isSurfaceActive() {
                            return ponyfill_1.matches(instance.root_, ":active");
                        },
                        isSurfaceDisabled: function isSurfaceDisabled() {
                            return Boolean(instance.disabled);
                        },
                        isUnbounded: function isUnbounded() {
                            return Boolean(instance.unbounded);
                        },
                        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                            return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
                        },
                        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                            return instance.root_.addEventListener(evtType, handler, util.applyPassive());
                        },
                        registerResizeHandler: function registerResizeHandler(handler) {
                            return window.addEventListener("resize", handler);
                        },
                        removeClass: function removeClass(className) {
                            return instance.root_.classList.remove(className);
                        },
                        updateCssVariable: function updateCssVariable(varName, value) {
                            return instance.root_.style.setProperty(varName, value);
                        }
                    };
                };
                Object.defineProperty(MDCRipple.prototype, "unbounded", {
                    get: function get() {
                        return Boolean(this.unbounded_);
                    },
                    set: function set(unbounded) {
                        this.unbounded_ = Boolean(unbounded);
                        this.setUnbounded_();
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRipple.prototype.activate = function() {
                    this.foundation_.activate();
                };
                MDCRipple.prototype.deactivate = function() {
                    this.foundation_.deactivate();
                };
                MDCRipple.prototype.layout = function() {
                    this.foundation_.layout();
                };
                MDCRipple.prototype.getDefaultFoundation = function() {
                    return new foundation_1.MDCRippleFoundation(MDCRipple.createAdapter(this));
                };
                MDCRipple.prototype.initialSyncWithDOM = function() {
                    var root = this.root_;
                    this.unbounded = "mdcRippleIsUnbounded" in root.dataset;
                };
                MDCRipple.prototype.setUnbounded_ = function() {
                    this.foundation_.setUnbounded(Boolean(this.unbounded_));
                };
                return MDCRipple;
            }(component_1.MDCComponent);
            exports.MDCRipple = MDCRipple;
        },
        6: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.cssClasses = {
                BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
                FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
                FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
                ROOT: "mdc-ripple-upgraded",
                UNBOUNDED: "mdc-ripple-upgraded--unbounded"
            };
            exports.strings = {
                VAR_FG_SCALE: "--mdc-ripple-fg-scale",
                VAR_FG_SIZE: "--mdc-ripple-fg-size",
                VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
                VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
                VAR_LEFT: "--mdc-ripple-left",
                VAR_TOP: "--mdc-ripple-top"
            };
            exports.numbers = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: .6,
                PADDING: 10,
                TAP_DELAY_MS: 300
            };
        },
        77: function(module, exports, __webpack_require__) {
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
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(153);
            var ACCEPTABLE_KEYS = new Set();
            ACCEPTABLE_KEYS.add(constants_1.strings.ARROW_LEFT_KEY);
            ACCEPTABLE_KEYS.add(constants_1.strings.ARROW_RIGHT_KEY);
            ACCEPTABLE_KEYS.add(constants_1.strings.END_KEY);
            ACCEPTABLE_KEYS.add(constants_1.strings.HOME_KEY);
            ACCEPTABLE_KEYS.add(constants_1.strings.ENTER_KEY);
            ACCEPTABLE_KEYS.add(constants_1.strings.SPACE_KEY);
            var KEYCODE_MAP = new Map();
            KEYCODE_MAP.set(constants_1.numbers.ARROW_LEFT_KEYCODE, constants_1.strings.ARROW_LEFT_KEY);
            KEYCODE_MAP.set(constants_1.numbers.ARROW_RIGHT_KEYCODE, constants_1.strings.ARROW_RIGHT_KEY);
            KEYCODE_MAP.set(constants_1.numbers.END_KEYCODE, constants_1.strings.END_KEY);
            KEYCODE_MAP.set(constants_1.numbers.HOME_KEYCODE, constants_1.strings.HOME_KEY);
            KEYCODE_MAP.set(constants_1.numbers.ENTER_KEYCODE, constants_1.strings.ENTER_KEY);
            KEYCODE_MAP.set(constants_1.numbers.SPACE_KEYCODE, constants_1.strings.SPACE_KEY);
            var MDCTabBarFoundation = function(_super) {
                __extends(MDCTabBarFoundation, _super);
                function MDCTabBarFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCTabBarFoundation.defaultAdapter, adapter)) || this;
                    _this.useAutomaticActivation_ = false;
                    return _this;
                }
                Object.defineProperty(MDCTabBarFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabBarFoundation, "numbers", {
                    get: function get() {
                        return constants_1.numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            scrollTo: function scrollTo() {
                                return undefined;
                            },
                            incrementScroll: function incrementScroll() {
                                return undefined;
                            },
                            getScrollPosition: function getScrollPosition() {
                                return 0;
                            },
                            getScrollContentWidth: function getScrollContentWidth() {
                                return 0;
                            },
                            getOffsetWidth: function getOffsetWidth() {
                                return 0;
                            },
                            isRTL: function isRTL() {
                                return false;
                            },
                            setActiveTab: function setActiveTab() {
                                return undefined;
                            },
                            activateTabAtIndex: function activateTabAtIndex() {
                                return undefined;
                            },
                            deactivateTabAtIndex: function deactivateTabAtIndex() {
                                return undefined;
                            },
                            focusTabAtIndex: function focusTabAtIndex() {
                                return undefined;
                            },
                            getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            },
                            getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {
                                return {
                                    rootLeft: 0,
                                    rootRight: 0,
                                    contentLeft: 0,
                                    contentRight: 0
                                };
                            },
                            getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
                                return -1;
                            },
                            getFocusedTabIndex: function getFocusedTabIndex() {
                                return -1;
                            },
                            getIndexOfTabById: function getIndexOfTabById() {
                                return -1;
                            },
                            getTabListLength: function getTabListLength() {
                                return 0;
                            },
                            notifyTabActivated: function notifyTabActivated() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTabBarFoundation.prototype.setUseAutomaticActivation = function(useAutomaticActivation) {
                    this.useAutomaticActivation_ = useAutomaticActivation;
                };
                MDCTabBarFoundation.prototype.activateTab = function(index) {
                    var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();
                    if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
                        return;
                    }
                    var previousClientRect;
                    if (previousActiveIndex !== -1) {
                        this.adapter_.deactivateTabAtIndex(previousActiveIndex);
                        previousClientRect = this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex);
                    }
                    this.adapter_.activateTabAtIndex(index, previousClientRect);
                    this.scrollIntoView(index);
                    this.adapter_.notifyTabActivated(index);
                };
                MDCTabBarFoundation.prototype.handleKeyDown = function(evt) {
                    var key = this.getKeyFromEvent_(evt);
                    if (key === undefined) {
                        return;
                    }
                    if (!this.isActivationKey_(key)) {
                        evt.preventDefault();
                    }
                    if (this.useAutomaticActivation_) {
                        if (this.isActivationKey_(key)) {
                            return;
                        }
                        var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
                        this.adapter_.setActiveTab(index);
                        this.scrollIntoView(index);
                    } else {
                        var focusedTabIndex = this.adapter_.getFocusedTabIndex();
                        if (this.isActivationKey_(key)) {
                            this.adapter_.setActiveTab(focusedTabIndex);
                        } else {
                            var index = this.determineTargetFromKey_(focusedTabIndex, key);
                            this.adapter_.focusTabAtIndex(index);
                            this.scrollIntoView(index);
                        }
                    }
                };
                MDCTabBarFoundation.prototype.handleTabInteraction = function(evt) {
                    this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
                };
                MDCTabBarFoundation.prototype.scrollIntoView = function(index) {
                    if (!this.indexIsInRange_(index)) {
                        return;
                    }
                    if (index === 0) {
                        return this.adapter_.scrollTo(0);
                    }
                    if (index === this.adapter_.getTabListLength() - 1) {
                        return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
                    }
                    if (this.isRTL_()) {
                        return this.scrollIntoViewRTL_(index);
                    }
                    this.scrollIntoView_(index);
                };
                MDCTabBarFoundation.prototype.determineTargetFromKey_ = function(origin, key) {
                    var isRTL = this.isRTL_();
                    var maxIndex = this.adapter_.getTabListLength() - 1;
                    var shouldGoToEnd = key === constants_1.strings.END_KEY;
                    var shouldDecrement = key === constants_1.strings.ARROW_LEFT_KEY && !isRTL || key === constants_1.strings.ARROW_RIGHT_KEY && isRTL;
                    var shouldIncrement = key === constants_1.strings.ARROW_RIGHT_KEY && !isRTL || key === constants_1.strings.ARROW_LEFT_KEY && isRTL;
                    var index = origin;
                    if (shouldGoToEnd) {
                        index = maxIndex;
                    } else if (shouldDecrement) {
                        index -= 1;
                    } else if (shouldIncrement) {
                        index += 1;
                    } else {
                        index = 0;
                    }
                    if (index < 0) {
                        index = maxIndex;
                    } else if (index > maxIndex) {
                        index = 0;
                    }
                    return index;
                };
                MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function(index, nextIndex, scrollPosition, barWidth) {
                    var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
                    var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
                    var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
                    var leftIncrement = relativeContentRight - constants_1.numbers.EXTRA_SCROLL_AMOUNT;
                    var rightIncrement = relativeContentLeft + constants_1.numbers.EXTRA_SCROLL_AMOUNT;
                    if (nextIndex < index) {
                        return Math.min(leftIncrement, 0);
                    }
                    return Math.max(rightIncrement, 0);
                };
                MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
                    var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
                    var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
                    var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
                    var leftIncrement = relativeContentRight + constants_1.numbers.EXTRA_SCROLL_AMOUNT;
                    var rightIncrement = relativeContentLeft - constants_1.numbers.EXTRA_SCROLL_AMOUNT;
                    if (nextIndex > index) {
                        return Math.max(leftIncrement, 0);
                    }
                    return Math.min(rightIncrement, 0);
                };
                MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function(index, tabDimensions, scrollPosition, barWidth) {
                    var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
                    var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
                    var relativeRootDelta = relativeRootLeft + relativeRootRight;
                    var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
                    var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
                    if (leftEdgeIsCloser) {
                        return index - 1;
                    }
                    if (rightEdgeIsCloser) {
                        return index + 1;
                    }
                    return -1;
                };
                MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
                    var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
                    var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
                    var rootDelta = rootLeft + rootRight;
                    var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
                    var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
                    if (leftEdgeIsCloser) {
                        return index + 1;
                    }
                    if (rightEdgeIsCloser) {
                        return index - 1;
                    }
                    return -1;
                };
                MDCTabBarFoundation.prototype.getKeyFromEvent_ = function(evt) {
                    if (ACCEPTABLE_KEYS.has(evt.key)) {
                        return evt.key;
                    }
                    return KEYCODE_MAP.get(evt.keyCode);
                };
                MDCTabBarFoundation.prototype.isActivationKey_ = function(key) {
                    return key === constants_1.strings.SPACE_KEY || key === constants_1.strings.ENTER_KEY;
                };
                MDCTabBarFoundation.prototype.indexIsInRange_ = function(index) {
                    return index >= 0 && index < this.adapter_.getTabListLength();
                };
                MDCTabBarFoundation.prototype.isRTL_ = function() {
                    return this.adapter_.isRTL();
                };
                MDCTabBarFoundation.prototype.scrollIntoView_ = function(index) {
                    var scrollPosition = this.adapter_.getScrollPosition();
                    var barWidth = this.adapter_.getOffsetWidth();
                    var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
                    var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);
                    if (!this.indexIsInRange_(nextIndex)) {
                        return;
                    }
                    var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
                    this.adapter_.incrementScroll(scrollIncrement);
                };
                MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function(index) {
                    var scrollPosition = this.adapter_.getScrollPosition();
                    var barWidth = this.adapter_.getOffsetWidth();
                    var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
                    var scrollWidth = this.adapter_.getScrollContentWidth();
                    var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
                    if (!this.indexIsInRange_(nextIndex)) {
                        return;
                    }
                    var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
                    this.adapter_.incrementScroll(scrollIncrement);
                };
                return MDCTabBarFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCTabBarFoundation = MDCTabBarFoundation;
            exports.default = MDCTabBarFoundation;
        },
        8: function(module, exports, __webpack_require__) {
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
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(30);
            var MDCTabIndicatorFoundation = function(_super) {
                __extends(MDCTabIndicatorFoundation, _super);
                function MDCTabIndicatorFoundation(adapter) {
                    return _super.call(this, __assign({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClass: function addClass() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            },
                            computeContentClientRect: function computeContentClientRect() {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            },
                            setContentStyleProperty: function setContentStyleProperty() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTabIndicatorFoundation.prototype.computeContentClientRect = function() {
                    return this.adapter_.computeContentClientRect();
                };
                return MDCTabIndicatorFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCTabIndicatorFoundation = MDCTabIndicatorFoundation;
            exports.default = MDCTabIndicatorFoundation;
        }
    });
});
//# sourceMappingURL=mdc.tabBar.js.map