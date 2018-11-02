"use strict";

exports.__esModule = true;
exports.DetailsIe = void 0;

var _aureliaFramework = require("aurelia-framework");

var _dec, _dec2, _class;

var DetailsIe = (_dec = (0, _aureliaFramework.customAttribute)('details-ie'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class =
/*#__PURE__*/
function () {
  function DetailsIe(element) {
    var _this = this;

    this.element = element;

    this.handleClick = function (e) {
      if (_this.element.getAttribute("open") == "") {
        _this.element.removeAttribute("open");
      } else {
        _this.element.setAttribute("open", "");
      }
    };
  }

  var _proto = DetailsIe.prototype;

  _proto.attached = function attached() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge") != -2;

    if (msie) {
      this.element.children[0].addEventListener("click", this.handleClick);
    }
  };

  _proto.detached = function detached() {
    this.element.children[0].removeEventListener("click", this.handleClick);
  };

  return DetailsIe;
}()) || _class) || _class);
exports.DetailsIe = DetailsIe;