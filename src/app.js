import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { MDCTopAppBar } from '@material/top-app-bar/dist/mdc.topAppBar';
import { MDCDrawer } from '@material/drawer/dist/mdc.drawer';
import { MDCSlider } from '@material/slider/dist/mdc.slider';
import { MDCTabBar } from '@material/tab-bar/dist/mdc.tabBar';

@inject(EventAggregator)
export class App {
  constructor(ea) {
    this.ea = ea;

    this.label = 'Custom';
    this.type = 'text';
    this.modifier = null;
    this.leading = null;
    this.trailing = null;

    this.staticArray = [
      { key: true, value: 'True story' },
      { key: false, value: 'Bad story' }
    ];
  }

  prefillValues() {
	this.value = 'Value';
    this.boolvalue = true;
    this.secondary = 'Helper text';

    this.dynamicArray = [
		{ key: true, value: 'True story' },
		{ key: false, value: 'Bad story' }
	];
  }

  attached() {
    this.topAppBar = new MDCTopAppBar(
      document.querySelector('.mdc-top-app-bar')
    );
    this.drawer = new MDCDrawer(document.querySelector('.mdc-drawer'));

    this.slider = new MDCSlider(this.slider);
    this.sliderDisabled = new MDCSlider(this.sliderDisabled);
    this.sliderDiscrete = new MDCSlider(this.sliderDiscrete);
    this.sliderDiscreteDisabled = new MDCSlider(this.sliderDiscreteDisabled);
    this.slidertick = new MDCSlider(this.sliderTick);
    this.slidertickDisabled = new MDCSlider(this.sliderTickDisabled);

    this.tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

    this.handleTopAppBarWithDrawer();
    this.handleSliders();
  }

  handleTopAppBarWithDrawer() {
    this.topAppBar.setScrollTarget(document.getElementById('main-content'));
    this.topAppBar.listen('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
  }

  handleSliders() {
    const self = this; 

    setTimeout(function() {
      self.slider.layout();
      self.sliderDisabled.layout();
      self.sliderDiscrete.layout();
      self.sliderDiscreteDisabled.layout();
      self.slidertick.layout();
      self.slidertickDisabled.layout();
    }, 200);

    return true;
  }

  triggerSnackbar() {
    this.ea.publish('PostMessage.Snackbar', {
      label: this.label,
      buttonlabel: this.secondary
    });
  }
}
