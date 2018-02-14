import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';

@inject(Element)
export class MdcSwitch {
	@bindable({ defaultBindingMode: bindingMode.twoWay }) label = "on/off";
	@bindable({ defaultBindingMode: bindingMode.twoWay }) disabled = false;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) active = true;
}