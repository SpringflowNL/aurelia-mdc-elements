/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["menu"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["menu"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 130);
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
        10: function(module, exports, __webpack_require__) {
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
        },
        11: function(module, exports, __webpack_require__) {
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
        },
        13: function(module, exports, __webpack_require__) {
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
        },
        130: function(module, exports, __webpack_require__) {
            "use strict";
            function __export(m) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var constants_1 = __webpack_require__(11);
            exports.Corner = constants_1.Corner;
            __export(__webpack_require__(39));
            __export(__webpack_require__(34));
        },
        15: function(module, exports, __webpack_require__) {
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
        },
        19: function(module, exports, __webpack_require__) {
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
        20: function(module, exports, __webpack_require__) {
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
        },
        27: function(module, exports, __webpack_require__) {
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
        },
        34: function(module, exports, __webpack_require__) {
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
        },
        39: function(module, exports, __webpack_require__) {
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
        },
        7: function(module, exports, __webpack_require__) {
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
        }
    });
});
//# sourceMappingURL=mdc.menu.js.map