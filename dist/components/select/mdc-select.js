"use strict";

exports.__esModule = true;
exports.MdcSelect = void 0;

var _aureliaFramework = require("aurelia-framework");

var _mdcSelect = require("@material/select/dist/mdc.select.min");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var MdcSelect = (_dec = (0, _aureliaFramework.customElement)('mdc-select'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 =
/*#__PURE__*/
function () {
  function MdcSelect(element) {
    _initializerDefineProperty(this, "label", _descriptor, this);

    _initializerDefineProperty(this, "data", _descriptor2, this);

    _initializerDefineProperty(this, "value", _descriptor3, this);

    _initializerDefineProperty(this, "key", _descriptor4, this);

    _initializerDefineProperty(this, "selected", _descriptor5, this);

    _initializerDefineProperty(this, "selectedValue", _descriptor6, this);

    _initializerDefineProperty(this, "disabled", _descriptor7, this);

    _initializerDefineProperty(this, "required", _descriptor8, this);

    _initializerDefineProperty(this, "selectLabel", _descriptor9, this);

    _initializerDefineProperty(this, "secondarylabel", _descriptor10, this);

    _initializerDefineProperty(this, "modifier", _descriptor11, this);

    _initializerDefineProperty(this, "leading", _descriptor12, this);

    this.element = element;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  var _proto = MdcSelect.prototype;

  _proto.bind = function bind() {
    if (this.myMdcSelect) {
      this.refreshOptions();
    }
  };

  _proto.attached = function attached() {
    var _this = this;

    this.myMdcSelect = new _mdcSelect.MDCSelect(this.element.firstElementChild);
    this.myMdcSelect.listen('change', function () {
      _this.changedEvent = true;
      _this.selected = _this.myMdcSelect.value; //Set invalid class after first change

      if (!_this.myMdcSelect.value && _this.required) {
        _this.requiredChanged(true);
      } else {
        _this.requiredChanged(false);
      }
    });
    this.refreshOptions();
  };

  _proto.selectedChanged = function selectedChanged(newvalue) {
    if (!this.changedEvent) {
      this.selectedValue = newvalue;
    }

    this.changedEvent = false;
  };

  _proto.refreshOptions = function refreshOptions() {
    this.myMdcSelect.disabled = this.disabled;
    this.myMdcSelect.required = this.required;
    this.selectedValue = this.selected;
  };

  _proto.detached = function detached() {
    this.myMdcSelect.destroy();
  };

  _proto.disabledChanged = function disabledChanged(newvalue) {
    this.myMdcSelect.disabled = newvalue;
  };

  _proto.requiredChanged = function requiredChanged(newvalue) {
    if (newvalue) {
      this.element.firstElementChild.classList.add('mdc-select--invalid');
    } else {
      this.element.firstElementChild.classList.remove('mdc-select--invalid');
    }
  };

  return MdcSelect;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "data", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "value", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "key", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selected", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectedValue", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectLabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "modifier", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.MdcSelect = MdcSelect;