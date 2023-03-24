"use strict";

exports.__esModule = true;
exports.MdcTextField = void 0;
var _aureliaFramework = require("aurelia-framework");
var _textfield = require("@material/textfield");
var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var MdcTextField = (_dec = (0, _aureliaFramework.customElement)('mdc-text-field'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function MdcTextField(element) {
    _initializerDefineProperty(this, "label", _descriptor, this);
    _initializerDefineProperty(this, "value", _descriptor2, this);
    _initializerDefineProperty(this, "disabled", _descriptor3, this);
    _initializerDefineProperty(this, "required", _descriptor4, this);
    _initializerDefineProperty(this, "type", _descriptor5, this);
    _initializerDefineProperty(this, "secondarylabel", _descriptor6, this);
    _initializerDefineProperty(this, "modifier", _descriptor7, this);
    _initializerDefineProperty(this, "step", _descriptor8, this);
    _initializerDefineProperty(this, "min", _descriptor9, this);
    _initializerDefineProperty(this, "max", _descriptor10, this);
    _initializerDefineProperty(this, "leading", _descriptor11, this);
    _initializerDefineProperty(this, "trailing", _descriptor12, this);
    _initializerDefineProperty(this, "outlined", _descriptor13, this);
    this.element = element;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  var _proto = MdcTextField.prototype;
  _proto.bind = function bind() {
    if (this.myMdcTextfield) {
      this.refreshOptions();
    }
  };
  _proto.attached = function attached() {
    this.myMdcTextfield = new _textfield.MDCTextField(this.element.firstElementChild);
    this.refreshOptions();
  };
  _proto.refreshOptions = function refreshOptions() {
    this.step ? this.stepChanged(this.step) : '';
    this.min ? this.minChanged(this.min) : '';
    this.max ? this.maxChanged(this.max) : '';
    this.myMdcTextfield.disabled = this.disabled;
    this.myMdcTextfield.required = this.required;
    this.myMdcTextfield.outlined = this.outlined;
    this.myMdcTextfield.ripple = true;
    if (this.value) {
      this.myMdcTextfield.value = this.value;
    }
  };
  _proto.disabledChanged = function disabledChanged(newvalue) {
    if (this.myMdcTextfield) this.myMdcTextfield.disabled = newvalue;
  };
  _proto.requiredChanged = function requiredChanged(newvalue) {
    if (this.myMdcTextfield) this.myMdcTextfield.required = newvalue;
  };
  _proto.stepChanged = function stepChanged(newvalue) {
    if (this.myMdcTextfield) this.myMdcTextfield.step = newvalue;
  };
  _proto.valueChanged = function valueChanged(newvalue) {
    if (this.myMdcTextfield && newvalue) this.myMdcTextfield.value = newvalue;
  };
  _proto.outlinedChanged = function outlinedChanged(newvalue) {
    if (this.myMdcTextfield) this.myMdcTextfield.outlined = newvalue;
  };
  _proto.minChanged = function minChanged(newvalue) {
    if (this.type === 'number') {
      if (this.myMdcTextfield) this.myMdcTextfield.input.min = newvalue;
    } else {
      if (this.myMdcTextfield) this.myMdcTextfield.input.minLength = newvalue;
    }
  };
  _proto.maxChanged = function maxChanged(newvalue) {
    if (this.type === 'number') {
      if (this.myMdcTextfield) this.myMdcTextfield.input.max = newvalue;
    } else {
      if (this.myMdcTextfield) this.myMdcTextfield.input.maxLength = newvalue;
    }
  };
  _proto.secondarylabelChanged = function secondarylabelChanged(newvalue) {
    if (this.myMdcTextfield && newvalue) {
      this.myMdcTextfield.input.setAttribute('aria-controls', "text-field--" + this.unique);
      this.myMdcTextfield.input.setAttribute('aria-describedby', "text-field--" + this.unique);
    }
  };
  return MdcTextField;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "type", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'text';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "modifier", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "step", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "min", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "max", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "trailing", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "outlined", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);
exports.MdcTextField = MdcTextField;