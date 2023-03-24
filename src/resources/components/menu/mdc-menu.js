import { bindable, customElement, inject } from 'aurelia-framework';
import { MDCMenu } from '@material/menu';

@customElement('mdc-menu')
@inject(Element)
export class MdcMenu {
	@bindable label;
	@bindable leading;
	@bindable trailing;
	@bindable menuElement;

	constructor(element) {
		this.element = element;
	}

	toggleMenu() {
		this.myMdcMenu.open = !this.myMdcMenu.open;
	}

	bind() {
		this.myMdcMenu = new MDCMenu(this.menuElement);
	}

	detached() {
		this.myMdcMenu.destroy();
	}
}