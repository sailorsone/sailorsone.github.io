"use strict";

/* Leaflet 1.7.1 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function h(t){for(var i,e,n=1,o=arguments.length;n<o;n++)for(i in e=arguments[n])t[i]=e[i];return t}var s=Object.create||function(t){return i.prototype=t,new i};function i(){}function p(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}var e=0;function m(t){return t._leaflet_id=t._leaflet_id||++e,t._leaflet_id}function n(t,i,e){var n,o,s=function(){n=!1,o&&(r.apply(e,o),o=!1)},r=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(s,i),n=!0)};return r}function o(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function a(){return!1}function r(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function u(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function l(t){return u(t).split(/\s+/)}function c(t,i){for(var e in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?s(t.options):{}),i)t.options[e]=i[e];return t.options}function _(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}var d=/\{ *([\w_-]+) *\}/g;function f(t,n){return t.replace(d,function(t,i){var e=n[i];if(void 0===e)throw new Error("No value provided for variable "+t);return"function"==typeof e&&(e=e(n)),e})}var g=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function v(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}var y="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function x(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var w=0;function P(t){var i=+new Date,e=Math.max(0,16-(i-w));return w=i+e,window.setTimeout(t,e)}var b=window.requestAnimationFrame||x("RequestAnimationFrame")||P,T=window.cancelAnimationFrame||x("CancelAnimationFrame")||x("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function M(t,i,e){if(!e||b!==P)return b.call(window,p(t,i));t.call(i)}function z(t){t&&T.call(window,t)}var C={extend:h,create:s,bind:p,lastId:e,stamp:m,throttle:n,wrapNum:o,falseFn:a,formatNum:r,trim:u,splitWords:l,setOptions:c,getParamString:_,template:f,isArray:g,indexOf:v,emptyImageUrl:y,requestFn:b,cancelFn:T,requestAnimFrame:M,cancelAnimFrame:z};function S(){}S.extend=function(t){function i(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var e=i.__super__=this.prototype,n=s(e);for(var o in(n.constructor=i).prototype=n,this)Object.prototype.hasOwnProperty.call(this,o)&&"prototype"!==o&&"__super__"!==o&&(i[o]=this[o]);return t.statics&&(h(i,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"==typeof L||!L||!L.Mixin)return;t=g(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}(t.includes),h.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=h(s(n.options),t.options)),h(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){e.callInitHooks&&e.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=n._initHooks.length;t<i;t++)n._initHooks[t].call(this)}},i},S.include=function(t){return h(this.prototype,t),this},S.mergeOptions=function(t){return h(this.prototype.options,t),this},S.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var Z={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=l(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=l(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var r=n[o];if(r.ctx===e&&r.fn===i)return r.fn=a,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=a;delete this._events[t]}},fire:function(t,i,e){if(!this.listens(t,e))return this;var n=h({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s];a.fn.call(a.ctx||this,n)}this._firingCount--}}return e&&this._propagateEvent(n),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,e){if("object"==typeof t){for(var n in t)this.once(n,t[n],i);return this}var o=p(function(){this.off(t,i,e).off(t,o,e)},this);return this.on(t,i,e).on(t,o,e)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[m(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[m(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,h({layer:t.target,propagatedFrom:t.target},t),!0)}};Z.addEventListener=Z.on,Z.removeEventListener=Z.clearAllEventListeners=Z.off,Z.addOneTimeEventListener=Z.once,Z.fireEvent=Z.fire,Z.hasEventListeners=Z.listens;var E=S.extend(Z);function k(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}var B=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function A(t,i,e){return t instanceof k?t:g(t)?new k(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new k(t.x,t.y):new k(t,i,e)}function I(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function O(t,i){return!t||t instanceof I?t:new I(t,i)}function R(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function N(t,i){return t instanceof R?t:new R(t,i)}function D(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function j(t,i,e){return t instanceof D?t:g(t)&&"object"!=typeof t[0]?3===t.length?new D(t[0],t[1],t[2]):2===t.length?new D(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new D(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new D(t,i,e)}k.prototype={clone:function(){return new k(this.x,this.y)},add:function(t){return this.clone()._add(A(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(A(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new k(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new k(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=B(this.x),this.y=B(this.y),this},distanceTo:function(t){var i=(t=A(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=A(t)).x===this.x&&t.y===this.y},contains:function(t){return t=A(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+r(this.x)+", "+r(this.y)+")"}},I.prototype={extend:function(t){return t=A(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new k((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new k(this.min.x,this.max.y)},getTopRight:function(){return new k(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t=("number"==typeof t[0]||t instanceof k?A:O)(t))instanceof I?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=O(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=O(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},R.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof D)e=i=t;else{if(!(t instanceof R))return t?this.extend(j(t)||N(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new D(i.lat,i.lng),this._northEast=new D(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new R(new D(i.lat-n,i.lng-o),new D(e.lat+n,e.lng+o))},getCenter:function(){return new D((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new D(this.getNorth(),this.getWest())},getSouthEast:function(){return new D(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t=("number"==typeof t[0]||t instanceof D||"lat"in t?j:N)(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof R?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=N(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=N(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=N(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}};var W,H={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new I(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!(D.prototype={equals:function(t,i){return!!t&&(t=j(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+r(this.lat,t)+", "+r(this.lng,t)+")"},distanceTo:function(t){return F.distance(this,j(t))},wrap:function(){return F.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return N([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new D(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var i=this.wrapLng?o(t.lng,this.wrapLng,!0):t.lng;return new D(this.wrapLat?o(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0==n&&0==o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new R(new D(s.lat-n,s.lng-o),new D(r.lat-n,r.lng-o))}},F=h({},H,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),U=6378137,V={R:U,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new k(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new D((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:new I([-(W=U*Math.PI),-W],[W,W])};function q(t,i,e,n){if(g(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function G(t,i,e,n){return new q(t,i,e,n)}q.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new k((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var K,Y=h({},F,{code:"EPSG:3857",projection:V,transformation:G(K=.5/(Math.PI*V.R),.5,-K,.5)}),X=h({},Y,{code:"EPSG:900913"});function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t,i){for(var e,n,o,s,r="",a=0,h=t.length;a<h;a++){for(e=0,n=(o=t[a]).length;e<n;e++)r+=(e?"L":"M")+(s=o[e]).x+" "+s.y;r+=i?Zt?"z":"x":""}return r||"M0 0"}var Q=document.documentElement.style,tt="ActiveXObject"in window,it=tt&&!document.addEventListener,et="msLaunchUri"in navigator&&!("documentMode"in document),nt=kt("webkit"),ot=kt("android"),st=kt("android 2")||kt("android 3"),rt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),at=ot&&kt("Google")&&rt<537&&!("AudioNode"in window),ht=!!window.opera,ut=!et&&kt("chrome"),lt=kt("gecko")&&!nt&&!ht&&!tt,ct=!ut&&kt("safari"),_t=kt("phantom"),dt="OTransition"in Q,pt=0===navigator.platform.indexOf("Win"),mt=tt&&"transition"in Q,ft="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!st,gt="MozPerspective"in Q,vt=!window.L_DISABLE_3D&&(mt||ft||gt)&&!dt&&!_t,yt="undefined"!=typeof orientation||kt("mobile"),xt=yt&&nt,wt=yt&&ft,Pt=!window.PointerEvent&&window.MSPointerEvent,Lt=!(!window.PointerEvent&&!Pt),bt=!window.L_NO_TOUCH&&(Lt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),Tt=yt&&ht,Mt=yt&&lt,zt=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),Ct=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",a,i),window.removeEventListener("testPassiveEventSupport",a,i)}catch(t){}return t}(),St=!!document.createElement("canvas").getContext,Zt=!(!document.createElementNS||!J("svg").createSVGRect),Et=!Zt&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}();function kt(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var Bt={ie:tt,ielt9:it,edge:et,webkit:nt,android:ot,android23:st,androidStock:at,opera:ht,chrome:ut,gecko:lt,safari:ct,phantom:_t,opera12:dt,win:pt,ie3d:mt,webkit3d:ft,gecko3d:gt,any3d:vt,mobile:yt,mobileWebkit:xt,mobileWebkit3d:wt,msPointer:Pt,pointer:Lt,touch:bt,mobileOpera:Tt,mobileGecko:Mt,retina:zt,passiveEvents:Ct,canvas:St,svg:Zt,vml:Et},At=Pt?"MSPointerDown":"pointerdown",It=Pt?"MSPointerMove":"pointermove",Ot=Pt?"MSPointerUp":"pointerup",Rt=Pt?"MSPointerCancel":"pointercancel",Nt={},Dt=!1;function jt(t,i,e,n){function o(t){Ut(t,r)}var s,r,a,h,u,l,c,_;function d(t){t.pointerType===(t.MSPOINTER_TYPE_MOUSE||"mouse")&&0===t.buttons||Ut(t,h)}return"touchstart"===i?(u=t,l=e,c=n,_=p(function(t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&Ri(t),Ut(t,l)}),u["_leaflet_touchstart"+c]=_,u.addEventListener(At,_,!1),Dt||(document.addEventListener(At,Wt,!0),document.addEventListener(It,Ht,!0),document.addEventListener(Ot,Ft,!0),document.addEventListener(Rt,Ft,!0),Dt=!0)):"touchmove"===i?(h=e,(a=t)["_leaflet_touchmove"+n]=d,a.addEventListener(It,d,!1)):"touchend"===i&&(r=e,(s=t)["_leaflet_touchend"+n]=o,s.addEventListener(Ot,o,!1),s.addEventListener(Rt,o,!1)),this}function Wt(t){Nt[t.pointerId]=t}function Ht(t){Nt[t.pointerId]&&(Nt[t.pointerId]=t)}function Ft(t){delete Nt[t.pointerId]}function Ut(t,i){for(var e in t.touches=[],Nt)t.touches.push(Nt[e]);t.changedTouches=[t],i(t)}var Vt=Pt?"MSPointerDown":Lt?"pointerdown":"touchstart",qt=Pt?"MSPointerUp":Lt?"pointerup":"touchend",Gt="_leaflet_";var Kt,Yt,Xt,Jt,$t,Qt,ti=fi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ii=fi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ei="webkitTransition"===ii||"OTransition"===ii?ii+"End":"transitionend";function ni(t){return"string"==typeof t?document.getElementById(t):t}function oi(t,i){var e,n=t.style[i]||t.currentStyle&&t.currentStyle[i];return n&&"auto"!==n||!document.defaultView||(n=(e=document.defaultView.getComputedStyle(t,null))?e[i]:null),"auto"===n?null:n}function si(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function ri(t){var i=t.parentNode;i&&i.removeChild(t)}function ai(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function hi(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function ui(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function li(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=pi(t);return 0<e.length&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function ci(t,i){var e;if(void 0!==t.classList)for(var n=l(i),o=0,s=n.length;o<s;o++)t.classList.add(n[o]);else li(t,i)||di(t,((e=pi(t))?e+" ":"")+i)}function _i(t,i){void 0!==t.classList?t.classList.remove(i):di(t,u((" "+pi(t)+" ").replace(" "+i+" "," ")))}function di(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function pi(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function mi(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&function(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}(t,i)}function fi(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function gi(t,i,e){var n=i||new k(0,0);t.style[ti]=(mt?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function vi(t,i){t._leaflet_pos=i,vt?gi(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function yi(t){return t._leaflet_pos||new k(0,0)}function xi(){zi(window,"dragstart",Ri)}function wi(){Si(window,"dragstart",Ri)}function Pi(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Li(),Qt=($t=t).style.outline,t.style.outline="none",zi(window,"keydown",Li))}function Li(){$t&&($t.style.outline=Qt,Qt=$t=void 0,Si(window,"keydown",Li))}function bi(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ti(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}Jt="onselectstart"in document?(Xt=function(){zi(window,"selectstart",Ri)},function(){Si(window,"selectstart",Ri)}):(Yt=fi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]),Xt=function(){var t;Yt&&(t=document.documentElement.style,Kt=t[Yt],t[Yt]="none")},function(){Yt&&(document.documentElement.style[Yt]=Kt,Kt=void 0)});var Mi={TRANSFORM:ti,TRANSITION:ii,TRANSITION_END:ei,get:ni,getStyle:oi,create:si,remove:ri,empty:ai,toFront:hi,toBack:ui,hasClass:li,addClass:ci,removeClass:_i,setClass:di,getClass:pi,setOpacity:mi,testProp:fi,setTransform:gi,setPosition:vi,getPosition:yi,disableTextSelection:Xt,enableTextSelection:Jt,disableImageDrag:xi,enableImageDrag:wi,preventOutline:Pi,restoreOutline:Li,getSizedParentNode:bi,getScale:Ti};function zi(t,i,e,n){if("object"==typeof i)for(var o in i)ki(t,o,i[o],e);else for(var s=0,r=(i=l(i)).length;s<r;s++)ki(t,i[s],e,n);return this}var Ci="_leaflet_events";function Si(t,i,e,n){if("object"==typeof i)for(var o in i)Bi(t,o,i[o],e);else if(i)for(var s=0,r=(i=l(i)).length;s<r;s++)Bi(t,i[s],e,n);else{for(var a in t[Ci])Bi(t,a,t[Ci][a]);delete t[Ci]}return this}function Zi(){return Lt&&(!et&&!ct)}var Ei={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ki(i,t,e,n){var o=t+m(e)+(n?"_"+m(n):"");if(i[Ci]&&i[Ci][o])return this;var s,r,a,h,u,l,c=function(t){return e.call(n||i,t||window.event)},_=c;function d(t){if(Lt){if(!t.isPrimary)return;if("mouse"===t.pointerType)return}else if(1<t.touches.length)return;var i=Date.now(),e=i-(h||i);u=t.touches?t.touches[0]:t,l=0<e&&e<=250,h=i}function p(t){if(l&&!u.cancelBubble){if(Lt){if("mouse"===t.pointerType)return;var i,e,n={};for(e in u)i=u[e],n[e]=i&&i.bind?i.bind(u):i;u=n}u.type="dblclick",u.button=0,r(u),h=null}}Lt&&0===t.indexOf("touch")?jt(i,t,c,o):bt&&"dblclick"===t&&!Zi()?(r=c,l=!1,(s=i)[Gt+Vt+(a=o)]=d,s[Gt+qt+a]=p,s[Gt+"dblclick"+a]=r,s.addEventListener(Vt,d,!!Ct&&{passive:!1}),s.addEventListener(qt,p,!!Ct&&{passive:!1}),s.addEventListener("dblclick",r,!1)):"addEventListener"in i?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?i.addEventListener(Ei[t]||t,c,!!Ct&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?(c=function(t){t=t||window.event,Vi(i,t)&&_(t)},i.addEventListener(Ei[t],c,!1)):i.addEventListener(t,_,!1):"attachEvent"in i&&i.attachEvent("on"+t,c),i[Ci]=i[Ci]||{},i[Ci][o]=c}function Bi(t,i,e,n){var o,s,r,a,h,u,l,c,_=i+m(e)+(n?"_"+m(n):""),d=t[Ci]&&t[Ci][_];if(!d)return this;Lt&&0===i.indexOf("touch")?(c=(u=t)["_leaflet_"+(l=i)+_],"touchstart"===l?u.removeEventListener(At,c,!1):"touchmove"===l?u.removeEventListener(It,c,!1):"touchend"===l&&(u.removeEventListener(Ot,c,!1),u.removeEventListener(Rt,c,!1))):bt&&"dblclick"===i&&!Zi()?(r=(o=t)[Gt+Vt+(s=_)],a=o[Gt+qt+s],h=o[Gt+"dblclick"+s],o.removeEventListener(Vt,r,!!Ct&&{passive:!1}),o.removeEventListener(qt,a,!!Ct&&{passive:!1}),o.removeEventListener("dblclick",h,!1)):"removeEventListener"in t?t.removeEventListener(Ei[i]||i,d,!1):"detachEvent"in t&&t.detachEvent("on"+i,d),t[Ci][_]=null}function Ai(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Ui(t),this}function Ii(t){return ki(t,"wheel",Ai),this}function Oi(t){return zi(t,"mousedown touchstart dblclick",Ai),ki(t,"click",Fi),this}function Ri(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ni(t){return Ri(t),Ai(t),this}function Di(t,i){if(!i)return new k(t.clientX,t.clientY);var e=Ti(i),n=e.boundingClientRect;return new k((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}var ji=pt&&ut?2*window.devicePixelRatio:lt?window.devicePixelRatio:1;function Wi(t){return et?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/ji:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var Hi={};function Fi(t){Hi[t.type]=!0}function Ui(t){var i=Hi[t.type];return Hi[t.type]=!1,i}function Vi(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}var qi={on:zi,off:Si,stopPropagation:Ai,disableScrollPropagation:Ii,disableClickPropagation:Oi,preventDefault:Ri,stop:Ni,getMousePosition:Di,getWheelDelta:Wi,fakeStop:Fi,skipped:Ui,isExternalTarget:Vi,addListener:zi,removeListener:Si},Gi=E.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=yi(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=M(this._animate,this),this._step()},_step:function(t){var i=new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),vi(this._el,e),this.fire("step")},_complete:function(){z(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Ki=E.extend({options:{crs:Y,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=c(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=p(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(j(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ii&&vt&&!Tt&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),zi(this._proxy,ei,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,i,e){if((i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(j(t),i,this.options.maxBounds),e=e||{},this._stop(),this._loaded&&!e.reset&&!0!==e)&&(void 0!==e.animate&&(e.zoom=h({animate:e.animate},e.zoom),e.pan=h({animate:e.animate,duration:e.duration},e.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,e.zoom):this._tryAnimatedPan(t,e.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,i),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(vt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(vt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof k?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():N(t);var e=A(i.paddingTopLeft||i.padding||[0,0]),n=A(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=N(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){return i=i||{},(t=A(t).round()).x||t.y?(!0===i.animate||this.getSize().contains(t)?(this._panAnim||(this._panAnim=new Gi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate?(ci(this._mapPane,"leaflet-pan-anim"),e=this._getMapPanePos().subtract(t).round(),this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)):(this._rawPanBy(t),this.fire("move").fire("moveend"))):this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this):this.fire("moveend");var e},flyTo:function(s,r,t){if(!1===(t=t||{}).animate||!vt)return this.setView(s,r,t);this._stop();var a=this.project(this.getCenter()),h=this.project(s),i=this.getSize(),u=this._zoom;s=j(s),r=void 0===r?u:r;var l=Math.max(i.x,i.y),n=l*this.getZoomScale(u,r),c=h.distanceTo(a)||1,_=1.42,o=_*_;function e(t){var i=(n*n-l*l+(t?-1:1)*o*o*c*c)/(2*(t?n:l)*o*c),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=e(0);function f(t){return l*(p(m)*(d(i=m+_*t)/p(i))-d(m))/o;var i}var g=Date.now(),v=(e(1)-m)/_,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var i,e,n=(Date.now()-g)/y,o=(i=n,(1-Math.pow(1-i,1.5))*v);n<=1?(this._flyToFrame=M(t,this),this._move(this.unproject(a.add(h.subtract(a).multiplyBy(f(o)/c)),u),this.getScaleZoom(l/(e=o,l*(p(m)/p(m+_*e))),u),{flyTo:!0})):this._move(s,r)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=N(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,N(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},panInside:function(t,i){var e,n,o=A((i=i||{}).paddingTopLeft||i.padding||[0,0]),s=A(i.paddingBottomRight||i.padding||[0,0]),r=this.getCenter(),a=this.project(r),h=this.project(t),u=this.getPixelBounds(),l=u.getSize().divideBy(2),c=O([u.min.add(o),u.max.subtract(s)]);return c.contains(h)||(this._enforcingBounds=!0,e=a.subtract(h),n=A(h.x+e.x,h.y+e.y),(h.x<c.min.x||h.x>c.max.x)&&(n.x=a.x-e.x,0<e.x?n.x+=l.x-o.x:n.x-=l.x-s.x),(h.y<c.min.y||h.y>c.max.y)&&(n.y=a.y-e.y,0<e.y?n.y+=l.y-o.y:n.y-=l.y-s.y),this.panTo(this.unproject(n),i),this._enforcingBounds=!1),this},invalidateSize:function(t){if(!this._loaded)return this;t=h({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var e=this.getSize(),n=i.divideBy(2).round(),o=e.divideBy(2).round(),s=n.subtract(o);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(p(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:e})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=h({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=p(this._handleGeolocationResponse,this),e=p(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,e,t):navigator.geolocation.getCurrentPosition(i,e,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i,e=new D(t.coords.latitude,t.coords.longitude),n=e.toBounds(2*t.coords.accuracy),o=this._locateOptions;o.setView&&(i=this.getBoundsZoom(n),this.setView(e,o.maxZoom?Math.min(i,o.maxZoom):i));var s={latlng:e,bounds:n,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ri(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)ri(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=si("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new R(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=N(t),e=A(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=O(this.project(a,n),this.project(r,n)).getSize(),l=vt?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_),n=this.getScaleZoom(d,n);return l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new k(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new I(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(j(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(A(t),i)},layerPointToLatLng:function(t){var i=A(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(j(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(j(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(N(t))},distance:function(t,i){return this.options.crs.distance(j(t),j(i))},containerPointToLayerPoint:function(t){return A(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return A(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(A(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)))},mouseEventToContainerPoint:function(t){return Di(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=ni(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");zi(i,"scroll",this._onScroll,this),this._containerId=m(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&vt,ci(t,"leaflet-container"+(bt?" leaflet-touch":"")+(zt?" leaflet-retina":"")+(it?" leaflet-oldie":"")+(ct?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=oi(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),vi(this._mapPane,new k(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ci(t.markerPane,"leaflet-zoom-hide"),ci(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){vi(this._mapPane,new k(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){vi(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var i=t?Si:zi;i((this._targets[m(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),vt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){z(this._resizeRequest),this._resizeRequest=M(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,n=[],o="mouseout"===i||"mouseover"===i,s=t.target||t.srcElement,r=!1;s;){if((e=this._targets[m(s)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){r=!0;break}if(e&&e.listens(i,!0)){if(o&&!Vi(s,t))break;if(n.push(e),o)break}if(s===this._container)break;s=s.parentNode}return n.length||r||o||!Vi(s,t)||(n=[this]),n},_handleDOMEvent:function(t){var i;this._loaded&&!Ui(t)&&("mousedown"!==(i=t.type)&&"keypress"!==i&&"keyup"!==i&&"keydown"!==i||Pi(t.target||t.srcElement),this._fireDOMEvent(t,i))},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,e){var n;if("click"===t.type&&((n=h({},t)).type="preclick",this._fireDOMEvent(n,n.type,e)),!t._stopped&&(e=(e||[]).concat(this._findEventTargets(t,i))).length){var o=e[0];"contextmenu"===i&&o.listens(i,!0)&&Ri(t);var s,r={originalEvent:t};"keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type&&(s=o.getLatLng&&(!o._radius||o._radius<=10),r.containerPoint=s?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=s?o.getLatLng():this.layerPointToLatLng(r.layerPoint));for(var a=0;a<e.length;a++)if(e[a].fire(i,r,!0),r.originalEvent._stopped||!1===e[a].options.bubblingMouseEvents&&-1!==v(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return yi(this._mapPane)||new k(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return O([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new I(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new I(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=O(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new k(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return 0<t+i?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=vt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){_i(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=si("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ti,e=this._proxy.style[i];gi(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ri(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),i=this.getZoom();gi(this._proxy,this.project(t,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(M(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,e,n){this._mapPane&&(e&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,ci(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:n}),setTimeout(p(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&_i(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),M(function(){this._moveEnd(!0)},this))}});function Yi(t){return new Xi(t)}var Xi=S.extend({options:{position:"topright"},initialize:function(t){c(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return ci(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(ri(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}});Ki.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",s=this._controlContainer=si("div",o+"control-container",this._container);function t(t,i){var e=o+t+" "+o+i;n[t+i]=si("div",e,s)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ri(this._controlCorners[t]);ri(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ji=Xi.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){for(var n in c(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Xi.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(m(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){ci(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(ci(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):_i(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return _i(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=si("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),Oi(i),Ii(i);var n=this._section=si("section",t+"-list");e&&(this._map.on("click",this.collapse,this),ot||zi(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=si("a",t+"-toggle",i);o.href="#",o.title="Layers",bt?(zi(o,"click",Ni),zi(o,"click",this.expand,this)):zi(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=si("div",t+"-base",n),this._separator=si("div",t+"-separator",n),this._overlaysList=si("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&m(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(p(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ai(this._baseLayersList),ai(this._overlaysList),this._layerControlInputs=[];for(var t,i,e,n=0,o=0;o<this._layers.length;o++)e=this._layers[o],this._addItem(e),i=i||e.overlay,t=t||!e.overlay,n+=e.overlay?0:1;return this.options.hideSingleBase&&(t=t&&1<n,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(m(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+m(this),n),this._layerControlInputs.push(i),i.layerId=m(t.layer),zi(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("div");return e.appendChild(s),s.appendChild(i),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;0<=s;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;0<=o;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),$i=Xi.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=si("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=si("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),Oi(s),zi(s,"click",Ni),zi(s,"click",o,this),zi(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";_i(this._zoomInButton,i),_i(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMinZoom()||ci(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMaxZoom()||ci(this._zoomInButton,i)}});Ki.mergeOptions({zoomControl:!0}),Ki.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new $i,this.addControl(this.zoomControl))});var Qi=Xi.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=si("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=si("div",i,e)),t.imperial&&(this._iScale=si("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;5280<o?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return i*(e=10<=e?10:5<=e?5:3<=e?3:2<=e?2:1)}}),te=Xi.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){c(this,t),this._attributions={}},onAdd:function(t){for(var i in(t.attributionControl=this)._container=si("div","leaflet-control-attribution"),Oi(this._container),t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});Ki.mergeOptions({attributionControl:!0}),Ki.addInitHook(function(){this.options.attributionControl&&(new te).addTo(this)});Xi.Layers=Ji,Xi.Zoom=$i,Xi.Scale=Qi,Xi.Attribution=te,Yi.layers=function(t,i,e){return new Ji(t,i,e)},Yi.zoom=function(t){return new $i(t)},Yi.scale=function(t){return new Qi(t)},Yi.attribution=function(t){return new te(t)};var ie=S.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}});ie.addTo=function(t,i){return t.addHandler(i,this),this};var ee,ne={Events:Z},oe=bt?"touchstart mousedown":"mousedown",se={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},re={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},ae=E.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){c(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(zi(this._dragStartTarget,oe,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ae._dragging===this&&this.finishDrag(),Si(this._dragStartTarget,oe,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){var i,e;!t._simulated&&this._enabled&&(this._moved=!1,li(this._element,"leaflet-zoom-anim")||ae._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((ae._dragging=this)._preventOutline&&Pi(this._element),xi(),Xt(),this._moving||(this.fire("down"),i=t.touches?t.touches[0]:t,e=bi(this._element),this._startPoint=new k(i.clientX,i.clientY),this._parentScale=Ti(e),zi(document,re[t.type],this._onMove,this),zi(document,se[t.type],this._onUp,this))))},_onMove:function(t){var i,e;!t._simulated&&this._enabled&&(t.touches&&1<t.touches.length?this._moved=!0:((e=new k((i=t.touches&&1===t.touches.length?t.touches[0]:t).clientX,i.clientY)._subtract(this._startPoint)).x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Ri(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=yi(this._element).subtract(e),ci(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ci(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,z(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0))))},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),vi(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in _i(document.body,"leaflet-dragging"),this._lastTarget&&(_i(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),re)Si(document,re[t],this._onMove,this),Si(document,se[t],this._onUp,this);wi(),Jt(),this._moved&&this._moving&&(z(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,ae._dragging=!1}});function he(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=function(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,function t(i,e,n,o,s){var r,a,h,u=0;for(a=o+1;a<=s-1;a++)h=de(i[a],i[o],i[s],!0),u<h&&(r=a,u=h);n<u&&(e[r]=1,t(i,e,n,o,r),t(i,e,n,r,s))}(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}(t=function(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)(function(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n})(t[n],t[o])>i&&(e.push(t[n]),o=n);o<s-1&&e.push(t[s-1]);return e}(t,e),e)}function ue(t,i,e){return Math.sqrt(de(t,i,e,!0))}function le(t,i,e,n,o){var s,r,a,h=n?ee:_e(t,e),u=_e(i,e);for(ee=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=_e(r=ce(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function ce(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new k(s,r,o)}function _e(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function de(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return 0<u&&(1<(o=((t.x-s)*a+(t.y-r)*h)/u)?(s=e.x,r=e.y):0<o&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new k(s,r)}function pe(t){return!g(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function me(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pe(t)}var fe={simplify:he,pointToSegmentDistance:ue,closestPointOnSegment:function(t,i,e){return de(t,i,e)},clipSegment:le,_getEdgeIntersection:ce,_getBitCode:_e,_sqClosestPointOnSegment:de,isFlat:pe,_flat:me};function ge(t,i,e){for(var n,o,s,r,a,h,u,l=[1,4,2,8],c=0,_=t.length;c<_;c++)t[c]._code=_e(t[c],i);for(s=0;s<4;s++){for(h=l[s],n=[],c=0,o=(_=t.length)-1;c<_;o=c++)r=t[c],a=t[o],r._code&h?a._code&h||((u=ce(a,r,h,i,e))._code=_e(u,i),n.push(u)):(a._code&h&&((u=ce(a,r,h,i,e))._code=_e(u,i),n.push(u)),n.push(r));t=n}return t}var ve,ye={clipPolygon:ge},xe={project:function(t){return new k(t.lng,t.lat)},unproject:function(t){return new D(t.y,t.x)},bounds:new I([-180,-90],[180,90])},we={R:6378137,R_MINOR:6356752.314245179,bounds:new I([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2),n=-e*Math.log(Math.max(a,1e-10));return new k(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&1e-7<Math.abs(u);h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new D(a*e,t.x*e/n)}},Pe={LonLat:xe,Mercator:we,SphericalMercator:V},Le=h({},F,{code:"EPSG:3395",projection:we,transformation:G(ve=.5/(Math.PI*we.R),.5,-ve,.5)}),be=h({},F,{code:"EPSG:4326",projection:xe,transformation:G(1/180,1,-1/180,.5)}),Te=h({},H,{projection:xe,transformation:G(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});H.Earth=F,H.EPSG3395=Le,H.EPSG3857=Y,H.EPSG900913=X,H.EPSG4326=be,H.Simple=Te;var Me=E.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[m(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[m(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i,e=t.target;e.hasLayer(this)&&(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents&&(i=this.getEvents(),e.on(i,this),this.once("remove",function(){e.off(i,this)},this)),this.onAdd(e),this.getAttribution&&e.attributionControl&&e.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),e.fire("layeradd",{layer:this}))}});Ki.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=m(t);return this._layers[i]||((this._layers[i]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var i=m(t);return this._layers[i]&&(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return!!t&&m(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?g(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[m(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=m(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers)var o=this._zoomBoundLayers[n].options,t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom);this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ze=Me.extend({initialize:function(t,i){var e,n;if(c(this,i),this._layers={},t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:m}),Ce=ze.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ze.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),ze.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new R;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Se=S.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){c(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=A(n),s=A("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return(i=i||document.createElement("img")).src=t,i},_getIconUrl:function(t){return zt&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var Ze=Se.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Ze.imagePath||(Ze.imagePath=this._detectIconPath()),(this.options.imagePath||Ze.imagePath)+Se.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=si("div","leaflet-default-icon-path",document.body),i=oi(t,"background-image")||oi(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ee=ie.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new ae(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ci(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&_i(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i,e=this._marker,n=e._map,o=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,r=yi(e._icon),a=n.getPixelBounds(),h=n.getPixelOrigin(),u=O(a.min._subtract(h).add(s),a.max._subtract(h).subtract(s));u.contains(r)||(i=A((Math.max(u.max.x,r.x)-u.max.x)/(a.max.x-u.max.x)-(Math.min(u.min.x,r.x)-u.min.x)/(a.min.x-u.min.x),(Math.max(u.max.y,r.y)-u.max.y)/(a.max.y-u.max.y)-(Math.min(u.min.y,r.y)-u.min.y)/(a.min.y-u.min.y)).multiplyBy(o),n.panBy(i,{animate:!1}),this._draggable._newPos._add(i),this._draggable._startPos._add(i),vi(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(z(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=yi(i._icon),o=i._map.layerPointToLatLng(n);e&&vi(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){z(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),ke=Me.extend({options:{icon:new Ze,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){c(this,i),this._latlng=j(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=j(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){var t;return this._icon&&this._map&&(t=this._map.latLngToLayerPoint(this._latlng).round(),this._setPos(t)),this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),ci(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(ci(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ri(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ri(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&vi(this._icon,t),this._shadow&&vi(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){var t;this.options.interactive&&(ci(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ee&&(t=this.options.draggable,this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ee(this),t&&this.dragging.enable()))},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&mi(this._icon,t),this._shadow&&mi(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var Be=Me.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return c(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Ae=Be.extend({options:{fill:!0,radius:10},initialize:function(t,i){c(this,i),this._latlng=j(t),this._radius=this.options.radius},setLatLng:function(t){var i=this._latlng;return this._latlng=j(t),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Be.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new I(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var Ie=Ae.extend({initialize:function(t,i,e){if("number"==typeof i&&(i=h({},e,{radius:i})),c(this,i),this._latlng=j(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new R(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Be.prototype.setStyle,_project:function(){var t,i,e,n,o,s,r,a,h=this._latlng.lng,u=this._latlng.lat,l=this._map,c=l.options.crs;c.distance===F.distance?(t=Math.PI/180,i=this._mRadius/F.R/t,e=l.project([u+i,h]),n=l.project([u-i,h]),o=e.add(n).divideBy(2),s=l.unproject(o).lat,r=Math.acos((Math.cos(i*t)-Math.sin(u*t)*Math.sin(s*t))/(Math.cos(u*t)*Math.cos(s*t)))/t,!isNaN(r)&&0!==r||(r=i/Math.cos(Math.PI/180*u)),this._point=o.subtract(l.getPixelOrigin()),this._radius=isNaN(r)?0:o.x-l.project([s,h-r]).x,this._radiusY=o.y-e.y):(a=c.unproject(c.project(this._latlng).subtract([this._mRadius,0])),this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(a).x),this._updateBounds()}});var Oe=Be.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){c(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=de,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(i=t=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(n=t=0;t<h-1;t++)if(o=a[t],s=a[t+1],i<(n+=e=o.distanceTo(s)))return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=j(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new R,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return pe(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=pe(t),n=0,o=t.length;n<o;n++)e?(i[n]=j(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new I;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new k(t,t);this._pxBounds=new I([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)])},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof D,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,e,n,o,s=this._parts,r=0,a=0,h=this._rings.length;r<h;r++)for(i=0,e=(o=this._rings[r]).length;i<e-1;i++)(n=le(o[i],o[i+1],t,i,!0))&&(s[a]=s[a]||[],s[a].push(n[0]),n[1]===o[i+1]&&i!==e-2||(s[a].push(n[1]),a++))},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=he(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&ue(t,a[o],a[n])<=h)return!0;return!1}});Oe._flat=me;var Re=Oe.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(t=s=r=a=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=Oe.prototype._convertLatLngs.call(this,t),e=i.length;return 2<=e&&i[0]instanceof D&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){Oe.prototype._setLatLngs.call(this,t),pe(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pe(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new k(i,i),t=new I(t.min.subtract(e),t.max.add(e));if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=ge(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||Oe.prototype._containsPoint.call(this,t,!0)}});var Ne=Ce.extend({initialize:function(t,i){c(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=g(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=De(t,s);return r?(r.feature=qe(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=h({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(t){this._setLayerStyle(t,i)},this)},_setLayerStyle:function(t,i){t.setStyle&&("function"==typeof i&&(i=i(t.feature)),t.setStyle(i))}});function De(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||We;if(!a&&!r)return null;switch(r.type){case"Point":return je(u,t,e=l(a),i);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(je(u,t,e,i));return new Ce(h);case"LineString":case"MultiLineString":return n=He(a,"LineString"===r.type?0:1,l),new Oe(n,i);case"Polygon":case"MultiPolygon":return n=He(a,"Polygon"===r.type?1:2,l),new Re(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=De({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ce(h);default:throw new Error("Invalid GeoJSON object.")}}function je(t,i,e,n){return t?t(i,e):new ke(e,n&&n.markersInheritOptions&&n)}function We(t){return new D(t[1],t[0],t[2])}function He(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?He(t[s],i-1,e):(e||We)(t[s]),o.push(n);return o}function Fe(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[r(t.lng,i),r(t.lat,i),r(t.alt,i)]:[r(t.lng,i),r(t.lat,i)]}function Ue(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Ue(t[s],i-1,e,n):Fe(t[s],n));return!i&&e&&o.push(o[0]),o}function Ve(t,i){return t.feature?h({},t.feature,{geometry:i}):qe(i)}function qe(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var Ge={toGeoJSON:function(t){return Ve(this,{type:"Point",coordinates:Fe(this.getLatLng(),t)})}};function Ke(t,i){return new Ne(t,i)}ke.include(Ge),Ie.include(Ge),Ae.include(Ge),Oe.include({toGeoJSON:function(t){var i=!pe(this._latlngs);return Ve(this,{type:(i?"Multi":"")+"LineString",coordinates:Ue(this._latlngs,i?1:0,!1,t)})}}),Re.include({toGeoJSON:function(t){var i=!pe(this._latlngs),e=i&&!pe(this._latlngs[0]),n=Ue(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Ve(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),ze.include({toMultiPoint:function(i){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON(i).geometry.coordinates)}),Ve(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(n){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(n);var o="GeometryCollection"===t,s=[];return this.eachLayer(function(t){var i,e;t.toGeoJSON&&(i=t.toGeoJSON(n),o?s.push(i.geometry):"FeatureCollection"===(e=qe(i)).type?s.push.apply(s,e.features):s.push(e))}),o?Ve(this,{geometries:s,type:"GeometryCollection"}):{type:"FeatureCollection",features:s}}});var Ye=Ke,Xe=Me.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=N(i),c(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ci(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ri(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&hi(this._image),this},bringToBack:function(){return this._map&&ui(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=N(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:si("img");ci(i,"leaflet-image-layer"),this._zoomAnimated&&ci(i,"leaflet-zoom-animated"),this.options.className&&ci(i,this.options.className),i.onselectstart=a,i.onmousemove=a,i.onload=p(this.fire,this,"load"),i.onerror=p(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;gi(this._image,e,i)},_reset:function(){var t=this._image,i=new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();vi(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){mi(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),Je=Xe.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:si("video");if(ci(i,"leaflet-image-layer"),this._zoomAnimated&&ci(i,"leaflet-zoom-animated"),this.options.className&&ci(i,this.options.className),i.onselectstart=a,i.onmousemove=a,i.onloadeddata=p(this.fire,this,"load"),t){for(var e=i.getElementsByTagName("source"),n=[],o=0;o<e.length;o++)n.push(e[o].src);this._url=0<e.length?n:[i.src]}else{g(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(i.style,"objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop,i.muted=!!this.options.muted;for(var s=0;s<this._url.length;s++){var r=si("source");r.src=this._url[s],i.appendChild(r)}}}});var $e=Xe.extend({_initImage:function(){var t=this._image=this._url;ci(t,"leaflet-image-layer"),this._zoomAnimated&&ci(t,"leaflet-zoom-animated"),this.options.className&&ci(t,this.options.className),t.onselectstart=a,t.onmousemove=a}});var Qe=Me.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){c(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&mi(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&mi(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(mi(this._container,0),this._removeTimeout=setTimeout(p(ri,void 0,this._container),200)):ri(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=j(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&hi(this._container),this},bringToBack:function(){return this._map&&ui(this._container),this},_prepareOpen:function(t,i,e){if(i instanceof Me||(e=i,i=t),i instanceof Ce)for(var n in t._layers){i=t._layers[n];break}if(!e)if(i.getCenter)e=i.getCenter();else{if(!i.getLatLng)throw new Error("Unable to get source layer LatLng.");e=i.getLatLng()}return this._source=i,this.update(),e},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){var t,i,e,n,o;this._map&&(t=this._map.latLngToLayerPoint(this._latlng),i=A(this.options.offset),e=this._getAnchor(),this._zoomAnimated?vi(this._container,t.add(e)):i=i.add(t).add(e),n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x,this._container.style.bottom=n+"px",this._container.style.left=o+"px")},_getAnchor:function(){return[0,0]}}),tn=Qe.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){Qe.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Be||this._source.on("preclick",Ai))},onRemove:function(t){Qe.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Be||this._source.off("preclick",Ai))},getEvents:function(){var t=Qe.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,i="leaflet-popup",e=this._container=si("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),n=this._wrapper=si("div",i+"-content-wrapper",e);this._contentNode=si("div",i+"-content",n),Oi(e),Ii(this._contentNode),zi(e,"contextmenu",Ai),this._tipContainer=si("div",i+"-tip-container",e),this._tip=si("div",i+"-tip",this._tipContainer),this.options.closeButton&&((t=this._closeButton=si("a",i+"-close-button",e)).href="#close",t.innerHTML="&#215;",zi(t,"click",this._onCloseButtonClick,this))},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth,e=Math.min(e,this.options.maxWidth);e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&o<n?(i.height=o+"px",ci(t,s)):_i(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();vi(this._container,i.add(e))},_adjustPan:function(){var t,i,e,n,o,s,r,a,h,u,l,c;this.options.autoPan&&(this._map._panAnim&&this._map._panAnim.stop(),t=this._map,i=parseInt(oi(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,(o=new k(this._containerLeft,-e-this._containerBottom))._add(yi(this._container)),s=t.layerPointToContainerPoint(o),r=A(this.options.autoPanPadding),a=A(this.options.autoPanPaddingTopLeft||r),h=A(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),c=l=0,s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c]))},_onCloseButtonClick:function(t){this._close(),Ni(t)},_getAnchor:function(){return A(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});Ki.mergeOptions({closePopupOnClick:!0}),Ki.include({openPopup:function(t,i,e){return t instanceof tn||(t=new tn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Me.include({bindPopup:function(t,i){return t instanceof tn?(c(t,i),(this._popup=t)._source=this):(this._popup&&!i||(this._popup=new tn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){return this._popup&&this._map&&(i=this._popup._prepareOpen(this,t,i),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Ni(t),i instanceof Be?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var en=Qe.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){Qe.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){Qe.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=Qe.prototype.getEvents.call(this);return bt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=si("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i,e=this._map,n=this._container,o=e.latLngToContainerPoint(e.getCenter()),s=e.layerPointToContainerPoint(t),r=this.options.direction,a=n.offsetWidth,h=n.offsetHeight,u=A(this.options.offset),l=this._getAnchor(),c="top"===r?(i=a/2,h):"bottom"===r?(i=a/2,0):(i="center"===r?a/2:"right"===r?0:"left"===r?a:s.x<o.x?(r="right",0):(r="left",a+2*(u.x+l.x)),h/2);t=t.subtract(A(i,c,!0)).add(u).add(l),_i(n,"leaflet-tooltip-right"),_i(n,"leaflet-tooltip-left"),_i(n,"leaflet-tooltip-top"),_i(n,"leaflet-tooltip-bottom"),ci(n,"leaflet-tooltip-"+r),vi(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&mi(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return A(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});Ki.include({openTooltip:function(t,i,e){return t instanceof en||(t=new en(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Me.include({bindTooltip:function(t,i){return t instanceof en?(c(t,i),(this._tooltip=t)._source=this):(this._tooltip&&!i||(this._tooltip=new en(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){var i,e;!t&&this._tooltipHandlersAdded||(i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip},this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),bt&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t)},openTooltip:function(t,i){return this._tooltip&&this._map&&(i=this._tooltip._prepareOpen(this,t,i),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(ci(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(_i(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var nn=Se.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i,e=t&&"DIV"===t.tagName?t:document.createElement("div"),n=this.options;return n.html instanceof Element?(ai(e),e.appendChild(n.html)):e.innerHTML=!1!==n.html?n.html:"",n.bgPos&&(i=A(n.bgPos),e.style.backgroundPosition=-i.x+"px "+-i.y+"px"),this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});Se.Default=Ze;var on=Me.extend({options:{tileSize:256,opacity:1,updateWhenIdle:yt,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){c(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ri(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(hi(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ui(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=n(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof k?t:new k(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!it){mi(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o,s=this._tiles[n];s.current&&s.loaded&&(o=Math.min(1,(t-s.loaded)/200),mi(s.el,o),o<1?i=!0:(s.active?e=!0:this._onOpaqueTile(s),s.active=!0))}e&&!this._noPrune&&this._pruneTiles(),i&&(z(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:a,_initContainer:function(){this._container||(this._container=si("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)e=Number(e),this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ri(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=si("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),a(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:a,_onRemoveLevel:a,_onCreateLevel:a,_pruneTiles:function(){if(this._map){var t,i,e,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles){(e=this._tiles[t]).current&&!e.active&&(i=e.coords,this._retainParent(i.x,i.y,i.z,i.z-5)||this._retainChildren(i.x,i.y,i.z,i.z+2))}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ri(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new k(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?u.retain=!0:(u&&u.loaded&&(u.retain=!0),n<r&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new k(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=Math.round(i),o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o),s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();vt?gi(t.el,o,n):vi(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new I(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new I(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new k(l.x,l.y))||(this._tiles[u].current=!1)}if(1<Math.abs(e-this._tileZoom))this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d,p=new k(_,c);p.z=this._tileZoom,this._isValidTile(p)&&((d=this._tiles[this._tileCoordsToKey(p)])?d.current=!0:r.push(p))}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));for(var m=document.createDocumentFragment(),_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return N(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new R(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new k(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(ri(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){ci(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=a,t.onmousemove=a,it&&this.options.opacity<1&&mi(t,this.options.opacity),ot&&!st&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var e=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),p(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&M(p(this._tileReady,this,t,null,o)),vi(o,e),this._tiles[n]={el:o,coords:t,current:!0},i.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,i,e){i&&this.fire("tileerror",{error:i,tile:e,coords:t});var n=this._tileCoordsToKey(t);(e=this._tiles[n])&&(e.loaded=+new Date,this._map._fadeAnimated?(mi(e.el,0),z(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),i||(ci(e.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),it||!this._map._fadeAnimated?M(this._pruneTiles,this):setTimeout(p(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new k(this._wrapX?o(t.x,this._wrapX):t.x,this._wrapY?o(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new I(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var sn=on.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=c(this,i)).detectRetina&&zt&&0<i.maxZoom&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),ot||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var e=document.createElement("img");return zi(e,"load",p(this._tileOnLoad,this,i,e)),zi(e,"error",p(this._tileOnError,this,i,e)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),e.alt="",e.setAttribute("role","presentation"),e.src=this.getTileUrl(t),e},getTileUrl:function(t){var i,e={r:zt?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};return this._map&&!this._map.options.crs.infinite&&(i=this._globalTileRange.max.y-t.y,this.options.tms&&(e.y=i),e["-y"]=i),f(this._url,h(e,this.options))},_tileOnLoad:function(t,i){it?setTimeout(p(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom;return this.options.zoomReverse&&(t=i-t),t+this.options.zoomOffset},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=a,i.onerror=a,i.complete||(i.src=y,ri(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return at||i.el.setAttribute("src",y),on.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==y))return on.prototype._tileReady.call(this,t,i,e)}});function rn(t,i){return new sn(t,i)}var an=sn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,i){this._url=t;var e=h({},this.defaultWmsParams);for(var n in i)n in this.options||(e[n]=i[n]);var o=(i=c(this,i)).detectRetina&&zt?2:1,s=this.getTileSize();e.width=s.x*o,e.height=s.y*o,this.wmsParams=e},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[i]=this._crs.code,sn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=O(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(1.3<=this._wmsVersion&&this._crs===be?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=sn.prototype.getTileUrl.call(this,t);return a+_(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,i){return h(this.wmsParams,t),i||this.redraw(),this}});sn.WMS=an,rn.wms=function(t,i){return new an(t,i)};var hn=Me.extend({options:{padding:.1,tolerance:0},initialize:function(t){c(this,t),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&ci(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=yi(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);vt?gi(this._container,a,e):vi(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new I(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),un=hn.extend({getEvents:function(){var t=hn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){hn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");zi(t,"mousemove",this._onMouseMove,this),zi(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),zi(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){z(this._redrawRequest),delete this._ctx,ri(this._container),Si(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){var t,i,e,n;this._map._animatingZoom&&this._bounds||(hn.prototype._update.call(this),t=this._bounds,i=this._container,e=t.getSize(),n=zt?2:1,vi(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",zt&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update"))},_reset:function(){hn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);var i=(this._layers[m(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[m(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){for(var i,e=t.options.dashArray.split(/[, ]+/),n=[],o=0;o<e.length;o++){if(i=Number(e[o]),isNaN(i))return;n.push(i)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){var i;t._pxBounds&&(i=(t.options.weight||0)+1,this._redrawBounds=this._redrawBounds||new I,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i])))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t,i=this._redrawBounds;i?(t=i.getSize(),this._ctx.clearRect(i.min.x,i.min.y,t.x,t.y)):(this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore())},_draw:function(){var t,i,e=this._redrawBounds;this._ctx.save(),e&&(i=e.getSize(),this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()),this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){var i,e,n,o;this._drawing&&!t._empty()&&(i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),1!=(o=(Math.max(Math.round(t._radiusY),1)||n)/n)&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!=o&&e.restore(),this._fillStroke(e,t))},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&(("click"===t.type||"preclick"!==t.type)&&this._map._draggableMoved(i)||(e=i));e&&(Fi(t),this._fireEvent([e],t))},_onMouseMove:function(t){var i;!this._map||this._map.dragging.moving()||this._map._animatingZoom||(i=this._map.mouseEventToLayerPoint(t),this._handleMouseHover(t,i))},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(_i(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,i){if(!this._mouseHoverThrottled){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(ci(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(p(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i,e,n=t._order;n&&(i=n.next,e=n.prev,i&&((i.prev=e)?e.next=i:i&&(this._drawFirst=i),n.prev=this._drawLast,(this._drawLast.next=n).next=null,this._drawLast=n,this._requestRedraw(t)))},_bringToBack:function(t){var i,e,n=t._order;n&&(i=n.next,(e=n.prev)&&((e.next=i)?i.prev=e:e&&(this._drawLast=e),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)))}});function ln(t){return St?new un(t):null}var cn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_n={_initContainer:function(){this._container=si("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(hn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=cn("shape");ci(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=cn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ri(i),t.removeInteractiveTarget(i),delete this._layers[m(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i=i||(t._stroke=cn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=g(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e=e||(t._fill=cn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){hi(t._container)},_bringToBack:function(t){ui(t._container)}},dn=Et?cn:J,pn=hn.extend({getEvents:function(){var t=hn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=dn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=dn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ri(this._container),Si(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){var t,i,e;this._map._animatingZoom&&this._bounds||(hn.prototype._update.call(this),i=(t=this._bounds).getSize(),e=this._container,this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),vi(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update"))},_initPath:function(t){var i=t._path=dn("path");t.options.className&&ci(i,t.options.className),t.options.interactive&&ci(i,"leaflet-interactive"),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ri(t._path),t.removeInteractiveTarget(t._path),delete this._layers[m(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,$(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){hi(t._path)},_bringToBack:function(t){ui(t._path)}});function mn(t){return Zt||Et?new pn(t):null}Et&&pn.include(_n),Ki.include({getRenderer:function(t){var i=(i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer)||(this._renderer=this._createRenderer());return this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&ln(t)||mn(t)}});var fn=Re.extend({initialize:function(t,i){Re.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=N(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});pn.create=dn,pn.pointsToPath=$,Ne.geometryToLayer=De,Ne.coordsToLatLng=We,Ne.coordsToLatLngs=He,Ne.latLngToCoords=Fe,Ne.latLngsToCoords=Ue,Ne.getFeature=Ve,Ne.asFeature=qe,Ki.mergeOptions({boxZoom:!0});var gn=ie.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){zi(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Si(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ri(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),Xt(),xi(),this._startPoint=this._map.mouseEventToContainerPoint(t),zi(document,{contextmenu:Ni,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=si("div","leaflet-zoom-box",this._container),ci(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new I(this._point,this._startPoint),e=i.getSize();vi(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ri(this._box),_i(this._container,"leaflet-crosshair")),Jt(),wi(),Si(document,{contextmenu:Ni,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){var i;1!==t.which&&1!==t.button||(this._finish(),this._moved&&(this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(p(this._resetState,this),0),i=new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})))},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});Ki.addInitHook("addHandler","boxZoom",gn),Ki.mergeOptions({doubleClickZoom:!0});var vn=ie.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});Ki.addInitHook("addHandler","doubleClickZoom",vn),Ki.mergeOptions({dragging:!0,inertia:!st,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var yn=ie.extend({addHooks:function(){var t;this._draggable||(t=this._map,this._draggable=new ae(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))),ci(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){_i(this._map._container,"leaflet-grab"),_i(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t,i=this._map;i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity?(t=N(this._map.options.maxBounds),this._offsetLimit=O(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))):this._offsetLimit=null,i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){var i,e;this._map.options.inertia&&(i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos,this._positions.push(e),this._times.push(i),this._prunePositions(i)),this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){var t,i;this._viscosity&&this._offsetLimit&&(t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit,t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t))},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i,e,n,o,s,r,a,h,u,l=this._map,c=l.options,_=!c.inertia||this._times.length<2;l.fire("dragend",t),_?l.fire("moveend"):(this._prunePositions(+new Date),i=this._lastPos.subtract(this._positions[0]),e=(this._lastTime-this._times[0])/1e3,n=c.easeLinearity,s=(o=i.multiplyBy(n/e)).distanceTo([0,0]),r=Math.min(c.inertiaMaxSpeed,s),a=o.multiplyBy(r/s),h=r/(c.inertiaDeceleration*n),(u=a.multiplyBy(-h/2).round()).x||u.y?(u=l._limitOffset(u,l.options.maxBounds),M(function(){l.panBy(u,{duration:h,easeLinearity:n,noMoveStart:!0,animate:!0})})):l.fire("moveend"))}});Ki.addInitHook("addHandler","dragging",yn),Ki.mergeOptions({keyboard:!0,keyboardPanDelta:80});var xn=ie.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),zi(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Si(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){var t,i,e,n;this._focused||(t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft,this._map._container.focus(),window.scrollTo(n,e))},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){for(var i=this._panKeys={},e=this.keyCodes,n=0,o=e.left.length;n<o;n++)i[e.left[n]]=[-1*t,0];for(n=0,o=e.right.length;n<o;n++)i[e.right[n]]=[t,0];for(n=0,o=e.down.length;n<o;n++)i[e.down[n]]=[0,t];for(n=0,o=e.up.length;n<o;n++)i[e.up[n]]=[0,-1*t]},_setZoomDelta:function(t){for(var i=this._zoomKeys={},e=this.keyCodes,n=0,o=e.zoomIn.length;n<o;n++)i[e.zoomIn[n]]=t;for(n=0,o=e.zoomOut.length;n<o;n++)i[e.zoomOut[n]]=-t},_addHooks:function(){zi(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Si(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=A(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Ni(t)}}});Ki.addInitHook("addHandler","keyboard",xn),Ki.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var wn=ie.extend({addHooks:function(){zi(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Si(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Wi(t),e=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(e-(new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(p(this._performZoom,this),n),Ni(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(0<this._delta?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});Ki.addInitHook("addHandler","scrollWheelZoom",wn),Ki.mergeOptions({tap:!0,tapTolerance:15});var Pn=ie.extend({addHooks:function(){zi(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Si(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Ri(t),this._fireClick=!0,1<t.touches.length)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],e=i.target;this._startPos=this._newPos=new k(i.clientX,i.clientY),e.tagName&&"a"===e.tagName.toLowerCase()&&ci(e,"leaflet-active"),this._holdTimeout=setTimeout(p(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),zi(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){var i,e;clearTimeout(this._holdTimeout),Si(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches&&((e=(i=t.changedTouches[0]).target)&&e.tagName&&"a"===e.tagName.toLowerCase()&&_i(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i))},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new k(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});!bt||Lt&&!ct||Ki.addInitHook("addHandler","tap",Pn),Ki.mergeOptions({touchZoom:bt&&!st,bounceAtZoomLimits:!0});var Ln=ie.extend({addHooks:function(){ci(this._map._container,"leaflet-touch-zoom"),zi(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){_i(this._map._container,"leaflet-touch-zoom"),Si(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i,e,n=this._map;!t.touches||2!==t.touches.length||n._animatingZoom||this._zooming||(i=n.mouseEventToContainerPoint(t.touches[0]),e=n.mouseEventToContainerPoint(t.touches[1]),this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(i.add(e)._divideBy(2))),this._startDist=i.distanceTo(e),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),zi(document,"touchmove",this._onTouchMove,this),zi(document,"touchend",this._onTouchEnd,this),Ri(t))},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(n)/this._startDist;if(this._zoom=i.getScaleZoom(o,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&o<1||this._zoom>i.getMaxZoom()&&1<o)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{var s=e._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===s.x&&0===s.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),z(this._animRequest);var r=p(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(r,this,!0),Ri(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,z(this._animRequest),Si(document,"touchmove",this._onTouchMove,this),Si(document,"touchend",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});Ki.addInitHook("addHandler","touchZoom",Ln),Ki.BoxZoom=gn,Ki.DoubleClickZoom=vn,Ki.Drag=yn,Ki.Keyboard=xn,Ki.ScrollWheelZoom=wn,Ki.Tap=Pn,Ki.TouchZoom=Ln,t.version="1.7.1",t.Control=Xi,t.control=Yi,t.Browser=Bt,t.Evented=E,t.Mixin=ne,t.Util=C,t.Class=S,t.Handler=ie,t.extend=h,t.bind=p,t.stamp=m,t.setOptions=c,t.DomEvent=qi,t.DomUtil=Mi,t.PosAnimation=Gi,t.Draggable=ae,t.LineUtil=fe,t.PolyUtil=ye,t.Point=k,t.point=A,t.Bounds=I,t.bounds=O,t.Transformation=q,t.transformation=G,t.Projection=Pe,t.LatLng=D,t.latLng=j,t.LatLngBounds=R,t.latLngBounds=N,t.CRS=H,t.GeoJSON=Ne,t.geoJSON=Ke,t.geoJson=Ye,t.Layer=Me,t.LayerGroup=ze,t.layerGroup=function(t,i){return new ze(t,i)},t.FeatureGroup=Ce,t.featureGroup=function(t,i){return new Ce(t,i)},t.ImageOverlay=Xe,t.imageOverlay=function(t,i,e){return new Xe(t,i,e)},t.VideoOverlay=Je,t.videoOverlay=function(t,i,e){return new Je(t,i,e)},t.SVGOverlay=$e,t.svgOverlay=function(t,i,e){return new $e(t,i,e)},t.DivOverlay=Qe,t.Popup=tn,t.popup=function(t,i){return new tn(t,i)},t.Tooltip=en,t.tooltip=function(t,i){return new en(t,i)},t.Icon=Se,t.icon=function(t){return new Se(t)},t.DivIcon=nn,t.divIcon=function(t){return new nn(t)},t.Marker=ke,t.marker=function(t,i){return new ke(t,i)},t.TileLayer=sn,t.tileLayer=rn,t.GridLayer=on,t.gridLayer=function(t){return new on(t)},t.SVG=pn,t.svg=mn,t.Renderer=hn,t.Canvas=un,t.canvas=ln,t.Path=Be,t.CircleMarker=Ae,t.circleMarker=function(t,i){return new Ae(t,i)},t.Circle=Ie,t.circle=function(t,i,e){return new Ie(t,i,e)},t.Polyline=Oe,t.polyline=function(t,i){return new Oe(t,i)},t.Polygon=Re,t.polygon=function(t,i){return new Re(t,i)},t.Rectangle=fn,t.rectangle=function(t,i){return new fn(t,i)},t.Map=Ki,t.map=function(t,i){return new Ki(t,i)};var bn=window.L;t.noConflict=function(){return window.L=bn,this},window.L=t});

/* leaflet-velocity */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    var particle_1 = __webpack_require__(7);
    var CanvasBound = /** @class */ (function () {
        function CanvasBound(xMin, yMin, xMax, yMax) {
            this.xMin = xMin;
            this.yMin = yMin;
            this.xMax = xMax;
            this.yMax = yMax;
        }
        Object.defineProperty(CanvasBound.prototype, "width", {
            get: function () {
                return this.xMax - this.xMin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CanvasBound.prototype, "height", {
            get: function () {
                return this.yMax - this.yMin;
            },
            enumerable: true,
            configurable: true
        });
        CanvasBound.prototype.getRandomParticule = function (maxAge) {
            var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
            var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
            return new particle_1.default(x, y, maxAge);
        };
        CanvasBound.prototype.resetParticule = function (p) {
            var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
            var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
            p.reset(x, y);
            return p;
        };
        return CanvasBound;
    }());
    exports.default = CanvasBound;
    
    
    /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapBound = /** @class */ (function () {
        function MapBound(north, east, south, west) {
            this.north = north * Math.PI / 180;
            this.east = east * Math.PI / 180;
            this.south = south * Math.PI / 180;
            this.west = west * Math.PI / 180;
        }
        Object.defineProperty(MapBound.prototype, "width", {
            get: function () {
                return (720 + this.east - this.west) % 360;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MapBound.prototype, "height", {
            get: function () {
                return (360 + this.north - this.south) % 180;
            },
            enumerable: true,
            configurable: true
        });
        return MapBound;
    }());
    exports.default = MapBound;
    
    
    /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var vector_1 = __webpack_require__(3);
    var grid_1 = __webpack_require__(8);
    var colorScale_1 = __webpack_require__(9);
    var animationBucket_1 = __webpack_require__(10);
    var Windy = /** @class */ (function () {
        function Windy(options) {
            this.canvas = null;
            this.particuleMultiplier = 1 / 300;
            this.autoColorRange = false;
            this.particules = [];
            this.animationLoop = null;
            this.then = 0;
            this.canvas = options.canvas;
            if (options.minVelocity === undefined && options.maxVelocity === undefined) {
                this.autoColorRange = true;
            }
            this.colorScale = new colorScale_1.default(options.minVelocity || 0, options.maxVelocity || 10, options.colorScale);
            this.velocityScale = options.velocityScale || 0.01;
            this.particleAge = options.particleAge || 64;
            this.setData(options.data);
            this.particuleMultiplier = options.particleMultiplier || 1 / 300;
            this.particuleLineWidth = options.lineWidth || 1;
            var frameRate = options.frameRate || 15;
            this.frameTime = 1000 / frameRate;
        }
        Object.defineProperty(Windy.prototype, "particuleCount", {
            get: function () {
                var particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio, 1 / 3) || 1.6) : 1;
                return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particuleMultiplier) * particuleReduction;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Load data
         * @param data
         */
        Windy.prototype.setData = function (data) {
            var uData = null;
            var vData = null;
            var grid = [];
            data.forEach(function (record) {
                switch (record.header.parameterCategory + "," + record.header.parameterNumber) {
                    case "1,2":
                    case "2,2":
                        uData = record;
                        break;
                    case "1,3":
                    case "2,3":
                        vData = record;
                        break;
                    default:
                }
            });
            if (!uData || !vData) {
                console.warn("Data are not correct format");
                return;
            }
            uData.data.forEach(function (u, index) {
                grid.push(new vector_1.default(u, vData.data[index]));
            });
            //console.log('uData', uData);
            //console.log('vData', vData);
            this.grid = new grid_1.default(grid, uData.header.la1, uData.header.lo1, uData.header.dy, uData.header.dx, uData.header.ny, uData.header.nx);
            this.λ0 = uData.header.lo1;
            this.φ0 = uData.header.la1;
            this.Δλ = uData.header.dx;
            this.Δφ = uData.header.dy;
            this.ni = uData.header.nx;
            this.nj = uData.header.ny; // number of grid points W-E and N-S (e.g., 144 x 73)
            var p = 0;
            var isContinuous = Math.floor(this.ni * this.Δλ) >= 360;
            for (var j = 0; j < this.nj; j++) {
                var row = [];
                for (var i = 0; i < this.ni; i++, p++) {
                    row[i] = this.grid.data[p];
                }
                if (isContinuous) {
                    // For wrapped grids, duplicate first column as last column to simplify interpolation logic
                    row.push(row[0]);
                }
                this.grid[j] = row;
            }
            if (this.autoColorRange) {
                var minMax = this.grid.valueRange;
                this.colorScale.setMinMax(minMax[0], minMax[1]);
            }
        };
        Windy.prototype.floorMod = function (a, n) {
            return a - n * Math.floor(a / n);
        };
        ;
        Windy.prototype.isValue = function (x) {
            return x !== null && x !== undefined;
        };
        ;
        Windy.prototype.bilinearInterpolateVector = function (x, y, g00, g10, g01, g11) {
            var rx = (1 - x);
            var ry = (1 - y);
            var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
            var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
            var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
            return [u, v, Math.sqrt(u * u + v * v)];
        };
        ;
        /* Get interpolated grid value from Lon/Lat position
        * @param λ {Float} Longitude
        * @param φ {Float} Latitude
        * @returns {Object}
        */
        Windy.prototype.interpolate = function (λ, φ) {
            if (!this.grid) {
                return null;
            }
            var i = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
            var j = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
            var fi = Math.floor(i);
            var ci = fi + 1;
            var fj = Math.floor(j);
            var cj = fj + 1;
            var row = this.grid[fj]; //Dont know why he dosent found any row ERRRROR
            if (row) {
                var g00 = row[fi];
                var g10 = row[ci];
                if (this.isValue(g00) && this.isValue(g10) && (row = this.grid[cj])) {
                    var g01 = row[fi];
                    var g11 = row[ci];
                    if (this.isValue(g01) && this.isValue(g11)) {
                        // All four points found, so interpolate the value.
                        return this.bilinearInterpolateVector(i - fi, j - fj, g00, g10, g01, g11);
                    }
                }
            }
            return null;
        };
        ;
        Windy.prototype.getParticuleWind = function (p) {
            var lngLat = this.layer.canvasToMap(p.x, p.y);
            var wind = this.grid.get(lngLat[0], lngLat[1]);
            p.intensity = wind.intensity;
            var mapArea = this.layer.mapBound.height * this.layer.mapBound.width;
            var velocityScale = this.velocityScale * Math.pow(mapArea, 0.4);
            this.layer.distort(lngLat[0], lngLat[1], p.x, p.y, velocityScale, wind);
            return wind;
        };
        Windy.prototype.start = function (layer) {
            this.context2D = this.canvas.getContext("2d");
            this.context2D.lineWidth = this.particuleLineWidth;
            this.context2D.fillStyle = "rgba(0, 0, 0, 0.97)";
            this.context2D.globalAlpha = 0.6;
            this.layer = layer;
            this.animationBucket = new animationBucket_1.default(this.colorScale);
            this.particules.splice(0, this.particules.length);
            for (var i = 0; i < this.particuleCount; i++) {
                this.particules.push(this.layer.canvasBound.getRandomParticule(this.particleAge));
            }
            this.then = new Date().getTime();
            this.frame();
        };
        Windy.prototype.frame = function () {
            var _this = this;
            this.animationLoop = requestAnimationFrame(function () {
                _this.frame();
            });
            var now = new Date().getTime();
            var delta = now - this.then;
            if (delta > this.frameTime) {
                this.then = now - (delta % this.frameTime);
                this.evolve();
                this.draw();
            }
        };
        Windy.prototype.evolve = function () {
            var _this = this;
            this.animationBucket.clear();
            this.particules.forEach(function (p) {
                p.grow();
                if (p.isDead) {
                    _this.layer.canvasBound.resetParticule(p);
                }
                var wind = _this.getParticuleWind(p);
                _this.animationBucket.add(p, wind);
            });
        };
        Windy.prototype.draw = function () {
            this.context2D.globalCompositeOperation = "destination-in";
            this.context2D.fillRect(this.layer.canvasBound.xMin, this.layer.canvasBound.yMin, this.layer.canvasBound.width, this.layer.canvasBound.height);
            // Fade existing particle trails.
            this.context2D.globalCompositeOperation = "lighter";
            this.context2D.globalAlpha = 0.9;
            this.animationBucket.draw(this.context2D);
        };
        Windy.prototype.stop = function () {
            this.particules.splice(0, this.particules.length);
            this.animationBucket.clear();
            if (this.animationLoop) {
                clearTimeout(this.animationLoop);
                this.animationLoop = null;
            }
        };
        return Windy;
    }());
    exports.default = Windy;
    
    
    /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vector = /** @class */ (function () {
        function Vector(u, v) {
            this.u = u || 0;
            this.v = v || 0;
        }
        Object.defineProperty(Vector.prototype, "intensity", {
            get: function () {
                return Math.sqrt(this.u * this.u + this.v * this.v);
            },
            enumerable: true,
            configurable: true
        });
        return Vector;
    }());
    exports.default = Vector;
    
    
    /***/ }),
    /* 4 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var CanvasLayer = /** @class */ (function () {
        function CanvasLayer() {
        }
        CanvasLayer.prototype.initialize = function (options) {
            this._map = null;
            this._canvas = null;
            this._frame = null;
            this._delegate = null;
            L.Util.setOptions(this, options);
        };
        CanvasLayer.prototype.delegate = function (del) {
            this._delegate = del;
            return this;
        };
        CanvasLayer.prototype.needRedraw = function () {
            if (!this._frame) {
                this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
            }
            return this;
        };
        //-------------------------------------------------------------
        CanvasLayer.prototype._onLayerDidResize = function (resizeEvent) {
            this._canvas.width = resizeEvent.newSize.x;
            this._canvas.height = resizeEvent.newSize.y;
        };
        //-------------------------------------------------------------
        CanvasLayer.prototype._onLayerDidMove = function () {
            var topLeft = this._map.containerPointToLayerPoint([0, 0]);
            L.DomUtil.setPosition(this._canvas, topLeft);
            this.drawLayer();
        };
        //-------------------------------------------------------------
        CanvasLayer.prototype.getEvents = function () {
            var events = {
                resize: this._onLayerDidResize,
                moveend: this._onLayerDidMove,
                zoomanim: undefined
            };
            if (this._map.options.zoomAnimation && L.Browser.any3d) {
                events.zoomanim = this._animateZoom;
            }
            return events;
        };
        //-------------------------------------------------------------
        CanvasLayer.prototype.onAdd = function (map) {
            this._map = map;
            this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
            this.tiles = {};
            var size = this._map.getSize();
            this._canvas.width = size.x;
            this._canvas.height = size.y;
            var animated = this._map.options.zoomAnimation && L.Browser.any3d;
            L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));
            map._panes.overlayPane.appendChild(this._canvas);
            map.on(this.getEvents(), this);
            var del = this._delegate || this;
            del.onLayerDidMount && del.onLayerDidMount(); // -- callback
            this.needRedraw();
            var self = this;
            setTimeout(function () {
                self._onLayerDidMove();
            }, 0);
        };
        //-------------------------------------------------------------
        CanvasLayer.prototype.onRemove = function (map) {
            var del = this._delegate || this;
            del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback
            map.getPanes().overlayPane.removeChild(this._canvas);
            map.off(this.getEvents(), this);
            this._canvas = null;
        };
        //------------------------------------------------------------
        CanvasLayer.prototype.addTo = function (map) {
            map.addLayer(this);
            return this;
        };
        // --------------------------------------------------------------------------------
        CanvasLayer.prototype.LatLonToMercator = function (latlon) {
            return {
                x: latlon.lng * 6378137 * Math.PI / 180,
                y: Math.log(Math.tan((90 + latlon.lat) * Math.PI / 360)) * 6378137
            };
        };
        //------------------------------------------------------------------------------
        CanvasLayer.prototype.drawLayer = function () {
            // -- todo make the viewInfo properties  flat objects.
            var size = this._map.getSize();
            var bounds = this._map.getBounds();
            var zoom = this._map.getZoom();
            var center = this.LatLonToMercator(this._map.getCenter());
            var corner = this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize()));
            var del = this._delegate || this;
            del.onDrawLayer && del.onDrawLayer({
                layer: this,
                canvas: this._canvas,
                bounds: bounds,
                size: size,
                zoom: zoom,
                center: center,
                corner: corner
            });
            this._frame = null;
        };
        // -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
        //------------------------------------------------------------------------------
        CanvasLayer.prototype._setTransform = function (el, offset, scale) {
            var pos = offset || new L.Point(0, 0);
            el.style[L.DomUtil.TRANSFORM] =
                (L.Browser.ie3d ?
                    'translate(' + pos.x + 'px,' + pos.y + 'px)' :
                    'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
                    (scale ? ' scale(' + scale + ')' : '');
        };
        //------------------------------------------------------------------------------
        CanvasLayer.prototype._animateZoom = function (e) {
            var scale = this._map.getZoomScale(e.zoom);
            // -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
            var offset = L.Layer ? this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
                this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());
            L.DomUtil.setTransform(this._canvas, offset, scale);
        };
        return CanvasLayer;
    }());
    exports.default = CanvasLayer;
    
    
    /***/ }),
    /* 5 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var velocitycss = __webpack_require__(13);
    var VelocityControl = /** @class */ (function () {
        function VelocityControl() {
            this._windy = null;
            this._map = null;
            this._container = null;
            this.options = {
                position: 'bottomleft',
                emptyString: 'Unavailable',
                // Could be any combination of 'bearing' (angle toward which the flow goes) or 'meteo' (angle from which the flow comes)
                // and 'CW' (angle value increases clock-wise) or 'CCW' (angle value increases counter clock-wise)
                angleConvention: 'bearingCCW',
                // Could be 'm/s' for meter per second, 'k/h' for kilometer per hour or 'kt' for knots
                speedUnit: 'm/s'
            };
        }
        VelocityControl.prototype.setWindy = function (_windy) {
            if (!this._windy && _windy)
                this._windy = _windy;
        };
        VelocityControl.prototype.setOptions = function (options) {
            this.options = options;
        };
        VelocityControl.prototype.onAdd = function (map) {
            this._map = map;
            this._container = L.DomUtil.create('div', velocitycss.leafletControlVelocity);
            L.DomEvent.disableClickPropagation(this._container);
            this._map.on('mousemove', this.drawWindSpeed, this);
            this._container.innerHTML = this.options.emptyString;
            return this._container;
        };
        VelocityControl.prototype.onRemove = function (map) {
            this._map.off('mousemove', this.drawWindSpeed, this);
        };
        VelocityControl.prototype.vectorToSpeed = function (uMs, vMs, unit) {
            var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));
            // Default is m/s
            if (unit === 'k/h') {
                return this.meterSec2kilometerHour(velocityAbs);
            }
            else if (unit === 'kt') {
                return this.meterSec2Knots(velocityAbs);
            }
            else {
                return velocityAbs;
            }
        };
        VelocityControl.prototype.vectorToDegrees = function (uMs, vMs, angleConvention) {
            // Default angle convention is CW
            if (angleConvention.endsWith('CCW')) {
                // vMs comes out upside-down..
                vMs = vMs > 0 ? vMs = -vMs : Math.abs(vMs);
            }
            var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));
            var velocityDir = Math.atan2(uMs / velocityAbs, vMs / velocityAbs);
            var velocityDirToDegrees = velocityDir * 180 / Math.PI + 180;
            if (angleConvention === 'bearingCW' || angleConvention === 'meteoCCW') {
                velocityDirToDegrees += 180;
                if (velocityDirToDegrees >= 360)
                    velocityDirToDegrees -= 360;
            }
            return velocityDirToDegrees;
        };
        VelocityControl.prototype.meterSec2Knots = function (meters) {
            return meters / 0.514;
        };
        VelocityControl.prototype.meterSec2kilometerHour = function (meters) {
            return meters * 3.6;
        };
        VelocityControl.prototype.drawWindSpeed = function (ev) {
            var pos = this._map.containerPointToLatLng(L.point(ev.containerPoint.x, ev.containerPoint.y));
            var gridValue = this._windy.interpolate(pos.lng, pos.lat);
            var template = "";
            if (gridValue && !isNaN(gridValue[0]) && !isNaN(gridValue[1]) && gridValue[2]) {
                template = "<strong>  Direction: </strong>" +
                    this.vectorToDegrees(gridValue[0], gridValue[1], this.options.angleConvention).toFixed(3) +
                    "°" + ", <thisstrong>  Speed: </strong>" +
                    this.vectorToSpeed(gridValue[0], gridValue[1], this.options.speedUnit).toFixed(1) + (" " + this.options.speedUnit);
            }
            else {
                if (this.options.emptyString)
                    template = this.options.emptyString;
            }
            this._container.innerHTML = template;
        };
        return VelocityControl;
    }());
    exports.default = VelocityControl;
    
    
    /***/ }),
    /* 6 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var canvasBound_1 = __webpack_require__(0);
    var mapBound_1 = __webpack_require__(1);
    var windy_1 = __webpack_require__(2);
    var L_CanvasLayer_1 = __webpack_require__(4);
    var L_VelocityLayer_1 = __webpack_require__(11);
    var L_ControlVelocity_1 = __webpack_require__(5);
    window.CanvasBound = canvasBound_1.default;
    window.MapBound = mapBound_1.default;
    window.Windy = windy_1.default;
    L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new L_CanvasLayer_1.default());
    L.canvasLayer = function () {
        return new L.CanvasLayer();
    };
    L.ControlVelocity = (L.Control).extend(new L_ControlVelocity_1.default());
    L.controlVelocity = function () {
        return new L.ControlVelocity();
    };
    L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new L_VelocityLayer_1.default());
    L.velocityLayer = function (options) {
        return new L.VelocityLayer(options);
    };
    
    
    /***/ }),
    /* 7 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var Particule = /** @class */ (function () {
        function Particule(x, y, maxAge) {
            this.x = x;
            this.y = y;
            this.age = Math.floor(Math.random() * maxAge);
            this.maxAge = maxAge;
        }
        Particule.prototype.reset = function (x, y) {
            this.x = x;
            this.y = y;
            this.age = 0;
        };
        Object.defineProperty(Particule.prototype, "isDead", {
            get: function () {
                return this.age > this.maxAge;
            },
            enumerable: true,
            configurable: true
        });
        Particule.prototype.grow = function () {
            this.age++;
        };
        return Particule;
    }());
    exports.default = Particule;
    
    
    /***/ }),
    /* 8 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var vector_1 = __webpack_require__(3);
    var Grid = /** @class */ (function () {
        function Grid(data, φ0, λ0, Δφ, Δλ, height, width) {
            this.data = data;
            this.φ0 = φ0;
            this.λ0 = λ0;
            this.Δλ = Δλ;
            this.Δφ = Δφ;
            this.height = height;
            this.width = width;
        }
        Object.defineProperty(Grid.prototype, "valueRange", {
            get: function () {
                if (!this.data.length) {
                    return [0, 0];
                }
                var min = this.data[0].intensity;
                var max = this.data[0].intensity;
                this.data.forEach(function (value) {
                    min = Math.min(min, value.intensity);
                    max = Math.max(max, value.intensity);
                });
                return [min, max];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Get vector at any point
         * @param λ Longitude
         * @param φ Latitude
         */
        Grid.prototype.get = function (λ, φ) {
            var fλ = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
            var fφ = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
            var iλ = Math.floor(fλ); // col n
            var jλ = iλ + 1; // col n+1
            if (jλ >= this.width) {
                jλ = this.λ0;
            }
            var iφ = Math.floor(fφ); // line m
            var jφ = iφ + 1; // line m+1
            if (jφ >= this.height) {
                jφ = iφ;
            }
            var vλ = fλ - iλ; // col variation [0..1]
            var vφ = fφ - iφ; // line variation [0..1]
            if (iλ >= 0 && iφ >= 0 && iλ < this.width && iφ < this.height) {
                var g00 = this.data[iλ + iφ * this.width];
                var g10 = this.data[jλ + iφ * this.width];
                if (this.isValue(g00) && this.isValue(g10)) {
                    var g01 = this.data[iλ + jφ * this.width];
                    var g11 = this.data[jλ + jφ * this.width];
                    if (this.isValue(g01) && this.isValue(g11)) {
                        return this.interpolation(vλ, vφ, g00, //l0c0
                        g10, //l0c1
                        g01, //l1c0
                        g11 //l1cl
                        );
                    }
                }
            }
            return new vector_1.default(0, 0);
        };
        /**
         * Interpolate value
         * @param x variation between g0* and g1*
         * @param y variation between g*0 dans g*1
         * @param g00 point at col_0 and line_0
         * @param g10 point at col_1 and line_0
         * @param g01 point at col_0 and line_1
         * @param g11 point at col_1 and line_1
         * @return interpolated vector
         */
        Grid.prototype.interpolation = function (x, y, g00, g10, g01, g11) {
            var rx = (1 - x);
            var ry = (1 - y);
            var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
            var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
            var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
            return new vector_1.default(u, v);
        };
        /**
         * Custom modulo
         * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
         *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
         */
        Grid.prototype.floorMod = function (a, n) {
            return a - n * Math.floor(a / n);
        };
        ;
        /**
         * Detect if x is a value
         * @returns {boolean} true if the specified value is not null and not undefined.
         */
        Grid.prototype.isValue = function (x) {
            return x !== null && x !== undefined;
        };
        ;
        return Grid;
    }());
    exports.default = Grid;
    
    
    /***/ }),
    /* 9 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColorScale = /** @class */ (function () {
        function ColorScale(minValue, maxValue, scale) {
            this.scale = [
                "rgb(36,104, 180)",
                "rgb(60,157, 194)",
                "rgb(128,205,193 )",
                "rgb(151,218,168 )",
                "rgb(198,231,181)",
                "rgb(238,247,217)",
                "rgb(255,238,159)",
                "rgb(252,217,125)",
                "rgb(255,182,100)",
                "rgb(252,150,75)",
                "rgb(250,112,52)",
                "rgb(245,64,32)",
                "rgb(237,45,28)",
                "rgb(220,24,32)",
                "rgb(180,0,35)"
            ];
            this.setMinMax(minValue, maxValue);
            if ((scale instanceof Array) && scale.length) {
                this.scale = scale;
            }
        }
        ColorScale.prototype.setMinMax = function (minValue, maxValue) {
            this.minValue = minValue;
            this.maxValue = maxValue;
        };
        Object.defineProperty(ColorScale.prototype, "size", {
            get: function () {
                return this.scale.length;
            },
            enumerable: true,
            configurable: true
        });
        ColorScale.prototype.getColorIndex = function (value) {
            if (value <= this.minValue) {
                return 0;
            }
            if (value >= this.maxValue) {
                return this.scale.length - 1;
            }
            var index = this.scale.length * (value - this.minValue) / (this.maxValue - this.minValue);
            if (index < 0) {
                return 0;
            }
            if (index > this.scale.length - 1) {
                return this.scale.length - 1;
            }
            return Math.floor(index);
        };
        ColorScale.prototype.colorAt = function (index) {
            return this.scale[index];
        };
        ColorScale.prototype.getColor = function (value) {
            return this.scale[this.getColorIndex(value)];
        };
        return ColorScale;
    }());
    exports.default = ColorScale;
    
    
    /***/ }),
    /* 10 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var AnimationBucket = /** @class */ (function () {
        function AnimationBucket(colorScale) {
            this.buckets = [];
            this.colorScale = colorScale;
            for (var i = 0; i < colorScale.size; i++) {
                this.buckets.push([]);
            }
        }
        AnimationBucket.prototype.clear = function () {
            this.buckets.forEach(function (particuleSet) {
                particuleSet.splice(0, particuleSet.length);
            });
        };
        AnimationBucket.prototype.add = function (p, v) {
            var index = this.colorScale.getColorIndex(p.intensity);
            if (index < 0 || index >= this.buckets.length) {
                console.log(index);
                return;
            }
            p.xt = p.x + v.u;
            p.yt = p.y + v.v;
            this.buckets[index].push(p);
        };
        AnimationBucket.prototype.draw = function (context2D) {
            var _this = this;
            this.buckets.forEach(function (bucket, i) {
                if (bucket.length > 0) {
                    context2D.beginPath();
                    context2D.strokeStyle = _this.colorScale.colorAt(i);
                    bucket.forEach(function (particle) {
                        context2D.moveTo(particle.x, particle.y);
                        context2D.lineTo(particle.xt, particle.yt);
                        particle.x = particle.xt;
                        particle.y = particle.yt;
                    });
                    context2D.stroke();
                }
            });
        };
        return AnimationBucket;
    }());
    exports.default = AnimationBucket;
    
    
    /***/ }),
    /* 11 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var windy_1 = __webpack_require__(2);
    var canvasBound_1 = __webpack_require__(0);
    var mapBound_1 = __webpack_require__(1);
    var layer_1 = __webpack_require__(12);
    var L_CanvasLayer_1 = __webpack_require__(4);
    var L_ControlVelocity_1 = __webpack_require__(5);
    var L_CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new L_CanvasLayer_1.default());
    var L_canvasLayer = function () {
        return new L_CanvasLayer();
    };
    var L_ControlVelocity = (L.Control).extend(new L_ControlVelocity_1.default);
    var L_controlVelocity = function () {
        return new L_ControlVelocity();
    };
    var VelocityLayer = /** @class */ (function () {
        function VelocityLayer() {
            this._map = null;
            this._canvasLayer = null;
            this._windy = null;
            this._context = null;
            this._displayTimeout = 0;
            this._mouseControl = null;
            this.options = {
                displayValues: true,
                displayOptions: {
                    velocityType: 'Velocity',
                    position: 'bottomleft',
                    emptyString: 'No velocity data',
                    angleConvention: 'bearingCCW',
                    speedUnit: 'm/s'
                },
                maxVelocity: 10,
                colorScale: null,
                data: null
            };
        }
        VelocityLayer.prototype.initialize = function (options) {
            L.Util.setOptions(this, options);
        };
        VelocityLayer.prototype.onAdd = function (map) {
            // create canvas, add overlay control
            this._canvasLayer = L_canvasLayer().delegate(this);
            this._canvasLayer.addTo(map);
            this._map = map;
        };
        VelocityLayer.prototype.onRemove = function (map) {
            this._destroyWind();
        };
        VelocityLayer.prototype.setData = function (data) {
            this.options.data = data;
            if (this._windy) {
                this._windy.setData(data);
                this._clearAndRestart();
            }
            this.fire('load');
        };
        /*------------------------------------ PRIVATE ------------------------------------------*/
        VelocityLayer.prototype.onDrawLayer = function (overlay, params) {
            var self = this;
            if (!this._windy) {
                this._initWindy();
                return;
            }
            if (!this.options.data) {
                return;
            }
            if (this._displayTimeout)
                clearTimeout(self._displayTimeout);
            this._displayTimeout = setTimeout(function () {
                self._startWindy();
            }, 150); // showing velocity is delayed
        };
        VelocityLayer.prototype._startWindy = function () {
            var bounds = this._map.getBounds();
            var size = this._map.getSize();
            // bounds, width, height, extent
            this._windy.start(new layer_1.default(new mapBound_1.default(bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng), new canvasBound_1.default(0, 0, size.x, size.y)));
        };
        VelocityLayer.prototype._initWindy = function () {
            var _this = this;
            // windy object, copy options
            var options = Object.assign({ canvas: this._canvasLayer._canvas }, this.options);
            this._windy = new windy_1.default(options);
            // prepare context global var, start drawing
            this._context = this._canvasLayer._canvas.getContext('2d');
            this._canvasLayer._canvas.classList.add("velocity-overlay");
            this.onDrawLayer();
            //TODO : Figure out why the event is called after the layer is removed
            this._map.on('dragstart', function () {
                if (_this._windy)
                    _this._windy.stop();
            });
            this._map.on('dragend', function () {
                _this._clearAndRestart();
            });
            this._map.on('zoomstart', function () {
                if (_this._windy)
                    _this._windy.stop();
            });
            this._map.on('zoomend', function () {
                _this._clearAndRestart();
            });
            this._map.on('resize', function () {
                _this._clearWind();
            });
            this._initMouseHandler();
        };
        VelocityLayer.prototype._initMouseHandler = function () {
            if (!this._mouseControl && this.options.displayValues) {
                var options = this.options.displayOptions || {};
                options['leafletVelocity'] = this;
                this._mouseControl = L_controlVelocity();
                this._mouseControl.setWindy(this._windy);
                this._mouseControl.setOptions(this.options.displayOptions);
                this._mouseControl.addTo(this._map);
            }
        };
        VelocityLayer.prototype._clearAndRestart = function () {
            if (this._context)
                this._context.clearRect(0, 0, 3000, 3000);
            if (this._windy)
                this._startWindy();
        };
        VelocityLayer.prototype._clearWind = function () {
            if (this._windy)
                this._windy.stop();
            if (this._context)
                this._context.clearRect(0, 0, 3000, 3000);
        };
        VelocityLayer.prototype._destroyWind = function () {
            if (this._displayTimeout)
                clearTimeout(this._displayTimeout);
            if (this._windy)
                this._windy.stop();
            if (this._context)
                this._context.clearRect(0, 0, 3000, 3000);
            if (this._mouseControl)
                this._map.removeControl(this._mouseControl);
            this._mouseControl = null;
            this._windy = null;
            this._map.removeLayer(this._canvasLayer);
        };
        return VelocityLayer;
    }());
    exports.default = VelocityLayer;
    
    
    /***/ }),
    /* 12 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    var layer = /** @class */ (function () {
        function layer(mapBound, canvasBound) {
            this.canvasBound = canvasBound;
            this.mapBound = mapBound;
        }
        /**
         * Find geocoordinate from canvas point
         * @param x
         * @param y
         * return [lng, lat]
         */
        layer.prototype.canvasToMap = function (x, y) {
            var mapLonDelta = this.mapBound.east - this.mapBound.west;
            var worldMapRadius = (this.canvasBound.width / this.rad2deg(mapLonDelta)) * 360 / (2 * Math.PI);
            var mapOffsetY = (worldMapRadius / 2 * Math.log((1 + Math.sin(this.mapBound.south)) / (1 - Math.sin(this.mapBound.south))));
            var equatorY = this.canvasBound.height + mapOffsetY;
            var a = (equatorY - y) / worldMapRadius;
            var φ = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
            var λ = this.rad2deg(this.mapBound.west) + x / this.canvasBound.width * this.rad2deg(mapLonDelta);
            return [λ, φ];
        };
        ;
        layer.prototype.mercY = function (φ) {
            return Math.log(Math.tan(φ / 2 + Math.PI / 4));
        };
        ;
        /**
         * Project a point on the map
         * @param λ Longitude
         * @param φ Latitude
         * @return [x, y]
         */
        layer.prototype.mapToCanvas = function (λ, φ) {
            var ymin = this.mercY(this.mapBound.south);
            var ymax = this.mercY(this.mapBound.north);
            var xFactor = this.canvasBound.width / (this.mapBound.east - this.mapBound.west);
            var yFactor = this.canvasBound.height / (ymax - ymin);
            var y = this.mercY(this.deg2rad(φ));
            var x = (this.deg2rad(λ) - this.mapBound.west) * xFactor;
            y = (ymax - y) * yFactor;
            return [x, y];
        };
        ;
        layer.prototype.deg2rad = function (deg) {
            return deg * Math.PI / 180;
        };
        ;
        layer.prototype.rad2deg = function (rad) {
            return rad * 180 / Math.PI;
        };
        ;
        /**
         *
         * @param λ Longitude
         * @param φ Latitude
         * @param x
         * @param y
         * @return []
         */
        layer.prototype.distortion = function (λ, φ, x, y) {
            var τ = 2 * Math.PI;
            var H = Math.pow(10, -5.2);
            var hλ = λ < 0 ? H : -H;
            var hφ = φ < 0 ? H : -H;
            var pλ = this.mapToCanvas(λ + hλ, φ);
            var pφ = this.mapToCanvas(λ, φ + hφ);
            // Meridian scale factor (see Snyder, equation 4-3), where R = 1. This handles issue where length of 1º λ
            // changes depending on φ. Without this, there is a pinching effect at the poles.
            var k = Math.cos(φ / 360 * τ);
            return [
                (pλ[0] - x) / hλ / k,
                (pλ[1] - y) / hλ / k,
                (pφ[0] - x) / hφ,
                (pφ[1] - y) / hφ
            ];
        };
        /**
         * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
         * vector is modified in place and returned by this function.
         * @param λ
         * @param φ
         * @param x
         * @param y
         * @param scale scale factor
         * @param wind [u, v]
         * @return []
         */
        layer.prototype.distort = function (λ, φ, x, y, scale, wind) {
            var u = wind.u * scale;
            var v = wind.v * scale;
            var d = this.distortion(λ, φ, x, y);
            // Scale distortion vectors by u and v, then add.
            wind.u = d[0] * u + d[2] * v;
            wind.v = d[1] * u + d[3] * v;
            return wind;
        };
        return layer;
    }());
    exports.default = layer;
    
    
    /***/ }),
    /* 13 */
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(14);
    if(typeof content === 'string') content = [[module.i, content, '']];
    // Prepare cssTransformation
    var transform;
    
    var options = {"hmr":true}
    options.transform = transform
    // add the styles to the DOM
    var update = __webpack_require__(16)(content, options);
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!../node_modules/typings-for-css-modules-loader/lib/index.js??ref--1-1!./leaflet-velocity.css", function() {
                var newContent = require("!!../node_modules/typings-for-css-modules-loader/lib/index.js??ref--1-1!./leaflet-velocity.css");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }
    
    /***/ }),
    /* 14 */
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(15)(false);
    // imports
    
    
    // module
    exports.push([module.i, "._3sfJzTX7087yiCW2g80IdO {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 0 5px;\n  margin: 0 !important;\n  color: #333;\n  font: 11px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n}\n", ""]);
    
    // exports
    exports.locals = {
        "leafletControlVelocity": "_3sfJzTX7087yiCW2g80IdO"
    };
    
    /***/ }),
    /* 15 */
    /***/ (function(module, exports) {
    
    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function(useSourceMap) {
        var list = [];
    
        // return the list of modules as css string
        list.toString = function toString() {
            return this.map(function (item) {
                var content = cssWithMappingToString(item, useSourceMap);
                if(item[2]) {
                    return "@media " + item[2] + "{" + content + "}";
                } else {
                    return content;
                }
            }).join("");
        };
    
        // import a list of modules into the list
        list.i = function(modules, mediaQuery) {
            if(typeof modules === "string")
                modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for(var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if(typeof id === "number")
                    alreadyImportedModules[id] = true;
            }
            for(i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if(mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if(mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };
    
    function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
            return content;
        }
    
        if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
                return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
            });
    
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }
    
        return [content].join('\n');
    }
    
    // Adapted from convert-source-map (MIT)
    function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
    
        return '/*# ' + data + ' */';
    }
    
    
    /***/ }),
    /* 16 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    
    var stylesInDom = {};
    
    var	memoize = function (fn) {
        var memo;
    
        return function () {
            if (typeof memo === "undefined") memo = fn.apply(this, arguments);
            return memo;
        };
    };
    
    var isOldIE = memoize(function () {
        // Test for IE <= 9 as proposed by Browserhacks
        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
        // Tests for existence of standard globals is to allow style-loader
        // to operate correctly into non-standard environments
        // @see https://github.com/webpack-contrib/style-loader/issues/177
        return window && document && document.all && !window.atob;
    });
    
    var getElement = (function (fn) {
        var memo = {};
    
        return function(selector) {
            if (typeof memo[selector] === "undefined") {
                var styleTarget = fn.call(this, selector);
                // Special case to return head of iframe instead of iframe itself
                if (styleTarget instanceof window.HTMLIFrameElement) {
                    try {
                        // This will throw an exception if access to iframe is blocked
                        // due to cross-origin restrictions
                        styleTarget = styleTarget.contentDocument.head;
                    } catch(e) {
                        styleTarget = null;
                    }
                }
                memo[selector] = styleTarget;
            }
            return memo[selector]
        };
    })(function (target) {
        return document.querySelector(target)
    });
    
    var singleton = null;
    var	singletonCounter = 0;
    var	stylesInsertedAtTop = [];
    
    var	fixUrls = __webpack_require__(17);
    
    module.exports = function(list, options) {
        if (typeof DEBUG !== "undefined" && DEBUG) {
            if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
    
        options = options || {};
    
        options.attrs = typeof options.attrs === "object" ? options.attrs : {};
    
        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();
    
        // By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";
    
        // By default, add <style> tags to the bottom of the target
        if (!options.insertAt) options.insertAt = "bottom";
    
        var styles = listToStyles(list, options);
    
        addStylesToDom(styles, options);
    
        return function update (newList) {
            var mayRemove = [];
    
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
    
                domStyle.refs--;
                mayRemove.push(domStyle);
            }
    
            if(newList) {
                var newStyles = listToStyles(newList, options);
                addStylesToDom(newStyles, options);
            }
    
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
    
                if(domStyle.refs === 0) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
    
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    
    function addStylesToDom (styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
    
            if(domStyle) {
                domStyle.refs++;
    
                for(var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                }
    
                for(; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                }
            } else {
                var parts = [];
    
                for(var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                }
    
                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
            }
        }
    }
    
    function listToStyles (list, options) {
        var styles = [];
        var newStyles = {};
    
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {css: css, media: media, sourceMap: sourceMap};
    
            if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
            else newStyles[id].parts.push(part);
        }
    
        return styles;
    }
    
    function insertStyleElement (options, style) {
        var target = getElement(options.insertInto)
    
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        }
    
        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
    
        if (options.insertAt === "top") {
            if (!lastStyleElementInsertedAtTop) {
                target.insertBefore(style, target.firstChild);
            } else if (lastStyleElementInsertedAtTop.nextSibling) {
                target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
            } else {
                target.appendChild(style);
            }
            stylesInsertedAtTop.push(style);
        } else if (options.insertAt === "bottom") {
            target.appendChild(style);
        } else if (typeof options.insertAt === "object" && options.insertAt.before) {
            var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
            target.insertBefore(style, nextSibling);
        } else {
            throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        }
    }
    
    function removeStyleElement (style) {
        if (style.parentNode === null) return false;
        style.parentNode.removeChild(style);
    
        var idx = stylesInsertedAtTop.indexOf(style);
        if(idx >= 0) {
            stylesInsertedAtTop.splice(idx, 1);
        }
    }
    
    function createStyleElement (options) {
        var style = document.createElement("style");
    
        options.attrs.type = "text/css";
    
        addAttrs(style, options.attrs);
        insertStyleElement(options, style);
    
        return style;
    }
    
    function createLinkElement (options) {
        var link = document.createElement("link");
    
        options.attrs.type = "text/css";
        options.attrs.rel = "stylesheet";
    
        addAttrs(link, options.attrs);
        insertStyleElement(options, link);
    
        return link;
    }
    
    function addAttrs (el, attrs) {
        Object.keys(attrs).forEach(function (key) {
            el.setAttribute(key, attrs[key]);
        });
    }
    
    function addStyle (obj, options) {
        var style, update, remove, result;
    
        // If a transform function was defined, run it on the css
        if (options.transform && obj.css) {
            result = options.transform(obj.css);
    
            if (result) {
                // If transform returns a value, use that instead of the original css.
                // This allows running runtime transformations on the css.
                obj.css = result;
            } else {
                // If the transform function returns a falsy value, don't add this css.
                // This allows conditional loading of css
                return function() {
                    // noop
                };
            }
        }
    
        if (options.singleton) {
            var styleIndex = singletonCounter++;
    
            style = singleton || (singleton = createStyleElement(options));
    
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    
        } else if (
            obj.sourceMap &&
            typeof URL === "function" &&
            typeof URL.createObjectURL === "function" &&
            typeof URL.revokeObjectURL === "function" &&
            typeof Blob === "function" &&
            typeof btoa === "function"
        ) {
            style = createLinkElement(options);
            update = updateLink.bind(null, style, options);
            remove = function () {
                removeStyleElement(style);
    
                if(style.href) URL.revokeObjectURL(style.href);
            };
        } else {
            style = createStyleElement(options);
            update = applyToTag.bind(null, style);
            remove = function () {
                removeStyleElement(style);
            };
        }
    
        update(obj);
    
        return function updateStyle (newObj) {
            if (newObj) {
                if (
                    newObj.css === obj.css &&
                    newObj.media === obj.media &&
                    newObj.sourceMap === obj.sourceMap
                ) {
                    return;
                }
    
                update(obj = newObj);
            } else {
                remove();
            }
        };
    }
    
    var replaceText = (function () {
        var textStore = [];
    
        return function (index, replacement) {
            textStore[index] = replacement;
    
            return textStore.filter(Boolean).join('\n');
        };
    })();
    
    function applyToSingletonTag (style, index, remove, obj) {
        var css = remove ? "" : obj.css;
    
        if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
        } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;
    
            if (childNodes[index]) style.removeChild(childNodes[index]);
    
            if (childNodes.length) {
                style.insertBefore(cssNode, childNodes[index]);
            } else {
                style.appendChild(cssNode);
            }
        }
    }
    
    function applyToTag (style, obj) {
        var css = obj.css;
        var media = obj.media;
    
        if(media) {
            style.setAttribute("media", media)
        }
    
        if(style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            while(style.firstChild) {
                style.removeChild(style.firstChild);
            }
    
            style.appendChild(document.createTextNode(css));
        }
    }
    
    function updateLink (link, options, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;
    
        /*
            If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
            and there is no publicPath defined then lets turn convertToAbsoluteUrls
            on by default.  Otherwise default to the convertToAbsoluteUrls option
            directly
        */
        var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;
    
        if (options.convertToAbsoluteUrls || autoFixUrls) {
            css = fixUrls(css);
        }
    
        if (sourceMap) {
            // http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
    
        var blob = new Blob([css], { type: "text/css" });
    
        var oldSrc = link.href;
    
        link.href = URL.createObjectURL(blob);
    
        if(oldSrc) URL.revokeObjectURL(oldSrc);
    }
    
    
    /***/ }),
    /* 17 */
    /***/ (function(module, exports) {
    
    
    /**
     * When source maps are enabled, `style-loader` uses a link element with a data-uri to
     * embed the css on the page. This breaks all relative urls because now they are relative to a
     * bundle instead of the current page.
     *
     * One solution is to only use full urls, but that may be impossible.
     *
     * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
     *
     * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
     *
     */
    
    module.exports = function (css) {
      // get current location
      var location = typeof window !== "undefined" && window.location;
    
      if (!location) {
        throw new Error("fixUrls requires window.location");
      }
    
        // blank or null?
        if (!css || typeof css !== "string") {
          return css;
      }
    
      var baseUrl = location.protocol + "//" + location.host;
      var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
    
        // convert each url(...)
        /*
        This regular expression is just a way to recursively match brackets within
        a string.
    
         /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
           (  = Start a capturing group
             (?:  = Start a non-capturing group
                 [^)(]  = Match anything that isn't a parentheses
                 |  = OR
                 \(  = Match a start parentheses
                     (?:  = Start another non-capturing groups
                         [^)(]+  = Match anything that isn't a parentheses
                         |  = OR
                         \(  = Match a start parentheses
                             [^)(]*  = Match anything that isn't a parentheses
                         \)  = Match a end parentheses
                     )  = End Group
                  *\) = Match anything and then a close parens
              )  = Close non-capturing group
              *  = Match anything
           )  = Close capturing group
         \)  = Match a close parens
    
         /gi  = Get all matches, not the first.  Be case insensitive.
         */
        var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
            // strip quotes (if they exist)
            var unquotedOrigUrl = origUrl
                .trim()
                .replace(/^"(.*)"$/, function(o, $1){ return $1; })
                .replace(/^'(.*)'$/, function(o, $1){ return $1; });
    
            // already a full url? no change
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
              return fullMatch;
            }
    
            // convert the url to a full url
            var newUrl;
    
            if (unquotedOrigUrl.indexOf("//") === 0) {
                  //TODO: should we add protocol?
                newUrl = unquotedOrigUrl;
            } else if (unquotedOrigUrl.indexOf("/") === 0) {
                // path should be relative to the base url
                newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
            } else {
                // path should be relative to current directory
                newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
            }
    
            // send back the fixed url(...)
            return "url(" + JSON.stringify(newUrl) + ")";
        });
    
        // send back the fixed css
        return fixedCss;
    };
    
    
    /***/ })
    /******/ ]);
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTQzYWM5OTA2MGYyYjY1NTBhY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhc0JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXBCb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTC5DYW52YXNMYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTC5Db250cm9sVmVsb2NpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uQnVja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9MLlZlbG9jaXR5TGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzcz8xNGQzIiwid2VicGFjazovLy8uL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImxlYWZsZXQtdmVsb2NpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNDNhYzk5MDYwZjJiNjU1MGFjYyIsImltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzQm91bmQge1xuICAgIHB1YmxpYyB4TWluOiBudW1iZXI7XG4gICAgcHVibGljIHlNaW46IG51bWJlcjtcbiAgICBwdWJsaWMgeE1heDogbnVtYmVyO1xuICAgIHB1YmxpYyB5TWF4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAoeE1pbjogbnVtYmVyLCB5TWluOiBudW1iZXIsIHhNYXg6IG51bWJlciwgeU1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueE1pbiA9IHhNaW47XG4gICAgICAgIHRoaXMueU1pbiA9IHlNaW47XG4gICAgICAgIHRoaXMueE1heCA9IHhNYXg7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoICgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueE1heCAtIHRoaXMueE1pbjtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0ICgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueU1heCAtIHRoaXMueU1pbjtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21QYXJ0aWN1bGUobWF4QWdlOiBudW1iZXIpOiBQYXJ0aWN1bGUgIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICByZXR1cm4gbmV3IFBhcnRpY3VsZSh4LCB5LCBtYXhBZ2UpO1xuICAgIH1cblxuICAgIHJlc2V0UGFydGljdWxlKHA6IFBhcnRpY3VsZSk6IFBhcnRpY3VsZSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpICsgdGhpcy54TWluKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpICsgdGhpcy55TWluKTtcbiAgICAgICAgcC5yZXNldCh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzQm91bmQudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3VuZCB7XG4gICAgcHVibGljIHNvdXRoOiBudW1iZXI7XG4gICAgcHVibGljIG5vcnRoOiBudW1iZXI7XG4gICAgcHVibGljIGVhc3Q6IG51bWJlcjtcbiAgICBwdWJsaWMgd2VzdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IgKG5vcnRoOiBudW1iZXIsIGVhc3Q6IG51bWJlciwgc291dGg6IG51bWJlciwgd2VzdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9ydGggPSBub3J0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuZWFzdCA9IGVhc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLnNvdXRoID0gc291dGggKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLndlc3QgPSB3ZXN0ICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGggKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDcyMCArIHRoaXMuZWFzdCAtIHRoaXMud2VzdCkgJSAzNjA7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCAoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoMzYwICsgdGhpcy5ub3J0aCAtIHRoaXMuc291dGgpICUgMTgwO1xuICAgIH1cblxuICAgIFxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hcEJvdW5kLnRzIiwiaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIjtcclxuaW1wb3J0IENvbG9yU2NhbGUgZnJvbSBcIi4vY29sb3JTY2FsZVwiO1xyXG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcclxuaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQnVja2V0IGZyb20gXCIuL2FuaW1hdGlvbkJ1Y2tldFwiO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmR5IHtcclxuXHJcbiAgcHJpdmF0ZSBncmlkOiBhbnk7XHJcbiAgcHJpdmF0ZSDOuzA6IG51bWJlcjtcclxuICBwcml2YXRlIM+GMDogbnVtYmVyO1xyXG4gIHByaXZhdGUgzpTOuzogbnVtYmVyO1xyXG4gIHByaXZhdGUgzpTPhjogbnVtYmVyO1xyXG4gIHByaXZhdGUgbmk6IG51bWJlcjtcclxuICBwcml2YXRlIG5qOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjb2xvclNjYWxlOiBDb2xvclNjYWxlO1xyXG4gIHByaXZhdGUgdmVsb2NpdHlTY2FsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlTXVsdGlwbGllciA9IDEgLyAzMDA7XHJcbiAgcHJpdmF0ZSBwYXJ0aWNsZUFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlTGluZVdpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhdXRvQ29sb3JSYW5nZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGxheWVyOiBMYXllcjtcclxuICBwcml2YXRlIHBhcnRpY3VsZXM6IFBhcnRpY3VsZVtdID0gW107XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25CdWNrZXQ6IEFuaW1hdGlvbkJ1Y2tldDtcclxuICBwcml2YXRlIGNvbnRleHQyRDogYW55O1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uTG9vcDogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIGZyYW1lVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdGhlbiA9IDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMuY2FudmFzID0gb3B0aW9ucy5jYW52YXM7XHJcbiAgICBpZiAob3B0aW9ucy5taW5WZWxvY2l0eSA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMubWF4VmVsb2NpdHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmF1dG9Db2xvclJhbmdlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3JTY2FsZSA9IG5ldyBDb2xvclNjYWxlKG9wdGlvbnMubWluVmVsb2NpdHkgfHwgMCwgb3B0aW9ucy5tYXhWZWxvY2l0eSB8fCAxMCwgb3B0aW9ucy5jb2xvclNjYWxlKTtcclxuICAgIHRoaXMudmVsb2NpdHlTY2FsZSA9IG9wdGlvbnMudmVsb2NpdHlTY2FsZSB8fCAwLjAxO1xyXG4gICAgdGhpcy5wYXJ0aWNsZUFnZSA9IG9wdGlvbnMucGFydGljbGVBZ2UgfHwgNjQ7XHJcbiAgICB0aGlzLnNldERhdGEob3B0aW9ucy5kYXRhKTtcclxuICAgIHRoaXMucGFydGljdWxlTXVsdGlwbGllciA9IG9wdGlvbnMucGFydGljbGVNdWx0aXBsaWVyIHx8IDEgLyAzMDA7XHJcbiAgICB0aGlzLnBhcnRpY3VsZUxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoIHx8IDE7XHJcbiAgICBjb25zdCBmcmFtZVJhdGUgPSBvcHRpb25zLmZyYW1lUmF0ZSB8fCAxNTtcclxuICAgIHRoaXMuZnJhbWVUaW1lID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBwYXJ0aWN1bGVDb3VudCgpIHtcclxuICAgIGNvbnN0IHBhcnRpY3VsZVJlZHVjdGlvbiA9ICgoL2FuZHJvaWR8YmxhY2tiZXJyeXxpZW1vYmlsZXxpcGFkfGlwaG9uZXxpcG9kfG9wZXJhIG1pbml8d2Vib3MvaSkudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgPyAoTWF0aC5wb3cod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEgLyAzKSB8fCAxLjYpIDogMTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMubGF5ZXIuY2FudmFzQm91bmQud2lkdGggKiB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmhlaWdodCAqIHRoaXMucGFydGljdWxlTXVsdGlwbGllcikgKiBwYXJ0aWN1bGVSZWR1Y3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGRhdGFcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHNldERhdGEoZGF0YTogYW55W10pIHtcclxuICAgIGxldCB1RGF0YTogYW55ID0gbnVsbDtcclxuICAgIGxldCB2RGF0YTogYW55ID0gbnVsbDtcclxuICAgIGNvbnN0IGdyaWQ6IFZlY3RvcltdID0gW107XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgICAgc3dpdGNoIChgJHtyZWNvcmQuaGVhZGVyLnBhcmFtZXRlckNhdGVnb3J5fSwke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyTnVtYmVyfWApIHtcclxuICAgICAgICBjYXNlIFwiMSwyXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsMlwiOlxyXG4gICAgICAgICAgdURhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMSwzXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsM1wiOlxyXG4gICAgICAgICAgdkRhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVEYXRhIHx8ICF2RGF0YSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJEYXRhIGFyZSBub3QgY29ycmVjdCBmb3JtYXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1RGF0YS5kYXRhLmZvckVhY2goKHU6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBncmlkLnB1c2gobmV3IFZlY3Rvcih1LCB2RGF0YS5kYXRhW2luZGV4XSkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCd1RGF0YScsIHVEYXRhKTtcclxuICAgIC8vY29uc29sZS5sb2coJ3ZEYXRhJywgdkRhdGEpO1xyXG5cclxuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKFxyXG4gICAgICBncmlkLFxyXG4gICAgICB1RGF0YS5oZWFkZXIubGExLFxyXG4gICAgICB1RGF0YS5oZWFkZXIubG8xLFxyXG4gICAgICB1RGF0YS5oZWFkZXIuZHksXHJcbiAgICAgIHVEYXRhLmhlYWRlci5keCxcclxuICAgICAgdURhdGEuaGVhZGVyLm55LFxyXG4gICAgICB1RGF0YS5oZWFkZXIubnhcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy7OuzAgPSB1RGF0YS5oZWFkZXIubG8xO1xyXG4gICAgdGhpcy7PhjAgPSB1RGF0YS5oZWFkZXIubGExO1xyXG5cclxuICAgIHRoaXMuzpTOuyA9IHVEYXRhLmhlYWRlci5keDtcclxuICAgIHRoaXMuzpTPhiA9IHVEYXRhLmhlYWRlci5keVxyXG5cclxuICAgIHRoaXMubmkgPSB1RGF0YS5oZWFkZXIubng7XHJcbiAgICB0aGlzLm5qID0gdURhdGEuaGVhZGVyLm55OyAvLyBudW1iZXIgb2YgZ3JpZCBwb2ludHMgVy1FIGFuZCBOLVMgKGUuZy4sIDE0NCB4IDczKVxyXG5cclxuICAgIHZhciBwID0gMDtcclxuICAgIHZhciBpc0NvbnRpbnVvdXMgPSBNYXRoLmZsb29yKHRoaXMubmkgKiB0aGlzLs6UzrspID49IDM2MDtcclxuXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubmo7IGorKykge1xyXG4gICAgICB2YXIgcm93ID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5uaTsgaSsrLCBwKyspIHtcclxuICAgICAgICByb3dbaV0gPSB0aGlzLmdyaWQuZGF0YVtwXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNDb250aW51b3VzKSB7XHJcbiAgICAgICAgLy8gRm9yIHdyYXBwZWQgZ3JpZHMsIGR1cGxpY2F0ZSBmaXJzdCBjb2x1bW4gYXMgbGFzdCBjb2x1bW4gdG8gc2ltcGxpZnkgaW50ZXJwb2xhdGlvbiBsb2dpY1xyXG4gICAgICAgIHJvdy5wdXNoKHJvd1swXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ncmlkW2pdID0gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Db2xvclJhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG1pbk1heCA9IHRoaXMuZ3JpZC52YWx1ZVJhbmdlO1xyXG4gICAgICB0aGlzLmNvbG9yU2NhbGUuc2V0TWluTWF4KG1pbk1heFswXSwgbWluTWF4WzFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZsb29yTW9kKGE6IG51bWJlciwgbjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYSAtIG4gKiBNYXRoLmZsb29yKGEgLyBuKTtcclxuICB9O1xyXG5cclxuICBpc1ZhbHVlKHg6IGFueSkge1xyXG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgeCAhPT0gdW5kZWZpbmVkO1xyXG4gIH07XHJcblxyXG4gIGJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGcwMDogYW55LCBnMTA6IGFueSwgZzAxOiBhbnksIGcxMTogYW55KSB7XHJcbiAgICB2YXIgcnggPSAoMSAtIHgpO1xyXG4gICAgdmFyIHJ5ID0gKDEgLSB5KTtcclxuICAgIHZhciBhID0gcnggKiByeSwgYiA9IHggKiByeSwgYyA9IHJ4ICogeSwgZCA9IHggKiB5O1xyXG4gICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XHJcbiAgICB2YXIgdiA9IGcwMC52ICogYSArIGcxMC52ICogYiArIGcwMS52ICogYyArIGcxMS52ICogZDtcclxuICAgIHJldHVybiBbdSwgdiwgTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpXTtcclxuICB9O1xyXG5cclxuICAvKiBHZXQgaW50ZXJwb2xhdGVkIGdyaWQgdmFsdWUgZnJvbSBMb24vTGF0IHBvc2l0aW9uXHJcbiAgKiBAcGFyYW0gzrsge0Zsb2F0fSBMb25naXR1ZGVcclxuICAqIEBwYXJhbSDPhiB7RmxvYXR9IExhdGl0dWRlXHJcbiAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICovXHJcbiAgaW50ZXJwb2xhdGUozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IGFueSB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBpID0gdGhpcy5mbG9vck1vZCjOuyAtIHRoaXMuzrswLCAzNjApIC8gdGhpcy7OlM67OyAvLyBjYWxjdWxhdGUgbG9uZ2l0dWRlIGluZGV4IGluIHdyYXBwZWQgcmFuZ2UgWzAsIDM2MClcclxuICAgIHZhciBqID0gKHRoaXMuz4YwIC0gz4YpIC8gdGhpcy7OlM+GOyAvLyBjYWxjdWxhdGUgbGF0aXR1ZGUgaW5kZXggaW4gZGlyZWN0aW9uICs5MCB0byAtOTBcclxuXHJcbiAgICB2YXIgZmkgPSBNYXRoLmZsb29yKGkpO1xyXG4gICAgdmFyIGNpID0gZmkgKyAxO1xyXG4gICAgdmFyIGZqID0gTWF0aC5mbG9vcihqKTtcclxuICAgIHZhciBjaiA9IGZqICsgMTtcclxuICAgIHZhciByb3cgPSB0aGlzLmdyaWRbZmpdOy8vRG9udCBrbm93IHdoeSBoZSBkb3NlbnQgZm91bmQgYW55IHJvdyBFUlJSUk9SXHJcbiAgICBpZiAocm93KSB7XHJcbiAgICAgIHZhciBnMDAgPSByb3dbZmldO1xyXG4gICAgICB2YXIgZzEwID0gcm93W2NpXTtcclxuICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDApICYmIHRoaXMuaXNWYWx1ZShnMTApICYmIChyb3cgPSB0aGlzLmdyaWRbY2pdKSkge1xyXG4gICAgICAgIHZhciBnMDEgPSByb3dbZmldO1xyXG4gICAgICAgIHZhciBnMTEgPSByb3dbY2ldO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAxKSAmJiB0aGlzLmlzVmFsdWUoZzExKSkge1xyXG4gICAgICAgICAgLy8gQWxsIGZvdXIgcG9pbnRzIGZvdW5kLCBzbyBpbnRlcnBvbGF0ZSB0aGUgdmFsdWUuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5iaWxpbmVhckludGVycG9sYXRlVmVjdG9yKGkgLSBmaSwgaiAtIGZqLCBnMDAsIGcxMCwgZzAxLCBnMTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgZ2V0UGFydGljdWxlV2luZChwOiBQYXJ0aWN1bGUpOiBWZWN0b3Ige1xyXG4gICAgY29uc3QgbG5nTGF0ID0gdGhpcy5sYXllci5jYW52YXNUb01hcChwLngsIHAueSk7XHJcbiAgICBjb25zdCB3aW5kID0gdGhpcy5ncmlkLmdldChsbmdMYXRbMF0sIGxuZ0xhdFsxXSk7XHJcbiAgICBwLmludGVuc2l0eSA9IHdpbmQuaW50ZW5zaXR5O1xyXG4gICAgY29uc3QgbWFwQXJlYSA9IHRoaXMubGF5ZXIubWFwQm91bmQuaGVpZ2h0ICogdGhpcy5sYXllci5tYXBCb3VuZC53aWR0aDtcclxuICAgIHZhciB2ZWxvY2l0eVNjYWxlID0gdGhpcy52ZWxvY2l0eVNjYWxlICogTWF0aC5wb3cobWFwQXJlYSwgMC40KTtcclxuICAgIHRoaXMubGF5ZXIuZGlzdG9ydChsbmdMYXRbMF0sIGxuZ0xhdFsxXSwgcC54LCBwLnksIHZlbG9jaXR5U2NhbGUsIHdpbmQpO1xyXG4gICAgcmV0dXJuIHdpbmQ7XHJcbiAgfVxyXG5cclxuICBzdGFydChsYXllcjogTGF5ZXIpIHtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQyRCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHRoaXMuY29udGV4dDJELmxpbmVXaWR0aCA9IHRoaXMucGFydGljdWxlTGluZVdpZHRoO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuOTcpXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IDAuNjtcclxuXHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldCA9IG5ldyBBbmltYXRpb25CdWNrZXQodGhpcy5jb2xvclNjYWxlKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuc3BsaWNlKDAsIHRoaXMucGFydGljdWxlcy5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY3VsZUNvdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5wYXJ0aWN1bGVzLnB1c2godGhpcy5sYXllci5jYW52YXNCb3VuZC5nZXRSYW5kb21QYXJ0aWN1bGUodGhpcy5wYXJ0aWNsZUFnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGhlbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHRoaXMuZnJhbWUoKTtcclxuICB9XHJcblxyXG4gIGZyYW1lKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25Mb29wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5mcmFtZSgpXHJcbiAgICB9KTtcclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHZhciBkZWx0YSA9IG5vdyAtIHRoaXMudGhlbjtcclxuICAgIGlmIChkZWx0YSA+IHRoaXMuZnJhbWVUaW1lKSB7XHJcbiAgICAgIHRoaXMudGhlbiA9IG5vdyAtIChkZWx0YSAlIHRoaXMuZnJhbWVUaW1lKTtcclxuICAgICAgdGhpcy5ldm9sdmUoKTtcclxuICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldm9sdmUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5jbGVhcigpO1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLmZvckVhY2goKHA6IFBhcnRpY3VsZSkgPT4ge1xyXG4gICAgICBwLmdyb3coKTtcclxuICAgICAgaWYgKHAuaXNEZWFkKSB7XHJcbiAgICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5yZXNldFBhcnRpY3VsZShwKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3aW5kID0gdGhpcy5nZXRQYXJ0aWN1bGVXaW5kKHApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5hZGQocCwgd2luZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWluXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5maWxsUmVjdChcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC54TWluLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnlNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQud2lkdGgsXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgLy8gRmFkZSBleGlzdGluZyBwYXJ0aWNsZSB0cmFpbHMuXHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gMC45O1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmRyYXcodGhpcy5jb250ZXh0MkQpO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucGFydGljdWxlcy5zcGxpY2UoMCwgdGhpcy5wYXJ0aWN1bGVzLmxlbmd0aCk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5jbGVhcigpO1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uTG9vcCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25Mb29wKTtcclxuICAgICAgdGhpcy5hbmltYXRpb25Mb29wID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93aW5keS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgcHVibGljIHU6IG51bWJlcjtcbiAgICBwdWJsaWMgdjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IgKHU/OiBudW1iZXIsIHY/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51ID0gdSB8fCAwO1xuICAgICAgICB0aGlzLnYgPSB2IHx8IDA7XG4gICAgfVxuXG4gICAgZ2V0IGludGVuc2l0eSAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy51ICogdGhpcy51ICsgdGhpcy52ICogdGhpcy52KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlY3Rvci50cyIsImRlY2xhcmUgdmFyIEw6IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzTGF5ZXIge1xuXHRwcml2YXRlIF9tYXA6IGFueTtcblx0cHJpdmF0ZSBfY2FudmFzOiBhbnk7XG5cdHByaXZhdGUgX2ZyYW1lOiBhbnk7XG5cdHByaXZhdGUgX2RlbGVnYXRlOiBhbnk7XG5cdHByaXZhdGUgdGlsZXM6IGFueTtcblxuXHRpbml0aWFsaXplIChvcHRpb25zOiBhbnkpIHtcblx0XHR0aGlzLl9tYXAgICAgPSBudWxsO1xuXHRcdHRoaXMuX2NhbnZhcyA9IG51bGw7XG5cdFx0dGhpcy5fZnJhbWUgID0gbnVsbDtcblx0XHR0aGlzLl9kZWxlZ2F0ZSA9IG51bGw7XG5cdFx0TC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG5cdH1cblxuXHRkZWxlZ2F0ZSAoZGVsOiBhbnkpOiBDYW52YXNMYXllciB7XG5cdFx0dGhpcy5fZGVsZWdhdGUgPSBkZWw7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWVkUmVkcmF3ICgpIHtcblx0XHRpZiAoIXRoaXMuX2ZyYW1lKSB7XG5cdFx0XHR0aGlzLl9mcmFtZSA9IEwuVXRpbC5yZXF1ZXN0QW5pbUZyYW1lKHRoaXMuZHJhd0xheWVyLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X29uTGF5ZXJEaWRSZXNpemUgKHJlc2l6ZUV2ZW50OiBhbnkpIHtcblx0XHR0aGlzLl9jYW52YXMud2lkdGggPSByZXNpemVFdmVudC5uZXdTaXplLng7XG5cdFx0dGhpcy5fY2FudmFzLmhlaWdodCA9IHJlc2l6ZUV2ZW50Lm5ld1NpemUueTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfb25MYXllckRpZE1vdmUgKCkge1xuXHRcdHZhciB0b3BMZWZ0ID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXllclBvaW50KFswLCAwXSk7XG5cdFx0TC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX2NhbnZhcywgdG9wTGVmdCk7XG5cdFx0dGhpcy5kcmF3TGF5ZXIoKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRnZXRFdmVudHMgKCkge1xuXHRcdHZhciBldmVudHMgPSB7XG5cdFx0XHRyZXNpemU6IHRoaXMuX29uTGF5ZXJEaWRSZXNpemUsXG5cdFx0XHRtb3ZlZW5kOiB0aGlzLl9vbkxheWVyRGlkTW92ZSxcblx0XHRcdHpvb21hbmltOiA8YW55PnVuZGVmaW5lZFxuXHRcdH07XG5cdFx0aWYgKHRoaXMuX21hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkKSB7XG5cdFx0XHRldmVudHMuem9vbWFuaW0gPSAgdGhpcy5fYW5pbWF0ZVpvb207XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRvbkFkZCAobWFwOiBhbnkpIHtcblx0XHR0aGlzLl9tYXAgPSBtYXA7XG5cdFx0dGhpcy5fY2FudmFzID0gTC5Eb21VdGlsLmNyZWF0ZSgnY2FudmFzJywgJ2xlYWZsZXQtbGF5ZXInKTtcblx0XHR0aGlzLnRpbGVzID0ge307XG5cblx0XHR2YXIgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplLnk7XG5cblx0XHR2YXIgYW5pbWF0ZWQgPSB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZDtcblx0XHRMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fY2FudmFzLCAnbGVhZmxldC16b29tLScgKyAoYW5pbWF0ZWQgPyAnYW5pbWF0ZWQnIDogJ2hpZGUnKSk7XG5cblxuXHRcdG1hcC5fcGFuZXMub3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcblx0XHRtYXAub24odGhpcy5nZXRFdmVudHMoKSx0aGlzKTtcblxuXHRcdHZhciBkZWwgPSB0aGlzLl9kZWxlZ2F0ZSB8fCB0aGlzO1xuXHRcdGRlbC5vbkxheWVyRGlkTW91bnQgJiYgZGVsLm9uTGF5ZXJEaWRNb3VudCgpOyAvLyAtLSBjYWxsYmFja1xuXHRcdHRoaXMubmVlZFJlZHJhdygpO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHNlbGYuX29uTGF5ZXJEaWRNb3ZlKCk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0b25SZW1vdmUgKG1hcDogYW55KSB7XG5cdFx0dmFyIGRlbCA9IHRoaXMuX2RlbGVnYXRlIHx8IHRoaXM7XG5cdFx0ZGVsLm9uTGF5ZXJXaWxsVW5tb3VudCAmJiBkZWwub25MYXllcldpbGxVbm1vdW50KCk7IC8vIC0tIGNhbGxiYWNrXG5cblxuXHRcdG1hcC5nZXRQYW5lcygpLm92ZXJsYXlQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX2NhbnZhcyk7XG5cblx0XHRtYXAub2ZmKHRoaXMuZ2V0RXZlbnRzKCksdGhpcyk7XG5cblx0XHR0aGlzLl9jYW52YXMgPSBudWxsO1xuXG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRhZGRUbyAobWFwOiBhbnkpIHtcblx0XHRtYXAuYWRkTGF5ZXIodGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRMYXRMb25Ub01lcmNhdG9yIChsYXRsb246IEwuTGF0TG5nKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IGxhdGxvbi5sbmcgKiA2Mzc4MTM3ICogTWF0aC5QSSAvIDE4MCxcblx0XHRcdHk6IE1hdGgubG9nKE1hdGgudGFuKCg5MCArIGxhdGxvbi5sYXQpICogTWF0aC5QSSAvIDM2MCkpICogNjM3ODEzN1xuXHRcdH07XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRkcmF3TGF5ZXIgKCkge1xuXHRcdC8vIC0tIHRvZG8gbWFrZSB0aGUgdmlld0luZm8gcHJvcGVydGllcyAgZmxhdCBvYmplY3RzLlxuXHRcdHZhciBzaXplICAgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xuXHRcdHZhciBib3VuZHMgPSB0aGlzLl9tYXAuZ2V0Qm91bmRzKCk7XG5cdFx0dmFyIHpvb20gICA9IHRoaXMuX21hcC5nZXRab29tKCk7XG5cblx0XHR2YXIgY2VudGVyID0gdGhpcy5MYXRMb25Ub01lcmNhdG9yKHRoaXMuX21hcC5nZXRDZW50ZXIoKSk7XG5cdFx0dmFyIGNvcm5lciA9IHRoaXMuTGF0TG9uVG9NZXJjYXRvcih0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyh0aGlzLl9tYXAuZ2V0U2l6ZSgpKSk7XG5cblx0XHR2YXIgZGVsID0gdGhpcy5fZGVsZWdhdGUgfHwgdGhpcztcblx0XHRkZWwub25EcmF3TGF5ZXIgJiYgZGVsLm9uRHJhd0xheWVyKCB7XG5cdFx0XHRsYXllciA6IHRoaXMsXG5cdFx0XHRjYW52YXM6IHRoaXMuX2NhbnZhcyxcblx0XHRcdGJvdW5kczogYm91bmRzLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHpvb206IHpvb20sXG5cdFx0XHRjZW50ZXIgOiBjZW50ZXIsXG5cdFx0XHRjb3JuZXIgOiBjb3JuZXJcblx0XHR9KTtcblx0XHR0aGlzLl9mcmFtZSA9IG51bGw7XG5cdH1cblxuXHQvLyAtLSBMLkRvbVV0aWwuc2V0VHJhbnNmb3JtIGZyb20gbGVhZmxldCAxLjAuMCB0byB3b3JrIG9uIDAuMC43XG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdF9zZXRUcmFuc2Zvcm0gKGVsOiBhbnksIG9mZnNldDogYW55LCBzY2FsZTogYW55KSB7XG5cdFx0dmFyIHBvcyA9IG9mZnNldCB8fCBuZXcgTC5Qb2ludCgwLCAwKTtcblxuXHRcdGVsLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID1cblx0XHRcdChMLkJyb3dzZXIuaWUzZCA/XG5cdFx0XHQndHJhbnNsYXRlKCcgKyBwb3MueCArICdweCwnICsgcG9zLnkgKyAncHgpJyA6XG5cdFx0XHQndHJhbnNsYXRlM2QoJyArIHBvcy54ICsgJ3B4LCcgKyBwb3MueSArICdweCwwKScpICtcblx0XHRcdChzY2FsZSA/ICcgc2NhbGUoJyArIHNjYWxlICsgJyknIDogJycpO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X2FuaW1hdGVab29tIChlOiBhbnkpIHtcblx0XHR2YXIgc2NhbGUgPSB0aGlzLl9tYXAuZ2V0Wm9vbVNjYWxlKGUuem9vbSk7XG5cdFx0Ly8gLS0gZGlmZmVyZW50IGNhbGMgb2Ygb2Zmc2V0IGluIGxlYWZsZXQgMS4wLjAgYW5kIDAuMC43IHRoYW5rcyBmb3IgMS4wLjAtcmMyIGNhbGMgQGpkdWdnYW4xXG5cdFx0dmFyIG9mZnNldCA9IEwuTGF5ZXIgPyB0aGlzLl9tYXAuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhXZXN0KCksIGUuem9vbSwgZS5jZW50ZXIpIDpcblx0XHRcdHRoaXMuX21hcC5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KHRoaXMuX21hcC5fZ2V0TWFwUGFuZVBvcygpKTtcblxuXHRcdEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0odGhpcy5fY2FudmFzLCBvZmZzZXQsIHNjYWxlKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0wuQ2FudmFzTGF5ZXIudHMiLCJpbXBvcnQgV2luZHkgZnJvbSAnLi93aW5keSc7XG5kZWNsYXJlIHZhciBMOiBhbnk7XG5pbXBvcnQgKiBhcyB2ZWxvY2l0eWNzcyBmcm9tICcuL2xlYWZsZXQtdmVsb2NpdHkuY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWxvY2l0eUNvbnRyb2wge1xuICBwcml2YXRlIG9wdGlvbnM6IGFueTtcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbWFwOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9kZWxlZ2F0ZTogYW55O1xuICBwcml2YXRlIF9jb250YWluZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0JyxcbiAgICAgIGVtcHR5U3RyaW5nOiAnVW5hdmFpbGFibGUnLFxuICAgICAgLy8gQ291bGQgYmUgYW55IGNvbWJpbmF0aW9uIG9mICdiZWFyaW5nJyAoYW5nbGUgdG93YXJkIHdoaWNoIHRoZSBmbG93IGdvZXMpIG9yICdtZXRlbycgKGFuZ2xlIGZyb20gd2hpY2ggdGhlIGZsb3cgY29tZXMpXG4gICAgICAvLyBhbmQgJ0NXJyAoYW5nbGUgdmFsdWUgaW5jcmVhc2VzIGNsb2NrLXdpc2UpIG9yICdDQ1cnIChhbmdsZSB2YWx1ZSBpbmNyZWFzZXMgY291bnRlciBjbG9jay13aXNlKVxuICAgICAgYW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXG5cdCAgICAvLyBDb3VsZCBiZSAnbS9zJyBmb3IgbWV0ZXIgcGVyIHNlY29uZCwgJ2svaCcgZm9yIGtpbG9tZXRlciBwZXIgaG91ciBvciAna3QnIGZvciBrbm90c1xuXHQgICAgc3BlZWRVbml0OiAnbS9zJ1xuICAgIH07XG4gIH1cblxuICBzZXRXaW5keShfd2luZHk6YW55KXtcbiAgICBpZighdGhpcy5fd2luZHkgJiYgX3dpbmR5KSB0aGlzLl93aW5keSA9IF93aW5keTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczphbnkpe1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBvbkFkZChtYXA6IGFueSkge1xuICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCB2ZWxvY2l0eWNzcy5sZWFmbGV0Q29udHJvbFZlbG9jaXR5KTtcbiAgICBMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fbWFwLm9uKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXdXaW5kU3BlZWQsIHRoaXMpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuZW1wdHlTdHJpbmc7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIG9uUmVtb3ZlKG1hcDogYW55KSB7XG4gICAgdGhpcy5fbWFwLm9mZignbW91c2Vtb3ZlJywgdGhpcy5kcmF3V2luZFNwZWVkLCB0aGlzKTtcbiAgfVxuXG4gIHZlY3RvclRvU3BlZWQodU1zOiBudW1iZXIsIHZNczogbnVtYmVyLCB1bml0OiBzdHJpbmcpIHtcbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuICAgIC8vIERlZmF1bHQgaXMgbS9zXG4gICAgaWYgKHVuaXQgPT09ICdrL2gnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJraWxvbWV0ZXJIb3VyKHZlbG9jaXR5QWJzKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdrdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm1ldGVyU2VjMktub3RzKHZlbG9jaXR5QWJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5QWJzO1xuICAgIH1cbiAgfVxuXG4gIHZlY3RvclRvRGVncmVlcyh1TXM6IG51bWJlciwgdk1zOiBudW1iZXIsIGFuZ2xlQ29udmVudGlvbjogc3RyaW5nKSB7XG4gICAgLy8gRGVmYXVsdCBhbmdsZSBjb252ZW50aW9uIGlzIENXXG4gICAgaWYgKGFuZ2xlQ29udmVudGlvbi5lbmRzV2l0aCgnQ0NXJykpIHtcbiAgICAgIC8vIHZNcyBjb21lcyBvdXQgdXBzaWRlLWRvd24uLlxuICAgICAgdk1zID0gdk1zID4gMCA/IHZNcyA9IC12TXMgOiBNYXRoLmFicyh2TXMpO1xuICAgIH1cbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xuXG4gICAgdmFyIHZlbG9jaXR5RGlyID0gTWF0aC5hdGFuMih1TXMgLyB2ZWxvY2l0eUFicywgdk1zIC8gdmVsb2NpdHlBYnMpO1xuICAgIHZhciB2ZWxvY2l0eURpclRvRGVncmVlcyA9IHZlbG9jaXR5RGlyICogMTgwIC8gTWF0aC5QSSArIDE4MDtcblxuICAgIGlmIChhbmdsZUNvbnZlbnRpb24gPT09ICdiZWFyaW5nQ1cnIHx8IGFuZ2xlQ29udmVudGlvbiA9PT0gJ21ldGVvQ0NXJykge1xuICAgICAgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgKz0gMTgwO1xuICAgICAgaWYgKHZlbG9jaXR5RGlyVG9EZWdyZWVzID49IDM2MCkgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgLT0gMzYwO1xuICAgIH1cblxuICAgIHJldHVybiB2ZWxvY2l0eURpclRvRGVncmVlcztcbiAgfVxuXG4gIG1ldGVyU2VjMktub3RzKG1ldGVyczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1ldGVycyAvIDAuNTE0XG4gIH1cblxuICBtZXRlclNlYzJraWxvbWV0ZXJIb3VyKG1ldGVyczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1ldGVycyAqIDMuNlxuICB9XG5cbiAgZHJhd1dpbmRTcGVlZChldjogYW55KSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcoTC5wb2ludChldi5jb250YWluZXJQb2ludC54LCBldi5jb250YWluZXJQb2ludC55KSk7XG4gICAgdmFyIGdyaWRWYWx1ZSA9IHRoaXMuX3dpbmR5LmludGVycG9sYXRlKHBvcy5sbmcsIHBvcy5sYXQpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgaWYgKGdyaWRWYWx1ZSAmJiAhaXNOYU4oZ3JpZFZhbHVlWzBdKSAmJiAhaXNOYU4oZ3JpZFZhbHVlWzFdKSAmJiBncmlkVmFsdWVbMl0pIHtcbiAgICAgIHRlbXBsYXRlID0gXCI8c3Ryb25nPiAgRGlyZWN0aW9uOiA8L3N0cm9uZz5cIiArXG4gICAgICAgIHRoaXMudmVjdG9yVG9EZWdyZWVzKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuYW5nbGVDb252ZW50aW9uKS50b0ZpeGVkKDMpICtcbiAgICAgICAgXCLCsFwiICsgXCIsIDx0aGlzc3Ryb25nPiAgU3BlZWQ6IDwvc3Ryb25nPlwiICtcbiAgICAgICAgdGhpcy52ZWN0b3JUb1NwZWVkKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuc3BlZWRVbml0KS50b0ZpeGVkKDEpKyBgICR7dGhpcy5vcHRpb25zLnNwZWVkVW5pdH1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZylcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZW1wdHlTdHJpbmc7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0wuQ29udHJvbFZlbG9jaXR5LnRzIiwiaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xyXG5pbXBvcnQgV2luZHkgZnJvbSBcIi4vd2luZHlcIjtcclxuaW1wb3J0IENhbnZhc0xheWVyIGZyb20gXCIuL0wuQ2FudmFzTGF5ZXJcIjtcclxuaW1wb3J0IFZlbG9jaXR5TGF5ZXIgZnJvbSBcIi4vTC5WZWxvY2l0eUxheWVyXCI7XHJcbmltcG9ydCBWZWxvY2l0eUNvbnRyb2wgZnJvbSAnLi9MLkNvbnRyb2xWZWxvY2l0eSc7XHJcblxyXG4oPGFueT53aW5kb3cpLkNhbnZhc0JvdW5kID0gQ2FudmFzQm91bmQ7XHJcbig8YW55PndpbmRvdykuTWFwQm91bmQgPSBNYXBCb3VuZDtcclxuKDxhbnk+d2luZG93KS5XaW5keSA9IFdpbmR5O1xyXG5cclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5cclxuTC5DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbkwuY2FudmFzTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIG5ldyBMLkNhbnZhc0xheWVyKCk7XHJcbn07XHJcblxyXG5MLkNvbnRyb2xWZWxvY2l0eSA9IChMLkNvbnRyb2wpLmV4dGVuZChuZXcgVmVsb2NpdHlDb250cm9sKCkpO1xyXG5MLmNvbnRyb2xWZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgTC5Db250cm9sVmVsb2NpdHkoKTtcclxufTtcclxuXHJcbkwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcclxuTC52ZWxvY2l0eUxheWVyID0gZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XHJcblx0cmV0dXJuIG5ldyBMLlZlbG9jaXR5TGF5ZXIob3B0aW9ucyk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY3VsZSB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZ2U6IG51bWJlcjtcbiAgICBwdWJsaWMgbWF4QWdlOiBudW1iZXI7XG4gICAgcHVibGljIHh0OiBudW1iZXI7XG4gICAgcHVibGljIHl0OiBudW1iZXI7XG4gICAgcHVibGljIGludGVuc2l0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG1heEFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4QWdlKTtcbiAgICAgICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuXG4gICAgcmVzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5hZ2UgPSAwO1xuICAgIH1cblxuICAgIGdldCBpc0RlYWQgKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWdlID4gdGhpcy5tYXhBZ2U7XG4gICAgfVxuXG4gICAgZ3JvdyAoKSB7XG4gICAgICAgIHRoaXMuYWdlKys7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYXJ0aWNsZS50cyIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIHByaXZhdGUgZGF0YTogVmVjdG9yW107XG4gICAgcHJpdmF0ZSDPhjA6IG51bWJlcjtcbiAgICBwcml2YXRlIM67MDogbnVtYmVyO1xuICAgIHByaXZhdGUgzpTOuzogbnVtYmVyO1xuICAgIHByaXZhdGUgzpTPhjogbnVtYmVyO1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IgKGRhdGE6IFZlY3RvcltdLCDPhjA6IG51bWJlciwgzrswOiBudW1iZXIsIM6Uz4Y6IG51bWJlciwgzpTOuzogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLs+GMCA9IM+GMDtcbiAgICAgICAgdGhpcy7OuzAgPSDOuzA7XG4gICAgICAgIHRoaXMuzpTOuyA9IM6Uzrs7XG4gICAgICAgIHRoaXMuzpTPhiA9IM6Uz4Y7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlUmFuZ2UgKCkgOiBudW1iZXJbXSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWluID0gdGhpcy5kYXRhWzBdLmludGVuc2l0eTtcbiAgICAgICAgbGV0IG1heCA9IHRoaXMuZGF0YVswXS5pbnRlbnNpdHk7XG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKCh2YWx1ZTogVmVjdG9yKSA9PiB7XG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlLmludGVuc2l0eSk7XG4gICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlLmludGVuc2l0eSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW21pbiwgbWF4XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHZlY3RvciBhdCBhbnkgcG9pbnRcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICovXG4gICAgZ2V0ICjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgZs67ID0gdGhpcy5mbG9vck1vZCjOuyAtIHRoaXMuzrswLCAzNjApIC8gdGhpcy7OlM67OyAgLy8gY2FsY3VsYXRlIGxvbmdpdHVkZSBpbmRleCBpbiB3cmFwcGVkIHJhbmdlIFswLCAzNjApXG4gICAgICAgIGNvbnN0IGbPhiA9ICh0aGlzLs+GMCAtIM+GKSAvIHRoaXMuzpTPhjsgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxuXG4gICAgICAgIGNvbnN0IGnOuyA9IE1hdGguZmxvb3IoZs67KSAvLyBjb2wgblxuICAgICAgICBsZXQgas67ID0gac67ICsgMTsgICAgICAgIC8vIGNvbCBuKzFcbiAgICAgICAgaWYgKGrOuyA+PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICBqzrsgPSB0aGlzLs67MDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpz4YgPSBNYXRoLmZsb29yKGbPhikgLy8gbGluZSBtXG4gICAgICAgIGxldCBqz4YgPSBpz4YgKyAxOyAgICAgICAgLy8gbGluZSBtKzFcbiAgICAgICAgaWYgKGrPhiA+PSB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgas+GID0gac+GO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgds67ID0gZs67IC0gac67OyAgIC8vIGNvbCB2YXJpYXRpb24gWzAuLjFdXG4gICAgICAgIGNvbnN0IHbPhiA9IGbPhiAtIGnPhjsgICAvLyBsaW5lIHZhcmlhdGlvbiBbMC4uMV1cblxuICAgICAgICBpZiAoac67Pj0wICYmIGnPhj49MCAmJiBpzrs8dGhpcy53aWR0aCAmJiBpz4Y8dGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICBsZXQgZzAwID0gdGhpcy5kYXRhW2nOuyArIGnPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgIGxldCBnMTAgPSB0aGlzLmRhdGFbas67ICsgac+GICogdGhpcy53aWR0aF07XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkpe1xuICAgICAgICAgICAgbGV0IGcwMSA9IHRoaXMuZGF0YVtpzrsgKyBqz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgIGxldCBnMTEgPSB0aGlzLmRhdGFbas67ICsgas+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMSkgJiYgdGhpcy5pc1ZhbHVlKGcxMSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbiAoXG4gICAgICAgICAgICAgICAgICB2zrssXG4gICAgICAgICAgICAgICAgICB2z4YsXG4gICAgICAgICAgICAgICAgICBnMDAsIC8vbDBjMFxuICAgICAgICAgICAgICAgICAgZzEwLCAvL2wwYzFcbiAgICAgICAgICAgICAgICAgIGcwMSwgLy9sMWMwXG4gICAgICAgICAgICAgICAgICBnMTEgIC8vbDFjbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsMCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnBvbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB4IHZhcmlhdGlvbiBiZXR3ZWVuIGcwKiBhbmQgZzEqXG4gICAgICogQHBhcmFtIHkgdmFyaWF0aW9uIGJldHdlZW4gZyowIGRhbnMgZyoxXG4gICAgICogQHBhcmFtIGcwMCBwb2ludCBhdCBjb2xfMCBhbmQgbGluZV8wXG4gICAgICogQHBhcmFtIGcxMCBwb2ludCBhdCBjb2xfMSBhbmQgbGluZV8wXG4gICAgICogQHBhcmFtIGcwMSBwb2ludCBhdCBjb2xfMCBhbmQgbGluZV8xXG4gICAgICogQHBhcmFtIGcxMSBwb2ludCBhdCBjb2xfMSBhbmQgbGluZV8xXG4gICAgICogQHJldHVybiBpbnRlcnBvbGF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgaW50ZXJwb2xhdGlvbiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGcwMDogVmVjdG9yLCBnMTA6VmVjdG9yLCBnMDE6IFZlY3RvciwgZzExOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgICAgICB2YXIgcnggPSAoMSAtIHgpO1xuICAgICAgICB2YXIgcnkgPSAoMSAtIHkpO1xuICAgICAgICB2YXIgYSA9IHJ4ICogcnksXG4gICAgICAgICAgICBiID0geCAqIHJ5LFxuICAgICAgICAgICAgYyA9IHJ4ICogeSxcbiAgICAgICAgICAgIGQgPSB4ICogeTtcbiAgICAgICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XG4gICAgICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih1LCB2KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gbW9kdWxvXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9IHJldHVybnMgcmVtYWluZGVyIG9mIGZsb29yZWQgZGl2aXNpb24sIGkuZS4sIGZsb29yKGEgLyBuKS4gVXNlZnVsIGZvciBjb25zaXN0ZW50IG1vZHVsb1xuXHQgKiAgICAgICAgICBvZiBuZWdhdGl2ZSBudW1iZXJzLiBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Nb2R1bG9fb3BlcmF0aW9uLlxuXHQgKi9cblx0Zmxvb3JNb2QgKGE6IG51bWJlciwgbjogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gYSAtIG4gKiBNYXRoLmZsb29yKGEgLyBuKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGlmIHggaXMgYSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLlxuXHQgKi9cblx0aXNWYWx1ZSAoeDogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHggIT09IG51bGwgJiYgeCAhPT0gdW5kZWZpbmVkO1xuXHR9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dyaWQudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclNjYWxlIHtcbiAgICBwcml2YXRlIHNjYWxlOiBzdHJpbmdbXSA9IFtcbiAgICBcInJnYigzNiwxMDQsIDE4MClcIixcblx0XHRcInJnYig2MCwxNTcsIDE5NClcIixcblx0XHRcInJnYigxMjgsMjA1LDE5MyApXCIsXG5cdFx0XCJyZ2IoMTUxLDIxOCwxNjggKVwiLFxuXHRcdFwicmdiKDE5OCwyMzEsMTgxKVwiLFxuXHRcdFwicmdiKDIzOCwyNDcsMjE3KVwiLFxuXHRcdFwicmdiKDI1NSwyMzgsMTU5KVwiLFxuXHRcdFwicmdiKDI1MiwyMTcsMTI1KVwiLFxuXHRcdFwicmdiKDI1NSwxODIsMTAwKVwiLFxuXHRcdFwicmdiKDI1MiwxNTAsNzUpXCIsXG5cdFx0XCJyZ2IoMjUwLDExMiw1MilcIixcblx0XHRcInJnYigyNDUsNjQsMzIpXCIsXG5cdFx0XCJyZ2IoMjM3LDQ1LDI4KVwiLFxuXHRcdFwicmdiKDIyMCwyNCwzMilcIixcblx0XHRcInJnYigxODAsMCwzNSlcIlxuICAgIF1cbiAgICBwcml2YXRlIG1pblZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobWluVmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlciwgc2NhbGU/OiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLnNldE1pbk1heChtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICAgICAgICBpZiAoKHNjYWxlIGluc3RhbmNlb2YgQXJyYXkpICYmIHNjYWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TWluTWF4IChtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBtaW5WYWx1ZTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1heFZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzaXplICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldENvbG9ySW5kZXgodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA8PSB0aGlzLm1pblZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPj0gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoLTE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNjYWxlLmxlbmd0aCAqICh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4IDwwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXg+IHRoaXMuc2NhbGUubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGluZGV4KTtcbiAgICB9XG5cbiAgICBjb2xvckF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVtpbmRleF07XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW3RoaXMuZ2V0Q29sb3JJbmRleCh2YWx1ZSldO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbG9yU2NhbGUudHMiLCJpbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XG5pbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb25CdWNrZXQge1xuICAgIHByaXZhdGUgY29sb3JTY2FsZTogQ29sb3JTY2FsZTtcbiAgICBwcml2YXRlIGJ1Y2tldHM6IFBhcnRpY3VsZVtdW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yIChjb2xvclNjYWxlOiBDb2xvclNjYWxlKSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IGNvbG9yU2NhbGU7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxjb2xvclNjYWxlLnNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idWNrZXRzLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKChwYXJ0aWN1bGVTZXQ6IFBhcnRpY3VsZVtdKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWN1bGVTZXQuc3BsaWNlKDAsIHBhcnRpY3VsZVNldC5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkIChwOiBQYXJ0aWN1bGUsIHY6IFZlY3Rvcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29sb3JTY2FsZS5nZXRDb2xvckluZGV4KHAuaW50ZW5zaXR5KVxuICAgICAgICBpZiAoaW5kZXg8MCB8fCBpbmRleD49IHRoaXMuYnVja2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwLnh0ID0gcC54ICsgdi51O1xuICAgICAgICBwLnl0ID0gcC55ICsgdi52O1xuICAgICAgICB0aGlzLmJ1Y2tldHNbaW5kZXhdLnB1c2gocCk7XG4gICAgfVxuXG4gICAgZHJhdyAoY29udGV4dDJEOiBhbnkpIHtcbiAgICAgICAgdGhpcy5idWNrZXRzLmZvckVhY2goKGJ1Y2tldDogUGFydGljdWxlW10sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1Y2tldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2FsZS5jb2xvckF0KGkpO1xuICAgICAgICAgICAgICAgIGJ1Y2tldC5mb3JFYWNoKGZ1bmN0aW9uKHBhcnRpY2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyRC5tb3ZlVG8ocGFydGljbGUueCwgcGFydGljbGUueSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyRC5saW5lVG8ocGFydGljbGUueHQsIHBhcnRpY2xlLnl0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUueCA9IHBhcnRpY2xlLnh0O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS55ID0gcGFydGljbGUueXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGlvbkJ1Y2tldC50cyIsImltcG9ydCBXaW5keSBmcm9tICcuL3dpbmR5JztcclxuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gJy4vY2FudmFzQm91bmQnXHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tICcuL21hcEJvdW5kJztcclxuaW1wb3J0IExheWVyIGZyb20gXCIuL2xheWVyXCI7XHJcbmltcG9ydCBDYW52YXNMYXllciBmcm9tICcuL0wuQ2FudmFzTGF5ZXInO1xyXG5pbXBvcnQgVmVsb2NpdHlDb250cm9sIGZyb20gJy4vTC5Db250cm9sVmVsb2NpdHknXHJcbmRlY2xhcmUgdmFyIEw6IGFueTtcclxuXHJcblxyXG5jb25zdCBMX0NhbnZhc0xheWVyID0gKEwuTGF5ZXIgPyBMLkxheWVyIDogTC5DbGFzcykuZXh0ZW5kKG5ldyBDYW52YXNMYXllcigpKTtcclxuY29uc3QgTF9jYW52YXNMYXllciA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgTF9DYW52YXNMYXllcigpO1xyXG59O1xyXG5cclxuY29uc3QgTF9Db250cm9sVmVsb2NpdHkgPSAoTC5Db250cm9sKS5leHRlbmQobmV3IFZlbG9jaXR5Q29udHJvbCk7XHJcbmNvbnN0IExfY29udHJvbFZlbG9jaXR5ID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBMX0NvbnRyb2xWZWxvY2l0eSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHlMYXllciB7XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uczogYW55O1xyXG4gIHByaXZhdGUgX21hcDogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF9jYW52YXNMYXllcjogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF93aW5keTogV2luZHkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NvbnRleHQ6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZGlzcGxheVRpbWVvdXQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfbW91c2VDb250cm9sOiBhbnkgID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGRpc3BsYXlWYWx1ZXM6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlPcHRpb25zOiB7XHJcbiAgICAgICAgdmVsb2NpdHlUeXBlOiAnVmVsb2NpdHknLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tbGVmdCcsXHJcbiAgICAgICAgZW1wdHlTdHJpbmc6ICdObyB2ZWxvY2l0eSBkYXRhJyxcclxuXHRcdFx0XHRhbmdsZUNvbnZlbnRpb246ICdiZWFyaW5nQ0NXJyxcclxuXHRcdFx0XHRzcGVlZFVuaXQ6ICdtL3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIG1heFZlbG9jaXR5OiAxMCwgLy8gdXNlZCB0byBhbGlnbiBjb2xvciBzY2FsZVxyXG4gICAgICBjb2xvclNjYWxlOiBudWxsLFxyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZShvcHRpb25zOiBhbnkpIHtcclxuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobWFwOiBhbnkpIHtcclxuICAgIC8vIGNyZWF0ZSBjYW52YXMsIGFkZCBvdmVybGF5IGNvbnRyb2xcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyID0gTF9jYW52YXNMYXllcigpLmRlbGVnYXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIuYWRkVG8obWFwKTtcclxuXHJcbiAgICB0aGlzLl9tYXAgPSBtYXA7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZShtYXA6IGFueSkge1xyXG4gICAgdGhpcy5fZGVzdHJveVdpbmQoKTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB7XHJcbiAgICAgIHRoaXMuX3dpbmR5LnNldERhdGEoZGF0YSk7XHJcbiAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICg8YW55PnRoaXMpLmZpcmUoJ2xvYWQnKTtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBSSVZBVEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgb25EcmF3TGF5ZXIob3ZlcmxheTogYW55LCBwYXJhbXM6IGFueSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICghdGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5faW5pdFdpbmR5KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpIGNsZWFyVGltZW91dChzZWxmLl9kaXNwbGF5VGltZW91dCk7XHJcblxyXG4gICAgdGhpcy5fZGlzcGxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLl9zdGFydFdpbmR5KCk7XHJcbiAgICB9LCAxNTApOyAvLyBzaG93aW5nIHZlbG9jaXR5IGlzIGRlbGF5ZWRcclxuICB9XHJcblxyXG5cclxuXHJcbiAgX3N0YXJ0V2luZHkoKSB7XHJcbiAgICB2YXIgYm91bmRzID0gdGhpcy5fbWFwLmdldEJvdW5kcygpO1xyXG4gICAgdmFyIHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xyXG5cclxuICAgIC8vIGJvdW5kcywgd2lkdGgsIGhlaWdodCwgZXh0ZW50XHJcbiAgICB0aGlzLl93aW5keS5zdGFydChcclxuICAgICAgbmV3IExheWVyKFxyXG4gICAgICAgIG5ldyBNYXBCb3VuZChcclxuICAgICAgICAgIGJvdW5kcy5fbm9ydGhFYXN0LmxhdCxcclxuICAgICAgICAgIGJvdW5kcy5fbm9ydGhFYXN0LmxuZyxcclxuICAgICAgICAgIGJvdW5kcy5fc291dGhXZXN0LmxhdCxcclxuICAgICAgICAgIGJvdW5kcy5fc291dGhXZXN0LmxuZ1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IENhbnZhc0JvdW5kKDAsIDAsIHNpemUueCwgc2l6ZS55KVxyXG4gICAgICApXHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9pbml0V2luZHkoKSB7XHJcblxyXG4gICAgLy8gd2luZHkgb2JqZWN0LCBjb3B5IG9wdGlvbnNcclxuICAgIGNvbnN0IG9wdGlvbnMgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7IGNhbnZhczogdGhpcy5fY2FudmFzTGF5ZXIuX2NhbnZhcyB9LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5fd2luZHkgPSBuZXcgV2luZHkob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBjb250ZXh0IGdsb2JhbCB2YXIsIHN0YXJ0IGRyYXdpbmdcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLl9jYW52YXNMYXllci5fY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJ2ZWxvY2l0eS1vdmVybGF5XCIpO1xyXG4gICAgKDxhbnk+dGhpcykub25EcmF3TGF5ZXIoKTtcclxuXHJcbiAgICAvL1RPRE8gOiBGaWd1cmUgb3V0IHdoeSB0aGUgZXZlbnQgaXMgY2FsbGVkIGFmdGVyIHRoZSBsYXllciBpcyByZW1vdmVkXHJcbiAgICB0aGlzLl9tYXAub24oJ2RyYWdzdGFydCcsICgpID0+IHtcclxuICAgICAgaWYodGhpcy5fd2luZHkpXHJcbiAgICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fbWFwLm9uKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX21hcC5vbignem9vbXN0YXJ0JywgKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLl93aW5keSlcclxuICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9tYXAub24oJ3pvb21lbmQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tYXAub24oJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5fY2xlYXJXaW5kKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9pbml0TW91c2VIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdE1vdXNlSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy5fbW91c2VDb250cm9sICYmIHRoaXMub3B0aW9ucy5kaXNwbGF5VmFsdWVzKSB7XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zIHx8IHt9O1xyXG4gICAgICBvcHRpb25zWydsZWFmbGV0VmVsb2NpdHknXSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbCA9IExfY29udHJvbFZlbG9jaXR5KCk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRXaW5keSh0aGlzLl93aW5keSk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRPcHRpb25zKHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbC5hZGRUbyh0aGlzLl9tYXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NsZWFyQW5kUmVzdGFydCgpIHtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5fc3RhcnRXaW5keSgpO1xyXG4gIH1cclxuXHJcbiAgX2NsZWFyV2luZCgpIHtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgX2Rlc3Ryb3lXaW5kKCkge1xyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KVxyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcGxheVRpbWVvdXQpO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KVxyXG4gICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dClcclxuICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgICBpZiAodGhpcy5fbW91c2VDb250cm9sKVxyXG4gICAgICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLl9tb3VzZUNvbnRyb2wpO1xyXG4gICAgdGhpcy5fbW91c2VDb250cm9sID0gbnVsbDtcclxuICAgIHRoaXMuX3dpbmR5ID0gbnVsbDtcclxuICAgIHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9jYW52YXNMYXllcik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MLlZlbG9jaXR5TGF5ZXIudHMiLCJpbXBvcnQgTWFwQm91bmQgZnJvbSBcIi4vbWFwQm91bmRcIjtcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tIFwiLi9jYW52YXNCb3VuZFwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGF5ZXIge1xuXG4gICAgcHVibGljIG1hcEJvdW5kOiBNYXBCb3VuZDtcbiAgICBwdWJsaWMgY2FudmFzQm91bmQ6IENhbnZhc0JvdW5kO1xuXG4gICAgY29uc3RydWN0b3IobWFwQm91bmQ6IE1hcEJvdW5kLCBjYW52YXNCb3VuZDogQ2FudmFzQm91bmQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNCb3VuZCA9IGNhbnZhc0JvdW5kO1xuICAgICAgICB0aGlzLm1hcEJvdW5kID0gbWFwQm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBnZW9jb29yZGluYXRlIGZyb20gY2FudmFzIHBvaW50XG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogcmV0dXJuIFtsbmcsIGxhdF1cbiAgICAgKi9cbiAgICBjYW52YXNUb01hcCAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IG1hcExvbkRlbHRhID0gdGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0O1xuICAgICAgICBjb25zdCB3b3JsZE1hcFJhZGl1cyA9ICh0aGlzLmNhbnZhc0JvdW5kLndpZHRoIC8gdGhpcy5yYWQyZGVnKG1hcExvbkRlbHRhKSkgKiAzNjAvKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY29uc3QgbWFwT2Zmc2V0WSA9ICggd29ybGRNYXBSYWRpdXMgLyAyICogTWF0aC5sb2coICgxICsgTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkgKSAvICgxIC0gTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkpICApKTtcbiAgICAgICAgY29uc3QgZXF1YXRvclkgPSB0aGlzLmNhbnZhc0JvdW5kLmhlaWdodCArIG1hcE9mZnNldFk7XG4gICAgICAgIGNvbnN0IGEgPSAoZXF1YXRvclkteSkvd29ybGRNYXBSYWRpdXM7XG5cbiAgICAgICAgY29uc3Qgz4YgPSAxODAvTWF0aC5QSSAqICgyICogTWF0aC5hdGFuKE1hdGguZXhwKGEpKSAtIE1hdGguUEkvMik7XG4gICAgICAgIGNvbnN0IM67ID0gdGhpcy5yYWQyZGVnKHRoaXMubWFwQm91bmQud2VzdCkgKyB4IC8gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAqIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSk7XG4gICAgICAgIHJldHVybiBbzrssIM+GXTtcbiAgICB9O1xuICAgICAgICBcbiAgICBtZXJjWSAoz4Y6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmxvZyggTWF0aC50YW4oIM+GIC8gMiArIE1hdGguUEkgLyA0ICkgKTtcbiAgICB9O1xuICAgICAgICBcbiAgICAvKipcbiAgICAgKiBQcm9qZWN0IGEgcG9pbnQgb24gdGhlIG1hcFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcmV0dXJuIFt4LCB5XVxuICAgICAqL1xuICAgIG1hcFRvQ2FudmFzICjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCB5bWluID0gdGhpcy5tZXJjWSh0aGlzLm1hcEJvdW5kLnNvdXRoKTtcbiAgICAgICAgY29uc3QgeW1heCA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5ub3J0aCk7XG4gICAgICAgIGNvbnN0IHhGYWN0b3IgPSB0aGlzLmNhbnZhc0JvdW5kLndpZHRoIC8gKCB0aGlzLm1hcEJvdW5kLmVhc3QgLSB0aGlzLm1hcEJvdW5kLndlc3QgKTtcbiAgICAgICAgY29uc3QgeUZhY3RvciA9IHRoaXMuY2FudmFzQm91bmQuaGVpZ2h0IC8gKCB5bWF4IC0geW1pbiApO1xuXG4gICAgICAgIGxldCB5ID0gdGhpcy5tZXJjWSh0aGlzLmRlZzJyYWQoz4YpICk7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5kZWcycmFkKM67KSAtIHRoaXMubWFwQm91bmQud2VzdCkgKiB4RmFjdG9yO1xuICAgICAgICB5ID0gKHltYXggLSB5KSAqIHlGYWN0b3I7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcblxuXG4gICAgZGVnMnJhZCAoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICB9O1xuXG4gICAgcmFkMmRlZyAocmFkOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmFkICogMTgwIC8gTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0aW9uICjOuzogbnVtYmVyLCDPhjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3Qgz4QgPSAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgSCA9IE1hdGgucG93KDEwLCAtNS4yKTtcbiAgICAgICAgY29uc3QgaM67ID0gzrsgPCAwID8gSCA6IC1IO1xuICAgICAgICBjb25zdCBoz4YgPSDPhiA8IDAgPyBIIDogLUg7XG5cbiAgICAgICAgY29uc3QgcM67ID0gdGhpcy5tYXBUb0NhbnZhcyjOuyArIGjOuywgz4YpO1xuICAgICAgICBjb25zdCBwz4YgPSB0aGlzLm1hcFRvQ2FudmFzKM67LCDPhiArIGjPhik7XG5cbiAgICAgICAgLy8gTWVyaWRpYW4gc2NhbGUgZmFjdG9yIChzZWUgU255ZGVyLCBlcXVhdGlvbiA0LTMpLCB3aGVyZSBSID0gMS4gVGhpcyBoYW5kbGVzIGlzc3VlIHdoZXJlIGxlbmd0aCBvZiAxwrogzrtcbiAgICAgICAgLy8gY2hhbmdlcyBkZXBlbmRpbmcgb24gz4YuIFdpdGhvdXQgdGhpcywgdGhlcmUgaXMgYSBwaW5jaGluZyBlZmZlY3QgYXQgdGhlIHBvbGVzLlxuICAgICAgICBjb25zdCBrID0gTWF0aC5jb3Moz4YgLyAzNjAgKiDPhCk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAocM67WzBdIC0geCkgLyBozrsgLyBrLFxuICAgICAgICAgICAgKHDOu1sxXSAtIHkpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwz4ZbMF0gLSB4KSAvIGjPhixcbiAgICAgICAgICAgIChwz4ZbMV0gLSB5KSAvIGjPhlxuICAgICAgICBdO1xuICAgIH1cbiAgICAgIFxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBkaXN0b3J0aW9uIG9mIHRoZSB3aW5kIHZlY3RvciBjYXVzZWQgYnkgdGhlIHNoYXBlIG9mIHRoZSBwcm9qZWN0aW9uIGF0IHBvaW50ICh4LCB5KS4gVGhlIHdpbmRcbiAgICAgKiB2ZWN0b3IgaXMgbW9kaWZpZWQgaW4gcGxhY2UgYW5kIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIM67IFxuICAgICAqIEBwYXJhbSDPhiBcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgZmFjdG9yXG4gICAgICogQHBhcmFtIHdpbmQgW3UsIHZdXG4gICAgICogQHJldHVybiBbXVxuICAgICAqL1xuICAgIGRpc3RvcnQgKM67OiBudW1iZXIsIM+GOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB3aW5kOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgICAgICBjb25zdCB1ID0gd2luZC51ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IHYgPSB3aW5kLnYgKiBzY2FsZTtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZGlzdG9ydGlvbijOuywgz4YsIHgsIHkpO1xuXG4gICAgICAgIC8vIFNjYWxlIGRpc3RvcnRpb24gdmVjdG9ycyBieSB1IGFuZCB2LCB0aGVuIGFkZC5cbiAgICAgICAgd2luZC51ID0gZFswXSAqIHUgKyBkWzJdICogdjtcbiAgICAgICAgd2luZC52ID0gZFsxXSAqIHUgKyBkWzNdICogdjtcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfVxuICBcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXllci50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTEhLi9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0xIS4vbGVhZmxldC12ZWxvY2l0eS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMSEuL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sZWFmbGV0LXZlbG9jaXR5LmNzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuXzNzZkp6VFg3MDg3eWlDVzJnODBJZE8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udDogMTFweC8xLjUgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibGVhZmxldENvbnRyb2xWZWxvY2l0eVwiOiBcIl8zc2ZKelRYNzA4N3lpQ1cyZzgwSWRPXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYj97XCJtb2R1bGVzXCI6dHJ1ZSxcIm5hbWVkRXhwb3J0XCI6dHJ1ZX0hLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=