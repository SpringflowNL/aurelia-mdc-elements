var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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
import { textField as mdcTextField } from 'material-components-web/dist/material-components-web';
const { MDCTextField } = mdcTextField;

export let MdcTextarea = (_dec = customElement('mdc-textarea'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class MdcTextarea {

	constructor(element) {
		_initDefineProp(this, 'label', _descriptor, this);

		_initDefineProp(this, 'value', _descriptor2, this);

		_initDefineProp(this, 'disabled', _descriptor3, this);

		_initDefineProp(this, 'required', _descriptor4, this);

		_initDefineProp(this, 'dense', _descriptor5, this);

		this.element = element;
	}

	bind() {
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

	detached() {
		this.myMdcTextfield.destroy();
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
	enumerable: true,
	initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
	enumerable: true,
	initializer: function () {
		return false;
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
	enumerable: true,
	initializer: function () {
		return false;
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'dense', [bindable], {
	enumerable: true,
	initializer: function () {
		return false;
	}
})), _class2)) || _class) || _class);