import {bindable, customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('details-ie')
@inject(Element)
export class DetailsIe {
   

    constructor ( element) {
    	this.element= element;
    }

    bind() {
    	var ua = window.navigator.userAgent;
        var msie = (ua.indexOf("Trident") + window.navigator.userAgent.indexOf("Edge")!=-2);
        if (msie){
            var elem = this.element;
            this.element.children[0].addEventListener("click", function(){
                if (elem.getAttribute("open")=="" ) {
                    elem.removeAttribute("open");
                } else {
                    elem.setAttribute("open","");
                }
            });
        }
    }
}
