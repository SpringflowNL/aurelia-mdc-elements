define(['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'material-components-web/dist/material-components-web'], function (exports, _aureliaFramework, _aureliaEventAggregator, _materialComponentsWeb) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MdcSnackbar = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _dec2, _class;

	var MDCSnackbar = _materialComponentsWeb.snackbar.MDCSnackbar;
	var MdcSnackbar = exports.MdcSnackbar = (_dec = (0, _aureliaFramework.customElement)('mdc-snackbar'), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = function () {
		function MdcSnackbar(element, ea) {
			_classCallCheck(this, MdcSnackbar);

			this.element = element;
			this.ea = ea;
		}

		MdcSnackbar.prototype.attached = function attached() {
			var _this = this;

			this.subscriber = this.ea.subscribe('PostMessage.Snackbar', function (response) {
				_this.showSnackbar(response.label, response.button - label, response.dismiss - on - action);
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
	}()) || _class) || _class);
});