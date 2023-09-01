(function(C,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react"),require("@preact/signals-react")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react"],p):(C=typeof globalThis<"u"?globalThis:C||self,p(C.Docs={},C.React,C.SignalsReact))})(this,function(C,p,D){"use strict";var r={},Ne={get exports(){return r},set exports(a){r=a}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Fe(){if(oe)return $;oe=1;var a=p,s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function y(b,d,E){var _,x={},S=null,k=null;E!==void 0&&(S=""+E),d.key!==void 0&&(S=""+d.key),d.ref!==void 0&&(k=d.ref);for(_ in d)l.call(d,_)&&!u.hasOwnProperty(_)&&(x[_]=d[_]);if(b&&b.defaultProps)for(_ in d=b.defaultProps,d)x[_]===void 0&&(x[_]=d[_]);return{$$typeof:s,type:b,key:S,ref:k,props:x,_owner:m.current}}return $.Fragment=c,$.jsx=y,$.jsxs=y,$}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Me(){return ie||(ie=1,process.env.NODE_ENV!=="production"&&function(){var a=p,s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),b=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),N=Symbol.iterator,ce="@@iterator";function X(e){if(e===null||typeof e!="object")return null;var n=N&&e[N]||e[ce];return typeof n=="function"?n:null}var A=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(e){{for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];le("error",e,t)}}function le(e,n,t){{var o=A.ReactDebugCurrentFrame,v=o.getStackAddendum();v!==""&&(n+="%s",t=t.concat([v]));var h=t.map(function(f){return String(f)});h.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,h)}}var lr=!1,ur=!1,fr=!1,dr=!1,vr=!1,ue;ue=Symbol.for("react.module.reference");function hr(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===u||vr||e===m||e===E||e===_||dr||e===k||lr||ur||fr||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===x||e.$$typeof===y||e.$$typeof===b||e.$$typeof===d||e.$$typeof===ue||e.getModuleId!==void 0))}function pr(e,n,t){var o=e.displayName;if(o)return o;var v=n.displayName||n.name||"";return v!==""?t+"("+v+")":t}function fe(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case c:return"Portal";case u:return"Profiler";case m:return"StrictMode";case E:return"Suspense";case _:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:var n=e;return fe(n)+".Consumer";case y:var t=e;return fe(t._context)+".Provider";case d:return pr(e,e.render,"ForwardRef");case x:var o=e.displayName||null;return o!==null?o:O(e.type)||"Memo";case S:{var v=e,h=v._payload,f=v._init;try{return O(f(h))}catch{return null}}}return null}var F=Object.assign,L=0,de,ve,he,pe,me,xe,je;function ge(){}ge.__reactDisabledLog=!0;function mr(){{if(L===0){de=console.log,ve=console.info,he=console.warn,pe=console.error,me=console.group,xe=console.groupCollapsed,je=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function xr(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:de}),info:F({},e,{value:ve}),warn:F({},e,{value:he}),error:F({},e,{value:pe}),group:F({},e,{value:me}),groupCollapsed:F({},e,{value:xe}),groupEnd:F({},e,{value:je})})}L<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Z=A.ReactCurrentDispatcher,Q;function B(e,n,t){{if(Q===void 0)try{throw Error()}catch(v){var o=v.stack.trim().match(/\n( *(at )?)/);Q=o&&o[1]||""}return`
`+Q+e}}var ee=!1,z;{var jr=typeof WeakMap=="function"?WeakMap:Map;z=new jr}function ye(e,n){if(!e||ee)return"";{var t=z.get(e);if(t!==void 0)return t}var o;ee=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var h;h=Z.current,Z.current=null,mr();try{if(n){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(P){o=P}Reflect.construct(e,[],f)}else{try{f.call()}catch(P){o=P}e.call(f.prototype)}}else{try{throw Error()}catch(P){o=P}e()}}catch(P){if(P&&o&&typeof P.stack=="string"){for(var i=P.stack.split(`
`),w=o.stack.split(`
`),j=i.length-1,g=w.length-1;j>=1&&g>=0&&i[j]!==w[g];)g--;for(;j>=1&&g>=0;j--,g--)if(i[j]!==w[g]){if(j!==1||g!==1)do if(j--,g--,g<0||i[j]!==w[g]){var R=`
`+i[j].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&z.set(e,R),R}while(j>=1&&g>=0);break}}}finally{ee=!1,Z.current=h,xr(),Error.prepareStackTrace=v}var W=e?e.displayName||e.name:"",Ae=W?B(W):"";return typeof e=="function"&&z.set(e,Ae),Ae}function gr(e,n,t){return ye(e,!1)}function yr(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function U(e,n,t){if(e==null)return"";if(typeof e=="function")return ye(e,yr(e));if(typeof e=="string")return B(e);switch(e){case E:return B("Suspense");case _:return B("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return gr(e.render);case x:return U(e.type,n,t);case S:{var o=e,v=o._payload,h=o._init;try{return U(h(v),n,t)}catch{}}}return""}var H=Object.prototype.hasOwnProperty,be={},Ee=A.ReactDebugCurrentFrame;function q(e){if(e){var n=e._owner,t=U(e.type,e._source,n?n.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}function br(e,n,t,o,v){{var h=Function.call.bind(H);for(var f in e)if(h(e,f)){var i=void 0;try{if(typeof e[f]!="function"){var w=Error((o||"React class")+": "+t+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw w.name="Invariant Violation",w}i=e[f](n,f,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(j){i=j}i&&!(i instanceof Error)&&(q(v),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,f,typeof i),q(null)),i instanceof Error&&!(i.message in be)&&(be[i.message]=!0,q(v),T("Failed %s type: %s",t,i.message),q(null))}}}var Er=Array.isArray;function re(e){return Er(e)}function _r(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,t=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Tr(e){try{return _e(e),!1}catch{return!0}}function _e(e){return""+e}function Te(e){if(Tr(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",_r(e)),_e(e)}var V=A.ReactCurrentOwner,Cr={key:!0,ref:!0,__self:!0,__source:!0},Ce,we,ne;ne={};function wr(e){if(H.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function Sr(e){if(H.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function Rr(e,n){if(typeof e.ref=="string"&&V.current&&n&&V.current.stateNode!==n){var t=O(V.current.type);ne[t]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O(V.current.type),e.ref),ne[t]=!0)}}function Dr(e,n){{var t=function(){Ce||(Ce=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Or(e,n){{var t=function(){we||(we=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Pr=function(e,n,t,o,v,h,f){var i={$$typeof:s,type:e,key:n,ref:t,props:f,_owner:h};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function kr(e,n,t,o,v){{var h,f={},i=null,w=null;t!==void 0&&(Te(t),i=""+t),Sr(n)&&(Te(n.key),i=""+n.key),wr(n)&&(w=n.ref,Rr(n,v));for(h in n)H.call(n,h)&&!Cr.hasOwnProperty(h)&&(f[h]=n[h]);if(e&&e.defaultProps){var j=e.defaultProps;for(h in j)f[h]===void 0&&(f[h]=j[h])}if(i||w){var g=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&Dr(f,g),w&&Or(f,g)}return Pr(e,i,w,v,o,V.current,f)}}var te=A.ReactCurrentOwner,Se=A.ReactDebugCurrentFrame;function I(e){if(e){var n=e._owner,t=U(e.type,e._source,n?n.type:null);Se.setExtraStackFrame(t)}else Se.setExtraStackFrame(null)}var ae;ae=!1;function se(e){return typeof e=="object"&&e!==null&&e.$$typeof===s}function Re(){{if(te.current){var e=O(te.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ar(e){{if(e!==void 0){var n=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+n+":"+t+"."}return""}}var De={};function Nr(e){{var n=Re();if(!n){var t=typeof e=="string"?e:e.displayName||e.name;t&&(n=`

Check the top-level render call using <`+t+">.")}return n}}function Oe(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Nr(n);if(De[t])return;De[t]=!0;var o="";e&&e._owner&&e._owner!==te.current&&(o=" It was passed a child from "+O(e._owner.type)+"."),I(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),I(null)}}function Pe(e,n){{if(typeof e!="object")return;if(re(e))for(var t=0;t<e.length;t++){var o=e[t];se(o)&&Oe(o,n)}else if(se(e))e._store&&(e._store.validated=!0);else if(e){var v=X(e);if(typeof v=="function"&&v!==e.entries)for(var h=v.call(e),f;!(f=h.next()).done;)se(f.value)&&Oe(f.value,n)}}}function Fr(e){{var n=e.type;if(n==null||typeof n=="string")return;var t;if(typeof n=="function")t=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===d||n.$$typeof===x))t=n.propTypes;else return;if(t){var o=O(n);br(t,e.props,"prop",o,e)}else if(n.PropTypes!==void 0&&!ae){ae=!0;var v=O(n);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Mr(e){{for(var n=Object.keys(e.props),t=0;t<n.length;t++){var o=n[t];if(o!=="children"&&o!=="key"){I(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),I(null);break}}e.ref!==null&&(I(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),I(null))}}function ke(e,n,t,o,v,h){{var f=hr(e);if(!f){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var w=Ar(v);w?i+=w:i+=Re();var j;e===null?j="null":re(e)?j="array":e!==void 0&&e.$$typeof===s?(j="<"+(O(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):j=typeof e,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,i)}var g=kr(e,n,t,v,h);if(g==null)return g;if(f){var R=n.children;if(R!==void 0)if(o)if(re(R)){for(var W=0;W<R.length;W++)Pe(R[W],e);Object.freeze&&Object.freeze(R)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Pe(R,e)}return e===l?Mr(g):Fr(g),g}}function Ir(e,n,t){return ke(e,n,t,!0)}function Wr(e,n,t){return ke(e,n,t,!1)}var $r=Wr,Yr=Ir;Y.Fragment=l,Y.jsx=$r,Y.jsxs=Yr}()),Y}(function(a){process.env.NODE_ENV==="production"?a.exports=Fe():a.exports=Me()})(Ne);const Ie=({children:a})=>r.jsx("pre",{children:r.jsx("code",{children:a})}),J=({label:a,classType:s,children:c})=>r.jsxs("div",{className:`alert-container ${s}`,children:[r.jsxs("div",{className:"alert-header",children:[r.jsx("div",{className:"icon-container",children:r.jsx("span",{className:"icon",children:"!"})}),r.jsx("label",{children:a})]}),r.jsx("div",{className:"alert-body",children:c})]}),We=({children:a})=>r.jsx(J,{label:"Note",classType:"info",children:a}),$e=({children:a})=>r.jsx(J,{label:"Danger",classType:"danger",children:a}),Ye=({children:a})=>r.jsx(J,{label:"Warning",classType:"warn",children:a}),Le=({text:a})=>r.jsx("td",{children:a}),Ve=()=>r.jsxs(r.Fragment,{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Required"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Default"})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsx("th",{children:"Code"}),r.jsx("th",{children:"Response"})]}),ze=()=>r.jsxs(r.Fragment,{children:[r.jsx("th",{children:"Endpoint"}),r.jsx("th",{children:"Method"}),r.jsx("th",{children:"Headers"}),r.jsx("th",{children:"Body"}),r.jsx("th",{children:"Example"}),r.jsx("th",{children:"Successful"}),r.jsx("th",{children:"Failed"})]}),G=({defaultHeaders:a,header:s,body:c})=>r.jsx("div",{className:"table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsx("tr",{children:s!==void 0?s.map((l,m)=>r.jsx("th",{children:l},m)):a})}),r.jsx("tbody",{children:c.map((l,m)=>r.jsx("tr",{children:l.map((u,y)=>r.jsx(Le,{text:u},y))},m))})]})}),Ue=({header:a,body:s})=>r.jsx(G,{defaultHeaders:r.jsx(Be,{}),header:a,body:s}),He=({header:a,body:s})=>r.jsx(G,{defaultHeaders:r.jsx(Ve,{}),header:a,body:s}),qe=({header:a,body:s})=>r.jsx(G,{defaultHeaders:r.jsx(ze,{}),header:a,body:s}),M=p.createContext({}),K=p.createContext({}),Lr="",Je=()=>{const a=p.useContext(M);return r.jsx("main",{className:"docs-container",children:a.content!==void 0&&Object.values(a.content).map(({id:s,title:c,data:l},m)=>r.jsx(Ge,{id:s,title:c,data:l},m))})},Vr="",Br="",Ge=({id:a,title:s,data:c})=>r.jsx("section",{id:a,className:"docs-section",children:c!==void 0?r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:s}),c.length!==0&&c.map((l,m)=>typeof l=="string"?r.jsx("p",{children:l},m):r.jsx(p.Fragment,{children:l},m))]}):r.jsx("h2",{children:s})}),zr="",Ur="",Ke=()=>{const a=D.useSignal(""),s=p.useContext(M),c=u=>{if(typeof u=="string")return u;if(p.isValidElement(u)){let y="";const b=p.Children.toArray(u.props.children),d=p.Children.toArray(u.props.body);return y+=b.map(c).join(""),y+=d.map(c).join(" "),y}return""},{value:l}=D.useComputed(()=>{let u=[];const{content:y}=s;return Object.entries(y).forEach(([b,{title:d,data:E,id:_}])=>{E&&E.forEach(x=>{let S;typeof x=="string"?S=x:S=c(x);const N=new RegExp(`(.{0,10})(${a.value})(.{0,100})`).exec(S);if(N){let[ce,X,A,T,...le]=N;u.push({title:d,firstMatch:X,mainMatch:A,secondMatch:T,to:_??""})}})}),u});return{result:a,queryValue:l,handleChange:u=>a.value=u.target.value}},Xe=()=>r.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:r.jsxs("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:[r.jsx("path",{d:"M4120 5100 c-23 -23 -27 -39 -34 -136 -7 -91 -37 -188 -89 -289 -32 -62 -63 -102 -137 -176 -81 -81 -109 -102 -190 -142 -110 -53 -182 -73 -298 -83 -99 -8 -132 -32 -132 -94 0 -59 32 -81 132 -91 104 -10 165 -25 250 -60 178 -73 334 -231 409 -411 32 -77 59 -196 59 -257 0 -80 30 -120 91 -121 61 0 85 33 93 132 10 116 30 188 83 298 40 81 61 109 142 190 74 74 114 105 176 137 103 53 200 82 295 89 123 9 150 27 150 99 0 50 -36 85 -88 85 -69 0 -207 29 -279 58 -193 79 -353 241 -429 435 -26 66 -54 205 -54 269 0 54 -35 88 -90 88 -26 0 -47 -7 -60 -20z m100 -542 c73 -127 211 -265 338 -338 34 -19 61 -37 61 -40 1 -3 -32 -23 -72 -45 -99 -54 -267 -223 -322 -322 -22 -40 -42 -73 -45 -73 -3 0 -17 24 -33 53 -67 128 -226 287 -353 354 -30 15 -54 30 -54 33 0 3 33 23 73 45 99 55 268 223 322 322 22 40 42 73 45 72 3 0 21 -27 40 -61z"}),r.jsx("path",{d:"M1805 5011 c-306 -97 -527 -210 -785 -400 -141 -104 -398 -358 -499 -494 -283 -380 -444 -776 -506 -1251 -24 -177 -17 -546 14 -722 91 -530 319 -982 691 -1368 382 -396 869 -652 1424 -747 176 -31 545 -38 722 -14 475 62 872 223 1251 506 136 101 390 358 494 499 87 117 192 286 248 397 50 100 126 300 160 419 35 120 33 147 -11 178 -47 33 -80 22 -180 -62 -221 -183 -427 -301 -668 -384 -448 -153 -961 -145 -1385 22 l-30 11 40 25 c55 34 153 63 247 73 96 11 128 33 128 91 0 61 -34 86 -128 94 -90 8 -191 41 -269 88 -72 43 -170 148 -211 225 -36 69 -72 195 -72 255 0 44 -22 93 -45 102 -9 3 -32 6 -51 6 -51 0 -84 -36 -84 -92 -1 -129 -64 -286 -154 -383 l-56 -60 -79 81 c-158 163 -310 397 -402 624 -210 516 -199 1101 30 1608 81 178 170 317 314 490 86 104 96 139 55 186 -35 40 -70 39 -203 -3z m-151 -268 c-200 -303 -319 -629 -364 -993 -13 -109 -13 -401 0 -510 28 -223 102 -485 193 -681 88 -189 234 -407 372 -557 37 -40 65 -75 62 -78 -11 -11 -115 -34 -182 -41 -53 -5 -74 -12 -92 -29 -30 -30 -31 -91 -3 -122 20 -21 37 -26 140 -37 187 -21 366 -148 451 -319 38 -79 68 -189 69 -253 0 -65 36 -103 96 -103 39 0 84 51 84 95 0 103 52 258 116 344 2 1 45 -13 97 -33 128 -50 278 -92 416 -117 146 -27 480 -37 630 -20 369 43 696 162 1004 365 27 18 27 18 21 0 -45 -126 -182 -367 -297 -523 -85 -115 -341 -374 -453 -458 -360 -272 -754 -430 -1199 -482 -116 -14 -388 -14 -513 0 -416 45 -823 207 -1172 465 -135 100 -374 339 -474 474 -258 349 -420 756 -465 1172 -14 125 -14 397 0 513 52 445 210 839 482 1199 84 112 343 368 458 453 95 70 251 168 339 213 44 23 191 89 199 90 2 0 -5 -12 -15 -27z m772 -2690 c36 -62 165 -191 227 -227 26 -15 47 -31 47 -34 0 -4 -23 -20 -51 -37 -68 -40 -180 -152 -221 -220 -18 -30 -35 -55 -38 -55 -3 0 -22 26 -42 58 -47 73 -143 169 -213 213 -30 19 -55 37 -55 41 0 3 20 18 45 33 61 35 186 160 225 224 17 28 35 51 40 51 4 0 21 -21 36 -47z"}),r.jsx("path",{d:"M2275 4180 c-45 -18 -60 -48 -63 -134 l-4 -81 -101 -102 -102 -103 -73 0 c-104 0 -141 -24 -142 -91 0 -26 7 -44 26 -63 25 -24 34 -26 108 -26 l81 0 103 -103 102 -102 0 -68 c0 -90 18 -131 63 -146 24 -8 42 -9 62 -1 45 17 54 38 55 125 l0 80 108 108 107 107 72 0 c82 0 116 12 132 47 18 40 13 73 -18 104 -28 27 -34 29 -113 29 l-83 0 -103 103 -102 102 0 86 c0 76 -3 88 -22 106 -28 25 -66 34 -93 23z m93 -453 l62 -63 -63 -62 -63 -62 -64 65 -64 65 59 60 c33 33 62 60 65 60 3 0 34 -28 68 -63z"}),r.jsx("path",{d:"M3803 2895 c-44 -19 -53 -42 -53 -132 l0 -78 -102 -102 -103 -103 -72 0 c-91 0 -120 -11 -138 -52 -17 -43 -9 -83 23 -108 20 -16 40 -20 106 -20 l81 0 103 -103 102 -102 0 -82 c0 -72 3 -85 24 -110 34 -39 98 -39 132 0 21 25 24 38 24 110 l0 82 102 102 103 103 81 0 c66 0 86 4 106 20 32 25 40 65 23 108 -18 41 -47 52 -138 52 l-72 0 -103 103 -102 102 0 78 c0 91 -9 114 -55 133 -40 16 -32 17 -72 -1z m102 -445 l60 -60 -63 -63 -62 -62 -62 62 -63 63 60 60 c33 33 62 60 65 60 3 0 32 -27 65 -60z"})]})}),Ze=()=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),Qe=()=>r.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:r.jsxs("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:[r.jsx("path",{d:"M2528 5100 c-9 -6 -117 -145 -239 -310 -122 -165 -227 -300 -232 -300 -6 0 -156 75 -334 166 -343 175 -357 180 -387 131 -7 -12 -39 -186 -71 -387 -31 -201 -58 -367 -61 -369 -2 -2 -171 -7 -375 -10 l-372 -6 -20 -27 -20 -27 123 -365 c68 -202 121 -368 119 -370 -2 -2 -143 -79 -314 -171 -171 -92 -318 -174 -327 -183 -10 -8 -18 -29 -18 -48 0 -29 25 -56 276 -294 151 -145 273 -268 271 -274 -3 -7 -95 -145 -206 -308 -126 -186 -201 -305 -201 -320 0 -14 9 -33 19 -42 11 -10 176 -61 373 -117 194 -54 358 -101 363 -103 7 -2 -2 -117 -27 -332 -40 -358 -44 -424 -26 -442 21 -21 75 -13 438 62 195 41 355 74 356 73 0 -1 56 -146 124 -322 68 -176 129 -333 137 -348 18 -35 56 -51 86 -35 12 6 146 113 297 238 151 124 280 229 286 232 5 4 134 -101 285 -232 227 -198 279 -239 305 -240 16 0 38 6 47 13 9 6 82 167 161 356 80 189 147 345 150 348 3 3 157 -31 343 -76 187 -45 353 -81 370 -81 46 0 63 22 63 83 0 29 -13 203 -29 387 -16 184 -28 336 -26 338 2 2 162 44 357 94 366 93 388 102 388 150 0 11 -91 162 -203 336 -111 173 -203 319 -205 322 -1 4 121 119 273 255 251 227 275 251 275 280 0 18 -8 39 -17 48 -10 8 -162 98 -338 199 l-321 183 128 345 c70 190 127 350 128 357 0 7 -10 23 -22 37 l-23 25 -380 12 c-209 7 -381 13 -383 14 -1 1 -25 168 -52 371 -44 332 -52 371 -71 387 -12 9 -29 17 -38 17 -9 0 -171 -74 -359 -164 l-342 -164 -97 136 c-53 76 -149 212 -214 303 -129 182 -144 196 -191 169z m222 -446 c207 -298 220 -314 250 -314 12 0 168 70 347 155 179 86 327 154 328 153 1 -2 21 -149 44 -328 50 -391 48 -378 71 -390 10 -6 182 -17 381 -24 198 -8 362 -16 364 -18 1 -2 -51 -147 -116 -323 -65 -176 -119 -332 -119 -347 0 -34 -7 -29 348 -232 160 -93 292 -169 292 -171 0 -2 -117 -109 -260 -239 -234 -213 -260 -240 -260 -268 0 -23 48 -105 192 -330 137 -215 188 -302 178 -308 -6 -4 -143 -40 -304 -80 -318 -80 -366 -94 -378 -113 -4 -7 -8 -33 -8 -59 0 -47 45 -587 55 -659 l5 -35 -333 78 c-182 43 -344 78 -358 78 -14 0 -33 -8 -42 -17 -8 -10 -77 -164 -152 -343 -75 -179 -138 -326 -139 -327 -1 -2 -121 101 -267 227 -220 192 -269 230 -294 230 -25 0 -81 -42 -309 -230 -153 -127 -280 -229 -281 -228 -2 2 -58 145 -125 318 -67 173 -126 323 -131 332 -5 10 -20 20 -32 23 -12 3 -179 -28 -372 -69 -192 -41 -352 -72 -354 -70 -2 2 13 159 33 348 21 190 35 354 31 365 -3 12 -14 25 -23 29 -9 5 -169 51 -354 103 -186 52 -338 97 -338 101 0 3 88 137 195 297 107 160 195 298 195 308 0 18 -119 139 -380 386 -85 80 -152 148 -149 151 2 3 139 77 304 164 213 114 304 168 315 186 14 25 9 43 -99 363 -63 186 -116 344 -119 351 -3 9 38 12 184 12 104 0 267 3 362 7 161 6 175 8 187 27 7 12 36 167 64 346 29 179 54 337 57 353 l6 27 317 -160 c274 -139 321 -160 342 -151 16 6 104 114 240 295 117 157 216 286 219 286 3 -1 88 -120 190 -266z"}),r.jsx("path",{d:"M2375 4084 c-322 -48 -576 -160 -818 -362 -194 -161 -369 -420 -452 -666 -108 -321 -106 -684 6 -1002 178 -510 597 -876 1136 -996 83 -18 131 -22 308 -22 185 -1 222 2 315 22 314 71 547 198 771 421 225 226 350 454 421 773 20 90 23 129 23 313 -1 227 -13 311 -70 482 -128 383 -434 728 -795 896 -223 104 -374 138 -630 142 -102 2 -198 1 -215 -1z m400 -139 c322 -52 627 -220 837 -461 159 -183 271 -405 323 -644 9 -41 19 -145 22 -230 9 -251 -30 -438 -136 -655 -207 -422 -593 -708 -1056 -782 -121 -19 -371 -13 -485 12 -770 169 -1255 907 -1095 1667 118 560 579 996 1155 1093 104 18 327 18 435 0z"}),r.jsx("path",{d:"M2513 3689 c-7 -7 -13 -30 -13 -51 0 -52 24 -64 140 -72 243 -15 469 -123 645 -307 170 -178 265 -393 282 -634 6 -102 19 -125 68 -125 57 0 69 25 62 132 -33 499 -372 909 -855 1035 -116 30 -309 43 -329 22z"})]})}),er=()=>{const{result:a,queryValue:s,handleChange:c}=Ke(),l=p.useDeferredValue(s);return r.jsxs("div",{className:"search-bar",children:[r.jsx(Ze,{}),r.jsx("input",{onChange:c,value:a.value,type:"text"}),a.value&&r.jsx("div",{className:"search-result",children:r.jsx(p.Suspense,{fallback:r.jsx("h2",{children:"Loading..."}),children:r.jsx(rr,{query:l,result:a})})})]})},rr=({query:a,result:s})=>{const{menu:c}=p.useContext(K),l=()=>{s.value="",c.value&&(c.value=!c.value)};return r.jsx(r.Fragment,{children:a.length>0?a.map(({title:m,to:u,firstMatch:y,mainMatch:b,secondMatch:d},E)=>r.jsxs("div",{children:[r.jsx("h3",{children:m}),r.jsxs("a",{href:"#"+u,onClick:l,children:["...",y,r.jsx("span",{className:"search-keyword",children:b}),d]})]},E)):r.jsx("h5",{children:"Sorry, we cant find any match..."})})},Hr="",nr=()=>{const{theme:a}=p.useContext(M),s=()=>{a.value=!a.value};return r.jsx("div",{onClick:s,className:"theme-icon-docs",children:a.value?r.jsx(Qe,{}):r.jsx(Xe,{})})},tr=()=>{const a=p.useContext(M),s=D.useSignal(!1),c=D.useComputed(()=>s.value?"0":"100%");return p.useEffect(()=>{const l=window.matchMedia("(min-width: 83em)");s.value=l.matches},[]),r.jsxs(K.Provider,{value:{position:c.value,menu:s},children:[r.jsx("header",{children:r.jsxs("nav",{"aria-label":"header-nav",style:{top:a.navTop},className:"nav-doc-container",children:[r.jsx("span",{children:a.title}),r.jsxs("div",{className:"header-nav",children:[r.jsx(er,{}),r.jsx(nr,{}),r.jsxs("div",{onClick:()=>s.value=!s.value,className:s.value?"menu active":"menu",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})]})}),r.jsx(ar,{})]})},qr="",ar=()=>{const a=p.useContext(M),s=p.useContext(K);return r.jsx("aside",{"aria-label":"side-nav",style:{transform:`translateX(${s.position})`},className:"side-nav-doc-container",children:r.jsx("div",{className:"side-nav-elements",children:Object.values(a.navSide).map(({title:c,to:l,childs:m},u)=>l!==void 0?r.jsx(sr,{to:l,menu:s.menu,title:c},u):r.jsx(or,{menu:s.menu,title:c,childs:m},u))})})},sr=({title:a,menu:s,to:c})=>r.jsx("a",{href:"#"+c,onClick:()=>s.value=!s.value,children:a}),or=({title:a,childs:s,menu:c})=>{const l=D.useSignal({initial:0,dinamic:0}),m=D.useSignal(!1),u=p.useRef(null);p.useEffect(()=>{const b=setInterval(()=>{u.current&&(l.value.initial=u.current.offsetHeight,u.current.style.height="0",clearInterval(b))},200);return()=>clearInterval(b)},[]);const y=()=>{u.current!==null&&(D.batch(()=>{m.value=!m.value,m.value?l.value.dinamic=l.value.initial:l.value.dinamic=0}),u.current.style.height=l.value.dinamic.toString()+"px",u.current.classList.toggle("active"))};return r.jsxs("div",{className:"collapse-container",children:[r.jsxs("div",{onClick:y,className:"collapse-target",children:[r.jsx("a",{children:a}),r.jsxs("div",{className:m.value?"collapse-icon":"collapse-icon active",children:[r.jsx("span",{}),r.jsx("span",{})]})]}),r.jsx("div",{children:r.jsx("ul",{ref:u,children:s!==void 0&&s.map(([b,d],E)=>r.jsx("li",{children:r.jsx("a",{href:"#"+b,onClick:()=>c.value=!c.value,children:d})},E))})})]})},Jr="",ir=()=>{const a=window.matchMedia("(prefers-color-scheme: dark)").matches,s=D.useSignal(a);return p.useEffect(()=>{document.body.style.transition="all .2s ease-in-out",s.value?document.body.classList.add("dark"):document.body.classList.remove("dark")},[s.value]),{prefersBlackTheme:s}},cr=({content:a,navSide:s,title:c})=>{const{prefersBlackTheme:l}=ir(),m=p.useRef(0),u=D.useSignal("0"),y=D.useComputed(()=>{var _;let d={},E=((_=s.exclude)==null?void 0:_.exclude)??[];return Object.keys(a).forEach(x=>{if(E.includes(x))return;let{title:S,id:k}=a[x];if(s.hasOwnProperty(x)&&s[x].hasOwnProperty("childs")){let{childs:N}=s[x];d={...d,[x]:{title:S,to:k,childs:N}}}else d={...d,[x]:{title:S,to:k}}}),d}),b=d=>{const{scrollTop:E}=d.currentTarget;E>m.current?u.value="-70px":u.value="0",m.current=E};return r.jsx(M.Provider,{value:{title:c,content:a,navTop:u.value,navSide:y.value,theme:l},children:r.jsxs("div",{className:"docs-main",style:{height:"100vh",overflowY:"auto",margin:"0 auto"},onScroll:b,children:[r.jsx(tr,{}),r.jsx(Je,{}),r.jsx("p",{})]})})};C.Docs=cr,C.DocsAlertDanger=$e,C.DocsAlertInfo=We,C.DocsAlertWarning=Ye,C.DocsCode=Ie,C.DocsTableStatus=Ue,C.DocsTableTypes=He,C.DocsTableView=qe,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});