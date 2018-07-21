parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=h(["\n  font-size: 3rem;\n  text-align: center;\n"],["\n  font-size: 3rem;\n  text-align: center;\n"]),t=h(["\n  color: ",";\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"],["\n  color: ",";\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"]),l=h(["\n  font-size: 1.2rem;\n"],["\n  font-size: 1.2rem;\n"]),n=h(["\n  margin: 1em;\n  border: solid 4px ",";\n  border-radius: 1em;\n  padding: 1rem;\n  & h4 {\n    margin: 0;\n  }\n"],["\n  margin: 1em;\n  border: solid 4px ",";\n  border-radius: 1em;\n  padding: 1rem;\n  & h4 {\n    margin: 0;\n  }\n"]),a=h(["\n        list-style: none;\n      "],["\n        list-style: none;\n      "]),r=require("react"),o=m(r),u=require("react-router-dom"),s=require("react-emotion"),i=m(s),c=require("../components/container.js"),d=m(c),f=require("../styles/index.js");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=(0,i.default)("h3")(e),E=(0,i.default)("a")(t,f.colors.base,f.colors.base),g=(0,i.default)(u.Link)(t,f.colors.base,f.colors.base),b=(0,i.default)("p")(l),y=(0,i.default)("li")(n,f.colors.base),w=function(){return o.default.createElement(d.default,null,o.default.createElement(p,null,"My Projects"),o.default.createElement("ul",{className:(0,s.css)(a)},o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(g,{to:"/recycles"},"Recycles ♻️")," - 2018"),o.default.createElement(b,null,"A collection of React component lifecycle render-prop components.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(g,{to:"/react-state-reducer"},"react-state-reducer")," ","- 2018"),o.default.createElement(b,null,"A redux-like state management library using"," ",o.default.createElement("code",null,"setState")," and"," ",o.default.createElement("code",null,"createContext"),".")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://github.com/hamlim/postcss-plugin-initial"},"postcss-plugin-initial")," ","- 2018"),o.default.createElement(b,null,"A postcss plugin to polyfill the"," ",o.default.createElement("code",null,"initial")," declaration value.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://github.com/hamlim/app-config"},"appconfig")," ","- 2018"),o.default.createElement(b,null,"A universal config file format for web applications.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://github.com/hamlim/resp"},"resp")," ","- 2018"),o.default.createElement(b,null,"A simple css-in-js responsive utility package.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://github.com/hamlim/ds"},"DS")," ","- 2018"),o.default.createElement(b,null,"Extremely work in progress project to develop a single source of truth for design systems.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://htmlcolors.now.sh/"},"HTML Colors")),o.default.createElement(b,null,"A list of all the HTML named colors, with links for generating a color palette.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"http://matthamlin.me/bookmarkbot"},"Bookmark Bot")),o.default.createElement(b,null,"A quick and dirty way to save tweets for later by DMing links to a Twitter account.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"http://bombsweeper.now.sh/"},"Bombsweeper")),o.default.createElement(b,null,"A quick and dirty React re-creation of the classic Minesweeper game. Built this in a few hours to see how difficult it would be to implement. Turns out its not too difficult.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://todometer-web.xyz/"},"Todometer Web")),o.default.createElement(b,null,"I found this really awesome open source electron-based todo app called Todometer (",o.default.createElement(E,{href:"https://cassidoo.github.io/todometer/"},"link here"),") and decided to try and recreate its entire functionality on the web using Next.js and other bits and piece of React.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"/"},"MattHamlin.me")),o.default.createElement(b,null,"This website is one of the largest time sinks for me. I consistently spend time testing out other techniques, tools, and technologies on this. Over the past two months I have dropped all work on anything else (outside of my actual job of course) to revamp this website.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://goexploring.today/Future-Grid/"},"Future-Grid")),o.default.createElement(b,null,"Future-Grid is a complete forward facing css grid system. It is built to support IE8 and up, and uses flexbox, and is also the first and only CSS Grid grid framework. I built this in the span of a short weekend as a test for myself and also as a way to learn more about CSS Grid.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://goexploring.today"},"Goexploring.today")),o.default.createElement(b,null,"Goexploring.today is like my garage, its where I store all my side projects that I have worked on, I am in the process of moving some of the projects into their own domains but for now they all live on that domain.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://goexploring.today/colors"},"Colors")),o.default.createElement(b,null,"Colors was one of my first React projects, and it stands as one of my few projects that uses technology that only really evergreen browsers support (right now the bleeding edge of the project is the ",o.default.createElement("code",null,"fetch")," api.)")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://goexploring.today/Dollar"},"Dollar")),o.default.createElement(b,null,"Dollar was one of my first full on projects. And to this date I still consider it as one of the most ambitious projects I have worked on by myself. It involved a lot of crappy JS when I first made it but I am working on refactoring it to use react and redux. I think at the moment of writing this it is extremely broken, but I plan on getting back to it after I polish off the rest of this website.")),o.default.createElement(y,null,o.default.createElement("h4",null,o.default.createElement(E,{href:"https://goexploring.today/bundles"},"Bundles")),o.default.createElement(b,null,"Bundles was I believe the first project that I worked on full time, I think Dollar superseeds it in a few places mainly because Dollar was more a fully functioning webapp. Bundles still works to this date, however it never really got to a place where I was comfortable with it. I ended up spending more and more time building out Dollar over Bundles."))))};exports.default=w;
},{"react":16,"react-router-dom":17,"react-emotion":44,"../components/container.js":79,"../styles/index.js":37}]},{},[9], null)
//# sourceMappingURL=/projects.52eea29f.map