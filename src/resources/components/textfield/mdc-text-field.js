import { bindable, customElement, inject, bindingMode } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';

@customElement('mdc-text-field')
@inject(Element)
export class MdcTextField {
    @bindable label;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable disabled = false;
    @bindable required = false;
    @bindable type = 'text';
    @bindable secondarylabel = null;
    @bindable modifier = null;
    @bindable step;
    @bindable min;
    @bindable max;
    @bindable leading;
    @bindable trailing;
    @bindable outlined = false;

    constructor(element) {
        this.element = element;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    bind() {
        if (this.myMdcTextfield) {
            this.refreshOptions();
        }
    }

    attached() {
        this.myMdcTextfield = new MDCTextField(this.element.firstElementChild);
        this.refreshOptions();
    }

    refreshOptions() {
        this.step ? this.stepChanged(this.step) : '';
        this.min ? this.minChanged(this.min) : '';
        this.max ? this.maxChanged(this.max) : '';

        this.myMdcTextfield.disabled = this.disabled;
        this.myMdcTextfield.required = this.required;
        this.myMdcTextfield.outlined = this.outlined;
        this.myMdcTextfield.ripple = true;

        if (this.value) {
            this.myMdcTextfield.value = this.value;
        }
    }

    disabledChanged(newvalue) {
        if (this.myMdcTextfield) this.myMdcTextfield.disabled = newvalue;
    }

    requiredChanged(newvalue) {
        if (this.myMdcTextfield) this.myMdcTextfield.required = newvalue;
    }

    stepChanged(newvalue) {
        if (this.myMdcTextfield) this.myMdcTextfield.step = newvalue;
    }

    valueChanged(newvalue) {
        if (this.myMdcTextfield && newvalue) this.myMdcTextfield.value = newvalue;
    }

    outlinedChanged(newvalue) {
        if (this.myMdcTextfield) this.myMdcTextfield.outlined = newvalue;
    }

    minChanged(newvalue) {
        if (this.type === 'number') {
            if(this.myMdcTextfield) this.myMdcTextfield.input.min = newvalue;
        } else {
            if(this.myMdcTextfield) this.myMdcTextfield.input.minLength = newvalue;
        }
    }

    maxChanged(newvalue) {
        if (this.type === 'number') {
            if(this.myMdcTextfield) this.myMdcTextfield.input.max = newvalue;
        } else {
            if(this.myMdcTextfield) this.myMdcTextfield.input.maxLength = newvalue;
        }
    }

    secondarylabelChanged(newvalue) {
        if (this.myMdcTextfield && newvalue) {
            this.myMdcTextfield.input.setAttribute('aria-controls', `text-field--${this.unique}`);
            this.myMdcTextfield.input.setAttribute('aria-describedby', `text-field--${this.unique}`);
        }
    }
}