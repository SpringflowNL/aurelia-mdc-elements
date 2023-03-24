"use strict";

exports.__esModule = true;
exports.MdcTextarea = void 0;
var _aureliaFramework = require("aurelia-framework");
var _textfield = require("@material/textfield");
var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var MdcTextarea = (_dec = (0, _aureliaFramework.customElement)('mdc-textarea'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function MdcTextarea(element) {
    _initializerDefineProperty(this, "label", _descriptor, this);
    _initializerDefineProperty(this, "value", _descriptor2, this);
    _initializerDefineProperty(this, "disabled", _descriptor3, this);
    _initializerDefineProperty(this, "required", _descriptor4, this);
    _initializerDefineProperty(this, "modifier", _descriptor5, this);
    _initializerDefineProperty(this, "secondarylabel", _descriptor6, this);
    _initializerDefineProperty(this, "outlined", _descriptor7, this);
    _initializerDefineProperty(this, "readonly", _descriptor8, this);
    _initializerDefineProperty(this, "maxlength", _descriptor9, this);
    this.element = element;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  var _proto = MdcTextarea.prototype;
  _proto.attached = function attached() {
    this.myMdcTextarea = new _textfield.MDCTextField(this.element.firstElementChild);
    this.myMdcTextarea.disabled = this.disabled;
    this.myMdcTextarea.required = this.required;
    this.myMdcTextarea.outlined = this.outlined;
    this.myMdcTextarea.input.readOnly = this.readonly;
    if (this.value) {
      this.myMdcTextarea.value = this.value;
    }
  };
  _proto.valueChanged = function valueChanged(newvalue) {
    if (this.myMdcTextarea && newvalue) this.myMdcTextarea.value = newvalue;
  };
  _proto.disabledChanged = function disabledChanged(newvalue) {
    if (this.myMdcTextarea) this.myMdcTextarea.disabled = newvalue;
  };
  _proto.requiredChanged = function requiredChanged(newvalue) {
    if (this.myMdcTextarea) this.myMdcTextarea.required = newvalue;
  };
  _proto.outlinedChanged = function outlinedChanged(newvalue) {
    if (this.myMdcTextarea) this.myMdcTextarea.outlined = newvalue;
  };
  _proto.readonlyChanged = function readonlyChanged(newvalue) {
    if (this.myMdcTextarea) this.myMdcTextarea.input.readOnly = newvalue;
  };
  _proto.secondarylabelChanged = function secondarylabelChanged(newvalue) {
    if (this.myMdcTextarea) {
      this.myMdcTextarea.input.setAttribute('aria-controls', "textarea-helper--" + this.unique);
      this.myMdcTextarea.input.setAttribute('aria-describedby', "textarea-helper--" + this.unique);
    }
  };
  _proto.maxlengthChanged = function maxlengthChanged(newvalue) {
    if (this.myMdcTextarea) {
      this.myMdcTextarea.input.maxLength = newvalue;
      this.myMdcTextarea.input.setAttribute('aria-controls', "textarea-helper--" + this.unique);
      this.myMdcTextarea.input.setAttribute('aria-describedby', "textarea-helper--" + this.unique);
    }
  };
  _proto.detached = function detached() {
    this.myMdcTextarea.destroy();
  };
  return MdcTextarea;
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "modifier", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "outlined", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "readonly", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "maxlength", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class) || _class);
exports.MdcTextarea = MdcTextarea;