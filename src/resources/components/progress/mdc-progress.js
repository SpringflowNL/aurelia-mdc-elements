import { inject, bindable, customElement } from "aurelia-framework";

@customElement("mdc-progress")
@inject(Element)
export class MdcProgress {
  @bindable value = 0;
  @bindable min = 0;
  @bindable max = 0;
  @bindable buffer = false;

  constructor(element) {
    this.element = element;
  }
}