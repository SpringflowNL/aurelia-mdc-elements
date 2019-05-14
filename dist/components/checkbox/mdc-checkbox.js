"use strict";

exports.__esModule = true;
exports.MdcCheckbox = void 0;

var _aureliaFramework = require("aurelia-framework");

var _mdcCheckbox = require("@material/checkbox/dist/mdc.checkbox.min");

var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var MdcCheckbox = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = (_class2 =
/*#__PURE__*/
function () {
  function MdcCheckbox(element) {
    _initializerDefineProperty(this, "checked", _descriptor, this);

    _initializerDefineProperty(this, "disabled", _descriptor2, this);

    _initializerDefineProperty(this, "required", _descriptor3, this);

    _initializerDefineProperty(this, "indeterminate", _descriptor4, this);

    _initializerDefineProperty(this, "id", _descriptor5, this);

    _initializerDefineProperty(this, "label", _descriptor6, this);

    _initializerDefineProperty(this, "model", _descriptor7, this);

    _initializerDefineProperty(this, "secondarylabel", _descriptor8, this);

    this.element = element;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  var _proto = MdcCheckbox.prototype;

  _proto.bind = function bind() {
    this.mdcCheckbox = new _mdcCheckbox.MDCCheckbox(this.element);
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  _proto.attached = function attached() {
    this.mdcCheckbox.required = this.required;
    this.mdcCheckbox.disabled = this.disabled;
    this.mdcCheckbox.indeterminate = this.indeterminate;

    if (!this.id) {
      this.id = this.unique;
    }
  };

  _proto.checkedChanged = function checkedChanged(newValue) {
    var event = new CustomEvent('change', {
      bubbles: true,
      detail: {
        value: newValue
      }
    });
    this.element.dispatchEvent(event); //Set invalid class after first change

    if (!newValue && this.required) {
      this.requiredChanged(true);
    } else {
      this.requiredChanged(false);
    }
  };

  _proto.requiredChanged = function requiredChanged(newValue) {
    if (newValue) {
      this.element.classList.add('mdc-checkbox--invalid');
    } else {
      this.element.classList.remove('mdc-checkbox--invalid');
    }
  };

  _proto.disabledChanged = function disabledChanged(newValue) {
    this.mdcCheckbox.disabled = newValue;
  };

  _proto.indeterminateChanged = function indeterminateChanged(newValue) {
    this.mdcCheckbox.indeterminate = newValue;
  };

  return MdcCheckbox;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checked", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "indeterminate", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "id", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "model", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.MdcCheckbox = MdcCheckbox;