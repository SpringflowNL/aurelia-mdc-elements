import { inject, customElement, bindable, bindingMode } from 'aurelia-framework';
import { MDCSwitch } from '@material/switch/dist/mdc.switch.min';


@customElement('mdc-switch')
@inject(Element)
export class MdcSwitch {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) label = "on/off";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) disabled = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) active = true;

    constructor(element) {
        this.element = element;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    bind() {
        this.myMDCSwitch = new MDCSwitch(this.element.firstElementChild);
    }

    disabledChanged(newvalue) {
        this.myMDCSwitch.disabled = newvalue;
    }

    activeChanged(newvalue) {
        this.myMDCSwitch.checked = newvalue;
    }
}