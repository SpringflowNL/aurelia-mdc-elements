'use strict';

System.register(['aurelia-framework', 'material-components-web/dist/material-components-web'], function (_export, _context) {
    "use strict";

    var inject, bindable, bindingMode, DOM, mdcCheckbox, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, MDCCheckbox, MdcCheckbox;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
            DOM = _aureliaFramework.DOM;
        }, function (_materialComponentsWebDistMaterialComponentsWeb) {
            mdcCheckbox = _materialComponentsWebDistMaterialComponentsWeb.checkbox;
        }],
        execute: function () {
            MDCCheckbox = mdcCheckbox.MDCCheckbox;

            _export('MdcCheckbox', MdcCheckbox = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
                function MdcCheckbox(element) {
                    _classCallCheck(this, MdcCheckbox);

                    _initDefineProp(this, 'checked', _descriptor, this);

                    _initDefineProp(this, 'disabled', _descriptor2, this);

                    _initDefineProp(this, 'required', _descriptor3, this);

                    _initDefineProp(this, 'id', _descriptor4, this);

                    _initDefineProp(this, 'label', _descriptor5, this);

                    _initDefineProp(this, 'model', _descriptor6, this);

                    _initDefineProp(this, 'secondarylabel', _descriptor7, this);

                    this.element = element;
                }

                MdcCheckbox.prototype.bind = function bind() {
                    this.mdcCheckbox = new MDCCheckbox(this.element);
                    this.element.id = '_' + this.id;
                };

                MdcCheckbox.prototype.checkedChanged = function checkedChanged(newValue) {
                    var event = new CustomEvent('change', { bubbles: true, detail: { value: newValue } });
                    this.element.dispatchEvent(event);

                    if (!newValue && this.required) {
                        this.requiredChanged(true);
                    } else {
                        this.requiredChanged(false);
                    }
                };

                MdcCheckbox.prototype.requiredChanged = function requiredChanged(newValue) {
                    if (newValue) {
                        this.element.classList.add('mdc-checkbox--invalid');
                    } else {
                        this.element.classList.remove('mdc-checkbox--invalid');
                    }
                };

                MdcCheckbox.prototype.disabledChanged = function disabledChanged(newValue) {
                    this.mdcCheckbox.disabled = !!newValue;
                };

                return MdcCheckbox;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'checked', [_dec2], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'id', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'model', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'secondarylabel', [bindable], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class));

            _export('MdcCheckbox', MdcCheckbox);
        }
    };
});