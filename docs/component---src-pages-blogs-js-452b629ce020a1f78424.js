(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,n){"use strict";n.r(t);n(183);var a=n(7),r=n.n(a),o=(n(34),n(0)),i=n.n(o),l=n(185),c=n.n(l),s=n(164),d=n(162),m=n(168),p=n(155),u=n(160),f=p.a.div.withConfig({displayName:"Styled__Wrapper",componentId:"sc-1hsqr4w-0"})(["margin-top:2.5rem;@media (max-width:650px){margin-top:5rem;}"]),g=Object(p.a)(u.a).withConfig({displayName:"Styled__BlogCard",componentId:"sc-1hsqr4w-1"})(["display:block;text-decoration:none;color:hsla(0,0%,0%,0.9);background-color:white;padding:2rem 2rem;border-radius:.5rem;box-shadow:5px 5px rgba(193,0,111,0.22),-5px -5px rgba(96,74,204,0.12);margin-bottom:2rem;transition:.1s all;&:hover{box-shadow:6px 6px rgba(96,74,204,0.26),-6px -6px rgba(193,0,111,0.28);background-color:#f2f2f3;transform:scale(1.02,1.02);}&:active{transform:scale(1,1);}"]),h=p.a.h3.withConfig({displayName:"Styled__Title",componentId:"sc-1hsqr4w-2"})(["color:#ff007d;margin:0;"]),y=p.a.p.withConfig({displayName:"Styled__PreviewText",componentId:"sc-1hsqr4w-3"})(["margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),b=p.a.div.withConfig({displayName:"Styled__TagContainer",componentId:"sc-1hsqr4w-4"})(["margin:0.5rem 0;"]),w=function(e){return i.a.createElement(f,null,e.blogs.length>0?e.blogs.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,a=t.fields.isExternalBlog?{href:t.fields.externalUrl,target:"_blank"}:{to:t.fields.slug};return i.a.createElement(g,Object.assign({key:t.fields.slug},a),i.a.createElement(h,null,n),i.a.createElement("small",null,t.frontmatter.isNote),i.a.createElement("small",null,t.frontmatter.date)," - ",i.a.createElement("small",null,t.frontmatter.timeToRead," read"),t.frontmatter.isNote&&i.a.createElement(b,null,i.a.createElement(m.a,{color:"rgba(96,74,204,0.6)",background:"rgba(96,74,204,0.12)"},"Personal Note")),i.a.createElement(y,{dangerouslySetInnerHTML:{__html:t.excerpt}}))}):i.a.createElement("h2",null,"No blogs"))},v=[{node:{slug:35,isPublished:!1,frontmatter:{title:"Balancing design constraints and developer experience in React Component Libraries",isNote:!1,date:"2019-09-05T23:59:59.121Z",timeToRead:"7 minute"},fields:{isExternalBlog:!0,externalUrl:"https://community.flexera.com/t5/Flexera-Engineering-Blog/Balancing-design-constraints-and-developer-experience-in-React/ba-p/114181"},excerpt:"One of the greatest challenges for Flexera's UI developers has been writing frontends that look and behave consistently across the entire product portfolio. In 2019, Flexera's UI and UX teams have worked in collaboration to release a comprehensive suite of React components that can be used to unify the company's products."}}];n.d(t,"pageQuery",function(){return C});var x=function(e,t){return new c.a(t.node.frontmatter.date).format("YYYYMMDD")-new c.a(e.node.frontmatter.date).format("YYYYMMDD")},k=function(e){var t=e.node,n=t.frontmatter,a=t.fields,r=t.excerpt;return{node:{frontmatter:Object.assign({},n,{date:c()(n.date).format("MMMM DD, YYYY")}),fields:a,excerpt:r}}},E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark?e.allMarkdownRemark.edges:[],a=[].concat(n,v).sort(x).map(k);return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(d.a,{lang:"en",title:"Craig Neeson Blog",keywords:["craig","neeson","craig neeson","developer","northern ireland","NI","belfast","blog","gatsby","javascript","react"]}),i.a.createElement(w,{blogs:a}))},t}(i.a.Component),C=(t.default=E,"3235140916")},156:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(158);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var a=n(155),r=n(156),o=Object(a.a)(r.a).withConfig({displayName:"Styled__InternalLink",componentId:"sc-1nh7sei-0"})(["color:#ff007d;",""],function(e){return e.fancyHover&&"\n        transition: all 0.3s;\n        text-decoration: none;\n        box-shadow: none;\n\n        &:hover {\n            transform: scale(1.3, 1.3);\n        }\n\n        &:active {\n            transform: scale(1, 1);\n        }\n    "}),i=a.a.a.withConfig({displayName:"Styled__ExternalLink",componentId:"sc-1nh7sei-1"})(["color:#ff007d;",""],function(e){return e.fancyHover&&"\n            transition: all 0.3s;\n            text-decoration: none;\n            box-shadow: none;\n\n            &:hover {\n                transform: scale(1.3, 1.3);\n            }\n\n            &:active {\n                transform: scale(1, 1);\n            }\n        "})},158:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},159:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(165),r=n.n(a),o=n(166),i=n.n(o),l=new r.a(i.a);var c=l.rhythm,s=l.scale},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(157),c=function(e){var t=e.href?l.a:l.b;return r.a.createElement(t,e,e.children)};c.propTypes={fancyHover:i.a.bool};var s=c;t.a=s},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,n){"use strict";var a=n(163),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(167),s=n.n(c),d=n(156);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(d.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var p="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Craig Neeson",description:"The personal blog of Craig Neeson - Software Engineer.",author:"Craig Neeson"}}}}},164:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(160),c=n(155),s=n(157),d=n(159),m=c.a.div.withConfig({displayName:"Styled__PageWrapper",componentId:"sc-1k719k2-0"})(["margin-left:auto;margin-right:auto;max-width:",";padding:"," ",";"],Object(d.a)(24),Object(d.a)(1.5),Object(d.a)(.75)),p=c.a.nav.withConfig({displayName:"Styled__Nav",componentId:"sc-1k719k2-1"})(["background:white;padding:1rem;box-shadow:0 10px 23px rgba(0,0,0,0.25),0 3px 7px rgba(0,0,0,0.22);position:relative;z-index:1;div{margin-left:auto;margin-right:auto;max-width:",";display:flex;justify-content:space-between;@media (max-width:650px){text-align:center;display:block;}}"],Object(d.a)(24)),u=c.a.h1.withConfig({displayName:"Styled__Title",componentId:"sc-1k719k2-2"})(["line-height:2;margin:0;transition:all .2s;&:hover{background:radial-gradient(#0072f3,#604acc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;transform:scale(1.1,1.1);}&:active{transform:scale(1,1);}"]),f=Object(c.a)(s.b).withConfig({displayName:"Styled__TitleLink",componentId:"sc-1k719k2-3"})(["box-shadow:none;text-decoration:none;color:inherit;"]),g=c.a.div.withConfig({displayName:"Styled__LinkContainer",componentId:"sc-1k719k2-4"})(["display:flex;@media (max-width:650px){margin:1rem;display:block;}",",","{margin:1rem;}"],s.b,s.a),h=c.a.div.withConfig({displayName:"Styled__Footer",componentId:"sc-1k719k2-5"})(["margin-top:5rem;"]),y=(n(148),i.a.createElement(g,null,i.a.createElement(l.a,{to:"/#about",fancyHover:!0},"About"),i.a.createElement(l.a,{to:"/#contact",fancyHover:!0},"Contact"),i.a.createElement(l.a,{to:"/blogs",fancyHover:!0},"Blog"),i.a.createElement(l.a,{href:"/Craig-Neeson-CV.pdf",fancyHover:!0},"CV"))),b=i.a.createElement(h,null,"© ",(new Date).getFullYear()," Craig Neeson"),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children,a=i.a.createElement(u,null,i.a.createElement(f,{to:"/"},t," "));return i.a.createElement("div",{className:"body-wrapper"},i.a.createElement(p,null,i.a.createElement("div",null,a,y)),i.a.createElement(m,null,n,b))},t}(i.a.Component);t.a=w},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(155).a.div.withConfig({displayName:"Styled__StyledTag",componentId:"fcd06-0"})(["background:",";color:",";display:inline;padding:0.2rem 0.5rem;border-radius:4px;"],function(e){return e.background||"lightgray"},function(e){return e.color||"grey"});var i=function(e){var t=e.color,n=e.background,a=e.text,i=e.children;return r.a.createElement(o,{background:n,color:t},i||a)};t.a=i}}]);
//# sourceMappingURL=component---src-pages-blogs-js-452b629ce020a1f78424.js.map