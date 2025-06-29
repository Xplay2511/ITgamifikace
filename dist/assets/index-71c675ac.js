import{r as U,a as Vd,R as Od}from"./vendor-b1791c80.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Al={exports:{}},xs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=U,Ld=Symbol.for("react.element"),Md=Symbol.for("react.fragment"),Ud=Object.prototype.hasOwnProperty,Fd=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function Sl(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Ud.call(e,r)&&!Bd.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Ld,type:n,key:i,ref:a,props:s,_owner:Fd.current}}xs.Fragment=Md;xs.jsx=Sl;xs.jsxs=Sl;Al.exports=xs;var h=Al.exports,Ni={},Ja=Vd;Ni.createRoot=Ja.createRoot,Ni.hydrateRoot=Ja.hydrateRoot;const zd=()=>{};/**
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
 */const kl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,g=i>>2,T=(i&3)<<4|l>>4;let w=(l&15)<<2|f>>6,A=f&63;u||(A=64,a||(w=64)),r.push(t[g],t[T],t[w],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const T=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||f==null||T==null)throw new $d;const w=i<<2|l>>4;if(r.push(w),f!==64){const A=l<<4&240|f>>2;if(r.push(A),T!==64){const R=f<<6&192|T;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hd=function(n){const e=kl(n);return Rl.encodeByteArray(e,!0)},rs=function(n){return Hd(n).replace(/\./g,"")},Cl=function(n){try{return Rl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Gd=()=>Wd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cl(n[1]);return e&&JSON.parse(e)},bs=()=>{try{return zd()||Gd()||Kd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pl=n=>{var e,t;return(t=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xd=n=>{const e=Pl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nl=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config},Dl=n=>{var e;return(e=bs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function En(n){return n.endsWith(".cloudworkstations.dev")}async function Vl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[rs(JSON.stringify(t)),rs(JSON.stringify(a)),l].join(".")}const Jn={};function Zd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Jn))Jn[e]?n.emulator.push(e):n.prod.push(e);return n}function ef(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Za=!1;function Ol(n,e){if(typeof window>"u"||typeof document>"u"||!En(window.location.host)||Jn[n]===e||Jn[n]||Za)return;Jn[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",i=Zd().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,A){w.setAttribute("width","24"),w.setAttribute("id",A),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Za=!0,a()},w}function g(w,A){w.setAttribute("id",A),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=ef(r),A=t("text"),R=document.getElementById(A)||document.createElement("span"),D=t("learnmore"),k=document.getElementById(D)||document.createElement("a"),L=t("preprendIcon"),j=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const V=w.element;l(V),g(k,D);const B=f();u(j,L),V.append(j,R,k,B),document.body.appendChild(V)}i?(R.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function nf(){var n;const e=(n=bs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function of(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function af(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cf(){return!nf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lf(){try{return typeof indexedDB=="object"}catch{return!1}}function uf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const hf="FirebaseError";class ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=hf,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?df(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ut(s,l,r)}}function df(n,e){return n.replace(ff,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ff=/\{\$([^}]+)}/g;function pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ec(i)&&ec(a)){if(!zt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ec(n){return n!==null&&typeof n=="object"}/**
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
 */function pr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mf(n,e){const t=new gf(n,e);return t.subscribe.bind(t)}class gf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");_f(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=_i),s.error===void 0&&(s.error=_i),s.complete===void 0&&(s.complete=_i);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _f(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _i(){}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class wf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Tf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},If=Q.INFO,xf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},bf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=xf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class io{constructor(e){this.name=e,this._logLevel=If,this._logHandler=bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Af=(n,e)=>e.some(t=>n instanceof t);let tc,nc;function Sf(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kf(){return nc||(nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Di=new WeakMap,Ll=new WeakMap,yi=new WeakMap,oo=new WeakMap;function Rf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Et(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jl.set(t,n)}).catch(()=>{}),oo.set(e,n),e}function Cf(n){if(Di.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Di.set(n,e)}let Vi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Di.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ll.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pf(n){Vi=n(Vi)}function Nf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vi(this),e,...t);return Ll.set(r,e.sort?e.sort():[e]),Et(r)}:kf().includes(n)?function(...e){return n.apply(vi(this),e),Et(jl.get(this))}:function(...e){return Et(n.apply(vi(this),e))}}function Df(n){return typeof n=="function"?Nf(n):(n instanceof IDBTransaction&&Cf(n),Af(n,Sf())?new Proxy(n,Vi):n)}function Et(n){if(n instanceof IDBRequest)return Rf(n);if(yi.has(n))return yi.get(n);const e=Df(n);return e!==n&&(yi.set(n,e),oo.set(e,n)),e}const vi=n=>oo.get(n);function Vf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Et(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Et(a.result),u.oldVersion,u.newVersion,Et(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Of=["get","getKey","getAll","getAllKeys","count"],jf=["put","add","delete","clear"],Ei=new Map;function rc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ei.get(e))return Ei.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=jf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Of.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&u.done]))[0]};return Ei.set(e,i),i}Pf(n=>({...n,get:(e,t,r)=>rc(e,t)||n.get(e,t,r),has:(e,t)=>!!rc(e,t)||n.has(e,t)}));/**
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
 */class Lf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Mf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oi="@firebase/app",sc="0.13.1";/**
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
 */const ot=new io("@firebase/app"),Uf="@firebase/app-compat",Ff="@firebase/analytics-compat",Bf="@firebase/analytics",zf="@firebase/app-check-compat",qf="@firebase/app-check",$f="@firebase/auth",Hf="@firebase/auth-compat",Wf="@firebase/database",Gf="@firebase/data-connect",Kf="@firebase/database-compat",Qf="@firebase/functions",Xf="@firebase/functions-compat",Yf="@firebase/installations",Jf="@firebase/installations-compat",Zf="@firebase/messaging",ep="@firebase/messaging-compat",tp="@firebase/performance",np="@firebase/performance-compat",rp="@firebase/remote-config",sp="@firebase/remote-config-compat",ip="@firebase/storage",op="@firebase/storage-compat",ap="@firebase/firestore",cp="@firebase/ai",lp="@firebase/firestore-compat",up="firebase",hp="11.9.0";/**
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
 */const ji="[DEFAULT]",dp={[Oi]:"fire-core",[Uf]:"fire-core-compat",[Bf]:"fire-analytics",[Ff]:"fire-analytics-compat",[qf]:"fire-app-check",[zf]:"fire-app-check-compat",[$f]:"fire-auth",[Hf]:"fire-auth-compat",[Wf]:"fire-rtdb",[Gf]:"fire-data-connect",[Kf]:"fire-rtdb-compat",[Qf]:"fire-fn",[Xf]:"fire-fn-compat",[Yf]:"fire-iid",[Jf]:"fire-iid-compat",[Zf]:"fire-fcm",[ep]:"fire-fcm-compat",[tp]:"fire-perf",[np]:"fire-perf-compat",[rp]:"fire-rc",[sp]:"fire-rc-compat",[ip]:"fire-gcs",[op]:"fire-gcs-compat",[ap]:"fire-fst",[lp]:"fire-fst-compat",[cp]:"fire-vertex","fire-js":"fire-js",[up]:"fire-js-all"};/**
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
 */const ss=new Map,fp=new Map,Li=new Map;function ic(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dn(n){const e=n.name;if(Li.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,n);for(const t of ss.values())ic(t,n);for(const t of fp.values())ic(t,n);return!0}function ao(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new fr("app","Firebase",pp);/**
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
 */const wn=hp;function Ml(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ji,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(t||(t=Nl()),!t)throw wt.create("no-options");const i=ss.get(s);if(i){if(zt(t,i.options)&&zt(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const a=new wf(s);for(const u of Li.values())a.addComponent(u);const l=new mp(t,r,a);return ss.set(s,l),l}function Ul(n=ji){const e=ss.get(n);if(!e&&n===ji&&Nl())return Ml();if(!e)throw wt.create("no-app",{appName:n});return e}function Tt(n,e,t){var r;let s=(r=dp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(l.join(" "));return}dn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gp="firebase-heartbeat-database",_p=1,sr="firebase-heartbeat-store";let wi=null;function Fl(){return wi||(wi=Vf(gp,_p,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sr)}catch(t){console.warn(t)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),wi}async function yp(n){try{const t=(await Fl()).transaction(sr),r=await t.objectStore(sr).get(Bl(n));return await t.done,r}catch(e){if(e instanceof ut)ot.warn(e.message);else{const t=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(t.message)}}}async function oc(n,e){try{const r=(await Fl()).transaction(sr,"readwrite");await r.objectStore(sr).put(e,Bl(n)),await r.done}catch(t){if(t instanceof ut)ot.warn(t.message);else{const r=wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ot.warn(r.message)}}}function Bl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vp=1024,Ep=30;class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ip(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ac();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ep){const a=xp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ac(),{heartbeatsToSend:r,unsentEntries:s}=Tp(this._heartbeatsCache.heartbeats),i=rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ot.warn(t),""}}}function ac(){return new Date().toISOString().substring(0,10)}function Tp(n,e=vp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),cc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),cc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return oc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return oc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cc(n){return rs(JSON.stringify({version:2,heartbeats:n})).length}function xp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function bp(n){dn(new qt("platform-logger",e=>new Lf(e),"PRIVATE")),dn(new qt("heartbeat",e=>new wp(e),"PRIVATE")),Tt(Oi,sc,n),Tt(Oi,sc,"esm2017"),Tt("fire-js","")}bp("");function co(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ap=zl,ql=new fr("auth","Firebase",zl());/**
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
 */const is=new io("@firebase/auth");function Sp(n,...e){is.logLevel<=Q.WARN&&is.warn(`Auth (${wn}): ${n}`,...e)}function Gr(n,...e){is.logLevel<=Q.ERROR&&is.error(`Auth (${wn}): ${n}`,...e)}/**
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
 */function He(n,...e){throw lo(n,...e)}function Ge(n,...e){return lo(n,...e)}function $l(n,e,t){const r=Object.assign(Object.assign({},Ap()),{[e]:t});return new fr("auth","Firebase",r).create(e,{appName:n.name})}function st(n){return $l(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ql.create(n,...e)}function $(n,e,...t){if(!n)throw lo(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gr(e),new Error(e)}function at(n,e){n||nt(e)}/**
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
 */function Mi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kp(){return lc()==="http:"||lc()==="https:"}function lc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kp()||sf()||"connection"in navigator)?navigator.onLine:!0}function Cp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=tf()||of()}get(){return Rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uo(n,e){at(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Hl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Pp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Np=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dp=new mr(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nt(n,e,t,r,s={}){return Wl(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=pr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},i);return rf()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&En(n.emulatorConfig.host)&&(f.credentials="include"),Hl.fetch()(await Gl(n,n.config.apiHost,t,l),f)})}async function Wl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pp),e);try{const s=new Op(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Br(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Br(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Br(n,"user-disabled",a);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw $l(n,g,f);He(n,g)}}catch(s){if(s instanceof ut)throw s;He(n,"network-request-failed",{message:String(s)})}}async function gr(n,e,t,r,s={}){const i=await Nt(n,e,t,r,s);return"mfaPendingCredential"in i&&He(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Gl(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?uo(n.config,s):`${n.config.apiScheme}://${s}`;return Np.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Vp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Op{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Dp.get())})}}function Br(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function uc(n){return n!==void 0&&n.enterprise!==void 0}class jp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Lp(n,e){return Nt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
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
 */async function Mp(n,e){return Nt(n,"POST","/v1/accounts:delete",e)}async function os(n,e){return Nt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Up(n,e=!1){const t=we(n),r=await t.getIdToken(e),s=ho(r);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zn(Ti(s.auth_time)),issuedAtTime:Zn(Ti(s.iat)),expirationTime:Zn(Ti(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ti(n){return Number(n)*1e3}function ho(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cl(t);return s?JSON.parse(s):(Gr("Failed to decode base64 JWT payload"),null)}catch(s){return Gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hc(n){const e=ho(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ir(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ut&&Fp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Fp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ui{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ir(n,os(t,{idToken:r}));$(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kl(i.providerUserInfo):[],l=qp(n.providerData,a),u=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),g=u?f:!1,T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ui(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(n,T)}async function zp(n){const e=we(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kl(n){return n.map(e=>{var{providerId:t}=e,r=co(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $p(n,e){const t=await Wl(n,{},async()=>{const r=pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Gl(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&En(n.emulatorConfig.host)&&(u.credentials="include"),Hl.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hp(n,e){return Nt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
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
 */class cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=hc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await $p(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new cn;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function pt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ui(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ir(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Up(this,e)}reload(){return zp(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await ir(this,Mp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,f,g;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(f=t.createdAt)!==null&&f!==void 0?f:void 0,j=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:V,emailVerified:B,isAnonymous:z,providerData:P,stsTokenManager:y}=t;$(V&&y,e,"internal-error");const m=cn.fromJSON(this.name,y);$(typeof V=="string",e,"internal-error"),pt(T,e.name),pt(w,e.name),$(typeof B=="boolean",e,"internal-error"),$(typeof z=="boolean",e,"internal-error"),pt(A,e.name),pt(R,e.name),pt(D,e.name),pt(k,e.name),pt(L,e.name),pt(j,e.name);const _=new qe({uid:V,auth:e,email:w,emailVerified:B,displayName:T,isAnonymous:z,photoURL:R,phoneNumber:A,tenantId:D,stsTokenManager:m,createdAt:L,lastLoginAt:j});return P&&Array.isArray(P)&&(_.providerData=P.map(v=>Object.assign({},v))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new cn;s.updateFromServerResponse(t);const i=new qe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new cn;l.updateFromIdToken(r);const u=new qe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ui(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
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
 */const dc=new Map;function rt(n){at(n instanceof Function,"Expected a class definition");let e=dc.get(n);return e?(at(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dc.set(n,e),e)}/**
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
 */class Ql{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ql.type="NONE";const fc=Ql;/**
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
 */function Kr(n,e,t){return`firebase:${n}:${e}:${t}`}class ln{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await os(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ln(rt(fc),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||rt(fc);const a=Kr(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const g=await f._get(a);if(g){let T;if(typeof g=="string"){const w=await os(e,{idToken:g}).catch(()=>{});if(!w)break;T=await qe._fromGetAccountInfoResponse(e,w,g)}else T=qe._fromJSON(e,g);f!==i&&(l=T),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ln(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new ln(i,e,r))}}/**
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
 */function pc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tu(e))return"Blackberry";if(nu(e))return"Webos";if(Yl(e))return"Safari";if((e.includes("chrome/")||Jl(e))&&!e.includes("edge/"))return"Chrome";if(eu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xl(n=Re()){return/firefox\//i.test(n)}function Yl(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jl(n=Re()){return/crios\//i.test(n)}function Zl(n=Re()){return/iemobile/i.test(n)}function eu(n=Re()){return/android/i.test(n)}function tu(n=Re()){return/blackberry/i.test(n)}function nu(n=Re()){return/webos/i.test(n)}function fo(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wp(n=Re()){var e;return fo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gp(){return af()&&document.documentMode===10}function ru(n=Re()){return fo(n)||eu(n)||nu(n)||tu(n)||/windows phone/i.test(n)||Zl(n)}/**
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
 */function su(n,e=[]){let t;switch(n){case"Browser":t=pc(Re());break;case"Worker":t=`${pc(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${r}`}/**
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
 */async function Qp(n,e={}){return Nt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
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
 */class Jp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mc(this),this.idTokenSubscription=new mc(this),this.beforeStateQueue=new Kp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ql,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await os(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Fe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(st(this));const t=e?we(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qp(this),t=new Yp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=su(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kt(n){return we(n)}class mc{constructor(e){this.auth=e,this.observer=null,this.addObserver=mf(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let As={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zp(n){As=n}function iu(n){return As.loadJS(n)}function em(){return As.recaptchaEnterpriseScript}function tm(){return As.gapiScript}function nm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class rm{constructor(){this.enterprise=new sm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const im="recaptcha-enterprise",ou="NO_RECAPTCHA";class om{constructor(e){this.type=im,this.auth=Kt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{Lp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new jp(u);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;uc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(ou)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&uc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=em();u.length!==0&&(u+=l),iu(u).then(()=>{s(l,i,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function qn(n,e,t,r=!1,s=!1){const i=new om(n);let a;if(s)a=ou;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fi(n,e,t,r,s){var i,a;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await qn(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await qn(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(l)});else if(s==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){const l=await qn(n,e,t);return r(n,l).catch(async u=>{var f;if(((f=n._getRecaptchaConfig())===null||f===void 0?void 0:f.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const g=await qn(n,e,t,!1,!0);return r(n,g)}return Promise.reject(u)})}else{const l=await qn(n,e,t,!1,!0);return r(n,l)}else return Promise.reject(s+" provider is not supported.")}/**
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
 */function am(n,e){const t=ao(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(zt(i,e??{}))return s;He(s,"already-initialized")}return t.initialize({options:e})}function cm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lm(n,e,t){const r=Kt(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=au(e),{host:a,port:l}=um(e),u=l===null?"":`:${l}`,f={url:`${i}//${a}${u}/`},g=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(zt(f,r.config.emulator)&&zt(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,En(a)?(Vl(`${i}//${a}${u}`),Ol("Auth",!0)):s||hm()}function au(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function um(n){const e=au(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:gc(a)}}}function gc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class po{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function dm(n,e){return Nt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fm(n,e){return gr(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}/**
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
 */async function pm(n,e){return gr(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function mm(n,e){return gr(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
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
 */class or extends po{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new or(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new or(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fi(e,t,"signInWithPassword",fm,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return pm(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fi(e,r,"signUpPassword",dm,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mm(e,{idToken:t,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function un(n,e){return gr(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
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
 */const gm="http://localhost";class $t extends po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=co(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new $t(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return un(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,un(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,un(e,t)}buildRequest(){const e={requestUri:gm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pr(t)}return e}}/**
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
 */function _m(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ym(n){const e=Wn(Gn(n)).link,t=e?Wn(Gn(e)).deep_link_id:null,r=Wn(Gn(n)).deep_link_id;return(r?Wn(Gn(r)).link:null)||r||t||e||n}class mo{constructor(e){var t,r,s,i,a,l;const u=Wn(Gn(e)),f=(t=u.apiKey)!==null&&t!==void 0?t:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,T=_m((s=u.mode)!==null&&s!==void 0?s:null);$(f&&g&&T,"argument-error"),this.apiKey=f,this.operation=T,this.code=g,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=ym(e);try{return new mo(t)}catch{return null}}}/**
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
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(e,t){return or._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mo.parseLink(t);return $(r,"argument-error"),or._fromEmailAndCode(e,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _r extends cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends _r{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class gt extends _r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class _t extends _r{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class yt extends _r{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function vm(n,e){return gr(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await qe._fromIdTokenResponse(e,r,s),a=_c(r);return new Ht({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_c(r);return new Ht({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _c(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class cs extends ut{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new cs(e,t,r,s)}}function lu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(n,i,e,r):i})}async function Em(n,e,t=!1){const r=await ir(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ht._forOperation(n,"link",r)}/**
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
 */async function wm(n,e,t=!1){const{auth:r}=n;if(Fe(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await ir(n,lu(r,s,e,n),t);$(i.idToken,r,"internal-error");const a=ho(i.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(n.uid===l,r,"user-mismatch"),Ht._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
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
 */async function uu(n,e,t=!1){if(Fe(n.app))return Promise.reject(st(n));const r="signIn",s=await lu(n,r,e),i=await Ht._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Tm(n,e){return uu(Kt(n),e)}/**
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
 */async function hu(n){const e=Kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Im(n,e,t){if(Fe(n.app))return Promise.reject(st(n));const r=Kt(n),a=await Fi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vm,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&hu(n),u}),l=await Ht._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function xm(n,e,t){return Fe(n.app)?Promise.reject(st(n)):Tm(we(n),Tn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hu(n),r})}function bm(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function Am(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function Sm(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function km(n){return we(n).signOut()}const ls="__sak";/**
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
 */class du{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rm=1e3,Cm=10;class fu extends du{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cm):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fu.type="LOCAL";const Pm=fu;/**
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
 */class pu extends du{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pu.type="SESSION";const mu=pu;/**
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
 */class Ss{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ss(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(t.origin,i)),u=await Nm(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ss.receivers=[];/**
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
 */function go(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const f=go("",20);s.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(T){const w=T;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function gu(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Om(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Lm(){return gu()?self:null}/**
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
 */const _u="firebaseLocalStorageDb",Mm=1,us="firebaseLocalStorage",yu="fbase_key";class yr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ks(n,e){return n.transaction([us],e?"readwrite":"readonly").objectStore(us)}function Um(){const n=indexedDB.deleteDatabase(_u);return new yr(n).toPromise()}function Bi(){const n=indexedDB.open(_u,Mm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(us,{keyPath:yu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await Um(),e(await Bi()))})})}async function yc(n,e,t){const r=ks(n,!0).put({[yu]:e,value:t});return new yr(r).toPromise()}async function Fm(n,e){const t=ks(n,!1).get(e),r=await new yr(t).toPromise();return r===void 0?null:r.value}function vc(n,e){const t=ks(n,!0).delete(e);return new yr(t).toPromise()}const Bm=800,zm=3;class vu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>zm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ss._getInstance(Lm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Om(),!this.activeServiceWorker)return;this.sender=new Dm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await yc(e,ls,"1"),await vc(e,ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ks(s,!1).getAll();return new yr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vu.type="LOCAL";const qm=vu;new mr(3e4,6e4);/**
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
 */function $m(n,e){return e?rt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _o extends po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hm(n){return uu(n.auth,new _o(n),n.bypassAuthState)}function Wm(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),wm(t,new _o(n),n.bypassAuthState)}async function Gm(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Em(t,new _o(n),n.bypassAuthState)}/**
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
 */class Eu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hm;case"linkViaPopup":case"linkViaRedirect":return Gm;case"reauthViaPopup":case"reauthViaRedirect":return Wm;default:He(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Km=new mr(2e3,1e4);class an extends Eu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Km.get())};e()}}an.currentPopupAction=null;/**
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
 */const Qm="pendingRedirect",Qr=new Map;class Xm extends Eu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Qr.get(this.auth._key());if(!e){try{const r=await Ym(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Qr.set(this.auth._key(),e)}return this.bypassAuthState||Qr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ym(n,e){const t=eg(e),r=Zm(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Jm(n,e){Qr.set(n._key(),e)}function Zm(n){return rt(n._redirectPersistence)}function eg(n){return Kr(Qm,n.config.apiKey,n.name)}async function tg(n,e,t=!1){if(Fe(n.app))return Promise.reject(st(n));const r=Kt(n),s=$m(r,e),a=await new Xm(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const ng=10*60*1e3;class rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ec(e))}saveEventToCache(e){this.cachedEventUids.add(Ec(e)),this.lastProcessedEventTime=Date.now()}}function Ec(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wu(n);default:return!1}}/**
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
 */async function ig(n,e={}){return Nt(n,"GET","/v1/projects",e)}/**
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
 */const og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ag=/^https?/;async function cg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ig(n);for(const t of e)try{if(lg(t))return}catch{}He(n,"unauthorized-domain")}function lg(n){const e=Mi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ag.test(t))return!1;if(og.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ug=new mr(3e4,6e4);function wc(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hg(n){return new Promise((e,t)=>{var r,s,i;function a(){wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wc(),t(Ge(n,"network-request-failed"))},timeout:ug.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)a();else{const l=nm("iframefcb");return Ke()[l]=()=>{gapi.load?a():t(Ge(n,"network-request-failed"))},iu(`${tm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function dg(n){return Xr=Xr||hg(n),Xr}/**
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
 */const fg=new mr(5e3,15e3),pg="__/auth/iframe",mg="emulator/auth/iframe",gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_g=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uo(e,mg):`https://${n.config.authDomain}/${pg}`,r={apiKey:e.apiKey,appName:n.name,v:wn},s=_g.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${pr(r).slice(1)}`}async function vg(n){const e=await dg(n),t=Ke().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(a)},fg.get());function u(){Ke().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wg=500,Tg=600,Ig="_blank",xg="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bg(n,e,t,r=wg,s=Tg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Eg),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Re().toLowerCase();t&&(l=Jl(f)?Ig:t),Xl(f)&&(e=e||xg,u.scrollbars="yes");const g=Object.entries(u).reduce((w,[A,R])=>`${w}${A}=${R},`,"");if(Wp(f)&&l!=="_self")return Ag(e||"",l),new Tc(null);const T=window.open(e||"",l,g);$(T,n,"popup-blocked");try{T.focus()}catch{}return new Tc(T)}function Ag(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Sg="__/auth/handler",kg="emulator/auth/handler",Rg=encodeURIComponent("fac");async function Ic(n,e,t,r,s,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:wn,eventId:s};if(e instanceof cu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",pf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,T]of Object.entries(i||{}))a[g]=T}if(e instanceof _r){const g=e.getScopes().filter(T=>T!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const u=await n._getAppCheckToken(),f=u?`#${Rg}=${encodeURIComponent(u)}`:"";return`${Cg(n)}?${pr(l).slice(1)}${f}`}function Cg({config:n}){return n.emulator?uo(n,kg):`https://${n.authDomain}/${Sg}`}/**
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
 */const Ii="webStorageSupport";class Pg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mu,this._completeRedirectFn=tg,this._overrideRedirectResult=Jm}async _openPopup(e,t,r,s){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ic(e,t,r,Mi(),s);return bg(e,a,go())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ic(e,t,r,Mi(),s);return Vm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(at(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await vg(e),r=new rg(e);return t.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ii,{type:Ii},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ii];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ru()||Yl()||fo()}}const Ng=Pg;var xc="@firebase/auth",bc="1.10.7";/**
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
 */class Dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Og(n){dn(new qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:su(n)},f=new Jp(r,s,i,u);return cm(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dn(new qt("auth-internal",e=>{const t=Kt(e.getProvider("auth").getImmediate());return(r=>new Dg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(xc,bc,Vg(n)),Tt(xc,bc,"esm2017")}/**
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
 */const jg=5*60,Lg=Dl("authIdTokenMaxAge")||jg;let Ac=null;const Mg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Lg)return;const s=t==null?void 0:t.token;Ac!==s&&(Ac=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ug(n=Ul()){const e=ao(n,"auth");if(e.isInitialized())return e.getImmediate();const t=am(n,{popupRedirectResolver:Ng,persistence:[qm,Pm,mu]}),r=Dl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Mg(i.toString());Am(t,a,()=>a(t.currentUser)),bm(t,l=>a(l))}}const s=Pl("auth");return s&&lm(t,`http://${s}`),t}function Fg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Zp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Fg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Og("Browser");var Bg="firebase",zg="11.9.1";/**
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
 */Tt(Bg,zg,"app");var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var It,Tu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,m){function _(){}_.prototype=m.prototype,y.D=m.prototype,y.prototype=new _,y.prototype.constructor=y,y.C=function(v,I,x){for(var E=Array(arguments.length-2),se=2;se<arguments.length;se++)E[se-2]=arguments[se];return m.prototype[I].apply(v,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)v[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=y.g[0],_=y.g[1],I=y.g[2];var x=y.g[3],E=m+(x^_&(I^x))+v[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=x+(I^m&(_^I))+v[1]+3905402710&4294967295,x=m+(E<<12&4294967295|E>>>20),E=I+(_^x&(m^_))+v[2]+606105819&4294967295,I=x+(E<<17&4294967295|E>>>15),E=_+(m^I&(x^m))+v[3]+3250441966&4294967295,_=I+(E<<22&4294967295|E>>>10),E=m+(x^_&(I^x))+v[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=x+(I^m&(_^I))+v[5]+1200080426&4294967295,x=m+(E<<12&4294967295|E>>>20),E=I+(_^x&(m^_))+v[6]+2821735955&4294967295,I=x+(E<<17&4294967295|E>>>15),E=_+(m^I&(x^m))+v[7]+4249261313&4294967295,_=I+(E<<22&4294967295|E>>>10),E=m+(x^_&(I^x))+v[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=x+(I^m&(_^I))+v[9]+2336552879&4294967295,x=m+(E<<12&4294967295|E>>>20),E=I+(_^x&(m^_))+v[10]+4294925233&4294967295,I=x+(E<<17&4294967295|E>>>15),E=_+(m^I&(x^m))+v[11]+2304563134&4294967295,_=I+(E<<22&4294967295|E>>>10),E=m+(x^_&(I^x))+v[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=x+(I^m&(_^I))+v[13]+4254626195&4294967295,x=m+(E<<12&4294967295|E>>>20),E=I+(_^x&(m^_))+v[14]+2792965006&4294967295,I=x+(E<<17&4294967295|E>>>15),E=_+(m^I&(x^m))+v[15]+1236535329&4294967295,_=I+(E<<22&4294967295|E>>>10),E=m+(I^x&(_^I))+v[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=x+(_^I&(m^_))+v[6]+3225465664&4294967295,x=m+(E<<9&4294967295|E>>>23),E=I+(m^_&(x^m))+v[11]+643717713&4294967295,I=x+(E<<14&4294967295|E>>>18),E=_+(x^m&(I^x))+v[0]+3921069994&4294967295,_=I+(E<<20&4294967295|E>>>12),E=m+(I^x&(_^I))+v[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=x+(_^I&(m^_))+v[10]+38016083&4294967295,x=m+(E<<9&4294967295|E>>>23),E=I+(m^_&(x^m))+v[15]+3634488961&4294967295,I=x+(E<<14&4294967295|E>>>18),E=_+(x^m&(I^x))+v[4]+3889429448&4294967295,_=I+(E<<20&4294967295|E>>>12),E=m+(I^x&(_^I))+v[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=x+(_^I&(m^_))+v[14]+3275163606&4294967295,x=m+(E<<9&4294967295|E>>>23),E=I+(m^_&(x^m))+v[3]+4107603335&4294967295,I=x+(E<<14&4294967295|E>>>18),E=_+(x^m&(I^x))+v[8]+1163531501&4294967295,_=I+(E<<20&4294967295|E>>>12),E=m+(I^x&(_^I))+v[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=x+(_^I&(m^_))+v[2]+4243563512&4294967295,x=m+(E<<9&4294967295|E>>>23),E=I+(m^_&(x^m))+v[7]+1735328473&4294967295,I=x+(E<<14&4294967295|E>>>18),E=_+(x^m&(I^x))+v[12]+2368359562&4294967295,_=I+(E<<20&4294967295|E>>>12),E=m+(_^I^x)+v[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=x+(m^_^I)+v[8]+2272392833&4294967295,x=m+(E<<11&4294967295|E>>>21),E=I+(x^m^_)+v[11]+1839030562&4294967295,I=x+(E<<16&4294967295|E>>>16),E=_+(I^x^m)+v[14]+4259657740&4294967295,_=I+(E<<23&4294967295|E>>>9),E=m+(_^I^x)+v[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=x+(m^_^I)+v[4]+1272893353&4294967295,x=m+(E<<11&4294967295|E>>>21),E=I+(x^m^_)+v[7]+4139469664&4294967295,I=x+(E<<16&4294967295|E>>>16),E=_+(I^x^m)+v[10]+3200236656&4294967295,_=I+(E<<23&4294967295|E>>>9),E=m+(_^I^x)+v[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=x+(m^_^I)+v[0]+3936430074&4294967295,x=m+(E<<11&4294967295|E>>>21),E=I+(x^m^_)+v[3]+3572445317&4294967295,I=x+(E<<16&4294967295|E>>>16),E=_+(I^x^m)+v[6]+76029189&4294967295,_=I+(E<<23&4294967295|E>>>9),E=m+(_^I^x)+v[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=x+(m^_^I)+v[12]+3873151461&4294967295,x=m+(E<<11&4294967295|E>>>21),E=I+(x^m^_)+v[15]+530742520&4294967295,I=x+(E<<16&4294967295|E>>>16),E=_+(I^x^m)+v[2]+3299628645&4294967295,_=I+(E<<23&4294967295|E>>>9),E=m+(I^(_|~x))+v[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=x+(_^(m|~I))+v[7]+1126891415&4294967295,x=m+(E<<10&4294967295|E>>>22),E=I+(m^(x|~_))+v[14]+2878612391&4294967295,I=x+(E<<15&4294967295|E>>>17),E=_+(x^(I|~m))+v[5]+4237533241&4294967295,_=I+(E<<21&4294967295|E>>>11),E=m+(I^(_|~x))+v[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=x+(_^(m|~I))+v[3]+2399980690&4294967295,x=m+(E<<10&4294967295|E>>>22),E=I+(m^(x|~_))+v[10]+4293915773&4294967295,I=x+(E<<15&4294967295|E>>>17),E=_+(x^(I|~m))+v[1]+2240044497&4294967295,_=I+(E<<21&4294967295|E>>>11),E=m+(I^(_|~x))+v[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=x+(_^(m|~I))+v[15]+4264355552&4294967295,x=m+(E<<10&4294967295|E>>>22),E=I+(m^(x|~_))+v[6]+2734768916&4294967295,I=x+(E<<15&4294967295|E>>>17),E=_+(x^(I|~m))+v[13]+1309151649&4294967295,_=I+(E<<21&4294967295|E>>>11),E=m+(I^(_|~x))+v[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=x+(_^(m|~I))+v[11]+3174756917&4294967295,x=m+(E<<10&4294967295|E>>>22),E=I+(m^(x|~_))+v[2]+718787259&4294967295,I=x+(E<<15&4294967295|E>>>17),E=_+(x^(I|~m))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,y.g[2]=y.g[2]+I&4294967295,y.g[3]=y.g[3]+x&4294967295}r.prototype.u=function(y,m){m===void 0&&(m=y.length);for(var _=m-this.blockSize,v=this.B,I=this.h,x=0;x<m;){if(I==0)for(;x<=_;)s(this,y,x),x+=this.blockSize;if(typeof y=="string"){for(;x<m;)if(v[I++]=y.charCodeAt(x++),I==this.blockSize){s(this,v),I=0;break}}else for(;x<m;)if(v[I++]=y[x++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;var _=8*this.o;for(m=y.length-8;m<y.length;++m)y[m]=_&255,_/=256;for(this.u(y),y=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)y[_++]=this.g[m]>>>v&255;return y};function i(y,m){var _=l;return Object.prototype.hasOwnProperty.call(_,y)?_[y]:_[y]=m(y)}function a(y,m){this.h=m;for(var _=[],v=!0,I=y.length-1;0<=I;I--){var x=y[I]|0;v&&x==m||(_[I]=x,v=!1)}this.g=_}var l={};function u(y){return-128<=y&&128>y?i(y,function(m){return new a([m|0],0>m?-1:0)}):new a([y|0],0>y?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return T;if(0>y)return k(f(-y));for(var m=[],_=1,v=0;y>=_;v++)m[v]=y/_|0,_*=4294967296;return new a(m,0)}function g(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return k(g(y.substring(1),m));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),v=T,I=0;I<y.length;I+=8){var x=Math.min(8,y.length-I),E=parseInt(y.substring(I,I+x),m);8>x?(x=f(Math.pow(m,x)),v=v.j(x).add(f(E))):(v=v.j(_),v=v.add(f(E)))}return v}var T=u(0),w=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var y=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);y+=(0<=v?v:4294967296+v)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(D(this))return"-"+k(this).toString(y);for(var m=f(Math.pow(y,6)),_=this,v="";;){var I=B(_,m).g;_=L(_,I.j(m));var x=((0<_.g.length?_.g[0]:_.h)>>>0).toString(y);if(_=I,R(_))return x+v;for(;6>x.length;)x="0"+x;v=x+v}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(var m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function D(y){return y.h==-1}n.l=function(y){return y=L(this,y),D(y)?-1:R(y)?0:1};function k(y){for(var m=y.g.length,_=[],v=0;v<m;v++)_[v]=~y.g[v];return new a(_,~y.h).add(w)}n.abs=function(){return D(this)?k(this):this},n.add=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0,I=0;I<=m;I++){var x=v+(this.i(I)&65535)+(y.i(I)&65535),E=(x>>>16)+(this.i(I)>>>16)+(y.i(I)>>>16);v=E>>>16,x&=65535,E&=65535,_[I]=E<<16|x}return new a(_,_[_.length-1]&-2147483648?-1:0)};function L(y,m){return y.add(k(m))}n.j=function(y){if(R(this)||R(y))return T;if(D(this))return D(y)?k(this).j(k(y)):k(k(this).j(y));if(D(y))return k(this.j(k(y)));if(0>this.l(A)&&0>y.l(A))return f(this.m()*y.m());for(var m=this.g.length+y.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<y.g.length;I++){var x=this.i(v)>>>16,E=this.i(v)&65535,se=y.i(I)>>>16,Ce=y.i(I)&65535;_[2*v+2*I]+=E*Ce,j(_,2*v+2*I),_[2*v+2*I+1]+=x*Ce,j(_,2*v+2*I+1),_[2*v+2*I+1]+=E*se,j(_,2*v+2*I+1),_[2*v+2*I+2]+=x*se,j(_,2*v+2*I+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function j(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function V(y,m){this.g=y,this.h=m}function B(y,m){if(R(m))throw Error("division by zero");if(R(y))return new V(T,T);if(D(y))return m=B(k(y),m),new V(k(m.g),k(m.h));if(D(m))return m=B(y,k(m)),new V(k(m.g),m.h);if(30<y.g.length){if(D(y)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=m;0>=v.l(y);)_=z(_),v=z(v);var I=P(_,1),x=P(v,1);for(v=P(v,2),_=P(_,2);!R(v);){var E=x.add(v);0>=E.l(y)&&(I=I.add(_),x=E),v=P(v,1),_=P(_,1)}return m=L(y,I.j(m)),new V(I,m)}for(I=T;0<=y.l(m);){for(_=Math.max(1,Math.floor(y.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),x=f(_),E=x.j(m);D(E)||0<E.l(y);)_-=v,x=f(_),E=x.j(m);R(x)&&(x=w),I=I.add(x),y=L(y,E)}return new V(I,y)}n.A=function(y){return B(this,y).h},n.and=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&y.i(v);return new a(_,this.h&y.h)},n.or=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|y.i(v);return new a(_,this.h|y.h)},n.xor=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^y.i(v);return new a(_,this.h^y.h)};function z(y){for(var m=y.g.length+1,_=[],v=0;v<m;v++)_[v]=y.i(v)<<1|y.i(v-1)>>>31;return new a(_,y.h)}function P(y,m){var _=m>>5;m%=32;for(var v=y.g.length-_,I=[],x=0;x<v;x++)I[x]=0<m?y.i(x+_)>>>m|y.i(x+_+1)<<32-m:y.i(x+_);return new a(I,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,It=a}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iu,Kn,xu,Yr,zi,bu,Au,Su;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zr=="object"&&zr];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in d))break e;d=d[b]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var d=0,p=!1,b={next:function(){if(!p&&d<o.length){var S=d++;return{value:c(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function g(o,c,d){return o.call.apply(o.bind,arguments)}function T(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function w(o,c,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:T,w.apply(null,arguments)}function A(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,b,S){for(var O=Array(arguments.length-2),re=2;re<arguments.length;re++)O[re-2]=arguments[re];return c.prototype[b].apply(p,O)}}function D(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function k(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const b=o.length||0,S=p.length||0;o.length=b+S;for(let O=0;O<S;O++)o[b+O]=p[O]}else o.push(p)}}class L{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var z=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function P(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function y(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function m(o){const c={};for(const d in o)c[d]=o[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let d,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(d in p)o[d]=p[d];for(let S=0;S<_.length;S++)d=_[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function x(o){l.setTimeout(()=>{throw o},0)}function E(){var o=ee;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class se{constructor(){this.h=this.g=null}add(c,d){const p=Ce.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Ce=new L(()=>new Ot,o=>o.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,fe=!1,ee=new se,Ue=()=>{const o=l.Promise.resolve(void 0);Me=()=>{o.then(Y)}};var Y=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){x(d)}var c=Ce;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}fe=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ws=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function kn(o,c){if(he.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(z){e:{try{B(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&kn.aa.h.call(this)}}R(kn,he);var rd={2:"touch",3:"pen",4:"mouse"};kn.prototype.h=function(){kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),sd=0;function id(o,c,d,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=b,this.key=++sd,this.da=this.fa=!1}function Ir(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function xr(o){this.src=o,this.g={},this.h=0}xr.prototype.add=function(o,c,d,p,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var O=Ks(o,c,p,b);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new id(c,this.src,S,!!p,b),c.fa=d,o.push(c)),c};function Gs(o,c){var d=c.type;if(d in o.g){var p=o.g[d],b=Array.prototype.indexOf.call(p,c,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(Ir(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ks(o,c,d,p){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==p)return b}return-1}var Qs="closure_lm_"+(1e6*Math.random()|0),Xs={};function Jo(o,c,d,p,b){if(p&&p.once)return ea(o,c,d,p,b);if(Array.isArray(c)){for(var S=0;S<c.length;S++)Jo(o,c[S],d,p,b);return null}return d=ei(d),o&&o[Rn]?o.K(c,d,f(p)?!!p.capture:!!p,b):Zo(o,c,d,!1,p,b)}function Zo(o,c,d,p,b,S){if(!c)throw Error("Invalid event type");var O=f(b)?!!b.capture:!!b,re=Js(o);if(re||(o[Qs]=re=new xr(o)),d=re.add(c,d,p,O,S),d.proxy)return d;if(p=od(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Ws||(b=O),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(na(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function od(){function o(d){return c.call(o.src,o.listener,d)}const c=ad;return o}function ea(o,c,d,p,b){if(Array.isArray(c)){for(var S=0;S<c.length;S++)ea(o,c[S],d,p,b);return null}return d=ei(d),o&&o[Rn]?o.L(c,d,f(p)?!!p.capture:!!p,b):Zo(o,c,d,!0,p,b)}function ta(o,c,d,p,b){if(Array.isArray(c))for(var S=0;S<c.length;S++)ta(o,c[S],d,p,b);else p=f(p)?!!p.capture:!!p,d=ei(d),o&&o[Rn]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],d=Ks(S,d,p,b),-1<d&&(Ir(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Js(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ks(c,d,p,b)),(d=-1<o?c[o]:null)&&Ys(d))}function Ys(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Rn])Gs(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(na(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Js(c))?(Gs(d,o),d.h==0&&(d.src=null,c[Qs]=null)):Ir(o)}}}function na(o){return o in Xs?Xs[o]:Xs[o]="on"+o}function ad(o,c){if(o.da)o=!0;else{c=new kn(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Ys(o),o=d.call(p,c)}return o}function Js(o){return o=o[Qs],o instanceof xr?o:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ei(o){return typeof o=="function"?o:(o[Zs]||(o[Zs]=function(c){return o.handleEvent(c)}),o[Zs])}function Ie(){oe.call(this),this.i=new xr(this),this.M=this,this.F=null}R(Ie,oe),Ie.prototype[Rn]=!0,Ie.prototype.removeEventListener=function(o,c,d,p){ta(this,o,c,d,p)};function Pe(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new he(c,o);else if(c instanceof he)c.target=c.target||o;else{var b=c;c=new he(p,o),v(c,b)}if(b=!0,d)for(var S=d.length-1;0<=S;S--){var O=c.g=d[S];b=br(O,p,!0,c)&&b}if(O=c.g=o,b=br(O,p,!0,c)&&b,b=br(O,p,!1,c)&&b,d)for(S=0;S<d.length;S++)O=c.g=d[S],b=br(O,p,!1,c)&&b}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Ir(d[p]);delete o.g[c],o.h--}}this.F=null},Ie.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},Ie.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function br(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,S=0;S<c.length;++S){var O=c[S];if(O&&!O.da&&O.capture==d){var re=O.listener,ye=O.ha||O.src;O.fa&&Gs(o.i,O),b=re.call(ye,p)!==!1&&b}}return b&&!p.defaultPrevented}function ra(o,c,d){if(typeof o=="function")d&&(o=w(o,d));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function sa(o){o.g=ra(()=>{o.g=null,o.i&&(o.i=!1,sa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class cd extends oe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:sa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(o){oe.call(this),this.h=o,this.g={}}R(Cn,oe);var ia=[];function oa(o){P(o.g,function(c,d){this.g.hasOwnProperty(d)&&Ys(c)},o),o.g={}}Cn.prototype.N=function(){Cn.aa.N.call(this),oa(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=l.JSON.stringify,ld=l.JSON.parse,ud=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ni(){}ni.prototype.h=null;function aa(o){return o.h||(o.h=o.i())}function ca(){}var Pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ri(){he.call(this,"d")}R(ri,he);function si(){he.call(this,"c")}R(si,he);var jt={},la=null;function Ar(){return la=la||new Ie}jt.La="serverreachability";function ua(o){he.call(this,jt.La,o)}R(ua,he);function Nn(o){const c=Ar();Pe(c,new ua(c))}jt.STAT_EVENT="statevent";function ha(o,c){he.call(this,jt.STAT_EVENT,o),this.stat=c}R(ha,he);function Ne(o){const c=Ar();Pe(c,new ha(c,o))}jt.Ma="timingevent";function da(o,c){he.call(this,jt.Ma,o),this.size=c}R(da,he);function Dn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function hd(o,c,d,p,b,S){o.info(function(){if(o.g)if(S)for(var O="",re=S.split("&"),ye=0;ye<re.length;ye++){var Z=re[ye].split("=");if(1<Z.length){var xe=Z[0];Z=Z[1];var be=xe.split("_");O=2<=be.length&&be[1]=="type"?O+(xe+"="+Z+"&"):O+(xe+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+d+`
`+O})}function dd(o,c,d,p,b,S,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+d+`
`+S+" "+O})}function Yt(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+pd(o,d)+(p?" "+p:"")})}function fd(o,c){o.info(function(){return"TIMEOUT: "+c})}Vn.prototype.info=function(){};function pd(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<b.length;O++)b[O]=""}}}}return ti(d)}catch{return c}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function kr(){}R(kr,ni),kr.prototype.g=function(){return new XMLHttpRequest},kr.prototype.i=function(){return{}},ii=new kr;function ht(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pa}function pa(){this.i=null,this.g="",this.h=!1}var ma={},oi={};function ai(o,c,d){o.L=1,o.v=Nr(et(c)),o.m=d,o.P=!0,ga(o,null)}function ga(o,c){o.F=Date.now(),Rr(o),o.A=et(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ca(d.i,"t",p),o.C=0,d=o.j.J,o.h=new pa,o.g=Ka(o.j,d?c:null,!o.m),0<o.O&&(o.M=new cd(w(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(ia[0]=b.toString()),b=ia);for(var S=0;S<b.length;S++){var O=Jo(d,b[S],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Nn(),hd(o.i,o.u,o.A,o.l,o.R,o.m)}ht.prototype.ca=function(o){o=o.target;const c=this.M;c&&tt(o)==3?c.j():this.Y(o)},ht.prototype.Y=function(o){try{if(o==this.g)e:{const be=tt(this.g);var c=this.g.Ba();const en=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||La(this.g)))){this.J||be!=4||c==7||(c==8||0>=en?Nn(3):Nn(2)),ci(this);var d=this.g.Z();this.X=d;t:if(_a(this)){var p=La(this.g);o="";var b=p.length,S=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),On(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(S&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,dd(this.i,this.u,this.A,this.l,this.R,be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,ye=this.g;if((re=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(re)){var Z=re;break t}}Z=null}if(d=Z)Yt(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,li(this,d);else{this.o=!1,this.s=3,Ne(12),Lt(this),On(this);break e}}if(this.P){d=!0;let Be;for(;!this.J&&this.C<O.length;)if(Be=md(this,O),Be==oi){be==4&&(this.s=4,Ne(14),d=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==ma){this.s=4,Ne(15),Yt(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Yt(this.i,this.l,Be,null),li(this,Be);if(_a(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||O.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)Yt(this.i,this.l,O,"[Invalid Chunked Response]"),Lt(this),On(this);else if(0<O.length&&!this.W){this.W=!0;var xe=this.j;xe.g==this&&xe.ba&&!xe.M&&(xe.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),mi(xe),xe.M=!0,Ne(11))}}else Yt(this.i,this.l,O,null),li(this,O);be==4&&Lt(this),this.o&&!this.J&&(be==4?$a(this.j,this):(this.o=!1,Rr(this)))}else Nd(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Lt(this),On(this)}}}catch{}finally{}};function _a(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function md(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?oi:(d=Number(c.substring(d,p)),isNaN(d)?ma:(p+=1,p+d>c.length?oi:(c=c.slice(p,p+d),o.C=p+d,c)))}ht.prototype.cancel=function(){this.J=!0,Lt(this)};function Rr(o){o.S=Date.now()+o.I,ya(o,o.I)}function ya(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Dn(w(o.ba,o),c)}function ci(o){o.B&&(l.clearTimeout(o.B),o.B=null)}ht.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(fd(this.i,this.A),this.L!=2&&(Nn(),Ne(17)),Lt(this),this.s=2,On(this)):ya(this,this.S-o)};function On(o){o.j.G==0||o.J||$a(o.j,o)}function Lt(o){ci(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,oa(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function li(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||ui(d.h,o))){if(!o.K&&ui(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Mr(d),jr(d);else break e;pi(d),Ne(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Dn(w(d.Za,d),6e3));if(1>=wa(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ut(d,11)}else if((o.K||d.g==o)&&Mr(d),!j(c))for(b=d.Da.g.parse(c),c=0;c<b.length;c++){let Z=b[c];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const xe=Z[3];xe!=null&&(d.la=xe,d.j.info("VER="+d.la));const be=Z[4];be!=null&&(d.Aa=be,d.j.info("SVER="+d.Aa));const en=Z[5];en!=null&&typeof en=="number"&&0<en&&(p=1.5*en,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Be=o.g;if(Be){const Fr=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fr){var S=p.h;S.g||Fr.indexOf("spdy")==-1&&Fr.indexOf("quic")==-1&&Fr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(hi(S,S.h),S.h=null))}if(p.D){const gi=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;gi&&(p.ya=gi,ie(p.I,p.D,gi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Ga(p,p.J?p.ia:null,p.W),O.K){Ta(p.h,O);var re=O,ye=p.L;ye&&(re.I=ye),re.B&&(ci(re),Rr(re)),p.g=O}else za(p);0<d.i.length&&Lr(d)}else Z[0]!="stop"&&Z[0]!="close"||Ut(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Ut(d,7):fi(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Nn(4)}catch{}}var gd=class{constructor(o,c){this.g=o,this.map=c}};function va(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ea(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wa(o){return o.h?1:o.g?o.g.size:0}function ui(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function hi(o,c){o.g?o.g.add(c):o.h=c}function Ta(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}va.prototype.cancel=function(){if(this.i=Ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ia(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return D(o.i)}function _d(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function yd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function xa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=yd(o),p=_d(o),b=p.length,S=0;S<b;S++)c.call(void 0,p[S],d&&d[S],o)}var ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vd(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),b=null;if(0<=p){var S=o[d].substring(0,p);b=o[d].substring(p+1)}else S=o[d];c(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Mt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Mt){this.h=o.h,Cr(this,o.j),this.o=o.o,this.g=o.g,Pr(this,o.s),this.l=o.l;var c=o.i,d=new Mn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Aa(this,d),this.m=o.m}else o&&(c=String(o).match(ba))?(this.h=!1,Cr(this,c[1]||"",!0),this.o=jn(c[2]||""),this.g=jn(c[3]||"",!0),Pr(this,c[4]),this.l=jn(c[5]||"",!0),Aa(this,c[6]||"",!0),this.m=jn(c[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}Mt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Ln(c,Sa,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ln(c,Sa,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ln(d,d.charAt(0)=="/"?Td:wd,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ln(d,xd)),o.join("")};function et(o){return new Mt(o)}function Cr(o,c,d){o.j=d?jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Pr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Aa(o,c,d){c instanceof Mn?(o.i=c,bd(o.i,o.h)):(d||(c=Ln(c,Id)),o.i=new Mn(c,o.h))}function ie(o,c,d){o.i.set(c,d)}function Nr(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ln(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Ed),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ed(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sa=/[#\/\?@]/g,wd=/[#\?:]/g,Td=/[#\?]/g,Id=/[#\?@]/g,xd=/#/g;function Mn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function dt(o){o.g||(o.g=new Map,o.h=0,o.i&&vd(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Mn.prototype,n.add=function(o,c){dt(this),this.i=null,o=Jt(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function ka(o,c){dt(o),c=Jt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Ra(o,c){return dt(o),c=Jt(o,c),o.g.has(c)}n.forEach=function(o,c){dt(this),this.g.forEach(function(d,p){d.forEach(function(b){o.call(c,b,p,this)},this)},this)},n.na=function(){dt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const b=o[p];for(let S=0;S<b.length;S++)d.push(c[p])}return d},n.V=function(o){dt(this);let c=[];if(typeof o=="string")Ra(this,o)&&(c=c.concat(this.g.get(Jt(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return dt(this),this.i=null,o=Jt(this,o),Ra(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ca(o,c,d){ka(o,c),0<d.length&&(o.i=null,o.g.set(Jt(o,c),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var b=S;O[p]!==""&&(b+="="+encodeURIComponent(String(O[p]))),o.push(b)}}return this.i=o.join("&")};function Jt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function bd(o,c){c&&!o.j&&(dt(o),o.i=null,o.g.forEach(function(d,p){var b=p.toLowerCase();p!=b&&(ka(this,p),Ca(this,b,d))},o)),o.j=c}function Ad(o,c){const d=new Vn;if(l.Image){const p=new Image;p.onload=A(ft,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(ft,d,"TestLoadImage: error",!1,c,p),p.onabort=A(ft,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(ft,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Sd(o,c){const d=new Vn,p=new AbortController,b=setTimeout(()=>{p.abort(),ft(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?ft(d,"TestPingServer: ok",!0,c):ft(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),ft(d,"TestPingServer: error",!1,c)})}function ft(o,c,d,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(d)}catch{}}function kd(){this.g=new ud}function Rd(o,c,d){const p=d||"";try{xa(o,function(b,S){let O=b;f(b)&&(O=ti(b)),c.push(p+S+"="+encodeURIComponent(O))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function Dr(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Dr,ni),Dr.prototype.g=function(){return new Vr(this.l,this.j)},Dr.prototype.i=function(o){return function(){return o}}({});function Vr(o,c){Ie.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Vr,Ie),n=Vr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Fn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Un(this):Fn(this),this.readyState==3&&Pa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Un(this))},n.Qa=function(o){this.g&&(this.response=o,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Fn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Fn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Na(o){let c="";return P(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function di(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Na(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,c,d))}function le(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(le,Ie);var Cd=/^https?$/i,Pd=["POST","PUT"];n=le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?aa(this.o):aa(ii),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Da(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)d.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pd,c,void 0))||p||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ja(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Da(this,S)}};function Da(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Va(o),Or(o)}function Va(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),Or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Or(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Oa(this):this.bb())},n.bb=function(){Oa(this)};function Oa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tt(o)!=4||o.Z()!=2)){if(o.u&&tt(o)==4)ra(o.Ea,0,o);else if(Pe(o,"readystatechange"),tt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=O===0){var b=String(o.D).match(ba)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Cd.test(b?b.toLowerCase():"")}d=p}if(d)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var S=2<tt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Va(o)}}finally{Or(o)}}}}function Or(o,c){if(o.g){ja(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pe(o,"ready");try{d.onreadystatechange=p}catch{}}}function ja(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ld(c)}};function La(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nd(o){const c={};o=(o.g&&2<=tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(j(o[p]))continue;var d=I(o[p]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[b]||[];c[b]=S,S.push(d)}y(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Ma(o){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,o),this.cb=Bn("retryDelaySeedMs",1e4,o),this.Wa=Bn("forwardChannelMaxRetries",2,o),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new va(o&&o.concurrentRequestLimit),this.Da=new kd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ma.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Ne(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ga(this,null,this.W),Lr(this)};function fi(o){if(Ua(o),o.G==3){var c=o.U++,d=et(o.I);if(ie(d,"SID",o.K),ie(d,"RID",c),ie(d,"TYPE","terminate"),zn(o,d),c=new ht(o,o.j,c),c.L=2,c.v=Nr(et(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ka(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Rr(c)}Wa(o)}function jr(o){o.g&&(mi(o),o.g.cancel(),o.g=null)}function Ua(o){jr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Mr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Lr(o){if(!Ea(o.h)&&!o.s){o.s=!0;var c=o.Ga;Me||Ue(),fe||(Me(),fe=!0),ee.add(c,o),o.B=0}}function Dd(o,c){return wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Dn(w(o.Ga,o,c),Ha(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new ht(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),v(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ba(this,b,c),d=et(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),zn(this,d),S&&(this.O?c="headers="+encodeURIComponent(String(Na(S)))+"&"+c:this.m&&di(d,this.m,S)),hi(this.h,b),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",c),ie(d,"SID","null"),b.T=!0,ai(b,d,null)):ai(b,d,c),this.G=2}}else this.G==3&&(o?Fa(this,o):this.i.length==0||Ea(this.h)||Fa(this))};function Fa(o,c){var d;c?d=c.l:d=o.U++;const p=et(o.I);ie(p,"SID",o.K),ie(p,"RID",d),ie(p,"AID",o.T),zn(o,p),o.m&&o.o&&di(p,o.m,o.o),d=new ht(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ba(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),hi(o.h,d),ai(d,p,c)}function zn(o,c){o.H&&P(o.H,function(d,p){ie(c,p,d)}),o.l&&xa({},function(d,p){ie(c,p,d)})}function Ba(o,c,d){d=Math.min(o.i.length,d);var p=o.l?w(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const O=["count="+d];S==-1?0<d?(S=b[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let re=!0;for(let ye=0;ye<d;ye++){let Z=b[ye].g;const xe=b[ye].map;if(Z-=S,0>Z)S=Math.max(0,b[ye].g-100),re=!1;else try{Rd(xe,O,"req"+Z+"_")}catch{p&&p(xe)}}if(re){p=O.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function za(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Me||Ue(),fe||(Me(),fe=!0),ee.add(c,o),o.v=0}}function pi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Dn(w(o.Fa,o),Ha(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,qa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Dn(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),jr(this),qa(this))};function mi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function qa(o){o.g=new ht(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=et(o.qa);ie(c,"RID","rpc"),ie(c,"SID",o.K),ie(c,"AID",o.T),ie(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(c,"TO",o.ja),ie(c,"TYPE","xmlhttp"),zn(o,c),o.m&&o.o&&di(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Nr(et(c)),d.m=null,d.P=!0,ga(d,o)}n.Za=function(){this.C!=null&&(this.C=null,jr(this),pi(this),Ne(19))};function Mr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function $a(o,c){var d=null;if(o.g==c){Mr(o),mi(o),o.g=null;var p=2}else if(ui(o.h,c))d=c.D,Ta(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=Ar(),Pe(p,new da(p,d)),Lr(o)}else za(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&Dd(o,c)||p==2&&pi(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),b){case 1:Ut(o,5);break;case 4:Ut(o,10);break;case 3:Ut(o,6);break;default:Ut(o,2)}}}function Ha(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Ut(o,c){if(o.j.info("Error code "+c),c==2){var d=w(o.fb,o),p=o.Xa;const b=!p;p=new Mt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Cr(p,"https"),Nr(p),b?Ad(p.toString(),d):Sd(p.toString(),d)}else Ne(2);o.G=0,o.l&&o.l.sa(c),Wa(o),Ua(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Wa(o){if(o.G=0,o.ka=[],o.l){const c=Ia(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Ga(o,c,d){var p=d instanceof Mt?et(d):new Mt(d);if(p.g!="")c&&(p.g=c+"."+p.g),Pr(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var S=new Mt(null);p&&Cr(S,p),c&&(S.g=c),b&&Pr(S,b),d&&(S.l=d),p=S}return d=o.D,c=o.ya,d&&c&&ie(p,d,c),ie(p,"VER",o.la),zn(o,p),p}function Ka(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new le(new Dr({eb:d})):new le(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qa(){}n=Qa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ur(){}Ur.prototype.g=function(o,c){return new je(o,c)};function je(o,c){Ie.call(this),this.g=new Ma(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Zt(this)}R(je,Ie),je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){fi(this.g)},je.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ti(o),o=d);c.i.push(new gd(c.Ya++,o)),c.G==3&&Lr(c)},je.prototype.N=function(){this.g.l=null,delete this.j,fi(this.g),delete this.g,je.aa.N.call(this)};function Xa(o){ri.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}R(Xa,ri);function Ya(){si.call(this),this.status=1}R(Ya,si);function Zt(o){this.g=o}R(Zt,Qa),Zt.prototype.ua=function(){Pe(this.g,"a")},Zt.prototype.ta=function(o){Pe(this.g,new Xa(o))},Zt.prototype.sa=function(o){Pe(this.g,new Ya)},Zt.prototype.ra=function(){Pe(this.g,"b")},Ur.prototype.createWebChannel=Ur.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,Su=function(){return new Ur},Au=function(){return Ar()},bu=jt,zi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Yr=Sr,fa.COMPLETE="complete",xu=fa,ca.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Kn=ca,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,Iu=le}).apply(typeof zr<"u"?zr:typeof self<"u"?self:typeof window<"u"?window:{});const kc="@firebase/firestore",Rc="4.7.17";/**
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
 */let In="11.9.0";/**
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
 */const Wt=new io("@firebase/firestore");function nn(){return Wt.logLevel}function M(n,...e){if(Wt.logLevel<=Q.DEBUG){const t=e.map(yo);Wt.debug(`Firestore (${In}): ${n}`,...t)}}function ct(n,...e){if(Wt.logLevel<=Q.ERROR){const t=e.map(yo);Wt.error(`Firestore (${In}): ${n}`,...t)}}function fn(n,...e){if(Wt.logLevel<=Q.WARN){const t=e.map(yo);Wt.warn(`Firestore (${In}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{/**
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
 */function H(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ku(n,r,t)}function ku(n,e,t){let r=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ct(r),new Error(r)}function te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ku(e,s,r)}function G(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class it{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ru{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class $g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hg{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new it;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new it,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new it)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string",31837,{l:r}),new Ru(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class Wg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Gg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Wg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Pu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Qg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function qi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return K(r,s);{const i=Cu(),a=Xg(i.encode(Pc(n,t)),i.encode(Pc(e,t)));return a!==0?a:K(r,s)}}t+=r>65535?2:1}return K(n.length,e.length)}function Pc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Xg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return K(n[t],e[t]);return K(n.length,e.length)}function pn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Nc=-62135596800,Dc=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Dc);return new me(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nc)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Nc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new me(0,0))}static max(){return new W(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vc="__name__";class We{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&H(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=We.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=We.isNumericId(e),s=We.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?We.extractNumericId(e).compare(We.extractNumericId(t)):qi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return It.fromString(e.substring(4,e.length-2))}}class ae extends We{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const Yg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends We{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return Yg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vc}static keyField(){return new Ee([Vc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ae.fromString(e))}static fromName(e){return new q(ae.fromString(e).popFirst(5))}static empty(){return new q(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ae(e.slice()))}}/**
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
 */const ar=-1;function Jg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new me(t+1,0):new me(t,r));return new bt(s,q.empty(),e)}function Zg(n){return new bt(n.readTime,n.key,ar)}class bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bt(W.min(),q.empty(),ar)}static max(){return new bt(W.max(),q.empty(),ar)}}function e_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
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
 */async function xn(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==t_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next(g=>{a[f]=g,++l,l===i&&r(a)},g=>s(g))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function r_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Rs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Rs.le=-1;/**
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
 */const vo=-1;function Cs(n){return n==null}function hs(n){return n===0&&1/n==-1/0}function s_(n){return typeof n=="number"&&Number.isInteger(n)&&!hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Nu="";function i_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Oc(e)),e=o_(n.get(t),e);return Oc(e)}function o_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Nu:t+="";break;default:t+=i}}return t}function Oc(n){return n+Nu+""}/**
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
 */function jc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Du(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qr(this.root,e,this.comparator,!0)}}class qr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lc(this.data.getIterator())}getIteratorFrom(e){return new Lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Le([])}unionWith(e){let t=new ge(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Vu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vu("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const a_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=a_.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const Ou="server_timestamp",ju="__type__",Lu="__previous_value__",Mu="__local_write_time__";function Eo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ju])===null||t===void 0?void 0:t.stringValue)===Ou}function Ps(n){const e=n.mapValue.fields[Lu];return Eo(e)?Ps(e):e}function cr(n){const e=At(n.mapValue.fields[Mu].timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */class c_{constructor(e,t,r,s,i,a,l,u,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=g}}const ds="(default)";class lr{constructor(e,t){this.projectId=e,this.database=t||ds}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database===ds}isEqual(e){return e instanceof lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Uu="__type__",Fu="__max__",$r={mapValue:{fields:{__type__:{stringValue:Fu}}}},Bu="__vector__",fs="value";function kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Eo(n)?4:u_(n)?9007199254740991:l_(n)?10:11:H(28295,{value:n})}function Ye(n,e){if(n===e)return!0;const t=kt(n);if(t!==kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return cr(n).isEqual(cr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=At(s.timestampValue),l=At(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return St(s.bytesValue).isEqual(St(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),l=ue(i.doubleValue);return a===l?hs(a)===hs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return pn(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jc(a)!==jc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ye(a[u],l[u])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function ur(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function mn(n,e){if(n===e)return 0;const t=kt(n),r=kt(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Mc(n.timestampValue,e.timestampValue);case 4:return Mc(cr(n),cr(e));case 5:return qi(n.stringValue,e.stringValue);case 6:return function(i,a){const l=St(i),u=St(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const g=K(l[f],u[f]);if(g!==0)return g}return K(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=K(ue(i.latitude),ue(a.latitude));return l!==0?l:K(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Uc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,f,g;const T=i.fields||{},w=a.fields||{},A=(l=T[fs])===null||l===void 0?void 0:l.arrayValue,R=(u=w[fs])===null||u===void 0?void 0:u.arrayValue,D=K(((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0,((g=R==null?void 0:R.values)===null||g===void 0?void 0:g.length)||0);return D!==0?D:Uc(A,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===$r.mapValue&&a===$r.mapValue)return 0;if(i===$r.mapValue)return 1;if(a===$r.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},g=Object.keys(f);u.sort(),g.sort();for(let T=0;T<u.length&&T<g.length;++T){const w=qi(u[T],g[T]);if(w!==0)return w;const A=mn(l[u[T]],f[g[T]]);if(A!==0)return A}return K(u.length,g.length)}(n.mapValue,e.mapValue);default:throw H(23264,{Pe:t})}}function Mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=At(n),r=At(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function Uc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=mn(t[s],r[s]);if(i)return i}return K(t.length,r.length)}function gn(n){return $i(n)}function $i(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=At(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return St(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=$i(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${$i(t.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function Jr(n){switch(kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ps(n);return e?16+Jr(e):16;case 5:return 2*n.stringValue.length;case 6:return St(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Jr(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Dt(r.fields,(i,a)=>{s+=i.length+Jr(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function Hi(n){return!!n&&"integerValue"in n}function wo(n){return!!n&&"arrayValue"in n}function Fc(n){return!!n&&"nullValue"in n}function Bc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function l_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Uu])===null||t===void 0?void 0:t.stringValue)===Bu}function er(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Dt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=er(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=er(n.arrayValue.values[t]);return e}return Object.assign({},n)}function u_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Fu}/**
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
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=er(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=er(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ve(er(this.value))}}function zu(n){const e=[];return Dt(n.fields,(t,r)=>{const s=new Ee([t]);if(Zr(r)){const i=zu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Le(e)}/**
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
 */class ke{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ke(e,0,W.min(),W.min(),W.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,W.min(),W.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,W.min(),W.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ps{constructor(e,t){this.position=e,this.inclusive=t}}function zc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=mn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qu{}class pe extends qu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new f_(e,t,r):t==="array-contains"?new g_(e,r):t==="in"?new __(e,r):t==="not-in"?new y_(e,r):t==="array-contains-any"?new v_(e,r):new pe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new p_(e,r):new m_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mn(t,this.value)):t!==null&&kt(this.value)===kt(t)&&this.matchesComparison(mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends qu{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Je(e,t)}matches(e){return $u(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function $u(n){return n.op==="and"}function Hu(n){return d_(n)&&$u(n)}function d_(n){for(const e of n.filters)if(e instanceof Je)return!1;return!0}function Wi(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+gn(n.value);if(Hu(n))return n.filters.map(e=>Wi(e)).join(",");{const e=n.filters.map(t=>Wi(t)).join(",");return`${n.op}(${e})`}}function Wu(n,e){return n instanceof pe?function(r,s){return s instanceof pe&&r.op===s.op&&r.field.isEqual(s.field)&&Ye(r.value,s.value)}(n,e):n instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Wu(a,s.filters[l]),!0):!1}(n,e):void H(19439)}function Gu(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${gn(t.value)}`}(n):n instanceof Je?function(t){return t.op.toString()+" {"+t.getFilters().map(Gu).join(" ,")+"}"}(n):"Filter"}class f_ extends pe{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class p_ extends pe{constructor(e,t){super(e,"in",t),this.keys=Ku("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class m_ extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Ku("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ku(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class g_ extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wo(t)&&ur(t.arrayValue,this.value)}}class __ extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ur(this.value.arrayValue,t)}}class y_ extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ur(this.value.arrayValue,t)}}class v_ extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ur(this.value.arrayValue,r))}}/**
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
 */class E_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function $c(n,e=null,t=[],r=[],s=null,i=null,a=null){return new E_(n,e,t,r,s,i,a)}function To(n){const e=G(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gn(r)).join(",")),e.Ie=t}return e.Ie}function Io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!h_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qc(n.startAt,e.startAt)&&qc(n.endAt,e.endAt)}function Gi(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ns{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function w_(n,e,t,r,s,i,a,l){return new Ns(n,e,t,r,s,i,a,l)}function xo(n){return new Ns(n)}function Hc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function T_(n){return n.collectionGroup!==null}function tr(n){const e=G(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ge(Ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ms(i,r))}),t.has(Ee.keyField().canonicalString())||e.Ee.push(new ms(Ee.keyField(),r))}return e.Ee}function Qe(n){const e=G(n);return e.de||(e.de=I_(e,tr(n))),e.de}function I_(n,e){if(n.limitType==="F")return $c(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ms(s.field,i)});const t=n.endAt?new ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ps(n.startAt.position,n.startAt.inclusive):null;return $c(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ki(n,e,t){return new Ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ds(n,e){return Io(Qe(n),Qe(e))&&n.limitType===e.limitType}function Qu(n){return`${To(Qe(n))}|lt:${n.limitType}`}function rn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gu(s)).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>gn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>gn(s)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function Vs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of tr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=zc(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,tr(r),s)||r.endAt&&!function(a,l,u){const f=zc(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,tr(r),s))}(n,e)}function x_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xu(n){return(e,t)=>{let r=!1;for(const s of tr(n)){const i=b_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function b_(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?mn(u,f):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Du(this.inner)}size(){return this.innerSize}}/**
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
 */const A_=new ce(q.comparator);function lt(){return A_}const Yu=new ce(q.comparator);function Qn(...n){let e=Yu;for(const t of n)e=e.insert(t.key,t);return e}function Ju(n){let e=Yu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Bt(){return nr()}function Zu(){return nr()}function nr(){return new Qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const S_=new ce(q.comparator),k_=new ge(q.comparator);function X(...n){let e=k_;for(const t of n)e=e.add(t);return e}const R_=new ge(K);function C_(){return R_}/**
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
 */function bo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(e)?"-0":e}}function eh(n){return{integerValue:""+n}}function P_(n,e){return s_(e)?eh(e):bo(n,e)}/**
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
 */class Os{constructor(){this._=void 0}}function N_(n,e,t){return n instanceof gs?function(s,i){const a={fields:{[ju]:{stringValue:Ou},[Mu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Eo(i)&&(i=Ps(i)),i&&(a.fields[Lu]=i),{mapValue:a}}(t,e):n instanceof hr?nh(n,e):n instanceof dr?rh(n,e):function(s,i){const a=th(s,i),l=Wc(a)+Wc(s.Re);return Hi(a)&&Hi(s.Re)?eh(l):bo(s.serializer,l)}(n,e)}function D_(n,e,t){return n instanceof hr?nh(n,e):n instanceof dr?rh(n,e):t}function th(n,e){return n instanceof _s?function(r){return Hi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class gs extends Os{}class hr extends Os{constructor(e){super(),this.elements=e}}function nh(n,e){const t=sh(e);for(const r of n.elements)t.some(s=>Ye(s,r))||t.push(r);return{arrayValue:{values:t}}}class dr extends Os{constructor(e){super(),this.elements=e}}function rh(n,e){let t=sh(e);for(const r of n.elements)t=t.filter(s=>!Ye(s,r));return{arrayValue:{values:t}}}class _s extends Os{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Wc(n){return ue(n.integerValue||n.doubleValue)}function sh(n){return wo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function V_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof hr&&s instanceof hr||r instanceof dr&&s instanceof dr?pn(r.elements,s.elements,Ye):r instanceof _s&&s instanceof _s?Ye(r.Re,s.Re):r instanceof gs&&s instanceof gs}(n.transform,e.transform)}class O_{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function es(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class js{}function ih(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ao(n.key,$e.none()):new vr(n.key,n.data,$e.none());{const t=n.data,r=Ve.empty();let s=new ge(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vt(n.key,r,new Le(s.toArray()),$e.none())}}function j_(n,e,t){n instanceof vr?function(s,i,a){const l=s.value.clone(),u=Kc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Vt?function(s,i,a){if(!es(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Kc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(oh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function rr(n,e,t,r){return n instanceof vr?function(i,a,l,u){if(!es(i.precondition,a))return l;const f=i.value.clone(),g=Qc(i.fieldTransforms,u,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vt?function(i,a,l,u){if(!es(i.precondition,a))return l;const f=Qc(i.fieldTransforms,u,a),g=a.data;return g.setAll(oh(i)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(i,a,l){return es(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function L_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=th(r.transform,s||null);i!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,i))}return t||null}function Gc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pn(r,s,(i,a)=>V_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vr extends js{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vt extends js{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Kc(n,e,t){const r=new Map;te(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,D_(a,l,t[s]))}return r}function Qc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,N_(i,a,e))}return r}class Ao extends js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M_ extends js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class U_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&j_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=rr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=rr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zu();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=ih(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&pn(this.mutations,e.mutations,(t,r)=>Gc(t,r))&&pn(this.baseMutations,e.baseMutations,(t,r)=>Gc(t,r))}}class So{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return S_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new So(e,t,r,s)}}/**
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
 */var de,J;function z_(n){switch(n){case N.OK:return H(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function ah(n){if(n===void 0)return ct("GRPC error has no .code"),N.UNKNOWN;switch(n){case de.OK:return N.OK;case de.CANCELLED:return N.CANCELLED;case de.UNKNOWN:return N.UNKNOWN;case de.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case de.INTERNAL:return N.INTERNAL;case de.UNAVAILABLE:return N.UNAVAILABLE;case de.UNAUTHENTICATED:return N.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case de.NOT_FOUND:return N.NOT_FOUND;case de.ALREADY_EXISTS:return N.ALREADY_EXISTS;case de.PERMISSION_DENIED:return N.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case de.ABORTED:return N.ABORTED;case de.OUT_OF_RANGE:return N.OUT_OF_RANGE;case de.UNIMPLEMENTED:return N.UNIMPLEMENTED;case de.DATA_LOSS:return N.DATA_LOSS;default:return H(39323,{code:n})}}(J=de||(de={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const q_=new It([4294967295,4294967295],0);function Xc(n){const e=Cu().encode(n),t=new Tu;return t.update(e),new Uint8Array(t.digest())}function Yc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new It([t,r],0),new It([s,i],0)]}class ko{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Xn(`Invalid padding: ${t}`);if(r<0)throw new Xn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Xn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=It.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(It.fromNumber(r)));return s.compare(q_)===1&&(s=new It([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Xc(e),[r,s]=Yc(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ko(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.pe===0)return;const t=Xc(e),[r,s]=Yc(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ls{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Er.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ls(W.min(),s,new ce(K),lt(),X())}}class Er{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Er(r,t,X(),X(),X())}}/**
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
 */class ts{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class ch{constructor(e,t){this.targetId=e,this.Ce=t}}class lh{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Jc{constructor(){this.Fe=0,this.Me=Zc(),this.xe=Te.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=X(),t=X(),r=X();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:i})}}),new Er(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Zc()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,te(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class $_{constructor(e){this.ze=e,this.je=new Map,this.He=lt(),this.Je=Hr(),this.Ye=Hr(),this.Ze=new ce(K)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Gi(i))if(r===0){const a=new q(i.path);this.tt(t,a,ke.newNoDocument(a,W.min()))}else te(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const l=this.ct(e),u=l?this.lt(l,e,a):1;if(u!==0){this.st(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=St(r).toUint8Array()}catch(u){if(u instanceof Vu)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ko(a,s,i)}catch(u){return fn(u instanceof Xn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&Gi(l.target)){const u=new q(l.target.path);this.Et(u).has(a)||this.dt(a,u)||this.tt(a,u,ke.newNoDocument(u,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let r=X();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const f=this._t(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new Ls(e,t,this.Ze,this.He,r);return this.He=lt(),this.Je=Hr(),this.Ye=Hr(),this.Ze=new ce(K),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Jc,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ge(K),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ge(K),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Jc),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Hr(){return new ce(q.comparator)}function Zc(){return new ce(q.comparator)}const H_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),G_=(()=>({and:"AND",or:"OR"}))();class K_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qi(n,e){return n.useProto3Json||Cs(e)?e:{value:e}}function ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Q_(n,e){return ys(n,e.toTimestamp())}function Xe(n){return te(!!n,49232),W.fromTimestamp(function(t){const r=At(t);return new me(r.seconds,r.nanos)}(n))}function Ro(n,e){return Xi(n,e).canonicalString()}function Xi(n,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hh(n){const e=ae.fromString(n);return te(gh(e),10190,{key:e.toString()}),e}function Yi(n,e){return Ro(n.databaseId,e.path)}function xi(n,e){const t=hh(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(fh(t))}function dh(n,e){return Ro(n.databaseId,e)}function X_(n){const e=hh(n);return e.length===4?ae.emptyPath():fh(e)}function Ji(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fh(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function el(n,e,t){return{name:Yi(n,e),fields:t.value.mapValue.fields}}function Y_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:H(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,g){return f.useProto3Json?(te(g===void 0||typeof g=="string",58123),Te.fromBase64String(g||"")):(te(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Te.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(f){const g=f.code===void 0?N.UNKNOWN:ah(f.code);return new F(g,f.message||"")}(a);t=new lh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xi(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):W.min(),l=new Ve({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(s,i,a,l),f=r.targetIds||[],g=r.removedTargetIds||[];t=new ts(f,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xi(n,r.document),i=r.readTime?Xe(r.readTime):W.min(),a=ke.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ts([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xi(n,r.document),i=r.removedTargetIds||[];t=new ts([],i,s,null)}else{if(!("filter"in e))return H(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new B_(s,i),l=r.targetId;t=new ch(l,a)}}return t}function J_(n,e){let t;if(e instanceof vr)t={update:el(n,e.key,e.value)};else if(e instanceof Ao)t={delete:Yi(n,e.key)};else if(e instanceof Vt)t={update:el(n,e.key,e.data),updateMask:ay(e.fieldMask)};else{if(!(e instanceof M_))return H(16599,{ft:e.type});t={verify:Yi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof gs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof dr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _s)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw H(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Q_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function Z_(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual(W.min())&&(a=Xe(i)),new O_(a,s.transformResults||[])}(t,e))):[]}function ey(n,e){return{documents:[dh(n,e.path)]}}function ty(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=dh(n,s);const i=function(f){if(f.length!==0)return mh(Je.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(g=>function(w){return{field:sn(w.field),direction:sy(w.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Qi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{gt:t,parent:s}}function ny(n){let e=X_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1,65062);const g=t.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let i=[];t.where&&(i=function(T){const w=ph(T);return w instanceof Je&&Hu(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(w=>function(R){return new ms(on(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(T){let w;return w=typeof T=="object"?T.value:T,Cs(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(T){const w=!!T.before,A=T.values||[];return new ps(A,w)}(t.startAt));let f=null;return t.endAt&&(f=function(T){const w=!T.before,A=T.values||[];return new ps(A,w)}(t.endAt)),w_(e,s,a,i,l,"F",u,f)}function ry(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ph(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=on(t.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=on(t.unaryFilter.field);return pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=on(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return pe.create(on(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Je.create(t.compositeFilter.filters.map(r=>ph(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function sy(n){return H_[n]}function iy(n){return W_[n]}function oy(n){return G_[n]}function sn(n){return{fieldPath:n.canonicalString()}}function on(n){return Ee.fromServerFormat(n.fieldPath)}function mh(n){return n instanceof pe?function(t){if(t.op==="=="){if(Bc(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NAN"}};if(Fc(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bc(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NOT_NAN"}};if(Fc(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(t.field),op:iy(t.op),value:t.value}}}(n):n instanceof Je?function(t){const r=t.getFilters().map(s=>mh(s));return r.length===1?r[0]:{compositeFilter:{op:oy(t.op),filters:r}}}(n):H(54877,{filter:n})}function ay(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class vt{constructor(e,t,r,s,i=W.min(),a=W.min(),l=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cy{constructor(e){this.wt=e}}function ly(n){const e=ny({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ki(e,e.limit,"L"):e}/**
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
 */class uy{constructor(){this.Cn=new hy}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(bt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class hy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ge(ae.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ge(ae.comparator)).toArray()}}/**
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
 */const tl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_h=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(_h,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
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
 */class _n{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new _n(0)}static lr(){return new _n(-1)}}/**
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
 */const nl="LruGarbageCollector",dy=1048576;function rl([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class fy{constructor(e){this.Er=e,this.buffer=new ge(rl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();rl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class py{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){M(nl,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bn(t)?M(nl,"Ignoring IndexedDB error during garbage collection: ",t):await xn(t)}await this.mr(3e5)})}}class my{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Rs.le);const r=new fy(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(tl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tl):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,a,l,u,f;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(e,s))).next(T=>(r=T,l=Date.now(),this.removeTargets(e,r,t))).next(T=>(i=T,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(f=Date.now(),nn()<=Q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${T} documents in `+(f-u)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:T})))}}function gy(n,e){return new my(n,e)}/**
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
 */class _y{constructor(){this.changes=new Qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&rr(r.mutation,s,Le.empty(),me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=Bt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Qn();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=lt();const a=nr(),l=function(){return nr()}();return t.forEach((u,f)=>{const g=r.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof Vt)?i=i.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),rr(g.mutation,f,g.mutation.getFieldMask(),me.now())):a.set(f.key,Le.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,g)=>a.set(f,g)),t.forEach((f,g)=>{var T;return l.set(f,new yy(g,(T=a.get(f))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(e,t){const r=nr();let s=new ce((a,l)=>a-l),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let g=r.get(u)||Le.empty();g=l.applyToLocalView(f,g),r.set(u,g);const T=(s.get(l.batchId)||X()).add(u);s=s.insert(l.batchId,T)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,g=u.value,T=Zu();g.forEach(w=>{if(!i.has(w)){const A=ih(t.get(w),r.get(w));A!==null&&T.set(w,A),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):T_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(Bt());let l=ar,u=i;return a.next(f=>C.forEach(f,(g,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),i.get(g)?C.resolve():this.remoteDocumentCache.getEntry(e,g).next(w=>{u=u.insert(g,w)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,X())).next(g=>({batchId:l,changes:Ju(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=Qn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Qn();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,u=>{const f=function(T,w){return new Ns(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(g=>{g.forEach((T,w)=>{a=a.insert(T,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,ke.newInvalidDocument(g)))});let l=Qn();return a.forEach((u,f)=>{const g=i.get(u);g!==void 0&&rr(g.mutation,f,Le.empty(),me.now()),Vs(t,f)&&(l=l.insert(u,f))}),l})}}/**
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
 */class wy{constructor(){this.overlays=new ce(q.comparator),this.Qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Bt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Bt(),i=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ce((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let g=i.get(f.largestBatchId);g===null&&(g=Bt(),i=i.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=Bt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,g)=>l.set(f,g)),!(l.size()>=s)););return C.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new F_(t,r));let i=this.Qr.get(t);i===void 0&&(i=X(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
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
 */class Ty{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class Co{constructor(){this.$r=new ge(_e.Ur),this.Kr=new ge(_e.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new _e(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new _e(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new q(new ae([])),r=new _e(t,e),s=new _e(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new q(new ae([])),r=new _e(t,e),s=new _e(t,e+1);let i=X();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new _e(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return q.comparator(e.key,t.key)||K(e.Zr,t.Zr)}static Wr(e,t){return K(e.Zr,t.Zr)||q.comparator(e.key,t.key)}}/**
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
 */class Iy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ge(_e.Ur)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new U_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new _e(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?vo:this.nr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(K);return t.forEach(s=>{const i=new _e(s,0),a=new _e(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new _e(new q(i),0);let l=new ge(K);return this.Xr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Zr)),!0)},a),C.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(t.mutations,s=>{const i=new _e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new _e(t,0),s=this.Xr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xy{constructor(e){this.ii=e,this.docs=function(){return new ce(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=lt();const a=t.path,l=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:g}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||e_(Zg(g),r)<=0||(s.has(g.key)||Vs(t,g))&&(i=i.insert(g.key,g.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H(9500)}si(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new by(this)}getSize(e){return C.resolve(this.size)}}class by extends _y{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class Ay{constructor(e){this.persistence=e,this.oi=new Qt(t=>To(t),Io),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this._i=0,this.ai=new Co,this.targetCount=0,this.ui=_n.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),C.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new _n(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Tr(t),C.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.ai.containsKey(t))}}/**
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
 */class yh{constructor(e,t){this.ci={},this.overlays={},this.li=new Rs(0),this.hi=!1,this.hi=!0,this.Pi=new Ty,this.referenceDelegate=e(this),this.Ti=new Ay(this),this.indexManager=new uy,this.remoteDocumentCache=function(s){return new xy(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new cy(t),this.Ei=new Ey(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Iy(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new Sy(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Sy extends n_{constructor(e){super(),this.currentSequenceNumber=e}}class Po{constructor(e){this.persistence=e,this.Vi=new Co,this.mi=null}static fi(e){return new Po(e)}get gi(){if(this.mi)return this.mi;throw H(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const s=q.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return C.or([()=>C.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class vs{constructor(e,t){this.persistence=e,this.yi=new Qt(r=>i_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=gy(this,t)}static fi(e,t){return new vs(e,t)}di(){}Ai(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return C.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jr(e.data.value)),t}Dr(e,t,r){return C.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class No{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new No(e,t.fromCache,r,s)}}/**
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
 */class ky{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ry{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return cf()?8:r_(Re())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.bs(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ky;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,a,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(nn()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",rn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(nn()<=Q.DEBUG&&M("QueryEngine","Query:",rn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(nn()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",rn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):C.resolve())}ws(e,t){if(Hc(t))return C.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ki(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=X(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.vs(t,l);return this.Cs(t,f,a,u.readTime)?this.ws(e,Ki(t,null,"F")):this.Fs(e,f,t,u)}))})))}bs(e,t,r,s){return Hc(t)||s.isEqual(W.min())?C.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(t,i);return this.Cs(t,a,r,s)?C.resolve(null):(nn()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rn(t)),this.Fs(e,a,t,Jg(s,ar)).next(l=>l))})}vs(e,t){let r=new ge(Xu(e));return t.forEach((s,i)=>{Vs(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return nn()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",rn(t)),this.ys.getDocumentsMatchingQuery(e,t,bt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Do="LocalStore",Cy=3e8;class Py{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new ce(K),this.Os=new Qt(i=>To(i),Io),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vy(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Ny(n,e,t,r){return new Py(n,e,t,r)}async function vh(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=X();for(const f of s){a.push(f.batchId);for(const g of f.mutations)u=u.add(g.key)}for(const f of i){l.push(f.batchId);for(const g of f.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(r,u).next(f=>({ks:f,removedBatchIds:a,addedBatchIds:l}))})})}function Dy(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,u,f,g){const T=f.batch,w=T.keys();let A=C.resolve();return w.forEach(R=>{A=A.next(()=>g.getEntry(u,R)).next(D=>{const k=f.docVersions.get(R);te(k!==null,48541),D.version.compareTo(k)<0&&(T.applyToRemoteDocument(D,f),D.isValidDocument()&&(D.setReadTime(f.commitVersion),g.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,T))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=X();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Eh(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Vy(n,e){const t=G(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((g,T)=>{const w=s.get(T);if(!w)return;l.push(t.Ti.removeMatchingKeys(i,g.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(i,g.addedDocuments,T)));let A=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(T)!==null?A=A.withResumeToken(Te.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):g.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(g.resumeToken,r)),s=s.insert(T,A),function(D,k,L){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Cy?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(w,A,g)&&l.push(t.Ti.updateTargetData(i,A))});let u=lt(),f=X();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,g))}),l.push(Oy(i,a,e.documentUpdates).next(g=>{u=g.qs,f=g.Qs})),!r.isEqual(W.min())){const g=t.Ti.getLastRemoteSnapshotVersion(i).next(T=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(g)}return C.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(t.xs=s,i))}function Oy(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=lt();return t.forEach((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M(Do,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{qs:a,Qs:s}})}function jy(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ly(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Ti.allocateTargetId(r).next(a=>(s=new vt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Zi(n,e,t){const r=G(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!bn(a))throw a;M(Do,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function sl(n,e,t){const r=G(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,g){const T=G(u),w=T.Os.get(g);return w!==void 0?C.resolve(T.xs.get(w)):T.Ti.getTargetData(f,g)}(r,a,Qe(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?s:W.min(),t?i:X())).next(l=>(My(r,x_(e),l),{documents:l,$s:i})))}function My(n,e,t){let r=n.Ns.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class il{constructor(){this.activeTargetIds=C_()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uy{constructor(){this.xo=new il,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new il,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const ol="ConnectivityMonitor";class al{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){M(ol,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){M(ol,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wr=null;function eo(){return Wr===null?Wr=function(){return 268435456+Math.round(2147483648*Math.random())}():Wr++,"0x"+Wr.toString(16)}/**
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
 */const bi="RestConnection",By={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zy{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===ds?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const a=eo(),l=this.jo(e,t.toUriEncodedString());M(bi,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,s,i);const{host:f}=new URL(l),g=En(f);return this.Jo(e,l,u,r,g).then(T=>(M(bi,`Received RPC '${e}' ${a}: `,T),T),T=>{throw fn(bi,`RPC '${e}' ${a} failed with error: `,T,"url: ",l,"request:",r),T})}Yo(e,t,r,s,i,a){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+In}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=By[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */const Ae="WebChannelConnection";class $y extends zy{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=eo();return new Promise((l,u)=>{const f=new Iu;f.setWithCredentials(!0),f.listenOnce(xu.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Yr.NO_ERROR:const T=f.getResponseJson();M(Ae,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(T)),l(T);break;case Yr.TIMEOUT:M(Ae,`RPC '${e}' ${a} timed out`),u(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case Yr.HTTP_ERROR:const w=f.getStatus();if(M(Ae,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const D=function(L){const j=L.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(j)>=0?j:N.UNKNOWN}(R.status);u(new F(D,R.message))}else u(new F(N.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new F(N.UNAVAILABLE,"Connection failed."));break;default:H(9055,{h_:e,streamId:a,P_:f.getLastErrorCode(),T_:f.getLastError()})}}finally{M(Ae,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(s);M(Ae,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",g,r,15)})}I_(e,t,r){const s=eo(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Su(),l=Au(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const g=i.join("");M(Ae,`Creating RPC '${e}' stream ${s}: ${g}`,u);const T=a.createWebChannel(g,u);this.E_(T);let w=!1,A=!1;const R=new qy({Zo:k=>{A?M(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(w||(M(Ae,`Opening RPC '${e}' stream ${s} transport.`),T.open(),w=!0),M(Ae,`RPC '${e}' stream ${s} sending:`,k),T.send(k))},Xo:()=>T.close()}),D=(k,L,j)=>{k.listen(L,V=>{try{j(V)}catch(B){setTimeout(()=>{throw B},0)}})};return D(T,Kn.EventType.OPEN,()=>{A||(M(Ae,`RPC '${e}' stream ${s} transport opened.`),R.__())}),D(T,Kn.EventType.CLOSE,()=>{A||(A=!0,M(Ae,`RPC '${e}' stream ${s} transport closed`),R.u_(),this.d_(T))}),D(T,Kn.EventType.ERROR,k=>{A||(A=!0,fn(Ae,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),R.u_(new F(N.UNAVAILABLE,"The operation could not be completed")))}),D(T,Kn.EventType.MESSAGE,k=>{var L;if(!A){const j=k.data[0];te(!!j,16349);const V=j,B=(V==null?void 0:V.error)||((L=V[0])===null||L===void 0?void 0:L.error);if(B){M(Ae,`RPC '${e}' stream ${s} received error:`,B);const z=B.status;let P=function(_){const v=de[_];if(v!==void 0)return ah(v)}(z),y=B.message;P===void 0&&(P=N.INTERNAL,y="Unknown error status: "+z+" with message "+B.message),A=!0,R.u_(new F(P,y)),T.close()}else M(Ae,`RPC '${e}' stream ${s} received:`,j),R.c_(j)}}),D(l,bu.STAT_EVENT,k=>{k.stat===zi.PROXY?M(Ae,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===zi.NOPROXY&&M(Ae,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Ai(){return typeof document<"u"?document:null}/**
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
 */function Ms(n){return new K_(n,!0)}/**
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
 */class wh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const cl="PersistentStream";class Th{constructor(e,t,r,s,i,a,l,u){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new wh(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(ct(t.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===t&&this.z_(r,s)},r=>{e(()=>{const s=new F(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return M(cl,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(M(cl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hy extends Th{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Y_(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?Xe(a.readTime):W.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Ji(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Gi(u)?{documents:ey(i,u)}:{query:ty(i,u).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=uh(i,a.resumeToken);const f=Qi(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(W.min())>0){l.readTime=ys(i,a.snapshotVersion.toTimestamp());const f=Qi(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=ry(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Ji(this.serializer),t.removeTarget=e,this.Q_(t)}}class Wy extends Th{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Z_(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Ji(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>J_(this.serializer,r))};this.Q_(t)}}/**
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
 */class Gy{}class Ky extends Gy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Xi(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(N.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,Xi(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(N.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Qy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ct(t),this.ua=!1):M("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Gt="RemoteStore";class Xy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Xt(this)&&(M(Gt,"Restarting streams for network reachability change."),await async function(u){const f=G(u);f.da.add(4),await wr(f),f.Va.set("Unknown"),f.da.delete(4),await Us(f)}(this))})}),this.Va=new Qy(r,s)}}async function Us(n){if(Xt(n))for(const e of n.Aa)await e(!0)}async function wr(n){for(const e of n.Aa)await e(!1)}function Ih(n,e){const t=G(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Lo(t)?jo(t):An(t).N_()&&Oo(t,e))}function Vo(n,e){const t=G(n),r=An(t);t.Ea.delete(e),r.N_()&&xh(t,e),t.Ea.size===0&&(r.N_()?r.k_():Xt(t)&&t.Va.set("Unknown"))}function Oo(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}An(n).Z_(e)}function xh(n,e){n.ma.Ke(e),An(n).X_(e)}function jo(n){n.ma=new $_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),An(n).start(),n.Va.ca()}function Lo(n){return Xt(n)&&!An(n).O_()&&n.Ea.size>0}function Xt(n){return G(n).da.size===0}function bh(n){n.ma=void 0}async function Yy(n){n.Va.set("Online")}async function Jy(n){n.Ea.forEach((e,t)=>{Oo(n,e)})}async function Zy(n,e){bh(n),Lo(n)?(n.Va.Pa(e),jo(n)):n.Va.set("Unknown")}async function ev(n,e,t){if(n.Va.set("Online"),e instanceof lh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(n,e)}catch(r){M(Gt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Es(n,r)}else if(e instanceof ts?n.ma.Xe(e):e instanceof ch?n.ma.ot(e):n.ma.nt(e),!t.isEqual(W.min()))try{const r=await Eh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.ma.It(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const g=i.Ea.get(f);g&&i.Ea.set(f,g.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const g=i.Ea.get(u);if(!g)return;i.Ea.set(u,g.withResumeToken(Te.EMPTY_BYTE_STRING,g.snapshotVersion)),xh(i,u);const T=new vt(g.target,u,f,g.sequenceNumber);Oo(i,T)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M(Gt,"Failed to raise snapshot:",r),await Es(n,r)}}async function Es(n,e,t){if(!bn(e))throw e;n.da.add(1),await wr(n),n.Va.set("Offline"),t||(t=()=>Eh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(Gt,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Us(n)})}function Ah(n,e){return e().catch(t=>Es(n,t,e))}async function Fs(n){const e=G(n),t=Rt(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:vo;for(;tv(e);)try{const s=await jy(e.localStore,r);if(s===null){e.Ia.length===0&&t.k_();break}r=s.batchId,nv(e,s)}catch(s){await Es(e,s)}Sh(e)&&kh(e)}function tv(n){return Xt(n)&&n.Ia.length<10}function nv(n,e){n.Ia.push(e);const t=Rt(n);t.N_()&&t.ea&&t.ta(e.mutations)}function Sh(n){return Xt(n)&&!Rt(n).O_()&&n.Ia.length>0}function kh(n){Rt(n).start()}async function rv(n){Rt(n).ia()}async function sv(n){const e=Rt(n);for(const t of n.Ia)e.ta(t.mutations)}async function iv(n,e,t){const r=n.Ia.shift(),s=So.from(r,e,t);await Ah(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fs(n)}async function ov(n,e){e&&Rt(n).ea&&await async function(r,s){if(function(a){return z_(a)&&a!==N.ABORTED}(s.code)){const i=r.Ia.shift();Rt(r).L_(),await Ah(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fs(r)}}(n,e),Sh(n)&&kh(n)}async function ll(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),M(Gt,"RemoteStore received new credentials");const r=Xt(t);t.da.add(3),await wr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Us(t)}async function av(n,e){const t=G(n);e?(t.da.delete(2),await Us(t)):e||(t.da.add(2),await wr(t),t.Va.set("Unknown"))}function An(n){return n.fa||(n.fa=function(t,r,s){const i=G(t);return i.oa(),new Hy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:Yy.bind(null,n),n_:Jy.bind(null,n),i_:Zy.bind(null,n),Y_:ev.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Lo(n)?jo(n):n.Va.set("Unknown")):(await n.fa.stop(),bh(n))})),n.fa}function Rt(n){return n.ga||(n.ga=function(t,r,s){const i=G(t);return i.oa(),new Wy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:rv.bind(null,n),i_:ov.bind(null,n),na:sv.bind(null,n),ra:iv.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Fs(n)):(await n.ga.stop(),n.Ia.length>0&&(M(Gt,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class Mo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Mo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(n,e){if(ct("AsyncQueue",`${e}: ${n}`),bn(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class hn{static emptySet(e){return new hn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Qn(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ul{constructor(){this.pa=new ce(q.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):H(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class yn{constructor(e,t,r,s,i,a,l,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new yn(e,t,hn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cv{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class lv{constructor(){this.queries=hl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=hl(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new F(N.ABORTED,"Firestore shutting down"))}}function hl(){return new Qt(n=>Qu(n),Ds)}async function Rh(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new cv,r=e.va()?0:1);try{switch(r){case 0:i.ba=await t.onListen(s,!0);break;case 1:i.ba=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Uo(a,`Initialization of query '${rn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.Fa(t.onlineState),i.ba&&e.Ma(i.ba)&&Fo(t)}async function Ch(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uv(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&Fo(t)}function hv(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Fo(n){n.Ca.forEach(e=>{e.next()})}var to,dl;(dl=to||(to={})).xa="default",dl.Cache="cache";class Ph{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==to.Cache}}/**
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
 */class Nh{constructor(e){this.key=e}}class Dh{constructor(e){this.key=e}}class dv{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.Za=Xu(e),this.Xa=new hn(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new ul,s=t?t.Xa:this.Xa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((g,T)=>{const w=s.get(g),A=Vs(this.query,T)?T:null,R=!!w&&this.mutatedKeys.has(w.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let k=!1;w&&A?w.data.isEqual(A.data)?R!==D&&(r.track({type:3,doc:A}),k=!0):this.ru(w,A)||(r.track({type:2,doc:A}),k=!0,(u&&this.Za(A,u)>0||f&&this.Za(A,f)<0)&&(l=!0)):!w&&A?(r.track({type:0,doc:A}),k=!0):w&&!A&&(r.track({type:1,doc:w}),k=!0,(u||f)&&(l=!0)),k&&(A?(a=a.add(A),i=D?i.add(g):i.delete(g)):(a=a.delete(g),i=i.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),i=i.delete(g.key),r.track({type:1,doc:g})}return{Xa:a,nu:r,Cs:l,mutatedKeys:i}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((g,T)=>function(A,R){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:k})}};return D(A)-D(R)}(g.type,T.type)||this.Za(g.doc,T.doc)),this.iu(r),s=s!=null&&s;const l=t&&!s?this.su():[],u=this.Ya.size===0&&this.current&&!s?1:0,f=u!==this.Ja;return this.Ja=u,a.length!==0||f?{snapshot:new yn(this.query,e.Xa,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ul,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Dh(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Nh(r))}),t}au(e){this.Ha=e.$s,this.Ya=X();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return yn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Bo="SyncEngine";class fv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pv{constructor(e){this.key=e,this.cu=!1}}class mv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Qt(l=>Qu(l),Ds),this.Pu=new Map,this.Tu=new Set,this.Iu=new ce(q.comparator),this.Eu=new Map,this.du=new Co,this.Au={},this.Ru=new Map,this.Vu=_n.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function gv(n,e,t=!0){const r=Uh(n);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Vh(r,e,t,!0),s}async function _v(n,e){const t=Uh(n);await Vh(t,e,!0,!1)}async function Vh(n,e,t,r){const s=await Ly(n.localStore,Qe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await yv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ih(n.remoteStore,s),l}async function yv(n,e,t,r,s){n.fu=(T,w,A)=>async function(D,k,L,j){let V=k.view.tu(L);V.Cs&&(V=await sl(D.localStore,k.query,!1).then(({documents:y})=>k.view.tu(y,V)));const B=j&&j.targetChanges.get(k.targetId),z=j&&j.targetMismatches.get(k.targetId)!=null,P=k.view.applyChanges(V,D.isPrimaryClient,B,z);return pl(D,k.targetId,P.ou),P.snapshot}(n,T,w,A);const i=await sl(n.localStore,e,!0),a=new dv(e,i.$s),l=a.tu(i.documents),u=Er.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,u);pl(n,t,f.ou);const g=new fv(e,t,a);return n.hu.set(e,g),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),f.snapshot}async function vv(n,e,t){const r=G(n),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(a=>!Ds(a,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Zi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Vo(r.remoteStore,s.targetId),no(r,s.targetId)}).catch(xn)):(no(r,s.targetId),await Zi(r.localStore,s.targetId,!0))}async function Ev(n,e){const t=G(n),r=t.hu.get(e),s=t.Pu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vo(t.remoteStore,r.targetId))}async function wv(n,e,t){const r=kv(n);try{const s=await function(a,l){const u=G(a),f=me.now(),g=l.reduce((A,R)=>A.add(R.key),X());let T,w;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=lt(),D=X();return u.Bs.getEntries(A,g).next(k=>{R=k,R.forEach((L,j)=>{j.isValidDocument()||(D=D.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(k=>{T=k;const L=[];for(const j of l){const V=L_(j,T.get(j.key).overlayedDocument);V!=null&&L.push(new Vt(j.key,V,zu(V.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(A,f,L,l)}).next(k=>{w=k;const L=k.applyToLocalDocumentSet(T,D);return u.documentOverlayCache.saveOverlays(A,k.batchId,L)})}).then(()=>({batchId:w.batchId,changes:Ju(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let f=a.Au[a.currentUser.toKey()];f||(f=new ce(K)),f=f.insert(l,u),a.Au[a.currentUser.toKey()]=f}(r,s.batchId,t),await Tr(r,s.changes),await Fs(r.remoteStore)}catch(s){const i=Uo(s,"Failed to persist write");t.reject(i)}}async function Oh(n,e){const t=G(n);try{const r=await Vy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?te(a.cu,14607):s.removedDocuments.size>0&&(te(a.cu,42227),a.cu=!1))}),await Tr(t,r,e)}catch(r){await xn(r)}}function fl(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hu.forEach((i,a)=>{const l=a.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let f=!1;u.queries.forEach((g,T)=>{for(const w of T.Sa)w.Fa(l)&&(f=!0)}),f&&Fo(u)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Tv(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ce(q.comparator);a=a.insert(i,ke.newNoDocument(i,W.min()));const l=X().add(i),u=new Ls(W.min(),new Map,new ce(K),a,l);await Oh(r,u),r.Iu=r.Iu.remove(i),r.Eu.delete(e),zo(r)}else await Zi(r.localStore,e,!1).then(()=>no(r,e,t)).catch(xn)}async function Iv(n,e){const t=G(n),r=e.batch.batchId;try{const s=await Dy(t.localStore,e);Lh(t,r,null),jh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Tr(t,s)}catch(s){await xn(s)}}async function xv(n,e,t){const r=G(n);try{const s=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return u.mutationQueue.lookupMutationBatch(f,l).next(T=>(te(T!==null,37113),g=T.keys(),u.mutationQueue.removeMutationBatch(f,T))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,g,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>u.localDocuments.getDocuments(f,g))})}(r.localStore,e);Lh(r,e,t),jh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Tr(r,s)}catch(s){await xn(s)}}function jh(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function Lh(n,e,t){const r=G(n);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function no(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||Mh(n,r)})}function Mh(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Vo(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),zo(n))}function pl(n,e,t){for(const r of t)r instanceof Nh?(n.du.addReference(r.key,e),bv(n,r)):r instanceof Dh?(M(Bo,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||Mh(n,r.key)):H(19791,{pu:r})}function bv(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(M(Bo,"New document in limbo: "+t),n.Tu.add(r),zo(n))}function zo(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new q(ae.fromString(e)),r=n.Vu.next();n.Eu.set(r,new pv(t)),n.Iu=n.Iu.insert(t,r),Ih(n.remoteStore,new vt(Qe(xo(t.path)),r,"TargetPurposeLimboResolution",Rs.le))}}async function Tr(n,e,t){const r=G(n),s=[],i=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,u)=>{a.push(r.fu(u,e,t).then(f=>{var g;if((f||t)&&r.isPrimaryClient){const T=f?!f.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(u.targetId,T?"current":"not-current")}if(f){s.push(f);const T=No.Rs(u.targetId,f);i.push(T)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(u,f){const g=G(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(f,w=>C.forEach(w.ds,A=>g.persistence.referenceDelegate.addReference(T,w.targetId,A)).next(()=>C.forEach(w.As,A=>g.persistence.referenceDelegate.removeReference(T,w.targetId,A)))))}catch(T){if(!bn(T))throw T;M(Do,"Failed to update sequence numbers: "+T)}for(const T of f){const w=T.targetId;if(!T.fromCache){const A=g.xs.get(w),R=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(R);g.xs=g.xs.insert(w,D)}}}(r.localStore,i))}async function Av(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){M(Bo,"User change. New user:",e.toKey());const r=await vh(t.localStore,e);t.currentUser=e,function(i,a){i.Ru.forEach(l=>{l.forEach(u=>{u.reject(new F(N.CANCELLED,a))})}),i.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tr(t,r.ks)}}function Sv(n,e){const t=G(n),r=t.Eu.get(e);if(r&&r.cu)return X().add(r.key);{let s=X();const i=t.Pu.get(e);if(!i)return s;for(const a of i){const l=t.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function Uh(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tv.bind(null,e),e.lu.Y_=uv.bind(null,e.eventManager),e.lu.gu=hv.bind(null,e.eventManager),e}function kv(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Iv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xv.bind(null,e),e}class ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ms(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return Ny(this.persistence,new Ry,e.initialUser,this.serializer)}Su(e){return new yh(Po.fi,this.serializer)}bu(e){return new Uy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ws.provider={build:()=>new ws};class Rv extends ws{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){te(this.persistence.referenceDelegate instanceof vs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new py(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new yh(r=>vs.fi(r,t),this.serializer)}}class ro{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Av.bind(null,this.syncEngine),await av(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lv}()}createDatastore(e){const t=Ms(e.databaseInfo.databaseId),r=function(i){return new $y(i)}(e.databaseInfo);return function(i,a,l,u){return new Ky(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Xy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>fl(this.syncEngine,t,0),function(){return al.C()?new al:new Fy}())}createSyncEngine(e,t){return function(s,i,a,l,u,f,g){const T=new mv(s,i,a,l,u,f);return g&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);M(Gt,"RemoteStore shutting down."),i.da.add(5),await wr(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ro.provider={build:()=>new ro};/**
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
 */class Fh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ct("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ct="FirestoreClient";class Cv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=Pu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(Ct,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(Ct,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Si(n,e){n.asyncQueue.verifyOperationInProgress(),M(Ct,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ml(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Pv(n);M(Ct,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ll(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ll(e.remoteStore,s)),n._onlineComponents=e}async function Pv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Ct,"Using user provided OfflineComponentProvider");try{await Si(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await Si(n,new ws)}}else M(Ct,"Using default OfflineComponentProvider"),await Si(n,new Rv(void 0));return n._offlineComponents}async function Bh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Ct,"Using user provided OnlineComponentProvider"),await ml(n,n._uninitializedComponentsProvider._online)):(M(Ct,"Using default OnlineComponentProvider"),await ml(n,new ro))),n._onlineComponents}function Nv(n){return Bh(n).then(e=>e.syncEngine)}async function zh(n){const e=await Bh(n),t=e.eventManager;return t.onListen=gv.bind(null,e.syncEngine),t.onUnlisten=vv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_v.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ev.bind(null,e.syncEngine),t}function Dv(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const g=new Fh({next:w=>{g.xu(),a.enqueueAndForget(()=>Ch(i,T));const A=w.docs.has(l);!A&&w.fromCache?f.reject(new F(N.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&w.fromCache&&u&&u.source==="server"?f.reject(new F(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),T=new Ph(xo(l.path),g,{includeMetadataChanges:!0,Qa:!0});return Rh(i,T)}(await zh(n),n.asyncQueue,e,t,r)),r.promise}function Vv(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const g=new Fh({next:w=>{g.xu(),a.enqueueAndForget(()=>Ch(i,T)),w.fromCache&&u.source==="server"?f.reject(new F(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),T=new Ph(l,g,{includeMetadataChanges:!0,Qa:!0});return Rh(i,T)}(await zh(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function qh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const gl=new Map;/**
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
 */function $h(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ov(n,e,t,r){if(e===!0&&r===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _l(n){if(!q.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yl(n){if(q.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qo(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Hh="firestore.googleapis.com",vl=!0;class El{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hh,this.ssl=vl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:vl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_h;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dy)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ov("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qg;switch(r.type){case"firstParty":return new Gg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=gl.get(t);r&&(M("ComponentProvider","Removing Datastore"),gl.delete(t),r.terminate())}(this),Promise.resolve()}}function jv(n,e,t,r={}){var s;n=Ze(n,Bs);const i=En(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Vl(`https://${u}`),Ol("Firestore",!0)),a.host!==Hh&&a.host!==u&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!zt(f,l)&&(n._setSettings(f),r.mockUserToken)){let g,T;if(typeof r.mockUserToken=="string")g=r.mockUserToken,T=Se.MOCK_USER;else{g=Jd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Se(w)}n._authCredentials=new $g(new Ru(g,T))}}/**
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
 */class zs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class xt extends zs{constructor(e,t,r){super(e,t,xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new q(e))}withConverter(e){return new xt(this.firestore,e,this._path)}}function $n(n,e,...t){if(n=we(n),$h("collection","path",e),n instanceof Bs){const r=ae.fromString(e,...t);return yl(r),new xt(n,null,r)}{if(!(n instanceof Oe||n instanceof xt))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return yl(r),new xt(n.firestore,null,r)}}function tn(n,e,...t){if(n=we(n),arguments.length===1&&(e=Pu.newId()),$h("doc","path",e),n instanceof Bs){const r=ae.fromString(e,...t);return _l(r),new Oe(n,null,new q(r))}{if(!(n instanceof Oe||n instanceof xt))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return _l(r),new Oe(n.firestore,n instanceof xt?n.converter:null,new q(r))}}/**
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
 */const wl="AsyncQueue";class Tl{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new wh(this,"async_queue_retry"),this.rc=()=>{const r=Ai();r&&M(wl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Ai();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new it;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!bn(e))throw e;M(wl,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,ct("INTERNAL UNHANDLED ERROR: ",Il(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const s=Mo.createAndSchedule(this,e,t,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&H(47125,{cc:Il(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Il(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Sn extends Bs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tl(e),this._firestoreClient=void 0,await e}}}function Lv(n,e){const t=typeof n=="object"?n:Ul(),r=typeof n=="string"?n:e||ds,s=ao(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xd("firestore");i&&jv(s,...i)}return s}function $o(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Mv(n),n._firestoreClient}function Mv(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,f,g){return new c_(l,u,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,qh(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Cv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Te.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ho{constructor(e){this._methodName=e}}/**
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
 */class Wo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
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
 */class Go{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Uv=/^__.*__$/;class Fv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new vr(e,this.data,t,this.fieldTransforms)}}class Wh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ic:n})}}class Ko{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ko(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ts(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Gh(this.Ic)&&Uv.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class Bv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ms(e)}bc(e,t,r,s=!1){return new Ko({Ic:e,methodName:t,wc:r,path:Ee.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kh(n){const e=n._freezeSettings(),t=Ms(n._databaseId);return new Bv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zv(n,e,t,r,s,i={}){const a=n.bc(i.merge||i.mergeFields?2:0,e,t,s);Qo("Data must be an object, but it was:",a,r);const l=Qh(r,a);let u,f;if(i.merge)u=new Le(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const g=[];for(const T of i.mergeFields){const w=so(e,T,t);if(!a.contains(w))throw new F(N.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Yh(g,w)||g.push(w)}u=new Le(g),f=a.fieldTransforms.filter(T=>u.covers(T.field))}else u=null,f=a.fieldTransforms;return new Fv(new Ve(l),u,f)}class $s extends Ho{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $s}}function qv(n,e,t,r){const s=n.bc(1,e,t);Qo("Data must be an object, but it was:",s,r);const i=[],a=Ve.empty();Dt(r,(u,f)=>{const g=Xo(e,u,t);f=we(f);const T=s.mc(g);if(f instanceof $s)i.push(g);else{const w=Hs(f,T);w!=null&&(i.push(g),a.set(g,w))}});const l=new Le(i);return new Wh(a,l,s.fieldTransforms)}function $v(n,e,t,r,s,i){const a=n.bc(1,e,t),l=[so(e,r,t)],u=[s];if(i.length%2!=0)throw new F(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(so(e,i[w])),u.push(i[w+1]);const f=[],g=Ve.empty();for(let w=l.length-1;w>=0;--w)if(!Yh(f,l[w])){const A=l[w];let R=u[w];R=we(R);const D=a.mc(A);if(R instanceof $s)f.push(A);else{const k=Hs(R,D);k!=null&&(f.push(A),g.set(A,k))}}const T=new Le(f);return new Wh(g,T,a.fieldTransforms)}function Hs(n,e){if(Xh(n=we(n)))return Qo("Unsupported field value:",e,n),Qh(n,e);if(n instanceof Ho)return function(r,s){if(!Gh(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Hs(l,s.fc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=me.fromDate(r);return{timestampValue:ys(s.serializer,i)}}if(r instanceof me){const i=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(s.serializer,i)}}if(r instanceof Wo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:uh(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ro(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Go)return function(a,l){return{mapValue:{fields:{[Uu]:{stringValue:Bu},[fs]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.gc("VectorValues must only contain numeric values.");return bo(l.serializer,f)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${qo(r)}`)}(n,e)}function Qh(n,e){const t={};return Du(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dt(n,(r,s)=>{const i=Hs(s,e.Ac(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Xh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Wo||n instanceof vn||n instanceof Oe||n instanceof Ho||n instanceof Go)}function Qo(n,e,t){if(!Xh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=qo(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function so(n,e,t){if((e=we(e))instanceof qs)return e._internalPath;if(typeof e=="string")return Xo(n,e);throw Ts("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hv=new RegExp("[~\\*/\\[\\]]");function Xo(n,e,t){if(e.search(Hv)>=0)throw Ts(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qs(...e.split("."))._internalPath}catch{throw Ts(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ts(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new F(N.INVALID_ARGUMENT,l+n+u)}function Yh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Jh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Wv extends Jh{data(){return super.data()}}function Zh(n,e){return typeof e=="string"?Xo(n,e):e instanceof qs?e._internalPath:e._delegate._internalPath}/**
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
 */function Gv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kv{convertValue(e,t="none"){switch(kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[fs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ue(a.doubleValue));return new Go(i)}convertGeoPoint(e){return new Wo(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ps(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(cr(e));default:return null}}convertTimestamp(e){const t=At(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ae.fromString(e);te(gh(r),9688,{name:e});const s=new lr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Yn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ed extends Jh{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ns extends ed{data(e={}){return super.data(e)}}class Xv{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Yn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ns(this._firestore,this._userDataWriter,r.key,r,new Yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:Yv(l.type),doc:u,oldIndex:f,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Yv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */function xl(n){n=Ze(n,Oe);const e=Ze(n.firestore,Sn);return Dv($o(e),n._key).then(t=>eE(e,n,t))}class td extends Kv{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function Hn(n){n=Ze(n,zs);const e=Ze(n.firestore,Sn),t=$o(e),r=new td(e);return Gv(n._query),Vv(t,n._query).then(s=>new Xv(e,r,n,s))}function ki(n,e,t){n=Ze(n,Oe);const r=Ze(n.firestore,Sn),s=Qv(n.converter,e,t);return Yo(r,[zv(Kh(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$e.none())])}function Jv(n,e,t,...r){n=Ze(n,Oe);const s=Ze(n.firestore,Sn),i=Kh(s);let a;return a=typeof(e=we(e))=="string"||e instanceof qs?$v(i,"updateDoc",n._key,e,t,r):qv(i,"updateDoc",n._key,e),Yo(s,[a.toMutation(n._key,$e.exists(!0))])}function Zv(n){return Yo(Ze(n.firestore,Sn),[new Ao(n._key,$e.none())])}function Yo(n,e){return function(r,s){const i=new it;return r.asyncQueue.enqueueAndForget(async()=>wv(await Nv(r),s,i)),i.promise}($o(n),e)}function eE(n,e,t){const r=t.docs.get(e._key),s=new td(n);return new ed(n,s,e._key,r,new Yn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){In=s})(wn),dn(new qt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Sn(new Hg(r.getProvider("auth-internal")),new Kg(a,r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(f.options.projectId,g)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tt(kc,Rc,e),Tt(kc,Rc,"esm2017")})();const tE={apiKey:"AIzaSyBPfo4YVc6PFgVyhrE3GZjJI0mFulpBKDc",authDomain:"itgamifikace.firebaseapp.com",projectId:"itgamifikace",storageBucket:"itgamifikace.appspot.com",messagingSenderId:"693204035422",appId:"1:693204035422:web:73a27dc87d8c3d30f7d1cf",measurementId:"G-ENKMC867HX"},nd=Ml(tE),Is=Ug(nd),ze=Lv(nd),ne={async getStudentData(n){try{const e=tn(ze,"students",n),t=await xl(e);if(t.exists())return t.data();{const r={id:n,name:"Student",avatar:{hair:"brown",skinColor:"light",shirtColor:"blue",eyes:"brown"},xp:0,badges:[],snakeScore:0,spaceScore:0,stars:0,lastActive:new Date().toISOString(),dailyQuestsCompleted:[],totalQuestsCompleted:0,loginStreak:1,lastLoginDate:new Date().toISOString(),topicsCompleted:[],typingScore:0,helpCount:0,creativeProjects:0};return await ki(e,r),r}}catch(e){return console.error("Error getting student data:",e),null}},async updateStudentData(n,e){try{const t=tn(ze,"students",n);return await Jv(t,{...e,lastActive:new Date().toISOString()}),!0}catch(t){return console.error("Error updating student data:",t),!1}},async getBadges(){try{return(await Hn($n(ze,"badges"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting badges:",n),[]}},async getTopics(){try{return(await Hn($n(ze,"topics"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting topics:",n),[]}},async getDailyQuests(){try{return(await Hn($n(ze,"dailyQuests"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting daily quests:",n),[]}},async getTodaysQuest(){try{const n=new Date().toISOString().split("T")[0],e=await Hn($n(ze,"dailyQuests")),t=e.docs.map(a=>a.data()).find(a=>a.date===n);if(t)return t;const r=e.docs.map(a=>a.data());if(r.length===0)return console.error("Žádné denní výzvy nebyly nalezeny"),null;const i={...r[Math.floor(Math.random()*r.length)],id:`quest_${n}`,date:n};return await ki(tn(ze,"dailyQuests",i.id),i),i}catch(n){return console.error("Error getting today's quest:",n),null}},async hasCompletedTodaysQuest(n){try{const e=await this.getStudentData(n);if(!e)return!1;const r=`quest_${new Date().toISOString().split("T")[0]}`;return e.dailyQuestsCompleted.includes(r)}catch(e){return console.error("Error checking today's quest completion:",e),!1}},async checkAndUnlockAutomaticBadges(n){try{const e=await this.getStudentData(n);if(!e)return[];const t=await this.getBadges(),r=[];for(const s of t)if(s.unlockMethod==="automatic"&&s.autoUnlockCondition&&!e.badges.includes(s.id)&&await this.checkBadgeCondition(e,s.autoUnlockCondition)){const a=[...e.badges,s.id];await this.updateStudentData(n,{badges:a,xp:e.xp+s.xpReward}),r.push(s.id),console.log(`🎉 Automaticky odemčen odznak: ${s.name}`)}return r}catch(e){return console.error("Error checking automatic badges:",e),[]}},async checkBadgeCondition(n,e){switch(e.type){case"xp_threshold":return n.xp>=e.value;case"login_streak":return e.value===1?n.loginStreak===1&&n.badges.length===0:n.loginStreak>=e.value;case"badge_count":return n.badges.length>=e.value;case"quest_count":return n.totalQuestsCompleted>=e.value;case"game_score":return Math.max(n.snakeScore,n.spaceScore)>=e.value;case"login_time":const s=new Date().getHours();return e.value===8?s<8:e.value===22?s>=22:!1;case"quest_speed":return!1;case"help_count":return n.helpCount>=e.value;case"creative_projects":return n.creativeProjects>=e.value;default:return!1}},async updateLoginStreak(n){try{const e=await this.getStudentData(n);if(!e)return;const t=new Date().toISOString().split("T")[0],r=new Date(e.lastLoginDate).toISOString().split("T")[0];let s=e.loginStreak;if(t===r)return;this.isConsecutiveDay(r,t)?s+=1:s=1,await this.updateStudentData(n,{loginStreak:s,lastLoginDate:new Date().toISOString()}),console.log(`📅 Login streak aktualizován: ${s} dní`)}catch(e){console.error("Error updating login streak:",e)}},isConsecutiveDay(n,e){const t=new Date(n),r=new Date(e),s=Math.abs(r.getTime()-t.getTime());return Math.ceil(s/(1e3*60*60*24))===1},async getAllStudents(){try{return(await Hn($n(ze,"students"))).docs.map(e=>e.data())}catch(n){return console.error("Error getting all students:",n),[]}},async updateLeaderboard(n,e){try{const t=tn(ze,"leaderboards",n);return await ki(t,{scores:e},{merge:!0}),!0}catch(t){return console.error("Error updating leaderboard:",t),!1}},async getLeaderboard(n){try{const e=tn(ze,"leaderboards",n),t=await xl(e);if(t.exists()){const r=t.data().scores;return Array.isArray(r)?r:[]}return[]}catch(e){return console.error("Error getting leaderboard:",e),[]}},async deleteStudent(n){try{const e=tn(ze,"students",n);return await Zv(e),!0}catch(e){return console.error("Error deleting student:",e),!1}}},nE=({onLogin:n})=>{const[e,t]=U.useState(""),[r,s]=U.useState(""),[i,a]=U.useState(!1),[l,u]=U.useState(""),[f,g]=U.useState(!1),T=async w=>{w.preventDefault(),u(""),g(!0);try{if(i){const A=await Im(Is,e,r);n({uid:A.user.uid,email:A.user.email||""})}else{const A=await xm(Is,e,r);n({uid:A.user.uid,email:A.user.email||""})}}catch(A){u(A.message)}finally{g(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan",children:h.jsxs("div",{className:"arcade-card p-8 max-w-md w-full mx-4",children:[h.jsx("h1",{className:"text-3xl font-arcade text-center mb-8 text-arcade-purple",children:"🎮 Gamifikace Informatika"}),h.jsxs("form",{onSubmit:T,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"E-mail:"}),h.jsx("input",{type:"email",value:e,onChange:w=>t(w.target.value),className:"w-full px-4 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none",placeholder:"Zadej svůj e-mail",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Heslo:"}),h.jsx("input",{type:"password",value:r,onChange:w=>s(w.target.value),className:"w-full px-4 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none",placeholder:"Zadej heslo",required:!0})]}),l&&h.jsx("div",{className:"text-red-600 text-xs font-arcade",children:l}),h.jsx("button",{type:"submit",className:"w-full arcade-button text-lg py-3",disabled:f,children:i?"📝 Registrovat":"🔑 Přihlásit"})]}),h.jsx("div",{className:"mt-6 text-center",children:h.jsx("button",{className:"text-xs font-arcade text-arcade-neon-blue underline",onClick:()=>a(w=>!w),children:i?"Už mám účet – přihlásit":"Nemám účet – registrace"})})]})})},rE=({badges:n,unlockedBadges:e})=>h.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:n.map(t=>{const r=e.includes(t.id);return h.jsxs("div",{className:`arcade-card p-4 text-center transition-all duration-300 ${r?"badge-unlocked border-arcade-neon-green":"badge-locked border-arcade-gray"}`,children:[h.jsx("div",{className:"text-4xl mb-2",children:t.icon}),h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark mb-1",children:t.name}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray mb-2",children:t.description}),h.jsx("div",{className:"text-xs font-arcade",children:r?h.jsx("span",{className:"text-arcade-green",children:"✅ Odemčeno"}):h.jsx("span",{className:"text-arcade-gray",children:"🔒 Zamčeno"})}),r&&h.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow mt-1",children:["+",t.xpReward," XP"]})]},t.id)})}),sE=({topics:n,onCompleteTopic:e,completedTopics:t=[]})=>{const[r,s]=U.useState(null),[i,a]=U.useState(!1),[l,u]=U.useState(""),[f,g]=U.useState(!1),[T,w]=U.useState(!1),A=V=>t.includes(V),R=V=>{A(V.id)||(V.externalLink?(s(V),a(!0)):e(V.id))},D=()=>{r!=null&&r.externalLink&&window.open(r.externalLink,"_blank")},k=()=>{if(!(r!=null&&r.answer))return;const V=l.toLowerCase().trim()===r.answer.toLowerCase().trim();w(V),g(!0),setTimeout(V?()=>{e(r.id),a(!1),g(!1),u(""),s(null)}:()=>{g(!1)},2e3)},L=V=>{switch(V){case"easy":return"text-green-500";case"medium":return"text-yellow-500";case"hard":return"text-red-500";default:return"text-gray-500"}},j=V=>{switch(V){case"easy":return"🟢";case"medium":return"🟡";case"hard":return"🔴";default:return"⚪"}};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(V=>h.jsxs("div",{className:`arcade-card p-4 transition-all duration-300 cursor-pointer ${A(V.id)?"border-arcade-neon-green animate-pulse-neon":"border-arcade-gray hover:border-arcade-neon-blue hover:scale-105"}`,onClick:()=>R(V),children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"text-3xl mr-3",children:V.icon}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:V.name}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:V.description})]})]}),h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow",children:["+",V.xpReward," XP"]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:`text-xs font-arcade ${L(V.difficulty)}`,children:[j(V.difficulty)," ",V.difficulty]}),h.jsxs("span",{className:"text-xs font-arcade text-arcade-gray",children:["⏱️ ",V.estimatedTime,"min"]})]})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("div",{className:"text-xs font-arcade",children:A(V.id)?h.jsx("span",{className:"text-arcade-green",children:"✅ Splněno"}):h.jsx("span",{className:"text-arcade-gray",children:"🔒 Zamčeno"})}),V.externalLink&&!A(V.id)&&h.jsx("span",{className:"text-xs font-arcade text-arcade-neon-blue",children:"🌐 Externí odkaz"})]})]},V.id))}),i&&r&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:h.jsxs("div",{className:"arcade-card p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center mb-4",children:[h.jsx("div",{className:"text-3xl mr-3",children:r.icon}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-arcade text-arcade-purple",children:r.name}),h.jsxs("p",{className:"text-sm font-arcade text-arcade-gray",children:["Obtížnost: ",j(r.difficulty)," ",r.difficulty," | Čas: ⏱️ ",r.estimatedTime," min"]})]})]}),h.jsxs("div",{className:"mb-6",children:[h.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-4",children:r.externalDescription}),h.jsxs("div",{className:"bg-arcade-dark p-4 rounded mb-4",children:[h.jsx("h4",{className:"text-sm font-arcade text-arcade-yellow mb-2",children:"📚 Úkol:"}),h.jsx("p",{className:"text-sm font-arcade text-arcade-gray mb-3",children:r.question}),h.jsx("button",{onClick:D,className:"arcade-button text-sm py-2 px-4 mb-4",children:"🌐 Otevřít studijní materiál"})]}),!f&&h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"💭 Tvoje odpověď:"}),h.jsx("input",{type:"text",value:l,onChange:V=>u(V.target.value),placeholder:"Zadej svou odpověď...",className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none bg-arcade-dark text-white",onKeyPress:V=>V.key==="Enter"&&k()})]}),f&&h.jsx("div",{className:`mb-4 p-3 rounded text-center font-arcade ${T?"bg-arcade-green bg-opacity-20 text-arcade-green":"bg-arcade-neon-pink bg-opacity-20 text-arcade-neon-pink"}`,children:T?h.jsxs("div",{children:["🎉 Správně! +",r.xpReward," XP"]}):h.jsx("div",{children:"❌ Špatně! Zkus to znovu"})})]}),h.jsxs("div",{className:"flex gap-3",children:[!f&&h.jsx("button",{onClick:k,disabled:!l.trim(),className:"flex-1 arcade-button text-sm py-2 disabled:opacity-50",children:"🎯 Odeslat odpověď"}),h.jsx("button",{onClick:()=>{a(!1),g(!1),u(""),s(null)},className:"flex-1 arcade-button text-sm py-2 bg-arcade-gray",children:"❌ Zavřít"})]})]})})]})},iE=({onPlaySnake:n,onPlaySpace:e,onPlayTyping:t,snakeScore:r,spaceScore:s,snakeLeaderboard:i,spaceLeaderboard:a})=>h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"arcade-card p-4",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"text-3xl mr-3",children:"🐍"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Hra Snake"}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Dosáhni 20+ bodů pro odznak "Hadí mistr"'})]})]}),h.jsxs("div",{className:"mb-3",children:[h.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow",children:["Tvůj nejlepší skóre: ",r]}),r>=20&&h.jsx("div",{className:"text-xs font-arcade text-arcade-green mt-1",children:'🎉 Odznak "Hadí mistr" odemčen!'})]}),h.jsx("button",{onClick:n,className:"w-full arcade-button text-xs py-2",children:"🎮 Spustit hru"})]}),h.jsxs("div",{className:"arcade-card p-4",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"text-3xl mr-3",children:"🚀"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Space Shooter"}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Znič 10+ asteroidů pro odznak "Vesmírný obránce"'})]})]}),h.jsxs("div",{className:"mb-3",children:[h.jsxs("div",{className:"text-xs font-arcade text-arcade-yellow",children:["Tvůj nejlepší skóre: ",s]}),s>=100&&h.jsx("div",{className:"text-xs font-arcade text-arcade-green mt-1",children:'🎉 Odznak "Vesmírný obránce" odemčen!'})]}),h.jsx("button",{onClick:e,className:"w-full arcade-button text-xs py-2",children:"🚀 Spustit hru"})]}),h.jsxs("div",{className:"arcade-card p-4",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"text-3xl mr-3",children:"⌨️"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Rychlé psaní"}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Napiš co nejvíce slov za 60 sekund"})]})]}),h.jsxs("div",{className:"mb-3",children:[h.jsx("div",{className:"text-xs font-arcade text-arcade-yellow",children:"Nová hra - zkus to!"}),h.jsx("div",{className:"text-xs font-arcade text-arcade-green mt-1",children:"+10 XP za každé správné slovo"})]}),h.jsx("button",{onClick:t,className:"w-full arcade-button text-xs py-2",children:"⌨️ Spustit hru"})]}),h.jsxs("div",{className:"arcade-card p-4",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"text-3xl mr-3",children:"⭐"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Speciální úkol"}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Zadej kód: snakepro20"})]})]}),h.jsx("div",{className:"text-xs font-arcade text-arcade-gray mb-3",children:'Pro odemčení odznaku "Hadí mistr"'}),h.jsx("div",{className:"text-xs font-arcade text-arcade-yellow",children:"+150 XP za splnění"})]}),h.jsxs("div",{className:"arcade-card p-4",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"text-3xl mr-3",children:"🧠"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-arcade text-arcade-dark",children:"Kvízový šampion"}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Splň 10 denních výzev"})]})]}),h.jsx("div",{className:"text-xs font-arcade text-arcade-gray mb-3",children:'Pro odznak "Kvízový šampion"'}),h.jsx("div",{className:"text-xs font-arcade text-arcade-yellow",children:"+80 XP za splnění"})]}),h.jsxs("div",{className:"arcade-card p-4",children:[h.jsx("h4",{className:"text-sm font-arcade text-arcade-purple mb-3",children:"🏆 Top 5 ve hře Snake"}),h.jsx("div",{className:"space-y-2",children:i.sort((l,u)=>u.score-l.score).slice(0,5).map((l,u)=>h.jsxs("div",{className:"flex items-center justify-between p-2 bg-arcade-light-gray rounded",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsxs("span",{className:"text-xs font-arcade text-arcade-yellow mr-2",children:["#",u+1]}),h.jsx("span",{className:"text-xs font-arcade text-arcade-dark",children:l.name})]}),h.jsxs("span",{className:"text-xs font-arcade text-arcade-green",children:[l.score," bodů"]})]},u))})]}),h.jsxs("div",{className:"arcade-card p-4",children:[h.jsx("h4",{className:"text-sm font-arcade text-arcade-purple mb-3",children:"🏆 Top 5 ve Space Shooter"}),h.jsx("div",{className:"space-y-2",children:a.sort((l,u)=>u.score-l.score).slice(0,5).map((l,u)=>h.jsxs("div",{className:"flex items-center justify-between p-2 bg-arcade-light-gray rounded",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsxs("span",{className:"text-xs font-arcade text-arcade-yellow mr-2",children:["#",u+1]}),h.jsx("span",{className:"text-xs font-arcade text-arcade-dark",children:l.name})]}),h.jsxs("span",{className:"text-xs font-arcade text-arcade-cyan",children:[l.score," bodů"]})]},u))})]})]}),oE=({students:n,currentUser:e})=>{const t=[...n].sort((r,s)=>s.xp-r.xp);return h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b-2 border-arcade-neon-green",children:[h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Pozice"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Jméno"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"XP"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Odznaky"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Snake"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Space"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Výzvy"}),h.jsx("th",{className:"text-left p-2 text-xs font-arcade text-arcade-purple",children:"Hvězdy"})]})}),h.jsx("tbody",{children:t.map((r,s)=>h.jsxs("tr",{className:`border-b border-arcade-light-gray ${r.name===e?"bg-arcade-yellow bg-opacity-20":""}`,children:[h.jsx("td",{className:"p-2",children:h.jsxs("div",{className:"flex items-center",children:[s===0&&h.jsx("span",{className:"text-lg mr-1",children:"👑"}),h.jsxs("span",{className:"text-xs font-arcade text-arcade-dark",children:["#",s+1]})]})}),h.jsx("td",{className:"p-2",children:h.jsxs("span",{className:"text-xs font-arcade text-arcade-dark",children:[r.name,r.name===e&&" (Ty)"]})}),h.jsx("td",{className:"p-2",children:h.jsx("span",{className:"text-xs font-arcade text-arcade-yellow",children:r.xp})}),h.jsx("td",{className:"p-2",children:h.jsx("span",{className:"text-xs font-arcade text-arcade-green",children:r.badges.length})}),h.jsx("td",{className:"p-2",children:h.jsx("span",{className:"text-xs font-arcade text-arcade-cyan",children:r.snakeScore})}),h.jsx("td",{className:"p-2",children:h.jsx("span",{className:"text-xs font-arcade text-arcade-neon-pink",children:r.spaceScore})}),h.jsx("td",{className:"p-2",children:h.jsx("span",{className:"text-xs font-arcade text-arcade-purple",children:r.totalQuestsCompleted})}),h.jsx("td",{className:"p-2",children:h.jsx("div",{className:"flex",children:[...Array(5)].map((i,a)=>h.jsx("span",{className:`text-xs ${a<r.stars?"text-arcade-yellow":"text-arcade-gray"}`,children:"⭐"},a))})})]},r.id))})]})})},aE=({onClose:n,onScoreUpdate:e,currentScore:t})=>{const[r,s]=U.useState([[10,10]]),[i,a]=U.useState([5,5]),[l,u]=U.useState("RIGHT"),[f,g]=U.useState(0),[T,w]=U.useState(!1),[A,R]=U.useState(!1),D=20,k=150,L=U.useCallback(()=>{const z=[Math.floor(Math.random()*D),Math.floor(Math.random()*D)];a(z)},[]),j=()=>{s([[10,10]]),u("RIGHT"),g(0),w(!1),R(!1),L()},V=U.useCallback(()=>{T||!A||s(z=>{const P=[...z],y=[...P[0]];switch(l){case"UP":y[1]-=1;break;case"DOWN":y[1]+=1;break;case"LEFT":y[0]-=1;break;case"RIGHT":y[0]+=1;break}return y[0]<0||y[0]>=D||y[1]<0||y[1]>=D||P.some(m=>m[0]===y[0]&&m[1]===y[1])?(w(!0),f>t&&e(f),z):(P.unshift(y),y[0]===i[0]&&y[1]===i[1]?(g(m=>m+1),L()):P.pop(),P)})},[l,T,A,i,f,t,e,L]);U.useEffect(()=>{const z=P=>{if(!A){R(!0);return}switch(P.key){case"ArrowUp":u(y=>y!=="DOWN"?"UP":y);break;case"ArrowDown":u(y=>y!=="UP"?"DOWN":y);break;case"ArrowLeft":u(y=>y!=="RIGHT"?"LEFT":y);break;case"ArrowRight":u(y=>y!=="LEFT"?"RIGHT":y);break}};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[A]),U.useEffect(()=>{const z=setInterval(V,k);return()=>clearInterval(z)},[V]);const B=(z,P)=>{const y=r[0][0]===z&&r[0][1]===P,m=r.slice(1).some(I=>I[0]===z&&I[1]===P),_=i[0]===z&&i[1]===P;let v="snake-cell border border-arcade-dark";return y?v+=" snake-head":m?v+=" snake-body":_&&(v+=" snake-food"),h.jsx("div",{className:v},`${z}-${P}`)};return h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"arcade-card p-6 max-w-2xl w-full",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple",children:"🐍 Snake Game"}),h.jsx("button",{onClick:n,className:"arcade-button text-xs",children:"❌ Zavřít"})]}),h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"text-sm font-arcade text-arcade-yellow",children:["Skóre: ",f]}),h.jsxs("div",{className:"text-sm font-arcade text-arcade-green",children:["Nejlepší: ",Math.max(f,t)]})]}),!A&&!T&&h.jsxs("div",{className:"text-center mb-4",children:[h.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:"Použij šipky pro pohyb"}),h.jsx("button",{onClick:()=>R(!0),className:"arcade-button",children:"🎮 Začít hru"})]}),T&&h.jsxs("div",{className:"text-center mb-4",children:[h.jsx("p",{className:"text-lg font-arcade text-arcade-neon-pink mb-2",children:"Game Over!"}),h.jsxs("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:["Skóre: ",f]}),h.jsx("button",{onClick:j,className:"arcade-button",children:"🔄 Hrát znovu"})]}),h.jsx("div",{className:"flex justify-center",children:h.jsx("div",{className:"snake-grid grid gap-0",style:{gridTemplateColumns:`repeat(${D}, 1fr)`,width:`${D*16}px`,height:`${D*16}px`},children:Array.from({length:D},(z,P)=>Array.from({length:D},(y,m)=>B(m,P)))})}),h.jsx("div",{className:"mt-4 text-center",children:h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Dosáhni 20+ bodů pro odznak "Hadí mistr"!'})})]})})},cE=({onClose:n,onScoreUpdate:e,currentScore:t})=>{const[r,s]=U.useState({player:{x:400,y:500},bullets:[],asteroids:[],score:0,gameOver:!1,lives:3,gameStarted:!1,gameTime:0,difficulty:1}),[i,a]=U.useState(0),[l,u]=U.useState(0),[f,g]=U.useState(new Set),T=800,w=600,A=5,R=10,D=1.5,k=.01,L=U.useCallback(()=>{const B={x:Math.random()*(T-40),y:-50,size:Math.random()*30+20,id:l};return u(z=>z+1),B},[l]),j=U.useCallback(()=>{if(r.gameOver||!r.gameStarted)return;const B={x:r.player.x+20,y:r.player.y,id:i};a(z=>z+1),s(z=>({...z,bullets:[...z.bullets,B]}))},[r.player,r.gameOver,r.gameStarted,i]),V=()=>{s({player:{x:400,y:500},bullets:[],asteroids:[],score:0,gameOver:!1,lives:3,gameStarted:!1,gameTime:0,difficulty:1}),a(0),u(0)};return U.useEffect(()=>{const B=P=>{if(!r.gameStarted){s(y=>({...y,gameStarted:!0}));return}g(y=>new Set(y).add(P.code)),P.code==="Space"&&(P.preventDefault(),j())},z=P=>{g(y=>{const m=new Set(y);return m.delete(P.code),m})};return window.addEventListener("keydown",B),window.addEventListener("keyup",z),()=>{window.removeEventListener("keydown",B),window.removeEventListener("keyup",z)}},[r.gameStarted,j]),U.useEffect(()=>{if(!r.gameStarted||r.gameOver)return;const B=setInterval(()=>{s(z=>{const P=z.gameTime+16,y=Math.min(5,1+Math.floor(P/3e4)),m=D+(y-1)*.5,_=k+(y-1)*.005;let v=z.player.x;f.has("ArrowLeft")&&(v=Math.max(0,v-A)),f.has("ArrowRight")&&(v=Math.min(T-40,v+A));const I=z.bullets.map(ee=>({...ee,y:ee.y-R})).filter(ee=>ee.y>-10);let E=z.asteroids.map(ee=>({...ee,y:ee.y+m})).filter(ee=>ee.y<w+50);Math.random()<_&&(E=[...E,L()]);let se=z.score,Ce=z.lives,Ot=z.gameOver;const Me=[...I],fe=[...E];for(let ee=Me.length-1;ee>=0;ee--)for(let Ue=fe.length-1;Ue>=0;Ue--){const Y=Me[ee],oe=fe[Ue];if(Y&&oe&&Y.x<oe.x+oe.size&&Y.x+4>oe.x&&Y.y<oe.y+oe.size&&Y.y+8>oe.y){Me.splice(ee,1),fe.splice(Ue,1),se+=10;break}}for(const ee of fe)if(v<ee.x+ee.size&&v+40>ee.x&&500<ee.y+ee.size&&500+40>ee.y){Ce--,Ce<=0&&(Ot=!0,se>t&&e(se));break}for(const ee of fe)if(ee.y>w+10&&ee.y<w+20){Ce--,Ce<=0&&(Ot=!0,se>t&&e(se));const Ue=fe.indexOf(ee);Ue>-1&&fe.splice(Ue,1);break}return{...z,player:{x:v,y:500},bullets:Me,asteroids:fe,score:se,lives:Ce,gameOver:Ot,gameTime:P,difficulty:y}})},16);return()=>clearInterval(B)},[r.gameStarted,r.gameOver,f,L,t,e]),h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"arcade-card p-6 max-w-4xl w-full",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple",children:"🚀 Space Shooter"}),h.jsx("button",{onClick:n,className:"arcade-button text-xs",children:"❌ Zavřít"})]}),h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"text-sm font-arcade text-arcade-yellow",children:["Skóre: ",r.score]}),h.jsxs("div",{className:"text-sm font-arcade text-arcade-green",children:["Životy: ","❤️".repeat(r.lives)]}),h.jsxs("div",{className:"text-sm font-arcade text-arcade-cyan",children:["Nejlepší: ",Math.max(r.score,t)]}),h.jsxs("div",{className:"text-sm font-arcade text-arcade-neon-pink",children:["Úroveň: ",r.difficulty]})]}),!r.gameStarted&&!r.gameOver&&h.jsxs("div",{className:"text-center mb-4",children:[h.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:"Šipky = pohyb, Mezerník = střelba"}),h.jsx("p",{className:"text-xs font-arcade text-arcade-gray mb-2",children:"⚠️ Pozor! Asteroidy které proletí kolem vás vám ubere život!"}),h.jsx("button",{onClick:()=>s(B=>({...B,gameStarted:!0})),className:"arcade-button",children:"🚀 Začít hru"})]}),r.gameOver&&h.jsxs("div",{className:"text-center mb-4",children:[h.jsx("p",{className:"text-lg font-arcade text-arcade-neon-pink mb-2",children:"Game Over!"}),h.jsxs("p",{className:"text-sm font-arcade text-arcade-dark mb-2",children:["Skóre: ",r.score," | Dosáhnutá úroveň: ",r.difficulty]}),h.jsx("button",{onClick:V,className:"arcade-button",children:"🔄 Hrát znovu"})]}),h.jsx("div",{className:"flex justify-center",children:h.jsxs("div",{className:"snake-grid relative overflow-hidden",style:{width:T,height:w},children:[h.jsx("div",{className:"absolute w-10 h-10 bg-arcade-yellow rounded",style:{left:r.player.x,top:r.player.y}}),r.bullets.map(B=>h.jsx("div",{className:"absolute w-1 h-2 bg-arcade-neon-green",style:{left:B.x,top:B.y}},B.id)),r.asteroids.map(B=>h.jsx("div",{className:"absolute bg-arcade-neon-pink rounded",style:{left:B.x,top:B.y,width:B.size,height:B.size}},B.id))]})}),h.jsxs("div",{className:"mt-4 text-center",children:[h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:'Znič 10+ asteroidů pro odznak "Vesmírný obránce"!'}),h.jsx("p",{className:"text-xs font-arcade text-arcade-neon-pink",children:"Obtížnost se zvyšuje každých 30 sekund!"})]})]})})},lE=({onComplete:n,onClose:e})=>{const[t,r]=U.useState(""),[s,i]=U.useState(""),[a,l]=U.useState(0),[u,f]=U.useState(60),[g,T]=U.useState(0),[w,A]=U.useState(0),[R,D]=U.useState(!1),[k,L]=U.useState(!1),j=U.useRef(null),V=["počítač","klávesnice","myš","monitor","tiskárna","skener","sluchátka","mikrofon","webkamera","procesor","paměť","disk","grafika","síť","internet","email","soubor","složka","program","aplikace","software","hardware","databáze","server","router","modem","wifi","bluetooth","usb","hdmi","vga","dvi","ethernet","firewall","antivirus","backup","cloud","streaming","download","upload","browser","web","html","css","javascript","python","java","c++","php","sql","xml","json","api"],B=()=>V[Math.floor(Math.random()*V.length)];U.useEffect(()=>{if(!R)return;const m=setInterval(()=>{f(_=>_<=1?(L(!0),clearInterval(m),0):_-1)},1e3);return()=>clearInterval(m)},[R]),U.useEffect(()=>{if(k){const m=g>0?Math.round(w/g*100):100;n(a,m)}},[k,a,w,g,n]);const z=()=>{D(!0),r(B()),j.current&&j.current.focus()},P=m=>{const _=m.target.value;i(_),T(v=>v+1),_===t?(l(v=>v+10),A(v=>v+t.length),r(B()),i("")):_.length>t.length&&i("")},y=()=>g>0?Math.round(w/g*100):100;return R?h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"arcade-card p-6 max-w-2xl w-full",children:[h.jsxs("div",{className:"flex justify-between items-center mb-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple",children:"⌨️ Rychlé psaní"}),h.jsxs("div",{className:"flex gap-4 text-sm font-arcade",children:[h.jsxs("div",{className:"bg-arcade-dark px-3 py-1 rounded",children:["⏱️ ",u,"s"]}),h.jsxs("div",{className:"bg-arcade-dark px-3 py-1 rounded",children:["🎯 ",a," bodů"]}),h.jsxs("div",{className:"bg-arcade-dark px-3 py-1 rounded",children:["📊 ",y(),"%"]})]})]}),k?h.jsxs("div",{className:"text-center",children:[h.jsx("h3",{className:"text-2xl font-arcade text-arcade-purple mb-4",children:"🎉 Hra skončila!"}),h.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[h.jsxs("div",{className:"bg-arcade-dark p-4 rounded",children:[h.jsx("div",{className:"text-arcade-neon-green font-bold text-lg",children:"Celkové skóre"}),h.jsx("div",{className:"text-2xl font-arcade",children:a})]}),h.jsxs("div",{className:"bg-arcade-dark p-4 rounded",children:[h.jsx("div",{className:"text-arcade-neon-green font-bold text-lg",children:"Přesnost"}),h.jsxs("div",{className:"text-2xl font-arcade",children:[y(),"%"]})]})]}),h.jsx("button",{onClick:e,className:"arcade-button text-lg py-3 px-6",children:"✅ Hotovo"})]}):h.jsxs("div",{className:"text-center",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("div",{className:"text-4xl font-arcade text-arcade-neon-green mb-4",children:t}),h.jsx("input",{ref:j,type:"text",value:s,onChange:P,className:"w-full px-4 py-3 text-xl font-arcade border-2 border-arcade-neon-green rounded bg-arcade-dark text-white text-center",placeholder:"Začni psát...",autoFocus:!0})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[h.jsxs("div",{className:"bg-arcade-dark p-3 rounded",children:[h.jsx("div",{className:"text-arcade-neon-green font-bold",children:"Správně"}),h.jsx("div",{children:w})]}),h.jsxs("div",{className:"bg-arcade-dark p-3 rounded",children:[h.jsx("div",{className:"text-arcade-neon-green font-bold",children:"Celkem"}),h.jsx("div",{children:g})]}),h.jsxs("div",{className:"bg-arcade-dark p-3 rounded",children:[h.jsx("div",{className:"text-arcade-neon-green font-bold",children:"WPM"}),h.jsx("div",{children:Math.round(w/5)})]})]})]})]})}):h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"arcade-card p-6 max-w-md w-full text-center",children:[h.jsx("h2",{className:"text-2xl font-arcade text-arcade-purple mb-4",children:"⌨️ Rychlé psaní"}),h.jsxs("p",{className:"text-arcade-dark mb-6",children:["Napiš co nejvíce slov správně za 60 sekund!",h.jsx("br",{}),"Každé správné slovo = 10 bodů"]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("button",{onClick:z,className:"arcade-button text-lg py-3 px-6 w-full",children:"🚀 Začít hru"}),h.jsx("button",{onClick:e,className:"arcade-button-secondary text-lg py-3 px-6 w-full",children:"❌ Zavřít"})]})]})})},uE=({quest:n,onComplete:e,isCompleted:t})=>{const[r,s]=U.useState(null),[i,a]=U.useState(!1),[l,u]=U.useState(!1),[f,g]=U.useState("");U.useEffect(()=>{const R=()=>{const k=new Date,L=new Date(k);L.setDate(L.getDate()+1),L.setHours(0,0,0,0);const j=L.getTime()-k.getTime(),V=Math.floor(j/(1e3*60*60)),B=Math.floor(j%(1e3*60*60)/(1e3*60)),z=Math.floor(j%(1e3*60)/1e3);g(`${V.toString().padStart(2,"0")}:${B.toString().padStart(2,"0")}:${z.toString().padStart(2,"0")}`)};R();const D=setInterval(R,1e3);return()=>clearInterval(D)},[]);const T=R=>{t||i||s(R)},w=()=>{if(r===null)return;const R=r===n.correctAnswer;u(R),a(!0),setTimeout(()=>{e(n.id,R),a(!1),s(null)},2e3)},A=R=>i?R===n.correctAnswer?"border-arcade-green bg-arcade-green bg-opacity-20 animate-pulse-neon":R===r&&!l?"border-arcade-neon-pink bg-arcade-neon-pink bg-opacity-20 animate-shake":"border-arcade-gray opacity-50":r===R?"border-arcade-neon-blue bg-arcade-cyan bg-opacity-20":"border-arcade-gray hover:border-arcade-neon-green";return t?h.jsxs("div",{className:"arcade-card p-6 border-arcade-green",children:[h.jsxs("div",{className:"flex items-center mb-4",children:[h.jsx("div",{className:"text-3xl mr-3",children:"✅"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-arcade text-arcade-green",children:"Denní výzva splněna!"}),h.jsxs("p",{className:"text-sm font-arcade text-arcade-gray",children:["+",n.xpReward," XP získáno"]})]})]}),h.jsx("div",{className:"text-sm font-arcade text-arcade-dark mb-3",children:n.question}),h.jsxs("div",{className:"text-xs font-arcade text-arcade-gray",children:["⏰ Další výzva za: ",f]})]}):h.jsxs("div",{className:"arcade-card p-6",children:[h.jsxs("div",{className:"flex items-center mb-4",children:[h.jsx("div",{className:"text-3xl mr-3",children:n.icon}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-arcade text-arcade-purple",children:"🧠 Denní výzva"}),h.jsxs("p",{className:"text-xs font-arcade text-arcade-gray",children:["Kategorie: ",n.category]})]})]}),h.jsxs("div",{className:"mb-6",children:[h.jsx("p",{className:"text-sm font-arcade text-arcade-dark mb-4",children:n.question}),h.jsx("div",{className:"space-y-3",children:n.options.map((R,D)=>h.jsxs("button",{onClick:()=>T(D),disabled:i,className:`w-full p-3 text-left font-arcade text-sm border-2 rounded transition-all ${A(D)}`,children:[h.jsxs("span",{className:"mr-2 text-arcade-yellow",children:[String.fromCharCode(65+D),")"]}),R]},D))})]}),i&&h.jsx("div",{className:"mb-4 p-3 rounded text-center",children:l?h.jsxs("div",{className:"text-arcade-green font-arcade",children:["🎉 Správně! +",n.xpReward," XP"]}):h.jsxs("div",{className:"text-arcade-neon-pink font-arcade",children:["❌ Špatně! Správná odpověď: ",String.fromCharCode(65+n.correctAnswer),")"]})}),r!==null&&!i&&h.jsx("button",{onClick:w,className:"w-full arcade-button text-lg py-3",children:"🎯 Odeslat odpověď"}),h.jsxs("div",{className:"mt-4 text-center",children:[h.jsxs("p",{className:"text-xs font-arcade text-arcade-gray",children:["Odpověď správně = +",n.xpReward," XP"]}),h.jsxs("p",{className:"text-xs font-arcade text-arcade-gray mt-1",children:["⏰ Další výzva za: ",f]})]})]})},hE=({currentUser:n,badges:e,topics:t,students:r,dailyQuests:s,snakeLeaderboard:i,spaceLeaderboard:a,onUnlockBadge:l,onCompleteTopic:u,onSnakeScoreUpdate:f,onSpaceScoreUpdate:g,onDailyQuestComplete:T,onUpdateName:w})=>{const[A,R]=U.useState(!1),[D,k]=U.useState(!1),[L,j]=U.useState(!1),[V,B]=U.useState(""),[z,P]=U.useState(!1),[y,m]=U.useState(n),_=r.find(Y=>Y.name===n),v=e.filter(Y=>_==null?void 0:_.badges.includes(Y.id)),I=(_==null?void 0:_.xp)||0,x=(_==null?void 0:_.badges.length)||0,E=(_==null?void 0:_.snakeScore)||0,se=(_==null?void 0:_.spaceScore)||0,Ce=(_==null?void 0:_.totalQuestsCompleted)||0,Ot=Y=>{Y.preventDefault();const oe=e.find(he=>he.code===V);oe?(l(oe.id),B(""),alert(`🎉 Odznak "${oe.name}" odemčen!`)):alert("❌ Nesprávný kód!")},Me=new Date().toISOString().split("T")[0],fe=s.find(Y=>Y.date===Me),ee=fe&&(_==null?void 0:_.dailyQuestsCompleted.includes(fe.id))||!1,Ue=Y=>{if(!Y)return null;const oe={light:"#FFDBB4",medium:"#C68642",dark:"#8D5524",tan:"#D2B48C"},he={brown:"#8B4513",blonde:"#F4D03F",black:"#2C3E50",red:"#E74C3C",gray:"#95A5A6",white:"#ECF0F1",purple:"#9B59B6"},Ws={blue:"#3498DB",red:"#E74C3C",green:"#2ECC71",purple:"#9B59B6",pink:"#E91E63",yellow:"#F1C40F",orange:"#E67E22",black:"#2C3E50",white:"#ECF0F1"};return h.jsx("div",{className:"w-16 h-16 bg-arcade-dark rounded-lg p-2",children:h.jsxs("div",{className:"w-full h-full relative",children:[h.jsx("div",{className:"absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full",style:{backgroundColor:oe[Y.skinColor]}}),h.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-t-full",style:{backgroundColor:he[Y.hair]}}),h.jsxs("div",{className:"absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-1",children:[h.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:Y.eyes==="brown"?"#8B4513":Y.eyes==="blue"?"#3498DB":Y.eyes==="green"?"#27AE60":Y.eyes==="hazel"?"#D68910":"#95A5A6"}}),h.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:Y.eyes==="brown"?"#8B4513":Y.eyes==="blue"?"#3498DB":Y.eyes==="green"?"#27AE60":Y.eyes==="hazel"?"#D68910":"#95A5A6"}})]}),Y.mouth&&h.jsx("div",{className:"absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-black rounded-full"}),h.jsx("div",{className:"absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-8 rounded",style:{backgroundColor:Ws[Y.shirtColor]}})]})})};return h.jsx("div",{className:"min-h-screen bg-gradient-to-br from-arcade-purple to-arcade-cyan p-4",children:A?h.jsx(aE,{onClose:()=>R(!1),onScoreUpdate:f,currentScore:E}):D?h.jsx(cE,{onClose:()=>k(!1),onScoreUpdate:g,currentScore:se}):L?h.jsx(lE,{onClose:()=>j(!1),onComplete:(Y,oe)=>{console.log(`Typing game completed: ${Y} points, ${oe}% accuracy`),j(!1)}}):h.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[h.jsxs("div",{className:"arcade-card p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center",children:[Ue(_==null?void 0:_.avatar),h.jsxs("div",{className:"ml-4",children:[h.jsxs("h1",{className:"text-2xl font-arcade text-arcade-purple flex items-center gap-2",children:["Ahoj, ",n,"! 👋",h.jsx("button",{className:"arcade-button text-xs ml-2",onClick:()=>P(!0),title:"Změnit jméno",children:"✏️"})]}),h.jsxs("p",{className:"text-sm font-arcade text-arcade-gray",children:["Úrovní: ",Math.floor(I/100)+1," | Výzev: ",Ce]})]})]}),h.jsxs("div",{className:"text-right",children:[h.jsxs("div",{className:"text-sm font-arcade text-arcade-dark",children:["XP: ",I," | Odznaky: ",v.length,"/",x]}),h.jsx("div",{className:"progress-bar mt-2",children:h.jsx("div",{className:"progress-fill",style:{width:`${I%100/100*100}%`}})})]})]}),h.jsxs("form",{onSubmit:Ot,className:"flex gap-2",children:[h.jsx("input",{type:"text",value:V,onChange:Y=>B(Y.target.value),placeholder:"Zadej kód pro odznak...",className:"flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none"}),h.jsx("button",{type:"submit",className:"arcade-button",children:"🔓 Odemknout"})]})]}),fe&&h.jsx("div",{className:"arcade-card p-6",children:h.jsx(uE,{quest:fe,onComplete:T,isCompleted:ee})}),h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🏅 Tvůj profil – získané odznaky"}),h.jsx(rE,{badges:e,unlockedBadges:(_==null?void 0:_.badges)||[]})]}),h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🧩 Témata k procvičení"}),h.jsx(sE,{topics:t,onCompleteTopic:u,completedTopics:(_==null?void 0:_.topicsCompleted)||[]})]}),h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🕹️ Bonusové úkoly"}),h.jsx(iE,{onPlaySnake:()=>R(!0),onPlaySpace:()=>k(!0),onPlayTyping:()=>j(!0),snakeScore:E,spaceScore:se,snakeLeaderboard:i,spaceLeaderboard:a})]}),h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"🏆 Žebříček"}),h.jsx(oE,{students:r,currentUser:n})]}),z&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",children:h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-lg font-arcade text-arcade-purple mb-2",children:"Změnit jméno"}),h.jsx("input",{type:"text",value:y,onChange:Y=>m(Y.target.value),className:"px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm mb-4 w-full",placeholder:"Nové jméno"}),h.jsxs("div",{className:"flex gap-2 justify-end",children:[h.jsx("button",{className:"arcade-button",onClick:()=>P(!1),children:"Zrušit"}),h.jsx("button",{className:"arcade-button",onClick:()=>{w&&y.trim()&&(w(y.trim()),P(!1))},children:"Uložit"})]})]})})]})})},dE=({students:n,badges:e,onUpdateStudent:t,onExportData:r,onDeleteStudent:s})=>{const[i,a]=U.useState(null),[l,u]=U.useState(""),[f,g]=U.useState(""),T=()=>{if(i&&l){const k=n.find(L=>L.id===i);k&&(t(i,{xp:k.xp+parseInt(l)}),u(""))}},w=()=>{if(i&&f){const k=n.find(L=>L.id===i);k&&(t(i,{stars:Math.min(5,k.stars+parseInt(f))}),g(""))}},A=k=>{if(i){const L=n.find(j=>j.id===i);L&&!L.badges.includes(k)&&t(i,{badges:[...L.badges,k]})}},R=k=>{if(i){const L=n.find(j=>j.id===i);L&&L.badges.includes(k)&&t(i,{badges:L.badges.filter(j=>j!==k)})}},D=n.find(k=>k.id===i);return h.jsx("div",{className:"min-h-screen bg-gradient-to-br from-arcade-purple to-arcade-cyan p-4",children:h.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[h.jsxs("div",{className:"arcade-card p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h1",{className:"text-2xl font-arcade text-arcade-purple",children:"👨‍🏫 Učitelský panel"}),h.jsx("button",{onClick:r,className:"arcade-button",children:"📊 Export dat"})]}),h.jsx("p",{className:"text-sm font-arcade text-arcade-gray",children:"Správa studentů, odznaků a bodů"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"📚 Seznam studentů"}),h.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:n.map(k=>h.jsx("div",{className:`p-3 rounded cursor-pointer transition-all ${i===k.id?"bg-arcade-yellow bg-opacity-20 border-2 border-arcade-neon-green":"bg-arcade-light-gray hover:bg-arcade-gray"}`,onClick:()=>a(k.id),children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-sm font-arcade text-arcade-dark",children:k.name}),h.jsxs("div",{className:"text-xs font-arcade text-arcade-gray",children:["XP: ",k.xp," | Odznaky: ",k.badges.length," | Snake: ",k.snakeScore," | Space: ",k.spaceScore]})]}),h.jsx("div",{className:"flex",children:[...Array(5)].map((L,j)=>h.jsx("span",{className:`text-xs ${j<k.stars?"text-arcade-yellow":"text-arcade-gray"}`,children:"⭐"},j))})]})},k.id))})]}),h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"⚙️ Správa studenta"}),i?h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Přidat XP:"}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"number",value:l,onChange:k=>u(k.target.value),className:"flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",placeholder:"Počet XP"}),h.jsx("button",{onClick:T,className:"arcade-button",children:"➕"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Přidat hvězdy:"}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"number",min:"1",max:"5",value:f,onChange:k=>g(k.target.value),className:"flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",placeholder:"1-5"}),h.jsx("button",{onClick:w,className:"arcade-button",children:"⭐"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"Správa odznaků:"}),h.jsx("div",{className:"grid grid-cols-2 gap-2 max-h-48 overflow-y-auto",children:e.map(k=>{const L=n.find(V=>V.id===i),j=L==null?void 0:L.badges.includes(k.id);return h.jsxs("div",{className:"flex gap-1",children:[h.jsxs("button",{onClick:()=>A(k.id),disabled:j,className:`flex-1 p-2 text-xs font-arcade rounded ${j?"bg-arcade-green text-white cursor-not-allowed":"arcade-button"}`,children:[k.icon," ",k.name]}),j&&h.jsx("button",{onClick:()=>R(k.id),className:"p-2 text-xs font-arcade bg-arcade-neon-pink text-white rounded hover:bg-red-600",title:"Odebrat odznak",children:"❌"})]},k.id)})})]}),D&&h.jsxs("div",{className:"mt-4 p-3 bg-arcade-light-gray rounded",children:[h.jsx("h4",{className:"text-sm font-arcade text-arcade-purple mb-2",children:"📊 Informace o studentovi"}),h.jsxs("div",{className:"text-xs font-arcade text-arcade-dark space-y-1",children:[h.jsxs("div",{children:["Jméno: ",D.name]}),h.jsxs("div",{children:["XP: ",D.xp]}),h.jsxs("div",{children:["Odznaky: ",D.badges.length,"/",e.length]}),h.jsxs("div",{children:["Snake skóre: ",D.snakeScore]}),h.jsxs("div",{children:["Space skóre: ",D.spaceScore]}),h.jsxs("div",{children:["Denní výzvy: ",D.totalQuestsCompleted]}),h.jsxs("div",{children:["Hvězdy: ",D.stars,"/5"]})]})]}),i&&h.jsx("button",{className:"arcade-button bg-arcade-neon-pink text-white mt-4",onClick:()=>{s&&window.confirm("Opravdu chcete studenta nenávratně smazat?")&&(s(i),a(null))},children:"🗑️ Smazat studenta"})]}):h.jsx("p",{className:"text-sm font-arcade text-arcade-gray",children:"Vyber studenta pro správu"})]})]}),h.jsxs("div",{className:"arcade-card p-6",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4",children:"📈 Statistiky třídy"}),h.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-2xl font-arcade text-arcade-yellow",children:n.length}),h.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Studentů"})]}),h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-2xl font-arcade text-arcade-green",children:n.reduce((k,L)=>k+L.xp,0)}),h.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Celkem XP"})]}),h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-2xl font-arcade text-arcade-cyan",children:n.reduce((k,L)=>k+L.badges.length,0)}),h.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Odznaků"})]}),h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-2xl font-arcade text-arcade-neon-pink",children:Math.max(...n.map(k=>k.snakeScore))}),h.jsx("div",{className:"text-xs font-arcade text-arcade-gray",children:"Nejlepší Snake"})]})]})]})]})})},bl=({avatar:n,onAvatarChange:e,onComplete:t,isCompact:r=!1,onOpenEditor:s})=>{const[i,a]=U.useState(n),l=(f,g)=>{const T={...i,[f]:g};a(T),e(T)},u=f=>{const g={light:"#FFDBB4",medium:"#C68642",dark:"#8D5524",tan:"#D2B48C"},T={brown:"#8B4513",blonde:"#F4D03F",black:"#2C3E50",red:"#E74C3C",gray:"#95A5A6",white:"#ECF0F1",purple:"#9B59B6"},w={blue:"#3498DB",red:"#E74C3C",green:"#2ECC71",purple:"#9B59B6",pink:"#E91E63",yellow:"#F1C40F",orange:"#E67E22",black:"#2C3E50",white:"#ECF0F1"},A={gold:"#F39C12",silver:"#BDC3C7",bronze:"#E67E22",rainbow:"linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)"};return h.jsx("div",{className:`${r?"w-16 h-16":"w-32 h-32"} bg-arcade-dark rounded-lg p-2 mx-auto mb-4`,children:h.jsxs("div",{className:"w-full h-full relative",children:[h.jsx("div",{className:"absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full",style:{backgroundColor:g[f.skinColor]}}),h.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 rounded-t-full",style:{backgroundColor:T[f.hair]}}),h.jsxs("div",{className:"absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2",children:[h.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:f.eyes==="brown"?"#8B4513":f.eyes==="blue"?"#3498DB":f.eyes==="green"?"#27AE60":f.eyes==="hazel"?"#D68910":"#95A5A6"}}),h.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:f.eyes==="brown"?"#8B4513":f.eyes==="blue"?"#3498DB":f.eyes==="green"?"#27AE60":f.eyes==="hazel"?"#D68910":"#95A5A6"}})]}),f.mouth&&h.jsx("div",{className:"absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"}),h.jsx("div",{className:"absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-16 rounded",style:{backgroundColor:w[f.shirtColor]}}),f.accessory&&h.jsx("div",{className:"absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2",style:{borderColor:A[f.accessory],background:f.accessory==="rainbow"?A.rainbow:"transparent"}}),f.hat&&h.jsxs("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",children:[f.hat==="cap"&&h.jsx("div",{className:"w-20 h-8 rounded-t-full relative",style:{backgroundColor:"#E74C3C"},children:h.jsx("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white rounded-full"})}),f.hat==="hat"&&h.jsx("div",{className:"w-18 h-6 rounded-t-full",style:{backgroundColor:"#2C3E50"}}),f.hat==="crown"&&h.jsxs("div",{className:"w-16 h-4 flex justify-center",children:[h.jsx("div",{className:"w-2 h-4 bg-yellow-400 mx-0.5"}),h.jsx("div",{className:"w-2 h-4 bg-yellow-400 mx-0.5"}),h.jsx("div",{className:"w-2 h-4 bg-yellow-400 mx-0.5"}),h.jsx("div",{className:"w-2 h-4 bg-yellow-400 mx-0.5"}),h.jsx("div",{className:"w-2 h-4 bg-yellow-400 mx-0.5"})]}),f.hat==="wizard"&&h.jsx("div",{className:"w-12 h-8 rounded-t-full",style:{backgroundColor:"#9B59B6"}})]})]})})};return r?h.jsxs("div",{className:"flex items-center gap-2",children:[u(i),h.jsx("button",{onClick:s,className:"arcade-button text-xs px-2 py-1",title:"Upravit avatar",children:"✏️"})]}):h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"arcade-card p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto",children:[h.jsx("h2",{className:"text-xl font-arcade text-arcade-purple mb-4 text-center",children:"👤 Vytvoř si svůj avatar"}),h.jsx("div",{className:"mb-6",children:u(i)}),h.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"💇 Vlasy:"}),h.jsxs("select",{value:i.hair,onChange:f=>l("hair",f.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"brown",children:"Hnědé"}),h.jsx("option",{value:"blonde",children:"Světlé"}),h.jsx("option",{value:"black",children:"Černé"}),h.jsx("option",{value:"red",children:"Červené"}),h.jsx("option",{value:"gray",children:"Šedé"}),h.jsx("option",{value:"white",children:"Bílé"}),h.jsx("option",{value:"purple",children:"Fialové"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"🎨 Pleť:"}),h.jsxs("select",{value:i.skinColor,onChange:f=>l("skinColor",f.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"light",children:"Světlá"}),h.jsx("option",{value:"medium",children:"Střední"}),h.jsx("option",{value:"dark",children:"Tmavá"}),h.jsx("option",{value:"tan",children:"Opálená"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"👕 Tričko:"}),h.jsxs("select",{value:i.shirtColor,onChange:f=>l("shirtColor",f.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"blue",children:"Modré"}),h.jsx("option",{value:"red",children:"Červené"}),h.jsx("option",{value:"green",children:"Zelené"}),h.jsx("option",{value:"purple",children:"Fialové"}),h.jsx("option",{value:"pink",children:"Růžové"}),h.jsx("option",{value:"yellow",children:"Žluté"}),h.jsx("option",{value:"orange",children:"Oranžové"}),h.jsx("option",{value:"black",children:"Černé"}),h.jsx("option",{value:"white",children:"Bílé"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"👁️ Oči:"}),h.jsxs("select",{value:i.eyes,onChange:f=>l("eyes",f.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"brown",children:"Hnědé"}),h.jsx("option",{value:"blue",children:"Modré"}),h.jsx("option",{value:"green",children:"Zelené"}),h.jsx("option",{value:"hazel",children:"Oříškové"}),h.jsx("option",{value:"gray",children:"Šedé"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"😊 Ústa:"}),h.jsxs("select",{value:i.mouth?"yes":"no",onChange:f=>l("mouth",f.target.value==="yes"),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"yes",children:"Zobrazit"}),h.jsx("option",{value:"no",children:"Skrýt"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"🧢 Čepice:"}),h.jsxs("select",{value:i.hat||"none",onChange:f=>l("hat",f.target.value==="none"?void 0:f.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"none",children:"Žádná"}),h.jsx("option",{value:"cap",children:"Baseball čepice"}),h.jsx("option",{value:"hat",children:"Klobouk"}),h.jsx("option",{value:"crown",children:"Koruna"}),h.jsx("option",{value:"wizard",children:"Čaroděj"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-arcade text-arcade-dark mb-2",children:"💎 Doplňky:"}),h.jsxs("select",{value:i.accessory||"none",onChange:f=>l("accessory",f.target.value==="none"?void 0:f.target.value),className:"w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm",children:[h.jsx("option",{value:"none",children:"Žádné"}),h.jsx("option",{value:"gold",children:"Zlatý náhrdelník"}),h.jsx("option",{value:"silver",children:"Stříbrný náhrdelník"}),h.jsx("option",{value:"bronze",children:"Bronzový náhrdelník"}),h.jsx("option",{value:"rainbow",children:"Duhový náhrdelník"})]})]})]}),h.jsx("div",{className:"flex gap-4",children:h.jsx("button",{onClick:t,className:"flex-1 arcade-button text-lg py-3",children:"✅ Hotovo"})}),h.jsx("div",{className:"mt-4 text-center",children:h.jsx("p",{className:"text-xs font-arcade text-arcade-gray",children:"Vytvoř si svůj pixelový avatar a začni dobrodružství!"})})]})})},Ri=[{id:"file-champion",name:"Souborový šampion",description:"Umíš organizovat soubory a složky",icon:"📁",code:"FILES123",unlocked:!1,xpReward:50,unlockMethod:"code"},{id:"keyboard-master",name:"Mistr klávesnice",description:"Rychle píšeš a znáš klávesové zkratky",icon:"⌨️",code:"KEYBOARD456",unlocked:!1,xpReward:75,unlockMethod:"code"},{id:"hardware-expert",name:"Hardwarový expert",description:"Rozumíš počítačovým komponentám",icon:"💻",code:"HARDWARE789",unlocked:!1,xpReward:100,unlockMethod:"code"},{id:"internet-navigator",name:"Internetový navigátor",description:"Bezpečně surfuješ po internetu",icon:"🌐",code:"INTERNET101",unlocked:!1,xpReward:60,unlockMethod:"code"},{id:"snake-master",name:"🐍 Hadí mistr",description:"Dosáhl jsi 20+ bodů ve hře Snake",icon:"🐍",code:"snakepro20",unlocked:!1,xpReward:150,unlockMethod:"automatic",autoUnlockCondition:{type:"game_score",value:20,description:"Dosáhni 20+ bodů ve hře Snake"}},{id:"space-defender",name:"🚀 Vesmírný obránce",description:"Zničil jsi 10+ asteroidů ve Space Shooter",icon:"🚀",code:"space10",unlocked:!1,xpReward:120,unlockMethod:"automatic",autoUnlockCondition:{type:"game_score",value:10,description:"Znič 10+ asteroidů ve Space Shooter"}},{id:"quiz-champion",name:"🧠 Kvízový šampion",description:"Splnil jsi 10 denních výzev",icon:"🧠",code:"quiz10",unlocked:!1,xpReward:80,unlockMethod:"automatic",autoUnlockCondition:{type:"quest_count",value:10,description:"Splň 10 denních výzev"}},{id:"coding-beginner",name:"Začínající programátor",description:"První kroky v programování",icon:"💻",code:"CODE2024",unlocked:!1,xpReward:200,unlockMethod:"code"},{id:"presentation-pro",name:"Prezentační profesionál",description:"Umíš vytvářet působivé prezentace",icon:"📊",code:"PRESENT2024",unlocked:!1,xpReward:80,unlockMethod:"code"},{id:"data-wizard",name:"Datový kouzelník",description:"Mistr tabulek a grafů",icon:"📈",code:"DATA2024",unlocked:!1,xpReward:90,unlockMethod:"code"},{id:"first-day",name:"První den",description:"Přihlásil ses poprvé do aplikace",icon:"🌟",code:"FIRSTDAY",unlocked:!1,xpReward:25,unlockMethod:"automatic",autoUnlockCondition:{type:"login_streak",value:1,description:"Přihlas se poprvé do aplikace"}},{id:"week-warrior",name:"Týdenní bojovník",description:"Přihlásil ses 7 dní v řadě",icon:"📅",code:"WEEK7",unlocked:!1,xpReward:100,unlockMethod:"automatic",autoUnlockCondition:{type:"login_streak",value:7,description:"Přihlas se 7 dní v řadě"}},{id:"xp-collector",name:"Sběratel XP",description:"Nasbíral jsi 1000 XP",icon:"💎",code:"XP1000",unlocked:!1,xpReward:50,unlockMethod:"automatic",autoUnlockCondition:{type:"xp_threshold",value:1e3,description:"Nasbírej 1000 XP"}},{id:"badge-hunter",name:"Lovce odznaků",description:"Získal jsi 5 odznaků",icon:"🏆",code:"BADGE5",unlocked:!1,xpReward:75,unlockMethod:"automatic",autoUnlockCondition:{type:"badge_count",value:5,description:"Získej 5 odznaků"}},{id:"snake-legend",name:"Hadí legenda",description:"Dosáhl jsi 50+ bodů ve hře Snake",icon:"🐍👑",code:"snake50",unlocked:!1,xpReward:300,unlockMethod:"automatic",autoUnlockCondition:{type:"game_score",value:50,description:"Dosáhni 50+ bodů ve hře Snake"}},{id:"space-hero",name:"Vesmírný hrdina",description:"Zničil jsi 50+ asteroidů ve Space Shooter",icon:"🚀💫",code:"space50",unlocked:!1,xpReward:250,unlockMethod:"automatic",autoUnlockCondition:{type:"game_score",value:50,description:"Znič 50+ asteroidů ve Space Shooter"}},{id:"perfect-score",name:"Perfektní skóre",description:"Získal jsi 100% v denní výzvě",icon:"💯",code:"PERFECT100",unlocked:!1,xpReward:150,unlockMethod:"automatic",autoUnlockCondition:{type:"quest_speed",value:30,description:"Dokonči denní výzvu za méně než 30 sekund"}},{id:"avatar-designer",name:"Designér avatarů",description:"Vytvořil jsi unikátní avatar",icon:"🎨",code:"AVATAR2024",unlocked:!1,xpReward:60,unlockMethod:"code"},{id:"social-butterfly",name:"Společenský motýl",description:"Interagoval jsi s 5+ spolužáky",icon:"🦋",code:"SOCIAL5",unlocked:!1,xpReward:80,unlockMethod:"code"},{id:"early-bird",name:"Ranní ptáče",description:"Přihlásil ses před 8:00 ráno",icon:"🌅",code:"EARLYBIRD",unlocked:!1,xpReward:40,unlockMethod:"automatic",autoUnlockCondition:{type:"login_time",value:8,description:"Přihlas se před 8:00 ráno"}},{id:"night-owl",name:"Noční sova",description:"Přihlásil ses po 22:00",icon:"🦉",code:"NIGHTOWL",unlocked:!1,xpReward:40,unlockMethod:"automatic",autoUnlockCondition:{type:"login_time",value:22,description:"Přihlas se po 22:00"}},{id:"speed-demon",name:"Rychlostní démon",description:"Dokončil jsi denní výzvu za méně než 30 sekund",icon:"⚡",code:"SPEED30",unlocked:!1,xpReward:100,unlockMethod:"automatic",autoUnlockCondition:{type:"quest_speed",value:30,description:"Dokonči denní výzvu za méně než 30 sekund"}},{id:"persistent-learner",name:"Vytrvalý student",description:"Přihlásil ses 30 dní v řadě",icon:"📚",code:"PERSISTENT30",unlocked:!1,xpReward:500,unlockMethod:"automatic",autoUnlockCondition:{type:"login_streak",value:30,description:"Přihlas se 30 dní v řadě"}},{id:"helpful-friend",name:"Pomocný přítel",description:"Pomohl jsi 3 spolužákům s úkoly",icon:"🤝",code:"HELPFUL3",unlocked:!1,xpReward:120,unlockMethod:"automatic",autoUnlockCondition:{type:"help_count",value:3,description:"Pomoz 3 spolužákům s úkoly"}},{id:"creative-mind",name:"Kreativní mysl",description:"Vytvořil jsi vlastní téma nebo projekt",icon:"🎭",code:"CREATIVE2024",unlocked:!1,xpReward:200,unlockMethod:"automatic",autoUnlockCondition:{type:"creative_projects",value:1,description:"Vytvoř vlastní projekt"}}],Ci=[{id:"file-organization",name:"Organizace souborů",description:"Nauč se správně organizovat soubory a složky",icon:"📁",completed:!1,xpReward:30,difficulty:"easy",category:"files",estimatedTime:15,externalLink:"https://edu.gcfglobal.org/cs/windowsbasics/working-with-files/1/",externalDescription:"Prostuduj si základy práce se soubory a složkami",question:"Jaký je rozdíl mezi souborem a složkou?",answer:"Soubor obsahuje data, složka organizuje soubory"},{id:"keyboard-shortcuts",name:"Klávesové zkratky",description:"Zrychli svou práci s klávesovými zkratkami",icon:"⌨️",completed:!1,xpReward:40,difficulty:"easy",category:"keyboard",estimatedTime:20,externalLink:"https://support.microsoft.com/cs-cz/windows/kl%C3%A1vesov%C3%A9-zkratky-ve-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec",externalDescription:"Nauč se nejdůležitější klávesové zkratky Windows",question:"Jaká klávesová zkratka slouží k kopírování?",answer:"Ctrl+C"},{id:"computer-parts",name:"Hardwarové komponenty",description:"Poznej části počítače a jejich funkce",icon:"💻",completed:!1,xpReward:50,difficulty:"medium",category:"hardware",estimatedTime:25,externalLink:"https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:computer-components/a/computer-components-introduction",externalDescription:"Seznam se s hlavními komponentami počítače",question:"Co je to CPU a jakou má funkci?",answer:"CPU je procesor, který zpracovává data a řídí počítač"},{id:"internet-safety",name:"Bezpečnost na internetu",description:"Nauč se bezpečně používat internet",icon:"🔒",completed:!1,xpReward:35,difficulty:"medium",category:"security",estimatedTime:30,externalLink:"https://www.saferinternet.cz/",externalDescription:"Základy bezpečnosti na internetu pro děti",question:"Jak poznáš, že je web bezpečný?",answer:"Podle HTTPS protokolu a zeleného zámku v adresním řádku"},{id:"basic-programming",name:"Základy programování",description:"První kroky v programování",icon:"👨‍💻",completed:!1,xpReward:60,difficulty:"hard",category:"programming",estimatedTime:45,externalLink:"https://scratch.mit.edu/",externalDescription:"Začni programovat s vizuálním jazykem Scratch",question:"Co je to API a k čemu slouží?",answer:"API je rozhraní, které umožňuje programům komunikovat mezi sebou"},{id:"presentations",name:"Tvorba prezentací",description:"Vytvářej působivé prezentace",icon:"📊",completed:!1,xpReward:45,difficulty:"medium",category:"multimedia",estimatedTime:35,externalLink:"https://support.google.com/presentation/answer/4492226?hl=cs",externalDescription:"Nauč se vytvářet prezentace v Google Slides",question:"Kolik bodů by měl mít jeden slide prezentace?",answer:"Maximálně 6-7 bodů pro lepší čitelnost"}];new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString(),new Date().toISOString();const Pi=[{id:"quest1",question:"Co je mozek počítače?",options:["RAM","CPU","SSD","Zdroj"],correctAnswer:1,xpReward:5,icon:"🧠",category:"hardware",date:new Date().toISOString().split("T")[0]},{id:"quest2",question:"Která klávesová zkratka slouží k uložení souboru?",options:["Ctrl+C","Ctrl+V","Ctrl+S","Ctrl+X"],correctAnswer:2,xpReward:5,icon:"💾",category:"keyboard",date:new Date().toISOString().split("T")[0]},{id:"quest3",question:"Co znamená zkratka WWW?",options:["World Wide Web","Web World Wide","Wide World Web","World Web Wide"],correctAnswer:0,xpReward:5,icon:"🌐",category:"internet",date:new Date().toISOString().split("T")[0]},{id:"quest4",question:"Který souborový formát se používá pro obrázky?",options:["TXT","DOC","JPG","EXE"],correctAnswer:2,xpReward:5,icon:"🖼️",category:"files",date:new Date().toISOString().split("T")[0]},{id:"quest5",question:"Co je to antivirus?",options:["Program na psaní","Program na ochranu","Program na hry","Program na kalkulačku"],correctAnswer:1,xpReward:5,icon:"🛡️",category:"security",date:new Date().toISOString().split("T")[0]}],fE={badgeCodes:[{id:"1",code:"FILES123",badgeId:"file-champion",maxUses:30,currentUses:5,createdBy:"teacher",createdAt:new Date().toISOString()},{id:"2",code:"KEYBOARD456",badgeId:"keyboard-master",maxUses:25,currentUses:3,createdBy:"teacher",createdAt:new Date().toISOString()}],questSettings:{dailyQuestEnabled:!0,questXpReward:5,questCategories:["hardware","keyboard","internet","files","security"]},exportSettings:{includePersonalData:!0,includeGameScores:!0,includeQuestHistory:!0}},pE=()=>{const[n,e]=U.useState({currentUser:null,isTeacher:!1,students:[],badges:Ri,topics:Ci,dailyQuests:Pi,snakeLeaderboard:[],spaceLeaderboard:[],gameState:{snake:{snake:[[10,10]],food:[5,5],direction:"RIGHT",score:0,gameOver:!1},space:{player:{x:400,y:500},bullets:[],asteroids:[],score:0,gameOver:!1,lives:3}},teacherSettings:fE}),[t,r]=U.useState(!1),[s,i]=U.useState(!0),[a,l]=U.useState(null);U.useEffect(()=>{const P=Sm(Is,async y=>{y?(e(m=>({...m,currentUser:y.uid,isTeacher:y.email==="teacher@itgamifikace.cz"})),y.email==="teacher@itgamifikace.cz"?await u():(await f(y.uid),await g())):(e(m=>({...m,currentUser:null,isTeacher:!1})),l(null)),i(!1)});return()=>P()},[]),U.useEffect(()=>{(async()=>{try{const y=await ne.getBadges(),m=await ne.getTopics(),_=await ne.getDailyQuests(),v=await ne.getLeaderboard("snake"),I=await ne.getLeaderboard("space");e(x=>({...x,badges:y.length>0?y:Ri,topics:m.length>0?m:Ci,dailyQuests:_.length>0?_:Pi,snakeLeaderboard:v,spaceLeaderboard:I}))}catch(y){console.error("Error loading initial data:",y)}})()},[]);const u=async()=>{try{const P=await ne.getAllStudents(),y=await ne.getBadges(),m=await ne.getTopics(),_=await ne.getDailyQuests(),v=await ne.getLeaderboard("snake"),I=await ne.getLeaderboard("space");e(x=>({...x,students:P.length>0?P:[],badges:y.length>0?y:Ri,topics:m.length>0?m:Ci,dailyQuests:_.length>0?_:Pi,snakeLeaderboard:v,spaceLeaderboard:I}))}catch(P){console.error("Error loading teacher data:",P)}},f=async P=>{try{const y=await ne.getStudentData(P);if(y){l(y),await ne.updateLoginStreak(P);const m=await ne.checkAndUnlockAutomaticBadges(P);if(m.length>0){const _=n.badges.map(v=>m.includes(v.id)?{...v,unlocked:!0}:v);e(v=>({...v,badges:_})),m.forEach(v=>{const I=n.badges.find(x=>x.id===v);I&&alert(`🎉 Nový odznak odemčen: ${I.name}! +${I.xpReward} XP`)})}}}catch(y){console.error("Error loading student data:",y)}},g=async()=>{try{const P=await ne.getTodaysQuest();if(P){const y=n.dailyQuests.filter(m=>m.id!==P.id);e(m=>({...m,dailyQuests:[...y,P]}))}}catch(P){console.error("Error loading today's quest:",P)}},T=async()=>{try{await km(Is),r(!1)}catch(P){console.error("Error signing out:",P)}},w=async P=>{if(!n.currentUser||n.isTeacher||!a)return;const y={...a,avatar:P};l(y),await ne.updateStudentData(n.currentUser,{avatar:P})},A=async P=>{if(!n.currentUser||n.isTeacher||!a)return;const y=n.badges.find(_=>_.id===P);if(!y)return;const m={...a,badges:a.badges.includes(P)?a.badges:[...a.badges,P],xp:a.xp+y.xpReward};l(m),await ne.updateStudentData(n.currentUser,{badges:m.badges,xp:m.xp})},R=async(P,y)=>{if(!n.currentUser||n.isTeacher||!a)return;const m=n.dailyQuests.find(x=>x.id===P);if(!m)return;const _=a.totalQuestsCompleted+1,v={...a,xp:a.xp+(y?m.xpReward:0),dailyQuestsCompleted:a.dailyQuestsCompleted.includes(P)?a.dailyQuestsCompleted:[...a.dailyQuestsCompleted,P],totalQuestsCompleted:_};l(v),await ne.updateStudentData(n.currentUser,{xp:v.xp,dailyQuestsCompleted:v.dailyQuestsCompleted,totalQuestsCompleted:_});const I=await ne.checkAndUnlockAutomaticBadges(n.currentUser);if(I.length>0){const x=n.badges.map(E=>I.includes(E.id)?{...E,unlocked:!0}:E);e(E=>({...E,badges:x})),I.forEach(E=>{const se=n.badges.find(Ce=>Ce.id===E);se&&alert(`🎉 Nový odznak odemčen: ${se.name}! +${se.xpReward} XP`)})}_>=10&&A("quiz-champion")},D=async P=>{if(!n.currentUser||n.isTeacher||!a)return;const y=n.topics.find(I=>I.id===P);if(!y)return;const m={...a,xp:a.xp+y.xpReward,topicsCompleted:a.topicsCompleted.includes(P)?a.topicsCompleted:[...a.topicsCompleted,P]};l(m),await ne.updateStudentData(n.currentUser,{xp:m.xp,topicsCompleted:m.topicsCompleted});const _=n.topics.map(I=>I.id===P?{...I,completed:!0}:I);e(I=>({...I,topics:_})),alert(`🎉 Téma "${y.name}" splněno! +${y.xpReward} XP`);const v=await ne.checkAndUnlockAutomaticBadges(n.currentUser);if(v.length>0){const I=n.badges.map(x=>v.includes(x.id)?{...x,unlocked:!0}:x);e(x=>({...x,badges:I})),v.forEach(x=>{const E=n.badges.find(se=>se.id===x);E&&alert(`🎉 Nový odznak odemčen: ${E.name}! +${E.xpReward} XP`)})}},k=async P=>{if(!n.currentUser||n.isTeacher||!a)return;const y={...a,snakeScore:Math.max(a.snakeScore,P),xp:a.xp+Math.floor(P/5)};l(y),await ne.updateStudentData(n.currentUser,{snakeScore:y.snakeScore,xp:y.xp});const m=await ne.checkAndUnlockAutomaticBadges(n.currentUser);if(m.length>0){const _=n.badges.map(v=>m.includes(v.id)?{...v,unlocked:!0}:v);e(v=>({...v,badges:_})),m.forEach(v=>{const I=n.badges.find(x=>x.id===v);I&&alert(`🎉 Nový odznak odemčen: ${I.name}! +${I.xpReward} XP`)})}},L=async P=>{if(!n.currentUser||n.isTeacher||!a)return;const y={...a,spaceScore:Math.max(a.spaceScore,P),xp:a.xp+Math.floor(P/3)};l(y),await ne.updateStudentData(n.currentUser,{spaceScore:y.spaceScore,xp:y.xp});const m=await ne.checkAndUnlockAutomaticBadges(n.currentUser);if(m.length>0){const _=n.badges.map(v=>m.includes(v.id)?{...v,unlocked:!0}:v);e(v=>({...v,badges:_})),m.forEach(v=>{const I=n.badges.find(x=>x.id===v);I&&alert(`🎉 Nový odznak odemčen: ${I.name}! +${I.xpReward} XP`)})}},j=async(P,y)=>{await ne.updateStudentData(P,y),n.isTeacher&&await u()},V=async P=>{!n.currentUser||n.isTeacher||!a||(await ne.updateStudentData(n.currentUser,{name:P}),l({...a,name:P}),e(y=>({...y,currentUser:P})))},B=()=>{const P={students:n.students,badges:n.badges,topics:n.topics,dailyQuests:n.dailyQuests,snakeLeaderboard:n.snakeLeaderboard,spaceLeaderboard:n.spaceLeaderboard,teacherSettings:n.teacherSettings,exportDate:new Date().toISOString()},y=new Blob([JSON.stringify(P,null,2)],{type:"application/json"}),m=URL.createObjectURL(y),_=document.createElement("a");_.href=m,_.download=`gamifikace-data-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(m)},z=async P=>{await ne.deleteStudent(P),n.isTeacher&&await u()};return s?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan",children:h.jsxs("div",{className:"arcade-card p-8 text-center",children:[h.jsx("div",{className:"text-2xl font-arcade text-arcade-purple mb-4",children:"🎮 Načítání..."}),h.jsx("div",{className:"w-8 h-8 border-4 border-arcade-neon-green border-t-transparent rounded-full animate-spin mx-auto"})]})}):n.currentUser?h.jsxs("div",{children:[h.jsx("div",{className:"bg-arcade-dark p-4",children:h.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[h.jsx("h1",{className:"text-xl font-arcade text-white",children:"🎮 Gamifikace Informatika"}),h.jsxs("div",{className:"flex items-center gap-4",children:[!n.isTeacher&&a&&h.jsx(bl,{avatar:a.avatar,onAvatarChange:w,onComplete:()=>r(!1),isCompact:!0,onOpenEditor:()=>r(!0)}),h.jsxs("span",{className:"text-sm font-arcade text-arcade-light-gray",children:[n.isTeacher?"👨‍🏫 Učitel":"👨‍🎓 Student",": ",n.isTeacher?"teacher@itgamifikace.cz":(a==null?void 0:a.name)||"Student"]}),h.jsx("button",{onClick:T,className:"arcade-button text-xs",children:"🚪 Odhlásit"})]})]})}),t&&a&&h.jsx(bl,{avatar:a.avatar,onAvatarChange:w,onComplete:()=>r(!1)}),n.isTeacher?h.jsx(dE,{students:n.students,badges:n.badges,onUpdateStudent:j,onExportData:B,onDeleteStudent:z}):a?h.jsx(hE,{currentUser:a.name,badges:n.badges,topics:n.topics,students:[a],dailyQuests:n.dailyQuests,snakeLeaderboard:n.snakeLeaderboard,spaceLeaderboard:n.spaceLeaderboard,onUnlockBadge:A,onCompleteTopic:D,onSnakeScoreUpdate:k,onSpaceScoreUpdate:L,onDailyQuestComplete:R,onUpdateName:V}):h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan",children:h.jsx("div",{className:"arcade-card p-8 text-center",children:h.jsx("div",{className:"text-2xl font-arcade text-arcade-purple",children:"⚠️ Chyba při načítání dat"})})})]}):h.jsx(nE,{onLogin:()=>{}})};Ni.createRoot(document.getElementById("root")).render(h.jsx(Od.StrictMode,{children:h.jsx(pE,{})}));
