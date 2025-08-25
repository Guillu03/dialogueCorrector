import{r as m}from"./react-CKCdxiP2.js";var h={exports:{}},V={};/**
* @license React
* use-sync-external-store-with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var f=m;function y(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var E=typeof Object.is=="function"?Object.is:y,b=f.useSyncExternalStore,j=f.useRef,O=f.useEffect,g=f.useMemo,w=f.useDebugValue;V.useSyncExternalStoreWithSelector=function(r,n,s,i,l){var u=j(null);if(u.current===null){var t={hasValue:!1,value:null};u.current=t}else t=u.current;u=g(function(){function p(e){if(!x){if(x=!0,v=e,e=i(e),l!==void 0&&t.hasValue){var a=t.value;if(l(a,e))return o=a}return o=e}if(a=o,E(v,e))return a;var d=i(e);return l!==void 0&&l(a,d)?a:(v=e,o=d)}var x=!1,v,o,S=s===void 0?null:s;return[function(){return p(n())},S===null?void 0:function(){return p(S())}]},[n,s,i,l]);var c=b(r,u[0],u[1]);return O(function(){t.hasValue=!0,t.value=c},[c]),w(c),c},h.exports=V;var W=h.exports;export{W as w};
