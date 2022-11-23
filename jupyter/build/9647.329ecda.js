"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9647],{64695:(o,t,n)=>{n.d(t,{Z:()=>i});var e=n(20559),r=n.n(e),c=n(93476),a=n.n(c)()(r());a.push([o.id,"/*\nName:   DuoTone-Light\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-light.CodeMirror { background: #faf8f5; color: #b29762; }\n.cm-s-duotone-light div.CodeMirror-selected { background: #e3dcce !important; }\n.cm-s-duotone-light .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }\n.cm-s-duotone-light .CodeMirror-linenumber { color: #cdc4b1; }\n\n/* begin cursor */\n.cm-s-duotone-light .CodeMirror-cursor { border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */ border-right: .5em solid #93abdc; /* border-right: .5em solid #93abdc80; */ opacity: .5; }\n.cm-s-duotone-light .CodeMirror-activeline-background { background: #e3dcce;  /* background: #e3dcce80; */ opacity: .5; }\n.cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor { background: #93abdc; /* #93abdc80; */ opacity: .5; }\n/* end cursor */\n\n.cm-s-duotone-light span.cm-atom, .cm-s-duotone-light span.cm-number, .cm-s-duotone-light span.cm-keyword, .cm-s-duotone-light span.cm-variable, .cm-s-duotone-light span.cm-attribute, .cm-s-duotone-light span.cm-quote, .cm-s-duotone-light-light span.cm-hr, .cm-s-duotone-light-light span.cm-link { color: #063289; }\n\n.cm-s-duotone-light span.cm-property { color: #b29762; }\n.cm-s-duotone-light span.cm-punctuation, .cm-s-duotone-light span.cm-unit, .cm-s-duotone-light span.cm-negative { color: #063289; }\n.cm-s-duotone-light span.cm-string, .cm-s-duotone-light span.cm-operator { color: #1659df; }\n.cm-s-duotone-light span.cm-positive { color: #896724; }\n\n.cm-s-duotone-light span.cm-variable-2, .cm-s-duotone-light span.cm-variable-3, .cm-s-duotone-light span.cm-type, .cm-s-duotone-light span.cm-string-2, .cm-s-duotone-light span.cm-url { color: #896724; }\n.cm-s-duotone-light span.cm-def, .cm-s-duotone-light span.cm-tag, .cm-s-duotone-light span.cm-builtin, .cm-s-duotone-light span.cm-qualifier, .cm-s-duotone-light span.cm-header, .cm-s-duotone-light span.cm-em { color: #2d2006; }\n.cm-s-duotone-light span.cm-bracket, .cm-s-duotone-light span.cm-comment { color: #b6ad9a; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n/* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */\n.cm-s-duotone-light span.cm-error, .cm-s-duotone-light span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-light span.cm-header { font-weight: normal; }\n.cm-s-duotone-light .CodeMirror-matchingbracket { text-decoration: underline; color: #faf8f5 !important; }\n\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/duotone-light.css"],names:[],mappings:"AAAA;;;;;CAKC;;AAED,iCAAiC,mBAAmB,EAAE,cAAc,EAAE;AACtE,8CAA8C,8BAA8B,EAAE;AAC9E,0CAA0C,mBAAmB,EAAE,iBAAiB,EAAE;AAClF,6CAA6C,cAAc,EAAE;;AAE7D,iBAAiB;AACjB,yCAAyC,8BAA8B,EAAE,sCAAsC,EAAE,gCAAgC,EAAE,wCAAwC,EAAE,WAAW,EAAE;AAC1M,wDAAwD,mBAAmB,GAAG,2BAA2B,EAAE,WAAW,EAAE;AACxH,wDAAwD,mBAAmB,EAAE,eAAe,EAAE,WAAW,EAAE;AAC3G,eAAe;;AAEf,0SAA0S,cAAc,EAAE;;AAE1T,uCAAuC,cAAc,EAAE;AACvD,kHAAkH,cAAc,EAAE;AAClI,2EAA2E,cAAc,EAAE;AAC3F,uCAAuC,cAAc,EAAE;;AAEvD,0LAA0L,cAAc,EAAE;AAC1M,mNAAmN,cAAc,EAAE;AACnO,2EAA2E,cAAc,EAAE;;AAE3F,iJAAiJ;AACjJ,+EAA+E;AAC/E,6EAA6E,WAAW,EAAE;;AAE1F,qCAAqC,mBAAmB,EAAE;AAC1D,kDAAkD,0BAA0B,EAAE,yBAAyB,EAAE",sourcesContent:["/*\nName:   DuoTone-Light\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-light.CodeMirror { background: #faf8f5; color: #b29762; }\n.cm-s-duotone-light div.CodeMirror-selected { background: #e3dcce !important; }\n.cm-s-duotone-light .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }\n.cm-s-duotone-light .CodeMirror-linenumber { color: #cdc4b1; }\n\n/* begin cursor */\n.cm-s-duotone-light .CodeMirror-cursor { border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */ border-right: .5em solid #93abdc; /* border-right: .5em solid #93abdc80; */ opacity: .5; }\n.cm-s-duotone-light .CodeMirror-activeline-background { background: #e3dcce;  /* background: #e3dcce80; */ opacity: .5; }\n.cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor { background: #93abdc; /* #93abdc80; */ opacity: .5; }\n/* end cursor */\n\n.cm-s-duotone-light span.cm-atom, .cm-s-duotone-light span.cm-number, .cm-s-duotone-light span.cm-keyword, .cm-s-duotone-light span.cm-variable, .cm-s-duotone-light span.cm-attribute, .cm-s-duotone-light span.cm-quote, .cm-s-duotone-light-light span.cm-hr, .cm-s-duotone-light-light span.cm-link { color: #063289; }\n\n.cm-s-duotone-light span.cm-property { color: #b29762; }\n.cm-s-duotone-light span.cm-punctuation, .cm-s-duotone-light span.cm-unit, .cm-s-duotone-light span.cm-negative { color: #063289; }\n.cm-s-duotone-light span.cm-string, .cm-s-duotone-light span.cm-operator { color: #1659df; }\n.cm-s-duotone-light span.cm-positive { color: #896724; }\n\n.cm-s-duotone-light span.cm-variable-2, .cm-s-duotone-light span.cm-variable-3, .cm-s-duotone-light span.cm-type, .cm-s-duotone-light span.cm-string-2, .cm-s-duotone-light span.cm-url { color: #896724; }\n.cm-s-duotone-light span.cm-def, .cm-s-duotone-light span.cm-tag, .cm-s-duotone-light span.cm-builtin, .cm-s-duotone-light span.cm-qualifier, .cm-s-duotone-light span.cm-header, .cm-s-duotone-light span.cm-em { color: #2d2006; }\n.cm-s-duotone-light span.cm-bracket, .cm-s-duotone-light span.cm-comment { color: #b6ad9a; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n/* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */\n.cm-s-duotone-light span.cm-error, .cm-s-duotone-light span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-light span.cm-header { font-weight: normal; }\n.cm-s-duotone-light .CodeMirror-matchingbracket { text-decoration: underline; color: #faf8f5 !important; }\n\n"],sourceRoot:""}]);const i=a},93476:o=>{o.exports=function(o){var t=[];return t.toString=function(){return this.map((function(t){var n="",e=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),e&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=o(t),e&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(o,n,e,r,c){"string"==typeof o&&(o=[[null,o,void 0]]);var a={};if(e)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<o.length;d++){var u=[].concat(o[d]);e&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},20559:o=>{o.exports=function(o){var t=o[1],n=o[3];if(!n)return t;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),c="/*# ".concat(r," */"),a=n.sources.map((function(o){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(o," */")}));return[t].concat(a).concat([c]).join("\n")}return[t].join("\n")}},29647:(o,t,n)=>{n.r(t),n.d(t,{default:()=>b});var e=n(1892),r=n.n(e),c=n(95760),a=n.n(c),i=n(38311),s=n.n(i),d=n(58192),u=n.n(d),m=n(38060),l=n.n(m),A=n(54865),p=n.n(A),h=n(64695),g={};g.styleTagTransform=p(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),r()(h.Z,g);const b=h.Z&&h.Z.locals?h.Z.locals:void 0},1892:o=>{var t=[];function n(o){for(var n=-1,e=0;e<t.length;e++)if(t[e].identifier===o){n=e;break}return n}function e(o,e){for(var c={},a=[],i=0;i<o.length;i++){var s=o[i],d=e.base?s[0]+e.base:s[0],u=c[d]||0,m="".concat(d," ").concat(u);c[d]=u+1;var l=n(m),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(A);else{var p=r(A,e);e.byIndex=i,t.splice(i,0,{identifier:m,updater:p,references:1})}a.push(m)}return a}function r(o,t){var n=t.domAPI(t);return n.update(o),function(t){if(t){if(t.css===o.css&&t.media===o.media&&t.sourceMap===o.sourceMap&&t.supports===o.supports&&t.layer===o.layer)return;n.update(o=t)}else n.remove()}}o.exports=function(o,r){var c=e(o=o||[],r=r||{});return function(o){o=o||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=e(o,r),d=0;d<c.length;d++){var u=n(c[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},38311:o=>{var t={};o.exports=function(o,n){var e=function(o){if(void 0===t[o]){var n=document.querySelector(o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(o){n=null}t[o]=n}return t[o]}(o);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},38060:o=>{o.exports=function(o){var t=document.createElement("style");return o.setAttributes(t,o.attributes),o.insert(t,o.options),t}},58192:(o,t,n)=>{o.exports=function(o){var t=n.nc;t&&o.setAttribute("nonce",t)}},95760:o=>{o.exports=function(o){var t=o.insertStyleElement(o);return{update:function(n){!function(o,t,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,r&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(e,o,t.options)}(t,o,n)},remove:function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)}}}},54865:o=>{o.exports=function(o,t){if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}}}]);
//# sourceMappingURL=9647.329ecda.js.map