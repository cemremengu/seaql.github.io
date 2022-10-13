"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[2798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={slug:"2022-07-30-engineering",title:"Engineering at SeaQL.org",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},i=void 0,s={permalink:"/blog/2022-07-30-engineering",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-07-30-engineering.md",source:"@site/blog/2022-07-30-engineering.md",title:"Engineering at SeaQL.org",description:"It's hard to pin down the exact date, but I think SeaQL.org was setup in July 2020, a little over a year ago. Over the course of the year, SeaORM went from 0.1 to 0.9 and the number of users kept growing. I would like to outline our engineering process in this blog post, and perhaps it can serve as a reference or guidance to prospective contributors and the future maintainer of this project.",date:"2022-07-30T00:00:00.000Z",formattedDate:"July 30, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:4.3,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2022-07-30-engineering",title:"Engineering at SeaQL.org",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},prevItem:{title:"What's new in SeaQuery 0.26.0",permalink:"/blog/2022-08-05-whats-new-in-seaquery-0.26.0"},nextItem:{title:"What's new in SeaORM 0.9.0",permalink:"/blog/2022-07-17-whats-new-in-0.9.0"}},l={authorsImageUrls:[void 0]},u=[{value:"Open",id:"open",level:3},{value:"Bottom-up",id:"bottom-up",level:3},{value:"Iterative",id:"iterative",level:3},{value:"Progressive",id:"progressive",level:3},{value:"1. Idea &amp; Design",id:"1-idea--design",level:3},{value:"2. Implementation",id:"2-implementation",level:3},{value:"3. Testing",id:"3-testing",level:3},{value:"4. Documentation",id:"4-documentation",level:3},{value:"5. Release",id:"5-release",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's hard to pin down the exact date, but I think SeaQL.org was setup in July 2020, a little over a year ago. Over the course of the year, SeaORM went from 0.1 to 0.9 and the number of users kept growing. I would like to outline our engineering process in this blog post, and perhaps it can serve as a reference or guidance to prospective contributors and the future maintainer of this project."),(0,o.kt)("p",null,"In the open source world, the Benevolent Dictator for Life (BDL) model underpins a number of successful open source projects. That's not me! As a maintainer, I believe in an open, bottom-up, iterative and progressive approach. Let me explain each of these words and what they mean to me."),(0,o.kt)("h3",{id:"open"},"Open"),(0,o.kt)("p",null,"Open as in source availability, but also engineering. We always welcome new contributors! We'd openly discuss ideas and designs. I would often explain why a decision was made in the first place for various things. The project is structured not as a monorepo, but several interdependent repos. This reduces the friction for new contributors, because they can have a smaller field of vision to focus on solving one particular problem at hand."),(0,o.kt)("h3",{id:"bottom-up"},"Bottom-up"),(0,o.kt)("p",null,"We rely on users to file feature requests, bug reports and of course pull requests to drive the project forward. The great thing is, for every feature / bug fix, there is a use case for it and a confirmation from a real user that it works and is reasonable. As a maintainer, I could not have first hand experience for all features and so could not understand some of the pain points."),(0,o.kt)("h3",{id:"iterative"},"Iterative"),(0,o.kt)("p",null,"Open source software is imperfect, impermanent and incomplete. While I do have a grand vision in mind, we do not try rushing it all the way in one charge, nor keeping a project secret until it is 'complete'. Good old 'release early, release often' - we would release an initial working version of a tool, gather user feedback and improve upon it, often reimplementing a few things and break a few others - which brings us to the next point."),(0,o.kt)("h3",{id:"progressive"},"Progressive"),(0,o.kt)("p",null,"Favour progression. Always look forward and leave legacy behind. It does not mean that we would arbitrary break things, but when a decision is made, we'd always imagine how the software ",(0,o.kt)("em",{parentName:"p"},"should be")," without historic context. We'd provide migrate paths and encourage users to move forward with us. After all, Rust is a young and evolving language! You may or may not know that ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," was just stabilized in 2020."),(0,o.kt)("p",null,"Enough said for the philosophy, let's now talk about the actual engineering process."),(0,o.kt)("h3",{id:"1-idea--design"},"1. Idea & Design"),(0,o.kt)("p",null,"We first have some vague idea on what problem we want to tackle. As we put in more details to the use case, we can define the problem and brainstorm solutions. Then we look for workable ways to implement that in Rust."),(0,o.kt)("h3",{id:"2-implementation"},"2. Implementation"),(0,o.kt)("p",null,"An initial proof of concept is appreciated. We iterate on the implementation to reduce the impact and improve the maintainability."),(0,o.kt)("h3",{id:"3-testing"},"3. Testing"),(0,o.kt)("p",null,"We rely on automated tests. Every feature should come with corresponding tests, and a release is good if and only if all tests are green. Which means for features not covered by our test suite, it is an uncertainty to when we would break them. So if certain undocumented feature is important to you, we encourage you to add that to our test suite."),(0,o.kt)("h3",{id:"4-documentation"},"4. Documentation"),(0,o.kt)("p",null,"Coding is not complete without documentation. Rust doc tests kill two birds with one stone and so is greatly appreciated. For SeaORM we have separate documentation repository and tutorial repository. It takes a lot of effort to maintain those to be up to date, and right now it's mostly done by our core contributors."),(0,o.kt)("h3",{id:"5-release"},"5. Release"),(0,o.kt)("p",null,"We run on a release train model, although the frequency varies. The ethos is to have small number breaking changes often. At one point, SeaQuery has a new release every week. SeaORM runs on monthly, although it more or less relaxes to bimonthly now. At any time, we maintain two branches, the latest release and master. PRs are always merged into master, and if it is non-breaking (and worthy) I would backport it to the release branch and make a minor release. At the end, I want to maintain momentum and move forward together with the community. Users can have a rough expectation on when merges will be released. And there are just ",(0,o.kt)("strong",{parentName:"p"},"lots")," of change we cannot avoid a breaking release as of the current state of the Rust ecosystem. Users are advised to upgrade regularly, and we ship along many small improvements to encourage that."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Open source software is a collaborative effort and thank you all who participated! Also a big thanks to SeaQL's core contributors who made wonders. If you have not already, I invite you to star all our repositories. If you want to support us materially, a small donation would make a big difference. SeaQL the organization is still in its infancy, and your support is vital to SeaQL's longevity and the prospect of the Rust community."))}c.isMDXComponent=!0}}]);