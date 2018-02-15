var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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

import { inject, bindable, customElement, bindingMode, DOM } from 'aurelia-framework';

export let MdcProgress = (_dec = customElement('mdc-progress'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = class MdcProgress {

	constructor(element) {
		_initDefineProp(this, 'value', _descriptor, this);

		_initDefineProp(this, 'min', _descriptor2, this);

		_initDefineProp(this, 'max', _descriptor3, this);

		_initDefineProp(this, 'buffer', _descriptor4, this);

		this.element = element;
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [bindable], {
	enumerable: true,
	initializer: function () {
		return 0;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'min', [bindable], {
	enumerable: true,
	initializer: function () {
		return 0;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'max', [bindable], {
	enumerable: true,
	initializer: function () {
		return 0;
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'buffer', [bindable], {
	enumerable: true,
	initializer: function () {
		return false;
	}
})), _class2)) || _class) || _class);