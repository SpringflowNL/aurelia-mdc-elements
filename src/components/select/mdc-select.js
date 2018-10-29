import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import { MDCSelect } from '@material/select/dist/mdc.select.min';

@customElement('mdc-select')
@inject(Element)
export class MdcSelect {
	@bindable label;
	@bindable data;
	@bindable value;
	@bindable key;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) selected;
	@bindable disabled;
	@bindable required;
	@bindable selectLabel;
	@bindable myMdcSelect;

	constructor(element) {
		this.element = element;
	}

	bind() {
		this.myMdcSelect = new MDCSelect(this.element);
		this.myMdcSelect.disabled = this.disabled;

		//TODO: Change this by better implementation of MDC
		if(this.selected) {
			this.addFloatingLabel();
		}
	}

	attached() {
		this.myMdcSelect.listen('change', () => {
			this.selected = this.myMdcSelect.value;

			//Set invalid class after first change
			if(!this.myMdcSelect.value && this.required) {
				this.requiredChanged(true);
			} else {
				this.requiredChanged(false);
			}
		});
	}

	unbind() {
		this.myMdcSelect.destroy();
	}

	disabledChanged(newvalue) {
		this.myMdcSelect.disabled = newvalue;
	}

	requiredChanged(newvalue) {
		if(newvalue) {
			this.element.classList.add('mdc-select--invalid');
		}
		else {
			this.element.classList.remove('mdc-select--invalid');
		}
	}

	addFloatingLabel() {
		this.myMdcSelect.label_.root_.classList.add('mdc-floating-label--float-above');
	}
}
