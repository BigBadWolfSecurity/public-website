(self.webpackChunkbbws_website=self.webpackChunkbbws_website||[]).push([[351],{8163:function(t,e,r){var n;"undefined"!=typeof self&&self,n=function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};e.default=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(2),l=(n=a)&&n.__esModule?n:{default:n},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.smoothScroll=r.smoothScroll.bind(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){r(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var r=function(){return 0};void 0!==this.props.offset&&(r=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var n=t.currentTarget.getAttribute("href").slice(1),o=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-r(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["offset"]));return l.default.createElement("a",o({},e,{onClick:this.smoothScroll}))}}]),e}(a.Component);e.default=c},function(e,r){e.exports=t},function(t,e,r){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r,n=t.HTMLElement||t.Element,o={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(r=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):o.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var r=p(this),n=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==e.body?(h.call(this,r,r.scrollLeft+i.left-n.left,r.scrollTop+i.top-n.top),"fixed"!==t.getComputedStyle(r).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function u(e,r){var n=t.getComputedStyle(e,null)["overflow"+r];return"auto"===n||"scroll"===n}function f(t){var e=s(t,"Y")&&u(t,"Y"),r=s(t,"X")&&u(t,"X");return e||r}function p(t){var r;do{r=(t=t.parentNode)===e.body}while(!1===r&&!1===f(t));return r=null,t}function d(e){var r,n,o,a,l=(i()-e.startTime)/468;a=l=l>1?1:l,r=.5*(1-Math.cos(Math.PI*a)),n=e.startX+(e.x-e.startX)*r,o=e.startY+(e.y-e.startY)*r,e.method.call(e.scrollable,n,o),n===e.x&&o===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(r,n,a){var c,s,u,f,p=i();r===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=o.scroll):(c=r,s=r.scrollLeft,u=r.scrollTop,f=l),d({scrollable:c,method:f,startTime:p,startX:s,startY:u,x:n,y:a})}}}}()}])},t.exports=n(r(7294))},2993:function(t){var e="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(t)){if((l=t.length)!=a.length)return!1;for(c=l;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((l=t.length)!=a.length)return!1;for(c=l;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((l=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!i(t[s[c]],a[s[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(t,e,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=t(s.map((function(t){return t.props}))),f.canUseDOM?e(c):r&&(c=r(c))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),a(f,"canUseDOM",l),f}}},7004:function(t,e,r){"use strict";r(7294);var n=r(5444),o=r(8100),i={default:"py-3 px-8",lg:"py-4 px-12",xl:"py-5 px-16 text-lg"};e.Z=function(t){var e=t.children,r=t.className,a=void 0===r?"":r,l=t.size,c=t.href;return c?(0,o.tZ)(n.rU,{to:c,className:"\n  "+(i[l]||i.default)+"\n  "+a+"\n  bg-primary\n  hover:bg-primary-darker\n  hover:text-white\n  rounded\n  text-white\n"},e):(0,o.tZ)("button",{type:"button",className:"\n        "+(i[l]||i.default)+"\n        "+a+"\n        bg-primary\n        hover:bg-primary-darker\n        rounded\n        text-white\n    "},e)}},7627:function(t,e,r){"use strict";r(7294);var n=r(5444),o=r(8100);e.Z=function(){return(0,o.tZ)("footer",{className:"py-16 px-4 mt-48 mb-8 text-white bg-black"},(0,o.tZ)("div",{className:"flex -mx-3"},(0,o.tZ)("div",{className:"flex-1 px-3"},(0,o.tZ)("h2",{className:"text-lg font-semibold"},"Big Bad Wolf Security"),(0,o.tZ)("p",{className:"mt-5"},"Silver Spring, MD"),(0,o.tZ)("p",null,"© 2021 - All Rights Reserved")),(0,o.tZ)("div",{className:"flex-1 px-3 text-center"},(0,o.tZ)("ul",{className:"leading-loose"},(0,o.tZ)("li",null,(0,o.tZ)(n.rU,{className:"text-red-200",to:"/legal"},"Terms & Conditions")))),(0,o.tZ)("div",{className:"flex-1 px-3 text-right"},(0,o.tZ)("ul",{className:"leading-loose"},(0,o.tZ)("li",null,(0,o.tZ)(n.rU,{className:"text-red-200",to:"/"},"Home")),(0,o.tZ)("li",null,(0,o.tZ)(n.rU,{className:"text-red-200",to:"/about"},"About")),(0,o.tZ)("li",null,(0,o.tZ)(n.rU,{className:"text-red-200",to:"/contact"},"Contact"))))))}},5520:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});r(7294),r(8163);var n=r(8100),o=r(7004),i=r(5444),a=function(t){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),(0,n.tZ)("header",{className:"sticky top-0 shadow bg-white z-50"},(0,n.tZ)("div",{className:"container flex flex-row justify-start items-center mx-auto py-4 px-8"},(0,n.tZ)(i.rU,{to:"/",className:"flex flex-col text-2xl lg:mr-20 sm:mr-4"},(0,n.tZ)("div",{style:{fontFamily:"Rubik",marginBottom:-10}},"Big Bad Wolf"),(0,n.tZ)("div",{style:{fontFamily:"Rubik",fontSize:"1rem",letterSpacing:".7rem"}},"Security")),(0,n.tZ)("div",{className:"flex flex-auto mt-4 sm:mt-0"},(0,n.tZ)(i.rU,{className:"px-4",to:"/about"},"About"),(0,n.tZ)(i.rU,{className:"visible md:invisible px-4",to:"/contact"},"Contact")),(0,n.tZ)("div",{className:"invisible md:visible justify-self-end"},(0,n.tZ)(o.Z,{className:"text-sm",href:"/contact"},"Contact Us"))))}},765:function(t,e,r){"use strict";r.d(e,{Z:function(){return bt}});var n,o,i,a,l=r(5697),c=r.n(l),s=r(4839),u=r.n(s),f=r(2993),p=r.n(f),d=r(7294),h=r(6494),y=r.n(h),m="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(t){return g[t]})),"charset"),w="cssText",O="href",S="http-equiv",C="innerHTML",x="itemprop",A="name",E="property",j="rel",k="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",_="encodeSpecialCharacters",Z="onChangeClientState",M="titleTemplate",B=Object.keys(N).reduce((function(t,e){return t[N[e]]=e,t}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],Y="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},q=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},F=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},z=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=J(t,g.TITLE),r=J(t,M);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=J(t,L);return e||n||void 0},W=function(t){return J(t,Z)||function(){}},K=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return X({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[g.BASE]})).map((function(t){return t[g.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},G=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+U(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===e.indexOf(c)||r===j&&"canonical"===t[r].toLowerCase()||c===j&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(l)||l!==C&&l!==w&&l!==x||(r=l)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=y()({},n[l],o[l]);n[l]=c}return t}),[]).reverse()},J=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},Q=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:r.g.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,l=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,u=t.styleTags,f=t.title,p=t.titleAttributes;ct(g.BODY,n),ct(g.HTML,o),lt(f,p);var d={baseTag:st(g.BASE,r),linkTags:st(g.LINK,i),metaTags:st(g.META,a),noscriptTags:st(g.NOSCRIPT,l),scriptTags:st(g.SCRIPT,s),styleTags:st(g.STYLE,u)},h={},y={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(y[t]=d[t].oldTags)})),e&&e(),c(t,h,y)},at=function(t){return Array.isArray(t)?t.join(""):t},lt=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(g.TITLE,e)},ct=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(Y),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),l=0;l<a.length;l++){var c=a[l],s=e[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(Y):r.getAttribute(Y)!==a.join(",")&&r.setAttribute(Y,a.join(","))}},st=function(t,e){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===C)r.innerHTML=e.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var l=void 0===e[n]?"":e[n];r.setAttribute(n,l)}r.setAttribute(Y,"true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},ut=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[N[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case g.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[Y]=!0,o=ft(r,n),[d.createElement(g.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=ut(r),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+z(i,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+z(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case m:case b:return{toComponent:function(){return ft(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})[Y]=!0,n);return Object.keys(e).forEach((function(t){var r=N[t]||t;if(r===C||r===w){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===C||t===w)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+z(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,l=t.noscriptTags,c=t.scriptTags,s=t.styleTags,u=t.title,f=void 0===u?"":u,p=t.titleAttributes;return{base:pt(g.BASE,e,n),bodyAttributes:pt(m,r,n),htmlAttributes:pt(b,o,n),link:pt(g.LINK,i,n),meta:pt(g.META,a,n),noscript:pt(g.NOSCRIPT,l,n),script:pt(g.SCRIPT,c,n),style:pt(g.STYLE,s,n),title:pt(g.TITLE,{title:f,titleAttributes:p},n)}},ht=u()((function(t){return{baseTag:$([O,P],t),bodyAttributes:K(m,t),defer:J(t,I),encode:J(t,_),htmlAttributes:K(b,t),linkTags:G(g.LINK,[j,O],t),metaTags:G(g.META,[A,T,S,E,x],t),noscriptTags:G(g.NOSCRIPT,[C],t),onChangeClientState:W(t),scriptTags:G(g.SCRIPT,[k,C],t),styleTags:G(g.STYLE,[w],t),title:V(t),titleAttributes:K(v,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),yt=(o=ht,a=i=function(t){function e(){return D(this,e),F(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return X({},n,((e={})[r.type]=[].concat(n[r.type]||[],[X({},o,this.mapNestedChildrenToProps(r,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(n.type){case g.TITLE:return X({},o,((e={})[n.type]=a,e.titleAttributes=X({},i),e));case g.BODY:return X({},o,{bodyAttributes:X({},i)});case g.HTML:return X({},o,{htmlAttributes:X({},i)})}return X({},o,((r={})[n.type]=X({},i),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=X({},e);return Object.keys(t).forEach((function(e){var n;r=X({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[B[r]||r]=t[r],e}),e)}(q(o,["children"]));switch(r.warnOnInvalidChildren(t,i),t.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=q(t,["children"]),n=X({},r);return e&&(n=this.mapChildrenToProps(e,n)),d.createElement(o,n)},H(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind;var mt=r(8100),bt=function(){return(0,mt.tZ)(yt,null,(0,mt.tZ)("meta",{charSet:"utf-8"}),(0,mt.tZ)("title",null,"Big Bad Wolf Security"))}}}]);
//# sourceMappingURL=commons-aac6f1220b2968506e96.js.map