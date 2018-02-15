'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
	"use strict";

	var PLATFORM;
	function configure(config) {
		var components = [PLATFORM.moduleName('./components/checkbox/mdc-checkbox'), PLATFORM.moduleName('./components/details/details'), PLATFORM.moduleName('./components/menu/mdc-menu'), PLATFORM.moduleName('./components/progress/mdc-progress'), PLATFORM.moduleName('./components/select/mdc-select'), PLATFORM.moduleName('./components/snackbar/mdc-snackbar'), PLATFORM.moduleName('./components/switch/mdc-switch'), PLATFORM.moduleName('./components/textfield/mdc-text-field'), PLATFORM.moduleName('./components/radio/mdc-radio'), PLATFORM.moduleName('./components/textarea/mdc-textarea')];
		config.globalResources(components);
	}

	_export('configure', configure);

	return {
		setters: [function (_aureliaPal) {
			PLATFORM = _aureliaPal.PLATFORM;
		}],
		execute: function () {}
	};
});