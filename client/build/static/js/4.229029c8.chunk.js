(this["webpackJsonpleo-discount"]=this["webpackJsonpleo-discount"]||[]).push([[4],{119:function(e,t,n){var r=n(128);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},128:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},129:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},130:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(60),i=n(6),c=n(4),s=n.n(c),l=n(49);var u=n(64);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||Object(u.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d,f,b,h,m,j,y,O,v,g=n(23),x=n(58),w=n(9),S=n(10),E="grey",k=Object(S.b)(d||(d=Object(w.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),P=S.c.div(f||(f=Object(w.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),N=S.c.input(b||(b=Object(w.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"])),E,E,k),C=S.c.label(h||(h=Object(w.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"])),E,k),I=n(2),D=["handleChange","label"],R=function(e){var t=e.handleChange,n=e.label,r=Object(x.a)(e,D);return Object(I.jsxs)(P,{children:[Object(I.jsx)(N,Object(i.a)({onChange:t},r)),n?Object(I.jsx)(C,{className:r.value.length?"shrink":"",children:n}):null]})},A=n(59),K=(n(14),n(13)),q=n(113),_=S.c.div(m||(m=Object(w.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]))),T=S.c.h2(j||(j=Object(w.a)(["\n  margin: 10px 0;\n"]))),V=S.c.div(y||(y=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),M=Object(g.b)(null,(function(e){return{googleSignInStart:function(){return e(Object(K.h)())},emailSignInStart:function(t,n){return e(Object(K.e)({email:t,password:n}))}}}))((function(e){var t=e.googleSignInStart,n=e.emailSignInStart,a=p(Object(r.useState)({email:"",password:""}),2),c=a[0],u=a[1],d=c.email,f=c.password,b=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(d,f);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.value,r=t.name;u(Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},r,n)))},m=Object(q.a)().t;return Object(I.jsxs)(_,{children:[Object(I.jsx)(T,{children:m("I already have an account")}),Object(I.jsx)("span",{children:m("Sign in with your email and password")}),Object(I.jsxs)("form",{onSubmit:b,children:[Object(I.jsx)(R,{name:"email",type:"email",handleChange:h,value:d,label:"email",required:!0}),Object(I.jsx)(R,{name:"password",type:"password",value:f,handleChange:h,label:m("password"),required:!0}),Object(I.jsxs)(V,{children:[Object(I.jsxs)(A.a,{type:"submit",children:[" ",m("Sign in")," "]}),Object(I.jsx)(A.a,{type:"button",onClick:t,isGoogleSignIn:!0,children:m("Sign in with Google")})]})]})]})})),U=n(40),B=n(41),H=n(44),z=n(43),F=S.c.div(O||(O=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]))),G=S.c.h2(v||(v=Object(w.a)(["\n  margin: 10px 0;\n"]))),W=n(119),$=n.n(W),J=n(129),L=n.n(J),Y=n(42),Z=n.n(Y),Q=n(130),X=n.n(Q),ee=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function te(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(X.a[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(ee),o=null;null!==(o=a.exec(e));)if(o[0].trim())if(o[1]){var i=o[1].trim(),c=[i,""];i.indexOf("=")>-1&&(c=i.split("=")),t.attrs[c[0]]=c[1],a.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var ne=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,re=/^\s*$/,ae=Object.create(null);function oe(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(oe,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var ie={parse:function(e,t){t||(t={}),t.components||(t.components=ae);var n,r=[],a=[],o=-1,i=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(ne,(function(c,s){if(i){if(c!=="</"+n.name+">")return;i=!1}var l,u="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),d=s+c.length,f=e.charAt(d);if(p){var b=te(c);return o<0?(r.push(b),r):((l=a[o]).children.push(b),r)}if(u&&(o++,"tag"===(n=te(c)).type&&t.components[n.name]&&(n.type="component",i=!0),n.voidElement||i||!f||"<"===f||n.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),0===o&&r.push(n),(l=a[o-1])&&l.children.push(n),a[o]=n),(!u||n.voidElement)&&(o>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(o--,n=-1===o?r:a[o]),!i&&"<"!==f&&f)){l=-1===o?r:a[o].children;var h=e.indexOf("<",d),m=e.slice(d,-1===h?void 0:h);re.test(m)&&(m=" "),(h>-1&&o+l.length>=0||" "!==m)&&l.push({type:"text",content:m})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+oe("",t)}),"")}},ce="".replace,se=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,le={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function ue(e){return le[e]}var pe=n(37),de=n(33),fe=["format"],be=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){Z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function ye(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function Oe(e){return Array.isArray(e)?e:[e]}function ve(e,t){if(!e)return"";var n="",r=Oe(e),o=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"===typeof e)n+="".concat(e);else if(a.a.isValidElement(e)){var i=Object.keys(e.props).length,c=o.indexOf(e.type)>-1,s=e.props.children;if(!s&&c&&0===i)n+="<".concat(e.type,"/>");else if(s||c&&0===i)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(c&&1===i&&"string"===typeof s)n+="<".concat(e.type,">").concat(s,"</").concat(e.type,">");else{var l=ve(s,t);n+="<".concat(r,">").concat(l,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)Object(de.d)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===L()(e)){var u=e.format,p=$()(e,fe),d=Object.keys(p);if(1===d.length){var f=u?"".concat(d[0],", ").concat(u):d[0];n+="{{".concat(f,"}}")}else Object(de.d)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(de.d)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function ge(e,t,n,r,o,i){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(c.join("|")).test(t);if(!e&&!s)return[t];var l={};!function e(t){Oe(t).forEach((function(t){"string"!==typeof t&&(je(t)?e(ye(t)):"object"!==L()(t)||a.a.isValidElement(t)||Object.assign(l,t))}))}(e);var u=ie.parse("<0>".concat(t,"</0>")),p=me(me({},l),o);function d(e,t,n){var r=ye(e),o=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return a.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function f(e,t,n,r,o){e.dummy&&(e.children=t),n.push(a.a.cloneElement(e,me(me({},e.props),{},{key:r}),o?void 0:t))}function b(t,o,l){var u=Oe(t);return Oe(o).reduce((function(t,o,h){var m,j=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,p,n.language);if("tag"===o.type){var y=u[parseInt(o.name,10)];!y&&1===l.length&&l[0][o.name]&&(y=l[0][o.name]),y||(y={});var O=0!==Object.keys(o.attrs).length?function(e,t){var n=me({},t);return n.props=Object.assign(e.props,t.props),n}({props:o.attrs},y):y,v=a.a.isValidElement(O),g=v&&je(o,!0)&&!o.voidElement,x=s&&"object"===L()(O)&&O.dummy&&!v,w="object"===L()(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"===typeof O){var S=n.services.interpolator.interpolate(O,p,n.language);t.push(S)}else if(je(O)||g){f(O,d(O,o,l),t,h)}else if(x){var E=b(u,o.children,l);t.push(a.a.cloneElement(O,me(me({},O.props),{},{key:h}),E))}else if(Number.isNaN(parseFloat(o.name))){if(w)f(O,d(O,o,l),t,h,o.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(o.name)>-1)if(o.voidElement)t.push(a.a.createElement(o.name,{key:"".concat(o.name,"-").concat(h)}));else{var k=b(u,o.children,l);t.push(a.a.createElement(o.name,{key:"".concat(o.name,"-").concat(h)},k))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var P=b(u,o.children,l);t.push("<".concat(o.name,">").concat(P,"</").concat(o.name,">"))}}else if("object"!==L()(O)||v)1===o.children.length&&j?t.push(a.a.cloneElement(O,me(me({},O.props),{},{key:h}),j)):t.push(a.a.cloneElement(O,me(me({},O.props),{},{key:h})));else{var N=o.children[0]?j:null;N&&t.push(N)}}else if("text"===o.type){var C=r.transWrapTextNodes,I=i?(m=n.services.interpolator.interpolate(o.content,p,n.language),ce.call(m,se,ue)):n.services.interpolator.interpolate(o.content,p,n.language);C?t.push(a.a.createElement(C,{key:"".concat(o.name,"-").concat(h)},I)):t.push(I)}return t}),[])}return ye(b([{dummy:!0,children:e||[]}],u,Oe(e||[]))[0])}function xe(e){var t=e.children,n=e.count,o=e.parent,i=e.i18nKey,c=e.context,s=e.tOptions,l=void 0===s?{}:s,u=e.values,p=e.defaults,d=e.components,f=e.ns,b=e.i18n,h=e.t,m=e.shouldUnescape,j=$()(e,be),y=Object(r.useContext)(pe.a)||{},O=y.i18n,v=y.defaultNS,g=b||O||Object(pe.d)();if(!g)return Object(de.e)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var x=h||g.t.bind(g)||function(e){return e};c&&(l.context=c);var w=me(me({},Object(pe.c)()),g.options&&g.options.react),S=f||x.ns||v||g.options&&g.options.defaultNS;S="string"===typeof S?[S]:S||["translation"];var E=p||ve(t,w)||w.transEmptyNodeValue||i,k=w.hashTransKey,P=i||(k?k(E):E),N=u?l.interpolation:{interpolation:me(me({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},C=me(me(me(me({},l),{},{count:n},u),N),{},{defaultValue:E,ns:S}),I=ge(d||t,P?x(P,C):E,g,w,C,m),D=void 0!==o?o:w.defaultTransParent;return D?a.a.createElement(D,j,I):I}var we=n(65),Se=n.n(we),Ee=["forwardedRef"];function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne,Ce=function(e){Object(H.a)(n,e);var t=Object(z.a)(n);function n(){var e;return Object(U.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(l.a)(s.a.mark((function t(n){var r,a,o,i,c,l,u,p,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,o=r.email,i=r.password,c=r.confirmPassword,l=e.props,u=l.signUpStart,p=l.t,i===c){t.next=6;break}return alert("".concat(p("passwords match"))),t.abrupt("return");case 6:d={email:o,password:i,displayName:a},console.log(d),console.log("Value Mail = "+o),u(o,i,a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(o.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,a=e.confirmPassword,o=this.props.t;return Object(I.jsxs)(F,{children:[Object(I.jsx)(G,{children:Object(I.jsx)(xe,{i18nKey:"I do not have a account",children:"I do not have a account"})}),Object(I.jsx)("span",{children:Object(I.jsx)(xe,{i18nKey:"Sign up with your email and password",children:"Sign up with your email and password"})}),Object(I.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(I.jsx)(R,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:o("Display Name"),required:!0}),Object(I.jsx)(R,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(I.jsx)(R,{type:"password",name:"password",value:r,onChange:this.handleChange,label:o("Password"),required:!0}),Object(I.jsx)(R,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:o("Confirm Password"),required:!0}),Object(I.jsx)(A.a,{type:"submit",children:Object(I.jsx)(xe,{i18nKey:"SIGN UP",children:"SIGN UP"})})]})]})}}]),n}(a.a.Component),Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var o=r.forwardedRef,i=$()(r,Ee),c=Object(q.a)(e,i),s=Se()(c,3),l=s[0],u=s[1],p=s[2],d=Pe(Pe({},i),{},{t:l,i18n:u,tReady:p});return t.withRef&&o?d.ref=o:!t.withRef&&o&&(d.forwardedRef=o),a.a.createElement(n,d)}r.displayName="withI18nextTranslation(".concat(Object(de.a)(n),")"),r.WrappedComponent=n;return t.withRef?a.a.forwardRef((function(e,t){return a.a.createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}()(Object(g.b)(null,(function(e){return{signUpStart:function(t,n,r){return e(Object(K.o)(t,n,r))}}}))(Ce)),De=S.c.div(Ne||(Ne=Object(w.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n"])));t.default=function(){return Object(I.jsxs)(De,{children:[Object(I.jsx)(M,{}),Object(I.jsx)(Ie,{})]})}}}]);
//# sourceMappingURL=4.229029c8.chunk.js.map