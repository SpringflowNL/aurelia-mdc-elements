'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var bindable, customAttribute, inject, DOM, _dec, _dec2, _class, DetailsIe;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            customAttribute = _aureliaFramework.customAttribute;
            inject = _aureliaFramework.inject;
            DOM = _aureliaFramework.DOM;
        }],
        execute: function () {
            _export('DetailsIe', DetailsIe = (_dec = customAttribute('details-ie'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
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
            }()) || _class) || _class));

            _export('DetailsIe', DetailsIe);
        }
    };
});