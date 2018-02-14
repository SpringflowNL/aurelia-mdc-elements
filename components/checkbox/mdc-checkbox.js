/*MDC 0.30.0*/
import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';
import {checkbox as mdcCheckbox} from 'material-components-web/dist/material-components-web';
const {MDCCheckbox} = mdcCheckbox;

@inject(Element)
export class MdcCheckbox {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
    @bindable disabled = false;
	@bindable id;
	@bindable label;
	@bindable secondarylabel;
    mdcCheckbox;

    constructor( element) {
    	this.element= element;
    }

    bind() {
		this.mdcCheckbox = new MDCCheckbox(this.element);
		this.element.id = '_' + this.id; // anders heeft dit element zelfde id als input. Raakt label for="" in de war
    }

    handleChange(e) {
        // stop propagation so we're able to fire our own event when data-binding changes checked value
        e.stopPropagation();
    }

    checkedChanged(newValue) {
        this.indeterminate = false;
        const event = new CustomEvent('change', { bubbles: true, detail: { value: newValue }});
        this.element.dispatchEvent(event);
    }

    disabledChanged(newValue) {
        this.mdcCheckbox.disabled = !!newValue;
    }
}
