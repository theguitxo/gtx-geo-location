var __extends=this&&this.__extends||function(){var e=function(n,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t))e[t]=n[t]};return e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{u(r.next(e))}catch(n){i(n)}}function o(e){try{u(r["throw"](e))}catch(n){i(n)}}function u(e){e.done?t(e.value):a(e.value).then(l,o)}u((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(n){return u([e,n])}}function u(l){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=n.call(e,t)}catch(o){l=[6,o];a=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),a=0,n=0;n<t;n++)for(var i=arguments[n],l=0,o=i.length;l<o;l++,a++)r[a]=i[l];return r};System.register([],(function(e,n){"use strict";return{execute:function(){var t=this;var r=e("N","gtx-geo-location");var a;var i=false;var l=false;var o=e("w",typeof window!=="undefined"?window:{});var u=e("C",o.CSS);var s=e("d",o.document||{head:{}});var f=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,t,r){return e.addEventListener(n,t,r)},rel:function(e,n,t,r){return e.removeEventListener(n,t,r)},ce:function(e,n){return new CustomEvent(e,n)}});var c=e("a",(function(e){return Promise.resolve(e)}));var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v="{visibility:hidden}.hydrated{visibility:inherit}";var d=function(e,n){if(n===void 0){n=""}{return function(){return}}};var h=function(e,n){{return function(){return}}};var p=new WeakMap;var m=function(e,n,t){var r=de.get(e);if($&&t){r=r||new CSSStyleSheet;r.replace(n)}else{r=n}de.set(e,r)};var g=function(e,n,t,r){var a=b(n);var i=de.get(a);e=e.nodeType===11?e:s;if(i){if(typeof i==="string"){e=e.head||e;var l=p.get(e);var o=void 0;if(!l){p.set(e,l=new Set)}if(!l.has(a)){{if(f.$cssShim$){o=f.$cssShim$.createHostStyle(r,a,i,!!(n.$flags$&10));var u=o["s-sc"];if(u){a=u;l=null}}else{o=s.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var y=function(e){var n=e.$cmpMeta$;var t=e.$hostElement$;var r=n.$flags$;var a=d("attachStyles",n.$tagName$);var i=g(t.getRootNode(),n,e.$modeName$,t);if(r&10){t["s-sc"]=i;t.classList.add(i+"-h");if(r&2){t.classList.add(i+"-s")}}a()};var b=function(e,n){return"sc-"+e.$tagName$};var _={};var w=function(e){return e!=null};var S=function(e){e=typeof e;return e==="object"||e==="function"};var x=e("h",(function(e,n){var t=[];for(var r=2;r<arguments.length;r++){t[r-2]=arguments[r]}var a=null;var i=false;var l=false;var o=[];var u=function(n){for(var t=0;t<n.length;t++){a=n[t];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!S(a)){a=String(a)}if(i&&l){o[o.length-1].$text$+=a}else{o.push(i?N(null,a):a)}l=i}}};u(t);if(n){{var s=n.className||n.class;if(s){n.class=typeof s!=="object"?s:Object.keys(s).filter((function(e){return s[e]})).join(" ")}}}var f=N(e,null);f.$attrs$=n;if(o.length>0){f.$children$=o}return f}));var N=function(e,n){var t={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null};{t.$attrs$=null}return t};var R={};var j=function(e){return e&&e.$tag$===R};var C=function(e,n,t,r,a,i){if(t!==r){var l=fe(e,n);var o=n.toLowerCase();if(n==="class"){var u=e.classList;var s=L(t);var f=L(r);u.remove.apply(u,s.filter((function(e){return e&&!f.includes(e)})));u.add.apply(u,f.filter((function(e){return e&&!s.includes(e)})))}else{var c=S(r);if((l||c&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var $=r==null?"":r;if(n==="list"){l=false}else if(t==null||e[n]!=$){e[n]=$}}else{e[n]=r}}catch(v){}}if(r==null||r===false){if(r!==false||e.getAttribute(n)===""){{e.removeAttribute(n)}}}else if((!l||i&4||a)&&!c){r=r===true?"":r;{e.setAttribute(n,r)}}}}};var E=/\s/;var L=function(e){return!e?[]:e.split(E)};var M=function(e,n,t,r){var a=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$;var i=e&&e.$attrs$||_;var l=n.$attrs$||_;{for(r in i){if(!(r in l)){C(a,r,i[r],undefined,t,n.$flags$)}}}for(r in l){C(a,r,i[r],l[r],t,n.$flags$)}};var P=function(e,n,t,r){var l=n.$children$[t];var o=0;var u;var f;if(l.$text$!==null){u=l.$elm$=s.createTextNode(l.$text$)}else{u=l.$elm$=s.createElement(l.$tag$);{M(null,l,i)}if(w(a)&&u["s-si"]!==a){u.classList.add(u["s-si"]=a)}if(l.$children$){for(o=0;o<l.$children$.length;++o){f=P(e,l,o);if(f){u.appendChild(f)}}}}return u};var k=function(e,n,t,r,a,i){var l=e;var o;for(;a<=i;++a){if(r[a]){o=P(null,t,a);if(o){r[a].$elm$=o;l.insertBefore(o,n)}}}};var A=function(e,n,t,r,a){for(;n<=t;++n){if(r=e[n]){a=r.$elm$;a.remove()}}};var O=function(e,n,t,r){var a=0;var i=0;var l=n.length-1;var o=n[0];var u=n[l];var s=r.length-1;var f=r[0];var c=r[s];var $;while(a<=l&&i<=s){if(o==null){o=n[++a]}else if(u==null){u=n[--l]}else if(f==null){f=r[++i]}else if(c==null){c=r[--s]}else if(T(o,f)){U(o,f);o=n[++a];f=r[++i]}else if(T(u,c)){U(u,c);u=n[--l];c=r[--s]}else if(T(o,c)){U(o,c);e.insertBefore(o.$elm$,u.$elm$.nextSibling);o=n[++a];c=r[--s]}else if(T(u,f)){U(u,f);e.insertBefore(u.$elm$,o.$elm$);u=n[--l];f=r[++i]}else{{$=P(n&&n[i],t,i);f=r[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>l){k(e,r[s+1]==null?null:r[s+1].$elm$,t,r,i,s)}else if(i>s){A(n,a,l)}};var T=function(e,n){if(e.$tag$===n.$tag$){return true}return false};var U=function(e,n){var t=n.$elm$=e.$elm$;var r=e.$children$;var a=n.$children$;var l=n.$text$;if(l===null){{{M(e,n,i)}}if(r!==null&&a!==null){O(t,r,n,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}k(t,null,n,a,0,a.length-1)}else if(r!==null){A(r,0,r.length-1)}}else if(e.$text$!==l){t.data=l}};var B=function(e,n){var t=e.$hostElement$;var r=e.$vnode$||N(null,null);var i=j(n)?n:x(null,null,n);i.$tag$=null;i.$flags$|=4;e.$vnode$=i;i.$elm$=r.$elm$=t;{a=t["s-sc"]}U(r,i)};var I=function(e,n,t){var r=f.ce(n,t);e.dispatchEvent(r);return r};var z=function(e,n){if(n&&!e.$onRenderResolve$&&n["s-p"]){n["s-p"].push(new Promise((function(n){return e.$onRenderResolve$=n})))}};var H=function(e,n){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}z(e,e.$ancestorComponent$);var t=function(){return V(e,n)};return _e(t)};var V=function(e,n){var t=d("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(n){{a=F(r,"componentWillLoad")}}t();return J(a,(function(){return q(e,r,n)}))};var q=function(e,n,r){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,o,u;return __generator(this,(function(s){t=e.$hostElement$;a=d("update",e.$cmpMeta$.$tagName$);i=t["s-rc"];if(r){y(e)}l=d("render",e.$cmpMeta$.$tagName$);{{{B(e,W(e,n))}}}if(f.$cssShim$){f.$cssShim$.updateHost(t)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}l();a();{o=t["s-p"];u=function(){return G(e)};if(o.length===0){u()}else{Promise.all(o).then(u);e.$flags$|=4;o.length=0}}return[2]}))}))};var W=function(e,n){try{n=n.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){ce(t,e.$hostElement$)}return n};var G=function(e){var n=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var r=d("postUpdate",n);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{K(t)}{F(a,"componentDidLoad")}r();{e.$onReadyResolve$(t);if(!i){D()}}}else{r()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){be((function(){return H(e,false)}))}e.$flags$&=~(4|512)}};var D=function(e){{K(s.documentElement)}be((function(){return I(o,"appload",{detail:{namespace:r}})}))};var F=function(e,n,t){if(e&&e[n]){try{return e[n](t)}catch(r){ce(r)}}return undefined};var J=function(e,n){return e&&e.then?e.then(n):n()};var K=function(e){return e.classList.add("hydrated")};var Q=function(e,n){if(e!=null&&!S(e)){return e}return e};var X=function(e,n){return oe(e).$instanceValues$.get(n)};var Y=function(e,n,t,r){var a=oe(e);var i=a.$instanceValues$.get(n);var l=a.$flags$;var o=a.$lazyInstance$;t=Q(t);if((!(l&8)||i===undefined)&&t!==i){a.$instanceValues$.set(n,t);if(o){if((l&(2|16))===2){H(a,false)}}}};var Z=function(e,n,t){if(n.$members$){var r=Object.entries(n.$members$);var a=e.prototype;r.map((function(e){var n=e[0],r=e[1][0];if(r&31||t&2&&r&32){Object.defineProperty(a,n,{get:function(){return X(this,n)},set:function(e){Y(this,n,e)},configurable:true,enumerable:true})}}))}return e};var ee=function(e,n,r,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,o,u,s;return __generator(this,(function(f){switch(f.label){case 0:if(!((n.$flags$&32)===0))return[3,3];n.$flags$|=32;i=ve(r);if(!i.then)return[3,2];e=h();return[4,i];case 1:i=f.sent();e();f.label=2;case 2:if(!i.isProxied){Z(i,r,2);i.isProxied=true}t=d("createInstance",r.$tagName$);{n.$flags$|=8}try{new i(n)}catch(c){ce(c)}{n.$flags$&=~8}t();if(i.style){a=i.style;l=b(r);if(!de.has(l)){o=d("registerStyles",r.$tagName$);m(l,a,!!(r.$flags$&1));o()}}f.label=3;case 3:u=n.$ancestorComponent$;s=function(){return H(n,true)};if(u&&u["s-rc"]){u["s-rc"].push(s)}else{s()}return[2]}}))}))};var ne=function(e){if((f.$flags$&1)===0){var n=oe(e);var t=n.$cmpMeta$;var r=d("connectedCallback",t.$tagName$);if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){z(n,n.$ancestorComponent$=a);break}}}{ee(e,n,t)}}r()}};var te=function(e){if((f.$flags$&1)===0){var n=oe(e);if(f.$cssShim$){f.$cssShim$.removeHost(e)}}};var re=function(e,n){var t=function(e){__extends(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}n.prototype.item=function(e){return this[e]};return n}(Array);if(n.$flags$&8){var r=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=r.call(this);if((f.$flags$&1)===0&&oe(this).$flags$&2){var n=new t;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){n.push(i)}}return n}return t.from(e)}})}};var ae=e("b",(function(e,n){if(n===void 0){n={}}var t=d();var r=[];var a=n.exclude||[];var i=o.customElements;var l=s.head;var u=l.querySelector("meta[charset]");var c=s.createElement("style");var $=[];var h;var p=true;Object.assign(f,n);f.$resourcesUrl$=new URL(n.resourcesUrl||"./",s.baseURI).href;e.map((function(e){return e[1].map((function(n){var t={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};{t.$members$=n[2]}var l=t.$tagName$;var o=function(e){__extends(n,e);function n(n){var r=e.call(this,n)||this;n=r;se(n,t);{re(n,t)}return r}n.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(p){$.push(this)}else{f.jmp((function(){return ne(e)}))}};n.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return te(e)}))};n.prototype.componentOnReady=function(){return oe(this).$onReadyPromise$};return n}(HTMLElement);t.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){r.push(l);i.define(l,Z(o,t,1))}}))}));{c.innerHTML=r+v;c.setAttribute("data-styles","");l.insertBefore(c,u?u.nextSibling:l.firstChild)}p=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{f.jmp((function(){return h=setTimeout(D,30)}))}}t()}));var ie=e("g",(function(e){var n=new URL(e,f.$resourcesUrl$);return n.origin!==o.location.origin?n.href:n.pathname}));var le=new WeakMap;var oe=function(e){return le.get(e)};var ue=e("r",(function(e,n){return le.set(n.$lazyInstance$=e,n)}));var se=function(e,n){var t={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return le.set(e,t)};var fe=function(e,n){return n in e};var ce=function(e,n){return(0,console.error)(e,n)};var $e=new Map;var ve=function(e,t,r){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=$e.get(i);if(l){return l[a]}return n.import("./"+i+".entry.js"+"").then((function(e){{$e.set(i,e)}return e[a]}),ce)};var de=new Map;var he=[];var pe=[];var me=function(e,n){return function(t){e.push(t);if(!l){l=true;if(n&&f.$flags$&4){be(ye)}else{f.raf(ye)}}}};var ge=function(e){for(var n=0;n<e.length;n++){try{e[n](performance.now())}catch(t){ce(t)}}e.length=0};var ye=function(){ge(he);{ge(pe);if(l=he.length>0){f.raf(ye)}}};var be=function(e){return c().then(e)};var _e=me(pe,true)}}}));