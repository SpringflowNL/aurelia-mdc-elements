import {bindable, customAttribute, inject, DOM} from 'aurelia-framework';
//import {MDCRipple} from 'material-components-web';
//import '@material/ripple/dist/mdc.ripple.css';

import {ripple as mdcRipple} from 'material-components-web/dist/material-components-web';
const {MDCRipple, MDCRippleFoundation} = mdcRipple;

@customAttribute('mdc-ripple')
@inject(Element)
export class MdcRipple {
    @bindable() unbounded = false;
    mdcRipple;

    constructor ( element) {
    	this.element= element;
}
    bind() {
        this.mdcRipple = new MDCRipple(this.element);
    }

    attached() {
        this.element.classList.add('mdc-ripple-surface');
    }

    detached() {
        this.mdcRipple.destroy();
    }

    unboundedChanged(newValue) {
        this.mdcRipple.unbounded = (newValue === true || newValue === 'true');
    }
}
