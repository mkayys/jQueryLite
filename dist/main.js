/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass DOMNodeCollection {\n    constructor(nodesArr){\n        this.arr = nodesArr;\n    }\n\n    html(str) {\n        if (!str) {\n            return this.arr[0].innerHTML;\n        } else {\n            for(let i=0; i< this.arr.length; i++) {\n                this.arr[i].innerHTML = str;\n            }\n            return this.arr;\n        }\n    }\n\n    empty() {\n        for (let i=0; i < this.arr.length; i++) {\n            this.arr[i].innerHTML = \"\";\n        }\n        return this.arr;\n    }\n\n    append(arg) {\n        // arg can be a jQuery-lite wrapped collection, HTML element, or string \n        if(arg instanceof DOMNodeCollection) {\n            for (let i = 0; i < this.arr.length; i++) {\n                this.arr[i].innerHTML += arg.outerHTML;\n            }\n            return this.arr;\n        } else if (arg instanceof HTMLElement) {\n\n            // document.createElement\n            for (let i = 0; i < this.arr.length; i++) {\n                this.arr[i].innerHTML += arg.outerHTML;\n            }\n\n        } else {\n            for (let i=0; i < this.arr.length; i++) {\n                this.arr[i].innerHTML += arg;\n            }\n            return this.arr;\n        }\n    }\n\n    attr(attr, val) {\n        if (!val) {\n            return this.arr[0].getAttribute(attr);\n        } else {\n            for (let i=0; i < this.arr.length; i++) {\n                this.arr[i].setAttribute(attr, val);\n            }\n            return this.arr;\n        }\n    }\n\n    addClass(className) {\n        for (let i = 0; i < this.arr.length; i++) {\n            let currentClass = this.arr[i].getAttribute('class');\n\n            if (currentClass !== null){\n                if (currentClass.includes(className)) return this.arr;\n                this.arr[i].setAttribute(\"class\", `${currentClass} ${className}`);\n            } else {\n                this.arr[i].setAttribute('class', className);\n            }\n        }\n        return this.arr;\n    }\n\n    removeClass(className) {\n        for (let i=0; i < this.arr.length; i++){\n            let currentClass = this.arr[i].getAttribute('class');\n            let currentClassArr = currentClass.split(' ');\n\n            if (currentClassArr.includes(className)) {\n                let idx = currentClassArr.indexOf(className);\n                currentClassArr.splice(idx, 1);\n                currentClass = currentClassArr.join(' ').trim();\n                this.arr[i].setAttribute('class', currentClass);\n            }\n            \n        }\n        return this.arr;\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst $l = (selector) => {\n    if (typeof selector === 'string') {\n        // make a CSS selector\n        const nodeList = document.querySelectorAll(selector);\n        const nodesArr = Array.from(nodeList);\n        return new DOMNodeCollection(nodesArr);\n    } else if(selector[0] instanceof HTMLElement){\n        // to test: let html = document.querySelector('div');\n        // $l(html);\n        let htmlArr = [];\n        for (let i=0; i < selector.length; i++) {\n            htmlArr.push(selector[i]);\n        }\n\n        return new DOMNodeCollection(htmlArr);\n    }\n}\n\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });