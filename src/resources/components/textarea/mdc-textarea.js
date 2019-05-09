import { bindable, customElement, inject, bindingMode } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield.min';

@customElement('mdc-textarea')
@inject(Element)
export class MdcTextarea {
    @bindable label;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable disabled = false;
    @bindable required = false;
    @bindable modifier = null;
    @bindable secondarylabel = null;

    constructor(element) {
        this.element = element;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    bind() {
        this.myMdcTextfield = new MDCTextField(this.element.firstElementChild);
        this.myMdcTextfield.disabled = this.disabled;
        this.myMdcTextfield.required = this.required;

        if (this.value) {
            this.myMdcTextfield.value = this.value;
        }
    }

    valueChanged(newvalue) {
        this.myMdcTextfield.value = newvalue;
    }

    disabledChanged(newvalue) {
        this.myMdcTextfield.disabled = newvalue;
    }

    requiredChanged(newvalue) {
        this.myMdcTextfield.required = newvalue;
    }

    detached() {
        this.myMdcTextfield.destroy();
    }
}