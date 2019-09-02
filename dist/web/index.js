!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-native-webview-messaging"]=t():e["react-native-webview-messaging"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.LIB_PREFIX="@@RN_WEBVIEW_MESSAGING";t.LIB_READY_KEY=r+"_IS_READY",t.Events={READY:r+"/ready"}},function(e,t,n){"use strict";(function(e){function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,o){try{var s=t[i](o),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.connectToRemote=void 0;var i=(t.connectToRemote=function(){var t=r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new i.Remote,e[o.LIB_PREFIX]=n,e[o.LIB_READY_KEY]&&n.emit(o.Events.READY,null,!0),n.emit(o.Events.READY),t.next=6,n.ready;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n(4)),o=n(0)}).call(t,n(3))},function(e,t,n){"use strict";function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"===(void 0===e?"undefined":c(e))&&null!==e}function u(e){return void 0===e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,c,f;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var a=new Error('Uncaught, unspecified "error" event. ('+t+")");throw a.context=t,a}if(n=this._events[e],u(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(s(n))for(o=Array.prototype.slice.call(arguments,1),f=n.slice(),r=f.length,c=0;c<r;c++)f[c].apply(this,o);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=u(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,u;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(u=o;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n){return p.LIB_PREFIX+JSON.stringify({type:e,payload:t,meta:n})}function u(e){if(window.ReactNativeWebView)return void window.ReactNativeWebView.postMessage(e);2===window.postMessage.length?requestAnimationFrame(function(){u(e)}):window.postMessage(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Remote=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(r)},a=n(2),l=function(e){return e&&e.__esModule?e:{default:e}}(a),p=n(0);t.Remote=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.ready=new Promise(function(t){e.once(p.Events.READY,function(){t(e)})}),e}return o(t,e),c(t,[{key:"sendJSON",value:function(e){u(s("json",e))}},{key:"send",value:function(e){u(s("text",e))}},{key:"emit",value:function(e,n,r){if(r)return void f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"emit",this).call(this,e,n);u(s("event",n,{eventName:e}))}}]),t}(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.defineProperty(t,"connectToRemote",{enumerable:!0,get:function(){return r.connectToRemote}})}])});