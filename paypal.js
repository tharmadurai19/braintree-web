!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(e.braintree||(e.braintree={})).paypal=t()}}(function(){var t;return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n,r){"use strict";!function(e,i){"object"==typeof r&&"undefined"!=typeof n?n.exports=i():"function"==typeof t&&t.amd?t([],i):e.framebus=i()}(this,function(){function t(t){return null==t?!1:null==t.Window?!1:t.constructor!==t.Window?!1:(_.push(t),!0)}function e(t){var e,n={};for(e in b)b.hasOwnProperty(e)&&(n[e]=b[e]);return n._origin=t||"*",n}function n(t){var e,n,r=o(this);return a(t)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),e=s(t,n,r),e===!1?!1:(d(m.top,e,r),!0))}function r(t,e){var n=o(this);return v(t,e,n)?!1:(x[n]=x[n]||{},x[n][t]=x[n][t]||[],x[n][t].push(e),!0)}function i(t,e){var n,r,i=o(this);if(v(t,e,i))return!1;if(r=x[i]&&x[i][t],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===e)return r.splice(n,1),!0;return!1}function o(t){return t&&t._origin||"*"}function a(t){return"string"!=typeof t}function s(t,e,n){var r=!1,i={event:t,origin:n},o=e[e.length-1];"function"==typeof o&&(i.reply=g(o,n),e=e.slice(0,-1)),i.args=e;try{r=E+JSON.stringify(i)}catch(a){throw new Error("Could not stringify event: "+a.message)}return r}function c(t){var e,n,r,i;if(t.data.slice(0,E.length)!==E)return!1;try{e=JSON.parse(t.data.slice(E.length))}catch(o){return!1}return null!=e.reply&&(n=t.origin,r=t.source,i=e.reply,e.reply=function(t){var e=s(i,[t],n);return e===!1?!1:void r.postMessage(e,n)},e.args.push(e.reply)),e}function u(t){m||(m=t||window,m.addEventListener?m.addEventListener("message",f,!1):m.attachEvent?m.attachEvent("onmessage",f):null===m.onmessage?m.onmessage=f:m=null)}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function f(t){var e;a(t.data)||(e=c(t),e&&(p("*",e.event,e.args,t),p(t.origin,e.event,e.args,t),y(t.data,e.origin,t.source)))}function p(t,e,n,r){var i;if(x[t]&&x[t][e])for(i=0;i<x[t][e].length;i++)x[t][e][i].apply(r,n)}function h(t){return t.top!==t?!1:null==t.opener?!1:t.opener===t?!1:t.opener.closed===!0?!1:!0}function d(t,e,n){var r;try{for(t.postMessage(e,n),h(t)&&d(t.opener.top,e,n),r=0;r<t.frames.length;r++)d(t.frames[r],e,n)}catch(i){}}function y(t,e,n){var r,i;for(r=_.length-1;r>=0;r--)i=_[r],i.closed===!0?_=_.slice(r,1):n!==i&&d(i.top,t,e)}function g(t,e){function n(i,o){t(i,o),b.target(e).unsubscribe(r,n)}var r=l();return b.target(e).subscribe(r,n),r}function v(t,e,n){return a(t)?!0:"function"!=typeof e?!0:a(n)?!0:!1}var m,b,_=[],x={},E="/*framebus*/";return u(),b={target:e,include:t,publish:n,pub:n,trigger:n,emit:n,subscribe:r,sub:r,on:r,unsubscribe:i,unsub:i,off:i}})},{}],2:[function(t,e,n){"use strict";var r=t("lodash/object/assign"),i=t("lodash/lang/isString"),o=t("setattributes"),a=t("./lib/default-attributes");e.exports=function(t){var e=document.createElement("iframe"),n=r({},a,t);return n.style&&!i(n.style)&&(r(e.style,n.style),delete n.style),o(e,n),e.getAttribute("id")||(e.id=e.name),e}},{"./lib/default-attributes":3,"lodash/lang/isString":24,"lodash/object/assign":25,setattributes:29}],3:[function(t,e,n){e.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],4:[function(t,e,n){function r(t,e){if("function"!=typeof t)throw new TypeError(i);return e=o(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,r=-1,i=o(n.length-e,0),a=Array(i);++r<i;)a[r]=n[e+r];switch(e){case 0:return t.call(this,a);case 1:return t.call(this,n[0],a);case 2:return t.call(this,n[0],n[1],a)}var s=Array(e+1);for(r=-1;++r<e;)s[r]=n[r];return s[e]=a,t.apply(this,s)}}var i="Expected a function",o=Math.max;e.exports=r},{}],5:[function(t,e,n){function r(t,e,n){for(var r=-1,o=i(e),a=o.length;++r<a;){var s=o[r],c=t[s],u=n(c,e[s],s,t,e);(u===u?u===c:c!==c)&&(void 0!==c||s in t)||(t[s]=u)}return t}var i=t("../object/keys");e.exports=r},{"../object/keys":26}],6:[function(t,e,n){function r(t,e){return null==e?t:i(e,o(e),t)}var i=t("./baseCopy"),o=t("../object/keys");e.exports=r},{"../object/keys":26,"./baseCopy":7}],7:[function(t,e,n){function r(t,e,n){n||(n={});for(var r=-1,i=e.length;++r<i;){var o=e[r];n[o]=t[o]}return n}e.exports=r},{}],8:[function(t,e,n){function r(t){return function(e){return null==e?void 0:e[t]}}e.exports=r},{}],9:[function(t,e,n){function r(t,e,n){if("function"!=typeof t)return i;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)};case 5:return function(n,r,i,o,a){return t.call(e,n,r,i,o,a)}}return function(){return t.apply(e,arguments)}}var i=t("../utility/identity");e.exports=r},{"../utility/identity":28}],10:[function(t,e,n){function r(t){return a(function(e,n){var r=-1,a=null==e?0:n.length,s=a>2?n[a-2]:void 0,c=a>2?n[2]:void 0,u=a>1?n[a-1]:void 0;for("function"==typeof s?(s=i(s,u,5),a-=2):(s="function"==typeof u?u:void 0,a-=s?1:0),c&&o(n[0],n[1],c)&&(s=3>a?void 0:s,a=1);++r<a;){var l=n[r];l&&t(e,l,s)}return e})}var i=t("./bindCallback"),o=t("./isIterateeCall"),a=t("../function/restParam");e.exports=r},{"../function/restParam":4,"./bindCallback":9,"./isIterateeCall":15}],11:[function(t,e,n){var r=t("./baseProperty"),i=r("length");e.exports=i},{"./baseProperty":8}],12:[function(t,e,n){function r(t,e){var n=null==t?void 0:t[e];return i(n)?n:void 0}var i=t("../lang/isNative");e.exports=r},{"../lang/isNative":22}],13:[function(t,e,n){function r(t){return null!=t&&o(i(t))}var i=t("./getLength"),o=t("./isLength");e.exports=r},{"./getLength":11,"./isLength":16}],14:[function(t,e,n){function r(t,e){return t="number"==typeof t||i.test(t)?+t:-1,e=null==e?o:e,t>-1&&t%1==0&&e>t}var i=/^\d+$/,o=9007199254740991;e.exports=r},{}],15:[function(t,e,n){function r(t,e,n){if(!a(n))return!1;var r=typeof e;if("number"==r?i(n)&&o(e,n.length):"string"==r&&e in n){var s=n[e];return t===t?t===s:s!==s}return!1}var i=t("./isArrayLike"),o=t("./isIndex"),a=t("../lang/isObject");e.exports=r},{"../lang/isObject":23,"./isArrayLike":13,"./isIndex":14}],16:[function(t,e,n){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&i>=t}var i=9007199254740991;e.exports=r},{}],17:[function(t,e,n){function r(t){return!!t&&"object"==typeof t}e.exports=r},{}],18:[function(t,e,n){function r(t){for(var e=c(t),n=e.length,r=n&&t.length,u=!!r&&s(r)&&(o(t)||i(t)),f=-1,p=[];++f<n;){var h=e[f];(u&&a(h,r)||l.call(t,h))&&p.push(h)}return p}var i=t("../lang/isArguments"),o=t("../lang/isArray"),a=t("./isIndex"),s=t("./isLength"),c=t("../object/keysIn"),u=Object.prototype,l=u.hasOwnProperty;e.exports=r},{"../lang/isArguments":19,"../lang/isArray":20,"../object/keysIn":27,"./isIndex":14,"./isLength":16}],19:[function(t,e,n){function r(t){return o(t)&&i(t)&&s.call(t,"callee")&&!c.call(t,"callee")}var i=t("../internal/isArrayLike"),o=t("../internal/isObjectLike"),a=Object.prototype,s=a.hasOwnProperty,c=a.propertyIsEnumerable;e.exports=r},{"../internal/isArrayLike":13,"../internal/isObjectLike":17}],20:[function(t,e,n){var r=t("../internal/getNative"),i=t("../internal/isLength"),o=t("../internal/isObjectLike"),a="[object Array]",s=Object.prototype,c=s.toString,u=r(Array,"isArray"),l=u||function(t){return o(t)&&i(t.length)&&c.call(t)==a};e.exports=l},{"../internal/getNative":12,"../internal/isLength":16,"../internal/isObjectLike":17}],21:[function(t,e,n){function r(t){return i(t)&&s.call(t)==o}var i=t("./isObject"),o="[object Function]",a=Object.prototype,s=a.toString;e.exports=r},{"./isObject":23}],22:[function(t,e,n){function r(t){return null==t?!1:i(t)?l.test(c.call(t)):o(t)&&a.test(t)}var i=t("./isFunction"),o=t("../internal/isObjectLike"),a=/^\[object .+?Constructor\]$/,s=Object.prototype,c=Function.prototype.toString,u=s.hasOwnProperty,l=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},{"../internal/isObjectLike":17,"./isFunction":21}],23:[function(t,e,n){function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}e.exports=r},{}],24:[function(t,e,n){function r(t){return"string"==typeof t||i(t)&&s.call(t)==o}var i=t("../internal/isObjectLike"),o="[object String]",a=Object.prototype,s=a.toString;e.exports=r},{"../internal/isObjectLike":17}],25:[function(t,e,n){var r=t("../internal/assignWith"),i=t("../internal/baseAssign"),o=t("../internal/createAssigner"),a=o(function(t,e,n){return n?r(t,e,n):i(t,e)});e.exports=a},{"../internal/assignWith":5,"../internal/baseAssign":6,"../internal/createAssigner":10}],26:[function(t,e,n){var r=t("../internal/getNative"),i=t("../internal/isArrayLike"),o=t("../lang/isObject"),a=t("../internal/shimKeys"),s=r(Object,"keys"),c=s?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&i(t)?a(t):o(t)?s(t):[]}:a;e.exports=c},{"../internal/getNative":12,"../internal/isArrayLike":13,"../internal/shimKeys":18,"../lang/isObject":23}],27:[function(t,e,n){function r(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&s(e)&&(o(t)||i(t))&&e||0;for(var n=t.constructor,r=-1,u="function"==typeof n&&n.prototype===t,f=Array(e),p=e>0;++r<e;)f[r]=r+"";for(var h in t)p&&a(h,e)||"constructor"==h&&(u||!l.call(t,h))||f.push(h);return f}var i=t("../lang/isArguments"),o=t("../lang/isArray"),a=t("../internal/isIndex"),s=t("../internal/isLength"),c=t("../lang/isObject"),u=Object.prototype,l=u.hasOwnProperty;e.exports=r},{"../internal/isIndex":14,"../internal/isLength":16,"../lang/isArguments":19,"../lang/isArray":20,"../lang/isObject":23}],28:[function(t,e,n){function r(t){return t}e.exports=r},{}],29:[function(t,e,n){e.exports=function(t,e){var n;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],null==n?t.removeAttribute(r):t.setAttribute(r,n))}},{}],30:[function(t,e,n){"use strict";function r(t,e){var n,r=e?o(e):{},s=i(t.authorization).attrs,c=o(t.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,s.clientKey?r.clientKey=s.clientKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var i=t("./create-authorization-data"),o=t("./json-clone"),a=t("./constants");e.exports=r},{"./constants":36,"./create-authorization-data":38,"./json-clone":49}],31:[function(t,e,n){"use strict";function r(t){return Math.floor(t/1e3)}function i(t){return t}function o(t,e,n){var o=t.getConfiguration(),c=t._driver,u=r(Date.now()),l=o.gatewayConfiguration.analytics.url,f={analytics:[{kind:e,timestamp:u}]};c.post(l,s(o,f),i,n,a.ANALYTICS_REQUEST_TIMEOUT_MS)}var a=t("./constants"),s=t("./add-metadata");e.exports={sendEvent:o}},{"./add-metadata":30,"./constants":36}],32:[function(t,e,n){(function(t){"use strict";function n(e){return e=e||t.navigator.userAgent,e.indexOf("Opera Mini")>-1}function r(e){return e=e||t.navigator.userAgent,-1!==e.indexOf("MSIE")?parseInt(e.replace(/.*MSIE ([0-9]+)\..*/,"$1"),10):/Trident.*rv:11/.test(e)?11:null}function i(e){return e=e||t.location.protocol,"https:"===e}e.exports={isOperaMini:n,getIEVersion:r,isHTTPS:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],33:[function(t,e,n){"use strict";function r(t,e){var n,r,o=document.createElement("a");return o.href=e,r="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+r,n===t||i.test(t)}var i=/^https:\/\/([a-zA-Z0-9-]+\.)*(braintreepayments|braintreegateway|paypal)\.com(:\d{1,5})?$/;e.exports={checkOrigin:r}},{}],34:[function(t,e,n){"use strict";var r=t("../enumerate");e.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":39}],35:[function(t,e,n){"use strict";function r(t){if(t=t||{},this.channel=t.channel,!this.channel)throw new s({type:s.types.INTERNAL,message:"Channel ID must be specified."});this.merchantUrl=t.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=t("framebus"),o=t("./events"),a=t("./check-origin").checkOrigin,s=t("../error");r.prototype.on=function(t,e){var n,r,o=e,s=this;this._isDestroyed||(this.merchantUrl&&(o=function(){a(this.origin,s.merchantUrl)&&e.apply(this,arguments)}),n=this._namespaceEvent(t),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:t,handler:o,originalHandler:e}))},r.prototype.emit=function(t){var e;this._isDestroyed||(e=Array.prototype.slice.call(arguments),e[0]=this._namespaceEvent(t),this._log("emit",e),i.emit.apply(i,e))},r.prototype._offDirect=function(t){var e=Array.prototype.slice.call(arguments);this._isDestroyed||(e[0]=this._namespaceEvent(t),this._log("off",e),i.off.apply(i,e))},r.prototype.off=function(t,e){var n,r,i=e;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===e&&(i=r.handler);this._offDirect(t,i)}},r.prototype._namespaceEvent=function(t){return["braintree",this.channel,t].join(":")},r.prototype.teardown=function(){var t,e;for(e=0;e<this._listeners.length;e++)t=this._listeners[e],this._offDirect(t.eventName,t.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(t,e){this._isVerbose&&console.log(t,e)},r.events=o,e.exports=r},{"../error":40,"./check-origin":33,"./events":34,framebus:1}],36:[function(t,e,n){"use strict";var r="3.0.0-beta.6",i="web";e.exports={ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],37:[function(t,e,n){"use strict";var r=t("./error");e.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new r({type:r.types.MERCHANT,message:e+" cannot be called after teardown."})}})}},{"./error":40}],38:[function(t,e,n){"use strict";function r(t){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(t)}function i(t){var e=t.split("_"),n=e[0],r=e.slice(2).join("_");return{merchantId:r,environment:n}}function o(t){var e,n,o={attrs:{},configUrl:""};return r(t)?(n=i(t),o.attrs.clientKey=t,o.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(e=JSON.parse(a(t)),o.attrs.authorizationFingerprint=e.authorizationFingerprint,o.configUrl=e.configUrl),o}var a=t("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};e.exports=o},{"../lib/polyfill":51}],39:[function(t,e,n){"use strict";function r(t,e){return e=null==e?"":e,t.reduce(function(t,n){return t[n]=e+n,t},{})}e.exports=r},{}],40:[function(t,e,n){"use strict";function r(t){if(!r.types.hasOwnProperty(t.type))throw new Error(t.type+" is not a valid type.");if(!t.message)throw new Error("Error message required.");this.message=t.message,this.type=t.type,this.details=t.details}var i=t("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),e.exports=r},{"./enumerate":39}],41:[function(t,e,n){"use strict";function r(t){if(!t)throw new Error("Valid configuration is required");if(p.forEach(function(e){if(!t.hasOwnProperty(e))throw new Error("A valid frame "+e+" must be provided")}),!/^[\w_]+$/.test(t.name))throw new Error("A valid frame name must be provided")}function i(t,e){r(e),this._serviceId=u().replace(/-/g,""),this._frameConfiguration={name:e.name+"_"+this._serviceId,url:e.url,landingFrameHTML:e.landingFrameHTML},this._componentConfiguration=t,this._bus=new a({channel:this._serviceId}),this._setBusEvents()}var o=t("./popup"),a=t("../../bus"),s=t("../shared/events"),c=t("../shared/constants"),u=t("../../uuid"),l=t("iframer"),f=t("../../error"),p=["name","url","landingFrameHTML"];i.prototype.initialize=function(t){var e=function(){t(),this._bus.off(s.DISPATCH_FRAME_READY,e)}.bind(this);this._bus.on(s.DISPATCH_FRAME_READY,e),this._writeDispatchFrame()},i.prototype._writeDispatchFrame=function(){var t=c.DISPATCH_FRAME_NAME+"_"+this._serviceId,e=this._frameConfiguration.url+"/html/dispatch-frame.min.html";this._dispatchFrame=l({name:t,src:e,height:0,width:0}),document.body.appendChild(this._dispatchFrame)},i.prototype._setBusEvents=function(){this._bus.on(s.DISPATCH_FRAME_REPORT,function(t){this.close(),this._onCompleteCallback&&this._onCompleteCallback.call(null,t.err,t.payload),this._onCompleteCallback=null}.bind(this)),this._bus.on(a.events.CONFIGURATION_REQUEST,function(t){t(this._componentConfiguration)}.bind(this))},i.prototype.open=function(t){return this._onCompleteCallback=t,this._frame=o.open(this._frameConfiguration),this._pollForPopupClose(),{close:function(){this._frame.close()}.bind(this)}},i.prototype.close=function(){this.isFrameClosed()||this._frame.close()},i.prototype.teardown=function(){this.close(),this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),this._dispatchFrame=null,this._cleanupFrame(),this._onCompleteCallback&&this._onCompleteCallback()},i.prototype.isFrameClosed=function(){return null==this._frame||this._frame.closed},i.prototype._cleanupFrame=function(){this._frame=null,clearInterval(this._popupInterval),this._popupInterval=null},i.prototype._pollForPopupClose=function(){return this._popupInterval=setInterval(function(){this.isFrameClosed()&&(this._cleanupFrame(),this._onCompleteCallback&&this._onCompleteCallback(new f({type:f.types.CUSTOMER,message:c.FRAME_CLOSED_ERROR_MESSAGE})))}.bind(this),c.POPUP_POLL_INTERVAL),this._popupInterval},e.exports=i},{"../../bus":35,"../../error":40,"../../uuid":52,"../shared/constants":47,"../shared/events":48,"./popup":44,iframer:2}],42:[function(t,e,n){"use strict";var r=t("./frame-service");e.exports={create:function(t,e,n){var i=new r(t,e);i.initialize(function(){n(i)})}}},{"./frame-service":41}],43:[function(t,e,n){"use strict";var r=t("../../shared/constants"),i=t("./position");e.exports=function(){return[r.POPUP_BASE_OPTIONS,"top="+i.top(),"left="+i.left()].join(",")}},{"../../shared/constants":47,"./position":46}],44:[function(t,e,n){"use strict";e.exports={open:t("./open")}},{"./open":45}],45:[function(t,e,n){(function(n){"use strict";var r=t("./compose-options");e.exports=function(t){return n.open(t.url+t.landingFrameHTML,t.name,r())}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./compose-options":43}],46:[function(t,e,n){(function(n){"use strict";function r(){var t=n.outerHeight||document.documentElement.clientHeight,e=null==n.screenY?n.screenTop:n.screenY;return o(t,a.POPUP_HEIGHT,e)}function i(){var t=n.outerWidth||document.documentElement.clientWidth,e=null==n.screenX?n.screenLeft:n.screenX;return o(t,a.POPUP_WIDTH,e)}function o(t,e,n){return(t-e)/2+n}var a=t("../../shared/constants");e.exports={top:r,left:i,center:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../shared/constants":47}],47:[function(t,e,n){"use strict";var r=535,i=450;e.exports={DISPATCH_FRAME_NAME:"dispatch",FRAME_CLOSED_ERROR_MESSAGE:"Frame closed before tokenization could occur.",POPUP_BASE_OPTIONS:"resizable,scrollbars,height="+r+",width="+i,POPUP_WIDTH:i,POPUP_HEIGHT:r,POPUP_POLL_INTERVAL:100,POPUP_CLOSE_TIMEOUT:100}},{}],48:[function(t,e,n){"use strict";var r=t("../../enumerate");e.exports=r(["DISPATCH_FRAME_READY","DISPATCH_FRAME_REPORT"],"frameService:")},{"../../enumerate":39}],49:[function(t,e,n){"use strict";e.exports=function(t){return JSON.parse(JSON.stringify(t))}},{}],50:[function(t,e,n){"use strict";e.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],51:[function(t,e,n){(function(t){"use strict";function n(t){var e,n,r,i,o,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!u.test(t))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=l.indexOf(t.charAt(c++)),o=l.indexOf(t.charAt(c++)),a=l.indexOf(t.charAt(c++)),s=l.indexOf(t.charAt(c++)),e=(63&i)<<2|o>>4&3,n=(15&o)<<4|a>>2&15,r=(3&a)<<6|63&s,f+=String.fromCharCode(e)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<t.length);return f}var r="function"==typeof t.atob?t.atob:n;e.exports={atob:r,_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],52:[function(t,e,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=r},{}],53:[function(t,e,n){"use strict";function r(t){this._options=t,this._assetsUrl=t.client.getConfiguration().gatewayConfiguration.paypal.assetsUrl+"/web/"+a,this._authorizationInProgress=!1}var i=t("../../lib/frame-service/external"),o=t("../../lib/error"),a="3.0.0-beta.6",s=t("../shared/constants"),c=t("../../lib/constants").INTEGRATION_TIMEOUT_MS,u=t("../../lib/analytics"),l=t("../../lib/methods"),f=t("../../lib/convert-methods-to-error");r.prototype._initialize=function(t){var e=this._options,n=setTimeout(function(){u.sendEvent(e.client,"web.paypal.load.timed-out")},c);i.create(this._options,{name:s.LANDING_FRAME_NAME,url:this._assetsUrl,landingFrameHTML:"/html/paypal-landing-frame.min.html"},function(r){this._frameService=r,clearTimeout(n),u.sendEvent(e.client,"web.paypal.load.succeeded"),t()}.bind(this))},r.prototype.tokenize=function(t){var e;if("function"!=typeof t)throw new o({type:o.types.MERCHANT,message:"tokenize must include a callback function."});return e=this._options.client,this._authorizationInProgress?(u.sendEvent(e,"web.paypal.tokenization.error.already-opened"),t(new o({type:o.types.MERCHANT,message:"Another tokenization request is active."}))):(this._authorizationInProgress=!0,u.sendEvent(e,"web.paypal.tokenization.opened"),this._frameService.open(function(n){n?n.message===s.FRAME_CLOSED_ERROR_MESSAGE?u.sendEvent(e,"web.paypal.tokenization.closed.by-user"):u.sendEvent(e,"web.paypal.tokenization.failed"):u.sendEvent(e,"web.paypal.tokenization.success"),this._authorizationInProgress=!1,t.apply(null,arguments)}.bind(this))),{close:function(){u.sendEvent(e,"web.paypal.tokenization.closed.by-merchant"),this._frameService.close()}.bind(this)}},r.prototype.teardown=function(t){this._frameService.teardown(),f(this,l(r.prototype)),u.sendEvent(this._options.client,"web.paypal.teardown-completed"),"function"==typeof t&&t()},e.exports=r},{"../../lib/analytics":31,"../../lib/constants":36,"../../lib/convert-methods-to-error":37,"../../lib/error":40,"../../lib/frame-service/external":42,"../../lib/methods":50,"../shared/constants":55}],54:[function(t,e,n){"use strict";function r(t,e){var n,r;return null==t.client?void e(new s({type:s.types.MERCHANT,message:"options.client is required when instantiating PayPal."})):(n=t.client.getConfiguration(),n.analyticsMetadata.sdkVersion!==u?void e(new s({type:s.types.MERCHANT,message:"Client and PayPal components must be from the same SDK version."})):n.gatewayConfiguration.paypalEnabled!==!0?void e(new s({type:s.types.MERCHANT,message:"PayPal is not enabled for this merchant."})):i()?a.isHTTPS()?(c.sendEvent(t.client,"web.paypal.initialized"),r=new o(t),void r._initialize(function(){e(null,r)})):void e(new s({type:s.types.MERCHANT,message:"PayPal requires HTTPS."})):void e(new s({type:s.types.CUSTOMER,message:"Browser is not supported."})))}function i(){return!a.isOperaMini()}var o=t("./external/paypal"),a=t("../lib/browser-detection"),s=t("../lib/error"),c=t("../lib/analytics"),u="3.0.0-beta.6";e.exports={create:r,VERSION:u}},{"../lib/analytics":31,"../lib/browser-detection":32,"../lib/error":40,"./external/paypal":53}],55:[function(t,e,n){"use strict";var r=535,i=450;e.exports={AUTH_INIT_ERROR_MESSSAGE:"Could not initialize PayPal flow",LANDING_FRAME_NAME:"braintreepaypallanding",POPUP_BASE_OPTIONS:"resizable,scrollbars,height="+r+",width="+i,POPUP_WIDTH:i,POPUP_HEIGHT:r,POPUP_POLL_INTERVAL:100}},{}]},{},[54])(54)});
