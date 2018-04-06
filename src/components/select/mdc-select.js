import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import { select as mdcSelect } from 'material-components-web/dist/material-components-web';
const { MDCSelect } = mdcSelect;

@customElement('mdc-select')
@inject(Element)
export class MdcSelect {
	@bindable label;
	@bindable data;
	@bindable value;
	@bindable key;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) selected;
	@bindable disabled;
	@bindable selectLabel;
	myMdcSelect;

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

		this.myMdcSelect.listen('change', () => {
			this.selected = this.myMdcSelect.value;
		});
	}
	disabledChanged(newvalue) {
		this.myMdcSelect.disabled = newvalue;
	}

	detached() {
		this.myMdcSelect.destroy();
	}

	addFloatingLabel() {
		this.myMdcSelect.label_.root_.classList.add('mdc-select__label--float-above');
	}
}
