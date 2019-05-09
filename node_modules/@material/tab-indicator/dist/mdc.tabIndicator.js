/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["tabIndicator"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["tabIndicator"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 154);
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
        154: function(module, exports, __webpack_require__) {
            "use strict";
            function __export(m) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __export(__webpack_require__(29));
            __export(__webpack_require__(8));
            __export(__webpack_require__(22));
            __export(__webpack_require__(23));
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
//# sourceMappingURL=mdc.tabIndicator.js.map