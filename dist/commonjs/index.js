'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

function configure(config) {
	var components = [_aureliaPal.PLATFORM.moduleName('./components/checkbox/mdc-checkbox'), _aureliaPal.PLATFORM.moduleName('./components/details/details'), _aureliaPal.PLATFORM.moduleName('./components/menu/mdc-menu'), _aureliaPal.PLATFORM.moduleName('./components/progress/mdc-progress'), _aureliaPal.PLATFORM.moduleName('./components/select/mdc-select'), _aureliaPal.PLATFORM.moduleName('./components/snackbar/mdc-snackbar'), _aureliaPal.PLATFORM.moduleName('./components/switch/mdc-switch'), _aureliaPal.PLATFORM.moduleName('./components/textfield/mdc-text-field'), _aureliaPal.PLATFORM.moduleName('./components/radio/mdc-radio'), _aureliaPal.PLATFORM.moduleName('./components/textarea/mdc-textarea')];
	config.globalResources(components);
}