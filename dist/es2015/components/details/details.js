var _dec, _dec2, _class;

import { bindable, customAttribute, inject, DOM } from 'aurelia-framework';

export let DetailsIe = (_dec = customAttribute('details-ie'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class DetailsIe {

    constructor(element) {
        this.element = element;

        this.handleClick = e => {
            if (this.element.getAttribute("open") == "") {
                this.element.removeAttribute("open");
            } else {
                this.element.setAttribute("open", "");
            }
        };
    }

    attached() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge") != -2;
        debugger;
        if (msie) {
            this.element.children[0].addEventListener("click", this.handleClick);
        }
    }

    detached() {
        this.element.children[0].removeEventListener("click", this.handleClick);
    }
}) || _class) || _class);