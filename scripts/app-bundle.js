define('app',["exports", "aurelia-framework", "aurelia-event-aggregator", "@material/top-app-bar", "@material/drawer"], function (_exports, _aureliaFramework, _aureliaEventAggregator, _topAppBar, _drawer) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;
  var _dec, _class;
  //import { MDCSlider } from '@material/slider';
  //import { MDCTabBar } from '@material/tab-bar';
  var App = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = /*#__PURE__*/function () {
    function App(ea) {
      this.ea = ea;
      this.label = 'Custom';
      this.type = 'text';
      this.modifier = null;
      this.leading = null;
      this.trailing = null;
      this.staticArray = [{
        key: true,
        value: 'True story'
      }, {
        key: false,
        value: 'Bad story'
      }];
    }
    var _proto = App.prototype;
    _proto.prefillValues = function prefillValues() {
      this.value = 'Value';
      this.boolvalue = true;
      this.secondary = 'Helper text';
      this.dynamicArray = [{
        key: true,
        value: 'True story'
      }, {
        key: false,
        value: 'Bad story'
      }];
    };
    _proto.attached = function attached() {
      this.topAppBar = new _topAppBar.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
      this.drawer = new _drawer.MDCDrawer(document.querySelector('.mdc-drawer'));

      // this.slider = new MDCSlider(this.slider);
      // this.sliderDisabled = new MDCSlider(this.sliderDisabled);
      // this.sliderDiscrete = new MDCSlider(this.sliderDiscrete);
      // this.sliderDiscreteDisabled = new MDCSlider(this.sliderDiscreteDisabled);
      // this.slidertick = new MDCSlider(this.sliderTick);
      // this.slidertickDisabled = new MDCSlider(this.sliderTickDisabled);

      //this.tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

      this.handleTopAppBarWithDrawer();
      //this.handleSliders();
    };
    _proto.handleTopAppBarWithDrawer = function handleTopAppBarWithDrawer() {
      var _this = this;
      this.topAppBar.setScrollTarget(document.getElementById('main-content'));
      this.topAppBar.listen('MDCTopAppBar:nav', function () {
        _this.drawer.open = !_this.drawer.open;
      });
    }

    // handleSliders() {
    //   const self = this; 

    //   setTimeout(function() {
    //     self.slider.layout();
    //     self.sliderDisabled.layout();
    //     self.sliderDiscrete.layout();
    //     self.sliderDiscreteDisabled.layout();
    //     self.slidertick.layout();
    //     self.slidertickDisabled.layout();
    //   }, 200);

    //   return true;
    // }
    ;
    _proto.triggerSnackbar = function triggerSnackbar() {
      this.ea.publish('PostMessage.Snackbar', {
        label: this.label,
        buttonlabel: this.secondary
      });
    };
    return App;
  }()) || _class);
  _exports.App = App;
});;
define('text!app.css',[],function(){return "@use \"@material/theme\" with (\r\n  $primary: #fcb8ab,\r\n  $secondary: #feeae6,\r\n  $on-primary: #442b2d,\r\n  $on-secondary: #442b2d,\r\n);\n:root {\n  --mdc-theme-primary: #3CC69E;\n  --mdc-theme-secondary: #c63c63; }\n\n/* Drawer - based on drawer in combination with mdc-top-app-bar */\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0; }\n\n.mdc-drawer-app-content {\n  -webkit-box-flex: 1;\n  -ms-flex: auto;\n  flex: auto;\n  overflow: auto;\n  position: relative; }\n\n.main-content {\n  overflow: auto;\n  height: 100%; }\n\n.app-bar {\n  position: absolute; }\n\n/* end drawer styling */\n.mdc-drawer {\n  width: 300px; }\n  .mdc-drawer__content .mdc-layout-grid {\n    padding: 0 12px; }\n\n.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {\n  margin-left: 300px; }\n\n/*TextField*/\n.mdc-text-field, mdc-text-field {\n  width: 100%; }\n";});;
define('text!app.html',[],function(){return "<template>\r\n  <require from=\"app.css\"></require>\r\n\r\n  <aside class=\"mdc-drawer mdc-drawer--dismissible\">\r\n    <div class=\"mdc-drawer__header\">\r\n      <h3 class=\"mdc-drawer__title\">Opties</h3>\r\n      <h6 class=\"mdc-drawer__subtitle\">custom</h6>\r\n    </div>\r\n    <div class=\"mdc-drawer__content\">\r\n      <div class=\"mdc-layout-grid\">\r\n        <div class=\"mdc-layout-grid__inner\">\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"label\" label=\"Label\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"value\" label=\"Value\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"secondary\" label=\"Secondary text\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-switch active.bind=\"boolvalue\" label=\"Boolean value\"></mdc-switch>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-switch active.bind=\"disabled\" label=\"Disabled\"></mdc-switch>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-switch active.bind=\"required\" label=\"Required\"></mdc-switch>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"leading\" label=\"Leading\" leading.bind=\"leading\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"trailing\" label=\"Trailing\" trailing.bind=\"trailing\"></mdc-text-field>\r\n          </div>\r\n          <hr />\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"type\" label=\"Type\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field type=\"number\" value.bind=\"min\" label=\"Min\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field type=\"number\" value.bind=\"max\" label=\"Max\"></mdc-text-field>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-switch active.bind=\"buffer\" label=\"Buffer\"></mdc-switch>\r\n          </div>\r\n          <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n            <mdc-text-field value.bind=\"modifier\" label=\"Modifier\"></mdc-text-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </aside>\r\n\r\n  <div class=\"mdc-drawer-app-content\">\r\n    <header class=\"mdc-top-app-bar mdc-top-app-bar--prominent\">\r\n      <div class=\"mdc-top-app-bar__row\">\r\n        <section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\">\r\n\t\t\t<button class=\"material-icons mdc-top-app-bar__navigation-icon mdc-icon-button\">menu</button>\r\n          <span class=\"mdc-top-app-bar__title\">Aurelia MDC Elements - Demopage</span>\r\n        </section>\r\n      </div>\r\n    </header>\r\n\r\n    <main class=\"main-content\" id=\"main-content\">\r\n      <div class=\"mdc-top-app-bar--prominent-fixed-adjust\">\r\n        <div class=\"mdc-layout-grid\">\r\n          <div class=\"mdc-layout-grid__inner\">\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details open class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n\t\t\t\t  <span class=\"mdc-expansion__header\" t=\"type.type\">Custom</span>\r\n\t\t\t\t  <button class=\"mdc-button mdc-button--raised\" click.delegate=\"prefillValues()\">Prefill values</button>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label.bind=\"label\" disabled.bind=\"disabled\" required.bind=\"required\" value.bind=\"value\"\r\n                        secondarylabel.bind=\"secondary\" type.bind=\"type\" modifier.bind=\"modifier\" leading.bind=\"leading\"\r\n                        trailing.bind=\"trailing\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label.bind=\"label\" disabled.bind=\"disabled\" required.bind=\"required\" value.bind=\"value\"\r\n                        secondarylabel.bind=\"secondary\" modifier.bind=\"modifier\"></mdc-textarea>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-switch label.bind=\"label\" disabled.bind=\"disabled\" active.bind=\"boolvalue\"></mdc-switch>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-radio label.bind=\"label\" disabled.bind=\"disabled\" required.bind=\"required\" checked.bind=\"boolvalue\"\r\n                        model.bind=\"true\" name=\"custom-radio-name\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-checkbox label.bind=\"label\" disabled.bind=\"disabled\" required.bind=\"required\" checked.bind=\"boolvalue\"\r\n\t\t\t\t\t\tsecondarylabel.bind=\"secondary\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-select label.bind=\"label\" disabled.bind=\"disabled\" required.bind=\"required\" key=\"key\" value=\"value\"\r\n                        data.bind=\"dynamicArray\" selected.bind=\"boolvalue\" secondarylabel.bind=\"secondary\" leading.bind=\"leading\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-chip label.bind=\"label\" disabled.bind=\"disabled\" required.bind=\"required\" leading.bind=\"leading\"\r\n                        trailing.bind=\"trailing\"></mdc-chip>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-menu label.bind=\"label\" leading.bind=\"leading\">\r\n                        <div class=\"mdc-list-item\" repeat.for=\"data of dynamicArray\">${data.value}</div>\r\n                      </mdc-menu>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <button class=\"mdc-button mdc-button--raised\" click.delegate=\"triggerSnackbar()\">Trigger Snackbar</button>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n                      <mdc-progress min.bind=\"min\" max.bind=\"max\" value.bind=\"value\" buffer.bind=\"buffer\"></mdc-progress>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">TextField</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard\"></mdc-text-field>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-text-field label=\"Dense\" modifier=\"mdc-text-field--dense\"></mdc-text-field>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" secondarylabel=\"Helper Text\" value=\"Value\" leading=\"tag_faces\" trailing=\"tag_faces\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard\" outlined=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-text-field label=\"Dense\" outlined=\"true\" modifier=\"mdc-text-field--dense\"></mdc-text-field>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" outlined=\"true\" secondarylabel=\"Helper Text\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" outlined=\"true\" secondarylabel=\"Helper Text\"\r\n                        leading=\"tag_faces\" trailing=\"tag_faces\"></mdc-text-field>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Disabled</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard\" disabled=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-text-field label=\"Dense\" modifier=\"mdc-text-field--dense\" disabled=\"true\"></mdc-text-field>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" disabled=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" leading=\"tag_faces\" trailing=\"tag_faces\"\r\n                        disabled=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard\" outlined=\"true\" disabled=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-text-field label=\"Dense\" outlined=\"true\" modifier=\"mdc-text-field--dense\" disabled=\"true\"></mdc-text-field>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" outlined=\"true\" secondarylabel=\"Helper Text\"\r\n                        disabled=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" outlined=\"true\" secondarylabel=\"Helper Text\"\r\n                        leading=\"tag_faces\" trailing=\"tag_faces\" disabled=\"true\"></mdc-text-field>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Required</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard\" required=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-text-field label=\"Dense\" modifier=\"mdc-text-field--dense\" required=\"true\"></mdc-text-field>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" required=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" leading=\"tag_faces\" trailing=\"tag_faces\"\r\n                        required=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard\" outlined=\"true\" required=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-text-field label=\"Dense\" outlined=\"true\" modifier=\"mdc-text-field--dense\" required=\"true\"></mdc-text-field>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" outlined=\"true\" secondarylabel=\"Helper Text\"\r\n                        required=\"true\"></mdc-text-field>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-text-field label=\"Standard pre-selected\" value=\"Value\" outlined=\"true\" secondarylabel=\"Helper Text\"\r\n                        leading=\"tag_faces\" trailing=\"tag_faces\" required=\"true\"></mdc-text-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">TextArea</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard\"></mdc-textarea>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Dense\" modifier=\"mdc-text-field--dense\"></mdc-textarea>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\"></mdc-textarea>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Disabled</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard\" disabled=\"true\"></mdc-textarea>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Dense\" modifier=\"mdc-text-field--dense\" disabled=\"true\"></mdc-textarea>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" disabled=\"true\"></mdc-textarea>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Required</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard\" required=\"true\"></mdc-textarea>\r\n                    </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Dense\" modifier=\"mdc-text-field--dense\" dense=\"true\" required=\"true\"></mdc-textarea>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" required=\"true\"></mdc-textarea>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Readonly</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard\" modifier=\"mdc-text-field--readonly\"></mdc-textarea>\r\n                </div>\r\n                    <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Dense\" modifier=\"mdc-text-field--dense mdc-text-field--readonly\" dense=\"true\"></mdc-textarea>\r\n                    </div> -->\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <mdc-textarea label=\"Standard pre-selected\" value=\"Value\" secondarylabel=\"Helper Text\" modifier=\"mdc-text-field--readonly\"></mdc-textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Select</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" selected.bind=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" selected.bind=\"true\"\r\n                        leading=\"tag_faces\" secondarylabel=\"Helper text\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        selected.bind=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        selected.bind=\"true\" leading=\"tag_faces\" secondarylabel=\"Helper text\"></mdc-select>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Disabled</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" disabled=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" selected.bind=\"true\"\r\n                        disabled=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" selected.bind=\"true\"\r\n                        leading=\"tag_faces\" secondarylabel=\"Helper text\" disabled=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        disabled=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        selected.bind=\"true\" disabled=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        selected.bind=\"true\" leading=\"tag_faces\" secondarylabel=\"Helper text\" disabled=\"true\"></mdc-select>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Required</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" required=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" selected.bind=\"true\"\r\n                        required=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Standard\" key=\"key\" value=\"value\" data.bind=\"staticArray\" selected.bind=\"true\"\r\n                        leading=\"tag_faces\" secondarylabel=\"Helper text\" required=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        required=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        selected.bind=\"true\" required=\"true\"></mdc-select>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2\">\r\n                      <mdc-select label=\"Outlined\" key=\"key\" value=\"value\" data.bind=\"staticArray\" outlined.bind=\"true\"\r\n                        selected.bind=\"true\" leading=\"tag_faces\" secondarylabel=\"Helper text\" required=\"true\"></mdc-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Checkbox</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox label=\"Checked\" checked.bind=\"true\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox2\" label=\"Unchecked\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox3\" label=\"Indeterminate\" indeterminate=\"true\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox4\" label=\"Standard\" secondarylabel=\"Helper Text\"></mdc-checkbox>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Disabled</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox5\" label=\"Checked\" checked.bind=\"true\" disabled=\"true\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox6\" label=\"Unchecked\" disabled=\"true\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox7\" label=\"Indeterminate\" disabled=\"true\" indeterminate=\"true\"></mdc-checkbox>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-checkbox id=\"checkbox8\" label=\"Standard\" secondarylabel=\"Helper Text\" disabled=\"true\"></mdc-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Radio</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio1\" label=\"Checked\" checked=\"true\" model=\"true\" name=\"radio-checked\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio2\" label=\"Unchecked\" name=\"radio-unchecked\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio3\" label=\"Standard\" secondarylabel=\"Helper Text\" name=\"radio-helpertext\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio4\" label=\"Standard1\" name=\"radio-group\"></mdc-radio>\r\n                      <mdc-radio id=\"radio5\" label=\"Standard2\" name=\"radio-group\"></mdc-radio>\r\n                      <mdc-radio id=\"radio6\" label=\"Standard3\" name=\"radio-group\"></mdc-radio>\r\n                    </div>\r\n                  </div>\r\n                  <h3>Disabled</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio7\" label=\"Checked\" checked=\"true\" disabled=\"true\" model=\"true\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio8\" label=\"Unchecked\" disabled=\"true\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio9\" label=\"Standard\" secondarylabel=\"Helper Text\" disabled=\"true\"></mdc-radio>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-radio id=\"radio10\" label=\"Standard1\" name=\"radio-group-disabled\" disabled=\"true\"></mdc-radio>\r\n                      <mdc-radio id=\"radio11\" label=\"Standard2\" name=\"radio-group-disabled\" disabled=\"true\"></mdc-radio>\r\n                      <mdc-radio id=\"radio12\" label=\"Standard3\" name=\"radio-group-disabled\" disabled=\"true\"></mdc-radio>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Progress</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n                      <mdc-progress></mdc-progress>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n                      <mdc-progress min=\"0\" max=\"10\" value=\"5\"></mdc-progress>\r\n                      Min = 0\r\n                      Max = 10\r\n                      Val = 5\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n                      <mdc-progress max=\"20\" min=\"10\" value=\"15\"></mdc-progress>\r\n                      Min = 10\r\n                      Max = 20\r\n                      Val = 10\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n                      <mdc-progress buffer=\"true\"></mdc-progress>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div>\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Chips</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-chip label=\"Standard\"></mdc-chip>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-chip label=\"Standard\" leading=\"tag_faces\"></mdc-chip>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-chip label=\"Standard\" trailing=\"tag_faces\"></mdc-chip>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <div class=\"mdc-chip-set\">\r\n                        <mdc-chip label=\"Paul\" trailing=\"tag_faces\"></mdc-chip>\r\n                        <mdc-chip label=\"Daniel\" trailing=\"tag_faces\"></mdc-chip>\r\n                        <mdc-chip label=\"Ricardo\" trailing=\"tag_faces\"></mdc-chip>\r\n                        <mdc-chip label=\"Samantha\" trailing=\"tag_faces\"></mdc-chip>\r\n                        <mdc-chip label=\"James\" trailing=\"tag_faces\"></mdc-chip>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </details>\r\n            </div>\r\n\r\n            <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie click.trigger=\"handleSliders()\">\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Sliders</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h2>Standard</h2>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <h3>Continuous</h3>\r\n                      <div class=\"mdc-slider\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        aria-valuenow=\"0\" aria-label=\"Select Value\" ref=\"slider\">\r\n                        <div class=\"mdc-slider__track-container\">\r\n                          <div class=\"mdc-slider__track\"></div>\r\n                        </div>\r\n                        <div class=\"mdc-slider__thumb-container\">\r\n                          <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\">\r\n                            <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\r\n                          </svg>\r\n                          <div class=\"mdc-slider__focus-ring\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <h3>Discrete</h3>\r\n                      <div class=\"mdc-slider mdc-slider--discrete\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\"\r\n                        aria-valuemax=\"100\" aria-valuenow=\"0\" aria-label=\"Select Value\" ref=\"sliderDiscrete\">\r\n                        <div class=\"mdc-slider__track-container\">\r\n                          <div class=\"mdc-slider__track\"></div>\r\n                        </div>\r\n                        <div class=\"mdc-slider__thumb-container\">\r\n                          <div class=\"mdc-slider__pin\">\r\n                            <span class=\"mdc-slider__pin-value-marker\"></span>\r\n                          </div>\r\n                          <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\">\r\n                            <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\r\n                          </svg>\r\n                          <div class=\"mdc-slider__focus-ring\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <h3>Discrete with Tickmarks</h3>\r\n                      <div class=\"mdc-slider mdc-slider--discrete mdc-slider--display-markers\" tabindex=\"0\" role=\"slider\"\r\n                        aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\" aria-label=\"Select Value\" ref=\"sliderTick\">\r\n                        <div class=\"mdc-slider__track-container\">\r\n                          <div class=\"mdc-slider__track\"></div>\r\n                          <div class=\"mdc-slider__track-marker-container\"></div>\r\n                        </div>\r\n                        <div class=\"mdc-slider__thumb-container\">\r\n                          <div class=\"mdc-slider__pin\">\r\n                            <span class=\"mdc-slider__pin-value-marker\"></span>\r\n                          </div>\r\n                          <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\">\r\n                            <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\r\n                          </svg>\r\n                          <div class=\"mdc-slider__focus-ring\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <h2>Disabled</h2>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <h3>Continuous</h3>\r\n                      <div class=\"mdc-slider\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        aria-valuenow=\"0\" aria-label=\"Select Value\" aria-disabled=\"true\" ref=\"sliderDisabled\">\r\n                        <div class=\"mdc-slider__track-container\">\r\n                          <div class=\"mdc-slider__track\"></div>\r\n                        </div>\r\n                        <div class=\"mdc-slider__thumb-container\">\r\n                          <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\">\r\n                            <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\r\n                          </svg>\r\n                          <div class=\"mdc-slider__focus-ring\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <h3>Discrete</h3>\r\n                      <div class=\"mdc-slider mdc-slider--discrete\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\"\r\n                        aria-valuemax=\"100\" aria-valuenow=\"0\" aria-label=\"Select Value\" aria-disabled=\"true\" ref=\"sliderDiscreteDisabled\">\r\n                        <div class=\"mdc-slider__track-container\">\r\n                          <div class=\"mdc-slider__track\"></div>\r\n                        </div>\r\n                        <div class=\"mdc-slider__thumb-container\">\r\n                          <div class=\"mdc-slider__pin\">\r\n                            <span class=\"mdc-slider__pin-value-marker\"></span>\r\n                          </div>\r\n                          <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\">\r\n                            <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\r\n                          </svg>\r\n                          <div class=\"mdc-slider__focus-ring\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <h3>Discrete with Tickmarks</h3>\r\n                      <div class=\"mdc-slider mdc-slider--discrete mdc-slider--display-markers\" tabindex=\"0\" role=\"slider\"\r\n                        aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\" aria-label=\"Select Value\" aria-disabled=\"true\"\r\n                        ref=\"sliderTickDisabled\">\r\n                        <div class=\"mdc-slider__track-container\">\r\n                          <div class=\"mdc-slider__track\"></div>\r\n                          <div class=\"mdc-slider__track-marker-container\"></div>\r\n                        </div>\r\n                        <div class=\"mdc-slider__thumb-container\">\r\n                          <div class=\"mdc-slider__pin\">\r\n                            <span class=\"mdc-slider__pin-value-marker\"></span>\r\n                          </div>\r\n                          <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\">\r\n                            <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\r\n                          </svg>\r\n                          <div class=\"mdc-slider__focus-ring\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </details>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Tabs</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\r\n                      <div class=\"mdc-tab-bar\" role=\"tablist\">\r\n                        <div class=\"mdc-tab-scroller\">\r\n                          <div class=\"mdc-tab-scroller__scroll-area\">\r\n                            <div class=\"mdc-tab-scroller__scroll-content\">\r\n                              <button class=\"mdc-tab mdc-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"0\">\r\n                                <span class=\"mdc-tab__content\">\r\n                                  <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">favorite</span>\r\n                                  <span class=\"mdc-tab__text-label\">Favorites</span>\r\n                                </span>\r\n                                <span class=\"mdc-tab-indicator\">\r\n                                  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\r\n                                </span>\r\n                                <span class=\"mdc-tab__ripple\"></span>\r\n                              </button>\r\n                              <button class=\"mdc-tab mdc-tab--active\" role=\"tab\" aria-selected=\"true\" tabindex=\"0\">\r\n                                <span class=\"mdc-tab__content\">\r\n                                  <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">home</span>\r\n                                  <span class=\"mdc-tab__text-label\">Home</span>\r\n                                </span>\r\n                                <span class=\"mdc-tab-indicator mdc-tab-indicator--active\">\r\n                                  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\r\n                                </span>\r\n                                <span class=\"mdc-tab__ripple\"></span>\r\n                              </button>\r\n                              <button class=\"mdc-tab mdc-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"0\">\r\n                                <span class=\"mdc-tab__content\">\r\n                                  <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                                  <span class=\"mdc-tab__text-label\">Contact</span>\r\n                                </span>\r\n                                <span class=\"mdc-tab-indicator\">\r\n                                  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\r\n                                </span>\r\n                                <span class=\"mdc-tab__ripple\"></span>\r\n                              </button>\r\n                              <button class=\"mdc-tab mdc-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"0\">\r\n                                <span class=\"mdc-tab__content\">\r\n                                  <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                                  <span class=\"mdc-tab__text-label\">Contact</span>\r\n                                </span>\r\n                                <span class=\"mdc-tab-indicator\">\r\n                                  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\r\n                                </span>\r\n                                <span class=\"mdc-tab__ripple\"></span>\r\n                              </button>\r\n                              <button class=\"mdc-tab mdc-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"0\">\r\n                                <span class=\"mdc-tab__content\">\r\n                                  <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                                  <span class=\"mdc-tab__text-label\">Contact</span>\r\n                                </span>\r\n                                <span class=\"mdc-tab-indicator\">\r\n                                  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\r\n                                </span>\r\n                                <span class=\"mdc-tab__ripple\"></span>\r\n                              </button>\r\n                              <button class=\"mdc-tab mdc-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"0\">\r\n                                <span class=\"mdc-tab__content\">\r\n                                  <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                                  <span class=\"mdc-tab__text-label\">Contact</span>\r\n                                </span>\r\n                                <span class=\"mdc-tab-indicator\">\r\n                                  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\r\n                                </span>\r\n                                <span class=\"mdc-tab__ripple\"></span>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </details>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Cards</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <div class=\"mdc-card\">\r\n                        <div class=\"mdc-card__primary-action\" tabindex=\"0\">\r\n                          <div class=\"mdc-card__media mdc-card__media--16-9\" style=\"background-image: url(https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg);\">\r\n                          </div>\r\n                          <div class=\"demo-card__primary\">\r\n                            <h2 class=\"mdc-typography--headline6\">Our Changing Planet</h2>\r\n                            <h3 class=\"mdc-typography--subtitle2\">by Kurt Wagner</h3>\r\n                          </div>\r\n                          <div class=\"mdc-typography--body2\">\r\n                            Visit ten places on our planet that are undergoing the biggest changes today.\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <div class=\"mdc-card\">\r\n                        <div class=\"mdc-card__primary-action\" tabindex=\"0\">\r\n                          <div class=\"demo-card__primary\">\r\n                            <h2 class=\"mdc-typography--headline6\">Our Changing Planet</h2>\r\n                            <h3 class=\"mdc-typography--subtitle2\">by Kurt Wagner</h3>\r\n                          </div>\r\n                          <div class=\"mdc-typography--body2\">\r\n                            Visit ten places on our planet that are undergoing the biggest changes today.\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mdc-card__actions\">\r\n                          <div class=\"mdc-card__action-buttons\">\r\n                            <button class=\"mdc-button mdc-card__action mdc-card__action--button\">Read</button>\r\n                            <button class=\"mdc-button mdc-card__action mdc-card__action--button\">Bookmark</button>\r\n                          </div>\r\n                          <div class=\"mdc-card__action-icons\">\r\n                            <button class=\"mdc-icon-button mdc-card__action mdc-card__action--icon\" aria-pressed=\"false\"\r\n                              aria-label=\"Add to favorites\" title=\"Add to favorites\">\r\n                              <i class=\"material-icons mdc-icon-button__icon mdc-icon-button__icon--on\">favorite</i>\r\n                              <i class=\"material-icons mdc-icon-button__icon\">favorite_border</i>\r\n                            </button>\r\n                            <button class=\"mdc-icon-button material-icons mdc-card__action mdc-card__action--icon\"\r\n                              title=\"Share\">share</button>\r\n                            <button class=\"mdc-icon-button material-icons mdc-card__action mdc-card__action--icon\"\r\n                              title=\"More options\">more_vert</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </details>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Lists</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <h3>Single line</h3>\r\n                      <ul class=\"mdc-list\">\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">Item</li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"-1\">Item</li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"-1\">Item</li>\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <h3>Two-line</h3>\r\n                      <ul class=\"mdc-list mdc-list--two-line\">\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <h3>Mixed dense</h3>\r\n                      <ul class=\"mdc-list mdc-list--two-line mdc-list--dense\">\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <h3>Mixed with leading</h3>\r\n                      <ul class=\"mdc-list mdc-list--two-line\">\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"mdc-list-item\" tabindex=\"0\">\r\n                          <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">tag_faces</span>\r\n                          <span class=\"mdc-list-item__text\">\r\n                            <span class=\"mdc-list-item__primary-text\">Item</span>\r\n                            <span class=\"mdc-list-item__secondary-text\">Secondary</span>\r\n                          </span>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n              </details>\r\n            </div> -->\r\n\r\n            <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\r\n              <details class=\"mdc-expansion\" details-ie>\r\n                <summary class=\"mdc-expansion__summary\">\r\n                  <span class=\"mdc-expansion__header\" t=\"type.type\">Overig</span>\r\n                </summary>\r\n                <div class=\"mdc-expansion__content\">\r\n                  <h3>Standard</h3>\r\n                  <div class=\"mdc-layout-grid__inner\">\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-switch label=\"Standard\" active.bind=\"true\"></mdc-switch>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-switch label=\"Standard\" active.bind=\"false\"></mdc-switch>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <mdc-menu label=\"Menu\" icon=\"tag_faces\">\r\n                        <div class=\"mdc-list-item\">Option 1</div>\r\n                        <div class=\"mdc-list-item\">Option 2</div>\r\n                        <div class=\"mdc-list-item\">Option 3</div>\r\n                      </mdc-menu>\r\n                    </div>\r\n                    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-3\">\r\n                      <div class=\"mdc-snackbar mdc-snackbar--active\" aria-live=\"assertive\" aria-atomic=\"true\"\r\n                        aria-hidden=\"true\">\r\n                        <div class=\"mdc-snackbar__text\">Succesvolle test</div>\r\n                        <div class=\"mdc-snackbar__action-wrapper\">\r\n                          <button type=\"button\" class=\"mdc-snackbar__action-button\">Sluiten</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </details>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n\r\n  <mdc-snackbar></mdc-snackbar>\r\n</template>";});;
define('environment',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    debug: true,
    testing: true
  };
  _exports.default = _default;
});;
define('main',["exports", "./environment"], function (_exports, _environment) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('resources');
    aurelia.use.developmentLogging(_environment.default.debug ? 'info' : 'warn');
    if (_environment.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});;
define('resources/components/checkbox/mdc-checkbox',["exports", "aurelia-framework", "@material/form-field", "@material/checkbox"], function (_exports, _aureliaFramework, _formField, _checkbox) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcCheckbox = void 0;
  var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcCheckbox = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = (_class2 = /*#__PURE__*/function () {
    function MdcCheckbox(element) {
      _initializerDefineProperty(this, "checked", _descriptor, this);
      _initializerDefineProperty(this, "disabled", _descriptor2, this);
      _initializerDefineProperty(this, "required", _descriptor3, this);
      _initializerDefineProperty(this, "indeterminate", _descriptor4, this);
      _initializerDefineProperty(this, "id", _descriptor5, this);
      _initializerDefineProperty(this, "label", _descriptor6, this);
      _initializerDefineProperty(this, "model", _descriptor7, this);
      _initializerDefineProperty(this, "secondarylabel", _descriptor8, this);
      this.element = element;
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    var _proto = MdcCheckbox.prototype;
    _proto.bind = function bind() {
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    _proto.attached = function attached() {
      this.mdcFormField = new _formField.MDCFormField(this.element.firstElementChild);
      this.mdcCheckbox = new _checkbox.MDCCheckbox(this.element.firstElementChild);
      this.mdcCheckbox.required = this.required;
      this.mdcCheckbox.disabled = this.disabled;
      this.mdcCheckbox.indeterminate = this.indeterminate;
      if (!this.id) {
        this.id = this.unique;
      }
    };
    _proto.checkedChanged = function checkedChanged(newValue) {
      var event = new CustomEvent('change', {
        bubbles: true,
        detail: {
          value: newValue
        }
      });
      this.element.dispatchEvent(event);

      //Set invalid class after first change
      if (!newValue && this.required) {
        this.requiredChanged(true);
      } else {
        this.requiredChanged(false);
      }
    };
    _proto.requiredChanged = function requiredChanged(newValue) {
      if (newValue) {
        this.element.classList.add('mdc-checkbox--invalid');
      } else {
        this.element.classList.remove('mdc-checkbox--invalid');
      }
    };
    _proto.disabledChanged = function disabledChanged(newValue) {
      this.mdcCheckbox.disabled = newValue;
    };
    _proto.indeterminateChanged = function indeterminateChanged(newValue) {
      this.mdcCheckbox.indeterminate = newValue;
    };
    return MdcCheckbox;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checked", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "indeterminate", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "id", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "model", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class);
  _exports.MdcCheckbox = MdcCheckbox;
});;
define('text!resources/components/checkbox/mdc-checkbox.html',[],function(){return "<!-- <template class=\"mdc-form-field\">\t\r\n\t<div class=\"mdc-checkbox ${disabled ? 'mdc-checkbox--disabled' : ''} ${required && !model ? 'mdc-checkbox--required' : ''}\">\r\n\t\t<input type=\"checkbox\" id=\"checkbox--${unique}\" checked.bind=\"checked\" model.bind=\"model\" disabled.bind=\"disabled\" required.bind=\"required && !model\" class=\"mdc-checkbox__native-control\"/>\r\n\t\t<div class=\"mdc-checkbox__background\">\r\n\t\t\t<svg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\">\r\n\t\t\t\t<path class=\"mdc-checkbox__checkmark-path\" fill=\"none\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\" />\r\n\t\t\t</svg>\r\n\t\t\t<div class=\"mdc-checkbox__mixedmark\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<label if.bind=\"secondarylabel && label\" class=\"mdc-list-item__text\" for=\"checkbox--${unique}\">\r\n\t\t${label}\r\n\t\t<span class=\"mdc-list-item__secondary-text\">${secondarylabel}</span>\r\n\t</label>\r\n\t<label if.bind=\"!secondarylabel && label\" for=\"checkbox--${unique}\">${label}</label>\r\n</template> -->\r\n\r\n<template>\r\n\t<div class=\"mdc-form-field\">\r\n\t\t<div class=\"mdc-checkbox ${disabled ? 'mdc-checkbox--disabled' : ''}\">\r\n\t\t  <input type=\"checkbox\" class=\"mdc-checkbox__native-control\" id=\"checkbox--${unique}\" \r\n\t\t  checked.bind=\"checked\" \r\n\t\t  model.bind=\"model\" \r\n\t\t  disabled.bind=\"disabled\" \r\n\t\t  required.bind=\"required && !model\"\r\n\t\t  data-indeterminate.bind=\"indeterminate\"/>\r\n\t\t  <div class=\"mdc-checkbox__background\">\r\n\t\t\t<svg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\">\r\n\t\t\t  <path class=\"mdc-checkbox__checkmark-path\" fill=\"none\"\td=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\r\n\t\t\t</svg>\r\n\t\t\t<div class=\"mdc-checkbox__mixedmark\"></div>\r\n\t\t  </div>\r\n\t\t  <div class=\"mdc-checkbox__ripple\"></div>\r\n\t\t  <div class=\"mdc-checkbox__focus-ring\"></div>\r\n\t\t</div>\r\n\t\t<label for=\"checkbox--${unique}\">${label}</label>\r\n\t  </div>\r\n</template>";});;
define('resources/components/chip/mdc-chip',["exports", "aurelia-framework", "@material/chips"], function (_exports, _aureliaFramework, _chips) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcChip = void 0;
  var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcChip = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = (_class2 = /*#__PURE__*/function () {
    function MdcChip(element) {
      _initializerDefineProperty(this, "label", _descriptor, this);
      _initializerDefineProperty(this, "leading", _descriptor2, this);
      _initializerDefineProperty(this, "trailing", _descriptor3, this);
      this.element = element;
    }
    var _proto = MdcChip.prototype;
    _proto.bind = function bind() {
      this.mdcChip = new _chips.MDCChip(this.element);
    };
    return MdcChip;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trailing", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class);
  _exports.MdcChip = MdcChip;
});;
define('text!resources/components/chip/mdc-chip.html',[],function(){return "<!-- <template class=\"mdc-chip\" tabindex=\"0\">\r\n\t<i if.bind=\"leading\" class=\"material-icons mdc-chip__icon mdc-chip__icon--leading\">${leading}</i>\r\n\t<div class=\"mdc-chip__text\">${label}</div>\r\n\t<i if.bind=\"trailing\" class=\"material-icons mdc-chip__icon mdc-chip__icon--trailing\" tabindex=\"0\" role=\"button\">${trailing}</i>\r\n</template> -->\r\n\r\n<template>\r\n\t<div class=\"mdc-chip\" role=\"row\">\r\n\t\t<div class=\"mdc-chip__ripple\"></div>\r\n\t\t<span role=\"gridcell\">\r\n\t\t  <span role=\"button\" tabindex=\"0\" class=\"mdc-chip__primary-action\">\r\n\t\t\t<span class=\"mdc-chip__text\">${label}</span>\r\n\t\t  </span>\r\n\t\t</span>\r\n\t  </div>\r\n</template>";});;
// import {customAttribute, inject} from 'aurelia-framework';

// @customAttribute('details-ie')
// @inject(Element)
// export class DetailsIe {
//     constructor ( element) {
//         this.element= element;

//         this.handleClick = () => {
//             if (this.element.getAttribute("open")=="" ) {
//                 this.element.removeAttribute("open");
//             } else {
//                 this.element.setAttribute("open","");
//             }
//         };
//     }

//     attached() {
//         var ua = window.navigator.userAgent;
//         var msie = (ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge")!=-2);
//         if (msie){
//             this.element.children[0].addEventListener("click", this.handleClick);
//         }
//     }

//     detached() {
//         this.element.children[0].removeEventListener("click", this.handleClick);
//     }
// }
define('resources/components/details/details',[], function () {
  "use strict";
});;
define('resources/components/menu/mdc-menu',["exports", "aurelia-framework", "@material/menu"], function (_exports, _aureliaFramework, _menu) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcMenu = void 0;
  var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcMenu = (_dec = (0, _aureliaFramework.customElement)('mdc-menu'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
    function MdcMenu(element) {
      _initializerDefineProperty(this, "label", _descriptor, this);
      _initializerDefineProperty(this, "leading", _descriptor2, this);
      _initializerDefineProperty(this, "trailing", _descriptor3, this);
      _initializerDefineProperty(this, "menuElement", _descriptor4, this);
      this.element = element;
    }
    var _proto = MdcMenu.prototype;
    _proto.toggleMenu = function toggleMenu() {
      this.myMdcMenu.open = !this.myMdcMenu.open;
    };
    _proto.bind = function bind() {
      this.myMdcMenu = new _menu.MDCMenu(this.menuElement);
    };
    _proto.detached = function detached() {
      this.myMdcMenu.destroy();
    };
    return MdcMenu;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trailing", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "menuElement", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class) || _class);
  _exports.MdcMenu = MdcMenu;
});;
define('text!resources/components/menu/mdc-menu.html',[],function(){return "<template class=\"mdc-menu-surface--anchor\">\r\n\t<div class=\"mdc-menu--action\" click.delegate=\"toggleMenu()\">\r\n\t\t<i if.bind=\"leading\" class=\"material-icons\">${leading}</i>\r\n\t\t<span if.bind=\"label\">${label}</span>\r\n\t\t<i if.bind=\"trailing\" class=\"material-icons\">${trailing}</i>\r\n\t</div>\r\n\r\n\t<div ref=\"menuElement\" class=\"mdc-menu mdc-menu-surface\" tabindex=\"-1\">\r\n\t\t<ul class=\"mdc-menu__items mdc-list\" role=\"menu\" aria-hidden=\"true\" aria-orientation=\"vertical\">\r\n\t\t\t<slot></slot>\r\n\t\t</ul>\r\n\t</div>\r\n</template>";});;
define('resources/components/progress/mdc-progress',["exports", "aurelia-framework"], function (_exports, _aureliaFramework) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcProgress = void 0;
  var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcProgress = (_dec = (0, _aureliaFramework.customElement)("mdc-progress"), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function MdcProgress(element) {
    _initializerDefineProperty(this, "value", _descriptor, this);
    _initializerDefineProperty(this, "min", _descriptor2, this);
    _initializerDefineProperty(this, "max", _descriptor3, this);
    _initializerDefineProperty(this, "buffer", _descriptor4, this);
    this.element = element;
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "value", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "min", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "max", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buffer", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
  _exports.MdcProgress = MdcProgress;
});;
define('text!resources/components/progress/mdc-progress.html',[],function(){return "<template style=\"display: block\" role=\"progressbar\" class=\"mdc-linear-progress ${value > 0 || max > 0 ? '' : 'mdc-linear-progress--indeterminate'}\">\r\n    <div class=\"mdc-linear-progress__buffering-dots\"></div>\r\n    <div class=\"mdc-linear-progress__buffer\" hide.bind=\"buffer\"></div>\r\n    <div class=\"mdc-linear-progress__bar mdc-linear-progress__primary-bar\" hide.bind=\"buffer\" css=\"transform: scaleX(${value / (max - min)})\">\r\n        <span class=\"mdc-linear-progress__bar-inner\"></span>\r\n    </div>\r\n    <div class=\"mdc-linear-progress__bar mdc-linear-progress__secondary-bar\">\r\n        <span class=\"mdc-linear-progress__bar-inner\"></span>\r\n    </div>\r\n</template>";});;
define('resources/components/radio/mdc-radio',["exports", "aurelia-framework", "@material/radio"], function (_exports, _aureliaFramework, _radio) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcRadio = void 0;
  var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcRadio = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = (_class2 = /*#__PURE__*/function () {
    function MdcRadio(element) {
      _initializerDefineProperty(this, "checked", _descriptor, this);
      _initializerDefineProperty(this, "disabled", _descriptor2, this);
      _initializerDefineProperty(this, "id", _descriptor3, this);
      _initializerDefineProperty(this, "label", _descriptor4, this);
      _initializerDefineProperty(this, "secondarylabel", _descriptor5, this);
      _initializerDefineProperty(this, "name", _descriptor6, this);
      _initializerDefineProperty(this, "model", _descriptor7, this);
      this.element = element;
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    var _proto = MdcRadio.prototype;
    _proto.bind = function bind() {
      this.mdcRadio = new _radio.MDCRadio(this.element);
    };
    _proto.attached = function attached() {
      if (!this.id) {
        this.id = this.unique;
      }
    };
    _proto.handleChange = function handleChange(e) {
      // stop propagation so we're able to fire our own event when data-binding changes checked value
      e.stopPropagation();
    };
    _proto.checkedChanged = function checkedChanged(newValue) {
      var event = new CustomEvent("change", {
        bubbles: true,
        detail: {
          value: newValue
        }
      });
      this.element.dispatchEvent(event);
    };
    _proto.disabledChanged = function disabledChanged(newValue) {
      this.mdcRadio.disabled = !!newValue;
    };
    return MdcRadio;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checked", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "id", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "name", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "model", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class);
  _exports.MdcRadio = MdcRadio;
});;
define('text!resources/components/radio/mdc-radio.html',[],function(){return "<!-- <template class=\"mdc-form-field\">\r\n\t<div class=\"mdc-radio ${disabled ? 'mdc-radio--disabled' : ''}\">\r\n\t\t<input class=\"mdc-radio__native-control\" type=\"radio\" id=\"radio--${id}\" disabled.bind=\"disabled\" checked.bind=\"checked\" change.delegate=\"handleChange($event)\" name=\"${name}\" model.bind=\"model\">\r\n\t\t<div class=\"mdc-radio__background\">\r\n\t\t\t<div class=\"mdc-radio__outer-circle\"></div>\r\n\t\t\t<div class=\"mdc-radio__inner-circle\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<label if.bind=\"secondarylabel && label\" class=\"mdc-list-item__text au-target\" au-target-id=\"63\" for=\"radio--${id}\">\r\n\t\t${label}\r\n\t\t<span class=\"mdc-list-item__secondary-text\">${secondarylabel}</span>\r\n\t</label>\r\n\t<label if.bind=\"!secondarylabel && label\" for=\"radio--${id}\">${label}</label>\r\n</template> -->\r\n\r\n<template>\r\n\t<div class=\"mdc-form-field\">\r\n\t\t<div class=\"mdc-radio ${disabled ? 'mdc-radio--disabled' : ''}\">\r\n\t\t\t<input class=\"mdc-radio__native-control\" type=\"radio\" id=\"radio--${id}\" disabled.bind=\"disabled\" checked.bind=\"checked\" change.delegate=\"handleChange($event)\" name=\"${name}\" model.bind=\"model\">\r\n\t\t\t<div class=\"mdc-radio__background\">\r\n\t\t\t\t<div class=\"mdc-radio__outer-circle\"></div>\r\n\t\t\t\t<div class=\"mdc-radio__inner-circle\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mdc-radio__ripple\"></div>\r\n\t\t\t<div class=\"mdc-radio__focus-ring\"></div>\r\n\t\t</div>\r\n\t\t<label for=\"radio--${id}\">${label}</label>\r\n\t</div>\r\n</template>";});;
define('resources/components/select/mdc-select',["exports", "aurelia-framework", "@material/select"], function (_exports, _aureliaFramework, _select) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcSelect = void 0;
  var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcSelect = (_dec = (0, _aureliaFramework.customElement)('mdc-select'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
    function MdcSelect(element) {
      _initializerDefineProperty(this, "label", _descriptor, this);
      _initializerDefineProperty(this, "data", _descriptor2, this);
      _initializerDefineProperty(this, "value", _descriptor3, this);
      _initializerDefineProperty(this, "key", _descriptor4, this);
      _initializerDefineProperty(this, "selected", _descriptor5, this);
      _initializerDefineProperty(this, "selectedValue", _descriptor6, this);
      _initializerDefineProperty(this, "disabled", _descriptor7, this);
      _initializerDefineProperty(this, "required", _descriptor8, this);
      _initializerDefineProperty(this, "selectLabel", _descriptor9, this);
      _initializerDefineProperty(this, "secondarylabel", _descriptor10, this);
      _initializerDefineProperty(this, "modifier", _descriptor11, this);
      _initializerDefineProperty(this, "leading", _descriptor12, this);
      _initializerDefineProperty(this, "outlined", _descriptor13, this);
      this.element = element;
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    var _proto = MdcSelect.prototype;
    _proto.bind = function bind() {
      if (this.myMdcSelect) {
        this.refreshOptions();
      }
    };
    _proto.attached = function attached() {
      var _this = this;
      this.myMdcSelect = new _select.MDCSelect(this.element.firstElementChild);
      this.myMdcSelect.listen('MDCSelect:change', function () {
        _this.changedEvent = true;
        _this.selected = _this.myMdcSelect.value;

        //Set invalid class after first change
        if (!_this.myMdcSelect.value && _this.required) {
          _this.requiredChanged(true);
        } else {
          _this.requiredChanged(false);
        }
      });
      this.refreshOptions();
    };
    _proto.selectedChanged = function selectedChanged(newvalue) {
      if (!this.changedEvent) {
        this.selectedValue = newvalue;
      }
      this.changedEvent = false;
    };
    _proto.refreshOptions = function refreshOptions() {
      this.myMdcSelect.disabled = this.disabled;
      this.myMdcSelect.required = this.required;
      this.selectedValue = this.selected;
      this.myMdcSelect.outlined = this.outlined;
    };
    _proto.detached = function detached() {
      this.myMdcSelect.destroy();
    };
    _proto.disabledChanged = function disabledChanged(newvalue) {
      this.myMdcSelect.disabled = newvalue;
    };
    _proto.outlinedChanged = function outlinedChanged(newvalue) {
      if (this.myMdcSelect) this.myMdcSelect.outined = newvalue;
    };
    _proto.requiredChanged = function requiredChanged(newvalue) {
      if (newvalue) {
        this.element.firstElementChild.classList.add('mdc-select--invalid');
      } else {
        this.element.firstElementChild.classList.remove('mdc-select--invalid');
      }
    };
    return MdcSelect;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "data", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "value", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "key", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selected", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectedValue", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectLabel", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "modifier", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "outlined", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
  _exports.MdcSelect = MdcSelect;
});;
define('text!resources/components/select/mdc-select.html',[],function(){return "<!-- <template>\r\n\t<div class=\"mdc-select ${disabled ? 'mdc-select--disabled' : ''} ${modifier ? modifier : ''} ${leading ? 'mdc-select--with-leading-icon' : ''}\">\r\n\t\t<i if.bind=\"leading\" class=\"material-icons mdc-select__icon\" role=\"button\">${leading}</i>\r\n\t\t<i class=\"mdc-select__dropdown-icon\"></i>\r\n\t\t<select class=\"mdc-select__native-control\" required.bind=\"required\" id=\"select--${unique}\">\r\n\t\t\t<option value=\"\" selected.bind=\"!selectedValue\"></option>\r\n\t\t\t<option value.bind=\"item[key]\" repeat.for=\"item of data\" selected.bind=\"item[key] == selectedValue\">\r\n\t\t\t\t${item[value]}\r\n\t\t\t</option>\r\n\t\t</select>\r\n\t\t<label if.bind=\"label && (!modifier || modifier.indexOf('mdc-select--outlined') === -1)\" class=\"mdc-floating-label ${selectedValue || selectedValue == 'false' ? 'mdc-floating-label--float-above' : ''}\" for=\"select--${unique}\">${label}</label>\r\n\t\t<div if.bind=\"!modifier || modifier.indexOf('mdc-select--outlined') === -1\" class=\"mdc-line-ripple\"></div>\r\n\t\t<div if.bind=\"modifier.indexOf('mdc-select--outlined') > -1\" class=\"mdc-notched-outline\">\r\n\t\t\t<div class=\"mdc-notched-outline__leading\"></div>\r\n\t\t\t<div show.bind=\"label\" class=\"mdc-notched-outline__notch\">\r\n\t\t\t\t<label class=\"mdc-floating-label ${selectedValue || selectedValue == 'false' ? 'mdc-floating-label--float-above' : ''}\" for=\"select--${unique}\">${label}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mdc-notched-outline__trailing\"></div>\r\n\t\t</div>\r\n\t\t<div if.bind=\"modifier.indexOf('mdc-select--outlined') > -1\" class=\"mdc-notched-outline__idle\"></div>\r\n\t</div>\r\n\t<p if.bind=\"secondarylabel\" class=\"mdc-select-helper-text mdc-select-helper-text--persistent\" aria-hidden=\"true\">\r\n\t\t${secondarylabel}\r\n\t</p>\r\n</template> -->\r\n\r\n\r\n<template>\r\n\t<template if.bind=\"outlined\">\r\n\t\t<div class=\"mdc-select mdc-select--outlined ${disabled ? 'mdc-select--disabled' : ''}\">\r\n\t\t<div class=\"mdc-select__anchor\" aria-labelledby=\"select--${unique}\">\r\n\t\t  <span class=\"mdc-notched-outline\">\r\n\t\t\t<span class=\"mdc-notched-outline__leading\"></span>\r\n\t\t\t<span class=\"mdc-notched-outline__notch\">\r\n\t\t\t  <span id=\"select--${unique}\" class=\"mdc-floating-label ${selectedValue || selectedValue == 'false' ? 'mdc-floating-label--float-above' : ''}\">${label}</span>\r\n\t\t\t</span>\r\n\t\t\t<span class=\"mdc-notched-outline__trailing\"></span>\r\n\t\t  </span>\r\n\t\t  <span class=\"mdc-select__selected-text-container\">\r\n\t\t\t<span id=\"demo-selected-text\" class=\"mdc-select__selected-text\"></span>\r\n\t\t  </span>\r\n\t\t  <span class=\"mdc-select__dropdown-icon\">\r\n\t\t\t<svg class=\"mdc-select__dropdown-icon-graphic\" viewBox=\"7 10 10 5\" focusable=\"false\">\r\n\t\t\t  <polygon class=\"mdc-select__dropdown-icon-inactive\" stroke=\"none\" fill-rule=\"evenodd\" points=\"7 10 12 15 17 10\"></polygon>\r\n\t\t\t  <polygon class=\"mdc-select__dropdown-icon-active\" stroke=\"none\" fill-rule=\"evenodd\" points=\"7 15 12 10 17 15\"></polygon>\r\n\t\t\t</svg>\r\n\t\t  </span>\r\n\t\t</div>\r\n\t  \r\n\t\t<div class=\"mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth\">\r\n\t\t\t<ul class=\"mdc-deprecated-list\" role=\"listbox\" aria-label=\"Food picker listbox\">\r\n\t\t\t  <li class=\"mdc-deprecated-list-item mdc-deprecated-list-item--selected\" aria-selected=\"true\" data-value=\"\" role=\"option\">\r\n\t\t\t\t<span class=\"mdc-deprecated-list-item__ripple\"></span>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"mdc-deprecated-list-item\" aria-selected=\"false\" data-value=\"grains\" role=\"option\" value.bind=\"item[key]\" repeat.for=\"item of data\" selected.bind=\"item[key] == selectedValue\">\r\n\t\t\t\t<span class=\"mdc-deprecated-list-item__ripple\"></span>\r\n\t\t\t\t<span class=\"mdc-deprecated-list-item__text\">\r\n\t\t\t\t  Bread, Cereal, Rice, and Pasta\r\n\t\t\t\t</span>\r\n\t\t\t  </li>\r\n\t\t\t</ul>\r\n\t\t  </div>\r\n\t  </div>\r\n\t</template>\r\n\t<template else>\r\n\t\t<div class=\"mdc-select mdc-select--filled ${disabled ? 'mdc-select--disabled' : ''}\">\r\n\t\t\t<div class=\"mdc-select__anchor\" role=\"button\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-labelledby=\"select--${unique}\">\r\n\t\t\t  <span class=\"mdc-select__ripple\"></span>\r\n\t\t\t  <span id=\"select--${unique}\" class=\"mdc-floating-label ${selectedValue || selectedValue == 'false' ? 'mdc-floating-label--float-above' : ''}\">${label}</span>\r\n\t\t\t  <span class=\"mdc-select__selected-text-container\">\r\n\t\t\t\t<span id=\"demo-selected-text\" class=\"mdc-select__selected-text\"></span>\r\n\t\t\t  </span>\r\n\t\t\t  <span class=\"mdc-select__dropdown-icon\">\r\n\t\t\t\t<svg class=\"mdc-select__dropdown-icon-graphic\" viewBox=\"7 10 10 5\" focusable=\"false\">\r\n\t\t\t\t  <polygon class=\"mdc-select__dropdown-icon-inactive\" stroke=\"none\" fill-rule=\"evenodd\" points=\"7 10 12 15 17 10\"></polygon>\r\n\t\t\t\t  <polygon class=\"mdc-select__dropdown-icon-active\" stroke=\"none\" fill-rule=\"evenodd\" points=\"7 15 12 10 17 15\"></polygon>\r\n\t\t\t\t</svg>\r\n\t\t\t  </span>\r\n\t\t\t  <span class=\"mdc-line-ripple\"></span>\r\n\t\t\t</div>\r\n\t\t  \r\n\t\t\t<div class=\"mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth\">\r\n\t\t\t  <ul class=\"mdc-deprecated-list\" role=\"listbox\" aria-label=\"${label}\">\r\n\t\t\t\t<li class=\"mdc-deprecated-list-item mdc-deprecated-list-item--selected\" aria-selected=\"true\" data-value=\"\" role=\"option\">\r\n\t\t\t\t  <span class=\"mdc-deprecated-list-item__ripple\"></span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"mdc-deprecated-list-item\" aria-selected=\"false\" data-value=\"${item[value]}\" role=\"option\" value.bind=\"item[key]\" repeat.for=\"item of data\" selected.bind=\"item[key] == selectedValue\">\r\n\t\t\t\t  <span class=\"mdc-deprecated-list-item__ripple\"></span>\r\n\t\t\t\t  <span class=\"mdc-deprecated-list-item__text\">\r\n\t\t\t\t\t${item[value]}\r\n\t\t\t\t  </span>\r\n\t\t\t\t</li>\r\n\t\t\t  </ul>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t</template>\r\n</template>";});;
define('resources/components/snackbar/mdc-snackbar',["exports", "aurelia-framework", "aurelia-event-aggregator", "@material/snackbar"], function (_exports, _aureliaFramework, _aureliaEventAggregator, _snackbar) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcSnackbar = void 0;
  var _dec, _dec2, _class;
  var MdcSnackbar = (_dec = (0, _aureliaFramework.customElement)("mdc-snackbar"), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = /*#__PURE__*/function () {
    function MdcSnackbar(element, ea) {
      this.element = element;
      this.ea = ea;
    }
    var _proto = MdcSnackbar.prototype;
    _proto.bind = function bind() {
      var _this = this;
      this.subscriber = this.ea.subscribe("PostMessage.Snackbar", function (response) {
        _this.showSnackbar(response.label, response.buttonlabel, response.dismissonaction);
      });
    };
    _proto.detached = function detached() {
      this.subscripter.dispose();
    };
    _proto.showSnackbar = function showSnackbar(label, buttonLabel, dismissOnAction) {
      if (buttonLabel === void 0) {
        buttonLabel = "Close";
      }
      if (dismissOnAction === void 0) {
        dismissOnAction = true;
      }
      this.mdcSnackbar = new _snackbar.MDCSnackbar(this.element);
      this.mdcSnackbar.closeOnEscape = dismissOnAction;
      this.mdcSnackbar.labelText = label;
      this.mdcSnackbar.actionButtonText = buttonLabel;
      this.mdcSnackbar.open();
    };
    return MdcSnackbar;
  }()) || _class) || _class);
  _exports.MdcSnackbar = MdcSnackbar;
});;
define('text!resources/components/snackbar/mdc-snackbar.html',[],function(){return "<template class=\"mdc-snackbar\">\r\n\t<div class=\"mdc-snackbar__surface\">\r\n\t\t<div class=\"mdc-snackbar__label\" role=\"status\" aria-live=\"polite\">\r\n\t\t</div>\r\n\t\t<div class=\"mdc-snackbar__actions\">\r\n\t\t\t<button type=\"button\" class=\"mdc-button mdc-snackbar__action\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</template>";});;
define('resources/components/switch/mdc-switch',["exports", "aurelia-framework", "@material/switch"], function (_exports, _aureliaFramework, _switch) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcSwitch = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcSwitch = (_dec = (0, _aureliaFramework.customElement)('mdc-switch'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec4 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec5 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
    function MdcSwitch(element) {
      _initializerDefineProperty(this, "label", _descriptor, this);
      _initializerDefineProperty(this, "disabled", _descriptor2, this);
      _initializerDefineProperty(this, "active", _descriptor3, this);
      this.element = element;
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    var _proto = MdcSwitch.prototype;
    _proto.attached = function attached() {
      this.myMDCSwitch = new _switch.MDCSwitch(this.element.firstElementChild);
    };
    _proto.disabledChanged = function disabledChanged(newvalue) {
      if (this.myMDCSwitch) this.myMDCSwitch.disabled = newvalue;
    };
    _proto.activeChanged = function activeChanged(newvalue) {
      if (this.myMDCSwitch) this.myMDCSwitch.checked = newvalue;
    };
    return MdcSwitch;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return "on/off";
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
  _exports.MdcSwitch = MdcSwitch;
});;
define('text!resources/components/switch/mdc-switch.html',[],function(){return "<!-- <template>\r\n\t<div rel=\"switch\" class=\"mdc-switch ${disabled ? 'mdc-switch--disabled' : ''}\">\r\n\t\t<div class=\"mdc-switch__track\"></div>\r\n\t\t<div class=\"mdc-switch__thumb-underlay\">\r\n\t\t\t<div class=\"mdc-switch__thumb\">\r\n\t\t\t\t<input type=\"checkbox\" id=\"basic-switch--${unique}\" class=\"mdc-switch__native-control\" role=\"switch\" checked.bind=\"active\" disabled.bind=\"disabled\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<label for=\"basic-switch--${unique}\">${label}</label>\r\n</template> -->\r\n\r\n<template>\r\n\t<button id=\"switch--${unique}\" class=\"mdc-switch mdc-switch--unselected ${disabled ? 'mdc-switch--disabled' : ''}\" type=\"button\" role=\"switch\" aria-checked=\"false\">\r\n\t\t<div class=\"mdc-switch__track\"></div>\r\n\t\t<div class=\"mdc-switch__handle-track\">\r\n\t\t  <div class=\"mdc-switch__handle\">\r\n\t\t\t<div class=\"mdc-switch__shadow\">\r\n\t\t\t  <div class=\"mdc-elevation-overlay\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mdc-switch__ripple\"></div>\r\n\t\t\t<div class=\"mdc-switch__icons\">\r\n\t\t\t  <svg class=\"mdc-switch__icon mdc-switch__icon--on\" viewBox=\"0 0 24 24\">\r\n\t\t\t\t<path d=\"M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z\" />\r\n\t\t\t  </svg>\r\n\t\t\t  <svg class=\"mdc-switch__icon mdc-switch__icon--off\" viewBox=\"0 0 24 24\">\r\n\t\t\t\t<path d=\"M20 13H4v-2h16v2z\" />\r\n\t\t\t  </svg>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<span class=\"mdc-switch__focus-ring-wrapper\">\r\n\t\t  <div class=\"mdc-switch__focus-ring\"></div>\r\n\t\t</span>\r\n\t  </button>\r\n\t  <label for=\"switch--${unique}\">${label}</label>\r\n</template>";});;
define('resources/components/textarea/mdc-textarea',["exports", "aurelia-framework", "@material/textfield"], function (_exports, _aureliaFramework, _textfield) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcTextarea = void 0;
  var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcTextarea = (_dec = (0, _aureliaFramework.customElement)('mdc-textarea'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
    function MdcTextarea(element) {
      _initializerDefineProperty(this, "label", _descriptor, this);
      _initializerDefineProperty(this, "value", _descriptor2, this);
      _initializerDefineProperty(this, "disabled", _descriptor3, this);
      _initializerDefineProperty(this, "required", _descriptor4, this);
      _initializerDefineProperty(this, "modifier", _descriptor5, this);
      _initializerDefineProperty(this, "secondarylabel", _descriptor6, this);
      _initializerDefineProperty(this, "myMdcTextfield", _descriptor7, this);
      _initializerDefineProperty(this, "outlined", _descriptor8, this);
      this.element = element;
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    var _proto = MdcTextarea.prototype;
    _proto.attached = function attached() {
      this.myMdcTextfield = new _textfield.MDCTextField(this.element.firstElementChild);
      this.myMdcTextfield.disabled = this.disabled;
      this.myMdcTextfield.required = this.required;
      this.myMdcTextfield.outlined = this.outlined;
      if (this.value) {
        this.myMdcTextfield.value = this.value;
      }
    };
    _proto.valueChanged = function valueChanged(newvalue) {
      if (this.myMdcTextfield && newvalue) this.myMdcTextfield.value = newvalue;
    };
    _proto.disabledChanged = function disabledChanged(newvalue) {
      if (this.myMdcTextfield) this.myMdcTextfield.disabled = newvalue;
    };
    _proto.requiredChanged = function requiredChanged(newvalue) {
      if (this.myMdcTextfield) this.myMdcTextfield.required = newvalue;
    };
    _proto.outlinedChanged = function outlinedChanged(newvalue) {
      if (this.myMdcTextfield && newvalue) this.myMdcTextfield.value = newvalue;
    };
    return MdcTextarea;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "modifier", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "myMdcTextfield", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "outlined", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
  _exports.MdcTextarea = MdcTextarea;
});;
define('text!resources/components/textarea/mdc-textarea.html',[],function(){return "<!-- <template>\r\n\t<div class=\"mdc-text-field ${disabled ? 'mdc-text-field--disabled' : ''} ${label ? '' : 'mdc-text-field--no-label'} mdc-text-field--textarea ${modifier ? modifier : ''}\">\r\n\t\t<textarea id=\"textarea--${unique}\" class=\"mdc-text-field__input\" rows=\"8\" cols=\"40\" value.bind=\"value\" if.bind=\"!modifier || modifier.indexOf('mdc-text-field--readonly') === -1\"></textarea>\r\n\t\t<textarea readonly id=\"textarea--${unique}\" class=\"mdc-text-field__input\" rows=\"8\" cols=\"40\" value.bind=\"value\" if.bind=\"modifier && modifier.indexOf('mdc-text-field--readonly') > -1\" ></textarea>\r\n\t\t<div class=\"mdc-notched-outline\">\r\n\t\t\t<div class=\"mdc-notched-outline__leading\"></div>\r\n\t\t\t<div if.bind=\"label\" class=\"mdc-notched-outline__notch\">\r\n\t\t\t\t<label for=\"textarea--${unique}\" class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\">${label}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mdc-notched-outline__trailing\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<p if.bind=\"secondarylabel\" class=\"mdc-text-field-helper-text\" aria-hidden=\"true\">\r\n\t\t${secondarylabel}\r\n\t</p>\r\n</template> -->\r\n\r\n<template>\r\n\t<template if.bind=\"outlined\">\r\n\t\t<label class=\"mdc-text-field mdc-text-field--outlined mdc-text-field--textarea ${label ? '' : 'mdc-text-field--no-label'} ${disabled ? 'mdc-text-field--disabled' : ''} ${value || value == '0' || value == 'false' ? 'mdc-text-field--label-floating' : ''} ${modifier ? modifier : ''}\">\r\n\t\t\t<span class=\"mdc-notched-outline\">\r\n\t\t\t  <span class=\"mdc-notched-outline__leading\"></span>\r\n\t\t\t  <span class=\"mdc-notched-outline__notch\" if.bind=\"label\">\r\n\t\t\t\t<span class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\" id=\"textarea--${unique}\">${label}</span>\r\n\t\t\t  </span>\r\n\t\t\t  <span class=\"mdc-notched-outline__trailing\"></span>\r\n\t\t\t</span>\r\n\t\t\t<span class=\"mdc-text-field__resizer\">\r\n\t\t\t  <textarea class=\"mdc-text-field__input\" rows=\"8\" cols=\"40\" aria-label=\"${label}\" aria-labelledby=\"textarea--${unique}\" value.bind=\"value\"></textarea>\r\n\t\t\t</span>\r\n\t\t  </label>\r\n\t</template>\r\n\t<template else>\r\n\t\t<label class=\"mdc-text-field mdc-text-field--filled mdc-text-field--textarea ${label ? '' : 'mdc-text-field--no-label'} ${disabled ? 'mdc-text-field--disabled' : ''} ${value || value == '0' || value == 'false' ? 'mdc-text-field--label-floating' : ''} ${modifier ? modifier : ''}\">\r\n\t\t\t<span class=\"mdc-text-field__ripple\"></span>\r\n\t\t\t<span class=\"mdc-text-field__resizer\">\r\n\t\t\t\t<span class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\" id=\"textarea--${unique}\">${label}</span>\r\n\t\t\t  \t<textarea class=\"mdc-text-field__input\" rows=\"8\" cols=\"40\" aria-label=\"${label}\" aria-labelledby=\"textarea--${unique}\" value.bind=\"value\"></textarea>\r\n\t\t\t</span>\r\n\t\t\t<span class=\"mdc-line-ripple\"></span>\r\n\t\t  </label>\r\n\t</template>\r\n</template>";});;
define('resources/components/textfield/mdc-text-field',["exports", "aurelia-framework", "@material/textfield"], function (_exports, _aureliaFramework, _textfield) {
  "use strict";

  _exports.__esModule = true;
  _exports.MdcTextField = void 0;
  var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  var MdcTextField = (_dec = (0, _aureliaFramework.customElement)('mdc-text-field'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
    function MdcTextField(element) {
      _initializerDefineProperty(this, "label", _descriptor, this);
      _initializerDefineProperty(this, "value", _descriptor2, this);
      _initializerDefineProperty(this, "disabled", _descriptor3, this);
      _initializerDefineProperty(this, "required", _descriptor4, this);
      _initializerDefineProperty(this, "type", _descriptor5, this);
      _initializerDefineProperty(this, "secondarylabel", _descriptor6, this);
      _initializerDefineProperty(this, "modifier", _descriptor7, this);
      _initializerDefineProperty(this, "step", _descriptor8, this);
      _initializerDefineProperty(this, "min", _descriptor9, this);
      _initializerDefineProperty(this, "max", _descriptor10, this);
      _initializerDefineProperty(this, "leading", _descriptor11, this);
      _initializerDefineProperty(this, "trailing", _descriptor12, this);
      _initializerDefineProperty(this, "outlined", _descriptor13, this);
      this.element = element;
      this.unique = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    var _proto = MdcTextField.prototype;
    _proto.bind = function bind() {
      if (this.myMdcTextfield) {
        this.refreshOptions();
      }
    };
    _proto.attached = function attached() {
      this.myMdcTextfield = new _textfield.MDCTextField(this.element.firstElementChild);
      this.refreshOptions();
    };
    _proto.refreshOptions = function refreshOptions() {
      this.step ? this.stepChanged(this.step) : '';
      this.min ? this.minChanged(this.min) : '';
      this.max ? this.maxChanged(this.max) : '';
      this.myMdcTextfield.disabled = this.disabled;
      this.myMdcTextfield.required = this.required;
      this.myMdcTextfield.outlined = this.outlined;
      if (this.value) {
        this.myMdcTextfield.value = this.value;
      }
    };
    _proto.disabledChanged = function disabledChanged(newvalue) {
      if (this.myMdcTextfield) this.myMdcTextfield.disabled = newvalue;
    };
    _proto.requiredChanged = function requiredChanged(newvalue) {
      if (this.myMdcTextfield) this.myMdcTextfield.required = newvalue;
    };
    _proto.stepChanged = function stepChanged(newvalue) {
      if (this.myMdcTextfield) this.myMdcTextfield.input_.setAttribute("step", newvalue);
    };
    _proto.valueChanged = function valueChanged(newvalue) {
      if (this.myMdcTextfield && newvalue) this.myMdcTextfield.value = newvalue;
    };
    _proto.outlinedChanged = function outlinedChanged(newvalue) {
      if (this.myMdcTextfield) this.myMdcTextfield.outlined = newvalue;
    };
    _proto.minChanged = function minChanged(newvalue) {
      if (this.type === 'number') {
        if (this.myMdcTextfield) this.myMdcTextfield.input_.setAttribute("min", newvalue);
      } else {
        if (this.myMdcTextfield) this.myMdcTextfield.input_.setAttribute("minlength", newvalue);
      }
    };
    _proto.maxChanged = function maxChanged(newvalue) {
      if (this.type === 'number') {
        if (this.myMdcTextfield) this.myMdcTextfield.input_.setAttribute("max", newvalue);
      } else {
        if (this.myMdcTextfield) this.myMdcTextfield.input_.setAttribute("maxlength", newvalue);
      }
    };
    _proto.detached = function detached() {
      this.myMdcTextfield.destroy();
    };
    return MdcTextField;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "required", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "type", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 'text';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "secondarylabel", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "modifier", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "step", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "min", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "max", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "leading", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "trailing", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "outlined", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
  _exports.MdcTextField = MdcTextField;
});;
define('text!resources/components/textfield/mdc-text-field.html',[],function(){return "<!-- <template>\r\n\t<div class=\"mdc-text-field ${disabled ? 'mdc-text-field--disabled' : ''} ${label ? '' : 'mdc-text-field--no-label'} ${modifier ? modifier : ''} ${leading ? 'mdc-text-field--with-leading-icon' : ''} ${trailing ? 'mdc-text-field--with-trailing-icon' : ''}\">\r\n\t\t<i if.bind=\"leading\" class=\"material-icons mdc-text-field__icon\" role=\"button\">${leading}</i>\r\n\t\t<input type=\"${type}\" id=\"text-field--${unique}\" class=\"mdc-text-field__input\" value.bind=\"value\">\r\n\t\t<label if.bind=\"label && (!modifier || modifier.indexOf('mdc-text-field--outlined') === -1)\" for=\"text-field--${unique}\" class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\">${label}</label>\r\n\t\t<i if.bind=\"trailing\" class=\"material-icons mdc-text-field__icon\" role=\"button\">${trailing}</i>\r\n\t\t<div if.bind=\"!modifier || modifier.indexOf('mdc-text-field--outlined') === -1\" class=\"mdc-line-ripple\"></div>\r\n\r\n\t\t<div class=\"mdc-notched-outline\" if.bind=\"modifier.indexOf('mdc-text-field--outlined') > -1\">\r\n\t\t\t<div class=\"mdc-notched-outline__leading\"></div>\r\n\t\t\t<div if.bind=\"label\" class=\"mdc-notched-outline__notch\">\r\n\t\t\t\t<label for=\"text-field--${unique}\" class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\">${label}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mdc-notched-outline__trailing\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div if.bind=\"secondarylabel\" class=\"mdc-text-field-helper-line\">\r\n\t\t<div class=\"mdc-text-field-helper-text\">${secondarylabel}</div>\r\n\t</div>\r\n</template> -->\r\n\r\n<template>\r\n\t<template if.bind=\"outlined\">\r\n\t\t<label class=\"mdc-text-field mdc-text-field--outlined ${disabled ? 'mdc-text-field--disabled' : ''} ${value || value == '0' || value == 'false' ? 'mdc-text-field--label-floating' : ''} ${leading ? 'mdc-text-field--with-leading-icon' : ''} ${trailing ? 'mdc-text-field--with-trailing-icon' : ''}\">\r\n\t\t\t<span class=\"mdc-notched-outline\">\r\n\t\t\t  <span class=\"mdc-notched-outline__leading\"></span>\r\n\t\t\t  <span if.bind=\"label\" class=\"mdc-notched-outline__notch\">\r\n\t\t\t\t<span class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\" id=\"text-field--${unique}\">${label}</span>\r\n\t\t\t  </span>\r\n\t\t\t  <span class=\"mdc-notched-outline__trailing\"></span>\r\n\t\t\t</span>\r\n\t\t\t<i if.bind=\"leading\" class=\"material-icons mdc-text-field__icon mdc-text-field__icon--leading\" tabindex=\"0\" role=\"button\">${leading}</i>\r\n\t\t\t<input type=\"text\" class=\"mdc-text-field__input\" aria-labelledby=\"text-field--${unique}\" value.bind=\"value\" required.bind=\"required\">  \r\n\t\t\t<i if.bind=\"trailing\" class=\"material-icons mdc-text-field__icon mdc-text-field__icon--trailing\" tabindex=\"0\" role=\"button\">${trailing}</i>\r\n\t\t  </label>\r\n\t</template>\r\n\r\n\t<template else>\r\n\t\t<label class=\"mdc-text-field mdc-text-field--filled ${disabled ? 'mdc-text-field--disabled' : ''} ${value || value == '0' || value == 'false' ? 'mdc-text-field--label-floating' : ''} ${leading ? 'mdc-text-field--with-leading-icon' : ''} ${trailing ? 'mdc-text-field--with-trailing-icon' : ''}\">\r\n\t\t\t<span class=\"mdc-text-field__ripple\"></span>\r\n\t\t\t<span if.bind=\"label\" class=\"mdc-floating-label ${value || value == '0' || value == 'false' ? 'mdc-floating-label--float-above' : ''}\" id=\"text-field--${unique}\">${label}</span>\r\n\t\t\t<i if.bind=\"leading\" class=\"material-icons mdc-text-field__icon mdc-text-field__icon--leading\" tabindex=\"0\" role=\"button\">${leading}</i>\r\n\t\t\t<input class=\"mdc-text-field__input\" type=\"text\" aria-labelledby=\"text-field--${unique}\" value.bind=\"value\" required.bind=\"required\">\r\n\t\t\t<i if.bind=\"trailing\" class=\"material-icons mdc-text-field__icon mdc-text-field__icon--trailing\" tabindex=\"0\" role=\"button\">${trailing}</i>\r\n\t\t\t<span class=\"mdc-line-ripple\"></span>\r\n\t\t</label>\r\n\t</template>\r\n</template>";});;
define('resources/index',["exports", "aurelia-framework"], function (_exports, _aureliaFramework) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  function configure(config) {
    var components = [_aureliaFramework.PLATFORM.moduleName('./components/checkbox/mdc-checkbox'), _aureliaFramework.PLATFORM.moduleName('./components/chip/mdc-chip'),
    //PLATFORM.moduleName('./components/details/details'),
    _aureliaFramework.PLATFORM.moduleName('./components/menu/mdc-menu'), _aureliaFramework.PLATFORM.moduleName('./components/progress/mdc-progress'), _aureliaFramework.PLATFORM.moduleName('./components/select/mdc-select'), _aureliaFramework.PLATFORM.moduleName('./components/snackbar/mdc-snackbar'), _aureliaFramework.PLATFORM.moduleName('./components/switch/mdc-switch'), _aureliaFramework.PLATFORM.moduleName('./components/textfield/mdc-text-field'), _aureliaFramework.PLATFORM.moduleName('./components/radio/mdc-radio'), _aureliaFramework.PLATFORM.moduleName('./components/textarea/mdc-textarea')];
    config.globalResources(components);
  }
});;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map