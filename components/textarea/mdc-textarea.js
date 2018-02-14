/*MDC 0.30.0*/
import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import	{ textField as mdcTextField } from 'material-components-web/dist/material-components-web';
const	{ MDCTextField } = mdcTextField;

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

    detached() 
    {
        this.myMdcTextfield.destroy();
    }
}
