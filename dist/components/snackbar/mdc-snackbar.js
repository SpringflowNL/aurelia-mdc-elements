"use strict";

exports.__esModule = true;
exports.MdcSnackbar = void 0;

var _aureliaFramework = require("aurelia-framework");

var _aureliaEventAggregator = require("aurelia-event-aggregator");

var _mdcSnackbar = require("@material/snackbar/dist/mdc.snackbar.min");

var _dec, _dec2, _class;

var MdcSnackbar = (_dec = (0, _aureliaFramework.customElement)("mdc-snackbar"), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class =
/*#__PURE__*/
function () {
  function MdcSnackbar(element, ea) {
    this.element = element;
    this.ea = ea;
  }

  var _proto = MdcSnackbar.prototype;

  _proto.attached = function attached() {
    var _this = this;

    this.subscriber = this.ea.subscribe("PostMessage.Snackbar", function (response) {
      _this.showSnackbar(response.label, response.buttonlabel, response.dismissonaction);
    });
  };

  _proto.detached = function detached() {
    this.subscripter.dispose();
  };

  _proto.showSnackbar = function showSnackbar(label, buttonLabel, dismissOnAction) {
    if (buttonLabel === void 0) {
      buttonLabel = "Cancel";
    }

    if (dismissOnAction === void 0) {
      dismissOnAction = true;
    }

    this.mdcSnackbar = new _mdcSnackbar.MDCSnackbar(this.element);
    this.mdcSnackbar.dismissesOnAction = dismissOnAction;
    var data = {
      message: label,
      timout: 2750,
      actionText: buttonLabel
    };

    data.actionHandler = function () {};

    this.mdcSnackbar.show(data);
  };

  return MdcSnackbar;
}()) || _class) || _class);
exports.MdcSnackbar = MdcSnackbar;