"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4234],{4137:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=u,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:u,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7661:function(e,t,r){r.d(t,{Z:function(){return v}});r(7294);var n=r(6010),u=r(4715),a=r(3699),o=r(2735),i=r(7325),s="cardContainer_fWXF",c="cardTitle_rnsV",l="cardDescription_PWke",p=r(5944);function d(e){var t=e.href,r=e.children;return(0,p.tZ)(a.Z,{href:t,className:(0,n.Z)("card padding--lg",s),children:r})}function m(e){var t=e.href,r=e.icon,u=e.title,a=e.description;return(0,p.BX)(d,{href:t,children:[(0,p.BX)("h2",{className:(0,n.Z)("text--truncate",c),title:u,children:[r," ",u]}),a&&(0,p.tZ)("p",{className:(0,n.Z)("text--truncate",l),title:a,children:a})]})}function f(e){var t=e.item,r=(0,u.Wl)(t);return r?(0,p.tZ)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,r=e.item,n=(0,o.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,u.xz)(null!=(t=r.docId)?t:void 0);return(0,p.tZ)(m,{href:r.href,icon:n,title:r.label,description:null==a?void 0:a.description})}function h(e){var t=e.item;switch(t.type){case"link":return(0,p.tZ)(g,{item:t});case"category":return(0,p.tZ)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,u.jA)();return(0,p.tZ)(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return(0,p.tZ)(y,Object.assign({},e));var a=(0,u.MN)(t);return(0,p.tZ)("section",{className:(0,n.Z)("row",r),children:a.map((function(e,t){return(0,p.tZ)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.tZ)(h,{item:e})},t)}))})}},1852:function(e,t,r){r.d(t,{Z:function(){return s}});r(7294);var n="list_rgtH",u="item_i3mt",a=r(6010),o=r(3699),i=r(5944);function s(e){var t=e.data,r=void 0===t?[]:t,s=e.wrapperClassName,c=e.wrapperStyle;return(0,i.tZ)("div",{style:c,className:(0,a.Z)(n,s),children:r.map((function(e){return(0,i.tZ)("div",{className:u,children:(0,i.tZ)(o.Z,{to:e.link,children:e.title})},e.title)}))})}},8962:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var n=r(7462),u=r(3366),a=(r(7294),r(4137)),o=r(1852),i=r(7661),s=r(4715),c=["components"],l={id:"Docusaurus-guides",slug:"/Docusaurus-guides",title:"Docusaurus \u517b\u6210\u8bb0\u5f55",authors:"Shake",date:"2023/01/21",last_update:{date:"2023/01/21"},keywords:["guides","Docusaurus","Docusaurus-guides"]},p=void 0,d={unversionedId:"Site/Docusaurus/Docusaurus-guides",id:"Site/Docusaurus/Docusaurus-guides",title:"Docusaurus \u517b\u6210\u8bb0\u5f55",description:"- \u8fd9\u91cc\u8bb0\u5f55\u7740\u6211\u642d\u5efa Docusaurus \u7684\u90e8\u5206\u8e29\u5751\u8fc7\u7a0b\uff0c\u5e0c\u671b\u80fd\u591f\u7ed9\u6b63\u5728\u642d\u5efa Docusaurus \u7684\u5c0f\u4f19\u4f34\u4e00\u4e9b\u5e2e\u52a9\uff0c\u53ef\u884c\u6027\u5747\u8fdb\u884c\u8fc7\u9a8c\u8bc1\uff0c\u53ef\u653e\u5fc3\u98df\u7528\u3002\uff08\u53ea\u662f\u4e00\u4e2a\u9488\u5bf9\u81ea\u5df1\u4e2a\u4eba\u7684\u8bb0\u5f55\uff0c\u4e25\u683c\u610f\u4e49\u4e0a\u5e76\u4e0d\u7b97\u662f\u6559\u5b66\u6587\u6863\uff09",source:"@site/docs/Site/Docusaurus/guides.md",sourceDirName:"Site/Docusaurus",slug:"/Docusaurus-guides",permalink:"/docs/Docusaurus-guides",draft:!1,tags:[],version:"current",lastUpdatedAt:1674259200,formattedLastUpdatedAt:"2023\u5e741\u670821\u65e5",frontMatter:{id:"Docusaurus-guides",slug:"/Docusaurus-guides",title:"Docusaurus \u517b\u6210\u8bb0\u5f55",authors:"Shake",date:"2023/01/21",last_update:{date:"2023/01/21"},keywords:["guides","Docusaurus","Docusaurus-guides"]},sidebar:"Blog_Building",previous:{title:"\u8bb0\u5f55 Blog \u642d\u5efa\u7684\u90e8\u5206\u8fc7\u7a0b",permalink:"/docs/Site"},next:{title:"\u73af\u5883\u914d\u7f6e",permalink:"/docs/Docusaurus-\u73af\u5883\u914d\u7f6e"}},m={},f=[],g={toc:f};function h(e){var t=e.components,r=(0,u.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u8bb0\u5f55\u7740\u6211\u642d\u5efa ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," \u7684\u90e8\u5206\u8e29\u5751\u8fc7\u7a0b\uff0c\u5e0c\u671b\u80fd\u591f\u7ed9\u6b63\u5728\u642d\u5efa Docusaurus \u7684\u5c0f\u4f19\u4f34\u4e00\u4e9b\u5e2e\u52a9\uff0c\u53ef\u884c\u6027\u5747\u8fdb\u884c\u8fc7\u9a8c\u8bc1\uff0c\u53ef\u653e\u5fc3\u98df\u7528\u3002\uff08\u53ea\u662f\u4e00\u4e2a\u9488\u5bf9\u81ea\u5df1\u4e2a\u4eba\u7684\u8bb0\u5f55\uff0c\u4e25\u683c\u610f\u4e49\u4e0a\u5e76\u4e0d\u7b97\u662f\u6559\u5b66\u6587\u6863\uff09  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u535a\u5ba2\u4f7f\u7528\u7684\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/blog/2022/08/01/announcing-docusaurus-2.0"},"Docusaurus 2.x")," \u7248\u672c\uff0c\u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://kuizuo.cn/"},"kuizuo")," \u535a\u4e3b\u7684\u6e90\u7801\u57fa\u7840\u4e0a\u8fdb\u884c\u4fee\u6539\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u559c\u6b22\u6211\u8fd9\u4e2a\u4e3b\u9898\uff0c\u6e90\u7801\u662f\u5f00\u6e90\u7684\uff0c\u53ef\u4ee5\u5230\u6211\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Shake-Jarjane/Docusaurus-Blog/"},"Github")," \u4ed3\u5e93\u76f4\u63a5 fork \u6216\u8005 git clone \u5747\u53ef\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/new/clone?repository-url=https://github.com/Shake-Jarjane/Docusaurus-Blog/tree/main&project-name=blog&repo-name=blog"},"Vercel")," \u4e00\u952e\u90e8\u7f72"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udc47 \u5efa\u8bae\u591a\u7ffb\u9605\u6587\u5b98\u6587\u6863\uff0c\u6216\u8bb8\u4f1a\u6709\u4f60\u9700\u8981\u7684\u7b54\u6848")),(0,a.kt)(o.Z,{data:[{title:"Docusaurus \u4e2d\u6587",link:"https://docusaurus.io/zh-CN/docs"}],mdxType:"LinkList"}),(0,a.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);