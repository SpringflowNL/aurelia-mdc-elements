import { bindable, customElement, inject, bindingMode, TaskQueue } from 'aurelia-framework';
import { MDCSelect } from '@material/select';

@customElement('mdc-select')
@inject(Element, TaskQueue)
export class MdcSelect {
    @bindable label;
    @bindable data;
    @bindable value;
    @bindable key;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) selected;
    @bindable selectedValue;
    @bindable disabled = false;
    @bindable required = false;
    @bindable selectLabel;
    @bindable secondarylabel = null;
    @bindable modifier = null;
    @bindable leading;
    @bindable outlined = false;
    @bindable anchorElement;
    @bindable emptyOption = true;

    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.unique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    bind() {
        if (this.mdcSelect) {
            this.refreshOptions();
        }
    }

    attached() {
        this.mdcSelect = new MDCSelect(this.element.firstElementChild);
        this.mdcSelect.selectedIndex = this.getIndex(this.data, this.selected);

        this.mdcSelect.listen('MDCSelect:change', () => {
            this.changedEvent = true;
            this.selected = this.mdcSelect.value;

            //Set invalid class after first change
            if (!this.mdcSelect.value && this.required) {
                this.requiredChanged(true);
            } else {
                this.requiredChanged(false);
            }
        });

        this.refreshOptions();
    }

    dataChanged() {
        const self = this;

		this.taskQueue.queueMicroTask(() => {
            self.mdcSelect.layoutOptions();
        });
    }

    selectedChanged(newvalue) {
        const self = this;

        if (!this.changedEvent) {
            this.taskQueue.queueMicroTask(() => {

                self.selectedValue = newvalue;
                self.mdcSelect.selectedIndex = self.getIndex(self.data, newvalue);
            });
        }

        if (this.selectedValue && newvalue) {
            this.mdcSelect.valid = true;
        }
        
        this.changedEvent = false;
    }

    refreshOptions() {
        this.mdcSelect.setDisabled = this.disabled;
        this.mdcSelect.setRequired = this.required;   
        this.selectedChanged(this.selected);

        this.mdcSelect.hasOutline = this.outlined;
    }

    getIndex(array, value) {
        let index = this.emptyOption ? -1 : 0;

        if(array && array.findIndex) {
            index = array.findIndex(e => e[this.key] === value);
            return index + (this.emptyOption ? 1 : 0);
        } else if(array && array.find) {
            index = array.find(e => e[this.key] === value);
            return index + (this.emptyOption ? 1 : 0);
        } else {
            return index;
        }
    }

    disabledChanged(newvalue) {
        if (this.mdcSelect) this.mdcSelect.disabled = newvalue ? true : false;
    }

    outlinedChanged(newvalue) {
        if(this.mdcSelect) this.mdcSelect.hasOutline = newvalue ? true : false;
    }

    requiredChanged(newvalue) {
        if (this.mdcSelect) this.mdcSelect.required = newvalue ? true : false;
    }

    secondarylabelChanged(newvalue) {
        if (this.mdcSelect && newvalue) {
            this.anchorElement.setAttribute('aria-controls', `select-helper--${this.unique}`);
            this.anchorElement.setAttribute('aria-describedby', `select-helper--${this.unique}`);
        }
    }
}