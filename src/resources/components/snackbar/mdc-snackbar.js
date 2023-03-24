import { customElement, inject, bindable } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { MDCSnackbar } from "@material/snackbar";

@customElement("mdc-snackbar")
@inject(Element, EventAggregator)
export class MdcSnackbar {
    @bindable leading = false;
    @bindable stacked = false;

    constructor(element, ea) {
        this.element = element;
        this.ea = ea;
    }

    attached() {
        this.mdcSnackbar = new MDCSnackbar(this.element.firstElementChild);
    }

    bind() {
        this.subscriber = this.ea.subscribe("PostMessage.Snackbar", response => {
            this.showSnackbar(
                response.label,
                response.buttonlabel,
                response.dismissonaction,
                response.leading,
                response.stacked
            );
        });
    }

    leadingChanged(newvalue) {
        if(this.mdcSnackbar) this.mdcSnackbar.leading = newvalue
    }

    stackedChanged(newvalue) {
        if(this.mdcSnackbar) this.mdcSnackbar.stacked = newvalue
    }

    detached() {
        this.subscripter.dispose();
    }

    showSnackbar(label, buttonLabel = "Close", dismissOnAction = true, leading, stacked) {
        this.mdcSnackbar.closeOnEscape = dismissOnAction;
        this.mdcSnackbar.labelText = label;
        this.mdcSnackbar.actionButtonText = buttonLabel;
        this.mdcSnackbar.leading = leading;
        this.mdcSnackbar.stacked = stacked;

        this.mdcSnackbar.open();
    }
}