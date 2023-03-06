import { inject, customElement, bindable, bindingMode } from 'aurelia-framework';
import { MDCSwitch } from '@material/switch';


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

    attached() {
        this.myMDCSwitch = new MDCSwitch(this.element.firstElementChild);
    }

    disabledChanged(newvalue) {
        if(this.myMDCSwitch) this.myMDCSwitch.disabled = newvalue;
    }

    activeChanged(newvalue) {
        if(this.myMDCSwitch) this.myMDCSwitch.checked = newvalue;
    }
}