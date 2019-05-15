/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["select"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["select"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 137);
    }([ function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(10);
        var ELEMENTS_KEY_ALLOWED_IN = [ "input", "button", "textarea", "select" ];
        function isNumberArray(selectedIndex) {
            return selectedIndex instanceof Array;
        }
        var MDCListFoundation = function(_super) {
            __extends(MDCListFoundation, _super);
            function MDCListFoundation(adapter) {
                var _this = _super.call(this, __assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
                _this.wrapFocus_ = false;
                _this.isVertical_ = true;
                _this.isSingleSelectionList_ = false;
                _this.selectedIndex_ = constants_1.numbers.UNSET_INDEX;
                _this.focusedItemIndex_ = constants_1.numbers.UNSET_INDEX;
                _this.useActivatedClass_ = false;
                _this.ariaCurrentAttrValue_ = null;
                _this.isCheckboxList_ = false;
                _this.isRadioList_ = false;
                return _this;
            }
            Object.defineProperty(MDCListFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCListFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCListFoundation, "numbers", {
                get: function get() {
                    return constants_1.numbers;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCListFoundation, "defaultAdapter", {
                get: function get() {
                    return {
                        addClassForElementIndex: function addClassForElementIndex() {
                            return undefined;
                        },
                        focusItemAtIndex: function focusItemAtIndex() {
                            return undefined;
                        },
                        getAttributeForElementIndex: function getAttributeForElementIndex() {
                            return null;
                        },
                        getFocusedElementIndex: function getFocusedElementIndex() {
                            return 0;
                        },
                        getListItemCount: function getListItemCount() {
                            return 0;
                        },
                        hasCheckboxAtIndex: function hasCheckboxAtIndex() {
                            return false;
                        },
                        hasRadioAtIndex: function hasRadioAtIndex() {
                            return false;
                        },
                        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
                            return false;
                        },
                        isFocusInsideList: function isFocusInsideList() {
                            return false;
                        },
                        isRootFocused: function isRootFocused() {
                            return false;
                        },
                        notifyAction: function notifyAction() {
                            return undefined;
                        },
                        removeClassForElementIndex: function removeClassForElementIndex() {
                            return undefined;
                        },
                        setAttributeForElementIndex: function setAttributeForElementIndex() {
                            return undefined;
                        },
                        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
                            return undefined;
                        },
                        setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCListFoundation.prototype.layout = function() {
                if (this.adapter_.getListItemCount() === 0) {
                    return;
                }
                if (this.adapter_.hasCheckboxAtIndex(0)) {
                    this.isCheckboxList_ = true;
                } else if (this.adapter_.hasRadioAtIndex(0)) {
                    this.isRadioList_ = true;
                }
            };
            MDCListFoundation.prototype.setWrapFocus = function(value) {
                this.wrapFocus_ = value;
            };
            MDCListFoundation.prototype.setVerticalOrientation = function(value) {
                this.isVertical_ = value;
            };
            MDCListFoundation.prototype.setSingleSelection = function(value) {
                this.isSingleSelectionList_ = value;
            };
            MDCListFoundation.prototype.setUseActivatedClass = function(useActivated) {
                this.useActivatedClass_ = useActivated;
            };
            MDCListFoundation.prototype.getSelectedIndex = function() {
                return this.selectedIndex_;
            };
            MDCListFoundation.prototype.setSelectedIndex = function(index) {
                if (!this.isIndexValid_(index)) {
                    return;
                }
                if (this.isCheckboxList_) {
                    this.setCheckboxAtIndex_(index);
                } else if (this.isRadioList_) {
                    this.setRadioAtIndex_(index);
                } else {
                    this.setSingleSelectionAtIndex_(index);
                }
            };
            MDCListFoundation.prototype.handleFocusIn = function(_, listItemIndex) {
                if (listItemIndex >= 0) {
                    this.adapter_.setTabIndexForListItemChildren(listItemIndex, "0");
                }
            };
            MDCListFoundation.prototype.handleFocusOut = function(_, listItemIndex) {
                var _this = this;
                if (listItemIndex >= 0) {
                    this.adapter_.setTabIndexForListItemChildren(listItemIndex, "-1");
                }
                setTimeout(function() {
                    if (!_this.adapter_.isFocusInsideList()) {
                        _this.setTabindexToFirstSelectedItem_();
                    }
                }, 0);
            };
            MDCListFoundation.prototype.handleKeydown = function(evt, isRootListItem, listItemIndex) {
                var isArrowLeft = evt.key === "ArrowLeft" || evt.keyCode === 37;
                var isArrowUp = evt.key === "ArrowUp" || evt.keyCode === 38;
                var isArrowRight = evt.key === "ArrowRight" || evt.keyCode === 39;
                var isArrowDown = evt.key === "ArrowDown" || evt.keyCode === 40;
                var isHome = evt.key === "Home" || evt.keyCode === 36;
                var isEnd = evt.key === "End" || evt.keyCode === 35;
                var isEnter = evt.key === "Enter" || evt.keyCode === 13;
                var isSpace = evt.key === "Space" || evt.keyCode === 32;
                if (this.adapter_.isRootFocused()) {
                    if (isArrowUp || isEnd) {
                        evt.preventDefault();
                        this.focusLastElement();
                    } else if (isArrowDown || isHome) {
                        evt.preventDefault();
                        this.focusFirstElement();
                    }
                    return;
                }
                var currentIndex = this.adapter_.getFocusedElementIndex();
                if (currentIndex === -1) {
                    currentIndex = listItemIndex;
                    if (currentIndex < 0) {
                        return;
                    }
                }
                var nextIndex;
                if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
                    this.preventDefaultEvent_(evt);
                    nextIndex = this.focusNextElement(currentIndex);
                } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
                    this.preventDefaultEvent_(evt);
                    nextIndex = this.focusPrevElement(currentIndex);
                } else if (isHome) {
                    this.preventDefaultEvent_(evt);
                    nextIndex = this.focusFirstElement();
                } else if (isEnd) {
                    this.preventDefaultEvent_(evt);
                    nextIndex = this.focusLastElement();
                } else if (isEnter || isSpace) {
                    if (isRootListItem) {
                        var target = evt.target;
                        if (target && target.tagName === "A" && isEnter) {
                            return;
                        }
                        this.preventDefaultEvent_(evt);
                        if (this.isSelectableList_()) {
                            this.setSelectedIndexOnAction_(currentIndex);
                        }
                        this.adapter_.notifyAction(currentIndex);
                    }
                }
                this.focusedItemIndex_ = currentIndex;
                if (nextIndex !== undefined) {
                    this.setTabindexAtIndex_(nextIndex);
                    this.focusedItemIndex_ = nextIndex;
                }
            };
            MDCListFoundation.prototype.handleClick = function(index, toggleCheckbox) {
                if (index === constants_1.numbers.UNSET_INDEX) {
                    return;
                }
                if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(index, toggleCheckbox);
                }
                this.adapter_.notifyAction(index);
                this.setTabindexAtIndex_(index);
                this.focusedItemIndex_ = index;
            };
            MDCListFoundation.prototype.focusNextElement = function(index) {
                var count = this.adapter_.getListItemCount();
                var nextIndex = index + 1;
                if (nextIndex >= count) {
                    if (this.wrapFocus_) {
                        nextIndex = 0;
                    } else {
                        return index;
                    }
                }
                this.adapter_.focusItemAtIndex(nextIndex);
                return nextIndex;
            };
            MDCListFoundation.prototype.focusPrevElement = function(index) {
                var prevIndex = index - 1;
                if (prevIndex < 0) {
                    if (this.wrapFocus_) {
                        prevIndex = this.adapter_.getListItemCount() - 1;
                    } else {
                        return index;
                    }
                }
                this.adapter_.focusItemAtIndex(prevIndex);
                return prevIndex;
            };
            MDCListFoundation.prototype.focusFirstElement = function() {
                this.adapter_.focusItemAtIndex(0);
                return 0;
            };
            MDCListFoundation.prototype.focusLastElement = function() {
                var lastIndex = this.adapter_.getListItemCount() - 1;
                this.adapter_.focusItemAtIndex(lastIndex);
                return lastIndex;
            };
            MDCListFoundation.prototype.preventDefaultEvent_ = function(evt) {
                var target = evt.target;
                var tagName = ("" + target.tagName).toLowerCase();
                if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
                    evt.preventDefault();
                }
            };
            MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function(index) {
                if (this.selectedIndex_ === index) {
                    return;
                }
                var selectedClassName = constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS;
                if (this.useActivatedClass_) {
                    selectedClassName = constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
                }
                if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                    this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
                }
                this.adapter_.addClassForElementIndex(index, selectedClassName);
                this.setAriaForSingleSelectionAtIndex_(index);
                this.selectedIndex_ = index;
            };
            MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function(index) {
                if (this.selectedIndex_ === constants_1.numbers.UNSET_INDEX) {
                    this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, constants_1.strings.ARIA_CURRENT);
                }
                var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
                var ariaAttribute = isAriaCurrent ? constants_1.strings.ARIA_CURRENT : constants_1.strings.ARIA_SELECTED;
                if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                    this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, "false");
                }
                var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : "true";
                this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
            };
            MDCListFoundation.prototype.setRadioAtIndex_ = function(index) {
                this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
                if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                    this.adapter_.setAttributeForElementIndex(this.selectedIndex_, constants_1.strings.ARIA_CHECKED, "false");
                }
                this.adapter_.setAttributeForElementIndex(index, constants_1.strings.ARIA_CHECKED, "true");
                this.selectedIndex_ = index;
            };
            MDCListFoundation.prototype.setCheckboxAtIndex_ = function(index) {
                for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
                    var isChecked = false;
                    if (index.indexOf(i) >= 0) {
                        isChecked = true;
                    }
                    this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
                    this.adapter_.setAttributeForElementIndex(i, constants_1.strings.ARIA_CHECKED, isChecked ? "true" : "false");
                }
                this.selectedIndex_ = index;
            };
            MDCListFoundation.prototype.setTabindexAtIndex_ = function(index) {
                if (this.focusedItemIndex_ === constants_1.numbers.UNSET_INDEX && index !== 0) {
                    this.adapter_.setAttributeForElementIndex(0, "tabindex", "-1");
                } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
                    this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, "tabindex", "-1");
                }
                this.adapter_.setAttributeForElementIndex(index, "tabindex", "0");
            };
            MDCListFoundation.prototype.isSelectableList_ = function() {
                return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
            };
            MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function() {
                var targetIndex = 0;
                if (this.isSelectableList_()) {
                    if (typeof this.selectedIndex_ === "number" && this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                        targetIndex = this.selectedIndex_;
                    } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                        targetIndex = this.selectedIndex_.reduce(function(currentIndex, minIndex) {
                            return Math.min(currentIndex, minIndex);
                        });
                    }
                }
                this.setTabindexAtIndex_(targetIndex);
            };
            MDCListFoundation.prototype.isIndexValid_ = function(index) {
                var _this = this;
                if (index instanceof Array) {
                    if (!this.isCheckboxList_) {
                        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                    }
                    if (index.length === 0) {
                        return true;
                    } else {
                        return index.some(function(i) {
                            return _this.isIndexInRange_(i);
                        });
                    }
                } else if (typeof index === "number") {
                    if (this.isCheckboxList_) {
                        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
                    }
                    return this.isIndexInRange_(index);
                } else {
                    return false;
                }
            };
            MDCListFoundation.prototype.isIndexInRange_ = function(index) {
                var listSize = this.adapter_.getListItemCount();
                return index >= 0 && index < listSize;
            };
            MDCListFoundation.prototype.setSelectedIndexOnAction_ = function(index, toggleCheckbox) {
                if (toggleCheckbox === void 0) {
                    toggleCheckbox = true;
                }
                if (this.isCheckboxList_) {
                    this.toggleCheckboxAtIndex_(index, toggleCheckbox);
                } else {
                    this.setSelectedIndex(index);
                }
            };
            MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function(index, toggleCheckbox) {
                var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
                if (toggleCheckbox) {
                    isChecked = !isChecked;
                    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
                }
                this.adapter_.setAttributeForElementIndex(index, constants_1.strings.ARIA_CHECKED, isChecked ? "true" : "false");
                var selectedIndexes = this.selectedIndex_ === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();
                if (isChecked) {
                    selectedIndexes.push(index);
                } else {
                    selectedIndexes = selectedIndexes.filter(function(i) {
                        return i !== index;
                    });
                }
                this.selectedIndex_ = selectedIndexes;
            };
            return MDCListFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCListFoundation = MDCListFoundation;
        exports.default = MDCListFoundation;
    }, , , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var cssClasses = {
            LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
            LIST_ITEM_CLASS: "mdc-list-item",
            LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
            LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
            ROOT: "mdc-list"
        };
        exports.cssClasses = cssClasses;
        var strings = {
            ACTION_EVENT: "MDCList:action",
            ARIA_CHECKED: "aria-checked",
            ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
            ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
            ARIA_CURRENT: "aria-current",
            ARIA_ORIENTATION: "aria-orientation",
            ARIA_ORIENTATION_HORIZONTAL: "horizontal",
            ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
            ARIA_SELECTED: "aria-selected",
            CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
            CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
            CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
            FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)\n  ',
            RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
        };
        exports.strings = strings;
        var numbers = {
            UNSET_INDEX: -1
        };
        exports.numbers = numbers;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var cssClasses = {
            ANCHOR: "mdc-menu-surface--anchor",
            ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
            ANIMATING_OPEN: "mdc-menu-surface--animating-open",
            FIXED: "mdc-menu-surface--fixed",
            OPEN: "mdc-menu-surface--open",
            ROOT: "mdc-menu-surface"
        };
        exports.cssClasses = cssClasses;
        var strings = {
            CLOSED_EVENT: "MDCMenuSurface:closed",
            OPENED_EVENT: "MDCMenuSurface:opened",
            FOCUSABLE_ELEMENTS: [ "button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])' ].join(", ")
        };
        exports.strings = strings;
        var numbers = {
            TRANSITION_OPEN_DURATION: 120,
            TRANSITION_CLOSE_DURATION: 75,
            MARGIN_TO_EDGE: 32,
            ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67
        };
        exports.numbers = numbers;
        var CornerBit;
        (function(CornerBit) {
            CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
            CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
            CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
            CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
        })(CornerBit || (CornerBit = {}));
        exports.CornerBit = CornerBit;
        var Corner;
        (function(Corner) {
            Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
            Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
            Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
            Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
            Corner[Corner["TOP_START"] = 8] = "TOP_START";
            Corner[Corner["TOP_END"] = 12] = "TOP_END";
            Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
            Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
        })(Corner || (Corner = {}));
        exports.Corner = Corner;
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(16);
        var MDCFloatingLabelFoundation = function(_super) {
            __extends(MDCFloatingLabelFoundation, _super);
            function MDCFloatingLabelFoundation(adapter) {
                var _this = _super.call(this, __assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
                _this.shakeAnimationEndHandler_ = function() {
                    return _this.handleShakeAnimationEnd_();
                };
                return _this;
            }
            Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
                get: function get() {
                    return {
                        addClass: function addClass() {
                            return undefined;
                        },
                        removeClass: function removeClass() {
                            return undefined;
                        },
                        getWidth: function getWidth() {
                            return 0;
                        },
                        registerInteractionHandler: function registerInteractionHandler() {
                            return undefined;
                        },
                        deregisterInteractionHandler: function deregisterInteractionHandler() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCFloatingLabelFoundation.prototype.init = function() {
                this.adapter_.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_);
            };
            MDCFloatingLabelFoundation.prototype.destroy = function() {
                this.adapter_.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_);
            };
            MDCFloatingLabelFoundation.prototype.getWidth = function() {
                return this.adapter_.getWidth();
            };
            MDCFloatingLabelFoundation.prototype.shake = function(shouldShake) {
                var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                if (shouldShake) {
                    this.adapter_.addClass(LABEL_SHAKE);
                } else {
                    this.adapter_.removeClass(LABEL_SHAKE);
                }
            };
            MDCFloatingLabelFoundation.prototype.float = function(shouldFloat) {
                var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
                if (shouldFloat) {
                    this.adapter_.addClass(LABEL_FLOAT_ABOVE);
                } else {
                    this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
                    this.adapter_.removeClass(LABEL_SHAKE);
                }
            };
            MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function() {
                var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                this.adapter_.removeClass(LABEL_SHAKE);
            };
            return MDCFloatingLabelFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCFloatingLabelFoundation = MDCFloatingLabelFoundation;
        exports.default = MDCFloatingLabelFoundation;
    }, function(module, exports, __webpack_require__) {
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
        var __values = this && this.__values || function(o) {
            var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
            if (m) return m.call(o);
            return {
                next: function next() {
                    if (o && i >= o.length) o = void 0;
                    return {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var foundation_1 = __webpack_require__(0);
        var constants_1 = __webpack_require__(11);
        var MDCMenuSurfaceFoundation = function(_super) {
            __extends(MDCMenuSurfaceFoundation, _super);
            function MDCMenuSurfaceFoundation(adapter) {
                var _this = _super.call(this, __assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
                _this.isOpen_ = false;
                _this.isQuickOpen_ = false;
                _this.isHoistedElement_ = false;
                _this.isFixedPosition_ = false;
                _this.openAnimationEndTimerId_ = 0;
                _this.closeAnimationEndTimerId_ = 0;
                _this.animationRequestId_ = 0;
                _this.anchorCorner_ = constants_1.Corner.TOP_START;
                _this.anchorMargin_ = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                _this.position_ = {
                    x: 0,
                    y: 0
                };
                return _this;
            }
            Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
                get: function get() {
                    return constants_1.numbers;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
                get: function get() {
                    return constants_1.Corner;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
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
                        hasAnchor: function hasAnchor() {
                            return false;
                        },
                        isElementInContainer: function isElementInContainer() {
                            return false;
                        },
                        isFocused: function isFocused() {
                            return false;
                        },
                        isFirstElementFocused: function isFirstElementFocused() {
                            return false;
                        },
                        isLastElementFocused: function isLastElementFocused() {
                            return false;
                        },
                        isRtl: function isRtl() {
                            return false;
                        },
                        getInnerDimensions: function getInnerDimensions() {
                            return {
                                height: 0,
                                width: 0
                            };
                        },
                        getAnchorDimensions: function getAnchorDimensions() {
                            return null;
                        },
                        getWindowDimensions: function getWindowDimensions() {
                            return {
                                height: 0,
                                width: 0
                            };
                        },
                        getBodyDimensions: function getBodyDimensions() {
                            return {
                                height: 0,
                                width: 0
                            };
                        },
                        getWindowScroll: function getWindowScroll() {
                            return {
                                x: 0,
                                y: 0
                            };
                        },
                        setPosition: function setPosition() {
                            return undefined;
                        },
                        setMaxHeight: function setMaxHeight() {
                            return undefined;
                        },
                        setTransformOrigin: function setTransformOrigin() {
                            return undefined;
                        },
                        saveFocus: function saveFocus() {
                            return undefined;
                        },
                        restoreFocus: function restoreFocus() {
                            return undefined;
                        },
                        focusFirstElement: function focusFirstElement() {
                            return undefined;
                        },
                        focusLastElement: function focusLastElement() {
                            return undefined;
                        },
                        notifyClose: function notifyClose() {
                            return undefined;
                        },
                        notifyOpen: function notifyOpen() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCMenuSurfaceFoundation.prototype.init = function() {
                var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
                if (!this.adapter_.hasClass(ROOT)) {
                    throw new Error(ROOT + " class required in root element.");
                }
                if (this.adapter_.hasClass(OPEN)) {
                    this.isOpen_ = true;
                }
            };
            MDCMenuSurfaceFoundation.prototype.destroy = function() {
                clearTimeout(this.openAnimationEndTimerId_);
                clearTimeout(this.closeAnimationEndTimerId_);
                cancelAnimationFrame(this.animationRequestId_);
            };
            MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function(corner) {
                this.anchorCorner_ = corner;
            };
            MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function(margin) {
                this.anchorMargin_.top = margin.top || 0;
                this.anchorMargin_.right = margin.right || 0;
                this.anchorMargin_.bottom = margin.bottom || 0;
                this.anchorMargin_.left = margin.left || 0;
            };
            MDCMenuSurfaceFoundation.prototype.setIsHoisted = function(isHoisted) {
                this.isHoistedElement_ = isHoisted;
            };
            MDCMenuSurfaceFoundation.prototype.setFixedPosition = function(isFixedPosition) {
                this.isFixedPosition_ = isFixedPosition;
            };
            MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function(x, y) {
                this.position_.x = this.isFinite_(x) ? x : 0;
                this.position_.y = this.isFinite_(y) ? y : 0;
            };
            MDCMenuSurfaceFoundation.prototype.setQuickOpen = function(quickOpen) {
                this.isQuickOpen_ = quickOpen;
            };
            MDCMenuSurfaceFoundation.prototype.isOpen = function() {
                return this.isOpen_;
            };
            MDCMenuSurfaceFoundation.prototype.open = function() {
                var _this = this;
                this.adapter_.saveFocus();
                if (!this.isQuickOpen_) {
                    this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                }
                this.animationRequestId_ = requestAnimationFrame(function() {
                    _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                    _this.dimensions_ = _this.adapter_.getInnerDimensions();
                    _this.autoPosition_();
                    if (_this.isQuickOpen_) {
                        _this.adapter_.notifyOpen();
                    } else {
                        _this.openAnimationEndTimerId_ = setTimeout(function() {
                            _this.openAnimationEndTimerId_ = 0;
                            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                            _this.adapter_.notifyOpen();
                        }, constants_1.numbers.TRANSITION_OPEN_DURATION);
                    }
                });
                this.isOpen_ = true;
            };
            MDCMenuSurfaceFoundation.prototype.close = function() {
                var _this = this;
                if (!this.isQuickOpen_) {
                    this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                }
                requestAnimationFrame(function() {
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                    if (_this.isQuickOpen_) {
                        _this.adapter_.notifyClose();
                    } else {
                        _this.closeAnimationEndTimerId_ = setTimeout(function() {
                            _this.closeAnimationEndTimerId_ = 0;
                            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                            _this.adapter_.notifyClose();
                        }, constants_1.numbers.TRANSITION_CLOSE_DURATION);
                    }
                });
                this.isOpen_ = false;
                this.maybeRestoreFocus_();
            };
            MDCMenuSurfaceFoundation.prototype.handleBodyClick = function(evt) {
                var el = evt.target;
                if (this.adapter_.isElementInContainer(el)) {
                    return;
                }
                this.close();
            };
            MDCMenuSurfaceFoundation.prototype.handleKeydown = function(evt) {
                var keyCode = evt.keyCode, key = evt.key, shiftKey = evt.shiftKey;
                var isEscape = key === "Escape" || keyCode === 27;
                var isTab = key === "Tab" || keyCode === 9;
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
            };
            MDCMenuSurfaceFoundation.prototype.autoPosition_ = function() {
                var _a;
                this.measurements_ = this.getAutoLayoutMeasurements_();
                var corner = this.getOriginCorner_();
                var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
                var verticalAlignment = this.hasBit_(corner, constants_1.CornerBit.BOTTOM) ? "bottom" : "top";
                var horizontalAlignment = this.hasBit_(corner, constants_1.CornerBit.RIGHT) ? "right" : "left";
                var horizontalOffset = this.getHorizontalOriginOffset_(corner);
                var verticalOffset = this.getVerticalOriginOffset_(corner);
                var _b = this.measurements_, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
                var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, 
                _a);
                if (anchorSize.width / surfaceSize.width > constants_1.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
                    horizontalAlignment = "center";
                }
                if (this.isHoistedElement_ || this.isFixedPosition_) {
                    this.adjustPositionForHoistedElement_(position);
                }
                this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
                this.adapter_.setPosition(position);
                this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
            };
            MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function() {
                var anchorRect = this.adapter_.getAnchorDimensions();
                var bodySize = this.adapter_.getBodyDimensions();
                var viewportSize = this.adapter_.getWindowDimensions();
                var windowScroll = this.adapter_.getWindowScroll();
                if (!anchorRect) {
                    anchorRect = {
                        top: this.position_.y,
                        right: this.position_.x,
                        bottom: this.position_.y,
                        left: this.position_.x,
                        width: 0,
                        height: 0
                    };
                }
                return {
                    anchorSize: anchorRect,
                    bodySize: bodySize,
                    surfaceSize: this.dimensions_,
                    viewportDistance: {
                        top: anchorRect.top,
                        right: viewportSize.width - anchorRect.right,
                        bottom: viewportSize.height - anchorRect.bottom,
                        left: anchorRect.left
                    },
                    viewportSize: viewportSize,
                    windowScroll: windowScroll
                };
            };
            MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function() {
                var corner = constants_1.Corner.TOP_LEFT;
                var _a = this.measurements_, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
                var isBottomAligned = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.BOTTOM);
                var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
                var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
                var topOverflow = surfaceSize.height - availableTop;
                var bottomOverflow = surfaceSize.height - availableBottom;
                if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
                    corner = this.setBit_(corner, constants_1.CornerBit.BOTTOM);
                }
                var isRtl = this.adapter_.isRtl();
                var isFlipRtl = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.FLIP_RTL);
                var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.RIGHT);
                var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
                var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
                var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
                var leftOverflow = surfaceSize.width - availableLeft;
                var rightOverflow = surfaceSize.width - availableRight;
                if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
                    corner = this.setBit_(corner, constants_1.CornerBit.RIGHT);
                }
                return corner;
            };
            MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function(corner) {
                var viewportDistance = this.measurements_.viewportDistance;
                var maxHeight = 0;
                var isBottomAligned = this.hasBit_(corner, constants_1.CornerBit.BOTTOM);
                var isBottomAnchored = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.BOTTOM);
                var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
                if (isBottomAligned) {
                    maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
                    if (!isBottomAnchored) {
                        maxHeight += this.measurements_.anchorSize.height;
                    }
                } else {
                    maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
                    if (isBottomAnchored) {
                        maxHeight -= this.measurements_.anchorSize.height;
                    }
                }
                return maxHeight;
            };
            MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function(corner) {
                var anchorSize = this.measurements_.anchorSize;
                var isRightAligned = this.hasBit_(corner, constants_1.CornerBit.RIGHT);
                var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.RIGHT);
                if (isRightAligned) {
                    var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right;
                    if (this.isHoistedElement_ || this.isFixedPosition_) {
                        return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
                    }
                    return rightOffset;
                }
                return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
            };
            MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function(corner) {
                var anchorSize = this.measurements_.anchorSize;
                var isBottomAligned = this.hasBit_(corner, constants_1.CornerBit.BOTTOM);
                var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.BOTTOM);
                var y = 0;
                if (isBottomAligned) {
                    y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
                } else {
                    y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin_.bottom : this.anchorMargin_.top;
                }
                return y;
            };
            MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function(position) {
                var e_1, _a;
                var _b = this.measurements_, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance;
                var props = Object.keys(position);
                try {
                    for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                        var prop = props_1_1.value;
                        var value = position[prop] || 0;
                        value += viewportDistance[prop];
                        if (!this.isFixedPosition_) {
                            if (prop === "top") {
                                value += windowScroll.y;
                            } else if (prop === "bottom") {
                                value -= windowScroll.y;
                            } else if (prop === "left") {
                                value += windowScroll.x;
                            } else {
                                value -= windowScroll.x;
                            }
                        }
                        position[prop] = value;
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
            };
            MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function() {
                var isRootFocused = this.adapter_.isFocused();
                var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
                if (isRootFocused || childHasFocus) {
                    this.adapter_.restoreFocus();
                }
            };
            MDCMenuSurfaceFoundation.prototype.hasBit_ = function(corner, bit) {
                return Boolean(corner & bit);
            };
            MDCMenuSurfaceFoundation.prototype.setBit_ = function(corner, bit) {
                return corner | bit;
            };
            MDCMenuSurfaceFoundation.prototype.isFinite_ = function(num) {
                return typeof num === "number" && isFinite(num);
            };
            return MDCMenuSurfaceFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCMenuSurfaceFoundation = MDCMenuSurfaceFoundation;
        exports.default = MDCMenuSurfaceFoundation;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var strings = {
            NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
        };
        exports.strings = strings;
        var numbers = {
            NOTCH_ELEMENT_PADDING: 8
        };
        exports.numbers = numbers;
        var cssClasses = {
            NO_LABEL: "mdc-notched-outline--no-label",
            OUTLINE_NOTCHED: "mdc-notched-outline--notched",
            OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
        };
        exports.cssClasses = cssClasses;
    }, function(module, exports, __webpack_require__) {
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
        var ponyfill_1 = __webpack_require__(2);
        var constants_1 = __webpack_require__(10);
        var foundation_1 = __webpack_require__(7);
        var MDCList = function(_super) {
            __extends(MDCList, _super);
            function MDCList() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(MDCList.prototype, "vertical", {
                set: function set(value) {
                    this.foundation_.setVerticalOrientation(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCList.prototype, "listElements", {
                get: function get() {
                    return [].slice.call(this.root_.querySelectorAll("." + constants_1.cssClasses.LIST_ITEM_CLASS));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCList.prototype, "wrapFocus", {
                set: function set(value) {
                    this.foundation_.setWrapFocus(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCList.prototype, "singleSelection", {
                set: function set(isSingleSelectionList) {
                    this.foundation_.setSingleSelection(isSingleSelectionList);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCList.prototype, "selectedIndex", {
                get: function get() {
                    return this.foundation_.getSelectedIndex();
                },
                set: function set(index) {
                    this.foundation_.setSelectedIndex(index);
                },
                enumerable: true,
                configurable: true
            });
            MDCList.attachTo = function(root) {
                return new MDCList(root);
            };
            MDCList.prototype.initialSyncWithDOM = function() {
                this.handleClick_ = this.handleClickEvent_.bind(this);
                this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
                this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
                this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
                this.listen("keydown", this.handleKeydown_);
                this.listen("click", this.handleClick_);
                this.listen("focusin", this.focusInEventListener_);
                this.listen("focusout", this.focusOutEventListener_);
                this.layout();
                this.initializeListType();
            };
            MDCList.prototype.destroy = function() {
                this.unlisten("keydown", this.handleKeydown_);
                this.unlisten("click", this.handleClick_);
                this.unlisten("focusin", this.focusInEventListener_);
                this.unlisten("focusout", this.focusOutEventListener_);
            };
            MDCList.prototype.layout = function() {
                var direction = this.root_.getAttribute(constants_1.strings.ARIA_ORIENTATION);
                this.vertical = direction !== constants_1.strings.ARIA_ORIENTATION_HORIZONTAL;
                [].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(el) {
                    el.setAttribute("tabindex", "-1");
                });
                [].slice.call(this.root_.querySelectorAll(constants_1.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(el) {
                    return el.setAttribute("tabindex", "-1");
                });
                this.foundation_.layout();
            };
            MDCList.prototype.initializeListType = function() {
                var _this = this;
                var checkboxListItems = this.root_.querySelectorAll(constants_1.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
                var singleSelectedListItem = this.root_.querySelector("\n      ." + constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    ");
                var radioSelectedListItem = this.root_.querySelector(constants_1.strings.ARIA_CHECKED_RADIO_SELECTOR);
                if (checkboxListItems.length) {
                    var preselectedItems = this.root_.querySelectorAll(constants_1.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
                    this.selectedIndex = [].map.call(preselectedItems, function(listItem) {
                        return _this.listElements.indexOf(listItem);
                    });
                } else if (singleSelectedListItem) {
                    if (singleSelectedListItem.classList.contains(constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
                        this.foundation_.setUseActivatedClass(true);
                    }
                    this.singleSelection = true;
                    this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
                } else if (radioSelectedListItem) {
                    this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
                }
            };
            MDCList.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClassForElementIndex: function addClassForElementIndex(index, className) {
                        var element = _this.listElements[index];
                        if (element) {
                            element.classList.add(className);
                        }
                    },
                    focusItemAtIndex: function focusItemAtIndex(index) {
                        var element = _this.listElements[index];
                        if (element) {
                            element.focus();
                        }
                    },
                    getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
                        return _this.listElements[index].getAttribute(attr);
                    },
                    getFocusedElementIndex: function getFocusedElementIndex() {
                        return _this.listElements.indexOf(document.activeElement);
                    },
                    getListItemCount: function getListItemCount() {
                        return _this.listElements.length;
                    },
                    hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
                        var listItem = _this.listElements[index];
                        return !!listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
                    },
                    hasRadioAtIndex: function hasRadioAtIndex(index) {
                        var listItem = _this.listElements[index];
                        return !!listItem.querySelector(constants_1.strings.RADIO_SELECTOR);
                    },
                    isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
                        var listItem = _this.listElements[index];
                        var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
                        return toggleEl.checked;
                    },
                    isFocusInsideList: function isFocusInsideList() {
                        return _this.root_.contains(document.activeElement);
                    },
                    isRootFocused: function isRootFocused() {
                        return document.activeElement === _this.root_;
                    },
                    notifyAction: function notifyAction(index) {
                        _this.emit(constants_1.strings.ACTION_EVENT, {
                            index: index
                        }, true);
                    },
                    removeClassForElementIndex: function removeClassForElementIndex(index, className) {
                        var element = _this.listElements[index];
                        if (element) {
                            element.classList.remove(className);
                        }
                    },
                    setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
                        var element = _this.listElements[index];
                        if (element) {
                            element.setAttribute(attr, value);
                        }
                    },
                    setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
                        var listItem = _this.listElements[index];
                        var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_RADIO_SELECTOR);
                        toggleEl.checked = isChecked;
                        var event = document.createEvent("Event");
                        event.initEvent("change", true, true);
                        toggleEl.dispatchEvent(event);
                    },
                    setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
                        var element = _this.listElements[listItemIndex];
                        var listItemChildren = [].slice.call(element.querySelectorAll(constants_1.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                        listItemChildren.forEach(function(el) {
                            return el.setAttribute("tabindex", tabIndexValue);
                        });
                    }
                };
                return new foundation_1.MDCListFoundation(adapter);
            };
            MDCList.prototype.getListItemIndex_ = function(evt) {
                var eventTarget = evt.target;
                var nearestParent = ponyfill_1.closest(eventTarget, "." + constants_1.cssClasses.LIST_ITEM_CLASS + ", ." + constants_1.cssClasses.ROOT);
                if (nearestParent && ponyfill_1.matches(nearestParent, "." + constants_1.cssClasses.LIST_ITEM_CLASS)) {
                    return this.listElements.indexOf(nearestParent);
                }
                return -1;
            };
            MDCList.prototype.handleFocusInEvent_ = function(evt) {
                var index = this.getListItemIndex_(evt);
                this.foundation_.handleFocusIn(evt, index);
            };
            MDCList.prototype.handleFocusOutEvent_ = function(evt) {
                var index = this.getListItemIndex_(evt);
                this.foundation_.handleFocusOut(evt, index);
            };
            MDCList.prototype.handleKeydownEvent_ = function(evt) {
                var index = this.getListItemIndex_(evt);
                var target = evt.target;
                this.foundation_.handleKeydown(evt, target.classList.contains(constants_1.cssClasses.LIST_ITEM_CLASS), index);
            };
            MDCList.prototype.handleClickEvent_ = function(evt) {
                var index = this.getListItemIndex_(evt);
                var target = evt.target;
                var toggleCheckbox = !ponyfill_1.matches(target, constants_1.strings.CHECKBOX_RADIO_SELECTOR);
                this.foundation_.handleClick(index, toggleCheckbox);
            };
            return MDCList;
        }(component_1.MDCComponent);
        exports.MDCList = MDCList;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.cssClasses = {
            LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
            LABEL_SHAKE: "mdc-floating-label--shake",
            ROOT: "mdc-floating-label"
        };
    }, , function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(26);
        var MDCLineRippleFoundation = function(_super) {
            __extends(MDCLineRippleFoundation, _super);
            function MDCLineRippleFoundation(adapter) {
                var _this = _super.call(this, __assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
                _this.transitionEndHandler_ = function(evt) {
                    return _this.handleTransitionEnd(evt);
                };
                return _this;
            }
            Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
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
                        setStyle: function setStyle() {
                            return undefined;
                        },
                        registerEventHandler: function registerEventHandler() {
                            return undefined;
                        },
                        deregisterEventHandler: function deregisterEventHandler() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCLineRippleFoundation.prototype.init = function() {
                this.adapter_.registerEventHandler("transitionend", this.transitionEndHandler_);
            };
            MDCLineRippleFoundation.prototype.destroy = function() {
                this.adapter_.deregisterEventHandler("transitionend", this.transitionEndHandler_);
            };
            MDCLineRippleFoundation.prototype.activate = function() {
                this.adapter_.removeClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
                this.adapter_.addClass(constants_1.cssClasses.LINE_RIPPLE_ACTIVE);
            };
            MDCLineRippleFoundation.prototype.setRippleCenter = function(xCoordinate) {
                this.adapter_.setStyle("transform-origin", xCoordinate + "px center");
            };
            MDCLineRippleFoundation.prototype.deactivate = function() {
                this.adapter_.addClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
            };
            MDCLineRippleFoundation.prototype.handleTransitionEnd = function(evt) {
                var isDeactivating = this.adapter_.hasClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
                if (evt.propertyName === "opacity") {
                    if (isDeactivating) {
                        this.adapter_.removeClass(constants_1.cssClasses.LINE_RIPPLE_ACTIVE);
                        this.adapter_.removeClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
                    }
                }
            };
            return MDCLineRippleFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCLineRippleFoundation = MDCLineRippleFoundation;
        exports.default = MDCLineRippleFoundation;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var cachedCssTransformPropertyName_;
        function getTransformPropertyName(globalObj, forceRefresh) {
            if (forceRefresh === void 0) {
                forceRefresh = false;
            }
            if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
                var el = globalObj.document.createElement("div");
                cachedCssTransformPropertyName_ = "transform" in el.style ? "transform" : "webkitTransform";
            }
            return cachedCssTransformPropertyName_;
        }
        exports.getTransformPropertyName = getTransformPropertyName;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var cssClasses = {
            MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
            MENU_SELECTION_GROUP: "mdc-menu__selection-group",
            ROOT: "mdc-menu"
        };
        exports.cssClasses = cssClasses;
        var strings = {
            ARIA_SELECTED_ATTR: "aria-selected",
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            LIST_SELECTOR: ".mdc-list",
            SELECTED_EVENT: "MDCMenu:selected"
        };
        exports.strings = strings;
        var numbers = {
            FOCUS_ROOT_INDEX: -1
        };
        exports.numbers = numbers;
        var DefaultFocusState;
        (function(DefaultFocusState) {
            DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
            DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
            DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
            DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
        })(DefaultFocusState || (DefaultFocusState = {}));
        exports.DefaultFocusState = DefaultFocusState;
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(14);
        var MDCNotchedOutlineFoundation = function(_super) {
            __extends(MDCNotchedOutlineFoundation, _super);
            function MDCNotchedOutlineFoundation(adapter) {
                return _super.call(this, __assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
            }
            Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
                get: function get() {
                    return constants_1.numbers;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
                get: function get() {
                    return {
                        addClass: function addClass() {
                            return undefined;
                        },
                        removeClass: function removeClass() {
                            return undefined;
                        },
                        setNotchWidthProperty: function setNotchWidthProperty() {
                            return undefined;
                        },
                        removeNotchWidthProperty: function removeNotchWidthProperty() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCNotchedOutlineFoundation.prototype.notch = function(notchWidth) {
                var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                if (notchWidth > 0) {
                    notchWidth += constants_1.numbers.NOTCH_ELEMENT_PADDING;
                }
                this.adapter_.setNotchWidthProperty(notchWidth);
                this.adapter_.addClass(OUTLINE_NOTCHED);
            };
            MDCNotchedOutlineFoundation.prototype.closeNotch = function() {
                var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                this.adapter_.removeClass(OUTLINE_NOTCHED);
                this.adapter_.removeNotchWidthProperty();
            };
            return MDCNotchedOutlineFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCNotchedOutlineFoundation = MDCNotchedOutlineFoundation;
        exports.default = MDCNotchedOutlineFoundation;
    }, , , function(module, exports, __webpack_require__) {
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
        var foundation_1 = __webpack_require__(12);
        var MDCFloatingLabel = function(_super) {
            __extends(MDCFloatingLabel, _super);
            function MDCFloatingLabel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCFloatingLabel.attachTo = function(root) {
                return new MDCFloatingLabel(root);
            };
            MDCFloatingLabel.prototype.shake = function(shouldShake) {
                this.foundation_.shake(shouldShake);
            };
            MDCFloatingLabel.prototype.float = function(shouldFloat) {
                this.foundation_.float(shouldFloat);
            };
            MDCFloatingLabel.prototype.getWidth = function() {
                return this.foundation_.getWidth();
            };
            MDCFloatingLabel.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClass: function addClass(className) {
                        return _this.root_.classList.add(className);
                    },
                    removeClass: function removeClass(className) {
                        return _this.root_.classList.remove(className);
                    },
                    getWidth: function getWidth() {
                        return _this.root_.scrollWidth;
                    },
                    registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                        return _this.listen(evtType, handler);
                    },
                    deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                        return _this.unlisten(evtType, handler);
                    }
                };
                return new foundation_1.MDCFloatingLabelFoundation(adapter);
            };
            return MDCFloatingLabel;
        }(component_1.MDCComponent);
        exports.MDCFloatingLabel = MDCFloatingLabel;
    }, function(module, exports, __webpack_require__) {
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
        var foundation_1 = __webpack_require__(18);
        var MDCLineRipple = function(_super) {
            __extends(MDCLineRipple, _super);
            function MDCLineRipple() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCLineRipple.attachTo = function(root) {
                return new MDCLineRipple(root);
            };
            MDCLineRipple.prototype.activate = function() {
                this.foundation_.activate();
            };
            MDCLineRipple.prototype.deactivate = function() {
                this.foundation_.deactivate();
            };
            MDCLineRipple.prototype.setRippleCenter = function(xCoordinate) {
                this.foundation_.setRippleCenter(xCoordinate);
            };
            MDCLineRipple.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClass: function addClass(className) {
                        return _this.root_.classList.add(className);
                    },
                    removeClass: function removeClass(className) {
                        return _this.root_.classList.remove(className);
                    },
                    hasClass: function hasClass(className) {
                        return _this.root_.classList.contains(className);
                    },
                    setStyle: function setStyle(propertyName, value) {
                        return _this.root_.style.setProperty(propertyName, value);
                    },
                    registerEventHandler: function registerEventHandler(evtType, handler) {
                        return _this.listen(evtType, handler);
                    },
                    deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                        return _this.unlisten(evtType, handler);
                    }
                };
                return new foundation_1.MDCLineRippleFoundation(adapter);
            };
            return MDCLineRipple;
        }(component_1.MDCComponent);
        exports.MDCLineRipple = MDCLineRipple;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var cssClasses = {
            LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
            LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
        };
        exports.cssClasses = cssClasses;
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(11);
        var foundation_1 = __webpack_require__(13);
        var util = __importStar(__webpack_require__(19));
        var MDCMenuSurface = function(_super) {
            __extends(MDCMenuSurface, _super);
            function MDCMenuSurface() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCMenuSurface.attachTo = function(root) {
                return new MDCMenuSurface(root);
            };
            MDCMenuSurface.prototype.initialSyncWithDOM = function() {
                var _this = this;
                var parentEl = this.root_.parentElement;
                this.anchorElement = parentEl && parentEl.classList.contains(constants_1.cssClasses.ANCHOR) ? parentEl : null;
                if (this.root_.classList.contains(constants_1.cssClasses.FIXED)) {
                    this.setFixedPosition(true);
                }
                this.handleKeydown_ = function(evt) {
                    return _this.foundation_.handleKeydown(evt);
                };
                this.handleBodyClick_ = function(evt) {
                    return _this.foundation_.handleBodyClick(evt);
                };
                this.registerBodyClickListener_ = function() {
                    return document.body.addEventListener("click", _this.handleBodyClick_);
                };
                this.deregisterBodyClickListener_ = function() {
                    return document.body.removeEventListener("click", _this.handleBodyClick_);
                };
                this.listen("keydown", this.handleKeydown_);
                this.listen(constants_1.strings.OPENED_EVENT, this.registerBodyClickListener_);
                this.listen(constants_1.strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
            };
            MDCMenuSurface.prototype.destroy = function() {
                this.unlisten("keydown", this.handleKeydown_);
                this.unlisten(constants_1.strings.OPENED_EVENT, this.registerBodyClickListener_);
                this.unlisten(constants_1.strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
                _super.prototype.destroy.call(this);
            };
            Object.defineProperty(MDCMenuSurface.prototype, "open", {
                get: function get() {
                    return this.foundation_.isOpen();
                },
                set: function set(value) {
                    if (value) {
                        var focusableElements = this.root_.querySelectorAll(constants_1.strings.FOCUSABLE_ELEMENTS);
                        this.firstFocusableElement_ = focusableElements[0];
                        this.lastFocusableElement_ = focusableElements[focusableElements.length - 1];
                        this.foundation_.open();
                    } else {
                        this.foundation_.close();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
                set: function set(quickOpen) {
                    this.foundation_.setQuickOpen(quickOpen);
                },
                enumerable: true,
                configurable: true
            });
            MDCMenuSurface.prototype.hoistMenuToBody = function() {
                document.body.appendChild(this.root_);
                this.setIsHoisted(true);
            };
            MDCMenuSurface.prototype.setIsHoisted = function(isHoisted) {
                this.foundation_.setIsHoisted(isHoisted);
            };
            MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function(element) {
                this.anchorElement = element;
            };
            MDCMenuSurface.prototype.setFixedPosition = function(isFixed) {
                if (isFixed) {
                    this.root_.classList.add(constants_1.cssClasses.FIXED);
                } else {
                    this.root_.classList.remove(constants_1.cssClasses.FIXED);
                }
                this.foundation_.setFixedPosition(isFixed);
            };
            MDCMenuSurface.prototype.setAbsolutePosition = function(x, y) {
                this.foundation_.setAbsolutePosition(x, y);
                this.setIsHoisted(true);
            };
            MDCMenuSurface.prototype.setAnchorCorner = function(corner) {
                this.foundation_.setAnchorCorner(corner);
            };
            MDCMenuSurface.prototype.setAnchorMargin = function(margin) {
                this.foundation_.setAnchorMargin(margin);
            };
            MDCMenuSurface.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClass: function addClass(className) {
                        return _this.root_.classList.add(className);
                    },
                    removeClass: function removeClass(className) {
                        return _this.root_.classList.remove(className);
                    },
                    hasClass: function hasClass(className) {
                        return _this.root_.classList.contains(className);
                    },
                    hasAnchor: function hasAnchor() {
                        return !!_this.anchorElement;
                    },
                    notifyClose: function notifyClose() {
                        return _this.emit(foundation_1.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
                    },
                    notifyOpen: function notifyOpen() {
                        return _this.emit(foundation_1.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
                    },
                    isElementInContainer: function isElementInContainer(el) {
                        return _this.root_.contains(el);
                    },
                    isRtl: function isRtl() {
                        return getComputedStyle(_this.root_).getPropertyValue("direction") === "rtl";
                    },
                    setTransformOrigin: function setTransformOrigin(origin) {
                        var propertyName = util.getTransformPropertyName(window) + "-origin";
                        _this.root_.style.setProperty(propertyName, origin);
                    },
                    isFocused: function isFocused() {
                        return document.activeElement === _this.root_;
                    },
                    saveFocus: function saveFocus() {
                        _this.previousFocus_ = document.activeElement;
                    },
                    restoreFocus: function restoreFocus() {
                        if (_this.root_.contains(document.activeElement)) {
                            if (_this.previousFocus_ && _this.previousFocus_.focus) {
                                _this.previousFocus_.focus();
                            }
                        }
                    },
                    isFirstElementFocused: function isFirstElementFocused() {
                        return _this.firstFocusableElement_ ? _this.firstFocusableElement_ === document.activeElement : false;
                    },
                    isLastElementFocused: function isLastElementFocused() {
                        return _this.lastFocusableElement_ ? _this.lastFocusableElement_ === document.activeElement : false;
                    },
                    focusFirstElement: function focusFirstElement() {
                        return _this.firstFocusableElement_ && _this.firstFocusableElement_.focus && _this.firstFocusableElement_.focus();
                    },
                    focusLastElement: function focusLastElement() {
                        return _this.lastFocusableElement_ && _this.lastFocusableElement_.focus && _this.lastFocusableElement_.focus();
                    },
                    getInnerDimensions: function getInnerDimensions() {
                        return {
                            width: _this.root_.offsetWidth,
                            height: _this.root_.offsetHeight
                        };
                    },
                    getAnchorDimensions: function getAnchorDimensions() {
                        return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
                    },
                    getWindowDimensions: function getWindowDimensions() {
                        return {
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                    },
                    getBodyDimensions: function getBodyDimensions() {
                        return {
                            width: document.body.clientWidth,
                            height: document.body.clientHeight
                        };
                    },
                    getWindowScroll: function getWindowScroll() {
                        return {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        };
                    },
                    setPosition: function setPosition(position) {
                        _this.root_.style.left = "left" in position ? position.left + "px" : "";
                        _this.root_.style.right = "right" in position ? position.right + "px" : "";
                        _this.root_.style.top = "top" in position ? position.top + "px" : "";
                        _this.root_.style.bottom = "bottom" in position ? position.bottom + "px" : "";
                    },
                    setMaxHeight: function setMaxHeight(height) {
                        _this.root_.style.maxHeight = height;
                    }
                };
                return new foundation_1.MDCMenuSurfaceFoundation(adapter);
            };
            return MDCMenuSurface;
        }(component_1.MDCComponent);
        exports.MDCMenuSurface = MDCMenuSurface;
    }, function(module, exports, __webpack_require__) {
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
        var foundation_1 = __webpack_require__(12);
        var constants_1 = __webpack_require__(14);
        var foundation_2 = __webpack_require__(21);
        var MDCNotchedOutline = function(_super) {
            __extends(MDCNotchedOutline, _super);
            function MDCNotchedOutline() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCNotchedOutline.attachTo = function(root) {
                return new MDCNotchedOutline(root);
            };
            MDCNotchedOutline.prototype.initialSyncWithDOM = function() {
                this.notchElement_ = this.root_.querySelector(constants_1.strings.NOTCH_ELEMENT_SELECTOR);
                var label = this.root_.querySelector("." + foundation_1.MDCFloatingLabelFoundation.cssClasses.ROOT);
                if (label) {
                    label.style.transitionDuration = "0s";
                    this.root_.classList.add(constants_1.cssClasses.OUTLINE_UPGRADED);
                    requestAnimationFrame(function() {
                        label.style.transitionDuration = "";
                    });
                } else {
                    this.root_.classList.add(constants_1.cssClasses.NO_LABEL);
                }
            };
            MDCNotchedOutline.prototype.notch = function(notchWidth) {
                this.foundation_.notch(notchWidth);
            };
            MDCNotchedOutline.prototype.closeNotch = function() {
                this.foundation_.closeNotch();
            };
            MDCNotchedOutline.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClass: function addClass(className) {
                        return _this.root_.classList.add(className);
                    },
                    removeClass: function removeClass(className) {
                        return _this.root_.classList.remove(className);
                    },
                    setNotchWidthProperty: function setNotchWidthProperty(width) {
                        return _this.notchElement_.style.setProperty("width", width + "px");
                    },
                    removeNotchWidthProperty: function removeNotchWidthProperty() {
                        return _this.notchElement_.style.removeProperty("width");
                    }
                };
                return new foundation_2.MDCNotchedOutlineFoundation(adapter);
            };
            return MDCNotchedOutline;
        }(component_1.MDCComponent);
        exports.MDCNotchedOutline = MDCNotchedOutline;
    }, , , , , , function(module, exports, __webpack_require__) {
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
        var foundation_2 = __webpack_require__(7);
        var foundation_3 = __webpack_require__(13);
        var constants_1 = __webpack_require__(20);
        var MDCMenuFoundation = function(_super) {
            __extends(MDCMenuFoundation, _super);
            function MDCMenuFoundation(adapter) {
                var _this = _super.call(this, __assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
                _this.closeAnimationEndTimerId_ = 0;
                _this.defaultFocusState_ = constants_1.DefaultFocusState.LIST_ROOT;
                return _this;
            }
            Object.defineProperty(MDCMenuFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuFoundation, "numbers", {
                get: function get() {
                    return constants_1.numbers;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
                get: function get() {
                    return {
                        addClassToElementAtIndex: function addClassToElementAtIndex() {
                            return undefined;
                        },
                        removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
                            return undefined;
                        },
                        addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
                            return undefined;
                        },
                        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
                            return undefined;
                        },
                        elementContainsClass: function elementContainsClass() {
                            return false;
                        },
                        closeSurface: function closeSurface() {
                            return undefined;
                        },
                        getElementIndex: function getElementIndex() {
                            return -1;
                        },
                        getParentElement: function getParentElement() {
                            return null;
                        },
                        getSelectedElementIndex: function getSelectedElementIndex() {
                            return -1;
                        },
                        notifySelected: function notifySelected() {
                            return undefined;
                        },
                        getMenuItemCount: function getMenuItemCount() {
                            return 0;
                        },
                        focusItemAtIndex: function focusItemAtIndex() {
                            return undefined;
                        },
                        focusListRoot: function focusListRoot() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCMenuFoundation.prototype.destroy = function() {
                if (this.closeAnimationEndTimerId_) {
                    clearTimeout(this.closeAnimationEndTimerId_);
                }
                this.adapter_.closeSurface();
            };
            MDCMenuFoundation.prototype.handleKeydown = function(evt) {
                var key = evt.key, keyCode = evt.keyCode;
                var isTab = key === "Tab" || keyCode === 9;
                if (isTab) {
                    this.adapter_.closeSurface();
                }
            };
            MDCMenuFoundation.prototype.handleItemAction = function(listItem) {
                var _this = this;
                var index = this.adapter_.getElementIndex(listItem);
                if (index < 0) {
                    return;
                }
                this.adapter_.notifySelected({
                    index: index
                });
                this.adapter_.closeSurface();
                this.closeAnimationEndTimerId_ = setTimeout(function() {
                    var selectionGroup = _this.getSelectionGroup_(listItem);
                    if (selectionGroup) {
                        _this.handleSelectionGroup_(selectionGroup, index);
                    }
                }, foundation_3.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
            };
            MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function() {
                switch (this.defaultFocusState_) {
                  case constants_1.DefaultFocusState.FIRST_ITEM:
                    this.adapter_.focusItemAtIndex(0);
                    break;

                  case constants_1.DefaultFocusState.LAST_ITEM:
                    this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
                    break;

                  case constants_1.DefaultFocusState.NONE:
                    break;

                  default:
                    this.adapter_.focusListRoot();
                    break;
                }
            };
            MDCMenuFoundation.prototype.setDefaultFocusState = function(focusState) {
                this.defaultFocusState_ = focusState;
            };
            MDCMenuFoundation.prototype.handleSelectionGroup_ = function(selectionGroup, index) {
                var selectedIndex = this.adapter_.getSelectedElementIndex(selectionGroup);
                if (selectedIndex >= 0) {
                    this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, constants_1.strings.ARIA_SELECTED_ATTR);
                    this.adapter_.removeClassFromElementAtIndex(selectedIndex, constants_1.cssClasses.MENU_SELECTED_LIST_ITEM);
                }
                this.adapter_.addClassToElementAtIndex(index, constants_1.cssClasses.MENU_SELECTED_LIST_ITEM);
                this.adapter_.addAttributeToElementAtIndex(index, constants_1.strings.ARIA_SELECTED_ATTR, "true");
            };
            MDCMenuFoundation.prototype.getSelectionGroup_ = function(listItem) {
                var parent = this.adapter_.getParentElement(listItem);
                if (!parent) {
                    return null;
                }
                var isGroup = this.adapter_.elementContainsClass(parent, constants_1.cssClasses.MENU_SELECTION_GROUP);
                while (!isGroup && parent && !this.adapter_.elementContainsClass(parent, foundation_2.MDCListFoundation.cssClasses.ROOT)) {
                    parent = this.adapter_.getParentElement(parent);
                    isGroup = parent ? this.adapter_.elementContainsClass(parent, constants_1.cssClasses.MENU_SELECTION_GROUP) : false;
                }
                if (isGroup) {
                    return parent;
                } else {
                    return null;
                }
            };
            return MDCMenuFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCMenuFoundation = MDCMenuFoundation;
        exports.default = MDCMenuFoundation;
    }, , , , , function(module, exports, __webpack_require__) {
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
        var component_2 = __webpack_require__(15);
        var foundation_1 = __webpack_require__(7);
        var component_3 = __webpack_require__(27);
        var foundation_2 = __webpack_require__(13);
        var constants_1 = __webpack_require__(20);
        var foundation_3 = __webpack_require__(34);
        var MDCMenu = function(_super) {
            __extends(MDCMenu, _super);
            function MDCMenu() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCMenu.attachTo = function(root) {
                return new MDCMenu(root);
            };
            MDCMenu.prototype.initialize = function(menuSurfaceFactory, listFactory) {
                if (menuSurfaceFactory === void 0) {
                    menuSurfaceFactory = function menuSurfaceFactory(el) {
                        return new component_3.MDCMenuSurface(el);
                    };
                }
                if (listFactory === void 0) {
                    listFactory = function listFactory(el) {
                        return new component_2.MDCList(el);
                    };
                }
                this.menuSurfaceFactory_ = menuSurfaceFactory;
                this.listFactory_ = listFactory;
            };
            MDCMenu.prototype.initialSyncWithDOM = function() {
                var _this = this;
                this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
                var list = this.root_.querySelector(constants_1.strings.LIST_SELECTOR);
                if (list) {
                    this.list_ = this.listFactory_(list);
                    this.list_.wrapFocus = true;
                } else {
                    this.list_ = null;
                }
                this.handleKeydown_ = function(evt) {
                    return _this.foundation_.handleKeydown(evt);
                };
                this.handleItemAction_ = function(evt) {
                    return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
                };
                this.handleMenuSurfaceOpened_ = function() {
                    return _this.foundation_.handleMenuSurfaceOpened();
                };
                this.menuSurface_.listen(foundation_2.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
                this.listen("keydown", this.handleKeydown_);
                this.listen(foundation_1.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
            };
            MDCMenu.prototype.destroy = function() {
                if (this.list_) {
                    this.list_.destroy();
                }
                this.menuSurface_.destroy();
                this.menuSurface_.unlisten(foundation_2.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
                this.unlisten("keydown", this.handleKeydown_);
                this.unlisten(foundation_1.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
                _super.prototype.destroy.call(this);
            };
            Object.defineProperty(MDCMenu.prototype, "open", {
                get: function get() {
                    return this.menuSurface_.open;
                },
                set: function set(value) {
                    this.menuSurface_.open = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
                get: function get() {
                    return this.list_ ? this.list_.wrapFocus : false;
                },
                set: function set(value) {
                    if (this.list_) {
                        this.list_.wrapFocus = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenu.prototype, "items", {
                get: function get() {
                    return this.list_ ? this.list_.listElements : [];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCMenu.prototype, "quickOpen", {
                set: function set(quickOpen) {
                    this.menuSurface_.quickOpen = quickOpen;
                },
                enumerable: true,
                configurable: true
            });
            MDCMenu.prototype.setDefaultFocusState = function(focusState) {
                this.foundation_.setDefaultFocusState(focusState);
            };
            MDCMenu.prototype.setAnchorCorner = function(corner) {
                this.menuSurface_.setAnchorCorner(corner);
            };
            MDCMenu.prototype.setAnchorMargin = function(margin) {
                this.menuSurface_.setAnchorMargin(margin);
            };
            MDCMenu.prototype.getOptionByIndex = function(index) {
                var items = this.items;
                if (index < items.length) {
                    return this.items[index];
                } else {
                    return null;
                }
            };
            MDCMenu.prototype.setFixedPosition = function(isFixed) {
                this.menuSurface_.setFixedPosition(isFixed);
            };
            MDCMenu.prototype.hoistMenuToBody = function() {
                this.menuSurface_.hoistMenuToBody();
            };
            MDCMenu.prototype.setIsHoisted = function(isHoisted) {
                this.menuSurface_.setIsHoisted(isHoisted);
            };
            MDCMenu.prototype.setAbsolutePosition = function(x, y) {
                this.menuSurface_.setAbsolutePosition(x, y);
            };
            MDCMenu.prototype.setAnchorElement = function(element) {
                this.menuSurface_.anchorElement = element;
            };
            MDCMenu.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
                        var list = _this.items;
                        list[index].classList.add(className);
                    },
                    removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
                        var list = _this.items;
                        list[index].classList.remove(className);
                    },
                    addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
                        var list = _this.items;
                        list[index].setAttribute(attr, value);
                    },
                    removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
                        var list = _this.items;
                        list[index].removeAttribute(attr);
                    },
                    elementContainsClass: function elementContainsClass(element, className) {
                        return element.classList.contains(className);
                    },
                    closeSurface: function closeSurface() {
                        return _this.open = false;
                    },
                    getElementIndex: function getElementIndex(element) {
                        return _this.items.indexOf(element);
                    },
                    getParentElement: function getParentElement(element) {
                        return element.parentElement;
                    },
                    getSelectedElementIndex: function getSelectedElementIndex(selectionGroup) {
                        var selectedListItem = selectionGroup.querySelector("." + constants_1.cssClasses.MENU_SELECTED_LIST_ITEM);
                        return selectedListItem ? _this.items.indexOf(selectedListItem) : -1;
                    },
                    notifySelected: function notifySelected(evtData) {
                        return _this.emit(constants_1.strings.SELECTED_EVENT, {
                            index: evtData.index,
                            item: _this.items[evtData.index]
                        });
                    },
                    getMenuItemCount: function getMenuItemCount() {
                        return _this.items.length;
                    },
                    focusItemAtIndex: function focusItemAtIndex(index) {
                        return _this.items[index].focus();
                    },
                    focusListRoot: function focusListRoot() {
                        return _this.root_.querySelector(constants_1.strings.LIST_SELECTOR).focus();
                    }
                };
                return new foundation_3.MDCMenuFoundation(adapter);
            };
            return MDCMenu;
        }(component_1.MDCComponent);
        exports.MDCMenu = MDCMenu;
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var cssClasses = {
            DISABLED: "mdc-select--disabled",
            FOCUSED: "mdc-select--focused",
            INVALID: "mdc-select--invalid",
            OUTLINED: "mdc-select--outlined",
            REQUIRED: "mdc-select--required",
            ROOT: "mdc-select",
            SELECTED_ITEM_CLASS: "mdc-list-item--selected",
            WITH_LEADING_ICON: "mdc-select--with-leading-icon"
        };
        exports.cssClasses = cssClasses;
        var strings = {
            ARIA_CONTROLS: "aria-controls",
            ARIA_SELECTED_ATTR: "aria-selected",
            CHANGE_EVENT: "MDCSelect:change",
            ENHANCED_VALUE_ATTR: "data-value",
            HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
            LABEL_SELECTOR: ".mdc-floating-label",
            LEADING_ICON_SELECTOR: ".mdc-select__icon",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            MENU_SELECTOR: ".mdc-select__menu",
            NATIVE_CONTROL_SELECTOR: ".mdc-select__native-control",
            OUTLINE_SELECTOR: ".mdc-notched-outline",
            SELECTED_ITEM_SELECTOR: "." + cssClasses.SELECTED_ITEM_CLASS,
            SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text"
        };
        exports.strings = strings;
        var numbers = {
            LABEL_SCALE: .75
        };
        exports.numbers = numbers;
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(66);
        var MDCSelectFoundation = function(_super) {
            __extends(MDCSelectFoundation, _super);
            function MDCSelectFoundation(adapter, foundationMap) {
                if (foundationMap === void 0) {
                    foundationMap = {};
                }
                var _this = _super.call(this, __assign({}, MDCSelectFoundation.defaultAdapter, adapter)) || this;
                _this.leadingIcon_ = foundationMap.leadingIcon;
                _this.helperText_ = foundationMap.helperText;
                return _this;
            }
            Object.defineProperty(MDCSelectFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelectFoundation, "numbers", {
                get: function get() {
                    return constants_1.numbers;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelectFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
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
                        activateBottomLine: function activateBottomLine() {
                            return undefined;
                        },
                        deactivateBottomLine: function deactivateBottomLine() {
                            return undefined;
                        },
                        setValue: function setValue() {
                            return undefined;
                        },
                        getValue: function getValue() {
                            return "";
                        },
                        floatLabel: function floatLabel() {
                            return undefined;
                        },
                        getLabelWidth: function getLabelWidth() {
                            return 0;
                        },
                        hasOutline: function hasOutline() {
                            return false;
                        },
                        notchOutline: function notchOutline() {
                            return undefined;
                        },
                        closeOutline: function closeOutline() {
                            return undefined;
                        },
                        openMenu: function openMenu() {
                            return undefined;
                        },
                        closeMenu: function closeMenu() {
                            return undefined;
                        },
                        isMenuOpen: function isMenuOpen() {
                            return false;
                        },
                        setSelectedIndex: function setSelectedIndex() {
                            return undefined;
                        },
                        setDisabled: function setDisabled() {
                            return undefined;
                        },
                        setRippleCenter: function setRippleCenter() {
                            return undefined;
                        },
                        notifyChange: function notifyChange() {
                            return undefined;
                        },
                        checkValidity: function checkValidity() {
                            return false;
                        },
                        setValid: function setValid() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCSelectFoundation.prototype.setSelectedIndex = function(index) {
                this.adapter_.setSelectedIndex(index);
                this.adapter_.closeMenu();
                var didChange = true;
                this.handleChange(didChange);
            };
            MDCSelectFoundation.prototype.setValue = function(value) {
                this.adapter_.setValue(value);
                var didChange = true;
                this.handleChange(didChange);
            };
            MDCSelectFoundation.prototype.getValue = function() {
                return this.adapter_.getValue();
            };
            MDCSelectFoundation.prototype.setDisabled = function(isDisabled) {
                if (isDisabled) {
                    this.adapter_.addClass(constants_1.cssClasses.DISABLED);
                } else {
                    this.adapter_.removeClass(constants_1.cssClasses.DISABLED);
                }
                this.adapter_.setDisabled(isDisabled);
                this.adapter_.closeMenu();
                if (this.leadingIcon_) {
                    this.leadingIcon_.setDisabled(isDisabled);
                }
            };
            MDCSelectFoundation.prototype.setHelperTextContent = function(content) {
                if (this.helperText_) {
                    this.helperText_.setContent(content);
                }
            };
            MDCSelectFoundation.prototype.layout = function() {
                var openNotch = this.getValue().length > 0;
                this.notchOutline(openNotch);
            };
            MDCSelectFoundation.prototype.handleChange = function(didChange) {
                if (didChange === void 0) {
                    didChange = true;
                }
                var value = this.getValue();
                var optionHasValue = value.length > 0;
                var isRequired = this.adapter_.hasClass(constants_1.cssClasses.REQUIRED);
                this.notchOutline(optionHasValue);
                if (!this.adapter_.hasClass(constants_1.cssClasses.FOCUSED)) {
                    this.adapter_.floatLabel(optionHasValue);
                }
                if (didChange) {
                    this.adapter_.notifyChange(value);
                    if (isRequired) {
                        this.setValid(this.isValid());
                        if (this.helperText_) {
                            this.helperText_.setValidity(this.isValid());
                        }
                    }
                }
            };
            MDCSelectFoundation.prototype.handleFocus = function() {
                this.adapter_.addClass(constants_1.cssClasses.FOCUSED);
                this.adapter_.floatLabel(true);
                this.notchOutline(true);
                this.adapter_.activateBottomLine();
                if (this.helperText_) {
                    this.helperText_.showToScreenReader();
                }
            };
            MDCSelectFoundation.prototype.handleBlur = function() {
                if (this.adapter_.isMenuOpen()) {
                    return;
                }
                this.adapter_.removeClass(constants_1.cssClasses.FOCUSED);
                this.handleChange(false);
                this.adapter_.deactivateBottomLine();
                var isRequired = this.adapter_.hasClass(constants_1.cssClasses.REQUIRED);
                if (isRequired) {
                    this.setValid(this.isValid());
                    if (this.helperText_) {
                        this.helperText_.setValidity(this.isValid());
                    }
                }
            };
            MDCSelectFoundation.prototype.handleClick = function(normalizedX) {
                if (this.adapter_.isMenuOpen()) {
                    return;
                }
                this.adapter_.setRippleCenter(normalizedX);
                this.adapter_.openMenu();
            };
            MDCSelectFoundation.prototype.handleKeydown = function(event) {
                if (this.adapter_.isMenuOpen()) {
                    return;
                }
                var isEnter = event.key === "Enter" || event.keyCode === 13;
                var isSpace = event.key === "Space" || event.keyCode === 32;
                var arrowUp = event.key === "ArrowUp" || event.keyCode === 38;
                var arrowDown = event.key === "ArrowDown" || event.keyCode === 40;
                if (this.adapter_.hasClass(constants_1.cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
                    this.adapter_.openMenu();
                    event.preventDefault();
                }
            };
            MDCSelectFoundation.prototype.notchOutline = function(openNotch) {
                if (!this.adapter_.hasOutline()) {
                    return;
                }
                var isFocused = this.adapter_.hasClass(constants_1.cssClasses.FOCUSED);
                if (openNotch) {
                    var labelScale = constants_1.numbers.LABEL_SCALE;
                    var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                    this.adapter_.notchOutline(labelWidth);
                } else if (!isFocused) {
                    this.adapter_.closeOutline();
                }
            };
            MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function(label) {
                if (this.leadingIcon_) {
                    this.leadingIcon_.setAriaLabel(label);
                }
            };
            MDCSelectFoundation.prototype.setLeadingIconContent = function(content) {
                if (this.leadingIcon_) {
                    this.leadingIcon_.setContent(content);
                }
            };
            MDCSelectFoundation.prototype.setValid = function(isValid) {
                this.adapter_.setValid(isValid);
            };
            MDCSelectFoundation.prototype.isValid = function() {
                return this.adapter_.checkValidity();
            };
            return MDCSelectFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCSelectFoundation = MDCSelectFoundation;
        exports.default = MDCSelectFoundation;
    }, function(module, exports, __webpack_require__) {
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
        var foundation_1 = __webpack_require__(69);
        var MDCSelectHelperText = function(_super) {
            __extends(MDCSelectHelperText, _super);
            function MDCSelectHelperText() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCSelectHelperText.attachTo = function(root) {
                return new MDCSelectHelperText(root);
            };
            Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
                get: function get() {
                    return this.foundation_;
                },
                enumerable: true,
                configurable: true
            });
            MDCSelectHelperText.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    addClass: function addClass(className) {
                        return _this.root_.classList.add(className);
                    },
                    removeClass: function removeClass(className) {
                        return _this.root_.classList.remove(className);
                    },
                    hasClass: function hasClass(className) {
                        return _this.root_.classList.contains(className);
                    },
                    setAttr: function setAttr(attr, value) {
                        return _this.root_.setAttribute(attr, value);
                    },
                    removeAttr: function removeAttr(attr) {
                        return _this.root_.removeAttribute(attr);
                    },
                    setContent: function setContent(content) {
                        _this.root_.textContent = content;
                    }
                };
                return new foundation_1.MDCSelectHelperTextFoundation(adapter);
            };
            return MDCSelectHelperText;
        }(component_1.MDCComponent);
        exports.MDCSelectHelperText = MDCSelectHelperText;
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(139);
        var MDCSelectHelperTextFoundation = function(_super) {
            __extends(MDCSelectHelperTextFoundation, _super);
            function MDCSelectHelperTextFoundation(adapter) {
                return _super.call(this, __assign({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
            }
            Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
                get: function get() {
                    return constants_1.cssClasses;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
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
                        removeAttr: function removeAttr() {
                            return undefined;
                        },
                        setContent: function setContent() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCSelectHelperTextFoundation.prototype.setContent = function(content) {
                this.adapter_.setContent(content);
            };
            MDCSelectHelperTextFoundation.prototype.setPersistent = function(isPersistent) {
                if (isPersistent) {
                    this.adapter_.addClass(constants_1.cssClasses.HELPER_TEXT_PERSISTENT);
                } else {
                    this.adapter_.removeClass(constants_1.cssClasses.HELPER_TEXT_PERSISTENT);
                }
            };
            MDCSelectHelperTextFoundation.prototype.setValidation = function(isValidation) {
                if (isValidation) {
                    this.adapter_.addClass(constants_1.cssClasses.HELPER_TEXT_VALIDATION_MSG);
                } else {
                    this.adapter_.removeClass(constants_1.cssClasses.HELPER_TEXT_VALIDATION_MSG);
                }
            };
            MDCSelectHelperTextFoundation.prototype.showToScreenReader = function() {
                this.adapter_.removeAttr(constants_1.strings.ARIA_HIDDEN);
            };
            MDCSelectHelperTextFoundation.prototype.setValidity = function(selectIsValid) {
                var helperTextIsPersistent = this.adapter_.hasClass(constants_1.cssClasses.HELPER_TEXT_PERSISTENT);
                var helperTextIsValidationMsg = this.adapter_.hasClass(constants_1.cssClasses.HELPER_TEXT_VALIDATION_MSG);
                var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;
                if (validationMsgNeedsDisplay) {
                    this.adapter_.setAttr(constants_1.strings.ROLE, "alert");
                } else {
                    this.adapter_.removeAttr(constants_1.strings.ROLE);
                }
                if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
                    this.hide_();
                }
            };
            MDCSelectHelperTextFoundation.prototype.hide_ = function() {
                this.adapter_.setAttr(constants_1.strings.ARIA_HIDDEN, "true");
            };
            return MDCSelectHelperTextFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCSelectHelperTextFoundation = MDCSelectHelperTextFoundation;
        exports.default = MDCSelectHelperTextFoundation;
    }, function(module, exports, __webpack_require__) {
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
        var foundation_1 = __webpack_require__(71);
        var MDCSelectIcon = function(_super) {
            __extends(MDCSelectIcon, _super);
            function MDCSelectIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCSelectIcon.attachTo = function(root) {
                return new MDCSelectIcon(root);
            };
            Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
                get: function get() {
                    return this.foundation_;
                },
                enumerable: true,
                configurable: true
            });
            MDCSelectIcon.prototype.getDefaultFoundation = function() {
                var _this = this;
                var adapter = {
                    getAttr: function getAttr(attr) {
                        return _this.root_.getAttribute(attr);
                    },
                    setAttr: function setAttr(attr, value) {
                        return _this.root_.setAttribute(attr, value);
                    },
                    removeAttr: function removeAttr(attr) {
                        return _this.root_.removeAttribute(attr);
                    },
                    setContent: function setContent(content) {
                        _this.root_.textContent = content;
                    },
                    registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                        return _this.listen(evtType, handler);
                    },
                    deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                        return _this.unlisten(evtType, handler);
                    },
                    notifyIconAction: function notifyIconAction() {
                        return _this.emit(foundation_1.MDCSelectIconFoundation.strings.ICON_EVENT, {}, true);
                    }
                };
                return new foundation_1.MDCSelectIconFoundation(adapter);
            };
            return MDCSelectIcon;
        }(component_1.MDCComponent);
        exports.MDCSelectIcon = MDCSelectIcon;
    }, function(module, exports, __webpack_require__) {
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
        var constants_1 = __webpack_require__(140);
        var INTERACTION_EVENTS = [ "click", "keydown" ];
        var MDCSelectIconFoundation = function(_super) {
            __extends(MDCSelectIconFoundation, _super);
            function MDCSelectIconFoundation(adapter) {
                var _this = _super.call(this, __assign({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;
                _this.savedTabIndex_ = null;
                _this.interactionHandler_ = function(evt) {
                    return _this.handleInteraction(evt);
                };
                return _this;
            }
            Object.defineProperty(MDCSelectIconFoundation, "strings", {
                get: function get() {
                    return constants_1.strings;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
                get: function get() {
                    return {
                        getAttr: function getAttr() {
                            return null;
                        },
                        setAttr: function setAttr() {
                            return undefined;
                        },
                        removeAttr: function removeAttr() {
                            return undefined;
                        },
                        setContent: function setContent() {
                            return undefined;
                        },
                        registerInteractionHandler: function registerInteractionHandler() {
                            return undefined;
                        },
                        deregisterInteractionHandler: function deregisterInteractionHandler() {
                            return undefined;
                        },
                        notifyIconAction: function notifyIconAction() {
                            return undefined;
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
            MDCSelectIconFoundation.prototype.init = function() {
                var _this = this;
                this.savedTabIndex_ = this.adapter_.getAttr("tabindex");
                INTERACTION_EVENTS.forEach(function(evtType) {
                    _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
                });
            };
            MDCSelectIconFoundation.prototype.destroy = function() {
                var _this = this;
                INTERACTION_EVENTS.forEach(function(evtType) {
                    _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
                });
            };
            MDCSelectIconFoundation.prototype.setDisabled = function(disabled) {
                if (!this.savedTabIndex_) {
                    return;
                }
                if (disabled) {
                    this.adapter_.setAttr("tabindex", "-1");
                    this.adapter_.removeAttr("role");
                } else {
                    this.adapter_.setAttr("tabindex", this.savedTabIndex_);
                    this.adapter_.setAttr("role", constants_1.strings.ICON_ROLE);
                }
            };
            MDCSelectIconFoundation.prototype.setAriaLabel = function(label) {
                this.adapter_.setAttr("aria-label", label);
            };
            MDCSelectIconFoundation.prototype.setContent = function(content) {
                this.adapter_.setContent(content);
            };
            MDCSelectIconFoundation.prototype.handleInteraction = function(evt) {
                var isEnterKey = evt.key === "Enter" || evt.keyCode === 13;
                if (evt.type === "click" || isEnterKey) {
                    this.adapter_.notifyIconAction();
                }
            };
            return MDCSelectIconFoundation;
        }(foundation_1.MDCFoundation);
        exports.MDCSelectIconFoundation = MDCSelectIconFoundation;
        exports.default = MDCSelectIconFoundation;
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
        "use strict";
        function __export(m) {
            for (var p in m) {
                if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        __export(__webpack_require__(138));
        __export(__webpack_require__(67));
        __export(__webpack_require__(141));
        __export(__webpack_require__(142));
    }, function(module, exports, __webpack_require__) {
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
        var component_2 = __webpack_require__(24);
        var component_3 = __webpack_require__(25);
        var menuSurfaceConstants = __importStar(__webpack_require__(11));
        var component_4 = __webpack_require__(39);
        var menuConstants = __importStar(__webpack_require__(20));
        var component_5 = __webpack_require__(28);
        var component_6 = __webpack_require__(5);
        var foundation_1 = __webpack_require__(4);
        var constants_1 = __webpack_require__(66);
        var foundation_2 = __webpack_require__(67);
        var component_7 = __webpack_require__(68);
        var component_8 = __webpack_require__(70);
        var VALIDATION_ATTR_WHITELIST = [ "required", "aria-required" ];
        var MDCSelect = function(_super) {
            __extends(MDCSelect, _super);
            function MDCSelect() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MDCSelect.attachTo = function(root) {
                return new MDCSelect(root);
            };
            MDCSelect.prototype.initialize = function(labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
                if (labelFactory === void 0) {
                    labelFactory = function labelFactory(el) {
                        return new component_2.MDCFloatingLabel(el);
                    };
                }
                if (lineRippleFactory === void 0) {
                    lineRippleFactory = function lineRippleFactory(el) {
                        return new component_3.MDCLineRipple(el);
                    };
                }
                if (outlineFactory === void 0) {
                    outlineFactory = function outlineFactory(el) {
                        return new component_5.MDCNotchedOutline(el);
                    };
                }
                if (menuFactory === void 0) {
                    menuFactory = function menuFactory(el) {
                        return new component_4.MDCMenu(el);
                    };
                }
                if (iconFactory === void 0) {
                    iconFactory = function iconFactory(el) {
                        return new component_8.MDCSelectIcon(el);
                    };
                }
                if (helperTextFactory === void 0) {
                    helperTextFactory = function helperTextFactory(el) {
                        return new component_7.MDCSelectHelperText(el);
                    };
                }
                this.isMenuOpen_ = false;
                this.nativeControl_ = this.root_.querySelector(constants_1.strings.NATIVE_CONTROL_SELECTOR);
                this.selectedText_ = this.root_.querySelector(constants_1.strings.SELECTED_TEXT_SELECTOR);
                var targetElement = this.nativeControl_ || this.selectedText_;
                if (!targetElement) {
                    throw new Error("MDCSelect: Missing required element: Exactly one of the following selectors must be present: " + ("'" + constants_1.strings.NATIVE_CONTROL_SELECTOR + "' or '" + constants_1.strings.SELECTED_TEXT_SELECTOR + "'"));
                }
                this.targetElement_ = targetElement;
                if (this.targetElement_.hasAttribute(constants_1.strings.ARIA_CONTROLS)) {
                    var helperTextElement = document.getElementById(this.targetElement_.getAttribute(constants_1.strings.ARIA_CONTROLS));
                    if (helperTextElement) {
                        this.helperText_ = helperTextFactory(helperTextElement);
                    }
                }
                if (this.selectedText_) {
                    this.enhancedSelectSetup_(menuFactory);
                }
                var labelElement = this.root_.querySelector(constants_1.strings.LABEL_SELECTOR);
                this.label_ = labelElement ? labelFactory(labelElement) : null;
                var lineRippleElement = this.root_.querySelector(constants_1.strings.LINE_RIPPLE_SELECTOR);
                this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
                var outlineElement = this.root_.querySelector(constants_1.strings.OUTLINE_SELECTOR);
                this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
                var leadingIcon = this.root_.querySelector(constants_1.strings.LEADING_ICON_SELECTOR);
                if (leadingIcon) {
                    this.root_.classList.add(constants_1.cssClasses.WITH_LEADING_ICON);
                    this.leadingIcon_ = iconFactory(leadingIcon);
                    if (this.menuElement_) {
                        this.menuElement_.classList.add(constants_1.cssClasses.WITH_LEADING_ICON);
                    }
                }
                if (!this.root_.classList.contains(constants_1.cssClasses.OUTLINED)) {
                    this.ripple = this.createRipple_();
                }
                this.initialSyncRequiredState_();
                this.addMutationObserverForRequired_();
            };
            MDCSelect.prototype.initialSyncWithDOM = function() {
                var _this = this;
                this.handleChange_ = function() {
                    return _this.foundation_.handleChange(true);
                };
                this.handleFocus_ = function() {
                    return _this.foundation_.handleFocus();
                };
                this.handleBlur_ = function() {
                    return _this.foundation_.handleBlur();
                };
                this.handleClick_ = function(evt) {
                    if (_this.selectedText_) {
                        _this.selectedText_.focus();
                    }
                    _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
                };
                this.handleKeydown_ = function(evt) {
                    return _this.foundation_.handleKeydown(evt);
                };
                this.handleMenuSelected_ = function(evtData) {
                    return _this.selectedIndex = evtData.detail.index;
                };
                this.handleMenuOpened_ = function() {
                    if (_this.menu_.items.length === 0) {
                        return;
                    }
                    var focusItemIndex = _this.selectedIndex >= 0 ? _this.selectedIndex : 0;
                    var focusItemEl = _this.menu_.items[focusItemIndex];
                    focusItemEl.focus();
                };
                this.handleMenuClosed_ = function() {
                    _this.isMenuOpen_ = false;
                    _this.selectedText_.removeAttribute("aria-expanded");
                    if (document.activeElement !== _this.selectedText_) {
                        _this.foundation_.handleBlur();
                    }
                };
                this.targetElement_.addEventListener("change", this.handleChange_);
                this.targetElement_.addEventListener("focus", this.handleFocus_);
                this.targetElement_.addEventListener("blur", this.handleBlur_);
                this.targetElement_.addEventListener("click", this.handleClick_);
                if (this.menuElement_) {
                    this.selectedText_.addEventListener("keydown", this.handleKeydown_);
                    this.menu_.listen(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed_);
                    this.menu_.listen(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened_);
                    this.menu_.listen(menuConstants.strings.SELECTED_EVENT, this.handleMenuSelected_);
                    if (this.hiddenInput_ && this.hiddenInput_.value) {
                        var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                        enhancedAdapterMethods.setValue(this.hiddenInput_.value);
                    } else if (this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR)) {
                        var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                        enhancedAdapterMethods.setValue(enhancedAdapterMethods.getValue());
                    }
                }
                this.foundation_.handleChange(false);
                if (this.root_.classList.contains(constants_1.cssClasses.DISABLED) || this.nativeControl_ && this.nativeControl_.disabled) {
                    this.disabled = true;
                }
            };
            MDCSelect.prototype.destroy = function() {
                this.targetElement_.removeEventListener("change", this.handleChange_);
                this.targetElement_.removeEventListener("focus", this.handleFocus_);
                this.targetElement_.removeEventListener("blur", this.handleBlur_);
                this.targetElement_.removeEventListener("keydown", this.handleKeydown_);
                this.targetElement_.removeEventListener("click", this.handleClick_);
                if (this.menu_) {
                    this.menu_.unlisten(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed_);
                    this.menu_.unlisten(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened_);
                    this.menu_.unlisten(menuConstants.strings.SELECTED_EVENT, this.handleMenuSelected_);
                    this.menu_.destroy();
                }
                if (this.ripple) {
                    this.ripple.destroy();
                }
                if (this.outline_) {
                    this.outline_.destroy();
                }
                if (this.leadingIcon_) {
                    this.leadingIcon_.destroy();
                }
                if (this.helperText_) {
                    this.helperText_.destroy();
                }
                if (this.validationObserver_) {
                    this.validationObserver_.disconnect();
                }
                _super.prototype.destroy.call(this);
            };
            Object.defineProperty(MDCSelect.prototype, "value", {
                get: function get() {
                    return this.foundation_.getValue();
                },
                set: function set(value) {
                    this.foundation_.setValue(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
                get: function get() {
                    var selectedIndex = -1;
                    if (this.menuElement_ && this.menu_) {
                        var selectedEl = this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR);
                        selectedIndex = this.menu_.items.indexOf(selectedEl);
                    } else if (this.nativeControl_) {
                        selectedIndex = this.nativeControl_.selectedIndex;
                    }
                    return selectedIndex;
                },
                set: function set(selectedIndex) {
                    this.foundation_.setSelectedIndex(selectedIndex);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "disabled", {
                get: function get() {
                    return this.root_.classList.contains(constants_1.cssClasses.DISABLED) || (this.nativeControl_ ? this.nativeControl_.disabled : false);
                },
                set: function set(disabled) {
                    this.foundation_.setDisabled(disabled);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
                set: function set(label) {
                    this.foundation_.setLeadingIconAriaLabel(label);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
                set: function set(content) {
                    this.foundation_.setLeadingIconContent(content);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
                set: function set(content) {
                    this.foundation_.setHelperTextContent(content);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "valid", {
                get: function get() {
                    return this.foundation_.isValid();
                },
                set: function set(isValid) {
                    this.foundation_.setValid(isValid);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MDCSelect.prototype, "required", {
                get: function get() {
                    if (this.nativeControl_) {
                        return this.nativeControl_.required;
                    } else {
                        return this.selectedText_.getAttribute("aria-required") === "true";
                    }
                },
                set: function set(isRequired) {
                    if (this.nativeControl_) {
                        this.nativeControl_.required = isRequired;
                    } else {
                        if (isRequired) {
                            this.selectedText_.setAttribute("aria-required", isRequired.toString());
                        } else {
                            this.selectedText_.removeAttribute("aria-required");
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            MDCSelect.prototype.layout = function() {
                this.foundation_.layout();
            };
            MDCSelect.prototype.getDefaultFoundation = function() {
                var adapter = __assign({}, this.nativeControl_ ? this.getNativeSelectAdapterMethods_() : this.getEnhancedSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());
                return new foundation_2.MDCSelectFoundation(adapter, this.getFoundationMap_());
            };
            MDCSelect.prototype.enhancedSelectSetup_ = function(menuFactory) {
                var isDisabled = this.root_.classList.contains(constants_1.cssClasses.DISABLED);
                this.selectedText_.setAttribute("tabindex", isDisabled ? "-1" : "0");
                this.hiddenInput_ = this.root_.querySelector(constants_1.strings.HIDDEN_INPUT_SELECTOR);
                this.menuElement_ = this.root_.querySelector(constants_1.strings.MENU_SELECTOR);
                this.menu_ = menuFactory(this.menuElement_);
                this.menu_.hoistMenuToBody();
                this.menu_.setAnchorElement(this.root_);
                this.menu_.setAnchorCorner(menuSurfaceConstants.Corner.BOTTOM_START);
                this.menu_.wrapFocus = false;
            };
            MDCSelect.prototype.createRipple_ = function() {
                var _this = this;
                var adapter = __assign({}, component_6.MDCRipple.createAdapter(this), {
                    registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                        return _this.targetElement_.addEventListener(evtType, handler);
                    },
                    deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                        return _this.targetElement_.removeEventListener(evtType, handler);
                    }
                });
                return new component_6.MDCRipple(this.root_, new foundation_1.MDCRippleFoundation(adapter));
            };
            MDCSelect.prototype.getNativeSelectAdapterMethods_ = function() {
                var _this = this;
                return {
                    getValue: function getValue() {
                        return _this.nativeControl_.value;
                    },
                    setValue: function setValue(value) {
                        _this.nativeControl_.value = value;
                    },
                    openMenu: function openMenu() {
                        return undefined;
                    },
                    closeMenu: function closeMenu() {
                        return undefined;
                    },
                    isMenuOpen: function isMenuOpen() {
                        return false;
                    },
                    setSelectedIndex: function setSelectedIndex(index) {
                        _this.nativeControl_.selectedIndex = index;
                    },
                    setDisabled: function setDisabled(isDisabled) {
                        _this.nativeControl_.disabled = isDisabled;
                    },
                    setValid: function setValid(isValid) {
                        if (isValid) {
                            _this.root_.classList.remove(constants_1.cssClasses.INVALID);
                        } else {
                            _this.root_.classList.add(constants_1.cssClasses.INVALID);
                        }
                    },
                    checkValidity: function checkValidity() {
                        return _this.nativeControl_.checkValidity();
                    }
                };
            };
            MDCSelect.prototype.getEnhancedSelectAdapterMethods_ = function() {
                var _this = this;
                return {
                    getValue: function getValue() {
                        var listItem = _this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR);
                        if (listItem && listItem.hasAttribute(constants_1.strings.ENHANCED_VALUE_ATTR)) {
                            return listItem.getAttribute(constants_1.strings.ENHANCED_VALUE_ATTR) || "";
                        }
                        return "";
                    },
                    setValue: function setValue(value) {
                        var element = _this.menuElement_.querySelector("[" + constants_1.strings.ENHANCED_VALUE_ATTR + '="' + value + '"]');
                        _this.setEnhancedSelectedIndex_(element ? _this.menu_.items.indexOf(element) : -1);
                    },
                    openMenu: function openMenu() {
                        if (_this.menu_ && !_this.menu_.open) {
                            _this.menu_.open = true;
                            _this.isMenuOpen_ = true;
                            _this.selectedText_.setAttribute("aria-expanded", "true");
                        }
                    },
                    closeMenu: function closeMenu() {
                        if (_this.menu_ && _this.menu_.open) {
                            _this.menu_.open = false;
                        }
                    },
                    isMenuOpen: function isMenuOpen() {
                        return Boolean(_this.menu_) && _this.isMenuOpen_;
                    },
                    setSelectedIndex: function setSelectedIndex(index) {
                        return _this.setEnhancedSelectedIndex_(index);
                    },
                    setDisabled: function setDisabled(isDisabled) {
                        _this.selectedText_.setAttribute("tabindex", isDisabled ? "-1" : "0");
                        _this.selectedText_.setAttribute("aria-disabled", isDisabled.toString());
                        if (_this.hiddenInput_) {
                            _this.hiddenInput_.disabled = isDisabled;
                        }
                    },
                    checkValidity: function checkValidity() {
                        var classList = _this.root_.classList;
                        if (classList.contains(constants_1.cssClasses.REQUIRED) && !classList.contains(constants_1.cssClasses.DISABLED)) {
                            return _this.selectedIndex !== -1 && (_this.selectedIndex !== 0 || Boolean(_this.value));
                        } else {
                            return true;
                        }
                    },
                    setValid: function setValid(isValid) {
                        _this.selectedText_.setAttribute("aria-invalid", (!isValid).toString());
                        if (isValid) {
                            _this.root_.classList.remove(constants_1.cssClasses.INVALID);
                        } else {
                            _this.root_.classList.add(constants_1.cssClasses.INVALID);
                        }
                    }
                };
            };
            MDCSelect.prototype.getCommonAdapterMethods_ = function() {
                var _this = this;
                return {
                    addClass: function addClass(className) {
                        return _this.root_.classList.add(className);
                    },
                    removeClass: function removeClass(className) {
                        return _this.root_.classList.remove(className);
                    },
                    hasClass: function hasClass(className) {
                        return _this.root_.classList.contains(className);
                    },
                    setRippleCenter: function setRippleCenter(normalizedX) {
                        return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
                    },
                    activateBottomLine: function activateBottomLine() {
                        return _this.lineRipple_ && _this.lineRipple_.activate();
                    },
                    deactivateBottomLine: function deactivateBottomLine() {
                        return _this.lineRipple_ && _this.lineRipple_.deactivate();
                    },
                    notifyChange: function notifyChange(value) {
                        var index = _this.selectedIndex;
                        _this.emit(constants_1.strings.CHANGE_EVENT, {
                            value: value,
                            index: index
                        }, true);
                    }
                };
            };
            MDCSelect.prototype.getOutlineAdapterMethods_ = function() {
                var _this = this;
                return {
                    hasOutline: function hasOutline() {
                        return Boolean(_this.outline_);
                    },
                    notchOutline: function notchOutline(labelWidth) {
                        return _this.outline_ && _this.outline_.notch(labelWidth);
                    },
                    closeOutline: function closeOutline() {
                        return _this.outline_ && _this.outline_.closeNotch();
                    }
                };
            };
            MDCSelect.prototype.getLabelAdapterMethods_ = function() {
                var _this = this;
                return {
                    floatLabel: function floatLabel(shouldFloat) {
                        return _this.label_ && _this.label_.float(shouldFloat);
                    },
                    getLabelWidth: function getLabelWidth() {
                        return _this.label_ ? _this.label_.getWidth() : 0;
                    }
                };
            };
            MDCSelect.prototype.getNormalizedXCoordinate_ = function(evt) {
                var targetClientRect = evt.target.getBoundingClientRect();
                var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
                return xCoordinate - targetClientRect.left;
            };
            MDCSelect.prototype.isTouchEvent_ = function(evt) {
                return Boolean(evt.touches);
            };
            MDCSelect.prototype.getFoundationMap_ = function() {
                return {
                    helperText: this.helperText_ ? this.helperText_.foundation : undefined,
                    leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined
                };
            };
            MDCSelect.prototype.setEnhancedSelectedIndex_ = function(index) {
                var selectedItem = this.menu_.items[index];
                this.selectedText_.textContent = selectedItem ? selectedItem.textContent.trim() : "";
                var previouslySelected = this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR);
                if (previouslySelected) {
                    previouslySelected.classList.remove(constants_1.cssClasses.SELECTED_ITEM_CLASS);
                    previouslySelected.removeAttribute(constants_1.strings.ARIA_SELECTED_ATTR);
                }
                if (selectedItem) {
                    selectedItem.classList.add(constants_1.cssClasses.SELECTED_ITEM_CLASS);
                    selectedItem.setAttribute(constants_1.strings.ARIA_SELECTED_ATTR, "true");
                }
                if (this.hiddenInput_) {
                    this.hiddenInput_.value = selectedItem ? selectedItem.getAttribute(constants_1.strings.ENHANCED_VALUE_ATTR) || "" : "";
                }
                this.layout();
            };
            MDCSelect.prototype.initialSyncRequiredState_ = function() {
                var isRequired = this.targetElement_.required || this.targetElement_.getAttribute("aria-required") === "true" || this.root_.classList.contains(constants_1.cssClasses.REQUIRED);
                if (isRequired) {
                    if (this.nativeControl_) {
                        this.nativeControl_.required = true;
                    } else {
                        this.selectedText_.setAttribute("aria-required", "true");
                    }
                    this.root_.classList.add(constants_1.cssClasses.REQUIRED);
                }
            };
            MDCSelect.prototype.addMutationObserverForRequired_ = function() {
                var _this = this;
                var observerHandler = function observerHandler(attributesList) {
                    attributesList.some(function(attributeName) {
                        if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) === -1) {
                            return false;
                        }
                        if (_this.selectedText_) {
                            if (_this.selectedText_.getAttribute("aria-required") === "true") {
                                _this.root_.classList.add(constants_1.cssClasses.REQUIRED);
                            } else {
                                _this.root_.classList.remove(constants_1.cssClasses.REQUIRED);
                            }
                        } else {
                            if (_this.nativeControl_.required) {
                                _this.root_.classList.add(constants_1.cssClasses.REQUIRED);
                            } else {
                                _this.root_.classList.remove(constants_1.cssClasses.REQUIRED);
                            }
                        }
                        return true;
                    });
                };
                var getAttributesList = function getAttributesList(mutationsList) {
                    return mutationsList.map(function(mutation) {
                        return mutation.attributeName;
                    }).filter(function(attributeName) {
                        return attributeName;
                    });
                };
                var observer = new MutationObserver(function(mutationsList) {
                    return observerHandler(getAttributesList(mutationsList));
                });
                observer.observe(this.targetElement_, {
                    attributes: true
                });
                this.validationObserver_ = observer;
            };
            return MDCSelect;
        }(component_1.MDCComponent);
        exports.MDCSelect = MDCSelect;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var strings = {
            ARIA_HIDDEN: "aria-hidden",
            ROLE: "role"
        };
        exports.strings = strings;
        var cssClasses = {
            HELPER_TEXT_PERSISTENT: "mdc-select-helper-text--persistent",
            HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg"
        };
        exports.cssClasses = cssClasses;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var strings = {
            ICON_EVENT: "MDCSelect:icon",
            ICON_ROLE: "button"
        };
        exports.strings = strings;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function __export(m) {
            for (var p in m) {
                if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        __export(__webpack_require__(68));
        __export(__webpack_require__(69));
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function __export(m) {
            for (var p in m) {
                if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        __export(__webpack_require__(70));
        __export(__webpack_require__(71));
    } ]);
});
//# sourceMappingURL=mdc.select.js.map