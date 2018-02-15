'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MdcRadio = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _aureliaFramework = require('aurelia-framework');

var _materialComponentsWeb = require('material-components-web/dist/material-components-web');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var MDCRadio = _materialComponentsWeb.radio.MDCRadio;
var MdcRadio = exports.MdcRadio = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
    function MdcRadio(element) {
        _classCallCheck(this, MdcRadio);

        _initDefineProp(this, 'checked', _descriptor, this);

        _initDefineProp(this, 'disabled', _descriptor2, this);

        _initDefineProp(this, 'id', _descriptor3, this);

        _initDefineProp(this, 'label', _descriptor4, this);

        _initDefineProp(this, 'secondarylabel', _descriptor5, this);

        _initDefineProp(this, 'name', _descriptor6, this);

        _initDefineProp(this, 'model', _descriptor7, this);

        this.element = element;
    }

    MdcRadio.prototype.bind = function bind() {
        this.mdcRadio = new MDCRadio(this.element);
    };

    MdcRadio.prototype.handleChange = function handleChange(e) {
        e.stopPropagation();
    };

    MdcRadio.prototype.checkedChanged = function checkedChanged(newValue) {
        var event = new CustomEvent('change', { bubbles: true, detail: { value: newValue } });
        this.element.dispatchEvent(event);
    };

    MdcRadio.prototype.disabledChanged = function disabledChanged(newValue) {
        this.mdcRadio.disabled = !!newValue;
    };

    return MdcRadio;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'checked', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'id', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'secondarylabel', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);