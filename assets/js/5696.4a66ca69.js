"use strict";(self.webpackChunkregla_docs=self.webpackChunkregla_docs||[]).push([[5696],{2362:(e,n,t)=>{t.d(n,{A:()=>E});var i=t(6540),s=t(4848);function a(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=n.filter((e=>e!==t)),r=t?.props.children;return{mdxAdmonitionTitle:r,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??n;return{...e,...a&&{title:a},children:t}}var r=t(4164),l=t(539),c=t(204);const o="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",h="admonitionContent_BuS1";function m(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,r.A)(c.G.common.admonition,c.G.common.admonitionType(n),o,t),children:i})}function x(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("span",{className:u,children:n}),t]})}function f(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:h,children:n}):null}function p(e){const{type:n,icon:t,title:i,children:a,className:r}=e;return(0,s.jsxs)(m,{type:n,className:r,children:[i||t?(0,s.jsx)(x,{title:i,icon:t}):null,(0,s.jsx)(f,{children:a})]})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const v={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function A(e){return(0,s.jsx)(p,{...v,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const y={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function N(e){return(0,s.jsx)(p,{...y,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function U(e){return(0,s.jsx)(p,{...w,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const T={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function z(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const M={icon:(0,s.jsx)(z,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const B={...{note:A,tip:N,info:U,warning:function(e){return(0,s.jsx)(p,{...T,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(p,{...M,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(A,{title:"secondary",...e}),important:e=>(0,s.jsx)(U,{title:"important",...e}),success:e=>(0,s.jsx)(N,{title:"success",...e}),caution:function(e){return(0,s.jsx)(p,{..._,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const n=a(e),t=(i=n.type,B[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),B.info));var i;return(0,s.jsx)(t,{...n})}},5783:(e,n,t)=>{t.d(n,{A:()=>p});t(6540);var i=t(4164),s=t(539),a=t(204),r=t(6289);const l={iconEdit:"iconEdit_Z9Sw"};var c=t(4848);function o(e){let{className:n,...t}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(l.iconEdit,n),"aria-hidden":"true",...t,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:n}=e;return(0,c.jsxs)(r.A,{to:n,className:a.G.common.editThisPage,children:[(0,c.jsx)(o,{}),(0,c.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=t(8569);function h(e){let{lastUpdatedAt:n}=e;const t=new Date(n),i=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,c.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:i})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:n}=e;return(0,c.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:n})},children:" by {user}"})}function x(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,c.jsxs)("span",{className:a.G.common.lastUpdated,children:[(0,c.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,c.jsx)(h,{lastUpdatedAt:n}):"",byUser:t?(0,c.jsx)(m,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const f={lastUpdated:"lastUpdated_JAkA"};function p(e){let{className:n,editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,c.jsxs)("div",{className:(0,i.A)("row",n),children:[(0,c.jsx)("div",{className:"col",children:t&&(0,c.jsx)(d,{editUrl:t})}),(0,c.jsx)("div",{className:(0,i.A)("col",f.lastUpdated),children:(s||a)&&(0,c.jsx)(x,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}},7502:(e,n,t)=>{t.d(n,{A:()=>B});var i=t(6540),s=t(8453),a=t(7143),r=t(1433),l=t(4848);function c(e){return(0,l.jsx)("code",{...e})}var o=t(6289);var d=t(4164),u=t(5246),h=t(9136),m=t(3535);const x="details_lb9f",f="isBrowser_bmU9",p="collapsibleContent_i85q";function j(e){return!!e&&("SUMMARY"===e.tagName||j(e.parentElement))}function v(e,n){return!!e&&(e===n||v(e.parentElement,n))}function A(e){let{summary:n,children:t,...s}=e;(0,u.A)().collectAnchor(s.id);const a=(0,h.A)(),r=(0,i.useRef)(null),{collapsed:c,setCollapsed:o}=(0,m.u)({initialState:!s.open}),[A,g]=(0,i.useState)(s.open),y=i.isValidElement(n)?n:(0,l.jsx)("summary",{children:n??"Details"});return(0,l.jsxs)("details",{...s,ref:r,open:A,"data-collapsed":c,className:(0,d.A)(x,a&&f,s.className),onMouseDown:e=>{j(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;j(n)&&v(n,r.current)&&(e.preventDefault(),c?(o(!1),g(!0)):o(!0))},children:[y,(0,l.jsx)(m.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{o(e),g(!e)},children:(0,l.jsx)("div",{className:p,children:t})})]})}const g="details_b_Ee";function y(e){let{...n}=e;return(0,l.jsx)(A,{...n,className:(0,d.A)("alert alert--info",g,n.className)})}function N(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),s=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return(0,l.jsx)(y,{...e,summary:t,children:s})}var b=t(9303);function w(e){return(0,l.jsx)(b.A,{...e})}const U="containsTaskList_mC6p";function C(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&U)}const T="img_ev3q";var z=t(2362),M=t(205);const _={Head:a.A,details:N,Details:N,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(c,{...e}):(0,l.jsx)(r.A,{...e})},a:function(e){return(0,l.jsx)(o.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:C(e.className)})},li:function(e){return(0,u.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,T))});var n},h1:e=>(0,l.jsx)(w,{as:"h1",...e}),h2:e=>(0,l.jsx)(w,{as:"h2",...e}),h3:e=>(0,l.jsx)(w,{as:"h3",...e}),h4:e=>(0,l.jsx)(w,{as:"h4",...e}),h5:e=>(0,l.jsx)(w,{as:"h5",...e}),h6:e=>(0,l.jsx)(w,{as:"h6",...e}),admonition:z.A,mermaid:M.A};function B(e){let{children:n}=e;return(0,l.jsx)(s.x,{components:_,children:n})}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}},8569:(e,n,t)=>{t.d(n,{i:()=>s});var i=t(797);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:n}}=(0,i.A)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:n}}=(0,i.A)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}}}]);