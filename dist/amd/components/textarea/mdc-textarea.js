define(['exports', 'aurelia-framework', 'material-components-web/dist/material-components-web'], function (exports, _aureliaFramework, _materialComponentsWeb) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MdcTextarea = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

	var MDCTextField = _materialComponentsWeb.textField.MDCTextField;
	var MdcTextarea = exports.MdcTextarea = (_dec = (0, _aureliaFramework.customElement)('mdc-textarea'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
		function MdcTextarea(element) {
			_classCallCheck(this, MdcTextarea);

			_initDefineProp(this, 'label', _descriptor, this);

			_initDefineProp(this, 'value', _descriptor2, this);

			_initDefineProp(this, 'disabled', _descriptor3, this);

			_initDefineProp(this, 'required', _descriptor4, this);

			_initDefineProp(this, 'dense', _descriptor5, this);

			this.element = element;
		}

		MdcTextarea.prototype.bind = function bind() {
			this.myMdcTextfield = new MDCTextField(this.element.firstElementChild);
			this.myMdcTextfield.disabled = this.disabled;
			this.myMdcTextfield.required = this.required;
		};

		MdcTextarea.prototype.disabledChanged = function disabledChanged(newvalue) {
			this.myMdcTextfield.disabled = newvalue;
		};

		MdcTextarea.prototype.detached = function detached() {
			this.myMdcTextfield.destroy();
		};

		return MdcTextarea;
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
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'dense', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return false;
		}
	})), _class2)) || _class) || _class);
});