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
	@bindable step;
	@bindable min;
	@bindable max;
    myMdcTextfield;

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
		
		this.step ? this.stepChanged(this.step) : '';
		this.min ? this.minChanged(this.min) : '';
		this.max ? this.maxChanged(this.max) : '';
	}

	disabledChanged(newvalue) {
		this.myMdcTextfield.disabled = newvalue;
	}

	requiredChanged(newvalue) {
		this.myMdcTextfield.required = newvalue;
	}

	stepChanged(newvalue) {
		this.myMdcTextfield.input_.setAttribute("step", newvalue);
	}

	minChanged(newvalue) {
		if(this.type === 'number') {
			this.myMdcTextfield.input_.setAttribute("min", newvalue);
		} else {
			this.myMdcTextfield.input_.setAttribute("minlength", newvalue);
		}
	}

	maxChanged(newvalue) {
		if(this.type === 'number') {
			this.myMdcTextfield.input_.setAttribute("max", newvalue);
		} else {
			this.myMdcTextfield.input_.setAttribute("maxlength", newvalue);
		}
	}

    detached() 
    {
        this.myMdcTextfield.destroy();
    }
}
