import { customElement, inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { MDCSnackbar } from "@material/snackbar/dist/mdc.snackbar.min";

@customElement("mdc-snackbar")
@inject(Element, EventAggregator)
export class MdcSnackbar {
    constructor(element, ea) {
        this.element = element;
        this.ea = ea;
    }

    bind() {
        this.subscriber = this.ea.subscribe("PostMessage.Snackbar", response => {
            this.showSnackbar(
                response.label,
                response.buttonlabel,
                response.dismissonaction
            );
        });
    }

    detached() {
        this.subscripter.dispose();
    }

    showSnackbar(label, buttonLabel = "Cancel", dismissOnAction = true) {
        this.mdcSnackbar = new MDCSnackbar(this.element);

        this.mdcSnackbar.closeOnEscape = dismissOnAction;
        this.mdcSnackbar.labelText = label;
        this.mdcSnackbar.actionButtonText = buttonLabel;

        this.mdcSnackbar.open();
    }
}