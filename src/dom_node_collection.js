
class DOMNodeCollection {
    constructor(nodesArr){
        this.arr = nodesArr;
    }

    html(str) {
        if (!str) {
            return this.arr[0].innerHTML;
        } else {
            for(let i=0; i< this.arr.length; i++) {
                this.arr[i].innerHTML = str;
            }
            return this.arr;
        }
    }

    empty() {
        for (let i=0; i < this.arr.length; i++) {
            this.arr[i].innerHTML = "";
        }
        return this.arr;
    }

    append(arg) {
        // arg can be a jQuery-lite wrapped collection, HTML element, or string 
        if(arg instanceof DOMNodeCollection) {
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].innerHTML += arg.outerHTML;
            }
            return this.arr;
        } else if (arg instanceof HTMLElement) {

            // document.createElement
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].innerHTML += arg.outerHTML;
            }

        } else {
            for (let i=0; i < this.arr.length; i++) {
                this.arr[i].innerHTML += arg;
            }
            return this.arr;
        }
    }

    attr(attr, val) {
        if (!val) {
            return this.arr[0].getAttribute(attr);
        } else {
            for (let i=0; i < this.arr.length; i++) {
                this.arr[i].setAttribute(attr, val);
            }
            return this.arr;
        }
    }

    addClass(className) {
        for (let i = 0; i < this.arr.length; i++) {
            let currentClass = this.arr[i].getAttribute('class');
            if (currentClass !== null){
                this.arr[i].setAttribute("class", `${currentClass} ${className}`);
            } else {
                this.arr[i].setAttribute('class', className);
            }
        }
        return this.arr;
    }

    removeClass() {

    }
}

module.exports = DOMNodeCollection;