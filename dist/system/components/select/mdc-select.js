'use strict';

System.register(['aurelia-framework', 'material-components-web/dist/material-components-web'], function (_export, _context) {
	"use strict";

	var bindable, customElement, inject, DOM, bindingMode, mdcSelect, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, MDCSelect, MdcSelect;

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
			mdcSelect = _materialComponentsWebDistMaterialComponentsWeb.select;
		}],
		execute: function () {
			MDCSelect = mdcSelect.MDCSelect;

			_export('MdcSelect', MdcSelect = (_dec = customElement('mdc-select'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
				function MdcSelect(element) {
					_classCallCheck(this, MdcSelect);

					_initDefineProp(this, 'label', _descriptor, this);

					_initDefineProp(this, 'data', _descriptor2, this);

					_initDefineProp(this, 'value', _descriptor3, this);

					_initDefineProp(this, 'key', _descriptor4, this);

					_initDefineProp(this, 'selected', _descriptor5, this);

					_initDefineProp(this, 'disabled', _descriptor6, this);

					_initDefineProp(this, 'selectLabel', _descriptor7, this);

					this.element = element;
				}

				MdcSelect.prototype.bind = function bind() {
					var _this = this;

					this.myMdcSelect = new MDCSelect(this.element);
					this.myMdcSelect.disabled = this.disabled;

					if (this.selected) {
						this.addFloatingLabel();
					}

					this.myMdcSelect.listen('change', function () {
						_this.selected = _this.myMdcSelect.value;
					});
				};

				MdcSelect.prototype.disabledChanged = function disabledChanged(newvalue) {
					this.myMdcSelect.disabled = newvalue;
				};

				MdcSelect.prototype.detached = function detached() {
					this.myMdcSelect.destroy();
				};

				MdcSelect.prototype.addFloatingLabel = function addFloatingLabel() {
					this.myMdcSelect.label_.root_.classList.add('mdc-select__label--float-above');
				};

				return MdcSelect;
			}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
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
			})), _class2)) || _class) || _class));

			_export('MdcSelect', MdcSelect);
		}
	};
});