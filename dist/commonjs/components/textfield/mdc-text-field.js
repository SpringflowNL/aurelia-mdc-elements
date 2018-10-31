'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MdcTextField = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

var _aureliaFramework = require('aurelia-framework');

var _mdcTextfield = require('@material/textfield/dist/mdc.textfield.min');

var _mdcNotchedOutline = require('@material/notched-outline/dist/mdc.notchedOutline.min');

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var MdcTextField = exports.MdcTextField = (_dec = (0, _aureliaFramework.customElement)('mdc-text-field'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
	function MdcTextField(element) {
		_classCallCheck(this, MdcTextField);

		_initDefineProp(this, 'label', _descriptor, this);

		_initDefineProp(this, 'value', _descriptor2, this);

		_initDefineProp(this, 'disabled', _descriptor3, this);

		_initDefineProp(this, 'required', _descriptor4, this);

		_initDefineProp(this, 'type', _descriptor5, this);

		_initDefineProp(this, 'secondarylabel', _descriptor6, this);

		_initDefineProp(this, 'modifier', _descriptor7, this);

		_initDefineProp(this, 'step', _descriptor8, this);

		_initDefineProp(this, 'min', _descriptor9, this);

		_initDefineProp(this, 'max', _descriptor10, this);

		this.element = element;
		this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	}

	MdcTextField.prototype.bind = function bind() {
		if (this.myMdcTextfield) {
			this.step ? this.stepChanged(this.step) : '';
			this.min ? this.minChanged(this.min) : '';
			this.max ? this.maxChanged(this.max) : '';

			this.myMdcTextfield.disabled = this.disabled;
			this.myMdcTextfield.required = this.required;
		}
	};

	MdcTextField.prototype.attached = function attached() {
		this.myMdcTextfield = new _mdcTextfield.MDCTextField(this.element.firstElementChild);
	};

	MdcTextField.prototype.disabledChanged = function disabledChanged(newvalue) {
		this.myMdcTextfield.disabled = newvalue;
	};

	MdcTextField.prototype.requiredChanged = function requiredChanged(newvalue) {
		this.myMdcTextfield.required = newvalue;
	};

	MdcTextField.prototype.stepChanged = function stepChanged(newvalue) {
		this.myMdcTextfield.input_.setAttribute("step", newvalue);
	};

	MdcTextField.prototype.minChanged = function minChanged(newvalue) {
		if (this.type === 'number') {
			this.myMdcTextfield.input_.setAttribute("min", newvalue);
		} else {
			this.myMdcTextfield.input_.setAttribute("minlength", newvalue);
		}
	};

	MdcTextField.prototype.maxChanged = function maxChanged(newvalue) {
		if (this.type === 'number') {
			this.myMdcTextfield.input_.setAttribute("max", newvalue);
		} else {
			this.myMdcTextfield.input_.setAttribute("maxlength", newvalue);
		}
	};

	MdcTextField.prototype.detached = function detached() {
		this.myMdcTextfield.destroy();
	};

	return MdcTextField;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
	enumerable: true,
	initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return 'text';
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secondarylabel', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'modifier', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'step', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'min', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'max', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
})), _class2)) || _class) || _class);