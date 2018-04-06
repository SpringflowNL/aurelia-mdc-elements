import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import { textField as mdcTextField } from 'material-components-web/dist/material-components-web';
const { MDCTextField } = mdcTextField;

@customElement('mdc-text-field')
@inject(Element)
export class MdcTextField {
	@bindable label;
	@bindable({defaultBindingMode:bindingMode.twoWay}) value;
	@bindable disabled = false;
	@bindable required = false;
	@bindable type = 'text';
	@bindable secondarylabel = null;
	@bindable dense = false;
    myMdcTextfield;

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

	requiredChanged(newvalue) {
		this.myMdcTextfield.required = newvalue;
	}

    detached() 
    {
        this.myMdcTextfield.destroy();
    }
}
