// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrange@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function d(m,l){var p,v,f;if(!t(m))throw new TypeError(o("1LB3v",m));if(!r(l))throw new TypeError(o("1LB45",l));return f=i(l),e(p={},"next",(function(){var e;if(v)return{done:!0};if((e=m.next()).done)return v=!0,{done:!0};e="number"==typeof e.value?f(e.value):f(NaN);return{value:e,done:!1}})),e(p,"return",(function(e){if(v=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&n(m[s])&&e(p,s,(function(){return d(m[s](),l)})),p}export{d as default};
//# sourceMappingURL=index.mjs.map
