/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["snackbar"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["snackbar"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 145);
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
        145: function(module, exports, __webpack_require__) {
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
            var util = __importStar(__webpack_require__(74));
            exports.util = util;
            __export(__webpack_require__(146));
            __export(__webpack_require__(75));
        },
        146: function(module, exports, __webpack_require__) {
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
            var constants_1 = __webpack_require__(40);
            var foundation_1 = __webpack_require__(75);
            var util = __importStar(__webpack_require__(74));
            var SURFACE_SELECTOR = constants_1.strings.SURFACE_SELECTOR, LABEL_SELECTOR = constants_1.strings.LABEL_SELECTOR, ACTION_SELECTOR = constants_1.strings.ACTION_SELECTOR, DISMISS_SELECTOR = constants_1.strings.DISMISS_SELECTOR, OPENING_EVENT = constants_1.strings.OPENING_EVENT, OPENED_EVENT = constants_1.strings.OPENED_EVENT, CLOSING_EVENT = constants_1.strings.CLOSING_EVENT, CLOSED_EVENT = constants_1.strings.CLOSED_EVENT;
            var MDCSnackbar = function(_super) {
                __extends(MDCSnackbar, _super);
                function MDCSnackbar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCSnackbar.attachTo = function(root) {
                    return new MDCSnackbar(root);
                };
                MDCSnackbar.prototype.initialize = function(announcerFactory) {
                    if (announcerFactory === void 0) {
                        announcerFactory = function announcerFactory() {
                            return util.announce;
                        };
                    }
                    this.announce_ = announcerFactory();
                };
                MDCSnackbar.prototype.initialSyncWithDOM = function() {
                    var _this = this;
                    this.surfaceEl_ = this.root_.querySelector(SURFACE_SELECTOR);
                    this.labelEl_ = this.root_.querySelector(LABEL_SELECTOR);
                    this.actionEl_ = this.root_.querySelector(ACTION_SELECTOR);
                    this.handleKeyDown_ = function(evt) {
                        return _this.foundation_.handleKeyDown(evt);
                    };
                    this.handleSurfaceClick_ = function(evt) {
                        var target = evt.target;
                        if (_this.isActionButton_(target)) {
                            _this.foundation_.handleActionButtonClick(evt);
                        } else if (_this.isActionIcon_(target)) {
                            _this.foundation_.handleActionIconClick(evt);
                        }
                    };
                    this.registerKeyDownHandler_(this.handleKeyDown_);
                    this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
                };
                MDCSnackbar.prototype.destroy = function() {
                    _super.prototype.destroy.call(this);
                    this.deregisterKeyDownHandler_(this.handleKeyDown_);
                    this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
                };
                MDCSnackbar.prototype.open = function() {
                    this.foundation_.open();
                };
                MDCSnackbar.prototype.close = function(reason) {
                    if (reason === void 0) {
                        reason = "";
                    }
                    this.foundation_.close(reason);
                };
                MDCSnackbar.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        addClass: function addClass(className) {
                            return _this.root_.classList.add(className);
                        },
                        announce: function announce() {
                            return _this.announce_(_this.labelEl_);
                        },
                        notifyClosed: function notifyClosed(reason) {
                            return _this.emit(CLOSED_EVENT, reason ? {
                                reason: reason
                            } : {});
                        },
                        notifyClosing: function notifyClosing(reason) {
                            return _this.emit(CLOSING_EVENT, reason ? {
                                reason: reason
                            } : {});
                        },
                        notifyOpened: function notifyOpened() {
                            return _this.emit(OPENED_EVENT, {});
                        },
                        notifyOpening: function notifyOpening() {
                            return _this.emit(OPENING_EVENT, {});
                        },
                        removeClass: function removeClass(className) {
                            return _this.root_.classList.remove(className);
                        }
                    };
                    return new foundation_1.MDCSnackbarFoundation(adapter);
                };
                Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
                    get: function get() {
                        return this.foundation_.getTimeoutMs();
                    },
                    set: function set(timeoutMs) {
                        this.foundation_.setTimeoutMs(timeoutMs);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
                    get: function get() {
                        return this.foundation_.getCloseOnEscape();
                    },
                    set: function set(closeOnEscape) {
                        this.foundation_.setCloseOnEscape(closeOnEscape);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
                    get: function get() {
                        return this.foundation_.isOpen();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "labelText", {
                    get: function get() {
                        return this.labelEl_.textContent;
                    },
                    set: function set(labelText) {
                        this.labelEl_.textContent = labelText;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
                    get: function get() {
                        return this.actionEl_.textContent;
                    },
                    set: function set(actionButtonText) {
                        this.actionEl_.textContent = actionButtonText;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSnackbar.prototype.registerKeyDownHandler_ = function(handler) {
                    this.listen("keydown", handler);
                };
                MDCSnackbar.prototype.deregisterKeyDownHandler_ = function(handler) {
                    this.unlisten("keydown", handler);
                };
                MDCSnackbar.prototype.registerSurfaceClickHandler_ = function(handler) {
                    this.surfaceEl_.addEventListener("click", handler);
                };
                MDCSnackbar.prototype.deregisterSurfaceClickHandler_ = function(handler) {
                    this.surfaceEl_.removeEventListener("click", handler);
                };
                MDCSnackbar.prototype.isActionButton_ = function(target) {
                    return Boolean(ponyfill_1.closest(target, ACTION_SELECTOR));
                };
                MDCSnackbar.prototype.isActionIcon_ = function(target) {
                    return Boolean(ponyfill_1.closest(target, DISMISS_SELECTOR));
                };
                return MDCSnackbar;
            }(component_1.MDCComponent);
            exports.MDCSnackbar = MDCSnackbar;
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
        40: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var cssClasses = {
                CLOSING: "mdc-snackbar--closing",
                OPEN: "mdc-snackbar--open",
                OPENING: "mdc-snackbar--opening"
            };
            exports.cssClasses = cssClasses;
            var strings = {
                ACTION_SELECTOR: ".mdc-snackbar__action",
                ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
                CLOSED_EVENT: "MDCSnackbar:closed",
                CLOSING_EVENT: "MDCSnackbar:closing",
                DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
                LABEL_SELECTOR: ".mdc-snackbar__label",
                OPENED_EVENT: "MDCSnackbar:opened",
                OPENING_EVENT: "MDCSnackbar:opening",
                REASON_ACTION: "action",
                REASON_DISMISS: "dismiss",
                SURFACE_SELECTOR: ".mdc-snackbar__surface"
            };
            exports.strings = strings;
            var numbers = {
                DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
                MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
                MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
                SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
                SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
                ARIA_LIVE_DELAY_MS: 1e3
            };
            exports.numbers = numbers;
        },
        74: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var constants_1 = __webpack_require__(40);
            var ARIA_LIVE_DELAY_MS = constants_1.numbers.ARIA_LIVE_DELAY_MS;
            var ARIA_LIVE_LABEL_TEXT_ATTR = constants_1.strings.ARIA_LIVE_LABEL_TEXT_ATTR;
            function announce(ariaEl, labelEl) {
                if (labelEl === void 0) {
                    labelEl = ariaEl;
                }
                var priority = ariaEl.getAttribute("aria-live");
                var labelText = labelEl.textContent.trim();
                if (!labelText || !priority) {
                    return;
                }
                ariaEl.setAttribute("aria-live", "off");
                labelEl.textContent = "";
                labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>';
                labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
                setTimeout(function() {
                    ariaEl.setAttribute("aria-live", priority);
                    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR);
                    labelEl.textContent = labelText;
                }, ARIA_LIVE_DELAY_MS);
            }
            exports.announce = announce;
        },
        75: function(module, exports, __webpack_require__) {
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
            var constants_1 = __webpack_require__(40);
            var OPENING = constants_1.cssClasses.OPENING, OPEN = constants_1.cssClasses.OPEN, CLOSING = constants_1.cssClasses.CLOSING;
            var REASON_ACTION = constants_1.strings.REASON_ACTION, REASON_DISMISS = constants_1.strings.REASON_DISMISS;
            var MDCSnackbarFoundation = function(_super) {
                __extends(MDCSnackbarFoundation, _super);
                function MDCSnackbarFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;
                    _this.isOpen_ = false;
                    _this.animationFrame_ = 0;
                    _this.animationTimer_ = 0;
                    _this.autoDismissTimer_ = 0;
                    _this.autoDismissTimeoutMs_ = constants_1.numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
                    _this.closeOnEscape_ = true;
                    return _this;
                }
                Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbarFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbarFoundation, "numbers", {
                    get: function get() {
                        return constants_1.numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClass: function addClass() {
                                return undefined;
                            },
                            announce: function announce() {
                                return undefined;
                            },
                            notifyClosed: function notifyClosed() {
                                return undefined;
                            },
                            notifyClosing: function notifyClosing() {
                                return undefined;
                            },
                            notifyOpened: function notifyOpened() {
                                return undefined;
                            },
                            notifyOpening: function notifyOpening() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSnackbarFoundation.prototype.destroy = function() {
                    this.clearAutoDismissTimer_();
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = 0;
                    clearTimeout(this.animationTimer_);
                    this.animationTimer_ = 0;
                    this.adapter_.removeClass(OPENING);
                    this.adapter_.removeClass(OPEN);
                    this.adapter_.removeClass(CLOSING);
                };
                MDCSnackbarFoundation.prototype.open = function() {
                    var _this = this;
                    this.clearAutoDismissTimer_();
                    this.isOpen_ = true;
                    this.adapter_.notifyOpening();
                    this.adapter_.removeClass(CLOSING);
                    this.adapter_.addClass(OPENING);
                    this.adapter_.announce();
                    this.runNextAnimationFrame_(function() {
                        _this.adapter_.addClass(OPEN);
                        _this.animationTimer_ = setTimeout(function() {
                            _this.handleAnimationTimerEnd_();
                            _this.adapter_.notifyOpened();
                            _this.autoDismissTimer_ = setTimeout(function() {
                                _this.close(REASON_DISMISS);
                            }, _this.getTimeoutMs());
                        }, constants_1.numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
                    });
                };
                MDCSnackbarFoundation.prototype.close = function(reason) {
                    var _this = this;
                    if (reason === void 0) {
                        reason = "";
                    }
                    if (!this.isOpen_) {
                        return;
                    }
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = 0;
                    this.clearAutoDismissTimer_();
                    this.isOpen_ = false;
                    this.adapter_.notifyClosing(reason);
                    this.adapter_.addClass(constants_1.cssClasses.CLOSING);
                    this.adapter_.removeClass(constants_1.cssClasses.OPEN);
                    this.adapter_.removeClass(constants_1.cssClasses.OPENING);
                    clearTimeout(this.animationTimer_);
                    this.animationTimer_ = setTimeout(function() {
                        _this.handleAnimationTimerEnd_();
                        _this.adapter_.notifyClosed(reason);
                    }, constants_1.numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
                };
                MDCSnackbarFoundation.prototype.isOpen = function() {
                    return this.isOpen_;
                };
                MDCSnackbarFoundation.prototype.getTimeoutMs = function() {
                    return this.autoDismissTimeoutMs_;
                };
                MDCSnackbarFoundation.prototype.setTimeoutMs = function(timeoutMs) {
                    var minValue = constants_1.numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
                    var maxValue = constants_1.numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
                    if (timeoutMs <= maxValue && timeoutMs >= minValue) {
                        this.autoDismissTimeoutMs_ = timeoutMs;
                    } else {
                        throw new Error("timeoutMs must be an integer in the range " + minValue + "–" + maxValue + ", but got '" + timeoutMs + "'");
                    }
                };
                MDCSnackbarFoundation.prototype.getCloseOnEscape = function() {
                    return this.closeOnEscape_;
                };
                MDCSnackbarFoundation.prototype.setCloseOnEscape = function(closeOnEscape) {
                    this.closeOnEscape_ = closeOnEscape;
                };
                MDCSnackbarFoundation.prototype.handleKeyDown = function(evt) {
                    var isEscapeKey = evt.key === "Escape" || evt.keyCode === 27;
                    if (isEscapeKey && this.getCloseOnEscape()) {
                        this.close(REASON_DISMISS);
                    }
                };
                MDCSnackbarFoundation.prototype.handleActionButtonClick = function(_evt) {
                    this.close(REASON_ACTION);
                };
                MDCSnackbarFoundation.prototype.handleActionIconClick = function(_evt) {
                    this.close(REASON_DISMISS);
                };
                MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function() {
                    clearTimeout(this.autoDismissTimer_);
                    this.autoDismissTimer_ = 0;
                };
                MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function() {
                    this.animationTimer_ = 0;
                    this.adapter_.removeClass(constants_1.cssClasses.OPENING);
                    this.adapter_.removeClass(constants_1.cssClasses.CLOSING);
                };
                MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function(callback) {
                    var _this = this;
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = requestAnimationFrame(function() {
                        _this.animationFrame_ = 0;
                        clearTimeout(_this.animationTimer_);
                        _this.animationTimer_ = setTimeout(callback, 0);
                    });
                };
                return MDCSnackbarFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCSnackbarFoundation = MDCSnackbarFoundation;
            exports.default = MDCSnackbarFoundation;
        }
    });
});
//# sourceMappingURL=mdc.snackbar.js.map