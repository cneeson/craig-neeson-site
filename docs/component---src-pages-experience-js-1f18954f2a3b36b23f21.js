(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(165),s=n(175),c=n(173),d=l.b.div.withConfig({displayName:"Flex",componentId:"tuwgsx-0"})(["",""],function(e){var t=e.justifyContent,n=e.alignItems,a=e.width;return"\n        display: flex;\n        "+(t?"justify-content: "+t+";":"")+"\n        "+(n?"align-items: "+n+";":"")+"\n\n        "+(a?"width: "+a+";":"")+"\n    "}),m=l.b.p.withConfig({displayName:"P",componentId:"sc-12lb1f4-0"})(["",""],function(e){return"\n        color: "+e.color+";\n        font-size: "+("small"===e.size?".75rem":".9rem")+";\n    "}),u=Object(l.a)(["",""],function(e){var t=e.mb;return"\n        margin-top: "+e.mt+";\n        margin-bottom: "+t+";\n        margin-left: "+e.ml+";\n        margin-right: "+e.mr+";\n    "}),p=l.b.h4.withConfig({displayName:"Typography__H4",componentId:"sc-78twfe-0"})(["",""],u),h=l.b.h5.withConfig({displayName:"Typography__H5",componentId:"sc-78twfe-1"})(["",""],u),g=Object(l.a)(["",""],function(e){var t=e.mb,n=e.mt,a=e.ml,r=e.mr,o=e.width,i=e.borderRadius;return"\n        "+(n?"margin-top: "+n:"")+"\n        "+(t?"margin-bottom: "+t:"")+"\n        "+(a?"margin-left: "+a:"")+"\n        "+(r?"margin-right: "+r:"")+"\n\n        "+(o?"width: "+o+";":"")+"\n        "+(i?"border-radius: "+i+";":"")+"\n    "}),f=l.b.img.withConfig({displayName:"Image",componentId:"sc-1kkm227-0"})(["",""],g),y=n(169),w=function(e){var t=e.keyPoints,n=e.role,a=e.roleLength,r=e.employer,l=e.imgSrc,s=e.imgAlt,c=e.description,u=e.href;return i.a.createElement(o.Fragment,null,i.a.createElement(d,{alignItems:"center"},i.a.createElement(d,{width:"140px"},i.a.createElement(f,{src:l,alt:s,borderRadius:"4px",width:"95px"})),i.a.createElement("div",null,i.a.createElement(y.a,{href:u,target:"_blank",fancyHover:!0},i.a.createElement(p,{mb:".75rem"},r)),i.a.createElement(h,{mb:".75rem"},n),i.a.createElement(m,{size:"small",color:"grey"},a))),t&&i.a.createElement(o.Fragment,null,i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",null,i.a.createElement(m,null,e))}))),c&&i.a.createElement(m,null,c))};n.d(t,"pageQuery",function(){return E});var b=l.b.p.withConfig({displayName:"experience__P",componentId:"mr4xl9-0"})(["margin-top:2rem;margin-bottom:2rem;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement(c.a,{lang:"en",title:"Experience",keywords:["craig","neeson","craig neeson","CV","experience","northern ireland","NI","belfast","blog","gatsby","javascript","react"]}),i.a.createElement(b,null,"For an offline copy, you can ",i.a.createElement(y.a,{href:"/Craig-Neeson-CV.pdf",target:"_blank",fancyHover:!0},"download my CV here.")),i.a.createElement("h2",null,"Experience"),i.a.createElement(w,{employer:"Locate a Locum",role:"Software Developer",roleLength:"October 2019 - Present | 1 yr 4 mo",href:"https://locatealocum.com/",imgSrc:"/lal.png",imgAlt:"lal-logo",keyPoints:["Took the lead on modernising the UI stack at Locate a Locum over the course of a year and a half. Introducing ambitious but achievable technical goals that challenged many cornerstones of how UI development was previously achieved at this healthcare start-up.","Worked with developers to set front-end standards and upskilled team members to enable faster feature development and tackle existing tech debt more effectively.","Drove key architecture changes to allow us to move the LAL platform from a legacy web-app stack to a partially serverside-rendered React stack.",i.a.createElement(o.Fragment,null,"Established LALs first fully documented ",i.a.createElement(y.a,{href:"https://react-components-docs.herokuapp.com/",target:"_blank",fancyHover:!0},"React component library"),", working with a newly hired UX designer to refresh the Locate a Locum brand."),i.a.createElement(o.Fragment,null,"Formed more maintainable patterns for retrieving and caching data retrieved from our API, establishing healthier habits when it comes to ",i.a.createElement(y.a,{href:"https://kentcdodds.com/chats-with-kent-podcast/seasons/03/episodes/tanner-linsley-separates-ui-state-and-server-state",target:"_blank",fancyHover:!0},"separating server state and client state")," and reducing the boilerplate that developers need to write to get things done."),"Identified opportunities to abstract duplicated data-fetching code into NPM packages which are now shared between React and React Native repos.","Fostered the adoption of TypeScript in UI repos to increase code robustness and reduce bug regressions. At the time of writing, 40% of the main codebase has been converted to TS.","Alongside the continual improvement of process and practises, I worked to deliver major new modules for the platform including employee leave management, scheduling, clock-in and payroll processing."]}),i.a.createElement("hr",null),i.a.createElement(w,{employer:"Flexera",role:"Associate UI Engineer & UI Engineer",roleLength:"Sep 2018 - Oct 2019 | 1 yr 2 mo",href:"https://www.flexera.com/",imgSrc:"/flexera.png",imgAlt:"flexera-logo",keyPoints:['Worked as part of a global team to build UIs for 8 different products, used by many of the worlds "Fortune 50" companies.',"Worked in close collaboration with UX designers to create Flexera's first component library with the aim of bringing visual consistency and behaviour to many newly acquired products.",i.a.createElement(o.Fragment,null,"Researched many approaches to standardising our design token usages and UI behaviours via the component library, eventually landing on a solution that allows us to enforce consistency from a design standpoint but to also remain flexible enough to suit future use-cases. You can read about the finalised approach ",i.a.createElement(y.a,{href:"https://community.flexera.com/t5/Flexera-Engineering-Blog/Balancing-design-constraints-and-developer-experience-in-React/ba-p/114181",target:"_blank",fancyHover:!0},"here.")),"Had the opportunity to work with many aquisition teams, allowing me to get exposure to alot of different approaches to UI development - as well as alot of different technology stacks.","Worked across many interesting and technically challenging products including a portal to visualise one of the worlds largest technology asset datasets, a dashboard to visualise and optimise Azure, AWS & GCP cloud resource costs, and a network-security monitoring system."]}),i.a.createElement("hr",null),i.a.createElement(w,{employer:"Nitec Solutions",role:"Software Developer",roleLength:"Nov 2017 - Sep 2018 | 11 mo",href:"https://www.nitec.com/",imgSrc:"/nitec-solutions.jpeg",imgAlt:"nitec-solutions-logo",keyPoints:["Worked in a small consultancy team to deliver full-stack solutions for many businesses in Northern Ireland.","Delivered end-to-end sales, billing and production management systems for two large concrete factories. The systems integrated directly with production-line firmware and tracked vehicles in real-time, allowing coordinators to have a birds eye view of their operations.","Worked heavily on internal process development, introducing CI pipelines for code delivery, private package registries for better dependency management and a modular front-end component system built with vanilla JavaScript and Handlebars."]}),i.a.createElement("hr",null),i.a.createElement(w,{employer:"Liberty Information Technology",role:"Associate Software Engineer",roleLength:"Jun 2017 - Nov 2017 | 6 mo",href:"https://www.liberty-it.co.uk/",imgSrc:"/lit.png",imgAlt:"lit-logo",keyPoints:["Worked on an integrations team to build the highly scalable infrastructure behind a greenfield insurance product.","Gained exposure to many different languages (Kotlin, TypeScript & Scala) and AWS resources (Lambda, SQS & SNS) due to the sprawling micro-service architecture.","Had my first experience of Agile at scale, LIT had adopted the SAFe Agile methodology."]}),i.a.createElement("hr",null),i.a.createElement(w,{employer:"Nitec Solutions",role:"Placement Developer",roleLength:"Jun 2015 - Sep 2016 | 1 yr 4 mo",href:"https://www.nitec.com/",imgSrc:"/nitec-solutions.jpeg",imgAlt:"nitec-solutions-logo",keyPoints:["Gained exposure to older stacks (classic ASP, Microsoft Silverlight) as well as newer ones (.NET MVC apps, SPAs) due to the varying range of client projects and setups.","Created an agent program and UI to monitor the backup status of client servers and desktop machines. Shortly after, I had the opportunity to build the first version of a customer portal on top of this infrastructure that would allow customers to visualise their backup coverage in realtime. This work was the backbone for a portal that is still in daily use by many of Nitec's customers","Helped to build a custom document management solution for an occupational therapy clinic in Belfast.","Helped to build a production management system for Northern Irelands largest plastics manufacturer."]}),i.a.createElement("hr",null),i.a.createElement(w,{employer:"Nitec Solutions",role:"Placement Student",roleLength:"Jul 2012 - Aug 2012 | 2 mo",href:"https://www.nitec.com/",imgSrc:"/nitec-solutions.jpeg",imgAlt:"nitec-solutions-logo",keyPoints:["A short placement between my school terms kindly provided by Nitec Solutions allowed me to gain an insight into the software industry at a high level."]}),i.a.createElement("h2",null,"Education"),i.a.createElement(w,{employer:"Ulster University",role:"Bachelor of Science (BSc), Computing, First Class Honours",roleLength:"2013 - 2017",href:"https://www.ulster.ac.uk/",imgSrc:"/uu.jpg",imgAlt:"ulster-university-logo",description:"Gained exposure to many different areas of the computing industry as part of my course at Ulster University. During my time at the university I was awarded the Deans List Award twice for outstanding work throughout the year. I also produced a dissertation and project that was used as an example for future students on the same course."}),i.a.createElement("h2",null,"Technologies"),i.a.createElement(b,null,"Below is a quick round-up of technologies that I have worked with over the years. This list only includes technologies that I would be confident to work with again in a production environment."),i.a.createElement("h3",null,"Highly Proficient"),i.a.createElement("ul",null,i.a.createElement("li",null,"TypeScript & JavaScript"),i.a.createElement("li",null,"React"),i.a.createElement("li",null,"Node"),i.a.createElement("li",null,"HTML and template engines such as Handlebars and Pug"),i.a.createElement("li",null,"CSS, preprocessors (SCSS/LESS) and CSS-in-JS libraries (styled-components)"),i.a.createElement("li",null,"Data management and fetching libraries such as Redux and react-query"),i.a.createElement("li",null,"Testing frameworks such as Jest/react-testing-library/Enzyme"),i.a.createElement("li",null,"Build tools such as Webpack, Rollup and Gulp"),i.a.createElement("li",null,"CI tools such as Azure Pipelines, Heroku, Jenkins"),i.a.createElement("li",null,"Monitoring services such as Sentry"),i.a.createElement("li",null,"Analytics services such as Heap Analytics and Google Analytics")),i.a.createElement("h3",null,"Working Knowledge"),i.a.createElement("ul",null,i.a.createElement("li",null,"Angular"),i.a.createElement("li",null,"Java"),i.a.createElement("li",null,"C#"),i.a.createElement("li",null,"AWS Lambdas, SQS, SNS, Cloudfront & Route 53"),i.a.createElement("li",null,"Azure App Services, storage accounts")),i.a.createElement(b,null,"For a bit more detail around my skills, ",i.a.createElement(y.a,{href:"/Craig-Neeson-CV.pdf",target:"_blank",fancyHover:!0},"download my CV here.")))},t}(i.a.Component),E=(t.default=v,"1097489062")},166:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(38),s=n.n(l);n.d(t,"a",function(){return s.a});n(168);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var a=n(165),r=n(166),o=Object(a.b)(r.a).withConfig({displayName:"Styled__InternalLink",componentId:"sc-1nh7sei-0"})(["color:#ff007d;",""],function(e){return e.fancyHover&&"\n        transition: all 0.3s;\n        text-decoration: none;\n        box-shadow: none;\n\n        &:hover {\n            transform: scale(1.3, 1.3);\n        }\n\n        &:active {\n            transform: scale(1, 1);\n        }\n    "}),i=a.b.a.withConfig({displayName:"Styled__ExternalLink",componentId:"sc-1nh7sei-1"})(["color:#ff007d;",""],function(e){return e.fancyHover&&"\n            transition: all 0.3s;\n            text-decoration: none;\n            box-shadow: none;\n\n            &:hover {\n                transform: scale(1.3, 1.3);\n            }\n\n            &:active {\n                transform: scale(1, 1);\n            }\n        "})},168:function(e,t,n){var a;e.exports=(a=n(172))&&a.default||a},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(167),s=function(e){var t=e.href?l.a:l.b;return r.a.createElement(t,e,e.children)};s.propTypes={fancyHover:i.a.bool};var c=s;t.a=c},170:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var a=n(176),r=n.n(a),o=n(177),i=n.n(o),l=new r.a(i.a);var s=l.rhythm,c=l.scale},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(165).b.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-1qefbp6-0"})(["position:absolute;z-index:-1;transform:rotate(180deg);"]);t.a=function(e){var t=e.id,n=e.color,a=void 0===n?"rgba(193, 0, 111, 0.2)":n,i=t+"Gradient",l=t+"Mask",s=t+"Pattern";return r.a.createElement(o,null,r.a.createElement("svg",{width:"100vw",height:"450px"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:i,y2:"1",x2:"0"},r.a.createElement("stop",{offset:"0.1","stop-color":"white","stop-opacity":"0"}),r.a.createElement("stop",{offset:"1","stop-color":"white","stop-opacity":".5"})),r.a.createElement("mask",{id:l,maskContentUnits:"objectBoundingBox"},r.a.createElement("rect",{width:"1",height:"1",fill:"url(#"+i+")"})),r.a.createElement("pattern",{id:s,x:"0",y:"0",width:"256",height:"256",patternUnits:"userSpaceOnUse"},r.a.createElement("g",{id:s},r.a.createElement("polyline",{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"none",stroke:a,"stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"5",points:" -3,-2 16.5,15.5 31.5,0.5 63.5,32.5 48.5,47.5 31.5,32.5 -0.5,64.5 16.5,79.5 31.5,64.5 47.5,79.5 95.5,32.5 80.5,15.5 95.5,0.5 127.5,32.5 48.5,111.5 31.5,96.5 -0.5,128.5 16.5,143.5 31.5,127.5 63.5,160.5 80.5,143.5 63.5,128.5 159.5,32.5 144.5,15.5 159.5,0.5 175.5,16.5 192,0 208,16 224,0 256,32 240,48 224,32 207.501,48.501 223.5,64.5 207.5,80.5 176.5,47.5 144.5,80.5 159.5,96.5 175.5,80.5 191.5,96.5 159.5,128.5 127.5,96.5 95.5,127.5 111.5,143.5 127.5,127.5 175.5,176.5 159.5,192.5 127.5,160.5 111.5,176.5 95.5,160.5 63.5,192.5 31.5,160.5 16.5,175.5 31.999,191.483 0,224 16,240 32,225 64,256 80,240 64,224 79.667,208.333 95.5,192.5 111.5,207.5 95.5,224.5 111.5,239.5 127.5,256.5 143.5,240.5 127.5,224.5 143.5,208.5 175.5,240.5 191.5,224.5 175.5,208.5 207.5,176.5 224,160 208,144 191.998,160.998 175.5,144.5 207.5,112.5 240,80 256,96 223.5,128.5 256,160 239.5,176.5 256,192 240,208 224,192 207.5,208.5 223.5,224.5 207.5,240.5 223.5,256.5 240,240 259,259","stroke-dasharray":"169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256"},r.a.createElement("animate",{attributeName:"stroke-dashoffset",keyTimes:"0;1",values:"0;219.569091796875",repeatCount:"indefinite",dur:"10s"}))),r.a.createElement("use",{href:"#"+s,x:"0",y:"0"}),r.a.createElement("use",{href:"#"+s,x:"-256",y:"0"}),r.a.createElement("use",{href:"#"+s,x:"256",y:"0"}),r.a.createElement("use",{href:"#"+s,x:"0",y:"256"}))),r.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#"+s+")",mask:"url(#"+l+")"})))}},172:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),o=n(0),i=n.n(o),l=n(4),s=n.n(l),c=n(58),d=n(2),m=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(c.a,r()({location:t,pageResources:n},n.json)):null};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=m},173:function(e,t,n){"use strict";var a=n(174),r=n(0),o=n.n(r),i=n(4),l=n.n(i),s=n(178),c=n.n(s),d=n(166);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(d.b,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var u="1025518380"},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Craig Neeson",description:"The personal blog of Craig Neeson - Software Engineer.",author:"Craig Neeson"}}}}},175:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(169),s=n(165),c=n(167),d=n(170),m=s.b.div.withConfig({displayName:"Styled__PageWrapper",componentId:"sc-1k719k2-0"})(["padding-top:2rem;"]),u=s.b.div.withConfig({displayName:"Styled__BodyWrapper",componentId:"sc-1k719k2-1"})(["margin-left:auto;margin-right:auto;max-width:",";@media (max-width:650px){padding:"," ",";}"],Object(d.a)(24),Object(d.a)(1.5),Object(d.a)(.75)),p=s.b.nav.withConfig({displayName:"Styled__Nav",componentId:"sc-1k719k2-2"})(["background:white;padding:1rem;position:sticky;top:0;z-index:1;div{margin-left:auto;margin-right:auto;max-width:",";display:flex;justify-content:space-between;@media (max-width:650px){text-align:center;display:block;}}"],Object(d.a)(24)),h=s.b.h1.withConfig({displayName:"Styled__Title",componentId:"sc-1k719k2-3"})(["line-height:2;margin:0;transition:all .2s;&:hover{background:radial-gradient(#0072f3,#604acc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;transform:scale(1.1,1.1);}&:active{transform:scale(1,1);}"]),g=Object(s.b)(c.b).withConfig({displayName:"Styled__TitleLink",componentId:"sc-1k719k2-4"})(["box-shadow:none;text-decoration:none;color:inherit;"]),f=s.b.div.withConfig({displayName:"Styled__LinkContainer",componentId:"sc-1k719k2-5"})(["display:flex;@media (max-width:650px){margin:1rem;display:block;}",",","{margin:1rem;}"],c.b,c.a),y=s.b.div.withConfig({displayName:"Styled__Footer",componentId:"sc-1k719k2-6"})(["margin-top:5rem;margin-bottom:2rem;"]),w=(n(157),n(171),i.a.createElement(f,null,i.a.createElement(l.a,{to:"/#about",fancyHover:!0},"About"),i.a.createElement(l.a,{to:"/#contact",fancyHover:!0},"Contact"),i.a.createElement(l.a,{to:"/blogs",fancyHover:!0},"Blog"),i.a.createElement(l.a,{to:"/experience",fancyHover:!0},"Experience"))),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children,a=i.a.createElement(h,null,i.a.createElement(g,{to:"/"},t," "));return i.a.createElement(o.Fragment,null,i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement("div",null,a,w)),i.a.createElement(u,null,n,i.a.createElement(y,null,"© ",(new Date).getFullYear()," Craig Neeson"))))},t}(i.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-experience-js-1f18954f2a3b36b23f21.js.map