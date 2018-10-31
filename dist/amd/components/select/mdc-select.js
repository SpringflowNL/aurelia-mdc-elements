define(['exports', 'aurelia-framework', '@material/select/dist/mdc.select.min'], function (exports, _aureliaFramework, _mdcSelect) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MdcSelect = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

	var MdcSelect = exports.MdcSelect = (_dec = (0, _aureliaFramework.customElement)('mdc-select'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
		function MdcSelect(element) {
			_classCallCheck(this, MdcSelect);

			_initDefineProp(this, 'label', _descriptor, this);

			_initDefineProp(this, 'data', _descriptor2, this);

			_initDefineProp(this, 'value', _descriptor3, this);

			_initDefineProp(this, 'key', _descriptor4, this);

			_initDefineProp(this, 'selected', _descriptor5, this);

			_initDefineProp(this, 'disabled', _descriptor6, this);

			_initDefineProp(this, 'required', _descriptor7, this);

			_initDefineProp(this, 'selectLabel', _descriptor8, this);

			_initDefineProp(this, 'myMdcSelect', _descriptor9, this);

			this.element = element;
		}

		MdcSelect.prototype.bind = function bind() {
			this.myMdcSelect = new _mdcSelect.MDCSelect(this.element);
			this.myMdcSelect.disabled = this.disabled;

			if (this.selected) {
				this.addFloatingLabel();
			}
		};

		MdcSelect.prototype.attached = function attached() {
			var _this = this;

			this.myMdcSelect.listen('change', function () {
				_this.selected = _this.myMdcSelect.value;

				if (!_this.myMdcSelect.value && _this.required) {
					_this.requiredChanged(true);
				} else {
					_this.requiredChanged(false);
				}
			});
		};

		MdcSelect.prototype.unbind = function unbind() {
			this.myMdcSelect.destroy();
		};

		MdcSelect.prototype.disabledChanged = function disabledChanged(newvalue) {
			this.myMdcSelect.disabled = newvalue;
		};

		MdcSelect.prototype.requiredChanged = function requiredChanged(newvalue) {
			if (newvalue) {
				this.element.classList.add('mdc-select--invalid');
			} else {
				this.element.classList.remove('mdc-select--invalid');
			}
		};

		MdcSelect.prototype.addFloatingLabel = function addFloatingLabel() {
			this.myMdcSelect.label_.root_.classList.add('mdc-floating-label--float-above');
		};

		return MdcSelect;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'selectLabel', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'myMdcSelect', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class) || _class);
});