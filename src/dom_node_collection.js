
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
}

module.exports = DOMNodeCollection;