import { inject, bindable, bindingMode } from "aurelia-framework";
import { MDCChip } from "@material/chips/dist/mdc.chips.min";

@inject(Element)
export class MdcChip {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) label;
  @bindable leading;
  @bindable trailing;

  constructor(element) {
    this.element = element;
  }

  bind() {
    this.mdcChip = new MDCChip(this.element);
  }
}