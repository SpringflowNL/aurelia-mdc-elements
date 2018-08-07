var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

import { inject, customElement, bindable, bindingMode, DOM } from 'aurelia-framework';
import { switchControl as mdcSwitch } from 'material-components-web/dist/material-components-web';
const { MDCSwitch } = mdcSwitch;

export let MdcSwitch = (_dec = customElement('mdc-switch'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class MdcSwitch {

	constructor(element) {
		_initDefineProp(this, 'label', _descriptor, this);

		_initDefineProp(this, 'disabled', _descriptor2, this);

		_initDefineProp(this, 'active', _descriptor3, this);

		this.element = element;
		this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	}

	bind() {
		this.myMDCSwitch = new MDCSwitch(this.element.firstElementChild);
	}

	disabledChanged(newvalue) {
		this.myMDCSwitch.disabled = newvalue;
	}

	activeChanged(newvalue) {
		this.myMDCSwitch.checked = newvalue;
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec3], {
	enumerable: true,
	initializer: function () {
		return "on/off";
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec4], {
	enumerable: true,
	initializer: function () {
		return false;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'active', [_dec5], {
	enumerable: true,
	initializer: function () {
		return true;
	}
})), _class2)) || _class) || _class);