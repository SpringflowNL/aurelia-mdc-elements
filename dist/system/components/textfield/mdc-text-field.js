'use strict';

System.register(['aurelia-framework', 'material-components-web/dist/material-components-web'], function (_export, _context) {
	"use strict";

	var bindable, customElement, inject, DOM, bindingMode, mdcTextField, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, MDCTextField, MdcTextField;

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

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			customElement = _aureliaFramework.customElement;
			inject = _aureliaFramework.inject;
			DOM = _aureliaFramework.DOM;
			bindingMode = _aureliaFramework.bindingMode;
		}, function (_materialComponentsWebDistMaterialComponentsWeb) {
			mdcTextField = _materialComponentsWebDistMaterialComponentsWeb.textField;
		}],
		execute: function () {
			MDCTextField = mdcTextField.MDCTextField;

			_export('MdcTextField', MdcTextField = (_dec = customElement('mdc-text-field'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
				function MdcTextField(element) {
					_classCallCheck(this, MdcTextField);

					_initDefineProp(this, 'label', _descriptor, this);

					_initDefineProp(this, 'value', _descriptor2, this);

					_initDefineProp(this, 'disabled', _descriptor3, this);

					_initDefineProp(this, 'required', _descriptor4, this);

					_initDefineProp(this, 'type', _descriptor5, this);

					_initDefineProp(this, 'secondarylabel', _descriptor6, this);

					_initDefineProp(this, 'dense', _descriptor7, this);

					this.element = element;
				}

				MdcTextField.prototype.bind = function bind() {
					this.myMdcTextfield = new MDCTextField(this.element.firstElementChild);
					this.myMdcTextfield.disabled = this.disabled;
					this.myMdcTextfield.required = this.required;
				};

				MdcTextField.prototype.disabledChanged = function disabledChanged(newvalue) {
					this.myMdcTextfield.disabled = newvalue;
				};

				MdcTextField.prototype.requiredChanged = function requiredChanged(newvalue) {
					this.myMdcTextfield.required = newvalue;
				};

				MdcTextField.prototype.detached = function detached() {
					this.myMdcTextfield.destroy();
				};

				return MdcTextField;
			}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
				enumerable: true,
				initializer: null
			}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
				enumerable: true,
				initializer: null
			}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return 'text';
				}
			}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secondarylabel', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return null;
				}
			}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'dense', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			})), _class2)) || _class) || _class));

			_export('MdcTextField', MdcTextField);
		}
	};
});