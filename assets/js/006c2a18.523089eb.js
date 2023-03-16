"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1952],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<u;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var r=n(6010),a="tabItem_Ymn6",u=n(5944);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,u.tZ)("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:n,children:t})}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(6010),u=n(1048),o=n(3609),l=n(1943),s=n(2957),i="tabList__CuJ",c="tabItem_LNqP",p=n(5944);function d(e){var t,n,u=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),w=y.tabGroupChoices,z=y.setTabGroupChoices,O=(0,r.useState)(N),D=O[0],C=O[1],j=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=w[h];null!=x&&x!==D&&b.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==D&&(T(t),C(r),null!=h&&z(h,String(r)))},P=function(e){var t,n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var u,o=j.indexOf(e.currentTarget)-1;n=null!=(u=j[o])?u:j[j.length-1]}null==(t=n)||t.focus()};return(0,p.BX)("div",{className:(0,a.Z)("tabs-container",i),children:[(0,p.tZ)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v),children:b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,p.tZ)("li",Object.assign({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,ref:function(e){return j.push(e)},onKeyDown:P,onClick:E},r,{className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":D===t}),children:null!=n?n:t}),t)}))}),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):(0,p.tZ)("div",{className:"margin-top--md",children:k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))})]})}function m(e){var t=(0,u.Z)();return(0,p.tZ)(d,Object.assign({},e),String(t))}},4912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),u=(n(7294),n(4137)),o=n(4259),l=n(425),s=["components"],i={id:"Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",slug:"/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",authors:"Shake",date:"2023/01/24",last_update:{date:"2023/02/15"},keywords:["docusaurus"]},c=void 0,p={unversionedId:"Site/Docusaurus/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"Site/Docusaurus/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",description:"\u672c\u6587\u5185\u5bb9\u642c\u8fd0\u81ea\u535a\u4e3b kuizuo\uff0c\u539f\u6587\u5730\u5740\uff1a\u81ea\u5b9a\u4e49\u7ec4\u4ef6",source:"@site/docs/Site/Docusaurus/\u81ea\u5b9a\u4e49\u7ec4\u4ef6.md",sourceDirName:"Site/Docusaurus",slug:"/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/docs/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",draft:!1,tags:[],version:"current",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{id:"Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",slug:"/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6",title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",authors:"Shake",date:"2023/01/24",last_update:{date:"2023/02/15"},keywords:["docusaurus"]},sidebar:"Blog_Building",previous:{title:"\u6837\u5f0f\u4e0e\u9875\u9762",permalink:"/docs/Docusaurus-\u6837\u5f0f\u4e0e\u9875\u9762"},next:{title:"\u641c\u7d22\u914d\u7f6e",permalink:"/docs/Docusaurus-\u641c\u7d22\u914d\u7f6e"}},d={},m=[{value:"\u4e3b\u9898\u7ec4\u4ef6",id:"\u4e3b\u9898\u7ec4\u4ef6",level:2},{value:"swizzle \u7ec4\u4ef6",id:"swizzle-\u7ec4\u4ef6",level:2},{value:"\u81ea\u5b9a\u4e49 404 \u754c\u9762",id:"\u81ea\u5b9a\u4e49-404-\u754c\u9762",level:3}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5185\u5bb9\u642c\u8fd0\u81ea\u535a\u4e3b kuizuo\uff0c\u539f\u6587\u5730\u5740\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://kuizuo.cn/docs/docusaurus-component"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"))),(0,u.kt)("p",null,"\u521d\u59cb\u5316\u7684\u4e00\u4e2a docusaurus \u9879\u76ee\u5c31\u5df2\u7ecf\u6709\u9884\u7559\u597d\u7684\u7684\u7ec4\u4ef6\uff0c\u4f8b\u5982\u535a\u5ba2\u5e03\u5c40\uff0c\u6807\u7b7e\u9875\u5f52\u6863\u9875\u7b49\u7b49\u3002\u4f46\u662f\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u6837\u5f0f\u53ef\u80fd\u4e0d\u6ee1\u4f60\u7684\u5ba1\u7f8e\uff0c\u6216\u8005\u662f\u60f3\u589e\u52a0\u5728\u8fd9\u4e9b\u4e3b\u9898\u7ec4\u4ef6\u4e2d\u589e\u52a0\u70b9\u4e1c\u897f\u3002\u90a3\u4e48\u5c31\u9700\u8981\u7528\u5230 ",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/swizzling"},"Swizzle")),(0,u.kt)("h2",{id:"\u4e3b\u9898\u7ec4\u4ef6"},"\u4e3b\u9898\u7ec4\u4ef6"),(0,u.kt)("p",null,"\u5728 docusaurus \u4e2d\u7684\u4e3b\u9898\u7ec4\u4ef6\u5b58\u653e\u5728 ",(0,u.kt)("strong",{parentName:"p"},"@docusaurus/theme-classic/theme")," \u4e0b\uff0c\u5982\u679c\u60f3\u8981\u8986\u76d6\u67d0\u4e2a\u7ec4\u4ef6\u7684\u8bdd\u53ef\u4ee5\u5728 src/theme \u76ee\u5f55\u4e0b\u521b\u5efa\u4e0e\u4e4b\u5bf9\u5e94\u6587\u4ef6\u8def\u5f84\u7ed3\u6784\u76f8\u540c\u7684\u6587\u4ef6\u3002"),(0,u.kt)("p",null,"\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),(0,u.kt)("p",null,"\u6bcf\u5f53\u5bfc\u5165 ",(0,u.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," \u65f6\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," \u90fd\u4f1a\u88ab\u4f18\u5148\u8f7d\u5165\u3002"),(0,u.kt)("p",null,"\u5173\u4e8e",(0,u.kt)("em",{parentName:"p"},"\u5206\u5c42\u67b6\u6784"),"\u53ef\u770b",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/advanced/client"},"\u5ba2\u6237\u7aef\u67b6\u6784 | Docusaurus")),(0,u.kt)("h2",{id:"swizzle-\u7ec4\u4ef6"},"swizzle \u7ec4\u4ef6"),(0,u.kt)("p",null,"\u8981\u8f93\u51fa\u6240\u6709 ",(0,u.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," \u7ec4\u4ef6\u7684\u603b\u89c8\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"yarn run swizzle @docusaurus/theme-classic -- --list\n")),(0,u.kt)("p",null,"\u4e0d\u8fc7\u6211\u66f4\u503e\u5411\u4e8e\u76f4\u63a5\u5728 ",(0,u.kt)("inlineCode",{parentName:"p"},"node_modules/@docusaurus/theme-classic/src/theme")," \u67e5\u770b\u6240\u6709\u7ec4\u4ef6\u3002"),(0,u.kt)("p",null,"\u8fd9\u91cc\u4ee5\u5f52\u6863\u9875\u4e3e\u4f8b\uff0c\u5b98\u65b9\u7684\u5f52\u6863\u9875\u9762\u7ec4\u4ef6\u662f ",(0,u.kt)("inlineCode",{parentName:"p"},"theme/BlogArchivePage")),(0,u.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b8c\u6210\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/swizzling#ejecting"},"\u5f39\u51fa\u7ec4\u4ef6"),"\u6216\u8005",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/swizzling#wrapping"},"\u5305\u88c5\u7ec4\u4ef6")),(0,u.kt)("p",null,"\u4f8b\u5982\u5f39\u51fa\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/cli#docusaurus-swizzle"},"\u547d\u4ee4"),"\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"yarn run swizzle @docusaurus/theme-classic BlogArchivePage -- --eject --typescript\n")),(0,u.kt)("p",null,"\u8fd9\u6837\u4f1a\u521b\u5efa ",(0,u.kt)("inlineCode",{parentName:"p"},"src/theme/BlogArchivePage/index.tsx"),"\uff0c\u4e5f\u5c31\u662f\u5f52\u6863\u9875\u9762\u7684\u4ee3\u7801\uff0c\u800c\u8981\u505a\u7684\u5c31\u662f\u4fee\u6539\u4ee3\u7801\uff0c\u5b9e\u73b0\u81ea\u5df1\u6240\u9700\u7684\u6837\u5f0f\u4e0e\u529f\u80fd\u3002"),(0,u.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u6837\u83b7\u53d6\u5230\u7684\u53ea\u662findex.tsx\u6587\u4ef6\uff0c\u6709\u53ef\u80fd\u8fd8\u5b58\u5728\u5b50\u7ec4\u4ef6\u3002\u6240\u6709\u6211\u4e00\u822c\u7684\u505a\u6cd5\u662f\u5728 ",(0,u.kt)("inlineCode",{parentName:"p"},"node_modules/@docusaurus/theme-classic/src/theme")," \u4e2d\u627e\u5230\u7ec4\u4ef6\u6240\u5728\u6587\u4ef6\u5939\uff0c\u7136\u540e\u5c06\u6574\u4e2a\u6587\u4ef6\u5939\u590d\u5236\u5230 ",(0,u.kt)("inlineCode",{parentName:"p"},"src/theme")," \u4e0b\u3002\u8fd9\u6837\u80fd\u5f97\u5230\u5c31\u662f\u6700\u539f\u59cb\u7684ts\u6587\u4ef6\uff0c\u540c\u65f6\u6240\u80fd\u4fee\u6539\u7684\u5730\u65b9\u4e5f\u5c31\u8d8a\u591a\uff0c\u66f4\u65b9\u4fbf\u7684\u4e2a\u6027\u5316\u3002"),(0,u.kt)("admonition",{type:"caution"},(0,u.kt)("p",{parentName:"admonition"},(0,u.kt)("strong",{parentName:"p"},"\u4f46\u662f"),"\uff0c\u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u6709\u4e9b\u4e3b\u9898\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u5b58\u5728\u4e00\u5b9a",(0,u.kt)("strong",{parentName:"p"},"\u98ce\u9669"),"\u3002\u5c24\u5176\u662f\u5728\u5347\u7ea7 Docusaurus \u53d8\u5f97\u66f4\u56f0\u96be\uff0c\u56e0\u4e3a\u5982\u679c\u63a5\u6536\u7684\u5c5e\u6027\u53d1\u751f\u53d8\u5316\uff0c\u6216\u5185\u90e8\u4f7f\u7528\u7684\u4e3b\u9898 API \u53d1\u751f\u53d8\u5316\uff0c\u6709\u53ef\u80fd\u5c31\u4f1a\u5bfc\u81f4\u9875\u9762\u6e32\u67d3\u5931\u8d25\u3002"),(0,u.kt)("p",{parentName:"admonition"},"\u5c31\u6bd4\u5982\u6211\u5728\u5c06 docusaurus \u5347\u7ea7\u5230 2.0.0 \u6b63\u5f0f\u7248\u7684\u65f6\u5019\u5c31\u51fa\u73b0\u9875\u9762\u9519\u8bef\uff0c\u539f\u56e0\u662f ",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog"},"plugin-content-blog")," \u5728\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u52a8\uff0c\u5bfc\u81f4\u6570\u636e\u65e0\u6cd5\u89e3\u6790\uff0c\u81ea\u7136\u800c\u7136\u9875\u9762\u5c31\u6e32\u67d3\u5931\u8d25\u3002")),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u5982\u679c\u4e0d\u5347\u7ea7\u4f9d\u8d56\u4e5f\u786e\u5b9e\u4e0d\u4f1a\u6709\u95ee\u9898\uff0c\u4f46\u8c01\u80fd\u4fdd\u8bc1\u65b0\u7248\u672c\u7684\u4e00\u4e9b\u7279\u6027\u4e0d\u5438\u5f15\u4f7f\u7528\u8005\u53bb\u5347\u7ea7\u5462\uff1f"),(0,u.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u5347\u7ea7\u4f9d\u8d56\u540e\u5c31\u53ef\u80fd\u9700\u8981\u7ef4\u62a4\u4e00\u5b9a\u7684\u4ee3\u7801\u3002\u8981\u505a\u7684\u662f\u91cd\u65b0 swizzle \u4e00\u4efd\u6700\u65b0\u7684\u6587\u4ef6\uff0c\u7136\u540e\u53bb\u6bd4\u5bf9\u53d8\u5316\uff0c\u6700\u7ec8\u6392\u67e5\u95ee\u9898\u3002")),(0,u.kt)("h3",{id:"\u81ea\u5b9a\u4e49-404-\u754c\u9762"},"\u81ea\u5b9a\u4e49 404 \u754c\u9762"),(0,u.kt)("p",null,"\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u5acc\u5f03\u4e3b\u9898\u81ea\u5e26\u7684 404 NotFound \u754c\u9762\u592a\u5355\u8c03\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7 ",(0,u.kt)("inlineCode",{parentName:"p"},"swizzle")," \u6765\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,u.kt)(o.Z,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"yarn swizzle @docusaurus/theme-classic NotFound\n"))),(0,u.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic NotFound\n")))),(0,u.kt)("p",null,"\u7136\u540e\u4ed6\u4f1a\u5728 ",(0,u.kt)("inlineCode",{parentName:"p"},"src/theme/")," \u4e0b\u751f\u6210\u4e00\u4e0b ",(0,u.kt)("strong",{parentName:"p"},"NotFound.js")," \u6587\u4ef6\uff0c\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49 404 \u754c\u9762\u4e86"))}h.isMDXComponent=!0}}]);