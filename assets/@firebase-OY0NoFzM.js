import{o as Bd}from"./idb-BXWtuYvb.js";var ul={};/**
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
*/const dl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
*/const A=function(n,e){if(!n)throw Qt(e)},Qt=function(n){return new Error("Firebase Database ("+dl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
*/const fl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jd=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],h=n[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ir={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,h=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=o>>2,m=(o&3)<<4|h>>4;let v=(h&15)<<2|d>>6,I=d&63;u||(I=64,a||(v=64)),i.push(t[p],t[m],t[v],t[I])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||a==null||h==null||u==null)throw new $d;const d=o<<2|a>>4;if(i.push(d),h!==64){const p=a<<4&240|h>>2;if(i.push(p),u!==64){const m=h<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pl=function(n){const e=fl(n);return Ir.encodeByteArray(e,!0)},Gi=function(n){return pl(n).replace(/\./g,"")},Ki=function(n){try{return Ir.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function zd(n){return gl(void 0,n)}function gl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Hd(t)||(n[t]=gl(n[t],e[t]));return n}function Hd(n){return n!=="__proto__"}/**
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
*/function Gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const Kd=()=>Gd().__FIREBASE_DEFAULTS__,Wd=()=>{if(typeof process>"u"||typeof ul>"u")return;const n=ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ki(n[1]);return e&&JSON.parse(e)},Wi=()=>{try{return Kd()||Wd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ml=n=>{var e,t;return(t=(e=Wi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_l=n=>{const e=ml(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},yl=()=>{var n;return(n=Wi())===null||n===void 0?void 0:n.config},Yd=n=>{var e;return(e=Wi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
*/class kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
*/function vl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gi(JSON.stringify(t)),Gi(JSON.stringify(a)),""].join(".")}/**
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
*/function Qi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qi())}function Xd(){var n;const e=(n=Wi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ef(){const n=Qi();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cl(){return dl.NODE_ADMIN===!0}function tf(){return!Xd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nf(){try{return typeof indexedDB=="object"}catch{return!1}}function sf(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
*/const rf="FirebaseError";class $t extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=rf,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?of(o,i):"Error",h=`${this.serviceName}: ${a} (${s}).`;return new $t(s,h,i)}}function of(n,e){return n.replace(af,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const af=/\{\$([^}]+)}/g;/**
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
*/function Fn(n){return JSON.parse(n)}function le(n){return JSON.stringify(n)}/**
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
*/const bl=function(n){let e={},t={},i={},s="";try{const o=n.split(".");e=Fn(Ki(o[0])||""),t=Fn(Ki(o[1])||""),s=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},lf=function(n){const e=bl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},hf=function(n){const e=bl(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
*/function et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Yt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ar(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yi(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Un(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],a=e[s];if(El(o)&&El(a)){if(!Un(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function El(n){return n!==null&&typeof n=="object"}/**
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
*/function Tl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
*/class cf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)i[m]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let m=0;m<16;m++)i[m]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let m=16;m<80;m++){const v=i[m-3]^i[m-8]^i[m-14]^i[m-16];i[m]=(v<<1|v>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],u=this.chain_[4],d,p;for(let m=0;m<80;m++){m<40?m<20?(d=h^o&(a^h),p=1518500249):(d=o^a^h,p=1859775393):m<60?(d=o&a|h&(o|a),p=2400959708):(d=o^a^h,p=3395469782);const v=(s<<5|s>>>27)+d+u+p+i[m]&4294967295;u=h,h=a,a=(o<<30|o>>>2)&4294967295,o=s,s=v}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const o=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(o[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}else for(;s<t;)if(o[a]=e[s],++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function uf(n,e){const t=new df(n,e);return t.subscribe.bind(t)}class df{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ff(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Dr),s.error===void 0&&(s.error=Dr),s.complete===void 0&&(s.complete=Dr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ff(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Dr(){}function Sl(n,e){return`${n} failed: ${e} argument `}/**
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
*/const pf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,A(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(o<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
*/function Ae(n){return n&&n._delegate?n._delegate:n}class At{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Dt="[DEFAULT]";/**
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
*/class gf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new kr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_f(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mf(n){return n===Dt?void 0:n}function _f(n){return n.instantiationMode==="EAGER"}/**
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
*/class yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const vf={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},wf=B.INFO,Cf={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},bf=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Cf[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ji{constructor(e){this.name=e,this._logLevel=wf,this._logHandler=bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}/**
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
*/class Ef{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Tf(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function Tf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xr="@firebase/app",Il="0.10.13";/**
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
*/const tt=new Ji("@firebase/app"),Sf="@firebase/app-compat",If="@firebase/analytics-compat",kf="@firebase/analytics",Nf="@firebase/app-check-compat",Rf="@firebase/app-check",Af="@firebase/auth",Df="@firebase/auth-compat",xf="@firebase/database",Pf="@firebase/data-connect",Of="@firebase/database-compat",Mf="@firebase/functions",Lf="@firebase/functions-compat",Ff="@firebase/installations",Uf="@firebase/installations-compat",Vf="@firebase/messaging",qf="@firebase/messaging-compat",Bf="@firebase/performance",jf="@firebase/performance-compat",$f="@firebase/remote-config",zf="@firebase/remote-config-compat",Hf="@firebase/storage",Gf="@firebase/storage-compat",Kf="@firebase/firestore",Wf="@firebase/vertexai-preview",Qf="@firebase/firestore-compat",Yf="firebase",Xf="10.14.1";/**
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
*/const Pr="[DEFAULT]",Jf={[xr]:"fire-core",[Sf]:"fire-core-compat",[kf]:"fire-analytics",[If]:"fire-analytics-compat",[Rf]:"fire-app-check",[Nf]:"fire-app-check-compat",[Af]:"fire-auth",[Df]:"fire-auth-compat",[xf]:"fire-rtdb",[Pf]:"fire-data-connect",[Of]:"fire-rtdb-compat",[Mf]:"fire-fn",[Lf]:"fire-fn-compat",[Ff]:"fire-iid",[Uf]:"fire-iid-compat",[Vf]:"fire-fcm",[qf]:"fire-fcm-compat",[Bf]:"fire-perf",[jf]:"fire-perf-compat",[$f]:"fire-rc",[zf]:"fire-rc-compat",[Hf]:"fire-gcs",[Gf]:"fire-gcs-compat",[Kf]:"fire-fst",[Qf]:"fire-fst-compat",[Wf]:"fire-vertex","fire-js":"fire-js",[Yf]:"fire-js-all"};/**
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
*/const Vn=new Map,Zf=new Map,Or=new Map;function kl(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xt(n){const e=n.name;if(Or.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,n);for(const t of Vn.values())kl(t,n);for(const t of Zf.values())kl(t,n);return!0}function Mr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ep(n){return n.settings!==void 0}/**
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
*/const tp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new Rr("app","Firebase",tp);/**
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
*/class np{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
*/const Lr=Xf;function Nl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ut.create("bad-app-name",{appName:String(s)});if(t||(t=yl()),!t)throw ut.create("no-options");const o=Vn.get(s);if(o){if(Un(t,o.options)&&Un(i,o.config))return o;throw ut.create("duplicate-app",{appName:s})}const a=new yf(s);for(const u of Or.values())a.addComponent(u);const h=new np(t,i,a);return Vn.set(s,h),h}function Fr(n=Pr){const e=Vn.get(n);if(!e&&n===Pr&&yl())return Nl();if(!e)throw ut.create("no-app",{appName:n});return e}function ip(){return Array.from(Vn.values())}function dt(n,e,t){var i;let s=(i=Jf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&h.push("and"),a&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(h.join(" "));return}Xt(new At(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
*/const sp="firebase-heartbeat-database",rp=1,qn="firebase-heartbeat-store";let Ur=null;function Rl(){return Ur||(Ur=Bd(sp,rp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),Ur}async function op(n){try{const e=(await Rl()).transaction(qn),t=await e.objectStore(qn).get(Dl(n));return await e.done,t}catch(e){if(e instanceof $t)tt.warn(e.message);else{const t=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function Al(n,e){try{const t=(await Rl()).transaction(qn,"readwrite");await t.objectStore(qn).put(e,Dl(n)),await t.done}catch(t){if(t instanceof $t)tt.warn(t.message);else{const i=ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(i.message)}}}function Dl(n){return`${n.name}!${n.options.appId}`}/**
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
*/const ap=1024,lp=30*24*60*60*1e3;class hp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new up(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lp}),this._storage.overwrite(this._heartbeatsCache))}catch(i){tt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xl(),{heartbeatsToSend:i,unsentEntries:s}=cp(this._heartbeatsCache.heartbeats),o=Gi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return tt.warn(t),""}}}function xl(){return new Date().toISOString().substring(0,10)}function cp(n,e=ap){const t=[];let i=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Pl(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Pl(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await op(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pl(n){return Gi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
*/function dp(n){Xt(new At("platform-logger",e=>new Ef(e),"PRIVATE")),Xt(new At("heartbeat",e=>new hp(e),"PRIVATE")),dt(xr,Il,n),dt(xr,Il,"esm2017"),dt("fire-js","")}dp("");var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ml;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function y(){}y.prototype=g.prototype,b.D=g.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(w,C,T){for(var _=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)_[Xe-2]=arguments[Xe];return g.prototype[C].apply(w,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)w[C]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(C=0;16>C;++C)w[C]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=b.g[0],y=b.g[1],C=b.g[2];var T=b.g[3],_=g+(T^y&(C^T))+w[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=T+(C^g&(y^C))+w[1]+3905402710&4294967295,T=g+(_<<12&4294967295|_>>>20),_=C+(y^T&(g^y))+w[2]+606105819&4294967295,C=T+(_<<17&4294967295|_>>>15),_=y+(g^C&(T^g))+w[3]+3250441966&4294967295,y=C+(_<<22&4294967295|_>>>10),_=g+(T^y&(C^T))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=T+(C^g&(y^C))+w[5]+1200080426&4294967295,T=g+(_<<12&4294967295|_>>>20),_=C+(y^T&(g^y))+w[6]+2821735955&4294967295,C=T+(_<<17&4294967295|_>>>15),_=y+(g^C&(T^g))+w[7]+4249261313&4294967295,y=C+(_<<22&4294967295|_>>>10),_=g+(T^y&(C^T))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=T+(C^g&(y^C))+w[9]+2336552879&4294967295,T=g+(_<<12&4294967295|_>>>20),_=C+(y^T&(g^y))+w[10]+4294925233&4294967295,C=T+(_<<17&4294967295|_>>>15),_=y+(g^C&(T^g))+w[11]+2304563134&4294967295,y=C+(_<<22&4294967295|_>>>10),_=g+(T^y&(C^T))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=T+(C^g&(y^C))+w[13]+4254626195&4294967295,T=g+(_<<12&4294967295|_>>>20),_=C+(y^T&(g^y))+w[14]+2792965006&4294967295,C=T+(_<<17&4294967295|_>>>15),_=y+(g^C&(T^g))+w[15]+1236535329&4294967295,y=C+(_<<22&4294967295|_>>>10),_=g+(C^T&(y^C))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^C&(g^y))+w[6]+3225465664&4294967295,T=g+(_<<9&4294967295|_>>>23),_=C+(g^y&(T^g))+w[11]+643717713&4294967295,C=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(C^T))+w[0]+3921069994&4294967295,y=C+(_<<20&4294967295|_>>>12),_=g+(C^T&(y^C))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^C&(g^y))+w[10]+38016083&4294967295,T=g+(_<<9&4294967295|_>>>23),_=C+(g^y&(T^g))+w[15]+3634488961&4294967295,C=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(C^T))+w[4]+3889429448&4294967295,y=C+(_<<20&4294967295|_>>>12),_=g+(C^T&(y^C))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^C&(g^y))+w[14]+3275163606&4294967295,T=g+(_<<9&4294967295|_>>>23),_=C+(g^y&(T^g))+w[3]+4107603335&4294967295,C=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(C^T))+w[8]+1163531501&4294967295,y=C+(_<<20&4294967295|_>>>12),_=g+(C^T&(y^C))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^C&(g^y))+w[2]+4243563512&4294967295,T=g+(_<<9&4294967295|_>>>23),_=C+(g^y&(T^g))+w[7]+1735328473&4294967295,C=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(C^T))+w[12]+2368359562&4294967295,y=C+(_<<20&4294967295|_>>>12),_=g+(y^C^T)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^C)+w[8]+2272392833&4294967295,T=g+(_<<11&4294967295|_>>>21),_=C+(T^g^y)+w[11]+1839030562&4294967295,C=T+(_<<16&4294967295|_>>>16),_=y+(C^T^g)+w[14]+4259657740&4294967295,y=C+(_<<23&4294967295|_>>>9),_=g+(y^C^T)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^C)+w[4]+1272893353&4294967295,T=g+(_<<11&4294967295|_>>>21),_=C+(T^g^y)+w[7]+4139469664&4294967295,C=T+(_<<16&4294967295|_>>>16),_=y+(C^T^g)+w[10]+3200236656&4294967295,y=C+(_<<23&4294967295|_>>>9),_=g+(y^C^T)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^C)+w[0]+3936430074&4294967295,T=g+(_<<11&4294967295|_>>>21),_=C+(T^g^y)+w[3]+3572445317&4294967295,C=T+(_<<16&4294967295|_>>>16),_=y+(C^T^g)+w[6]+76029189&4294967295,y=C+(_<<23&4294967295|_>>>9),_=g+(y^C^T)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^C)+w[12]+3873151461&4294967295,T=g+(_<<11&4294967295|_>>>21),_=C+(T^g^y)+w[15]+530742520&4294967295,C=T+(_<<16&4294967295|_>>>16),_=y+(C^T^g)+w[2]+3299628645&4294967295,y=C+(_<<23&4294967295|_>>>9),_=g+(C^(y|~T))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~C))+w[7]+1126891415&4294967295,T=g+(_<<10&4294967295|_>>>22),_=C+(g^(T|~y))+w[14]+2878612391&4294967295,C=T+(_<<15&4294967295|_>>>17),_=y+(T^(C|~g))+w[5]+4237533241&4294967295,y=C+(_<<21&4294967295|_>>>11),_=g+(C^(y|~T))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~C))+w[3]+2399980690&4294967295,T=g+(_<<10&4294967295|_>>>22),_=C+(g^(T|~y))+w[10]+4293915773&4294967295,C=T+(_<<15&4294967295|_>>>17),_=y+(T^(C|~g))+w[1]+2240044497&4294967295,y=C+(_<<21&4294967295|_>>>11),_=g+(C^(y|~T))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~C))+w[15]+4264355552&4294967295,T=g+(_<<10&4294967295|_>>>22),_=C+(g^(T|~y))+w[6]+2734768916&4294967295,C=T+(_<<15&4294967295|_>>>17),_=y+(T^(C|~g))+w[13]+1309151649&4294967295,y=C+(_<<21&4294967295|_>>>11),_=g+(C^(y|~T))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~C))+w[11]+3174756917&4294967295,T=g+(_<<10&4294967295|_>>>22),_=C+(g^(T|~y))+w[2]+718787259&4294967295,C=T+(_<<15&4294967295|_>>>17),_=y+(T^(C|~g))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(C+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+T&4294967295}i.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var y=g-this.blockSize,w=this.B,C=this.h,T=0;T<g;){if(C==0)for(;T<=y;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(w[C++]=b.charCodeAt(T++),C==this.blockSize){s(this,w),C=0;break}}else for(;T<g;)if(w[C++]=b[T++],C==this.blockSize){s(this,w),C=0;break}}this.h=C,this.o+=g},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var y=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=y&255,y/=256;for(this.u(b),b=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)b[y++]=this.g[g]>>>w&255;return b};function o(b,g){var y=h;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=g(b)}function a(b,g){this.h=g;for(var y=[],w=!0,C=b.length-1;0<=C;C--){var T=b[C]|0;w&&T==g||(y[C]=T,w=!1)}this.g=y}var h={};function u(b){return-128<=b&&128>b?o(b,function(g){return new a([g|0],0>g?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return P(d(-b));for(var g=[],y=1,w=0;b>=y;w++)g[w]=b/y|0,y*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return P(p(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),w=m,C=0;C<b.length;C+=8){var T=Math.min(8,b.length-C),_=parseInt(b.substring(C,C+T),g);8>T?(T=d(Math.pow(g,T)),w=w.j(T).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var m=u(0),v=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var b=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);b+=(0<=w?w:4294967296+w)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(x(this))return"-"+P(this).toString(b);for(var g=d(Math.pow(b,6)),y=this,w="";;){var C=ce(y,g).g;y=Z(y,C.j(g));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=C,k(y))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function x(b){return b.h==-1}n.l=function(b){return b=Z(this,b),x(b)?-1:k(b)?0:1};function P(b){for(var g=b.g.length,y=[],w=0;w<g;w++)y[w]=~b.g[w];return new a(y,~b.h).add(v)}n.abs=function(){return x(this)?P(this):this},n.add=function(b){for(var g=Math.max(this.g.length,b.g.length),y=[],w=0,C=0;C<=g;C++){var T=w+(this.i(C)&65535)+(b.i(C)&65535),_=(T>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);w=_>>>16,T&=65535,_&=65535,y[C]=_<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Z(b,g){return b.add(P(g))}n.j=function(b){if(k(this)||k(b))return m;if(x(this))return x(b)?P(this).j(P(b)):P(P(this).j(b));if(x(b))return P(this.j(P(b)));if(0>this.l(I)&&0>b.l(I))return d(this.m()*b.m());for(var g=this.g.length+b.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<b.g.length;C++){var T=this.i(w)>>>16,_=this.i(w)&65535,Xe=b.i(C)>>>16,wn=b.i(C)&65535;y[2*w+2*C]+=_*wn,ee(y,2*w+2*C),y[2*w+2*C+1]+=T*wn,ee(y,2*w+2*C+1),y[2*w+2*C+1]+=_*Xe,ee(y,2*w+2*C+1),y[2*w+2*C+2]+=T*Xe,ee(y,2*w+2*C+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new a(y,0)};function ee(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function re(b,g){this.g=b,this.h=g}function ce(b,g){if(k(g))throw Error("division by zero");if(k(b))return new re(m,m);if(x(b))return g=ce(P(b),g),new re(P(g.g),P(g.h));if(x(g))return g=ce(b,P(g)),new re(P(g.g),g.h);if(30<b.g.length){if(x(b)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=g;0>=w.l(b);)y=St(y),w=St(w);var C=xe(y,1),T=xe(w,1);for(w=xe(w,2),y=xe(y,2);!k(w);){var _=T.add(w);0>=_.l(b)&&(C=C.add(y),T=_),w=xe(w,1),y=xe(y,1)}return g=Z(b,C.j(g)),new re(C,g)}for(C=m;0<=b.l(g);){for(y=Math.max(1,Math.floor(b.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=d(y),_=T.j(g);x(_)||0<_.l(b);)y-=w,T=d(y),_=T.j(g);k(T)&&(T=v),C=C.add(T),b=Z(b,_)}return new re(C,b)}n.A=function(b){return ce(this,b).h},n.and=function(b){for(var g=Math.max(this.g.length,b.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&b.i(w);return new a(y,this.h&b.h)},n.or=function(b){for(var g=Math.max(this.g.length,b.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|b.i(w);return new a(y,this.h|b.h)},n.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^b.i(w);return new a(y,this.h^b.h)};function St(b){for(var g=b.g.length+1,y=[],w=0;w<g;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new a(y,b.h)}function xe(b,g){var y=g>>5;g%=32;for(var w=b.g.length-y,C=[],T=0;T<w;T++)C[T]=0<g?b.i(T+y)>>>g|b.i(T+y+1)<<32-g:b.i(T+y);return new a(C,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ml=a}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ll,Bn,Fl,es,Vr,Ul,Vl,ql;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,c){return r==Array.prototype||r==Object.prototype||(r[l]=c.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var l=0;l<r.length;++l){var c=r[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,l){if(l)e:{var c=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var E=r[f];if(!(E in c))break e;c=c[E]}r=r[r.length-1],f=c[r],l=l(f),l!=f&&l!=null&&e(c,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var c=0,f=!1,E={next:function(){if(!f&&c<r.length){var S=c++;return{value:l(S,r[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},h=this||self;function u(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function d(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function p(r,l,c){return r.call.apply(r.bind,arguments)}function m(r,l,c){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,f),r.apply(l,E)}}return function(){return r.apply(l,arguments)}}function v(r,l,c){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function I(r,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function k(r,l){function c(){}c.prototype=l.prototype,r.aa=l.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(f,E,S){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return l.prototype[E].apply(f,D)}}function x(r){const l=r.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=r[f];return c}return[]}function P(r,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(u(f)){const E=r.length||0,S=f.length||0;r.length=E+S;for(let D=0;D<S;D++)r[E+D]=f[D]}else r.push(f)}}class Z{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function ee(r){return/^[\s\xa0]*$/.test(r)}function re(){var r=h.navigator;return r&&(r=r.userAgent)?r:""}function ce(r){return ce[" "](r),r}ce[" "]=function(){};var St=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function xe(r,l,c){for(const f in r)l.call(c,r[f],f,r)}function b(r,l){for(const c in r)l.call(void 0,r[c],c,r)}function g(r){const l={};for(const c in r)l[c]=r[c];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(r,l){let c,f;for(let E=1;E<arguments.length;E++){f=arguments[E];for(c in f)r[c]=f[c];for(let S=0;S<y.length;S++)c=y[S],Object.prototype.hasOwnProperty.call(f,c)&&(r[c]=f[c])}}function C(r){var l=1;r=r.split(":");const c=[];for(;0<l&&r.length;)c.push(r.shift()),l--;return r.length&&c.push(r.join(":")),c}function T(r){h.setTimeout(()=>{throw r},0)}function _(){var r=nr;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class Xe{constructor(){this.h=this.g=null}add(l,c){const f=wn.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var wn=new Z(()=>new od,r=>r.reset());class od{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Cn,bn=!1,nr=new Xe,ua=()=>{const r=h.Promise.resolve(void 0);Cn=()=>{r.then(ad)}};var ad=()=>{for(var r;r=_();){try{r.h.call(r.g)}catch(c){T(c)}var l=wn;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}bn=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var ld=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};h.addEventListener("test",c,l),h.removeEventListener("test",c,l)}catch{}return r}();function En(r,l){if(we.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(St){e:{try{ce(l.nodeName);var E=!0;break e}catch{}E=!1}E||(l=null)}}else c=="mouseover"?l=r.fromElement:c=="mouseout"&&(l=r.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:hd[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&En.aa.h.call(this)}}k(En,we);var hd={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),cd=0;function ud(r,l,c,f,E){this.listener=r,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=E,this.key=++cd,this.da=this.fa=!1}function Ni(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Ri(r){this.src=r,this.g={},this.h=0}Ri.prototype.add=function(r,l,c,f,E){var S=r.toString();r=this.g[S],r||(r=this.g[S]=[],this.h++);var D=sr(r,l,f,E);return-1<D?(l=r[D],c||(l.fa=!1)):(l=new ud(l,this.src,S,!!f,E),l.fa=c,r.push(l)),l};function ir(r,l){var c=l.type;if(c in r.g){var f=r.g[c],E=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=E)&&Array.prototype.splice.call(f,E,1),S&&(Ni(l),r.g[c].length==0&&(delete r.g[c],r.h--))}}function sr(r,l,c,f){for(var E=0;E<r.length;++E){var S=r[E];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==f)return E}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),or={};function da(r,l,c,f,E){if(Array.isArray(l)){for(var S=0;S<l.length;S++)da(r,l[S],c,f,E);return null}return c=ga(c),r&&r[ki]?r.K(l,c,d(f)?!!f.capture:!!f,E):dd(r,l,c,!1,f,E)}function dd(r,l,c,f,E,S){if(!l)throw Error("Invalid event type");var D=d(E)?!!E.capture:!!E,X=lr(r);if(X||(r[rr]=X=new Ri(r)),c=X.add(l,c,f,D,S),c.proxy)return c;if(f=fd(),c.proxy=f,f.src=r,f.listener=c,r.addEventListener)ld||(E=D),E===void 0&&(E=!1),r.addEventListener(l.toString(),f,E);else if(r.attachEvent)r.attachEvent(pa(l.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function fd(){function r(c){return l.call(r.src,r.listener,c)}const l=pd;return r}function fa(r,l,c,f,E){if(Array.isArray(l))for(var S=0;S<l.length;S++)fa(r,l[S],c,f,E);else f=d(f)?!!f.capture:!!f,c=ga(c),r&&r[ki]?(r=r.i,l=String(l).toString(),l in r.g&&(S=r.g[l],c=sr(S,c,f,E),-1<c&&(Ni(S[c]),Array.prototype.splice.call(S,c,1),S.length==0&&(delete r.g[l],r.h--)))):r&&(r=lr(r))&&(l=r.g[l.toString()],r=-1,l&&(r=sr(l,c,f,E)),(c=-1<r?l[r]:null)&&ar(c))}function ar(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[ki])ir(l.i,r);else{var c=r.type,f=r.proxy;l.removeEventListener?l.removeEventListener(c,f,r.capture):l.detachEvent?l.detachEvent(pa(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=lr(l))?(ir(c,r),c.h==0&&(c.src=null,l[rr]=null)):Ni(r)}}}function pa(r){return r in or?or[r]:or[r]="on"+r}function pd(r,l){if(r.da)r=!0;else{l=new En(l,this);var c=r.listener,f=r.ha||r.src;r.fa&&ar(r),r=c.call(f,l)}return r}function lr(r){return r=r[rr],r instanceof Ri?r:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(r){return typeof r=="function"?r:(r[hr]||(r[hr]=function(l){return r.handleEvent(l)}),r[hr])}function Ce(){at.call(this),this.i=new Ri(this),this.M=this,this.F=null}k(Ce,at),Ce.prototype[ki]=!0,Ce.prototype.removeEventListener=function(r,l,c,f){fa(this,r,l,c,f)};function Ne(r,l){var c,f=r.F;if(f)for(c=[];f;f=f.F)c.push(f);if(r=r.M,f=l.type||l,typeof l=="string")l=new we(l,r);else if(l instanceof we)l.target=l.target||r;else{var E=l;l=new we(f,r),w(l,E)}if(E=!0,c)for(var S=c.length-1;0<=S;S--){var D=l.g=c[S];E=Ai(D,f,!0,l)&&E}if(D=l.g=r,E=Ai(D,f,!0,l)&&E,E=Ai(D,f,!1,l)&&E,c)for(S=0;S<c.length;S++)D=l.g=c[S],E=Ai(D,f,!1,l)&&E}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var c=r.g[l],f=0;f<c.length;f++)Ni(c[f]);delete r.g[l],r.h--}}this.F=null},Ce.prototype.K=function(r,l,c,f){return this.i.add(String(r),l,!1,c,f)},Ce.prototype.L=function(r,l,c,f){return this.i.add(String(r),l,!0,c,f)};function Ai(r,l,c,f){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var E=!0,S=0;S<l.length;++S){var D=l[S];if(D&&!D.da&&D.capture==c){var X=D.listener,me=D.ha||D.src;D.fa&&ir(r.i,D),E=X.call(me,f)!==!1&&E}}return E&&!f.defaultPrevented}function ma(r,l,c){if(typeof r=="function")c&&(r=v(r,c));else if(r&&typeof r.handleEvent=="function")r=v(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:h.setTimeout(r,l||0)}function _a(r){r.g=ma(()=>{r.g=null,r.i&&(r.i=!1,_a(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class gd extends at{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:_a(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(r){at.call(this),this.h=r,this.g={}}k(Tn,at);var ya=[];function va(r){xe(r.g,function(l,c){this.g.hasOwnProperty(c)&&ar(l)},r),r.g={}}Tn.prototype.N=function(){Tn.aa.N.call(this),va(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=h.JSON.stringify,md=h.JSON.parse,_d=class{stringify(r){return h.JSON.stringify(r,void 0)}parse(r){return h.JSON.parse(r,void 0)}};function ur(){}ur.prototype.h=null;function wa(r){return r.h||(r.h=r.i())}function Ca(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dr(){we.call(this,"d")}k(dr,we);function fr(){we.call(this,"c")}k(fr,we);var It={},ba=null;function Di(){return ba=ba||new Ce}It.La="serverreachability";function Ea(r){we.call(this,It.La,r)}k(Ea,we);function In(r){const l=Di();Ne(l,new Ea(l))}It.STAT_EVENT="statevent";function Ta(r,l){we.call(this,It.STAT_EVENT,r),this.stat=l}k(Ta,we);function Re(r){const l=Di();Ne(l,new Ta(l,r))}It.Ma="timingevent";function Sa(r,l){we.call(this,It.Ma,r),this.size=l}k(Sa,we);function kn(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){r()},l)}function Nn(){this.g=!0}Nn.prototype.xa=function(){this.g=!1};function yd(r,l,c,f,E,S){r.info(function(){if(r.g)if(S)for(var D="",X=S.split("&"),me=0;me<X.length;me++){var H=X[me].split("=");if(1<H.length){var be=H[0];H=H[1];var Pe=be.split("_");D=2<=Pe.length&&Pe[1]=="type"?D+(be+"="+H+"&"):D+(be+"=redacted&")}}else D=null;else D=S;return"XMLHTTP REQ ("+f+") [attempt "+E+"]: "+l+`
`+c+`
`+D})}function vd(r,l,c,f,E,S,D){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+E+"]: "+l+`
`+c+`
`+S+" "+D})}function Ht(r,l,c,f){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+Cd(r,c)+(f?" "+f:"")})}function wd(r,l){r.info(function(){return"TIMEOUT: "+l})}Nn.prototype.info=function(){};function Cd(r,l){if(!r.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var f=c[r];if(!(2>f.length)){var E=f[1];if(Array.isArray(E)&&!(1>E.length)){var S=E[0];if(S!="noop"&&S!="stop"&&S!="close")for(var D=1;D<E.length;D++)E[D]=""}}}}return cr(c)}catch{return l}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ia={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function Pi(){}k(Pi,ur),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},pr=new Pi;function lt(r,l,c,f){this.j=r,this.i=l,this.l=c,this.R=f||1,this.U=new Tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ka}function ka(){this.i=null,this.g="",this.h=!1}var Na={},gr={};function mr(r,l,c){r.L=1,r.v=Fi(Je(l)),r.m=c,r.P=!0,Ra(r,null)}function Ra(r,l){r.F=Date.now(),Oi(r),r.A=Je(r.v);var c=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),$a(c.i,"t",f),r.C=0,c=r.j.J,r.h=new ka,r.g=al(r.j,c?l:null,!r.m),0<r.O&&(r.M=new gd(v(r.Y,r,r.g),r.O)),l=r.U,c=r.g,f=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(ya[0]=E.toString()),E=ya);for(var S=0;S<E.length;S++){var D=da(c,E[S],f||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=r.H?g(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),In(),yd(r.i,r.u,r.A,r.l,r.R,r.m)}lt.prototype.ca=function(r){r=r.target;const l=this.M;l&&Ze(r)==3?l.j():this.Y(r)},lt.prototype.Y=function(r){try{if(r==this.g)e:{const Pe=Ze(this.g);var l=this.g.Ba();const Wt=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Ya(this.g)))){this.J||Pe!=4||l==7||(l==8||0>=Wt?In(3):In(2)),_r(this);var c=this.g.Z();this.X=c;t:if(Aa(this)){var f=Ya(this.g);r="";var E=f.length,S=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),Rn(this);var D="";break t}this.h.i=new h.TextDecoder}for(l=0;l<E;l++)this.h.h=!0,r+=this.h.i.decode(f[l],{stream:!(S&&l==E-1)});f.length=0,this.h.g+=r,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=c==200,vd(this.i,this.u,this.A,this.l,this.R,Pe,c),this.o){if(this.T&&!this.K){t:{if(this.g){var X,me=this.g;if((X=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(X)){var H=X;break t}}H=null}if(c=H)Ht(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,c);else{this.o=!1,this.s=3,Re(12),kt(this),Rn(this);break e}}if(this.P){c=!0;let qe;for(;!this.J&&this.C<D.length;)if(qe=bd(this,D),qe==gr){Pe==4&&(this.s=4,Re(14),c=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Na){this.s=4,Re(15),Ht(this.i,this.l,D,"[Invalid Chunk]"),c=!1;break}else Ht(this.i,this.l,qe,null),yr(this,qe);if(Aa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||D.length!=0||this.h.h||(this.s=1,Re(16),c=!1),this.o=this.o&&c,!c)Ht(this.i,this.l,D,"[Invalid Chunked Response]"),kt(this),Rn(this);else if(0<D.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Tr(be),be.M=!0,Re(11))}}else Ht(this.i,this.l,D,null),yr(this,D);Pe==4&&kt(this),this.o&&!this.J&&(Pe==4?il(this.j,this):(this.o=!1,Oi(this)))}else Vd(this.g),c==400&&0<D.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),kt(this),Rn(this)}}}catch{}finally{}};function Aa(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function bd(r,l){var c=r.C,f=l.indexOf(`
`,c);return f==-1?gr:(c=Number(l.substring(c,f)),isNaN(c)?Na:(f+=1,f+c>l.length?gr:(l=l.slice(f,f+c),r.C=f+c,l)))}lt.prototype.cancel=function(){this.J=!0,kt(this)};function Oi(r){r.S=Date.now()+r.I,Da(r,r.I)}function Da(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=kn(v(r.ba,r),l)}function _r(r){r.B&&(h.clearTimeout(r.B),r.B=null)}lt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(wd(this.i,this.A),this.L!=2&&(In(),Re(17)),kt(this),this.s=2,Rn(this)):Da(this,this.S-r)};function Rn(r){r.j.G==0||r.J||il(r.j,r)}function kt(r){_r(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,va(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function yr(r,l){try{var c=r.j;if(c.G!=0&&(c.g==r||vr(c.h,r))){if(!r.K&&vr(c.h,r)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var E=f;if(E[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)$i(c),Bi(c);else break e;Er(c),Re(18)}}else c.za=E[1],0<c.za-c.T&&37500>E[2]&&c.F&&c.v==0&&!c.C&&(c.C=kn(v(c.Za,c),6e3));if(1>=Oa(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Rt(c,11)}else if((r.K||c.g==r)&&$i(c),!ee(l))for(E=c.Da.g.parse(l),l=0;l<E.length;l++){let H=E[l];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const be=H[3];be!=null&&(c.la=be,c.j.info("VER="+c.la));const Pe=H[4];Pe!=null&&(c.Aa=Pe,c.j.info("SVER="+c.Aa));const Wt=H[5];Wt!=null&&typeof Wt=="number"&&0<Wt&&(f=1.5*Wt,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const qe=r.g;if(qe){const Hi=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var S=f.h;S.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(wr(S,S.h),S.h=null))}if(f.D){const Sr=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(f.ya=Sr,Y(f.I,f.D,Sr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var D=r;if(f.qa=ol(f,f.J?f.ia:null,f.W),D.K){Ma(f.h,D);var X=D,me=f.L;me&&(X.I=me),X.B&&(_r(X),Oi(X)),f.g=D}else tl(f);0<c.i.length&&ji(c)}else H[0]!="stop"&&H[0]!="close"||Rt(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Rt(c,7):br(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}In(4)}catch{}}var Ed=class{constructor(r,l){this.g=r,this.map=l}};function xa(r){this.l=r||10,h.PerformanceNavigationTiming?(r=h.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pa(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Oa(r){return r.h?1:r.g?r.g.size:0}function vr(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function wr(r,l){r.g?r.g.add(l):r.h=l}function Ma(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}xa.prototype.cancel=function(){if(this.i=La(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function La(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const c of r.g.values())l=l.concat(c.D);return l}return x(r.i)}function Td(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var l=[],c=r.length,f=0;f<c;f++)l.push(r[f]);return l}l=[],c=0;for(f in r)l[c++]=r[f];return l}function Sd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var l=[];r=r.length;for(var c=0;c<r;c++)l.push(c);return l}l=[],c=0;for(const f in r)l[c++]=f;return l}}}function Fa(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var c=Sd(r),f=Td(r),E=f.length,S=0;S<E;S++)l.call(void 0,f[S],c&&c[S],r)}var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Id(r,l){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var f=r[c].indexOf("="),E=null;if(0<=f){var S=r[c].substring(0,f);E=r[c].substring(f+1)}else S=r[c];l(S,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Nt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Nt){this.h=r.h,Mi(this,r.j),this.o=r.o,this.g=r.g,Li(this,r.s),this.l=r.l;var l=r.i,c=new xn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Va(this,c),this.m=r.m}else r&&(l=String(r).match(Ua))?(this.h=!1,Mi(this,l[1]||"",!0),this.o=An(l[2]||""),this.g=An(l[3]||"",!0),Li(this,l[4]),this.l=An(l[5]||"",!0),Va(this,l[6]||"",!0),this.m=An(l[7]||"")):(this.h=!1,this.i=new xn(null,this.h))}Nt.prototype.toString=function(){var r=[],l=this.j;l&&r.push(Dn(l,qa,!0),":");var c=this.g;return(c||l=="file")&&(r.push("//"),(l=this.o)&&r.push(Dn(l,qa,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Dn(c,c.charAt(0)=="/"?Rd:Nd,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Dn(c,Dd)),r.join("")};function Je(r){return new Nt(r)}function Mi(r,l,c){r.j=c?An(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function Li(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function Va(r,l,c){l instanceof xn?(r.i=l,xd(r.i,r.h)):(c||(l=Dn(l,Ad)),r.i=new xn(l,r.h))}function Y(r,l,c){r.i.set(l,c)}function Fi(r){return Y(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function An(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Dn(r,l,c){return typeof r=="string"?(r=encodeURI(r).replace(l,kd),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function kd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var qa=/[#\/\?@]/g,Nd=/[#\?:]/g,Rd=/[#\?]/g,Ad=/[#\?@]/g,Dd=/#/g;function xn(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function ht(r){r.g||(r.g=new Map,r.h=0,r.i&&Id(r.i,function(l,c){r.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=xn.prototype,n.add=function(r,l){ht(this),this.i=null,r=Gt(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(l),this.h+=1,this};function Ba(r,l){ht(r),l=Gt(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function ja(r,l){return ht(r),l=Gt(r,l),r.g.has(l)}n.forEach=function(r,l){ht(this),this.g.forEach(function(c,f){c.forEach(function(E){r.call(l,E,f,this)},this)},this)},n.na=function(){ht(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const E=r[f];for(let S=0;S<E.length;S++)c.push(l[f])}return c},n.V=function(r){ht(this);let l=[];if(typeof r=="string")ja(this,r)&&(l=l.concat(this.g.get(Gt(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)l=l.concat(r[c])}return l},n.set=function(r,l){return ht(this),this.i=null,r=Gt(this,r),ja(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},n.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function $a(r,l,c){Ba(r,l),0<c.length&&(r.i=null,r.g.set(Gt(r,l),x(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const S=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var E=S;D[f]!==""&&(E+="="+encodeURIComponent(String(D[f]))),r.push(E)}}return this.i=r.join("&")};function Gt(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function xd(r,l){l&&!r.j&&(ht(r),r.i=null,r.g.forEach(function(c,f){var E=f.toLowerCase();f!=E&&(Ba(this,f),$a(this,E,c))},r)),r.j=l}function Pd(r,l){const c=new Nn;if(h.Image){const f=new Image;f.onload=I(ct,c,"TestLoadImage: loaded",!0,l,f),f.onerror=I(ct,c,"TestLoadImage: error",!1,l,f),f.onabort=I(ct,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=I(ct,c,"TestLoadImage: timeout",!1,l,f),h.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else l(!1)}function Od(r,l){const c=new Nn,f=new AbortController,E=setTimeout(()=>{f.abort(),ct(c,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:f.signal}).then(S=>{clearTimeout(E),S.ok?ct(c,"TestPingServer: ok",!0,l):ct(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),ct(c,"TestPingServer: error",!1,l)})}function ct(r,l,c,f,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),f(c)}catch{}}function Md(){this.g=new _d}function Ld(r,l,c){const f=c||"";try{Fa(r,function(E,S){let D=E;d(E)&&(D=cr(E)),l.push(f+S+"="+encodeURIComponent(D))})}catch(E){throw l.push(f+"type="+encodeURIComponent("_badmap")),E}}function Ui(r){this.l=r.Ub||null,this.j=r.eb||!1}k(Ui,ur),Ui.prototype.g=function(){return new Vi(this.l,this.j)},Ui.prototype.i=function(r){return function(){return r}}({});function Vi(r,l){Ce.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Vi,Ce),n=Vi.prototype,n.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,On(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||h).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;za(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function za(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?Pn(this):On(this),this.readyState==3&&za(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Pn(this))},n.Qa=function(r){this.g&&(this.response=r,Pn(this))},n.ga=function(){this.g&&Pn(this)};function Pn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,On(r)}n.setRequestHeader=function(r,l){this.u.append(r,l)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=l.next();return r.join(`\r
`)};function On(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Ha(r){let l="";return xe(r,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Cr(r,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Ha(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):Y(r,l,c))}function ne(r){Ce.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ne,Ce);var Fd=/^https?$/i,Ud=["POST","PUT"];n=ne.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?wa(this.o):wa(pr),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(S){Ga(this,S);return}if(r=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var E in f)c.set(E,f[E]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())c.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),E=h.FormData&&r instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ud,l,void 0))||f||E||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of c)this.g.setRequestHeader(S,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qa(this),this.u=!0,this.g.send(r),this.u=!1}catch(S){Ga(this,S)}};function Ga(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,Ka(r),qi(r)}function Ka(r){r.A||(r.A=!0,Ne(r,"complete"),Ne(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Ne(this,"complete"),Ne(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wa(this):this.bb())},n.bb=function(){Wa(this)};function Wa(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Ze(r)!=4||r.Z()!=2)){if(r.u&&Ze(r)==4)ma(r.Ea,0,r);else if(Ne(r,"readystatechange"),Ze(r)==4){r.h=!1;try{const D=r.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=D===0){var E=String(r.D).match(Ua)[1]||null;!E&&h.self&&h.self.location&&(E=h.self.location.protocol.slice(0,-1)),f=!Fd.test(E?E.toLowerCase():"")}c=f}if(c)Ne(r,"complete"),Ne(r,"success");else{r.m=6;try{var S=2<Ze(r)?r.g.statusText:""}catch{S=""}r.l=S+" ["+r.Z()+"]",Ka(r)}}finally{qi(r)}}}}function qi(r,l){if(r.g){Qa(r);const c=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||Ne(r,"ready");try{c.onreadystatechange=f}catch{}}}function Qa(r){r.I&&(h.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Ze(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),md(l)}};function Ya(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Vd(r){const l={};r=(r.g&&2<=Ze(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(ee(r[f]))continue;var c=C(r[f]);const E=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[E]||[];l[E]=S,S.push(c)}b(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mn(r,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||l}function Xa(r){this.Aa=0,this.i=[],this.j=new Nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mn("baseRetryDelayMs",5e3,r),this.cb=Mn("retryDelaySeedMs",1e4,r),this.Wa=Mn("forwardChannelMaxRetries",2,r),this.wa=Mn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new xa(r&&r.concurrentRequestLimit),this.Da=new Md,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xa.prototype,n.la=8,n.G=1,n.connect=function(r,l,c,f){Re(0),this.W=r,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=ol(this,null,this.W),ji(this)};function br(r){if(Ja(r),r.G==3){var l=r.U++,c=Je(r.I);if(Y(c,"SID",r.K),Y(c,"RID",l),Y(c,"TYPE","terminate"),Ln(r,c),l=new lt(r,r.j,l),l.L=2,l.v=Fi(Je(c)),c=!1,h.navigator&&h.navigator.sendBeacon)try{c=h.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&h.Image&&(new Image().src=l.v,c=!0),c||(l.g=al(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Oi(l)}rl(r)}function Bi(r){r.g&&(Tr(r),r.g.cancel(),r.g=null)}function Ja(r){Bi(r),r.u&&(h.clearTimeout(r.u),r.u=null),$i(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&h.clearTimeout(r.s),r.s=null)}function ji(r){if(!Pa(r.h)&&!r.s){r.s=!0;var l=r.Ga;Cn||ua(),bn||(Cn(),bn=!0),nr.add(l,r),r.B=0}}function qd(r,l){return Oa(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=kn(v(r.Ga,r,l),sl(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new lt(this,this.j,r);let S=this.o;if(this.S&&(S?(S=g(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(E.H=S,S=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=el(this,E,l),c=Je(this.I),Y(c,"RID",r),Y(c,"CVER",22),this.D&&Y(c,"X-HTTP-Session-Id",this.D),Ln(this,c),S&&(this.O?l="headers="+encodeURIComponent(String(Ha(S)))+"&"+l:this.m&&Cr(c,this.m,S)),wr(this.h,E),this.Ua&&Y(c,"TYPE","init"),this.P?(Y(c,"$req",l),Y(c,"SID","null"),E.T=!0,mr(E,c,null)):mr(E,c,l),this.G=2}}else this.G==3&&(r?Za(this,r):this.i.length==0||Pa(this.h)||Za(this))};function Za(r,l){var c;l?c=l.l:c=r.U++;const f=Je(r.I);Y(f,"SID",r.K),Y(f,"RID",c),Y(f,"AID",r.T),Ln(r,f),r.m&&r.o&&Cr(f,r.m,r.o),c=new lt(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),l&&(r.i=l.D.concat(r.i)),l=el(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),wr(r.h,c),mr(c,f,l)}function Ln(r,l){r.H&&xe(r.H,function(c,f){Y(l,f,c)}),r.l&&Fa({},function(c,f){Y(l,f,c)})}function el(r,l,c){c=Math.min(r.i.length,c);var f=r.l?v(r.l.Na,r.l,r):null;e:{var E=r.i;let S=-1;for(;;){const D=["count="+c];S==-1?0<c?(S=E[0].g,D.push("ofs="+S)):S=0:D.push("ofs="+S);let X=!0;for(let me=0;me<c;me++){let H=E[me].g;const be=E[me].map;if(H-=S,0>H)S=Math.max(0,E[me].g-100),X=!1;else try{Ld(be,D,"req"+H+"_")}catch{f&&f(be)}}if(X){f=D.join("&");break e}}}return r=r.i.splice(0,c),l.D=r,f}function tl(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;Cn||ua(),bn||(Cn(),bn=!0),nr.add(l,r),r.v=0}}function Er(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=kn(v(r.Fa,r),sl(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=kn(v(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),Bi(this),nl(this))};function Tr(r){r.A!=null&&(h.clearTimeout(r.A),r.A=null)}function nl(r){r.g=new lt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Je(r.qa);Y(l,"RID","rpc"),Y(l,"SID",r.K),Y(l,"AID",r.T),Y(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&Y(l,"TO",r.ja),Y(l,"TYPE","xmlhttp"),Ln(r,l),r.m&&r.o&&Cr(l,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=Fi(Je(l)),c.m=null,c.P=!0,Ra(c,r)}n.Za=function(){this.C!=null&&(this.C=null,Bi(this),Er(this),Re(19))};function $i(r){r.C!=null&&(h.clearTimeout(r.C),r.C=null)}function il(r,l){var c=null;if(r.g==l){$i(r),Tr(r),r.g=null;var f=2}else if(vr(r.h,l))c=l.D,Ma(r.h,l),f=1;else return;if(r.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var E=r.B;f=Di(),Ne(f,new Sa(f,c)),ji(r)}else tl(r);else if(E=l.s,E==3||E==0&&0<l.X||!(f==1&&qd(r,l)||f==2&&Er(r)))switch(c&&0<c.length&&(l=r.h,l.i=l.i.concat(c)),E){case 1:Rt(r,5);break;case 4:Rt(r,10);break;case 3:Rt(r,6);break;default:Rt(r,2)}}}function sl(r,l){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*l}function Rt(r,l){if(r.j.info("Error code "+l),l==2){var c=v(r.fb,r),f=r.Xa;const E=!f;f=new Nt(f||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Mi(f,"https"),Fi(f),E?Pd(f.toString(),c):Od(f.toString(),c)}else Re(2);r.G=0,r.l&&r.l.sa(l),rl(r),Ja(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function rl(r){if(r.G=0,r.ka=[],r.l){const l=La(r.h);(l.length!=0||r.i.length!=0)&&(P(r.ka,l),P(r.ka,r.i),r.h.i.length=0,x(r.i),r.i.length=0),r.l.ra()}}function ol(r,l,c){var f=c instanceof Nt?Je(c):new Nt(c);if(f.g!="")l&&(f.g=l+"."+f.g),Li(f,f.s);else{var E=h.location;f=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;var S=new Nt(null);f&&Mi(S,f),l&&(S.g=l),E&&Li(S,E),c&&(S.l=c),f=S}return c=r.D,l=r.ya,c&&l&&Y(f,c,l),Y(f,"VER",r.la),Ln(r,f),f}function al(r,l,c){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new ne(new Ui({eb:c})):new ne(r.pa),l.Ha(r.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ll(){}n=ll.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zi(){}zi.prototype.g=function(r,l){return new Le(r,l)};function Le(r,l){Ce.call(this),this.g=new Xa(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!ee(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!ee(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new Kt(this)}k(Le,Ce),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){br(this.g)},Le.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=cr(r),r=c);l.i.push(new Ed(l.Ya++,r)),l.G==3&&ji(l)},Le.prototype.N=function(){this.g.l=null,delete this.j,br(this.g),delete this.g,Le.aa.N.call(this)};function hl(r){dr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const c in l){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}k(hl,dr);function cl(){fr.call(this),this.status=1}k(cl,fr);function Kt(r){this.g=r}k(Kt,ll),Kt.prototype.ua=function(){Ne(this.g,"a")},Kt.prototype.ta=function(r){Ne(this.g,new hl(r))},Kt.prototype.sa=function(r){Ne(this.g,new cl)},Kt.prototype.ra=function(){Ne(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,ql=function(){return new zi},Vl=function(){return Di()},Ul=It,Vr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,es=xi,Ia.COMPLETE="complete",Fl=Ia,Ca.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Bn=Ca,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,Ll=ne}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const Bl="@firebase/firestore";/**
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
*/class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
*/let Jt="10.14.0";/**
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
*/const xt=new Ji("@firebase/firestore");function jn(){return xt.logLevel}function O(n,...e){if(xt.logLevel<=B.DEBUG){const t=e.map(qr);xt.debug(`Firestore (${Jt}): ${n}`,...t)}}function Pt(n,...e){if(xt.logLevel<=B.ERROR){const t=e.map(qr);xt.error(`Firestore (${Jt}): ${n}`,...t)}}function ts(n,...e){if(xt.logLevel<=B.WARN){const t=e.map(qr);xt.warn(`Firestore (${Jt}): ${n}`,...t)}}function qr(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
*/function j(n="Unexpected state"){const e=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+n;throw Pt(e),new Error(e)}function oe(n,e){n||j()}function W(n,e){return n}/**
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
*/const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends $t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class Ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
*/class jl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class pp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gp{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0);let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let o=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ot,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},h=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>h(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?h(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(oe(typeof i.accessToken=="string"),new jl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ee(e)}}class mp{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _p{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new mp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){oe(this.o===void 0);const i=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new yp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function wp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
*/class $l{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=wp(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%e.length))}return i}}function G(n,e){return n<e?-1:n>e?1:0}function Zt(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
*/class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new fe(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
*/class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new fe(0,0))}static max(){return new te(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/class wi{constructor(e,t,i){t===void 0?t=0:t>e.length&&j(),i===void 0?i=e.length-t:i>e.length-t&&j(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends wi{construct(e,t,i){return new se(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new M(R.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const Cp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends wi{construct(e,t,i){return new ve(e,t,i)}static isValidIdentifier(e){return Cp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new M(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new M(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else h==="`"?(a=!a,s++):h!=="."||a?(i+=h,s++):(o(),s++)}if(o(),a)throw new M(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
*/class F{constructor(e){this.path=e}static fromPath(e){return new F(se.fromString(e))}static fromName(e){return new F(se.fromString(e).popFirst(5))}static empty(){return new F(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new se(e.slice()))}}function bp(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=te.fromTimestamp(i===1e9?new fe(t+1,0):new fe(t,i));return new Tt(s,F.empty(),e)}function Ep(n){return new Tt(n.readTime,n.key,-1)}class Tt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Tt(te.min(),F.empty(),-1)}static max(){return new Tt(te.max(),F.empty(),-1)}}function Tp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
*/const Sp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
*/async function zl(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Sp)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,i)=>{t(e)})}static reject(e){return new N((t,i)=>{i(e)})}static waitFor(e){return new N((t,i)=>{let s=0,o=0,a=!1;e.forEach(h=>{++s,h.next(()=>{++o,a&&o===s&&t()},u=>i(u))}),a=!0,o===s&&t()})}static or(e){let t=N.resolve(!1);for(const i of e)t=t.next(s=>s?N.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,o)=>{i.push(t.call(this,s,o))}),this.waitFor(i)}static mapArray(e,t){return new N((i,s)=>{const o=e.length,a=new Array(o);let h=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++h,h===o&&i(a)},p=>s(p))}})}static doWhile(e,t){return new N((i,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):i()};o()})}}function kp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ns(n){return n.name==="IndexedDbTransactionError"}/**
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
*/class Hl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hl.oe=-1;function Br(n){return n==null}function is(n){return n===0&&1/n==-1/0}function Np(n){return typeof n=="number"&&Number.isInteger(n)&&!is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
*/function Gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function en(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
*/let Be=class Zo{constructor(e,t){this.comparator=e,this.root=t||ft.EMPTY}insert(e,t){return new Zo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Zo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ss(this.root,e,this.comparator,!0)}},ss=class{constructor(n,e,t,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!n.isEmpty();)if(s=e?t(n.key,e):1,e&&i&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(s===0){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}getNext(){let n=this.nodeStack.pop();const e={key:n.key,value:n.value};if(this.isReverse)for(n=n.left;!n.isEmpty();)this.nodeStack.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack.push(n),n=n.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const n=this.nodeStack[this.nodeStack.length-1];return{key:n.key,value:n.value}}},ft=class it{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,o){return new it(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}};ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1,ft.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(n,e,t,i,s){return this}insert(n,e,t){return new ft(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class ke{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class Ue{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ke(ve.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
*/class Rp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Rp("Invalid base64 string: "+s):s}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Ap=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(oe(!!n),typeof n=="string"){let e=0;const t=Ap.exec(n);if(oe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $n(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
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
*/function jr(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ql(n){const e=n.mapValue.fields.__previous_value__;return jr(e)?Ql(e):e}function rs(n){const e=Mt(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
*/class Dp{constructor(e,t,i,s,o,a,h,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=h,this.longPollingOptions=u,this.useFetchStreams=d}}class Ws{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ws&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?jr(n)?4:Pp(n)?9007199254740991:xp(n)?10:11:j()}function Ke(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rs(n).isEqual(rs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mt(i.timestampValue),a=Mt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return $n(i.bytesValue).isEqual($n(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_e(i.doubleValue),a=_e(s.doubleValue);return o===a?is(o)===is(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Gl(o)!==Gl(a))return!1;for(const h in o)if(o.hasOwnProperty(h)&&(a[h]===void 0||!Ke(o[h],a[h])))return!1;return!0}(n,e);default:return j()}}function zn(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function nn(n,e){if(n===e)return 0;const t=tn(n),i=tn(e);if(t!==i)return G(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=_e(s.integerValue||s.doubleValue),h=_e(o.integerValue||o.doubleValue);return a<h?-1:a>h?1:a===h?0:isNaN(a)?isNaN(h)?0:-1:1}(n,e);case 3:return Yl(n.timestampValue,e.timestampValue);case 4:return Yl(rs(n),rs(e));case 5:return G(n.stringValue,e.stringValue);case 6:return function(s,o){const a=$n(s),h=$n(o);return a.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),h=o.split("/");for(let u=0;u<a.length&&u<h.length;u++){const d=G(a[u],h[u]);if(d!==0)return d}return G(a.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=G(_e(s.latitude),_e(o.latitude));return a!==0?a:G(_e(s.longitude),_e(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xl(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,h,u,d;const p=s.fields||{},m=o.fields||{},v=(a=p.value)===null||a===void 0?void 0:a.arrayValue,I=(h=m.value)===null||h===void 0?void 0:h.arrayValue,k=G(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Xl(v,I)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===os.mapValue&&o===os.mapValue)return 0;if(s===os.mapValue)return 1;if(o===os.mapValue)return-1;const a=s.fields||{},h=Object.keys(a),u=o.fields||{},d=Object.keys(u);h.sort(),d.sort();for(let p=0;p<h.length&&p<d.length;++p){const m=G(h[p],d[p]);if(m!==0)return m;const v=nn(a[h[p]],u[d[p]]);if(v!==0)return v}return G(h.length,d.length)}(n.mapValue,e.mapValue);default:throw j()}}function Yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Mt(n),i=Mt(e),s=G(t.seconds,i.seconds);return s!==0?s:G(t.nanos,i.nanos)}function Xl(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const o=nn(t[s],i[s]);if(o)return o}return G(t.length,i.length)}function sn(n){return $r(n)}function $r(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const t=Mt(e);return`time(${t.seconds},${t.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return $n(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let t="[",i=!0;for(const s of e.values||[])i?i=!1:t+=",",t+=$r(s);return t+"]"}(n.arrayValue):"mapValue"in n?function(e){const t=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of t)s?s=!1:i+=",",i+=`${o}:${$r(e.fields[o])}`;return i+"}"}(n.mapValue):j()}function zr(n){return!!n&&"integerValue"in n}function Hr(n){return!!n&&"arrayValue"in n}function as(n){return!!n&&"mapValue"in n}function xp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return en(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Hn(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Pp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
*/class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!as(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(t)}setAll(e){let t=ve.emptyPath(),i={},s=[];e.forEach((a,h)=>{if(!t.isImmediateParentOf(h)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=h.popLast()}a?i[h.lastSegment()]=Hn(a):s.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,s)}delete(e){const t=this.field(e.popLast());as(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];as(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){en(t,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new Ve(Hn(this.value))}}function Jl(n){const e=[];return en(n.fields,(t,i)=>{const s=new ve([t]);if(as(i)){const o=Jl(i.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
*/class Ge{constructor(e,t,i,s,o,a,h){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=o,this.data=a,this.documentState=h}static newInvalidDocument(e){return new Ge(e,0,te.min(),te.min(),te.min(),Ve.empty(),0)}static newFoundDocument(e,t,i,s){return new Ge(e,1,t,te.min(),i,s,0)}static newNoDocument(e,t){return new Ge(e,2,t,te.min(),te.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,te.min(),te.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class ls{constructor(e,t){this.position=e,this.inclusive=t}}function Zl(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?i=F.comparator(F.fromName(a.referenceValue),t.key):i=nn(a,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function eh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
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
*/class hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Op(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
*/class th{}class de extends th{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Lp(e,t,i):t==="array-contains"?new Vp(e,i):t==="in"?new qp(e,i):t==="not-in"?new Bp(e,i):t==="array-contains-any"?new jp(e,i):new de(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Fp(e,i):new Up(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(nn(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(nn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends th{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new bt(e,t)}matches(e){return nh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nh(n){return n.op==="and"}function ih(n){return Mp(n)&&nh(n)}function Mp(n){for(const e of n.filters)if(e instanceof bt)return!1;return!0}function Gr(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+sn(n.value);if(ih(n))return n.filters.map(e=>Gr(e)).join(",");{const e=n.filters.map(t=>Gr(t)).join(",");return`${n.op}(${e})`}}function sh(n,e){return n instanceof de?function(t,i){return i instanceof de&&t.op===i.op&&t.field.isEqual(i.field)&&Ke(t.value,i.value)}(n,e):n instanceof bt?function(t,i){return i instanceof bt&&t.op===i.op&&t.filters.length===i.filters.length?t.filters.reduce((s,o,a)=>s&&sh(o,i.filters[a]),!0):!1}(n,e):void j()}function rh(n){return n instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${sn(e.value)}`}(n):n instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(rh).join(" ,")+"}"}(n):"Filter"}class Lp extends de{constructor(e,t,i){super(e,t,i),this.key=F.fromName(i.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Fp extends de{constructor(e,t){super(e,"in",t),this.keys=oh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Up extends de{constructor(e,t){super(e,"not-in",t),this.keys=oh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>F.fromName(i.referenceValue))}class Vp extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hr(t)&&zn(t.arrayValue,this.value)}}class qp extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zn(this.value.arrayValue,t)}}class Bp extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zn(this.value.arrayValue,t)}}class jp extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>zn(this.value.arrayValue,i))}}/**
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
*/class $p{constructor(e,t=null,i=[],s=[],o=null,a=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=a,this.endAt=h,this.ue=null}}function ah(n,e=null,t=[],i=[],s=null,o=null,a=null){return new $p(n,e,t,i,s,o,a)}function Kr(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Gr(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Br(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>sn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>sn(i)).join(",")),e.ue=t}return e.ue}function Wr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Op(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!eh(n.startAt,e.startAt)&&eh(n.endAt,e.endAt)}/**
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
*/class cs{constructor(e,t=null,i=[],s=[],o=null,a="F",h=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=h,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zp(n,e,t,i,s,o,a,h){return new cs(n,e,t,i,s,o,a,h)}function Hp(n){return new cs(n)}function lh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gp(n){return n.collectionGroup!==null}function Gn(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let o=new ke(ve.comparator);return s.filters.forEach(a=>{a.getFlattenedFilters().forEach(h=>{h.isInequality()&&(o=o.add(h.field))})}),o})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new hs(s,i))}),t.has(ve.keyField().canonicalString())||e.ce.push(new hs(ve.keyField(),i))}return e.ce}function Lt(n){const e=W(n);return e.le||(e.le=Kp(e,Gn(n))),e.le}function Kp(n,e){if(n.limitType==="F")return ah(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new hs(s.field,o)});const t=n.endAt?new ls(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ls(n.startAt.position,n.startAt.inclusive):null;return ah(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Qr(n,e,t){return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hh(n,e){return Wr(Lt(n),Lt(e))&&n.limitType===e.limitType}function ch(n){return`${Kr(Lt(n))}|lt:${n.limitType}`}function Kn(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(i=>rh(i)).join(", ")}]`),Br(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>sn(i)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>sn(i)).join(",")),`Target(${t})`}(Lt(n))}; limitType=${n.limitType})`}function Yr(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):F.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of Gn(t))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(s,o,a){const h=Zl(s,o,a);return s.inclusive?h<=0:h<0}(t.startAt,Gn(t),i)||t.endAt&&!function(s,o,a){const h=Zl(s,o,a);return s.inclusive?h>=0:h>0}(t.endAt,Gn(t),i))}(n,e)}function Wp(n){return(e,t)=>{let i=!1;for(const s of Gn(n)){const o=Qp(s,e,t);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Qp(n,e,t){const i=n.field.isKeyField()?F.comparator(e.key,t.key):function(s,o,a){const h=o.data.field(s),u=a.data.field(s);return h!==null&&u!==null?nn(h,u):j()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return j()}}/**
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
*/class rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){en(this.inner,(t,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
*/const Yp=new Be(F.comparator);function us(){return Yp}const uh=new Be(F.comparator);function ds(...n){let e=uh;for(const t of n)e=e.insert(t.key,t);return e}function dh(n){let e=uh;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ft(){return Wn()}function fh(){return Wn()}function Wn(){return new rn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Xp=new Be(F.comparator),Jp=new ke(F.comparator);function Te(...n){let e=Jp;for(const t of n)e=e.add(t);return e}const Zp=new ke(G);function eg(){return Zp}/**
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
*/function Xr(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function ph(n){return{integerValue:""+n}}function tg(n,e){return Np(e)?ph(e):Xr(n,e)}/**
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
*/class fs{constructor(){this._=void 0}}function ng(n,e,t){return n instanceof ps?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jr(s)&&(s=Ql(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof on?mh(n,e):n instanceof Qn?_h(n,e):function(i,s){const o=gh(i,s),a=yh(o)+yh(i.Pe);return zr(o)&&zr(i.Pe)?ph(a):Xr(i.serializer,a)}(n,e)}function ig(n,e,t){return n instanceof on?mh(n,e):n instanceof Qn?_h(n,e):t}function gh(n,e){return n instanceof gs?function(t){return zr(t)||function(i){return!!i&&"doubleValue"in i}(t)}(e)?e:{integerValue:0}:null}class ps extends fs{}class on extends fs{constructor(e){super(),this.elements=e}}function mh(n,e){const t=vh(e);for(const i of n.elements)t.some(s=>Ke(s,i))||t.push(i);return{arrayValue:{values:t}}}class Qn extends fs{constructor(e){super(),this.elements=e}}function _h(n,e){let t=vh(e);for(const i of n.elements)t=t.filter(s=>!Ke(s,i));return{arrayValue:{values:t}}}class gs extends fs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function yh(n){return _e(n.integerValue||n.doubleValue)}function vh(n){return Hr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
*/class sg{constructor(e,t){this.field=e,this.transform=t}}function rg(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof on&&i instanceof on||t instanceof Qn&&i instanceof Qn?Zt(t.elements,i.elements,Ke):t instanceof gs&&i instanceof gs?Ke(t.Pe,i.Pe):t instanceof ps&&i instanceof ps}(n.transform,e.transform)}class og{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _s{}function wh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sh(n.key,Ye.none()):new Xn(n.key,n.data,Ye.none());{const t=n.data,i=Ve.empty();let s=new ke(ve.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?i.delete(o):i.set(o,a),s=s.add(o)}return new pt(n.key,i,new Ue(s.toArray()),Ye.none())}}function ag(n,e,t){n instanceof Xn?function(i,s,o){const a=i.value.clone(),h=Eh(i.fieldTransforms,s,o.transformResults);a.setAll(h),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof pt?function(i,s,o){if(!ms(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Eh(i.fieldTransforms,s,o.transformResults),h=s.data;h.setAll(bh(i)),h.setAll(a),s.convertToFoundDocument(o.version,h).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Yn(n,e,t,i){return n instanceof Xn?function(s,o,a,h){if(!ms(s.precondition,o))return a;const u=s.value.clone(),d=Th(s.fieldTransforms,h,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,i):n instanceof pt?function(s,o,a,h){if(!ms(s.precondition,o))return a;const u=Th(s.fieldTransforms,h,o),d=o.data;return d.setAll(bh(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,i):function(s,o,a){return ms(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function lg(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),o=gh(i.transform,s||null);o!=null&&(t===null&&(t=Ve.empty()),t.set(i.field,o))}return t||null}function Ch(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&Zt(t,i,(s,o)=>rg(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xn extends _s{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pt extends _s{constructor(e,t,i,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function bh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Eh(n,e,t){const i=new Map;oe(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,h=e.data.field(o.field);i.set(o.field,ig(a,h,t[s]))}return i}function Th(n,e,t){const i=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);i.set(s.field,ng(o,a,e))}return i}class Sh extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hg extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class cg{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&ag(o,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Yn(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Yn(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=fh();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let h=this.applyToLocalView(a,o.mutatedFields);h=t.has(s.key)?null:h;const u=wh(a,h);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Te())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,i)=>Ch(t,i))&&Zt(this.baseMutations,e.baseMutations,(t,i)=>Ch(t,i))}}class ea{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){oe(e.mutations.length===i.length);let s=function(){return Xp}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,i[a].version);return new ea(e,t,i,s)}}/**
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
*/class ug{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/var ae,$;function dg(n){switch(n){default:return j();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function fg(n){if(n===void 0)return Pt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ae.OK:return R.OK;case ae.CANCELLED:return R.CANCELLED;case ae.UNKNOWN:return R.UNKNOWN;case ae.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ae.INTERNAL:return R.INTERNAL;case ae.UNAVAILABLE:return R.UNAVAILABLE;case ae.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ae.NOT_FOUND:return R.NOT_FOUND;case ae.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ae.ABORTED:return R.ABORTED;case ae.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ae.DATA_LOSS:return R.DATA_LOSS;default:return j()}}($=ae||(ae={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Ml([4294967295,4294967295],0);class pg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mg(n,e){return Jr(n,e.toTimestamp())}function an(n){return oe(!!n),te.fromTimestamp(function(e){const t=Mt(e);return new fe(t.seconds,t.nanos)}(n))}function Ih(n,e){return Zr(n,e).canonicalString()}function Zr(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _g(n){const e=se.fromString(n);return oe(Sg(e)),e}function eo(n,e){return Ih(n.databaseId,e.path)}function yg(n){const e=_g(n);return e.length===4?se.emptyPath():wg(e)}function vg(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wg(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kh(n,e,t){return{name:eo(n,e),fields:t.value.mapValue.fields}}function Cg(n,e){let t;if(e instanceof Xn)t={update:kh(n,e.key,e.value)};else if(e instanceof Sh)t={delete:eo(n,e.key)};else if(e instanceof pt)t={update:kh(n,e.key,e.data),updateMask:Tg(e.fieldMask)};else{if(!(e instanceof hg))return j();t={verify:eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof ps)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof on)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gs)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw j()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:mg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(n,e.precondition)),t}function bg(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(te.min())&&(o=an(s)),new og(o,i.transformResults||[])}(t,e))):[]}function Eg(n){let e=yg(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){oe(i===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(p){const m=Nh(p);return m instanceof bt&&ih(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(v){return new hs(ln(v.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(t.orderBy));let h=null;t.limit&&(h=function(p){let m;return m=typeof p=="object"?p.value:p,Br(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new ls(v,m)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const m=!p.before,v=p.values||[];return new ls(v,m)}(t.endAt)),zp(e,s,a,o,h,"F",u,d)}function Nh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ln(e.unaryFilter.field);return de.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=ln(e.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ln(e.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ln(e.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(e){return de.create(ln(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(t=>Nh(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(n):j()}function ln(n){return ve.fromServerFormat(n.fieldPath)}function Tg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
*/class Ig{constructor(e){this.ct=e}}function kg(n){const e=Eg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qr(e,e.limit,"L"):e}/**
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
*/class Ng{constructor(){this.un=new Rg}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Tt.min())}updateCollectionGroup(e,t,i){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Rg{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new ke(se.comparator),o=!s.has(i);return this.index[t]=s.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ke(se.comparator)).toArray()}}/**
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
*/class vn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vn(0)}static kn(){return new vn(-1)}}/**
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
*/class Ag{constructor(){this.changes=new rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?N.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class Dg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
*/class xg{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Yn(i.mutation,s,Ue.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Te()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Te()){const s=Ft();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(o=>{let a=ds();return o.forEach((h,u)=>{a=a.insert(h,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const i=Ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Te()))}populateOverlays(e,t,i){const s=[];return i.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,h)=>{t.set(a,h)})})}computeViews(e,t,i,s){let o=us();const a=Wn(),h=function(){return Wn()}();return t.forEach((u,d)=>{const p=i.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof pt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Yn(p.mutation,d,p.mutation.getFieldMask(),fe.now())):a.set(d.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var m;return h.set(d,new Dg(p,(m=a.get(d))!==null&&m!==void 0?m:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Wn();let s=new Be((a,h)=>a-h),o=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const h of a)h.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=i.get(u)||Ue.empty();p=h.applyToLocalView(d,p),i.set(u,p);const m=(s.get(h.batchId)||Te()).add(u);s=s.insert(h.batchId,m)})}).next(()=>{const a=[],h=s.getReverseIterator();for(;h.hasNext();){const u=h.getNext(),d=u.key,p=u.value,m=fh();p.forEach(v=>{if(!o.has(v)){const I=wh(t.get(v),i.get(v));I!==null&&m.set(v,I),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return N.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-o.size):N.resolve(Ft());let h=-1,u=o;return a.next(d=>N.forEach(d,(p,m)=>(h<m.largestBatchId&&(h=m.largestBatchId),o.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,Te())).next(p=>({batchId:h,changes:dh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(i=>{let s=ds();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const o=t.collectionGroup;let a=ds();return this.indexManager.getCollectionParents(e,o).next(h=>N.forEach(h,u=>{const d=function(p,m){return new cs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next(p=>{p.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,s))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ge.newInvalidDocument(p)))});let h=ds();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Yn(p.mutation,d,Ue.empty(),fe.now()),Yr(t,d)&&(h=h.insert(u,d))}),h})}}/**
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
*/class Pg{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:kg(i.bundledQuery),readTime:an(i.readTime)}}(t)),N.resolve()}}/**
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
*/class Og{constructor(){this.overlays=new Be(F.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ft();return N.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,o)=>{this.ht(e,t,o)}),N.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),N.resolve()}getOverlaysForCollection(e,t,i){const s=Ft(),o=t.length+1,a=new F(t.child("")),h=this.overlays.getIteratorFrom(a);for(;h.hasNext();){const u=h.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>i&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let o=new Be((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let p=o.get(d.largestBatchId);p===null&&(p=Ft(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const h=Ft(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>h.set(d,p)),!(h.size()>=s)););return N.resolve(h)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new ug(t,i));let o=this.Ir.get(t);o===void 0&&(o=Te(),this.Ir.set(t,o)),this.Ir.set(t,o.add(i.key))}}/**
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
*/class Mg{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
*/class to{constructor(){this.Tr=new ke(ue.Er),this.dr=new ke(ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new ue(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new ue(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new F(new se([])),i=new ue(t,e),s=new ue(t,e+1),o=[];return this.dr.forEachInRange([i,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new F(new se([])),i=new ue(t,e),s=new ue(t,e+1);let o=Te();return this.dr.forEachInRange([i,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ue(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ue{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return F.comparator(e.key,t.key)||G(e.wr,t.wr)}static Ar(e,t){return G(e.wr,t.wr)||F.comparator(e.key,t.key)}}/**
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
*/class Lg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ke(ue.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cg(o,t,i,s);this.mutationQueue.push(a);for(const h of s)this.br=this.br.add(new ue(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.vr(i),o=s<0?0:s;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],a=>{const h=this.Dr(a.wr);o.push(h)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new ke(G);return t.forEach(s=>{const o=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],h=>{i=i.add(h.wr)})}),N.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let o=i;F.isDocumentKey(o)||(o=o.child(""));const a=new ue(new F(o),0);let h=new ke(G);return this.br.forEachWhile(u=>{const d=u.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(h=h.add(u.wr)),!0)},a),N.resolve(this.Cr(h))}Cr(e){const t=[];return e.forEach(i=>{const s=this.Dr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){oe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return N.forEach(t.mutations,s=>{const o=new ue(s.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new ue(t,0),s=this.br.firstAfterOrEqual(i);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
*/class Fg{constructor(e){this.Mr=e,this.docs=function(){return new Be(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),o=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return N.resolve(i?i.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let i=us();return t.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Ge.newInvalidDocument(s))}),N.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let o=us();const a=t.path,h=new F(a.child("")),u=this.docs.getIteratorFrom(h);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Tp(Ep(p),i)<=0||(s.has(p.key)||Yr(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(e,t,i,s){j()}Or(e,t){return N.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Ug(this)}getSize(e){return N.resolve(this.size)}}class Ug extends Ag{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(i)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
*/class Vg{constructor(e){this.persistence=e,this.Nr=new rn(t=>Kr(t),Wr),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new to,this.targetCount=0,this.kr=vn.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new vn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,i){let s=0;const o=[];return this.Nr.forEach((a,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),N.waitFor(o).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return N.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),N.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return N.resolve(i)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
*/class qg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Hl(0),this.Kr=!1,this.Kr=!0,this.$r=new Mg,this.referenceDelegate=e(this),this.Ur=new Vg(this),this.indexManager=new Ng,this.remoteDocumentCache=function(i){return new Fg(i)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Ig(t),this.Gr=new Pg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Og,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new Lg(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){O("MemoryPersistence","Starting transaction:",e);const s=new Bg(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(e,t){return N.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class Bg extends Ip{constructor(e){super(),this.currentSequenceNumber=e}}class ta{constructor(e){this.persistence=e,this.Jr=new to,this.Yr=null}static Zr(e){return new ta(e)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),N.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,i=>{const s=F.fromPath(i);return this.ei(e,s).next(o=>{o||t.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
*/class na{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=s}static Wi(e,t){let i=Te(),s=Te();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new na(e,t.fromCache,i,s)}}/**
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
*/class jg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
*/class $g{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tf()?8:kp(Qi())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,s){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,s,i).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new jg;return this.Xi(e,t,a).next(h=>{if(o.result=h,this.zi)return this.es(e,t,a,h.size)})}).next(()=>o.result)}es(e,t,i,s){return i.documentReadCount<this.ji?(jn()<=B.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(jn()<=B.DEBUG&&O("QueryEngine","Query:",Kn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(jn()<=B.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(t))):N.resolve())}Yi(e,t){if(lh(t))return N.resolve(null);let i=Lt(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Qr(t,null,"F"),i=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const a=Te(...o);return this.Ji.getDocuments(e,a).next(h=>this.indexManager.getMinOffset(e,i).next(u=>{const d=this.ts(t,h);return this.ns(t,d,a,u.readTime)?this.Yi(e,Qr(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,i,s){return lh(t)||s.isEqual(te.min())?N.resolve(null):this.Ji.getDocuments(e,i).next(o=>{const a=this.ts(t,o);return this.ns(t,a,i,s)?N.resolve(null):(jn()<=B.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kn(t)),this.rs(e,a,t,bp(s,-1)).next(h=>h))})}ts(e,t){let i=new ke(Wp(e));return t.forEach((s,o)=>{Yr(e,o)&&(i=i.add(o))}),i}ns(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,t,i){return jn()<=B.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Tt.min(),i)}rs(e,t,i,s){return this.Ji.getDocumentsMatchingQuery(e,i,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
*/class zg{constructor(e,t,i,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Be(G),this._s=new rn(o=>Kr(o),Wr),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Hg(n,e,t,i){return new zg(n,e,t,i)}async function Rh(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const a=[],h=[];let u=Te();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){h.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(i,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:h}))})})}function Gg(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,h,u,d){const p=u.batch,m=p.keys();let v=N.resolve();return m.forEach(I=>{v=v.next(()=>d.getEntry(h,I)).next(k=>{const x=u.docVersions.get(I);oe(x!==null),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(h,p))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let h=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(h=h.add(a.batch.mutations[u].key));return h}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Kg(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Wg(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class Ah{constructor(){this.activeTargetIds=eg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qg{constructor(){this.so=new Ah,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ah,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class Yg{_o(e){}shutdown(){}}/**
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
*/class Dh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let ys=null;function no(){return ys===null?ys=function(){return 268435456+Math.round(2147483648*Math.random())}():ys++,"0x"+ys.toString(16)}/**
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
*/const Xg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
*/class Jg{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
*/const Se="WebChannelConnection";class Zg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,t,i,s,o){const a=no(),h=this.xo(e,t.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${a}:`,h,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(e,h,u,i).then(d=>(O("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw ts("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",h,"request:",i),d})}Lo(e,t,i,s,o,a){return this.Mo(e,t,i,s,o)}Oo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}xo(e,t){const i=Xg[e];return`${this.Do}/v1/${t}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,s){const o=no();return new Promise((a,h)=>{const u=new Ll;u.setWithCredentials(!0),u.listenOnce(Fl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case es.NO_ERROR:const p=u.getResponseJson();O(Se,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case es.TIMEOUT:O(Se,`RPC '${e}' ${o} timed out`),h(new M(R.DEADLINE_EXCEEDED,"Request time out"));break;case es.HTTP_ERROR:const m=u.getStatus();if(O(Se,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const I=v==null?void 0:v.error;if(I&&I.status&&I.message){const k=function(x){const P=x.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(P)>=0?P:R.UNKNOWN}(I.status);h(new M(k,I.message))}else h(new M(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else h(new M(R.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{O(Se,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);O(Se,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,i,15)})}Bo(e,t,i){const s=no(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ql(),h=Vl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,i),u.encodeInitMessageHeaders=!0;const p=o.join("");O(Se,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=a.createWebChannel(p,u);let v=!1,I=!1;const k=new Jg({Io:P=>{I?O(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(v||(O(Se,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),O(Se,`RPC '${e}' stream ${s} sending:`,P),m.send(P))},To:()=>m.close()}),x=(P,Z,ee)=>{P.listen(Z,re=>{try{ee(re)}catch(ce){setTimeout(()=>{throw ce},0)}})};return x(m,Bn.EventType.OPEN,()=>{I||(O(Se,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),x(m,Bn.EventType.CLOSE,()=>{I||(I=!0,O(Se,`RPC '${e}' stream ${s} transport closed`),k.So())}),x(m,Bn.EventType.ERROR,P=>{I||(I=!0,ts(Se,`RPC '${e}' stream ${s} transport errored:`,P),k.So(new M(R.UNAVAILABLE,"The operation could not be completed")))}),x(m,Bn.EventType.MESSAGE,P=>{var Z;if(!I){const ee=P.data[0];oe(!!ee);const re=ee,ce=re.error||((Z=re[0])===null||Z===void 0?void 0:Z.error);if(ce){O(Se,`RPC '${e}' stream ${s} received error:`,ce);const St=ce.status;let xe=function(g){const y=ae[g];if(y!==void 0)return fg(y)}(St),b=ce.message;xe===void 0&&(xe=R.INTERNAL,b="Unknown error status: "+St+" with message "+ce.message),I=!0,k.So(new M(xe,b)),m.close()}else O(Se,`RPC '${e}' stream ${s} received:`,ee),k.bo(ee)}}),x(h,Ul.STAT_EVENT,P=>{P.stat===Vr.PROXY?O(Se,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Vr.NOPROXY&&O(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function io(){return typeof document<"u"?document:null}/**
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
*/function vs(n){return new pg(n,!0)}/**
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
*/class xh{constructor(e,t,i=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
*/class em{constructor(e,t,i,s,o,a,h,u){this.ui=e,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=h,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Pt(t.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===t&&this.P_(i,s)},i=>{e(()=>{const s=new M(R.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tm extends em{constructor(e,t,i,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=bg(e.writeResults,e.commitTime),i=an(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=vg(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Cg(this.serializer,i))};this.a_(t)}}/**
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
*/class nm extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Zr(t,i),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(R.UNKNOWN,o.toString())})}Lo(e,t,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,h])=>this.connection.Lo(e,Zr(t,i),s,a,h,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class im{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pt(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
*/class sm{constructor(e,t,i,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{i.enqueueAndForget(async()=>{Zn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(h){const u=W(h);u.L_.add(4),await Jn(u),u.q_.set("Unknown"),u.L_.delete(4),await ws(u)}(this))})}),this.q_=new im(i,s)}}async function ws(n){if(Zn(n))for(const e of n.B_)await e(!0)}async function Jn(n){for(const e of n.B_)await e(!1)}function Zn(n){return W(n).L_.size===0}async function Ph(n,e,t){if(!ns(e))throw e;n.L_.add(1),await Jn(n),n.q_.set("Offline"),t||(t=()=>Kg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ws(n)})}function Oh(n,e){return e().catch(t=>Ph(n,t,e))}async function Cs(n){const e=W(n),t=gt(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rm(e);)try{const s=await Wg(e.localStore,i);if(s===null){e.O_.length===0&&t.o_();break}i=s.batchId,om(e,s)}catch(s){await Ph(e,s)}Mh(e)&&Lh(e)}function rm(n){return Zn(n)&&n.O_.length<10}function om(n,e){n.O_.push(e);const t=gt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Mh(n){return Zn(n)&&!gt(n).n_()&&n.O_.length>0}function Lh(n){gt(n).start()}async function am(n){gt(n).p_()}async function lm(n){const e=gt(n);for(const t of n.O_)e.m_(t.mutations)}async function hm(n,e,t){const i=n.O_.shift(),s=ea.from(i,e,t);await Oh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Cs(n)}async function cm(n,e){e&&gt(n).V_&&await async function(t,i){if(function(s){return dg(s)&&s!==R.ABORTED}(i.code)){const s=t.O_.shift();gt(t).s_(),await Oh(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cs(t)}}(n,e),Mh(n)&&Lh(n)}async function Fh(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=Zn(t);t.L_.add(3),await Jn(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ws(t)}async function um(n,e){const t=W(n);e?(t.L_.delete(2),await ws(t)):e||(t.L_.add(2),await Jn(t),t.q_.set("Unknown"))}function gt(n){return n.U_||(n.U_=function(e,t,i){const s=W(e);return s.w_(),new tm(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:am.bind(null,n),mo:cm.bind(null,n),f_:lm.bind(null,n),g_:hm.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Cs(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
*/class ia{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const a=Date.now()+i,h=new ia(e,t,a,s,o);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uh(n,e){if(Pt("AsyncQueue",`${e}: ${n}`),ns(n))return new M(R.UNAVAILABLE,`${e}: ${n}`);throw n}class dm{constructor(){this.queries=Vh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,t){const i=W(e),s=i.queries;i.queries=Vh(),s.forEach((o,a)=>{for(const h of a.j_)h.onError(t)})})(this,new M(R.ABORTED,"Firestore shutting down"))}}function Vh(){return new rn(n=>ch(n),hh)}function fm(n){n.Y_.forEach(e=>{e.next()})}var qh,Bh;(Bh=qh||(qh={})).ea="default",Bh.Cache="cache";class pm{constructor(e,t,i,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new rn(h=>ch(h),hh),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(F.comparator),this.Na=new Map,this.La=new to,this.Ba={},this.ka=new Map,this.qa=vn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gm(n,e,t){const i=vm(n);try{const s=await function(o,a){const h=W(o),u=fe.now(),d=a.reduce((v,I)=>v.add(I.key),Te());let p,m;return h.persistence.runTransaction("Locally write mutations","readwrite",v=>{let I=us(),k=Te();return h.cs.getEntries(v,d).next(x=>{I=x,I.forEach((P,Z)=>{Z.isValidDocument()||(k=k.add(P))})}).next(()=>h.localDocuments.getOverlayedDocuments(v,I)).next(x=>{p=x;const P=[];for(const Z of a){const ee=lg(Z,p.get(Z.key).overlayedDocument);ee!=null&&P.push(new pt(Z.key,ee,Jl(ee.value.mapValue),Ye.exists(!0)))}return h.mutationQueue.addMutationBatch(v,u,P,a)}).next(x=>{m=x;const P=x.applyToLocalDocumentSet(p,k);return h.documentOverlayCache.saveOverlays(v,x.batchId,P)})}).then(()=>({batchId:m.batchId,changes:dh(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,h){let u=o.Ba[o.currentUser.toKey()];u||(u=new Be(G)),u=u.insert(a,h),o.Ba[o.currentUser.toKey()]=u}(i,s.batchId,t),await bs(i,s.changes),await Cs(i.remoteStore)}catch(s){const o=Uh(s,"Failed to persist write");t.reject(o)}}function jh(n,e,t){const i=W(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Fa.forEach((o,a)=>{const h=a.view.Z_(e);h.snapshot&&s.push(h.snapshot)}),function(o,a){const h=W(o);h.onlineState=a;let u=!1;h.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(a)&&(u=!0)}),u&&fm(h)}(i.eventManager,e),s.length&&i.Ca.d_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mm(n,e){const t=W(n),i=e.batch.batchId;try{const s=await Gg(t.localStore,e);zh(t,i,null),$h(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await bs(t,s)}catch(s){await zl(s)}}async function _m(n,e,t){const i=W(n);try{const s=await function(o,a){const h=W(o);return h.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return h.mutationQueue.lookupMutationBatch(u,a).next(p=>(oe(p!==null),d=p.keys(),h.mutationQueue.removeMutationBatch(u,p))).next(()=>h.mutationQueue.performConsistencyCheck(u)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>h.localDocuments.getDocuments(u,d))})}(i.localStore,e);zh(i,e,t),$h(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await bs(i,s)}catch(s){await zl(s)}}function $h(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function zh(n,e,t){const i=W(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),i.Ba[i.currentUser.toKey()]=s}}async function bs(n,e,t){const i=W(n),s=[],o=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((h,u)=>{a.push(i.Ka(u,e,t).then(d=>{var p;if((d||t)&&i.isPrimaryClient){const m=d?!d.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=na.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(a),i.Ca.d_(s),await async function(h,u){const d=W(h);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(u,m=>N.forEach(m.$i,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>N.forEach(m.Ui,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!ns(p))throw p;O("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=d.os.get(m),I=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(I);d.os=d.os.insert(m,k)}}}(i.localStore,o))}async function ym(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const i=await Rh(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(h=>{h.reject(new M(R.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await bs(t,i.hs)}}function vm(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_m.bind(null,e),e}class Es{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Hg(this.persistence,new $g,e.initialUser,this.serializer)}Ga(e){return new qg(ta.Zr,this.serializer)}Wa(e){return new Qg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Es.provider={build:()=>new Es};class so{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>jh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ym.bind(null,this.syncEngine),await um(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dm}()}createDatastore(e){const t=vs(e.databaseInfo.databaseId),i=function(s){return new Zg(s)}(e.databaseInfo);return function(s,o,a,h){return new nm(s,o,a,h)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(t,i,s,o,a){return new sm(t,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>jh(this.syncEngine,t,0),function(){return Dh.D()?new Dh:new Yg}())}createSyncEngine(e,t){return function(i,s,o,a,h,u,d){const p=new pm(i,s,o,a,h,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);O("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Jn(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}so.provider={build:()=>new so};/**
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
*/class wm{constructor(e,t,i,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=$l.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Uh(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ro(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Rh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Cm(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Fh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Fh(e.remoteStore,s)),n._onlineComponents=e}async function Cm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ts("Error using user provided cache. Falling back to memory cache: "+t),await ro(n,new Es)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await ro(n,new Es);return n._offlineComponents}async function bm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Hh(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Hh(n,new so))),n._onlineComponents}function Em(n){return bm(n).then(e=>e.syncEngine)}/**
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
*/function Gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
*/const Kh=new Map;/**
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
*/function Wh(n,e,t){if(!t)throw new M(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tm(n,e,t,i){if(e===!0&&i===!0)throw new M(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qh(n){if(!F.isDocumentKey(n))throw new M(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yh(n){if(F.isDocumentKey(n))throw new M(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j()}function Ts(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oo(n);throw new M(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
*/class Xh{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new M(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(t,i){return t.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ss{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new fp;switch(t.type){case"firstParty":return new _p(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new M(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Kh.get(e);t&&(O("ComponentProvider","Removing Datastore"),Kh.delete(e),t.terminate())}(this),Promise.resolve()}}function Sm(n,e,t,i={}){var s;const o=(n=Ts(n,Ss))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let h,u;if(typeof i.mockUserToken=="string")h=i.mockUserToken,u=Ee.MOCK_USER;else{h=vl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=i.mockUserToken.sub||i.mockUserToken.user_id;if(!d)throw new M(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ee(d)}n._authCredentials=new pp(new jl(h,u))}}/**
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
*/class sa{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class We{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class Et extends sa{constructor(e,t,i){super(e,t,Hp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new F(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function Im(n,e,...t){if(n=Ae(n),Wh("collection","path",e),n instanceof Ss){const i=se.fromString(e,...t);return Yh(i),new Et(n,null,i)}{if(!(n instanceof We||n instanceof Et))throw new M(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(se.fromString(e,...t));return Yh(i),new Et(n.firestore,null,i)}}function km(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=$l.newId()),Wh("doc","path",e),n instanceof Ss){const i=se.fromString(e,...t);return Qh(i),new We(n,null,new F(i))}{if(!(n instanceof We||n instanceof Et))throw new M(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(se.fromString(e,...t));return Qh(i),new We(n.firestore,n instanceof Et?n.converter:null,new F(i))}}/**
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
*/class Jh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xh(this,"async_queue_retry"),this.Vu=()=>{const i=io();i&&O("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ns(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Pt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=ia.createAndSchedule(this,e,t,i,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class ao extends Ss{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Jh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jh(e),this._firestoreClient=void 0,await e}}}function Nm(n,e){const t=typeof n=="object"?n:Fr(),i=typeof n=="string"?n:"(default)",s=Mr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=_l("firestore");o&&Sm(s,...o)}return s}function Rm(n){if(n._terminated)throw new M(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Am(n),n._firestoreClient}function Am(n){var e,t,i;const s=n._freezeSettings(),o=function(a,h,u,d){return new Dp(a,h,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Gh(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new wm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(a){const h=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
*/class Ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ci(Qe.fromBase64String(e))}catch(t){throw new M(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ci(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
*/class lo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class Is{constructor(e){this._methodName=e}}/**
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
*/class Zh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
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
*/class ec{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(t,i){if(t.length!==i.length)return!1;for(let s=0;s<t.length;++s)if(t[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
*/const Dm=/^__.*__$/;class xm{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xn(e,this.data,t,this.fieldTransforms)}}class tc{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Qs{constructor(e,t,i,s,o,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.Ou(e),s}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ks(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nc(this.Cu)&&Dm.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Pm{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||vs(e)}Qu(e,t,i,s=!1){return new Qs({Cu:e,methodName:t,qu:i,path:ve.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ic(n){const e=n._freezeSettings(),t=vs(n._databaseId);return new Pm(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Om(n,e,t,i,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,s);ho("Data must be an object, but it was:",a,i);const h=sc(i,a);let u,d;if(o.merge)u=new Ue(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const m of o.mergeFields){const v=co(e,m,t);if(!a.contains(v))throw new M(R.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);ac(p,v)||p.push(v)}u=new Ue(p),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new xm(new Ve(h),u,d)}class Ys extends Is{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ys}}function Mm(n,e,t){return new Qs({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ra extends Is{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Mm(this,e,!0),i=this.Ku.map(o=>ei(o,t)),s=new on(i);return new sg(e.path,s)}isEqual(e){return e instanceof ra&&Un(this.Ku,e.Ku)}}function Lm(n,e,t,i){const s=n.Qu(1,e,t);ho("Data must be an object, but it was:",s,i);const o=[],a=Ve.empty();en(i,(u,d)=>{const p=oc(e,u,t);d=Ae(d);const m=s.Nu(p);if(d instanceof Ys)o.push(p);else{const v=ei(d,m);v!=null&&(o.push(p),a.set(p,v))}});const h=new Ue(o);return new tc(a,h,s.fieldTransforms)}function Fm(n,e,t,i,s,o){const a=n.Qu(1,e,t),h=[co(e,i,t)],u=[s];if(o.length%2!=0)throw new M(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)h.push(co(e,o[v])),u.push(o[v+1]);const d=[],p=Ve.empty();for(let v=h.length-1;v>=0;--v)if(!ac(d,h[v])){const I=h[v];let k=u[v];k=Ae(k);const x=a.Nu(I);if(k instanceof Ys)d.push(I);else{const P=ei(k,x);P!=null&&(d.push(I),p.set(I,P))}}const m=new Ue(d);return new tc(p,m,a.fieldTransforms)}function ei(n,e){if(rc(n=Ae(n)))return ho("Unsupported field value:",e,n),sc(n,e);if(n instanceof Is)return function(t,i){if(!nc(i.Cu))throw i.Bu(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(t,i){const s=[];let o=0;for(const a of t){let h=ei(a,i.Lu(o));h==null&&(h={nullValue:"NULL_VALUE"}),s.push(h),o++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=Ae(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return tg(i.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=fe.fromDate(t);return{timestampValue:Jr(i.serializer,s)}}if(t instanceof fe){const s=new fe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Jr(i.serializer,s)}}if(t instanceof Zh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ci)return{bytesValue:gg(i.serializer,t._byteString)};if(t instanceof We){const s=i.databaseId,o=t.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ih(t.firestore._databaseId||i.databaseId,t._key.path)}}if(t instanceof ec)return function(s,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(a=>{if(typeof a!="number")throw o.Bu("VectorValues must only contain numeric values.");return Xr(o.serializer,a)})}}}}}}(t,i);throw i.Bu(`Unsupported field value: ${oo(t)}`)}(n,e)}function sc(n,e){const t={};return Kl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):en(n,(i,s)=>{const o=ei(s,e.Mu(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function rc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Zh||n instanceof Ci||n instanceof We||n instanceof Is||n instanceof ec)}function ho(n,e,t){if(!rc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=oo(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function co(n,e,t){if((e=Ae(e))instanceof lo)return e._internalPath;if(typeof e=="string")return oc(n,e);throw ks("Field path arguments must be of type string or ",n,!1,void 0,t)}const Um=new RegExp("[~\\*/\\[\\]]");function oc(n,e,t){if(e.search(Um)>=0)throw ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lo(...e.split("."))._internalPath}catch{throw ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ks(n,e,t,i,s){const o=i&&!i.isEmpty(),a=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new M(R.INVALID_ARGUMENT,h+n+u)}function ac(n,e){return n.some(t=>t.isEqual(e))}/**
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
*/function Vm(n,e,t){let i;return i=n?n.toFirestore(e):e,i}function qm(n,e,t,...i){n=Ts(n,We);const s=Ts(n.firestore,ao),o=ic(s);let a;return a=typeof(e=Ae(e))=="string"||e instanceof lo?Fm(o,"updateDoc",n._key,e,t,i):Lm(o,"updateDoc",n._key,e),lc(s,[a.toMutation(n._key,Ye.exists(!0))])}function Bm(n,e){const t=Ts(n.firestore,ao),i=km(n),s=Vm(n.converter,e);return lc(t,[Om(ic(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Ye.exists(!1))]).then(()=>i)}function lc(n,e){return function(t,i){const s=new Ot;return t.asyncQueue.enqueueAndForget(async()=>gm(await Em(t),i,s)),s.promise}(Rm(n),e)}function jm(...n){return new ra("arrayUnion",n)}(function(n,e=!0){(function(t){Jt=t})(Lr),Xt(new At("firestore",(t,{instanceIdentifier:i,options:s})=>{const o=t.getProvider("app").getImmediate(),a=new ao(new gp(t.getProvider("auth-internal")),new vp(t.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(h.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),dt(Bl,"4.7.3",n),dt(Bl,"4.7.3","esm2017")})();var hc={};const cc="@firebase/database",uc="1.0.8";/**
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
*/let dc="";function $m(n){dc=n}/**
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
*/class zm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Fn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
*/class Hm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
*/const fc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zm(e)}}catch{}return new Hm},Ut=fc("localStorage"),Gm=fc("sessionStorage");/**
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
*/const hn=new Ji("@firebase/database"),Km=function(){let n=1;return function(){return n++}}(),pc=function(n){const e=pf(n),t=new cf;t.update(e);const i=t.digest();return Ir.encodeByteArray(i)},ti=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ti.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let ni=null,gc=!0;const Wm=function(n,e){A(!e,"Can't turn on custom loggers persistently."),hn.logLevel=B.VERBOSE,ni=hn.log.bind(hn)},Ie=function(...n){if(gc===!0&&(gc=!1,ni===null&&Gm.get("logging_enabled")===!0&&Wm()),ni){const e=ti.apply(null,n);ni(e)}},ii=function(n){return function(...e){Ie(n,...e)}},uo=function(...n){const e="FIREBASE INTERNAL ERROR: "+ti(...n);hn.error(e)},nt=function(...n){const e=`FIREBASE FATAL ERROR: ${ti(...n)}`;throw hn.error(e),new Error(e)},Fe=function(...n){const e="FIREBASE WARNING: "+ti(...n);hn.warn(e)},Qm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ym=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},cn="[MIN_NAME]",Vt="[MAX_NAME]",un=function(n,e){if(n===e)return 0;if(n===cn||e===Vt)return-1;if(e===cn||n===Vt)return 1;{const t=vc(n),i=vc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Xm=function(n,e){return n===e?0:n<e?-1:1},si=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+le(e))},fo=function(n){if(typeof n!="object"||n===null)return le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=le(e[i]),t+=":",t+=fo(n[e[i]]);return t+="}",t},_c=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Oe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const yc=function(n){A(!mc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,o,a,h,u;n===0?(o=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=h+i,a=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(o=0,a=Math.round(n/Math.pow(2,1-i-t))));const d=[];for(u=t;u;u-=1)d.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)d.push(o%2?1:0),o=Math.floor(o/2);d.push(s?1:0),d.reverse();const p=d.join("");let m="";for(u=0;u<64;u+=8){let v=parseInt(p.substr(u,8),2).toString(16);v.length===1&&(v="0"+v),m=m+v}return m.toLowerCase()},Jm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Zm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function e_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const t_=new RegExp("^-?(0*)\\d{1,10}$"),n_=-2147483648,i_=2147483647,vc=function(n){if(t_.test(n)){const e=Number(n);if(e>=n_&&e<=i_)return e}return null},ri=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Fe("Exception was thrown by user callback.",t),e},Math.floor(0))}},s_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
*/class r_{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||(t==null||t.get().then(i=>this.appCheck=i))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
*/class o_{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ns.OWNER="owner";/**
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
*/const po="5",wc="v",Cc="s",bc="r",Ec="f",Tc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sc="ls",Ic="p",go="ac",kc="websocket",Nc="long_polling";/**
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
*/class Rc{constructor(e,t,i,s,o=!1,a="",h=!1,u=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function a_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ac(n,e,t){A(typeof e=="string","typeof type must == string"),A(typeof t=="object","typeof params must == object");let i;if(e===kc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Nc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);a_(n)&&(t.ns=n.namespace);const s=[];return Oe(t,(o,a)=>{s.push(o+"="+a)}),i+s.join("&")}/**
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
*/class l_{constructor(){this.counters_={}}incrementCounter(e,t=1){et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return zd(this.counters_)}}/**
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
*/const mo={},_o={};function yo(n){const e=n.toString();return mo[e]||(mo[e]=new l_),mo[e]}function h_(n,e){const t=n.toString();return _o[t]||(_o[t]=e()),_o[t]}/**
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
*/class c_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ri(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
*/const Dc="start",u_="close",d_="pLPCommand",f_="pRTLPCB",xc="id",Pc="pw",Oc="ser",p_="cb",g_="seg",m_="ts",__="d",y_="dframe",Mc=1870,Lc=30,v_=Mc-Lc,w_=25e3,C_=3e4;class yn{constructor(e,t,i,s,o,a,h){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=a,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ii(e),this.stats_=yo(t),this.urlFn=u=>(this.appCheckToken&&(u[go]=this.appCheckToken),Ac(t,Nc,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new c_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(C_)),Ym(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oa((...o)=>{const[a,h,u,d,p]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Dc)this.id=h,this.password=u;else if(a===u_)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...o)=>{const[a,h]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(a,h)},()=>{this.onClosed_()},this.urlFn);const i={};i[Dc]="t",i[Oc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[p_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[wc]=po,this.transportSessionId&&(i[Cc]=this.transportSessionId),this.lastSessionId&&(i[Sc]=this.lastSessionId),this.applicationId&&(i[Ic]=this.applicationId),this.appCheckToken&&(i[go]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tc.test(location.hostname)&&(i[bc]=Ec);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yn.forceAllow_=!0}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){return yn.forceAllow_?!0:!yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jm()&&!Zm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=pl(t),s=_c(i,v_);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[y_]="t",i[xc]=e,i[Pc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class oa{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Km(),window[d_+this.uniqueCallbackIdentifier]=e,window[f_+this.uniqueCallbackIdentifier]=t,this.myIFrame=oa.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(h){Ie("frame writing exception"),h.stack&&Ie(h.stack),Ie(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xc]=this.myID,e[Pc]=this.myPW,e[Oc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lc+i.length<=Mc;){const o=this.pendingSegs.shift();i=i+"&"+g_+s+"="+o.seg+"&"+m_+s+"="+o.ts+"&"+__+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(w_)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
*/const b_=16384,E_=45e3;let Rs=null;typeof MozWebSocket<"u"?Rs=MozWebSocket:typeof WebSocket<"u"&&(Rs=WebSocket);class He{constructor(e,t,i,s,o,a,h){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ii(this.connId),this.stats_=yo(t),this.connURL=He.connectionURL_(t,a,h,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,o){const a={};return a[wc]=po,typeof location<"u"&&location.hostname&&Tc.test(location.hostname)&&(a[bc]=Ec),t&&(a[Cc]=t),i&&(a[Sc]=i),s&&(a[go]=s),o&&(a[Ic]=o),Ac(e,kc,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ut.set("previous_websocket_failure",!0);try{let i;Cl(),this.mySock=new Rs(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Rs!==null&&!He.forceDisallow_}static previouslyFailed(){return Ut.isInMemoryStorage||Ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Fn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=_c(t,b_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(E_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}He.responsesRequiredToBeHealthy=2,He.healthyTimeout=3e4;/**
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
*/class bi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yn,He]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=He&&He.isAvailable();let i=t&&!He.previouslyFailed();if(e.webSocketOnly&&(t||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[He];else{const s=this.transports_=[];for(const o of bi.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);bi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bi.globalTransportInitialized_=!1;/**
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
*/const T_=6e4,S_=5e3,I_=10*1024,k_=100*1024,vo="t",Fc="d",N_="s",Uc="r",R_="e",Vc="o",qc="a",Bc="n",jc="p",A_="h";class D_{constructor(e,t,i,s,o,a,h,u,d,p){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=a,this.onReady_=h,this.onDisconnect_=u,this.onKill_=d,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ii("c:"+this.id+":"),this.transportManager_=new bi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>k_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>I_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vo in e){const t=e[vo];t===qc?this.upgradeIfSecondaryHealthy_():t===Uc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Vc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=si("t",e),i=si("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=si("t",e),i=si("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=si(vo,e);if(Fc in e){const i=e[Fc];if(t===A_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Bc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===N_?this.onConnectionShutdown_(i):t===Uc?this.onReset_(i):t===R_?uo("Server Error: "+i):t===Vc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uo("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),po!==i&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(T_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(S_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
*/class $c{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
*/class zc{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===t&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){A(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
*/class Xs extends zc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xs}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
*/const Hc=32,Gc=768;class K{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function z(){return new K("")}function V(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function mt(n){return n.pieces_.length-n.pieceNum_}function Q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new K(n.pieces_,e)}function Kc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function x_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Wc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new K(e,0)}function he(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof K)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new K(t,0)}function q(n){return n.pieceNum_>=n.pieces_.length}function De(n,e){const t=V(n),i=V(e);if(t===null)return e;if(t===i)return De(Q(n),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function wo(n,e){if(mt(n)!==mt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function je(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(mt(n)>mt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class P_{constructor(e,t){this.errorPrefix_=t,this.parts_=Wc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Xi(this.parts_[i]);Yc(this)}}function O_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xi(e),Yc(n)}function M_(n){const e=n.parts_.pop();n.byteLength_-=Xi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yc(n){if(n.byteLength_>Gc)throw new Error(n.errorPrefix_+"has a key path longer than "+Gc+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hc+") or object contains a cycle "+qt(n))}function qt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
*/class aa extends zc{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new aa}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
*/const ai=1e3,L_=60*5*1e3,Xc=30*1e3,F_=1.3,U_=3e4,V_="server_kill",Jc=3;class rt extends $c{constructor(e,t,i,s,o,a,h,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=a,this.appCheckTokenProvider_=h,this.authOverride_=u,this.id=rt.nextPersistentConnectionId_++,this.log_=ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=L_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!Cl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");aa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,o={r:s,a:e,b:t};this.log_(le(o)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new kr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,s){this.initConnection_();const o=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+o),this.listens.has(a)||this.listens.set(a,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(a).has(o),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(o,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},a="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(a,o,h=>{const u=h.d,d=h.s;rt.warnOnListenWarnings_(u,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",h),d!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(d,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&et(e,"w")){const i=Yt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=lf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const o=s.s,a=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const o={p:e},a="n";s&&(o.q=i,o.t=s),this.sendRequest(a,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,o){this.initConnection_();const a={p:t,d:i};o!==void 0&&(a.h=o),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):uo("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>U_&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*F_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+rt.nextConnectionId_++,o=this.lastSessionId;let a=!1,h=null;const u=function(){h?h.close():(a=!0,i())},d=function(m){A(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(m)};this.realtime_={close:u,sendRequest:d};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,v]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);a?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=v&&v.token,h=new D_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,I=>{Fe(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(V_)},o))}catch(m){this.log_("Failed to get token: "+m),a||(this.repoInfo_.nodeAdmin&&Fe(m),u())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ar(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>fo(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new K(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jc&&(this.reconnectDelay_=Xc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+dc.replace(/\./g,"-")]=1,Nr()?e["framework.cordova"]=1:wl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xs.getInstance().currentlyOnline();return Ar(this.interruptReasons_)&&e}}rt.nextPersistentConnectionId_=0,rt.nextConnectionId_=0;/**
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
*/class U{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new U(e,t)}}/**
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
*/class As{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new U(cn,e),s=new U(cn,t);return this.compare(i,s)!==0}minPost(){return U.MIN}}/**
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
*/let Ds;class Zc extends As{static get __EMPTY_NODE(){return Ds}static set __EMPTY_NODE(e){Ds=e}compare(e,t){return un(e.name,t.name)}isDefinedOn(e){throw Qt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return U.MIN}maxPost(){return new U(Vt,Ds)}makePost(e,t){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Ds)}toString(){return".key"}}const dn=new Zc;/**
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
*/class xs{constructor(e,t,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??pe.RED,this.left=s??Me.EMPTY_NODE,this.right=o??Me.EMPTY_NODE}copy(e,t,i,s,o){return new pe(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0,pe.BLACK=!1;class q_{copy(e,t,i,s,o){return this}insert(e,t,i){return new pe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,t=Me.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Me(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xs(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new q_;/**
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
*/function B_(n,e){return un(n.name,e.name)}function Co(n,e){return un(n,e)}/**
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
*/let bo;function j_(n){bo=n}const eu=function(n){return typeof n=="number"?"number:"+yc(n):"string:"+n},tu=function(n){if(n.isLeafNode()){const e=n.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&et(e,".sv"),"Priority must be a string or number.")}else A(n===bo||n.isEmpty(),"priority of unexpected type.");A(n===bo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
*/let nu;class ge{constructor(e,t=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tu(this.priorityNode_)}static set __childrenNodeConstructor(e){nu=e}static get __childrenNodeConstructor(){return nu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:V(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=V(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(A(i!==".priority"||mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=yc(this.value_):e+=this.value_,this.lazyHash_=pc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ge.VALUE_TYPE_ORDER.indexOf(t),o=ge.VALUE_TYPE_ORDER.indexOf(i);return A(s>=0,"Unknown leaf type: "+t),A(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
*/let iu,su;function $_(n){iu=n}function z_(n){su=n}class H_ extends As{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),o=i.compareTo(s);return o===0?un(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Vt,new ge("[PRIORITY-POST]",su))}makePost(e,t){const i=iu(e);return new U(t,new ge("[PRIORITY-POST]",i))}toString(){return".priority"}}const ie=new H_;/**
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
*/const G_=Math.log(2);class K_{constructor(e){const t=o=>parseInt(Math.log(o)/G_,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ps=function(n,e,t,i){n.sort(e);const s=function(u,d){const p=d-u;let m,v;if(p===0)return null;if(p===1)return m=n[u],v=t?t(m):m,new pe(v,m.node,pe.BLACK,null,null);{const I=parseInt(p/2,10)+u,k=s(u,I),x=s(I+1,d);return m=n[I],v=t?t(m):m,new pe(v,m.node,pe.BLACK,k,x)}},o=function(u){let d=null,p=null,m=n.length;const v=function(k,x){const P=m-k,Z=m;m-=k;const ee=s(P+1,Z),re=n[P],ce=t?t(re):re;I(new pe(ce,re.node,x,null,ee))},I=function(k){d?(d.left=k,d=k):(p=k,d=k)};for(let k=0;k<u.count;++k){const x=u.nextBitIsOne(),P=Math.pow(2,u.count-(k+1));x?v(P,pe.BLACK):(v(P,pe.BLACK),v(P,pe.RED))}return p},a=new K_(n.length),h=o(a);return new Me(i||e,h)};/**
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
*/let Eo;const fn={};class ot{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return A(fn&&ie,"ChildrenNode.ts has not been loaded"),Eo=Eo||new ot({".priority":fn},{".priority":ie}),Eo}get(e){const t=Yt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Me?t:null}hasIndex(e){return et(this.indexSet_,e.toString())}addIndex(e,t){A(e!==dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=t.getIterator(U.Wrap);let a=o.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=o.getNext();let h;s?h=Ps(i,e.getCompare()):h=fn;const u=e.toString(),d=Object.assign({},this.indexSet_);d[u]=e;const p=Object.assign({},this.indexes_);return p[u]=h,new ot(p,d)}addToIndexes(e,t){const i=Yi(this.indexes_,(s,o)=>{const a=Yt(this.indexSet_,o);if(A(a,"Missing index implementation for "+o),s===fn)if(a.isDefinedOn(e.node)){const h=[],u=t.getIterator(U.Wrap);let d=u.getNext();for(;d;)d.name!==e.name&&h.push(d),d=u.getNext();return h.push(e),Ps(h,a.getCompare())}else return fn;else{const h=t.get(e.name);let u=s;return h&&(u=u.remove(new U(e.name,h))),u.insert(e,e.node)}});return new ot(i,this.indexSet_)}removeFromIndexes(e,t){const i=Yi(this.indexes_,s=>{if(s===fn)return s;{const o=t.get(e.name);return o?s.remove(new U(e.name,o)):s}});return new ot(i,this.indexSet_)}}/**
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
*/let li;class L{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&tu(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return li||(li=new L(new Me(Co),null,ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?li:t}}getChild(e){const t=V(e);return t===null?this:this.getImmediateChild(t).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(A(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new U(e,t);let s,o;t.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?li:this.priorityNode_;return new L(s,a,o)}}updateChild(e,t){const i=V(e);if(i===null)return t;{A(V(e)!==".priority"||mt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Q(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,o=!0;if(this.forEachChild(ie,(a,h)=>{t[a]=h.val(e),i++,o&&L.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):o=!1}),!e&&o&&s<2*i){const a=[];for(const h in t)a[h]=t[h];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+eu(this.getPriority().val())+":"),this.forEachChild(ie,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":pc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new U(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new U(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new U(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hi?-1:0}withIndex(e){if(e===dn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ie),s=t.getIterator(ie);let o=i.getNext(),a=s.getNext();for(;o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=i.getNext(),a=s.getNext()}return o===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===dn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W_ extends L{constructor(){super(new Me(Co),L.EMPTY_NODE,ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const hi=new W_;Object.defineProperties(U,{MIN:{value:new U(cn,L.EMPTY_NODE)},MAX:{value:new U(Vt,hi)}}),Zc.__EMPTY_NODE=L.EMPTY_NODE,ge.__childrenNodeConstructor=L,j_(hi),z_(hi);/**
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
*/const Q_=!0;function ye(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ge(t,ye(e))}if(!(n instanceof Array)&&Q_){const t=[];let i=!1;if(Oe(n,(o,a)=>{if(o.substring(0,1)!=="."){const h=ye(a);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),t.push(new U(o,h)))}}),t.length===0)return L.EMPTY_NODE;const s=Ps(t,B_,o=>o.name,Co);if(i){const o=Ps(t,ie.getCompare());return new L(s,ye(e),new ot({".priority":o},{".priority":ie}))}else return new L(s,ye(e),ot.Default)}else{let t=L.EMPTY_NODE;return Oe(n,(i,s)=>{if(et(n,i)&&i.substring(0,1)!=="."){const o=ye(s);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(ye(e))}}$_(ye);/**
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
*/class Y_ extends As{constructor(e){super(),this.indexPath_=e,A(!q(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),o=i.compareTo(s);return o===0?un(e.name,t.name):o}makePost(e,t){const i=ye(e),s=L.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(t,s)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,hi);return new U(Vt,e)}toString(){return Wc(this.indexPath_,0).join("/")}}/**
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
*/class X_ extends As{compare(e,t){const i=e.node.compareTo(t.node);return i===0?un(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,t){const i=ye(e);return new U(t,i)}toString(){return".value"}}const J_=new X_;/**
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
*/function ru(n){return{type:"value",snapshotNode:n}}function pn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ci(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ui(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Z_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
*/class To{constructor(e){this.index_=e}updateChild(e,t,i,s,o,a){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(s).equals(i.getChild(s))&&h.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(ci(t,h)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?a.trackChildChange(pn(t,i)):a.trackChildChange(ui(t,i,h))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ie,(s,o)=>{t.hasChild(s)||i.trackChildChange(ci(s,o))}),t.isLeafNode()||t.forEachChild(ie,(s,o)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(o)||i.trackChildChange(ui(s,o,a))}else i.trackChildChange(pn(s,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
*/class Ei{constructor(e){this.indexedFilter_=new To(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ei.getStartPost_(e),this.endPost_=Ei.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,o,a){return this.matches(new U(t,i))||(i=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,o,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=L.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(L.EMPTY_NODE);const o=this;return t.forEachChild(ie,(a,h)=>{o.matches(new U(a,h))||(s=s.updateImmediateChild(a,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
*/class ey{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ei(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,o,a){return this.rangedFilter_.matches(new U(t,i))||(i=L.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,o,a):this.fullLimitUpdateChild_(e,t,i,o,a)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=L.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;o.hasNext()&&a<this.limit_;){const h=o.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))s=s.updateImmediateChild(h.name,h.node),a++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(L.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let a=0;for(;o.hasNext();){const h=o.getNext();a<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?a++:s=s.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,o){let a;if(this.reverse_){const m=this.index_.getCompare();a=(v,I)=>m(I,v)}else a=this.index_.getCompare();const h=e;A(h.numChildren()===this.limit_,"");const u=new U(t,i),d=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),p=this.rangedFilter_.matches(u);if(h.hasChild(t)){const m=h.getImmediateChild(t);let v=s.getChildAfterChild(this.index_,d,this.reverse_);for(;v!=null&&(v.name===t||h.hasChild(v.name));)v=s.getChildAfterChild(this.index_,v,this.reverse_);const I=v==null?1:a(v,u);if(p&&!i.isEmpty()&&I>=0)return o==null||o.trackChildChange(ui(t,i,m)),h.updateImmediateChild(t,i);{o==null||o.trackChildChange(ci(t,m));const k=h.updateImmediateChild(t,L.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(o==null||o.trackChildChange(pn(v.name,v.node)),k.updateImmediateChild(v.name,v.node)):k}}else return i.isEmpty()?e:p&&a(d,u)>=0?(o!=null&&(o.trackChildChange(ci(d.name,d.node)),o.trackChildChange(pn(t,i))),h.updateImmediateChild(t,i).updateImmediateChild(d.name,L.EMPTY_NODE)):e}}/**
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
*/class la{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cn}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new la;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ty(n){return n.loadsAllData()?new To(n.getIndex()):n.hasLimit()?new ey(n):new Ei(n)}function ny(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function ou(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ie?t="$priority":n.index_===J_?t="$value":n.index_===dn?t="$key":(A(n.index_ instanceof Y_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=le(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=le(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+le(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=le(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+le(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function au(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ie&&(e.i=n.index_.toString()),e}/**
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
*/class Js extends $c{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ii("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const a=Js.getListenId_(e,i),h={};this.listens_[a]=h;const u=ou(e._queryParams);this.restRequest_(o+".json",u,(d,p)=>{let m=p;if(d===404&&(m=null,d=null),d===null&&this.onDataUpdate_(o,m,!1,i),Yt(this.listens_,a)===h){let v;d?d===401?v="permission_denied":v="rest_error:"+d:v="ok",s(v,null)}})}unlisten(e,t){const i=Js.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ou(e._queryParams),i=e._path.toString(),s=new kr;return this.restRequest_(i+".json",t,(o,a)=>{let h=a;o===404&&(h=null,o=null),o===null?(this.onDataUpdate_(i,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(t.auth=s.accessToken),o&&o.token&&(t.ac=o.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Tl(t);this.log_("Sending REST request for "+a);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(i&&h.readyState===4){this.log_("REST Response for "+a+" received. status:",h.status,"response:",h.responseText);let u=null;if(h.status>=200&&h.status<300){try{u=Fn(h.responseText)}catch{Fe("Failed to parse JSON response for "+a+": "+h.responseText)}i(null,u)}else h.status!==401&&h.status!==404&&Fe("Got unsuccessful REST response for "+a+" Status: "+h.status),i(h.status);i=null}},h.open("GET",a,!0),h.send()})}}/**
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
*/class iy{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
*/function Os(){return{value:null,children:new Map}}function lu(n,e,t){if(q(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=V(e);n.children.has(i)||n.children.set(i,Os());const s=n.children.get(i);e=Q(e),lu(s,e,t)}}function So(n,e,t){n.value!==null?t(e,n.value):sy(n,(i,s)=>{const o=new K(e.toString()+"/"+i);So(s,o,t)})}function sy(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
*/class ry{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Oe(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
*/const hu=10*1e3,oy=30*1e3,ay=5*60*1e3;class ly{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ry(e);const i=hu+(oy-hu)*Math.random();oi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Oe(e,(s,o)=>{o>0&&et(this.statsToReport_,s)&&(t[s]=o,i=!0)}),i&&this.server_.reportStats(t),oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ay))}}/**
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
*/var $e;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($e||($e={}));function cu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Io(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ko(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
*/class Zs{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=$e.ACK_USER_WRITE,this.source=cu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new K(e));return new Zs(z(),t,this.revert)}}else return A(V(this.path)===e,"operationForChild called for unrelated child."),new Zs(Q(this.path),this.affectedTree,this.revert)}}/**
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
*/class Ti{constructor(e,t){this.source=e,this.path=t,this.type=$e.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Ti(this.source,z()):new Ti(this.source,Q(this.path))}}/**
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
*/class zt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=$e.OVERWRITE}operationForChild(e){return q(this.path)?new zt(this.source,z(),this.snap.getImmediateChild(e)):new zt(this.source,Q(this.path),this.snap)}}/**
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
*/class Si{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=$e.MERGE}operationForChild(e){if(q(this.path)){const t=this.children.subtree(new K(e));return t.isEmpty()?null:t.value?new zt(this.source,z(),t.value):new Si(this.source,z(),t)}else return A(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Si(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
*/class _t{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const t=V(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
*/class hy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cy(n,e,t,i){const s=[],o=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(Z_(a.childName,a.snapshotNode))}),di(n,s,"child_removed",e,i,t),di(n,s,"child_added",e,i,t),di(n,s,"child_moved",o,i,t),di(n,s,"child_changed",e,i,t),di(n,s,"value",e,i,t),s}function di(n,e,t,i,s,o){const a=i.filter(h=>h.type===t);a.sort((h,u)=>dy(n,h,u)),a.forEach(h=>{const u=uy(n,h,o);s.forEach(d=>{d.respondsTo(h.type)&&e.push(d.createEvent(u,n.query_))})})}function uy(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function dy(n,e,t){if(e.childName==null||t.childName==null)throw Qt("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),s=new U(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
*/function Ms(n,e){return{eventCache:n,serverCache:e}}function fi(n,e,t,i){return Ms(new _t(e,t,i),n.serverCache)}function uu(n,e,t,i){return Ms(n.eventCache,new _t(e,t,i))}function Ls(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Bt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
*/let No;const fy=()=>(No||(No=new Me(Xm)),No);class J{constructor(e,t=fy()){this.value=e,this.children=t}static fromObject(e){let t=new J(null);return Oe(e,(i,s)=>{t=t.set(new K(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:z(),value:this.value};if(q(e))return null;{const i=V(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(Q(e),t);return o!=null?{path:he(new K(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const t=V(e),i=this.children.get(t);return i!==null?i.subtree(Q(e)):new J(null)}}set(e,t){if(q(e))return new J(t,this.children);{const i=V(e),s=(this.children.get(i)||new J(null)).set(Q(e),t),o=this.children.insert(i,s);return new J(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const t=V(e),i=this.children.get(t);if(i){const s=i.remove(Q(e));let o;return s.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,s),this.value===null&&o.isEmpty()?new J(null):new J(this.value,o)}else return this}}get(e){if(q(e))return this.value;{const t=V(e),i=this.children.get(t);return i?i.get(Q(e)):null}}setTree(e,t){if(q(e))return t;{const i=V(e),s=(this.children.get(i)||new J(null)).setTree(Q(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new J(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(he(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,z(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(q(e))return null;{const o=V(e),a=this.children.get(o);return a?a.findOnPath_(Q(e),he(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,z(),t)}foreachOnPath_(e,t,i){if(q(e))return this;{this.value&&i(t,this.value);const s=V(e),o=this.children.get(s);return o?o.foreachOnPath_(Q(e),he(t,s),i):new J(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(he(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
*/class ze{constructor(e){this.writeTree_=e}static empty(){return new ze(new J(null))}}function pi(n,e,t){if(q(e))return new ze(new J(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const a=De(s,e);return o=o.updateChild(a,t),new ze(n.writeTree_.set(s,o))}else{const s=new J(t),o=n.writeTree_.setTree(e,s);return new ze(o)}}}function du(n,e,t){let i=n;return Oe(t,(s,o)=>{i=pi(i,he(e,s),o)}),i}function fu(n,e){if(q(e))return ze.empty();{const t=n.writeTree_.setTree(e,new J(null));return new ze(t)}}function Ro(n,e){return jt(n,e)!=null}function jt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(De(t.path,e)):null}function pu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ie,(i,s)=>{e.push(new U(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new U(i,s.value))}),e}function yt(n,e){if(q(e))return n;{const t=jt(n,e);return t!=null?new ze(new J(t)):new ze(n.writeTree_.subtree(e))}}function Ao(n){return n.writeTree_.isEmpty()}function gn(n,e){return gu(z(),n.writeTree_,e)}function gu(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(A(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=gu(he(n,s),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(he(n,".priority"),i)),t}}/**
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
*/function Fs(n,e){return wu(e,n)}function py(n,e,t,i,s){A(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=pi(n.visibleWrites,e,t)),n.lastWriteId=i}function gy(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function my(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);A(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,o=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const h=n.allWrites[a];h.visible&&(a>=t&&_y(h,i.path)?s=!1:je(i.path,h.path)&&(o=!0)),a--}if(s){if(o)return yy(n),!0;if(i.snap)n.visibleWrites=fu(n.visibleWrites,i.path);else{const h=i.children;Oe(h,u=>{n.visibleWrites=fu(n.visibleWrites,he(i.path,u))})}return!0}else return!1}function _y(n,e){if(n.snap)return je(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&je(he(n.path,t),e))return!0;return!1}function yy(n){n.visibleWrites=mu(n.allWrites,vy,z()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function vy(n){return n.visible}function mu(n,e,t){let i=ze.empty();for(let s=0;s<n.length;++s){const o=n[s];if(e(o)){const a=o.path;let h;if(o.snap)je(t,a)?(h=De(t,a),i=pi(i,h,o.snap)):je(a,t)&&(h=De(a,t),i=pi(i,z(),o.snap.getChild(h)));else if(o.children){if(je(t,a))h=De(t,a),i=du(i,h,o.children);else if(je(a,t))if(h=De(a,t),q(h))i=du(i,z(),o.children);else{const u=Yt(o.children,V(h));if(u){const d=u.getChild(Q(h));i=pi(i,z(),d)}}}else throw Qt("WriteRecord should have .snap or .children")}}return i}function _u(n,e,t,i,s){if(!i&&!s){const o=jt(n.visibleWrites,e);if(o!=null)return o;{const a=yt(n.visibleWrites,e);if(Ao(a))return t;if(t==null&&!Ro(a,z()))return null;{const h=t||L.EMPTY_NODE;return gn(a,h)}}}else{const o=yt(n.visibleWrites,e);if(!s&&Ao(o))return t;if(!s&&t==null&&!Ro(o,z()))return null;{const a=function(d){return(d.visible||s)&&(!i||!~i.indexOf(d.writeId))&&(je(d.path,e)||je(e,d.path))},h=mu(n.allWrites,a,e),u=t||L.EMPTY_NODE;return gn(h,u)}}}function wy(n,e,t){let i=L.EMPTY_NODE;const s=jt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ie,(o,a)=>{i=i.updateImmediateChild(o,a)}),i;if(t){const o=yt(n.visibleWrites,e);return t.forEachChild(ie,(a,h)=>{const u=gn(yt(o,new K(a)),h);i=i.updateImmediateChild(a,u)}),pu(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const o=yt(n.visibleWrites,e);return pu(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function Cy(n,e,t,i,s){A(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=he(e,t);if(Ro(n.visibleWrites,o))return null;{const a=yt(n.visibleWrites,o);return Ao(a)?s.getChild(t):gn(a,s.getChild(t))}}function by(n,e,t,i){const s=he(e,t),o=jt(n.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(t)){const a=yt(n.visibleWrites,s);return gn(a,i.getNode().getImmediateChild(t))}else return null}function Ey(n,e){return jt(n.visibleWrites,e)}function Ty(n,e,t,i,s,o,a){let h;const u=yt(n.visibleWrites,e),d=jt(u,z());if(d!=null)h=d;else if(t!=null)h=gn(u,t);else return[];if(h=h.withIndex(a),!h.isEmpty()&&!h.isLeafNode()){const p=[],m=a.getCompare(),v=o?h.getReverseIteratorFrom(i,a):h.getIteratorFrom(i,a);let I=v.getNext();for(;I&&p.length<s;)m(I,i)!==0&&p.push(I),I=v.getNext();return p}else return[]}function Sy(){return{visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1}}function Us(n,e,t,i){return _u(n.writeTree,n.treePath,e,t,i)}function Do(n,e){return wy(n.writeTree,n.treePath,e)}function yu(n,e,t,i){return Cy(n.writeTree,n.treePath,e,t,i)}function Vs(n,e){return Ey(n.writeTree,he(n.treePath,e))}function Iy(n,e,t,i,s,o){return Ty(n.writeTree,n.treePath,e,t,i,s,o)}function xo(n,e,t){return by(n.writeTree,n.treePath,e,t)}function vu(n,e){return wu(he(n.treePath,e),n.writeTree)}function wu(n,e){return{treePath:n,writeTree:e}}/**
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
*/class ky{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;A(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),A(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,ui(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,ci(i,s.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,pn(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,ui(i,e.snapshotNode,s.oldSnap));else throw Qt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
*/class Ny{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Cu=new Ny;class Po{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xo(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bt(this.viewCache_),o=Iy(this.writes_,s,t,1,i,e);return o.length===0?null:o[0]}}/**
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
*/function Ry(n){return{filter:n}}function Ay(n,e){A(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Dy(n,e,t,i,s){const o=new ky;let a,h;if(t.type===$e.OVERWRITE){const d=t;d.source.fromUser?a=Oo(n,e,d.path,d.snap,i,s,o):(A(d.source.fromServer,"Unknown source."),h=d.source.tagged||e.serverCache.isFiltered()&&!q(d.path),a=qs(n,e,d.path,d.snap,i,s,h,o))}else if(t.type===$e.MERGE){const d=t;d.source.fromUser?a=Py(n,e,d.path,d.children,i,s,o):(A(d.source.fromServer,"Unknown source."),h=d.source.tagged||e.serverCache.isFiltered(),a=Mo(n,e,d.path,d.children,i,s,h,o))}else if(t.type===$e.ACK_USER_WRITE){const d=t;d.revert?a=Ly(n,e,d.path,i,s,o):a=Oy(n,e,d.path,d.affectedTree,i,s,o)}else if(t.type===$e.LISTEN_COMPLETE)a=My(n,e,t.path,i,o);else throw Qt("Unknown operation type: "+t.type);const u=o.getChanges();return xy(e,a,u),{viewCache:a,changes:u}}function xy(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Ls(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(ru(Ls(e)))}}function bu(n,e,t,i,s,o){const a=e.eventCache;if(Vs(i,t)!=null)return e;{let h,u;if(q(t))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Bt(e),p=d instanceof L?d:L.EMPTY_NODE,m=Do(i,p);h=n.filter.updateFullNode(e.eventCache.getNode(),m,o)}else{const d=Us(i,Bt(e));h=n.filter.updateFullNode(e.eventCache.getNode(),d,o)}else{const d=V(t);if(d===".priority"){A(mt(t)===1,"Can't have a priority with additional path components");const p=a.getNode();u=e.serverCache.getNode();const m=yu(i,t,p,u);m!=null?h=n.filter.updatePriority(p,m):h=a.getNode()}else{const p=Q(t);let m;if(a.isCompleteForChild(d)){u=e.serverCache.getNode();const v=yu(i,t,a.getNode(),u);v!=null?m=a.getNode().getImmediateChild(d).updateChild(p,v):m=a.getNode().getImmediateChild(d)}else m=xo(i,d,e.serverCache);m!=null?h=n.filter.updateChild(a.getNode(),d,m,p,s,o):h=a.getNode()}}return fi(e,h,a.isFullyInitialized()||q(t),n.filter.filtersNodes())}}function qs(n,e,t,i,s,o,a,h){const u=e.serverCache;let d;const p=a?n.filter:n.filter.getIndexedFilter();if(q(t))d=p.updateFullNode(u.getNode(),i,null);else if(p.filtersNodes()&&!u.isFiltered()){const I=u.getNode().updateChild(t,i);d=p.updateFullNode(u.getNode(),I,null)}else{const I=V(t);if(!u.isCompleteForPath(t)&&mt(t)>1)return e;const k=Q(t),x=u.getNode().getImmediateChild(I).updateChild(k,i);I===".priority"?d=p.updatePriority(u.getNode(),x):d=p.updateChild(u.getNode(),I,x,k,Cu,null)}const m=uu(e,d,u.isFullyInitialized()||q(t),p.filtersNodes()),v=new Po(s,m,o);return bu(n,m,t,s,v,h)}function Oo(n,e,t,i,s,o,a){const h=e.eventCache;let u,d;const p=new Po(s,e,o);if(q(t))d=n.filter.updateFullNode(e.eventCache.getNode(),i,a),u=fi(e,d,!0,n.filter.filtersNodes());else{const m=V(t);if(m===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),i),u=fi(e,d,h.isFullyInitialized(),h.isFiltered());else{const v=Q(t),I=h.getNode().getImmediateChild(m);let k;if(q(v))k=i;else{const x=p.getCompleteChild(m);x!=null?Kc(v)===".priority"&&x.getChild(Qc(v)).isEmpty()?k=x:k=x.updateChild(v,i):k=L.EMPTY_NODE}if(I.equals(k))u=e;else{const x=n.filter.updateChild(h.getNode(),m,k,v,p,a);u=fi(e,x,h.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function Eu(n,e){return n.eventCache.isCompleteForChild(e)}function Py(n,e,t,i,s,o,a){let h=e;return i.foreach((u,d)=>{const p=he(t,u);Eu(e,V(p))&&(h=Oo(n,h,p,d,s,o,a))}),i.foreach((u,d)=>{const p=he(t,u);Eu(e,V(p))||(h=Oo(n,h,p,d,s,o,a))}),h}function Tu(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Mo(n,e,t,i,s,o,a,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,d;q(t)?d=i:d=new J(null).setTree(t,i);const p=e.serverCache.getNode();return d.children.inorderTraversal((m,v)=>{if(p.hasChild(m)){const I=e.serverCache.getNode().getImmediateChild(m),k=Tu(n,I,v);u=qs(n,u,new K(m),k,s,o,a,h)}}),d.children.inorderTraversal((m,v)=>{const I=!e.serverCache.isCompleteForChild(m)&&v.value===null;if(!p.hasChild(m)&&!I){const k=e.serverCache.getNode().getImmediateChild(m),x=Tu(n,k,v);u=qs(n,u,new K(m),x,s,o,a,h)}}),u}function Oy(n,e,t,i,s,o,a){if(Vs(s,t)!=null)return e;const h=e.serverCache.isFiltered(),u=e.serverCache;if(i.value!=null){if(q(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return qs(n,e,t,u.getNode().getChild(t),s,o,h,a);if(q(t)){let d=new J(null);return u.getNode().forEachChild(dn,(p,m)=>{d=d.set(new K(p),m)}),Mo(n,e,t,d,s,o,h,a)}else return e}else{let d=new J(null);return i.foreach((p,m)=>{const v=he(t,p);u.isCompleteForPath(v)&&(d=d.set(p,u.getNode().getChild(v)))}),Mo(n,e,t,d,s,o,h,a)}}function My(n,e,t,i,s){const o=e.serverCache,a=uu(e,o.getNode(),o.isFullyInitialized()||q(t),o.isFiltered());return bu(n,a,t,i,Cu,s)}function Ly(n,e,t,i,s,o){let a;if(Vs(i,t)!=null)return e;{const h=new Po(i,e,s),u=e.eventCache.getNode();let d;if(q(t)||V(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Us(i,Bt(e));else{const m=e.serverCache.getNode();A(m instanceof L,"serverChildren would be complete if leaf node"),p=Do(i,m)}p=p,d=n.filter.updateFullNode(u,p,o)}else{const p=V(t);let m=xo(i,p,e.serverCache);m==null&&e.serverCache.isCompleteForChild(p)&&(m=u.getImmediateChild(p)),m!=null?d=n.filter.updateChild(u,p,m,Q(t),h,o):e.eventCache.getNode().hasChild(p)?d=n.filter.updateChild(u,p,L.EMPTY_NODE,Q(t),h,o):d=u,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Us(i,Bt(e)),a.isLeafNode()&&(d=n.filter.updateFullNode(d,a,o)))}return a=e.serverCache.isFullyInitialized()||Vs(i,z())!=null,fi(e,d,a,n.filter.filtersNodes())}}/**
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
*/class Fy{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new To(i.getIndex()),o=ty(i);this.processor_=Ry(o);const a=t.serverCache,h=t.eventCache,u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),d=o.updateFullNode(L.EMPTY_NODE,h.getNode(),null),p=new _t(u,a.isFullyInitialized(),s.filtersNodes()),m=new _t(d,h.isFullyInitialized(),o.filtersNodes());this.viewCache_=Ms(m,p),this.eventGenerator_=new hy(this.query_)}get query(){return this.query_}}function Uy(n){return n.viewCache_.serverCache.getNode()}function Vy(n){return Ls(n.viewCache_)}function qy(n,e){const t=Bt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!q(e)&&!t.getImmediateChild(V(e)).isEmpty())?t.getChild(e):null}function Su(n){return n.eventRegistrations_.length===0}function By(n,e){n.eventRegistrations_.push(e)}function Iu(n,e,t){const i=[];if(t){A(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(o=>{const a=o.createCancelEvent(t,s);a&&i.push(a)})}if(e){let s=[];for(let o=0;o<n.eventRegistrations_.length;++o){const a=n.eventRegistrations_[o];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ku(n,e,t,i){e.type===$e.MERGE&&e.source.queryId!==null&&(A(Bt(n.viewCache_),"We should always have a full cache before handling merges"),A(Ls(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,o=Dy(n.processor_,s,e,t,i);return Ay(n.processor_,o.viewCache),A(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Nu(n,o.changes,o.viewCache.eventCache.getNode(),null)}function jy(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ie,(s,o)=>{i.push(pn(s,o))}),t.isFullyInitialized()&&i.push(ru(t.getNode())),Nu(n,i,t.getNode(),e)}function Nu(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return cy(n.eventGenerator_,e,t,s)}/**
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
*/let Bs;class Ru{constructor(){this.views=new Map}}function $y(n){A(!Bs,"__referenceConstructor has already been defined"),Bs=n}function zy(){return A(Bs,"Reference.ts has not been loaded"),Bs}function Hy(n){return n.views.size===0}function Lo(n,e,t,i){const s=e.source.queryId;if(s!==null){const o=n.views.get(s);return A(o!=null,"SyncTree gave us an op for an invalid query."),ku(o,e,t,i)}else{let o=[];for(const a of n.views.values())o=o.concat(ku(a,e,t,i));return o}}function Au(n,e,t,i,s){const o=e._queryIdentifier,a=n.views.get(o);if(!a){let h=Us(t,s?i:null),u=!1;h?u=!0:i instanceof L?(h=Do(t,i),u=!1):(h=L.EMPTY_NODE,u=!1);const d=Ms(new _t(h,u,!1),new _t(i,s,!1));return new Fy(e,d)}return a}function Gy(n,e,t,i,s,o){const a=Au(n,e,i,s,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),By(a,t),jy(a,t)}function Ky(n,e,t,i){const s=e._queryIdentifier,o=[];let a=[];const h=wt(n);if(s==="default")for(const[u,d]of n.views.entries())a=a.concat(Iu(d,t,i)),Su(d)&&(n.views.delete(u),d.query._queryParams.loadsAllData()||o.push(d.query));else{const u=n.views.get(s);u&&(a=a.concat(Iu(u,t,i)),Su(u)&&(n.views.delete(s),u.query._queryParams.loadsAllData()||o.push(u.query)))}return h&&!wt(n)&&o.push(new(zy())(e._repo,e._path)),{removed:o,events:a}}function Du(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function vt(n,e){let t=null;for(const i of n.views.values())t=t||qy(i,e);return t}function xu(n,e){if(e._queryParams.loadsAllData())return js(n);{const t=e._queryIdentifier;return n.views.get(t)}}function Pu(n,e){return xu(n,e)!=null}function wt(n){return js(n)!=null}function js(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
*/let $s;function Wy(n){A(!$s,"__referenceConstructor has already been defined"),$s=n}function Qy(){return A($s,"Reference.ts has not been loaded"),$s}let Yy=1;class Ou{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Sy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xy(n,e,t,i,s){return py(n.pendingWriteTree_,e,t,i,s),s?mi(n,new zt(cu(),e,t)):[]}function mn(n,e,t=!1){const i=gy(n.pendingWriteTree_,e);if(my(n.pendingWriteTree_,e)){let s=new J(null);return i.snap!=null?s=s.set(z(),!0):Oe(i.children,o=>{s=s.set(new K(o),!0)}),mi(n,new Zs(i.path,s,t))}else return[]}function gi(n,e,t){return mi(n,new zt(Io(),e,t))}function Jy(n,e,t){const i=J.fromObject(t);return mi(n,new Si(Io(),e,i))}function Zy(n,e){return mi(n,new Ti(Io(),e))}function ev(n,e,t){const i=Uo(n,t);if(i){const s=Vo(i),o=s.path,a=s.queryId,h=De(o,e),u=new Ti(ko(a),h);return qo(n,o,u)}else return[]}function zs(n,e,t,i,s=!1){const o=e._path,a=n.syncPointTree_.get(o);let h=[];if(a&&(e._queryIdentifier==="default"||Pu(a,e))){const u=Ky(a,e,t,i);Hy(a)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const d=u.removed;if(h=u.events,!s){const p=d.findIndex(v=>v._queryParams.loadsAllData())!==-1,m=n.syncPointTree_.findOnPath(o,(v,I)=>wt(I));if(p&&!m){const v=n.syncPointTree_.subtree(o);if(!v.isEmpty()){const I=iv(v);for(let k=0;k<I.length;++k){const x=I[k],P=x.query,Z=Vu(n,x);n.listenProvider_.startListening(yi(P),_i(n,P),Z.hashFn,Z.onComplete)}}}!m&&d.length>0&&!i&&(p?n.listenProvider_.stopListening(yi(e),null):d.forEach(v=>{const I=n.queryToTagMap.get(Hs(v));n.listenProvider_.stopListening(yi(v),I)}))}sv(n,d)}return h}function Mu(n,e,t,i){const s=Uo(n,i);if(s!=null){const o=Vo(s),a=o.path,h=o.queryId,u=De(a,e),d=new zt(ko(h),u,t);return qo(n,a,d)}else return[]}function tv(n,e,t,i){const s=Uo(n,i);if(s){const o=Vo(s),a=o.path,h=o.queryId,u=De(a,e),d=J.fromObject(t),p=new Si(ko(h),u,d);return qo(n,a,p)}else return[]}function Fo(n,e,t,i=!1){const s=e._path;let o=null,a=!1;n.syncPointTree_.foreachOnPath(s,(v,I)=>{const k=De(v,s);o=o||vt(I,k),a=a||wt(I)});let h=n.syncPointTree_.get(s);h?(a=a||wt(h),o=o||vt(h,z())):(h=new Ru,n.syncPointTree_=n.syncPointTree_.set(s,h));let u;o!=null?u=!0:(u=!1,o=L.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,I)=>{const k=vt(I,z());k&&(o=o.updateImmediateChild(v,k))}));const d=Pu(h,e);if(!d&&!e._queryParams.loadsAllData()){const v=Hs(e);A(!n.queryToTagMap.has(v),"View does not exist, but we have a tag");const I=rv();n.queryToTagMap.set(v,I),n.tagToQueryMap.set(I,v)}const p=Fs(n.pendingWriteTree_,s);let m=Gy(h,e,t,p,o,u);if(!d&&!a&&!i){const v=xu(h,e);m=m.concat(ov(n,e,v))}return m}function Lu(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const h=De(o,e),u=vt(a,h);if(u)return u});return _u(i,e,s,t,!0)}function nv(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(d,p)=>{const m=De(d,t);i=i||vt(p,m)});let s=n.syncPointTree_.get(t);s?i=i||vt(s,z()):(s=new Ru,n.syncPointTree_=n.syncPointTree_.set(t,s));const o=i!=null,a=o?new _t(i,!0,!1):null,h=Fs(n.pendingWriteTree_,e._path),u=Au(s,e,h,o?a.getNode():L.EMPTY_NODE,o);return Vy(u)}function mi(n,e){return Fu(e,n.syncPointTree_,null,Fs(n.pendingWriteTree_,z()))}function Fu(n,e,t,i){if(q(n.path))return Uu(n,e,t,i);{const s=e.get(z());t==null&&s!=null&&(t=vt(s,z()));let o=[];const a=V(n.path),h=n.operationForChild(a),u=e.children.get(a);if(u&&h){const d=t?t.getImmediateChild(a):null,p=vu(i,a);o=o.concat(Fu(h,u,d,p))}return s&&(o=o.concat(Lo(s,n,i,t))),o}}function Uu(n,e,t,i){const s=e.get(z());t==null&&s!=null&&(t=vt(s,z()));let o=[];return e.children.inorderTraversal((a,h)=>{const u=t?t.getImmediateChild(a):null,d=vu(i,a),p=n.operationForChild(a);p&&(o=o.concat(Uu(p,h,u,d)))}),s&&(o=o.concat(Lo(s,n,i,t))),o}function Vu(n,e){const t=e.query,i=_i(n,t);return{hashFn:()=>(Uy(e)||L.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?ev(n,t._path,i):Zy(n,t._path);{const o=e_(s,t);return zs(n,t,null,o)}}}}function _i(n,e){const t=Hs(e);return n.queryToTagMap.get(t)}function Hs(n){return n._path.toString()+"$"+n._queryIdentifier}function Uo(n,e){return n.tagToQueryMap.get(e)}function Vo(n){const e=n.indexOf("$");return A(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new K(n.substr(0,e))}}function qo(n,e,t){const i=n.syncPointTree_.get(e);A(i,"Missing sync point for query tag that we're tracking");const s=Fs(n.pendingWriteTree_,e);return Lo(i,t,s,null)}function iv(n){return n.fold((e,t,i)=>{if(t&&wt(t))return[js(t)];{let s=[];return t&&(s=Du(t)),Oe(i,(o,a)=>{s=s.concat(a)}),s}})}function yi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Qy())(n._repo,n._path):n}function sv(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Hs(i),o=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(o)}}}function rv(){return Yy++}function ov(n,e,t){const i=e._path,s=_i(n,e),o=Vu(n,t),a=n.listenProvider_.startListening(yi(e),s,o.hashFn,o.onComplete),h=n.syncPointTree_.subtree(i);if(s)A(!wt(h.value),"If we're adding a query, it shouldn't be shadowed");else{const u=h.fold((d,p,m)=>{if(!q(d)&&p&&wt(p))return[js(p).query];{let v=[];return p&&(v=v.concat(Du(p).map(I=>I.query))),Oe(m,(I,k)=>{v=v.concat(k)}),v}});for(let d=0;d<u.length;++d){const p=u[d];n.listenProvider_.stopListening(yi(p),_i(n,p))}}return a}/**
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
*/class ha{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ha(t)}node(){return this.node_}}class ca{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=he(this.path_,e);return new ca(this.syncTree_,t)}node(){return Lu(this.syncTree_,this.path_)}}const av=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},qu=function(n,e,t){if(!n||typeof n!="object")return n;if(A(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return lv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return hv(n[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},lv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:A(!1,"Unexpected server value: "+n)}},hv=function(n,e,t){n.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&A(!1,"Unexpected increment value: "+i);const s=e.node();if(A(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},cv=function(n,e,t,i){return Bo(e,new ca(t,n),i)},uv=function(n,e,t){return Bo(n,new ha(e),t)};function Bo(n,e,t){const i=n.getPriority().val(),s=qu(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const a=n,h=qu(a.getValue(),e,t);return h!==a.getValue()||s!==a.getPriority().val()?new ge(h,ye(s)):n}else{const a=n;return o=a,s!==a.getPriority().val()&&(o=o.updatePriority(new ge(s))),a.forEachChild(ie,(h,u)=>{const d=Bo(u,e.getImmediateChild(h),t);d!==u&&(o=o.updateImmediateChild(h,d))}),o}}/**
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
*/class jo{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function $o(n,e){let t=e instanceof K?e:new K(e),i=n,s=V(t);for(;s!==null;){const o=Yt(i.node.children,s)||{children:{},childCount:0};i=new jo(s,i,o),t=Q(t),s=V(t)}return i}function _n(n){return n.node.value}function Bu(n,e){n.node.value=e,zo(n)}function ju(n){return n.node.childCount>0}function dv(n){return _n(n)===void 0&&!ju(n)}function Gs(n,e){Oe(n.node.children,(t,i)=>{e(new jo(t,n,i))})}function $u(n,e,t,i){t&&!i&&e(n),Gs(n,s=>{$u(s,e,!0,i)}),t&&i&&e(n)}function fv(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function vi(n){return new K(n.parent===null?n.name:vi(n.parent)+"/"+n.name)}function zo(n){n.parent!==null&&pv(n.parent,n.name,n)}function pv(n,e,t){const i=dv(t),s=et(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,zo(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,zo(n))}/**
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
*/const gv=/[\[\].#$\/\u0000-\u001F\u007F]/,mv=/[\[\].#$\u0000-\u001F\u007F]/,Ho=10*1024*1024,zu=function(n){return typeof n=="string"&&n.length!==0&&!gv.test(n)},Hu=function(n){return typeof n=="string"&&n.length!==0&&!mv.test(n)},_v=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hu(n)},Gu=function(n,e,t){const i=t instanceof K?new P_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+qt(i));if(typeof e=="function")throw new Error(n+"contains a function "+qt(i)+" with contents = "+e.toString());if(mc(e))throw new Error(n+"contains "+e.toString()+" "+qt(i));if(typeof e=="string"&&e.length>Ho/3&&Xi(e)>Ho)throw new Error(n+"contains a string greater than "+Ho+" utf8 bytes "+qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(Oe(e,(a,h)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!zu(a)))throw new Error(n+" contains an invalid key ("+a+") "+qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);O_(i,a),Gu(n,h,i),M_(i)}),s&&o)throw new Error(n+' contains ".value" child '+qt(i)+" in addition to actual children.")}},Ku=function(n,e,t,i){if(!Hu(t))throw new Error(Sl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yv=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ku(n,e,t)},vv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!_v(t))throw new Error(Sl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
*/class wv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wu(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();t!==null&&!wo(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(s)}t&&n.eventLists_.push(t)}function Qu(n,e,t){Wu(n,t),Yu(n,i=>wo(i,e))}function Ct(n,e,t){Wu(n,t),Yu(n,i=>je(i,e)||je(e,i))}function Yu(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const o=s.path;e(o)?(Cv(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Cv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ni&&Ie("event: "+t.toString()),ri(i)}}}/**
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
*/const bv="repo_interrupt",Ev=25;class Tv{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Os(),this.transactionQueueTree_=new jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sv(n,e,t){if(n.stats_=yo(n.repoInfo_),n.forceRestClient_||s_())n.server_=new Js(n.repoInfo_,(i,s,o,a)=>{Ju(n,i,s,o,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Zu(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new rt(n.repoInfo_,e,(i,s,o,a)=>{Ju(n,i,s,o,a)},i=>{Zu(n,i)},i=>{kv(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=h_(n.repoInfo_,()=>new ly(n.stats_,n.server_)),n.infoData_=new iy,n.infoSyncTree_=new Ou({startListening:(i,s,o,a)=>{let h=[];const u=n.infoData_.getNode(i._path);return u.isEmpty()||(h=gi(n.infoSyncTree_,i._path,u),setTimeout(()=>{a("ok")},0)),h},stopListening:()=>{}}),Go(n,"connected",!1),n.serverSyncTree_=new Ou({startListening:(i,s,o,a)=>(n.server_.listen(i,o,s,(h,u)=>{const d=a(h,u);Ct(n.eventQueue_,i._path,d)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Iv(n){const e=n.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+e}function Xu(n){return av({timestamp:Iv(n)})}function Ju(n,e,t,i,s){n.dataUpdateCount++;const o=new K(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const u=Yi(t,d=>ye(d));a=tv(n.serverSyncTree_,o,u,s)}else{const u=ye(t);a=Mu(n.serverSyncTree_,o,u,s)}else if(i){const u=Yi(t,d=>ye(d));a=Jy(n.serverSyncTree_,o,u)}else{const u=ye(t);a=gi(n.serverSyncTree_,o,u)}let h=o;a.length>0&&(h=Qo(n,o)),Ct(n.eventQueue_,h,a)}function Zu(n,e){Go(n,"connected",e),e===!1&&Av(n)}function kv(n,e){Oe(e,(t,i)=>{Go(n,t,i)})}function Go(n,e,t){const i=new K("/.info/"+e),s=ye(t);n.infoData_.updateSnapshot(i,s);const o=gi(n.infoSyncTree_,i,s);Ct(n.eventQueue_,i,o)}function Nv(n){return n.nextWriteId_++}function Rv(n,e,t){const i=nv(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const o=ye(s).withIndex(e._queryParams.getIndex());Fo(n.serverSyncTree_,e,t,!0);let a;if(e._queryParams.loadsAllData())a=gi(n.serverSyncTree_,e._path,o);else{const h=_i(n.serverSyncTree_,e);a=Mu(n.serverSyncTree_,e._path,o,h)}return Ct(n.eventQueue_,e._path,a),zs(n.serverSyncTree_,e,t,null,!0),o},s=>(Ko(n,"get for query "+le(e)+" failed: "+s),Promise.reject(new Error(s))))}function Av(n){Ko(n,"onDisconnectEvents");const e=Xu(n),t=Os();So(n.onDisconnect_,z(),(s,o)=>{const a=cv(s,o,n.serverSyncTree_,e);lu(t,s,a)});let i=[];So(t,z(),(s,o)=>{i=i.concat(gi(n.serverSyncTree_,s,o));const a=Lv(n,s);Qo(n,a)}),n.onDisconnect_=Os(),Ct(n.eventQueue_,z(),i)}function Dv(n,e,t){let i;V(e._path)===".info"?i=Fo(n.infoSyncTree_,e,t):i=Fo(n.serverSyncTree_,e,t),Qu(n.eventQueue_,e._path,i)}function xv(n,e,t){let i;V(e._path)===".info"?i=zs(n.infoSyncTree_,e,t):i=zs(n.serverSyncTree_,e,t),Qu(n.eventQueue_,e._path,i)}function Pv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(bv)}function Ko(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ie(t,...e)}function ed(n,e,t){return Lu(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function Wo(n,e=n.transactionQueueTree_){if(e||Ks(n,e),_n(e)){const t=nd(n,e);A(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Ov(n,vi(e),t)}else ju(e)&&Gs(e,t=>{Wo(n,t)})}function Ov(n,e,t){const i=t.map(d=>d.currentWriteId),s=ed(n,e,i);let o=s;const a=s.hash();for(let d=0;d<t.length;d++){const p=t[d];A(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const m=De(e,p.path);o=o.updateChild(m,p.currentOutputSnapshotRaw)}const h=o.val(!0),u=e;n.server_.put(u.toString(),h,d=>{Ko(n,"transaction put response",{path:u.toString(),status:d});let p=[];if(d==="ok"){const m=[];for(let v=0;v<t.length;v++)t[v].status=2,p=p.concat(mn(n.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&m.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();Ks(n,$o(n.transactionQueueTree_,e)),Wo(n,n.transactionQueueTree_),Ct(n.eventQueue_,e,p);for(let v=0;v<m.length;v++)ri(m[v])}else{if(d==="datastale")for(let m=0;m<t.length;m++)t[m].status===3?t[m].status=4:t[m].status=0;else{Fe("transaction at "+u.toString()+" failed: "+d);for(let m=0;m<t.length;m++)t[m].status=4,t[m].abortReason=d}Qo(n,e)}},a)}function Qo(n,e){const t=td(n,e),i=vi(t),s=nd(n,t);return Mv(n,s,i),i}function Mv(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const h=e[a],u=De(t,h.path);let d=!1,p;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)d=!0,p=h.abortReason,s=s.concat(mn(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=Ev)d=!0,p="maxretry",s=s.concat(mn(n.serverSyncTree_,h.currentWriteId,!0));else{const m=ed(n,h.path,o);h.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){Gu("transaction failed: Data returned ",v,h.path);let I=ye(v);typeof v=="object"&&v!=null&&et(v,".priority")||(I=I.updatePriority(m.getPriority()));const k=h.currentWriteId,x=Xu(n),P=uv(I,m,x);h.currentOutputSnapshotRaw=I,h.currentOutputSnapshotResolved=P,h.currentWriteId=Nv(n),o.splice(o.indexOf(k),1),s=s.concat(Xy(n.serverSyncTree_,h.path,P,h.currentWriteId,h.applyLocally)),s=s.concat(mn(n.serverSyncTree_,k,!0))}else d=!0,p="nodata",s=s.concat(mn(n.serverSyncTree_,h.currentWriteId,!0))}Ct(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(p),!1,null))))}Ks(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)ri(i[a]);Wo(n,n.transactionQueueTree_)}function td(n,e){let t,i=n.transactionQueueTree_;for(t=V(e);t!==null&&_n(i)===void 0;)i=$o(i,t),e=Q(e),t=V(e);return i}function nd(n,e){const t=[];return id(n,e,t),t.sort((i,s)=>i.order-s.order),t}function id(n,e,t){const i=_n(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Gs(e,s=>{id(n,s,t)})}function Ks(n,e){const t=_n(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Bu(e,t.length>0?t:void 0)}Gs(e,i=>{Ks(n,i)})}function Lv(n,e){const t=vi(td(n,e)),i=$o(n.transactionQueueTree_,e);return fv(i,s=>{Yo(n,s)}),Yo(n,i),$u(i,s=>{Yo(n,s)}),t}function Yo(n,e){const t=_n(e);if(t){const i=[];let s=[],o=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(A(o===a-1,"All SENT items should be at beginning of queue."),o=a,t[a].status=3,t[a].abortReason="set"):(A(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(mn(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Bu(e,void 0):t.length=o+1,Ct(n.eventQueue_,vi(e),s);for(let a=0;a<i.length;a++)ri(i[a])}}/**
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
*/function Fv(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Uv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Fe(`Invalid query segment '${t}' in query '${n}'`)}return e}const sd=function(n,e){const t=Vv(n),i=t.namespace;t.domain==="firebase.com"&&nt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Qm();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Rc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new K(t.pathString)}},Vv=function(n){let e="",t="",i="",s="",o="",a=!0,h="https",u=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(h=n.substring(0,d-1),n=n.substring(d+2));let p=n.indexOf("/");p===-1&&(p=n.length);let m=n.indexOf("?");m===-1&&(m=n.length),e=n.substring(0,Math.min(p,m)),p<m&&(s=Fv(n.substring(p,m)));const v=Uv(n.substring(Math.min(n.length,m)));d=e.indexOf(":"),d>=0?(a=h==="https"||h==="wss",u=parseInt(e.substring(d+1),10)):d=e.length;const I=e.slice(0,d);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const k=e.indexOf(".");i=e.substring(0,k).toLowerCase(),t=e.substring(k+1),o=i}"ns"in v&&(o=v.ns)}return{host:e,port:u,domain:t,subdomain:i,secure:a,scheme:h,pathString:s,namespace:o}};/**
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
*/class qv{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class Bv{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
*/class rd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
*/class er{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return q(this._path)?null:Kc(this._path)}get ref(){return new st(this._repo,this._path)}get _queryIdentifier(){const e=au(this._queryParams),t=fo(e);return t==="{}"?"default":t}get _queryObject(){return au(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof er))return!1;const t=this._repo===e._repo,i=wo(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+x_(this._path)}}class st extends er{constructor(e,t){super(e,t,new la,!1)}get parent(){const e=Qc(this._path);return e===null?null:new st(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ii{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new K(e),i=Xo(this.ref,e);return new Ii(this._node.getChild(t),i,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(t,i)=>e(new Ii(i,Xo(this.ref,t),ie)))}hasChild(e){const t=new K(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jv(n,e){return n=Ae(n),n._checkNotDeleted("ref"),Xo(n._root,e)}function Xo(n,e){return n=Ae(n),V(n._path)===null?yv("child","path",e):Ku("child","path",e),new st(n._repo,he(n._path,e))}function $v(n){n=Ae(n);const e=new rd(()=>{}),t=new tr(e);return Rv(n._repo,n,t).then(i=>new Ii(i,new st(n._repo,n._path),n._queryParams.getIndex()))}class tr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new qv("value",this,new Ii(e.snapshotNode,new st(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Bv(this,e,t):null}matches(e){return e instanceof tr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zv(n,e,t,i,s){const o=new rd(t,void 0),a=new tr(o);return Dv(n._repo,n,a),()=>xv(n._repo,n,a)}function Hv(n,e,t,i){return zv(n,"value",e)}class Gv{}class Kv extends Gv{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new er(e._repo,e._path,ny(e._queryParams,this._limit),e._orderByCalled)}}function Wv(n){if(Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Kv(n)}function Qv(n,...e){let t=Ae(n);for(const i of e)t=i._apply(t);return t}$y(st),Wy(st);/**
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
*/const Yv="FIREBASE_DATABASE_EMULATOR_HOST",Jo={};let Xv=!1;function Jv(n,e,t,i){n.repoInfo_=new Rc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Zv(n,e,t,i,s){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=sd(o,s),h=a.repoInfo,u;typeof process<"u"&&hc&&(u=hc[Yv]),u?(o=`http://${u}?ns=${h.namespace}`,a=sd(o,s),h=a.repoInfo):a.repoInfo.secure;const d=new o_(n.name,n.options,e);vv("Invalid Firebase Database URL",a),q(a.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const p=tw(h,n,d,new r_(n.name,t));return new nw(p,n)}function ew(n,e){const t=Jo[e];(!t||t[n.key]!==n)&&nt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Pv(n),delete t[n.key]}function tw(n,e,t,i){let s=Jo[e.name];s||(s={},Jo[e.name]=s);let o=s[n.toURLString()];return o&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Tv(n,Xv,t,i),s[n.toURLString()]=o,o}class nw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new st(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ew(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function iw(n=Fr(),e){const t=Mr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=_l("database");i&&sw(t,...i)}return t}function sw(n,e,t,i={}){n=Ae(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ns(Ns.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:vl(i.mockUserToken,n.app.options.projectId);o=new Ns(a)}Jv(s,e,t,o)}/**
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
*/function rw(n){$m(Lr),Xt(new At("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Zv(i,s,o,t)},"PUBLIC").setMultipleInstances(!0)),dt(cc,uc,n),dt(cc,uc,"esm2017")}rt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)},rt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)},rw();export{$v as A,Hv as B,At as C,Nm as D,Rr as E,$t as F,iw as G,ip as H,Nl as I,Ji as L,Lr as S,Xt as _,wl as a,Zd as b,ep as c,Ae as d,uf as e,B as f,Yd as g,Qi as h,Nr as i,Ki as j,Jd as k,Mr as l,ml as m,Fr as n,Un as o,ef as p,Tl as q,dt as r,Ar as s,Im as t,Bm as u,qm as v,jm as w,jv as x,Qv as y,Wv as z};
