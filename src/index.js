
const $l = (selector) => {
    if (typeof selector === 'string') {
        // make a CSS selector
        const nodeList = document.querySelectorAll(selector);
        const nodesArr = Array.from(nodeList);
        return nodesArr;
    } else {
        // 
    }
}


window.$l = $l;