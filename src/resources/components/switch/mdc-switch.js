import { inject, customElement, bindable, bindingMode, BindingEngine } from 'aurelia-framework';
import { MDCSwitch } from '@material/switch';

@customElement('mdc-switch')
@inject(Element, BindingEngine)
export class MdcSwitch {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) label = "on/off";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) disabled = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) active = true;

    constructor(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    attached() {
        this.myMDCSwitch = new MDCSwitch(this.element.firstElementChild);
        
        this.subscription = this.bindingEngine
            .propertyObserver(this.myMDCSwitch, 'selected')
            .subscribe((newValue) => { 
                this.active = newValue; 
            });
    }
    
    detached() {
        this.subscription.dispose();
    }

    disabledChanged(newvalue) {
        if(this.myMDCSwitch) this.myMDCSwitch.disabled = newvalue;
    }

    activeChanged(newvalue) {
        if(this.myMDCSwitch) this.myMDCSwitch.selected = newvalue;
    }
}