define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DetailsIe = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var DetailsIe = exports.DetailsIe = (_dec = (0, _aureliaFramework.customAttribute)('details-ie'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
        function DetailsIe(element) {
            var _this = this;

            _classCallCheck(this, DetailsIe);

            this.element = element;

            this.handleClick = function (e) {
                if (_this.element.getAttribute("open") == "") {
                    _this.element.removeAttribute("open");
                } else {
                    _this.element.setAttribute("open", "");
                }
            };
        }

        DetailsIe.prototype.attached = function attached() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge") != -2;
            if (msie) {
                this.element.children[0].addEventListener("click", this.handleClick);
            }
        };

        DetailsIe.prototype.detached = function detached() {
            this.element.children[0].removeEventListener("click", this.handleClick);
        };

        return DetailsIe;
    }()) || _class) || _class);
});