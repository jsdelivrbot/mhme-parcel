parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"VByX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("react-router-dom"),r=o(require("../components/container")),n=o(require("react-emotion"));function o(e){return e&&e.__esModule?e:{default:e}}function u(){var e=a(["\n  font-size: 2rem;\n  margin: 10rem 0;\n"]);return u=function(){return e},e}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=(0,n.default)("p")(u()),i=function(){return e.default.createElement(r.default,null,e.default.createElement(l,null,"404 - 😱 Oh No you found a page that doesn't exist!"),e.default.createElement(l,null,"If you are looking for something to read, check out this blog post"," ",e.default.createElement(t.Link,{to:"/blog/2016/November/links"},"Links")))};exports.default=i;
},{"react":"1n8/","react-router-dom":"obMO","../components/container":"ODtL","react-emotion":"ES27"}]},{},[], null)
//# sourceMappingURL=/404.c11c29c4.map