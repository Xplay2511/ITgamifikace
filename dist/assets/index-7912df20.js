import{r as K,a as Vd,R as Od}from"./vendor-b1791c80.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Al={exports:{}},bs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=K,Md=Symbol.for("react.element"),jd=Symbol.for("react.fragment"),Ud=Object.prototype.hasOwnProperty,Fd=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function xl(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Ud.call(e,r)&&!Bd.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Md,type:n,key:i,ref:a,props:s,_owner:Fd.current}}bs.Fragment=jd;bs.jsx=xl;bs.jsxs=xl;Al.exports=bs;var f=Al.exports,Pi={},Xa=Vd;Pi.createRoot=Xa.createRoot,Pi.hydrateRoot=Xa.hydrateRoot;const zd=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,T=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,x=d&63;u||(x=64,a||(v=64)),r.push(t[m],t[T],t[v],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const T=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||T==null)throw new $d;const v=i<<2|l>>4;if(r.push(v),d!==64){const x=l<<4&240|d>>2;if(r.push(x),T!==64){const N=d<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hd=function(n){const e=Sl(n);return Rl.encodeByteArray(e,!0)},rs=function(n){return Hd(n).replace(/\./g,"")},Cl=function(n){try{return Rl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>Wd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cl(n[1]);return e&&JSON.parse(e)},As=()=>{try{return zd()||Gd()||Kd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pl=n=>{var e,t;return(t=(e=As())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xd=n=>{const e=Pl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},kl=()=>{var n;return(n=As())===null||n===void 0?void 0:n.config},Nl=n=>{var e;return(e=As())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n){return n.endsWith(".cloudworkstations.dev")}async function Dl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[rs(JSON.stringify(t)),rs(JSON.stringify(a)),l].join(".")}const Xn={};function Zd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Xn))Xn[e]?n.emulator.push(e):n.prod.push(e);return n}function ef(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ya=!1;function Vl(n,e){if(typeof window>"u"||typeof document>"u"||!vn(window.location.host)||Xn[n]===e||Xn[n]||Ya)return;Xn[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=Zd().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,x){v.setAttribute("width","24"),v.setAttribute("id",x),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Ya=!0,a()},v}function m(v,x){v.setAttribute("id",x),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function T(){const v=ef(r),x=t("text"),N=document.getElementById(x)||document.createElement("span"),D=t("learnmore"),R=document.getElementById(D)||document.createElement("a"),M=t("preprendIcon"),j=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const H=v.element;l(H),m(R,D);const B=d();u(j,M),H.append(j,N,R,B),document.body.appendChild(H)}i?(N.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function nf(){var n;const e=(n=As())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function of(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function af(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cf(){return!nf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lf(){try{return typeof indexedDB=="object"}catch{return!1}}function uf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=hf,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?df(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ht(s,l,r)}}function df(n,e){return n.replace(ff,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ff=/\{\$([^}]+)}/g;function pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ja(i)&&Ja(a)){if(!zt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ja(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Hn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mf(n,e){const t=new gf(n,e);return t.subscribe.bind(t)}class gf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");_f(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=gi),s.error===void 0&&(s.error=gi),s.complete===void 0&&(s.complete=gi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _f(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ef(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vf(n){return n===Ft?void 0:n}function Ef(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const wf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},If=X.INFO,bf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Af=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ro{constructor(e){this.name=e,this._logLevel=If,this._logHandler=Af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const xf=(n,e)=>e.some(t=>n instanceof t);let Za,ec;function Sf(){return Za||(Za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rf(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ol=new WeakMap,ki=new WeakMap,Ll=new WeakMap,_i=new WeakMap,so=new WeakMap;function Cf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Tt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ol.set(t,n)}).catch(()=>{}),so.set(e,n),e}function Pf(n){if(ki.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ki.set(n,e)}let Ni={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ki.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ll.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kf(n){Ni=n(Ni)}function Nf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yi(this),e,...t);return Ll.set(r,e.sort?e.sort():[e]),Tt(r)}:Rf().includes(n)?function(...e){return n.apply(yi(this),e),Tt(Ol.get(this))}:function(...e){return Tt(n.apply(yi(this),e))}}function Df(n){return typeof n=="function"?Nf(n):(n instanceof IDBTransaction&&Pf(n),xf(n,Sf())?new Proxy(n,Ni):n)}function Tt(n){if(n instanceof IDBRequest)return Cf(n);if(_i.has(n))return _i.get(n);const e=Df(n);return e!==n&&(_i.set(n,e),so.set(e,n)),e}const yi=n=>so.get(n);function Vf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Tt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Tt(a.result),u.oldVersion,u.newVersion,Tt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Of=["get","getKey","getAll","getAllKeys","count"],Lf=["put","add","delete","clear"],vi=new Map;function tc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vi.get(e))return vi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Lf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Of.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return vi.set(e,i),i}kf(n=>({...n,get:(e,t,r)=>tc(e,t)||n.get(e,t,r),has:(e,t)=>!!tc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Di="@firebase/app",nc="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new ro("@firebase/app"),Uf="@firebase/app-compat",Ff="@firebase/analytics-compat",Bf="@firebase/analytics",zf="@firebase/app-check-compat",qf="@firebase/app-check",$f="@firebase/auth",Hf="@firebase/auth-compat",Wf="@firebase/database",Gf="@firebase/data-connect",Kf="@firebase/database-compat",Qf="@firebase/functions",Xf="@firebase/functions-compat",Yf="@firebase/installations",Jf="@firebase/installations-compat",Zf="@firebase/messaging",ep="@firebase/messaging-compat",tp="@firebase/performance",np="@firebase/performance-compat",rp="@firebase/remote-config",sp="@firebase/remote-config-compat",ip="@firebase/storage",op="@firebase/storage-compat",ap="@firebase/firestore",cp="@firebase/ai",lp="@firebase/firestore-compat",up="firebase",hp="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="[DEFAULT]",dp={[Di]:"fire-core",[Uf]:"fire-core-compat",[Bf]:"fire-analytics",[Ff]:"fire-analytics-compat",[qf]:"fire-app-check",[zf]:"fire-app-check-compat",[$f]:"fire-auth",[Hf]:"fire-auth-compat",[Wf]:"fire-rtdb",[Gf]:"fire-data-connect",[Kf]:"fire-rtdb-compat",[Qf]:"fire-fn",[Xf]:"fire-fn-compat",[Yf]:"fire-iid",[Jf]:"fire-iid-compat",[Zf]:"fire-fcm",[ep]:"fire-fcm-compat",[tp]:"fire-perf",[np]:"fire-perf-compat",[rp]:"fire-rc",[sp]:"fire-rc-compat",[ip]:"fire-gcs",[op]:"fire-gcs-compat",[ap]:"fire-fst",[lp]:"fire-fst-compat",[cp]:"fire-vertex","fire-js":"fire-js",[up]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Map,fp=new Map,Oi=new Map;function rc(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hn(n){const e=n.name;if(Oi.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Oi.set(e,n);for(const t of ss.values())rc(t,n);for(const t of fp.values())rc(t,n);return!0}function io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new hr("app","Firebase",pp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=hp;function Ml(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vi,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(t||(t=kl()),!t)throw wt.create("no-options");const i=ss.get(s);if(i){if(zt(t,i.options)&&zt(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const a=new Tf(s);for(const u of Oi.values())a.addComponent(u);const l=new mp(t,r,a);return ss.set(s,l),l}function jl(n=Vi){const e=ss.get(n);if(!e&&n===Vi&&kl())return Ml();if(!e)throw wt.create("no-app",{appName:n});return e}function It(n,e,t){var r;let s=(r=dp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(l.join(" "));return}hn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="firebase-heartbeat-database",_p=1,nr="firebase-heartbeat-store";let Ei=null;function Ul(){return Ei||(Ei=Vf(gp,_p,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),Ei}async function yp(n){try{const t=(await Ul()).transaction(nr),r=await t.objectStore(nr).get(Fl(n));return await t.done,r}catch(e){if(e instanceof ht)at.warn(e.message);else{const t=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(t.message)}}}async function sc(n,e){try{const r=(await Ul()).transaction(nr,"readwrite");await r.objectStore(nr).put(e,Fl(n)),await r.done}catch(t){if(t instanceof ht)at.warn(t.message);else{const r=wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});at.warn(r.message)}}}function Fl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=1024,Ep=30;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ip(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ic();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ep){const a=bp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ic(),{heartbeatsToSend:r,unsentEntries:s}=wp(this._heartbeatsCache.heartbeats),i=rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return at.warn(t),""}}}function ic(){return new Date().toISOString().substring(0,10)}function wp(n,e=vp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),oc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),oc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oc(n){return rs(JSON.stringify({version:2,heartbeats:n})).length}function bp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){hn(new qt("platform-logger",e=>new Mf(e),"PRIVATE")),hn(new qt("heartbeat",e=>new Tp(e),"PRIVATE")),It(Di,nc,n),It(Di,nc,"esm2017"),It("fire-js","")}Ap("");function oo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Bl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xp=Bl,zl=new hr("auth","Firebase",Bl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new ro("@firebase/auth");function Sp(n,...e){is.logLevel<=X.WARN&&is.warn(`Auth (${En}): ${n}`,...e)}function Gr(n,...e){is.logLevel<=X.ERROR&&is.error(`Auth (${En}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,...e){throw ao(n,...e)}function Ge(n,...e){return ao(n,...e)}function ql(n,e,t){const r=Object.assign(Object.assign({},xp()),{[e]:t});return new hr("auth","Firebase",r).create(e,{appName:n.name})}function it(n){return ql(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ao(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zl.create(n,...e)}function q(n,e,...t){if(!n)throw ao(e,...t)}function rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gr(e),new Error(e)}function ct(n,e){n||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rp(){return ac()==="http:"||ac()==="https:"}function ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rp()||sf()||"connection"in navigator)?navigator.onLine:!0}function Pp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ct(t>e,"Short delay should be less than long delay!"),this.isMobile=tf()||of()}get(){return Cp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e){ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dp=new fr(3e4,6e4);function Nt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Dt(n,e,t,r,s={}){return Hl(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=dr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return rf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&vn(n.emulatorConfig.host)&&(d.credentials="include"),$l.fetch()(await Wl(n,n.config.apiHost,t,l),d)})}async function Hl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kp),e);try{const s=new Op(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ur(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ur(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ur(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ql(n,m,d);$e(n,m)}}catch(s){if(s instanceof ht)throw s;$e(n,"network-request-failed",{message:String(s)})}}async function pr(n,e,t,r,s={}){const i=await Dt(n,e,t,r,s);return"mfaPendingCredential"in i&&$e(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wl(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?co(n.config,s):`${n.config.apiScheme}://${s}`;return Np.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Vp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Op{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Dp.get())})}}function Ur(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function cc(n){return n!==void 0&&n.enterprise!==void 0}class Lp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Mp(n,e){return Dt(n,"GET","/v2/recaptchaConfig",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e){return Dt(n,"POST","/v1/accounts:delete",e)}async function os(n,e){return Dt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Up(n,e=!1){const t=ye(n),r=await t.getIdToken(e),s=lo(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(Ti(s.auth_time)),issuedAtTime:Yn(Ti(s.iat)),expirationTime:Yn(Ti(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ti(n){return Number(n)*1e3}function lo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cl(t);return s?JSON.parse(s):(Gr("Failed to decode base64 JWT payload"),null)}catch(s){return Gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lc(n){const e=lo(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&Fp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Fp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n){var e;const t=n.auth,r=await n.getIdToken(),s=await rr(n,os(t,{idToken:r}));q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gl(i.providerUserInfo):[],l=qp(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?d:!1,T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Mi(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,T)}async function zp(n){const e=ye(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gl(n){return n.map(e=>{var{providerId:t}=e,r=oo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(n,e){const t=await Hl(n,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Wl(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&vn(n.emulatorConfig.host)&&(u.credentials="include"),$l.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hp(n,e){return Dt(n,"POST","/v2/accounts:revokeToken",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=lc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await $p(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new an;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Up(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await rr(this,jp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,d,m;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,x=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,M=(d=t.createdAt)!==null&&d!==void 0?d:void 0,j=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:H,emailVerified:B,isAnonymous:k,providerData:V,stsTokenManager:_}=t;q(H&&_,e,"internal-error");const g=an.fromJSON(this.name,_);q(typeof H=="string",e,"internal-error"),mt(T,e.name),mt(v,e.name),q(typeof B=="boolean",e,"internal-error"),q(typeof k=="boolean",e,"internal-error"),mt(x,e.name),mt(N,e.name),mt(D,e.name),mt(R,e.name),mt(M,e.name),mt(j,e.name);const y=new ze({uid:H,auth:e,email:v,emailVerified:B,displayName:T,isAnonymous:k,photoURL:N,phoneNumber:x,tenantId:D,stsTokenManager:g,createdAt:M,lastLoginAt:j});return V&&Array.isArray(V)&&(y.providerData=V.map(w=>Object.assign({},w))),R&&(y._redirectEventId=R),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new an;s.updateFromServerResponse(t);const i=new ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new an;l.updateFromIdToken(r);const u=new ze({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map;function st(n){ct(n instanceof Function,"Expected a class definition");let e=uc.get(n);return e?(ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,uc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kl.type="NONE";const hc=Kl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n,e,t){return`firebase:${n}:${e}:${t}`}class cn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await os(this.auth,{idToken:e}).catch(()=>{});return t?ze._fromGetAccountInfoResponse(this.auth,t,e):null}return ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cn(st(hc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||st(hc);const a=Kr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let T;if(typeof m=="string"){const v=await os(e,{idToken:m}).catch(()=>{});if(!v)break;T=await ze._fromGetAccountInfoResponse(e,v,m)}else T=ze._fromJSON(e,m);d!==i&&(l=T),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new cn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new cn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ql(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eu(e))return"Blackberry";if(tu(e))return"Webos";if(Xl(e))return"Safari";if((e.includes("chrome/")||Yl(e))&&!e.includes("edge/"))return"Chrome";if(Zl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ql(n=Ce()){return/firefox\//i.test(n)}function Xl(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yl(n=Ce()){return/crios\//i.test(n)}function Jl(n=Ce()){return/iemobile/i.test(n)}function Zl(n=Ce()){return/android/i.test(n)}function eu(n=Ce()){return/blackberry/i.test(n)}function tu(n=Ce()){return/webos/i.test(n)}function uo(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wp(n=Ce()){var e;return uo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gp(){return af()&&document.documentMode===10}function nu(n=Ce()){return uo(n)||Zl(n)||tu(n)||eu(n)||/windows phone/i.test(n)||Jl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e=[]){let t;switch(n){case"Browser":t=dc(Ce());break;case"Worker":t=`${dc(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(n,e={}){return Dt(n,"GET","/v2/passwordPolicy",Nt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=6;class Yp{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Xp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new Kp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await os(this,{idToken:e}),r=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(it(this));const t=e?ye(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qp(this),t=new Yp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kt(n){return ye(n)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=mf(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zp(n){xs=n}function su(n){return xs.loadJS(n)}function em(){return xs.recaptchaEnterpriseScript}function tm(){return xs.gapiScript}function nm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class rm{constructor(){this.enterprise=new sm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const im="recaptcha-enterprise",iu="NO_RECAPTCHA";class om{constructor(e){this.type=im,this.auth=Kt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{Mp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Lp(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;cc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(iu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&cc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=em();u.length!==0&&(u+=l),su(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function zn(n,e,t,r=!1,s=!1){const i=new om(n);let a;if(s)a=iu;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ji(n,e,t,r,s){var i,a;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await zn(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await zn(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(l)});else if(s==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){const l=await zn(n,e,t);return r(n,l).catch(async u=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await zn(n,e,t,!1,!0);return r(n,m)}return Promise.reject(u)})}else{const l=await zn(n,e,t,!1,!0);return r(n,l)}else return Promise.reject(s+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n,e){const t=io(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(zt(i,e??{}))return s;$e(s,"already-initialized")}return t.initialize({options:e})}function cm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lm(n,e,t){const r=Kt(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=ou(e),{host:a,port:l}=um(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(zt(d,r.config.emulator)&&zt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,vn(a)?(Dl(`${i}//${a}${u}`),Vl("Auth",!0)):s||hm()}function ou(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function um(n){const e=ou(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:pc(a)}}}function pc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function dm(n,e){return Dt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(n,e){return pr(n,"POST","/v1/accounts:signInWithPassword",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n,e){return pr(n,"POST","/v1/accounts:signInWithEmailLink",Nt(n,e))}async function mm(n,e){return pr(n,"POST","/v1/accounts:signInWithEmailLink",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ho{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new sr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new sr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ji(e,t,"signInWithPassword",fm,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return pm(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ji(e,r,"signUpPassword",dm,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mm(e,{idToken:t,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n,e){return pr(n,"POST","/v1/accounts:signInWithIdp",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="http://localhost";class $t extends ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=oo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new $t(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ln(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ln(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ln(e,t)}buildRequest(){const e={requestUri:gm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ym(n){const e=$n(Hn(n)).link,t=e?$n(Hn(e)).deep_link_id:null,r=$n(Hn(n)).deep_link_id;return(r?$n(Hn(r)).link:null)||r||t||e||n}class fo{constructor(e){var t,r,s,i,a,l;const u=$n(Hn(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,T=_m((s=u.mode)!==null&&s!==void 0?s:null);q(d&&m&&T,"argument-error"),this.apiKey=d,this.operation=T,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=ym(e);try{return new fo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(e,t){return sr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=fo.parseLink(t);return q(r,"argument-error"),sr._fromEmailAndCode(e,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends mr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends mr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends mr{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(n,e){return pr(n,"POST","/v1/accounts:signUp",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ze._fromIdTokenResponse(e,r,s),a=mc(r);return new Ht({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=mc(r);return new Ht({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function mc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends ht{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new cs(e,t,r,s)}}function cu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(n,i,e,r):i})}async function Em(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ht._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(n,e,t=!1){const{auth:r}=n;if(Ue(r.app))return Promise.reject(it(r));const s="reauthenticate";try{const i=await rr(n,cu(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=lo(i.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),Ht._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(n,e,t=!1){if(Ue(n.app))return Promise.reject(it(n));const r="signIn",s=await cu(n,r,e),i=await Ht._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function wm(n,e){return lu(Kt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(n){const e=Kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Im(n,e,t){if(Ue(n.app))return Promise.reject(it(n));const r=Kt(n),a=await ji(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vm,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&uu(n),u}),l=await Ht._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function bm(n,e,t){return Ue(n.app)?Promise.reject(it(n)):wm(ye(n),Tn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uu(n),r})}function Am(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function xm(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function Sm(n,e,t,r){return ye(n).onAuthStateChanged(e,t,r)}function Rm(n){return ye(n).signOut()}const ls="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=1e3,Pm=10;class du extends hu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pm):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}du.type="LOCAL";const km=du;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends hu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fu.type="SESSION";const pu=fu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ss(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await Nm(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ss.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=po("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(T){const v=T;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Vm(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Om(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mm(){return mu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="firebaseLocalStorageDb",jm=1,us="firebaseLocalStorage",_u="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rs(n,e){return n.transaction([us],e?"readwrite":"readonly").objectStore(us)}function Um(){const n=indexedDB.deleteDatabase(gu);return new gr(n).toPromise()}function Ui(){const n=indexedDB.open(gu,jm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(us,{keyPath:_u})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await Um(),e(await Ui()))})})}async function gc(n,e,t){const r=Rs(n,!0).put({[_u]:e,value:t});return new gr(r).toPromise()}async function Fm(n,e){const t=Rs(n,!1).get(e),r=await new gr(t).toPromise();return r===void 0?null:r.value}function _c(n,e){const t=Rs(n,!0).delete(e);return new gr(t).toPromise()}const Bm=800,zm=3;class yu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>zm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ss._getInstance(Mm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Om(),!this.activeServiceWorker)return;this.sender=new Dm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await gc(e,ls,"1"),await _c(e,ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_c(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rs(s,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yu.type="LOCAL";const qm=yu;new fr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n,e){return e?st(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hm(n){return lu(n.auth,new mo(n),n.bypassAuthState)}function Wm(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Tm(t,new mo(n),n.bypassAuthState)}async function Gm(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Em(t,new mo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hm;case"linkViaPopup":case"linkViaRedirect":return Gm;case"reauthViaPopup":case"reauthViaRedirect":return Wm;default:$e(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new fr(2e3,1e4);class on extends vu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Km.get())};e()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="pendingRedirect",Qr=new Map;class Xm extends vu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Qr.get(this.auth._key());if(!e){try{const r=await Ym(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Qr.set(this.auth._key(),e)}return this.bypassAuthState||Qr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ym(n,e){const t=eg(e),r=Zm(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Jm(n,e){Qr.set(n._key(),e)}function Zm(n){return st(n._redirectPersistence)}function eg(n){return Kr(Qm,n.config.apiKey,n.name)}async function tg(n,e,t=!1){if(Ue(n.app))return Promise.reject(it(n));const r=Kt(n),s=$m(r,e),a=await new Xm(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=10*60*1e3;class rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Eu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Eu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Eu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,e={}){return Dt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ag=/^https?/;async function cg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ig(n);for(const t of e)try{if(lg(t))return}catch{}$e(n,"unauthorized-domain")}function lg(n){const e=Li(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ag.test(t))return!1;if(og.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new fr(3e4,6e4);function vc(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hg(n){return new Promise((e,t)=>{var r,s,i;function a(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),t(Ge(n,"network-request-failed"))},timeout:ug.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)a();else{const l=nm("iframefcb");return Ke()[l]=()=>{gapi.load?a():t(Ge(n,"network-request-failed"))},su(`${tm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function dg(n){return Xr=Xr||hg(n),Xr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new fr(5e3,15e3),pg="__/auth/iframe",mg="emulator/auth/iframe",gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_g=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?co(e,mg):`https://${n.config.authDomain}/${pg}`,r={apiKey:e.apiKey,appName:n.name,v:En},s=_g.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${dr(r).slice(1)}`}async function vg(n){const e=await dg(n),t=Ke().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(a)},fg.get());function u(){Ke().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tg=500,wg=600,Ig="_blank",bg="http://localhost";class Ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ag(n,e,t,r=Tg,s=wg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Eg),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Ce().toLowerCase();t&&(l=Yl(d)?Ig:t),Ql(d)&&(e=e||bg,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[x,N])=>`${v}${x}=${N},`,"");if(Wp(d)&&l!=="_self")return xg(e||"",l),new Ec(null);const T=window.open(e||"",l,m);q(T,n,"popup-blocked");try{T.focus()}catch{}return new Ec(T)}function xg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="__/auth/handler",Rg="emulator/auth/handler",Cg=encodeURIComponent("fac");async function Tc(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:En,eventId:s};if(e instanceof au){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",pf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,T]of Object.entries(i||{}))a[m]=T}if(e instanceof mr){const m=e.getScopes().filter(T=>T!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${Cg}=${encodeURIComponent(u)}`:"";return`${Pg(n)}?${dr(l).slice(1)}${d}`}function Pg({config:n}){return n.emulator?co(n,Rg):`https://${n.authDomain}/${Sg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="webStorageSupport";class kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pu,this._completeRedirectFn=tg,this._overrideRedirectResult=Jm}async _openPopup(e,t,r,s){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Tc(e,t,r,Li(),s);return Ag(e,a,po())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Tc(e,t,r,Li(),s);return Vm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await vg(e),r=new rg(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wi,{type:wi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wi];a!==void 0&&t(!!a),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nu()||Xl()||uo()}}const Ng=kg;var wc="@firebase/auth",Ic="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Og(n){hn(new qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ru(n)},d=new Jp(r,s,i,u);return cm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hn(new qt("auth-internal",e=>{const t=Kt(e.getProvider("auth").getImmediate());return(r=>new Dg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(wc,Ic,Vg(n)),It(wc,Ic,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=5*60,Mg=Nl("authIdTokenMaxAge")||Lg;let bc=null;const jg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Mg)return;const s=t==null?void 0:t.token;bc!==s&&(bc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ug(n=jl()){const e=io(n,"auth");if(e.isInitialized())return e.getImmediate();const t=am(n,{popupRedirectResolver:Ng,persistence:[qm,km,pu]}),r=Nl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=jg(i.toString());xm(t,a,()=>a(t.currentUser)),Am(t,l=>a(l))}}const s=Pl("auth");return s&&lm(t,`http://${s}`),t}function Fg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Zp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Fg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Og("Browser");var Bg="firebase",zg="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(Bg,zg,"app");var Ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bt,Tu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function y(){}y.prototype=g.prototype,_.D=g.prototype,_.prototype=new y,_.prototype.constructor=_,_.C=function(w,I,A){for(var E=Array(arguments.length-2),de=2;de<arguments.length;de++)E[de-2]=arguments[de];return g.prototype[I].apply(w,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)w[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)w[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=_.g[0],y=_.g[1],I=_.g[2];var A=_.g[3],E=g+(A^y&(I^A))+w[0]+3614090360&4294967295;g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+w[1]+3905402710&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+w[2]+606105819&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+w[3]+3250441966&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(A^y&(I^A))+w[4]+4118548399&4294967295,g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+w[5]+1200080426&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+w[6]+2821735955&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+w[7]+4249261313&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(A^y&(I^A))+w[8]+1770035416&4294967295,g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+w[9]+2336552879&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+w[10]+4294925233&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+w[11]+2304563134&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(A^y&(I^A))+w[12]+1804603682&4294967295,g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+w[13]+4254626195&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+w[14]+2792965006&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+w[15]+1236535329&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(I^A&(y^I))+w[1]+4129170786&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+w[6]+3225465664&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+w[11]+643717713&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+w[0]+3921069994&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(I^A&(y^I))+w[5]+3593408605&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+w[10]+38016083&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+w[15]+3634488961&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+w[4]+3889429448&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(I^A&(y^I))+w[9]+568446438&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+w[14]+3275163606&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+w[3]+4107603335&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+w[8]+1163531501&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(I^A&(y^I))+w[13]+2850285829&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+w[2]+4243563512&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+w[7]+1735328473&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+w[12]+2368359562&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(y^I^A)+w[5]+4294588738&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+w[8]+2272392833&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+w[11]+1839030562&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+w[14]+4259657740&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(y^I^A)+w[1]+2763975236&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+w[4]+1272893353&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+w[7]+4139469664&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+w[10]+3200236656&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(y^I^A)+w[13]+681279174&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+w[0]+3936430074&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+w[3]+3572445317&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+w[6]+76029189&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(y^I^A)+w[9]+3654602809&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+w[12]+3873151461&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+w[15]+530742520&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+w[2]+3299628645&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(I^(y|~A))+w[0]+4096336452&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+w[7]+1126891415&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+w[14]+2878612391&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+w[5]+4237533241&4294967295,y=I+(E<<21&4294967295|E>>>11),E=g+(I^(y|~A))+w[12]+1700485571&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+w[3]+2399980690&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+w[10]+4293915773&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+w[1]+2240044497&4294967295,y=I+(E<<21&4294967295|E>>>11),E=g+(I^(y|~A))+w[8]+1873313359&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+w[15]+4264355552&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+w[6]+2734768916&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+w[13]+1309151649&4294967295,y=I+(E<<21&4294967295|E>>>11),E=g+(I^(y|~A))+w[4]+4149444226&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+w[11]+3174756917&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+w[2]+718787259&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+A&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var y=g-this.blockSize,w=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=y;)s(this,_,A),A+=this.blockSize;if(typeof _=="string"){for(;A<g;)if(w[I++]=_.charCodeAt(A++),I==this.blockSize){s(this,w),I=0;break}}else for(;A<g;)if(w[I++]=_[A++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var y=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=y&255,y/=256;for(this.u(_),_=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)_[y++]=this.g[g]>>>w&255;return _};function i(_,g){var y=l;return Object.prototype.hasOwnProperty.call(y,_)?y[_]:y[_]=g(_)}function a(_,g){this.h=g;for(var y=[],w=!0,I=_.length-1;0<=I;I--){var A=_[I]|0;w&&A==g||(y[I]=A,w=!1)}this.g=y}var l={};function u(_){return-128<=_&&128>_?i(_,function(g){return new a([g|0],0>g?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return T;if(0>_)return R(d(-_));for(var g=[],y=1,w=0;_>=y;w++)g[w]=_/y|0,y*=4294967296;return new a(g,0)}function m(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return R(m(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),w=T,I=0;I<_.length;I+=8){var A=Math.min(8,_.length-I),E=parseInt(_.substring(I,I+A),g);8>A?(A=d(Math.pow(g,A)),w=w.j(A).add(d(E))):(w=w.j(y),w=w.add(d(E)))}return w}var T=u(0),v=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-R(this).m();for(var _=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);_+=(0<=w?w:4294967296+w)*g,g*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(D(this))return"-"+R(this).toString(_);for(var g=d(Math.pow(_,6)),y=this,w="";;){var I=B(y,g).g;y=M(y,I.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(_);if(y=I,N(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function D(_){return _.h==-1}n.l=function(_){return _=M(this,_),D(_)?-1:N(_)?0:1};function R(_){for(var g=_.g.length,y=[],w=0;w<g;w++)y[w]=~_.g[w];return new a(y,~_.h).add(v)}n.abs=function(){return D(this)?R(this):this},n.add=function(_){for(var g=Math.max(this.g.length,_.g.length),y=[],w=0,I=0;I<=g;I++){var A=w+(this.i(I)&65535)+(_.i(I)&65535),E=(A>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);w=E>>>16,A&=65535,E&=65535,y[I]=E<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function M(_,g){return _.add(R(g))}n.j=function(_){if(N(this)||N(_))return T;if(D(this))return D(_)?R(this).j(R(_)):R(R(this).j(_));if(D(_))return R(this.j(R(_)));if(0>this.l(x)&&0>_.l(x))return d(this.m()*_.m());for(var g=this.g.length+_.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<_.g.length;I++){var A=this.i(w)>>>16,E=this.i(w)&65535,de=_.i(I)>>>16,Oe=_.i(I)&65535;y[2*w+2*I]+=E*Oe,j(y,2*w+2*I),y[2*w+2*I+1]+=A*Oe,j(y,2*w+2*I+1),y[2*w+2*I+1]+=E*de,j(y,2*w+2*I+1),y[2*w+2*I+2]+=A*de,j(y,2*w+2*I+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new a(y,0)};function j(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function H(_,g){this.g=_,this.h=g}function B(_,g){if(N(g))throw Error("division by zero");if(N(_))return new H(T,T);if(D(_))return g=B(R(_),g),new H(R(g.g),R(g.h));if(D(g))return g=B(_,R(g)),new H(R(g.g),g.h);if(30<_.g.length){if(D(_)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=g;0>=w.l(_);)y=k(y),w=k(w);var I=V(y,1),A=V(w,1);for(w=V(w,2),y=V(y,2);!N(w);){var E=A.add(w);0>=E.l(_)&&(I=I.add(y),A=E),w=V(w,1),y=V(y,1)}return g=M(_,I.j(g)),new H(I,g)}for(I=T;0<=_.l(g);){for(y=Math.max(1,Math.floor(_.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=d(y),E=A.j(g);D(E)||0<E.l(_);)y-=w,A=d(y),E=A.j(g);N(A)&&(A=v),I=I.add(A),_=M(_,E)}return new H(I,_)}n.A=function(_){return B(this,_).h},n.and=function(_){for(var g=Math.max(this.g.length,_.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&_.i(w);return new a(y,this.h&_.h)},n.or=function(_){for(var g=Math.max(this.g.length,_.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|_.i(w);return new a(y,this.h|_.h)},n.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^_.i(w);return new a(y,this.h^_.h)};function k(_){for(var g=_.g.length+1,y=[],w=0;w<g;w++)y[w]=_.i(w)<<1|_.i(w-1)>>>31;return new a(y,_.h)}function V(_,g){var y=g>>5;g%=32;for(var w=_.g.length-y,I=[],A=0;A<w;A++)I[A]=0<g?_.i(A+y)>>>g|_.i(A+y+1)<<32-g:_.i(A+y);return new a(I,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,bt=a}).apply(typeof Ac<"u"?Ac:typeof self<"u"?self:typeof window<"u"?window:{});var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wu,Wn,Iu,Yr,Fi,bu,Au,xu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fr=="object"&&Fr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var S=h++;return{value:c(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function T(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,v.apply(null,arguments)}function x(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,S){for(var O=Array(arguments.length-2),te=2;te<arguments.length;te++)O[te-2]=arguments[te];return c.prototype[b].apply(p,O)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function R(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,S=p.length||0;o.length=b+S;for(let O=0;O<S;O++)o[b+O]=p[O]}else o.push(p)}}class M{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var k=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function V(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function _(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){l.setTimeout(()=>{throw o},0)}function E(){var o=F;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class de{constructor(){this.h=this.g=null}add(c,h){const p=Oe.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Oe=new M(()=>new He,o=>o.reset());class He{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Ee=!1,F=new de,Te=()=>{const o=l.Promise.resolve(void 0);je=()=>{o.then(Fe)}};var Fe=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){A(h)}var c=Oe;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Ee=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var nd=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Sn(o,c){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(k){e:{try{B(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Sn.aa.h.call(this)}}N(Sn,we);var rd={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),sd=0;function id(o,c,h,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++sd,this.da=this.fa=!1}function Tr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wr(o){this.src=o,this.g={},this.h=0}wr.prototype.add=function(o,c,h,p,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var O=Gs(o,c,p,b);return-1<O?(c=o[O],h||(c.fa=!1)):(c=new id(c,this.src,S,!!p,b),c.fa=h,o.push(c)),c};function Ws(o,c){var h=c.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,c,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(Tr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Gs(o,c,h,p){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==p)return b}return-1}var Ks="closure_lm_"+(1e6*Math.random()|0),Qs={};function Xo(o,c,h,p,b){if(p&&p.once)return Jo(o,c,h,p,b);if(Array.isArray(c)){for(var S=0;S<c.length;S++)Xo(o,c[S],h,p,b);return null}return h=Zs(h),o&&o[Rn]?o.K(c,h,d(p)?!!p.capture:!!p,b):Yo(o,c,h,!1,p,b)}function Yo(o,c,h,p,b,S){if(!c)throw Error("Invalid event type");var O=d(b)?!!b.capture:!!b,te=Ys(o);if(te||(o[Ks]=te=new wr(o)),h=te.add(c,h,p,O,S),h.proxy)return h;if(p=od(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)nd||(b=O),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(ea(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function od(){function o(h){return c.call(o.src,o.listener,h)}const c=ad;return o}function Jo(o,c,h,p,b){if(Array.isArray(c)){for(var S=0;S<c.length;S++)Jo(o,c[S],h,p,b);return null}return h=Zs(h),o&&o[Rn]?o.L(c,h,d(p)?!!p.capture:!!p,b):Yo(o,c,h,!0,p,b)}function Zo(o,c,h,p,b){if(Array.isArray(c))for(var S=0;S<c.length;S++)Zo(o,c[S],h,p,b);else p=d(p)?!!p.capture:!!p,h=Zs(h),o&&o[Rn]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],h=Gs(S,h,p,b),-1<h&&(Tr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ys(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Gs(c,h,p,b)),(h=-1<o?c[o]:null)&&Xs(h))}function Xs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Rn])Ws(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(ea(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Ys(c))?(Ws(h,o),h.h==0&&(h.src=null,c[Ks]=null)):Tr(o)}}}function ea(o){return o in Qs?Qs[o]:Qs[o]="on"+o}function ad(o,c){if(o.da)o=!0;else{c=new Sn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Xs(o),o=h.call(p,c)}return o}function Ys(o){return o=o[Ks],o instanceof wr?o:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zs(o){return typeof o=="function"?o:(o[Js]||(o[Js]=function(c){return o.handleEvent(c)}),o[Js])}function Ie(){fe.call(this),this.i=new wr(this),this.M=this,this.F=null}N(Ie,fe),Ie.prototype[Rn]=!0,Ie.prototype.removeEventListener=function(o,c,h,p){Zo(this,o,c,h,p)};function Pe(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new we(c,o);else if(c instanceof we)c.target=c.target||o;else{var b=c;c=new we(p,o),w(c,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var O=c.g=h[S];b=Ir(O,p,!0,c)&&b}if(O=c.g=o,b=Ir(O,p,!0,c)&&b,b=Ir(O,p,!1,c)&&b,h)for(S=0;S<h.length;S++)O=c.g=h[S],b=Ir(O,p,!1,c)&&b}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Tr(h[p]);delete o.g[c],o.h--}}this.F=null},Ie.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Ie.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Ir(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,S=0;S<c.length;++S){var O=c[S];if(O&&!O.da&&O.capture==h){var te=O.listener,me=O.ha||O.src;O.fa&&Ws(o.i,O),b=te.call(me,p)!==!1&&b}}return b&&!p.defaultPrevented}function ta(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function na(o){o.g=ta(()=>{o.g=null,o.i&&(o.i=!1,na(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class cd extends fe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:na(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(o){fe.call(this),this.h=o,this.g={}}N(Cn,fe);var ra=[];function sa(o){V(o.g,function(c,h){this.g.hasOwnProperty(h)&&Xs(c)},o),o.g={}}Cn.prototype.N=function(){Cn.aa.N.call(this),sa(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ei=l.JSON.stringify,ld=l.JSON.parse,ud=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ti(){}ti.prototype.h=null;function ia(o){return o.h||(o.h=o.i())}function oa(){}var Pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ni(){we.call(this,"d")}N(ni,we);function ri(){we.call(this,"c")}N(ri,we);var Lt={},aa=null;function br(){return aa=aa||new Ie}Lt.La="serverreachability";function ca(o){we.call(this,Lt.La,o)}N(ca,we);function kn(o){const c=br();Pe(c,new ca(c))}Lt.STAT_EVENT="statevent";function la(o,c){we.call(this,Lt.STAT_EVENT,o),this.stat=c}N(la,we);function ke(o){const c=br();Pe(c,new la(c,o))}Lt.Ma="timingevent";function ua(o,c){we.call(this,Lt.Ma,o),this.size=c}N(ua,we);function Nn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function hd(o,c,h,p,b,S){o.info(function(){if(o.g)if(S)for(var O="",te=S.split("&"),me=0;me<te.length;me++){var Z=te[me].split("=");if(1<Z.length){var be=Z[0];Z=Z[1];var Ae=be.split("_");O=2<=Ae.length&&Ae[1]=="type"?O+(be+"="+Z+"&"):O+(be+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+O})}function dd(o,c,h,p,b,S,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+S+" "+O})}function Yt(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+pd(o,h)+(p?" "+p:"")})}function fd(o,c){o.info(function(){return"TIMEOUT: "+c})}Dn.prototype.info=function(){};function pd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<b.length;O++)b[O]=""}}}}return ei(h)}catch{return c}}var Ar={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},si;function xr(){}N(xr,ti),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},si=new xr;function dt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new da}function da(){this.i=null,this.g="",this.h=!1}var fa={},ii={};function oi(o,c,h){o.L=1,o.v=Pr(et(c)),o.m=h,o.P=!0,pa(o,null)}function pa(o,c){o.F=Date.now(),Sr(o),o.A=et(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ra(h.i,"t",p),o.C=0,h=o.j.J,o.h=new da,o.g=Wa(o.j,h?c:null,!o.m),0<o.O&&(o.M=new cd(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(ra[0]=b.toString()),b=ra);for(var S=0;S<b.length;S++){var O=Xo(h,b[S],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),kn(),hd(o.i,o.u,o.A,o.l,o.R,o.m)}dt.prototype.ca=function(o){o=o.target;const c=this.M;c&&tt(o)==3?c.j():this.Y(o)},dt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=tt(this.g);var c=this.g.Ba();const en=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Oa(this.g)))){this.J||Ae!=4||c==7||(c==8||0>=en?kn(3):kn(2)),ai(this);var h=this.g.Z();this.X=h;t:if(ma(this)){var p=Oa(this.g);o="";var b=p.length,S=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Vn(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(S&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,dd(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,me=this.g;if((te=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(te)){var Z=te;break t}}Z=null}if(h=Z)Yt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ci(this,h);else{this.o=!1,this.s=3,ke(12),Mt(this),Vn(this);break e}}if(this.P){h=!0;let Be;for(;!this.J&&this.C<O.length;)if(Be=md(this,O),Be==ii){Ae==4&&(this.s=4,ke(14),h=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==fa){this.s=4,ke(15),Yt(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else Yt(this.i,this.l,Be,null),ci(this,Be);if(ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||O.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)Yt(this.i,this.l,O,"[Invalid Chunked Response]"),Mt(this),Vn(this);else if(0<O.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),pi(be),be.M=!0,ke(11))}}else Yt(this.i,this.l,O,null),ci(this,O);Ae==4&&Mt(this),this.o&&!this.J&&(Ae==4?za(this.j,this):(this.o=!1,Sr(this)))}else Nd(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Mt(this),Vn(this)}}}catch{}finally{}};function ma(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function md(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?ii:(h=Number(c.substring(h,p)),isNaN(h)?fa:(p+=1,p+h>c.length?ii:(c=c.slice(p,p+h),o.C=p+h,c)))}dt.prototype.cancel=function(){this.J=!0,Mt(this)};function Sr(o){o.S=Date.now()+o.I,ga(o,o.I)}function ga(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Nn(v(o.ba,o),c)}function ai(o){o.B&&(l.clearTimeout(o.B),o.B=null)}dt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(fd(this.i,this.A),this.L!=2&&(kn(),ke(17)),Mt(this),this.s=2,Vn(this)):ga(this,this.S-o)};function Vn(o){o.j.G==0||o.J||za(o.j,o)}function Mt(o){ai(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,sa(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ci(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||li(h.h,o))){if(!o.K&&li(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Lr(h),Vr(h);else break e;fi(h),ke(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Nn(v(h.Za,h),6e3));if(1>=va(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ut(h,11)}else if((o.K||h.g==o)&&Lr(h),!j(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let Z=b[c];if(h.T=Z[0],Z=Z[1],h.G==2)if(Z[0]=="c"){h.K=Z[1],h.ia=Z[2];const be=Z[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Ae=Z[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const en=Z[5];en!=null&&typeof en=="number"&&0<en&&(p=1.5*en,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Be=o.g;if(Be){const jr=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jr){var S=p.h;S.g||jr.indexOf("spdy")==-1&&jr.indexOf("quic")==-1&&jr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ui(S,S.h),S.h=null))}if(p.D){const mi=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;mi&&(p.ya=mi,ne(p.I,p.D,mi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var O=o;if(p.qa=Ha(p,p.J?p.ia:null,p.W),O.K){Ea(p.h,O);var te=O,me=p.L;me&&(te.I=me),te.B&&(ai(te),Sr(te)),p.g=O}else Fa(p);0<h.i.length&&Or(h)}else Z[0]!="stop"&&Z[0]!="close"||Ut(h,7);else h.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Ut(h,7):di(h):Z[0]!="noop"&&h.l&&h.l.ta(Z),h.v=0)}}kn(4)}catch{}}var gd=class{constructor(o,c){this.g=o,this.map=c}};function _a(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ya(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function va(o){return o.h?1:o.g?o.g.size:0}function li(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ui(o,c){o.g?o.g.add(c):o.h=c}function Ea(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}_a.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ta(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function _d(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function yd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function wa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=yd(o),p=_d(o),b=p.length,S=0;S<b;S++)c.call(void 0,p[S],h&&h[S],o)}var Ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var S=o[h].substring(0,p);b=o[h].substring(p+1)}else S=o[h];c(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof jt){this.h=o.h,Rr(this,o.j),this.o=o.o,this.g=o.g,Cr(this,o.s),this.l=o.l;var c=o.i,h=new Mn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ba(this,h),this.m=o.m}else o&&(c=String(o).match(Ia))?(this.h=!1,Rr(this,c[1]||"",!0),this.o=On(c[2]||""),this.g=On(c[3]||"",!0),Cr(this,c[4]),this.l=On(c[5]||"",!0),ba(this,c[6]||"",!0),this.m=On(c[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}jt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Ln(c,Aa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ln(c,Aa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ln(h,h.charAt(0)=="/"?wd:Td,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ln(h,bd)),o.join("")};function et(o){return new jt(o)}function Rr(o,c,h){o.j=h?On(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Cr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ba(o,c,h){c instanceof Mn?(o.i=c,Ad(o.i,o.h)):(h||(c=Ln(c,Id)),o.i=new Mn(c,o.h))}function ne(o,c,h){o.i.set(c,h)}function Pr(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function On(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ln(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Ed),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ed(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Aa=/[#\/\?@]/g,Td=/[#\?:]/g,wd=/[#\?]/g,Id=/[#\?@]/g,bd=/#/g;function Mn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ft(o){o.g||(o.g=new Map,o.h=0,o.i&&vd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Mn.prototype,n.add=function(o,c){ft(this),this.i=null,o=Jt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function xa(o,c){ft(o),c=Jt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Sa(o,c){return ft(o),c=Jt(o,c),o.g.has(c)}n.forEach=function(o,c){ft(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(c,b,p,this)},this)},this)},n.na=function(){ft(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=o[p];for(let S=0;S<b.length;S++)h.push(c[p])}return h},n.V=function(o){ft(this);let c=[];if(typeof o=="string")Sa(this,o)&&(c=c.concat(this.g.get(Jt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return ft(this),this.i=null,o=Jt(this,o),Sa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ra(o,c,h){xa(o,c),0<h.length&&(o.i=null,o.g.set(Jt(o,c),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var b=S;O[p]!==""&&(b+="="+encodeURIComponent(String(O[p]))),o.push(b)}}return this.i=o.join("&")};function Jt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ad(o,c){c&&!o.j&&(ft(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(xa(this,p),Ra(this,b,h))},o)),o.j=c}function xd(o,c){const h=new Dn;if(l.Image){const p=new Image;p.onload=x(pt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=x(pt,h,"TestLoadImage: error",!1,c,p),p.onabort=x(pt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=x(pt,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Sd(o,c){const h=new Dn,p=new AbortController,b=setTimeout(()=>{p.abort(),pt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?pt(h,"TestPingServer: ok",!0,c):pt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),pt(h,"TestPingServer: error",!1,c)})}function pt(o,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Rd(){this.g=new ud}function Cd(o,c,h){const p=h||"";try{wa(o,function(b,S){let O=b;d(b)&&(O=ei(b)),c.push(p+S+"="+encodeURIComponent(O))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function kr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(kr,ti),kr.prototype.g=function(){return new Nr(this.l,this.j)},kr.prototype.i=function(o){return function(){return o}}({});function Nr(o,c){Ie.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Nr,Ie),n=Nr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Un(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ca(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ca(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?jn(this):Un(this),this.readyState==3&&Ca(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,jn(this))},n.Qa=function(o){this.g&&(this.response=o,jn(this))},n.ga=function(){this.g&&jn(this)};function jn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Un(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Un(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pa(o){let c="";return V(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function hi(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Pa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ne(o,c,h))}function oe(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(oe,Ie);var Pd=/^https?$/i,kd=["POST","PUT"];n=oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():si.g(),this.v=this.o?ia(this.o):ia(si),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){ka(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(kd,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of h)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){ka(this,S)}};function ka(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Na(o),Dr(o)}function Na(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),Dr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dr(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Da(this):this.bb())},n.bb=function(){Da(this)};function Da(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tt(o)!=4||o.Z()!=2)){if(o.u&&tt(o)==4)ta(o.Ea,0,o);else if(Pe(o,"readystatechange"),tt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=O===0){var b=String(o.D).match(Ia)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Pd.test(b?b.toLowerCase():"")}h=p}if(h)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var S=2<tt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Na(o)}}finally{Dr(o)}}}}function Dr(o,c){if(o.g){Va(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pe(o,"ready");try{h.onreadystatechange=p}catch{}}}function Va(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ld(c)}};function Oa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nd(o){const c={};o=(o.g&&2<=tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(j(o[p]))continue;var h=I(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[b]||[];c[b]=S,S.push(h)}_(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function La(o){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fn("baseRetryDelayMs",5e3,o),this.cb=Fn("retryDelaySeedMs",1e4,o),this.Wa=Fn("forwardChannelMaxRetries",2,o),this.wa=Fn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _a(o&&o.concurrentRequestLimit),this.Da=new Rd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=La.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){ke(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ha(this,null,this.W),Or(this)};function di(o){if(Ma(o),o.G==3){var c=o.U++,h=et(o.I);if(ne(h,"SID",o.K),ne(h,"RID",c),ne(h,"TYPE","terminate"),Bn(o,h),c=new dt(o,o.j,c),c.L=2,c.v=Pr(et(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Wa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Sr(c)}$a(o)}function Vr(o){o.g&&(pi(o),o.g.cancel(),o.g=null)}function Ma(o){Vr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Lr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Or(o){if(!ya(o.h)&&!o.s){o.s=!0;var c=o.Ga;je||Te(),Ee||(je(),Ee=!0),F.add(c,o),o.B=0}}function Dd(o,c){return va(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Nn(v(o.Ga,o,c),qa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new dt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=g(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ua(this,b,c),h=et(this.I),ne(h,"RID",o),ne(h,"CVER",22),this.D&&ne(h,"X-HTTP-Session-Id",this.D),Bn(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(Pa(S)))+"&"+c:this.m&&hi(h,this.m,S)),ui(this.h,b),this.Ua&&ne(h,"TYPE","init"),this.P?(ne(h,"$req",c),ne(h,"SID","null"),b.T=!0,oi(b,h,null)):oi(b,h,c),this.G=2}}else this.G==3&&(o?ja(this,o):this.i.length==0||ya(this.h)||ja(this))};function ja(o,c){var h;c?h=c.l:h=o.U++;const p=et(o.I);ne(p,"SID",o.K),ne(p,"RID",h),ne(p,"AID",o.T),Bn(o,p),o.m&&o.o&&hi(p,o.m,o.o),h=new dt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ua(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ui(o.h,h),oi(h,p,c)}function Bn(o,c){o.H&&V(o.H,function(h,p){ne(c,p,h)}),o.l&&wa({},function(h,p){ne(c,p,h)})}function Ua(o,c,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const O=["count="+h];S==-1?0<h?(S=b[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let te=!0;for(let me=0;me<h;me++){let Z=b[me].g;const be=b[me].map;if(Z-=S,0>Z)S=Math.max(0,b[me].g-100),te=!1;else try{Cd(be,O,"req"+Z+"_")}catch{p&&p(be)}}if(te){p=O.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Fa(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;je||Te(),Ee||(je(),Ee=!0),F.add(c,o),o.v=0}}function fi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Nn(v(o.Fa,o),qa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ba(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Nn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Vr(this),Ba(this))};function pi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ba(o){o.g=new dt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=et(o.qa);ne(c,"RID","rpc"),ne(c,"SID",o.K),ne(c,"AID",o.T),ne(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(c,"TO",o.ja),ne(c,"TYPE","xmlhttp"),Bn(o,c),o.m&&o.o&&hi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Pr(et(c)),h.m=null,h.P=!0,pa(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Vr(this),fi(this),ke(19))};function Lr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function za(o,c){var h=null;if(o.g==c){Lr(o),pi(o),o.g=null;var p=2}else if(li(o.h,c))h=c.D,Ea(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=br(),Pe(p,new ua(p,h)),Or(o)}else Fa(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&Dd(o,c)||p==2&&fi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:Ut(o,5);break;case 4:Ut(o,10);break;case 3:Ut(o,6);break;default:Ut(o,2)}}}function qa(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Ut(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),p=o.Xa;const b=!p;p=new jt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Rr(p,"https"),Pr(p),b?xd(p.toString(),h):Sd(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(c),$a(o),Ma(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function $a(o){if(o.G=0,o.ka=[],o.l){const c=Ta(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ka,c),R(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Ha(o,c,h){var p=h instanceof jt?et(h):new jt(h);if(p.g!="")c&&(p.g=c+"."+p.g),Cr(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var S=new jt(null);p&&Rr(S,p),c&&(S.g=c),b&&Cr(S,b),h&&(S.l=h),p=S}return h=o.D,c=o.ya,h&&c&&ne(p,h,c),ne(p,"VER",o.la),Bn(o,p),p}function Wa(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new oe(new kr({eb:h})):new oe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ga(){}n=Ga.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Mr(){}Mr.prototype.g=function(o,c){return new Le(o,c)};function Le(o,c){Ie.call(this),this.g=new La(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Zt(this)}N(Le,Ie),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){di(this.g)},Le.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ei(o),o=h);c.i.push(new gd(c.Ya++,o)),c.G==3&&Or(c)},Le.prototype.N=function(){this.g.l=null,delete this.j,di(this.g),delete this.g,Le.aa.N.call(this)};function Ka(o){ni.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}N(Ka,ni);function Qa(){ri.call(this),this.status=1}N(Qa,ri);function Zt(o){this.g=o}N(Zt,Ga),Zt.prototype.ua=function(){Pe(this.g,"a")},Zt.prototype.ta=function(o){Pe(this.g,new Ka(o))},Zt.prototype.sa=function(o){Pe(this.g,new Qa)},Zt.prototype.ra=function(){Pe(this.g,"b")},Mr.prototype.createWebChannel=Mr.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,xu=function(){return new Mr},Au=function(){return br()},bu=Lt,Fi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ar.NO_ERROR=0,Ar.TIMEOUT=8,Ar.HTTP_ERROR=6,Yr=Ar,ha.COMPLETE="complete",Iu=ha,oa.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Wn=oa,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,wu=oe}).apply(typeof Fr<"u"?Fr:typeof self<"u"?self:typeof window<"u"?window:{});const xc="@firebase/firestore",Sc="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new ro("@firebase/firestore");function tn(){return Wt.logLevel}function L(n,...e){if(Wt.logLevel<=X.DEBUG){const t=e.map(go);Wt.debug(`Firestore (${wn}): ${n}`,...t)}}function lt(n,...e){if(Wt.logLevel<=X.ERROR){const t=e.map(go);Wt.error(`Firestore (${wn}): ${n}`,...t)}}function dn(n,...e){if(Wt.logLevel<=X.WARN){const t=e.map(go);Wt.warn(`Firestore (${wn}): ${n}`,...t)}}function go(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Su(n,r,t)}function Su(n,e,t){let r=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw lt(r),new Error(r)}function ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Su(e,s,r)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class $g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hg{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ot,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string",31837,{l:r}),new Ru(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class Wg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Gg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Wg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Rc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Qg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function Bi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Q(r,s);{const i=Cu(),a=Xg(i.encode(Cc(n,t)),i.encode(Cc(e,t)));return a!==0?a:Q(r,s)}}t+=r>65535?2:1}return Q(n.length,e.length)}function Cc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Xg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Q(n[t],e[t]);return Q(n.length,e.length)}function fn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=-62135596800,kc=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*kc);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pc)throw new U(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kc}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ue(0,0))}static max(){return new W(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="__name__";class We{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=We.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const r=We.isNumericId(e),s=We.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?We.extractNumericId(e).compare(We.extractNumericId(t)):Bi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bt.fromString(e.substring(4,e.length-2))}}class re extends We{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Yg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends We{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return Yg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nc}static keyField(){return new _e([Nc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new U(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(re.fromString(e))}static fromName(e){return new z(re.fromString(e).popFirst(5))}static empty(){return new z(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new re(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=-1;function Jg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new xt(s,z.empty(),e)}function Zg(n){return new xt(n.readTime,n.key,ir)}class xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xt(W.min(),z.empty(),ir)}static max(){return new xt(W.max(),z.empty(),ir)}}function e_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==t_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function r_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Cs.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=-1;function Ps(n){return n==null}function hs(n){return n===0&&1/n==-1/0}function s_(n){return typeof n=="number"&&Number.isInteger(n)&&!hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="";function i_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dc(e)),e=o_(n.get(t),e);return Dc(e)}function o_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ku:t+="";break;default:t+=i}}return t}function Dc(n){return n+ku+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ge.RED,this.left=s??ge.EMPTY,this.right=i??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Oc(this.data.getIterator())}getIteratorFrom(e){return new Oc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Oc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Me([])}unionWith(e){let t=new he(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Du("Invalid base64 string: "+i):i}}(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const a_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=a_.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rt(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="server_timestamp",Ou="__type__",Lu="__previous_value__",Mu="__local_write_time__";function yo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ou])===null||t===void 0?void 0:t.stringValue)===Vu}function ks(n){const e=n.mapValue.fields[Lu];return yo(e)?ks(e):e}function or(n){const e=St(n.mapValue.fields[Mu].timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t,r,s,i,a,l,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const ds="(default)";class ar{constructor(e,t){this.projectId=e,this.database=t||ds}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===ds}isEqual(e){return e instanceof ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="__type__",Uu="__max__",zr={mapValue:{fields:{__type__:{stringValue:Uu}}}},Fu="__vector__",fs="value";function Ct(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yo(n)?4:u_(n)?9007199254740991:l_(n)?10:11:$(28295,{value:n})}function Ye(n,e){if(n===e)return!0;const t=Ct(n);if(t!==Ct(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=St(s.timestampValue),l=St(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Rt(s.bytesValue).isEqual(Rt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ae(s.doubleValue),l=ae(i.doubleValue);return a===l?hs(a)===hs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return fn(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Vc(a)!==Vc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ye(a[u],l[u])))return!1;return!0}(n,e);default:return $(52216,{left:n})}}function cr(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function pn(n,e){if(n===e)return 0;const t=Ct(n),r=Ct(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ae(i.integerValue||i.doubleValue),u=ae(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Lc(n.timestampValue,e.timestampValue);case 4:return Lc(or(n),or(e));case 5:return Bi(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Rt(i),u=Rt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=Q(l[d],u[d]);if(m!==0)return m}return Q(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Q(ae(i.latitude),ae(a.latitude));return l!==0?l:Q(ae(i.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,d,m;const T=i.fields||{},v=a.fields||{},x=(l=T[fs])===null||l===void 0?void 0:l.arrayValue,N=(u=v[fs])===null||u===void 0?void 0:u.arrayValue,D=Q(((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0,((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:Mc(x,N)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===zr.mapValue&&a===zr.mapValue)return 0;if(i===zr.mapValue)return 1;if(a===zr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let T=0;T<u.length&&T<m.length;++T){const v=Bi(u[T],m[T]);if(v!==0)return v;const x=pn(l[u[T]],d[m[T]]);if(x!==0)return x}return Q(u.length,m.length)}(n.mapValue,e.mapValue);default:throw $(23264,{Pe:t})}}function Lc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=St(n),r=St(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function Mc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=pn(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function mn(n){return zi(n)}function zi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=St(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=zi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${zi(t.fields[a])}`;return s+"}"}(n.mapValue):$(61005,{value:n})}function Jr(n){switch(Ct(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ks(n);return e?16+Jr(e):16;case 5:return 2*n.stringValue.length;case 6:return Rt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Jr(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Vt(r.fields,(i,a)=>{s+=i.length+Jr(a)}),s}(n.mapValue);default:throw $(13486,{value:n})}}function qi(n){return!!n&&"integerValue"in n}function vo(n){return!!n&&"arrayValue"in n}function jc(n){return!!n&&"nullValue"in n}function Uc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function l_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ju])===null||t===void 0?void 0:t.stringValue)===Fu}function Jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Vt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function u_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Uu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Jn(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Vt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new De(Jn(this.value))}}function Bu(n){const e=[];return Vt(n.fields,(t,r)=>{const s=new _e([t]);if(Zr(r)){const i=Bu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Me(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,W.min(),W.min(),W.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,W.min(),W.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,W.min(),W.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=pn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t="asc"){this.field=e,this.dir=t}}function h_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{}class le extends zu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new f_(e,t,r):t==="array-contains"?new g_(e,r):t==="in"?new __(e,r):t==="not-in"?new y_(e,r):t==="array-contains-any"?new v_(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new p_(e,r):new m_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pn(t,this.value)):t!==null&&Ct(this.value)===Ct(t)&&this.matchesComparison(pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends zu{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Je(e,t)}matches(e){return qu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function qu(n){return n.op==="and"}function $u(n){return d_(n)&&qu(n)}function d_(n){for(const e of n.filters)if(e instanceof Je)return!1;return!0}function $i(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+mn(n.value);if($u(n))return n.filters.map(e=>$i(e)).join(",");{const e=n.filters.map(t=>$i(t)).join(",");return`${n.op}(${e})`}}function Hu(n,e){return n instanceof le?function(r,s){return s instanceof le&&r.op===s.op&&r.field.isEqual(s.field)&&Ye(r.value,s.value)}(n,e):n instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Hu(a,s.filters[l]),!0):!1}(n,e):void $(19439)}function Wu(n){return n instanceof le?function(t){return`${t.field.canonicalString()} ${t.op} ${mn(t.value)}`}(n):n instanceof Je?function(t){return t.op.toString()+" {"+t.getFilters().map(Wu).join(" ,")+"}"}(n):"Filter"}class f_ extends le{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class p_ extends le{constructor(e,t){super(e,"in",t),this.keys=Gu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class m_ extends le{constructor(e,t){super(e,"not-in",t),this.keys=Gu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class g_ extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vo(t)&&cr(t.arrayValue,this.value)}}class __ extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cr(this.value.arrayValue,t)}}class y_ extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cr(this.value.arrayValue,t)}}class v_ extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function zc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new E_(n,e,t,r,s,i,a)}function Eo(n){const e=G(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$i(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ps(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mn(r)).join(",")),e.Ie=t}return e.Ie}function To(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!h_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Bc(n.startAt,e.startAt)&&Bc(n.endAt,e.endAt)}function Hi(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function T_(n,e,t,r,s,i,a,l){return new Ns(n,e,t,r,s,i,a,l)}function wo(n){return new Ns(n)}function qc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function w_(n){return n.collectionGroup!==null}function Zn(n){const e=G(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(_e.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ms(i,r))}),t.has(_e.keyField().canonicalString())||e.Ee.push(new ms(_e.keyField(),r))}return e.Ee}function Qe(n){const e=G(n);return e.de||(e.de=I_(e,Zn(n))),e.de}function I_(n,e){if(n.limitType==="F")return zc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ms(s.field,i)});const t=n.endAt?new ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ps(n.startAt.position,n.startAt.inclusive):null;return zc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wi(n,e,t){return new Ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ds(n,e){return To(Qe(n),Qe(e))&&n.limitType===e.limitType}function Ku(n){return`${Eo(Qe(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Wu(s)).join(", ")}]`),Ps(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>mn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>mn(s)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function Vs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Zn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Fc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Zn(r),s)||r.endAt&&!function(a,l,u){const d=Fc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Zn(r),s))}(n,e)}function b_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qu(n){return(e,t)=>{let r=!1;for(const s of Zn(n)){const i=A_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function A_(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?pn(u,d):$(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Nu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new ie(z.comparator);function ut(){return x_}const Xu=new ie(z.comparator);function Gn(...n){let e=Xu;for(const t of n)e=e.insert(t.key,t);return e}function Yu(n){let e=Xu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Bt(){return er()}function Ju(){return er()}function er(){return new Qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const S_=new ie(z.comparator),R_=new he(z.comparator);function Y(...n){let e=R_;for(const t of n)e=e.add(t);return e}const C_=new he(Q);function P_(){return C_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(e)?"-0":e}}function Zu(n){return{integerValue:""+n}}function k_(n,e){return s_(e)?Zu(e):Io(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this._=void 0}}function N_(n,e,t){return n instanceof gs?function(s,i){const a={fields:{[Ou]:{stringValue:Vu},[Mu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yo(i)&&(i=ks(i)),i&&(a.fields[Lu]=i),{mapValue:a}}(t,e):n instanceof lr?th(n,e):n instanceof ur?nh(n,e):function(s,i){const a=eh(s,i),l=$c(a)+$c(s.Re);return qi(a)&&qi(s.Re)?Zu(l):Io(s.serializer,l)}(n,e)}function D_(n,e,t){return n instanceof lr?th(n,e):n instanceof ur?nh(n,e):t}function eh(n,e){return n instanceof _s?function(r){return qi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class gs extends Os{}class lr extends Os{constructor(e){super(),this.elements=e}}function th(n,e){const t=rh(e);for(const r of n.elements)t.some(s=>Ye(s,r))||t.push(r);return{arrayValue:{values:t}}}class ur extends Os{constructor(e){super(),this.elements=e}}function nh(n,e){let t=rh(e);for(const r of n.elements)t=t.filter(s=>!Ye(s,r));return{arrayValue:{values:t}}}class _s extends Os{constructor(e,t){super(),this.serializer=e,this.Re=t}}function $c(n){return ae(n.integerValue||n.doubleValue)}function rh(n){return vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function V_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof lr&&s instanceof lr||r instanceof ur&&s instanceof ur?fn(r.elements,s.elements,Ye):r instanceof _s&&s instanceof _s?Ye(r.Re,s.Re):r instanceof gs&&s instanceof gs}(n.transform,e.transform)}class O_{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function es(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ls{}function sh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new bo(n.key,qe.none()):new _r(n.key,n.data,qe.none());{const t=n.data,r=De.empty();let s=new he(_e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ot(n.key,r,new Me(s.toArray()),qe.none())}}function L_(n,e,t){n instanceof _r?function(s,i,a){const l=s.value.clone(),u=Wc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ot?function(s,i,a){if(!es(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Wc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ih(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function tr(n,e,t,r){return n instanceof _r?function(i,a,l,u){if(!es(i.precondition,a))return l;const d=i.value.clone(),m=Gc(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ot?function(i,a,l,u){if(!es(i.precondition,a))return l;const d=Gc(i.fieldTransforms,u,a),m=a.data;return m.setAll(ih(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(i,a,l){return es(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function M_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=eh(r.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(r.field,i))}return t||null}function Hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fn(r,s,(i,a)=>V_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends Ls{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ot extends Ls{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ih(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wc(n,e,t){const r=new Map;ee(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,D_(a,l,t[s]))}return r}function Gc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,N_(i,a,e))}return r}class bo extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class j_ extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&L_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=tr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=tr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ju();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=sh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&fn(this.mutations,e.mutations,(t,r)=>Hc(t,r))&&fn(this.baseMutations,e.baseMutations,(t,r)=>Hc(t,r))}}class Ao{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ee(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return S_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ao(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,J;function z_(n){switch(n){case P.OK:return $(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function oh(n){if(n===void 0)return lt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return $(39323,{code:n})}}(J=ce||(ce={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new bt([4294967295,4294967295],0);function Kc(n){const e=Cu().encode(n),t=new Tu;return t.update(e),new Uint8Array(t.digest())}function Qc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bt([t,r],0),new bt([s,i],0)]}class xo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kn(`Invalid padding: ${t}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=bt.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(bt.fromNumber(r)));return s.compare(q_)===1&&(s=new bt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Kc(e),[r,s]=Qc(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new xo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.pe===0)return;const t=Kc(e),[r,s]=Qc(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ms(W.min(),s,new ie(Q),ut(),Y())}}class yr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yr(r,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class ah{constructor(e,t){this.targetId=e,this.Ce=t}}class ch{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Xc{constructor(){this.Fe=0,this.Me=Yc(),this.xe=ve.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Y(),t=Y(),r=Y();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}}),new yr(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Yc()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ee(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class $_{constructor(e){this.ze=e,this.je=new Map,this.He=ut(),this.Je=qr(),this.Ye=qr(),this.Ze=new ie(Q)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Hi(i))if(r===0){const a=new z(i.path);this.tt(t,a,Re.newNoDocument(a,W.min()))}else ee(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const l=this.ct(e),u=l?this.lt(l,e,a):1;if(u!==0){this.st(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Rt(r).toUint8Array()}catch(u){if(u instanceof Du)return dn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new xo(a,s,i)}catch(u){return dn(u instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&Hi(l.target)){const u=new z(l.target.path);this.Et(u).has(a)||this.dt(a,u)||this.tt(a,u,Re.newNoDocument(u,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let r=Y();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this._t(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new Ms(e,t,this.Ze,this.He,r);return this.He=ut(),this.Je=qr(),this.Ye=qr(),this.Ze=new ie(Q),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Xc,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new he(Q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new he(Q),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Xc),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function qr(){return new ie(z.comparator)}function Yc(){return new ie(z.comparator)}const H_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),G_=(()=>({and:"AND",or:"OR"}))();class K_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gi(n,e){return n.useProto3Json||Ps(e)?e:{value:e}}function ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Q_(n,e){return ys(n,e.toTimestamp())}function Xe(n){return ee(!!n,49232),W.fromTimestamp(function(t){const r=St(t);return new ue(r.seconds,r.nanos)}(n))}function So(n,e){return Ki(n,e).canonicalString()}function Ki(n,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function uh(n){const e=re.fromString(n);return ee(mh(e),10190,{key:e.toString()}),e}function Qi(n,e){return So(n.databaseId,e.path)}function Ii(n,e){const t=uh(e);if(t.get(1)!==n.databaseId.projectId)throw new U(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(dh(t))}function hh(n,e){return So(n.databaseId,e)}function X_(n){const e=uh(n);return e.length===4?re.emptyPath():dh(e)}function Xi(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dh(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jc(n,e,t){return{name:Qi(n,e),fields:t.value.mapValue.fields}}function Y_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(ee(m===void 0||typeof m=="string",58123),ve.fromBase64String(m||"")):(ee(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ve.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?P.UNKNOWN:oh(d.code);return new U(m,d.message||"")}(a);t=new ch(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ii(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):W.min(),l=new De({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new ts(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ii(n,r.document),i=r.readTime?Xe(r.readTime):W.min(),a=Re.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ts([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ii(n,r.document),i=r.removedTargetIds||[];t=new ts([],i,s,null)}else{if(!("filter"in e))return $(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new B_(s,i),l=r.targetId;t=new ah(l,a)}}return t}function J_(n,e){let t;if(e instanceof _r)t={update:Jc(n,e.key,e.value)};else if(e instanceof bo)t={delete:Qi(n,e.key)};else if(e instanceof Ot)t={update:Jc(n,e.key,e.data),updateMask:ay(e.fieldMask)};else{if(!(e instanceof j_))return $(16599,{ft:e.type});t={verify:Qi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof gs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _s)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw $(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Q_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(n,e.precondition)),t}function Z_(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual(W.min())&&(a=Xe(i)),new O_(a,s.transformResults||[])}(t,e))):[]}function ey(n,e){return{documents:[hh(n,e.path)]}}function ty(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hh(n,s);const i=function(d){if(d.length!==0)return ph(Je.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:rn(v.field),direction:sy(v.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Gi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:s}}function ny(n){let e=X_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ee(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(T){const v=fh(T);return v instanceof Je&&$u(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(v=>function(N){return new ms(sn(N.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(T){let v;return v=typeof T=="object"?T.value:T,Ps(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(T){const v=!!T.before,x=T.values||[];return new ps(x,v)}(t.startAt));let d=null;return t.endAt&&(d=function(T){const v=!T.before,x=T.values||[];return new ps(x,v)}(t.endAt)),T_(e,s,a,i,l,"F",u,d)}function ry(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sn(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=sn(t.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sn(t.unaryFilter.field);return le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sn(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(n):n.fieldFilter!==void 0?function(t){return le.create(sn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Je.create(t.compositeFilter.filters.map(r=>fh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(n):$(30097,{filter:n})}function sy(n){return H_[n]}function iy(n){return W_[n]}function oy(n){return G_[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return _e.fromServerFormat(n.fieldPath)}function ph(n){return n instanceof le?function(t){if(t.op==="=="){if(Uc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(jc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(jc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:iy(t.op),value:t.value}}}(n):n instanceof Je?function(t){const r=t.getFilters().map(s=>ph(s));return r.length===1?r[0]:{compositeFilter:{op:oy(t.op),filters:r}}}(n):$(54877,{filter:n})}function ay(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,r,s,i=W.min(),a=W.min(),l=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.wt=e}}function ly(n){const e=ny({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.Cn=new hy}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(xt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class hy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gh=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(gh,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new gn(0)}static lr(){return new gn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="LruGarbageCollector",dy=1048576;function tl([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class fy{constructor(e){this.Er=e,this.buffer=new he(tl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class py{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){L(el,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bn(t)?L(el,"Ignoring IndexedDB error during garbage collection: ",t):await In(t)}await this.mr(3e5)})}}class my{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Cs.le);const r=new fy(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Zc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zc):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(e,s))).next(T=>(r=T,l=Date.now(),this.removeTargets(e,r,t))).next(T=>(i=T,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(d=Date.now(),tn()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${T} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:T})))}}function gy(n,e){return new my(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.changes=new Qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&tr(r.mutation,s,Me.empty(),ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Y()){const s=Bt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Gn();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Y()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=ut();const a=er(),l=function(){return er()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ot)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),tr(m.mutation,d,m.mutation.getFieldMask(),ue.now())):a.set(d.key,Me.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var T;return l.set(d,new yy(m,(T=a.get(d))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(e,t){const r=er();let s=new ie((a,l)=>a-l),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Me.empty();m=l.applyToLocalView(d,m),r.set(u,m);const T=(s.get(l.batchId)||Y()).add(u);s=s.insert(l.batchId,T)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,T=Ju();m.forEach(v=>{if(!i.has(v)){const x=sh(t.get(v),r.get(v));x!==null&&T.set(v,x),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):w_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(Bt());let l=ir,u=i;return a.next(d=>C.forEach(d,(m,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,Y())).next(m=>({batchId:l,changes:Yu(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=Gn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Gn();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,u=>{const d=function(T,v){return new Ns(v,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((T,v)=>{a=a.insert(T,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Re.newInvalidDocument(m)))});let l=Gn();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&tr(m.mutation,d,Me.empty(),ue.now()),Vs(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return C.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:ly(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.overlays=new ie(z.comparator),this.Qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Bt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Bt(),i=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Bt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Bt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return C.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new F_(t,r));let i=this.Qr.get(t);i===void 0&&(i=Y(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.$r=new he(pe.Ur),this.Kr=new he(pe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new pe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new pe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new z(new re([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new z(new re([])),r=new pe(t,e),s=new pe(t,e+1);let i=Y();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new pe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return z.comparator(e.key,t.key)||Q(e.Zr,t.Zr)}static Wr(e,t){return Q(e.Zr,t.Zr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new he(pe.Ur)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new U_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new pe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?_o:this.nr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(Q);return t.forEach(s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const a=new pe(new z(i),0);let l=new he(Q);return this.Xr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Zr)),!0)},a),C.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ee(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(t.mutations,s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new pe(t,0),s=this.Xr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.ii=e,this.docs=function(){return new ie(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=ut();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ut();const a=t.path,l=new z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||e_(Zg(m),r)<=0||(s.has(m.key)||Vs(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$(9500)}si(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ay(this)}getSize(e){return C.resolve(this.size)}}class Ay extends _y{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.persistence=e,this.oi=new Qt(t=>Eo(t),To),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this._i=0,this.ai=new Ro,this.targetCount=0,this.ui=gn.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),C.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new gn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Tr(t),C.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.ci={},this.overlays={},this.li=new Cs(0),this.hi=!1,this.hi=!0,this.Pi=new wy,this.referenceDelegate=e(this),this.Ti=new xy(this),this.indexManager=new uy,this.remoteDocumentCache=function(s){return new by(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new cy(t),this.Ei=new Ey(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ty,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Iy(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new Sy(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Sy extends n_{constructor(e){super(),this.currentSequenceNumber=e}}class Co{constructor(e){this.persistence=e,this.Vi=new Ro,this.mi=null}static fi(e){return new Co(e)}get gi(){if(this.mi)return this.mi;throw $(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const s=z.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return C.or([()=>C.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class vs{constructor(e,t){this.persistence=e,this.yi=new Qt(r=>i_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=gy(this,t)}static fi(e,t){return new vs(e,t)}di(){}Ai(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return C.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jr(e.data.value)),t}Dr(e,t,r){return C.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=Y(),s=Y();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Po(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return cf()?8:r_(Ce())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.bs(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ry;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,a,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(tn()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(tn()<=X.DEBUG&&L("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(tn()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):C.resolve())}ws(e,t){if(qc(t))return C.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Wi(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Y(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.vs(t,l);return this.Cs(t,d,a,u.readTime)?this.ws(e,Wi(t,null,"F")):this.Fs(e,d,t,u)}))})))}bs(e,t,r,s){return qc(t)||s.isEqual(W.min())?C.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(t,i);return this.Cs(t,a,r,s)?C.resolve(null):(tn()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nn(t)),this.Fs(e,a,t,Jg(s,ir)).next(l=>l))})}vs(e,t){let r=new he(Qu(e));return t.forEach((s,i)=>{Vs(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return tn()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",nn(t)),this.ys.getDocumentsMatchingQuery(e,t,xt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="LocalStore",Py=3e8;class ky{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new ie(Q),this.Os=new Qt(i=>Eo(i),To),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vy(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Ny(n,e,t,r){return new ky(n,e,t,r)}async function yh(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=Y();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:l}))})})}function Dy(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const T=d.batch,v=T.keys();let x=C.resolve();return v.forEach(N=>{x=x.next(()=>m.getEntry(u,N)).next(D=>{const R=d.docVersions.get(N);ee(R!==null,48541),D.version.compareTo(R)<0&&(T.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,T))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Y();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function vh(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Vy(n,e){const t=G(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((m,T)=>{const v=s.get(T);if(!v)return;l.push(t.Ti.removeMatchingKeys(i,m.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(i,m.addedDocuments,T)));let x=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(ve.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(m.resumeToken,r)),s=s.insert(T,x),function(D,R,M){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Py?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(v,x,m)&&l.push(t.Ti.updateTargetData(i,x))});let u=ut(),d=Y();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(Oy(i,a,e.documentUpdates).next(m=>{u=m.qs,d=m.Qs})),!r.isEqual(W.min())){const m=t.Ti.getLastRemoteSnapshotVersion(i).next(T=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return C.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.xs=s,i))}function Oy(n,e,t){let r=Y(),s=Y();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ut();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(ko,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{qs:a,Qs:s}})}function Ly(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_o),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function My(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Ti.allocateTargetId(r).next(a=>(s=new Et(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Yi(n,e,t){const r=G(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!bn(a))throw a;L(ko,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function nl(n,e,t){const r=G(n);let s=W.min(),i=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const T=G(u),v=T.Os.get(m);return v!==void 0?C.resolve(T.xs.get(v)):T.Ti.getTargetData(d,m)}(r,a,Qe(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?s:W.min(),t?i:Y())).next(l=>(jy(r,b_(e),l),{documents:l,$s:i})))}function jy(n,e,t){let r=n.Ns.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class rl{constructor(){this.activeTargetIds=P_()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uy{constructor(){this.xo=new rl,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="ConnectivityMonitor";class il{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){L(sl,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){L(sl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r=null;function Ji(){return $r===null?$r=function(){return 268435456+Math.round(2147483648*Math.random())}():$r++,"0x"+$r.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="RestConnection",By={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zy{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===ds?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const a=Ji(),l=this.jo(e,t.toUriEncodedString());L(bi,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,s,i);const{host:d}=new URL(l),m=vn(d);return this.Jo(e,l,u,r,m).then(T=>(L(bi,`Received RPC '${e}' ${a}: `,T),T),T=>{throw dn(bi,`RPC '${e}' ${a} failed with error: `,T,"url: ",l,"request:",r),T})}Yo(e,t,r,s,i,a){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=By[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class $y extends zy{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Ji();return new Promise((l,u)=>{const d=new wu;d.setWithCredentials(!0),d.listenOnce(Iu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Yr.NO_ERROR:const T=d.getResponseJson();L(xe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(T)),l(T);break;case Yr.TIMEOUT:L(xe,`RPC '${e}' ${a} timed out`),u(new U(P.DEADLINE_EXCEEDED,"Request time out"));break;case Yr.HTTP_ERROR:const v=d.getStatus();if(L(xe,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let x=d.getResponseJson();Array.isArray(x)&&(x=x[0]);const N=x==null?void 0:x.error;if(N&&N.status&&N.message){const D=function(M){const j=M.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(N.status);u(new U(D,N.message))}else u(new U(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new U(P.UNAVAILABLE,"Connection failed."));break;default:$(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{L(xe,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);L(xe,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}I_(e,t,r){const s=Ji(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xu(),l=Au(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");L(xe,`Creating RPC '${e}' stream ${s}: ${m}`,u);const T=a.createWebChannel(m,u);this.E_(T);let v=!1,x=!1;const N=new qy({Zo:R=>{x?L(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(v||(L(xe,`Opening RPC '${e}' stream ${s} transport.`),T.open(),v=!0),L(xe,`RPC '${e}' stream ${s} sending:`,R),T.send(R))},Xo:()=>T.close()}),D=(R,M,j)=>{R.listen(M,H=>{try{j(H)}catch(B){setTimeout(()=>{throw B},0)}})};return D(T,Wn.EventType.OPEN,()=>{x||(L(xe,`RPC '${e}' stream ${s} transport opened.`),N.__())}),D(T,Wn.EventType.CLOSE,()=>{x||(x=!0,L(xe,`RPC '${e}' stream ${s} transport closed`),N.u_(),this.d_(T))}),D(T,Wn.EventType.ERROR,R=>{x||(x=!0,dn(xe,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),N.u_(new U(P.UNAVAILABLE,"The operation could not be completed")))}),D(T,Wn.EventType.MESSAGE,R=>{var M;if(!x){const j=R.data[0];ee(!!j,16349);const H=j,B=(H==null?void 0:H.error)||((M=H[0])===null||M===void 0?void 0:M.error);if(B){L(xe,`RPC '${e}' stream ${s} received error:`,B);const k=B.status;let V=function(y){const w=ce[y];if(w!==void 0)return oh(w)}(k),_=B.message;V===void 0&&(V=P.INTERNAL,_="Unknown error status: "+k+" with message "+B.message),x=!0,N.u_(new U(V,_)),T.close()}else L(xe,`RPC '${e}' stream ${s} received:`,j),N.c_(j)}}),D(l,bu.STAT_EVENT,R=>{R.stat===Fi.PROXY?L(xe,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Fi.NOPROXY&&L(xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.a_()},0),N}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Ai(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){return new K_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="PersistentStream";class Th{constructor(e,t,r,s,i,a,l,u){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Eh(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(lt(t.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===t&&this.z_(r,s)},r=>{e(()=>{const s=new U(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return L(ol,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(L(ol,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hy extends Th{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Y_(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?Xe(a.readTime):W.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Xi(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Hi(u)?{documents:ey(i,u)}:{query:ty(i,u).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lh(i,a.resumeToken);const d=Gi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){l.readTime=ys(i,a.snapshotVersion.toTimestamp());const d=Gi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=ry(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Xi(this.serializer),t.removeTarget=e,this.Q_(t)}}class Wy extends Th{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Z_(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Xi(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>J_(this.serializer,r))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{}class Ky extends Gy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new U(P.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Ki(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(P.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,Ki(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(P.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Qy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(lt(t),this.ua=!1):L("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="RemoteStore";class Xy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Xt(this)&&(L(Gt,"Restarting streams for network reachability change."),await async function(u){const d=G(u);d.da.add(4),await vr(d),d.Va.set("Unknown"),d.da.delete(4),await Us(d)}(this))})}),this.Va=new Qy(r,s)}}async function Us(n){if(Xt(n))for(const e of n.Aa)await e(!0)}async function vr(n){for(const e of n.Aa)await e(!1)}function wh(n,e){const t=G(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Oo(t)?Vo(t):An(t).N_()&&Do(t,e))}function No(n,e){const t=G(n),r=An(t);t.Ea.delete(e),r.N_()&&Ih(t,e),t.Ea.size===0&&(r.N_()?r.k_():Xt(t)&&t.Va.set("Unknown"))}function Do(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}An(n).Z_(e)}function Ih(n,e){n.ma.Ke(e),An(n).X_(e)}function Vo(n){n.ma=new $_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),An(n).start(),n.Va.ca()}function Oo(n){return Xt(n)&&!An(n).O_()&&n.Ea.size>0}function Xt(n){return G(n).da.size===0}function bh(n){n.ma=void 0}async function Yy(n){n.Va.set("Online")}async function Jy(n){n.Ea.forEach((e,t)=>{Do(n,e)})}async function Zy(n,e){bh(n),Oo(n)?(n.Va.Pa(e),Vo(n)):n.Va.set("Unknown")}async function ev(n,e,t){if(n.Va.set("Online"),e instanceof ch&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(n,e)}catch(r){L(Gt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Es(n,r)}else if(e instanceof ts?n.ma.Xe(e):e instanceof ah?n.ma.ot(e):n.ma.nt(e),!t.isEqual(W.min()))try{const r=await vh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.ma.It(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ea.get(d);m&&i.Ea.set(d,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const m=i.Ea.get(u);if(!m)return;i.Ea.set(u,m.withResumeToken(ve.EMPTY_BYTE_STRING,m.snapshotVersion)),Ih(i,u);const T=new Et(m.target,u,d,m.sequenceNumber);Do(i,T)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){L(Gt,"Failed to raise snapshot:",r),await Es(n,r)}}async function Es(n,e,t){if(!bn(e))throw e;n.da.add(1),await vr(n),n.Va.set("Offline"),t||(t=()=>vh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(Gt,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Us(n)})}function Ah(n,e){return e().catch(t=>Es(n,t,e))}async function Fs(n){const e=G(n),t=Pt(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:_o;for(;tv(e);)try{const s=await Ly(e.localStore,r);if(s===null){e.Ia.length===0&&t.k_();break}r=s.batchId,nv(e,s)}catch(s){await Es(e,s)}xh(e)&&Sh(e)}function tv(n){return Xt(n)&&n.Ia.length<10}function nv(n,e){n.Ia.push(e);const t=Pt(n);t.N_()&&t.ea&&t.ta(e.mutations)}function xh(n){return Xt(n)&&!Pt(n).O_()&&n.Ia.length>0}function Sh(n){Pt(n).start()}async function rv(n){Pt(n).ia()}async function sv(n){const e=Pt(n);for(const t of n.Ia)e.ta(t.mutations)}async function iv(n,e,t){const r=n.Ia.shift(),s=Ao.from(r,e,t);await Ah(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fs(n)}async function ov(n,e){e&&Pt(n).ea&&await async function(r,s){if(function(a){return z_(a)&&a!==P.ABORTED}(s.code)){const i=r.Ia.shift();Pt(r).L_(),await Ah(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fs(r)}}(n,e),xh(n)&&Sh(n)}async function al(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L(Gt,"RemoteStore received new credentials");const r=Xt(t);t.da.add(3),await vr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Us(t)}async function av(n,e){const t=G(n);e?(t.da.delete(2),await Us(t)):e||(t.da.add(2),await vr(t),t.Va.set("Unknown"))}function An(n){return n.fa||(n.fa=function(t,r,s){const i=G(t);return i.oa(),new Hy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:Yy.bind(null,n),n_:Jy.bind(null,n),i_:Zy.bind(null,n),Y_:ev.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Oo(n)?Vo(n):n.Va.set("Unknown")):(await n.fa.stop(),bh(n))})),n.fa}function Pt(n){return n.ga||(n.ga=function(t,r,s){const i=G(t);return i.oa(),new Wy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:rv.bind(null,n),i_:ov.bind(null,n),na:sv.bind(null,n),ra:iv.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Fs(n)):(await n.ga.stop(),n.Ia.length>0&&(L(Gt,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Lo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mo(n,e){if(lt("AsyncQueue",`${e}: ${n}`),bn(n))return new U(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{static emptySet(e){return new un(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=Gn(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new un;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.pa=new ie(z.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):$(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class _n{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new _n(e,t,un.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class lv{constructor(){this.queries=ll(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=ll(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new U(P.ABORTED,"Firestore shutting down"))}}function ll(){return new Qt(n=>Ku(n),Ds)}async function Rh(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new cv,r=e.va()?0:1);try{switch(r){case 0:i.ba=await t.onListen(s,!0);break;case 1:i.ba=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Mo(a,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.Fa(t.onlineState),i.ba&&e.Ma(i.ba)&&jo(t)}async function Ch(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uv(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&jo(t)}function hv(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function jo(n){n.Ca.forEach(e=>{e.next()})}var Zi,ul;(ul=Zi||(Zi={})).xa="default",ul.Cache="cache";class Ph{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Zi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.key=e}}class Nh{constructor(e){this.key=e}}class dv{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.Za=Qu(e),this.Xa=new un(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new cl,s=t?t.Xa:this.Xa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,T)=>{const v=s.get(m),x=Vs(this.query,T)?T:null,N=!!v&&this.mutatedKeys.has(v.key),D=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let R=!1;v&&x?v.data.isEqual(x.data)?N!==D&&(r.track({type:3,doc:x}),R=!0):this.ru(v,x)||(r.track({type:2,doc:x}),R=!0,(u&&this.Za(x,u)>0||d&&this.Za(x,d)<0)&&(l=!0)):!v&&x?(r.track({type:0,doc:x}),R=!0):v&&!x&&(r.track({type:1,doc:v}),R=!0,(u||d)&&(l=!0)),R&&(x?(a=a.add(x),i=D?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:l,mutatedKeys:i}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((m,T)=>function(x,N){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Vt:R})}};return D(x)-D(N)}(m.type,T.type)||this.Za(m.doc,T.doc)),this.iu(r),s=s!=null&&s;const l=t&&!s?this.su():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Ja;return this.Ja=u,a.length!==0||d?{snapshot:new _n(this.query,e.Xa,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new cl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Y(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Nh(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new kh(r))}),t}au(e){this.Ha=e.$s,this.Ya=Y();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return _n.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Uo="SyncEngine";class fv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pv{constructor(e){this.key=e,this.cu=!1}}class mv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Qt(l=>Ku(l),Ds),this.Pu=new Map,this.Tu=new Set,this.Iu=new ie(z.comparator),this.Eu=new Map,this.du=new Ro,this.Au={},this.Ru=new Map,this.Vu=gn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function gv(n,e,t=!0){const r=jh(n);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Dh(r,e,t,!0),s}async function _v(n,e){const t=jh(n);await Dh(t,e,!0,!1)}async function Dh(n,e,t,r){const s=await My(n.localStore,Qe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await yv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&wh(n.remoteStore,s),l}async function yv(n,e,t,r,s){n.fu=(T,v,x)=>async function(D,R,M,j){let H=R.view.tu(M);H.Cs&&(H=await nl(D.localStore,R.query,!1).then(({documents:_})=>R.view.tu(_,H)));const B=j&&j.targetChanges.get(R.targetId),k=j&&j.targetMismatches.get(R.targetId)!=null,V=R.view.applyChanges(H,D.isPrimaryClient,B,k);return dl(D,R.targetId,V.ou),V.snapshot}(n,T,v,x);const i=await nl(n.localStore,e,!0),a=new dv(e,i.$s),l=a.tu(i.documents),u=yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);dl(n,t,d.ou);const m=new fv(e,t,a);return n.hu.set(e,m),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),d.snapshot}async function vv(n,e,t){const r=G(n),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(a=>!Ds(a,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&No(r.remoteStore,s.targetId),eo(r,s.targetId)}).catch(In)):(eo(r,s.targetId),await Yi(r.localStore,s.targetId,!0))}async function Ev(n,e){const t=G(n),r=t.hu.get(e),s=t.Pu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),No(t.remoteStore,r.targetId))}async function Tv(n,e,t){const r=Rv(n);try{const s=await function(a,l){const u=G(a),d=ue.now(),m=l.reduce((x,N)=>x.add(N.key),Y());let T,v;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let N=ut(),D=Y();return u.Bs.getEntries(x,m).next(R=>{N=R,N.forEach((M,j)=>{j.isValidDocument()||(D=D.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,N)).next(R=>{T=R;const M=[];for(const j of l){const H=M_(j,T.get(j.key).overlayedDocument);H!=null&&M.push(new Ot(j.key,H,Bu(H.value.mapValue),qe.exists(!0)))}return u.mutationQueue.addMutationBatch(x,d,M,l)}).next(R=>{v=R;const M=R.applyToLocalDocumentSet(T,D);return u.documentOverlayCache.saveOverlays(x,R.batchId,M)})}).then(()=>({batchId:v.batchId,changes:Yu(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.Au[a.currentUser.toKey()];d||(d=new ie(Q)),d=d.insert(l,u),a.Au[a.currentUser.toKey()]=d}(r,s.batchId,t),await Er(r,s.changes),await Fs(r.remoteStore)}catch(s){const i=Mo(s,"Failed to persist write");t.reject(i)}}async function Vh(n,e){const t=G(n);try{const r=await Vy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?ee(a.cu,14607):s.removedDocuments.size>0&&(ee(a.cu,42227),a.cu=!1))}),await Er(t,r,e)}catch(r){await In(r)}}function hl(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hu.forEach((i,a)=>{const l=a.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let d=!1;u.queries.forEach((m,T)=>{for(const v of T.Sa)v.Fa(l)&&(d=!0)}),d&&jo(u)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wv(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ie(z.comparator);a=a.insert(i,Re.newNoDocument(i,W.min()));const l=Y().add(i),u=new Ms(W.min(),new Map,new ie(Q),a,l);await Vh(r,u),r.Iu=r.Iu.remove(i),r.Eu.delete(e),Fo(r)}else await Yi(r.localStore,e,!1).then(()=>eo(r,e,t)).catch(In)}async function Iv(n,e){const t=G(n),r=e.batch.batchId;try{const s=await Dy(t.localStore,e);Lh(t,r,null),Oh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Er(t,s)}catch(s){await In(s)}}async function bv(n,e,t){const r=G(n);try{const s=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(T=>(ee(T!==null,37113),m=T.keys(),u.mutationQueue.removeMutationBatch(d,T))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Lh(r,e,t),Oh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Er(r,s)}catch(s){await In(s)}}function Oh(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function Lh(n,e,t){const r=G(n);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function eo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||Mh(n,r)})}function Mh(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(No(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Fo(n))}function dl(n,e,t){for(const r of t)r instanceof kh?(n.du.addReference(r.key,e),Av(n,r)):r instanceof Nh?(L(Uo,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||Mh(n,r.key)):$(19791,{pu:r})}function Av(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(L(Uo,"New document in limbo: "+t),n.Tu.add(r),Fo(n))}function Fo(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new z(re.fromString(e)),r=n.Vu.next();n.Eu.set(r,new pv(t)),n.Iu=n.Iu.insert(t,r),wh(n.remoteStore,new Et(Qe(wo(t.path)),r,"TargetPurposeLimboResolution",Cs.le))}}async function Er(n,e,t){const r=G(n),s=[],i=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,u)=>{a.push(r.fu(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Po.Rs(u.targetId,d);i.push(T)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(u,d){const m=G(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,v=>C.forEach(v.ds,x=>m.persistence.referenceDelegate.addReference(T,v.targetId,x)).next(()=>C.forEach(v.As,x=>m.persistence.referenceDelegate.removeReference(T,v.targetId,x)))))}catch(T){if(!bn(T))throw T;L(ko,"Failed to update sequence numbers: "+T)}for(const T of d){const v=T.targetId;if(!T.fromCache){const x=m.xs.get(v),N=x.snapshotVersion,D=x.withLastLimboFreeSnapshotVersion(N);m.xs=m.xs.insert(v,D)}}}(r.localStore,i))}async function xv(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L(Uo,"User change. New user:",e.toKey());const r=await yh(t.localStore,e);t.currentUser=e,function(i,a){i.Ru.forEach(l=>{l.forEach(u=>{u.reject(new U(P.CANCELLED,a))})}),i.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Er(t,r.ks)}}function Sv(n,e){const t=G(n),r=t.Eu.get(e);if(r&&r.cu)return Y().add(r.key);{let s=Y();const i=t.Pu.get(e);if(!i)return s;for(const a of i){const l=t.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function jh(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wv.bind(null,e),e.lu.Y_=uv.bind(null,e.eventManager),e.lu.gu=hv.bind(null,e.eventManager),e}function Rv(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Iv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bv.bind(null,e),e}class Ts{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=js(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return Ny(this.persistence,new Cy,e.initialUser,this.serializer)}Su(e){return new _h(Co.fi,this.serializer)}bu(e){return new Uy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ts.provider={build:()=>new Ts};class Cv extends Ts{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ee(this.persistence.referenceDelegate instanceof vs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new py(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new _h(r=>vs.fi(r,t),this.serializer)}}class to{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xv.bind(null,this.syncEngine),await av(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lv}()}createDatastore(e){const t=js(e.databaseInfo.databaseId),r=function(i){return new $y(i)}(e.databaseInfo);return function(i,a,l,u){return new Ky(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Xy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>hl(this.syncEngine,t,0),function(){return il.C()?new il:new Fy}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,m){const T=new mv(s,i,a,l,u,d);return m&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);L(Gt,"RemoteStore shutting down."),i.da.add(5),await vr(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}to.provider={build:()=>new to};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="FirestoreClient";class Pv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=Pu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(kt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(kt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Mo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xi(n,e){n.asyncQueue.verifyOperationInProgress(),L(kt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kv(n);L(kt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>al(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>al(e.remoteStore,s)),n._onlineComponents=e}async function kv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(kt,"Using user provided OfflineComponentProvider");try{await xi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await xi(n,new Ts)}}else L(kt,"Using default OfflineComponentProvider"),await xi(n,new Cv(void 0));return n._offlineComponents}async function Fh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(kt,"Using user provided OnlineComponentProvider"),await fl(n,n._uninitializedComponentsProvider._online)):(L(kt,"Using default OnlineComponentProvider"),await fl(n,new to))),n._onlineComponents}function Nv(n){return Fh(n).then(e=>e.syncEngine)}async function Bh(n){const e=await Fh(n),t=e.eventManager;return t.onListen=gv.bind(null,e.syncEngine),t.onUnlisten=vv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_v.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ev.bind(null,e.syncEngine),t}function Dv(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new Uh({next:v=>{m.xu(),a.enqueueAndForget(()=>Ch(i,T));const x=v.docs.has(l);!x&&v.fromCache?d.reject(new U(P.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&v.fromCache&&u&&u.source==="server"?d.reject(new U(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),T=new Ph(wo(l.path),m,{includeMetadataChanges:!0,Qa:!0});return Rh(i,T)}(await Bh(n),n.asyncQueue,e,t,r)),r.promise}function Vv(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new Uh({next:v=>{m.xu(),a.enqueueAndForget(()=>Ch(i,T)),v.fromCache&&u.source==="server"?d.reject(new U(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),T=new Ph(l,m,{includeMetadataChanges:!0,Qa:!0});return Rh(i,T)}(await Bh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e,t){if(!t)throw new U(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ov(n,e,t,r){if(e===!0&&r===!0)throw new U(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ml(n){if(!z.isDocumentKey(n))throw new U(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gl(n){if(z.isDocumentKey(n))throw new U(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bo(n);throw new U(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="firestore.googleapis.com",_l=!0;class yl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$h,this.ssl=_l}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:_l;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dy)throw new U(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ov("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qg;switch(r.type){case"firstParty":return new Gg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pl.get(t);r&&(L("ComponentProvider","Removing Datastore"),pl.delete(t),r.terminate())}(this),Promise.resolve()}}function Lv(n,e,t,r={}){var s;n=Ze(n,Bs);const i=vn(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Dl(`https://${u}`),Vl("Firestore",!0)),a.host!==$h&&a.host!==u&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!zt(d,l)&&(n._setSettings(d),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=Se.MOCK_USER;else{m=Jd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new U(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Se(v)}n._authCredentials=new $g(new Ru(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class At extends zs{constructor(e,t,r){super(e,t,wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new z(e))}withConverter(e){return new At(this.firestore,e,this._path)}}function Hr(n,e,...t){if(n=ye(n),qh("collection","path",e),n instanceof Bs){const r=re.fromString(e,...t);return gl(r),new At(n,null,r)}{if(!(n instanceof Ve||n instanceof At))throw new U(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return gl(r),new At(n.firestore,null,r)}}function qn(n,e,...t){if(n=ye(n),arguments.length===1&&(e=Pu.newId()),qh("doc","path",e),n instanceof Bs){const r=re.fromString(e,...t);return ml(r),new Ve(n,null,new z(r))}{if(!(n instanceof Ve||n instanceof At))throw new U(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return ml(r),new Ve(n.firestore,n instanceof At?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="AsyncQueue";class El{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Eh(this,"async_queue_retry"),this.rc=()=>{const r=Ai();r&&L(vl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Ai();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new ot;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!bn(e))throw e;L(vl,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,lt("INTERNAL UNHANDLED ERROR: ",Tl(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const s=Lo.createAndSchedule(this,e,t,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&$(47125,{cc:Tl(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Tl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class xn extends Bs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new El,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new El(e),this._firestoreClient=void 0,await e}}}function Mv(n,e){const t=typeof n=="object"?n:jl(),r=typeof n=="string"?n:e||ds,s=io(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xd("firestore");i&&Lv(s,...i)}return s}function zo(n){if(n._terminated)throw new U(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jv(n),n._firestoreClient}function jv(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,d,m){return new c_(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,zh(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Pv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(ve.fromBase64String(e))}catch(t){throw new U(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=/^__.*__$/;class Fv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}class Hh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ic:n})}}class Wo{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Wo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return ws(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Wh(this.Ic)&&Uv.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class Bv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||js(e)}bc(e,t,r,s=!1){return new Wo({Ic:e,methodName:t,wc:r,path:_e.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gh(n){const e=n._freezeSettings(),t=js(n._databaseId);return new Bv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zv(n,e,t,r,s,i={}){const a=n.bc(i.merge||i.mergeFields?2:0,e,t,s);Go("Data must be an object, but it was:",a,r);const l=Kh(r,a);let u,d;if(i.merge)u=new Me(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const T of i.mergeFields){const v=no(e,T,t);if(!a.contains(v))throw new U(P.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Xh(m,v)||m.push(v)}u=new Me(m),d=a.fieldTransforms.filter(T=>u.covers(T.field))}else u=null,d=a.fieldTransforms;return new Fv(new De(l),u,d)}class $s extends qo{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $s}}function qv(n,e,t,r){const s=n.bc(1,e,t);Go("Data must be an object, but it was:",s,r);const i=[],a=De.empty();Vt(r,(u,d)=>{const m=Ko(e,u,t);d=ye(d);const T=s.mc(m);if(d instanceof $s)i.push(m);else{const v=Hs(d,T);v!=null&&(i.push(m),a.set(m,v))}});const l=new Me(i);return new Hh(a,l,s.fieldTransforms)}function $v(n,e,t,r,s,i){const a=n.bc(1,e,t),l=[no(e,r,t)],u=[s];if(i.length%2!=0)throw new U(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(no(e,i[v])),u.push(i[v+1]);const d=[],m=De.empty();for(let v=l.length-1;v>=0;--v)if(!Xh(d,l[v])){const x=l[v];let N=u[v];N=ye(N);const D=a.mc(x);if(N instanceof $s)d.push(x);else{const R=Hs(N,D);R!=null&&(d.push(x),m.set(x,R))}}const T=new Me(d);return new Hh(m,T,a.fieldTransforms)}function Hs(n,e){if(Qh(n=ye(n)))return Go("Unsupported field value:",e,n),Kh(n,e);if(n instanceof qo)return function(r,s){if(!Wh(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Hs(l,s.fc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return k_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ue.fromDate(r);return{timestampValue:ys(s.serializer,i)}}if(r instanceof ue){const i=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(s.serializer,i)}}if(r instanceof $o)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:lh(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:So(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ho)return function(a,l){return{mapValue:{fields:{[ju]:{stringValue:Fu},[fs]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.gc("VectorValues must only contain numeric values.");return Io(l.serializer,d)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${Bo(r)}`)}(n,e)}function Kh(n,e){const t={};return Nu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vt(n,(r,s)=>{const i=Hs(s,e.Ac(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Qh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof $o||n instanceof yn||n instanceof Ve||n instanceof qo||n instanceof Ho)}function Go(n,e,t){if(!Qh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Bo(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function no(n,e,t){if((e=ye(e))instanceof qs)return e._internalPath;if(typeof e=="string")return Ko(n,e);throw ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hv=new RegExp("[~\\*/\\[\\]]");function Ko(n,e,t){if(e.search(Hv)>=0)throw ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qs(...e.split("."))._internalPath}catch{throw ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ws(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(P.INVALID_ARGUMENT,l+n+u)}function Xh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Wv extends Yh{data(){return super.data()}}function Jh(n,e){return typeof e=="string"?Ko(n,e):e instanceof qs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kv{convertValue(e,t="none"){switch(Ct(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Vt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[fs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ae(a.doubleValue));return new Ho(i)}convertGeoPoint(e){return new $o(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ks(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=St(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);ee(mh(r),9688,{name:e});const s=new ar(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||lt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zh extends Yh{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ns extends Zh{data(e={}){return super.data(e)}}class Xv{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ns(this._firestore,this._userDataWriter,r.key,r,new Qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Yv(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Yv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){n=Ze(n,Ve);const e=Ze(n.firestore,xn);return Dv(zo(e),n._key).then(t=>eE(e,n,t))}class ed extends Kv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function Wr(n){n=Ze(n,zs);const e=Ze(n.firestore,xn),t=zo(e),r=new ed(e);return Gv(n._query),Vv(t,n._query).then(s=>new Xv(e,r,n,s))}function Il(n,e,t){n=Ze(n,Ve);const r=Ze(n.firestore,xn),s=Qv(n.converter,e,t);return Qo(r,[zv(Gh(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qe.none())])}function Jv(n,e,t,...r){n=Ze(n,Ve);const s=Ze(n.firestore,xn),i=Gh(s);let a;return a=typeof(e=ye(e))=="string"||e instanceof qs?$v(i,"updateDoc",n._key,e,t,r):qv(i,"updateDoc",n._key,e),Qo(s,[a.toMutation(n._key,qe.exists(!0))])}function Zv(n){return Qo(Ze(n.firestore,xn),[new bo(n._key,qe.none())])}function Qo(n,e){return function(r,s){const i=new ot;return r.asyncQueue.enqueueAndForget(async()=>Tv(await Nv(r),s,i)),i.promise}(zo(n),e)}function eE(n,e,t){const r=t.docs.get(e._key),s=new ed(n);return new Zh(n,s,e._key,r,new Qn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){wn=s})(En),hn(new qt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new xn(new Hg(r.getProvider("auth-internal")),new Kg(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new U(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),It(xc,Sc,e),It(xc,Sc,"esm2017")})();const tE={apiKey:"AIzaSyBPfo4YVc6PFgVyhrE3GZjJI0mFulpBKDc",authDomain:"itgamifikace.firebaseapp.com",projectId:"itgamifikace",storageBucket:"itgamifikace.appspot.com",messagingSenderId:"693204035422",appId:"1:693204035422:web:73a27dc87d8c3d30f7d1cf",measurementId:"G-ENKMC867HX"},td=Ml(tE),Is=Ug(td),nt=Mv(td),se={async getStudentData(n){try{const e=qn(nt,"students",n),t=await wl(e);if(t.exists())return t.data();{const r={id:n,name:"Student",avatar:{hair:"brown",skinColor:"light",shirtColor:"blue",eyes:"brown"},xp:0,badges:[],snakeScore:0,spaceScore:0,stars:0,lastActive:new Date().toISOString(),dailyQuestsCompleted:[],totalQuestsCompleted:0};return await Il(e,r),r}}catch(e){return console.error("Error getting student data:",e),null}},async updateStudentData(n,e){try{const t=qn(nt,"students",n);return await Jv(t,{...e,lastActive:new Date().toISOString()}),!0}catch(t){return console.error("Error updating student data:",t),!1}},async getBadges(){try{return(await Wr(Hr(nt,"badges"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting badges:",n),[]}},async getTopics(){try{return(await Wr(Hr(nt,"topics"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting topics:",n),[]}},async getDailyQuests(){try{return(await Wr(Hr(nt,"dailyQuests"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting daily quests:",n),[]}},async getAllStudents(){try{return(await Wr(Hr(nt,"students"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting all students:",n),[]}},async updateLeaderboard(n,e){try{const t=qn(nt,"leaderboards",n);return await Il(t,{scores:e},{merge:!0}),!0}catch(t){return console.error("Error updating leaderboard:",t),!1}},async getLeaderboard(n){try{const e=qn(nt,"leaderboards",n),t=await wl(e);if(t.exists()){const r=t.data().scores;return Array.isArray(r)?r:[]}return[]}catch(e){return console.error("Error getting leaderboard:",e),[]}},async deleteStudent(n){try{const e=qn(nt,"students",n);return await Zv(e),!0}catch(e){return console.error("Error deleting student:",e),!1}}},nE=({onLogin:n})=>{const[e,t]=K.useState(""),[r,s]=K.useState(""),[i,a]=K.useState(!1),[l,u]=K.useState(""),[d,m]=K.useState(!1),T=async v=>{v.preventDefault(),u(""),m(!0);try{if(i){const x=await Im(Is,e,r);n({uid:x.user.uid,email:x.user.email||""})}else{const x=await bm(Is,e,r);n({uid:x.user.uid,email:x.user.email||""})}}catch(x){u(x.message)}finally{m(!1)}};return f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan",children:f.jsxs("div",{className:"arcade-card p-8 max-w-md w-full mx-4",children:[f.jsx("h1",{className:"text-3xl font-arcade text-center mb-8 text-arcade-purple",children:"🎮 Gamifikace Informatika"}),f.jsxs("form",{onSubmit:T,className:"space-y-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"E-mail:"}),f.jsx("input",{type:"email",value:e,onChange:v=>t(v.target.value),className:"w-full px-4 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none",placeholder:"Zadej svůj e-mail",required:!0})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Heslo:"}),f.jsx("input",{type:"password",value:r,onChange:v=>s(v.target.value),className:"w-full px-4 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none",placeholder:"Zadej heslo",required:!0})]}),l&&f.jsx("div",{className:"text-red-600 text-xs font-arcade",children:l}),f.jsx("button",{type:"submit",className:"w-full arcade-button text-lg py-3",disabled:d,children:i?"📝 Registrovat":"🔑 Přihlásit"})]}),f.jsx("div",{className:"mt-6 text-center",children:f.jsx("button",{className:"text-xs font-arcade text-arcade-neon-blue underline",onClick:()=>a(v=>!v),children:i?"Už mám účet – přihlásit":"Nemám účet – registrace"})})]})})},rE=({badges:n,unlockedBadges:e})=>f.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:n.map(t=>{const r=e.includes(t.id);return f.jsxs("div",{className:`arcade-card p-4 text-center transition-all duration-300 ${r?"badge-unlocked border-arcade-neon-green":"badge-locked border-arcade-gray"}`,children:[f.jsx("div",{className:"text-4xl mb-2",children:t.icon}),f.jsx("h3",{className:"text-sm font-arcade text-arcade-dark mb-1",children:t.name}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray mb-2",children:t.description}),f.jsx("div",{className:"text-xs font-arcade",children:r?f.jsx("span",{className:"text-arcade-green",children:"✅ Odemčeno"}):f.jsx("span",{className:"text-arcade-gray",children:"🔒 Zamčeno"})}),r&&f.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow mt-1",children:["+",t.xpReward," XP"]})]},t.id)})}),sE=({topics:n,onCompleteTopic:e})=>f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(t=>f.jsxs("div",{className:`arcade-card p-4 transition-all duration-300 ${t.completed?"border-arcade-neon-green animate-pulse-neon":"border-arcade-gray hover:border-arcade-neon-blue"}`,children:[f.jsxs("div",{className:"flex items-center mb-3",children:[f.jsx("div",{className:"text-3xl mr-3",children:t.icon}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:t.name}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:t.description})]})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow",children:["+",t.xpReward," XP"]}),f.jsx("div",{className:"text-xs font-arcade",children:t.completed?f.jsx("span",{className:"text-arcade-green",children:"✅ Splněno"}):f.jsx("span",{className:"text-arcade-gray",children:"🔒 Zamčeno"})})]}),!t.completed&&f.jsx("button",{onClick:()=>e(t.id),className:"w-full mt-3 arcade-button text-xs py-2",children:"🎯 Splnit úkol"})]},t.id))}),iE=({onPlaySnake:n,onPlaySpace:e,snakeScore:t,spaceScore:r,snakeLeaderboard:s,spaceLeaderboard:i})=>f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{className:"arcade-card p-4",children:[f.jsxs("div",{className:"flex items-center mb-3",children:[f.jsx("div",{className:"text-3xl mr-3",children:"🐍"}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Hra Snake"}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Dosáhni 20+ bodů pro odznak "Hadí mistr"'})]})]}),f.jsxs("div",{className:"mb-3",children:[f.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow",children:["Tvůj nejlepší skóre: ",t]}),t>=20&&f.jsx("div",{className:"text-xs font-arcade text-arcade-green mt-1",children:'🎉 Odznak "Hadí mistr" odemčen!'})]}),f.jsx("button",{onClick:n,className:"w-full arcade-button text-xs py-2",children:"🎮 Spustit hru"})]}),f.jsxs("div",{className:"arcade-card p-4",children:[f.jsxs("div",{className:"flex items-center mb-3",children:[f.jsx("div",{className:"text-3xl mr-3",children:"🚀"}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Space Shooter"}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Znič 10+ asteroidů pro odznak "Vesmírný obránce"'})]})]}),f.jsxs("div",{className:"mb-3",children:[f.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow",children:["Tvůj nejlepší skóre: ",r]}),r>=100&&f.jsx("div",{className:"text-xs font-arcade text-arcade-green mt-1",children:'🎉 Odznak "Vesmírný obránce" odemčen!'})]}),f.jsx("button",{onClick:e,className:"w-full arcade-button text-xs py-2",children:"🚀 Spustit hru"})]}),f.jsxs("div",{className:"arcade-card p-4",children:[f.jsxs("div",{className:"flex items-center mb-3",children:[f.jsx("div",{className:"text-3xl mr-3",children:"⭐"}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Speciální úkol"}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Zadej kód: snakepro20"})]})]}),f.jsx("div",{className:"text-xs font-arcade text-arcade-gray mb-3",children:'Pro odemčení odznaku "Hadí mistr"'}),f.jsx("div",{className:"text-xs font-arcade text-arcade-yellow",children:"+150 XP za splnění"})]}),f.jsxs("div",{className:"arcade-card p-4",children:[f.jsxs("div",{className:"flex items-center mb-3",children:[f.jsx("div",{className:"text-3xl mr-3",children:"🧠"}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Kvízový šampion"}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Splň 10 denních výzev"})]})]}),f.jsx("div",{className:"text-xs font-arcade text-arcade-gray mb-3",children:'Pro odznak "Kvízový šampion"'}),f.jsx("div",{className:"text-xs font-arcade text-arcade-yellow",children:"+80 XP za splnění"})]}),f.jsxs("div",{className:"arcade-card p-4",children:[f.jsx("h4",{className:"text-sm font-arcade text-arcade-purple mb-3",children:"🏆 Top 5 ve hře Snake"}),f.jsx("div",{className:"space-y-2",children:s.sort((a,l)=>l.score-a.score).slice(0,5).map((a,l)=>f.jsxs("div",{className:"flex items-center justify-between p-2 bg-arcade-light-gray rounded",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsxs("span",{className:"text-xs font-arcade text-arcade-yellow mr-2",children:["#",l+1]}),f.jsx("span",{className:"text-xs font-arcade text-arcade-dark",children:a.name})]}),f.jsxs("span",{className:"text-xs font-arcade text-arcade-green",children:[a.score," bodů"]})]},l))})]}),f.jsxs("div",{className:"arcade-card p-4",children:[f.jsx("h4",{className:"text-sm font-arcade text-arcade-purple mb-3",children:"🏆 Top 5 ve Space Shooter"}),f.jsx("div",{className:"space-y-2",children:i.sort((a,l)=>l.score-a.score).slice(0,5).map((a,l)=>f.jsxs("div",{className:"flex items-center justify-between p-2 bg-arcade-light-gray rounded",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsxs("span",{className:"text-xs font-arcade text-arcade-yellow mr-2",children:["#",l+1]}),f.jsx("span",{className:"text-xs font-arcade text-arcade-dark",children:a.name})]}),f.jsxs("span",{className:"text-xs font-arcade text-arcade-cyan",children:[a.score," bodů"]})]},l))})]})]}),oE=({students:n,currentUser:e})=>{const t=[...n].sort((r,s)=>s.xp-r.xp);return f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"border-b-2 border-arcade-neon-green",children:[f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Pozice"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Jméno"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"XP"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Odznaky"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Snake"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Space"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Výzvy"}),f.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Hvězdy"})]})}),f.jsx("tbody",{children:t.map((r,s)=>f.jsxs("tr",{className:`border-b border-arcade-light-gray ${r.name===e?"bg-arcade-yellow bg-opacity-20":""}`,children:[f.jsx("td",{className:"p-2",children:f.jsxs("div",{className:"flex items-center",children:[s===0&&f.jsx("span",{className:"text-lg mr-1",children:"👑"}),f.jsxs("span",{className:"text-xs font-arcade text-arcade-dark",children:["#",s+1]})]})}),f.jsx("td",{className:"p-2",children:f.jsxs("span",{className:"text-xs font-arcade text-arcade-dark",children:[r.name,r.name===e&&" (Ty)"]})}),f.jsx("td",{className:"p-2",children:f.jsx("span",{className:"text-xs font-arcade text-arcade-yellow",children:r.xp})}),f.jsx("td",{className:"p-2",children:f.jsx("span",{className:"text-xs font-arcade text-arcade-green",children:r.badges.length})}),f.jsx("td",{className:"p-2",children:f.jsx("span",{className:"text-xs font-arcade text-arcade-cyan",children:r.snakeScore})}),f.jsx("td",{className:"p-2",children:f.jsx("span",{className:"text-xs font-arcade text-arcade-neon-pink",children:r.spaceScore})}),f.jsx("td",{className:"p-2",children:f.jsx("span",{className:"text-xs font-arcade text-arcade-purple",children:r.totalQuestsCompleted})}),f.jsx("td",{className:"p-2",children:f.jsx("div",{className:"flex",children:[...Array(5)].map((i,a)=>f.jsx("span",{className:`text-xs ${a<r.stars?"text-arcade-yellow":"text-arcade-gray"}`,children:"⭐"},a))})})]},r.id))})]})})},aE=({onClose:n,onScoreUpdate:e,currentScore:t})=>{const[r,s]=K.useState([[10,10]]),[i,a]=K.useState([5,5]),[l,u]=K.useState("RIGHT"),[d,m]=K.useState(0),[T,v]=K.useState(!1),[x,N]=K.useState(!1),D=20,R=150,M=K.useCallback(()=>{const k=[Math.floor(Math.random()*D),Math.floor(Math.random()*D)];a(k)},[]),j=()=>{s([[10,10]]),u("RIGHT"),m(0),v(!1),N(!1),M()},H=K.useCallback(()=>{T||!x||s(k=>{const V=[...k],_=[...V[0]];switch(l){case"UP":_[1]-=1;break;case"DOWN":_[1]+=1;break;case"LEFT":_[0]-=1;break;case"RIGHT":_[0]+=1;break}return _[0]<0||_[0]>=D||_[1]<0||_[1]>=D||V.some(g=>g[0]===_[0]&&g[1]===_[1])?(v(!0),d>t&&e(d),k):(V.unshift(_),_[0]===i[0]&&_[1]===i[1]?(m(g=>g+1),M()):V.pop(),V)})},[l,T,x,i,d,t,e,M]);K.useEffect(()=>{const k=V=>{if(!x){N(!0);return}switch(V.key){case"ArrowUp":u(_=>_!=="DOWN"?"UP":_);break;case"ArrowDown":u(_=>_!=="UP"?"DOWN":_);break;case"ArrowLeft":u(_=>_!=="RIGHT"?"LEFT":_);break;case"ArrowRight":u(_=>_!=="LEFT"?"RIGHT":_);break}};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[x]),K.useEffect(()=>{const k=setInterval(H,R);return()=>clearInterval(k)},[H]);const B=(k,V)=>{const _=r[0][0]===k&&r[0][1]===V,g=r.slice(1).some(I=>I[0]===k&&I[1]===V),y=i[0]===k&&i[1]===V;let w="snake-cell border border-arcade-dark";return _?w+=" snake-head":g?w+=" snake-body":y&&(w+=" snake-food"),f.jsx("div",{className:w},`${k}-${V}`)};return f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:f.jsxs("div",{className:"arcade-card p-6 max-w-2xl w-full",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple",children:"🐍 Snake Game"}),f.jsx("button",{onClick:n,className:"arcade-button text-xs",children:"❌ Zavřít"})]}),f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsxs("div",{className:"text-sm font-arcade text-arcade-yellow",children:["Skóre: ",d]}),f.jsxs("div",{className:"text-sm font-arcade text-arcade-green",children:["Nejlepší: ",Math.max(d,t)]})]}),!x&&!T&&f.jsxs("div",{className:"text-center mb-4",children:[f.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:"Použij šipky pro pohyb"}),f.jsx("button",{onClick:()=>N(!0),className:"arcade-button",children:"🎮 Začít hru"})]}),T&&f.jsxs("div",{className:"text-center mb-4",children:[f.jsx("p",{className:"text-lg font-arcade text-arcade-neon-pink mb-2",children:"Game Over!"}),f.jsxs("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:["Skóre: ",d]}),f.jsx("button",{onClick:j,className:"arcade-button",children:"🔄 Hrát znovu"})]}),f.jsx("div",{className:"flex justify-center",children:f.jsx("div",{className:"snake-grid grid gap-0",style:{gridTemplateColumns:`repeat(${D}, 1fr)`,width:`${D*16}px`,height:`${D*16}px`},children:Array.from({length:D},(k,V)=>Array.from({length:D},(_,g)=>B(g,V)))})}),f.jsx("div",{className:"mt-4 text-center",children:f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Dosáhni 20+ bodů pro odznak "Hadí mistr"!'})})]})})},cE=({onClose:n,onScoreUpdate:e,currentScore:t})=>{const[r,s]=K.useState({player:{x:400,y:500},bullets:[],asteroids:[],score:0,gameOver:!1,lives:3,gameStarted:!1,gameTime:0,difficulty:1}),[i,a]=K.useState(0),[l,u]=K.useState(0),[d,m]=K.useState(new Set),T=800,v=600,x=5,N=10,D=1.5,R=.01,M=K.useCallback(()=>{const B={x:Math.random()*(T-40),y:-50,size:Math.random()*30+20,id:l};return u(k=>k+1),B},[l]),j=K.useCallback(()=>{if(r.gameOver||!r.gameStarted)return;const B={x:r.player.x+20,y:r.player.y,id:i};a(k=>k+1),s(k=>({...k,bullets:[...k.bullets,B]}))},[r.player,r.gameOver,r.gameStarted,i]),H=()=>{s({player:{x:400,y:500},bullets:[],asteroids:[],score:0,gameOver:!1,lives:3,gameStarted:!1,gameTime:0,difficulty:1}),a(0),u(0)};return K.useEffect(()=>{const B=V=>{if(!r.gameStarted){s(_=>({..._,gameStarted:!0}));return}m(_=>new Set(_).add(V.code)),V.code==="Space"&&(V.preventDefault(),j())},k=V=>{m(_=>{const g=new Set(_);return g.delete(V.code),g})};return window.addEventListener("keydown",B),window.addEventListener("keyup",k),()=>{window.removeEventListener("keydown",B),window.removeEventListener("keyup",k)}},[r.gameStarted,j]),K.useEffect(()=>{if(!r.gameStarted||r.gameOver)return;const B=setInterval(()=>{s(k=>{const V=k.gameTime+16,_=Math.min(5,1+Math.floor(V/3e4)),g=D+(_-1)*.5,y=R+(_-1)*.005;let w=k.player.x;d.has("ArrowLeft")&&(w=Math.max(0,w-x)),d.has("ArrowRight")&&(w=Math.min(T-40,w+x));const I=k.bullets.map(F=>({...F,y:F.y-N})).filter(F=>F.y>-10);let E=k.asteroids.map(F=>({...F,y:F.y+g})).filter(F=>F.y<v+50);Math.random()<y&&(E=[...E,M()]);let de=k.score,Oe=k.lives,He=k.gameOver;const je=[...I],Ee=[...E];for(let F=je.length-1;F>=0;F--)for(let Te=Ee.length-1;Te>=0;Te--){const Fe=je[F],fe=Ee[Te];if(Fe&&fe&&Fe.x<fe.x+fe.size&&Fe.x+4>fe.x&&Fe.y<fe.y+fe.size&&Fe.y+8>fe.y){je.splice(F,1),Ee.splice(Te,1),de+=10;break}}for(const F of Ee)if(w<F.x+F.size&&w+40>F.x&&500<F.y+F.size&&500+40>F.y){Oe--,Oe<=0&&(He=!0,de>t&&e(de));break}for(const F of Ee)if(F.y>v+10&&F.y<v+20){Oe--,Oe<=0&&(He=!0,de>t&&e(de));const Te=Ee.indexOf(F);Te>-1&&Ee.splice(Te,1);break}return{...k,player:{x:w,y:500},bullets:je,asteroids:Ee,score:de,lives:Oe,gameOver:He,gameTime:V,difficulty:_}})},16);return()=>clearInterval(B)},[r.gameStarted,r.gameOver,d,M,t,e]),f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:f.jsxs("div",{className:"arcade-card p-6 max-w-4xl w-full",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple",children:"🚀 Space Shooter"}),f.jsx("button",{onClick:n,className:"arcade-button text-xs",children:"❌ Zavřít"})]}),f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsxs("div",{className:"text-sm font-arcade text-arcade-yellow",children:["Skóre: ",r.score]}),f.jsxs("div",{className:"text-sm font-arcade text-arcade-green",children:["Životy: ","❤️".repeat(r.lives)]}),f.jsxs("div",{className:"text-sm font-arcade text-arcade-cyan",children:["Nejlepší: ",Math.max(r.score,t)]}),f.jsxs("div",{className:"text-sm font-arcade text-arcade-neon-pink",children:["Úroveň: ",r.difficulty]})]}),!r.gameStarted&&!r.gameOver&&f.jsxs("div",{className:"text-center mb-4",children:[f.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:"Šipky = pohyb, Mezerník = střelba"}),f.jsx("p",{className:"text-xs font-arcade text-arcade-gray mb-2",children:"⚠️ Pozor! Asteroidy které proletí kolem vás vám ubere život!"}),f.jsx("button",{onClick:()=>s(B=>({...B,gameStarted:!0})),className:"arcade-button",children:"🚀 Začít hru"})]}),r.gameOver&&f.jsxs("div",{className:"text-center mb-4",children:[f.jsx("p",{className:"text-lg font-arcade text-arcade-neon-pink mb-2",children:"Game Over!"}),f.jsxs("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:["Skóre: ",r.score," | Dosáhnutá úroveň: ",r.difficulty]}),f.jsx("button",{onClick:H,className:"arcade-button",children:"🔄 Hrát znovu"})]}),f.jsx("div",{className:"flex justify-center",children:f.jsxs("div",{className:"snake-grid relative overflow-hidden",style:{width:T,height:v},children:[f.jsx("div",{className:"absolute w-10 h-10 bg-arcade-yellow rounded",style:{left:r.player.x,top:r.player.y}}),r.bullets.map(B=>f.jsx("div",{className:"absolute w-1 h-2 bg-arcade-neon-green",style:{left:B.x,top:B.y}},B.id)),r.asteroids.map(B=>f.jsx("div",{className:"absolute bg-arcade-neon-pink rounded",style:{left:B.x,top:B.y,width:B.size,height:B.size}},B.id))]})}),f.jsxs("div",{className:"mt-4 text-center",children:[f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Znič 10+ asteroidů pro odznak "Vesmírný obránce"!'}),f.jsx("p",{className:"text-xs font-arcade text-arcade-neon-pink",children:"Obtížnost se zvyšuje každých 30 sekund!"})]})]})})},lE=({quest:n,onComplete:e,isCompleted:t})=>{const[r,s]=K.useState(null),[i,a]=K.useState(!1),[l,u]=K.useState(!1),d=v=>{t||i||s(v)},m=()=>{if(r===null)return;const v=r===n.correctAnswer;u(v),a(!0),setTimeout(()=>{e(n.id,v),a(!1),s(null)},2e3)},T=v=>i?v===n.correctAnswer?"border-arcade-green bg-arcade-green bg-opacity-20 animate-pulse-neon":v===r&&!l?"border-arcade-neon-pink bg-arcade-neon-pink bg-opacity-20 animate-shake":"border-arcade-gray opacity-50":r===v?"border-arcade-neon-blue bg-arcade-cyan bg-opacity-20":"border-arcade-gray hover:border-arcade-neon-green";return t?f.jsxs("div",{className:"arcade-card p-6 border-arcade-green",children:[f.jsxs("div",{className:"flex items-center mb-4",children:[f.jsx("div",{className:"text-3xl mr-3",children:"✅"}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-arcade text-arcade-green",children:"Denní výzva splněna!"}),f.jsxs("p",{className:"text-sm font-arcade text-arcade-gray",children:["+",n.xpReward," XP získáno"]})]})]}),f.jsx("div",{className:"text-sm font-arcade text-arcade-dark",children:n.question})]}):f.jsxs("div",{className:"arcade-card p-6",children:[f.jsxs("div",{className:"flex items-center mb-4",children:[f.jsx("div",{className:"text-3xl mr-3",children:n.icon}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-arcade text-arcade-purple",children:"🧠 Denní výzva"}),f.jsxs("p",{className:"text-xs font-arcade text-arcade-gray",children:["Kategorie: ",n.category]})]})]}),f.jsxs("div",{className:"mb-6",children:[f.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-4",children:n.question}),f.jsx("div",{className:"space-y-3",children:n.options.map((v,x)=>f.jsxs("button",{onClick:()=>d(x),disabled:i,className:`w-full p-3 text-left font-arcade text-sm border-2 rounded transition-all ${T(x)}`,children:[f.jsxs("span",{className:"mr-2 text-arcade-yellow",children:[String.fromCharCode(65+x),")"]}),v]},x))})]}),i&&f.jsx("div",{className:"mb-4 p-3 rounded text-center",children:l?f.jsxs("div",{className:"text-arcade-green font-arcade",children:["🎉 Správně! +",n.xpReward," XP"]}):f.jsxs("div",{className:"text-arcade-neon-pink font-arcade",children:["❌ Špatně! Správná odpověď: ",String.fromCharCode(65+n.correctAnswer),")"]})}),r!==null&&!i&&f.jsx("button",{onClick:m,className:"w-full arcade-button text-lg py-3",children:"🎯 Odeslat odpověď"}),f.jsx("div",{className:"mt-4 text-center",children:f.jsxs("p",{className:"text-xs font-arcade text-arcade-gray",children:["Odpověď správně = +",n.xpReward," XP"]})})]})},uE=({currentUser:n,badges:e,topics:t,students:r,dailyQuests:s,snakeLeaderboard:i,spaceLeaderboard:a,onUnlockBadge:l,onCompleteTopic:u,onSnakeScoreUpdate:d,onSpaceScoreUpdate:m,onDailyQuestComplete:T,onUpdateName:v})=>{const[x,N]=K.useState(!1),[D,R]=K.useState(!1),[M,j]=K.useState(""),[H,B]=K.useState(!1),[k,V]=K.useState(n),_=r.find(F=>F.name===n),g=e.filter(F=>_==null?void 0:_.badges.includes(F.id)),y=(_==null?void 0:_.xp)||0,w=(_==null?void 0:_.badges.length)||0,I=(_==null?void 0:_.snakeScore)||0,A=(_==null?void 0:_.spaceScore)||0,E=(_==null?void 0:_.totalQuestsCompleted)||0,de=F=>{F.preventDefault();const Te=e.find(Fe=>Fe.code===M);Te?(l(Te.id),j(""),alert(`🎉 Odznak "${Te.name}" odemčen!`)):alert("❌ Nesprávný kód!")},Oe=new Date().toISOString().split("T")[0],He=s.find(F=>F.date===Oe),je=He&&(_==null?void 0:_.dailyQuestsCompleted.includes(He.id))||!1,Ee=F=>{if(!F)return null;const Te={light:"#FFDBB4",medium:"#C68642",dark:"#8D5524",tan:"#D2B48C"},Fe={brown:"#8B4513",blonde:"#F4D03F",black:"#2C3E50",red:"#E74C3C",gray:"#95A5A6",white:"#ECF0F1",purple:"#9B59B6"},fe={blue:"#3498DB",red:"#E74C3C",green:"#2ECC71",purple:"#9B59B6",pink:"#E91E63",yellow:"#F1C40F",orange:"#E67E22",black:"#2C3E50",white:"#ECF0F1"};return f.jsx("div",{className:"w-16 h-16 bg-arcade-dark rounded-lg p-2",children:f.jsxs("div",{className:"w-full h-full relative",children:[f.jsx("div",{className:"absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full",style:{backgroundColor:Te[F.skinColor]}}),f.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-t-full",style:{backgroundColor:Fe[F.hair]}}),f.jsxs("div",{className:"absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-1",children:[f.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:F.eyes==="brown"?"#8B4513":F.eyes==="blue"?"#3498DB":F.eyes==="green"?"#27AE60":F.eyes==="hazel"?"#D68910":"#95A5A6"}}),f.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:F.eyes==="brown"?"#8B4513":F.eyes==="blue"?"#3498DB":F.eyes==="green"?"#27AE60":F.eyes==="hazel"?"#D68910":"#95A5A6"}})]}),F.mouth&&f.jsx("div",{className:"absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-black rounded-full"}),f.jsx("div",{className:"absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-8 rounded",style:{backgroundColor:fe[F.shirtColor]}})]})})};return f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-arcade-purple to-arcade-cyan p-4",children:x?f.jsx(aE,{onClose:()=>N(!1),onScoreUpdate:d,currentScore:I}):D?f.jsx(cE,{onClose:()=>R(!1),onScoreUpdate:m,currentScore:A}):f.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[f.jsxs("div",{className:"arcade-card p-6",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsxs("div",{className:"flex items-center",children:[Ee(_==null?void 0:_.avatar),f.jsxs("div",{className:"ml-4",children:[f.jsxs("h1",{className:"text-2xl font-arcade text-arcade-purple flex items-center gap-2",children:["Ahoj, ",n,"! 👋",f.jsx("button",{className:"arcade-button text-xs ml-2",onClick:()=>B(!0),title:"Změnit jméno",children:"✏️"})]}),f.jsxs("p",{className:"text-sm font-arcade text-arcade-gray",children:["Úrovní: ",Math.floor(y/100)+1," | Výzev: ",E]})]})]}),f.jsxs("div",{className:"text-right",children:[f.jsxs("div",{className:"text-sm font-arcade text-arcade-dark",children:["XP: ",y," | Odznaky: ",g.length,"/",w]}),f.jsx("div",{className:"progress-bar mt-2",children:f.jsx("div",{className:"progress-fill",style:{width:`${y%100/100*100}%`}})})]})]}),f.jsxs("form",{onSubmit:de,className:"flex gap-2",children:[f.jsx("input",{type:"text",value:M,onChange:F=>j(F.target.value),placeholder:"Zadej kód pro odznak...",className:"flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none"}),f.jsx("button",{type:"submit",className:"arcade-button",children:"🔓 Odemknout"})]})]}),He&&f.jsx("div",{className:"arcade-card p-6",children:f.jsx(lE,{quest:He,onComplete:T,isCompleted:je})}),f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🏅 Tvůj profil – získané odznaky"}),f.jsx(rE,{badges:e,unlockedBadges:(_==null?void 0:_.badges)||[]})]}),f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🧩 Témata k procvičení"}),f.jsx(sE,{topics:t,onCompleteTopic:u})]}),f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🕹️ Bonusové úkoly"}),f.jsx(iE,{onPlaySnake:()=>N(!0),onPlaySpace:()=>R(!0),snakeScore:I,spaceScore:A,snakeLeaderboard:i,spaceLeaderboard:a})]}),f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🏆 Žebříček"}),f.jsx(oE,{students:r,currentUser:n})]}),H&&f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",children:f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-lg font-arcade text-arcade-purple mb-2",children:"Změnit jméno"}),f.jsx("input",{type:"text",value:k,onChange:F=>V(F.target.value),className:"px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm mb-4 w-full",placeholder:"Nové jméno"}),f.jsxs("div",{className:"flex gap-2 justify-end",children:[f.jsx("button",{className:"arcade-button",onClick:()=>B(!1),children:"Zrušit"}),f.jsx("button",{className:"arcade-button",onClick:()=>{v&&k.trim()&&(v(k.trim()),B(!1))},children:"Uložit"})]})]})})]})})},hE=({students:n,badges:e,onUpdateStudent:t,onExportData:r,onDeleteStudent:s})=>{const[i,a]=K.useState(null),[l,u]=K.useState(""),[d,m]=K.useState(""),T=()=>{if(i&&l){const R=n.find(M=>M.id===i);R&&(t(i,{xp:R.xp+parseInt(l)}),u(""))}},v=()=>{if(i&&d){const R=n.find(M=>M.id===i);R&&(t(i,{stars:Math.min(5,R.stars+parseInt(d))}),m(""))}},x=R=>{if(i){const M=n.find(j=>j.id===i);M&&!M.badges.includes(R)&&t(i,{badges:[...M.badges,R]})}},N=R=>{if(i){const M=n.find(j=>j.id===i);M&&M.badges.includes(R)&&t(i,{badges:M.badges.filter(j=>j!==R)})}},D=n.find(R=>R.id===i);return f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-arcade-purple to-arcade-cyan p-4",children:f.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[f.jsxs("div",{className:"arcade-card p-6",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("h1",{className:"text-2xl font-arcade text-arcade-purple",children:"👨‍🏫 Učitelský panel"}),f.jsx("button",{onClick:r,className:"arcade-button",children:"📊 Export dat"})]}),f.jsx("p",{className:"text-sm font-arcade text-arcade-gray",children:"Správa studentů, odznaků a bodů"})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"📚 Seznam studentů"}),f.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:n.map(R=>f.jsx("div",{className:`p-3 rounded cursor-pointer transition-all ${i===R.id?"bg-arcade-yellow bg-opacity-20 border-2 border-arcade-neon-green":"bg-arcade-light-gray hover:bg-arcade-gray"}`,onClick:()=>a(R.id),children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-sm font-arcade text-arcade-dark",children:R.name}),f.jsxs("div",{className:"text-xs font-arcade text-arcade-gray",children:["XP: ",R.xp," | Odznaky: ",R.badges.length," | Snake: ",R.snakeScore," | Space: ",R.spaceScore]})]}),f.jsx("div",{className:"flex",children:[...Array(5)].map((M,j)=>f.jsx("span",{className:`text-xs ${j<R.stars?"text-arcade-yellow":"text-arcade-gray"}`,children:"⭐"},j))})]})},R.id))})]}),f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"⚙️ Správa studenta"}),i?f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Přidat XP:"}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"number",value:l,onChange:R=>u(R.target.value),className:"flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",placeholder:"Počet XP"}),f.jsx("button",{onClick:T,className:"arcade-button",children:"➕"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Přidat hvězdy:"}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"number",min:"1",max:"5",value:d,onChange:R=>m(R.target.value),className:"flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",placeholder:"1-5"}),f.jsx("button",{onClick:v,className:"arcade-button",children:"⭐"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Správa odznaků:"}),f.jsx("div",{className:"grid grid-cols-2 gap-2 max-h-48 overflow-y-auto",children:e.map(R=>{const M=n.find(H=>H.id===i),j=M==null?void 0:M.badges.includes(R.id);return f.jsxs("div",{className:"flex gap-1",children:[f.jsxs("button",{onClick:()=>x(R.id),disabled:j,className:`flex-1 p-2 text-xs font-arcade rounded ${j?"bg-arcade-green text-white cursor-not-allowed":"arcade-button"}`,children:[R.icon," ",R.name]}),j&&f.jsx("button",{onClick:()=>N(R.id),className:"p-2 text-xs font-arcade bg-arcade-neon-pink text-white rounded hover:bg-red-600",title:"Odebrat odznak",children:"❌"})]},R.id)})})]}),D&&f.jsxs("div",{className:"mt-4 p-3 bg-arcade-light-gray rounded",children:[f.jsx("h4",{className:"text-sm font-arcade text-arcade-purple mb-2",children:"📊 Informace o studentovi"}),f.jsxs("div",{className:"text-xs font-arcade text-arcade-dark space-y-1",children:[f.jsxs("div",{children:["Jméno: ",D.name]}),f.jsxs("div",{children:["XP: ",D.xp]}),f.jsxs("div",{children:["Odznaky: ",D.badges.length,"/",e.length]}),f.jsxs("div",{children:["Snake skóre: ",D.snakeScore]}),f.jsxs("div",{children:["Space skóre: ",D.spaceScore]}),f.jsxs("div",{children:["Denní výzvy: ",D.totalQuestsCompleted]}),f.jsxs("div",{children:["Hvězdy: ",D.stars,"/5"]})]})]}),i&&f.jsx("button",{className:"arcade-button bg-arcade-neon-pink text-white mt-4",onClick:()=>{s&&window.confirm("Opravdu chcete studenta nenávratně smazat?")&&(s(i),a(null))},children:"🗑️ Smazat studenta"})]}):f.jsx("p",{className:"text-sm font-arcade text-arcade-gray",children:"Vyber studenta pro správu"})]})]}),f.jsxs("div",{className:"arcade-card p-6",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"📈 Statistiky třídy"}),f.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"text-2xl font-arcade text-arcade-yellow",children:n.length}),f.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Studentů"})]}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"text-2xl font-arcade text-arcade-green",children:n.reduce((R,M)=>R+M.xp,0)}),f.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Celkem XP"})]}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"text-2xl font-arcade text-arcade-cyan",children:n.reduce((R,M)=>R+M.badges.length,0)}),f.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Odznaků"})]}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"text-2xl font-arcade text-arcade-neon-pink",children:Math.max(...n.map(R=>R.snakeScore))}),f.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Nejlepší Snake"})]})]})]})]})})},bl=({avatar:n,onAvatarChange:e,onComplete:t,isCompact:r=!1,onOpenEditor:s})=>{const[i,a]=K.useState(n),l=(d,m)=>{const T={...i,[d]:m};a(T),e(T)},u=d=>{const m={light:"#FFDBB4",medium:"#C68642",dark:"#8D5524",tan:"#D2B48C"},T={brown:"#8B4513",blonde:"#F4D03F",black:"#2C3E50",red:"#E74C3C",gray:"#95A5A6",white:"#ECF0F1",purple:"#9B59B6"},v={blue:"#3498DB",red:"#E74C3C",green:"#2ECC71",purple:"#9B59B6",pink:"#E91E63",yellow:"#F1C40F",orange:"#E67E22",black:"#2C3E50",white:"#ECF0F1"},x={gold:"#F39C12",silver:"#BDC3C7",bronze:"#E67E22",rainbow:"linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)"};return f.jsx("div",{className:`${r?"w-16 h-16":"w-32 h-32"} bg-arcade-dark rounded-lg p-2 mx-auto mb-4`,children:f.jsxs("div",{className:"w-full h-full relative",children:[f.jsx("div",{className:"absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full",style:{backgroundColor:m[d.skinColor]}}),f.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 rounded-t-full",style:{backgroundColor:T[d.hair]}}),f.jsxs("div",{className:"absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2",children:[f.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:d.eyes==="brown"?"#8B4513":d.eyes==="blue"?"#3498DB":d.eyes==="green"?"#27AE60":d.eyes==="hazel"?"#D68910":"#95A5A6"}}),f.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:d.eyes==="brown"?"#8B4513":d.eyes==="blue"?"#3498DB":d.eyes==="green"?"#27AE60":d.eyes==="hazel"?"#D68910":"#95A5A6"}})]}),d.mouth&&f.jsx("div",{className:"absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"}),f.jsx("div",{className:"absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-16 rounded",style:{backgroundColor:v[d.shirtColor]}}),d.accessory&&f.jsx("div",{className:"absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2",style:{borderColor:x[d.accessory],background:d.accessory==="rainbow"?x.rainbow:"transparent"}}),d.hat&&f.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 w-18 h-6 rounded-t-full",style:{backgroundColor:d.hat==="cap"?"#E74C3C":"#2C3E50"}})]})})};return r?f.jsxs("div",{className:"flex items-center gap-2",children:[u(i),f.jsx("button",{onClick:s,className:"arcade-button text-xs px-2 py-1",title:"Upravit avatar",children:"✏️"})]}):f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:f.jsxs("div",{className:"arcade-card p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto",children:[f.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4 text-center",children:"👤 Vytvoř si svůj avatar"}),f.jsx("div",{className:"mb-6",children:u(i)}),f.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"💇 Vlasy:"}),f.jsxs("select",{value:i.hair,onChange:d=>l("hair",d.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"brown",children:"Hnědé"}),f.jsx("option",{value:"blonde",children:"Světlé"}),f.jsx("option",{value:"black",children:"Černé"}),f.jsx("option",{value:"red",children:"Červené"}),f.jsx("option",{value:"gray",children:"Šedé"}),f.jsx("option",{value:"white",children:"Bílé"}),f.jsx("option",{value:"purple",children:"Fialové"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"🎨 Pleť:"}),f.jsxs("select",{value:i.skinColor,onChange:d=>l("skinColor",d.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"light",children:"Světlá"}),f.jsx("option",{value:"medium",children:"Střední"}),f.jsx("option",{value:"dark",children:"Tmavá"}),f.jsx("option",{value:"tan",children:"Opálená"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"👕 Tričko:"}),f.jsxs("select",{value:i.shirtColor,onChange:d=>l("shirtColor",d.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"blue",children:"Modré"}),f.jsx("option",{value:"red",children:"Červené"}),f.jsx("option",{value:"green",children:"Zelené"}),f.jsx("option",{value:"purple",children:"Fialové"}),f.jsx("option",{value:"pink",children:"Růžové"}),f.jsx("option",{value:"yellow",children:"Žluté"}),f.jsx("option",{value:"orange",children:"Oranžové"}),f.jsx("option",{value:"black",children:"Černé"}),f.jsx("option",{value:"white",children:"Bílé"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"👁️ Oči:"}),f.jsxs("select",{value:i.eyes,onChange:d=>l("eyes",d.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"brown",children:"Hnědé"}),f.jsx("option",{value:"blue",children:"Modré"}),f.jsx("option",{value:"green",children:"Zelené"}),f.jsx("option",{value:"hazel",children:"Oříškové"}),f.jsx("option",{value:"gray",children:"Šedé"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"😊 Ústa:"}),f.jsxs("select",{value:i.mouth?"yes":"no",onChange:d=>l("mouth",d.target.value==="yes"),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"yes",children:"Zobrazit"}),f.jsx("option",{value:"no",children:"Skrýt"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"🧢 Čepice:"}),f.jsxs("select",{value:i.hat||"none",onChange:d=>l("hat",d.target.value==="none"?void 0:d.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"none",children:"Žádná"}),f.jsx("option",{value:"cap",children:"Baseball čepice"}),f.jsx("option",{value:"hat",children:"Klobouk"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"💎 Doplňky:"}),f.jsxs("select",{value:i.accessory||"none",onChange:d=>l("accessory",d.target.value==="none"?void 0:d.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[f.jsx("option",{value:"none",children:"Žádné"}),f.jsx("option",{value:"gold",children:"Zlatý náhrdelník"}),f.jsx("option",{value:"silver",children:"Stříbrný náhrdelník"}),f.jsx("option",{value:"bronze",children:"Bronzový náhrdelník"}),f.jsx("option",{value:"rainbow",children:"Duhový náhrdelník"})]})]})]}),f.jsx("div",{className:"flex gap-4",children:f.jsx("button",{onClick:t,className:"flex-1 arcade-button text-lg py-3",children:"✅ Hotovo"})}),f.jsx("div",{className:"mt-4 text-center",children:f.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Vytvoř si svůj pixelový avatar a začni dobrodružství!"})})]})})},Si=[{id:"file-champion",name:"Souborový šampion",description:"Umíš organizovat soubory a složky",icon:"📁",code:"FILES123",unlocked:!1,xpReward:50,unlockMethod:"code"},{id:"keyboard-master",name:"Mistr klávesnice",description:"Rychle píšeš a znáš klávesové zkratky",icon:"⌨️",code:"KEYBOARD456",unlocked:!1,xpReward:75,unlockMethod:"code"},{id:"hardware-expert",name:"Hardwarový expert",description:"Rozumíš počítačovým komponentám",icon:"💻",code:"HARDWARE789",unlocked:!1,xpReward:100,unlockMethod:"code"},{id:"internet-navigator",name:"Internetový navigátor",description:"Bezpečně surfuješ po internetu",icon:"🌐",code:"INTERNET101",unlocked:!1,xpReward:60,unlockMethod:"code"},{id:"snake-master",name:"🐍 Hadí mistr",description:"Dosáhl jsi 20+ bodů ve hře Snake",icon:"🐍",code:"snakepro20",unlocked:!1,xpReward:150,unlockMethod:"game"},{id:"space-defender",name:"🚀 Vesmírný obránce",description:"Zničil jsi 10+ asteroidů ve Space Shooter",icon:"🚀",code:"space10",unlocked:!1,xpReward:120,unlockMethod:"game"},{id:"quiz-champion",name:"🧠 Kvízový šampion",description:"Splnil jsi 10 denních výzev",icon:"🧠",code:"quiz10",unlocked:!1,xpReward:80,unlockMethod:"daily"},{id:"coding-beginner",name:"Začínající programátor",description:"První kroky v programování",icon:"💻",code:"CODE2024",unlocked:!1,xpReward:200,unlockMethod:"code"},{id:"presentation-pro",name:"Prezentační profesionál",description:"Umíš vytvářet působivé prezentace",icon:"📊",code:"PRESENT2024",unlocked:!1,xpReward:80,unlockMethod:"code"},{id:"data-wizard",name:"Datový kouzelník",description:"Mistr tabulek a grafů",icon:"📈",code:"DATA2024",unlocked:!1,xpReward:90,unlockMethod:"code"}],Ri=[{id:"file-organization",name:"Organizace souborů",description:"Nauč se správně organizovat soubory a složky",icon:"📁",completed:!1,xpReward:30},{id:"keyboard-shortcuts",name:"Klávesové zkratky",description:"Zrychli svou práci s klávesovými zkratkami",icon:"⌨️",completed:!1,xpReward:40},{id:"computer-parts",name:"Hardwarové komponenty",description:"Poznej části počítače a jejich funkce",icon:"💻",completed:!1,xpReward:50},{id:"internet-safety",name:"Bezpečnost na internetu",description:"Nauč se bezpečně používat internet",icon:"🔒",completed:!1,xpReward:35},{id:"basic-programming",name:"Základy programování",description:"První kroky v programování",icon:"👨‍💻",completed:!1,xpReward:60},{id:"presentations",name:"Tvorba prezentací",description:"Vytvářej působivé prezentace",icon:"📊",completed:!1,xpReward:45}];new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString();const Ci=[{id:"quest1",question:"Co je mozek počítače?",options:["RAM","CPU","SSD","Zdroj"],correctAnswer:1,xpReward:5,icon:"🧠",category:"hardware",date:new Date().toISOString().split("T")[0]},{id:"quest2",question:"Která klávesová zkratka slouží k uložení souboru?",options:["Ctrl+C","Ctrl+V","Ctrl+S","Ctrl+X"],correctAnswer:2,xpReward:5,icon:"💾",category:"keyboard",date:new Date().toISOString().split("T")[0]},{id:"quest3",question:"Co znamená zkratka WWW?",options:["World Wide Web","Web World Wide","Wide World Web","World Web Wide"],correctAnswer:0,xpReward:5,icon:"🌐",category:"internet",date:new Date().toISOString().split("T")[0]},{id:"quest4",question:"Který souborový formát se používá pro obrázky?",options:["TXT","DOC","JPG","EXE"],correctAnswer:2,xpReward:5,icon:"🖼️",category:"files",date:new Date().toISOString().split("T")[0]},{id:"quest5",question:"Co je to antivirus?",options:["Program na psaní","Program na ochranu","Program na hry","Program na kalkulačku"],correctAnswer:1,xpReward:5,icon:"🛡️",category:"security",date:new Date().toISOString().split("T")[0]}],dE={badgeCodes:[{id:"1",code:"FILES123",badgeId:"file-champion",maxUses:30,currentUses:5,createdBy:"teacher",createdAt:new Date().toISOString()},{id:"2",code:"KEYBOARD456",badgeId:"keyboard-master",maxUses:25,currentUses:3,createdBy:"teacher",createdAt:new Date().toISOString()}],questSettings:{dailyQuestEnabled:!0,questXpReward:5,questCategories:["hardware","keyboard","internet","files","security"]},exportSettings:{includePersonalData:!0,includeGameScores:!0,includeQuestHistory:!0}},fE=()=>{const[n,e]=K.useState({currentUser:null,isTeacher:!1,students:[],badges:Si,topics:Ri,dailyQuests:Ci,snakeLeaderboard:[],spaceLeaderboard:[],gameState:{snake:{snake:[[10,10]],food:[5,5],direction:"RIGHT",score:0,gameOver:!1},space:{player:{x:400,y:500},bullets:[],asteroids:[],score:0,gameOver:!1,lives:3}},teacherSettings:dE}),[t,r]=K.useState(!1),[s,i]=K.useState(!0),[a,l]=K.useState(null);K.useEffect(()=>{const k=Sm(Is,async V=>{V?(e(_=>({..._,currentUser:V.uid,isTeacher:V.email==="teacher@itgamifikace.cz"})),V.email==="teacher@itgamifikace.cz"?await u():await d(V.uid)):(e(_=>({..._,currentUser:null,isTeacher:!1})),l(null)),i(!1)});return()=>k()},[]);const u=async()=>{try{const k=await se.getAllStudents(),V=await se.getBadges(),_=await se.getTopics(),g=await se.getDailyQuests(),y=await se.getLeaderboard("snake"),w=await se.getLeaderboard("space");e(I=>({...I,students:k.length>0?k:[],badges:V.length>0?V:Si,topics:_.length>0?_:Ri,dailyQuests:g.length>0?g:Ci,snakeLeaderboard:y,spaceLeaderboard:w}))}catch(k){console.error("Error loading teacher data:",k)}},d=async k=>{try{const V=await se.getStudentData(k);if(V){l(V);const _=await se.getBadges(),g=await se.getTopics(),y=await se.getDailyQuests(),w=await se.getLeaderboard("snake"),I=await se.getLeaderboard("space");e(A=>({...A,badges:_.length>0?_:Si,topics:g.length>0?g:Ri,dailyQuests:y.length>0?y:Ci,snakeLeaderboard:w,spaceLeaderboard:I}))}}catch(V){console.error("Error loading student data:",V)}},m=async()=>{try{await Rm(Is),r(!1)}catch(k){console.error("Error signing out:",k)}},T=async k=>{if(!n.currentUser||n.isTeacher||!a)return;const V={...a,avatar:k};l(V),await se.updateStudentData(n.currentUser,{avatar:k})},v=async k=>{if(!n.currentUser||n.isTeacher||!a)return;const V=n.badges.find(g=>g.id===k);if(!V)return;const _={...a,badges:a.badges.includes(k)?a.badges:[...a.badges,k],xp:a.xp+V.xpReward};l(_),await se.updateStudentData(n.currentUser,{badges:_.badges,xp:_.xp})},x=async k=>{if(!n.currentUser||n.isTeacher||!a)return;const V=n.topics.find(y=>y.id===k);if(!V||V.completed)return;const _=n.topics.map(y=>y.id===k?{...y,completed:!0}:y),g={...a,xp:a.xp+V.xpReward};e(y=>({...y,topics:_})),l(g),await se.updateStudentData(n.currentUser,{xp:g.xp})},N=async k=>{if(!(!n.currentUser||n.isTeacher||!a)){if(k>a.snakeScore){const V={...a,snakeScore:k};l(V),await se.updateStudentData(n.currentUser,{snakeScore:k});const _={name:a.name,score:k,date:new Date().toISOString().split("T")[0]},g=[...n.snakeLeaderboard,_].sort((y,w)=>w.score-y.score).slice(0,10);e(y=>({...y,snakeLeaderboard:g})),await se.updateLeaderboard("snake",_)}k>=20&&v("snake-master")}},D=async k=>{if(!(!n.currentUser||n.isTeacher||!a)){if(k>a.spaceScore){const V={...a,spaceScore:k};l(V),await se.updateStudentData(n.currentUser,{spaceScore:k});const _={name:a.name,score:k,date:new Date().toISOString().split("T")[0]},g=[...n.spaceLeaderboard,_].sort((y,w)=>w.score-y.score).slice(0,10);e(y=>({...y,spaceLeaderboard:g})),await se.updateLeaderboard("space",_)}k>=100&&v("space-defender")}},R=async(k,V)=>{if(!n.currentUser||n.isTeacher||!a)return;const _=n.dailyQuests.find(w=>w.id===k);if(!_)return;const g=a.totalQuestsCompleted+1,y={...a,xp:a.xp+(V?_.xpReward:0),dailyQuestsCompleted:a.dailyQuestsCompleted.includes(k)?a.dailyQuestsCompleted:[...a.dailyQuestsCompleted,k],totalQuestsCompleted:g};l(y),await se.updateStudentData(n.currentUser,{xp:y.xp,dailyQuestsCompleted:y.dailyQuestsCompleted,totalQuestsCompleted:g}),g>=10&&v("quiz-champion")},M=async(k,V)=>{await se.updateStudentData(k,V),n.isTeacher&&await u()},j=async k=>{!n.currentUser||n.isTeacher||!a||(await se.updateStudentData(n.currentUser,{name:k}),l({...a,name:k}),e(V=>({...V,currentUser:k})))},H=()=>{const k={students:n.students,badges:n.badges,topics:n.topics,dailyQuests:n.dailyQuests,snakeLeaderboard:n.snakeLeaderboard,spaceLeaderboard:n.spaceLeaderboard,teacherSettings:n.teacherSettings,exportDate:new Date().toISOString()},V=new Blob([JSON.stringify(k,null,2)],{type:"application/json"}),_=URL.createObjectURL(V),g=document.createElement("a");g.href=_,g.download=`gamifikace-data-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(_)},B=async k=>{await se.deleteStudent(k),n.isTeacher&&await u()};return s?f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan",children:f.jsxs("div",{className:"arcade-card p-8 text-center",children:[f.jsx("div",{className:"text-2xl font-arcade text-arcade-purple mb-4",children:"🎮 Načítání..."}),f.jsx("div",{className:"w-8 h-8 border-4 border-arcade-neon-green border-t-transparent rounded-full animate-spin mx-auto"})]})}):n.currentUser?f.jsxs("div",{children:[f.jsx("div",{className:"bg-arcade-dark p-4",children:f.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[f.jsx("h1",{className:"text-xl font-arcade text-white",children:"🎮 Gamifikace Informatika"}),f.jsxs("div",{className:"flex items-center gap-4",children:[!n.isTeacher&&a&&f.jsx(bl,{avatar:a.avatar,onAvatarChange:T,onComplete:()=>r(!1),isCompact:!0,onOpenEditor:()=>r(!0)}),f.jsxs("span",{className:"text-sm font-arcade text-arcade-light-gray",children:[n.isTeacher?"👨‍🏫 Učitel":"👨‍🎓 Student",": ",n.isTeacher?"teacher@itgamifikace.cz":(a==null?void 0:a.name)||"Student"]}),f.jsx("button",{onClick:m,className:"arcade-button text-xs",children:"🚪 Odhlásit"})]})]})}),t&&a&&f.jsx(bl,{avatar:a.avatar,onAvatarChange:T,onComplete:()=>r(!1)}),n.isTeacher?f.jsx(hE,{students:n.students,badges:n.badges,onUpdateStudent:M,onExportData:H,onDeleteStudent:B}):a?f.jsx(uE,{currentUser:a.name,badges:n.badges,topics:n.topics,students:[a],dailyQuests:n.dailyQuests,snakeLeaderboard:n.snakeLeaderboard,spaceLeaderboard:n.spaceLeaderboard,onUnlockBadge:v,onCompleteTopic:x,onSnakeScoreUpdate:N,onSpaceScoreUpdate:D,onDailyQuestComplete:R,onUpdateName:j}):f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan",children:f.jsx("div",{className:"arcade-card p-8 text-center",children:f.jsx("div",{className:"text-2xl font-arcade text-arcade-purple",children:"⚠️ Chyba při načítání dat"})})})]}):f.jsx(nE,{onLogin:()=>{}})};Pi.createRoot(document.getElementById("root")).render(f.jsx(Od.StrictMode,{children:f.jsx(fE,{})}));
