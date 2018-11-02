import { inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { MDCTopAppBar } from "@material/top-app-bar/dist/mdc.topAppBar";
import { MDCDrawer } from "@material/drawer/dist/mdc.drawer";
import { MDCList } from "@material/list";

@inject(EventAggregator)
export class App {
  constructor(ea) {
    this.ea = ea;

    this.label = "Custom";
    this.value = "Value";
    this.boolvalue = true;
    this.icon = "tag_faces";
    this.secondary = "Helper text";

    this.testArray = [
      { key: true, value: "True story" },
      { key: false, value: "Bad story" }
    ];
  }

  attached() {
    const topAppBar = new MDCTopAppBar(
      document.querySelector(".mdc-top-app-bar")
    );
    const drawer = new MDCDrawer(document.querySelector(".mdc-drawer"));

    this.handleTopAppBarWithDrawer(topAppBar, drawer);
  }

  handleTopAppBarWithDrawer(topAppBar, drawer) {
    topAppBar.setScrollTarget(document.getElementById("main-content"));
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });
  }

  triggerSnackbar() {
    this.ea.publish("PostMessage.Snackbar", {
      label: this.label,
      buttonlabel: this.secondary
    });
  }
}
