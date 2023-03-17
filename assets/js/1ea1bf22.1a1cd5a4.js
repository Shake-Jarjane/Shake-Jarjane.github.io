"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[624],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return u}});n(7294);var r=n(6010),a="tabItem_Ymn6",l=n(5944);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,l.tZ)("div",{role:"tabpanel",className:(0,r.Z)(a,u),hidden:n,children:t})}},4259:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),a=n(6010),l=n(1048),u=n(3609),o=n(1943),s=n(2957),i="tabList__CuJ",c="tabItem_LNqP",p=n(5944);function d(e){var t,n,l=e.lazy,d=e.block,g=e.defaultValue,m=e.values,h=e.groupId,f=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===g?g:null!=(t=null!=g?g:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),w=N.tabGroupChoices,D=N.setTabGroupChoices,O=(0,r.useState)(b),T=O[0],x=O[1],E=[],H=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=w[h];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&x(j)}var Z=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==T&&(H(t),x(r),null!=h&&D(h,String(r)))},S=function(e){var t,n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var l,u=E.indexOf(e.currentTarget)-1;n=null!=(l=E[u])?l:E[E.length-1]}null==(t=n)||t.focus()};return(0,p.BX)("div",{className:(0,a.Z)("tabs-container",i),children:[(0,p.tZ)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},f),children:v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,p.tZ)("li",Object.assign({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,ref:function(e){return E.push(e)},onKeyDown:S,onClick:Z},r,{className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t}),children:null!=n?n:t}),t)}))}),l?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):(0,p.tZ)("div",{className:"margin-top--md",children:y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))})]})}function g(e){var t=(0,l.Z)();return(0,p.tZ)(d,Object.assign({},e),String(t))}},9196:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var r="highlight_L1Iz",a=n(5944);var l=function(e){var t=e.children;return(0,a.tZ)("span",{className:r,children:t})}},6056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),u=n(9196),o=n(4259),s=n(425),i=["components"],c={id:"Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",slug:"/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",title:"\u4f7f\u7528 Hygen \u521b\u5efa\u6587\u7ae0\u6a21\u677f",date:"2023/03/16",authors:"Shake",last_update:{date:"2023/03/16"},keywords:["docusaurus","hygen"]},p=void 0,d={unversionedId:"Site/Docusaurus/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",id:"Site/Docusaurus/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",title:"\u4f7f\u7528 Hygen \u521b\u5efa\u6587\u7ae0\u6a21\u677f",description:"Docusaurus \u76ee\u524d\u5e76\u6ca1\u6709\u63d0\u4f9b\u8fd9\u6837\u4e00\u79cd\u5feb\u901f\u65b0\u5efa\u6587\u7ae0\u7684\u65b9\u6cd5\uff0c\u4f46 Markdown \u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u524d\u8a00\u5b57\u6bb5\u6216 import \u4e00\u4e9b\u7ec4\u4ef6\uff0c\u6570\u636e\u91cd\u590d\u6027\u7684\u64cd\u4f5c\uff0c\u6bcf\u6b21\u5199\u65b0\u6587\u7ae0\u7684\u65f6\u5019\u90fd\u8981\u624b\u52a8\u7f16\u5199\u5934\u90e8\u5b57\u6bb5\u5185\u5bb9\u6216\u8005\u590d\u5236\u7c98\u8d34\u6211\u5acc\u6709\u70b9\u9ebb\u70e6\uff0c\u4e8e\u662f\u5f15\u5165\u4e86 Hygen \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u3001\u5feb\u901f\u3001\u53ef\u6269\u5c55\u7684\u4ee3\u7801\u751f\u6210\u5668\uff0c\u5176\u7528\u9014\u662f\u5e2e\u52a9\u5f00\u53d1\u8005\u81ea\u52a8\u521b\u5efa\u6a21\u677f\u6587\u4ef6\u7684\u5de5\u5177\uff0c\u65e8\u5728\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002",source:"@site/docs/Site/Docusaurus/\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f.md",sourceDirName:"Site/Docusaurus",slug:"/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",permalink:"/docs/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",draft:!1,tags:[],version:"current",lastUpdatedAt:1678924800,formattedLastUpdatedAt:"2023\u5e743\u670816\u65e5",frontMatter:{id:"Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",slug:"/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",title:"\u4f7f\u7528 Hygen \u521b\u5efa\u6587\u7ae0\u6a21\u677f",date:"2023/03/16",authors:"Shake",last_update:{date:"2023/03/16"},keywords:["docusaurus","hygen"]},sidebar:"Blog_Building",previous:{title:"\u6587\u6863\u7f16\u8f91\u6307\u5357",permalink:"/docs/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357"},next:{title:"Hexo \u7684\u7b80\u5355\u642d\u5efa",permalink:"/docs/Hexo-guides"}},g={},m=[{value:"Start Hygen",id:"start-hygen",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u521b\u5efa\u6a21\u677f",id:"\u521b\u5efa\u6a21\u677f",level:3},{value:"\u81ea\u5b9a\u4e49\u6a21\u677f",id:"\u81ea\u5b9a\u4e49\u6a21\u677f",level:3},{value:"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0",id:"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0",level:3},{value:"\u53c2\u8003\u4e0e\u81f4\u8c22",id:"\u53c2\u8003\u4e0e\u81f4\u8c22",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Docusaurus \u76ee\u524d\u5e76\u6ca1\u6709\u63d0\u4f9b\u8fd9\u6837\u4e00\u79cd\u5feb\u901f\u65b0\u5efa\u6587\u7ae0\u7684\u65b9\u6cd5\uff0c\u4f46 Markdown \u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u524d\u8a00\u5b57\u6bb5\u6216 import \u4e00\u4e9b\u7ec4\u4ef6\uff0c\u6570\u636e\u91cd\u590d\u6027\u7684\u64cd\u4f5c\uff0c\u6bcf\u6b21\u5199\u65b0\u6587\u7ae0\u7684\u65f6\u5019\u90fd\u8981\u624b\u52a8\u7f16\u5199\u5934\u90e8\u5b57\u6bb5\u5185\u5bb9\u6216\u8005\u590d\u5236\u7c98\u8d34\u6211\u5acc\u6709\u70b9\u9ebb\u70e6\uff0c\u4e8e\u662f\u5f15\u5165\u4e86 ",(0,l.kt)(u.Z,{mdxType:"HighLight"},"Hygen")," \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u3001\u5feb\u901f\u3001\u53ef\u6269\u5c55\u7684\u4ee3\u7801\u751f\u6210\u5668\uff0c\u5176\u7528\u9014\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5e2e\u52a9\u5f00\u53d1\u8005\u81ea\u52a8\u521b\u5efa\u6a21\u677f\u6587\u4ef6\u7684\u5de5\u5177\uff0c\u65e8\u5728\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002")),(0,l.kt)("h2",{id:"start-hygen"},"Start Hygen"),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save hygen\n"))),(0,l.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add hygen\n")))),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd [\u9879\u76ee\u6839\u76ee\u5f55]\nhygen init self\n")),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u5b8c\u6210\u540e\u4f1a\u5728\u6839\u76ee\u5f55\u4e0b \u751f\u6210 ",(0,l.kt)("strong",{parentName:"p"},"_templates")," \u7684\u6587\u4ef6\u5939\uff0c\u6a21\u677f\u9700\u8981\u5b9a\u4e49\u5728\u8be5\u6587\u4ef6\u5939\u4e0b\uff0c",(0,l.kt)("strong",{parentName:"p"},"generator")," \u662f\u6784\u5efa\u5668\u6587\u4ef6\u5939\uff08\u8be5\u6587\u4ef6\u5939\u4e0d\u80fd\u5220\uff09\uff0c",(0,l.kt)("strong",{parentName:"p"},"ejs.t")," \u6587\u4ef6\u5219\u662f\u6a21\u677f\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230316200957.png",alt:"20230316200957"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_templates"))," \u6587\u4ef6\u5939\u4e0b\u7684\u76ee\u5f55\u4f1a\u662f ",(0,l.kt)("strong",{parentName:"p"},"Hygen \u547d\u4ee4\u4e2d\u7684\u4e00\u90e8\u5206"),"\uff0c\u6bd4\u5982\u6211\u7684\u6587\u4ef6\u76ee\u5f55\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Shake-Blog\n\u251c\u2500\u2500 _templates\n\u2502   \u251c\u2500\u2500 blog\n\u2502   \u2502   \u2514\u2500\u2500 new\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 hello.ejs.t\n\u2502   \u2514\u2500\u2500 docs\n\u2502   \u2502   \u2514\u2500\u2500 new\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 hello.ejs.t\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u6a21\u677f"},"\u521b\u5efa\u6a21\u677f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hygen generator new [\u6a21\u677f\u540d\u79f0] # \u5982blog\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230316201411.png",alt:"20230316201411"})),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6a21\u677f"},"\u81ea\u5b9a\u4e49\u6a21\u677f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"<%=  %>"))," \u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u4f20\u9012\u53c2\u6570\uff0c\u4ee5\u53ca\u8d4b\u503c\uff0c\u5982\u6587\u4ef6\u540d\u3001\u8def\u5f84\u3001\u65e5\u671f\u7b49\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u4ee5\u4e0b\u662f\u6211\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6240\u5b9a\u4e49\u7684\u6a21\u677f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"---\nto: blog/<%= path %>/<%= title %>.md\n---\n---\nslug: /<%= path %>-<%= title %>\ntitle: <%= title %>\nauthor: Shake\ndate: <%= h.getDate() %>\ntags: []\nkeywords: [] \n---\n\n\x3c!-- truncate --\x3e\n")),(0,l.kt)("p",null,"Hygen \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u8f85\u52a9\u51fd\u6570\u548c\u81ea\u5b9a\u4e49\u8f85\u52a9\u51fd\u6570\u7684\u62d3\u5c55\u673a\u5236\uff0c\u53ef\u4ee5\u66f4\u7075\u6d3b\u5730\u4f7f\u7528 Hygen \u6765\u751f\u6210\u6a21\u677f\u3002",(0,l.kt)("br",null),"\u5728\u6a21\u677f\u6587\u4ef6\u4e2d\uff0c\u8f85\u52a9\u51fd\u6570\u548c\u81ea\u5b9a\u4e49\u51fd\u6570\u901a\u8fc7 ",(0,l.kt)(u.Z,{mdxType:"HighLight"},"h")," \u5bf9\u8c61\u6765\u8c03\u7528\uff0c\u5176\u4e2d ",(0,l.kt)(u.Z,{mdxType:"HighLight"},"h.getDate()")," \u5c31\u662f\u8c03\u7528\u4e86\u81ea\u5b9a\u4e49\u7684 ",(0,l.kt)(u.Z,{mdxType:"HighLight"},"getDate")," \u51fd\u6570\u6765\u751f\u6210\u4e00\u4e2a\u65e5\u671f\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u518d\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},".hygen.js"))," \u6587\u4ef6\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  helpers: {\n    getDate: () => {\n      let d = new Date()\n      let year = d.getFullYear();\n      let month = d.getMonth() + 1;\n      let day = d.getDate();\n      return `${year}/${month}/${day}`\n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0"},"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hygen blog new --path demo1/demo2 --title helloword\n")),(0,l.kt)("p",null,"hygen \u540e\u9762\u7d27\u63a5\u7740\u6a21\u677f\u540d\u79f0\uff0c\u53c2\u6570\uff08path\u3001title\uff09\u7684\u987a\u5e8f\u65e0\u56fa\u5b9a\u8981\u6c42\uff0c\u6267\u884c\u547d\u4ee4\u540e\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6839\u636e\u53c2\u6570\u4e0e\u6a21\u677f\u6765\u751f\u6210\u65b0\u7684 Markdown \u6587\u4ef6\u4e86"),(0,l.kt)("h2",{id:"\u53c2\u8003\u4e0e\u81f4\u8c22"},"\u53c2\u8003\u4e0e\u81f4\u8c22"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://www.hygen.io/docs/quick-start"},"Hygen | Quick Start"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/hygen/"},"\u4f7f\u7528hygen\u5feb\u901f\u521b\u5efa\u6587\u7ae0\u6a21\u677f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://mzvast.github.io/posts/2020-06-30-hygen"},"\u7528hygen\u4ee3\u7801\u751f\u6210\u5668\u4f18\u5316\u6548\u7387"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/Joe0217/article/details/103098448"},"hygen \u81ea\u52a8\u5316\u521b\u5efa\u6a21\u677f\u6587\u4ef6\u795e\u5668")))))}f.isMDXComponent=!0}}]);