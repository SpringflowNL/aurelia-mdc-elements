"use strict";

exports.__esModule = true;
exports.MdcChip = void 0;
var _aureliaFramework = require("aurelia-framework");
var _chips = require("@material/chips");
var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var MdcChip = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function MdcChip(element) {
    _initializerDefineProperty(this, "label", _descriptor, this);
    _initializerDefineProperty(this, "leading", _descriptor2, this);
    _initializerDefineProperty(this, "trailing", _descriptor3, this);
    this.element = element;
  }
  var _proto = MdcChip.prototype;
  _proto.bind = function bind() {
    this.mdcChip = new _chips.MDCChip(this.element);
  };
  return MdcChip;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trailing", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.MdcChip = MdcChip;