var ir=Object.create;var G=Object.defineProperty;var sr=Object.getOwnPropertyDescriptor;var ar=Object.getOwnPropertyNames;var or=Object.getPrototypeOf,ur=Object.prototype.hasOwnProperty;var cr=(t,e,r)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var l=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var lr=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ar(e))!ur.call(t,n)&&n!==r&&G(t,n,{get:()=>e[n],enumerable:!(i=sr(e,n))||i.enumerable});return t};var dr=(t,e,r)=>(r=t!=null?ir(or(t)):{},lr(e||!t||!t.__esModule?G(r,"default",{value:t,enumerable:!0}):r,t));var Z=(t,e,r)=>(cr(t,typeof e!="symbol"?e+"":e,r),r);var ee=l((On,Se)=>{"use strict";Se.exports=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}}});var h=l((An,Pe)=>{"use strict";var fr=ee(),re=Object.prototype.toString,ne=function(t){return function(e){var r=re.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function T(t){return t=t.toLowerCase(),function(r){return ne(r)===t}}function ie(t){return Array.isArray(t)}function F(t){return typeof t>"u"}function hr(t){return t!==null&&!F(t)&&t.constructor!==null&&!F(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var ke=T("ArrayBuffer");function pr(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ke(t.buffer),e}function mr(t){return typeof t=="string"}function yr(t){return typeof t=="number"}function Ne(t){return t!==null&&typeof t=="object"}function z(t){if(ne(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var br=T("Date"),vr=T("File"),wr=T("Blob"),gr=T("FileList");function se(t){return re.call(t)==="[object Function]"}function Er(t){return Ne(t)&&se(t.pipe)}function xr(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||re.call(t)===e||se(t.toString)&&t.toString()===e)}var Cr=T("URLSearchParams");function Rr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Or(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ae(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),ie(t))for(var r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function te(){var t={};function e(n,s){z(t[s])&&z(n)?t[s]=te(t[s],n):z(n)?t[s]=te({},n):ie(n)?t[s]=n.slice():t[s]=n}for(var r=0,i=arguments.length;r<i;r++)ae(arguments[r],e);return t}function Ar(t,e,r){return ae(e,function(n,s){r&&typeof n=="function"?t[s]=fr(n,r):t[s]=n}),t}function Tr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function qr(t,e,r,i){t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function Sr(t,e,r){var i,n,s,a={};e=e||{};do{for(i=Object.getOwnPropertyNames(t),n=i.length;n-- >0;)s=i[n],a[s]||(e[s]=t[s],a[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function kr(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var i=t.indexOf(e,r);return i!==-1&&i===r}function Nr(t){if(!t)return null;var e=t.length;if(F(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var Pr=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array));Pe.exports={isArray:ie,isArrayBuffer:ke,isBuffer:hr,isFormData:xr,isArrayBufferView:pr,isString:mr,isNumber:yr,isObject:Ne,isPlainObject:z,isUndefined:F,isDate:br,isFile:vr,isBlob:wr,isFunction:se,isStream:Er,isURLSearchParams:Cr,isStandardBrowserEnv:Or,forEach:ae,merge:te,extend:Ar,trim:Rr,stripBOM:Tr,inherits:qr,toFlatObject:Sr,kindOf:ne,kindOfTest:T,endsWith:kr,toArray:Nr,isTypedArray:Pr,isFileList:gr}});var oe=l((Tn,De)=>{"use strict";var k=h();function _e(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}De.exports=function(e,r,i){if(!r)return e;var n;if(i)n=i(r);else if(k.isURLSearchParams(r))n=r.toString();else{var s=[];k.forEach(r,function(c,d){c===null||typeof c>"u"||(k.isArray(c)?d=d+"[]":c=[c],k.forEach(c,function(f){k.isDate(f)?f=f.toISOString():k.isObject(f)&&(f=JSON.stringify(f)),s.push(_e(d)+"="+_e(f))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e}});var Ue=l((qn,Be)=>{"use strict";var _r=h();function I(){this.handlers=[]}I.prototype.use=function(e,r,i){return this.handlers.push({fulfilled:e,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};I.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};I.prototype.forEach=function(e){_r.forEach(this.handlers,function(i){i!==null&&e(i)})};Be.exports=I});var Le=l((Sn,je)=>{"use strict";var Dr=h();je.exports=function(e,r){Dr.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})}});var q=l((kn,Me)=>{"use strict";var ze=h();function N(t,e,r,i,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),i&&(this.request=i),n&&(this.response=n)}ze.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Fe=N.prototype,Ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Ie[t]={value:t}});Object.defineProperties(N,Ie);Object.defineProperty(Fe,"isAxiosError",{value:!0});N.from=function(t,e,r,i,n,s){var a=Object.create(Fe);return ze.toFlatObject(t,a,function(c){return c!==Error.prototype}),N.call(a,t.message,e,r,i,n),a.name=t.name,s&&Object.assign(a,s),a};Me.exports=N});var ue=l((Nn,$e)=>{"use strict";$e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}});var ce=l((Pn,He)=>{"use strict";var E=h();function Br(t,e){e=e||new FormData;var r=[];function i(s){return s===null?"":E.isDate(s)?s.toISOString():E.isArrayBuffer(s)||E.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(E.isPlainObject(s)||E.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);r.push(s),E.forEach(s,function(c,d){if(!E.isUndefined(c)){var o=a?a+"."+d:d,f;if(c&&!a&&typeof c=="object"){if(E.endsWith(d,"{}"))c=JSON.stringify(c);else if(E.endsWith(d,"[]")&&(f=E.toArray(c))){f.forEach(function(b){!E.isUndefined(b)&&e.append(o,i(b))});return}}n(c,o)}}),r.pop()}else e.append(a,i(s))}return n(t),e}He.exports=Br});var Je=l((_n,We)=>{"use strict";var le=q();We.exports=function(e,r,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):r(new le("Request failed with status code "+i.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}});var Ke=l((Dn,Ve)=>{"use strict";var M=h();Ve.exports=M.isStandardBrowserEnv()?function(){return{write:function(r,i,n,s,a,u){var c=[];c.push(r+"="+encodeURIComponent(i)),M.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),M.isString(s)&&c.push("path="+s),M.isString(a)&&c.push("domain="+a),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()});var Qe=l((Bn,Xe)=>{"use strict";Xe.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}});var Ge=l((Un,Ye)=>{"use strict";Ye.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}});var de=l((jn,Ze)=>{"use strict";var Ur=Qe(),jr=Ge();Ze.exports=function(e,r){return e&&!Ur(r)?jr(e,r):r}});var tt=l((Ln,et)=>{"use strict";var fe=h(),Lr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];et.exports=function(e){var r={},i,n,s;return e&&fe.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=fe.trim(u.substr(0,s)).toLowerCase(),n=fe.trim(u.substr(s+1)),i){if(r[i]&&Lr.indexOf(i)>=0)return;i==="set-cookie"?r[i]=(r[i]?r[i]:[]).concat([n]):r[i]=r[i]?r[i]+", "+n:n}}),r}});var it=l((zn,nt)=>{"use strict";var rt=h();nt.exports=rt.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function n(s){var a=s;return e&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=n(window.location.href),function(a){var u=rt.isString(a)?n(a):a;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}()});var B=l((Fn,at)=>{"use strict";var he=q(),zr=h();function st(t){he.call(this,t??"canceled",he.ERR_CANCELED),this.name="CanceledError"}zr.inherits(st,he,{__CANCEL__:!0});at.exports=st});var ut=l((In,ot)=>{"use strict";ot.exports=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}});var pe=l((Mn,ct)=>{"use strict";var U=h(),Fr=Je(),Ir=Ke(),Mr=oe(),$r=de(),Hr=tt(),Wr=it(),Jr=ue(),R=q(),Vr=B(),Kr=ut();ct.exports=function(e){return new Promise(function(i,n){var s=e.data,a=e.headers,u=e.responseType,c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}U.isFormData(s)&&U.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(f+":"+b)}var m=$r(e.baseURL,e.url);o.open(e.method.toUpperCase(),Mr(m,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function Te(){if(o){var g="getAllResponseHeaders"in o?Hr(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,A={data:S,status:o.status,statusText:o.statusText,headers:g,config:e,request:o};Fr(function(Y){i(Y),d()},function(Y){n(Y),d()},A),o=null}}if("onloadend"in o?o.onloadend=Te:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(Te)},o.onabort=function(){o&&(n(new R("Request aborted",R.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new R("Network Error",R.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",A=e.transitional||Jr;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new R(S,A.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,o)),o=null},U.isStandardBrowserEnv()){var qe=(e.withCredentials||Wr(m))&&e.xsrfCookieName?Ir.read(e.xsrfCookieName):void 0;qe&&(a[e.xsrfHeaderName]=qe)}"setRequestHeader"in o&&U.forEach(a,function(S,A){typeof s>"u"&&A.toLowerCase()==="content-type"?delete a[A]:o.setRequestHeader(A,S)}),U.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(g){o&&(n(!g||g&&g.type?new Vr:g),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null);var Q=Kr(m);if(Q&&["http","https","file"].indexOf(Q)===-1){n(new R("Unsupported protocol "+Q+":",R.ERR_BAD_REQUEST,e));return}o.send(s)})}});var dt=l(($n,lt)=>{lt.exports=null});var H=l((Hn,mt)=>{"use strict";var p=h(),ft=Le(),ht=q(),Xr=ue(),Qr=ce(),Yr={"Content-Type":"application/x-www-form-urlencoded"};function pt(t,e){!p.isUndefined(t)&&p.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Gr(){var t;return typeof XMLHttpRequest<"u"?t=pe():typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"&&(t=pe()),t}function Zr(t,e,r){if(p.isString(t))try{return(e||JSON.parse)(t),p.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(t)}var $={transitional:Xr,adapter:Gr(),transformRequest:[function(e,r){if(ft(r,"Accept"),ft(r,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return pt(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=p.isObject(e),n=r&&r["Content-Type"],s;if((s=p.isFileList(e))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Qr(s?{"files[]":e}:e,a&&new a)}else if(i||n==="application/json")return pt(r,"application/json"),Zr(e);return e}],transformResponse:[function(e){var r=this.transitional||$.transitional,i=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?ht.from(a,ht.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dt()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){$.headers[e]={}});p.forEach(["post","put","patch"],function(e){$.headers[e]=p.merge(Yr)});mt.exports=$});var bt=l((Wn,yt)=>{"use strict";var en=h(),tn=H();yt.exports=function(e,r,i){var n=this||tn;return en.forEach(i,function(a){e=a.call(n,e,r)}),e}});var me=l((Jn,vt)=>{"use strict";vt.exports=function(e){return!!(e&&e.__CANCEL__)}});var Et=l((Vn,gt)=>{"use strict";var wt=h(),ye=bt(),rn=me(),nn=H(),sn=B();function be(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new sn}gt.exports=function(e){be(e),e.headers=e.headers||{},e.data=ye.call(e,e.data,e.headers,e.transformRequest),e.headers=wt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),wt.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||nn.adapter;return r(e).then(function(n){return be(e),n.data=ye.call(e,n.data,n.headers,e.transformResponse),n},function(n){return rn(n)||(be(e),n&&n.response&&(n.response.data=ye.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}});var ve=l((Kn,xt)=>{"use strict";var v=h();xt.exports=function(e,r){r=r||{};var i={};function n(o,f){return v.isPlainObject(o)&&v.isPlainObject(f)?v.merge(o,f):v.isPlainObject(f)?v.merge({},f):v.isArray(f)?f.slice():f}function s(o){if(v.isUndefined(r[o])){if(!v.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function a(o){if(!v.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(v.isUndefined(r[o])){if(!v.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function c(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var d={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c};return v.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var b=d[f]||s,m=b(f);v.isUndefined(m)&&b!==c||(i[f]=m)}),i}});var we=l((Xn,Ct)=>{Ct.exports={version:"0.27.2"}});var At=l((Qn,Ot)=>{"use strict";var an=we().version,O=q(),ge={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ge[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});var Rt={};ge.transitional=function(e,r,i){function n(s,a){return"[Axios v"+an+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,u){if(e===!1)throw new O(n(a," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!Rt[a]&&(Rt[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,a,u):!0}};function on(t,e,r){if(typeof t!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(t),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var u=t[s],c=u===void 0||a(u,s,t);if(c!==!0)throw new O("option "+s+" must be "+c,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}Ot.exports={assertOptions:on,validators:ge}});var Pt=l((Yn,Nt)=>{"use strict";var St=h(),un=oe(),Tt=Ue(),qt=Et(),W=ve(),cn=de(),kt=At(),P=kt.validators;function _(t){this.defaults=t,this.interceptors={request:new Tt,response:new Tt}}_.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=W(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&kt.assertOptions(i,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(s=s&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var a=[];this.interceptors.response.forEach(function(m){a.push(m.fulfilled,m.rejected)});var u;if(!s){var c=[qt,void 0];for(Array.prototype.unshift.apply(c,n),c=c.concat(a),u=Promise.resolve(r);c.length;)u=u.then(c.shift(),c.shift());return u}for(var d=r;n.length;){var o=n.shift(),f=n.shift();try{d=o(d)}catch(b){f(b);break}}try{u=qt(d)}catch(b){return Promise.reject(b)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};_.prototype.getUri=function(e){e=W(this.defaults,e);var r=cn(e.baseURL,e.url);return un(r,e.params,e.paramsSerializer)};St.forEach(["delete","get","head","options"],function(e){_.prototype[e]=function(r,i){return this.request(W(i||{},{method:e,url:r,data:(i||{}).data}))}});St.forEach(["post","put","patch"],function(e){function r(i){return function(s,a,u){return this.request(W(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}_.prototype[e]=r(),_.prototype[e+"Form"]=r(!0)});Nt.exports=_});var Dt=l((Gn,_t)=>{"use strict";var ln=B();function D(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(i){if(r._listeners){var n,s=r._listeners.length;for(n=0;n<s;n++)r._listeners[n](i);r._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(a){r.subscribe(a),n=a}).then(i);return s.cancel=function(){r.unsubscribe(n)},s},t(function(n){r.reason||(r.reason=new ln(n),e(r.reason))})}D.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};D.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};D.prototype.unsubscribe=function(e){if(this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};D.source=function(){var e,r=new D(function(n){e=n});return{token:r,cancel:e}};_t.exports=D});var Ut=l((Zn,Bt)=>{"use strict";Bt.exports=function(e){return function(i){return e.apply(null,i)}}});var Lt=l((ei,jt)=>{"use strict";var dn=h();jt.exports=function(e){return dn.isObject(e)&&e.isAxiosError===!0}});var It=l((ti,Ee)=>{"use strict";var zt=h(),fn=ee(),J=Pt(),hn=ve(),pn=H();function Ft(t){var e=new J(t),r=fn(J.prototype.request,e);return zt.extend(r,J.prototype,e),zt.extend(r,e),r.create=function(n){return Ft(hn(t,n))},r}var y=Ft(pn);y.Axios=J;y.CanceledError=B();y.CancelToken=Dt();y.isCancel=me();y.VERSION=we().version;y.toFormData=ce();y.AxiosError=q();y.Cancel=y.CanceledError;y.all=function(e){return Promise.all(e)};y.spread=Ut();y.isAxiosError=Lt();Ee.exports=y;Ee.exports.default=y});var $t=l((ri,Mt)=>{Mt.exports=It()});var V=dr($t(),1);var w="https://cdn.zesty.xyz/images/zesty",j={tall:{width:.75,height:1,style:{standard:`${w}/zesty-banner-tall.png`,minimal:`${w}/zesty-banner-tall-minimal.png`,transparent:`${w}/zesty-banner-tall-transparent.png`}},wide:{width:4,height:1,style:{standard:`${w}/zesty-banner-wide.png`,minimal:`${w}/zesty-banner-wide-minimal.png`,transparent:`${w}/zesty-banner-wide-transparent.png`}},square:{width:1,height:1,style:{standard:`${w}/zesty-banner-square.png`,minimal:`${w}/zesty-banner-square-minimal.png`,transparent:`${w}/zesty-banner-square-transparent.png`}},"mobile-phone-interstitial":{width:.56,height:1,style:{standard:`${w}/zesty-default-mobile-phone-interstitial.png`}},billboard:{width:3.88,height:1,style:{standard:`${w}/zesty-default-billboard.png`}},"medium-rectangle":{width:1.2,height:1,style:{standard:`${w}/zesty-default-medium-rectangle.png`}}};var xe=()=>{let t=window.XRHand!=null&&window.XRMediaBinding!=null,e=navigator.userAgent.includes("OculusBrowser"),r=t&&e?"Full":t||e?"Partial":"None";return{match:r!=="None",confidence:r}},Ce=()=>{let t=window.mozInnerScreenX!=null&&window.speechSynthesis==null,e=navigator.userAgent.includes("Mobile VR")&&!navigator.userAgent.includes("OculusBrowser"),r=t&&e?"Full":t||e?"Partial":"None";return{match:r!=="None",confidence:r}},Ht=async()=>{let t=navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr")&&await navigator.xr.isSessionSupported("immersive-ar"),e=navigator.userAgent.includes("Pico Neo 3 Link"),r=t&&e?"Full":t||e?"Partial":"None";return{match:r!=="None",confidence:r}},Wt=()=>{let t=navigator.maxTouchPoints===0||navigator.msMaxTouchPoints===0,e=!navigator.userAgent.includes("Android")&&!navigator.userAgent.includes("Mobile"),r=t&&e?"Full":t||e?"Partial":"None";return{match:r!=="None",confidence:r}},Re=async()=>{let t={platform:"",confidence:""};return xe().match?t={platform:"Oculus",confidence:xe().confidence}:Ce().match?t={platform:"Wolvic",confidence:Ce().confidence}:await Ht().match?t={platform:"Pico",confidence:await Ht().confidence}:Wt().match?t={platform:"Desktop",confidence:Wt().confidence}:t={platform:"Unknown",confidence:"None"},t},Jt=t=>{if(t){if(xe().match){if(t.includes("https://www.meta.com/experiences/")){setTimeout(()=>{window.open(t,"_blank")},1e3);return}}else if(Ce().match){let e=document.createElement("div"),r=document.createElement("div"),i=document.createElement("p"),n=document.createElement("button"),s=document.createElement("button");e.style.backgroundColor="rgb(0, 0, 0, 0.75)",e.style.color="white",e.style.textAlign="center",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.padding="5%",e.style.borderRadius="5%",e.style.transform="translate(-50%, -50%)",i.innerHTML=`<b>This billboard leads to ${t}. Continue?</b>`,n.innerText="Move cursor back into window.",n.style.width="100vw",n.style.height="100vh",n.onmouseenter=()=>{n.style.width="auto",n.style.height="auto",n.innerText="Yes"},n.onclick=()=>{window.open(t,"_blank"),e.remove()},s.innerText="No",s.onclick=()=>{e.remove()},e.append(r),r.append(i),r.append(n),r.append(s),document.body.append(e);return}window.open(t,"_blank")}};var Xt="https://beacon2.zesty.market/zgraphql",mn="https://api.zesty.market/api",Qt=!1;var Vt=10,Oe=0,x=null,yn=!1,L=null,bn=(t,e)=>{x=document.createElement("iframe"),x.src=`https://www.zesty.xyz/prebid/?size=${e}&source=${Math.round(Math.random())}&ad_unit_id=${t}&utm_source=test`,x.width="1",x.height="1",x.style.position="fixed",x.style.border="none",x.style.zIndex="-2",document.body.prepend(x),x.onload=()=>{x.contentWindow.postMessage({type:"readycheck"},"*")},window.addEventListener("message",({data:r})=>{switch(r.type){case"readystatus":yn=r.content;break;case"bids":L=r.content;break;case"refreshing":break}}),Qt=!0},Yt=[{id:"4902864a-5531-496b-8d4d-ec7b9849e8e1",format:"medium-rectangle",absoluteWidth:.75,absoluteHeight:.625},{id:"14dccdbe-18b7-40d0-93d8-c104fd9486e8",format:"medium-rectangle"},{id:"a8e0496f-034d-4cea-ba5f-653bba4fba39",format:"billboard"},{id:"a181cc07-fda7-462e-adba-0fd8abf0af24",format:"billboard"}],K=t=>Yt.find(e=>e.id===t)||{},Kt=(t,e,r,i)=>({Ads:[{asset_url:j[r?i:t].style[e],cta_url:"https://www.zesty.xyz"}],CampaignId:"DefaultCampaign"}),Gt=async(t,e="tall",r="standard")=>{let i=Yt.find(s=>s.id===t),{format:n}=K(t);return i&&(Qt?(L=null,x.contentWindow.postMessage({type:"refresh"},"*")):bn(t,n,r)),new Promise((s,a)=>{async function u(){if(i||(Oe=Vt-1),L&&L.length>0){let{asset_url:c,cta_url:d}=JSON.parse(L);s({Ads:[{asset_url:c,cta_url:d}],CampaignId:"Prebid"})}else if(Oe++,Oe==Vt)try{let c=encodeURI(window.top.location.href).replace(/\/$/,""),d=await V.default.get(`${mn}/ad?ad_unit_id=${t}&url=${c}`);d.data?d(d.data):d(Kt(e,r,i,n))}catch{console.warn("Could not retrieve an active campaign banner. Retrieving default banner."),s(Kt(e,r,i,n))}else setTimeout(u,1e3)}u()})},Zt=async(t,e=null)=>{let{platform:r,confidence:i}=await Re();try{await V.default.post(Xt,{query:`mutation { increment(eventType: visits, spaceId: "${t}", campaignId: "${e}", platform: { name: ${r}, confidence: ${i} }) { message } }`},{headers:{"Content-Type":"application/json"}})}catch(n){console.log("Failed to emit onload event",n.message)}},er=async(t,e=null)=>{let{platform:r,confidence:i}=await Re();try{await V.default.post(Xt,{query:`mutation { increment(eventType: clicks, spaceId: "${t}", campaignId: "${e}", platform: { name: ${r}, confidence: ${i} }) { message } }`},{headers:{"Content-Type":"application/json"}})}catch(n){console.log("Failed to emit onclick event",n.message)}};var tr="2.2.0";import{Component as wn,Collider as gn,MeshComponent as En,CollisionComponent as rr,Property as C}from"@wonderlandengine/api";import{CursorTarget as Ae}from"@wonderlandengine/components";console.log("Zesty SDK Version: ",tr);var xn="https://cdn.zesty.xyz/sdk/zesty-formats.js",Cn="https://cdn.zesty.xyz/sdk/zesty-networking.js",X=class extends wn{static onRegister(e){e.registerComponent(Ae)}init(){this.formats=Object.values(j),this.formatKeys=Object.keys(j),this.styleKeys=["standard","minimal","transparent"]}start(){if(this.mesh=this.object.getComponent(En),!this.mesh)throw new Error("'zesty-banner ' missing mesh component");if(this.createAutomaticCollision&&(this.collision=this.object.getComponent(rr)||this.object.addComponent(rr,{collider:gn.Box,group:2}),this.cursorTarget=this.object.getComponent(Ae)||this.object.addComponent(Ae),this.cursorTarget.onClick.add(this.onClick.bind(this))),this.dynamicFormats){let e=document.createElement("script");e.onload=()=>{this.formatsOverride=zestyFormats.formats},e.setAttribute("src",xn),e.setAttribute("crossorigin","anonymous"),document.body.appendChild(e)}this.dynamicNetworking?import(Cn).then(e=>{this.zestyNetworking=Object.assign({},e),this.startLoading()}).catch(()=>{console.error("Failed to dynamically retrieve networking code, falling back to bundled version."),this.dynamicNetworking=!1,this.startLoading()}):this.startLoading()}startLoading(){this.loadBanner(this.adUnit,this.formatKeys[this.format],this.styleKeys[this.style]).then(e=>{if(this.banner=e,this.scaleToRatio){this.height=this.object.scalingLocal[1];let{absoluteWidth:i=this.formats[this.format].width*this.height,absoluteHeight:n=this.object.scalingLocal[1]}=K(this.adUnit);this.object.resetScaling(),this.createAutomaticCollision&&(this.collision.extents=[i,n,.1]),this.object.scale([i,n,1])}let r=this.mesh.material.clone();if(this.textureProperty==="auto"){if(r.diffuseTexture||r.hasParameter("diffuseTexture"))r.diffuseTexture=e.texture,r.alphaMaskThreshold=.3;else if(r.flatTexture||r.hasParameter("flatTexture"))r.flatTexture=e.texture,r.alphaMaskThreshold=.8;else throw Error("'zesty-banner' unable to apply banner texture: unsupported pipeline "+pipeline);this.mesh.material=r,this.mesh.material.alphaMaskTexture=e.texture}else this.mesh.material[this.textureProperty]=e.texture,this.mesh.material.alphaMaskTexture=e.texture;this.beacon&&(this.dynamicNetworking?this.zestyNetworking.sendOnLoadMetric(this.adUnit,this.banner.campaignId):Zt(this.adUnit,this.banner.campaignId))})}onClick(){this.banner?.url&&(this.engine.xr?this.engine.xr.session.end().then(this.executeClick.bind(this)):this.engine.xrSession?this.engine.xrSession.end().then(this.executeClick.bind(this)):this.executeClick())}executeClick(){Jt(this.banner.url),this.beacon&&(this.dynamicNetworking?this.zestyNetworking.sendOnClickMetric(this.adUnit,this.banner.campaignId):er(this.adUnit,this.banner.campaignId))}async loadBanner(e,r,i){let{format:n=r}=K(e),s=["mobile-phone-interstitial","billboard","medium-rectangle"];s.includes(n)&&(this.format=s.indexOf(n)+3);let a=this.dynamicNetworking?await this.zestyNetworking.fetchCampaignAd(e,n,i):await Gt(e,r,i),{asset_url:u,cta_url:c}=a.Ads[0];return this.campaignId=a.CampaignId,this.engine.textures.load(u,"").then(d=>({texture:d,imageSrc:u,url:c,campaignId:a.CampaignId}))}};Z(X,"TypeName","zesty-banner"),Z(X,"Properties",{adUnit:C.string(""),format:C.enum(["tall","wide","square"],"square"),style:C.enum(["standard","minimal","transparent"],"transparent"),scaleToRatio:C.bool(!0),textureProperty:C.string("auto"),assignAlphaMaskTexture:C.bool(!0),beacon:C.bool(!0),dynamicFormats:C.bool(!0),createAutomaticCollision:C.bool(!0),dynamicNetworking:C.bool(!1)});export{X as ZestyBanner};
//# sourceMappingURL=zesty-wonderland-sdk.js.map
