/*! For license information please see main.5df69558.js.LICENSE.txt */
(()=>{var e={8926:e=>{function t(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void n(l)}s.done?t(u):Promise.resolve(u).then(r,i)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(i,a){var o=e.apply(n,r);function s(e){t(o,i,a,s,u,"next",e)}function u(e){t(o,i,a,s,u,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},4575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},5318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},9591:(e,t,n)=>{var r=n(8).default;function i(){"use strict";e.exports=i=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return S()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=w(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=d;var h={};function p(){}function g(){}function _(){}var m={};c(m,s,(function(){return this}));var F=Object.getPrototypeOf,b=F&&F(F(x([])));b&&b!==n&&a.call(b,s)&&(m=b);var y=_.prototype=p.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,o,s,u){var l=f(e[i],e,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,u)}),(function(e){n("throw",e,s,u)})):t.resolve(d).then((function(e){c.value=e,s(c)}),(function(e){return n("throw",e,s,u)}))}u(l.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return g.prototype=_,c(y,"constructor",_),c(_,"constructor",g),g.displayName=c(_,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},t.awrap=function(e){return{__await:e}},v(k.prototype),c(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new k(d(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),c(y,l,"Generator"),c(y,s,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),D(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;D(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:(e,t,n)=>{e.exports=n(9591)()},4118:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M6.48667 11.6667L6.83667 8.33333H3.325V6.66667H7L7.43333 2.5H9.10833L8.66667 6.66667H11.9833L12.4167 2.5H14.0917L13.65 6.66667H16.625V8.33333H13.4667L13.1167 11.6667H16.6167V13.3333H12.9333L12.4917 17.5H10.8083L11.2417 13.3333H7.91667L7.475 17.5H5.8L6.23333 13.3333H3.25V11.6667H6.4H6.48667ZM8.1625 11.6667H11.4875L11.8375 8.33333H8.5125L8.1625 11.6667Z",fill:"#616161"})))},s=(0,i.forwardRef)(o)},9930:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M8.11904 0C3.91105 0 0.5 3.41105 0.5 7.61905C0.5 11.827 3.91105 15.2381 8.11904 15.2381C12.3271 15.2381 15.7381 11.827 15.7381 7.61905C15.7381 3.41105 12.3263 0 8.11904 0ZM11.7053 10.128L10.628 11.2053L8.11904 8.69714L5.61009 11.2053L4.53277 10.128L7.04095 7.61905L4.532 5.1101L5.60934 4.03353L8.11829 6.54248L10.6272 4.03353L11.7045 5.1101L9.19638 7.61905L11.7053 10.128Z",fill:"#6C737F"})))},s=(0,i.forwardRef)(o)},5044:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fill:"black",fillOpacity:.5})))},s=(0,i.forwardRef)(o)},6544:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M16.5303 11.7204L16.4462 11.6478C16.1526 11.4299 15.7359 11.4541 15.4697 11.7204L12.7503 14.4397L12.75 7.75003L12.7432 7.64826C12.6935 7.28218 12.3797 7.00003 12 7.00003L11.8982 7.00688C11.5322 7.05654 11.25 7.37033 11.25 7.75003L11.2503 14.4417L8.52961 11.7198L8.4455 11.6472C8.15193 11.4293 7.73527 11.4534 7.46895 11.7196C7.176 12.0124 7.17591 12.4873 7.46875 12.7803L11.4687 16.7818L11.5529 16.8544C11.8465 17.0724 12.2632 17.0482 12.5295 16.7819L16.5303 12.7811L16.6029 12.6969C16.8208 12.4033 16.7966 11.9867 16.5303 11.7204ZM6.25 3C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H17.75C18.7165 4.5 19.5 5.2835 19.5 6.25V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V6.25Z",fill:"#616161"})))},s=(0,i.forwardRef)(o)},7811:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27601)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.76 42.16C34.02 41.86 33.16 42.02 32.58 42.6L24 52H18C16.9 52 16 52.9 16 54V66C16 67.1 16.9 68 18 68H24L32.58 77.42C33.16 78 34.02 78.16 34.76 77.86C35.52 77.54 36 76.8 36 76V44C36 43.2 35.52 42.46 34.76 42.16ZM40 46V50C45.52 50 50 54.48 50 60C50 65.52 45.52 70 40 70V74C47.72 74 54 67.72 54 60C54 52.28 47.72 46 40 46ZM40 54C43.3 54 46 56.7 46 60C46 63.3 43.3 66 40 66V62C41.1 62 42 61.1 42 60C42 58.9 41.1 58 40 58V54Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27601"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},4012:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27600)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.7 40.46C24.36 40.18 25.02 40.08 25.68 40.04C26.3 40 27.06 40 27.94 40H28V44C27.04 44 26.42 44 25.96 44.02C25.5 44.06 25.32 44.1 25.24 44.14C24.76 44.34 24.36 44.74 24.16 45.22C24.12 45.32 24.08 45.48 24.04 45.94C24 46.42 24 47.04 24 48V54.06C24 54.94 24 55.7 23.96 56.32C23.9 56.98 23.82 57.64 23.54 58.3C23.28 58.94 22.9 59.5 22.44 60C22.9 60.5 23.28 61.06 23.54 61.7C23.82 62.36 23.92 63.02 23.96 63.68C24 64.3 24 65.06 24 65.94V72C24 72.96 24 73.58 24.02 74.04C24.06 74.5 24.1 74.68 24.14 74.76C24.34 75.24 24.74 75.64 25.22 75.84C25.32 75.88 25.48 75.92 25.94 75.96C26.42 76 27.04 76 28 76V80H27.94C27.06 80 26.3 80 25.68 79.96C25.02 79.9 24.36 79.82 23.7 79.54C22.24 78.94 21.06 77.78 20.46 76.3C20.18 75.64 20.08 74.98 20.04 74.32C20 73.7 20 72.94 20 72.06V66C20 65.04 20 64.42 19.98 63.96C19.94 63.5 19.9 63.32 19.86 63.24C19.66 62.76 19.26 62.36 18.78 62.16C18.68 62.12 18.52 62.08 18.06 62.04C17.58 62 16.96 62 16 62V58C16.96 58 17.58 58 18.04 57.98C18.5 57.94 18.68 57.9 18.76 57.86C19.24 57.66 19.64 57.28 19.84 56.78C19.88 56.68 19.92 56.52 19.96 56.06C20 55.58 20 54.96 20 54V47.94C20 47.06 20 46.3 20.04 45.68C20.1 45.02 20.18 44.36 20.46 43.7C21.06 42.24 22.22 41.06 23.7 40.46ZM53.22 57.84C53.32 57.88 53.48 57.92 53.94 57.96C54.42 58 55.04 58 56 58V62C55.04 62 54.42 62 53.96 62.02C53.5 62.06 53.32 62.1 53.24 62.14C52.76 62.34 52.36 62.74 52.16 63.22C52.12 63.32 52.08 63.48 52.04 63.94C52 64.42 52 65.04 52 66V72.06C52 72.94 52 73.7 51.96 74.32C51.9 74.98 51.82 75.64 51.54 76.3C50.94 77.76 49.76 78.94 48.3 79.54C47.64 79.82 46.98 79.92 46.32 79.96C45.7 80 44.94 80 44.06 80H44V76C44.96 76 45.58 76 46.04 75.98C46.5 75.94 46.68 75.9 46.76 75.86C47.24 75.66 47.64 75.28 47.84 74.78C47.88 74.68 47.92 74.52 47.96 74.06C48 73.58 48 72.96 48 72V65.94C48 65.06 48 64.3 48.04 63.68C48.1 63.02 48.2 62.36 48.46 61.7C48.72 61.06 49.1 60.5 49.56 60C49.1 59.5 48.72 58.94 48.46 58.3C48.18 57.64 48.08 56.98 48.04 56.32C48 55.7 48 54.94 48 54.06V48C48 47.04 48 46.42 47.98 45.96C47.94 45.5 47.9 45.32 47.86 45.24C47.66 44.76 47.26 44.36 46.78 44.16C46.68 44.12 46.52 44.08 46.06 44.04C45.58 44 44.96 44 44 44V40H44.06C44.94 40 45.7 40 46.32 40.04C46.98 40.1 47.64 40.18 48.3 40.46C49.76 41.06 50.94 42.22 51.54 43.7C51.82 44.36 51.92 45.02 51.96 45.68C52 46.3 52 47.06 52 47.94V54C52 54.96 52 55.58 52.02 56.04C52.06 56.5 52.1 56.68 52.14 56.76C52.34 57.24 52.74 57.64 53.22 57.84Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27600"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},6248:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27599)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56 40H40V44H56V40ZM56 52H40V56H56V52ZM16 64H56V68H16V64ZM56 76H16V80H56V76ZM26 56H22V44H16V40H32V44H26V56Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27599"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},4716:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27602)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.819999 94.56 0.44 93.82C-5.66244e-07 92.96 -3.89266e-07 91.84 7.33793e-10 89.6L1.45507e-05 6.4C1.49407e-05 4.16 1.51396e-05 3.04 0.440016 2.18C0.820016 1.44 1.44002 0.819999 2.18002 0.439999C3.04002 -5.96046e-07 4.16002 -3.89266e-07 6.40002 7.33824e-10L42.7 6.35073e-06C44.66 6.69073e-06 45.64 6.86944e-06 46.56 0.220007C47.06 0.340007 47.54 0.500007 48 0.720007V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 48C32 52.4183 28.4183 56 24 56C19.5817 56 16 52.4183 16 48C16 43.5817 19.5817 40 24 40C28.4183 40 32 43.5817 32 48ZM33.648 71.526L44 55.998L56 79.998H16L28 63.998L33.648 71.526Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27602"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},9926:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27603)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{d:"M56.1014 65.0909C52.962 61.8909 44.4014 63.2 42.3389 63.4364C40.0756 61.2182 38.1408 58.7091 36.5528 55.9818C37.6845 52.8182 38.3233 49.5091 38.4876 46.1636C38.4876 43.2 37.2829 40 33.9061 40C32.7197 40.0364 31.6246 40.6545 31.004 41.6545C29.562 44.1455 30.1643 49.1091 32.4459 54.2C30.8762 58.8545 28.8867 63.3636 26.5321 67.6909C23.0275 69.1091 15.6717 72.4182 15.0694 75.9818C14.8321 77.0727 15.2154 78.1818 16.0368 78.9455C16.8946 79.6364 17.9533 80 19.0667 80C23.5386 80 27.8828 73.9636 30.8945 68.8727C34.326 67.7273 37.8305 66.8182 41.3897 66.1455C46.0989 70.1636 50.2058 70.7636 52.3779 70.7636C55.28 70.7636 56.357 69.5818 56.722 68.5091C57.2513 67.3636 57.0141 66 56.1014 65.0909ZM53.0897 67.1091C52.962 67.9455 51.885 68.7636 49.9503 68.2909C47.7052 67.7091 45.6061 66.6545 43.7991 65.2182C45.3688 64.9818 48.8734 64.6182 51.3922 65.0909C52.3596 65.3273 53.327 65.9091 53.0897 67.1091ZM32.9388 42.7273C33.1395 42.3818 33.5046 42.1636 33.9061 42.1273C34.9831 42.1273 35.2386 43.4364 35.2386 44.4909C35.1108 47 34.6363 49.4545 33.7966 51.8364C31.9714 47.1091 32.3364 43.7818 32.9388 42.7273ZM32.7015 65.6727C33.7419 63.5091 34.6728 61.3091 35.4759 59.0545C36.5893 60.8 37.8852 62.4182 39.3454 63.9091C39.3272 64.0182 35.5854 64.7273 32.7015 65.6727ZM25.5829 70.4182C22.8085 74.9091 19.9063 77.7636 18.3366 77.7636C18.0811 77.7455 17.8255 77.6545 17.6065 77.5273C17.2414 77.2909 17.0954 76.8545 17.2414 76.4545C17.6065 74.8 20.746 72.5455 25.5829 70.4182Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27603"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},5637:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4158_31546)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4158_31546"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},6863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4174_31563)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3V29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{d:"M43 51.25C43 47.7982 40.2018 45 36.75 45H22.25C18.7982 45 16 47.7982 16 51.25V68.75C16 72.2018 18.7982 75 22.25 75H36.75C40.2018 75 43 72.2018 43 68.75V51.25ZM45 65.5316L51.9612 70.9681C53.6027 72.25 56 71.0804 56 68.9978V51.0027C56 48.92 53.6026 47.7505 51.9612 49.0324L45 54.469V65.5316Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4174_31563"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},7275:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M14.2958 16.2945C13.9055 16.6853 13.906 17.3184 14.2968 17.7087C14.6876 18.0989 15.3207 18.0985 15.711 17.7077L20.7076 12.7043C21.0976 12.3137 21.0974 11.681 20.7072 11.2906L15.7106 6.29297C15.3201 5.9024 14.6869 5.90234 14.2964 6.29282C13.9058 6.6833 13.9057 7.31647 14.2962 7.70703L17.589 11H11C6.66509 11 3.13546 14.4478 3.00381 18.7508L3 19C3 19.5523 3.44772 20 4 20C4.55228 20 5 19.5523 5 19C5 15.7616 7.56557 13.1224 10.7751 13.0041L11 13H17.586L14.2958 16.2945Z",fill:"#667085"})))},s=(0,i.forwardRef)(o)},8214:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a,o=n(7313);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(e,t)=>{let{title:n,titleId:u,...l}=e;return o.createElement("svg",s({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":u},l),n?o.createElement("title",{id:u},n):null,r||(r=o.createElement("path",{d:"M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z",fill:"url(#paint0_linear_14171_23293)"})),i||(i=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2431 5.96725C12.4162 5.86325 12.6357 5.87375 12.7982 5.99425C12.9602 6.11525 13.0342 6.32125 12.9857 6.51725L11.9857 10.5173C11.9297 10.7403 11.7297 10.8963 11.5002 10.8963H4.50018C4.27068 10.8963 4.07068 10.7397 4.01468 10.5173L3.01468 6.51725C2.96618 6.32125 3.04018 6.11525 3.20218 5.99425C3.36518 5.87425 3.58418 5.86375 3.75768 5.96725L5.84918 7.22225L7.58468 4.61875C7.59654 4.60096 7.61307 4.58921 7.62965 4.57743C7.63964 4.57033 7.64966 4.56321 7.65868 4.55475L7.17718 4.07275C7.08018 3.97575 7.08018 3.81625 7.17718 3.71925L7.82368 3.07275C7.92068 2.97575 8.08018 2.97575 8.17718 3.07275L8.82368 3.71925C8.92068 3.81625 8.92068 3.97575 8.82368 4.07275L8.34218 4.55475C8.3512 4.56338 8.3614 4.57062 8.37161 4.57787C8.38802 4.58951 8.40447 4.60119 8.41618 4.61875L10.1517 7.22225L12.2431 5.96725ZM4.00025 11.3962H12.0002V12.3963H4.00025V11.3962Z",fill:"#ECE9FE"})),a||(a=o.createElement("defs",null,o.createElement("linearGradient",{id:"paint0_linear_14171_23293",x1:0,y1:0,x2:16,y2:-1.66785e-9,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#7F56D9"}),o.createElement("stop",{offset:1,stopColor:"#9E77ED"})))))},l=(0,o.forwardRef)(u)},7935:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>F,Ie:()=>h,JE:()=>d,LJ:()=>m,OP:()=>g,Pb:()=>l,R1:()=>_,Wv:()=>f,YM:()=>r,ZP:()=>y,bI:()=>o,bT:()=>i,f0:()=>c,kK:()=>p,kO:()=>b,qe:()=>a,rs:()=>u,um:()=>s});const r="0.3.0",i={text:"text/plain",markdown:"text/markdown",file:"rustchat/file",archive:"rustchat/archive",formData:"multipart/form-data",json:"application/json"},a={apiKey:"AIzaSyDyJ6B1Ouenoha_gdGkBwIkBNStlwhlbO0",authDomain:"rustchat-develop.firebaseapp.com",projectId:"rustchat-develop",storageBucket:"rustchat-develop.appspot.com",messagingSenderId:"418687074928",appId:"1:418687074928:web:753286adbf239f5af9eab5",measurementId:"G-XV476KEC8P"},o={channel:"#",user:"@"},s="BGXCn-5YRXSFw38Q9lUKJ5bibL212-yIQn1pCvthGhp6_KwA29FO1Ax_d_7if1vfC2a5wTSVO8AcZrc-Hm1aS0Y",u="X-API-Key",l=16e5,c=8e7,d="RUSTCHAT_TOKEN",f="RUSTCHAT_TOKEN_EXPIRE",h="RUSTCHAT_REFRESH_TOKEN",p="RUSTCHAT_CURR_UID",g="RUSTCHAT_DEVICE_KEY",_="RUSTCHAT_PWA_INSTALLED",m="RUSTCHAT_LOCAL_MAGIC_TOKEN",F=["\ud83d\udc4d","\u2764\ufe0f","\ud83d\ude04","\ud83d\udc40","\ud83d\udc4e","\ud83c\udf89","\ud83d\ude41","\ud83d\ude80"],b={item:"item",grid:"grid"},y="https://dev.rustchat.com/api"},2509:(e,t,n)=>{"use strict";n.d(t,{CB:()=>_,I1:()=>p,N0:()=>c,SO:()=>m,Vd:()=>g,YA:()=>b,a3:()=>k,cZ:()=>d,iJ:()=>l,l4:()=>w,sT:()=>y,sZ:()=>F,uk:()=>h,v5:()=>v,wi:()=>f});var r=n(9438),i=n(2379),a=n(3295),o=n(1057),s=n(7935);const u=()=>{let e=localStorage.getItem(s.OP);return e||(e=`web:${(0,i.x0)()}`,localStorage.setItem(s.OP,e)),e},l=(0,r.LC)({reducerPath:"authApi",baseQuery:a.Z,endpoints:e=>({login:e.mutation({query:e=>({url:"token/login",method:"POST",body:{credential:e,device:u(),device_token:"test"}}),transformResponse:e=>{const{avatar_updated_at:t}=e.user;return e.user.avatar=0==t?"":`${s.ZP}/resource/avatar?uid=${e.user.uid}&t=${t}`,e},async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;e&&n((0,o.A3)(e))}catch{}}}),register:e.mutation({query:e=>({url:"user/register",method:"POST",body:e})}),renew:e.mutation({query:e=>{let{token:t,refreshToken:n}=e;return{url:"/token/renew",method:"POST",body:{token:t,refresh_token:n}}},async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.jM)(e))}catch{n((0,o.sQ)())}}}),updateDeviceToken:e.mutation({query:e=>({url:"/token/device_token",method:"PUT",body:{device_token:e}})}),getOpenid:e.mutation({query:e=>{let{issuer:t,redirect_uri:n}=e;return{url:"/token/openid/authorize",method:"POST",body:{issuer:t,redirect_uri:n}}}}),checkMagicTokenValid:e.mutation({query:e=>({url:"user/check_magic_token",method:"POST",body:{magic_token:e}})}),updatePassword:e.mutation({query:e=>{let{old_password:t,new_password:n}=e;return{url:"user/change_password",method:"POST",body:{old_password:t,new_password:n}}}}),sendLoginMagicLink:e.mutation({query:e=>({headers:{accept:"text/plain"},url:`user/send_login_magic_link?email=${encodeURIComponent(e)}`,method:"POST",responseHandler:e=>e.text()})}),sendRegMagicLink:e.mutation({query:e=>({url:"user/send_reg_magic_link",method:"POST",body:e})}),getMetamaskNonce:e.query({query:e=>({url:`/token/metamask/nonce?public_address=${e}`})}),checkEmail:e.query({query:e=>({url:`/user/check_email?email=${encodeURIComponent(e)}`})}),getCredentials:e.query({query:()=>({url:"/token/credentials"})}),logout:e.query({query:()=>({url:"token/logout"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.sQ)())}catch{}}}),getInitialized:e.query({query:()=>({url:"/admin/system/initialized"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.R4)(e))}catch{}}})})}),{useLazyCheckEmailQuery:c,useGetInitializedQuery:d,useSendLoginMagicLinkMutation:f,useSendRegMagicLinkMutation:h,useGetCredentialsQuery:p,useUpdateDeviceTokenMutation:g,useGetOpenidMutation:_,useRenewMutation:m,useLazyGetMetamaskNonceQuery:F,useLoginMutation:b,useLazyLogoutQuery:y,useCheckMagicTokenValidMutation:v,useUpdatePasswordMutation:k,useRegisterMutation:w}=l},3295:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(5008),i=n(3657),a=n(658),o=n.n(a),s=n(1057),u=n(7935);const l=["login","register","sendLoginMagicLink","sendRegMagicLink","checkEmail","checkMagicTokenValid","getGoogleAuthConfig","getGithubAuthConfig","getSMTPStatus","getLoginConfig","getServerVersion","getServer","getOpenid","getMetamaskNonce","renew","getInitialized","createAdmin"],c=(0,r.ni)({baseUrl:u.ZP,prepareHeaders:(e,t)=>{let{getState:n,endpoint:r}=t;const{token:i}=n().authData;return i&&!l.includes(r)&&e.set(u.rs,i),e}});let d=null;const f=async(e,t,n)=>{var r;d&&await d;const{token:a,refreshToken:u,expireTime:f=+new Date}=t.getState().authData;let h=null;if(!l.includes(t.endpoint)&&o()().isAfter(new Date(f-2e4))?(d=c({url:"/token/renew",method:"POST",body:{token:a,refresh_token:u}},t,n),h=await d,d=null,h.data&&(t.dispatch((0,s.jM)(h.data)),h=await c(e,t,n))):h=await c(e,t,n),null!==(r=h)&&void 0!==r&&r.error)switch(h.error.originalStatus||h.error.status){case"FETCH_ERROR":i.ZP.error(`${t.endpoint}: Failed to fetch`);break;case 401:"login"!==t.endpoint&&(t.dispatch((0,s.sQ)()),location.href="/#/login",i.ZP.error("API Not Authenticated"));break;case 403:i.ZP.error("Request Not Allowed");break;case 404:i.ZP.error("Request Not Found");break;case 500:i.ZP.error(h.error.data||"Server Error")}return h}},1962:(e,t,n)=>{"use strict";n.d(t,{CU:()=>g,Cg:()=>D,Hj:()=>E,N2:()=>m,Pr:()=>h,R4:()=>w,VJ:()=>p,aw:()=>F,db:()=>k,kE:()=>y,kG:()=>C,tW:()=>b});var r=n(9438),i=n(3295),a=n(7935),o=n(4520),s=n(5878),u=n(3820),l=n(1444),c=n(9172),d=n(3963),f=n(2460);const h=(0,r.LC)({reducerPath:"channelApi",baseQuery:i.Z,refetchOnFocus:!0,endpoints:e=>({getChannels:e.query({query:()=>({url:"group"})}),getChannel:e.query({query:e=>({url:`group/${e}`})}),leaveChannel:e.query({query:e=>({url:`group/${e}/leave`}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.OG)(e))}catch{}}}),createChannel:e.mutation({query:e=>({url:"group",method:"POST",body:e})}),updateChannel:e.mutation({query:e=>{let{id:t,...n}=e;return{url:`group/${t}`,method:"PUT",body:n}},async onQueryStarted(e,t){let{id:n,name:r,description:i}=e,{dispatch:a,queryFulfilled:s}=t;const u=a((0,o.pW)({id:n,name:r,description:i}));try{await s}catch{u.undo()}}}),getHistoryMessages:e.query({query:e=>{let{id:t,mid:n=null,limit:r=100}=e;return{url:n?`/group/${t}/history?before=${n}&limit=${r}`:`/group/${t}/history?limit=${r}`}},async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{data:a}=await i;null!==a&&void 0!==a&&a.length&&a.forEach((e=>{(0,f.Z)(e,n,r())}))}}),createInviteLink:e.query({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{headers:{"content-type":"text/plain",accept:"text/plain"},url:e?`/group/create_reg_magic_link?expired_in=3600&max_times=1&gid=${e}`:"/group/create_reg_magic_link?expired_in=3600&max_times=1",responseHandler:e=>e.text()}},transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`}}),removeChannel:e.query({query:e=>({url:`group/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{channelMessage:a,ui:{remeberedNavs:{chat:o}}}=r();try{await i;const t=a[e];o==`/chat/channel/${e}`&&n((0,s.Cz)({path:null})),t&&(n((0,l.YZ)(e)),n((0,u.Gd)(t)),n((0,c.FM)(t)))}catch{}}}),sendChannelMsg:e.mutation({query:e=>{let{id:t,content:n,type:r="text",properties:i=""}=e;return{headers:{"content-type":a.bT[r],"X-Properties":i?btoa(unescape(encodeURIComponent(JSON.stringify(i)))):""},url:`group/${t}/send`,method:"POST",body:"file"==r?JSON.stringify(n):n}},async onQueryStarted(e,t){await d.s.call(this,e,t,"channel")}}),addMembers:e.mutation({query:e=>{let{id:t,members:n}=e;return{url:`group/${t}/members/add`,method:"POST",body:n}}}),removeMembers:e.mutation({query:e=>{let{id:t,members:n}=e;return{url:`group/${t}/members/remove`,method:"POST",body:n}}}),updateIcon:e.mutation({query:e=>{let{gid:t,image:n}=e;return{headers:{"content-type":"image/png"},url:`/group/${t}/avatar`,method:"POST",body:n}},async onQueryStarted(e,t){let{gid:n}=e,{dispatch:r,queryFulfilled:i}=t;try{await i,r((0,o.pW)({id:n,icon:`${a.ZP}/resource/group_avatar?gid=${n}&t=${+new Date}`}))}catch(s){}}})})}),{useLazyLeaveChannelQuery:p,useLazyCreateInviteLinkQuery:g,useCreateInviteLinkQuery:_,useLazyGetHistoryMessagesQuery:m,useGetChannelQuery:F,useUpdateChannelMutation:b,useLazyRemoveChannelQuery:y,useGetChannelsQuery:v,useCreateChannelMutation:k,useSendChannelMsgMutation:w,useAddMembersMutation:E,useRemoveMembersMutation:D,useUpdateIconMutation:C}=h},6123:(e,t,n)=>{"use strict";n.d(t,{C0:()=>m,N2:()=>f,QQ:()=>g,Uk:()=>b,bI:()=>p,bm:()=>y,eJ:()=>d,g$:()=>_,wv:()=>h});var r=n(9438),i=n(7935),a=n(3295),o=n(1057),s=n(7398),u=n(9131),l=n(3963),c=n(2460);const d=(0,r.LC)({reducerPath:"contactApi",baseQuery:a.Z,endpoints:e=>({getContacts:e.query({query:()=>({url:"user"}),transformResponse:e=>e.map((e=>{const t=0==e.avatar_updated_at?"":`${i.ZP}/resource/avatar?uid=${e.uid}&t=${e.avatar_updated_at}`;return e.avatar=t,e})),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;const a=localStorage.getItem(i.kK);try{const{data:e}=await r,t=e.find((e=>e.uid==a));if(t){const r=e.map((e=>e.uid==t.uid?{...e,online:!0}:e));n((0,o.fs)(t.uid)),n((0,u.g5)(r))}else n((0,o.sQ)())}catch{}}}),deleteContact:e.query({query:e=>({url:`/admin/user/${e}`,method:"DELETE"})}),updateContact:e.mutation({query:e=>{let{id:t,...n}=e;return{url:`/admin/user/${t}`,body:n,method:"PUT"}}}),updateMuteSetting:e.mutation({query:e=>({url:"/user/mute",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,s.Uw)(e))}catch(i){}}}),updateAvatar:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"user/avatar",method:"POST",body:e})}),updateInfo:e.mutation({query:e=>({url:"user",method:"PUT",body:e})}),sendMsg:e.mutation({query:e=>{let{id:t,content:n,type:r="text",properties:a=""}=e;return{headers:{"content-type":i.bT[r],"X-Properties":a?btoa(unescape(encodeURIComponent(JSON.stringify(a)))):""},url:`user/${t}/send`,method:"POST",body:"file"==r?JSON.stringify(n):n}},async onQueryStarted(e,t){await l.s.call(this,e,t,"user")}}),getHistoryMessages:e.query({query:e=>{let{id:t,mid:n=null,limit:r=100}=e;return{url:n?`/user/${t}/history?before=${n}&limit=${r}`:`/user/${t}/history?limit=${r}`}},async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{data:a}=await i;null!==a&&void 0!==a&&a.length&&a.forEach((e=>{(0,c.Z)(e,n,r())}))}})})}),{useLazyGetHistoryMessagesQuery:f,useUpdateContactMutation:h,useUpdateMuteSettingMutation:p,useLazyDeleteContactQuery:g,useUpdateInfoMutation:_,useUpdateAvatarMutation:m,useGetContactsQuery:F,useLazyGetContactsQuery:b,useSendMsgMutation:y}=d},3963:(e,t,n)=>{"use strict";n.d(t,{s:()=>l});var r=n(3657),i=n(3709),a=n(7935),o=n(1444),s=n(986),u=n(3820);const l=async function(e,t){var n;let{ignoreLocal:l=!1,id:c,content:d,type:f="text",from_uid:h,reply_mid:p=null,properties:g={local_id:+new Date}}=e,{dispatch:_,queryFulfilled:m}=t,F=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"channel";if("archive"==f)return;const b=null===(n=g.content_type)||void 0===n?void 0:n.startsWith("image"),y=g.local_id||+new Date,v={content:b?d.path:d,content_type:a.bT[f],created_at:y,properties:g,from_uid:h,reply_mid:p,sending:!0},k="channel"==F?o.p_:s.ZK,w="channel"==F?o.nF:s.Fs;l||(0,i.dC)((()=>{_((0,u.Hz)({mid:y,...v})),_(k({id:c,mid:y}))}));try{const{data:e}=await m;(0,i.dC)((()=>{_(w({id:c,mid:y})),_((0,u.Hz)({mid:e,...v})),_(k({id:c,mid:e}))})),setTimeout((()=>{_((0,u.Gd)(y))}),300)}catch{r.ZP.error("Send Message Failed"),_(w({id:c,mid:y})),_((0,u.Gd)(y))}}},3114:(e,t,n)=>{"use strict";n.d(t,{$_:()=>b,DJ:()=>d,OL:()=>g,Pq:()=>E,Yh:()=>y,c1:()=>c,hE:()=>C,jT:()=>f,mK:()=>p,o5:()=>D,qt:()=>w,rF:()=>h,rf:()=>F,uv:()=>_,wm:()=>v,xX:()=>k});var r=n(9438),i=n(7935),a=n(7398),o=n(4749),s=n(3963),u=n(7990),l=n(3295);const c=(0,r.LC)({reducerPath:"messageApi",baseQuery:l.Z,endpoints:e=>({editMessage:e.mutation({query:e=>{let{mid:t,content:n,type:r="text"}=e;return{headers:{"content-type":i.bT[r]},url:`/message/${t}/edit`,method:"PUT",body:n}}}),reactMessage:e.mutation({query:e=>{let{mid:t,action:n}=e;return{url:`/message/${t}/like`,method:"PUT",body:{action:n}}}}),deleteMessage:e.query({query:e=>({url:`/message/${e}`,method:"DELETE"})}),prepareUploadFile:e.mutation({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{url:"/resource/file/prepare",method:"POST",body:e}}}),createArchive:e.mutation({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{url:"/resource/archive",method:"POST",body:{mid_list:e}}}}),uploadFile:e.mutation({query:e=>({url:"/resource/file/upload",method:"POST",body:e}),transformResponse:e=>e||{}}),getOGInfo:e.query({query:e=>({url:`/resource/open_graphic_parse?url=${encodeURIComponent(e)}`})}),getArchiveMessage:e.query({query:e=>({url:`/resource/archive?file_path=${encodeURIComponent(e)}`})}),pinMessage:e.mutation({query:e=>{let{gid:t,mid:n}=e;return{url:`/group/${t}/pin`,method:"POST",body:{mid:n}}}}),unpinMessage:e.mutation({query:e=>{let{gid:t,mid:n}=e;return{url:`/group/${t}/unpin`,method:"POST",body:{mid:n}}}}),favoriteMessage:e.mutation({query:e=>({url:"/favorite",method:"POST",body:{mid_list:e}}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r,{created_at:t,id:i}=e;n((0,o.a3)({id:i,created_at:t})),n(c.endpoints.getFavoriteDetails.initiate(i))}catch(i){}}}),removeFavorite:e.query({query:e=>({url:`/favorite/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.r7)(e))}catch(i){}}}),getFavoriteDetails:e.query({query:e=>({url:`/favorite/${e}`}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r,getState:i}=t;try{const{data:t}=await r,a=i().authData.uid,s=(0,u.Hr)(t,e,a);n((0,o.qW)({id:e,messages:s}))}catch(a){}}}),getFavorites:e.query({query:()=>({url:"/favorite"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.DA)(e));for(const t of e){const{id:e}=t;n(c.endpoints.getFavoriteDetails.initiate(e))}}catch(i){}}}),replyMessage:e.mutation({query:e=>{let{reply_mid:t,content:n,type:r="text"}=e;return{headers:{"content-type":i.bT[r]},url:`/message/${t}/reply`,method:"POST",body:n}},async onQueryStarted(e,t){await s.s.call(this,e,t,e.context)}}),readMessage:e.mutation({query:e=>({url:"/user/read-index",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;const{users:i=null,groups:o=null}=e;i&&n((0,a.RT)(i)),o&&n((0,a.TP)(o));try{await r}catch{}}})})}),{useLazyRemoveFavoriteQuery:d,useUnpinMessageMutation:f,useLazyGetFavoritesQuery:h,useFavoriteMessageMutation:p,usePinMessageMutation:g,useLazyGetArchiveMessageQuery:_,useGetArchiveMessageQuery:m,useLazyGetOGInfoQuery:F,usePrepareUploadFileMutation:b,useUploadFileMutation:y,useEditMessageMutation:v,useReactMessageMutation:k,useReplyMessageMutation:w,useLazyDeleteMessageQuery:E,useReadMessageMutation:D,useCreateArchiveMutation:C}=c},2378:(e,t,n)=>{"use strict";n.d(t,{$M:()=>S,BL:()=>I,D$:()=>g,FV:()=>_,I1:()=>u,Ke:()=>m,Ku:()=>d,QK:()=>R,QP:()=>k,Qg:()=>h,R:()=>c,WO:()=>E,bx:()=>F,e2:()=>A,eM:()=>f,gU:()=>N,jd:()=>T,kv:()=>y,n8:()=>p,p5:()=>l,rW:()=>b,vF:()=>D,ww:()=>v,z3:()=>C});var r=n(9438),i=n(7935),a=n(4827),o=n(3295);const s=604800,u=(0,r.LC)({reducerPath:"serverApi",baseQuery:o.Z,endpoints:e=>({getServer:e.query({query:()=>({url:"admin/system/organization"}),transformResponse:e=>(e.logo=`${i.ZP}/resource/organization/logo?t=${+new Date}`,e),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,a.rn)(e))}catch{}}}),getThirdPartySecret:e.query({query:()=>({url:"/admin/system/third_party_secret",responseHandler:e=>e.text()}),keepUnusedDataFor:0}),updateThirdPartySecret:e.mutation({query:()=>({url:"/admin/system/third_party_secret",method:"POST",responseHandler:e=>e.text()})}),getMetrics:e.query({query:()=>({url:"/admin/system/metrics"})}),getServerVersion:e.query({query:()=>({headers:{accept:"text/plain"},url:"/admin/system/version",responseHandler:e=>e.text()})}),getFirebaseConfig:e.query({query:()=>({url:"admin/fcm/config"})}),getGoogleAuthConfig:e.query({query:()=>({url:"admin/google_auth/config"})}),updateGoogleAuthConfig:e.mutation({query:e=>({url:"admin/google_auth/config",method:"POST",body:e})}),getGithubAuthConfig:e.query({query:()=>({url:"admin/github_auth/config"})}),updateGithubAuthConfig:e.mutation({query:e=>({url:"admin/github_auth/config",method:"POST",body:e})}),sendTestEmail:e.mutation({query:e=>({url:"/admin/system/send_mail",method:"POST",body:e})}),updateFirebaseConfig:e.mutation({query:e=>({url:"admin/fcm/config",method:"POST",body:e})}),getAgoraConfig:e.query({query:()=>({url:"admin/agora/config"})}),updateAgoraConfig:e.mutation({query:e=>({url:"admin/agora/config",method:"POST",body:e})}),getSMTPConfig:e.query({query:()=>({url:"admin/smtp/config"})}),getSMTPStatus:e.query({query:()=>({url:"/admin/smtp/enabled"})}),updateSMTPConfig:e.mutation({query:e=>({url:"admin/smtp/config",method:"POST",body:e})}),getLoginConfig:e.query({query:()=>({url:"admin/login/config"})}),updateLoginConfig:e.mutation({query:e=>({url:"admin/login/config",method:"POST",body:e})}),updateLogo:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"admin/system/organization/logo",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,a.rn)({logo:`${i.ZP}/resource/organization/logo?t=${+new Date}`}))}catch{}}}),createInviteLink:e.query({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return{headers:{"content-type":"text/plain",accept:"text/plain"},url:`/admin/system/create_invite_link?expired_in=${e}`,responseHandler:e=>e.text()}},transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`}}),updateServer:e.mutation({query:e=>({url:"admin/system/organization",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r,getState:i}=t;const{name:o,description:s}=i().server;n((0,a.rn)(e));try{await r}catch{n((0,a.rn)({name:o,description:s}))}}}),createAdmin:e.mutation({query:e=>({url:"/admin/system/create_admin",method:"POST",body:e})}),getInitialized:e.query({query:()=>({url:"/admin/system/initialized"})})})}),{useGetServerVersionQuery:l,useGetGithubAuthConfigQuery:c,useUpdateGithubAuthConfigMutation:d,useGetGoogleAuthConfigQuery:f,useUpdateGoogleAuthConfigMutation:h,useGetSMTPStatusQuery:p,useSendTestEmailMutation:g,useUpdateFirebaseConfigMutation:_,useLazyGetFirebaseConfigQuery:m,useLazyGetAgoraConfigQuery:F,useLazyGetSMTPConfigQuery:b,useLazyGetLoginConfigQuery:y,useGetLoginConfigQuery:v,useUpdateLoginConfigMutation:k,useGetSMTPConfigQuery:w,useUpdateSMTPConfigMutation:E,useUpdateAgoraConfigMutation:D,useGetServerQuery:C,useGetMetricsQuery:x,useLazyGetServerQuery:S,useUpdateServerMutation:A,useUpdateLogoMutation:T,useCreateInviteLinkQuery:O,useLazyCreateInviteLinkQuery:B,useGetThirdPartySecretQuery:I,useUpdateThirdPartySecretMutation:N,useCreateAdminMutation:R,useGetInitializedQuery:P}=u},1057:(e,t,n)=>{"use strict";n.d(t,{A3:()=>l,R4:()=>u,ZP:()=>h,fs:()=>d,jM:()=>f,sQ:()=>c});var r=n(2379),i=n(7935);const a={initialized:!0,uid:null,token:localStorage.getItem(i.JE),expireTime:localStorage.getItem(i.Wv)||+new Date,refreshToken:localStorage.getItem(i.Ie)},o={initialized:!0,uid:null,token:null,expireTime:+new Date,refreshToken:null},s=(0,r.oM)({name:"authData",initialState:a,reducers:{setAuthData(e,t){const{initialized:n=!0,user:{uid:r},token:a,refresh_token:o,expired_in:s=0}=t.payload;e.initialized=n,e.uid=`${r}`,e.token=a,e.refreshToken=o;const u=+new Date+1e3*Number(s);e.expireTime=u,localStorage.setItem(i.Wv,`${u}`),localStorage.setItem(i.JE,a),localStorage.setItem(i.Ie,o),localStorage.setItem(i.kK,`${r}`)},resetAuthData:()=>(localStorage.removeItem(i.Wv),localStorage.removeItem(i.JE),localStorage.removeItem(i.Ie),localStorage.removeItem(i.kK),localStorage.removeItem(i.R1),o),setUid(e,t){e.uid=t.payload},updateInitialized(e,t){e.initialized=t.payload},updateToken(e,t){const{token:n,refresh_token:r,expired_in:a}=t.payload;e.token=n;const o=+new Date+1e3*Number(a);e.expireTime=o,e.refreshToken=r,localStorage.setItem(i.Wv,`${o}`),localStorage.setItem(i.JE,n),localStorage.setItem(i.Ie,r)}}}),{updateInitialized:u,setAuthData:l,resetAuthData:c,setUid:d,updateToken:f}=s.actions,h=s.reducer},4520:(e,t,n)=>{"use strict";n.d(t,{LT:()=>l,OG:()=>h,ZP:()=>p,ac:()=>u,fS:()=>c,mR:()=>d,pW:()=>f});var r=n(2379),i=n(7935),a=n(7990);const o={ids:[],byId:{}},s=(0,r.oM)({name:"channels",initialState:o,reducers:{resetChannels:()=>o,fullfillChannels(e,t){const n=t.payload||[];e.ids=n.map((e=>{let{gid:t}=e;return t})),e.byId=Object.fromEntries(n.map((e=>{const{gid:t,avatar_updated_at:n}=e;return e.icon=0==n?"":`${i.ZP}/resource/group_avatar?gid=${t}&t=${n}`,[t,e]})))},addChannel(e,t){const n=t.payload,{gid:r,avatar_updated_at:a}=n;e.ids.includes(+r)||e.ids.push(+r),e.byId[r]={...n,icon:0==a?"":`${i.ZP}/resource/group_avatar?gid=${r}&t=${a}`}},updateChannel(e,t){const{gid:n,operation:r,members:i=[],...o}=t.payload,s=e.byId[n];if(!(!s||s.is_public&&["add_member","remove_member"].includes(r)))switch(r){case"remove_member":e.byId[n].members=e.byId[n].members.filter((e=>-1==i.findIndex((t=>t==e))));break;case"add_member":{const t=e.byId[n].members,r=new Set([...t,...i]);e.byId[n].members=Array.from(r);break}default:e.byId[n]={...e.byId[n],...(0,a.lg)(o)}}},updatePinMessage(e,t){var n;const{gid:r,mid:i,msg:a}=t.payload;let o=null===(n=e.byId[r])||void 0===n?void 0:n.pinned_messages;if(a)if(o){const e=o.findIndex((e=>e.mid==i));e>-1&&o.splice(e,1),o.push(a)}else o=[a];else if(o){const e=o.findIndex((e=>e.mid==i));e>-1&&o.splice(e,1)}},removeChannel(e,t){const n=t.payload,r=e.ids.findIndex((e=>e==n));r>-1&&(e.ids.splice(r,1),delete e.byId[n])}}}),{updatePinMessage:u,resetChannels:l,fullfillChannels:c,addChannel:d,updateChannel:f,removeChannel:h}=s.actions,p=s.reducer},9131:(e,t,n)=>{"use strict";n.d(t,{T9:()=>u,ZP:()=>f,_D:()=>d,g5:()=>l,ii:()=>c});var r=n(2379),i=n(7990),a=n(7935);const o={ids:[],byId:{}},s=(0,r.oM)({name:"contacts",initialState:o,reducers:{resetContacts:()=>o,fullfillContacts(e,t){const n=t.payload||[];e.ids=n.map((e=>{let{uid:t}=e;return t})),n.forEach((t=>{e.byId[t.uid]={...t,avatar:""}}))},removeContact(e,t){const n=t.payload;e.ids=e.ids.filter((e=>e!=n)),delete e.byId[n]},updateUsersByLogs(e,t){t.payload.forEach((t=>{let{action:n,uid:r,...o}=t;switch(n){case"update":{const t=(0,i.lg)(o);e.byId[r]&&Object.keys(t).forEach((n=>{e.byId[r][n]=t[n],"avatar_updated_at"==n&&(e.byId[r].avatar=`${a.ZP}/resource/avatar?uid=${r}&t=${t[n]}`)}));break}case"create":e.byId[r]={uid:r,...o};-1==e.ids.findIndex((e=>e==r))&&e.ids.push(r);break;case"delete":{const t=e.ids.findIndex((e=>e==r));t>-1&&(e.ids.splice(t,1),delete e.byId[r]);break}}}))},updateUsersStatus(e,t){t.payload.forEach((t=>{const{uid:n,online:r=!1}=t;e.byId[n]&&(e.byId[n].online=r)}))}}}),{resetContacts:u,fullfillContacts:l,updateUsersByLogs:c,updateUsersStatus:d}=s.actions,f=s.reducer},4749:(e,t,n)=>{"use strict";n.d(t,{DA:()=>o,ZP:()=>u,a3:()=>i,qW:()=>s,r7:()=>a});const r=(0,n(2379).oM)({name:"favorites",initialState:[],reducers:{fullfillFavorites:(e,t)=>t.payload,addFavorite(e,t){e.push(t.payload)},deleteFavorite(e,t){const n=t.payload,r=e.findIndex((e=>e.id==n));r>-1&&e.splice(r,1)},populateFavorite(e,t){const{id:n,messages:r}=t.payload,i=e.findIndex((e=>e.id==n));i>-1&&(e[i].messages=r)}}}),{addFavorite:i,deleteFavorite:a,fullfillFavorites:o,populateFavorite:s}=r.actions,u=r.reducer},7398:(e,t,n)=>{"use strict";n.d(t,{$F:()=>o,GV:()=>s,PN:()=>u,RT:()=>d,TP:()=>c,Uw:()=>f,ZP:()=>h,uM:()=>l});var r=n(2379);const i={usersVersion:0,afterMid:0,readUsers:{},readChannels:{},muteUsers:{},muteChannels:{}},a=(0,r.oM)({name:"footprint",initialState:i,reducers:{resetFootprint:()=>i,fullfillFootprint(e,t){const{usersVersion:n=0,afterMid:r=0,readUsers:i={},readChannels:a={},muteUsers:o={},muteChannels:s={}}=t.payload;return{usersVersion:n,afterMid:r,readUsers:i,readChannels:a,muteUsers:o,muteChannels:s}},updateUsersVersion(e,t){e.usersVersion=t.payload},updateAfterMid(e,t){e.afterMid=t.payload},updateMute(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{switch(t){case"remove_users":n.remove_users.forEach((t=>{delete e.muteUsers[t]}));break;case"remove_groups":n.remove_groups.forEach((t=>{delete e.muteChannels[t]}));break;case"add_users":n.add_users.forEach((t=>{let{uid:n,expired_in:r=null}=t;e.muteUsers[n]={expired_in:r}}));break;case"add_groups":n.add_groups.forEach((t=>{let{gid:n,expired_in:r=null}=t;e.muteChannels[n]={expired_in:r}}))}}))},updateReadUsers(e,t){const n=t.payload||[];0!=n.length&&n.forEach((t=>{let{uid:n,mid:r}=t;e.readUsers[n]=r}))},updateReadChannels(e,t){const n=t.payload||[];0!=n.length&&n.forEach((t=>{let{gid:n,mid:r}=t;e.readChannels[n]=r}))}}}),{resetFootprint:o,fullfillFootprint:s,updateAfterMid:u,updateUsersVersion:l,updateReadChannels:c,updateReadUsers:d,updateMute:f}=a.actions,h=a.reducer},1444:(e,t,n)=>{"use strict";n.d(t,{Ie:()=>u,XK:()=>s,YZ:()=>o,ZP:()=>f,nF:()=>c,p_:()=>l});var r=n(2379);const i={},a=(0,r.oM)({name:"channelMessage",initialState:i,reducers:{resetChannelMsg:()=>i,fullfillChannelMsg:(e,t)=>t.payload,addChannelMsg(e,t){const{id:n,mid:r,local_id:i=null}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r))>-1,a=e[n].findIndex((e=>e==i))>-1;if(t||a)return;e[n].push(+r)}else e[n]=[+r]},removeChannelMsg(e,t){const{id:n,mid:r}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&e[n].splice(t,1)}},replaceChannelMsg(e,t){const{id:n,localMid:r,serverMid:i}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&i&&e[n].splice(t,1,i)}},removeChannelSession(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))}}}),{removeChannelSession:o,resetChannelMsg:s,fullfillChannelMsg:u,addChannelMsg:l,removeChannelMsg:c,replaceChannelMsg:d}=a.actions,f=a.reducer},8523:(e,t,n)=>{"use strict";n.d(t,{$k:()=>l,D$:()=>u,I6:()=>s,XD:()=>o,ZP:()=>c});var r=n(2379);const i=[],a=(0,r.oM)({name:"fileMessage",initialState:i,reducers:{resetFileMessage:()=>i,fullfillFileMessage:(e,t)=>t.payload||[],addFileMessage(e,t){const n=t.payload;-1==e.findIndex((e=>e==n))&&e.unshift(+n)},removeFileMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{const n=e.findIndex((e=>e==t));n>-1&&e.splice(n,1)}))}}}),{removeFileMessage:o,resetFileMessage:s,fullfillFileMessage:u,addFileMessage:l}=a.actions,c=a.reducer},9172:(e,t,n)=>{"use strict";n.d(t,{FM:()=>o,ZP:()=>c,fr:()=>l,kh:()=>s,tG:()=>u});var r=n(2379);const i={},a=(0,r.oM)({name:"reactionMessage",initialState:i,reducers:{resetReactionMessage:()=>i,fullfillReactionMessage:(e,t)=>t.payload,removeReactionMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},toggleReactionMessage(e,t){const{from_uid:n,mid:r,rid:i,action:a}=t.payload;if(!(e[i]||!1)){if(e[r]||(e[r]={}),e[r][a]){const t=e[r][a],i=t.findIndex((e=>e==n));i>-1?(t.splice(i,1),0==t.length&&delete e[r][a]):t.push(n)}else e[r][a]=[n];e[i]=!0}}}}),{removeReactionMessage:o,resetReactionMessage:s,fullfillReactionMessage:u,toggleReactionMessage:l}=a.actions,c=a.reducer},3820:(e,t,n)=>{"use strict";n.d(t,{Gd:()=>h,Hz:()=>f,MQ:()=>p,TB:()=>u,XS:()=>g,ZP:()=>_,Zl:()=>l,o6:()=>d});var r=n(2379),i=n(7935),a=n(7990);const o={replying:{}},s=(0,r.oM)({name:"message",initialState:o,reducers:{resetMessage:()=>o,fullfillMessage:(e,t)=>Object.assign({...o},t.payload),updateMessage(e,t){const{mid:n,...r}=t.payload;e[n]={...e[n],...r}},addMessage(e,t){const n=t.payload,{mid:r,sending:o,content_type:s,content:u,properties:l={}}=n;if(o&&e[r])return;const c=s==i.bT.file,d=null!==l&&void 0!==l?l:{},f=(0,a.Or)(d.content_type,d.size);c&&(o?f&&(n.thumbnail=u):(n.file_path=u,n.content=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}`,n.download=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}&download=true`,n.thumbnail=f?`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}&thumbnail=true`:"")),e[r]=n},removeMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},addReplyingMessage(e,t){const{key:n,mid:r}=t.payload;e.replying[n]=r},removeReplyingMessage(e,t){const n=t.payload;e.replying[n]&&delete e.replying[n]}}}),{resetMessage:u,fullfillMessage:l,setMessage:c,updateMessage:d,addMessage:f,removeMessage:h,addReplyingMessage:p,removeReplyingMessage:g}=s.actions,_=s.reducer},986:(e,t,n)=>{"use strict";n.d(t,{Fs:()=>c,Qc:()=>u,So:()=>o,ZK:()=>l,ZP:()=>f,af:()=>s});var r=n(2379);const i={ids:[],byId:{}},a=(0,r.oM)({name:"userMessage",initialState:i,reducers:{resetUserMsg:()=>i,fullfillUserMsg(e,t){e.ids=Object.keys(t.payload),e.byId=t.payload},addUserMsg(e,t){const{id:n,mid:r,local_id:i}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r))>-1,a=e.byId[n].findIndex((e=>e==i))>-1;if(t||a)return;e.byId[n].push(+r),-1==e.ids.findIndex((e=>e==n))&&e.ids.push(+n)}else e.byId[n]=[+r],e.ids.push(+n)},removeUserMsg(e,t){const{id:n,mid:r}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r));t>-1&&e.byId[n].splice(t,1)}},replaceUserMsg(e,t){const{id:n,localMid:r,serverMid:i}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r));t>-1&&i&&e.byId[n].splice(t,1,i)}},removeUserSession(e,t){const n=Array.isArray(t.payload)?t.payload:[t.payload];e.ids=e.ids.filter((e=>-1==n.findIndex((t=>t==e))))}}}),{removeUserSession:o,resetUserMsg:s,fullfillUserMsg:u,addUserMsg:l,removeUserMsg:c,replaceUserMsg:d}=a.actions,f=a.reducer},4827:(e,t,n)=>{"use strict";n.d(t,{EM:()=>u,ZP:()=>l,rn:()=>o});var r=n(2379);const i={name:"",description:"",logo:"",inviteLink:{link:"",expire:0}},a=(0,r.oM)({name:"server",initialState:i,reducers:{resetServer:()=>i,fullfillServer(e,t){const{inviteLink:n={link:"",expire:0},name:r="",description:i=""}=t.payload||{};return{name:r,description:i,inviteLink:n}},updateInfo(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{e[t]=n[t]}))}}}),{updateInfo:o,resetServer:s,fullfillServer:u}=a.actions,l=a.reducer},5878:(e,t,n)=>{"use strict";n.d(t,{$K:()=>_,Cz:()=>m,Gy:()=>h,In:()=>d,Uc:()=>s,Ul:()=>g,XH:()=>l,ZP:()=>F,o3:()=>u,tD:()=>f,u2:()=>o});var r=n(2379);const i={online:!0,ready:!1,userGuide:{visible:!1,step:1},inputMode:"text",menuExpand:!1,fileListView:n(7935).kO.grid,uploadFiles:{},selectMessages:{},draftMarkdown:{},draftMixedText:{},remeberedNavs:{chat:null,contact:null}},a=(0,r.oM)({name:"ui",initialState:i,reducers:{fullfillUI:(e,t)=>({...i,...t.payload}),setReady(e){e.ready=!0},updateOnline(e,t){e.online=t.payload},toggleMenuExpand(e){e.menuExpand=!e.menuExpand},updateInputMode(e,t){e.inputMode=t.payload},updateFileListView(e,t){e.fileListView=t.payload},updateRemeberedNavs(e,t){const{key:n="chat",path:r=null}=t.payload||{};e.remeberedNavs[n]=r},updateDraftMarkdown(e,t){const{key:n,value:r}=t.payload;e.draftMarkdown[n]=r},updateDraftMixedText(e,t){const{key:n,value:r}=t.payload;e.draftMixedText[n]=r},updateUserGuide(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{e.userGuide[t]=n[t]}))},updateUploadFiles(e,t){const{context:n="channel",id:r=null,operation:i="add",...a}=t.payload;if(!r||!n)return;const o=`${n}_${r}`;let s=e.uploadFiles[o];switch(i){case"add":{const{data:t}=a,n=Array.isArray(t);s?n?t.forEach((e=>{s.push(e)})):s.push(a):e.uploadFiles[o]=n?t:[t]}break;case"reset":e.uploadFiles[o]=[];break;case"remove":{const{index:e}=a,t=s[e];t&&(s.splice(e,1),URL.revokeObjectURL(t.url))}break;case"update":{const{index:e,name:t}=a,n=s[e];n&&(n.name=t)}}},updateSelectMessages(e,t){const{context:n="channel",id:r=null,operation:i="add",data:a=null}=t.payload;let o=e.selectMessages[`${n}_${r}`];switch(i){case"add":o=o?[...o,a]:[a];break;case"remove":o=o.filter((e=>e!=a));break;case"reset":o=null}e.selectMessages[`${n}_${r}`]=o}}}),{fullfillUI:o,setReady:s,updateOnline:u,updateInputMode:l,toggleMenuExpand:c,updateFileListView:d,updateUploadFiles:f,updateSelectMessages:h,updateUserGuide:p,updateDraftMarkdown:g,updateDraftMixedText:_,updateRemeberedNavs:m}=a.actions,F=a.reducer},8529:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>I,TL:()=>O,CG:()=>B});var r=n(2379),i=n(821),a=n(5008),o=n(3709),s=n(5878);const u=async e=>{const t=window.CACHE[e];t&&await t.iterate(((e,n)=>{t.removeItem(n)}))};const l=["__rtkq","channels","channelMessage","contacts","userMessage","reactionMessage","fileMessage","message","ui","footprint","server"],c=(0,r.e)();c.startListening({predicate:e=>{const{type:t=""}=e,[n]=t.split("/");return l.includes(n)},effect:async(e,t)=>{const{type:n="",payload:r}=e,[i,a]=n.split("/");if(!window.CACHE&&"__rtkq"!==i)return;const o=t.getState()[i];switch(i){case"__rtkq":!async function(e){let{dispatch:t,operation:n}=e;switch(n){case"offline":t((0,s.o3)(!1));break;case"online":t((0,s.o3)(!0))}}({operation:a,payload:r,dispatch:t.dispatch});break;case"channels":await async function(e){let{operation:t,data:n,payload:r}=e;const i=window.CACHE.channels;if(t.startsWith("reset"))u("channels");else switch(t){case"fullfillChannels":{const e=r;await Promise.all(e.map((e=>{let{gid:t,...n}=e;return i.setItem(t+"",{gid:t,...n})})))}break;case"addChannel":{const{gid:e}=r;await i.setItem(e+"",r)}break;case"removeChannel":{const e=r;await i.removeItem(e+"")}break;case"updateChannel":{const{id:e}=r;await i.setItem(e+"",n.byId[e])}}}({operation:a,payload:r,data:o});break;case"contacts":await async function(e){let{operation:t,data:n,payload:r}=e;const i=window.CACHE.contacts;if(t.startsWith("reset"))u("contacts");else switch(t){case"fullfillContacts":{const e=r;await Promise.all(e.map((e=>{let{uid:t,...n}=e;return i.setItem(t+"",{uid:t,...n})})))}break;case"updateUsersByLogs":{const e=r;await Promise.all(e.map((async e=>{let{action:t,uid:r}=e;switch(t){case"update":case"create":await i.setItem(r+"",n.byId[r]);break;case"delete":await i.removeItem(r+"")}})))}break;case"addContact":{const{uid:e}=r;await i.setItem(e+"",r)}break;case"removeContact":{const e=r;await i.removeItem(e+"")}}}({operation:a,payload:r,data:o});break;case"channelMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageChannel;if(t.startsWith("reset"))u("messageChannel");else switch(t){case"addChannelMsg":case"removeChannelMsg":{const{id:e}=r;await i.setItem(e+"",n[e])}break;case"removeChannelSession":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"userMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageDM;if(t.startsWith("reset"))u("messageDM");else switch(t){case"addUserMsg":case"removeUserMsg":{const{id:e}=r;await i.setItem(e+"",n.byId[e])}break;case"removeUserSession":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"fileMessage":await async function(e){let{operation:t,data:n={}}=e;const r=window.CACHE.messageFile;if(t.startsWith("reset"))u("messageFile");else switch(t){case"addFileMessage":case"removeFileMessage":await r.setItem("list",n)}}({operation:a,data:o});break;case"message":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.message;if(t.startsWith("reset"))u("message");else switch(t){case"addMessage":case"updateMessage":{const{mid:e}=r;await i.setItem(e+"",n[e])}break;case"removeMessage":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"reactionMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageReaction;if(t.startsWith("reset"))u("messageReaction");else switch(t){case"toggleReactionMessage":{const{mid:e,rid:t}=r;await i.setItem(e+"",n[e]),await i.setItem(t+"",n[t])}break;case"removeReactionMessage":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"footprint":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.footprint;if(t.startsWith("reset"))u("footprint");else switch(t){case"updateUsersVersion":{const e=r;await i.setItem("usersVersion",e)}break;case"updateAfterMid":{const e=r;await i.setItem("afterMid",e)}break;case"updateMute":await i.setItem("muteUsers",n.muteUsers||{}),await i.setItem("muteChannels",n.muteChannels||{});break;case"updateReadChannels":await i.setItem("readChannels",n.readChannels);break;case"updateReadUsers":await i.setItem("readUsers",n.readUsers)}}({operation:a,payload:r,data:o});break;case"ui":await async function(e){let{operation:t,data:n={}}=e;const r=window.CACHE.ui;if(t.startsWith("reset"))u("ui");else switch(t){case"toggleMenuExpand":await r.setItem("menuExpand",n.menuExpand);break;case"updateInputMode":await r.setItem("inputMode",n.inputMode);break;case"updateFileListView":await r.setItem("fileListView",n.fileListView)}}({operation:a,payload:r,data:o});break;case"server":await async function(e){let{operation:t,payload:n}=e;const r=window.CACHE.server;if(t.startsWith("reset"))u("server");else if("updateInfo"===t){const e=n;await Promise.all(Object.entries(e).map((e=>{let[t,n]=e;return r.setItem(t,n)})))}}({operation:a,payload:r,data:o})}}});const d=c;var f=n(1057),h=n(7398),p=n(4827),g=n(4520),_=n(9131),m=n(9172),F=n(1444),b=n(986),y=n(4749),v=n(8523),k=n(3820),w=n(2509),E=n(6123),D=n(1962),C=n(3114),x=n(2378);const S=(0,i.UY)({authData:f.ZP,ui:s.ZP,footprint:h.ZP,server:p.ZP,favorites:y.ZP,contacts:_.ZP,channels:g.ZP,reactionMessage:m.ZP,userMessage:b.ZP,channelMessage:F.ZP,fileMessage:v.ZP,message:k.ZP,[w.iJ.reducerPath]:w.iJ.reducer,[C.c1.reducerPath]:C.c1.reducer,[E.eJ.reducerPath]:E.eJ.reducer,[D.Pr.reducerPath]:D.Pr.reducer,[x.I1.reducerPath]:x.I1.reducer}),A=(0,r.xC)({reducer:S,middleware:e=>e().concat(w.iJ.middleware,E.eJ.middleware,D.Pr.middleware,x.I1.middleware,C.c1.middleware).prepend(d.middleware)});let T=!1;(0,a.sj)(A.dispatch,((e,t)=>{let{onOnline:n,onOffline:r,onFocus:i,onFocusLost:a}=t;const o=()=>e(i()),s=()=>e(n()),u=()=>e(r()),l=()=>{"visible"===window.document.visibilityState?o():e(a())};return T||"undefined"!==typeof window&&window.addEventListener&&(window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",o,!1),window.addEventListener("online",s,!1),window.addEventListener("offline",u,!1),T=!0),()=>{window.removeEventListener("focus",o),window.removeEventListener("visibilitychange",l),window.removeEventListener("online",s),window.removeEventListener("offline",u),T=!1}}));const O=()=>(0,o.I0)(),B=o.v9,I=A},5700:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r,i=n(7313),a=n(9184),o=n(9784);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(e,t)=>{let{title:n,titleId:a,...o}=e;return i.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M11.0004 17.5C11.0004 16.2111 11.3755 15.0098 12.0226 13.9993L4.25278 13.9999C3.01076 13.9999 2.00391 15.0068 2.00391 16.2488V17.1688C2.00391 17.7409 2.18231 18.2987 2.51427 18.7646C4.05643 20.9289 6.5794 22.0011 10.0004 22.0011C10.9317 22.0011 11.7966 21.9216 12.5921 21.7615C11.6006 20.6205 11.0004 19.1303 11.0004 17.5ZM15.0004 7.00464C15.0004 4.24321 12.7618 2.00464 10.0004 2.00464C7.23894 2.00464 5.00036 4.24321 5.00036 7.00464C5.00036 9.76606 7.23894 12.0046 10.0004 12.0046C12.7618 12.0046 15.0004 9.76606 15.0004 7.00464ZM23.0004 17.5C23.0004 14.4624 20.5379 12 17.5004 12C14.4628 12 12.0004 14.4624 12.0004 17.5C12.0004 20.5376 14.4628 23 17.5004 23C20.5379 23 23.0004 20.5376 23.0004 17.5ZM17.4105 14.008L17.5004 14L17.5902 14.008C17.7943 14.0451 17.9553 14.206 17.9923 14.4101L18.0004 14.5L17.9994 17H20.5043L20.5942 17.0081C20.7982 17.0451 20.9592 17.206 20.9962 17.4101L21.0043 17.5L20.9962 17.5899C20.9592 17.794 20.7982 17.9549 20.5942 17.9919L20.5043 18H17.9994L18.0004 20.5L17.9923 20.5899C17.9553 20.794 17.7943 20.9549 17.5902 20.9919L17.5004 21L17.4105 20.9919C17.2064 20.9549 17.0455 20.794 17.0084 20.5899L17.0004 20.5L16.9994 18H14.5043L14.4144 17.9919C14.2103 17.9549 14.0494 17.794 14.0123 17.5899L14.0043 17.5L14.0123 17.4101C14.0494 17.206 14.2103 17.0451 14.4144 17.0081L14.5043 17H16.9994L17.0004 14.5L17.0084 14.4101C17.0455 14.206 17.2064 14.0451 17.4105 14.008Z",fill:"#70707B"})))},l=(0,i.forwardRef)(u);var c;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const f=(e,t)=>{let{title:n,titleId:r,...a}=e;return i.createElement("svg",d({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?i.createElement("title",{id:r},n):null,c||(c=i.createElement("path",{d:"M10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 12.8269 17.0262 14.75 15 14.75C13.7958 14.75 12.8751 14.0708 12.3262 12.9264C11.6738 13.7512 10.7016 14.25 9.5 14.25C7.20741 14.25 5.75 12.4342 5.75 10C5.75 7.53639 7.16021 5.75 9.5 5.75C10.3964 5.75 11.1564 6.01222 11.753 6.47429C11.7643 6.07167 12.0946 5.75 12.5 5.75C12.8797 5.75 13.1935 6.03215 13.2432 6.39823L13.25 6.5V10C13.25 12.1017 13.9808 13.25 15 13.25C16.0192 13.25 16.75 12.1017 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C10.794 16.75 11.5682 16.6132 12.2981 16.3489C12.6876 16.2079 13.1176 16.4093 13.2587 16.7988C13.3997 17.1883 13.1982 17.6183 12.8088 17.7593C11.9157 18.0827 10.9688 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75ZM9.5 7.25C8.07681 7.25 7.25 8.29737 7.25 10C7.25 11.6694 8.11734 12.75 9.5 12.75C10.8827 12.75 11.75 11.6694 11.75 10C11.75 8.29737 10.9232 7.25 9.5 7.25Z",fill:"#475467"})))},h=(0,i.forwardRef)(f);var p=n(6365),g=n(9191),_=n(5970),m=n(4649),F=n(6417);const b=a.ZP.ul`
  z-index: 999;
  user-select: none;
  box-shadow: 0 24px 48px -12px rgba(16, 24, 40, 0.18);
  border-radius: 12px;
  color: #616161;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 4px;
  .item {
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    padding: 10px 8px;
    &:hover {
      background: rgba(116, 127, 141, 0.2);
    }
    .icon {
      width: 20px;
      height: 20px;
      path {
        fill: #475467;
      }
    }
  }
`;function y(){const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),[a,s]=(0,i.useState)(!1),[u,c]=(0,i.useState)(!1),d=()=>{r((e=>(e||(0,o.Bn)(),!e)))},f=()=>{c((e=>(e||(0,o.Bn)(),!e)))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(b,{children:[(0,F.jsxs)("li",{className:"item",onClick:(e=>{t(e),s(!0),(0,o.Bn)()}).bind(null,!0),children:[(0,F.jsx)(p.Z,{personal:!0,className:"icon"}),"New Private Channel"]}),(0,F.jsxs)("li",{className:"item",onClick:f,children:[(0,F.jsx)(h,{className:"icon"}),"New Message"]}),(0,F.jsxs)("li",{className:"item",onClick:d,children:[(0,F.jsx)(l,{className:"icon"}),"Invite People"]})]}),a&&(0,F.jsx)(g.Z,{personal:e,closeModal:()=>{s(!1)}}),u&&(0,F.jsx)(_.Z,{closeModal:f}),n&&(0,F.jsx)(m.Z,{closeModal:d})]})}},1590:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7313),i=n(7990),a=n(6417);const o=e=>{let{url:t="",name:n="unkonw name",type:o="user",...s}=e;const[u,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(t)l(t);else{const e=(0,i.eD)({initials:(0,i.Qm)(n),background:"channel"==o?"#EAECF0":void 0,foreground:"channel"==o?"#475467":void 0});l(e)}}),[t,n]),u?(0,a.jsx)("img",{src:u,onError:e=>{const t=(0,i.eD)({initials:(0,i.Qm)(n),background:"channel"==o?"#EAECF0":void 0,foreground:"channel"==o?"#475467":void 0});l(t)},...s}):null},s=(0,r.memo)(o,((e,t)=>e.url==t.url))},9667:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r,i,a=n(7313),o=n(9184),s=n(9466),u=n(9191),l=n(4649);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const d=(e,t)=>{let{title:n,titleId:o,...s}=e;return a.createElement("svg",c({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?a.createElement("title",{id:o},n):null,r||(r=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#BDB4FE"})),i||(i=a.createElement("path",{d:"M30 20.5C30 14.9772 25.5228 10.5 20 10.5C14.4772 10.5 10 14.9772 10 20.5C10 22.1428 10.3972 23.7294 11.1449 25.1502L10.0285 29.4386C9.99198 29.5791 9.99199 29.7266 10.0286 29.867C10.1469 30.3213 10.6111 30.5937 11.0654 30.4753L15.3558 29.3583C16.7752 30.1039 18.3596 30.5 20 30.5C25.5228 30.5 30 26.0228 30 20.5ZM20 16.5C21.1046 16.5 22 17.3954 22 18.5V22.5C22 23.6046 21.1046 24.5 20 24.5H17C15.8954 24.5 15 23.6046 15 22.5V18.5C15 17.3954 15.8954 16.5 17 16.5H20ZM23 21.6619V19.3382L24.7344 17.6963C25.2125 17.2437 26 17.5826 26 18.2409V22.7591C26 23.4174 25.2125 23.7563 24.7344 23.3037L23 21.6619Z",fill:"white"})))},f=(0,a.forwardRef)(d);var h,p;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const _=(e,t)=>{let{title:n,titleId:r,...i}=e;return a.createElement("svg",g({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,h||(h=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#ACDC79"})),p||(p=a.createElement("path",{d:"M20 10.5C25.523 10.5 30 14.978 30 20.5C30 26.022 25.523 30.5 20 30.5C14.477 30.5 10 26.022 10 20.5C10 14.978 14.477 10.5 20 10.5ZM20 24C19.4477 24 19 24.4477 19 25C19 25.5523 19.4477 26 20 26C20.5523 26 21 25.5523 21 25C21 24.4477 20.5523 24 20 24ZM20 15.25C18.4812 15.25 17.25 16.4812 17.25 18C17.25 18.4142 17.5858 18.75 18 18.75C18.3797 18.75 18.6935 18.4678 18.7432 18.1018L18.75 18C18.75 17.3096 19.3096 16.75 20 16.75C20.6904 16.75 21.25 17.3096 21.25 18C21.25 18.5388 21.115 18.8053 20.6051 19.3322L20.4697 19.4697C19.5916 20.3478 19.25 20.9171 19.25 22C19.25 22.4142 19.5858 22.75 20 22.75C20.4142 22.75 20.75 22.4142 20.75 22C20.75 21.4612 20.885 21.1947 21.3949 20.6678L21.5303 20.5303C22.4084 19.6522 22.75 19.0829 22.75 18C22.75 16.4812 21.5188 15.25 20 15.25Z",fill:"white"})))},m=(0,a.forwardRef)(_);var F,b;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}const v=(e,t)=>{let{title:n,titleId:r,...i}=e;return a.createElement("svg",y({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,F||(F=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#FDE272"})),b||(b=a.createElement("path",{d:"M25.5 20.5C28.5376 20.5 31 22.9624 31 26C31 29.0376 28.5376 31.5 25.5 31.5C22.4624 31.5 20 29.0376 20 26C20 22.9624 22.4624 20.5 25.5 20.5ZM12 21.499L20.8094 21.5002C19.6887 22.6681 19 24.2536 19 26C19 27.0874 19.267 28.1124 19.739 29.013C18.6887 29.363 17.5306 29.5 16.5 29.5C13.7779 29.5 10.1647 28.544 10.0055 25.2296L10 25V23.499C10 22.395 10.896 21.499 12 21.499ZM25.5 22.5016L25.4101 22.5096C25.206 22.5467 25.0451 22.7076 25.0081 22.9117L25 23.0016V25.4996L22.5 25.5L22.4101 25.5081C22.206 25.5451 22.0451 25.706 22.0081 25.9101L22 26L22.0081 26.0899C22.0451 26.294 22.206 26.4549 22.4101 26.4919L22.5 26.5L25 26.4996V29L25.0081 29.0899C25.0451 29.294 25.206 29.4549 25.4101 29.4919L25.5 29.5L25.5899 29.4919C25.794 29.4549 25.9549 29.294 25.9919 29.0899L26 29V26.4996L28.5 26.5L28.5899 26.4919C28.794 26.4549 28.9549 26.294 28.9919 26.0899L29 26L28.9919 25.9101C28.9549 25.706 28.794 25.5451 28.5899 25.5081L28.5 25.5L26 25.4996V23.0016L25.9919 22.9117C25.9549 22.7076 25.794 22.5467 25.5899 22.5096L25.5 22.5016ZM16.5 10.5C18.985 10.5 21 12.515 21 15C21 17.485 18.985 19.5 16.5 19.5C14.015 19.5 12 17.485 12 15C12 12.515 14.015 10.5 16.5 10.5ZM25.5 12.5C27.433 12.5 29 14.067 29 16C29 17.933 27.433 19.5 25.5 19.5C23.567 19.5 22 17.933 22 16C22 14.067 23.567 12.5 25.5 12.5Z",fill:"white"})))},k=(0,a.forwardRef)(v);var w,E;function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}const C=(e,t)=>{let{title:n,titleId:r,...i}=e;return a.createElement("svg",D({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,w||(w=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#FF9C66"})),E||(E=a.createElement("path",{d:"M16.2554 17.4999C17.2219 17.4999 18.0054 18.2834 18.0054 19.2499V28.75C18.0054 29.7165 17.2219 30.5 16.2554 30.5H11.751C10.7845 30.5 10.001 29.7165 10.001 28.75V19.2499C10.001 18.2834 10.7845 17.4999 11.751 17.4999H16.2554ZM14.2532 26.9952H13.7532L13.6514 27.002C13.2853 27.0517 13.0032 27.3655 13.0032 27.7452C13.0032 28.1249 13.2853 28.4387 13.6514 28.4883L13.7532 28.4952H14.2532L14.355 28.4883C14.721 28.4387 15.0032 28.1249 15.0032 27.7452C15.0032 27.3655 14.721 27.0517 14.355 27.002L14.2532 26.9952ZM27.7504 10.5C28.9412 10.5 29.916 11.4252 29.9952 12.596L30.0004 12.75V21.75C30.0004 22.9409 29.0752 23.9156 27.9044 23.9948L27.7504 24H24.0044V26H25.2504C25.6646 26 26.0004 26.3358 26.0004 26.75C26.0004 27.1297 25.7182 27.4435 25.3521 27.4932L25.2504 27.5H19.0004V26H22.5044V24H19.0004V19C19.0004 17.6745 17.9688 16.59 16.6647 16.5053L16.5004 16.5H12.0004V12.75C12.0004 11.5591 12.9255 10.5844 14.0963 10.5052L14.2504 10.5H27.7504Z",fill:"white"})))},x=(0,a.forwardRef)(C);var S=n(5970),A=n(8529),T=n(6417);const O=o.ZP.div`
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    .title {
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      color: #344054;
    }
    .desc {
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #98a2b3;
      max-width: 424px;
    }
  }
  .boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
    .box {
      cursor: pointer;
      width: 200px;
      height: 200px;
      background: #f9fafb;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      .icon {
        width: 40px;
        height: 40px;
      }
      .txt {
        padding: 0 21px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #475467;
      }
    }
  }
`;function B(e){let{type:t="chat"}=e;const n=(0,A.CG)((e=>e.server)),[r,i]=(0,a.useState)(!1),[o,c]=(0,a.useState)(!1),[d,h]=(0,a.useState)(!1),p=()=>{c((e=>!e))},g=()=>{h((e=>!e))},_=()=>{i((e=>!e))},F="chat"==t?"Create a Channel to Start a Conversation":"Send a Direct Message",b="chat"==t?p:g;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(O,{children:[(0,T.jsxs)("div",{className:"head",children:[(0,T.jsxs)("h2",{className:"title",children:["Welcome to ",n.name," server"]}),(0,T.jsx)("p",{className:"desc",children:"Here are some steps to help you get started. For more, check out our Getting Started guide"})]}),(0,T.jsxs)("div",{className:"boxes",children:[(0,T.jsxs)("div",{className:"box",onClick:_,children:[(0,T.jsx)(k,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:"Invite your friends or teammates"})]}),(0,T.jsxs)("div",{className:"box",onClick:b,children:[(0,T.jsx)(f,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:F})]}),(0,T.jsxs)("a",{className:"box",href:"#",children:[(0,T.jsx)(x,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:"Download PC and Mobile apps"})]}),(0,T.jsxs)(s.OL,{to:"#",className:"box",children:[(0,T.jsx)(m,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:"Got quesions? Visit our help center "})]})]})]}),o&&(0,T.jsx)(u.Z,{personal:!0,closeModal:p}),d&&(0,T.jsx)(S.Z,{closeModal:g}),r&&(0,T.jsx)(l.Z,{closeModal:_})]})}},6365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r,i,a=n(9184),o=n(4118),s=n(7313);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const l=(e,t)=>{let{title:n,titleId:a,...o}=e;return s.createElement("svg",u({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?s.createElement("title",{id:a},n):null,r||(r=s.createElement("path",{d:"M6.83667 8.33333L6.48667 11.6667H6.4H3.25V13.3333H6.23333L5.8 17.5H7.475L7.91667 13.3333H11.2417L10.8083 17.5H12.4917L12.9333 13.3333H16.6167V11.6667H13.1167L13.2917 10H11.6625L11.4875 11.6667H8.1625L8.5125 8.33333H10.8334V6.66667H8.66667L9.10833 2.5H7.43333L7 6.66667H3.325V8.33333H6.83667Z",fill:"#616161"})),i||(i=s.createElement("path",{d:"M16.6875 4.16675V3.33341C16.6875 2.40008 15.875 1.66675 15 1.66675C14.125 1.66675 13.3333 2.40008 13.3333 3.33341V4.16675C12.8731 4.16675 12.5 4.53985 12.5 5.00008V7.50008C12.5 7.96031 12.8731 8.33341 13.3333 8.33341H15H16.6667C17.1269 8.33341 17.5 7.96031 17.5 7.50008V4.97925C17.5 4.53051 17.1362 4.16675 16.6875 4.16675ZM15.8333 4.16675H14.1667V3.33341C14.1667 2.85722 14.5556 2.50008 15 2.50008C15.4444 2.50008 15.8333 2.85722 15.8333 3.33341V4.16675Z",fill:"#616161"})))},c=(0,s.forwardRef)(l);var d=n(6417);const f=a.ZP.div`
  display: flex;
  &.muted path {
    fill: #d0d5dd;
  }
`,h=e=>{let{personal:t=!1,muted:n=!1,className:r}=e;return(0,d.jsx)(f,{className:`${n?"muted":""} ${r}`,children:t?(0,d.jsx)(c,{}):(0,d.jsx)(o.Z,{})})}},9191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(7313),i=n(3657),a=n(7890),o=n(666),s=n(1140),u=n(6365),l=n(5515);const c=n(9184).ZP.div`
  display: flex;
  max-height: 402px;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: var(--br);
  transition: all 0.5s ease;
  .left {
    width: 260px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
    .search {
      position: sticky;
      top: 0;
      z-index: 99;
      background: #fff;
      border-top-left-radius: var(--br);
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
      padding: 8px;
      width: calc(100% - 1px);
      input {
        outline: none;
        width: -webkit-fill-available;
        padding: 8px;
        font-size: 14px;
        line-height: 20px;
        border: none;
      }
    }
    .users {
      display: flex;
      flex-direction: column;
      height: calc(100% - 52px - 10px);
      overflow-y: scroll;
      .user {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 16px;
        width: -webkit-fill-available;
        border-radius: 4px;
        &:hover {
          background: rgba(116, 127, 141, 0.1);
        }
        > div {
          width: 100%;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    box-sizing: border-box;
    &.private {
      width: 344px;
      justify-content: space-evenly;
      .desc {
        text-align: center;
      }
    }
    > .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 16px;
    }
    .desc {
      font-weight: normal;
      color: #6b7280;
      margin-bottom: 48px;
    }
    .name {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
      margin-bottom: 34px;
      .label {
        font-weight: 600;
        color: #6b7280;
      }
      .input {
        position: relative;
        input {
          width: -webkit-fill-available;
          border: 1px solid #e5e7eb;
          box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
          border-radius: 4px;
          padding: 8px;
          color: #78787c;
          padding-left: 36px;
        }
        .icon {
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .private {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      .txt {
        font-weight: 600;
        color: #6b7280;
      }
      input {
        cursor: pointer;
      }
    }
    .btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
    }
    .normal {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;var d=n(3215),f=n(2479),h=n(1962),p=n(8529),g=n(6417);function _(e){let{personal:t=!1,closeModal:n}=e;const{conactsData:_,loginUid:m}=(0,p.CG)((e=>({conactsData:e.contacts.byId,loginUid:e.authData.uid}))),F=(0,a.s0)(),[b,y]=(0,r.useState)({name:"",dsecription:"",members:[m],is_public:!t}),{contacts:v,input:k,updateInput:w}=(0,f.Z)(),[E,{isSuccess:D,isError:C,isLoading:x,data:S}]=(0,h.db)();(0,r.useEffect)((()=>{C&&i.ZP.error("create new channel failed")}),[C]),(0,r.useEffect)((()=>{D&&(i.ZP.success("create new channel success"),n(),F(`/chat/channel/${S}`))}),[D,S]);const A=e=>{let{currentTarget:t}=e;const{members:n}=b,{uid:r}=t.dataset;let i=n.includes(+r)?n.filter((e=>e!=r)):[...n,+r];y((e=>({...e,members:i})))};if(!_[m])return null;const{name:T,members:O,is_public:B}=b;return(0,g.jsx)(o.Z,{children:(0,g.jsxs)(c,{children:[!B&&(0,g.jsxs)("div",{className:"left",children:[(0,g.jsx)("div",{className:"search",children:(0,g.jsx)("input",{value:k,onChange:e=>{w(e.target.value)},placeholder:"Type Username to search"})}),v&&(0,g.jsx)("ul",{className:"users",children:v.map((e=>{const{uid:t}=e,n=O.includes(t);return(0,g.jsxs)("li",{"data-uid":t,className:"user",onClick:m==t?null:A,children:[(0,g.jsx)(d.Z,{disabled:m==t,readOnly:!0,checked:n,name:"cb",id:"cb"}),(0,g.jsx)(l.Z,{uid:t,interactive:!1})]},t)}))})]}),(0,g.jsxs)("div",{className:"right "+(B?"":"private"),children:[(0,g.jsx)("h3",{className:"title",children:"Create New Channel"}),(0,g.jsx)("p",{className:"desc normal",children:B?"This is a public channel, everyone in this team can see it.":"This is a private channel, only select members will be able to join."}),(0,g.jsxs)("div",{className:"name",children:[(0,g.jsx)("span",{className:"label normal",children:"Channel Name"}),(0,g.jsxs)("div",{className:"input",children:[(0,g.jsx)("input",{onChange:e=>{y((t=>({...t,name:e.target.value})))},value:T,placeholder:"new channel"}),(0,g.jsx)(u.Z,{personal:!B,className:"icon"})]})]}),(0,g.jsxs)("div",{className:"btns",children:[(0,g.jsx)(s.Z,{onClick:n,className:"normal cancel",children:"Cancel"}),(0,g.jsx)(s.Z,{disabled:x,onClick:()=>{b.name?(b.is_public&&delete b.members,E(b)):(0,i.ZP)("please input channel name")},className:"normal",children:"Create"})]})]})]})})}},5515:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(7890),i=n(2963),a=n(8214),o=n(1590),s=n(5920),u=n(5722),l=n(932),c=n(6417);function d(e){let{enable:t=!1,uid:n,cid:r,visible:a,hide:o,children:s}=e;const{canCall:d,call:f,copyEmail:h,canCopyEmail:p,startChat:g,canRemove:_,canRemoveFromChannel:m,removeFromChannel:F,removeUser:b}=(0,u.Z)({uid:n,cid:r});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.ZP,{disabled:!t,visible:a,followCursor:"initial",interactive:!0,placement:"right-start",popperOptions:{strategy:"fixed"},onClickOutside:o,content:(0,c.jsx)(l.Z,{hideMenu:o,items:[{title:"Message",handler:g},d&&{title:"Call",handler:f},p&&{title:"Copy Email",handler:h},m&&{danger:!0,title:"Remove From Channel",handler:F},_&&{danger:!0,title:"Remove From Server",handler:b}]}),children:s},n)})}const f=n(9184).ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  user-select: none;

  &.interactive {
    &:hover,
    &.active {
      background: rgba(116, 127, 141, 0.1);
    }
  }
  .avatar {
    cursor: pointer;
    width: ${e=>{let{size:t}=e;return`${t}px`}};
    height: ${e=>{let{size:t}=e;return`${t}px`}};
    position: relative;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    .status {
      position: absolute;
      bottom: -2px;
      right: -6px;
      width: 12px;
      height: 12px;
      box-sizing: content-box;
      border-radius: 50%;
      border: 2px solid #fff;
      &.online {
        background-color: #22c55e;
      }
      &.offline {
        background-color: #a1a1aa;
      }
      &.alert {
        background-color: #dc2626;
      }
    }
  }
  .name {
    /* user-select: text; */
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #52525b;
  }
  /* session nav */
  &.compact {
    padding: 0;
    .avatar .status {
      width: 15px;
      height: 15px;
    }
  }
`;var h=n(8753),p=n(8529);function g(e){let{cid:t=null,owner:n=!1,dm:u=!1,interactive:l=!0,uid:g="",popover:_=!1,compact:m=!1,avatarSize:F=32,enableContextMenu:b=!1}=e;const y=(0,r.s0)(),{visible:v,handleContextMenuEvent:k,hideContextMenu:w}=(0,h.Z)(),E=(0,p.CG)((e=>e.contacts.byId[g]));return E?(0,c.jsx)(d,{cid:t,uid:g,enable:b,visible:v,hide:w,children:(0,c.jsx)(i.ZP,{inertia:!0,interactive:!0,disabled:!_,placement:"left",trigger:"click",content:(0,c.jsx)(s.Z,{uid:g,type:"card",cid:t}),children:(0,c.jsxs)(f,{onContextMenu:b?k:null,size:F,onDoubleClick:u?()=>{y(`/chat/dm/${g}`)}:null,className:`${l?"interactive":""} ${m?"compact":""}`,children:[(0,c.jsxs)("div",{className:"avatar",children:[(0,c.jsx)(o.Z,{url:E.avatar,name:E.name,alt:"avatar"}),(0,c.jsx)("div",{className:"status "+(E.online?"online":"offline")})]}),!m&&(0,c.jsx)("span",{className:"name",children:null===E||void 0===E?void 0:E.name}),n&&(0,c.jsx)(a.Z,{})]})})}):null}},5970:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7313),i=n(9184),a=n(9466),o=n(8570),s=n(2479),u=n(5515),l=n(666),c=n(6417);const d=i.ZP.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  max-height: 402px;
  background: #fff;
  box-shadow: 0 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  transition: all 0.5s ease;
  /* overflow-y: scroll; */
  .search {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    padding: 8px;
    width: -webkit-fill-available;
    input {
      outline: none;
      width: -webkit-fill-available;
      padding: 8px;
      font-size: 14px;
      line-height: 20px;
      border: none;
    }
  }
  .users {
    display: flex;
    flex-direction: column;
    height: 260px;
    padding: 16px 0;
    overflow-y: scroll;
    .user {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 8px;
      width: -webkit-fill-available;
      &:hover {
        background: rgba(116, 127, 141, 0.1);
      }
      > a {
        width: 100%;
      }
    }
  }
`,f=e=>{let{closeModal:t}=e;const n=(0,r.useRef)(null),{contacts:i,updateInput:f,input:h}=(0,s.Z)();(0,o.O)(n,t);return(0,c.jsx)(l.Z,{children:(0,c.jsxs)(d,{ref:n,children:[(0,c.jsx)("div",{className:"search",children:(0,c.jsx)("input",{value:h,onChange:e=>{f(e.target.value)},placeholder:"Type Username to search"})}),i&&(0,c.jsx)("ul",{className:"users",children:i.map((e=>{const{uid:n}=e;return(0,c.jsx)("li",{className:"user",children:(0,c.jsx)(a.OL,{onClick:t,to:`/chat/dm/${n}`,children:(0,c.jsx)(u.Z,{uid:n,interactive:!1})})},n)}))})]})})}},932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(5281),i=n(6417);const a=e=>{let{items:t=[],hideMenu:n=null}=e;return(0,i.jsx)(r.Z,{children:t.map((e=>{if(!e)return null;const{title:t,icon:r=null,handler:a=(e=>{e.preventDefault(),n&&n()}),underline:o=!1,danger:s=!1}=e;return(0,i.jsxs)("li",{className:`item ${o?"underline":""} ${s?"danger":""}`,onClick:e=>{e.stopPropagation(),e.preventDefault(),a(e),n&&n()},children:[r,t]},t)}))})}},6894:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7313),i=n(9184),a=n(8570),o=n(5290),s=n(2812),u=n(666),l=n(6417);const c=i.F4`
from{
background: transparent;
}
to{
  background: rgba(1, 1, 1, 0.9);
}
`,d=i.ZP.div`
  /* todo */
  transition: all 0.5s ease;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(1, 1, 1, 0.9); */
  animation: ${c} 0.3s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    position: relative;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    > .loading {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
    }
    > .image {
      overflow: auto;
      img {
        max-width: 70vw;
        max-height: 80vh;
        /* width: 100%;
        height: 100%;
        object-fit: contain; */
      }
    }
    &.loading .image img {
      filter: blur(2px);
    }
    .origin {
      font-weight: bold;
      font-size: 14px;
      color: #aaa;
      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
`;function f(e){let{download:t=!0,data:n,closeModal:i}=e;const[c,f]=(0,r.useState)(null===n||void 0===n?void 0:n.thumbnail),[h,p]=(0,r.useState)(!0),g=(0,r.useRef)();if((0,a.O)(g,i),(0,o.z)("Escape",(()=>{i()}),{eventTypes:["keyup"]}),(0,r.useEffect)((()=>{if(n){const{originUrl:e}=n;e||p(!1);const t=new Image;t.src=e,t.onload=()=>{f(e),p(!1)},t.onerror=()=>{p(!1)}}}),[n]),!n)return null;const{originUrl:_,downloadLink:m,name:F,type:b}=n;return(0,l.jsx)(u.Z,{children:(0,l.jsx)(d,{children:(0,l.jsxs)("div",{className:"box "+(h?"loading":""),ref:g,children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:c,alt:"preview",className:"animate__animated animate__fadeIn animate__faster"})}),t&&(0,l.jsx)("a",{className:"origin",download:F,type:b,href:m||_,rel:"noreferrer",children:"Download original"}),h&&(0,l.jsx)("div",{className:"loading",children:(0,l.jsx)(s.Z,{})})]})})})}},4649:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(9184),i=n(7313),a=n(3657),o=n(3165),s=n(1140),u=n(4050),l=n(6417);const c=r.ZP.div`
  padding: 16px 0;
  .input {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    > .copy {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
      padding-right: 8px;
      background: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #22ccee;
      &:hover {
        color: #088ab2;
      }
    }
    input {
      padding-right: 80px;
      &.invite {
        padding-right: 50px;
      }
    }
  }
  > .invite {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
    /* position: relative; */
  }
  > .link {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
    /* position: relative; */
  }
  label {
    color: #6b7280;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  > .tip {
    color: #344054;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    button {
      background: none;
      border: none;
      color: #22ccee;
    }
  }
`;function d(e){let{cid:t=null}=e;const[n,r]=(0,i.useState)(""),{enableSMTP:d,linkCopied:f,link:h,copyLink:p,generateNewLink:g,generating:_}=(0,o.Z)(t);(0,i.useEffect)((()=>{f&&a.ZP.success("Invite Link Copied!")}),[f]);return(0,l.jsxs)(c,{children:[(0,l.jsxs)("div",{className:"invite",children:[(0,l.jsx)("label",{htmlFor:"",children:"Invite by Email"}),(0,l.jsxs)("div",{className:"input",children:[(0,l.jsx)(u.Z,{value:n,onChange:e=>{r(e.target.value)},disabled:!d,type:"email",placeholder:d?"Enter Email":"Enable SMTP First"}),(0,l.jsx)(s.Z,{disabled:!d||!n,className:"send",children:"Send"})]})]}),(0,l.jsxs)("div",{className:"link",children:[(0,l.jsx)("label",{htmlFor:"",children:"Or Send invite link to your friends"}),(0,l.jsxs)("div",{className:"input",children:[(0,l.jsx)(u.Z,{readOnly:!0,className:"invite",placeholder:"Generating",value:h}),(0,l.jsx)("button",{className:"copy",onClick:p,children:"Copy"})]})]}),(0,l.jsxs)("div",{className:"tip",children:["Invite link expires in 7 days."," ",(0,l.jsx)("button",{disabled:_,className:"new",onClick:g,children:"Generate New Link"})]})]})}var f=n(3709),h=n(5515),p=n(3215),g=n(1962),_=n(5044),m=n(2479);const F=r.ZP.div`
  padding-top: 16px;
  > .filter {
    width: 376px;
    min-height: 40px;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 4px;
    .selects {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      width: 100%;
      overflow: scroll;

      /* white-space: nowrap; */
      &::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        height: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
      .select {
        padding: 4px 6px;
        background: #52edff;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        .close {
          cursor: pointer;
          width: 12px;
          height: 12px;
          path {
            fill: #fff;
            fill-opacity: 1;
          }
          /* filter: invert(1); */
        }
      }
      .input {
        width: fit-content;
      }
    }
  }
  .users {
    display: flex;
    flex-direction: column;
    /* height: 260px; */
    padding-bottom: 20px;
    max-height: 364px;
    overflow: scroll;
    .user {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 4px 8px;
      /* margin: 0 4px; */
      width: -webkit-fill-available;
      border-radius: 8px;
      &:hover {
        background: rgba(116, 127, 141, 0.1);
      }
      > div {
        width: 100%;
      }
    }
  }
  > .btn {
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;function b(e){let{cid:t=null,closeModal:n}=e;const[r,{isLoading:o,isSuccess:c}]=(0,g.Hj)(),[d,b]=(0,i.useState)([]),{channel:y,contactData:v}=(0,f.v9)((e=>({channel:e.channels.byId[t],contactData:e.contacts.byId})));(0,i.useEffect)((()=>{c&&(a.ZP.success("Add members successfully!"),n())}),[c]);const{input:k,updateInput:w,contacts:E=[]}=(0,m.Z)(),D=e=>{let{currentTarget:t}=e;const{uid:n}=t.dataset;d.includes(+n)?b((e=>e.filter((e=>e!=n)))):b([...d,+n])};if(!y)return null;const{members:C}=y,x=E.map((e=>{let{uid:t}=e;return t}));return(0,l.jsxs)(F,{children:[(0,l.jsx)("div",{className:"filter",children:(0,l.jsxs)("ul",{className:"selects",children:[d.map((e=>(0,l.jsxs)("li",{className:"select",children:[v[e].name,(0,l.jsx)(_.Z,{"data-uid":e,onClick:D,className:"close"})]},e))),(0,l.jsx)(u.Z,{autoFocus:!0,type:"text",className:"input none",value:k,onChange:e=>{w(e.target.value)}})]})}),(0,l.jsx)("ul",{className:"users",children:x.map((e=>{const t=C.includes(e);return(0,l.jsxs)("li",{"data-uid":e,className:"user",onClick:t?null:D,children:[(0,l.jsx)(p.Z,{disabled:t,readOnly:!0,checked:t||d.includes(e),name:"cb",id:"cb"}),(0,l.jsx)(h.Z,{uid:e,interactive:!1})]},e)}))}),(0,l.jsxs)(s.Z,{disabled:0==d.length||o,className:"btn",onClick:()=>{r({id:t,members:d})},children:[o?"Adding":"Add"," to #",y.name]})]})}var y=n(666),v=n(8529);const k=r.ZP.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: var(--br);
  padding: 16px;
  min-width: 408px;
  > .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #374151;
    .close {
      cursor: pointer;
    }
  }
`;function w(e){let{type:t="server",cid:n=null,title:r="",closeModal:i}=e;const{channel:a,server:o}=(0,v.CG)((e=>({channel:e.channels.byId[n],server:e.server}))),s="server"==t?o.name:`#${r||(null===a||void 0===a?void 0:a.name)}`;return(0,l.jsx)(y.Z,{children:(0,l.jsxs)(k,{children:[(0,l.jsxs)("h2",{className:"title",children:["Add friends to ",s,(0,l.jsx)(_.Z,{className:"close",onClick:i})]}),!(null!==a&&void 0!==a&&a.is_public)&&(0,l.jsx)(b,{cid:n,closeModal:i}),(0,l.jsx)(d,{cid:null!==a&&void 0!==a&&a.is_public?null:n})]})})}},3469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(7313),i=n(9184),a=n(9603),o=n(9829),s=n(1590),u=n(2340),l=n(6417);const c=i.ZP.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  background-color: #f4f4f5;
`,d=e=>{let{id:t}=e;const{favorites:n}=(0,u.Z)({}),[i,d]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=n.find((e=>e.id==t)),{messages:r}=e||{};if(r){const e=r.map((e=>{let{from_mid:t}=e;return t}))||[];d((0,l.jsx)(c,{"data-favorite-mids":e.join(","),className:"favorite",children:(0,l.jsx)("div",{className:"list",children:r.map(((e,t)=>{const{user:n={},download:r,content:i,content_type:u,properties:c,thumbnail:d}=e;return(0,l.jsxs)(a.Z,{className:"archive",children:[n&&(0,l.jsx)("div",{className:"avatar",children:(0,l.jsx)(s.Z,{url:n.avatar,name:n.name})}),(0,l.jsxs)("div",{className:"details",children:[(0,l.jsx)("div",{className:"up",children:(0,l.jsx)("span",{className:"name",children:null===n||void 0===n?void 0:n.name})}),(0,l.jsx)("div",{className:"down",children:(0,o.Z)({download:r,content:i,content_type:u,properties:c,thumbnail:d})})]})]},t)}))})}))}}),[n,t]),t?i:null}},7314:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(2963),i=n(9184),a=n(5920),o=n(8529),s=n(6417);const u=i.ZP.span`
  padding: 0 2px;
  color: #1fe1f9;
  &.clickable {
    cursor: pointer;
  }
`,l=e=>{let{uid:t,popover:n=!0,cid:i,textOnly:l=!1}=e;const c=(0,o.CG)((e=>e.contacts.byId))[t];return c?l?`@${c.name}`:(0,s.jsx)(r.ZP,{disabled:!n,interactive:!0,placement:"top",trigger:"click",content:(0,s.jsx)(a.Z,{uid:t,type:"card",cid:i}),children:(0,s.jsx)(u,{className:n?"clickable":"",children:`@${c.name}`})}):null}},9829:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(7313),i=n(4385),a=n(658),o=n.n(a),s=n(7560),u=n.n(s),l=n(7935),c=n(7314),d=n(9184),f=n(9603),h=n(1590),p=n(7275),g=n(7990),_=n(3114);var m=n(6417);const F=d.ZP.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  background-color: #f4f4f5;
  > .tip {
    padding: 8px 8px 0 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    .icon {
      width: 16px;
      height: 16px;
      path {
        fill: #98a2b3;
      }
    }
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #98a2b3;
  }
`,b=e=>{let{context:t,to:n,from_uid:i,id:a}=e;const{normalizeMessage:o,messages:s}=function(){const[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)(null),[a,{data:o,isError:s,isLoading:u,isSuccess:l}]=(0,_.uv)();return(0,r.useEffect)((()=>{if(o&&l){const t=(0,g.Hr)(o,e);i(t)}}),[o,l,e]),(0,r.useEffect)((()=>{e&&a(e)}),[e]),{normalizeMessage:e=>{t(e)},messages:n,isError:s,isLoading:u,isSuccess:l}}(),[u,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{a&&o(a)}),[a]),(0,r.useEffect)((()=>{if(s){const e=s.map((e=>{let{from_mid:t}=e;return t}))||[];l((0,m.jsxs)(F,{"data-forwarded-mids":e.join(","),children:[(0,m.jsxs)("h4",{className:"tip",children:[(0,m.jsx)(p.Z,{className:"icon"}),"Forwarded"]}),(0,m.jsx)("div",{className:"list",children:s.map(((e,r)=>{const{user:a={},download:o,content:s,content_type:u,properties:l,thumbnail:c}=e;return(0,m.jsxs)(f.Z,{className:"archive",children:[a&&(0,m.jsx)("div",{className:"avatar",children:(0,m.jsx)(h.Z,{url:a.avatar,name:a.name})}),(0,m.jsxs)("div",{className:"details",children:[(0,m.jsx)("div",{className:"up",children:(0,m.jsx)("span",{className:"name",children:null===a||void 0===a?void 0:a.name})}),(0,m.jsx)("div",{className:"down",children:Z({download:o,context:t,to:n,from_uid:i,content:s,content_type:u,properties:l,thumbnail:c})})]})]},r)}))})]}))}}),[s,t,n,i]),a?u:null};var y=n(3627),v=n(9694),k=n.n(v),w=n(3709);const E=d.ZP.div`
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  width: 370px;
  height: 66px;
  /* height: fit-content; */
  &.sending {
    /* opacity: 0.9; */
  }
  * {
    user-select: text;
  }
  .basic {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    .icon {
      width: 36px;
      height: 48px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      overflow: hidden;
      .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #1c1c1e;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .details {
        white-space: nowrap;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #616161;
        display: flex;
        gap: 16px;
        .from strong {
          font-weight: bold;
        }
      }
    }
    .download {
      white-space: nowrap;
    }
    .cancel {
      cursor: pointer;
    }
  }
`;var D=function(e,t){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},D(e,t)};function C(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},s,S({pathRadius:a,dashRatio:i,counterClockwise:n})),d:x({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function x(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function S(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}D(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,a=e.counterClockwise,o=e.styles,s=e.strokeWidth,u=e.text,l=this.getPathRadius(),c=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(C,{className:i.trail,counterClockwise:a,dashRatio:t,pathRadius:l,strokeWidth:s,style:o.trail}),(0,r.createElement)(C,{className:i.path,counterClockwise:a,dashRatio:c*t,pathRadius:l,strokeWidth:s,style:o.path}),u?(0,r.createElement)("text",{className:i.text,style:o.text,x:50,y:50},u):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function T(e){var t=e.rotation,n=e.strokeLinecap,r=e.textColor,i=e.textSize,a=e.pathColor,o=e.pathTransition,s=e.pathTransitionDuration,u=e.trailColor,l=e.backgroundColor,c=null==t?void 0:"rotate("+t+"turn)",d=null==t?void 0:"center center";return{root:{},path:O({stroke:a,strokeLinecap:n,transform:c,transformOrigin:d,transition:o,transitionDuration:null==s?void 0:s+"s"}),trail:O({stroke:u,strokeLinecap:n,transform:c,transformOrigin:d}),text:O({fill:r,fontSize:i}),background:O({fill:l})}}function O(e){return Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),e}const B=d.ZP.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  > img {
    max-width: 480px;
    cursor: zoom-in;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .progress {
      width: 15px;
      height: 15px;
      .CircularProgressbar-path {
        stroke: #444;
      }
    }
  }
`;function I(e){let{uploading:t,progress:n,thumbnail:i,download:a,content:o,properties:s={}}=e;const[u,l]=(0,r.useState)(i),{width:c=0,height:d=0}=(0,g.CW)(s);return(0,r.useEffect)((()=>{const e=i,t=new Image;t.onload=()=>{l(e)},t.onerror=()=>{l("")},t.src=e}),[i]),(0,m.jsxs)(B,{children:[t&&(0,m.jsx)("div",{className:"overlay",children:(0,m.jsx)("div",{className:"progress",children:(0,m.jsx)(A,{value:n,strokeWidth:50,styles:T({storke:"#000",strokeLinecap:"butt"})})})}),(0,m.jsx)("img",{className:"img preview",style:{width:c?`${c}px`:"",height:d?`${d}px`:""},"data-meta":JSON.stringify(s),"data-origin":o,"data-download":a,src:u})]})}var N=n(3820),R=n(1444),P=n(986);var j=n(6716),L=n(8963);const M=d.ZP.div`
  background: #ecfdff;
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
  .progress {
    transition: all 0.25s ease;
    height: 8px;
    background: #088ab2;
    border-radius: 4px;
  }
`,q=e=>{let{value:t,width:n="100%"}=e;return(0,m.jsx)(M,{style:{width:n},children:(0,m.jsx)("div",{className:"progress",style:{width:`${t}%`}})})};var z=n(6544),U=n(9930);o().extend(k());const H=e=>e.startsWith("blob:");function $(e){let{context:t="",to:n=null,created_at:i,from_uid:a=null,content:s="",download:u="",thumbnail:l="",properties:c={local_id:0,name:"",size:0,content_type:""}}=e;const[d,f]=(0,r.useState)(null),[h,p]=(0,r.useState)(!1),_=function(e){let{context:t="user",id:n=0}=e;const r=(0,w.I0)(),i="channel"==t?R.nF:P.Fs;return e=>{r(i({id:n,mid:e})),r((0,N.Gd)(e))}}({context:t,id:n}),{sendMessage:F,isSuccess:b,isSending:y}=(0,L.Z)({context:t,from:a,to:n}),{stopUploading:v,data:k,uploadFile:D,progress:C,isSuccess:x}=(0,j.Z)(),S=(0,w.v9)((e=>e.contacts.byId[a])),{size:A,name:T,content_type:O}=null!==c&&void 0!==c?c:{};(0,r.useEffect)((()=>{H(s)&&(async e=>{let{url:t,name:n,type:r}=e;try{if(p(!0),r.startsWith("image")){const e=await(0,g.Ad)(t);f(e)}let e=await fetch(t).then((e=>e.blob())).then((e=>new File([e],n,{type:r})));await D(e),p(!1)}catch(i){p(!1)}})({url:s,name:T,type:O})}),[s,T,O]),(0,r.useEffect)((()=>{const e=null!==c&&void 0!==c?c:{},t=d?{...e,...d}:e;if(x&&H(s)){const{path:e}=k;F({ignoreLocal:!0,type:"file",content:{path:e},properties:t})}}),[x,k,c,s]),(0,r.useEffect)((()=>{b&&URL.revokeObjectURL(s)}),[b,s]);if(!c)return null;const B=(0,g.LP)(O,T);if(!s||!T)return null;const M=h||y;return(0,g.Or)(O,A)?(0,m.jsx)(I,{uploading:M,progress:C,properties:{...d,...c},size:A,content:s,download:u,thumbnail:l},null===c||void 0===c?void 0:c.local_id):(0,m.jsx)(E,{className:"file_message "+(M?"sending":""),children:(0,m.jsxs)("div",{className:"basic",children:[B,(0,m.jsxs)("div",{className:"info",children:[(0,m.jsx)("span",{className:"name",children:T}),(0,m.jsx)("span",{className:"details",children:M?(0,m.jsx)(q,{value:C,width:"80%"}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("i",{className:"size",children:(0,g.td)(A)}),(0,m.jsx)("i",{className:"time",children:o()(i).fromNow()}),S&&(0,m.jsxs)("i",{className:"from",children:["by ",(0,m.jsx)("strong",{children:S.name})]})]})})]}),M?(0,m.jsx)(U.Z,{className:"cancel",onClick:()=>{v(),URL.revokeObjectURL(s),_(c.local_id)}}):(0,m.jsx)("a",{className:"download",download:T,href:`${s}&download=true`,children:(0,m.jsx)(z.Z,{})})]})})}const W=d.ZP.a`
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 380px;
  .favicon {
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    img {
      /* width: 100%;
      height: 100%; */
      object-fit: contain;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #1c1c1e;
    }
    .desc {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
    }
    .link {
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
      color: #616161;
    }
    .dots {
      width: 288px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,V=d.ZP.a`
  width: 380px;
  padding: 12px;
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #06aed4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .desc {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #616161;
    margin-bottom: 8px;
    width: 356px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .image {
    width: 100%;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;function G(e){let{url:t=""}=e;const[n,i]=(0,r.useState)(""),[a]=(0,_.rf)(),[o,s]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async e=>{var t;const{data:n}=await a(e),r=n.title||n.site_name,o=n.description,u=(null===(t=n.images.find((e=>!!e.url)))||void 0===t?void 0:t.url)||"",l=n.favicon_url||`${new URL(e).origin}/favicon.ico`;i(l),s({title:r,description:o,ogImage:u})})(t)}),[t]);if(!t||!o||!o.title)return null;const{title:u,description:l,ogImage:c}=o;return c?(0,m.jsxs)(V,{href:t,target:"_blank",children:[(0,m.jsx)("h3",{className:"title",children:u}),(0,m.jsx)("p",{className:"desc dots",children:l}),(0,m.jsx)("div",{className:"image",children:(0,m.jsx)("img",{src:c,alt:"og image"})})]}):(0,m.jsxs)(W,{href:t,target:"_blank",children:[n&&(0,m.jsx)("div",{className:"favicon",children:(0,m.jsx)("img",{onError:()=>{i("")},src:n,alt:"favicon"})}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsx)("h3",{className:"title",children:u}),(0,m.jsx)("p",{className:"desc dots",children:l}),(0,m.jsx)("span",{className:"link dots",children:t})]})]})}const Z=e=>{let{context:t=null,to:n=null,from_uid:a,created_at:s,properties:d,content_type:f,content:h,download:p,thumbnail:g,edited:_=!1}=e,F=null;switch(f){case l.bT.text:F=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Z,{componentDecorator:(e,t,n)=>(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)("a",{className:"link",target:"_blank",href:e,rel:"noreferrer",children:t},n),!e.startsWith("mailto")&&(0,m.jsx)(G,{url:e})]},n),children:u()(h,/(\s{1}@[0-9]+\s{1})/g,((e,t)=>{const r=e.trim().slice(1);return(0,m.jsx)(c.Z,{uid:r,cid:n},t)}))}),_&&(0,m.jsx)("span",{className:"edited",title:o()(_).format("YYYY-MM-DD h:mm:ss A"),children:"(edited)"})]});break;case l.bT.markdown:F=(0,m.jsx)(y.Z,{content:h});break;case l.bT.file:F=(0,m.jsx)($,{properties:d,context:t,to:n,download:p,thumbnail:g,from_uid:a,created_at:s,content:h});break;case l.bT.archive:F=(0,m.jsx)(b,{properties:d,context:t,to:n,from_uid:a,created_at:s,id:h,thumbnail:g})}return F}},9603:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9184).ZP.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 4px 8px;
  margin: 8px 0;
  border-radius: 8px;
  /* content-visibility: auto;
  contain-intrinsic-size: auto 150px; */
  /* &.in_view {
    content-visibility: visible;
  } */
  &[data-highlight="true"] {
    background: #f5f6f7;
  }
  &.pinned {
    background: #ecfdff;
  }
  &:hover,
  &.contextVisible,
  &.preview {
    /* content-visibility: inherit;
    contain-intrinsic-size: inherit; */
    background: #f5f6f7;
    .cmds {
      visibility: visible;
    }
  }
  &.readonly:hover {
    background: none;
  }
  > .avatar {
    flex-shrink: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  > .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .up {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      .name {
        color: #06b6d4;
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
      }
      .time {
        color: #bfbfbf;
        font-size: 12px;
        line-height: 18px;
      }
    }
    .down {
      user-select: text;
      color: #374151;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
      white-space: pre-wrap;
      .edited {
        margin-left: 5px;
        color: #999;
        font-size: 10px;
      }
      &.sending {
        opacity: 0.9;
      }
      > .link {
        text-decoration: none;
        border-radius: 2px;
        /* background-color: #f5feff; */
        padding: 2px;
        color: #1fe1f9;
      }
    }
  }
  &.archive {
    gap: 8px;
    .avatar {
      width: 24px;
      height: 24px;
    }
    > .details {
      gap: 0;
      .up .name {
        font-weight: 600;
        color: #475467;
      }
      .down {
        color: #475467;
      }
    }
  }
  &.pinned {
    padding-top: 26px;
    > .details {
      position: relative;
      &:before {
        position: absolute;
        left: 0;
        top: -4px;
        transform: translateY(-100%);
        content: attr(data-pin-tip);
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #98a2b3;
      }
    }
  }
`},666:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7313),i=n(1168);function a(e){let{id:t="root-modal",mask:n=!0,children:a}=e;const[o,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById(t);n&&e.classList.add("mask");const r=document.createElement("div");return r.classList.add("wrapper"),e.appendChild(r),s(r),()=>{e.removeChild(r)}}),[t,n]),o?(0,i.createPortal)(a,o):null}},3627:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(7313),i=(n(6081),n(5185),n(4334)),a=n.n(i),o=n(7072),s=n(9184),u=n(6894),l=n(6417);const c=s.ZP.div`
  * {
    user-select: text;
  }
  .toastui-editor-contents {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`,d=e=>{let{content:t}=e;const n=(0,r.useRef)(null),[i,s]=(0,r.useState)(null);(0,r.useEffect)((()=>{const e=null===n||void 0===n?void 0:n.current;e&&e.addEventListener("click",(e=>{e.stopPropagation();const{target:t}=e;if("IMG"==t.nodeName){const e=new URL(t.src),n=`${e.origin}${e.pathname}?file_path=${e.searchParams.get("file_path")}`;s({originUrl:n})}}),!0)}),[]);return(0,l.jsxs)(l.Fragment,{children:[i&&(0,l.jsx)(u.Z,{download:!1,data:i,closeModal:()=>{s(null)}}),(0,l.jsx)(c,{ref:n,children:(0,l.jsx)(o.A,{initialValue:t,plugins:[a()]})})]})}},5920:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r,i=n(9466),a=n(2963),o=n(7313);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(e,t)=>{let{title:n,titleId:i,...a}=e;return o.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),n?o.createElement("title",{id:i},n):null,r||(r=o.createElement("path",{d:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3596 22 8.77516 21.6039 7.35578 20.8583L3.06538 21.9753C2.6111 22.0937 2.1469 21.8213 2.02858 21.367C1.99199 21.2266 1.99198 21.0791 2.02855 20.9386L3.1449 16.6502C2.3972 15.2294 2 13.6428 2 12C2 6.47715 6.47715 2 12 2Z",fill:"#22CCEE"})))},l=(0,o.forwardRef)(u);var c;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const f=(e,t)=>{let{title:n,titleId:r,...i}=e;return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,c||(c=o.createElement("path",{d:"M7.7716 2.43923L8.84819 2.09522C9.85701 1.77287 10.9349 2.29382 11.3669 3.31256L12.2266 5.33991C12.6013 6.22336 12.3934 7.26227 11.7126 7.9084L9.81832 9.70641C9.9352 10.7819 10.2967 11.8409 10.9029 12.8834C11.509 13.9259 12.266 14.7907 13.1739 15.4778L15.4491 14.7191C16.3115 14.4315 17.2507 14.762 17.7797 15.5392L19.0121 17.3498C19.627 18.2532 19.5164 19.4995 18.7534 20.2655L17.9356 21.0865C17.1217 21.9036 15.9592 22.2 14.8838 21.8645C12.3449 21.0726 10.0106 18.7214 7.88083 14.8109C5.74796 10.8947 4.99521 7.57214 5.62258 4.84313C5.88658 3.69482 6.70409 2.78033 7.7716 2.43923Z",fill:"#70707B"})))},h=(0,o.forwardRef)(f);var p;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const _=(e,t)=>{let{title:n,titleId:r,...i}=e;return o.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,p||(p=o.createElement("path",{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z",fill:"#616161"})))},m=(0,o.forwardRef)(_);var F=n(1590);const b=n(9184).ZP.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 432px;
  gap: 4px;
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    user-select: text;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    color: #1c1c1e;
  }
  .email {
    user-select: text;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #98a2b3;
  }
  .intro {
    color: #344054;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .icons {
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    .icon {
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #22ccee;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      background: #f9fafb;
      border-radius: 8px;
      width: 128px;
      padding: 14px 0 12px 0;

      &:not(.disabled):hover {
        background: #f2f4f7;
      }
      &.call,
      &.more {
        svg path {
          fill: #22ccee;
        }
      }
      &.disabled {
        color: #667085;
        svg path {
          fill: #667085;
        }
      }
      .txt {
        user-select: none;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.card {
    padding: 16px;
    width: 280px;
    background: #ffffff;
    box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 6px;
    .icons {
      padding-bottom: 2px;
    }
  }
`;var y=n(5281),v=n(5722),k=n(8529),w=n(6417);const E=e=>{let{uid:t=null,type:n="embed",cid:r=null}=e;const{canCall:o,call:s,canCopyEmail:u,copyEmail:c,removeFromChannel:d,canRemoveFromChannel:f,canRemove:p,removeUser:g}=(0,v.Z)({uid:t,cid:r}),{data:_}=(0,k.CG)((e=>({data:e.contacts.byId[t]})));if(!_)return null;const{name:E,email:D,avatar:C}=_,x="card"==n&&o,S="embed"==n&&p,A=x||D||f||S;return(0,w.jsxs)(b,{className:n,children:[(0,w.jsx)(F.Z,{className:"avatar",url:C,name:E}),(0,w.jsx)("h2",{className:"name",children:E}),(0,w.jsx)("span",{className:"email",children:D}),(0,w.jsxs)("ul",{className:"icons",children:[(0,w.jsx)(i.OL,{to:`/chat/dm/${t}`,children:(0,w.jsxs)("li",{className:"icon chat",children:[(0,w.jsx)(l,{}),(0,w.jsx)("span",{className:"txt",children:"Message"})]})}),x&&(0,w.jsxs)("li",{className:"icon call",onClick:s,children:[(0,w.jsx)(h,{}),(0,w.jsx)("span",{className:"txt",children:"Call"})]}),(0,w.jsx)(a.ZP,{disabled:!A,interactive:!0,popperOptions:{strategy:"fixed"},placement:"bottom-start",trigger:"click",hideOnClick:!0,content:(0,w.jsxs)(y.Z,{children:[x&&(0,w.jsx)("li",{className:"item",onClick:s,children:"Call"}),u&&(0,w.jsx)("li",{className:"item",onClick:c,children:"Copy Email"}),f&&(0,w.jsx)("li",{className:"item danger",onClick:d,children:"Remove from Channel"}),S&&(0,w.jsx)("li",{className:"item danger",onClick:g,children:"Remove from Server"})]}),children:(0,w.jsxs)("li",{className:"icon more "+(A?"":"disabled"),children:[(0,w.jsx)(m,{}),(0,w.jsx)("span",{className:"txt",children:"More"})]})})]})]})}},9265:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(2963),i=n(9184),a=n(6417);const o=i.ZP.div`
  position: relative;
  background: #fff;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #1d2939;
  border-radius: var(--br);
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  &::after {
    background-color: inherit;
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 1px;
    transform-origin: center;
  }
  &.right::after {
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
  &.top::after {
    left: 50%;
    bottom: 0;
    transform: translate3d(-50%, 50%, 0) rotate(45deg);
  }
  &.bottom::after {
    top: 0;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
`,s=e=>{let{tip:t="",placement:n="right",delay:i=null,children:s,...u}=e;return(0,a.jsx)(r.ZP,{offset:[0,18],duration:i?[300,250]:0,delay:null!==i&&void 0!==i?i:[150,0],placement:n,content:(0,a.jsx)(o,{className:n,children:t}),...u,children:s})}},1140:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9184).ZP.button`
  cursor: pointer;
  padding: 10px 14px;
  border: none;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: var(--br, 4px);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background-color: #22ccee;
  &.flex {
    width: 100%;
  }
  &:hover,
  &:active {
    background-color: #06aed4;
  }
  &:focus {
    background-color: #22ccee;
  }
  &:disabled {
    background-color: #d0d5dd;
  }
  &.small {
    padding: 8px 14px;
    font-size: 14px;
    line-height: 20px;
  }
  &.mini {
    padding: 4px 10px;
    font-size: 12px;
    line-height: 18px;
  }
  &.danger {
    border: none;
    background-color: #ef4444;
    color: #fff;
    &:disabled {
      background-color: #fecdca;
    }
  }
  &.ghost {
    border: 1px solid #1fe1f9;
    background: none;
    color: #1fe1f9;
  }
  &.border_less {
    box-shadow: none;
    border: none;
  }
  &.cancel {
    border: 1px solid #e5e7eb;
    background: none;
    color: #374151;
  }
`},3215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9184),i=n(6417);const a=r.ZP.input`
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* Not removed via appearance */
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  place-content: center;
  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 4px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 10px 10px #1fe1f9;
  }
  &:checked {
    border-color: #1fe1f9;
    &:before {
      transform: scale(1);
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`;function o(e){return(0,i.jsx)(a,{readOnly:!0,...e,type:"checkbox"})}},4050:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7313),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),u(e.child))}}function c(e){var t=function(t){var n,i=e.attr,a=e.size,u=e.title,l=s(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}function d(e){return l({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}},{tag:"path",attr:{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(e)}function f(e){return l({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}}]})(e)}var h=n(9184),p=n(6417);const g=h.ZP.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);

  .prefix {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ca3af;
    background: #f3f4f6;
    border-right: 1px solid #e5e7eb;
  }

  .view {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,_=h.ZP.input`
  width: 100%;
  background: #ffffff;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  padding: 8px;
  outline: none;

  &:not(.inner) {
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  }

  &.large {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 8px;
  }

  &.none {
    outline: none;
    border: none;
    background: none;
    box-shadow: none;
  }

  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }

  &::placeholder {
    color: #d1d5db;
  }

  &[type="password"] {
    padding-right: 30px;
  }
`,m=e=>{let{type:t="text",prefix:n="",className:i,...a}=e;const[o,s]=(0,r.useState)(t);return"password"==t?(0,p.jsxs)(g,{className:i,children:[(0,p.jsx)(_,{type:o,className:`inner ${i}`,...a}),(0,p.jsx)("div",{className:"view",onClick:()=>{s((e=>"password"==e?"text":"password"))},children:"password"==o?(0,p.jsx)(d,{color:"#78787c"}):(0,p.jsx)(f,{color:"#78787c"})})]}):n?(0,p.jsxs)(g,{className:i,children:[(0,p.jsx)("span",{className:"prefix",children:n}),(0,p.jsx)(_,{className:`inner ${i}`,type:o,...a})]}):(0,p.jsx)(_,{type:o,className:i,...a})}},5281:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9184).ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0 20px 25px 20px rgba(31, 41, 55, 0.1), 0 10px 10px rgba(31, 41, 55, 0.04);
  border-radius: 12px;
  min-width: 200px;
  .item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px;
    padding: 6px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
    .icon {
      width: 20px;
      height: 20px;
      path {
        fill: #475467;
      }
    }
    &.sb {
      justify-content: space-between;
    }
    &:hover {
      background-color: #22ccee;
      color: #fff;
      .icon {
        path {
          fill: #fff;
        }
      }
    }
    &.underline {
      margin-bottom: 9px;
      &:before {
        position: absolute;
        content: "";
        left: 6px;
        bottom: -4px;
        display: block;
        padding: 0 6px;
        box-sizing: border-box;
        width: calc(100% - 12px);
        height: 1px;
        background-color: #f2f4f7;
      }
    }
    &.danger {
      color: #a11043;
      &:hover {
        background-color: #b42318;
        color: #fff;
      }
    }
    &[data-disabled="true"] {
      color: #a4a8b3;
      .icon {
        path {
          fill: #a4a8b3;
        }
      }
    }
  }
`},6571:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9184),i=n(6417);const a=r.ZP.div`
  padding: 32px;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 8px;
  background-color: #fff;
  min-width: 440px;
  &.compact {
    padding: 16px;
    min-width: 406px;
    .title,
    .desc {
      text-align: left;
    }
  }
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #374151;
    margin-bottom: 16px;
  }
  .desc {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    margin-bottom: 8px;
  }
  .btns {
    padding-top: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
  }
  [class^='toastui-editor-'] {
    .toastui-editor-md-container {
      border-bottom: none;

      .toastui-editor-md-preview {
        padding-right: 0;
        padding-left: 8px;
      }

      .toastui-editor-md-splitter {
        background-color: #D0D5DD;
      }

      .ProseMirror {
        height: 100%;
      }
    }

    * {
      margin: 0;
      padding: 0;
    }

    .ProseMirror, p, .toastui-editor.md-mode {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #475467;
      margin: 0 0 16px;
      word-break: break-all;
    }

    a {
      background-color: transparent;
    }

    pre {
      width: 100%;
      width: -webkit-fill-available;
    }

    blockquote {
      border-left: none;
      display: flex;
      margin-top: 0;
      margin-bottom: 10px;
      padding: 0;
      padding: 16px;
      color: #98a2b3;
      opacity: 0.8;
      box-shadow: inset 2px 0px 0px #a8b0bd;
      align-items: center;

      > p {
        padding-right: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
      }

      > blockquote {
        padding: 14px;
      }
    }

    img {
      cursor: pointer;
      max-width: 300px;
      display: block;
    }

    ul {
      white-space: nowrap;
      margin-top: 0;
      margin-bottom: 10px;
      /* display: flex;
      flex-direction:column;
      margin-left: 20px; */

      > li:before {
        margin-top: 8px;
        margin-left: -14px;
        background-color: #475467;
      }

      /* list-style-type: disc; */

    }

    ul,
    ol {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #475467;
      /* list-style-position: inside; */
    }

    h1,
    h2,
    h3, [class*='heading'] {
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-weight: 700;
      color: #475467;
    }

    h1, [class*='heading1'] {
      margin-top: 0 !important;
      font-size: 24px;
      line-height: 32px;
    }

    h2, [class*='heading2'] {
      font-size: 20px;
      line-height: 30px;
    }

    h3, [class*='heading3'] {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;var ft=n(9466),ht=n(7890),pt=n(3709);const gt=a.ZP.div`
  display: flex;
`;function _t(){return(0,d.jsx)(gt,{children:"404 page"})}var mt=n(2509),Ft=n(8529);const bt=e=>{let{children:t,redirectTo:n="/login"}=e;const{isLoading:r}=(0,mt.cZ)(),{token:i,initialized:a}=(0,Ft.CG)((e=>e.authData));return r?null:a?i?t:(0,d.jsx)(ht.Fg,{to:n,replace:!0}):(0,d.jsx)(ht.Fg,{to:"/onboarding",replace:!0})},yt=e=>{let{children:t,redirectTo:n="/"}=e;const{isLoading:r}=(0,mt.cZ)(),{token:i,initialized:a}=(0,Ft.CG)((e=>e.authData));return r?null:a?i?(0,d.jsx)(ht.Fg,{to:n,replace:!0}):t:(0,d.jsx)(ht.Fg,{to:"/onboarding",replace:!0})};var vt=n(182),kt=n(7935),wt=n(2378);function Et(){const{data:e,isSuccess:t}=(0,wt.z3)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(vt.q,{children:[(0,d.jsx)("link",{rel:"icon",href:`${kt.ZP}/resource/organization/logo`}),t&&(0,d.jsxs)("title",{children:[e.name," Web App"]})]})})}const Dt=a.ZP.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--rustchat-navs-bg);
  > .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    &.left {
      align-items: center;
      position: relative;
      background: transparent;
      width: 64px;
      /* box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1); */
      transition: all 0.5s ease-in;
      > .divider {
        width: -webkit-fill-available;
        height: 1px;
        background-color: #d4d4d4;
        margin: 8px 16px;
      }
      &.expand {
        width: 140px;
      }
    }
    &.right {
      width: 100%;
    }
    .link_navs {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 24px 12px;
      .link {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #4b5563;
        border-radius: 8px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
        &.active {
          background-color: #55c7ec;
          svg path {
            fill: #fff;
          }
        }
      }
    }
  }
`;var Ct=n(1590);const xt=a.ZP.div`
  padding: 10px 12px;
  .avatar {
    width: 32px;
    height: 32px;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`,St=e=>{let{uid:t}=e;const{pathname:n}=(0,ht.TH)(),r=(0,Ft.CG)((e=>e.contacts.byId[t]));return r?(0,d.jsx)(xt,{children:(0,d.jsx)(ft.OL,{to:`/setting?nav=my_account&f=${n}`,children:(0,d.jsx)("div",{className:"avatar",children:(0,d.jsx)(Ct.Z,{url:r.avatar,name:r.name})})})}):null};var At=n(2812),Tt=n(1140),Ot=n(310);const Bt=a.F4`
from{
opacity: 0;
}
to{
opacity: 1;
}
`,It=a.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  &.fullscreen {
    width: 100vw;
    height: 100vh;
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reload {
    opacity: 0;
    &.visible {
      animation: ${Bt} 1s forwards;
      animation-delay: 30s;
    }
  }
`;function Nt(e){let{reload:t=!1,fullscreen:n=!1}=e;const{clearLocalData:r}=(0,Ot.Z)();return(0,d.jsxs)(It,{className:n?"fullscreen":"",children:[(0,d.jsx)(At.Z,{className:"loading",size:40,lineWeight:5,speed:2,color:"black"}),(0,d.jsx)(Tt.Z,{className:"reload danger "+(t?"visible":""),onClick:()=>{r(),location.reload(!0)},children:"Reload"})]})}var Rt=n(9265);const Pt=n.p+"static/media/setting.3cfa5bc4fac01d78f3a0.svg",jt=a.ZP.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px 12px;
  .menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    .icon {
      width: 24px;
      height: 24px;
      transition: all 0.5s ease;
    }
    .txt {
      color: #4b5563;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }
  position: relative;
  margin-top: 15px;
  pointer-events: all;
  width: 406px;
  padding: 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 25px 50px rgba(31, 41, 55, 0.25);
  display: flex;
  flex-direction: column;
  gap: 12px;
  .tip {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #344054;
    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    .desc {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
  }
  display: flex;
  height: 100%;
  padding: 8px 48px 10px 0;
  > .left {
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 268px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.05);
    height: 100%;
    overflow: auto;
    border-radius: 16px 0 0 16px;
    .list {
      margin: 12px 8px;
      &.dms {
        flex: 1;
      }
      .title {
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        cursor: pointer;
        > .txt {
          user-select: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: bold;
          font-size: 12px;
          line-height: 20px;
          color: #78787c;
        }
        .icon {
          transition: transform 0.5s ease;
          transform-origin: center;
        }
        .add_icon {
          width: 18px;
          height: 18px;
        }
      }
      > .nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        a {
          text-decoration: none;
        }
        .session {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 4px 8px;
          border-radius: 4px;
          &:hover,
          &.active {
            background: rgba(116, 127, 141, 0.1);
          }

          .avatar {
            /* todo */
          }
          .details {
            display: flex;
            flex-direction: column;
            width: 100%;
            .up {
              display: flex;
              justify-content: space-between;
              }