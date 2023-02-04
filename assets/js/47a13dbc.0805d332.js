"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5911],{4137:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,i=e.originalType,o=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=u,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:u,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7661:function(e,t,r){r.d(t,{Z:function(){return v}});r(7294);var n=r(6010),u=r(1422),i=r(3699),s=r(2735),a=r(7325),o="cardContainer_fWXF",c="cardTitle_rnsV",l="cardDescription_PWke",d=r(5944);function p(e){var t=e.href,r=e.children;return(0,d.tZ)(i.Z,{href:t,className:(0,n.Z)("card padding--lg",o),children:r})}function f(e){var t=e.href,r=e.icon,u=e.title,i=e.description;return(0,d.BX)(p,{href:t,children:[(0,d.BX)("h2",{className:(0,n.Z)("text--truncate",c),title:u,children:[r," ",u]}),i&&(0,d.tZ)("p",{className:(0,n.Z)("text--truncate",l),title:i,children:i})]})}function m(e){var t=e.item,r=(0,u.Wl)(t);return r?(0,d.tZ)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,r=e.item,n=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,u.xz)(null!=(t=r.docId)?t:void 0);return(0,d.tZ)(f,{href:r.href,icon:n,title:r.label,description:null==i?void 0:i.description})}function h(e){var t=e.item;switch(t.type){case"link":return(0,d.tZ)(g,{item:t});case"category":return(0,d.tZ)(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,u.jA)();return(0,d.tZ)(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return(0,d.tZ)(y,Object.assign({},e));var i=(0,u.MN)(t);return(0,d.tZ)("section",{className:(0,n.Z)("row",r),children:i.map((function(e,t){return(0,d.tZ)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.tZ)(h,{item:e})},t)}))})}},1852:function(e,t,r){r.d(t,{Z:function(){return o}});r(7294);var n="list_rgtH",u="item_i3mt",i=r(6010),s=r(3699),a=r(5944);function o(e){var t=e.data,r=void 0===t?[]:t,o=e.wrapperClassName,c=e.wrapperStyle;return(0,a.tZ)("div",{style:c,className:(0,i.Z)(n,o),children:r.map((function(e){return(0,a.tZ)("div",{className:u,children:(0,a.tZ)(s.Z,{to:e.link,children:e.title})},e.title)}))})}},5082:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return Z}});var n=r(3117),u=r(102),i=(r(7294),r(4137)),s="featureIconArea_kxlx",a="title_Utvl",o=r(6010),c=r(7909),l=r(5944);function d(e){var t=e.onClick,r=e.src,n=e.srcDark,u=e.title,i=e.wrapperClassName,d=e.wrapperStyle;return(0,l.BX)("div",{className:(0,o.Z)(s,i),style:d,children:[(0,l.tZ)(c.Z,{sources:{light:r,dark:n||r},alt:u,loading:"lazy",onClick:t}),(0,l.tZ)("div",{className:a,children:u})]})}var p=r(9524),f=r(1852),m=r(7661),g=r(1422),h=["components"],y={id:"docusaurus111-guides",slug:"/docusaurus111-guides",title:"README",authors:"Shake",keywords:["guides","docusaurus","docusaurus-guides"]},v=void 0,b={unversionedId:"Test/docusaurus111/docusaurus111-guides",id:"Test/docusaurus111/docusaurus111-guides",title:"README",description:"<LinkList",source:"@site/docs/Test/docusaurus111/00 - guides.md",sourceDirName:"Test/docusaurus111",slug:"/docusaurus111-guides",permalink:"/docs/docusaurus111-guides",draft:!1,tags:[],version:"current",lastUpdatedAt:1675512745,formattedLastUpdatedAt:"2023\u5e742\u67084\u65e5",sidebarPosition:0,frontMatter:{id:"docusaurus111-guides",slug:"/docusaurus111-guides",title:"README",authors:"Shake",keywords:["guides","docusaurus","docusaurus-guides"]},sidebar:"Test",previous:{title:"\u6d4b\u8bd5\u573a\u5730",permalink:"/docs/Test"},next:{title:"README",permalink:"/docs/docusaurus111-guides"}},k={},Z=[],O={toc:Z};function w(e){var t=e.components,r=(0,u.Z)(e,h);return(0,i.kt)("wrapper",(0,n.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{src:(0,p.Z)("/img/icons/visual_studio_code.png"),title:"Visual Studio Code",mdxType:"FeatureIcon"}),(0,i.kt)(f.Z,{data:[{title:"Docusaurus \u641c\u7d22",link:"/docs/docusaurus111-search"},{title:"Docusaurus \u4e3b\u9898\u9b54\u65392",link:"/docs/test/docusaurus111/search"}],mdxType:"LinkList"}),(0,i.kt)("p",null,"1111\u8fd9\u91cc\u662f\u672c\u4eba\u5bf9 ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," \u7684\u9b54\u6539\u6307\u5357\uff0c\u5e2e\u52a9\u4f7f\u7528\u8005\u66f4\u597d\u4f7f\u7528 Docusaurus\u3002"),(0,i.kt)("p",null,"\u540c\u65f6 ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/blog/2022/08/01/announcing-docusaurus-2.0"},"Docusaurus 2.0")," \u4e5f\u6b63\u5f0f\u53d1\u5e03\u4e86\uff0c\u987a\u5e26\u5347\u7ea7\u4f9d\u8d56\u4e0e\u91cd\u6784\u9879\u76ee\u4f7f\u5176\u6613\u61c2\u6613\u7528\u3002"),(0,i.kt)("p",null,"\u4e5f\u6b22\u8fce\u4f60\u4f7f\u7528\u672c\u4e3b\u9898\uff0c\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u6b22\u8fce\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kuizuo/blog/discussions"},"GitHub Discussions")," \u63d0\u51fa\u3002"),(0,i.kt)(m.Z,{items:(0,g.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);