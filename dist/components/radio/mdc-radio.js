"use strict";

exports.__esModule = true;
exports.MdcRadio = void 0;
var _aureliaFramework = require("aurelia-framework");
var _radio = require("@material/radio");
var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var MdcRadio = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function MdcRadio(element) {
    _initializerDefineProperty(this, "checked", _descriptor, this);
    _initializerDefineProperty(this, "disabled", _descriptor2, this);
    _initializerDefineProperty(this, "id", _descriptor3, this);
    _initializerDefineProperty(this, "label", _descriptor4, this);
    _initializerDefineProperty(this, "matcher", _descriptor5, this);
    _initializerDefineProperty(this, "model", _descriptor6, this);
    _initializerDefineProperty(this, "name", _descriptor7, this);
    _initializerDefineProperty(this, "secondarylabel", _descriptor8, this);
    this.element = element;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  var _proto = MdcRadio.prototype;
  _proto.bind = function bind() {
    this.mdcRadio = new _radio.MDCRadio(this.element);
  };
  _proto.attached = function attached() {
    if (!this.id) {
      this.id = this.unique;
    }
  };
  _proto.handleChange = function handleChange(e) {
    // stop propagation so we're able to fire our own event when data-binding changes checked value
    e.stopPropagation();
  };
  _proto.checkedChanged = function checkedChanged(newValue) {
    var event = new CustomEvent("change", {
      bubbles: true,
      detail: {
        value: newValue
      }
    });
    this.element.dispatchEvent(event);
  };
  _proto.disabledChanged = function disabledChanged(newValue) {
    this.mdcRadio.disabled = !!newValue;
  };
  return MdcRadio;
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
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "id", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "matcher", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "model", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "name", [_aureliaFramework.bindable], {
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
exports.MdcRadio = MdcRadio;