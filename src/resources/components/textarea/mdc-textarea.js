import { bindable, customElement, inject, bindingMode } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';

@customElement('mdc-textarea')
@inject(Element)
export class MdcTextarea {
    @bindable label;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable disabled = false;
    @bindable required = false;
    @bindable modifier = null;
    @bindable secondarylabel = null;
    @bindable outlined = false;
    @bindable readonly = null;
    @bindable maxlength = null;

    constructor(element) {
        this.element = element;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    attached() {
        this.myMdcTextarea = new MDCTextField(this.element.firstElementChild);
        this.myMdcTextarea.disabled = this.disabled;
        this.myMdcTextarea.required = this.required;
        this.myMdcTextarea.outlined = this.outlined;
        this.myMdcTextarea.input.readOnly = this.readonly;

        if (this.value) {
            this.myMdcTextarea.value = this.value;
        }
    }

    valueChanged(newvalue) {
        if(this.myMdcTextarea && newvalue) this.myMdcTextarea.value = newvalue;
    }

    disabledChanged(newvalue) {
        if(this.myMdcTextarea) this.myMdcTextarea.disabled = newvalue;
    }

    requiredChanged(newvalue) {
        if(this.myMdcTextarea) this.myMdcTextarea.required = newvalue;
    }

    outlinedChanged(newvalue) {
        if(this.myMdcTextarea) this.myMdcTextarea.outlined = newvalue;
    }

    readonlyChanged(newvalue) {
        if (this.myMdcTextarea) this.myMdcTextarea.input.readOnly = newvalue;
    }

    secondarylabelChanged(newvalue) {
        if (this.myMdcTextarea) {
            this.myMdcTextarea.input.setAttribute('aria-controls', `textarea-helper--${this.unique}`);
            this.myMdcTextarea.input.setAttribute('aria-describedby', `textarea-helper--${this.unique}`);
        }
    }

    maxlengthChanged(newvalue) {
        if (this.myMdcTextarea) { 
            this.myMdcTextarea.input.maxLength = newvalue;
            this.myMdcTextarea.input.setAttribute('aria-controls', `textarea-helper--${this.unique}`);
            this.myMdcTextarea.input.setAttribute('aria-describedby', `textarea-helper--${this.unique}`);
        }
    }

    detached() {
        this.myMdcTextarea.destroy();
    }
}