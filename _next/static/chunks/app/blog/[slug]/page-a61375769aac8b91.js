(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{2350:function(e,t,n){Promise.resolve().then(n.t.bind(n,1165,23)),Promise.resolve().then(n.bind(n,4365))},4365:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXClient:function(){return c}});var r=n(7437),o=n(6442),l=n(6691),u=n.n(l),i=n(1396),a=n.n(i);let s={h1:e=>(0,r.jsx)("h1",{className:"text-3xl font-bold tracking-tight mt-8 mb-4",...e}),p:e=>(0,r.jsx)("p",{className:"leading-7 [&:not(:first-child)]:mt-6",...e}),a:e=>{let{href:t="",...n}=e;return t.startsWith("http")?(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200",...n}):(0,r.jsx)(a(),{href:t,className:"text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200",...n})},img:e=>{let{src:t,alt:n,...o}=e;return(0,r.jsx)("div",{className:"relative aspect-video my-8",children:t&&(0,r.jsx)(u(),{src:t,alt:n||"",fill:!0,className:"object-cover rounded-lg",...o})})}};function c(e){let{content:t}=e;return(0,r.jsx)("div",{className:"mdx-content prose dark:prose-invert",children:(0,r.jsx)(o.R,{...t,components:s})})}},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return a},default:function(){return s}});let r=n(1024),o=n(7929),l=n(2637),u=n(413),i=r._(n(9950)),a=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/your-repo-name/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=u.Image},1165:function(e){e.exports={title:"blog-post_title__ew4vR",content:"blog-post_content__Ydq91",prose:"blog-post_prose__zdaeS","prose-lg":"blog-post_prose-lg__8bTsa",dark:"blog-post_dark__kRfE5"}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,l={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:l,_owner:i.current}}t.Fragment=l,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(679)},1396:function(e,t,n){e.exports=n(8326)},4091:function(e,t,n){e.exports.jsxRuntime=n(7437)},6442:function(e,t,n){"use strict";n.d(t,{R:function(){return f}});var r={};n.r(r),n.d(r,{MDXContext:function(){return u},MDXProvider:function(){return c},useMDXComponents:function(){return a},withMDXComponents:function(){return i}});var o=n(2265),l=n(4091);let u=o.createContext({});function i(e){return function(t){let n=a(t.components);return o.createElement(e,{...t,allComponents:n})}}function a(e){let t=o.useContext(u);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function c({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||s:a(e),o.createElement(u.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:u={},lazy:i}){let[a,s]=(0,o.useState)(!i||"undefined"==typeof window);(0,o.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let f=(0,o.useMemo)(()=>{let o=Object.assign({opts:{...r,...l.jsxRuntime}},{frontmatter:t},n),u=Object.keys(o),i=Object.values(o),a=Reflect.construct(Function,u.concat(`${e}`));return a.apply(a,i).default},[n,e]);if(!a)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=o.createElement(c,{components:u},o.createElement(f,null));return i?o.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[326,413,971,472,744],function(){return e(e.s=2350)}),_N_E=e.O()}]);