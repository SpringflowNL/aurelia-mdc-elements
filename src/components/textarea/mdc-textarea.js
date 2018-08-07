import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import { textField as mdcTextField } from 'material-components-web/dist/material-components-web';
const { MDCTextField } = mdcTextField;

@customElement('mdc-textarea')
@inject(Element)
export class MdcTextarea {
	@bindable label;
	@bindable({defaultBindingMode:bindingMode.twoWay}) value;
	@bindable disabled = false;
	@bindable required = false;
	@bindable dense = false;

    constructor ( element) 
    {
		this.element = element;
		this.unique = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    bind() 
	{
		this.myMdcTextfield = new MDCTextField(this.element.firstElementChild);
		this.myMdcTextfield.disabled = this.disabled;
	    this.myMdcTextfield.required = this.required;
    }

	disabledChanged(newvalue) {
		this.myMdcTextfield.disabled = newvalue;
	}

	requiredChanged(newvalue) {
		this.myMdcTextfield.required = newvalue;
	}

    detached() 
    {
        this.myMdcTextfield.destroy();
    }
}
