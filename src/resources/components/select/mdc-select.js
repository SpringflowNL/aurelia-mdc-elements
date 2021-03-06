﻿import { bindable, customElement, inject, bindingMode } from 'aurelia-framework';
import { MDCSelect } from '@material/select/dist/mdc.select.min';

@customElement('mdc-select')
@inject(Element)
export class MdcSelect {
    @bindable label;
    @bindable data;
    @bindable value;
    @bindable key;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) selected;
    @bindable selectedValue;
    @bindable disabled;
    @bindable required;
    @bindable selectLabel;
    @bindable secondarylabel;
    @bindable modifier = null;
    @bindable leading;

    constructor(element) {
        this.element = element;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    bind() {
        if (this.myMdcSelect) {
            this.refreshOptions();
        }
    }

    attached() {
        this.myMdcSelect = new MDCSelect(this.element.firstElementChild);

        this.myMdcSelect.listen('change', () => {
            this.changedEvent = true;
            this.selected = this.myMdcSelect.value;

            //Set invalid class after first change
            if (!this.myMdcSelect.value && this.required) {
                this.requiredChanged(true);
            } else {
                this.requiredChanged(false);
            }

        });

        this.refreshOptions();
    }

    selectedChanged(newvalue) {
        if (!this.changedEvent) {
            this.selectedValue = newvalue;            
        }            
        
        this.changedEvent = false;
    }

    refreshOptions() {
        this.myMdcSelect.disabled = this.disabled;
        this.myMdcSelect.required = this.required;
        this.selectedValue = this.selected;
    }

    detached() {
        this.myMdcSelect.destroy();
    }

    disabledChanged(newvalue) {
        this.myMdcSelect.disabled = newvalue;
    }

    requiredChanged(newvalue) {
        if (newvalue) {
            this.element.firstElementChild.classList.add('mdc-select--invalid');
        } else {
            this.element.firstElementChild.classList.remove('mdc-select--invalid');
        }
    }
}