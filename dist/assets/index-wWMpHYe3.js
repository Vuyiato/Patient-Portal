(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function F1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wv={exports:{}},Ou={},Ev={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),U1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),$1=Symbol.for("react.strict_mode"),z1=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),G1=Symbol.for("react.suspense"),K1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),yg=Symbol.iterator;function Y1(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var Iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tv=Object.assign,Sv={};function Ai(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||Iv}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xv(){}xv.prototype=Ai.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||Iv}var gf=mf.prototype=new xv;gf.constructor=mf;Tv(gf,Ai.prototype);gf.isPureReactComponent=!0;var _g=Array.isArray,Av=Object.prototype.hasOwnProperty,yf={current:null},Rv={key:!0,ref:!0,__self:!0,__source:!0};function Cv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Av.call(e,r)&&!Rv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:da,type:t,key:i,ref:o,props:s,_owner:yf.current}}function X1(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function J1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J1(""+t.key):e.toString(36)}function gl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case U1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Yc(o,0):r,_g(s)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),gl(s,e,n,"",function(c){return c})):s!=null&&(_f(s)&&(s=X1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(vg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",_g(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Yc(i,l);o+=gl(i,e,n,u,s)}else if(u=Y1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Yc(i,l++),o+=gl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],s=0;return gl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},yl={transition:null},eS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:yl,ReactCurrentOwner:yf};function Pv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ai;te.Fragment=B1;te.Profiler=z1;te.PureComponent=mf;te.StrictMode=$1;te.Suspense=G1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;te.act=Pv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=yf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Av.call(e,u)&&!Rv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:da,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:W1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H1,_context:t},t.Consumer=t};te.createElement=Cv;te.createFactory=function(t){var e=Cv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:q1,render:t}};te.isValidElement=_f;te.lazy=function(t){return{$$typeof:Q1,_payload:{_status:-1,_result:t},_init:Z1}};te.memo=function(t,e){return{$$typeof:K1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};te.unstable_act=Pv;te.useCallback=function(t,e){return ht.current.useCallback(t,e)};te.useContext=function(t){return ht.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};te.useEffect=function(t,e){return ht.current.useEffect(t,e)};te.useId=function(){return ht.current.useId()};te.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ht.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};te.useRef=function(t){return ht.current.useRef(t)};te.useState=function(t){return ht.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ht.current.useTransition()};te.version="18.3.1";Ev.exports=te;var V=Ev.exports;const kv=F1(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=V,nS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),sS=Object.prototype.hasOwnProperty,iS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function Nv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sS.call(e,r)&&!oS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:nS,type:t,key:i,ref:o,props:s,_owner:iS.current}}Ou.Fragment=rS;Ou.jsx=Nv;Ou.jsxs=Nv;wv.exports=Ou;var p=wv.exports,$h={},bv={exports:{}},kt={},Dv={exports:{}},Vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var Z=$.length;$.push(K);e:for(;0<Z;){var ce=Z-1>>>1,Re=$[ce];if(0<s(Re,K))$[ce]=K,$[Z]=Re,Z=ce;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],Z=$.pop();if(Z!==K){$[0]=Z;e:for(var ce=0,Re=$.length,qr=Re>>>1;ce<qr;){var bt=2*(ce+1)-1,Gr=$[bt],Wt=bt+1,Xn=$[Wt];if(0>s(Gr,Z))Wt<Re&&0>s(Xn,Gr)?($[ce]=Xn,$[Wt]=Z,ce=Wt):($[ce]=Gr,$[bt]=Z,ce=bt);else if(Wt<Re&&0>s(Xn,Z))$[ce]=Xn,$[Wt]=Z,ce=Wt;else break e}}return K}function s($,K){var Z=$.sortIndex-K.sortIndex;return Z!==0?Z:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,m=null,g=3,I=!1,x=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function D($){if(P=!1,T($),!x)if(n(u)!==null)x=!0,z(j);else{var K=n(c);K!==null&&ie(D,K.startTime-$)}}function j($,K){x=!1,P&&(P=!1,E(_),_=-1),I=!0;var Z=g;try{for(T(K),m=n(u);m!==null&&(!(m.expirationTime>K)||$&&!C());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,g=m.priorityLevel;var Re=ce(m.expirationTime<=K);K=t.unstable_now(),typeof Re=="function"?m.callback=Re:m===n(u)&&r(u),T(K)}else r(u);m=n(u)}if(m!==null)var qr=!0;else{var bt=n(c);bt!==null&&ie(D,bt.startTime-K),qr=!1}return qr}finally{m=null,g=Z,I=!1}}var U=!1,w=null,_=-1,S=5,R=-1;function C(){return!(t.unstable_now()-R<S)}function N(){if(w!==null){var $=t.unstable_now();R=$;var K=!0;try{K=w(!0,$)}finally{K?A():(U=!1,w=null)}}else U=!1}var A;if(typeof v=="function")A=function(){v(N)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ht=Oe.port2;Oe.port1.onmessage=N,A=function(){Ht.postMessage(null)}}else A=function(){k(N,0)};function z($){w=$,U||(U=!0,A())}function ie($,K){_=k(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,z(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Z=g;g=K;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return K()}finally{g=Z}},t.unstable_scheduleCallback=function($,K,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,$){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=Z+Re,$={id:d++,callback:K,priorityLevel:$,startTime:Z,expirationTime:Re,sortIndex:-1},Z>ce?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(E(_),_=-1):P=!0,ie(D,Z-ce))):($.sortIndex=Re,e(u,$),x||I||(x=!0,z(j))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var K=g;return function(){var Z=g;g=K;try{return $.apply(this,arguments)}finally{g=Z}}}})(Vv);Dv.exports=Vv;var aS=Dv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=V,Pt=aS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ov=new Set,Mo={};function Is(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Ov.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,uS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wg={},Eg={};function cS(t){return zh.call(Eg,t)?!0:zh.call(wg,t)?!1:uS.test(t)?Eg[t]=!0:(wg[t]=!0,!1)}function hS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dS(t,e,n,r){if(e===null||typeof e>"u"||hS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vf,wf);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vf,wf);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vf,wf);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,r){var s=Ke.hasOwnProperty(e)?Ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dS(e,n,s,r)&&(n=null),r||s===null?cS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Hh=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Wh=Symbol.for("react.suspense"),qh=Symbol.for("react.suspense_list"),Sf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),jv=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Xc;function ho(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var Jc=!1;function Zc(t,e){if(!t||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function fS(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function Gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Fs:return"Portal";case Hh:return"Profiler";case If:return"StrictMode";case Wh:return"Suspense";case qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mv:return(t.displayName||"Context")+".Consumer";case Lv:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sf:return e=t.displayName||null,e!==null?e:Gh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Gh(t(e))}catch{}}return null}function pS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gh(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(t){var e=Fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=mS(t))}function Uv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bv(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function Qh(t,e){Bv(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yh(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(fo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function $v(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,Hv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){gS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function Wv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Wv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var yS=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zh(t,e){if(e){if(yS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nd=null,Js=null,Zs=null;function Rg(t){if(t=ma(t)){if(typeof nd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Uu(e),nd(t.stateNode,t.type,e))}}function Gv(t){Js?Zs?Zs.push(t):Zs=[t]:Js=t}function Kv(){if(Js){var t=Js,e=Zs;if(Zs=Js=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function Qv(t,e){return t(e)}function Yv(){}var eh=!1;function Xv(t,e,n){if(eh)return t(e,n);eh=!0;try{return Qv(t,e,n)}finally{eh=!1,(Js!==null||Zs!==null)&&(Yv(),Kv())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var rd=!1;if(Fn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){rd=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{rd=!1}function _S(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var To=!1,Bl=null,$l=!1,sd=null,vS={onError:function(t){To=!0,Bl=t}};function wS(t,e,n,r,s,i,o,l,u){To=!1,Bl=null,_S.apply(vS,arguments)}function ES(t,e,n,r,s,i,o,l,u){if(wS.apply(this,arguments),To){if(To){var c=Bl;To=!1,Bl=null}else throw Error(F(198));$l||($l=!0,sd=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(Ts(t)!==t)throw Error(F(188))}function IS(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Cg(s),t;if(i===r)return Cg(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Zv(t){return t=IS(t),t!==null?ew(t):null}function ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ew(t);if(e!==null)return e;t=t.sibling}return null}var tw=Pt.unstable_scheduleCallback,Pg=Pt.unstable_cancelCallback,TS=Pt.unstable_shouldYield,SS=Pt.unstable_requestPaint,Pe=Pt.unstable_now,xS=Pt.unstable_getCurrentPriorityLevel,Af=Pt.unstable_ImmediatePriority,nw=Pt.unstable_UserBlockingPriority,zl=Pt.unstable_NormalPriority,AS=Pt.unstable_LowPriority,rw=Pt.unstable_IdlePriority,Lu=null,gn=null;function RS(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:kS,CS=Math.log,PS=Math.LN2;function kS(t){return t>>>=0,t===0?32:31-(CS(t)/PS|0)|0}var qa=64,Ga=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=po(l):(i&=o,i!==0&&(r=po(i)))}else o=n&~s,o!==0?r=po(o):i!==0&&(r=po(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),s=1<<n,r|=t[n],e&=~s;return r}function NS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Jt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=NS(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sw(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function DS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Jt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ue=0;function iw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ow,Cf,aw,lw,uw,od=!1,Ka=[],yr=null,_r=null,vr=null,Uo=new Map,Bo=new Map,lr=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function so(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ma(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function OS(t,e,n,r,s){switch(e){case"focusin":return yr=so(yr,t,e,n,r,s),!0;case"dragenter":return _r=so(_r,t,e,n,r,s),!0;case"mouseover":return vr=so(vr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Uo.set(i,so(Uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Bo.set(i,so(Bo.get(i)||null,t,e,n,r,s)),!0}return!1}function cw(t){var e=ns(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=Jv(n),e!==null){t.blockedOn=e,uw(t.priority,function(){aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);td=r,n.target.dispatchEvent(r),td=null}else return e=ma(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){_l(t)&&n.delete(e)}function LS(){od=!1,yr!==null&&_l(yr)&&(yr=null),_r!==null&&_l(_r)&&(_r=null),vr!==null&&_l(vr)&&(vr=null),Uo.forEach(Ng),Bo.forEach(Ng)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,LS)))}function $o(t){function e(s){return io(s,t)}if(0<Ka.length){io(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&io(yr,t),_r!==null&&io(_r,t),vr!==null&&io(vr,t),Uo.forEach(e),Bo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)cw(n),n.blockedOn===null&&lr.shift()}var ei=Kn.ReactCurrentBatchConfig,Wl=!0;function MS(t,e,n,r){var s=ue,i=ei.transition;ei.transition=null;try{ue=1,Pf(t,e,n,r)}finally{ue=s,ei.transition=i}}function jS(t,e,n,r){var s=ue,i=ei.transition;ei.transition=null;try{ue=4,Pf(t,e,n,r)}finally{ue=s,ei.transition=i}}function Pf(t,e,n,r){if(Wl){var s=ad(t,e,n,r);if(s===null)hh(t,e,r,ql,n),kg(t,r);else if(OS(s,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<VS.indexOf(t)){for(;s!==null;){var i=ma(s);if(i!==null&&ow(i),i=ad(t,e,n,r),i===null&&hh(t,e,r,ql,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else hh(t,e,r,null,n)}}var ql=null;function ad(t,e,n,r){if(ql=null,t=xf(r),t=ns(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function hw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xS()){case Af:return 1;case nw:return 4;case zl:case AS:return 16;case rw:return 536870912;default:return 16}default:return 16}}var fr=null,kf=null,vl=null;function dw(){if(vl)return vl;var t,e=kf,n=e.length,r,s="value"in fr?fr.value:fr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return vl=s.slice(t,1<r?1-r:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function bg(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qa:bg,this.isPropagationStopped=bg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=Nt(Ri),pa=Ie({},Ri,{view:0,detail:0}),FS=Nt(pa),nh,rh,oo,Mu=Ie({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(nh=t.screenX-oo.screenX,rh=t.screenY-oo.screenY):rh=nh=0,oo=t),nh)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),Dg=Nt(Mu),US=Ie({},Mu,{dataTransfer:0}),BS=Nt(US),$S=Ie({},pa,{relatedTarget:0}),sh=Nt($S),zS=Ie({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),HS=Nt(zS),WS=Ie({},Ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qS=Nt(WS),GS=Ie({},Ri,{data:0}),Vg=Nt(GS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YS[t])?!!e[t]:!1}function bf(){return XS}var JS=Ie({},pa,{key:function(t){if(t.key){var e=KS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=Nt(JS),ex=Ie({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Og=Nt(ex),tx=Ie({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),nx=Nt(tx),rx=Ie({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Nt(rx),ix=Ie({},Mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Nt(ix),ax=[9,13,27,32],Df=Fn&&"CompositionEvent"in window,So=null;Fn&&"documentMode"in document&&(So=document.documentMode);var lx=Fn&&"TextEvent"in window&&!So,fw=Fn&&(!Df||So&&8<So&&11>=So),Lg=" ",Mg=!1;function pw(t,e){switch(t){case"keyup":return ax.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function ux(t,e){switch(t){case"compositionend":return mw(e);case"keypress":return e.which!==32?null:(Mg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Mg?null:t;default:return null}}function cx(t,e){if(Bs)return t==="compositionend"||!Df&&pw(t,e)?(t=dw(),vl=kf=fr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fw&&e.locale!=="ko"?null:e.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hx[t.type]:e==="textarea"}function gw(t,e,n,r){Gv(r),e=Gl(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,zo=null;function dx(t){Rw(t,0)}function ju(t){var e=Hs(t);if(Uv(e))return t}function fx(t,e){if(t==="change")return e}var yw=!1;if(Fn){var ih;if(Fn){var oh="oninput"in document;if(!oh){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),oh=typeof Fg.oninput=="function"}ih=oh}else ih=!1;yw=ih&&(!document.documentMode||9<document.documentMode)}function Ug(){xo&&(xo.detachEvent("onpropertychange",_w),zo=xo=null)}function _w(t){if(t.propertyName==="value"&&ju(zo)){var e=[];gw(e,zo,t,xf(t)),Xv(dx,e)}}function px(t,e,n){t==="focusin"?(Ug(),xo=e,zo=n,xo.attachEvent("onpropertychange",_w)):t==="focusout"&&Ug()}function mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(zo)}function gx(t,e){if(t==="click")return ju(e)}function yx(t,e){if(t==="input"||t==="change")return ju(e)}function _x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:_x;function Ho(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!zh.call(e,s)||!nn(t[s],e[s]))return!1}return!0}function Bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $g(t,e){var n=Bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bg(n)}}function vw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ww(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vx(t){var e=ww(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vw(n.ownerDocument.documentElement,n)){if(r!==null&&Vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=$g(n,i);var o=$g(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wx=Fn&&"documentMode"in document&&11>=document.documentMode,$s=null,ld=null,Ao=null,ud=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||$s==null||$s!==Ul(r)||(r=$s,"selectionStart"in r&&Vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&Ho(Ao,r)||(Ao=r,r=Gl(ld,"onSelect"),0<r.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$s)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},ah={},Ew={};Fn&&(Ew=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Fu(t){if(ah[t])return ah[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ew)return ah[t]=e[n];return t}var Iw=Fu("animationend"),Tw=Fu("animationiteration"),Sw=Fu("animationstart"),xw=Fu("transitionend"),Aw=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Aw.set(t,e),Is(e,[t])}for(var lh=0;lh<Hg.length;lh++){var uh=Hg[lh],Ex=uh.toLowerCase(),Ix=uh[0].toUpperCase()+uh.slice(1);jr(Ex,"on"+Ix)}jr(Iw,"onAnimationEnd");jr(Tw,"onAnimationIteration");jr(Sw,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(xw,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ES(r,e,void 0,t),t.currentTarget=null}function Rw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Wg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Wg(s,l,c),i=u}}}if($l)throw t=sd,$l=!1,sd=null,t}function me(t,e){var n=e[pd];n===void 0&&(n=e[pd]=new Set);var r=t+"__bubble";n.has(r)||(Cw(e,t,2,!1),n.add(r))}function ch(t,e,n){var r=0;e&&(r|=4),Cw(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[Xa]){t[Xa]=!0,Ov.forEach(function(n){n!=="selectionchange"&&(Tx.has(n)||ch(n,!1,t),ch(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,ch("selectionchange",!1,e))}}function Cw(t,e,n,r){switch(hw(e)){case 1:var s=MS;break;case 4:s=jS;break;default:s=Pf}n=s.bind(null,e,n,t),s=void 0,!rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function hh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ns(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Xv(function(){var c=i,d=xf(n),m=[];e:{var g=Aw.get(t);if(g!==void 0){var I=Nf,x=t;switch(t){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":I=ZS;break;case"focusin":x="focus",I=sh;break;case"focusout":x="blur",I=sh;break;case"beforeblur":case"afterblur":I=sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=nx;break;case Iw:case Tw:case Sw:I=HS;break;case xw:I=sx;break;case"scroll":I=FS;break;case"wheel":I=ox;break;case"copy":case"cut":case"paste":I=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Og}var P=(e&4)!==0,k=!P&&t==="scroll",E=P?g!==null?g+"Capture":null:g;P=[];for(var v=c,T;v!==null;){T=v;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,E!==null&&(D=Fo(v,E),D!=null&&P.push(qo(v,D,T)))),k)break;v=v.return}0<P.length&&(g=new I(g,x,null,n,d),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==td&&(x=n.relatedTarget||n.fromElement)&&(ns(x)||x[Un]))break e;if((I||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=c,x=x?ns(x):null,x!==null&&(k=Ts(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=c),I!==x)){if(P=Dg,D="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Og,D="onPointerLeave",E="onPointerEnter",v="pointer"),k=I==null?g:Hs(I),T=x==null?g:Hs(x),g=new P(D,v+"leave",I,n,d),g.target=k,g.relatedTarget=T,D=null,ns(d)===c&&(P=new P(E,v+"enter",x,n,d),P.target=T,P.relatedTarget=k,D=P),k=D,I&&x)t:{for(P=I,E=x,v=0,T=P;T;T=Ds(T))v++;for(T=0,D=E;D;D=Ds(D))T++;for(;0<v-T;)P=Ds(P),v--;for(;0<T-v;)E=Ds(E),T--;for(;v--;){if(P===E||E!==null&&P===E.alternate)break t;P=Ds(P),E=Ds(E)}P=null}else P=null;I!==null&&qg(m,g,I,P,!1),x!==null&&k!==null&&qg(m,k,x,P,!0)}}e:{if(g=c?Hs(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var j=fx;else if(jg(g))if(yw)j=yx;else{j=mx;var U=px}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=gx);if(j&&(j=j(t,c))){gw(m,j,n,d);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Yh(g,"number",g.value)}switch(U=c?Hs(c):window,t){case"focusin":(jg(U)||U.contentEditable==="true")&&($s=U,ld=c,Ao=null);break;case"focusout":Ao=ld=$s=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,zg(m,n,d);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":zg(m,n,d)}var w;if(Df)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Bs?pw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(fw&&n.locale!=="ko"&&(Bs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Bs&&(w=dw()):(fr=d,kf="value"in fr?fr.value:fr.textContent,Bs=!0)),U=Gl(c,_),0<U.length&&(_=new Vg(_,t,null,n,d),m.push({event:_,listeners:U}),w?_.data=w:(w=mw(n),w!==null&&(_.data=w)))),(w=lx?ux(t,n):cx(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(d=new Vg("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=w))}Rw(m,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Fo(t,n),i!=null&&r.unshift(qo(t,i,s)),i=Fo(t,e),i!=null&&r.push(qo(t,i,s))),t=t.return}return r}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Fo(n,i),u!=null&&o.unshift(qo(n,u,l))):s||(u=Fo(n,i),u!=null&&o.push(qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(Sx,`
`).replace(xx,"")}function Ja(t,e,n){if(e=Gg(e),Gg(t)!==e&&n)throw Error(F(425))}function Kl(){}var cd=null,hd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(Cx)}:fd;function Cx(t){setTimeout(function(){throw t})}function dh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),$o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);$o(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ci,Go="__reactProps$"+Ci,Un="__reactContainer$"+Ci,pd="__reactEvents$"+Ci,Px="__reactListeners$"+Ci,kx="__reactHandles$"+Ci;function ns(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qg(t);t!==null;){if(n=t[pn])return n;t=Qg(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[pn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Uu(t){return t[Go]||null}var md=[],Ws=-1;function Fr(t){return{current:t}}function ye(t){0>Ws||(t.current=md[Ws],md[Ws]=null,Ws--)}function fe(t,e){Ws++,md[Ws]=t.current,t.current=e}var kr={},st=Fr(kr),_t=Fr(!1),hs=kr;function hi(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function Ql(){ye(_t),ye(st)}function Yg(t,e,n){if(st.current!==kr)throw Error(F(168));fe(st,e),fe(_t,n)}function Pw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,pS(t)||"Unknown",s));return Ie({},n,r)}function Yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,hs=st.current,fe(st,t),fe(_t,_t.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Pw(t,e,hs),r.__reactInternalMemoizedMergedChildContext=t,ye(_t),ye(st),fe(st,t)):ye(_t),fe(_t,n)}var kn=null,Bu=!1,fh=!1;function kw(t){kn===null?kn=[t]:kn.push(t)}function Nx(t){Bu=!0,kw(t)}function Ur(){if(!fh&&kn!==null){fh=!0;var t=0,e=ue;try{var n=kn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Bu=!1}catch(s){throw kn!==null&&(kn=kn.slice(t+1)),tw(Af,Ur),s}finally{ue=e,fh=!1}}return null}var qs=[],Gs=0,Xl=null,Jl=0,Vt=[],Ot=0,ds=null,Nn=1,bn="";function Zr(t,e){qs[Gs++]=Jl,qs[Gs++]=Xl,Xl=t,Jl=e}function Nw(t,e,n){Vt[Ot++]=Nn,Vt[Ot++]=bn,Vt[Ot++]=ds,ds=t;var r=Nn;t=bn;var s=32-Jt(r)-1;r&=~(1<<s),n+=1;var i=32-Jt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Nn=1<<32-Jt(e)+s|n<<s|r,bn=i+t}else Nn=1<<i|n<<s|r,bn=t}function Of(t){t.return!==null&&(Zr(t,1),Nw(t,1,0))}function Lf(t){for(;t===Xl;)Xl=qs[--Gs],qs[Gs]=null,Jl=qs[--Gs],qs[Gs]=null;for(;t===ds;)ds=Vt[--Ot],Vt[Ot]=null,bn=Vt[--Ot],Vt[Ot]=null,Nn=Vt[--Ot],Vt[Ot]=null}var Rt=null,St=null,_e=!1,Qt=null;function bw(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,St=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Nn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,St=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(_e){var e=St;if(e){var n=e;if(!Jg(t,e)){if(gd(t))throw Error(F(418));e=wr(n.nextSibling);var r=Rt;e&&Jg(t,e)?bw(r,n):(t.flags=t.flags&-4097|2,_e=!1,Rt=t)}}else{if(gd(t))throw Error(F(418));t.flags=t.flags&-4097|2,_e=!1,Rt=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Za(t){if(t!==Rt)return!1;if(!_e)return Zg(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=St)){if(gd(t))throw Dw(),Error(F(418));for(;e;)bw(t,e),e=wr(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Rt?wr(t.stateNode.nextSibling):null;return!0}function Dw(){for(var t=St;t;)t=wr(t.nextSibling)}function di(){St=Rt=null,_e=!1}function Mf(t){Qt===null?Qt=[t]:Qt.push(t)}var bx=Kn.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ey(t){var e=t._init;return e(t._payload)}function Vw(t){function e(E,v){if(t){var T=E.deletions;T===null?(E.deletions=[v],E.flags|=16):T.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function s(E,v){return E=Sr(E,v),E.index=0,E.sibling=null,E}function i(E,v,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<v?(E.flags|=2,v):T):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,T,D){return v===null||v.tag!==6?(v=wh(T,E.mode,D),v.return=E,v):(v=s(v,T),v.return=E,v)}function u(E,v,T,D){var j=T.type;return j===Us?d(E,v,T.props.children,D,T.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===or&&ey(j)===v.type)?(D=s(v,T.props),D.ref=ao(E,v,T),D.return=E,D):(D=Rl(T.type,T.key,T.props,null,E.mode,D),D.ref=ao(E,v,T),D.return=E,D)}function c(E,v,T,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Eh(T,E.mode,D),v.return=E,v):(v=s(v,T.children||[]),v.return=E,v)}function d(E,v,T,D,j){return v===null||v.tag!==7?(v=us(T,E.mode,D,j),v.return=E,v):(v=s(v,T),v.return=E,v)}function m(E,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wh(""+v,E.mode,T),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return T=Rl(v.type,v.key,v.props,null,E.mode,T),T.ref=ao(E,null,v),T.return=E,T;case Fs:return v=Eh(v,E.mode,T),v.return=E,v;case or:var D=v._init;return m(E,D(v._payload),T)}if(fo(v)||no(v))return v=us(v,E.mode,T,null),v.return=E,v;el(E,v)}return null}function g(E,v,T,D){var j=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:l(E,v,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case za:return T.key===j?u(E,v,T,D):null;case Fs:return T.key===j?c(E,v,T,D):null;case or:return j=T._init,g(E,v,j(T._payload),D)}if(fo(T)||no(T))return j!==null?null:d(E,v,T,D,null);el(E,T)}return null}function I(E,v,T,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(T)||null,l(v,E,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case za:return E=E.get(D.key===null?T:D.key)||null,u(v,E,D,j);case Fs:return E=E.get(D.key===null?T:D.key)||null,c(v,E,D,j);case or:var U=D._init;return I(E,v,T,U(D._payload),j)}if(fo(D)||no(D))return E=E.get(T)||null,d(v,E,D,j,null);el(v,D)}return null}function x(E,v,T,D){for(var j=null,U=null,w=v,_=v=0,S=null;w!==null&&_<T.length;_++){w.index>_?(S=w,w=null):S=w.sibling;var R=g(E,w,T[_],D);if(R===null){w===null&&(w=S);break}t&&w&&R.alternate===null&&e(E,w),v=i(R,v,_),U===null?j=R:U.sibling=R,U=R,w=S}if(_===T.length)return n(E,w),_e&&Zr(E,_),j;if(w===null){for(;_<T.length;_++)w=m(E,T[_],D),w!==null&&(v=i(w,v,_),U===null?j=w:U.sibling=w,U=w);return _e&&Zr(E,_),j}for(w=r(E,w);_<T.length;_++)S=I(w,E,_,T[_],D),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?_:S.key),v=i(S,v,_),U===null?j=S:U.sibling=S,U=S);return t&&w.forEach(function(C){return e(E,C)}),_e&&Zr(E,_),j}function P(E,v,T,D){var j=no(T);if(typeof j!="function")throw Error(F(150));if(T=j.call(T),T==null)throw Error(F(151));for(var U=j=null,w=v,_=v=0,S=null,R=T.next();w!==null&&!R.done;_++,R=T.next()){w.index>_?(S=w,w=null):S=w.sibling;var C=g(E,w,R.value,D);if(C===null){w===null&&(w=S);break}t&&w&&C.alternate===null&&e(E,w),v=i(C,v,_),U===null?j=C:U.sibling=C,U=C,w=S}if(R.done)return n(E,w),_e&&Zr(E,_),j;if(w===null){for(;!R.done;_++,R=T.next())R=m(E,R.value,D),R!==null&&(v=i(R,v,_),U===null?j=R:U.sibling=R,U=R);return _e&&Zr(E,_),j}for(w=r(E,w);!R.done;_++,R=T.next())R=I(w,E,_,R.value,D),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?_:R.key),v=i(R,v,_),U===null?j=R:U.sibling=R,U=R);return t&&w.forEach(function(N){return e(E,N)}),_e&&Zr(E,_),j}function k(E,v,T,D){if(typeof T=="object"&&T!==null&&T.type===Us&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case za:e:{for(var j=T.key,U=v;U!==null;){if(U.key===j){if(j=T.type,j===Us){if(U.tag===7){n(E,U.sibling),v=s(U,T.props.children),v.return=E,E=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===or&&ey(j)===U.type){n(E,U.sibling),v=s(U,T.props),v.ref=ao(E,U,T),v.return=E,E=v;break e}n(E,U);break}else e(E,U);U=U.sibling}T.type===Us?(v=us(T.props.children,E.mode,D,T.key),v.return=E,E=v):(D=Rl(T.type,T.key,T.props,null,E.mode,D),D.ref=ao(E,v,T),D.return=E,E=D)}return o(E);case Fs:e:{for(U=T.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(E,v.sibling),v=s(v,T.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Eh(T,E.mode,D),v.return=E,E=v}return o(E);case or:return U=T._init,k(E,v,U(T._payload),D)}if(fo(T))return x(E,v,T,D);if(no(T))return P(E,v,T,D);el(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(E,v.sibling),v=s(v,T),v.return=E,E=v):(n(E,v),v=wh(T,E.mode,D),v.return=E,E=v),o(E)):n(E,v)}return k}var fi=Vw(!0),Ow=Vw(!1),Zl=Fr(null),eu=null,Ks=null,jf=null;function Ff(){jf=Ks=eu=null}function Uf(t){var e=Zl.current;ye(Zl),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ti(t,e){eu=t,jf=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(eu===null)throw Error(F(308));Ks=t,eu.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var rs=null;function Bf(t){rs===null?rs=[t]:rs.push(t)}function Lw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Bf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Bn(t,n)}return s=r.interleaved,s===null?(e.next=e,Bf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Bn(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rf(t,n)}}function ty(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var s=t.updateQueue;ar=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,d=c=u=null,l=i;do{var g=l.lane,I=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(g=e,I=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(I,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,g=typeof x=="function"?x.call(I,m,g):x,g==null)break e;m=Ie({},m,g);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=m):d=d.next=I,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=m}}function ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ga={},yn=Fr(ga),Ko=Fr(ga),Qo=Fr(ga);function ss(t){if(t===ga)throw Error(F(174));return t}function zf(t,e){switch(fe(Qo,e),fe(Ko,t),fe(yn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jh(e,t)}ye(yn),fe(yn,e)}function pi(){ye(yn),ye(Ko),ye(Qo)}function jw(t){ss(Qo.current);var e=ss(yn.current),n=Jh(e,t.type);e!==n&&(fe(Ko,t),fe(yn,n))}function Hf(t){Ko.current===t&&(ye(yn),ye(Ko))}var we=Fr(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ph=[];function Wf(){for(var t=0;t<ph.length;t++)ph[t]._workInProgressVersionPrimary=null;ph.length=0}var Il=Kn.ReactCurrentDispatcher,mh=Kn.ReactCurrentBatchConfig,fs=0,Ee=null,Me=null,$e=null,ru=!1,Ro=!1,Yo=0,Dx=0;function Xe(){throw Error(F(321))}function qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Gf(t,e,n,r,s,i){if(fs=i,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?Mx:jx,t=n(r,s),Ro){i=0;do{if(Ro=!1,Yo=0,25<=i)throw Error(F(301));i+=1,$e=Me=null,e.updateQueue=null,Il.current=Fx,t=n(r,s)}while(Ro)}if(Il.current=su,e=Me!==null&&Me.next!==null,fs=0,$e=Me=Ee=null,ru=!1,e)throw Error(F(300));return t}function Kf(){var t=Yo!==0;return Yo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ee.memoizedState=$e=t:$e=$e.next=t,$e}function Ut(){if(Me===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?Ee.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(F(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Ee.memoizedState=$e=t:$e=$e.next=t}return $e}function Xo(t,e){return typeof e=="function"?e(t):e}function gh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Me,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var d=c.lane;if((fs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=d,ps|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ee.lanes|=i,ps|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);nn(i,e.memoizedState)||(yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Fw(){}function Uw(t,e){var n=Ee,r=Ut(),s=e(),i=!nn(r.memoizedState,s);if(i&&(r.memoizedState=s,yt=!0),r=r.queue,Qf(zw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Jo(9,$w.bind(null,n,r,s,e),void 0,null),ze===null)throw Error(F(349));fs&30||Bw(n,e,s)}return s}function Bw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $w(t,e,n,r){e.value=n,e.getSnapshot=r,Hw(e)&&Ww(t)}function zw(t,e,n){return n(function(){Hw(e)&&Ww(t)})}function Hw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Ww(t){var e=Bn(t,1);e!==null&&Zt(e,t,1,-1)}function ry(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=Lx.bind(null,Ee,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qw(){return Ut().memoizedState}function Tl(t,e,n,r){var s=dn();Ee.flags|=t,s.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var s=Ut();r=r===void 0?null:r;var i=void 0;if(Me!==null){var o=Me.memoizedState;if(i=o.destroy,r!==null&&qf(r,o.deps)){s.memoizedState=Jo(e,n,i,r);return}}Ee.flags|=t,s.memoizedState=Jo(1|e,n,i,r)}function sy(t,e){return Tl(8390656,8,t,e)}function Qf(t,e){return $u(2048,8,t,e)}function Gw(t,e){return $u(4,2,t,e)}function Kw(t,e){return $u(4,4,t,e)}function Qw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yw(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,Qw.bind(null,e,t),n)}function Yf(){}function Xw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zw(t,e,n){return fs&21?(nn(n,e)||(n=sw(),Ee.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function Vx(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=mh.transition;mh.transition={};try{t(!1),e()}finally{ue=n,mh.transition=r}}function e0(){return Ut().memoizedState}function Ox(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t0(t))n0(e,n);else if(n=Lw(t,e,n,r),n!==null){var s=ut();Zt(n,t,r,s),r0(n,e,r)}}function Lx(t,e,n){var r=Tr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(t))n0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(s.next=s,Bf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Lw(t,e,s,r),n!==null&&(s=ut(),Zt(n,t,r,s),r0(n,e,r))}}function t0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function n0(t,e){Ro=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rf(t,n)}}var su={readContext:Ft,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Mx={readContext:Ft,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:sy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,Qw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ox.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:ry,useDebugValue:Yf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=ry(!1),e=t[0];return t=Vx.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,s=dn();if(_e){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));fs&30||Bw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,sy(zw.bind(null,r,i,t),[t]),r.flags|=2048,Jo(9,$w.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=dn(),e=ze.identifierPrefix;if(_e){var n=bn,r=Nn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jx={readContext:Ft,useCallback:Xw,useContext:Ft,useEffect:Qf,useImperativeHandle:Yw,useInsertionEffect:Gw,useLayoutEffect:Kw,useMemo:Jw,useReducer:gh,useRef:qw,useState:function(){return gh(Xo)},useDebugValue:Yf,useDeferredValue:function(t){var e=Ut();return Zw(e,Me.memoizedState,t)},useTransition:function(){var t=gh(Xo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:Uw,useId:e0,unstable_isNewReconciler:!1},Fx={readContext:Ft,useCallback:Xw,useContext:Ft,useEffect:Qf,useImperativeHandle:Yw,useInsertionEffect:Gw,useLayoutEffect:Kw,useMemo:Jw,useReducer:yh,useRef:qw,useState:function(){return yh(Xo)},useDebugValue:Yf,useDeferredValue:function(t){var e=Ut();return Me===null?e.memoizedState=t:Zw(e,Me.memoizedState,t)},useTransition:function(){var t=yh(Xo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:Uw,useId:e0,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zu={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),s=Tr(t),i=On(r,s);i.payload=e,n!=null&&(i.callback=n),e=Er(t,i,s),e!==null&&(Zt(e,t,s,r),El(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),s=Tr(t),i=On(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Er(t,i,s),e!==null&&(Zt(e,t,s,r),El(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=Tr(t),s=On(n,r);s.tag=2,e!=null&&(s.callback=e),e=Er(t,s,r),e!==null&&(Zt(e,t,r,n),El(e,t,r))}};function iy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,r)||!Ho(s,i):!0}function s0(t,e,n){var r=!1,s=kr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ft(i):(s=vt(e)?hs:st.current,r=e.contextTypes,i=(r=r!=null)?hi(t,s):kr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function oy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zu.enqueueReplaceState(e,e.state,null)}function wd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},$f(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ft(i):(i=vt(e)?hs:st.current,s.context=hi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(vd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&zu.enqueueReplaceState(s,s.state,null),tu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,e){try{var n="",r=e;do n+=fS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function _h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function i0(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,Nd=r),Ed(t,e)},n}function o0(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ed(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ay(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ux;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=eA.bind(null,t,e,n),e.then(t,t))}function ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var Bx=Kn.ReactCurrentOwner,yt=!1;function lt(t,e,n,r){e.child=t===null?Ow(e,null,n,r):fi(e,t.child,n,r)}function cy(t,e,n,r,s){n=n.render;var i=e.ref;return ti(e,s),r=Gf(t,e,n,r,i,s),n=Kf(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$n(t,e,s)):(_e&&n&&Of(e),e.flags|=1,lt(t,e,r,s),e.child)}function hy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!sp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,a0(t,e,i,r,s)):(t=Rl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&t.ref===e.ref)return $n(t,e,s)}return e.flags|=1,t=Sr(i,r),t.ref=e.ref,t.return=e,e.child=t}function a0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ho(i,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,$n(t,e,s)}return Id(t,e,n,r,s)}function l0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ys,Tt),Tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ys,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Ys,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(Ys,Tt),Tt|=r;return lt(t,e,s,n),e.child}function u0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,r,s){var i=vt(n)?hs:st.current;return i=hi(e,i),ti(e,s),n=Gf(t,e,n,r,i,s),r=Kf(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$n(t,e,s)):(_e&&r&&Of(e),e.flags|=1,lt(t,e,n,s),e.child)}function dy(t,e,n,r,s){if(vt(n)){var i=!0;Yl(e)}else i=!1;if(ti(e,s),e.stateNode===null)Sl(t,e),s0(e,n,r),wd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=vt(n)?hs:st.current,c=hi(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&oy(e,o,r,c),ar=!1;var g=e.memoizedState;o.state=g,tu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||_t.current||ar?(typeof d=="function"&&(vd(e,n,d,r),u=e.memoizedState),(l=ar||iy(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Gt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=vt(n)?hs:st.current,u=hi(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&oy(e,o,r,u),ar=!1,g=e.memoizedState,o.state=g,tu(e,r,o,s);var x=e.memoizedState;l!==m||g!==x||_t.current||ar?(typeof I=="function"&&(vd(e,n,I,r),x=e.memoizedState),(c=ar||iy(e,n,c,r,g,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,i,s)}function Td(t,e,n,r,s,i){u0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Xg(e,n,!1),$n(t,e,i);r=e.stateNode,Bx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fi(e,t.child,null,i),e.child=fi(e,null,l,i)):lt(t,e,l,i),e.memoizedState=r.state,s&&Xg(e,n,!0),e.child}function c0(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),zf(t,e.containerInfo)}function fy(t,e,n,r,s){return di(),Mf(s),e.flags|=256,lt(t,e,n,r),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function h0(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(we,s&1),t===null)return yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=qu(o,r,0,null),t=us(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=xd(n),e.memoizedState=Sd,t):Xf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return $x(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Sr(l,i):(i=us(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Sd,r}return i=t.child,t=i.sibling,r=Sr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xf(t,e){return e=qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Mf(r),fi(e,t.child,null,n),t=Xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $x(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=_h(Error(F(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=qu({mode:"visible",children:r.children},s,0,null),i=us(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&fi(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=Sd,i);if(!(e.mode&1))return tl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=_h(i,r,void 0),tl(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Bn(t,s),Zt(r,t,s,-1))}return rp(),r=_h(Error(F(421))),tl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=tA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,St=wr(s.nextSibling),Rt=e,_e=!0,Qt=null,t!==null&&(Vt[Ot++]=Nn,Vt[Ot++]=bn,Vt[Ot++]=ds,Nn=t.id,bn=t.overflow,ds=e),e=Xf(e,r.children),e.flags|=4096,e)}function py(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_d(t.return,e,n)}function vh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function d0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(lt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,n,e);else if(t.tag===19)py(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),vh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&nu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}vh(e,!0,n,null,i);break;case"together":vh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zx(t,e,n){switch(e.tag){case 3:c0(e),di();break;case 5:jw(e);break;case 1:vt(e.type)&&Yl(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(Zl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?h0(t,e,n):(fe(we,we.current&1),t=$n(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return d0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,l0(t,e,n)}return $n(t,e,n)}var f0,Ad,p0,m0;f0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};p0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ss(yn.current);var i=null;switch(n){case"input":s=Kh(t,s),r=Kh(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=Xh(t,s),r=Xh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}Zh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};m0=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hx(t,e,n){var r=e.pendingProps;switch(Lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return vt(e.type)&&Ql(),Je(e),null;case 3:return r=e.stateNode,pi(),ye(_t),ye(st),Wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Vd(Qt),Qt=null))),Ad(t,e),Je(e),null;case 5:Hf(e);var s=ss(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)p0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Je(e),null}if(t=ss(yn.current),Za(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[pn]=e,r[Go]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<mo.length;s++)me(mo[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Tg(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":xg(r,i),me("invalid",r)}Zh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ja(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ja(r.textContent,l,t),s=["children",""+l]):Mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ha(r),Sg(r,i,!0);break;case"textarea":Ha(r),Ag(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Go]=r,f0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ed(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<mo.length;s++)me(mo[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":Tg(t,r),s=Kh(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),me("invalid",t);break;case"textarea":xg(t,r),s=Xh(t,r),me("invalid",t);break;default:s=r}Zh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?qv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",t):u!=null&&Ef(t,i,u,o))}switch(n){case"input":Ha(t),Sg(t,r,!1);break;case"textarea":Ha(t),Ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Xs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ss(Qo.current),ss(yn.current),Za(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(i=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return Je(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&St!==null&&e.mode&1&&!(e.flags&128))Dw(),di(),e.flags|=98560,i=!1;else if(i=Za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[pn]=e}else di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),i=!1}else Qt!==null&&(Vd(Qt),Qt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?je===0&&(je=3):rp())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return pi(),Ad(t,e),t===null&&Wo(e.stateNode.containerInfo),Je(e),null;case 10:return Uf(e.type._context),Je(e),null;case 17:return vt(e.type)&&Ql(),Je(e),null;case 19:if(ye(we),i=e.memoizedState,i===null)return Je(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)lo(i,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,lo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pe()>gi&&(e.flags|=128,r=!0,lo(i,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return Je(e),null}else 2*Pe()-i.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,lo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pe(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return np(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Wx(t,e){switch(Lf(e),e.tag){case 1:return vt(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),ye(_t),ye(st),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hf(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return pi(),null;case 10:return Uf(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var nl=!1,tt=!1,qx=typeof WeakSet=="function"?WeakSet:Set,q=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Rd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var my=!1;function Gx(t,e){if(cd=Wl,t=ww(),Vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,m=t,g=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++d===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},Wl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,k=x.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Gt(e.type,P),k);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=my,my=!1,x}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Rd(e,n,i)}s=s.next}while(s!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g0(t){var e=t.alternate;e!==null&&(t.alternate=null,g0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Go],delete e[pd],delete e[Px],delete e[kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y0(t){return t.tag===5||t.tag===3||t.tag===4}function gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}var He=null,Kt=!1;function sr(t,e,n){for(n=n.child;n!==null;)_0(t,e,n),n=n.sibling}function _0(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:tt||Qs(n,e);case 6:var r=He,s=Kt;He=null,sr(t,e,n),He=r,Kt=s,He!==null&&(Kt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Kt?(t=He,n=n.stateNode,t.nodeType===8?dh(t.parentNode,n):t.nodeType===1&&dh(t,n),$o(t)):dh(He,n.stateNode));break;case 4:r=He,s=Kt,He=n.stateNode.containerInfo,Kt=!0,sr(t,e,n),He=r,Kt=s;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Rd(n,e,o),s=s.next}while(s!==r)}sr(t,e,n);break;case 1:if(!tt&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,sr(t,e,n),tt=r):sr(t,e,n);break;default:sr(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qx),e.forEach(function(r){var s=nA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Kt=!1;break e;case 3:He=l.stateNode.containerInfo,Kt=!0;break e;case 4:He=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(He===null)throw Error(F(160));_0(i,o,s),He=null,Kt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ae(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)v0(e,t),e=e.sibling}function v0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),hn(t),r&4){try{Co(3,t,t.return),Hu(3,t)}catch(P){Ae(t,t.return,P)}try{Co(5,t,t.return)}catch(P){Ae(t,t.return,P)}}break;case 1:qt(e,t),hn(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(qt(e,t),hn(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var s=t.stateNode;try{jo(s,"")}catch(P){Ae(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Bv(s,i),ed(l,o);var c=ed(l,i);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?qv(s,m):d==="dangerouslySetInnerHTML"?Hv(s,m):d==="children"?jo(s,m):Ef(s,d,m,c)}switch(l){case"input":Qh(s,i);break;case"textarea":$v(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Xs(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?Xs(s,!!i.multiple,i.defaultValue,!0):Xs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Go]=i}catch(P){Ae(t,t.return,P)}}break;case 6:if(qt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ae(t,t.return,P)}}break;case 3:if(qt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(P){Ae(t,t.return,P)}break;case 4:qt(e,t),hn(t);break;case 13:qt(e,t),hn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ep=Pe())),r&4&&yy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,qt(e,t),tt=c):qt(e,t),hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(m=q=d;q!==null;){switch(g=q,I=g.child,g.tag){case 0:case 11:case 14:case 15:Co(4,g,g.return);break;case 1:Qs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Ae(r,n,P)}}break;case 5:Qs(g,g.return);break;case 22:if(g.memoizedState!==null){vy(m);continue}}I!==null?(I.return=g,q=I):vy(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Wv("display",o))}catch(P){Ae(t,t.return,P)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ae(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qt(e,t),hn(t),r&4&&yy(t);break;case 21:break;default:qt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(jo(s,""),r.flags&=-33);var i=gy(t);kd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gy(t);Pd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kx(t,e,n){q=t,w0(t)}function w0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||nl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tt;l=nl;var c=tt;if(nl=o,(tt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?wy(s):u!==null?(u.return=o,q=u):wy(s);for(;i!==null;)q=i,w0(i),i=i.sibling;q=s,nl=l,tt=c}_y(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):_y(t)}}function _y(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ny(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ny(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&$o(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&Cd(e)}catch(g){Ae(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function vy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function wy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{Cd(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{Cd(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var Qx=Math.ceil,iu=Kn.ReactCurrentDispatcher,Jf=Kn.ReactCurrentOwner,jt=Kn.ReactCurrentBatchConfig,ae=0,ze=null,be=null,Ge=0,Tt=0,Ys=Fr(0),je=0,Zo=null,ps=0,Wu=0,Zf=0,Po=null,pt=null,ep=0,gi=1/0,Pn=null,ou=!1,Nd=null,Ir=null,rl=!1,pr=null,au=0,ko=0,bd=null,xl=-1,Al=0;function ut(){return ae&6?Pe():xl!==-1?xl:xl=Pe()}function Tr(t){return t.mode&1?ae&2&&Ge!==0?Ge&-Ge:bx.transition!==null?(Al===0&&(Al=sw()),Al):(t=ue,t!==0||(t=window.event,t=t===void 0?16:hw(t.type)),t):1}function Zt(t,e,n,r){if(50<ko)throw ko=0,bd=null,Error(F(185));fa(t,n,r),(!(ae&2)||t!==ze)&&(t===ze&&(!(ae&2)&&(Wu|=n),je===4&&ur(t,Ge)),wt(t,r),n===1&&ae===0&&!(e.mode&1)&&(gi=Pe()+500,Bu&&Ur()))}function wt(t,e){var n=t.callbackNode;bS(t,e);var r=Hl(t,t===ze?Ge:0);if(r===0)n!==null&&Pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pg(n),e===1)t.tag===0?Nx(Ey.bind(null,t)):kw(Ey.bind(null,t)),Rx(function(){!(ae&6)&&Ur()}),n=null;else{switch(iw(r)){case 1:n=Af;break;case 4:n=nw;break;case 16:n=zl;break;case 536870912:n=rw;break;default:n=zl}n=C0(n,E0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E0(t,e){if(xl=-1,Al=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(ni()&&t.callbackNode!==n)return null;var r=Hl(t,t===ze?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var s=ae;ae|=2;var i=T0();(ze!==t||Ge!==e)&&(Pn=null,gi=Pe()+500,ls(t,e));do try{Jx();break}catch(l){I0(t,l)}while(!0);Ff(),iu.current=i,ae=s,be!==null?e=0:(ze=null,Ge=0,e=je)}if(e!==0){if(e===2&&(s=id(t),s!==0&&(r=s,e=Dd(t,s))),e===1)throw n=Zo,ls(t,0),ur(t,r),wt(t,Pe()),n;if(e===6)ur(t,r);else{if(s=t.current.alternate,!(r&30)&&!Yx(s)&&(e=lu(t,r),e===2&&(i=id(t),i!==0&&(r=i,e=Dd(t,i))),e===1))throw n=Zo,ls(t,0),ur(t,r),wt(t,Pe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:es(t,pt,Pn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=ep+500-Pe(),10<e)){if(Hl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=fd(es.bind(null,t,pt,Pn),e);break}es(t,pt,Pn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Jt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qx(r/1960))-r,10<r){t.timeoutHandle=fd(es.bind(null,t,pt,Pn),r);break}es(t,pt,Pn);break;case 5:es(t,pt,Pn);break;default:throw Error(F(329))}}}return wt(t,Pe()),t.callbackNode===n?E0.bind(null,t):null}function Dd(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=lu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Vd(e)),t}function Vd(t){pt===null?pt=t:pt.push.apply(pt,t)}function Yx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!nn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Zf,e&=~Wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Ey(t){if(ae&6)throw Error(F(327));ni();var e=Hl(t,0);if(!(e&1))return wt(t,Pe()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=id(t);r!==0&&(e=r,n=Dd(t,r))}if(n===1)throw n=Zo,ls(t,0),ur(t,e),wt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,pt,Pn),wt(t,Pe()),null}function tp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(gi=Pe()+500,Bu&&Ur())}}function ms(t){pr!==null&&pr.tag===0&&!(ae&6)&&ni();var e=ae;ae|=1;var n=jt.transition,r=ue;try{if(jt.transition=null,ue=1,t)return t()}finally{ue=r,jt.transition=n,ae=e,!(ae&6)&&Ur()}}function np(){Tt=Ys.current,ye(Ys)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ax(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:pi(),ye(_t),ye(st),Wf();break;case 5:Hf(r);break;case 4:pi();break;case 13:ye(we);break;case 19:ye(we);break;case 10:Uf(r.type._context);break;case 22:case 23:np()}n=n.return}if(ze=t,be=t=Sr(t.current,null),Ge=Tt=e,je=0,Zo=null,Zf=Wu=ps=0,pt=Po=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}rs=null}return t}function I0(t,e){do{var n=be;try{if(Ff(),Il.current=su,ru){for(var r=Ee.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ru=!1}if(fs=0,$e=Me=Ee=null,Ro=!1,Yo=0,Jf.current=null,n===null||n.return===null){je=1,Zo=e,be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=ly(o);if(I!==null){I.flags&=-257,uy(I,o,l,i,e),I.mode&1&&ay(i,c,e),e=I,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){ay(i,c,e),rp();break e}u=Error(F(426))}}else if(_e&&l.mode&1){var k=ly(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),uy(k,o,l,i,e),Mf(mi(u,l));break e}}i=u=mi(u,l),je!==4&&(je=2),Po===null?Po=[i]:Po.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=i0(i,u,e);ty(i,E);break e;case 1:l=u;var v=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Ir===null||!Ir.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=o0(i,l,e);ty(i,D);break e}}i=i.return}while(i!==null)}x0(n)}catch(j){e=j,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function T0(){var t=iu.current;return iu.current=su,t===null?su:t}function rp(){(je===0||je===3||je===2)&&(je=4),ze===null||!(ps&268435455)&&!(Wu&268435455)||ur(ze,Ge)}function lu(t,e){var n=ae;ae|=2;var r=T0();(ze!==t||Ge!==e)&&(Pn=null,ls(t,e));do try{Xx();break}catch(s){I0(t,s)}while(!0);if(Ff(),ae=n,iu.current=r,be!==null)throw Error(F(261));return ze=null,Ge=0,je}function Xx(){for(;be!==null;)S0(be)}function Jx(){for(;be!==null&&!TS();)S0(be)}function S0(t){var e=R0(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?x0(t):be=e,Jf.current=null}function x0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Wx(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,be=null;return}}else if(n=Hx(n,e,Tt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);je===0&&(je=5)}function es(t,e,n){var r=ue,s=jt.transition;try{jt.transition=null,ue=1,Zx(t,e,n,r)}finally{jt.transition=s,ue=r}return null}function Zx(t,e,n,r){do ni();while(pr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(DS(t,i),t===ze&&(be=ze=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,C0(zl,function(){return ni(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=jt.transition,jt.transition=null;var o=ue;ue=1;var l=ae;ae|=4,Jf.current=null,Gx(t,n),v0(n,t),vx(hd),Wl=!!cd,hd=cd=null,t.current=n,Kx(n),SS(),ae=l,ue=o,jt.transition=i}else t.current=n;if(rl&&(rl=!1,pr=t,au=s),i=t.pendingLanes,i===0&&(Ir=null),RS(n.stateNode),wt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ou)throw ou=!1,t=Nd,Nd=null,t;return au&1&&t.tag!==0&&ni(),i=t.pendingLanes,i&1?t===bd?ko++:(ko=0,bd=t):ko=0,Ur(),null}function ni(){if(pr!==null){var t=iw(au),e=jt.transition,n=ue;try{if(jt.transition=null,ue=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,au=0,ae&6)throw Error(F(331));var s=ae;for(ae|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Co(8,d,i)}var m=d.child;if(m!==null)m.return=d,q=m;else for(;q!==null;){d=q;var g=d.sibling,I=d.return;if(g0(d),d===c){q=null;break}if(g!==null){g.return=I,q=g;break}q=I}}}var x=i.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Co(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,q=E;break e}q=i.return}}var v=t.current;for(q=v;q!==null;){o=q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,q=T;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hu(9,l)}}catch(j){Ae(l,l.return,j)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(ae=s,Ur(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{ue=n,jt.transition=e}}return!1}function Iy(t,e,n){e=mi(n,e),e=i0(t,e,1),t=Er(t,e,1),e=ut(),t!==null&&(fa(t,1,e),wt(t,e))}function Ae(t,e,n){if(t.tag===3)Iy(t,t,n);else for(;e!==null;){if(e.tag===3){Iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=mi(n,t),t=o0(e,t,1),e=Er(e,t,1),t=ut(),e!==null&&(fa(e,1,t),wt(e,t));break}}e=e.return}}function eA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ge&n)===n&&(je===4||je===3&&(Ge&130023424)===Ge&&500>Pe()-ep?ls(t,0):Zf|=n),wt(t,e)}function A0(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=ut();t=Bn(t,e),t!==null&&(fa(t,e,n),wt(t,n))}function tA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A0(t,n)}function nA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),A0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,zx(t,e,n);yt=!!(t.flags&131072)}else yt=!1,_e&&e.flags&1048576&&Nw(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sl(t,e),t=e.pendingProps;var s=hi(e,st.current);ti(e,n),s=Gf(null,e,r,t,s,n);var i=Kf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,Yl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$f(e),s.updater=zu,e.stateNode=s,s._reactInternals=e,wd(e,r,t,n),e=Td(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&Of(e),lt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=sA(r),t=Gt(r,t),s){case 0:e=Id(null,e,r,t,n);break e;case 1:e=dy(null,e,r,t,n);break e;case 11:e=cy(null,e,r,t,n);break e;case 14:e=hy(null,e,r,Gt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),Id(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),dy(t,e,r,s,n);case 3:e:{if(c0(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Mw(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=mi(Error(F(423)),e),e=fy(t,e,r,n,s);break e}else if(r!==s){s=mi(Error(F(424)),e),e=fy(t,e,r,n,s);break e}else for(St=wr(e.stateNode.containerInfo.firstChild),Rt=e,_e=!0,Qt=null,n=Ow(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===s){e=$n(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return jw(e),t===null&&yd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,dd(r,s)?o=null:i!==null&&dd(r,i)&&(e.flags|=32),u0(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&yd(e),null;case 13:return h0(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),cy(t,e,r,s,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(Zl,r._currentValue),r._currentValue=o,i!==null)if(nn(i.value,o)){if(i.children===s.children&&!_t.current){e=$n(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=On(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_d(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_d(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}lt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ti(e,n),s=Ft(s),r=r(s),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,s=Gt(r,e.pendingProps),s=Gt(r.type,s),hy(t,e,r,s,n);case 15:return a0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),Sl(t,e),e.tag=1,vt(r)?(t=!0,Yl(e)):t=!1,ti(e,n),s0(e,r,s),wd(e,r,s,n),Td(null,e,r,!0,t,n);case 19:return d0(t,e,n);case 22:return l0(t,e,n)}throw Error(F(156,e.tag))};function C0(t,e){return tw(t,e)}function rA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new rA(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sA(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===Sf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Us:return us(n.children,s,i,e);case If:o=8,s|=8;break;case Hh:return t=Mt(12,n,e,s|2),t.elementType=Hh,t.lanes=i,t;case Wh:return t=Mt(13,n,e,s),t.elementType=Wh,t.lanes=i,t;case qh:return t=Mt(19,n,e,s),t.elementType=qh,t.lanes=i,t;case jv:return qu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lv:o=10;break e;case Mv:o=9;break e;case Tf:o=11;break e;case Sf:o=14;break e;case or:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function us(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function qu(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=jv,t.lanes=n,t.stateNode={isHidden:!1},t}function wh(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=th(0),this.expirationTimes=th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=th(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ip(t,e,n,r,s,i,o,l,u){return t=new iA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Mt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(i),t}function oA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P0(t){if(!t)return kr;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(vt(n))return Pw(t,n,e)}return e}function k0(t,e,n,r,s,i,o,l,u){return t=ip(n,r,!0,t,s,i,o,l,u),t.context=P0(null),n=t.current,r=ut(),s=Tr(n),i=On(r,s),i.callback=e??null,Er(n,i,s),t.current.lanes=s,fa(t,s,r),wt(t,r),t}function Gu(t,e,n,r){var s=e.current,i=ut(),o=Tr(s);return n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=On(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(s,e,o),t!==null&&(Zt(t,s,o,i),El(t,s,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function op(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function aA(){return null}var N0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ap(t){this._internalRoot=t}Ku.prototype.render=ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Gu(t,e,null,null)};Ku.prototype.unmount=ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){Gu(null,t,null,null)}),e[Un]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=lw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&cw(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function lA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=uu(o);i.call(c)}}var o=k0(e,r,t,0,null,!1,!1,"",Sy);return t._reactRootContainer=o,t[Un]=o.current,Wo(t.nodeType===8?t.parentNode:t),ms(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=uu(u);l.call(c)}}var u=ip(t,0,!1,null,null,!1,!1,"",Sy);return t._reactRootContainer=u,t[Un]=u.current,Wo(t.nodeType===8?t.parentNode:t),ms(function(){Gu(e,u,n,r)}),u}function Yu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=uu(o);l.call(u)}}Gu(e,o,t,s)}else o=lA(n,e,t,s,r);return uu(o)}ow=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Rf(e,n|1),wt(e,Pe()),!(ae&6)&&(gi=Pe()+500,Ur()))}break;case 13:ms(function(){var r=Bn(t,1);if(r!==null){var s=ut();Zt(r,t,1,s)}}),op(t,1)}};Cf=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=ut();Zt(e,t,134217728,n)}op(t,134217728)}};aw=function(t){if(t.tag===13){var e=Tr(t),n=Bn(t,e);if(n!==null){var r=ut();Zt(n,t,e,r)}op(t,e)}};lw=function(){return ue};uw=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};nd=function(t,e,n){switch(e){case"input":if(Qh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Uu(r);if(!s)throw Error(F(90));Uv(r),Qh(r,s)}}}break;case"textarea":$v(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};Qv=tp;Yv=ms;var uA={usingClientEntryPoint:!1,Events:[ma,Hs,Uu,Gv,Kv,tp]},uo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cA={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zv(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||aA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Lu=sl.inject(cA),gn=sl}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uA;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(F(200));return oA(t,e,null,n)};kt.createRoot=function(t,e){if(!lp(t))throw Error(F(299));var n=!1,r="",s=N0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ip(t,1,!1,null,null,n,!1,r,s),t[Un]=e.current,Wo(t.nodeType===8?t.parentNode:t),new ap(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Zv(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return ms(t)};kt.hydrate=function(t,e,n){if(!Qu(e))throw Error(F(200));return Yu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!lp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=N0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k0(e,null,t,1,n??null,s,!1,i,o),t[Un]=e.current,Wo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ku(e)};kt.render=function(t,e,n){if(!Qu(e))throw Error(F(200));return Yu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(F(40));return t._reactRootContainer?(ms(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};kt.unstable_batchedUpdates=tp;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Yu(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bv.exports=kt;var hA=bv.exports,xy=hA;$h.createRoot=xy.createRoot,$h.hydrateRoot=xy.hydrateRoot;/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ay="popstate";function dA(t={}){function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Od("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ea(s)}return pA(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fA(){return Math.random().toString(36).substring(2,10)}function Ry(t,e){return{usr:t.state,key:t.key,idx:e}}function Od(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Pi(e):e,state:n,key:e&&e.key||r||fA()}}function ea({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Pi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function pA(t,e,n,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function m(){l="POP";let k=d(),E=k==null?null:k-c;c=k,u&&u({action:l,location:P.location,delta:E})}function g(k,E){l="PUSH";let v=Od(P.location,k,E);c=d()+1;let T=Ry(v,c),D=P.createHref(v);try{o.pushState(T,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(D)}i&&u&&u({action:l,location:P.location,delta:1})}function I(k,E){l="REPLACE";let v=Od(P.location,k,E);c=d();let T=Ry(v,c),D=P.createHref(v);o.replaceState(T,"",D),i&&u&&u({action:l,location:P.location,delta:0})}function x(k){return mA(k)}let P={get action(){return l},get location(){return t(s,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Ay,m),u=k,()=>{s.removeEventListener(Ay,m),u=null}},createHref(k){return e(s,k)},createURL:x,encodeLocation(k){let E=x(k);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:I,go(k){return o.go(k)}};return P}function mA(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ve(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:ea(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function D0(t,e,n="/"){return gA(t,e,n,!1)}function gA(t,e,n,r){let s=typeof e=="string"?Pi(e):e,i=zn(s.pathname||"/",n);if(i==null)return null;let o=V0(t);yA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=CA(i);l=AA(o[u],c,r)}return l}function V0(t,e=[],n=[],r="",s=!1){let i=(o,l,u=s,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;ve(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let m=Ln([r,d.relativePath]),g=n.concat(d);o.children&&o.children.length>0&&(ve(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),V0(o.children,e,g,m,u)),!(o.path==null&&!o.index)&&e.push({path:m,score:SA(m,o.index),routesMeta:g})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,l);else for(let c of O0(o.path))i(o,l,!0,c)}),e}function O0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=O0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function yA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var _A=/^:[\w-]+$/,vA=3,wA=2,EA=1,IA=10,TA=-2,Cy=t=>t==="*";function SA(t,e){let n=t.split("/"),r=n.length;return n.some(Cy)&&(r+=TA),e&&(r+=wA),n.filter(s=>!Cy(s)).reduce((s,i)=>s+(_A.test(i)?vA:i===""?EA:IA),r)}function xA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function AA(t,e,n=!1){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",m=cu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=cu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:Ln([i,m.pathname]),pathnameBase:bA(Ln([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=Ln([i,m.pathnameBase]))}return o}function cu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RA(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:m},g)=>{if(d==="*"){let x=l[g]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const I=l[g];return m&&!I?c[d]=void 0:c[d]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function RA(t,e=!1,n=!0){rn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function CA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function zn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function PA(t,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Pi(t):t;return{pathname:n?n.startsWith("/")?n:kA(n,e):e,search:DA(r),hash:VA(s)}}function kA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ih(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function up(t){let e=NA(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function cp(t,e,n,r=!1){let s;typeof t=="string"?s=Pi(t):(s={...t},ve(!s.pathname||!s.pathname.includes("?"),Ih("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),Ih("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),Ih("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=PA(s,l),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var Ln=t=>t.join("/").replace(/\/\/+/g,"/"),bA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var L0=["POST","PUT","PATCH","DELETE"];new Set(L0);var LA=["GET",...L0];new Set(LA);var ki=V.createContext(null);ki.displayName="DataRouter";var Xu=V.createContext(null);Xu.displayName="DataRouterState";V.createContext(!1);var M0=V.createContext({isTransitioning:!1});M0.displayName="ViewTransition";var MA=V.createContext(new Map);MA.displayName="Fetchers";var jA=V.createContext(null);jA.displayName="Await";var an=V.createContext(null);an.displayName="Navigation";var ya=V.createContext(null);ya.displayName="Location";var ln=V.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var hp=V.createContext(null);hp.displayName="RouteError";function FA(t,{relative:e}={}){ve(Ni(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=V.useContext(an),{hash:s,pathname:i,search:o}=_a(t,{relative:e}),l=i;return n!=="/"&&(l=i==="/"?n:Ln([n,i])),r.createHref({pathname:l,search:o,hash:s})}function Ni(){return V.useContext(ya)!=null}function Br(){return ve(Ni(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(ya).location}var j0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function F0(t){V.useContext(an).static||V.useLayoutEffect(t)}function U0(){let{isDataRoute:t}=V.useContext(ln);return t?eR():UA()}function UA(){ve(Ni(),"useNavigate() may be used only in the context of a <Router> component.");let t=V.useContext(ki),{basename:e,navigator:n}=V.useContext(an),{matches:r}=V.useContext(ln),{pathname:s}=Br(),i=JSON.stringify(up(r)),o=V.useRef(!1);return F0(()=>{o.current=!0}),V.useCallback((u,c={})=>{if(rn(o.current,j0),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=cp(u,JSON.parse(i),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ln([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,i,s,t])}var BA=V.createContext(null);function $A(t){let e=V.useContext(ln).outlet;return V.useMemo(()=>e&&V.createElement(BA.Provider,{value:t},e),[e,t])}function _a(t,{relative:e}={}){let{matches:n}=V.useContext(ln),{pathname:r}=Br(),s=JSON.stringify(up(n));return V.useMemo(()=>cp(t,JSON.parse(s),r,e==="path"),[t,s,r,e])}function zA(t,e){return B0(t,e)}function B0(t,e,n,r,s){var v;ve(Ni(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=V.useContext(an),{matches:o}=V.useContext(ln),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",m=l&&l.route;{let T=m&&m.path||"";$0(c,!m||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let g=Br(),I;if(e){let T=typeof e=="string"?Pi(e):e;ve(d==="/"||((v=T.pathname)==null?void 0:v.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${T.pathname}" was given in the \`location\` prop.`),I=T}else I=g;let x=I.pathname||"/",P=x;if(d!=="/"){let T=d.replace(/^\//,"").split("/");P="/"+x.replace(/^\//,"").split("/").slice(T.length).join("/")}let k=D0(t,{pathname:P});rn(m||k!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),rn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=KA(k&&k.map(T=>Object.assign({},T,{params:Object.assign({},u,T.params),pathname:Ln([d,i.encodeLocation?i.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?d:Ln([d,i.encodeLocation?i.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),o,n,r,s);return e&&E?V.createElement(ya.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},E):E}function HA(){let t=ZA(),e=OA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:i},"ErrorBoundary")," or"," ",V.createElement("code",{style:i},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:s},n):null,o)}var WA=V.createElement(HA,null),qA=class extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?V.createElement(ln.Provider,{value:this.props.routeContext},V.createElement(hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function GA({routeContext:t,match:e,children:n}){let r=V.useContext(ki);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(ln.Provider,{value:t},n)}function KA(t,e=[],n=null,r=null,s=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);ve(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let l=!1,u=-1;if(n)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:m,errors:g}=n,I=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||I){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,d,m)=>{let g,I=!1,x=null,P=null;n&&(g=o&&d.route.id?o[d.route.id]:void 0,x=d.route.errorElement||WA,l&&(u<0&&m===0?($0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,P=null):u===m&&(I=!0,P=d.route.hydrateFallbackElement||null)));let k=e.concat(i.slice(0,m+1)),E=()=>{let v;return g?v=x:I?v=P:d.route.Component?v=V.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,V.createElement(GA,{match:d,routeContext:{outlet:c,matches:k,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?V.createElement(qA,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:E(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:r}):E()},null)}function dp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QA(t){let e=V.useContext(ki);return ve(e,dp(t)),e}function YA(t){let e=V.useContext(Xu);return ve(e,dp(t)),e}function XA(t){let e=V.useContext(ln);return ve(e,dp(t)),e}function fp(t){let e=XA(t),n=e.matches[e.matches.length-1];return ve(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function JA(){return fp("useRouteId")}function ZA(){var r;let t=V.useContext(hp),e=YA("useRouteError"),n=fp("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function eR(){let{router:t}=QA("useNavigate"),e=fp("useNavigate"),n=V.useRef(!1);return F0(()=>{n.current=!0}),V.useCallback(async(s,i={})=>{rn(n.current,j0),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...i}))},[t,e])}var Py={};function $0(t,e,n){!e&&!Py[t]&&(Py[t]=!0,rn(!1,n))}V.memo(tR);function tR({routes:t,future:e,state:n,unstable_onError:r}){return B0(t,void 0,n,r,e)}function pp({to:t,replace:e,state:n,relative:r}){ve(Ni(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=V.useContext(an);rn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=V.useContext(ln),{pathname:o}=Br(),l=U0(),u=cp(t,up(i),o,r==="path"),c=JSON.stringify(u);return V.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function nR(t){return $A(t.context)}function Dt(t){ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:i=!1}){ve(!Ni(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=V.useMemo(()=>({basename:o,navigator:s,static:i,future:{}}),[o,s,i]);typeof n=="string"&&(n=Pi(n));let{pathname:u="/",search:c="",hash:d="",state:m=null,key:g="default"}=n,I=V.useMemo(()=>{let x=zn(u,o);return x==null?null:{location:{pathname:x,search:c,hash:d,state:m,key:g},navigationType:r}},[o,u,c,d,m,g,r]);return rn(I!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:V.createElement(an.Provider,{value:l},V.createElement(ya.Provider,{children:e,value:I}))}function z0({children:t,location:e}){return zA(Ld(t),e)}function Ld(t,e=[]){let n=[];return V.Children.forEach(t,(r,s)=>{if(!V.isValidElement(r))return;let i=[...e,s];if(r.type===V.Fragment){n.push.apply(n,Ld(r.props.children,i));return}ve(r.type===Dt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ve(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ld(r.props.children,i)),n.push(o)}),n}var Cl="get",Pl="application/x-www-form-urlencoded";function Ju(t){return t!=null&&typeof t.tagName=="string"}function sR(t){return Ju(t)&&t.tagName.toLowerCase()==="button"}function iR(t){return Ju(t)&&t.tagName.toLowerCase()==="form"}function oR(t){return Ju(t)&&t.tagName.toLowerCase()==="input"}function aR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lR(t,e){return t.button===0&&(!e||e==="_self")&&!aR(t)}var il=null;function uR(){if(il===null)try{new FormData(document.createElement("form"),0),il=!1}catch{il=!0}return il}var cR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Th(t){return t!=null&&!cR.has(t)?(rn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pl}"`),null):t}function hR(t,e){let n,r,s,i,o;if(iR(t)){let l=t.getAttribute("action");r=l?zn(l,e):null,n=t.getAttribute("method")||Cl,s=Th(t.getAttribute("enctype"))||Pl,i=new FormData(t)}else if(sR(t)||oR(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?zn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Cl,s=Th(t.getAttribute("formenctype"))||Th(l.getAttribute("enctype"))||Pl,i=new FormData(l,t),!uR()){let{name:c,type:d,value:m}=t;if(d==="image"){let g=c?`${c}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else c&&i.append(c,m)}}else{if(Ju(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cl,r=null,s=Pl,o=t}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function dR(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&zn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function fR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pR(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function mR(t,e,n){let r=await Promise.all(t.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await fR(i,n);return o.links?o.links():[]}return[]}));return vR(r.flat(1).filter(pR).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function ky(t,e,n,r,s,i){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return i==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):i==="data"?e.filter((u,c)=>{var m;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function gR(t,e,{includeHydrateFallback:n}={}){return yR(t.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function yR(t){return[...new Set(t)]}function _R(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function vR(t,e){let n=new Set;return new Set(e),t.reduce((r,s)=>{let i=JSON.stringify(_R(s));return n.has(i)||(n.add(i),r.push({key:i,link:s})),r},[])}function H0(){let t=V.useContext(ki);return mp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function wR(){let t=V.useContext(Xu);return mp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gp=V.createContext(void 0);gp.displayName="FrameworkContext";function W0(){let t=V.useContext(gp);return mp(t,"You must render this element inside a <HydratedRouter> element"),t}function ER(t,e){let n=V.useContext(gp),[r,s]=V.useState(!1),[i,o]=V.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:m}=e,g=V.useRef(null);V.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let P=E=>{E.forEach(v=>{o(v.isIntersecting)})},k=new IntersectionObserver(P,{threshold:.5});return g.current&&k.observe(g.current),()=>{k.disconnect()}}},[t]),V.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let I=()=>{s(!0)},x=()=>{s(!1),o(!1)};return n?t!=="intent"?[i,g,{}]:[i,g,{onFocus:co(l,I),onBlur:co(u,x),onMouseEnter:co(c,I),onMouseLeave:co(d,x),onTouchStart:co(m,I)}]:[!1,g,{}]}function co(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function IR({page:t,...e}){let{router:n}=H0(),r=V.useMemo(()=>D0(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?V.createElement(SR,{page:t,matches:r,...e}):null}function TR(t){let{manifest:e,routeModules:n}=W0(),[r,s]=V.useState([]);return V.useEffect(()=>{let i=!1;return mR(t,e,n).then(o=>{i||s(o)}),()=>{i=!0}},[t,e,n]),r}function SR({page:t,matches:e,...n}){let r=Br(),{manifest:s,routeModules:i}=W0(),{basename:o}=H0(),{loaderData:l,matches:u}=wR(),c=V.useMemo(()=>ky(t,e,u,s,r,"data"),[t,e,u,s,r]),d=V.useMemo(()=>ky(t,e,u,s,r,"assets"),[t,e,u,s,r]),m=V.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let x=new Set,P=!1;if(e.forEach(E=>{var T;let v=s.routes[E.route.id];!v||!v.hasLoader||(!c.some(D=>D.route.id===E.route.id)&&E.route.id in l&&((T=i[E.route.id])!=null&&T.shouldRevalidate)||v.hasClientLoader?P=!0:x.add(E.route.id))}),x.size===0)return[];let k=dR(t,o,"data");return P&&x.size>0&&k.searchParams.set("_routes",e.filter(E=>x.has(E.route.id)).map(E=>E.route.id).join(",")),[k.pathname+k.search]},[o,l,r,s,c,e,t,i]),g=V.useMemo(()=>gR(d,s),[d,s]),I=TR(d);return V.createElement(V.Fragment,null,m.map(x=>V.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),g.map(x=>V.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),I.map(({key:x,link:P})=>V.createElement("link",{key:x,nonce:n.nonce,...P})))}function xR(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var q0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{q0&&(window.__reactRouterVersion="7.9.5")}catch{}function AR({basename:t,children:e,window:n}){let r=V.useRef();r.current==null&&(r.current=dA({window:n,v5Compat:!0}));let s=r.current,[i,o]=V.useState({action:s.action,location:s.location}),l=V.useCallback(u=>{V.startTransition(()=>o(u))},[o]);return V.useLayoutEffect(()=>s.listen(l),[s,l]),V.createElement(rR,{basename:t,children:e,location:i.location,navigationType:i.action,navigator:s})}var G0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K0=V.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:m,...g},I){let{basename:x}=V.useContext(an),P=typeof c=="string"&&G0.test(c),k,E=!1;if(typeof c=="string"&&P&&(k=c,q0))try{let S=new URL(window.location.href),R=c.startsWith("//")?new URL(S.protocol+c):new URL(c),C=zn(R.pathname,x);R.origin===S.origin&&C!=null?c=C+R.search+R.hash:E=!0}catch{rn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=FA(c,{relative:s}),[T,D,j]=ER(r,g),U=PR(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:s,viewTransition:m});function w(S){e&&e(S),S.defaultPrevented||U(S)}let _=V.createElement("a",{...g,...j,href:k||v,onClick:E||i?e:w,ref:xR(I,D),target:u,"data-discover":!P&&n==="render"?"true":void 0});return T&&!P?V.createElement(V.Fragment,null,_,V.createElement(IR,{page:v})):_});K0.displayName="Link";var Q0=V.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:l,children:u,...c},d){let m=_a(o,{relative:c.relative}),g=Br(),I=V.useContext(Xu),{navigator:x,basename:P}=V.useContext(an),k=I!=null&&VR(m)&&l===!0,E=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,v=g.pathname,T=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(v=v.toLowerCase(),T=T?T.toLowerCase():null,E=E.toLowerCase()),T&&P&&(T=zn(T,P)||T);const D=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let j=v===E||!s&&v.startsWith(E)&&v.charAt(D)==="/",U=T!=null&&(T===E||!s&&T.startsWith(E)&&T.charAt(E.length)==="/"),w={isActive:j,isPending:U,isTransitioning:k},_=j?e:void 0,S;typeof r=="function"?S=r(w):S=[r,j?"active":null,U?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let R=typeof i=="function"?i(w):i;return V.createElement(K0,{...c,"aria-current":_,className:S,ref:d,style:R,to:o,viewTransition:l},typeof u=="function"?u(w):u)});Q0.displayName="NavLink";var RR=V.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:i,method:o=Cl,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:m,...g},I)=>{let x=bR(),P=DR(l,{relative:c}),k=o.toLowerCase()==="get"?"get":"post",E=typeof l=="string"&&G0.test(l),v=T=>{if(u&&u(T),T.defaultPrevented)return;T.preventDefault();let D=T.nativeEvent.submitter,j=(D==null?void 0:D.getAttribute("formmethod"))||o;x(D||T.currentTarget,{fetcherKey:e,method:j,navigate:n,replace:s,state:i,relative:c,preventScrollReset:d,viewTransition:m})};return V.createElement("form",{ref:I,method:k,action:P,onSubmit:r?u:v,...g,"data-discover":!E&&t==="render"?"true":void 0})});RR.displayName="Form";function CR(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y0(t){let e=V.useContext(ki);return ve(e,CR(t)),e}function PR(t,{target:e,replace:n,state:r,preventScrollReset:s,relative:i,viewTransition:o}={}){let l=U0(),u=Br(),c=_a(t,{relative:i});return V.useCallback(d=>{if(lR(d,e)){d.preventDefault();let m=n!==void 0?n:ea(u)===ea(c);l(t,{replace:m,state:r,preventScrollReset:s,relative:i,viewTransition:o})}},[u,l,c,n,r,e,t,s,i,o])}var kR=0,NR=()=>`__${String(++kR)}__`;function bR(){let{router:t}=Y0("useSubmit"),{basename:e}=V.useContext(an),n=JA();return V.useCallback(async(r,s={})=>{let{action:i,method:o,encType:l,formData:u,body:c}=hR(r,e);if(s.navigate===!1){let d=s.fetcherKey||NR();await t.fetch(d,n,s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:c,formMethod:s.method||o,formEncType:s.encType||l,flushSync:s.flushSync})}else await t.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:c,formMethod:s.method||o,formEncType:s.encType||l,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function DR(t,{relative:e}={}){let{basename:n}=V.useContext(an),r=V.useContext(ln);ve(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={..._a(t||".",{relative:e})},o=Br();if(t==null){i.search=o.search;let l=new URLSearchParams(i.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(m=>m).forEach(m=>l.append("index",m));let d=l.toString();i.search=d?`?${d}`:""}}return(!t||t===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:Ln([n,i.pathname])),ea(i)}function VR(t,{relative:e}={}){let n=V.useContext(M0);ve(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Y0("useViewTransitionState"),s=_a(t,{relative:e});if(!n.isTransitioning)return!1;let i=zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return cu(s.pathname,o)!=null||cu(s.pathname,i)!=null}const OR=()=>{};var Ny={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},LR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},J0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[d],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new MR;const g=i<<2|l>>4;if(r.push(g),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jR=function(t){const e=X0(t);return J0.encodeByteArray(e,!0)},hu=function(t){return jR(t).replace(/\./g,"")},Z0=function(t){try{return J0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UR=()=>FR().__FIREBASE_DEFAULTS__,BR=()=>{if(typeof process>"u"||typeof Ny>"u")return;const t=Ny.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$R=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Z0(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return OR()||UR()||BR()||$R()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=t=>{var e,n;return(n=(e=Zu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},tE=t=>{const e=eE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nE=()=>{var t;return(t=Zu())==null?void 0:t.config},rE=t=>{var e;return(e=Zu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function sE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[hu(JSON.stringify(n)),hu(JSON.stringify(o)),""].join(".")}const No={};function HR(){const t={prod:[],emulator:[]};for(const e of Object.keys(No))No[e]?t.emulator.push(e):t.prod.push(e);return t}function WR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let by=!1;function _p(t,e){if(typeof window>"u"||typeof document>"u"||!Ss(window.location.host)||No[t]===e||No[t]||by)return;No[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=HR().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{by=!0,o()},g}function d(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=WR(r),I=n("text"),x=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),k=document.getElementById(P)||document.createElement("a"),E=n("preprendIcon"),v=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const T=g.element;l(T),d(k,P);const D=c();u(v,E),T.append(v,x,k,D),document.body.appendChild(T)}i?(x.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function GR(){var e;const t=(e=Zu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YR(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XR(){return!GR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function JR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZR,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eC(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new zt(s,l,r)}}function eC(t,e){return t.replace(tC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tC=/\{\$([^}]+)}/g;function nC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dy(i)&&Dy(o)){if(!Nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rC(t,e){const n=new sC(t,e);return n.subscribe.bind(n)}class sC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sh),s.error===void 0&&(s.error=Sh),s.complete===void 0&&(s.complete=Sh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sh(){}/**
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
 */const oC=1e3,aC=2,lC=4*60*60*1e3,uC=.5;function Vy(t,e=oC,n=aC){const r=e*Math.pow(n,t),s=Math.round(uC*r*(Math.random()-.5)*2);return Math.min(lC,r+s)}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class cC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dC(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hC(t){return t===ts?void 0:t}function dC(t){return t.instantiationMode==="EAGER"}/**
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
 */class fC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const pC={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},mC=ne.INFO,gC={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=mC,this._logHandler=yC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const _C=(t,e)=>e.some(n=>t instanceof n);let Oy,Ly;function vC(){return Oy||(Oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wC(){return Ly||(Ly=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,Md=new WeakMap,uE=new WeakMap,xh=new WeakMap,vp=new WeakMap;function EC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lE.set(n,t)}).catch(()=>{}),vp.set(e,t),e}function IC(t){if(Md.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Md.set(t,e)}let jd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TC(t){jd=t(jd)}function SC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ah(this),e,...n);return uE.set(r,e.sort?e.sort():[e]),xr(r)}:wC().includes(t)?function(...e){return t.apply(Ah(this),e),xr(lE.get(this))}:function(...e){return xr(t.apply(Ah(this),e))}}function xC(t){return typeof t=="function"?SC(t):(t instanceof IDBTransaction&&IC(t),_C(t,vC())?new Proxy(t,jd):t)}function xr(t){if(t instanceof IDBRequest)return EC(t);if(xh.has(t))return xh.get(t);const e=xC(t);return e!==t&&(xh.set(t,e),vp.set(e,t)),e}const Ah=t=>vp.get(t);function cE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=xr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(xr(o.result),u.oldVersion,u.newVersion,xr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const AC=["get","getKey","getAll","getAllKeys","count"],RC=["put","add","delete","clear"],Rh=new Map;function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rh.get(e))return Rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AC.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Rh.set(e,i),i}TC(t=>({...t,get:(e,n,r)=>My(e,n)||t.get(e,n,r),has:(e,n)=>!!My(e,n)||t.has(e,n)}));/**
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
 */class CC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fd="@firebase/app",jy="0.14.4";/**
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
 */const Hn=new ec("@firebase/app"),kC="@firebase/app-compat",NC="@firebase/analytics-compat",bC="@firebase/analytics",DC="@firebase/app-check-compat",VC="@firebase/app-check",OC="@firebase/auth",LC="@firebase/auth-compat",MC="@firebase/database",jC="@firebase/data-connect",FC="@firebase/database-compat",UC="@firebase/functions",BC="@firebase/functions-compat",$C="@firebase/installations",zC="@firebase/installations-compat",HC="@firebase/messaging",WC="@firebase/messaging-compat",qC="@firebase/performance",GC="@firebase/performance-compat",KC="@firebase/remote-config",QC="@firebase/remote-config-compat",YC="@firebase/storage",XC="@firebase/storage-compat",JC="@firebase/firestore",ZC="@firebase/ai",eP="@firebase/firestore-compat",tP="firebase",nP="12.4.0";/**
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
 */const Ud="[DEFAULT]",rP={[Fd]:"fire-core",[kC]:"fire-core-compat",[bC]:"fire-analytics",[NC]:"fire-analytics-compat",[VC]:"fire-app-check",[DC]:"fire-app-check-compat",[OC]:"fire-auth",[LC]:"fire-auth-compat",[MC]:"fire-rtdb",[jC]:"fire-data-connect",[FC]:"fire-rtdb-compat",[UC]:"fire-fn",[BC]:"fire-fn-compat",[$C]:"fire-iid",[zC]:"fire-iid-compat",[HC]:"fire-fcm",[WC]:"fire-fcm-compat",[qC]:"fire-perf",[GC]:"fire-perf-compat",[KC]:"fire-rc",[QC]:"fire-rc-compat",[YC]:"fire-gcs",[XC]:"fire-gcs-compat",[JC]:"fire-fst",[eP]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[tP]:"fire-js-all"};/**
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
 */const du=new Map,sP=new Map,Bd=new Map;function Fy(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Bd.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;Bd.set(e,t);for(const n of du.values())Fy(n,t);for(const n of sP.values())Fy(n,t);return!0}function $r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const iP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ar=new xs("app","Firebase",iP);/**
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
 */class oP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
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
 */const As=nP;function wp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ud,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ar.create("bad-app-name",{appName:String(s)});if(n||(n=nE()),!n)throw Ar.create("no-options");const i=du.get(s);if(i){if(Nr(n,i.options)&&Nr(r,i.config))return i;throw Ar.create("duplicate-app",{appName:s})}const o=new fC(s);for(const u of Bd.values())o.addComponent(u);const l=new oP(n,r,o);return du.set(s,l),l}function tc(t=Ud){const e=du.get(t);if(!e&&t===Ud&&nE())return wp();if(!e)throw Ar.create("no-app",{appName:t});return e}function Et(t,e,n){let r=rP[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(o.join(" "));return}sn(new Bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const aP="firebase-heartbeat-database",lP=1,ta="firebase-heartbeat-store";let Ch=null;function hE(){return Ch||(Ch=cE(aP,lP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ar.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function uP(t){try{const n=(await hE()).transaction(ta),r=await n.objectStore(ta).get(dE(t));return await n.done,r}catch(e){if(e instanceof zt)Hn.warn(e.message);else{const n=Ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Uy(t,e){try{const r=(await hE()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,dE(t)),await r.done}catch(n){if(n instanceof zt)Hn.warn(n.message);else{const r=Ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function dE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cP=1024,hP=30;class dP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=By();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>hP){const o=mP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=By(),{heartbeatsToSend:r,unsentEntries:s}=fP(this._heartbeatsCache.heartbeats),i=hu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Hn.warn(n),""}}}function By(){return new Date().toISOString().substring(0,10)}function fP(t,e=cP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$y(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $y(t){return hu(JSON.stringify({version:2,heartbeats:t})).length}function mP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function gP(t){sn(new Bt("platform-logger",e=>new CC(e),"PRIVATE")),sn(new Bt("heartbeat",e=>new dP(e),"PRIVATE")),Et(Fd,jy,t),Et(Fd,jy,"esm2020"),Et("fire-js","")}gP("");function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yP=fE,pE=new xs("auth","Firebase",fE());/**
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
 */const fu=new ec("@firebase/auth");function _P(t,...e){fu.logLevel<=ne.WARN&&fu.warn(`Auth (${As}): ${t}`,...e)}function kl(t,...e){fu.logLevel<=ne.ERROR&&fu.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw Ip(t,...e)}function en(t,...e){return Ip(t,...e)}function Ep(t,e,n){const r={...yP(),[e]:n};return new xs("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return Ep(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(t,"argument-error"),Ep(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ip(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pE.create(t,...e)}function Q(t,e,...n){if(!t)throw Ip(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function Wn(t,e){t||Dn(e)}/**
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
 */function $d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function wP(){return zy()==="http:"||zy()==="https:"}function zy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function EP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wP()||iE()||"connection"in navigator)?navigator.onLine:!0}function IP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=qR()||QR()}get(){return EP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tp(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xP=new wa(3e4,6e4);function Qn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rn(t,e,n,r,s={}){return gE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=va({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return KR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ss(t.emulatorConfig.host)&&(c.credentials="include"),mE.fetch()(await yE(t,t.config.apiHost,n,l),c)})}async function gE(t,e,n){t._canInitEmulator=!1;const r={...TP,...e};try{const s=new RP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ol(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ol(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ol(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ol(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ep(t,d,c);$t(t,d)}}catch(s){if(s instanceof zt)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function Ea(t,e,n,r,s={}){const i=await Rn(t,e,n,r,s);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function yE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Tp(t.config,s):`${t.config.apiScheme}://${s}`;return SP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function AP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),xP.get())})}}function ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}function Hy(t){return t!==void 0&&t.enterprise!==void 0}class CP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PP(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Qn(t,e))}/**
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
 */async function kP(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function pu(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NP(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=Sp(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bo(Ph(s.auth_time)),issuedAtTime:bo(Ph(s.iat)),expirationTime:bo(Ph(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ph(t){return Number(t)*1e3}function Sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Z0(n);return s?JSON.parse(s):(kl("Failed to decode base64 JWT payload"),null)}catch(s){return kl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wy(t){const e=Sp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&bP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await yi(t,pu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?_E(s.providerUserInfo):[],o=OP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function VP(t){const e=Te(t);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _E(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function LP(t,e){const n=await gE(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await yE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ss(t.emulatorConfig.host)&&(u.credentials="include"),mE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MP(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",Qn(t,e))}/**
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
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Wy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await LP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ri;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function ir(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NP(this,e)}reload(){return VP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await yi(this,kP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:x,stsTokenManager:P}=n;Q(m&&P,e,"internal-error");const k=ri.fromJSON(this.name,P);Q(typeof m=="string",e,"internal-error"),ir(r,e.name),ir(s,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),ir(i,e.name),ir(o,e.name),ir(l,e.name),ir(u,e.name),ir(c,e.name),ir(d,e.name);const E=new Yt({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:c,lastLoginAt:d});return x&&Array.isArray(x)&&(E.providerData=x.map(v=>({...v}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ri;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_E(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ri;l.updateFromIdToken(r);const u=new Yt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const qy=new Map;function Vn(t){Wn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
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
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vE.type="NONE";const Gy=vE;/**
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
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pu(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(Vn(Gy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Vn(Gy);const o=Nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let m;if(typeof d=="string"){const g=await pu(e,{idToken:d}).catch(()=>{});if(!g)break;m=await Yt._fromGetAccountInfoResponse(e,g,d)}else m=Yt._fromJSON(e,d);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new si(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new si(i,e,r))}}/**
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
 */function Ky(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xE(e))return"Blackberry";if(AE(e))return"Webos";if(EE(e))return"Safari";if((e.includes("chrome/")||IE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wE(t=it()){return/firefox\//i.test(t)}function EE(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function IE(t=it()){return/crios\//i.test(t)}function TE(t=it()){return/iemobile/i.test(t)}function SE(t=it()){return/android/i.test(t)}function xE(t=it()){return/blackberry/i.test(t)}function AE(t=it()){return/webos/i.test(t)}function xp(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jP(t=it()){var e;return xp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function FP(){return YR()&&document.documentMode===10}function RE(t=it()){return xp(t)||SE(t)||AE(t)||xE(t)||/windows phone/i.test(t)||TE(t)}/**
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
 */function CE(t,e=[]){let n;switch(t){case"Browser":n=Ky(it());break;case"Worker":n=`${Ky(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
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
 */class UP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BP(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",Qn(t,e))}/**
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
 */const $P=6;class zP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$P,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class HP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qy(this),this.idTokenSubscription=new Qy(this),this.beforeStateQueue=new UP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pu(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Mn(this));const n=e?Te(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BP(this),n=new zP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&_P(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yn(t){return Te(t)}class Qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=rC(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WP(t){nc=t}function PE(t){return nc.loadJS(t)}function qP(){return nc.recaptchaEnterpriseScript}function GP(){return nc.gapiScript}function KP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QP{constructor(){this.enterprise=new YP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XP="recaptcha-enterprise",kE="NO_RECAPTCHA";class JP{constructor(e){this.type=XP,this.auth=Yn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{PP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new CP(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Hy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(kE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Hy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qP();u.length!==0&&(u+=l),PE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Yy(t,e,n,r=!1,s=!1){const i=new JP(t);let o;if(s)o=kE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gu(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Yy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Yy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function ZP(t,e){const n=$r(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nr(i,e??{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function ek(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tk(t,e,n){const r=Yn(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=NE(e),{host:o,port:l}=nk(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Nr(c,r.config.emulator)&&Nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ss(o)?(yp(`${i}//${o}${u}`),_p("Auth",!0)):rk()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nk(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xy(o)}}}function Xy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ap{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function sk(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ik(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",Qn(t,e))}async function ok(t,e){return Rn(t,"POST","/v1/accounts:sendOobCode",Qn(t,e))}async function ak(t,e){return ok(t,e)}/**
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
 */async function lk(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}async function uk(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}/**
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
 */class na extends Ap{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,n,"signInWithPassword",ik);case"emailLink":return lk(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,r,"signUpPassword",sk);case"emailLink":return uk(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ii(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",Qn(t,e))}/**
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
 */const ck="http://localhost";class gs extends Ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:ck,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
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
 */function hk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dk(t){const e=go(yo(t)).link,n=e?go(yo(e)).deep_link_id:null,r=go(yo(t)).deep_link_id;return(r?go(yo(r)).link:null)||r||n||e||t}class Rp{constructor(e){const n=go(yo(e)),r=n.apiKey??null,s=n.oobCode??null,i=hk(n.mode??null);Q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=dk(e);try{return new Rp(n)}catch{return null}}}/**
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
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rp.parseLink(n);return Q(r,"argument-error"),na._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ia extends Cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cr extends Ia{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class hr extends Ia{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends Ia{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function fk(t,e){return Ea(t,"POST","/v1/accounts:signUp",Qn(t,e))}/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=Jy(r);return new ys({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jy(r);return new ys({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yu extends zt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yu(e,n,r,s)}}function bE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yu._fromErrorAndOperation(t,i,e,r):i})}async function pk(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",r)}/**
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
 */async function mk(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(Mn(r));const s="reauthenticate";try{const i=await yi(t,bE(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Sp(i.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ys._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
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
 */async function DE(t,e,n=!1){if(mt(t.app))return Promise.reject(Mn(t));const r="signIn",s=await bE(t,r,e),i=await ys._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gk(t,e){return DE(Yn(t),e)}/**
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
 */async function VE(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yk(t,e,n){const r=Yn(t);await gu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ak)}async function _k(t,e,n){if(mt(t.app))return Promise.reject(Mn(t));const r=Yn(t),o=await gu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&VE(t),u}),l=await ys._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function vk(t,e,n){return mt(t.app)?Promise.reject(Mn(t)):gk(Te(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&VE(t),r})}/**
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
 */async function wk(t,e){return Rn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ek(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await yi(r,wk(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Ik(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function Tk(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function Sk(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function xk(t){return Te(t).signOut()}const _u="__sak";/**
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
 */class OE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_u,"1"),this.storage.removeItem(_u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ak=1e3,Rk=10;class LE extends OE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);FP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Rk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LE.type="LOCAL";const Ck=LE;/**
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
 */class ME extends OE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ME.type="SESSION";const jE=ME;/**
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
 */function Pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await Pk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function Pp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Pp("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function Nk(t){_n().location.href=t}/**
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
 */function FE(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Vk(){return FE()?self:null}/**
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
 */const UE="firebaseLocalStorageDb",Ok=1,vu="firebaseLocalStorage",BE="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function Lk(){const t=indexedDB.deleteDatabase(UE);return new Ta(t).toPromise()}function Hd(){const t=indexedDB.open(UE,Ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vu,{keyPath:BE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vu)?e(r):(r.close(),await Lk(),e(await Hd()))})})}async function Zy(t,e,n){const r=sc(t,!0).put({[BE]:e,value:n});return new Ta(r).toPromise()}async function Mk(t,e){const n=sc(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function e_(t,e){const n=sc(t,!0).delete(e);return new Ta(n).toPromise()}const jk=800,Fk=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(Vk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await bk(),!this.activeServiceWorker)return;this.sender=new kk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hd();return await Zy(e,_u,"1"),await e_(e,_u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new Ta(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const Uk=$E;new wa(3e4,6e4);/**
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
 */function zE(t,e){return e?Vn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kp extends Ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bk(t){return DE(t.auth,new kp(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),mk(n,new kp(t),t.bypassAuthState)}async function zk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),pk(n,new kp(t),t.bypassAuthState)}/**
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
 */class HE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bk;case"linkViaPopup":case"linkViaRedirect":return zk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:$t(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hk=new wa(2e3,1e4);async function Wk(t,e,n){if(mt(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Yn(t);vP(t,e,Cp);const s=zE(r,n);return new is(r,"signInViaPopup",e,s).executeNotNull()}class is extends HE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hk.get())};e()}}is.currentPopupAction=null;/**
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
 */const qk="pendingRedirect",bl=new Map;class Gk extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await Kk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kk(t,e){const n=Xk(e),r=Yk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qk(t,e){bl.set(t._key(),e)}function Yk(t){return Vn(t._redirectPersistence)}function Xk(t){return Nl(qk,t.config.apiKey,t.name)}async function Jk(t,e,n=!1){if(mt(t.app))return Promise.reject(Mn(t));const r=Yn(t),s=zE(r,e),o=await new Gk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zk=10*60*1e3;class e2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!t2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function t2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WE(t);default:return!1}}/**
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
 */async function n2(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const r2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s2=/^https?/;async function i2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await n2(t);for(const n of e)try{if(o2(n))return}catch{}$t(t,"unauthorized-domain")}function o2(t){const e=$d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!s2.test(n))return!1;if(r2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const a2=new wa(3e4,6e4);function n_(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function l2(t){return new Promise((e,n)=>{var s,i,o;function r(){n_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n_(),n(en(t,"network-request-failed"))},timeout:a2.get()})}if((i=(s=_n().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=_n().gapi)!=null&&o.load)r();else{const l=KP("iframefcb");return _n()[l]=()=>{gapi.load?r():n(en(t,"network-request-failed"))},PE(`${GP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function u2(t){return Dl=Dl||l2(t),Dl}/**
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
 */const c2=new wa(5e3,15e3),h2="__/auth/iframe",d2="emulator/auth/iframe",f2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m2(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tp(e,d2):`https://${t.config.authDomain}/${h2}`,r={apiKey:e.apiKey,appName:t.name,v:As},s=p2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${va(r).slice(1)}`}async function g2(t){const e=await u2(t),n=_n().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:m2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=_n().setTimeout(()=>{i(o)},c2.get());function u(){_n().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const y2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_2=500,v2=600,w2="_blank",E2="http://localhost";class r_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I2(t,e,n,r=_2,s=v2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...y2,width:r.toString(),height:s.toString(),top:i,left:o},c=it().toLowerCase();n&&(l=IE(c)?w2:n),wE(c)&&(e=e||E2,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[I,x])=>`${g}${I}=${x},`,"");if(jP(c)&&l!=="_self")return T2(e||"",l),new r_(null);const m=window.open(e||"",l,d);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new r_(m)}function T2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S2="__/auth/handler",x2="emulator/auth/handler",A2=encodeURIComponent("fac");async function s_(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:s};if(e instanceof Cp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof Ia){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${A2}=${encodeURIComponent(u)}`:"";return`${R2(t)}?${va(l).slice(1)}${c}`}function R2({config:t}){return t.emulator?Tp(t,x2):`https://${t.authDomain}/${S2}`}/**
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
 */const kh="webStorageSupport";class C2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jE,this._completeRedirectFn=Jk,this._overrideRedirectResult=Qk}async _openPopup(e,n,r,s){var o;Wn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await s_(e,n,r,$d(),s);return I2(e,i,Pp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await s_(e,n,r,$d(),s);return Nk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await g2(e),r=new e2(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kh,{type:kh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[kh];i!==void 0&&n(!!i),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=i2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RE()||EE()||xp()}}const P2=C2;var i_="@firebase/auth",o_="1.11.0";/**
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
 */class k2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function N2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function b2(t){sn(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(t)},c=new HP(r,s,i,u);return ek(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new Bt("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(r=>new k2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(i_,o_,N2(t)),Et(i_,o_,"esm2020")}/**
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
 */const D2=5*60,V2=rE("authIdTokenMaxAge")||D2;let a_=null;const O2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>V2)return;const s=n==null?void 0:n.token;a_!==s&&(a_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qE(t=tc()){const e=$r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZP(t,{popupRedirectResolver:P2,persistence:[Uk,Ck,jE]}),r=rE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=O2(i.toString());Tk(n,o,()=>o(n.currentUser)),Ik(n,l=>o(l))}}const s=eE("auth");return s&&tk(n,`http://${s}`),n}function L2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}WP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",L2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});b2("Browser");var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,GE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function S(){}S.prototype=_.prototype,w.F=_.prototype,w.prototype=new S,w.prototype.constructor=w,w.D=function(R,C,N){for(var A=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)A[Oe-2]=arguments[Oe];return _.prototype[C].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,S){S||(S=0);const R=Array(16);if(typeof _=="string")for(var C=0;C<16;++C)R[C]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(C=0;C<16;++C)R[C]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=w.g[0],S=w.g[1],C=w.g[2];let N=w.g[3],A;A=_+(N^S&(C^N))+R[0]+3614090360&4294967295,_=S+(A<<7&4294967295|A>>>25),A=N+(C^_&(S^C))+R[1]+3905402710&4294967295,N=_+(A<<12&4294967295|A>>>20),A=C+(S^N&(_^S))+R[2]+606105819&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(_^C&(N^_))+R[3]+3250441966&4294967295,S=C+(A<<22&4294967295|A>>>10),A=_+(N^S&(C^N))+R[4]+4118548399&4294967295,_=S+(A<<7&4294967295|A>>>25),A=N+(C^_&(S^C))+R[5]+1200080426&4294967295,N=_+(A<<12&4294967295|A>>>20),A=C+(S^N&(_^S))+R[6]+2821735955&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(_^C&(N^_))+R[7]+4249261313&4294967295,S=C+(A<<22&4294967295|A>>>10),A=_+(N^S&(C^N))+R[8]+1770035416&4294967295,_=S+(A<<7&4294967295|A>>>25),A=N+(C^_&(S^C))+R[9]+2336552879&4294967295,N=_+(A<<12&4294967295|A>>>20),A=C+(S^N&(_^S))+R[10]+4294925233&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(_^C&(N^_))+R[11]+2304563134&4294967295,S=C+(A<<22&4294967295|A>>>10),A=_+(N^S&(C^N))+R[12]+1804603682&4294967295,_=S+(A<<7&4294967295|A>>>25),A=N+(C^_&(S^C))+R[13]+4254626195&4294967295,N=_+(A<<12&4294967295|A>>>20),A=C+(S^N&(_^S))+R[14]+2792965006&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(_^C&(N^_))+R[15]+1236535329&4294967295,S=C+(A<<22&4294967295|A>>>10),A=_+(C^N&(S^C))+R[1]+4129170786&4294967295,_=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(_^S))+R[6]+3225465664&4294967295,N=_+(A<<9&4294967295|A>>>23),A=C+(_^S&(N^_))+R[11]+643717713&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^_&(C^N))+R[0]+3921069994&4294967295,S=C+(A<<20&4294967295|A>>>12),A=_+(C^N&(S^C))+R[5]+3593408605&4294967295,_=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(_^S))+R[10]+38016083&4294967295,N=_+(A<<9&4294967295|A>>>23),A=C+(_^S&(N^_))+R[15]+3634488961&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^_&(C^N))+R[4]+3889429448&4294967295,S=C+(A<<20&4294967295|A>>>12),A=_+(C^N&(S^C))+R[9]+568446438&4294967295,_=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(_^S))+R[14]+3275163606&4294967295,N=_+(A<<9&4294967295|A>>>23),A=C+(_^S&(N^_))+R[3]+4107603335&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^_&(C^N))+R[8]+1163531501&4294967295,S=C+(A<<20&4294967295|A>>>12),A=_+(C^N&(S^C))+R[13]+2850285829&4294967295,_=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(_^S))+R[2]+4243563512&4294967295,N=_+(A<<9&4294967295|A>>>23),A=C+(_^S&(N^_))+R[7]+1735328473&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^_&(C^N))+R[12]+2368359562&4294967295,S=C+(A<<20&4294967295|A>>>12),A=_+(S^C^N)+R[5]+4294588738&4294967295,_=S+(A<<4&4294967295|A>>>28),A=N+(_^S^C)+R[8]+2272392833&4294967295,N=_+(A<<11&4294967295|A>>>21),A=C+(N^_^S)+R[11]+1839030562&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^_)+R[14]+4259657740&4294967295,S=C+(A<<23&4294967295|A>>>9),A=_+(S^C^N)+R[1]+2763975236&4294967295,_=S+(A<<4&4294967295|A>>>28),A=N+(_^S^C)+R[4]+1272893353&4294967295,N=_+(A<<11&4294967295|A>>>21),A=C+(N^_^S)+R[7]+4139469664&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^_)+R[10]+3200236656&4294967295,S=C+(A<<23&4294967295|A>>>9),A=_+(S^C^N)+R[13]+681279174&4294967295,_=S+(A<<4&4294967295|A>>>28),A=N+(_^S^C)+R[0]+3936430074&4294967295,N=_+(A<<11&4294967295|A>>>21),A=C+(N^_^S)+R[3]+3572445317&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^_)+R[6]+76029189&4294967295,S=C+(A<<23&4294967295|A>>>9),A=_+(S^C^N)+R[9]+3654602809&4294967295,_=S+(A<<4&4294967295|A>>>28),A=N+(_^S^C)+R[12]+3873151461&4294967295,N=_+(A<<11&4294967295|A>>>21),A=C+(N^_^S)+R[15]+530742520&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^_)+R[2]+3299628645&4294967295,S=C+(A<<23&4294967295|A>>>9),A=_+(C^(S|~N))+R[0]+4096336452&4294967295,_=S+(A<<6&4294967295|A>>>26),A=N+(S^(_|~C))+R[7]+1126891415&4294967295,N=_+(A<<10&4294967295|A>>>22),A=C+(_^(N|~S))+R[14]+2878612391&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~_))+R[5]+4237533241&4294967295,S=C+(A<<21&4294967295|A>>>11),A=_+(C^(S|~N))+R[12]+1700485571&4294967295,_=S+(A<<6&4294967295|A>>>26),A=N+(S^(_|~C))+R[3]+2399980690&4294967295,N=_+(A<<10&4294967295|A>>>22),A=C+(_^(N|~S))+R[10]+4293915773&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~_))+R[1]+2240044497&4294967295,S=C+(A<<21&4294967295|A>>>11),A=_+(C^(S|~N))+R[8]+1873313359&4294967295,_=S+(A<<6&4294967295|A>>>26),A=N+(S^(_|~C))+R[15]+4264355552&4294967295,N=_+(A<<10&4294967295|A>>>22),A=C+(_^(N|~S))+R[6]+2734768916&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~_))+R[13]+1309151649&4294967295,S=C+(A<<21&4294967295|A>>>11),A=_+(C^(S|~N))+R[4]+4149444226&4294967295,_=S+(A<<6&4294967295|A>>>26),A=N+(S^(_|~C))+R[11]+3174756917&4294967295,N=_+(A<<10&4294967295|A>>>22),A=C+(_^(N|~S))+R[2]+718787259&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~_))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const S=_-this.blockSize,R=this.C;let C=this.h,N=0;for(;N<_;){if(C==0)for(;N<=S;)s(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<_;)if(R[C++]=w.charCodeAt(N++),C==this.blockSize){s(this,R),C=0;break}}else for(;N<_;)if(R[C++]=w[N++],C==this.blockSize){s(this,R),C=0;break}}this.h=C,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var S=w.length-8;S<w.length;++S)w[S]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,S=0;S<4;++S)for(let R=0;R<32;R+=8)w[_++]=this.g[S]>>>R&255;return w};function i(w,_){var S=l;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=_(w)}function o(w,_){this.h=_;const S=[];let R=!0;for(let C=w.length-1;C>=0;C--){const N=w[C]|0;R&&N==_||(S[C]=N,R=!1)}this.g=S}var l={};function u(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return k(c(-w));const _=[];let S=1;for(let R=0;w>=S;R++)_[R]=w/S|0,S*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(d(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(_,8));let R=m;for(let N=0;N<w.length;N+=8){var C=Math.min(8,w.length-N);const A=parseInt(w.substring(N,N+C),_);C<8?(C=c(Math.pow(_,C)),R=R.j(C).add(c(A))):(R=R.j(S),R=R.add(c(A)))}return R}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();let w=0,_=1;for(let S=0;S<this.g.length;S++){const R=this.i(S);w+=(R>=0?R:4294967296+R)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(P(this))return"-"+k(this).toString(w);const _=c(Math.pow(w,6));var S=this;let R="";for(;;){const C=D(S,_).g;S=E(S,C.j(_));let N=((S.g.length>0?S.g[0]:S.h)>>>0).toString(w);if(S=C,x(S))return N+R;for(;N.length<6;)N="0"+N;R=N+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=E(this,w),P(w)?-1:x(w)?0:1};function k(w){const _=w.g.length,S=[];for(let R=0;R<_;R++)S[R]=~w.g[R];return new o(S,~w.h).add(g)}t.abs=function(){return P(this)?k(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),S=[];let R=0;for(let C=0;C<=_;C++){let N=R+(this.i(C)&65535)+(w.i(C)&65535),A=(N>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);R=A>>>16,N&=65535,A&=65535,S[C]=A<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function E(w,_){return w.add(k(_))}t.j=function(w){if(x(this)||x(w))return m;if(P(this))return P(w)?k(this).j(k(w)):k(k(this).j(w));if(P(w))return k(this.j(k(w)));if(this.l(I)<0&&w.l(I)<0)return c(this.m()*w.m());const _=this.g.length+w.g.length,S=[];for(var R=0;R<2*_;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(let C=0;C<w.g.length;C++){const N=this.i(R)>>>16,A=this.i(R)&65535,Oe=w.i(C)>>>16,Ht=w.i(C)&65535;S[2*R+2*C]+=A*Ht,v(S,2*R+2*C),S[2*R+2*C+1]+=N*Ht,v(S,2*R+2*C+1),S[2*R+2*C+1]+=A*Oe,v(S,2*R+2*C+1),S[2*R+2*C+2]+=N*Oe,v(S,2*R+2*C+2)}for(w=0;w<_;w++)S[w]=S[2*w+1]<<16|S[2*w];for(w=_;w<2*_;w++)S[w]=0;return new o(S,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function T(w,_){this.g=w,this.h=_}function D(w,_){if(x(_))throw Error("division by zero");if(x(w))return new T(m,m);if(P(w))return _=D(k(w),_),new T(k(_.g),k(_.h));if(P(_))return _=D(w,k(_)),new T(k(_.g),_.h);if(w.g.length>30){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var S=g,R=_;R.l(w)<=0;)S=j(S),R=j(R);var C=U(S,1),N=U(R,1);for(R=U(R,2),S=U(S,2);!x(R);){var A=N.add(R);A.l(w)<=0&&(C=C.add(S),N=A),R=U(R,1),S=U(S,1)}return _=E(w,C.j(_)),new T(C,_)}for(C=m;w.l(_)>=0;){for(S=Math.max(1,Math.floor(w.m()/_.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),N=c(S),A=N.j(_);P(A)||A.l(w)>0;)S-=R,N=c(S),A=N.j(_);x(N)&&(N=g),C=C.add(N),w=E(w,A)}return new T(C,w)}t.B=function(w){return D(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),S=[];for(let R=0;R<_;R++)S[R]=this.i(R)&w.i(R);return new o(S,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),S=[];for(let R=0;R<_;R++)S[R]=this.i(R)|w.i(R);return new o(S,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),S=[];for(let R=0;R<_;R++)S[R]=this.i(R)^w.i(R);return new o(S,this.h^w.h)};function j(w){const _=w.g.length+1,S=[];for(let R=0;R<_;R++)S[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(S,w.h)}function U(w,_){const S=_>>5;_%=32;const R=w.g.length-S,C=[];for(let N=0;N<R;N++)C[N]=_>0?w.i(N+S)>>>_|w.i(N+S+1)<<32-_:w.i(N+S);return new o(C,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,GE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Rr=o}).apply(typeof l_<"u"?l_:typeof self<"u"?self:typeof window<"u"?window:{});var al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KE,_o,QE,Vl,Wd,YE,XE,JE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof al=="object"&&al];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in f))break e;f=f[b]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,b,O){for(var B=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)B[ee-2]=arguments[ee];return h.prototype[b].apply(y,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function x(a,h){for(let y=1;y<arguments.length;y++){const b=arguments[y];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const O=b.length||0;a.length=f+O;for(let B=0;B<O;B++)a[f+B]=b[B]}else a.push(b)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=T.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var T=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,w=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(S)}};function S(){for(var a;a=E();){try{a.h.call(a.g)}catch(f){k(f)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Oe,C),Oe.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ht="closure_listenable_"+(Math.random()*1e6|0),z=0;function ie(a,h,f,y,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=b,this.key=++z,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function ce(a){const h={};for(const f in a)h[f]=a[f];return h}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qr(a,h){let f,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(f in y)a[f]=y[f];for(let O=0;O<Re.length;O++)f=Re[O],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function bt(a){this.src=a,this.g={},this.h=0}bt.prototype.add=function(a,h,f,y,b){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=Wt(a,h,y,b);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new ie(h,this.src,O,!!y,b),h.fa=f,a.push(h)),h};function Gr(a,h){const f=h.type;if(f in a.g){var y=a.g[f],b=Array.prototype.indexOf.call(y,h,void 0),O;(O=b>=0)&&Array.prototype.splice.call(y,b,1),O&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Wt(a,h,f,y){for(let b=0;b<a.length;++b){const O=a[b];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==y)return b}return-1}var Xn="closure_lm_"+(Math.random()*1e6|0),Pc={};function vm(a,h,f,y,b){if(Array.isArray(h)){for(let O=0;O<h.length;O++)vm(a,h[O],f,y,b);return null}return f=Im(f),a&&a[Ht]?a.J(h,f,l(y)?!!y.capture:!1,b):c1(a,h,f,!1,y,b)}function c1(a,h,f,y,b,O){if(!h)throw Error("Invalid event type");const B=l(b)?!!b.capture:!!b;let ee=Nc(a);if(ee||(a[Xn]=ee=new bt(a)),f=ee.add(h,f,y,B,O),f.proxy)return f;if(y=h1(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)N||(b=B),b===void 0&&(b=!1),a.addEventListener(h.toString(),y,b);else if(a.attachEvent)a.attachEvent(Em(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function h1(){function a(f){return h.call(a.src,a.listener,f)}const h=d1;return a}function wm(a,h,f,y,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)wm(a,h[O],f,y,b);else y=l(y)?!!y.capture:!!y,f=Im(f),a&&a[Ht]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],f=Wt(h,f,y,b),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=Nc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Wt(h,f,y,b)),(f=a>-1?h[a]:null)&&kc(f))}function kc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ht])Gr(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Em(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Nc(h))?(Gr(f,a),f.h==0&&(f.src=null,h[Xn]=null)):$(a)}}}function Em(a){return a in Pc?Pc[a]:Pc[a]="on"+a}function d1(a,h){if(a.da)a=!0;else{h=new Oe(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&kc(a),a=f.call(y,h)}return a}function Nc(a){return a=a[Xn],a instanceof bt?a:null}var bc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Im(a){return typeof a=="function"?a:(a[bc]||(a[bc]=function(h){return a.handleEvent(h)}),a[bc])}function Ye(){R.call(this),this.i=new bt(this),this.M=this,this.G=null}m(Ye,R),Ye.prototype[Ht]=!0,Ye.prototype.removeEventListener=function(a,h,f,y){wm(this,a,h,f,y)};function ot(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var b=h;h=new C(y,a),qr(h,b)}b=!0;let O,B;if(f)for(B=f.length-1;B>=0;B--)O=h.g=f[B],b=ka(O,y,!0,h)&&b;if(O=h.g=a,b=ka(O,y,!0,h)&&b,b=ka(O,y,!1,h)&&b,f)for(B=0;B<f.length;B++)O=h.g=f[B],b=ka(O,y,!1,h)&&b}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)$(f[y]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ye.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function ka(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==f){const ee=B.listener,Le=B.ha||B.src;B.fa&&Gr(a.i,B),b=ee.call(Le,y)!==!1&&b}}return b&&!y.defaultPrevented}function f1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Tm(a){a.g=f1(()=>{a.g=null,a.i&&(a.i=!1,Tm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class p1 extends R{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(a){R.call(this),this.h=a,this.g={}}m(Ui,R);var Sm=[];function xm(a){K(a.g,function(h,f){this.g.hasOwnProperty(f)&&kc(h)},a),a.g={}}Ui.prototype.N=function(){Ui.Z.N.call(this),xm(this)},Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dc=o.JSON.stringify,m1=o.JSON.parse,g1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Am(){}function Rm(){}var Bi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vc(){C.call(this,"d")}m(Vc,C);function Oc(){C.call(this,"c")}m(Oc,C);var Kr={},Cm=null;function Na(){return Cm=Cm||new Ye}Kr.Ia="serverreachability";function Pm(a){C.call(this,Kr.Ia,a)}m(Pm,C);function $i(a){const h=Na();ot(h,new Pm(h))}Kr.STAT_EVENT="statevent";function km(a,h){C.call(this,Kr.STAT_EVENT,a),this.stat=h}m(km,C);function at(a){const h=Na();ot(h,new km(h,a))}Kr.Ja="timingevent";function Nm(a,h){C.call(this,Kr.Ja,a),this.size=h}m(Nm,C);function zi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Hi(){this.g=!0}Hi.prototype.ua=function(){this.g=!1};function y1(a,h,f,y,b,O){a.info(function(){if(a.g)if(O){var B="",ee=O.split("&");for(let he=0;he<ee.length;he++){var Le=ee[he].split("=");if(Le.length>1){const Ue=Le[0];Le=Le[1];const cn=Ue.split("_");B=cn.length>=2&&cn[1]=="type"?B+(Ue+"="+Le+"&"):B+(Ue+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+f+`
`+B})}function _1(a,h,f,y,b,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+f+`
`+O+" "+B})}function ks(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+w1(a,f)+(y?" "+y:"")})}function v1(a,h){a.info(function(){return"TIMEOUT: "+h})}Hi.prototype.info=function(){};function w1(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var b=y[0];if(b!="noop"&&b!="stop"&&b!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return Dc(O)}catch{return h}}var ba={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dm;function Lc(){}m(Lc,Am),Lc.prototype.g=function(){return new XMLHttpRequest},Dm=new Lc;function Wi(a){return encodeURIComponent(String(a))}function E1(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Jn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new Ui(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vm}function Vm(){this.i=null,this.g="",this.h=!1}var Om={},Mc={};function jc(a,h,f){a.M=1,a.A=Va(un(h)),a.u=f,a.R=!0,Lm(a,null)}function Lm(a,h){a.F=Date.now(),Da(a),a.B=un(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Qm(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Vm,a.g=fg(a.j,f?h:null,!a.u),a.P>0&&(a.O=new p1(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Sm[0]=b.toString()),b=Sm);for(let O=0;O<b.length;O++){const B=vm(f,b[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?ce(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),$i(),y1(a.i,a.v,a.B,a.l,a.S,a.u)}Jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&tr(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=tr(this.g),Le=this.g.ya(),he=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||ng(this.g)))){this.K||ee!=4||Le==7||(Le==8||he<=0?$i(3):$i(2)),Fc(this);var h=this.g.ca();this.X=h;var f=I1(this);if(this.o=h==200,_1(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,b=this.g;if((y=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var O=y;break t}}O=null}if(a=O)ks(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Uc(this,a);else{this.o=!1,this.m=3,at(12),Qr(this),qi(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<f.length;)if(Ue=T1(this,f),Ue==Mc){ee==4&&(this.m=4,at(14),a=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Om){this.m=4,at(15),ks(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else ks(this.i,this.l,Ue,null),Uc(this,Ue);if(Mm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,at(16),a=!1),this.o=this.o&&a,!a)ks(this.i,this.l,f,"[Invalid Chunked Response]"),Qr(this),qi(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Kc(B),B.P=!0,at(11))}}else ks(this.i,this.l,f,null),Uc(this,f);ee==4&&Qr(this),this.o&&!this.K&&(ee==4?ug(this.j,this):(this.o=!1,Da(this)))}else M1(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),Qr(this),qi(this)}}}catch{}finally{}};function I1(a){if(!Mm(a))return a.g.la();const h=ng(a.g);if(h==="")return"";let f="";const y=h.length,b=tr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Qr(a),qi(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<y;O++)a.h.h=!0,f+=a.h.i.decode(h[O],{stream:!(b&&O==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Mm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function T1(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Mc:(f=Number(h.substring(f,y)),isNaN(f)?Om:(y+=1,y+f>h.length?Mc:(h=h.slice(y,y+f),a.C=y+f,h)))}Jn.prototype.cancel=function(){this.K=!0,Qr(this)};function Da(a){a.T=Date.now()+a.H,jm(a,a.H)}function jm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=zi(c(a.aa,a),h)}function Fc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(v1(this.i,this.B),this.M!=2&&($i(),at(17)),Qr(this),this.m=2,qi(this)):jm(this,this.T-a)};function qi(a){a.j.I==0||a.K||ug(a.j,a)}function Qr(a){Fc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,xm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Uc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Bc(f.h,a))){if(!a.L&&Bc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Fa(f),Ma(f);else break e;Gc(f),at(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=zi(c(f.Va,f),6e3));Bm(f.h)<=1&&f.ta&&(f.ta=void 0)}else Xr(f,11)}else if((a.L||f.g==a)&&Fa(f),!A(h))for(b=f.Ba.g.parse(h),h=0;h<b.length;h++){let he=b[h];const Ue=he[0];if(!(Ue<=f.K))if(f.K=Ue,he=he[1],f.I==2)if(he[0]=="c"){f.M=he[1],f.ba=he[2];const cn=he[3];cn!=null&&(f.ka=cn,f.j.info("VER="+f.ka));const Jr=he[4];Jr!=null&&(f.za=Jr,f.j.info("SVER="+f.za));const nr=he[5];nr!=null&&typeof nr=="number"&&nr>0&&(y=1.5*nr,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const rr=a.g;if(rr){const Ba=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ba){var O=y.h;O.g||Ba.indexOf("spdy")==-1&&Ba.indexOf("quic")==-1&&Ba.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&($c(O,O.h),O.h=null))}if(y.G){const Qc=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(y.wa=Qc,pe(y.J,y.G,Qc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var B=a;if(y.na=dg(y,y.L?y.ba:null,y.W),B.L){$m(y.h,B);var ee=B,Le=y.O;Le&&(ee.H=Le),ee.D&&(Fc(ee),Da(ee)),y.g=B}else ag(y);f.i.length>0&&ja(f)}else he[0]!="stop"&&he[0]!="close"||Xr(f,7);else f.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Xr(f,7):qc(f):he[0]!="noop"&&f.l&&f.l.qa(he),f.A=0)}}$i(4)}catch{}}var S1=class{constructor(a,h){this.g=a,this.map=h}};function Fm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Um(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bm(a){return a.h?1:a.g?a.g.size:0}function Bc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $c(a,h){a.g?a.g.add(h):a.h=h}function $m(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fm.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var Hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x1(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let b,O=null;y>=0?(b=a[f].substring(0,y),O=a[f].substring(y+1)):b=a[f],h(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Zn?(this.l=a.l,Gi(this,a.j),this.o=a.o,this.g=a.g,Ki(this,a.u),this.h=a.h,zc(this,Ym(a.i)),this.m=a.m):a&&(h=String(a).match(Hm))?(this.l=!1,Gi(this,h[1]||"",!0),this.o=Qi(h[2]||""),this.g=Qi(h[3]||"",!0),Ki(this,h[4]),this.h=Qi(h[5]||"",!0),zc(this,h[6]||"",!0),this.m=Qi(h[7]||"")):(this.l=!1,this.i=new Xi(null,this.l))}Zn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Yi(h,Wm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Yi(h,Wm,!0),"@"),a.push(Wi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Yi(f,f.charAt(0)=="/"?C1:R1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Yi(f,k1)),a.join("")},Zn.prototype.resolve=function(a){const h=un(this);let f=!!a.j;f?Gi(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Ki(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var b=h.h.lastIndexOf("/");b!=-1&&(y=h.h.slice(0,b+1)+y)}if(b=y,b==".."||b==".")y="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){y=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let B=0;B<b.length;){const ee=b[B++];ee=="."?y&&B==b.length&&O.push(""):ee==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&B==b.length&&O.push("")):(O.push(ee),y=!0)}y=O.join("/")}else y=b}return f?h.h=y:f=a.i.toString()!=="",f?zc(h,Ym(a.i)):f=!!a.m,f&&(h.m=a.m),h};function un(a){return new Zn(a)}function Gi(a,h,f){a.j=f?Qi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ki(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function zc(a,h,f){h instanceof Xi?(a.i=h,N1(a.i,a.l)):(f||(h=Yi(h,P1)),a.i=new Xi(h,a.l))}function pe(a,h,f){a.i.set(h,f)}function Va(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Qi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,A1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function A1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wm=/[#\/\?@]/g,R1=/[#\?:]/g,C1=/[#\?]/g,P1=/[#\?@]/g,k1=/#/g;function Xi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&x1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Xi.prototype,t.add=function(a,h){Yr(this),this.i=null,a=Ns(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function qm(a,h){Yr(a),h=Ns(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Gm(a,h){return Yr(a),h=Ns(a,h),a.g.has(h)}t.forEach=function(a,h){Yr(this),this.g.forEach(function(f,y){f.forEach(function(b){a.call(h,b,y,this)},this)},this)};function Km(a,h){Yr(a);let f=[];if(typeof h=="string")Gm(a,h)&&(f=f.concat(a.g.get(Ns(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Yr(this),this.i=null,a=Ns(this,a),Gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Km(this,a),a.length>0?String(a[0]):h):h};function Qm(a,h,f){qm(a,h),f.length>0&&(a.i=null,a.g.set(Ns(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const b=Wi(f);f=Km(this,f);for(let O=0;O<f.length;O++){let B=b;f[O]!==""&&(B+="="+Wi(f[O])),a.push(B)}}return this.i=a.join("&")};function Ym(a){const h=new Xi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ns(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function N1(a,h){h&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(f,y){const b=y.toLowerCase();y!=b&&(qm(this,y),Qm(this,b,f))},a)),a.j=h}function b1(a,h){const f=new Hi;if(o.Image){const y=new Image;y.onload=d(er,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(er,f,"TestLoadImage: error",!1,h,y),y.onabort=d(er,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(er,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function D1(a,h){const f=new Hi,y=new AbortController,b=setTimeout(()=>{y.abort(),er(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(b),O.ok?er(f,"TestPingServer: ok",!0,h):er(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),er(f,"TestPingServer: error",!1,h)})}function er(a,h,f,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(f)}catch{}}function V1(){this.g=new g1}function Hc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Hc,Am),Hc.prototype.g=function(){return new Oa(this.i,this.h)};function Oa(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Oa,Ye),t=Oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Zi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ji(this):Zi(this),this.readyState==3&&Xm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ji(this))},t.Na=function(a){this.g&&(this.response=a,Ji(this))},t.ga=function(){this.g&&Ji(this)};function Ji(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Zi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jm(a){let h="";return K(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Wc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Jm(f),typeof a=="string"?f!=null&&Wi(f):pe(a,h,f))}function xe(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(xe,Ye);var O1=/^https?$/i,L1=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dm.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Zm(this,O);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)f.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(L1,h,void 0)>=0)||y||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Zm(this,O)}};function Zm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,eg(a),La(a)}function eg(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ot(this,"complete"),ot(this,"abort"),La(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),La(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?tg(this):this.Xa())},t.Xa=function(){tg(this)};function tg(a){if(a.h&&typeof i<"u"){if(a.v&&tr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ot(a,"readystatechange"),tr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=O===0){let B=String(a.D).match(Hm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!O1.test(B?B.toLowerCase():"")}f=y}if(f)ot(a,"complete"),ot(a,"success");else{a.o=6;try{var b=tr(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",eg(a)}}finally{La(a)}}}}function La(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ot(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),m1(h)}};function ng(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function M1(a){const h={};a=(a.g&&tr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(A(a[y]))continue;var f=E1(a[y]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[b]||[];h[b]=O,O.push(f)}Z(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function eo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function rg(a){this.za=0,this.i=[],this.j=new Hi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=eo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=eo("baseRetryDelayMs",5e3,a),this.Za=eo("retryDelaySeedMs",1e4,a),this.Ta=eo("forwardChannelMaxRetries",2,a),this.va=eo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Fm(a&&a.concurrentRequestLimit),this.Ba=new V1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=rg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){at(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=dg(this,null,this.W),ja(this)};function qc(a){if(sg(a),a.I==3){var h=a.V++,f=un(a.J);if(pe(f,"SID",a.M),pe(f,"RID",h),pe(f,"TYPE","terminate"),to(a,f),h=new Jn(a,a.j,h),h.M=2,h.A=Va(un(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=fg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Da(h)}hg(a)}function Ma(a){a.g&&(Kc(a),a.g.cancel(),a.g=null)}function sg(a){Ma(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ja(a){if(!Um(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),U||(j(),U=!0),w.add(h,a),a.D=0}}function j1(a,h){return Bm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=zi(c(a.Ea,a,h),cg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new Jn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ce(O),qr(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=og(this,b,h),f=un(this.J),pe(f,"RID",a),pe(f,"CVER",22),this.G&&pe(f,"X-HTTP-Session-Id",this.G),to(this,f),O&&(this.R?h="headers="+Wi(Jm(O))+"&"+h:this.u&&Wc(f,this.u,O)),$c(this.h,b),this.Ra&&pe(f,"TYPE","init"),this.S?(pe(f,"$req",h),pe(f,"SID","null"),b.U=!0,jc(b,f,null)):jc(b,f,h),this.I=2}}else this.I==3&&(a?ig(this,a):this.i.length==0||Um(this.h)||ig(this))};function ig(a,h){var f;h?f=h.l:f=a.V++;const y=un(a.J);pe(y,"SID",a.M),pe(y,"RID",f),pe(y,"AID",a.K),to(a,y),a.u&&a.o&&Wc(y,a.u,a.o),f=new Jn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=og(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),$c(a.h,f),jc(f,y,h)}function to(a,h){a.H&&K(a.H,function(f,y){pe(h,y,f)}),a.l&&K({},function(f,y){pe(h,y,f)})}function og(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let ee=-1;for(;;){const Le=["count="+f];ee==-1?f>0?(ee=b[0].g,Le.push("ofs="+ee)):ee=0:Le.push("ofs="+ee);let he=!0;for(let Ue=0;Ue<f;Ue++){var O=b[Ue].g;const cn=b[Ue].map;if(O-=ee,O<0)ee=Math.max(0,b[Ue].g-100),he=!1;else try{O="req"+O+"_"||"";try{var B=cn instanceof Map?cn:Object.entries(cn);for(const[Jr,nr]of B){let rr=nr;l(nr)&&(rr=Dc(nr)),Le.push(O+Jr+"="+encodeURIComponent(rr))}}catch(Jr){throw Le.push(O+"type="+encodeURIComponent("_badmap")),Jr}}catch{y&&y(cn)}}if(he){B=Le.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function ag(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),U||(j(),U=!0),w.add(h,a),a.A=0}}function Gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=zi(c(a.Da,a),cg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,lg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=zi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),Ma(this),lg(this))};function Kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function lg(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=un(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),to(a,h),a.u&&a.o&&Wc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Va(un(h)),f.u=null,f.R=!0,Lm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Ma(this),Gc(this),at(19))};function Fa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ug(a,h){var f=null;if(a.g==h){Fa(a),Kc(a),a.g=null;var y=2}else if(Bc(a.h,h))f=h.G,$m(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;y=Na(),ot(y,new Nm(y,f)),ja(a)}else ag(a);else if(b=h.m,b==3||b==0&&h.X>0||!(y==1&&j1(a,h)||y==2&&Gc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),b){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function cg(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Xr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const b=!y;y=new Zn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gi(y,"https"),Va(y),b?b1(y.toString(),f):D1(y.toString(),f)}else at(2);a.I=0,a.l&&a.l.pa(h),hg(a),sg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function hg(a){if(a.I=0,a.ja=[],a.l){const h=zm(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ja,h),x(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function dg(a,h,f){var y=f instanceof Zn?un(f):new Zn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ki(y,y.u);else{var b=o.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const O=new Zn(null);y&&Gi(O,y),h&&(O.g=h),b&&Ki(O,b),f&&(O.h=f),y=O}return f=a.G,h=a.wa,f&&h&&pe(y,f,h),pe(y,"VER",a.ka),to(a,y),y}function fg(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new xe(new Hc({ab:f})):new xe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pg(){}t=pg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ua(){}Ua.prototype.g=function(a,h){return new It(a,h)};function It(a,h){Ye.call(this),this.g=new rg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new bs(this)}m(It,Ye),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){qc(this.g)},It.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Dc(a),a=f);h.i.push(new S1(h.Ya++,a)),h.I==3&&ja(h)},It.prototype.N=function(){this.g.l=null,delete this.j,qc(this.g),delete this.g,It.Z.N.call(this)};function mg(a){Vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(mg,Vc);function gg(){Oc.call(this),this.status=1}m(gg,Oc);function bs(a){this.g=a}m(bs,pg),bs.prototype.ra=function(){ot(this.g,"a")},bs.prototype.qa=function(a){ot(this.g,new mg(a))},bs.prototype.pa=function(a){ot(this.g,new gg)},bs.prototype.oa=function(){ot(this.g,"b")},Ua.prototype.createWebChannel=Ua.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,JE=function(){return new Ua},XE=function(){return Na()},YE=Kr,Wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ba.NO_ERROR=0,ba.TIMEOUT=8,ba.HTTP_ERROR=6,Vl=ba,bm.COMPLETE="complete",QE=bm,Rm.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,_o=Rm,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,KE=xe}).apply(typeof al<"u"?al:typeof self<"u"?self:typeof window<"u"?window:{});const u_="@firebase/firestore",c_="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new ec("@firebase/firestore");function Os(){return _s.logLevel}function W(t,...e){if(_s.logLevel<=ne.DEBUG){const n=e.map(Np);_s.debug(`Firestore (${Di}): ${t}`,...n)}}function qn(t,...e){if(_s.logLevel<=ne.ERROR){const n=e.map(Np);_s.error(`Firestore (${Di}): ${t}`,...n)}}function _i(t,...e){if(_s.logLevel<=ne.WARN){const n=e.map(Np);_s.warn(`Firestore (${Di}): ${t}`,...n)}}function Np(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ZE(t,r,n)}function ZE(t,e,n){let r=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qn(r),new Error(r)}function le(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ZE(e,s,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class j2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class F2{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new eI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class U2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class B2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new U2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new h_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new h_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function z2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=z2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function qd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Nh(s)===Nh(i)?re(s,i):Nh(s)?1:-1}return re(t.length,e.length)}const H2=55296,W2=57343;function Nh(t){const e=t.charCodeAt(0);return e>=H2&&e<=W2}function vi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return re(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),s=fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?fn.extractNumericId(e).compare(fn.extractNumericId(n)):qd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class de extends fn{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new de(n)}static emptyPath(){return new de([])}}const q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends fn{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return q2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===d_}static keyField(){return new qe([d_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(de.fromString(e))}static fromName(e){return new G(de.fromString(e).popFirst(5))}static empty(){return new G(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function G2(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f_(t){if(!G.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p_(t){if(G.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!nI(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=-62135596800,g_=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*g_);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<m_)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/g_}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-m_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:Ve("string",ge._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ge(0,0))}static max(){return new X(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ra=-1;function K2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new br(s,G.empty(),e)}function Q2(t){return new br(t.readTime,t.key,ra)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(X.min(),G.empty(),ra)}static max(){return new br(X.max(),G.empty(),ra)}}function Y2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const X2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==X2)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Z2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=-1;function ac(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function eN(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="";function tN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=y_(e)),e=nN(t.get(n),e);return y_(e)}function nN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case rI:n+="";break;default:n+=i}}return n}function y_(t){return t+rI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ll(this.root,e,this.comparator,!0)}}class ll{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v_(this.data.getIterator())}getIteratorFrom(e){return new v_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class v_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Fe(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class iI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new iI("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const rN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=rN.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const oI="server_timestamp",aI="__type__",lI="__previous_value__",uI="__local_write_time__";function Vp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[aI])==null?void 0:r.stringValue)===oI}function lc(t){const e=t.mapValue.fields[lI];return Vp(e)?lc(e):e}function sa(t){const e=Dr(t.mapValue.fields[uI].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r,s,i,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Eu="(default)";class ia{constructor(e,n){this.projectId=e,this.database=n||Eu}static empty(){return new ia("","")}get isDefaultDatabase(){return this.database===Eu}isEqual(e){return e instanceof ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cI="__type__",iN="__max__",ul={mapValue:{}},hI="__vector__",Iu="value";function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vp(t)?4:aN(t)?9007199254740991:oN(t)?10:11:Y(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dr(s.timestampValue),l=Dr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vr(s.bytesValue).isEqual(Vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),l=Ce(i.doubleValue);return o===l?wu(o)===wu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(__(o)!==__(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function oa(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ce(i.integerValue||i.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return w_(t.timestampValue,e.timestampValue);case 4:return w_(sa(t),sa(e));case 5:return qd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Vr(i),u=Vr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=re(l[c],u[c]);if(d!==0)return d}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=re(Ce(i.latitude),Ce(o.latitude));return l!==0?l:re(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return E_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,x,P;const l=i.fields||{},u=o.fields||{},c=(g=l[Iu])==null?void 0:g.arrayValue,d=(I=u[Iu])==null?void 0:I.arrayValue,m=re(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return m!==0?m:E_(c,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ul.mapValue&&o===ul.mapValue)return 0;if(i===ul.mapValue)return 1;if(o===ul.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=qd(u[m],d[m]);if(g!==0)return g;const I=wi(l[u[m]],c[d[m]]);if(I!==0)return I}return re(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function w_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Dr(t),r=Dr(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function E_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=wi(n[s],r[s]);if(i)return i}return re(n.length,r.length)}function Ei(t){return Gd(t)}function Gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gd(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function Ol(t){switch(Or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(t);return e?16+Ol(e):16;case 5:return 2*t.stringValue.length;case 6:return Vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ol(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return zr(r.fields,(i,o)=>{s+=i.length+Ol(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function I_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kd(t){return!!t&&"integerValue"in t}function Op(t){return!!t&&"arrayValue"in t}function T_(t){return!!t&&"nullValue"in t}function S_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function oN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[cI])==null?void 0:r.stringValue)===hI}function Do(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return{...t}}function aN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===iN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Do(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ll(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(Do(this.value))}}function dI(t){const e=[];return zr(t.fields,(n,r)=>{const s=new qe([n]);if(Ll(r)){const i=dI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tu{constructor(e,n){this.position=e,this.inclusive=n}}function x_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function A_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function lN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fI{}class De extends fI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cN(e,n,r):n==="array-contains"?new fN(e,r):n==="in"?new pN(e,r):n==="not-in"?new mN(e,r):n==="array-contains-any"?new gN(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hN(e,r):new dN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(wi(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends fI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new on(e,n)}matches(e){return pI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pI(t){return t.op==="and"}function mI(t){return uN(t)&&pI(t)}function uN(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Qd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ei(t.value);if(mI(t))return t.filters.map(e=>Qd(e)).join(",");{const e=t.filters.map(n=>Qd(n)).join(",");return`${t.op}(${e})`}}function gI(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&gI(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function yI(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Ei(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(yI).join(" ,")+"}"}(t):"Filter"}class cN extends De{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class hN extends De{constructor(e,n){super(e,"in",n),this.keys=_I("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dN extends De{constructor(e,n){super(e,"not-in",n),this.keys=_I("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _I(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class fN extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Op(n)&&oa(n.arrayValue,this.value)}}class pN extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oa(this.value.arrayValue,n)}}class mN extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!oa(this.value.arrayValue,n)}}class gN extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Op(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oa(this.value.arrayValue,r))}}/**
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
 */class yN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function R_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yN(t,e,n,r,s,i,o)}function Lp(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ei(r)).join(",")),e.Te=n}return e.Te}function Mp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!A_(t.startAt,e.startAt)&&A_(t.endAt,e.endAt)}function Yd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _N(t,e,n,r,s,i,o,l){return new Li(t,e,n,r,s,i,o,l)}function jp(t){return new Li(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vI(t){return t.collectionGroup!==null}function Vo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new aa(i,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new aa(qe.keyField(),r))}return e.Ie}function vn(t){const e=J(t);return e.Ee||(e.Ee=vN(e,Vo(t))),e.Ee}function vN(t,e){if(t.limitType==="F")return R_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const n=t.endAt?new Tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tu(t.startAt.position,t.startAt.inclusive):null;return R_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xd(t,e){const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jd(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return Mp(vn(t),vn(e))&&t.limitType===e.limitType}function wI(t){return`${Lp(vn(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>yI(s)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ei(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ei(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=x_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Vo(r),s)||r.endAt&&!function(o,l,u){const c=x_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Vo(r),s))}(t,e)}function wN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function EI(t){return(e,n)=>{let r=!1;for(const s of Vo(t)){const i=EN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function EN(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?wi(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return sI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new Se(G.comparator);function Gn(){return IN}const II=new Se(G.comparator);function vo(...t){let e=II;for(const n of t)e=e.insert(n.key,n);return e}function TI(t){let e=II;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function os(){return Oo()}function SI(){return Oo()}function Oo(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const TN=new Se(G.comparator),SN=new Fe(G.comparator);function se(...t){let e=SN;for(const n of t)e=e.add(n);return e}const xN=new Fe(re);function AN(){return xN}/**
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
 */function Fp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function xI(t){return{integerValue:""+t}}function RN(t,e){return eN(e)?xI(e):Fp(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function CN(t,e,n){return t instanceof la?function(s,i){const o={fields:{[aI]:{stringValue:oI},[uI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vp(i)&&(i=lc(i)),i&&(o.fields[lI]=i),{mapValue:o}}(n,e):t instanceof ua?RI(t,e):t instanceof ca?CI(t,e):function(s,i){const o=AI(s,i),l=P_(o)+P_(s.Ae);return Kd(o)&&Kd(s.Ae)?xI(l):Fp(s.serializer,l)}(t,e)}function PN(t,e,n){return t instanceof ua?RI(t,e):t instanceof ca?CI(t,e):n}function AI(t,e){return t instanceof Su?function(r){return Kd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class la extends hc{}class ua extends hc{constructor(e){super(),this.elements=e}}function RI(t,e){const n=PI(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends hc{constructor(e){super(),this.elements=e}}function CI(t,e){let n=PI(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class Su extends hc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function P_(t){return Ce(t.integerValue||t.doubleValue)}function PI(t){return Op(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n){this.field=e,this.transform=n}}function NN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ua&&s instanceof ua||r instanceof ca&&s instanceof ca?vi(r.elements,s.elements,xn):r instanceof Su&&s instanceof Su?xn(r.Ae,s.Ae):r instanceof la&&s instanceof la}(t.transform,e.transform)}class bN{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function kI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bI(t.key,tn.none()):new xa(t.key,t.data,tn.none());{const n=t.data,r=gt.empty();let s=new Fe(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hr(t.key,r,new xt(s.toArray()),tn.none())}}function DN(t,e,n){t instanceof xa?function(s,i,o){const l=s.value.clone(),u=N_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(s,i,o){if(!Ml(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=N_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(NI(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n,r){return t instanceof xa?function(i,o,l,u){if(!Ml(i.precondition,o))return l;const c=i.value.clone(),d=b_(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(i,o,l,u){if(!Ml(i.precondition,o))return l;const c=b_(i.fieldTransforms,u,o),d=o.data;return d.setAll(NI(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Ml(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=AI(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function k_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vi(r,s,(i,o)=>NN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xa extends dc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hr extends dc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function NI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function N_(t,e,n){const r=new Map;le(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,PN(o,l,n[s]))}return r}function b_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CN(i,o,e))}return r}class bI extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ON extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=SI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=kI(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,r)=>k_(n,r))&&vi(this.baseMutations,e.baseMutations,(n,r)=>k_(n,r))}}class Up{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return TN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Up(e,n,r,s)}}/**
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
 */class MN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,oe;function FN(t){switch(t){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function DI(t){if(t===void 0)return qn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ne.OK:return L.OK;case Ne.CANCELLED:return L.CANCELLED;case Ne.UNKNOWN:return L.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return L.INTERNAL;case Ne.UNAVAILABLE:return L.UNAVAILABLE;case Ne.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ne.NOT_FOUND:return L.NOT_FOUND;case Ne.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ne.ABORTED:return L.ABORTED;case Ne.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ne.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:t})}}(oe=Ne||(Ne={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UN(){return new TextEncoder}/**
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
 */const BN=new Rr([4294967295,4294967295],0);function D_(t){const e=UN().encode(t),n=new GE;return n.update(e),new Uint8Array(n.digest())}function V_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class Bp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wo(`Invalid padding: ${n}`);if(r<0)throw new wo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(BN)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=D_(e),[r,s]=V_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=D_(e),[r,s]=V_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(X.min(),s,new Se(re),Gn(),se())}}class Aa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Aa(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class VI{constructor(e,n){this.targetId=e,this.Ce=n}}class OI{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class O_{constructor(){this.ve=0,this.Fe=L_(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new Aa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=L_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $N{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gn(),this.Je=cl(),this.He=cl(),this.Ye=new Se(re)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Yd(i))if(r===0){const o=new G(i.path);this.et(n,o,nt.newNoDocument(o,X.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Vr(r).toUint8Array()}catch(u){if(u instanceof iI)return _i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bp(o,s,i)}catch(u){return _i(u instanceof wo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Yd(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=se();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.Ye,this.je,r);return this.je=Gn(),this.Je=cl(),this.He=cl(),this.Ye=new Se(re),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new O_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Fe(re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Fe(re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new O_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function cl(){return new Se(G.comparator)}function L_(){return new Se(G.comparator)}const zN={asc:"ASCENDING",desc:"DESCENDING"},HN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WN={and:"AND",or:"OR"};class qN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zd(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GN(t,e){return xu(t,e.toTimestamp())}function wn(t){return le(!!t,49232),X.fromTimestamp(function(n){const r=Dr(n);return new ge(r.seconds,r.nanos)}(t))}function $p(t,e){return ef(t,e).canonicalString()}function ef(t,e){const n=function(s){return new de(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function MI(t){const e=de.fromString(t);return le($I(e),10190,{key:e.toString()}),e}function tf(t,e){return $p(t.databaseId,e.path)}function bh(t,e){const n=MI(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(FI(n))}function jI(t,e){return $p(t.databaseId,e)}function KN(t){const e=MI(t);return e.length===4?de.emptyPath():FI(e)}function nf(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FI(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function M_(t,e,n){return{name:tf(t,e),fields:n.value.mapValue.fields}}function QN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(le(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:DI(c.code);return new H(d,c.message||"")}(o);n=new OI(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bh(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):X.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new jl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bh(t,r.document),i=r.readTime?wn(r.readTime):X.min(),o=nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bh(t,r.document),i=r.removedTargetIds||[];n=new jl([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jN(s,i),l=r.targetId;n=new VI(l,o)}}return n}function YN(t,e){let n;if(e instanceof xa)n={update:M_(t,e.key,e.value)};else if(e instanceof bI)n={delete:tf(t,e.key)};else if(e instanceof Hr)n={update:M_(t,e.key,e.data),updateMask:ib(e.fieldMask)};else{if(!(e instanceof ON))return Y(16599,{Vt:e.type});n={verify:tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:GN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function XN(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(X.min())&&(o=wn(i)),new bN(o,s.transformResults||[])}(n,e))):[]}function JN(t,e){return{documents:[jI(t,e.path)]}}function ZN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jI(t,s);const i=function(c){if(c.length!==0)return BI(on.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Ms(g.field),direction:nb(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function eb(t){let e=KN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(m){const g=UI(m);return g instanceof on&&mI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new aa(js(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ac(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new Tu(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,I=m.values||[];return new Tu(I,g)}(n.endAt)),_N(e,s,o,i,l,"F",u,c)}function tb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=js(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=js(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>UI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function nb(t){return zN[t]}function rb(t){return HN[t]}function sb(t){return WN[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function js(t){return qe.fromServerFormat(t.fieldPath)}function BI(t){return t instanceof De?function(n){if(n.op==="=="){if(S_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NAN"}};if(T_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NAN"}};if(T_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(n.field),op:rb(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(s=>BI(s));return r.length===1?r[0]:{compositeFilter:{op:sb(n.op),filters:r}}}(t):Y(54877,{filter:t})}function ib(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $I(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,s,i=X.min(),o=X.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.yt=e}}function ab(t){const e=eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jd(e,e.limit,"L"):e}/**
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
 */class lb{constructor(){this.Cn=new ub}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(br.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(de.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(de.comparator)).toArray()}}/**
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
 */const j_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zI=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(zI,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ii(0)}static cr(){return new Ii(-1)}}/**
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
 */const F_="LruGarbageCollector",cb=1048576;function U_([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class hb{constructor(e){this.Ir=e,this.buffer=new Fe(U_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();U_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class db{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(F_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Oi(n)?W(F_,"Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Vr(3e5)})}}class fb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(oc.ce);const r=new hb(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(j_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),j_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Os()<=ne.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function pb(t,e){return new fb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Lo(r.mutation,s,xt.empty(),ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=vo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Gn();const o=Oo(),l=function(){return Oo()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof Hr)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Lo(d.mutation,c,d.mutation.getFieldMask(),ge.now())):o.set(c.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new gb(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let s=new Se((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||xt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=SI();d.forEach(g=>{if(!i.has(g)){const I=kI(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(os());let l=ra,u=i;return o.next(c=>M.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:l,changes:TI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=vo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(m,g){return new Li(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=vo();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&Lo(d.mutation,c,xt.empty(),ge.now()),cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class _b{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:ab(s.bundledQuery),readTime:wn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class vb{constructor(){this.overlays=new Se(G.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=os();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=os(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=os(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=os(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MN(n,r));let i=this.qr.get(n);i===void 0&&(i=se(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class wb{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.Qr=new Fe(Be.$r),this.Ur=new Fe(Be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Be(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new de([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new de([])),r=new Be(n,e),s=new Be(n,e+1);let i=se();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||re(e.Yr,n.Yr)}static Kr(e,n){return re(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Fe(Be.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LN(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Dp:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(re);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Be(new G(i),0);let l=new Fe(re);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Be(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.ri=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Y2(Q2(d),r)<=0||(s.has(d.key)||cc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tb(this)}getSize(e){return M.resolve(this.size)}}class Tb extends mb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.persistence=e,this.si=new Rs(n=>Lp(n),Mp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new zp,this.targetCount=0,this.ai=Ii.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.ui={},this.overlays={},this.ci=new oc(0),this.li=!1,this.li=!0,this.hi=new wb,this.referenceDelegate=e(this),this.Pi=new Sb(this),this.indexManager=new lb,this.remoteDocumentCache=function(s){return new Ib(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ob(n),this.Ii=new _b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Eb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new xb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class xb extends J2{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Ri=new zp,this.Vi=null}static mi(e){return new Hp(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const s=G.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Au{constructor(e,n){this.persistence=e,this.pi=new Rs(r=>tN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pb(this,n)}static mi(e,n){return new Au(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,X.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ol(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wp(e,n.fromCache,r,s)}}/**
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
 */class Ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Rb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return XR()?8:Z2(it())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ab;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Os()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Os()<=ne.DEBUG&&W("QueryEngine","Query:",Ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Os()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):M.resolve())}ys(e,n){if(C_(n))return M.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jd(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Jd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return C_(n)||s.isEqual(X.min())?M.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(Os()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ls(n)),this.vs(e,o,n,K2(s,ra)).next(l=>l))})}Ds(e,n){let r=new Fe(EI(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Os()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.ps.getDocumentsMatchingQuery(e,n,br.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const qp="LocalStore",Cb=3e8;class Pb{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Se(re),this.xs=new Rs(i=>Lp(i),Mp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function kb(t,e,n,r){return new Pb(t,e,n,r)}async function WI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Nb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const m=c.batch,g=m.keys();let I=M.resolve();return g.forEach(x=>{I=I.next(()=>d.getEntry(u,x)).next(P=>{const k=c.docVersions.get(x);le(k!==null,48541),P.version.compareTo(k)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function bb(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Qe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(m,I),function(P,k,E){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Cb?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,I,d)&&l.push(n.Pi.updateTargetData(i,I))});let u=Gn(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Db(i,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(X.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next(m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function Db(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Gn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(qp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function Vb(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Dp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ob(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function rf(t,e,n){const r=J(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Oi(o))throw o;W(qp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function B_(t,e,n){const r=J(t);let s=X.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const m=J(u),g=m.xs.get(d);return g!==void 0?M.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,d)}(r,o,vn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:se())).next(l=>(Lb(r,wN(e),l),{documents:l,Qs:i})))}function Lb(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class $_{constructor(){this.activeTargetIds=AN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mb{constructor(){this.Mo=new $_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jb{Oo(e){}shutdown(){}}/**
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
 */const z_="ConnectivityMonitor";class H_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(z_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(z_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hl=null;function sf(){return hl===null?hl=function(){return 268435456+Math.round(2147483648*Math.random())}():hl++,"0x"+hl.toString(16)}/**
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
 */const Dh="RestConnection",Fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ub{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Eu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=sf(),l=this.zo(e,n.toUriEncodedString());W(Dh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),d=Ss(c);return this.Jo(e,l,u,r,d).then(m=>(W(Dh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw _i(Dh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Fb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class $b extends Ub{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=sf();return new Promise((l,u)=>{const c=new KE;c.setWithCredentials(!0),c.listenOnce(QE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vl.NO_ERROR:const m=c.getResponseJson();W(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Vl.TIMEOUT:W(Ze,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const g=c.getStatus();if(W(Ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const P=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(x.status);u(new H(P,x.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Ze,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);W(Ze,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,r,15)})}T_(e,n,r){const s=sf(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JE(),l=XE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");W(Ze,`Creating RPC '${e}' stream ${s}: ${d}`,u);const m=o.createWebChannel(d,u);this.I_(m);let g=!1,I=!1;const x=new Bb({Yo:k=>{I?W(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(W(Ze,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),W(Ze,`RPC '${e}' stream ${s} sending:`,k),m.send(k))},Zo:()=>m.close()}),P=(k,E,v)=>{k.listen(E,T=>{try{v(T)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,_o.EventType.OPEN,()=>{I||(W(Ze,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),P(m,_o.EventType.CLOSE,()=>{I||(I=!0,W(Ze,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(m))}),P(m,_o.EventType.ERROR,k=>{I||(I=!0,_i(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),x.a_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),P(m,_o.EventType.MESSAGE,k=>{var E;if(!I){const v=k.data[0];le(!!v,16349);const T=v,D=(T==null?void 0:T.error)||((E=T[0])==null?void 0:E.error);if(D){W(Ze,`RPC '${e}' stream ${s} received error:`,D);const j=D.status;let U=function(S){const R=Ne[S];if(R!==void 0)return DI(R)}(j),w=D.message;U===void 0&&(U=L.INTERNAL,w="Unknown error status: "+j+" with message "+D.message),I=!0,x.a_(new H(U,w)),m.close()}else W(Ze,`RPC '${e}' stream ${s} received:`,v),x.u_(v)}}),P(l,YE.STAT_EVENT,k=>{k.stat===Wd.PROXY?W(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Wd.NOPROXY&&W(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Vh(){return typeof document<"u"?document:null}/**
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
 */function pc(t){return new qN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="PersistentStream";class KI{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new GI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(W_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(W_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends KI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=QN(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?wn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=nf(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Yd(u)?{documents:JN(i,u)}:{query:ZN(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=LI(i,o.resumeToken);const c=Zd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=xu(i,o.snapshotVersion.toTimestamp());const c=Zd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=tb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=nf(this.serializer),n.removeTarget=e,this.q_(n)}}class Hb extends KI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=XN(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=nf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YN(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{}class qb extends Wb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,ef(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,ef(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Gb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="RemoteStore";class Kb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(W(vs,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await Ra(c),c.Ra.set("Unknown"),c.Ea.delete(4),await mc(c)}(this))})}),this.Ra=new Gb(r,s)}}async function mc(t){if(Cs(t))for(const e of t.da)await e(!0)}async function Ra(t){for(const e of t.da)await e(!1)}function QI(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Yp(n)?Qp(n):Mi(n).O_()&&Kp(n,e))}function Gp(t,e){const n=J(t),r=Mi(n);n.Ia.delete(e),r.O_()&&YI(n,e),n.Ia.size===0&&(r.O_()?r.L_():Cs(n)&&n.Ra.set("Unknown"))}function Kp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).Y_(e)}function YI(t,e){t.Va.Ue(e),Mi(t).Z_(e)}function Qp(t){t.Va=new $N({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.Ra.ua()}function Yp(t){return Cs(t)&&!Mi(t).x_()&&t.Ia.size>0}function Cs(t){return J(t).Ea.size===0}function XI(t){t.Va=void 0}async function Qb(t){t.Ra.set("Online")}async function Yb(t){t.Ia.forEach((e,n)=>{Kp(t,e)})}async function Xb(t,e){XI(t),Yp(t)?(t.Ra.ha(e),Qp(t)):t.Ra.set("Unknown")}async function Jb(t,e,n){if(t.Ra.set("Online"),e instanceof OI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){W(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof jl?t.Va.Ze(e):e instanceof VI?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await qI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),YI(i,u);const m=new mr(d.target,u,c,d.sequenceNumber);Kp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(vs,"Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!Oi(e))throw e;t.Ea.add(1),await Ra(t),t.Ra.set("Offline"),n||(n=()=>qI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(vs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await mc(t)})}function JI(t,e){return e().catch(n=>Ru(t,n,e))}async function gc(t){const e=J(t),n=Lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dp;for(;Zb(e);)try{const s=await Vb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,eD(e,s)}catch(s){await Ru(e,s)}ZI(e)&&eT(e)}function Zb(t){return Cs(t)&&t.Ta.length<10}function eD(t,e){t.Ta.push(e);const n=Lr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ZI(t){return Cs(t)&&!Lr(t).x_()&&t.Ta.length>0}function eT(t){Lr(t).start()}async function tD(t){Lr(t).ra()}async function nD(t){const e=Lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function rD(t,e,n){const r=t.Ta.shift(),s=Up.from(r,e,n);await JI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function sD(t,e){e&&Lr(t).X_&&await async function(r,s){if(function(o){return FN(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Lr(r).B_(),await JI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),ZI(t)&&eT(t)}async function q_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W(vs,"RemoteStore received new credentials");const r=Cs(n);n.Ea.add(3),await Ra(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await mc(n)}async function iD(t,e){const n=J(t);e?(n.Ea.delete(2),await mc(n)):e||(n.Ea.add(2),await Ra(n),n.Ra.set("Unknown"))}function Mi(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new zb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:Qb.bind(null,t),t_:Yb.bind(null,t),r_:Xb.bind(null,t),H_:Jb.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Yp(t)?Qp(t):t.Ra.set("Unknown")):(await t.ma.stop(),XI(t))})),t.ma}function Lr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new Hb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:tD.bind(null,t),r_:sD.bind(null,t),ta:nD.bind(null,t),na:rD.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await gc(t)):(await t.fa.stop(),t.Ta.length>0&&(W(vs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Xp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Oi(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=vo(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.ga=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ti{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ti(e,n,oi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class aD{constructor(){this.queries=K_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=K_(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function K_(){return new Rs(t=>wI(t),uc)}async function tT(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new oD,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Jp(o,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Zp(n)}async function nT(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lD(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Zp(n)}function uD(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Zp(t){t.Ca.forEach(e=>{e.next()})}var of,Q_;(Q_=of||(of={})).Ma="default",Q_.Cache="cache";class rT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.key=e}}class iT{constructor(e){this.key=e}}class cD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=EI(e),this.tu=new oi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new G_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const g=s.get(d),I=cc(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let k=!1;g&&I?g.data.isEqual(I.data)?x!==P&&(r.track({type:3,doc:I}),k=!0):this.su(g,I)||(r.track({type:2,doc:I}),k=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),k=!0):g&&!I&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(l=!0)),k&&(I?(o=o.add(I),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,m)=>function(I,x){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:k})}};return P(I)-P(x)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ti(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new G_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new iT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new sT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ti.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const em="SyncEngine";class hD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dD{constructor(e){this.key=e,this.hu=!1}}class fD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Rs(l=>wI(l),uc),this.Iu=new Map,this.Eu=new Set,this.du=new Se(G.comparator),this.Au=new Map,this.Ru=new zp,this.Vu={},this.mu=new Map,this.fu=Ii.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pD(t,e,n=!0){const r=hT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await oT(r,e,n,!0),s}async function mD(t,e){const n=hT(t);await oT(n,e,!0,!1)}async function oT(t,e,n,r){const s=await Ob(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await gD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&QI(t.remoteStore,s),l}async function gD(t,e,n,r,s){t.pu=(m,g,I)=>async function(P,k,E,v){let T=k.view.ru(E);T.Cs&&(T=await B_(P.localStore,k.query,!1).then(({documents:w})=>k.view.ru(w,T)));const D=v&&v.targetChanges.get(k.targetId),j=v&&v.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(T,P.isPrimaryClient,D,j);return X_(P,k.targetId,U.au),U.snapshot}(t,m,g,I);const i=await B_(t.localStore,e,!0),o=new cD(e,i.Qs),l=o.ru(i.documents),u=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);X_(t,n,c.au);const d=new hD(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function yD(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!uc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gp(r.remoteStore,s.targetId),af(r,s.targetId)}).catch(Vi)):(af(r,s.targetId),await rf(r.localStore,s.targetId,!0))}async function _D(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gp(n.remoteStore,r.targetId))}async function vD(t,e,n){const r=AD(t);try{const s=await function(o,l){const u=J(o),c=ge.now(),d=l.reduce((I,x)=>I.add(x.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=Gn(),P=se();return u.Ns.getEntries(I,d).next(k=>{x=k,x.forEach((E,v)=>{v.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(k=>{m=k;const E=[];for(const v of l){const T=VN(v,m.get(v.key).overlayedDocument);T!=null&&E.push(new Hr(v.key,T,dI(T.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,E,l)}).next(k=>{g=k;const E=k.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,k.batchId,E)})}).then(()=>({batchId:g.batchId,changes:TI(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Se(re)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ca(r,s.changes),await gc(r.remoteStore)}catch(s){const i=Jp(s,"Failed to persist write");n.reject(i)}}async function aT(t,e){const n=J(t);try{const r=await bb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?le(o.hu,14607):s.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))}),await Ca(n,r,e)}catch(r){await Vi(r)}}function Y_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Zp(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,nt.newNoDocument(i,X.min()));const l=se().add(i),u=new fc(X.min(),new Map,new Se(re),o,l);await aT(r,u),r.du=r.du.remove(i),r.Au.delete(e),tm(r)}else await rf(r.localStore,e,!1).then(()=>af(r,e,n)).catch(Vi)}async function ED(t,e){const n=J(t),r=e.batch.batchId;try{const s=await Nb(n.localStore,e);uT(n,r,null),lT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,s)}catch(s){await Vi(s)}}async function ID(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(le(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);uT(r,e,n),lT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,s)}catch(s){await Vi(s)}}function lT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function uT(t,e,n){const r=J(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function af(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||cT(t,r)})}function cT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Gp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),tm(t))}function X_(t,e,n){for(const r of n)r instanceof sT?(t.Ru.addReference(r.key,e),TD(t,r)):r instanceof iT?(W(em,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||cT(t,r.key)):Y(19791,{wu:r})}function TD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(em,"New document in limbo: "+n),t.Eu.add(r),tm(t))}function tm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(de.fromString(e)),r=t.fu.next();t.Au.set(r,new dD(n)),t.du=t.du.insert(n,r),QI(t.remoteStore,new mr(vn(jp(n.path)),r,"TargetPurposeLimboResolution",oc.ce))}}async function Ca(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Wp.As(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,g=>M.forEach(g.Es,I=>d.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>M.forEach(g.ds,I=>d.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Oi(m))throw m;W(qp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const I=d.Ms.get(g),x=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(g,P)}}}(r.localStore,i))}async function SD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W(em,"User change. New user:",e.toKey());const r=await WI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.Ls)}}function xD(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function hT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wD.bind(null,e),e.Pu.H_=lD.bind(null,e.eventManager),e.Pu.yu=uD.bind(null,e.eventManager),e}function AD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ED.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ID.bind(null,e),e}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return kb(this.persistence,new Rb,e.initialUser,this.serializer)}Cu(e){return new HI(Hp.mi,this.serializer)}Du(e){return new Mb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class RD extends Cu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){le(this.persistence.referenceDelegate instanceof Au,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new db(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new HI(r=>Au.mi(r,n),this.serializer)}}class lf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SD.bind(null,this.syncEngine),await iD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aD}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new $b(i)}(e.databaseInfo);return function(i,o,l,u){return new qb(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Kb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Y_(this.syncEngine,n,0),function(){return H_.v()?new H_:new jb}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,d){const m=new fD(s,i,o,l,u,c);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);W(vs,"RemoteStore shutting down."),i.Ea.add(5),await Ra(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}lf.provider={build:()=>new lf};/**
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
 */class dT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirestoreClient";class CD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(Mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oh(t,e){t.asyncQueue.verifyOperationInProgress(),W(Mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await WI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PD(t);W(Mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>q_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>q_(e.remoteStore,s)),t._onlineComponents=e}async function PD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Mr,"Using user provided OfflineComponentProvider");try{await Oh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await Oh(t,new Cu)}}else W(Mr,"Using default OfflineComponentProvider"),await Oh(t,new RD(void 0));return t._offlineComponents}async function fT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Mr,"Using user provided OnlineComponentProvider"),await J_(t,t._uninitializedComponentsProvider._online)):(W(Mr,"Using default OnlineComponentProvider"),await J_(t,new lf))),t._onlineComponents}function kD(t){return fT(t).then(e=>e.syncEngine)}async function pT(t){const e=await fT(t),n=e.eventManager;return n.onListen=pD.bind(null,e.syncEngine),n.onUnlisten=yD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_D.bind(null,e.syncEngine),n}function ND(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new dT({next:g=>{d.Nu(),o.enqueueAndForget(()=>nT(i,m));const I=g.docs.has(l);!I&&g.fromCache?c.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new rT(jp(l.path),d,{includeMetadataChanges:!0,qa:!0});return tT(i,m)}(await pT(t),t.asyncQueue,e,n,r)),r.promise}function bD(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new dT({next:g=>{d.Nu(),o.enqueueAndForget(()=>nT(i,m)),g.fromCache&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new rT(l,d,{includeMetadataChanges:!0,qa:!0});return tT(i,m)}(await pT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function mT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Z_=new Map;/**
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
 */const gT="firestore.googleapis.com",ev=!0;class tv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gT,this.ssl=ev}else this.host=e.host,this.ssl=e.ssl??ev;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cb)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}G2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M2;switch(r.type){case"firstParty":return new B2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z_.get(n);r&&(W("ComponentProvider","Removing Datastore"),Z_.delete(n),r.terminate())}(this),Promise.resolve()}}function DD(t,e,n,r={}){var c;t=Sn(t,yc);const s=Ss(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(yp(`https://${l}`),_p("Firestore",!0)),i.host!==gT&&i.host!==l&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Nr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=et.MOCK_USER;else{d=sE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new et(g)}t._authCredentials=new j2(new eI(d,m))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,ke._jsonSchema))return new ke(e,r||null,new G(de.fromString(n.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Ve("string",ke._jsonSchemaVersion),referencePath:Ve("string")};class Cr extends Ps{constructor(e,n,r){super(e,n,jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new G(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Si(t,e,...n){if(t=Te(t),tI("collection","path",e),t instanceof yc){const r=de.fromString(e,...n);return p_(r),new Cr(t,null,r)}{if(!(t instanceof ke||t instanceof Cr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return p_(r),new Cr(t.firestore,null,r)}}function At(t,e,...n){if(t=Te(t),arguments.length===1&&(e=bp.newId()),tI("doc","path",e),t instanceof yc){const r=de.fromString(e,...n);return f_(r),new ke(t,null,new G(r))}{if(!(t instanceof ke||t instanceof Cr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return f_(r),new ke(t.firestore,t instanceof Cr?t.converter:null,new G(r))}}/**
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
 */const nv="AsyncQueue";class rv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new GI(this,"async_queue_retry"),this._c=()=>{const r=Vh();r&&W(nv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Vh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new jn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Oi(e))throw e;W(nv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,qn("INTERNAL UNHANDLED ERROR: ",sv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Xp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:sv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function sv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ji extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new rv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rv(e),this._firestoreClient=void 0,await e}}}function yT(t,e){const n=typeof t=="object"?t:tc(),r=typeof t=="string"?t:Eu,s=$r(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tE("firestore");i&&DD(s,...i)}return s}function nm(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||VD(t),t._firestoreClient}function VD(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,d){return new sN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,mT(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new CD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Qe.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ve("string",Lt._jsonSchemaVersion),bytes:Ve("string")};/**
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
 */class _c{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Ve("string",En._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
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
 */class In{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:In._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,In._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new In(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}In._jsonSchemaVersion="firestore/vectorValue/1.0",In._jsonSchema={type:Ve("string",In._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=/^__.*__$/;class LD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xa(e,this.data,n,this.fieldTransforms)}}class _T{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:t})}}class rm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Pu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(vT(this.Ac)&&OD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class MD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Cc(e,n,r,s=!1){return new rm({Ac:e,methodName:n,Dc:r,path:qe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wc(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new MD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wT(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);im("Data must be an object, but it was:",o,r);const l=ET(r,o);let u,c;if(i.merge)u=new xt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const g=uf(e,m,n);if(!o.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);TT(d,g)||d.push(g)}u=new xt(d),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new LD(new gt(l),u,c)}class Ec extends vc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ec}}class sm extends vc{_toFieldTransform(e){return new kN(e.path,new la)}isEqual(e){return e instanceof sm}}function jD(t,e,n,r){const s=t.Cc(1,e,n);im("Data must be an object, but it was:",s,r);const i=[],o=gt.empty();zr(r,(u,c)=>{const d=om(e,u,n);c=Te(c);const m=s.yc(d);if(c instanceof Ec)i.push(d);else{const g=Pa(c,m);g!=null&&(i.push(d),o.set(d,g))}});const l=new xt(i);return new _T(o,l,s.fieldTransforms)}function FD(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[uf(e,r,n)],u=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(uf(e,i[g])),u.push(i[g+1]);const c=[],d=gt.empty();for(let g=l.length-1;g>=0;--g)if(!TT(c,l[g])){const I=l[g];let x=u[g];x=Te(x);const P=o.yc(I);if(x instanceof Ec)c.push(I);else{const k=Pa(x,P);k!=null&&(c.push(I),d.set(I,k))}}const m=new xt(c);return new _T(d,m,o.fieldTransforms)}function UD(t,e,n,r=!1){return Pa(n,t.Cc(r?4:3,e))}function Pa(t,e){if(IT(t=Te(t)))return im("Unsupported field value:",e,t),ET(t,e);if(t instanceof vc)return function(r,s){if(!vT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Pa(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:xu(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(s.serializer,i)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:LI(s.serializer,r._byteString)};if(r instanceof ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$p(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof In)return function(o,l){return{mapValue:{fields:{[cI]:{stringValue:hI},[Iu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Fp(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ic(r)}`)}(t,e)}function ET(t,e){const n={};return sI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=Pa(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function IT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof En||t instanceof Lt||t instanceof ke||t instanceof vc||t instanceof In)}function im(t,e,n){if(!IT(n)||!nI(n)){const r=ic(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function uf(t,e,n){if((e=Te(e))instanceof _c)return e._internalPath;if(typeof e=="string")return om(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const BD=new RegExp("[~\\*/\\[\\]]");function om(t,e,n){if(e.search(BD)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _c(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function TT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ST{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $D(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $D extends ST{data(){return super.data()}}function Ic(t,e){return typeof e=="string"?om(t,e):e instanceof _c?e._internalPath:e._delegate._internalPath}/**
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
 */function zD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class am{}class xT extends am{}function AT(t,e,...n){let r=[];e instanceof am&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof lm).length,l=i.filter(u=>u instanceof Tc).length;if(o>1||o>0&&l>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Tc extends xT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tc(e,n,r)}_apply(e){const n=this._parse(e);return CT(e._query,n),new Ps(e.firestore,e.converter,Xd(e._query,n))}_parse(e){const n=wc(e.firestore);return function(i,o,l,u,c,d,m){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ov(m,d);const x=[];for(const P of m)x.push(iv(u,i,P));g={arrayValue:{values:x}}}else g=iv(u,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ov(m,d),g=UD(l,o,m,d==="in"||d==="not-in");return De.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cf(t,e,n){const r=e,s=Ic("where",t);return Tc._create(s,r,n)}class lm extends am{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)CT(o,u),o=Xd(o,u)}(e._query,n),new Ps(e.firestore,e.converter,Xd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class um extends xT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new um(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new aa(i,o)}(e._query,this._field,this._direction);return new Ps(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Li(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function RT(t,e="asc"){const n=e,r=Ic("orderBy",t);return um._create(r,n)}function iv(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vI(e)&&n.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!G.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I_(t,new G(r))}if(n instanceof ke)return I_(t,n._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function ov(t,e){if(!Array.isArray(t)||t.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class HD{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Iu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ce(o.doubleValue));return new In(n)}convertGeoPoint(e){return new En(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);le($I(r),9688,{name:e});const s=new ia(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function PT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends ST{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ic("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:Ve("string",cs._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class Fl extends cs{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new Eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Fl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Fl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:WD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */function xi(t){t=Sn(t,ke);const e=Sn(t.firestore,ji);return ND(nm(e),t._key).then(n=>qD(e,t,n))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:Ve("string",ai._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class kT extends HD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function NT(t){t=Sn(t,Ps);const e=Sn(t.firestore,ji),n=nm(e),r=new kT(e);return zD(t._query),bD(n,t._query).then(s=>new ai(e,r,t,s))}function hf(t,e,n){t=Sn(t,ke);const r=Sn(t.firestore,ji),s=PT(t.converter,e,n);return hm(r,[wT(wc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function cm(t,e,n,...r){t=Sn(t,ke);const s=Sn(t.firestore,ji),i=wc(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof _c?FD(i,"updateDoc",t._key,e,n,r):jD(i,"updateDoc",t._key,e),hm(s,[o.toMutation(t._key,tn.exists(!0))])}function ku(t,e){const n=Sn(t.firestore,ji),r=At(t),s=PT(t.converter,e);return hm(n,[wT(wc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function hm(t,e){return function(r,s){const i=new jn;return r.asyncQueue.enqueueAndForget(async()=>vD(await kD(r),s,i)),i.promise}(nm(t),e)}function qD(t,e,n){const r=n.docs.get(e._key),s=new kT(t);return new cs(t,s,e._key,r,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}function rt(){return new sm("serverTimestamp")}(function(e,n=!0){(function(s){Di=s})(As),sn(new Bt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ji(new F2(r.getProvider("auth-internal")),new $2(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ia(c.options.projectId,d)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Et(u_,c_,e),Et(u_,c_,"esm2020")})();var GD="firebase",KD="12.4.0";/**
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
 */Et(GD,KD,"app");const bT="@firebase/installations",dm="0.6.19";/**
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
 */const DT=1e4,VT=`w:${dm}`,OT="FIS_v2",QD="https://firebaseinstallations.googleapis.com/v1",YD=60*60*1e3,XD="installations",JD="Installations";/**
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
 */const ZD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ws=new xs(XD,JD,ZD);function LT(t){return t instanceof zt&&t.code.includes("request-failed")}/**
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
 */function MT({projectId:t}){return`${QD}/projects/${t}/installations`}function jT(t){return{token:t.token,requestStatus:2,expiresIn:t4(t.expiresIn),creationTime:Date.now()}}async function FT(t,e){const r=(await e.json()).error;return ws.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function UT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function e4(t,{refreshToken:e}){const n=UT(t);return n.append("Authorization",n4(e)),n}async function BT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function t4(t){return Number(t.replace("s","000"))}function n4(t){return`${OT} ${t}`}/**
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
 */async function r4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=MT(t),s=UT(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:OT,appId:t.appId,sdkVersion:VT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await BT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:jT(c.authToken)}}else throw await FT("Create Installation",u)}/**
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
 */function $T(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function s4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const i4=/^[cdef][\w-]{21}$/,df="";function o4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=a4(t);return i4.test(n)?n:df}catch{return df}}function a4(t){return s4(t).substr(0,22)}/**
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
 */function Sc(t){return`${t.appName}!${t.appId}`}/**
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
 */const zT=new Map;function HT(t,e){const n=Sc(t);WT(n,e),l4(n,e)}function WT(t,e){const n=zT.get(t);if(n)for(const r of n)r(e)}function l4(t,e){const n=u4();n&&n.postMessage({key:t,fid:e}),c4()}let as=null;function u4(){return!as&&"BroadcastChannel"in self&&(as=new BroadcastChannel("[Firebase] FID Change"),as.onmessage=t=>{WT(t.data.key,t.data.fid)}),as}function c4(){zT.size===0&&as&&(as.close(),as=null)}/**
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
 */const h4="firebase-installations-database",d4=1,Es="firebase-installations-store";let Lh=null;function fm(){return Lh||(Lh=cE(h4,d4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Es)}}})),Lh}async function Nu(t,e){const n=Sc(t),s=(await fm()).transaction(Es,"readwrite"),i=s.objectStore(Es),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&HT(t,e.fid),e}async function qT(t){const e=Sc(t),r=(await fm()).transaction(Es,"readwrite");await r.objectStore(Es).delete(e),await r.done}async function xc(t,e){const n=Sc(t),s=(await fm()).transaction(Es,"readwrite"),i=s.objectStore(Es),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&HT(t,l.fid),l}/**
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
 */async function pm(t){let e;const n=await xc(t.appConfig,r=>{const s=f4(r),i=p4(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===df?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function f4(t){const e=t||{fid:o4(),registrationStatus:0};return GT(e)}function p4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ws.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=m4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:g4(t)}:{installationEntry:e}}async function m4(t,e){try{const n=await r4(t,e);return Nu(t.appConfig,n)}catch(n){throw LT(n)&&n.customData.serverCode===409?await qT(t.appConfig):await Nu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function g4(t){let e=await av(t.appConfig);for(;e.registrationStatus===1;)await $T(100),e=await av(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pm(t);return r||n}return e}function av(t){return xc(t,e=>{if(!e)throw ws.create("installation-not-found");return GT(e)})}function GT(t){return y4(t)?{fid:t.fid,registrationStatus:0}:t}function y4(t){return t.registrationStatus===1&&t.registrationTime+DT<Date.now()}/**
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
 */async function _4({appConfig:t,heartbeatServiceProvider:e},n){const r=v4(t,n),s=e4(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:VT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await BT(()=>fetch(r,l));if(u.ok){const c=await u.json();return jT(c)}else throw await FT("Generate Auth Token",u)}function v4(t,{fid:e}){return`${MT(t)}/${e}/authTokens:generate`}/**
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
 */async function mm(t,e=!1){let n;const r=await xc(t.appConfig,i=>{if(!KT(i))throw ws.create("not-registered");const o=i.authToken;if(!e&&I4(o))return i;if(o.requestStatus===1)return n=w4(t,e),i;{if(!navigator.onLine)throw ws.create("app-offline");const l=S4(i);return n=E4(t,l),l}});return n?await n:r.authToken}async function w4(t,e){let n=await lv(t.appConfig);for(;n.authToken.requestStatus===1;)await $T(100),n=await lv(t.appConfig);const r=n.authToken;return r.requestStatus===0?mm(t,e):r}function lv(t){return xc(t,e=>{if(!KT(e))throw ws.create("not-registered");const n=e.authToken;return x4(n)?{...e,authToken:{requestStatus:0}}:e})}async function E4(t,e){try{const n=await _4(t,e),r={...e,authToken:n};return await Nu(t.appConfig,r),n}catch(n){if(LT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Nu(t.appConfig,r)}throw n}}function KT(t){return t!==void 0&&t.registrationStatus===2}function I4(t){return t.requestStatus===2&&!T4(t)}function T4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+YD}function S4(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function x4(t){return t.requestStatus===1&&t.requestTime+DT<Date.now()}/**
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
 */async function A4(t){const e=t,{installationEntry:n,registrationPromise:r}=await pm(e);return r?r.catch(console.error):mm(e).catch(console.error),n.fid}/**
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
 */async function R4(t,e=!1){const n=t;return await C4(n),(await mm(n,e)).token}async function C4(t){const{registrationPromise:e}=await pm(t);e&&await e}/**
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
 */function P4(t){if(!t||!t.options)throw Mh("App Configuration");if(!t.name)throw Mh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Mh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Mh(t){return ws.create("missing-app-config-values",{valueName:t})}/**
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
 */const QT="installations",k4="installations-internal",N4=t=>{const e=t.getProvider("app").getImmediate(),n=P4(e),r=$r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},b4=t=>{const e=t.getProvider("app").getImmediate(),n=$r(e,QT).getImmediate();return{getId:()=>A4(n),getToken:s=>R4(n,s)}};function D4(){sn(new Bt(QT,N4,"PUBLIC")),sn(new Bt(k4,b4,"PRIVATE"))}D4();Et(bT,dm);Et(bT,dm,"esm2020");/**
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
 */const bu="analytics",V4="firebase_id",O4="origin",L4=60*1e3,M4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gm="https://www.googletagmanager.com/gtag/js";/**
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
 */const ct=new ec("@firebase/analytics");/**
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
 */const j4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new xs("analytics","Analytics",j4);/**
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
 */function F4(t){if(!t.startsWith(gm)){const e=Ct.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function YT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function U4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function B4(t,e){const n=U4("firebase-js-sdk-policy",{createScriptURL:F4}),r=document.createElement("script"),s=`${gm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function $4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function z4(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await YT(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){ct.error(l)}t("config",s,i)}async function H4(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await YT(n);for(const u of o){const c=l.find(m=>m.measurementId===u),d=c&&e[c.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ct.error(i)}}function W4(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await H4(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await z4(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){ct.error(l)}}return s}function q4(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=W4(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function G4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gm)&&n.src.includes(t))return n;return null}/**
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
 */const K4=30,Q4=1e3;class Y4{constructor(e={},n=Q4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const XT=new Y4;function X4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function J4(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:X4(n)},s=M4.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function Z4(t,e=XT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ct.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new nV;return setTimeout(async()=>{l.abort()},L4),JT({appId:r,apiKey:s,measurementId:i},o,l,e)}async function JT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=XT){var l;const{appId:i,measurementId:o}=t;try{await eV(r,e)}catch(u){if(o)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await J4(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!tV(c)){if(s.deleteThrottleMetadata(i),o)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Vy(n,s.intervalMillis,K4):Vy(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,m),ct.debug(`Calling attemptFetch again in ${d} millis`),JT(t,m,r,s)}}function eV(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tV(t){if(!(t instanceof zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rV(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function sV(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function iV(){if(oE())try{await aE()}catch(t){return ct.warn(Ct.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ct.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oV(t,e,n,r,s,i,o){const l=Z4(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ct.error(g)),e.push(l);const u=iV().then(g=>{if(g)return r.getId()}),[c,d]=await Promise.all([l,u]);G4(i)||B4(i,c.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[O4]="firebase",m.update=!0,d!=null&&(m[V4]=d),s("config",c.measurementId,m),c.measurementId}/**
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
 */class aV{constructor(e){this.app=e}_delete(){return delete li[this.app.options.appId],Promise.resolve()}}let li={},uv=[];const cv={};let jh="dataLayer",lV="gtag",hv,ym,dv=!1;function uV(){const t=[];if(iE()&&t.push("This is a browser extension environment."),JR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function cV(t,e,n){uV();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(li[r]!=null)throw Ct.create("already-exists",{id:r});if(!dv){$4(jh);const{wrappedGtag:i,gtagCore:o}=q4(li,uv,cv,jh,lV);ym=i,hv=o,dv=!0}return li[r]=oV(t,uv,cv,e,hv,jh,n),new aV(t)}function ZT(t=tc()){t=Te(t);const e=$r(t,bu);return e.isInitialized()?e.getImmediate():hV(t)}function hV(t,e={}){const n=$r(t,bu);if(n.isInitialized()){const s=n.getImmediate();if(Nr(e,n.getOptions()))return s;throw Ct.create("already-initialized")}return n.initialize({options:e})}function dV(t,e,n){t=Te(t),sV(ym,li[t.app.options.appId],e,n).catch(r=>ct.error(r))}function fV(t,e,n,r){t=Te(t),rV(ym,li[t.app.options.appId],e,n,r).catch(s=>ct.error(s))}const fv="@firebase/analytics",pv="0.10.19";function pV(){sn(new Bt(bu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cV(r,s,n)},"PUBLIC")),sn(new Bt("analytics-internal",t,"PRIVATE")),Et(fv,pv),Et(fv,pv,"esm2020");function t(e){try{const n=e.getProvider(bu).getImmediate();return{logEvent:(r,s,i)=>fV(n,r,s,i),setUserProperties:(r,s)=>dV(n,r,s)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}pV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="firebasestorage.googleapis.com",mV="storageBucket",gV=2*60*1e3,yV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends zt{constructor(e,n,r=0){super(Fh(e),`Firebase Storage: ${n} (${Fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var An;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(An||(An={}));function Fh(t){return"storage/"+t}function _V(){const t="An unknown error occurred, please check the error payload for server response.";return new Cn(An.UNKNOWN,t)}function vV(){return new Cn(An.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wV(){return new Cn(An.CANCELED,"User canceled the upload/download.")}function EV(t){return new Cn(An.INVALID_URL,"Invalid URL '"+t+"'.")}function IV(t){return new Cn(An.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mv(t){return new Cn(An.INVALID_ARGUMENT,t)}function t1(){return new Cn(An.APP_DELETED,"The Firebase app was deleted.")}function TV(t){return new Cn(An.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw IV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${d}/b/${s}/o${g}`,"i"),x={bucket:1,path:3},P=n===e1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",E=new RegExp(`^https?://${P}/${s}/${k}`,"i"),T=[{regex:l,indices:u,postModify:i},{regex:I,indices:x,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<T.length;D++){const j=T[D],U=j.regex.exec(e);if(U){const w=U[j.indices.bucket];let _=U[j.indices.path];_||(_=""),r=new Xt(w,_),j.postModify(r);break}}if(r==null)throw EV(e);return r}}class SV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function m(k){s=setTimeout(()=>{s=null,t(I,u())},k)}function g(){i&&clearTimeout(i)}function I(k,...E){if(c){g();return}if(k){g(),d.call(null,k,...E);return}if(u()||o){g(),d.call(null,k,...E);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,m(T)}let x=!1;function P(k){x||(x=!0,g(),!c&&(s!==null?(k||(l=2),clearTimeout(s),m(0)):k||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function AV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t){return t!==void 0}function gv(t,e,n,r){if(r<e)throw mv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw mv(`Invalid value for '${t}'. Expected ${n} or less.`)}function CV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Du;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Du||(Du={}));/**
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
 */function PV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,n,r,s,i,o,l,u,c,d,m,g=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,P)=>{this.resolve_=x,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new dl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Du.NO_ERROR,u=i.getStatus();if(!l||PV(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Du.ABORT;r(!1,new dl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new dl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());RV(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=_V();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?t1():wV();o(u)}else{const u=vV();o(u)}};this.canceled_?n(!1,new dl(!1,null,!0)):this.backoffId_=xV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class dl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function NV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function OV(t,e,n,r,s,i,o=!0,l=!1){const u=CV(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return DV(d,e),NV(d,n),bV(d,i),VV(d,r),new kV(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Vu{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vu(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MV(this._location.path)}get storage(){return this._service}get parent(){const e=LV(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new Vu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw TV(e)}}function yv(t,e){const n=e==null?void 0:e[mV];return n==null?null:Xt.makeFromBucketSpec(n,t)}function jV(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ss(e);s&&(yp(`https://${t.host}/b`),_p("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:sE(i,t.app.options.projectId))}class FV{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=e1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gV,this._maxUploadRetryTime=yV,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=yv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=yv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vu(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new SV(t1());{const o=OV(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _v="@firebase/storage",vv="0.14.0";/**
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
 */const n1="storage";function r1(t=tc(),e){t=Te(t);const r=$r(t,n1).getImmediate({identifier:e}),s=tE("storage");return s&&UV(r,...s),r}function UV(t,e,n,r={}){jV(t,e,n,r)}function BV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new FV(n,r,s,e,As)}function $V(){sn(new Bt(n1,BV,"PUBLIC").setMultipleInstances(!0)),Et(_v,vv,""),Et(_v,vv,"esm2020")}$V();const zV={apiKey:"AIzaSyBWw_FjAs09WYaP-dIeNUE6SNaDOXgY_Tk",authDomain:"dermaglare-web-app.firebaseapp.com",projectId:"dermaglare-web-app",storageBucket:"dermaglare-web-app.firebasestorage.app",messagingSenderId:"67529503663",appId:"1:67529503663:web:f5080744b553ac9ff0b55a",measurementId:"G-QRJFW9XB4Q"},Ac=wp(zV),Fi=qE(Ac),gr=yT(Ac);r1(Ac);ZT(Ac);const s1=new mn;s1.setCustomParameters({prompt:"select_account"});const i1=t=>t.length<8?{isValid:!1,error:"Password must be at least 8 characters long."}:/[A-Z]/.test(t)?/[a-z]/.test(t)?/[0-9]/.test(t)?{isValid:!0}:{isValid:!1,error:"Password must contain at least one number."}:{isValid:!1,error:"Password must contain at least one lowercase letter."}:{isValid:!1,error:"Password must contain at least one uppercase letter."},HV=(t,e)=>t!==e?{isValid:!1,error:"Passwords do not match."}:{isValid:!0},WV=async(t,e)=>{try{const n=await vk(Fi,t,e),r=await xi(At(gr,"patients",n.user.uid));if(!r.exists())throw new Error("Patient record not found. Please contact support.");return{user:n.user,patientData:r.data()}}catch(n){throw console.error("Login error:",n),new Error(Rc(n.code))}},qV=async(t,e,n,r)=>{try{console.log("Starting signup process for:",t);const s=i1(e);if(!s.isValid)throw new Error(s.error);console.log("Creating user account...");const i=await _k(Fi,t,e);console.log("User account created with UID:",i.user.uid),console.log("Updating user profile..."),await Ek(i.user,{displayName:n}),console.log("Profile updated successfully"),console.log("Creating patient record in Firestore...");const o={name:n,email:t,createdAt:rt(),lastVisit:rt(),role:"patient",status:"active",...r};if(await hf(At(gr,"patients",i.user.uid),o),console.log("Patient record created successfully"),!(await xi(At(gr,"patients",i.user.uid))).exists())throw console.error("CRITICAL: Patient document not found after creation!"),new Error("Failed to create patient record. Please try again.");return console.log("Patient record verified in database"),i.user}catch(s){throw console.error("Signup error:",s),console.error("Error code:",s.code),console.error("Error message:",s.message),s.code==="permission-denied"?new Error("Database permission error. Please contact support. Your account may have been created but needs verification."):new Error(Rc(s.code))}},GV=async()=>{try{console.log("Starting Google sign-in...");const t=await Wk(Fi,s1);console.log("Google sign-in successful, UID:",t.user.uid);const e=await xi(At(gr,"patients",t.user.uid));if(console.log("Patient document exists:",e.exists()),e.exists())return console.log("Updating last visit for existing user..."),await hf(At(gr,"patients",t.user.uid),{lastVisit:rt()},{merge:!0}),console.log("Last visit updated"),{user:t.user,patientData:e.data()};{console.log("Creating new patient record for Google user...");const n={name:t.user.displayName||"Google User",email:t.user.email,photoURL:t.user.photoURL,createdAt:rt(),lastVisit:rt(),role:"patient",status:"active"};if(await hf(At(gr,"patients",t.user.uid),n),console.log("New patient record created"),!(await xi(At(gr,"patients",t.user.uid))).exists())throw console.error("CRITICAL: Patient document not found after creation!"),new Error("Failed to create patient record. Please try again.");return console.log("Patient record verified in database"),{user:t.user,patientData:n}}}catch(t){throw console.error("Google login error:",t),console.error("Error code:",t.code),console.error("Error message:",t.message),t.code==="permission-denied"?new Error("Database permission error. Please contact support. Your account may have been created but needs verification."):new Error(Rc(t.code))}},KV=async()=>{try{await xk(Fi)}catch(t){throw console.error("Logout error:",t),new Error("Failed to logout. Please try again.")}},QV=async t=>{try{await yk(Fi,t)}catch(e){throw console.error("Password reset error:",e),new Error(Rc(e.code))}},YV=t=>Sk(Fi,t),Rc=t=>({"auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password. Please try again.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/network-request-failed":"Network error. Please check your connection.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Only one popup request is allowed at a time.","auth/operation-not-allowed":"This sign-in method is not enabled. Please contact support.","permission-denied":"Database permission error. Please contact support."})[t]||"An error occurred. Please try again.",XV=async t=>{try{const e=await xi(At(gr,"patients",t));return e.exists()?{id:e.id,...e.data()}:null}catch(e){throw console.error("Error fetching patient profile:",e),e}},o1=V.createContext(void 0),Wr=()=>{const t=V.useContext(o1);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},JV=({children:t})=>{const[e,n]=V.useState(null),[r,s]=V.useState(!0),[i,o]=V.useState([]);V.useEffect(()=>YV(async x=>{if(x)try{const P=await XV(x.uid);n({...x,displayName:(P==null?void 0:P.name)||x.displayName||"Patient",photoURL:(P==null?void 0:P.photoURL)||x.photoURL||`https://ui-avatars.com/api/?name=${(P==null?void 0:P.name)||"P"}&background=F4E48E&color=3A565B`})}catch(P){console.error("Failed to fetch patient profile",P),n({...x,displayName:x.displayName||"Patient",photoURL:x.photoURL||`https://ui-avatars.com/api/?name=${x.displayName||"P"}&background=F4E48E&color=3A565B`})}else n(null);s(!1)}),[]);const l=async(I,x)=>{await WV(I,x)},u=async(I,x,P)=>{await qV(I,x,P)},c=async()=>{await KV()},d=V.useCallback((I,x="info")=>{const P=Math.random().toString(36).substr(2,9);o(k=>[...k,{id:P,message:I,type:x}]),setTimeout(()=>m(P),5e3)},[]),m=I=>{o(x=>x.filter(P=>P.id!==I))},g={user:e,loading:r,login:l,signup:u,logout:c,showToast:d,toasts:i,removeToast:m};return p.jsx(o1.Provider,{value:g,children:t})},ff=({className:t})=>p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:p.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),ui=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),p.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Uh=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ZV=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),p.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),fl=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),p.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),eO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),p.jsx("polyline",{points:"7 10 12 15 17 10"}),p.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]}),tO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"}),p.jsx("path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}),p.jsx("path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}),p.jsx("path",{d:"M10 6h4"}),p.jsx("path",{d:"M10 10h4"}),p.jsx("path",{d:"M10 14h4"}),p.jsx("path",{d:"M10 18h4"})]}),nO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}),p.jsx("circle",{cx:"12",cy:"12",r:"2"}),p.jsx("path",{d:"M6 12h.01"}),p.jsx("path",{d:"M18 12h.01"})]}),Bh=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("circle",{cx:"12",cy:"12",r:"10"}),p.jsx("polyline",{points:"12 6 12 12 16 14"})]}),pf=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("circle",{cx:"12",cy:"12",r:"10"}),p.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),p.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),rO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),p.jsx("polyline",{points:"22 6 12 13 2 6"})]}),pl=({className:t})=>p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:p.jsx("polyline",{points:"20 6 9 17 4 12"})}),sO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),p.jsx("polyline",{points:"12 5 19 12 12 19"})]}),iO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),p.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),a1=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),p.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),oO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),p.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),aO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),p.jsx("polyline",{points:"16 17 21 12 16 7"}),p.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]}),lO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),p.jsx("line",{x1:"3",x2:"21",y1:"6",y2:"6"}),p.jsx("line",{x1:"3",x2:"21",y1:"18",y2:"18"})]}),uO=({className:t})=>p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[p.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),p.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),l1=({className:t})=>p.jsx("div",{className:`font-bold text-2xl text-brand-dark ${t}`,children:"Dermагlare"}),cO={apiKey:"AIzaSyBWw_FjAs09WYaP-dIeNUE6SNaDOXgY_Tk",authDomain:"dermaglare-web-app.firebaseapp.com",projectId:"dermaglare-web-app",storageBucket:"dermaglare-web-app.firebasestorage.app",messagingSenderId:"67529503663",appId:"1:67529503663:web:f5080744b553ac9ff0b55a",measurementId:"G-QRJFW9XB4Q"},Cc=wp(cO);qE(Cc);const Tn=yT(Cc);r1(Cc);ZT(Cc);new mn;const Vs=t=>`R${t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`,hO=async t=>{try{const e=Si(Tn,"invoices"),n=AT(e,cf("patientId","==",t),RT("createdAt","desc"));return(await NT(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching patient invoices:",e),[]}},dO=async t=>{try{const e=Si(Tn,"invoices"),n=AT(e,cf("patientId","==",t),cf("status","==","pending"),RT("dueDate","asc"));return(await NT(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching pending invoices:",e),[]}},ha=async t=>{try{const e=At(Tn,"invoices",t),n=await xi(e);return n.exists()?{id:n.id,...n.data()}:null}catch(e){return console.error("Error fetching invoice:",e),null}},u1=(t=2e3)=>new Promise(e=>setTimeout(e,t)),_m=()=>{const t=Date.now(),e=Math.floor(Math.random()*1e5);return`TXN-${t}-${e}`},fO=t=>{const e=t.replace(/\s+/g,"");if(!/^\d{13,19}$/.test(e))return!1;let n=0,r=!1;for(let s=e.length-1;s>=0;s--){let i=parseInt(e[s]);r&&(i*=2,i>9&&(i-=9)),n+=i,r=!r}return n%10===0},pO=async(t,e)=>{try{if(!fO(e.cardNumber))return{success:!1,message:"Invalid card number"};const n=new Date;if(new Date(parseInt(`20${e.expiryYear}`),parseInt(e.expiryMonth)-1)<n)return{success:!1,message:"Card has expired"};if(!/^\d{3,4}$/.test(e.cvv))return{success:!1,message:"Invalid CVV"};const s=await ha(t);if(!s)return{success:!1,message:"Invoice not found"};if(s.status==="paid")return{success:!1,message:"Invoice already paid"};if(await u1(2e3),Math.random()<.1){const d={invoiceId:t,amount:s.amount,currency:"ZAR",status:"failed",paymentMethod:"card",createdAt:rt(),updatedAt:rt()};return await ku(Si(Tn,"payment_intents"),d),{success:!1,message:"Payment declined by bank. Please try again or use a different card."}}const o=_m(),l={invoiceId:t,amount:s.amount,currency:"ZAR",status:"succeeded",paymentMethod:"card",createdAt:rt(),updatedAt:rt()};await ku(Si(Tn,"payment_intents"),l);const u=At(Tn,"invoices",t);await cm(u,{status:"paid",paymentMethod:"card",transactionId:o,paidAt:new Date().toISOString(),updatedAt:rt()});const c=await ha(t);return{success:!0,transactionId:o,message:"Payment processed successfully",invoice:c}}catch(n){return console.error("Error processing card payment:",n),{success:!1,message:"Payment processing failed. Please try again."}}},mO=async(t,e)=>{try{const n=await ha(t);if(!n)return{success:!1,message:"Invoice not found"};if(n.status==="paid")return{success:!1,message:"Invoice already paid"};await u1(1500);const r=_m(),s={invoiceId:t,amount:n.amount,currency:"ZAR",status:"processing",paymentMethod:"eft",createdAt:rt(),updatedAt:rt()};await ku(Si(Tn,"payment_intents"),s);const i=At(Tn,"invoices",t);return await cm(i,{status:"pending",paymentMethod:"eft",transactionId:r,updatedAt:rt()}),{success:!0,transactionId:r,message:"EFT payment initiated. Please allow 1-3 business days for processing."}}catch(n){return console.error("Error processing EFT payment:",n),{success:!1,message:"EFT payment failed. Please try again."}}},gO=async(t,e)=>{try{const n=await ha(t);if(!n)return{success:!1,message:"Invoice not found"};if(n.status==="paid")return{success:!1,message:"Invoice already paid"};if(e<n.amount)return{success:!1,message:"Insufficient payment amount"};const r=_m(),s={invoiceId:t,amount:n.amount,currency:"ZAR",status:"succeeded",paymentMethod:"cash",createdAt:rt(),updatedAt:rt()};await ku(Si(Tn,"payment_intents"),s);const i=At(Tn,"invoices",t);await cm(i,{status:"paid",paymentMethod:"cash",transactionId:r,paidAt:new Date().toISOString(),updatedAt:rt()});const o=await ha(t);return{success:!0,transactionId:r,message:"Cash payment recorded successfully",invoice:o}}catch(n){return console.error("Error processing cash payment:",n),{success:!1,message:"Cash payment recording failed"}}},yO=t=>{const e=[],n=["paid","pending","paid","overdue"],r=[{serviceId:"consultation",serviceName:"Standard Consultation",price:999,quantity:1,total:999},{serviceId:"laser_treatment",serviceName:"Laser Treatment",price:1500,quantity:1,total:1500},{serviceId:"acne_treatment",serviceName:"Acne Treatment",price:650,quantity:1,total:650},{serviceId:"mole_removal",serviceName:"Mole Removal",price:800,quantity:1,total:800}];for(let s=0;s<4;s++){const i=new Date;i.setMonth(i.getMonth()-s);const o=new Date(i);o.setDate(o.getDate()+30),e.push({id:`INV-20240${7-s}-00${s+1}`,patientId:t,patientName:"Mock Patient",amount:r[s].total,status:n[s],date:i.toISOString().split("T")[0],dueDate:o.toISOString().split("T")[0],services:[r[s]],description:r[s].serviceName,createdAt:i.toISOString(),updatedAt:i.toISOString()})}return e},_O=({patientId:t})=>{const{user:e}=Wr(),[n,r]=V.useState([]),[s,i]=V.useState([]),[o,l]=V.useState(!0),[u,c]=V.useState(null),[d,m]=V.useState(!1),[g,I]=V.useState("card"),[x,P]=V.useState(!1),[k,E]=V.useState(null),[v,T]=V.useState({cardNumber:"",expiryMonth:"",expiryYear:"",cvv:"",cardholderName:""}),[D,j]=V.useState({accountHolder:"",accountNumber:"",bankName:"",branchCode:""}),[U,w]=V.useState("");V.useEffect(()=>{_()},[t]);const _=async(z=!1)=>{if(!e){l(!1);return}l(!0);try{const ie=e.uid;if(z){const $=yO(ie),K=$,Z=$.filter(ce=>ce.status==="pending"||ce.status==="overdue");r(K),i(Z)}else{const[$,K]=await Promise.all([hO(ie),dO(ie)]);r($),i(K)}}catch(ie){console.error("Error loading invoices:",ie)}finally{l(!1)}},S=z=>{c(z),m(!0),E(null)},R=async()=>{if(u){P(!0),E(null);try{let z;switch(g){case"card":z=await pO(u.id,v);break;case"eft":z=await mO(u.id,D);break;case"cash":z=await gO(u.id,parseFloat(U));break;default:throw new Error("Invalid payment method")}E(z),z.success&&setTimeout(()=>{_(),m(!1),C()},3e3)}catch(z){console.error("Payment error:",z),E({success:!1,message:"An unexpected error occurred. Please try again."})}finally{P(!1)}}},C=()=>{T({cardNumber:"",expiryMonth:"",expiryYear:"",cvv:"",cardholderName:""}),j({accountHolder:"",accountNumber:"",bankName:"",branchCode:""}),w(""),E(null)},N=z=>{const ie=z.replace(/\s+/g,""),$=ie.match(/.{1,4}/g);return $?$.join(" "):ie},A=z=>{const ie=z.target.value.replace(/\s+/g,"");/^\d{0,16}$/.test(ie)&&T({...v,cardNumber:ie})},Oe=z=>{switch(z){case"paid":return"text-green-600 bg-green-50";case"pending":return"text-yellow-600 bg-yellow-50";case"overdue":return"text-red-600 bg-red-50";case"cancelled":return"text-gray-600 bg-gray-50";default:return"text-gray-600 bg-gray-50"}},Ht=z=>{switch(z){case"paid":return p.jsx(ui,{className:"w-4 h-4"});case"pending":return p.jsx(Bh,{className:"w-4 h-4"});case"overdue":return p.jsx(pf,{className:"w-4 h-4"});case"cancelled":return p.jsx(Uh,{className:"w-4 h-4"});default:return p.jsx(Bh,{className:"w-4 h-4"})}};return s.reduce((z,ie)=>z+ie.amount,0),s.length>0&&s[0].dueDate,n.filter(z=>z.status==="paid"),o?p.jsx("div",{className:"flex items-center justify-center h-64",children:p.jsx(ff,{className:"w-8 h-8 animate-spin text-[#4E747B]"})}):p.jsxs("div",{className:"container mx-auto p-4 md:p-8 bg-gray-50",children:[p.jsxs("header",{className:"mb-8",children:[p.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"Billing & Payments"}),p.jsx("p",{className:"text-gray-600 mt-2",children:"View your invoices, manage payments, and see your transaction history."}),p.jsx("button",{onClick:()=>_(!0),className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Load Mock Data"})]}),p.jsxs("section",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[p.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-gray-100",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm text-gray-600",children:"Total Outstanding"}),p.jsx("p",{className:"text-2xl font-bold text-[#3A565B] mt-1",children:Vs(s.reduce((z,ie)=>z+ie.amount,0))})]}),p.jsx("div",{className:"w-12 h-12 rounded-full bg-red-50 flex items-center justify-center",children:p.jsx(pf,{className:"w-6 h-6 text-red-600"})})]})}),p.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-gray-100",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm text-gray-600",children:"Pending Invoices"}),p.jsx("p",{className:"text-2xl font-bold text-[#3A565B] mt-1",children:s.length})]}),p.jsx("div",{className:"w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center",children:p.jsx(Bh,{className:"w-6 h-6 text-yellow-600"})})]})}),p.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-gray-100",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm text-gray-600",children:"Total Paid"}),p.jsx("p",{className:"text-2xl font-bold text-[#3A565B] mt-1",children:Vs(n.filter(z=>z.status==="paid").reduce((z,ie)=>z+ie.amount,0))})]}),p.jsx("div",{className:"w-12 h-12 rounded-full bg-green-50 flex items-center justify-center",children:p.jsx(ui,{className:"w-6 h-6 text-green-600"})})]})})]}),s.length>0&&p.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-xl p-6",children:[p.jsx("h2",{className:"text-lg font-semibold text-yellow-900 mb-4",children:"Outstanding Payments"}),p.jsx("div",{className:"space-y-3",children:s.map(z=>p.jsxs("div",{className:"bg-white rounded-lg p-4 flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"font-medium text-gray-900",children:z.description}),p.jsxs("p",{className:"text-sm text-gray-600",children:["Due: ",z.dueDate]})]}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("p",{className:"text-lg font-bold text-[#3A565B]",children:Vs(z.amount)}),p.jsx("button",{onClick:()=>S(z),className:"px-6 py-2 bg-[#4E747B] text-white rounded-lg hover:bg-[#3A565B] transition-colors",children:"Pay Now"})]})]},z.id))})]}),p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",children:[p.jsx("div",{className:"p-6 border-b border-gray-100",children:p.jsx("h2",{className:"text-xl font-semibold text-[#3A565B]",children:"Invoice History"})}),p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Invoice"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Description"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n.map(z=>p.jsxs("tr",{className:"hover:bg-gray-50",children:[p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsxs("span",{className:"text-sm font-medium text-gray-900",children:["#",z.id.slice(0,8)]})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsx("span",{className:"text-sm text-gray-600",children:z.date})}),p.jsxs("td",{className:"px-6 py-4",children:[p.jsx("div",{className:"text-sm text-gray-900",children:z.description}),z.services.length>0&&p.jsx("div",{className:"text-xs text-gray-500 mt-1",children:z.services.map(ie=>ie.serviceName).join(", ")})]}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsx("span",{className:"text-sm font-semibold text-gray-900",children:Vs(z.amount)})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsxs("span",{className:`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${Oe(z.status)}`,children:[Ht(z.status),z.status.charAt(0).toUpperCase()+z.status.slice(1)]})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:z.status==="pending"||z.status==="overdue"?p.jsx("button",{onClick:()=>S(z),className:"text-[#4E747B] hover:text-[#3A565B] font-medium",children:"Pay Now"}):p.jsx("button",{className:"text-gray-400 hover:text-gray-600",children:p.jsx(eO,{className:"w-4 h-4"})})})]},z.id))})]})})]}),d&&u&&p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:p.jsxs("div",{className:"bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[p.jsx("div",{className:"p-6 border-b border-gray-100",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-[#3A565B]",children:"Payment"}),p.jsxs("p",{className:"text-gray-600 mt-1",children:["Invoice #",u.id.slice(0,8)]})]}),p.jsx("button",{onClick:()=>{m(!1),C()},className:"text-gray-400 hover:text-gray-600",disabled:x,children:p.jsx(Uh,{className:"w-6 h-6"})})]})}),p.jsxs("div",{className:"p-6 space-y-6",children:[p.jsxs("div",{className:"bg-gray-50 rounded-xl p-4",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("span",{className:"text-gray-600",children:"Amount Due:"}),p.jsx("span",{className:"text-3xl font-bold text-[#3A565B]",children:Vs(u.amount)})]}),p.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[p.jsx("p",{children:u.description}),p.jsxs("p",{children:["Due Date: ",u.dueDate]})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Payment Method"}),p.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[p.jsxs("button",{onClick:()=>I("card"),disabled:x,className:`p-4 rounded-xl border-2 transition-all ${g==="card"?"border-[#4E747B] bg-[#4E747B]/5":"border-gray-200 hover:border-gray-300"}`,children:[p.jsx(ZV,{className:"w-6 h-6 mx-auto mb-2 text-[#4E747B]"}),p.jsx("p",{className:"text-sm font-medium",children:"Card"})]}),p.jsxs("button",{onClick:()=>I("eft"),disabled:x,className:`p-4 rounded-xl border-2 transition-all ${g==="eft"?"border-[#4E747B] bg-[#4E747B]/5":"border-gray-200 hover:border-gray-300"}`,children:[p.jsx(tO,{className:"w-6 h-6 mx-auto mb-2 text-[#4E747B]"}),p.jsx("p",{className:"text-sm font-medium",children:"EFT"})]}),p.jsxs("button",{onClick:()=>I("cash"),disabled:x,className:`p-4 rounded-xl border-2 transition-all ${g==="cash"?"border-[#4E747B] bg-[#4E747B]/5":"border-gray-200 hover:border-gray-300"}`,children:[p.jsx(nO,{className:"w-6 h-6 mx-auto mb-2 text-[#4E747B]"}),p.jsx("p",{className:"text-sm font-medium",children:"Cash"})]})]})]}),g==="card"&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Cardholder Name"}),p.jsx("input",{type:"text",value:v.cardholderName,onChange:z=>T({...v,cardholderName:z.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"John Doe",disabled:x})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Card Number"}),p.jsx("input",{type:"text",value:N(v.cardNumber),onChange:A,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"1234 5678 9012 3456",maxLength:19,disabled:x})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Month"}),p.jsx("input",{type:"text",value:v.expiryMonth,onChange:z=>{const ie=z.target.value.replace(/\D/g,"");(ie===""||parseInt(ie)>=1&&parseInt(ie)<=12)&&T({...v,expiryMonth:ie})},className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"MM",maxLength:2,disabled:x})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Year"}),p.jsx("input",{type:"text",value:v.expiryYear,onChange:z=>{const ie=z.target.value.replace(/\D/g,"");T({...v,expiryYear:ie})},className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"YY",maxLength:2,disabled:x})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"CVV"}),p.jsx("input",{type:"text",value:v.cvv,onChange:z=>{const ie=z.target.value.replace(/\D/g,"");T({...v,cvv:ie})},className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"123",maxLength:4,disabled:x})]})]})]}),g==="eft"&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Account Holder"}),p.jsx("input",{type:"text",value:D.accountHolder,onChange:z=>j({...D,accountHolder:z.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"John Doe",disabled:x})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Account Number"}),p.jsx("input",{type:"text",value:D.accountNumber,onChange:z=>j({...D,accountNumber:z.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"1234567890",disabled:x})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Bank Name"}),p.jsx("input",{type:"text",value:D.bankName,onChange:z=>j({...D,bankName:z.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"First National Bank",disabled:x})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Branch Code"}),p.jsx("input",{type:"text",value:D.branchCode,onChange:z=>j({...D,branchCode:z.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:"250655",disabled:x})]})]})]}),g==="cash"&&p.jsxs("div",{className:"space-y-4",children:[p.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:p.jsx("p",{className:"text-sm text-blue-800",children:"Please pay cash at the clinic reception. Amount will be confirmed upon payment."})}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Cash Amount"}),p.jsx("input",{type:"number",value:U,onChange:z=>w(z.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent",placeholder:u.amount.toString(),min:u.amount,disabled:x})]})]}),k&&p.jsx("div",{className:`rounded-xl p-4 ${k.success?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:p.jsxs("div",{className:"flex items-start gap-3",children:[k.success?p.jsx(ui,{className:"w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"}):p.jsx(Uh,{className:"w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"}),p.jsxs("div",{className:"flex-1",children:[p.jsx("p",{className:`font-medium ${k.success?"text-green-900":"text-red-900"}`,children:k.success?"Payment Successful!":"Payment Failed"}),p.jsx("p",{className:`text-sm mt-1 ${k.success?"text-green-700":"text-red-700"}`,children:k.message}),k.transactionId&&p.jsxs("p",{className:"text-xs text-gray-600 mt-2",children:["Transaction ID: ",k.transactionId]})]})]})}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:()=>{m(!1),C()},className:"flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium",disabled:x,children:"Cancel"}),p.jsx("button",{onClick:R,disabled:!!(x||k&&k.success),className:"flex-1 px-6 py-3 bg-[#4E747B] text-white rounded-xl hover:bg-[#3A565B] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:x?p.jsxs(p.Fragment,{children:[p.jsx(ff,{className:"w-5 h-5 animate-spin"}),"Processing..."]}):p.jsxs(p.Fragment,{children:["Pay ",Vs(u.amount)]})})]}),g==="card"&&!k&&p.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-3",children:p.jsxs("p",{className:"text-xs text-gray-600",children:[p.jsx("strong",{children:"Test Mode:"})," Use any 16-digit number (e.g., 4532 1234 5678 9010). 10% of payments will randomly fail for testing."]})})]})]})})]})},vO=({children:t,variant:e="primary",size:n="md",className:r="",onClick:s,disabled:i,type:o="button"})=>{const l="relative overflow-hidden font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95",u={primary:"bg-brand-teal text-white hover:bg-brand-dark shadow-lg hover:shadow-xl hover:shadow-brand-teal/30",secondary:"bg-brand-yellow text-brand-dark hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:shadow-brand-yellow/30",ghost:"bg-transparent text-brand-dark hover:bg-brand-teal/10 hover:text-brand-teal",danger:"bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:shadow-red-600/30"},c={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"},d=m=>{const g=m.currentTarget,I=document.createElement("span"),x=g.getBoundingClientRect(),P=Math.max(x.width,x.height),k=m.clientX-x.left-P/2,E=m.clientY-x.top-P/2;I.style.width=I.style.height=`${P}px`,I.style.left=`${k}px`,I.style.top=`${E}px`,I.classList.add("absolute","bg-white/30","rounded-full","pointer-events-none","animate-ping"),g.appendChild(I),setTimeout(()=>{I.remove()},600),s&&s(m)};return p.jsx("button",{type:o,disabled:i,onClick:d,className:`${l} ${u[e]} ${c[n]} ${r}`,children:p.jsx("span",{className:"relative z-10 flex items-center justify-center gap-2",children:t})})},ml=({id:t,label:e,type:n="text",placeholder:r,value:s,onChange:i,icon:o,disabled:l,defaultValue:u,error:c,required:d=!1})=>{const[m,g]=V.useState(!1);return p.jsxs("div",{className:"relative group",children:[p.jsx("label",{htmlFor:t,className:`
          block text-sm font-medium mb-2 transition-all duration-300
          ${m?"text-brand-teal":"text-gray-700"}
        `,children:e}),p.jsxs("div",{className:"relative",children:[o&&p.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-brand-teal",children:kv.cloneElement(o,{className:"w-5 h-5"})}),p.jsx("input",{id:t,type:n,placeholder:r,value:s,defaultValue:u,onChange:i,disabled:l,required:d,"aria-invalid":!!c,onFocus:()=>g(!0),onBlur:()=>g(!1),className:`
            w-full px-4 py-3 border-2 rounded-lg
            ${o?"pl-11":""}
            transition-all duration-300
            focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20
            disabled:bg-gray-100 disabled:cursor-not-allowed
            hover:border-brand-teal/50
            ${m?"shadow-lg scale-[1.02]":""}
            ${c?"border-red-400 focus:ring-red-200":""}
          `})]}),c&&p.jsx("p",{className:"mt-2 text-sm text-red-600",role:"alert",children:c})]})},wO=()=>{const t=Array.from({length:20});return p.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:t.map((e,n)=>p.jsx("div",{className:"absolute w-2 h-2 bg-brand-teal/30 rounded-full animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${5+Math.random()*10}s`}},n))})},EO=({className:t="w-5 h-5"})=>p.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),p.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),p.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),p.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),IO=()=>{const{login:t,signup:e,showToast:n}=Wr(),[r,s]=V.useState(!0),[i,o]=V.useState(""),[l,u]=V.useState(""),[c,d]=V.useState(""),[m,g]=V.useState(""),[I,x]=V.useState(!1),[P,k]=V.useState(!1),[E,v]=V.useState({}),T=async w=>{w.preventDefault(),v({}),x(!0);try{if(r)await t(i,l),n("Welcome back! 🎉","success");else{const _=i1(l);if(!_.isValid){v({password:_.error}),x(!1);return}const S=HV(l,c);if(!S.isValid){v({confirmPassword:S.error}),x(!1);return}await e(i,l,m),n("Account created successfully! 🎊","success")}}catch(_){console.error("Login/Signup Error:",_),v({general:_.message||"Authentication failed"}),n(_.message||"Authentication failed","error")}finally{x(!1)}},D=async()=>{try{n("Connecting to Google... 🔐","info"),await GV(),n("Google login successful! ✨","success")}catch(w){console.error("Google Login Error:",w),n(w.message||"Google login failed","error")}},j=async()=>{if(!i){n("Please enter your email address","error");return}try{await QV(i),n("Password reset email sent! 📧","success")}catch(w){n(w.message||"Failed to send reset email","error")}},U=()=>{k(!P),v({}),setTimeout(()=>{s(!r)},300)};return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-yellow/20 flex items-center justify-center p-4 relative overflow-hidden",children:[p.jsx(wO,{}),p.jsx("div",{className:"absolute top-20 left-20 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-float"}),p.jsx("div",{className:"absolute bottom-20 right-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl animate-float",style:{animationDelay:"1s"}}),p.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand-teal/5 to-brand-yellow/5 rounded-full blur-3xl animate-pulse-glow"}),p.jsx("div",{className:"w-full max-w-md relative z-10",style:{perspective:"1000px"},children:p.jsx("div",{className:`relative w-full transition-transform duration-700 transform-style-3d ${P?"rotate-y-180":""}`,style:{transformStyle:"preserve-3d"},children:p.jsxs("div",{className:"relative backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 border border-white/50 animate-scale-in",children:[p.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-teal/20 via-brand-yellow/20 to-brand-teal/20 animate-shimmer",style:{backgroundSize:"200% 100%",filter:"blur(20px)",zIndex:-1}}),p.jsxs("div",{className:"text-center mb-8",children:[p.jsxs("div",{className:"relative inline-block mb-6 animate-slide-up",children:[p.jsx("div",{className:"relative p-4 bg-white rounded-3xl shadow-2xl animate-pulse-glow",children:p.jsx(l1,{className:"h-16"})}),p.jsx("div",{className:"absolute inset-0 border-4 border-brand-yellow/30 rounded-3xl animate-ping"}),p.jsx("div",{className:"absolute inset-0 border-2 border-brand-teal/20 rounded-3xl animate-pulse",style:{animationDelay:"0.5s"}})]}),p.jsx("h1",{className:"text-4xl font-bold text-brand-dark mb-2 animate-slide-up",style:{animationDelay:"100ms"},children:r?"Welcome Back!":"Join Dermaglare"}),p.jsx("p",{className:"text-gray-600 animate-slide-up",style:{animationDelay:"200ms"},children:r?"Continue your skincare journey":"Begin your transformation today"})]}),E.general&&p.jsx("div",{className:"mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg animate-slide-up",children:p.jsxs("div",{className:"flex items-center gap-2 text-red-800",children:[p.jsx(pf,{className:"w-5 h-5 flex-shrink-0"}),p.jsx("p",{className:"text-sm font-medium",children:E.general})]})}),p.jsxs("form",{onSubmit:T,className:"space-y-5",children:[!r&&p.jsx("div",{className:"animate-slide-up",children:p.jsx(ml,{id:"displayName",label:"Full Name",placeholder:"Jane Doe",value:m,onChange:w=>g(w.target.value),icon:p.jsx(a1,{})})}),p.jsx("div",{className:"animate-slide-up",style:{animationDelay:"100ms"},children:p.jsx(ml,{id:"email",label:"Email Address",type:"email",placeholder:"jane@example.com",value:i,onChange:w=>o(w.target.value),icon:p.jsx(rO,{})})}),p.jsx("div",{className:"animate-slide-up",style:{animationDelay:"200ms"},children:p.jsx(ml,{id:"password",label:"Password",type:"password",placeholder:"••••••••",value:l,onChange:w=>u(w.target.value),icon:p.jsx(fl,{}),error:E.password,required:!0})}),!r&&p.jsx("div",{className:"animate-slide-up",style:{animationDelay:"250ms"},children:p.jsx(ml,{id:"confirmPassword",label:"Confirm Password",type:"password",placeholder:"••••••••",value:c,onChange:w=>d(w.target.value),icon:p.jsx(fl,{}),error:E.confirmPassword,required:!0})}),!r&&p.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-lg p-4 animate-slide-up",style:{animationDelay:"300ms"},children:[p.jsx("p",{className:"text-sm font-medium text-blue-900 mb-2",children:"Password must contain:"}),p.jsxs("ul",{className:"text-xs text-blue-800 space-y-1",children:[p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(pl,{className:"w-3 h-3"}),"At least 8 characters"]}),p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(pl,{className:"w-3 h-3"}),"One uppercase letter"]}),p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(pl,{className:"w-3 h-3"}),"One lowercase letter"]}),p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(pl,{className:"w-3 h-3"}),"One number"]})]})]}),r&&p.jsxs("div",{className:"flex items-center justify-between text-sm animate-slide-up",style:{animationDelay:"250ms"},children:[p.jsxs("label",{className:"flex items-center gap-2 cursor-pointer group",children:[p.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-2 border-brand-teal text-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all group-hover:scale-110"}),p.jsx("span",{className:"text-gray-600 group-hover:text-brand-teal transition-colors",children:"Remember me"})]}),p.jsx("button",{type:"button",className:"text-brand-teal hover:text-brand-dark font-medium hover:underline transition-all hover:scale-105",onClick:j,children:"Forgot Password?"})]}),p.jsx("div",{className:"animate-slide-up",style:{animationDelay:"300ms"},children:p.jsxs(vO,{type:"submit",size:"lg",className:"w-full relative overflow-hidden group",disabled:I,children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-teal to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer",style:{backgroundSize:"200% 100%"}}),p.jsx("span",{className:"relative z-10 flex items-center justify-center gap-2",children:I?p.jsx(ff,{className:"w-5 h-5 animate-spin"}):p.jsxs(p.Fragment,{children:[r?"Log In":"Create Account",p.jsx(sO,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})})]})})]}),p.jsxs("div",{className:"relative my-6 animate-slide-up",style:{animationDelay:"350ms"},children:[p.jsx("div",{className:"absolute inset-0 flex items-center",children:p.jsx("div",{className:"w-full border-t border-gray-300"})}),p.jsx("div",{className:"relative flex justify-center text-sm",children:p.jsx("span",{className:"px-4 bg-white/70 text-gray-500 font-medium",children:"Or continue with"})})]}),p.jsx("div",{className:"animate-slide-up",style:{animationDelay:"400ms"},children:p.jsxs("button",{type:"button",onClick:D,className:"w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-brand-teal hover:shadow-lg transition-all duration-300 group hover:scale-105 active:scale-95",children:[p.jsx(EO,{className:"w-6 h-6 group-hover:scale-110 transition-transform"}),p.jsx("span",{className:"font-medium text-gray-700 group-hover:text-brand-teal transition-colors",children:"Continue with Google"})]})}),p.jsx("div",{className:"mt-6 text-center animate-slide-up",style:{animationDelay:"450ms"},children:p.jsxs("p",{className:"text-gray-600",children:[r?"Don't have an account?":"Already have an account?",p.jsxs("button",{onClick:U,className:"ml-2 text-brand-teal font-semibold hover:text-brand-dark transition-all hover:scale-105 inline-block relative group",children:[r?"Sign Up":"Log In",p.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal group-hover:w-full transition-all duration-300"})]})]})}),p.jsxs("div",{className:"mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 animate-slide-up",style:{animationDelay:"500ms"},children:[p.jsxs("div",{className:"flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer",children:[p.jsx(fl,{className:"w-3 h-3"}),p.jsx("span",{children:"Secure"})]}),p.jsxs("div",{className:"flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer",children:[p.jsx(ui,{className:"w-3 h-3"}),p.jsx("span",{children:"HIPAA Compliant"})]}),p.jsxs("div",{className:"flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer",children:[p.jsx(ui,{className:"w-3 h-3"}),p.jsx("span",{children:"Encrypted"})]})]})]})})}),p.jsx("div",{className:"absolute bottom-10 left-10 animate-bounce-subtle opacity-50",children:p.jsx(ui,{className:"w-12 h-12 text-brand-teal"})}),p.jsx("div",{className:"absolute top-10 right-10 animate-float opacity-50",style:{animationDelay:"1s"},children:p.jsx(fl,{className:"w-10 h-10 text-brand-yellow"})})]})},TO=({children:t})=>{const[e,n]=V.useState(!0),{logout:r,user:s}=Wr(),i=[{to:"/dashboard",icon:p.jsx(iO,{className:"w-6 h-6"}),label:"Dashboard"},{to:"/profile",icon:p.jsx(a1,{className:"w-6 h-6"}),label:"Profile"},{to:"/settings",icon:p.jsx(oO,{className:"w-6 h-6"}),label:"Settings"}],o=()=>p.jsxs("div",{className:`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out shadow-2xl ${e?"w-64":"w-20"}`,children:[p.jsxs("div",{className:"flex items-center justify-between p-4 h-20 border-b border-gray-800",children:[p.jsx("div",{className:`flex items-center overflow-hidden transition-all duration-300 ${e?"w-32":"w-0"}`,children:p.jsx(l1,{})}),p.jsx("button",{onClick:()=>n(!e),className:"p-2 text-gray-400 hover:text-white focus:outline-none rounded-full hover:bg-gray-800",children:p.jsx(lO,{className:"w-6 h-6"})})]}),p.jsx("nav",{className:"mt-8",children:p.jsx("ul",{children:i.map(u=>p.jsx("li",{className:"px-4 mb-2",children:p.jsxs(Q0,{to:u.to,className:({isActive:c})=>`flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out group ${c?"bg-brand-500 text-white shadow-lg":"text-gray-400 hover:bg-gray-800 hover:text-white"}`,children:[p.jsx("div",{className:"relative",children:u.icon}),p.jsx("span",{className:`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${e?"opacity-100":"opacity-0 -translate-x-4"}`,children:u.label})]})},u.to))})}),p.jsx("div",{className:"absolute bottom-0 w-full p-4 border-t border-gray-800",children:p.jsxs("button",{onClick:r,className:"flex items-center p-3 w-full text-gray-400 hover:bg-red-700 hover:text-white rounded-lg transition-colors duration-200 group",children:[p.jsx(aO,{className:"w-6 h-6"}),p.jsx("span",{className:`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${e?"opacity-100":"opacity-0 -translate-x-4"}`,children:"Logout"})]})})]}),l=()=>p.jsx("header",{className:`fixed top-0 right-0 h-20 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 z-30 transition-all duration-300 ease-in-out ${e?"left-64":"left-20"}`,children:p.jsxs("div",{className:"flex items-center justify-between h-full px-6",children:[p.jsxs("div",{className:"text-white text-lg font-semibold",children:["Welcome, ",(s==null?void 0:s.email)||"Guest"]}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsxs("button",{className:"relative text-gray-400 hover:text-white",children:[p.jsx(uO,{className:"w-6 h-6"}),p.jsx("span",{className:"absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),p.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold",children:s!=null&&s.email?s.email.charAt(0).toUpperCase():"G"})]})]})});return p.jsxs("div",{className:"min-h-screen bg-gray-900 text-white",children:[p.jsx(o,{}),p.jsx(l,{}),p.jsx("main",{className:`flex-1 transition-all duration-300 ease-in-out pt-20 ${e?"ml-64":"ml-20"}`,children:p.jsx("div",{className:"p-8",children:t})})]})},SO=()=>p.jsxs("div",{className:"p-8 text-white",children:[p.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in-down",children:"Dashboard"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Upcoming Appointments"}),p.jsx("p",{children:"No upcoming appointments."})]}),p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",style:{animationDelay:"100ms"},children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Recent Documents"}),p.jsx("p",{children:"No recent documents."})]}),p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",style:{animationDelay:"200ms"},children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Messages"}),p.jsx("p",{children:"No new messages."})]})]})]}),xO=()=>{const{user:t}=Wr();return p.jsxs("div",{className:"p-8 text-white",children:[p.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in-down",children:"Profile"}),p.jsx("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",children:p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("div",{className:"w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-4xl",children:t!=null&&t.email?t.email.charAt(0).toUpperCase():"G"}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-semibold",children:(t==null?void 0:t.displayName)||"Patient Name"}),p.jsx("p",{className:"text-gray-400",children:t==null?void 0:t.email})]})]})})]})},AO=()=>p.jsxs("div",{className:"p-8 text-white",children:[p.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in-down",children:"Settings"}),p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Account Settings"}),p.jsx("p",{children:"Manage your account settings here."})]})]}),RO=()=>p.jsxs("div",{className:"p-8 text-white",children:[p.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in-down",children:"Appointments"}),p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Your Appointments"}),p.jsx("p",{children:"You have no upcoming appointments."})]})]}),CO=()=>p.jsxs("div",{className:"p-8 text-white",children:[p.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in-down",children:"Documents"}),p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Your Documents"}),p.jsx("p",{children:"You have no documents."})]})]}),PO=()=>p.jsxs("div",{className:"p-8 text-white",children:[p.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in-down",children:"Chat"}),p.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up",children:[p.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Chat with a representative"}),p.jsx("p",{children:"Our chat is currently unavailable."})]})]}),kO=()=>{const{user:t}=Wr();return t?p.jsx(TO,{children:p.jsxs(z0,{children:[p.jsx(Dt,{path:"dashboard",element:p.jsx(SO,{})}),p.jsx(Dt,{path:"appointments",element:p.jsx(RO,{})}),p.jsx(Dt,{path:"documents",element:p.jsx(CO,{})}),p.jsx(Dt,{path:"chat",element:p.jsx(PO,{})}),p.jsx(Dt,{path:"billing",element:p.jsx(_O,{patientId:t.uid})}),p.jsx(Dt,{path:"profile",element:p.jsx(xO,{})}),p.jsx(Dt,{path:"settings",element:p.jsx(AO,{})}),p.jsx(Dt,{path:"*",element:p.jsx(pp,{to:"/dashboard",replace:!0})})]})}):null},NO=()=>{const{user:t}=Wr();return t?p.jsx(kO,{}):p.jsx(pp,{to:"/login",replace:!0})},bO=()=>{const{user:t}=Wr();return t?p.jsx(pp,{to:"/dashboard",replace:!0}):p.jsx(nR,{})};function DO(){const{loading:t}=Wr();return t?p.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-900 text-white",children:p.jsx("div",{className:"text-xl font-semibold animate-pulse",children:"Loading Patient Portal..."})}):p.jsxs(z0,{children:[p.jsx(Dt,{element:p.jsx(bO,{}),children:p.jsx(Dt,{path:"/login",element:p.jsx(IO,{})})}),p.jsx(Dt,{path:"/*",element:p.jsx(NO,{})})]})}$h.createRoot(document.getElementById("root")).render(p.jsx(kv.StrictMode,{children:p.jsx(AR,{children:p.jsx(JV,{children:p.jsx(DO,{})})})}));
