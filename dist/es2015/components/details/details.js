var _dec, _dec2, _class;

import { bindable, customAttribute, inject, DOM } from 'aurelia-framework';

export let DetailsIe = (_dec = customAttribute('details-ie'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class DetailsIe {

    constructor(element) {
        this.element = element;
    }

    bind() {
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
    }
}) || _class) || _class);