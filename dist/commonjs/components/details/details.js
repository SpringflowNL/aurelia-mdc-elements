'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DetailsIe = undefined;

var _dec, _dec2, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DetailsIe = exports.DetailsIe = (_dec = (0, _aureliaFramework.customAttribute)('details-ie'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
    function DetailsIe(element) {
        _classCallCheck(this, DetailsIe);

        this.element = element;
    }

    DetailsIe.prototype.bind = function bind() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge") != -2;
        if (msie) {
            var elem = this.element;
            this.element.children[0].addEventListener("click", function () {
                if (elem.getAttribute("open") == "") {
                    elem.removeAttribute("open");
                } else {
                    elem.setAttribute("open", "");
                }
            });
        }
    };

    return DetailsIe;
}()) || _class) || _class);