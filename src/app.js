import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCDrawer } from '@material/drawer';

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
    this.dynamicArray = [
      { key: true, value: 'True story' },
      { key: false, value: 'Bad story' }
    ];

	  this.value = 'Value';
    this.boolvalue = true;
    this.secondary = 'Helper text';
  }

  attached() {
    this.topAppBar = new MDCTopAppBar(
      document.querySelector('.mdc-top-app-bar')
    );
    this.drawer = new MDCDrawer(document.querySelector('.mdc-drawer'));
    this.handleTopAppBarWithDrawer();
  }

  handleTopAppBarWithDrawer() {
    this.topAppBar.setScrollTarget(document.getElementById('main-content'));
    this.topAppBar.listen('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
  }

  triggerSnackbar() {
    this.ea.publish('PostMessage.Snackbar', {
      label: this.label,
      buttonlabel: this.secondary,
      leading: false,
      stacked: false
    });
  }
}
