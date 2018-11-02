"use strict";

exports.__esModule = true;
exports.MdcMenu = void 0;

var _aureliaFramework = require("aurelia-framework");

var _mdcMenu = require("@material/menu/dist/mdc.menu.min");

var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var MdcMenu = (_dec = (0, _aureliaFramework.customElement)('mdc-menu'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 =
/*#__PURE__*/
function () {
  function MdcMenu(element) {
    _initializerDefineProperty(this, "label", _descriptor, this);

    _initializerDefineProperty(this, "icon", _descriptor2, this);

    _initializerDefineProperty(this, "menuElement", _descriptor3, this);

    this.element = element;
  }

  var _proto = MdcMenu.prototype;

  _proto.toggleMenu = function toggleMenu() {
    this.myMdcMenu.open = !this.myMdcMenu.open;
  };

  _proto.bind = function bind() {
    this.myMdcMenu = new _mdcMenu.MDCMenu(this.menuElement);
  };

  _proto.detached = function detached() {
    this.myMdcMenu.destroy();
  };

  return MdcMenu;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "menuElement", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.MdcMenu = MdcMenu;