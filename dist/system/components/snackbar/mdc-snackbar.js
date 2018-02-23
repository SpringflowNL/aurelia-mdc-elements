'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', 'material-components-web/dist/material-components-web'], function (_export, _context) {
	"use strict";

	var customElement, bindable, inject, EventAggregator, mdcSnackbar, _dec, _dec2, _class, MDCSnackbar, MdcSnackbar;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}, function (_materialComponentsWebDistMaterialComponentsWeb) {
			mdcSnackbar = _materialComponentsWebDistMaterialComponentsWeb.snackbar;
		}],
		execute: function () {
			MDCSnackbar = mdcSnackbar.MDCSnackbar;

			_export('MdcSnackbar', MdcSnackbar = (_dec = customElement('mdc-snackbar'), _dec2 = inject(Element, EventAggregator), _dec(_class = _dec2(_class = function () {
				function MdcSnackbar(element, ea) {
					_classCallCheck(this, MdcSnackbar);

					this.element = element;
					this.ea = ea;
				}

				MdcSnackbar.prototype.attached = function attached() {
					var _this = this;

					this.subscriber = this.ea.subscribe('PostMessage.Snackbar', function (response) {
						_this.showSnackbar(response.label, response.buttonlabel, response.dismissonaction);
					});
				};

				MdcSnackbar.prototype.detached = function detached() {
					this.subscripter.dispose();
				};

				MdcSnackbar.prototype.showSnackbar = function showSnackbar(label) {
					var buttonLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Cancel';
					var dismissOnAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

					this.mdcSnackbar = new MDCSnackbar(this.element);

					this.mdcSnackbar.dismissesOnAction = dismissOnAction;

					var data = {
						message: label,
						timout: 2750,
						actionText: buttonLabel
					};
					data.actionHandler = function () {};

					this.mdcSnackbar.show(data);
				};

				return MdcSnackbar;
			}()) || _class) || _class));

			_export('MdcSnackbar', MdcSnackbar);
		}
	};
});