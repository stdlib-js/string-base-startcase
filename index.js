// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).startcase=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var f,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||a.call(t,r)?(f=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=f):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&i&&i.call(t,r,e.set),t};var f=r;function l(t,r,e){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&b.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(t){var r,e,n;if(null==t)return y.call(t);e=t[g],r=v(t,g);try{t[g]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[g]=e:delete t[g],n}:function(t){return y.call(t)};var d=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var _=/./;function m(t){return"boolean"==typeof t}var w=Boolean.prototype.toString;var O=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return m(t)||h(t)}function S(){return new Function("return this;")()}l(E,"isPrimitive",m),l(E,"isObject",h);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var F=function(t){if(arguments.length){if(!m(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(P)return P;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=F.document&&F.document.childNodes,x=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var R=/^\s*function\s*([^(]*)/i;function G(t){return null!==t&&"object"==typeof t}function V(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=R.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(C,"REGEXP",R),l(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!d(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G));var k="function"==typeof _||"object"==typeof x||"function"==typeof B?function(t){return V(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?V(t).toLowerCase():r};function L(t){return"function"===k(t)}var U,X=Object.getPrototypeOf;U=L(Object.getPrototypeOf)?X:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var M=U;var D=Object.prototype;function I(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!d(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),M(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&v(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===D||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function N(t){return"string"==typeof t}var q=String.prototype.valueOf;var z=s();function H(t){return"object"==typeof t&&(t instanceof String||(z?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function J(t){return N(t)||H(t)}function K(t,r){return I(r)?v(r,"flags")&&(t.flags=r.flags,!N(t.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+t.flags+"`."):v(r,"capture")&&(t.capture=r.capture,!m(t.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+t.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")}l(J,"isPrimitive",N),l(J,"isObject",H);var Q="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function W(t){var r,e;if(arguments.length>0){if(e=K(r={},t))throw e;return r.capture?new RegExp("("+Q+")",r.flags):new RegExp(Q,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Y=W({capture:!0}),Z=W();return l(W,"REGEXP",Z),l(W,"REGEXP_CAPTURE",Y),function(t){var r,e,n,o;for(r=!0,e="",o=0;o<t.length;o++)n=t.charAt(o),Z.test(n)?r=!0:r&&(n=n.toUpperCase(),r=!1),e+=n;return e}}));
//# sourceMappingURL=index.js.map
