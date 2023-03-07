import { inject, bindable, bindingMode } from 'aurelia-framework';
//import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

@inject(Element)
export class MdcCheckbox {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
    @bindable disabled = false;
    @bindable required = false;
    @bindable indeterminate = false;
    @bindable id;
    @bindable label;
    @bindable model;
    @bindable secondarylabel;

    constructor(element) {
        this.element = element;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    bind() {
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    attached() {
        this.mdcFormField = new MDCFormField(this.element.firstElementChild);
        this.mdcCheckbox = new MDCCheckbox(this.element.firstElementChild);
        this.mdcCheckbox.required = this.required;
        this.mdcCheckbox.disabled = this.disabled;
        this.mdcCheckbox.indeterminate = this.indeterminate;

        if (!this.id) {
            this.id = this.unique;
        }
    }

    checkedChanged(newValue) {
        const event = new CustomEvent('change', { bubbles: true, detail: { value: newValue } });
        this.element.dispatchEvent(event);

        //Set invalid class after first change
        if (!newValue && this.required) {
            this.requiredChanged(true);
        } else {
            this.requiredChanged(false);
        }
    }

    requiredChanged(newValue) {
        if (newValue) {
            this.element.classList.add('mdc-checkbox--invalid');
        } else {
            this.element.classList.remove('mdc-checkbox--invalid');
        }
    }

    disabledChanged(newValue) {
        this.mdcCheckbox.disabled = newValue;
    }

    indeterminateChanged(newValue) {
        this.mdcCheckbox.indeterminate = newValue;
    }
}