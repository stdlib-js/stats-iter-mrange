// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,v,"$1e"),t=f.call(t,y,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,t,a,o,l,p,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(t=e[u]))l+=t;else{if(r=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,n;for(i=[],n=0,t=F.exec(e);t;)(r=e.slice(n,F.lastIndex-t[0].length)).length&&i.push(r),i.push($(t)),n=F.lastIndex,t=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function _(e){var r,i;if(!j(e))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return V.apply(null,r)}var N,C=Object.prototype,R=C.toString,O=C.__defineGetter__,Z=C.__defineSetter__,P=C.__lookupGetter__,W=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var L=N;function G(e,r,i){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B=M();function z(){return B&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=z()?function(e){var r,i,t;if(null==e)return Y.call(e);i=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return Y.call(e)}return t=Y.call(e),r?e[J]=i:delete e[J],t}:function(e){return Y.call(e)},Q=Boolean,ee=Boolean.prototype.toString,re=z();function ie(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return X(e)||ie(e)}function ne(e){return"number"==typeof e}function ae(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function oe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ae(n):ae(n)+e,t&&(e="-"+e)),e}G(te,"isPrimitive",X),G(te,"isObject",ie);var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function le(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ne(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=oe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=oe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):ce.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function pe(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ye=/^(\d+)e/,ve=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ue(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=de.call(i,Ee,"$1e"),i=de.call(i,me,"e"),i=de.call(i,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=de.call(i,he,"e+0$1"),i=de.call(i,we,"e-0$1"),e.alternate&&(i=de.call(i,be,"$1."),i=de.call(i,ye,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ge.call(e.specifier)?ge.call(i):fe.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Se(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Ie=String.fromCharCode,Te=isNaN,Ve=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,i,t,n,a,o,c,s,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Te(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Te(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=le(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Te(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Te(a)?String(t.arg):Ie(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=xe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Se(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function je(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _e(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(je(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ne(e){return"string"==typeof e}function Ce(e){var r,i;if(!Ne(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_e(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $e.apply(null,r)}function Re(){return new Function("return this;")()}var Oe="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Pe="object"==typeof globalThis?globalThis:null,We=function(e){if(arguments.length){if(!X(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(Pe)return Pe;if(Oe)return Oe;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),Le=We.document&&We.document.childNodes,Ge=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;G(Ue,"REGEXP",Xe);var Me=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function Be(e){return null!==e&&"object"==typeof e}function ze(e){var r,i,t,n;if(("Object"===(i=K(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Xe.exec(t.toString()))return r[1]}return Be(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(Be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Me(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Be));var Ye="function"==typeof U||"object"==typeof Ge||"function"==typeof Le?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ze(e).toLowerCase():r};function qe(e){return"function"===Ye(e)}function De(e){return"number"==typeof e}var He=M();function Je(){return He&&"symbol"==typeof Symbol.toStringTag}var Ke=Object.prototype.toString,Qe="function"==typeof Symbol?Symbol:void 0,er="function"==typeof Qe?Qe.toStringTag:"",rr=Je()?function(e){var r,i,t;if(null==e)return Ke.call(e);i=e[er],r=D(e,er);try{e[er]=void 0}catch(r){return Ke.call(e)}return t=Ke.call(e),r?e[er]=i:delete e[er],t}:function(e){return Ke.call(e)},ir=Number,tr=ir.prototype.toString,nr=Je();function ar(e){return"object"==typeof e&&(e instanceof ir||(nr?function(e){try{return tr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===rr(e)))}function or(e){return De(e)||ar(e)}G(or,"isPrimitive",De),G(or,"isObject",ar);var cr=Number.POSITIVE_INFINITY,sr=ir.NEGATIVE_INFINITY,lr=Math.floor;function pr(e){return e<cr&&e>sr&&lr(r=e)===r;var r}function ur(e){return De(e)&&pr(e)}function fr(e){return ar(e)&&pr(e.valueOf())}function gr(e){return ur(e)||fr(e)}function dr(e){return ur(e)&&e>0}function hr(e){return fr(e)&&e.valueOf()>0}function wr(e){return dr(e)||hr(e)}G(gr,"isPrimitive",ur),G(gr,"isObject",fr),G(wr,"isPrimitive",dr),G(wr,"isObject",hr);var br="function"==typeof Symbol?Symbol:void 0,yr="function"==typeof br&&"symbol"==typeof br("foo")&&D(br,"iterator")&&"symbol"==typeof br.iterator?Symbol.iterator:null;function vr(e){return e!=e}var mr=Number.POSITIVE_INFINITY,Er=Number.NEGATIVE_INFINITY,xr=M(),kr=Object.prototype.toString,Sr="function"==typeof Symbol?Symbol:void 0,Ir="function"==typeof Sr?Sr.toStringTag:"",Tr=xr&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return kr.call(e);i=e[Ir],r=D(e,Ir);try{e[Ir]=void 0}catch(r){return kr.call(e)}return t=kr.call(e),r?e[Ir]=i:delete e[Ir],t}:function(e){return kr.call(e)},Vr="function"==typeof Float64Array,Fr="function"==typeof Float64Array?Float64Array:null,$r="function"==typeof Float64Array?Float64Array:void 0,Ar=function(){var e,r,i;if("function"!=typeof Fr)return!1;try{r=new Fr([1,3.14,-3.14,NaN]),i=r,e=(Vr&&i instanceof Float64Array||"[object Float64Array]"===Tr(i))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?$r:function(){throw new Error("not implemented")};function jr(e){return"number"==typeof e}function _r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Nr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+_r(n):_r(n)+e,t&&(e="-"+e)),e}var Cr=String.prototype.toLowerCase,Rr=String.prototype.toUpperCase;function Or(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!jr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Nr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Nr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Rr.call(e.specifier)?Rr.call(i):Cr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Zr(e){return"string"==typeof e}var Pr=Math.abs,Wr=String.prototype.toLowerCase,Lr=String.prototype.toUpperCase,Gr=String.prototype.replace,Ur=/e\+(\d)$/,Xr=/e-(\d)$/,Mr=/^(\d+)$/,Br=/^(\d+)e/,zr=/\.0$/,Yr=/\.0*e/,qr=/(\..*[^0])0*e/;function Dr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!jr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Pr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Gr.call(i,qr,"$1e"),i=Gr.call(i,Yr,"e"),i=Gr.call(i,zr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Gr.call(i,Ur,"e+0$1"),i=Gr.call(i,Xr,"e-0$1"),e.alternate&&(i=Gr.call(i,Mr,"$1."),i=Gr.call(i,Br,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Lr.call(e.specifier)?Lr.call(i):Wr.call(i)}function Hr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Jr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Hr(t):Hr(t)+e}var Kr=String.fromCharCode,Qr=isNaN,ei=Array.isArray;function ri(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ii(e){var r,i,t,n,a,o,c,s,l;if(!ei(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Zr(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=ri(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Qr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Qr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Or(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Qr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Qr(a)?String(t.arg):Kr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Nr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Jr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var ti=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ni(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ai(e){var r,i,t,n;for(i=[],n=0,t=ti.exec(e);t;)(r=e.slice(n,ti.lastIndex-t[0].length)).length&&i.push(r),i.push(ni(t)),n=ti.lastIndex,t=ti.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function oi(e){return"string"==typeof e}function ci(e){var r,i;if(!oi(e))throw new TypeError(ci("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ai(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return ii.apply(null,r)}function si(e){var r,i,t,n,a;if(!dr(e))throw new TypeError(ci("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new Ar(e),i=mr,t=Er,a=-1,n=0,function(o){var c,s;if(0===arguments.length)return 0===n?null:t-i;if(a=(a+1)%e,0===o&&(o=0),vr(o))n=e,i=o,t=o;else if(n<e)n+=1,o<i&&(i=o),o>t&&(t=o);else if(r[a]===i&&o>i||r[a]===t&&o<t||vr(r[a])){for(i=o,t=o,s=0;s<e;s++)if(s!==a){if(vr(c=r[s])){i=c,t=c;break}c<i&&(i=c),c>t&&(t=c)}}else o<i?i=o:o>t&&(t=o);return r[a]=o,t-i}}function li(e){return"number"==typeof e}function pi(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ui(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+pi(n):pi(n)+e,t&&(e="-"+e)),e}var fi=String.prototype.toLowerCase,gi=String.prototype.toUpperCase;function di(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!li(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ui(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ui(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===gi.call(e.specifier)?gi.call(i):fi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function hi(e){return"string"==typeof e}var wi=Math.abs,bi=String.prototype.toLowerCase,yi=String.prototype.toUpperCase,vi=String.prototype.replace,mi=/e\+(\d)$/,Ei=/e-(\d)$/,xi=/^(\d+)$/,ki=/^(\d+)e/,Si=/\.0$/,Ii=/\.0*e/,Ti=/(\..*[^0])0*e/;function Vi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!li(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":wi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=vi.call(i,Ti,"$1e"),i=vi.call(i,Ii,"e"),i=vi.call(i,Si,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=vi.call(i,mi,"e+0$1"),i=vi.call(i,Ei,"e-0$1"),e.alternate&&(i=vi.call(i,xi,"$1."),i=vi.call(i,ki,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===yi.call(e.specifier)?yi.call(i):bi.call(i)}function Fi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function $i(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Fi(t):Fi(t)+e}var Ai=String.fromCharCode,ji=isNaN,_i=Array.isArray;function Ni(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ci(e){var r,i,t,n,a,o,c,s,l;if(!_i(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(hi(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Ni(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,ji(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,ji(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=di(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ji(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ji(a)?String(t.arg):Ai(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Vi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ui(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=$i(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ri=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Oi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Zi(e){var r,i,t,n;for(i=[],n=0,t=Ri.exec(e);t;)(r=e.slice(n,Ri.lastIndex-t[0].length)).length&&i.push(r),i.push(Oi(t)),n=Ri.lastIndex,t=Ri.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Pi(e){return"string"==typeof e}function Wi(e){var r,i,t;if(!Pi(e))throw new TypeError(Wi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Zi(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ci.apply(null,i)}return function e(r,i){var t,n,a,o,c;if(c=typeof(o=r),null===o||"object"!==c&&"function"!==c||!qe(o.next))throw new TypeError(Wi("invalid argument. First argument must be an iterator. Value: `%s`.",r));if(!dr(i))throw new TypeError(Wi("invalid argument. Second argument must be a positive integer. Value: `%s`.",i));return a=si(i),G(t={},"next",(function(){var e;return n?{done:!0}:(e=r.next()).done?(n=!0,{done:!0}):{value:e="number"==typeof e.value?a(e.value):a(NaN),done:!1}})),G(t,"return",(function(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}})),yr&&qe(r[yr])&&G(t,yr,(function(){return e(r[yr](),i)})),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermrange=r();
//# sourceMappingURL=browser.js.map
