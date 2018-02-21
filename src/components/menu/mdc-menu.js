import { bindable, customElement, inject, DOM } from 'aurelia-framework';

import { menu as mdcMenu } from 'material-components-web/dist/material-components-web';
const { MDCMenu, MDCMenuFoundation } = mdcMenu;


@customElement('mdc-menu')
@inject(Element)
export class MdcMenu {
	@bindable label;
	@bindable icon;
	@bindable menuElement;
	myMdcMenu;

	constructor(element) {
		this.element = element;
	}

	toggleMenu()
	{
		this.myMdcMenu.open = !this.myMdcMenu.open;
	}

	bind() {
		this.myMdcMenu = new MDCMenu(this.menuElement);
	}

	detached() {
		this.myMdcMenu.destroy();
	}
}
