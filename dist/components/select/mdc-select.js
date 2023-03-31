"use strict";

exports.__esModule = true;
exports.MdcSelect = void 0;
var _aureliaFramework = require("aurelia-framework");
var _select = require("@material/select");
var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var MdcSelect = (_dec = (0, _aureliaFramework.customElement)('mdc-select'), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaFramework.TaskQueue), _dec3 = (0, _aureliaFramework.bindable)({
  defaultBindingMode: _aureliaFramework.bindingMode.twoWay
}), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function MdcSelect(element, taskQueue) {
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
    _initializerDefineProperty(this, "outlined", _descriptor13, this);
    _initializerDefineProperty(this, "anchorElement", _descriptor14, this);
    _initializerDefineProperty(this, "emptyOption", _descriptor15, this);
    _initializerDefineProperty(this, "fixedMenuPosition", _descriptor16, this);
    this.element = element;
    this.taskQueue = taskQueue;
    this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  var _proto = MdcSelect.prototype;
  _proto.bind = function bind() {
    if (this.mdcSelect) {
      this.refreshOptions();
    }
  };
  _proto.attached = function attached() {
    var _this = this;
    this.mdcSelect = new _select.MDCSelect(this.element.firstElementChild);
    this.mdcSelect.selectedIndex = this.getIndex(this.data, this.selected);
    this.mdcSelect.listen('MDCSelect:change', function () {
      _this.changedEvent = true;
      _this.selected = _this.mdcSelect.value;

      //Set invalid class after first change
      if (!_this.mdcSelect.value && _this.required) {
        _this.requiredChanged(true);
      } else {
        _this.requiredChanged(false);
      }
    });
    this.refreshOptions();
  };
  _proto.dataChanged = function dataChanged() {
    var self = this;
    this.taskQueue.queueMicroTask(function () {
      self.mdcSelect.layoutOptions();
    });
  };
  _proto.selectedChanged = function selectedChanged(newvalue) {
    var self = this;
    if (!this.changedEvent) {
      this.taskQueue.queueMicroTask(function () {
        self.selectedValue = newvalue;
        self.mdcSelect.selectedIndex = self.getIndex(self.data, newvalue);
      });
    }
    if (this.selectedValue && newvalue) {
      this.mdcSelect.valid = true;
    }
    this.changedEvent = false;
  };
  _proto.refreshOptions = function refreshOptions() {
    this.mdcSelect.setDisabled = this.disabled;
    this.mdcSelect.setRequired = this.required;
    this.selectedChanged(this.selected);
    this.mdcSelect.hasOutline = this.outlined;
  };
  _proto.getIndex = function getIndex(array, value) {
    var _this2 = this;
    var index = this.emptyOption ? -1 : 0;
    if (array && array.findIndex) {
      index = array.findIndex(function (e) {
        return e[_this2.key] === value;
      });
      return index + (this.emptyOption ? 1 : 0);
    } else if (array && array.find) {
      index = array.find(function (e) {
        return e[_this2.key] === value;
      });
      return index + (this.emptyOption ? 1 : 0);
    } else {
      return index;
    }
  };
  _proto.disabledChanged = function disabledChanged(newvalue) {
    if (this.mdcSelect) this.mdcSelect.disabled = newvalue ? true : false;
  };
  _proto.outlinedChanged = function outlinedChanged(newvalue) {
    if (this.mdcSelect) this.mdcSelect.hasOutline = newvalue ? true : false;
  };
  _proto.requiredChanged = function requiredChanged(newvalue) {
    if (this.mdcSelect) this.mdcSelect.required = newvalue ? true : false;
  };
  _proto.secondarylabelChanged = function secondarylabelChanged(newvalue) {
    if (this.mdcSelect && newvalue) {
      this.anchorElement.setAttribute('aria-controls', "select-helper--" + this.unique);
      this.anchorElement.setAttribute('aria-describedby', "select-helper--" + this.unique);
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
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectLabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
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
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "outlined", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "anchorElement", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "emptyOption", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "fixedMenuPosition", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);
exports.MdcSelect = MdcSelect;