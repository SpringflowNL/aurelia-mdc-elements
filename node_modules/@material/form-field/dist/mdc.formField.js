/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["formField"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["formField"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 116);
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
        116: function(module, exports, __webpack_require__) {
            "use strict";
            function __export(m) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __export(__webpack_require__(117));
            __export(__webpack_require__(61));
        },
        117: function(module, exports, __webpack_require__) {
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
            var foundation_1 = __webpack_require__(61);
            var MDCFormField = function(_super) {
                __extends(MDCFormField, _super);
                function MDCFormField() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCFormField.attachTo = function(root) {
                    return new MDCFormField(root);
                };
                Object.defineProperty(MDCFormField.prototype, "input", {
                    get: function get() {
                        return this.input_;
                    },
                    set: function set(input) {
                        this.input_ = input;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFormField.prototype, "label_", {
                    get: function get() {
                        var LABEL_SELECTOR = foundation_1.MDCFormFieldFoundation.strings.LABEL_SELECTOR;
                        return this.root_.querySelector(LABEL_SELECTOR);
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFormField.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        activateInputRipple: function activateInputRipple() {
                            if (_this.input_ && _this.input_.ripple) {
                                _this.input_.ripple.activate();
                            }
                        },
                        deactivateInputRipple: function deactivateInputRipple() {
                            if (_this.input_ && _this.input_.ripple) {
                                _this.input_.ripple.deactivate();
                            }
                        },
                        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                            if (_this.label_) {
                                _this.label_.removeEventListener(evtType, handler);
                            }
                        },
                        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                            if (_this.label_) {
                                _this.label_.addEventListener(evtType, handler);
                            }
                        }
                    };
                    return new foundation_1.MDCFormFieldFoundation(adapter);
                };
                return MDCFormField;
            }(component_1.MDCComponent);
            exports.MDCFormField = MDCFormField;
        },
        118: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.cssClasses = {
                ROOT: "mdc-form-field"
            };
            exports.strings = {
                LABEL_SELECTOR: ".mdc-form-field > label"
            };
        },
        61: function(module, exports, __webpack_require__) {
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
            var constants_1 = __webpack_require__(118);
            var MDCFormFieldFoundation = function(_super) {
                __extends(MDCFormFieldFoundation, _super);
                function MDCFormFieldFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCFormFieldFoundation.defaultAdapter, adapter)) || this;
                    _this.clickHandler_ = function() {
                        return _this.handleClick_();
                    };
                    return _this;
                }
                Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFormFieldFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            activateInputRipple: function activateInputRipple() {
                                return undefined;
                            },
                            deactivateInputRipple: function deactivateInputRipple() {
                                return undefined;
                            },
                            deregisterInteractionHandler: function deregisterInteractionHandler() {
                                return undefined;
                            },
                            registerInteractionHandler: function registerInteractionHandler() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFormFieldFoundation.prototype.init = function() {
                    this.adapter_.registerInteractionHandler("click", this.clickHandler_);
                };
                MDCFormFieldFoundation.prototype.destroy = function() {
                    this.adapter_.deregisterInteractionHandler("click", this.clickHandler_);
                };
                MDCFormFieldFoundation.prototype.handleClick_ = function() {
                    var _this = this;
                    this.adapter_.activateInputRipple();
                    requestAnimationFrame(function() {
                        return _this.adapter_.deactivateInputRipple();
                    });
                };
                return MDCFormFieldFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCFormFieldFoundation = MDCFormFieldFoundation;
            exports.default = MDCFormFieldFoundation;
        }
    });
});
//# sourceMappingURL=mdc.formField.js.map