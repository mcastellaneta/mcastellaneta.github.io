(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),a=n(1),l=n(16),i=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(i.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),h=n(23),d=[{index:!0,label:"Michele Castellaneta",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(4).then(n.t.bind(null,167,7))})),m=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:"Michele Castellaneta profile"})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Michele Castellaneta"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:mcastellaneta@protonmail.com",children:"mcastellaneta@protonmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Michele. I like making the world a better place. I am a graduate from ",Object(c.jsx)("a",{href:"https://www.unisa.it/",children:"UNISA"}),", where I'm studying for my Master's degree in Data Science and Machine Learning."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Michele Castellaneta ",Object(c.jsx)(u.b,{to:"/",children:"mcastellaneta"}),"."]})]})]})},g=function(){var e=Object(i.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Michele Castellaneta",defaultTitle:"Michele Castellaneta",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Michele Castellaneta's personal website."};t.a=w},25:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(29)),l=n(30),i=n(31),s=n(32),r=n(33),j=n(34),o=[{link:"https://github.com/mcastellaneta",label:"Github",icon:l.faGithub},{link:"https://www.facebook.com/whyareyouwatchingme/",label:"Facebook",icon:i.faFacebookF},{link:"https://www.instagram.com/justmeeck/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/michelecastellaneta/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"mailto:michelecastellaneta@protonmail.com",label:"Email",icon:j.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),l=n.n(a),i=n(15),s=n(5),r=n(3),j=n(21),o=(n(47),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,164))}))),b=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,171))})),u=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,165))})),h=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,166))})),d=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,170))})),O=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,168))})),m=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,169))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(c.jsx)(p,{}),f):Object(i.render)(Object(c.jsx)(p,{}),f)}},[[48,1,3]]]);
//# sourceMappingURL=main.bd0fb459.chunk.js.map