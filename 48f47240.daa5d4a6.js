(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(1),r=n(6),l=(n(0),n(134)),i={id:"intl-displaynames",title:"Intl.DisplayNames"},o={id:"polyfills/intl-displaynames",title:"Intl.DisplayNames",description:"A ponyfill/polyfill for [`Intl.DisplayNames`](https://tc39.es/proposal-intl-displaynames).",source:"@site/docs/polyfills/intl-displaynames.md",permalink:"/formatjs/docs/polyfills/intl-displaynames",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-displaynames.md",sidebar:"polyfills",previous:{title:"Intl.RelativeTimeFormat",permalink:"/formatjs/docs/polyfills/intl-relativetimeformat"},next:{title:"Intl.NumberFormat (ES2020)",permalink:"/formatjs/docs/polyfills/intl-numberformat"}},s=[{value:"Installation",id:"installation",children:[]}],p={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A ponyfill/polyfill for ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://tc39.es/proposal-intl-displaynames"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.DisplayNames")),"."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @formatjs/intl-displaynames\n")),Object(l.b)("h1",{id:"features"},"Features"),Object(l.b)("p",null,"Everything in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-intl-displaynames"}),"https://github.com/tc39/proposal-intl-displaynames"),"."),Object(l.b)("h1",{id:"usage"},"Usage"),Object(l.b)("p",null,"To use the ponyfill, import it along with its data:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {DisplayNames} from '@formatjs/intl-displaynames';\nDisplayNames.__addLocaleData(\n  require('@formatjs/intl-displaynames/dist/locale-data/en.json') // locale-data for en\n);\nDisplayNames.__addLocaleData(\n  require('@formatjs/intl-displaynames/dist/locale-data/zh.json') // locale-data for zh\n);\n\nnew DisplayNames('zh', {type: 'currency'}).of('USD'); //=> \"\u7f8e\u5143\"\n")),Object(l.b)("p",null,"To use this as a polyfill, override ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DisplayNames")," as below:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import '@formatjs/intl-displaynames/polyfill';\nimport '@formatjs/intl-displaynames/dist/locale-data/en'; // locale-data for en\nimport '@formatjs/intl-displaynames/dist/locale-data/zh'; // locale-data for zh\n\nnew Intl.DisplayNames('en').of('zh-Hans'); //=> \"Simplified Chinese\"\nnew Intl.DisplayNames('zh', {type: 'currency'}).of('USD'); //=> \"\u7f8e\u5143\"\n")))}c.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(i,".").concat(u)]||m[u]||f[u]||l;return n?r.a.createElement(d,o({ref:t},p,{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);