"use strict";

exports.__esModule = true;
exports.MdcTextarea = void 0;

var _aureliaFramework = require("aurelia-framework");

var _mdcTextfield = require("@material/textfield/dist/mdc.textfield.min");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var MdcTextarea = (_dec = (0, _aureliaFramework.customElement)('mdc-textarea'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 =
/*#__PURE__*/
function () {
  function MdcTextarea(element) {
    _initializerDefineProperty(this, "label", _descriptor, this);

    _initializerDefineProperty(this, "value", _descriptor2, this);

    _initializerDefineProperty(this, "disabled", _descriptor3, this);

    _initializerDefineProperty(this, "required", _descriptor4, this);

    _initializerDefineProperty(this, "dense", _descriptor5, this);

    this.element = element;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  var _proto = MdcTextarea.prototype;

  _proto.bind = function bind() {
    this.myMdcTextfield = new _mdcTextfield.MDCTextField(this.element.firstElementChild);
    this.myMdcTextfield.disabled = this.disabled;
    this.myMdcTextfield.required = this.required;
  };

  _proto.disabledChanged = function disabledChanged(newvalue) {
    this.myMdcTextfield.disabled = newvalue;
  };

  _proto.requiredChanged = function requiredChanged(newvalue) {
    this.myMdcTextfield.required = newvalue;
  };

  _proto.detached = function detached() {
    this.myMdcTextfield.destroy();
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dense", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);
exports.MdcTextarea = MdcTextarea;