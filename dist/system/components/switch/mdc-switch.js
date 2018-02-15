"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
	"use strict";

	var inject, bindable, bindingMode, DOM, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, MdcSwitch;

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
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
			bindingMode = _aureliaFramework.bindingMode;
			DOM = _aureliaFramework.DOM;
		}],
		execute: function () {
			_export("MdcSwitch", MdcSwitch = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function MdcSwitch() {
				_classCallCheck(this, MdcSwitch);

				_initDefineProp(this, "label", _descriptor, this);

				_initDefineProp(this, "disabled", _descriptor2, this);

				_initDefineProp(this, "active", _descriptor3, this);
			}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
				enumerable: true,
				initializer: function initializer() {
					return "on/off";
				}
			}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_dec3], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec4], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			})), _class2)) || _class));

			_export("MdcSwitch", MdcSwitch);
		}
	};
});