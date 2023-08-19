// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(r){var t,e,n;if(null==r)return s.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return n=s.call(r),t?r[w]=e:delete r[w],n}:function(r){return s.call(r)},_=Boolean.prototype.toString;var g=v();function h(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function S(r){return p(r)||h(r)}function A(){return new Function("return this;")()}l(S,"isPrimitive",p),l(S,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof I?I:null;var T=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(E)return E;if(O)return O;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,P=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(B,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function L(r){return null!==r&&"object"==typeof r}function k(r){var t,e,n,o;if(("Object"===(e=j(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=x.exec(n.toString()))return t[1]}return L(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(L,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!V(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(L));var C="function"==typeof y||"object"==typeof P||"function"==typeof F?function(r){return k(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?k(r).toLowerCase():t};function G(r){return"function"===C(r)}function M(r){return"number"==typeof r}var R=Number,U=R.prototype.toString;var Y=v();function X(r){return"object"==typeof r&&(r instanceof R||(Y?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function q(r){return M(r)||X(r)}l(q,"isPrimitive",M),l(q,"isObject",X);var z=Number.POSITIVE_INFINITY,D=R.NEGATIVE_INFINITY,H=Math.floor;function J(r){return r<z&&r>D&&H(t=r)===t;var t}function K(r){return M(r)&&J(r)}function Q(r){return X(r)&&J(r.valueOf())}function W(r){return K(r)||Q(r)}function Z(r){return K(r)&&r>0}function $(r){return Q(r)&&r.valueOf()>0}function rr(r){return Z(r)||$(r)}l(W,"isPrimitive",K),l(W,"isObject",Q),l(rr,"isPrimitive",Z),l(rr,"isObject",$);var tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function er(r){return r!=r}var nr="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var ur="function"==typeof Float64Array?Float64Array:void 0;var ir=function(){var r,t,e;if("function"!=typeof or)return!1;try{t=new or([1,3.14,-3.14,NaN]),e=t,r=(nr&&e instanceof Float64Array||"[object Float64Array]"===j(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function fr(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function ar(r,t){var e,n,o,u,i;if(i=typeof(u=r),null===u||"object"!==i&&"function"!==i||!G(u.next))throw new TypeError(fr("1LB3v,IA",r));if(!Z(t))throw new TypeError(fr("1LB45,IB",t));return o=function(r){var t,e,n,o,u;if(!Z(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new ir(r),e=z,n=D,u=-1,o=0,function(i){var f,a;if(0===arguments.length)return 0===o?null:n-e;if(u=(u+1)%r,0===i&&(i=0),er(i))o=r,e=i,n=i;else if(o<r)o+=1,i<e&&(e=i),i>n&&(n=i);else if(t[u]===e&&i>e||t[u]===n&&i<n||er(t[u])){for(e=i,n=i,a=0;a<r;a++)if(a!==u){if(er(f=t[a])){e=f,n=f;break}f<e&&(e=f),f>n&&(n=f)}}else i<e?e=i:i>n&&(n=i);return t[u]=i,n-e}}(t),l(e={},"next",(function(){var t;if(n)return{done:!0};if((t=r.next()).done)return n=!0,{done:!0};t="number"==typeof t.value?o(t.value):o(NaN);return{value:t,done:!1}})),l(e,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tr&&G(r[tr])&&l(e,tr,(function(){return ar(r[tr](),t)})),e}export{ar as default};
//# sourceMappingURL=mod.js.map
