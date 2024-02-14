// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":s(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,s,f,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(c(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function V(r){var e,t;if(!P(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var C,R=Object.prototype,$=R.toString,I=R.__defineGetter__,B=R.__defineSetter__,G=R.__lookupGetter__,L=R.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var U=C;function X(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,N=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&N.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"",H=W()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[q]=t:delete r[q],n}:function(r){return M.call(r)},J=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)},K=/./;function Q(r){return"boolean"==typeof r}var Y=Boolean,rr=Boolean.prototype.toString,er=W();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function nr(r){return Q(r)||tr(r)}function or(){return new Function("return this;")()}X(nr,"isPrimitive",Q),X(nr,"isObject",tr);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,cr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(ur)return ur;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return gr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}X(lr,"REGEXP",pr),X(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!J(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var br="function"==typeof K||"object"==typeof fr||"function"==typeof sr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?dr(r).toLowerCase():e};function yr(r){return"function"===br(r)}var hr,vr=Object,wr=Object.getPrototypeOf;hr=yr(Object.getPrototypeOf)?wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=hr,jr=Object.prototype;function Er(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!J(r)}(r)&&(e=function(r){return null==r?null:(r=vr(r),mr(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===jr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function _r(r){return"string"==typeof r}var Or=String.prototype.valueOf,Sr=W();function xr(r){return"object"==typeof r&&(r instanceof String||(Sr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Tr(r){return _r(r)||xr(r)}function kr(r,e){return Er(e)?z(e,"flags")&&(r.flags=e.flags,!_r(r.flags))?new TypeError(V("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):z(e,"capture")&&(r.capture=e.capture,!Q(r.capture))?new TypeError(V("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}X(Tr,"isPrimitive",_r),X(Tr,"isObject",xr);var Ar="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Fr(r){var e,t;if(arguments.length>0){if(t=kr(e={},r))throw t;return e.capture?new RegExp("("+Ar+")",e.flags):new RegExp(Ar,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Pr=Fr({capture:!0}),Vr=Fr();return X(Fr,"REGEXP",Vr),X(Fr,"REGEXP_CAPTURE",Pr),function(r){var e,t,n,o;for(e=!0,t="",o=0;o<r.length;o++)n=r.charAt(o),Vr.test(n)?e=!0:e&&(n=n.toUpperCase(),e=!1),t+=n;return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).startcase=e();
//# sourceMappingURL=browser.js.map
