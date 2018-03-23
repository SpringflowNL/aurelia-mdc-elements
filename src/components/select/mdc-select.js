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

		this.myMdcSelect.listen('MDCSelect:change', () => {
			this.selected = this.myMdcSelect.selectedOptions[0].dataset.id;
			this.selectedChanged();
		});
	}

	attached() {
		this.selectedChanged();
	}

	selectedChanged() {
		var self = this;
		setTimeout(function() {
				try {
					const index = self.myMdcSelect.options.findIndex(item => item.dataset.id == self.selected);
					if (self.myMdcSelect.selectedIndex !== index) {
						self.myMdcSelect.selectedIndex = index;
					}

					self.checkFloatingLabel(index, self.selected);
				}
				catch (e) {}
			},
			10);
	}

	dataChanged(newvalue) {
		this.selectedChanged();
	}

	disabledChanged(newvalue) {
		this.myMdcSelect.disabled = newvalue;
	}

	detached() {
		this.myMdcSelect.destroy();
	}

	checkFloatingLabel(index, selected) {
		if (index !== -1 && selected) {
			this.selectLabel.classList.add('mdc-select__label--float-above');
		}
		else {
			this.selectLabel.classList.remove('mdc-select__label--float-above');
		}
	}
}
