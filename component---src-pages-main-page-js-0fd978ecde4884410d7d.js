"use strict";(self.webpackChunkoreum_blog_gatsby=self.webpackChunkoreum_blog_gatsby||[]).push([[832],{3196:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),l=n(3494),i=l.default.li.withConfig({displayName:"styles__Wapper",componentId:"sc-l5svr1-0"})(["border:1px solid var(--textNormal);transition:all 0.1s;:hover{transform:translate(3px,3px);}"]),r=l.default.div.withConfig({displayName:"styles__Header",componentId:"sc-l5svr1-1"})(["display:flex;justify-content:center;align-items:center;height:268px;img{height:80%;}@media ","{display:inline-block;height:100px;vertical-align:top;img{margin:10px 0 0 12px;}}"],(function(e){return e.theme.mobile})),o=l.default.div.withConfig({displayName:"styles__Main",componentId:"sc-l5svr1-2"})(["margin:16px;h3{margin-bottom:16px;font-size:1.2rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}p{font-size:0.9rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;}@media ","{display:inline-block;width:calc(100% - 124px);vertical-align:middle;}"],(function(e){return e.theme.mobile})),s=l.default.div.withConfig({displayName:"styles__Bottom",componentId:"sc-l5svr1-3"})(["position:relative;padding:16px;border-top:1px solid var(--textNormal);span{display:block;font-size:0.9rem;&:nth-child(1){color:#6300eb;}&:nth-child(2){margin-top:5px;color:#666;}}"]),m=l.default.div.withConfig({displayName:"styles__Comment",componentId:"sc-l5svr1-4"})(["position:absolute;display:flex;top:50%;right:16px;transform:translateY(-50%);span.count{margin:3px 0 0 3px;}"]),c=n(1597),d=n(7544),p=n(3168),u=function(e){var t=e.data;return a.createElement(i,null,a.createElement(c.Link,{to:"/post"+t.slug},a.createElement(r,null,a.createElement("img",{src:t.imgPath.childImageSharp.fluid.originalImg,alt:"블로그 썸네일"})),a.createElement(o,null,a.createElement("h3",null,t.title),a.createElement("p",null,t.contents)),a.createElement(s,null,a.createElement("span",null,t.category),a.createElement("span",null,t.date),a.createElement(m,null,a.createElement(d.G,{icon:p.Z6I}),a.createElement("span",{className:"count"})))))}},1638:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(3196),i=n(3494).default.ul.withConfig({displayName:"styles__Wapper",componentId:"sc-19j5a3s-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(100px,auto);gap:20px 30px;@media ","{grid-template-columns:repeat(1,1fr);}"],(function(e){return e.theme.mobile})),r=function(e){var t=e.datas;return a.createElement(i,null,t.map((function(e){return a.createElement(l.Z,{key:e.id,data:e})})))}},6520:function(e,t,n){n.d(t,{f:function(){return l}});var a=n(1597),l=function(){return(0,a.useStaticQuery)("1407601540").allMarkdownRemark.edges.map((function(e){return{id:e.node.id,title:e.node.frontmatter.title,category:e.node.frontmatter.category,date:e.node.frontmatter.date,imgPath:e.node.frontmatter.imgPath,contents:e.node.excerpt,slug:e.node.fields.slug}}))}},2644:function(e,t,n){n.r(t);var a=n(7294),l=n(1638),i=n(6520);n(3196);t.default=function(){var e=(0,i.f)();return a.createElement("main",null,a.createElement(l.Z,{datas:e}))}}}]);
//# sourceMappingURL=component---src-pages-main-page-js-0fd978ecde4884410d7d.js.map