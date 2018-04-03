var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { bindable, customElement, inject, DOM, bindingMode } from 'aurelia-framework';
import { select as mdcSelect } from 'material-components-web/dist/material-components-web';
const { MDCSelect } = mdcSelect;

export let MdcSelect = (_dec = customElement('mdc-select'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class MdcSelect {

	constructor(element) {
		_initDefineProp(this, 'label', _descriptor, this);

		_initDefineProp(this, 'data', _descriptor2, this);

		_initDefineProp(this, 'value', _descriptor3, this);

		_initDefineProp(this, 'key', _descriptor4, this);

		_initDefineProp(this, 'selected', _descriptor5, this);

		_initDefineProp(this, 'disabled', _descriptor6, this);

		_initDefineProp(this, 'selectLabel', _descriptor7, this);

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
		setTimeout(function () {
			try {
				const index = self.myMdcSelect.options.findIndex(item => item.dataset.id == self.selected);
				if (self.myMdcSelect.selectedIndex !== index) {
					self.myMdcSelect.selectedIndex = index;
				}

				self.checkFloatingLabel(index, self.selected);
			} catch (e) {}
		}, 500);
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
		} else {
			this.selectLabel.classList.remove('mdc-select__label--float-above');
		}
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'value', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'key', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec3], {
	enumerable: true,
	initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'selectLabel', [bindable], {
	enumerable: true,
	initializer: null
})), _class2)) || _class) || _class);