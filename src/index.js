const DOMNodeCollection = require('./dom_node_collection');

const $l = (selector) => {
    if (typeof selector === 'string') {
        // make a CSS selector
        const nodeList = document.querySelectorAll(selector);
        const nodesArr = Array.from(nodeList);
        return new DOMNodeCollection(nodesArr);
    } else if(selector instanceof HTMLElement){
        // to test: let html = document.querySelector('div');
        // $l(html);
        let htmlArr = [];
        htmlArr.push(selector);
        
        return new DOMNodeCollection(htmlArr);
    }
}


window.$l = $l;