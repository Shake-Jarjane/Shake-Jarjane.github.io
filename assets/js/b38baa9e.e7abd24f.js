"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7406],{5228:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(7294),r=n(6010),a=n(7325),s=n(3702),o=n(2957),c=n(3266);var l="backToTopButton_sjWU",d="backToTopButtonShow_xfvO",u=n(5944);function m(){var e=function(e){var t=e.threshold,n=(0,i.useState)(!1),r=n[0],a=n[1],s=(0,i.useRef)(!1),l=(0,o.Ct)(),d=l.startScroll,u=l.cancelScroll;return(0,o.RF)((function(e,n){var i=e.scrollY,r=null==n?void 0:n.scrollY;r&&(s.current?s.current=!1:i>=r?(u(),a(!1)):i<t?a(!1):i+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,c.S)((function(e){e.location.hash&&(s.current=!0,a(!1))})),{shown:r,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,u.tZ)("button",{"aria-label":(0,a.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",s.k.common.backToTopButton,l,t&&d),type:"button",onClick:n})}},8178:function(e,t,n){var i=n(9200),r=n(748),a=n(7294),s=n(9861),o=n(107),c=n(5944),l=(0,a.forwardRef)((function(e,t){var n=(0,o.L)(),l="dark"===(0,i.I)().colorMode?"dark":"light",d=((0,o.L)().giscus,(0,a.useState)(!1)),u=d[0],m=d[1];if((0,a.useEffect)((function(){function e(e){m(!0)}return window.emitter.on("onRouteDidUpdate",e),function(){window.emitter.off("onRouteDidUpdate",e)}}),[]),!u)return null;var f=Object.assign({},n.giscus,{id:"comments",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:l});return(0,c.tZ)(r.Z,{fallback:(0,c.tZ)("div",{children:"Loading Comments..."}),children:function(){return(0,c.tZ)(s.Z,Object.assign({},f))}})}));t.Z=l},1638:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294),r=n(3935),a=n(6441),s="tooltip_LqSg",o="tooltipArrow_bmQN",c=n(5944);function l(e){var t=e.children,n=e.id,l=e.anchorEl,d=e.text,u=e.delay,m=(0,i.useState)(!1),f=m[0],b=m[1],h=(0,i.useState)(null),p=h[0],v=h[1],Z=(0,i.useState)(null),w=Z[0],N=Z[1],k=(0,i.useState)(null),g=k[0],C=k[1],_=(0,i.useState)(null),B=_[0],I=_[1],L=(0,a.D)(p,w,{modifiers:[{name:"arrow",options:{element:g}},{name:"offset",options:{offset:[0,8]}}]}),T=L.styles,y=L.attributes,E=(0,i.useRef)(null),S=n+"_tooltip";return(0,i.useEffect)((function(){I(l?"string"==typeof l?document.querySelector(l):l:document.body)}),[B,l]),(0,i.useEffect)((function(){var e=["mouseenter","focus"],t=["mouseleave","blur"],n=function(){""!==d&&(null==p||p.removeAttribute("title"),E.current=window.setTimeout((function(){b(!0)}),u||400))},i=function(){clearInterval(E.current),b(!1)};return p&&(e.forEach((function(e){p.addEventListener(e,n)})),t.forEach((function(e){p.addEventListener(e,i)}))),function(){p&&(e.forEach((function(e){p.removeEventListener(e,n)})),t.forEach((function(e){p.removeEventListener(e,i)})))}}),[p,d,u]),(0,c.BX)(c.HY,{children:[i.cloneElement(t,{ref:v,"aria-describedby":f?S:void 0}),B?r.createPortal(f&&(0,c.BX)("div",Object.assign({id:S,role:"tooltip",ref:N,className:s,style:T.popper},y.popper,{children:[d,(0,c.tZ)("span",{ref:C,className:o,style:T.arrow})]})),B):B]})}},3534:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(7294),r=n(6010),a=n(3699),s=n(9488),o=n(3622),c={websiteCard:"websiteCard_HpaP",websiteCardImage:"websiteCardImage_wxVE",websiteCardHeader:"websiteCardHeader_FysQ",websiteCardTitle:"websiteCardTitle_Avf9",websiteCardBody:"websiteCardBody_IGyq",websiteCardDesc:"websiteCardDesc_flo_"},l=n(1638),d=n(5944),u=(0,i.memo)((function(e){var t,n,i=e.website;return(0,d.BX)("li",{className:(0,r.Z)(c.websiteCard,"padding-vert--sm padding-horiz--md"),children:[(0,d.tZ)("img",{src:"string"==typeof i.logo?i.logo:null==(t=i.logo)||null==(n=t.src)?void 0:n.src,alt:i.name,className:(0,r.Z)(c.websiteCardImage)}),(0,d.BX)("div",{className:c.websiteCardBody,children:[(0,d.tZ)("div",{className:(0,r.Z)(c.websiteCardHeader),children:(0,d.tZ)("h4",{className:c.websiteCardTitle,children:(0,d.tZ)(a.Z,{href:i.href,className:c.websiteCardLink,children:i.name})})}),(0,d.tZ)(l.Z,{text:i.desc,anchorEl:"#__docusaurus",id:"tooltip-"+i.name,children:(0,d.tZ)("p",{className:c.websiteCardDesc,children:i.desc})},i.name)]})]},i.name)})),m=u,f=n(5228),b=n(7290),h={sidebar:"sidebar_SyVj",sidebarItemTitle:"sidebarItemTitle_IGi6",sidebarItemList:"sidebarItemList_YJN2",sidebarItem:"sidebarItem_QBCR",sidebarItemLink:"sidebarItemLink_pkjY",sidebarItemLinkActive:"sidebarItemLinkActive_zXay",hero:"hero_PpVW",heroTitle:"heroTitle_BMCs",heroDesc:"heroDesc_NJBi",cateHeader:"cateHeader_fy_w",cateBody:"cateBody_YqVW",websiteList:"websiteList_bvLH"},p=n(8178);function v(){var e={title:"",items:b.O.map((function(e){return{title:e.name,permalink:"#"+e.name}}))};return(0,d.BX)("nav",{className:(0,r.Z)(h.sidebar,"thin-scrollbar"),children:[(0,d.tZ)("div",{className:(0,r.Z)(h.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,d.tZ)("ul",{className:(0,r.Z)(h.sidebarItemList,"clean-list"),children:e.items.map((function(e){return(0,d.tZ)("li",{className:h.sidebarItem,children:(0,d.tZ)(a.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})}function Z(){return(0,d.BX)("div",{className:h.category,children:[b.O.map((function(e){return(0,d.BX)("div",{children:[(0,d.tZ)("div",{className:h.cateHeader,children:(0,d.BX)("h2",{id:e.name,className:"anchor",children:[e.name,(0,d.tZ)("a",{className:"hash-link",href:"#"+e.name,title:e.name})]})}),(0,d.tZ)("section",{children:(0,d.tZ)("ul",{className:h.websiteList,children:e.websites.map((function(e){return(0,d.tZ)(m,{website:e},e.name)}))})})]},e.name)})),(0,d.tZ)(p.Z,{})]})}function w(){return(0,d.BX)(d.HY,{children:[(0,d.tZ)(s.d,{title:"\u7f51\u5740\u5bfc\u822a",description:"\u6574\u5408\u65e5\u5e38\u5f00\u53d1\u5e38\u7528\uff0c\u63a8\u8350\u7684\u7f51\u7ad9\u5bfc\u822a\u9875"}),(0,d.tZ)(o.Z,{children:(0,d.tZ)("div",{className:"container margin-top--md",children:(0,d.BX)("div",{className:"row",children:[(0,d.tZ)("aside",{className:"col col--1",children:(0,d.tZ)(v,{})}),(0,d.BX)("main",{className:"col col--11",children:[(0,d.tZ)(Z,{}),(0,d.tZ)(f.Z,{})]})]})})})]})}}}]);