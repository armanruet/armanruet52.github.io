(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{5333:function(e,t,a){Promise.resolve().then(a.bind(a,3182))},3182:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(7437),l=a(2265);function s(e){let{tags:t,selectedTag:a,onTagSelect:l}=e;return(0,r.jsx)("div",{className:"flex flex-wrap gap-2 mb-8",children:t.map(e=>{let{name:t,count:s}=e;return(0,r.jsxs)("button",{onClick:()=>l(t===a?null:t),className:"px-3 py-1 text-sm rounded-full transition-colors duration-200\n            ".concat(t===a?"bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200":"bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"),children:[t," (",s,")"]},t)})})}var n=a(6691),i=a.n(n),c=a(1396),o=a.n(c),d=a(34);let g=e=>e.startsWith("http")?e:"/".concat(e.replace(/^\//,""));function x(e){let{posts:t}=e;return(0,r.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:t.map(e=>{var t;return(0,r.jsxs)("article",{className:"group relative flex flex-col space-y-3",children:[(0,r.jsx)(o(),{href:"/blog/".concat(e.slug),className:"block aspect-[4/3] relative overflow-hidden",children:e.frontmatter.image?(0,r.jsx)("div",{className:"relative w-full h-full bg-gray-100 dark:bg-gray-800",children:(0,r.jsx)(i(),{src:g(e.frontmatter.image),alt:e.frontmatter.title||"Blog post image",fill:!0,className:"object-cover transition-transform duration-300 group-hover:scale-105"})}):(0,r.jsx)("div",{className:"flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800",children:(0,r.jsx)("span",{className:"text-gray-400",children:"No image"})})}),(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)("div",{className:"space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("time",{dateTime:e.frontmatter.date,children:(0,d.ZP)(new Date(e.frontmatter.date),"MMMM d, yyyy")}),(0,r.jsx)("span",{children:"\xb7"}),(0,r.jsx)("span",{className:"space-x-1",children:null===(t=e.frontmatter.tags)||void 0===t?void 0:t.map(e=>(0,r.jsx)("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300",children:e},e))})]}),(0,r.jsx)("h2",{className:"text-xl font-semibold tracking-tight",children:(0,r.jsx)(o(),{href:"/blog/".concat(e.slug),className:"hover:underline",children:e.frontmatter.title||"Untitled Post"})}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400 line-clamp-3",children:e.frontmatter.description})]})]},e.slug)})})}function m(e){let{posts:t,tagCounts:a}=e,[n,i]=(0,l.useState)(null),c=Object.entries(a).map(e=>{let[t,a]=e;return{name:t,count:a}}),o=n?t.filter(e=>{var t;return null===(t=e.frontmatter.tags)||void 0===t?void 0:t.includes(n)}):t;return(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"mx-auto max-w-2xl lg:max-w-none",children:[(0,r.jsx)(s,{tags:c,selectedTag:n,onTagSelect:e=>{i(e)}}),(0,r.jsx)(x,{posts:o})]})})}}},function(e){e.O(0,[326,413,421,971,472,744],function(){return e(e.s=5333)}),_N_E=e.O()}]);