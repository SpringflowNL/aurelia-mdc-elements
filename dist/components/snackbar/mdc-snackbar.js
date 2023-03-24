"use strict";

exports.__esModule = true;
exports.MdcSnackbar = void 0;
var _aureliaFramework = require("aurelia-framework");
var _aureliaEventAggregator = require("aurelia-event-aggregator");
var _snackbar = require("@material/snackbar");
var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var MdcSnackbar = (_dec = (0, _aureliaFramework.customElement)("mdc-snackbar"), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function MdcSnackbar(element, ea) {
    _initializerDefineProperty(this, "leading", _descriptor, this);
    _initializerDefineProperty(this, "stacked", _descriptor2, this);
    this.element = element;
    this.ea = ea;
  }
  var _proto = MdcSnackbar.prototype;
  _proto.attached = function attached() {
    this.mdcSnackbar = new _snackbar.MDCSnackbar(this.element.firstElementChild);
  };
  _proto.bind = function bind() {
    var _this = this;
    this.subscriber = this.ea.subscribe("PostMessage.Snackbar", function (response) {
      _this.showSnackbar(response.label, response.buttonlabel, response.dismissonaction, response.leading, response.stacked);
    });
  };
  _proto.leadingChanged = function leadingChanged(newvalue) {
    if (this.mdcSnackbar) this.mdcSnackbar.leading = newvalue;
  };
  _proto.stackedChanged = function stackedChanged(newvalue) {
    if (this.mdcSnackbar) this.mdcSnackbar.stacked = newvalue;
  };
  _proto.detached = function detached() {
    this.subscripter.dispose();
  };
  _proto.showSnackbar = function showSnackbar(label, buttonLabel, dismissOnAction, leading, stacked) {
    if (buttonLabel === void 0) {
      buttonLabel = "Close";
    }
    if (dismissOnAction === void 0) {
      dismissOnAction = true;
    }
    this.mdcSnackbar.closeOnEscape = dismissOnAction;
    this.mdcSnackbar.labelText = label;
    this.mdcSnackbar.actionButtonText = buttonLabel;
    this.mdcSnackbar.leading = leading;
    this.mdcSnackbar.stacked = stacked;
    this.mdcSnackbar.open();
  };
  return MdcSnackbar;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stacked", [_aureliaFramework.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);
exports.MdcSnackbar = MdcSnackbar;