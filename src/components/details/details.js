import {bindable, customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('details-ie')
@inject(Element)
export class DetailsIe {
   

    constructor ( element) {
        this.element= element;
        
        this.handleClick = e => {
            if (this.element.getAttribute("open")=="" ) {
                this.element.removeAttribute("open");
            } else {
                this.element.setAttribute("open","");
            }
        }
    }

    attached() {
        var ua = window.navigator.userAgent;
        var msie = (ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge")!=-2);
        debugger
        if (msie){
            this.element.children[0].addEventListener("click", this.handleClick);
        }
    }

    detached() {
        this.element.children[0].removeEventListener("click", this.handleClick);
    }
}
