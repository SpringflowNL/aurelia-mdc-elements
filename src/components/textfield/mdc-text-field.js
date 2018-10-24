import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';
import { MDCNotchedOutline } from '@material/notched-outline/dist/mdc.notchedOutline';

@customElement('mdc-text-field')
@inject(Element)
export class MdcTextField {
	@bindable label;
	@bindable({defaultBindingMode:bindingMode.twoWay}) value;
	@bindable disabled = false;
	@bindable required = false;
	@bindable type = 'text';
	@bindable secondarylabel = null;
	@bindable modifier = null;
	@bindable step;
	@bindable min;
	@bindable max;
	@bindable notched;

    constructor ( element) 
    {
		this.element = element;
		this.unique = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    bind() 
	{
		this.myMdcTextfield = new MDCTextField(this.element.firstElementChild);

		this.checkNotched();

		this.myMdcTextfield.disabled = this.disabled;
		this.myMdcTextfield.required = this.required;
		
		this.step ? this.stepChanged(this.step) : '';
		this.min ? this.minChanged(this.min) : '';
		this.max ? this.maxChanged(this.max) : '';
	}

	checkNotched() {
		if(this.modifier && this.modifier.indexOf('mdc-text-field--outlined') > -1) {
			new MDCNotchedOutline(document.querySelector('.mdc-notched-outline'));
		}
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

	modifierChanged(newvalue) {
		this.modifier = newvalue;

		this.checkNotched();
	}

    detached() 
    {
        this.myMdcTextfield.destroy();
    }
}
