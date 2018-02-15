var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';

export let MdcSwitch = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class MdcSwitch {
	constructor() {
		_initDefineProp(this, "label", _descriptor, this);

		_initDefineProp(this, "disabled", _descriptor2, this);

		_initDefineProp(this, "active", _descriptor3, this);
	}

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
	enumerable: true,
	initializer: function () {
		return "on/off";
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_dec3], {
	enumerable: true,
	initializer: function () {
		return false;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec4], {
	enumerable: true,
	initializer: function () {
		return true;
	}
})), _class2)) || _class);