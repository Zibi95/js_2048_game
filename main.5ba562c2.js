parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"w8i0":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,u=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw i}}}}function e(t){return i(t)||o(t)||n(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isWin=exports.isGameOver=exports.hasEmptyCell=exports.isCellsEqual=exports.getTotalPoints=exports.getRows=exports.getColumns=exports.getSelectedAxis=exports.getRandomIndex=void 0;var a=function(t){return Math.floor(Math.random()*t)};exports.getRandomIndex=a;var s=function(t,e){return t.reduce(function(t,r,n){return t[Math.floor(e?n%t.length:n/t.length)].push(r),t},[[],[],[],[]])};exports.getSelectedAxis=s;var l=function(t){return s(e(t),!0)};exports.getColumns=l;var f=function(t){return s(e(t))};exports.getRows=f;var c=function(t){return e(t).reduce(function(t,e){return+e.textContent>2?t+ +e.textContent:t+0},0)};exports.getTotalPoints=c;var p=function(t,r){return e(t).some(function(t,e){return!t.isEqualNode(r.flat()[e])})};exports.isCellsEqual=p;var d=function(t){return e(t).some(function(t){return""===t.textContent})};exports.hasEmptyCell=d;var m=function(r){var n,o=t([].concat(e(f(r)),e(l(r))));try{for(o.s();!(n=o.n()).done;)for(var i=n.value,u=0;u<i.length;u++)if(i[u].isEqualNode(i[u+1]))return!0}catch(a){o.e(a)}finally{o.f()}},y=function(t){return!d(t)&&!m(t)};exports.isGameOver=y;var x=function(t){return e(t).some(function(t){return 2048==+t.textContent})};exports.isWin=x;
},{}],"BhVo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateBoard=exports.handleButtonChange=exports.addRandomCell=exports.createEmptyCell=exports.clearCells=exports.fillCell=exports.GRID_SIZE=void 0;var e=require("./helpers"),t=require("./main");function r(e){return l(e)||a(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=4;exports.GRID_SIZE=s;var c=function(e){var t=e.classList.item(1);t&&e.classList.remove(t)},d=function(e,t){c(e),e.textContent=t,e.classList.add("field-cell--".concat(t))};exports.fillCell=d;var u=function(){r(t.cells).forEach(function(e){e.textContent=null,c(e)})};exports.clearCells=u;var p=function(){var e=document.createElement("td");return e.classList.add("field-cell"),e};exports.createEmptyCell=p;var f=function r(){var n=t.rows[(0,e.getRandomIndex)(s)].children[(0,e.getRandomIndex)(s)],o=Math.random()<.1?4:2;n.textContent?r():d(n,o)};exports.addRandomCell=f;var m=function(e,t){c(e),e.classList.add(t.toLowerCase()),e.textContent=t};exports.handleButtonChange=m;var x=function(e){r(t.rows).forEach(function(t,n){t.innerHTML="",t.append.apply(t,r(e[n]))}),f()};exports.updateBoard=x;
},{"./helpers":"w8i0","./main":"KIzB"}],"RlUP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.moveRight=exports.moveLeft=exports.moveDown=exports.moveUp=void 0;var e=require("./helpers"),t=require("./domFunctions"),o=require("./main"),r=function(e){for(var o=[],r=0;r<e.length;){var n=e[r],l=e[r+1];l&&n.isEqualNode(l)&&((0,t.fillCell)(n,2*+n.textContent),r++),r++,o.push(n)}return o},n=function(e,o){return e.map(function(e){var n=e.filter(function(e){return e.textContent&&e}),l=r(n),s=Array.from({length:t.GRID_SIZE-l.length},function(){return(0,t.createEmptyCell)()});return o?s.concat(l):l.concat(s)})},l=function(r,l){var s=n(r,l);(0,e.isCellsEqual)(o.cells,s)&&(0,t.updateBoard)(s)},s=function(r,l){var s=n(r,l),u=(0,e.getSelectedAxis)(s.flat(),!0);(0,e.isCellsEqual)(o.cells,u)&&(0,t.updateBoard)(u)},u=function(){s((0,e.getColumns)(o.cells))};exports.moveUp=u;var i=function(){s((0,e.getColumns)(o.cells),!0)};exports.moveDown=i;var c=function(){l((0,e.getRows)(o.cells))};exports.moveLeft=c;var a=function(){l((0,e.getRows)(o.cells),!0)};exports.moveRight=a;
},{"./helpers":"w8i0","./domFunctions":"BhVo","./main":"KIzB"}],"KIzB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cells=exports.rows=void 0;var e=require("./domFunctions"),t=require("./helpers"),s=require("./moveFunctions"),r=document.getElementsByClassName("field-row");exports.rows=r;var n=document.getElementsByClassName("field-cell");exports.cells=n;var o=document.querySelector(".button"),i=document.querySelectorAll(".message"),d=document.querySelector(".game-score"),c=!1,a=function t(){o.removeEventListener("click",t),(0,e.clearCells)(),d.textContent=0,(0,e.handleButtonChange)(o,"Start"),i[0].classList.add("hidden"),i[1].classList.add("hidden"),i[2].classList.remove("hidden"),o.addEventListener("click",l),c=!1},l=function t(){o.removeEventListener("click",t),(0,e.addRandomCell)(),(0,e.handleButtonChange)(o,"Restart"),o.addEventListener("click",a),i[2].classList.add("hidden"),c=!0};o.addEventListener("click",l),document.addEventListener("keydown",function(e){if(c){if((0,t.isGameOver)(n))return i[0].classList.remove("hidden"),void(c=!1);switch(e.key){case"ArrowUp":(0,s.moveUp)();break;case"ArrowDown":(0,s.moveDown)();break;case"ArrowLeft":(0,s.moveLeft)();break;case"ArrowRight":(0,s.moveRight)()}d.textContent=(0,t.getTotalPoints)(n),(0,t.isWin)(n)&&(i[1].classList.remove("hidden"),c=!1)}});
},{"./domFunctions":"BhVo","./helpers":"w8i0","./moveFunctions":"RlUP"}]},{},["KIzB"], null)
//# sourceMappingURL=main.5ba562c2.js.map