!function(n){function e(e){for(var o,a,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)a=c[u],r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);for(p&&p(e);f.length;)f.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},r={0:0},i=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;i.push([68,1]),t()}({12:function(n,e,t){var o=t(65);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},30:function(n,e,t){var o=t(57);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},31:function(n,e,t){var o=t(60);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},32:function(n,e,t){var o=t(61);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},36:function(n,e,t){var o=t(62);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},37:function(n,e,t){var o=t(63);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},38:function(n,e,t){var o=t(64);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},46:function(n,e,t){var o=t(47);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(o,r);o.locals&&(n.exports=o.locals)},47:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,'/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\n/* Document\n       ========================================================================== */\n/**\n     * 1. Correct the line height in all browsers.\n     * 2. Prevent adjustments of font size after orientation changes in\n     *    IE on Windows Phone and in iOS.\n     */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n       ========================================================================== */\n/**\n     * Remove the margin in all browsers (opinionated).\n     */\nbody {\n  margin: 0; }\n\n/**\n     * Add the correct display in IE 9-.\n     */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n     * Correct the font size and margin on `h1` elements within `section` and\n     * `article` contexts in Chrome, Firefox, and Safari.\n     */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n       ========================================================================== */\n/**\n     * Add the correct display in IE 9-.\n     */\nfigcaption,\nfigure {\n  display: block; }\n\n/**\n     * Add the correct margin in IE 8.\n     */\nfigure {\n  margin: 1em 40px; }\n\n/**\n     * 1. Add the correct box sizing in Firefox.\n     * 2. Show the overflow in Edge and IE.\n     */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n     * Add the correct display in IE.\n     */\nmain {\n  display: block; }\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Links\n       ========================================================================== */\n/**\n     * 1. Remove the gray background on active links in IE 10.\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n     */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/* Text-level semantics\n       ========================================================================== */\n/**\n     * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n     */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n     */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n     * Add the correct font weight in Chrome, Edge, and Safari.\n     */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n     * Add the correct font style in Android 4.3-.\n     */\ndfn {\n  font-style: italic; }\n\n/**\n     * Add the correct background and color in IE 9-.\n     */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n     * Add the correct font size in all browsers.\n     */\nsmall {\n  font-size: 80%; }\n\n/**\n     * Prevent `sub` and `sup` elements from affecting the line height in\n     * all browsers.\n     */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n       ========================================================================== */\n/**\n     * Add the correct display in IE 9-.\n     */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n     * Add the correct display in iOS 4-7.\n     */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n     * Remove the border on images inside links in IE 10-.\n     */\nimg {\n  border-style: none; }\n\n/**\n     * Hide the overflow in IE.\n     */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n       ========================================================================== */\n/**\n     * 1. Change the font styles in all browsers (opinionated).\n     * 2. Remove the margin in Firefox and Safari.\n     */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n     * Show the overflow in IE.\n     */\nbutton {\n  overflow: visible; }\n\n/**\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\n     * 1. Remove the inheritance of text transform in Firefox.\n     */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n     * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n     *    controls in Android 4.\n     * 2. Correct the inability to style clickable types in iOS and Safari.\n     */\nbutton,\nhtml [type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  /**\n       * Remove the inner border and padding in Firefox.\n       */\n  /**\n       * Restore the focus styles unset by the previous rule.\n       */ }\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0; }\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n\n/**\n     * Show the overflow in Edge.\n     */\ninput {\n  overflow: visible; }\n\n/**\n     * 1. Add the correct box sizing in IE 10-.\n     * 2. Remove the padding in IE 10-.\n     */\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n     * Correct the cursor style of increment and decrement buttons in Chrome.\n     */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n     * 1. Correct the odd appearance in Chrome and Safari.\n     * 2. Correct the outline style in Safari.\n     */\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n  /**\n       * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n       */ }\n  [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n\n/**\n     * 1. Correct the inability to style clickable types in iOS and Safari.\n     * 2. Change font properties to `inherit` in Safari.\n     */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/**\n     * Correct the padding in Firefox.\n     */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n     * 1. Correct the text wrapping in Edge and IE.\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\n     * 3. Remove the padding so developers are not caught out when they zero out\n     *    `fieldset` elements in all browsers.\n     */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n     * 1. Add the correct display in IE 9-.\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n     */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n     * Remove the default vertical scrollbar in IE.\n     */\ntextarea {\n  overflow: auto; }\n\n/* Interactive\n       ========================================================================== */\n/*\n     * Add the correct display in Edge, IE, and Firefox.\n     */\ndetails {\n  display: block; }\n\n/*\n     * Add the correct display in all browsers.\n     */\nsummary {\n  display: list-item; }\n\n/*\n     * Add the correct display in IE 9-.\n     */\nmenu {\n  display: block; }\n\n/* Scripting\n       ========================================================================== */\n/**\n     * Add the correct display in IE 9-.\n     */\ncanvas {\n  display: inline-block; }\n\n/**\n     * Add the correct display in IE.\n     */\ntemplate {\n  display: none; }\n\n/* Hidden\n       ========================================================================== */\n/**\n     * Add the correct display in IE 10-.\n     */\n[hidden] {\n  display: none; }\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n',""])},57:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,".app-components-Link-Link__link--17OD2 {\n  color: white;\n  text-decoration: none;\n  transition: color .3s; }\n  .app-components-Link-Link__link--17OD2:active, .app-components-Link-Link__link--17OD2:hover {\n    color: #cc9bff; }\n",""]),e.locals={link:"app-components-Link-Link__link--17OD2"}},60:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,".app-components-NavigationOverlay-NavGroup__navGroup--2sQQe {\n  padding-left: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n",""]),e.locals={navGroup:"app-components-NavigationOverlay-NavGroup__navGroup--2sQQe"}},61:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,".app-components-NavigationOverlay-NavigationOverlay__overlay--U9WVc {\n  position: fixed;\n  left: 10px;\n  top: 10px;\n  padding: 10px;\n  white-space: nowrap; }\n  .app-components-NavigationOverlay-NavigationOverlay__overlay--U9WVc h1 {\n    margin-top: 0;\n    margin-bottom: 5px; }\n",""]),e.locals={overlay:"app-components-NavigationOverlay-NavigationOverlay__overlay--U9WVc"}},62:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,".app-components-Intro-Intro__intro--FbJzU {\n  width: 100%;\n  height: 100%; }\n  .app-components-Intro-Intro__intro--FbJzU canvas {\n    cursor: grab; }\n    .app-components-Intro-Intro__intro--FbJzU canvas:active {\n      cursor: grabbing; }\n",""]),e.locals={intro:"app-components-Intro-Intro__intro--FbJzU"}},63:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,".app-components-Playground-Playground__display--1PGtT {\n  width: 100%;\n  height: 100%; }\n",""]),e.locals={display:"app-components-Playground-Playground__display--1PGtT"}},64:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,".app-components-Waveform-Waveform__waveform--s_R_J {\n  display: flex;\n  align-items: flex-end; }\n  .app-components-Waveform-Waveform__waveform--s_R_J > * {\n    background-color: white;\n    flex-grow: 1; }\n",""]),e.locals={waveform:"app-components-Waveform-Waveform__waveform--s_R_J"}},65:function(n,e,t){(e=n.exports=t(5)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Chakra+Petch);",""]),e.push([n.i,".app-components-App-App__app--Gqefs {\n  font-family: 'Chakra Petch', sans-serif;\n  height: 100vh;\n  width: 100%;\n  background-color: black;\n  color: white;\n  display: flex; }\n\n.app-components-App-App__content--3Btz6 {\n  flex-grow: 1; }\n\n.app-components-App-App__content--3Btz6 {\n  width: 100%;\n  height: 100%; }\n",""]),e.locals={app:"app-components-App-App__app--Gqefs",content:"app-components-App-App__content--3Btz6"}},68:function(n,e,t){"use strict";t.r(e);t(46);var o=t(0),r=t.n(o),i=t(17),a=t(9),c=t(21),s=t(26),l=t(27),p=t.n(l),u=t(13),f=t(70),d=t(69),m=t(11),h=t.n(m),y=t(29),b=t.n(y),v=t(30),g=t.n(v);function w(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function O(n){n=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){w(n,e,t[e])})}return n}({},n,{className:h()(n.className,g.a.link)});var e=b()(n.to);return""===e.protocol()&&""===e.domain()?r.a.createElement(d.a,n):["","http","https"].includes(e.protocol())?r.a.createElement("a",{href:n.to,className:n.className,target:"_blank",rel:"noopener noreferrer"},n.children):r.a.createElement("a",{href:n.to,className:n.className},n.children)}var x=t(31),_=t.n(x);function E(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var k=function(n){var e=n.name,t=n.links,o=E(n,["name","links"]);return r.a.createElement("div",o,r.a.createElement("div",null,e),r.a.createElement("div",{className:_.a.navGroup},t.map(function(n){var e=n.title,t=n.url;return r.a.createElement(O,{key:e,to:t},e)})))};function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j={games:[{title:"life",url:"/life"},{title:"playground",url:"/playground"},{title:"waveform",url:"/waveform"}],links:[{title:"github",url:"https://github.com/mayavera"},{title:"linkedin",url:"https://linkedin.com/in/mayavera"},{title:"codewars",url:"https://www.codewars.com/users/mayavera"},{title:"stackoverflow",url:"https://stackexchange.com/users/13452692/maya-vera"}]};var P=function(){return r.a.createElement("nav",null,Object.entries(j).map(function(n,e){var t=S(n,2),o=t[0],i=t[1];return r.a.createElement(k,{key:e,name:o,links:i})}))},A=t(32),z=t.n(A),I=function(){return r.a.createElement("div",{className:z.a.overlay},r.a.createElement("h1",null,r.a.createElement(O,{to:"/"},"asura's"," realm")),r.a.createElement(P,null))},C=t(7),R=t(33),N=t.n(R),T=t(34),W=t.n(T),D=t(35),F=t.n(D);function L(n){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function M(){return(M=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function G(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function U(n){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function B(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function J(n,e){return(J=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var H=function(n){return function(e){var t=1e3/n,i=function(n){function i(){var n,e,o,r;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return o=this,r=(n=U(i)).call.apply(n,[this].concat(c)),e=!r||"object"!==L(r)&&"function"!=typeof r?B(o):r,q(B(e),"state",{step:0,previousAnimationTimestamp:0}),q(B(e),"tick",function(n){n-e.state.previousAnimationTimestamp>=t&&e.setState({step:e.state.step+1,previousAnimationTimestamp:n}),window.requestAnimationFrame(e.tick)}),e}var a,c,s;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&J(n,e)}(i,o.Component),a=i,(c=[{key:"render",value:function(){var n=this;return r.a.createElement(e,M({step:this.state.step,onReady:function(){return n.tick(0)}},this.props))}}])&&G(a.prototype,c),s&&G(a,s),i}();return q(i,"displayName","Animated(".concat(F()(e),")")),W()(i,e),i}},Q=t(36),V=t.n(Q);function X(n){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function K(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function Y(n){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function Z(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $(n,e){return($=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function nn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var en=function(n){function e(){var n,t,o,i;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return o=this,i=(n=Y(e)).call.apply(n,[this].concat(c)),t=!i||"object"!==X(i)&&"function"!=typeof i?Z(o):i,nn(Z(t),"display",r.a.createRef()),nn(Z(t),"renderer",new C.WebGLRenderer),nn(Z(t),"camera",void 0),nn(Z(t),"cube",void 0),nn(Z(t),"scene",void 0),nn(Z(t),"onWindowResize",function(){var n=t.display.current,e=n.clientWidth,o=n.clientHeight;t.renderer.setSize(e,o),t.camera.aspect=e/o,t.camera.updateProjectionMatrix()}),t}var t,o,i;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&$(n,e)}(e,r.a.Component),t=e,(o=[{key:"componentDidMount",value:function(){this.scene=new C.Scene;var n=new C.MeshPhongMaterial({color:16777215,emissive:4473924});this.cube=new C.Mesh(new C.BoxGeometry(1,1,1),n),this.scene.add(this.cube),this.scene.add(new C.DirectionalLight(16777215,.5));var e=this.display.current;this.camera=new C.PerspectiveCamera(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.z=5,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),new N.a(this.camera,this.renderer.domElement),window.addEventListener("resize",this.onWindowResize),this.props.onReady()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"componentDidUpdate",value:function(n){this.props.step!==n.step&&(this.cube.rotation.y+=.01,this.cube.rotation.x+=.005,this.renderer.render(this.scene,this.camera))}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.display,className:V.a.intro})}}])&&K(t.prototype,o),i&&K(t,i),e}(),tn=H(60)(en),on=t(37),rn=t.n(on);function an(n){return(an="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function cn(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function sn(n){return(sn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function ln(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pn(n,e){return(pn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var un=H(function(n){function e(){var n,t,o,r,i,a,c;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,l=new Array(s),p=0;p<s;p++)l[p]=arguments[p];return o=this,t=!(r=(n=sn(e)).call.apply(n,[this].concat(l)))||"object"!==an(r)&&"function"!=typeof r?ln(o):r,i=ln(t),c={x:0,y:0},(a="state")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,t}var t,i,a;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&pn(n,e)}(e,o["Component"]),t=e,(i=[{key:"componentDidMount",value:function(){this.props.onReady()}},{key:"componentDidUpdate",value:function(n){this.props.step!==n.step&&this.setState({x:this.state.x+1,y:this.state.y+1})}},{key:"render",value:function(){return r.a.createElement("svg",{className:rn.a.display},r.a.createElement("rect",{x:this.state.x,y:this.state.y,width:100,height:100,fill:"red"}))}}])&&cn(t.prototype,i),a&&cn(t,a),e}()),fn=t(38),dn=t.n(fn);function mn(n){return(mn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function hn(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function yn(n){return(yn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function bn(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function vn(n,e){return(vn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function gn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var wn=function(n){function e(){var n,t,o,r;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return o=this,t=!(r=(n=yn(e)).call.apply(n,[this].concat(a)))||"object"!==mn(r)&&"function"!=typeof r?bn(o):r,gn(bn(t),"audioContext",void 0),gn(bn(t),"source",void 0),gn(bn(t),"analyser",void 0),gn(bn(t),"data",void 0),t}var t,o,i;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&vn(n,e)}(e,r.a.Component),t=e,(o=[{key:"componentDidMount",value:function(){var n=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){n.audioContext=new AudioContext,n.source=n.audioContext.createMediaStreamSource(e),n.analyser=n.audioContext.createAnalyser(),n.analyser.fftSize=1024,n.data=new Uint8Array(n.analyser.frequencyBinCount),n.analyser.getByteFrequencyData(n.data),n.source.connect(n.analyser),n.props.onReady()})}},{key:"componentDidUpdate",value:function(n){this.props.step!==n.step&&this.analyser.getByteFrequencyData(this.data)}},{key:"render",value:function(){return r.a.createElement("div",{className:h()(this.props.className,dn.a.waveform)},this.data&&Array.from(this.data).map(function(n,e){return r.a.createElement("div",{key:e,style:{height:n}})}))}}])&&hn(t.prototype,o),i&&hn(t,i),e}(),On=H(20)(wn),xn=t(12),_n=t.n(xn),En=t(39),kn=function(){return r.a.createElement(En.a,{className:_n.a.content})},Sn=function(){return r.a.createElement(un,{className:_n.a.content})},jn=function(){return r.a.createElement(On,{className:_n.a.content})},Pn=function(){return r.a.createElement("div",{className:_n.a.app},r.a.createElement(I,null),r.a.createElement("div",{className:_n.a.content},r.a.createElement(f.a,{exact:!0,path:"/",component:tn}),r.a.createElement(f.a,{exact:!0,path:"/life",component:kn}),r.a.createElement(f.a,{exact:!0,path:"/playground",component:Sn}),r.a.createElement(f.a,{exact:!0,path:"/waveform",component:jn})))},An=Object(i.a)(),zn=Object(a.c)({router:Object(c.b)(An)}),In=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,Cn=Object(a.e)(zn,{},In(Object(a.a)(Object(s.a)(An))));p.a.render(r.a.createElement(u.a,{store:Cn},r.a.createElement(c.a,{history:An},r.a.createElement(Pn,null))),document.getElementById("app"))}});