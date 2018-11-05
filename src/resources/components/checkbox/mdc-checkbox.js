import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min';

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

    constructor( element) {
    	this.element= element;
    }

    bind() {
		this.mdcCheckbox = new MDCCheckbox(this.element);
		this.element.id = '_' + this.id; // anders heeft dit element zelfde id als input. Raakt label for="" in de war
    }

    attached() {
        this.mdcCheckbox.required = this.required;
        this.mdcCheckbox.disabled = this.disabled;
        this.mdcCheckbox.indeterminate = this.indeterminate;
    }

    checkedChanged(newValue) {
        const event = new CustomEvent('change', { bubbles: true, detail: { value: newValue }});
        this.element.dispatchEvent(event);
        
        //Set invalid class after first change
        if(!newValue && this.required) {
            this.requiredChanged(true);
        } else {
            this.requiredChanged(false);
        }
    }

    requiredChanged(newValue) {
        if(newValue) {
			this.element.classList.add('mdc-checkbox--invalid');
		}
		else {
			this.element.classList.remove('mdc-checkbox--invalid');
		}
    }

    disabledChanged(newValue) {
        this.mdcCheckbox.disabled = newValue;
    }

    indeterminateChanged(newValue) {debugger
        this.mdcCheckbox.indeterminate = newValue;
    }
}
