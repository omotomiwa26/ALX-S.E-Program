(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[828],{4818:function(e,t,r){"use strict";r.d(t,{M:function(){return m}});var l=r(5893),n=r(798),s=r(2646),a=r(4184),c=r.n(a),i=r(9099),o=r(3883),d=r.n(o);function u(e){return(0,l.jsxs)("div",{className:c()(d().nested,e.platform),children:[(0,l.jsx)(n.$.Item,{href:e.contents.href,children:e.contents.title}),e.items&&e.items.length>0&&(0,l.jsx)("ul",{className:c()(d().indentNested),children:e.items.map((function(e){return(0,l.jsx)(u,{contents:e.contents,items:e.items,platform:e.platform},e.contents.href)}))})]})}function m(e){var t=e.miniTocItems,r=(0,i.$)("pages").t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{as:"h2",id:"in-this-article",className:"mb-1 ml-3",sx:{fontSize:1},children:r("miniToc")}),(0,l.jsx)(n.$,{className:c()(d().miniToc,"my-2"),children:t.map((function(e,t){return(0,l.jsx)(u,{contents:e.contents,items:e.items,platform:e.platform},e.contents.href+t)}))})]})}},3179:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return Ve},default:function(){return Me}});var l=r(5893),n=r(1163),s=r(7568),a=r(4051),c=r.n(a);var i=r(1675),o=r.n(i),d=/[\S]{18,}/g,u=/([a-z])([A-Z])/g,m=/([\w:]{12}[^_]*?)_/g,h=/([/\\])/g;var f=r(4702),x=r(8721),p=r(7294),v=(r(8718),(0,p.createContext)(null)),j=function(){var e=(0,p.useContext)(v);if(!e)throw new Error('"useProductGuidesContext" may only be used inside "ProductGuidesContext.Provider"');return e},g=(0,p.createContext)(null),b=function(){var e=(0,p.useContext)(g);if(!e)throw new Error('"useArticleContext" may only be used inside "ArticleContext.Provider"');return e},N=r(5152),y=r.n(N),w=r(4184),_=r.n(w),k=r(6969),S=r(7833),L=r(2889),P=r(7990),T=r(1102),C=r(7349),A=r(3317),R=r(7901),I=r(4060),E=r(4924),H=r(6042),Z=r(9396),B=r(828),$=r(1955),q=r(7335),V=r(3511),M=function(e){var t=e.defaultValue,r=e.fallbackValue,s=e.cookieKey,a=e.queryStringKey,c=e.onValue,i=e.preferenceName,o=e.options,d=e.ariaLabel,u=(0,n.useRouter)(),m=u.query,h=u.locale,f=(0,p.useState)(""),x=f[0],v=f[1];(0,p.useEffect)((function(){var e=m[a],l="";e&&(l=Array.isArray(e)?e[0]:e);var n=o.map((function(e){return e.value}));if(!l||!n.includes(l)){var c=$.Z.get(s);l=t||(c&&n.includes(c)?c:r)}v(l)}),[m,r,t,o]);var j,g=(0,B.Z)(u.asPath.split("#")[0].split("?"),2),b=g[0],N=g[1],y=void 0===N?"":N;(0,p.useEffect)((function(){x&&c(x)}),[x,b]);var w=(j={"data-testid":"".concat(a,"-picker"),"aria-label":d},(0,E.Z)(j,"data-default-".concat(a),t||""),(0,E.Z)(j,"className","mb-4"),j),_=new URLSearchParams(y);return(0,l.jsx)(q.Z,(0,Z.Z)((0,H.Z)({},w),{children:o.map((function(e){_.set(a,e.value);var t=(0,E.Z)({},"data-".concat(a),e.value);return(0,l.jsx)(q.Z.Link,(0,Z.Z)((0,H.Z)({href:"?".concat(_),selected:e.value===x,onClick:function(t){t.preventDefault(),function(e){var t=new URLSearchParams(y);t.set(a,e);var r="/".concat(h).concat(b,"?").concat(t);u.push(r,void 0,{shallow:!0,locale:h}),(0,V.qP)({type:V.tw.preference,preference_name:i,preference_value:e}),$.Z.set(s,e,{sameSite:"strict",secure:"http:"!==document.location.protocol,expires:365})}(e.value)}},t),{children:e.label}),e.value)}))}))},G=[{value:"mac",label:"Mac"},{value:"windows",label:"Windows"},{value:"linux",label:"Linux"}];function z(e){Array.from(document.querySelectorAll(".extended-markdown")).filter((function(e){return G.some((function(t){return e.classList.contains(t.value)}))})).forEach((function(t){t.style.display=t.classList.contains(e)?"":"none"}));var t=Array.from(document.querySelectorAll(G.map((function(e){return".platform-".concat(e.value)})).join(", ")));t.forEach((function(t){t.style.display=t.classList.contains("platform-".concat(e))?"":"none"}))}var D=function(){var e=b(),t=e.defaultPlatform,r=e.detectedPlatforms,n=(0,p.useState)(""),s=n[0],a=n[1];if((0,p.useEffect)((function(){var e=(0,I.r)().os;"ios"===e&&(e="mac"),a(e)}),[]),!r.length)return null;var c=G.filter((function(e){return r.includes(e.value)}));return(0,l.jsx)(M,{defaultValue:t,fallbackValue:r.includes(s)?s:r[r.length-1],cookieKey:"osPreferred",queryStringKey:"platform",onValue:z,preferenceName:"os",ariaLabel:"Platform",options:c})},F=r(6776);function O(e,t){return e&&t.includes(e)?e:t.includes("webui")?"webui":t.includes("cli")?"cli":t[0]}var U=function(){var e=b(),t=e.defaultTool,r=e.detectedTools,n=e.allTools;if(!r.length)return null;var s=r.map((function(e){return{value:e,label:n[e]}}));return(0,l.jsx)(M,{fallbackValue:O(t,r),cookieKey:"toolPreferred",queryStringKey:"tool",onValue:function(e){(0,F._8)(document,(function(){!function(e,t){Array.from(document.querySelectorAll(".extended-markdown")).filter((function(e){return t.some((function(t){return e.classList.contains(t)}))})).forEach((function(t){t.style.display=t.classList.contains(e)?"":"none"}));var r=Array.from(document.querySelectorAll(t.map((function(e){return".tool-".concat(e)})).join(", ")));r.forEach((function(t){t.style.display=t.classList.contains("tool-".concat(e))?"":"none"}))}(e,Object.keys(n))}))},preferenceName:"application",ariaLabel:"Tool",options:s})},K=r(4818),W=r(8153),J=r(5741),X=r(9099);function Y(e){var t=e.track,r=(0,n.useRouter)().locale,s=(0,X.$)("learning_track_nav").t,a=t.trackTitle,c=t.trackName,i=t.nextGuide,o=t.trackProduct,d=t.numberOfGuides,u=t.currentGuideIndex;return(0,l.jsx)("div",{"data-testid":"learning-track-card",className:"py-3 px-4 rounded color-bg-default border d-flex flex-justify-between mb-4 mx-2",children:(0,l.jsxs)("div",{className:"d-flex flex-column width-full",children:[(0,l.jsx)(J.r,{href:"/".concat(r,"/").concat(o,"/guides"),className:"h4 color-fg-default mb-1",children:a}),(0,l.jsx)("span",{className:"f5 color-fg-muted",children:s("current_progress").replace("{n}",d).replace("{i}",u+1)}),(0,l.jsx)("hr",{}),(0,l.jsx)("span",{className:"h5 color-fg-default",children:i?(0,l.jsxs)(l.Fragment,{children:[s("next_guide"),":",(0,l.jsx)(J.r,{href:"".concat(i.href,"?").concat(new URLSearchParams({learn:c,learnProduct:o})),className:"text-bold color-fg f5 ml-1",children:i.title})]}):(0,l.jsx)(J.r,{href:"/".concat(r,"/").concat(o,"/guides"),className:"h5 text-bold color-fg f5 ml-1",children:s("more_guides")})})]})})}var Q=r(2752),ee=r(802),te=(y()((function(){return Promise.all([r.e(734),r.e(516)]).then(r.bind(r,6516))}),{loadableGenerated:{webpack:function(){return[6516]}},ssr:!1}),function(){var e=(0,n.useRouter)(),t=b(),r=t.title,s=t.intro,a=t.effectiveDate,c=t.renderedPage,i=t.permissions,o=t.includesPlatformSpecificContent,d=t.includesToolSpecificContent,u=t.product,m=t.miniTocItems,h=t.currentLearningTrack,f=!!(null===h||void 0===h?void 0:h.trackName);return(0,l.jsxs)(S.H,{children:[false,(0,l.jsx)(W.$,{}),e.pathname.includes("/rest/")&&(0,l.jsx)(Q.b,{}),(0,l.jsxs)("div",{className:"container-xl px-3 px-md-6 my-4",children:[(0,l.jsx)("div",{className:_()("my-3 mr-auto width-full"),children:(0,l.jsx)(ee.O,{})}),(0,l.jsx)(R.A,{topper:(0,l.jsx)(L.j,{children:r}),intro:(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)(C.r,{"data-testid":"lead","data-search":"lead",children:s}),i&&(0,l.jsx)(A.n,{permissions:i}),o&&(0,l.jsx)(D,{}),d&&(0,l.jsx)(U,{}),u&&(0,l.jsx)(k.U,{variant:"success",className:"mb-4",dangerouslySetInnerHTML:{__html:u}})]}),toc:(0,l.jsxs)(l.Fragment,{children:[f&&(0,l.jsx)(Y,{track:h}),m.length>1&&(0,l.jsx)(K.M,{miniTocItems:m})]}),children:(0,l.jsxs)("div",{id:"article-contents",children:[(0,l.jsx)(T.S,{children:c}),a&&(0,l.jsxs)("div",{className:"mt-4",id:"effectiveDate",children:["Effective as of:"," ",(0,l.jsx)("time",{dateTime:new Date(a).toISOString(),children:new Date(a).toDateString()})]})]})}),f?(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(P.V,{track:h})}):null]})]})}),re=r(5529),le=r(169),ne=function(){var e=(0,x.on)(),t=e.productVideo,r=e.shortTitle,n=e.title,s=e.beta_product,a=e.intro,c=e.introLinks,i=(0,X.$)("product_landing").t,o=(0,p.useState)(!1),d=o[0],u=o[1];return(0,p.useEffect)((function(){u(!0)}),[]),(0,l.jsxs)("header",{className:"d-lg-flex gutter-lg mb-6",children:[(0,l.jsxs)("div",{className:_()("col-12 mb-3 mb-lg-0",t&&"col-lg-6"),children:[(0,l.jsxs)("h1",{children:[r||n," ",s&&(0,l.jsx)("span",{className:"Label Label--success v-align-middle",children:"Beta"})]}),a&&(0,l.jsx)(C.r,{"data-search":"lead",children:a}),c&&Object.entries(c).filter((function(e){var t=(0,B.Z)(e,2),r=t[0];return t[1]&&!r.includes("raw")})).map((function(e,t){var r=(0,B.Z)(e,2),n=r[0],s=r[1];return s?(0,l.jsx)(se,{href:s,className:_()("btn btn-large f4 mt-3 mr-3 ",0===t&&"btn-primary"),children:i(n)||n},s):null}))]}),t&&(0,l.jsx)("div",{className:"col-12 col-lg-6",children:(0,l.jsx)("div",{className:"position-relative",style:{paddingBottom:"56.25%"},children:(0,l.jsx)("iframe",{title:"".concat(r," Video"),className:"top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full",src:d?t:"",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})},se=function(e){var t=e.href,r=e.children,s=e.className,a=(0,n.useRouter)(),c=(0,le.a)().currentVersion,i=t.startsWith("https"),o=t;if(!i){var d=a.locale||"en";o="/".concat(d).concat("free-pro-team@latest"!==c?"/".concat(c):"").concat(t)}return(0,l.jsxs)(J.r,{href:o,className:s,children:[r," ",i&&(0,l.jsx)("span",{className:"ml-1",children:(0,l.jsx)(re.LinkExternalIcon,{size:"small"})})]})},ae=r(5568),ce=function(){var e=(0,x.on)(),t=e.featuredArticles,r=void 0===t?[]:t,n=e.whatsNewChangelog,s=e.changelogUrl,a=n&&n.length>0,c=(0,X.$)("toc").t;return(0,l.jsxs)("div",{className:"d-lg-flex gutter my-6 py-6",children:[r.map((function(e,t){var r="startHere"===e.key?"All '".concat(e.label,"' content"):"All ".concat(e.label);return(0,l.jsx)("div",{className:_()("col-12 mb-4 mb-lg-0",a?"col-lg-4":"col-lg-6"),children:(0,l.jsx)(ae.w,(0,Z.Z)((0,H.Z)({title:e.label,viewAllHref:e.viewAllHref},e.viewAllHref?{viewAllTitleText:r}:{}),{articles:e.articles}))},e.label+t)})),a&&(0,l.jsx)("div",{className:_()("col-12 mb-4 mb-lg-0 col-lg-4"),children:(0,l.jsx)(ae.w,{title:c("whats_new"),viewAllHref:s,viewAllTitleText:c("all_changelogs"),articles:(n||[]).map((function(e){return{title:e.title,date:e.date,href:e.href}}))})})]})},ie=function(e){var t=e.guide,r=t.authors&&t.authors.length>0?t.authors:["GitHub"],n="@".concat(r.join(", @"));return(0,l.jsx)("li",{className:"col-lg-4 col-12 mb-4 list-style-none",children:(0,l.jsxs)("a",{className:"Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5",href:t.href,children:[(0,l.jsx)("h3",{className:"f2",children:t.title}),(0,l.jsx)("p",{className:"mt-2 mb-4 color-fg-muted",children:t.intro||""}),(0,l.jsx)("footer",{className:"d-flex",children:(0,l.jsx)("div",{children:n})})]})})},oe=function(){var e=(0,n.useRouter)(),t=(0,f.Hv)().currentCategory,r=(0,x.on)(),s=r.featuredLinks,a=r.hasGuidesPage,c="/".concat(e.locale).concat(e.asPath.split("?")[0]);return s.guideCards?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"d-lg-flex flex-items-stretch",children:(0,l.jsx)("ul",{className:"d-flex flex-wrap gutter width-full",children:(s.guideCards||[]).map((function(e){return(0,l.jsx)(ie,{guide:e},e.href)}))})}),!t&&a&&(0,l.jsxs)(J.r,{href:"".concat(c,"/guides"),className:"btn btn-outline float-right",children:["Explore guides ",(0,l.jsx)(re.ArrowRightIcon,{})]})]}):null},de=function(e){var t=e.user,r=e.href;return(0,l.jsxs)("a",{className:"Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-fg-default p-4",href:r||"https://github.com/".concat(t.username),children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)("img",{src:"https://github.com/".concat(t.username,".png"),alt:t.username,className:"avatar avatar-8 circle"})}),(0,l.jsxs)("div",{className:"flex-auto",children:[(0,l.jsx)("h4",{children:t.username}),(0,l.jsx)("p",{className:"mt-1 color-fg-muted",children:t.description})]})]})},ue=function(){var e=(0,x.on)().productUserExamples,t=(0,X.$)("product_landing").t;return e?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"d-flex flex-wrap gutter",children:e.slice(0,6).map((function(e){return(0,l.jsx)("div",{className:"col-12 col-xl-4 col-lg-6 mb-4",children:(0,l.jsx)(de,{href:"https://github.com/sponsors/".concat(e.username),user:e})},e.username)}))}),(0,l.jsxs)(J.r,{href:"https://github.com/sponsors/community",className:"btn btn-outline float-right",children:[t("explore_people_and_projects")," ",(0,l.jsx)(re.ArrowRightIcon,{})]})]}):null},me=function(e){var t=e.repo,r=e.href;return(0,l.jsxs)("a",{className:"Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-fg-default p-4",href:r||"https://github.com/".concat(t.repo),children:[(0,l.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,l.jsx)("img",{src:"https://github.com/".concat(t.repo.split("/")[0],".png"),alt:t.repo,className:"avatar avatar-8"})}),(0,l.jsxs)("div",{className:"flex-auto",children:[(0,l.jsx)("h4",{children:t.repo}),(0,l.jsx)("p",{className:"mt-1 color-fg-muted",children:t.description})]})]})},he=function(){var e=(0,x.on)().productCommunityExamples,t=(0,X.$)("product_landing").t,r=(0,p.useState)(6),n=r[0],s=r[1];return e?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"d-flex flex-wrap gutter",children:e.slice(0,n).map((function(e){return(0,l.jsx)("div",{className:"col-12 col-xl-4 col-lg-6 mb-4",children:(0,l.jsx)(me,{repo:e})},e.repo)}))}),n<e.length&&(0,l.jsxs)("button",{className:"btn btn-outline float-right",onClick:function(){return s(e.length)},children:[t("show_more")," ",(0,l.jsx)(re.ArrowRightIcon,{})]})]}):null},fe=r(3625),xe=r(7378),pe=r(5156),ve=function(e){var t=e.example;return(0,l.jsxs)("a",{className:"Box d-flex flex-column flex-justify-between height-full color-shadow-medium hover-shadow-large no-underline color-fg-default","data-testid":"code-example-card",href:"https://github.com/".concat(t.href),children:[(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)("h3",{className:"f4",children:t.title}),(0,l.jsx)("p",{className:"mt-2 mb-4 color-fg-muted",children:t.description}),(0,l.jsx)("div",{className:"d-flex flex-wrap",children:t.tags.map((function(e){return(0,l.jsx)(pe.Z,{variant:"accent",sx:{mb:1,mr:2},children:e},e)}))})]}),(0,l.jsxs)("footer",{className:"border-top p-4 color-fg-muted d-flex flex-items-center",children:[(0,l.jsx)(re.RepoIcon,{"aria-label":"repository URL",className:"flex-shrink-0"}),(0,l.jsx)(xe.u,{as:"span",maxLines:1,className:"ml-2 text-mono text-small color-fg-accent line-break-anywhere",children:t.href})]})]})},je=function(){var e=(0,x.on)().productCodeExamples,t=(0,X.$)("product_landing").t,r=(0,p.useState)(6),n=r[0],s=r[1],a=(0,p.useState)(""),c=a[0],i=a[1],o=(0,p.useState)(""),d=o[0],u=o[1];(0,p.useEffect)((function(){s(6)}),[c]);var m=!!c,h=[];if(m){var f=new RegExp(c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");h=e.filter((function(e){var t="".concat(e.tags.join(" ")," ").concat(e.title," ").concat(e.description);return f.test(t)}))}return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{"data-search":"hide",className:"pr-lg-3 mb-5 mt-3",onSubmit:function(e){e.preventDefault(),i(d.trim())},children:[(0,l.jsx)(fe.Z,{className:"ml-1 mr-2",fontWeight:"bold",fontSize:2,as:"label",htmlFor:"searchCodeExamples",id:"searchCodeExamples",children:"Search code examples:"}),(0,l.jsx)("input",{"data-testid":"code-examples-input",className:"input-lg py-2 px-3 col-12 col-lg-8 form-control",placeholder:t("search_code_examples"),type:"search",autoComplete:"off","aria-label":t("search_code_examples"),onChange:function(e){return u(e.target.value)},value:d}),(0,l.jsx)("button",{"data-testid":"code-examples-search-btn",className:"btn ml-2 py-2",type:"submit",children:"Search"})]}),m&&(0,l.jsxs)("div",{role:"status",children:[(0,l.jsxs)("h3",{children:[t("search_results_for"),": ",c]}),(0,l.jsxs)("p",{className:"mb-4",children:[t("matches_displayed"),": ",h.length]})]}),(0,l.jsx)("ul",{className:"d-flex flex-wrap gutter",children:(m?h:e.slice(0,n)).map((function(e){return(0,l.jsx)("li",{className:"col-12 col-xl-4 col-lg-6 mb-4 list-style-none",children:(0,l.jsx)(ve,{example:e})},e.href)}))}),n<e.length&&!m&&(0,l.jsxs)("button",{"data-testid":"code-examples-show-more",className:"btn btn-outline float-right",onClick:function(){return s(n+6)},children:[t("show_more")," ",(0,l.jsx)(re.ArrowRightIcon,{})]}),m&&0===h.length&&(0,l.jsxs)("div",{role:"status","data-testid":"code-examples-no-results",className:"py-4 text-center color-fg-muted",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(re.SearchIcon,{size:24})," "]}),(0,l.jsxs)("h3",{className:"text-normal",children:[t("sorry")," ",(0,l.jsx)("strong",{children:c})]}),(0,l.jsxs)("p",{className:"my-3 f4",children:[t("no_example")," ",(0,l.jsx)("br",{})," ",t("try_another")]}),(0,l.jsxs)(J.r,{href:"https://github.com/github/docs/tree/main/data/product-examples",children:[t("learn")," ",(0,l.jsx)(re.ArrowRightIcon,{})]})]})]})},ge=function(e){var t=e.title,r=e.children,n=e.className,s=e.sectionLink,a=e.description,c=(0,f.Hv)().page;return(0,l.jsxs)("div",{className:_()("container-xl px-3 px-md-6 mt-6",n),id:s,children:[t&&(0,l.jsx)("h2",{className:_()("h1 color-fg-default",a?"mb-4":"mb-3"),children:s?(0,l.jsxs)("a",{className:"color-unset",href:"#".concat(s),"aria-label":"".concat(c.title," - ").concat(t," section"),children:[(0,l.jsx)(re.LinkIcon,{size:24,className:"m-1"}),t]}):t}),a&&(0,l.jsx)("div",{className:"color-fg-muted f4",dangerouslySetInnerHTML:{__html:a}}),r]})},be=r(9466),Ne=function(){var e=(0,f.Hv)().currentProductTree;return e?(0,l.jsx)("div",{className:"d-flex gutter flex-wrap","data-testid":"product-articles-list",children:e.childPages.map((function(e,t){return"article"===e.documentType?null:(0,l.jsx)(ye,{treeNode:e},e.href+t)}))}):null},ye=function(e){var t=e.treeNode,r=(0,p.useState)(!1),n=r[0],s=r[1];return(0,l.jsxs)("div",{className:"col-12 col-lg-4 mb-6 height-full",children:[(0,l.jsx)("h3",{className:"mb-3 f4",children:(0,l.jsx)(J.r,{className:"color-unset text-underline",href:t.href,children:t.title})}),(0,l.jsx)(be.S,{variant:"full",children:t.childPages.map((function(e,t){return(0,l.jsx)(be.S.Item,{as:"li",className:_()("width-full pl-0",!n&&t>=5?"d-none":null),sx:{borderRadius:0,":hover":{borderRadius:0}},children:(0,l.jsxs)(J.r,{className:"d-block width-full",href:e.href,children:[e.title,"mapTopic"===e.documentType?(0,l.jsxs)("small",{className:"color-fg-muted d-inline-block",children:["\xa0\u2022 ",e.childPages.length," articles"]}):null]})},e.href+t)}))}),!n&&t.childPages.length>5&&(0,l.jsxs)("button",{onClick:function(){return s(!0)},className:"mt-2 btn-link Link--secondary",children:["Show ",t.childPages.length-5," more"," ",(0,l.jsx)(re.ChevronDownIcon,{className:"v-align-text-bottom"})]})]})};function we(){var e=(0,X.$)("product_landing").t,t=(0,n.useRouter)(),r=(0,f.Hv)(),s=r.enterpriseServerReleases,a=r.allVersions,c=(0,x.on)(),i=c.ghesReleases,o=c.shortTitle,d=t.asPath.split("?")[0];return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"d-lg-flex gutter-lg flex-items-stretch",children:i.map((function(r){var n=r.version;if(!s.supported.includes(n))return null;var c="enterprise-server@".concat(n),i=r.patches[0],d="enterprise-server@".concat(r.firstPreviousRelease),u="enterprise-server@".concat(r.secondPreviousRelease);return(0,l.jsx)("div",{className:"col-lg-4 col-12 mb-4",children:(0,l.jsxs)("div",{className:"Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5",children:[(0,l.jsx)("h3",{className:"f2",children:a[c].versionTitle}),(0,l.jsxs)("p",{className:"mt-2 mb-4 color-fg-muted",children:[(0,l.jsx)(re.ListUnorderedIcon,{})," ",(0,l.jsxs)(J.r,{className:"text-bold",href:"/".concat(t.locale,"/").concat(c,"/admin/release-notes#").concat(i.version),children:[e("release_notes_for")," ",i.version]})," ","(",i.date,")"]}),(0,l.jsxs)("p",{className:"mt-2 mb-4 color-fg-muted",children:[(0,l.jsx)(re.ArrowUpIcon,{})," ",e("upgrade_from")," ",(0,l.jsx)(J.r,{className:"text-bold",href:"/".concat(t.locale,"/").concat(d,"/admin/enterprise-management/upgrading-github-enterprise-server"),children:r.firstPreviousRelease})," ","or"," ",(0,l.jsx)(J.r,{className:"text-bold",href:"/".concat(t.locale,"/").concat(u,"/admin/enterprise-management/upgrading-github-enterprise-server"),children:r.secondPreviousRelease})]}),(0,l.jsxs)("p",{className:"mt-2 mb-4 color-fg-muted",children:[(0,l.jsx)(re.FileIcon,{})," ",(0,l.jsx)(J.r,{className:"text-bold","aria-label":"".concat(o," - ").concat(e("browse_all")," ").concat(n," ").concat(e("docs")),href:"/".concat(t.locale,"/").concat(c),children:e("browse_all_docs")})]})]})},n)}))}),(0,l.jsxs)(J.r,{href:"".concat(d,"/release-notes"),className:"btn btn-outline float-right",children:[e("explore_release_notes")," ",(0,l.jsx)(re.ArrowRightIcon,{})]})]})}var _e=function(){var e,t=(0,n.useRouter)(),r=(0,le.a)().isEnterpriseServer,s=(0,x.on)(),a=s.shortTitle,c=s.featuredLinks,i=s.productUserExamples,o=s.productCommunityExamples,d=s.productCodeExamples,u=(0,X.$)("product_landing").t;return(0,l.jsx)(S.H,{children:(0,l.jsxs)("div",{"data-search":"article-body",children:["rest"===t.query.productId&&(0,l.jsx)(Q.b,{}),(0,l.jsxs)(ge,{className:"pt-3",children:[(0,l.jsx)("div",{className:_()("my-3 mr-auto width-full"),children:(0,l.jsx)(ee.O,{})}),(0,l.jsx)(ne,{})]}),(0,l.jsx)(ge,{children:(0,l.jsx)(ce,{})}),d.length>0&&(0,l.jsx)(ge,{title:u("code_examples"),sectionLink:"code-examples",className:"my-6 pb-6",children:(0,l.jsx)(je,{})}),o.length>0&&(0,l.jsx)(ge,{title:u("communities_using_discussions"),className:"my-6 pb-6",children:(0,l.jsx)(he,{})}),i.length>0&&(0,l.jsx)(ge,{title:u("sponsor_community"),className:"my-6 pb-6",children:(0,l.jsx)(ue,{})}),"admin"===t.query.productId&&r&&(0,l.jsx)(ge,{title:u("supported_releases"),className:"my-6 pb-6",children:(0,l.jsx)(we,{})}),(null===(e=c.guideCards)||void 0===e?void 0:e.length)>0&&(0,l.jsx)("div",{className:"color-bg-subtle py-6",children:(0,l.jsx)(ge,{title:u("guides"),sectionLink:"guides-2",className:"my-6",children:(0,l.jsx)(oe,{})})}),(0,l.jsx)(ge,{title:"All ".concat(a," docs"),sectionLink:"all-docs",className:"pt-9",children:(0,l.jsx)(Ne,{})})]})})},ke=r(4726),Se=r.n(ke),Le=function(){var e,t=j(),r=t.title,n=t.intro,s=t.featuredTrack,a=(0,X.$)("product_guides").t,c=null===s||void 0===s||null===(e=s.guides)||void 0===e?void 0:e.map((function(e){var t,r;return(0,l.jsx)("li",{className:"px-2 d-flex flex-shrink-0",style:{width:280},children:(0,l.jsxs)(J.r,{href:"".concat(e.href,"?learn=").concat(s.trackName,"&learnProduct=").concat(s.trackProduct),className:"d-inline-block Box p-5 color-bg-default color-border-default no-underline",children:[(0,l.jsxs)("div",{className:"d-flex flex-justify-between flex-items-center",children:[(0,l.jsx)("div",{className:"color-bg-default color-fg-accent border d-inline-flex flex-items-center flex-justify-center circle",style:{width:40,height:40},children:s.guides&&(0,l.jsx)("span",{className:"f2 lh-condensed-ultra text-center text-bold",children:(null===(t=s.guides)||void 0===t?void 0:t.indexOf(e))+1})}),(0,l.jsx)("div",{className:"color-fg-muted h6 text-uppercase",children:a("guide_types")[(null===(r=e.page)||void 0===r?void 0:r.type)||""]})]}),(0,l.jsx)("h3",{className:"text-semibold my-4 color-fg-default",children:e.title}),(0,l.jsx)(xe.u,{maxLines:8,className:"color-fg-muted f5 my-4",children:(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.intro}})})]})},e.href)}));return(0,l.jsxs)("div",{children:[(0,l.jsx)("header",{className:"d-flex gutter mb-6 my-4",children:(0,l.jsxs)("div",{className:"col-12",children:[(0,l.jsxs)("h1",{children:[r," guides"]}),n&&(0,l.jsx)(C.r,{"data-search":"lead",children:n})]})}),s&&s.guides&&s.guides.length>0&&(0,l.jsxs)("div",{className:"mb-6 position-relative overflow-hidden mr-n3 ml-n3 px-3",children:[(0,l.jsxs)("ul",{"data-testid":"feature-track",className:"list-style-none d-flex flex-nowrap overflow-x-scroll px-2",children:[(0,l.jsx)("li",{className:"px-2 d-flex flex-shrink-0",style:{width:280},children:(0,l.jsxs)("div",{className:"d-inline-block Box p-5 color-bg-subtle",children:[(0,l.jsx)("div",{className:"d-inline-flex flex-items-center flex-justify-center circle border",style:{width:40,height:40,border:"2px white solid"},children:(0,l.jsx)(re.StarFillIcon,{size:24})}),(0,l.jsx)("h2",{className:"text-semibold my-4 f3",children:s.title}),(0,l.jsx)("div",{className:"f5 my-4",children:s.description}),(0,l.jsxs)(J.r,{"aria-label":"".concat(s.title," - ").concat(a("start_path")),className:"d-inline-flex flex-items-center flex-justify-center btn px-4 py-2 f5 no-underline text-bold",role:"button",href:"".concat(s.guides[0].href,"?learn=").concat(s.trackName,"&learnProduct=").concat(s.trackProduct),children:[a("start_path"),(0,l.jsx)(re.ArrowRightIcon,{size:20,className:"ml-2"})]})]})}),c]}),(0,l.jsx)("div",{className:_()("position-absolute top-0 bottom-0 left-0 ml-3 pl-3",Se().fadeLeft)}),(0,l.jsx)("div",{className:_()("position-absolute top-0 bottom-0 right-0 mr-3 pr-3",Se().fadeRight)})]})]})},Pe=r(9911),Te=r(7010),Ce=r.n(Te),Ae=function(e){var t,r,n,s,a=e.track,c=(0,p.useState)(4),i=c[0],o=c[1],d=(0,X.$)("product_guides").t,u=(null===a||void 0===a?void 0:a.title)?(0,Pe.o)(null===a||void 0===a?void 0:a.title):"";return(0,l.jsx)("div",{"data-testid":"learning-track",className:"my-3 px-4 col-12 col-md-6",children:(0,l.jsxs)("div",{className:"Box d-flex flex-column",children:[(0,l.jsxs)("div",{className:"Box-header color-bg-subtle p-4 d-flex flex-1 flex-items-start flex-wrap",children:[(0,l.jsx)("div",{className:"d-flex flex-auto flex-items-start col-7 col-md-7 col-xl-7",children:(0,l.jsxs)("div",{className:"my-xl-0 mr-xl-3",children:[(0,l.jsx)("h3",{id:u,className:_()("mb-3 color-text f3 text-semibold",Ce().hashAnchor),children:(0,l.jsx)("a",{className:"color-unset",href:"#".concat(u),children:null===a||void 0===a?void 0:a.title})}),(0,l.jsx)(xe.u,{as:"p",maxLines:3,className:"color-text",children:null===a||void 0===a?void 0:a.description})]})}),(0,l.jsxs)(J.r,{"aria-label":"".concat(null===a||void 0===a?void 0:a.title," - ").concat(d("start_path")),className:"d-inline-flex btn no-wrap mt-3 mt-md-0 flex-items-center flex-justify-center",href:"".concat((null===a||void 0===a?void 0:a.guides)&&(null===a||void 0===a?void 0:a.guides[0].href),"?learn=").concat(null===a||void 0===a?void 0:a.trackName,"&learnProduct=").concat(null===a||void 0===a?void 0:a.trackProduct),children:[(0,l.jsx)("span",{children:d("start_path")}),(0,l.jsx)(re.ArrowRightIcon,{size:20,className:"ml-2"})]})]}),a&&a.guides&&(0,l.jsx)("div",{style:{counterReset:"li"},children:(0,l.jsx)(be.S,{as:"ol",variant:"full",children:null===a||void 0===a||null===(t=a.guides)||void 0===t?void 0:t.slice(0,i).map((function(e){var t;return(0,l.jsx)(be.S.Item,{as:"li",className:"width-full p-0",sx:{position:"relative",borderRadius:0,":hover":{borderRadius:0},":before":{width:"calc(1.5rem - 0px)",height:"calc(1.5rem - 0px)",fontSize:"calc(1rem - 1px)",margin:"22px 0 0 1rem",content:"counter(li)",counterIncrement:"li",position:"absolute",left:0,color:"var(--color-canvas-default)",fontWeight:500,textAlign:"center",borderRadius:"50%",backgroundColor:"var(--color-fg-default)"}},children:(0,l.jsxs)(J.r,{className:"rounded-0 pl-7 py-4 width-full d-block Box-row d-flex flex-items-center color-fg-default no-underline",href:"".concat(e.href,"?learn=").concat(null===a||void 0===a?void 0:a.trackName,"&learnProduct=").concat(null===a||void 0===a?void 0:a.trackProduct),children:[(0,l.jsx)("h4",{className:"flex-auto pr-2 f5",dangerouslySetInnerHTML:{__html:e.title}}),(0,l.jsx)("div",{className:"color-fg-muted h6 text-uppercase flex-shrink-0",children:d("guide_types")[(null===(t=e.page)||void 0===t?void 0:t.type)||""]})]})},e.href+(null===a||void 0===a?void 0:a.trackName))}))})}),(0,l.jsx)("button",{"data-search":"hide",className:"Box-footer btn-link border-top-0 position-relative text-center text-bold color-fg-accent pt-1 pb-3 col-12 "+(((null===a||void 0===a||null===(r=a.guides)||void 0===r?void 0:r.length)||0)<=i&&_()(Ce().removeHoverEvents)),onClick:function(){var e;o((null===a||void 0===a||null===(e=a.guides)||void 0===e?void 0:e.length)||0)},children:((null===a||void 0===a||null===(n=a.guides)||void 0===n?void 0:n.length)||0)>i?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:_()("position-absolute left-0 right-0 py-5",Ce().fadeBottom),style:{bottom:"50px"}}),(0,l.jsxs)("span",{children:["Show ",((null===a||void 0===a||null===(s=a.guides)||void 0===s?void 0:s.length)||0)-i," ",d("more_guides")]})]}):(0,l.jsx)("span",{className:"color-fg-default",children:"All guides shown"})})]})})},Re=function(){var e=j().learningTracks;return(0,l.jsx)("div",{className:"d-flex flex-wrap flex-items-start my-5 gutter",children:(e||[]).map((function(e){return(0,l.jsx)(Ae,{track:e},null===e||void 0===e?void 0:e.title)}))})},Ie=function(e){var t=e.tabIndex,r=e.card,n=e.typeLabel;return(0,l.jsx)("li",{tabIndex:t,"data-testid":"article-card",className:"d-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8",children:(0,l.jsxs)(J.r,{className:"no-underline d-flex flex-column py-3 border-bottom",href:r.href,children:[(0,l.jsx)("h3",{className:"h4 color-fg-default mb-1",children:r.title}),(0,l.jsx)("div",{className:"h6 text-uppercase","data-testid":"article-card-type",children:n}),(0,l.jsx)("p",{className:"color-fg-muted my-3",children:r.intro}),r.topics.length>0&&(0,l.jsx)("ul",{style:{listStyleType:"none"},children:r.topics.map((function(e){return(0,l.jsx)("li",{className:"d-inline-block",children:(0,l.jsx)(pe.Z,{"data-testid":"article-card-topic",size:"small",variant:"accent",sx:{mr:1},children:e})},e)}))})]})})},Ee=r(650),He=function(){var e=(0,X.$)("product_guides").t,t=e("guide_types"),r=j(),n=r.allTopics,s=r.includeGuides,a=(0,p.useState)(9),c=a[0],i=a[1],o=(0,p.useState)(),d=o[0],u=o[1],m=(0,p.useState)(),h=m[0],f=m[1],x=(0,p.useState)([]),v=x[0],g=x[1],b=(0,p.useRef)(null),N=(0,p.useRef)(null),y=(0,p.useRef)(null);(0,p.useEffect)((function(){i(9),g((s||[]).filter((function(e){var t=e.type===(null===d||void 0===d?void 0:d.key),r=e.topics.some((function(e){return e===(null===h||void 0===h?void 0:h.key)}));return(!(null===d||void 0===d?void 0:d.key)||t)&&(!(null===h||void 0===h?void 0:h.key)||r)})))}),[d,h]);var w=function(e){e===b&&b.current&&b.current.focus(),e===N&&N.current&&N.current.focus()},_=void 0!==d||void 0!==h?v:s||[],k=Object.entries(t).map((function(e){var t=(0,B.Z)(e,2),r=t[0];return{text:t[1],key:r}}));k.unshift({text:e("filters.all"),key:void 0});var S=null===n||void 0===n?void 0:n.map((function(e){return{text:e,key:e}}));return S.unshift({text:e("filters.all"),key:void 0}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{"data-search":"hide",children:[(0,l.jsx)("label",{htmlFor:"guide-filter-form",children:e("filter_instructions")}),(0,l.jsxs)("form",{name:"guide-filter-form",className:"mt-2 mb-5 d-flex d-flex",children:[(0,l.jsxs)("div",{"data-testid":"card-filter-types",children:[(0,l.jsx)("div",{onClick:function(){return w(b)},onKeyDown:function(){return w(b)},role:"button",tabIndex:-1,className:"text-uppercase f6 color-fg-muted d-block",children:e("filters.type")}),(0,l.jsxs)(Ee.P,{anchorRef:b,children:[(0,l.jsx)(Ee.P.Button,{children:d?d.text:e("filters.all")}),(0,l.jsx)(Ee.P.Overlay,{"aria-label":"types","data-testid":"types-dropdown",children:(0,l.jsx)(be.S,{selectionVariant:"single",children:k.map((function(e){return(0,l.jsx)(be.S.Item,{onSelect:function(){return u(e)},children:e.text},e.text)}))})})]})]}),(0,l.jsxs)("div",{"data-testid":"card-filter-topics",className:"mx-4",children:[(0,l.jsx)("div",{onClick:function(){return w(N)},onKeyDown:function(){return w(N)},role:"button",tabIndex:-1,className:"text-uppercase f6 color-fg-muted d-block",children:e("filters.topic")}),(0,l.jsxs)(Ee.P,{anchorRef:N,children:[(0,l.jsx)(Ee.P.Button,{children:h?h.text:e("filters.all")}),(0,l.jsx)(Ee.P.Overlay,{"aria-label":"topics","data-testid":"topics-dropdown",children:(0,l.jsx)(be.S,{selectionVariant:"single",children:S.map((function(e){return(0,l.jsx)(be.S.Item,{onSelect:function(){return f(e)},children:e.text},e.text)}))})})]})]})]}),(0,l.jsx)("div",{role:"status",className:"color-fg-muted",children:0===_.length?e("guides_found.none"):1===_.length?e("guides_found.one"):e("guides_found.multiple").replace("{n}",_.length)})]}),(0,l.jsx)("ul",{ref:y,className:"d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8",children:_.slice(0,c).map((function(e){return(0,l.jsx)(Ie,{tabIndex:-1,card:e,typeLabel:t[e.type]},e.href)}))}),_.length>c&&(0,l.jsx)("button",{className:"col-12 mt-5 text-center text-bold color-fg-accent btn-link","data-search":"hide",onClick:function(){if(y.current){var e=y.current.childElementCount;y.current.childNodes.item(e-1).focus()}i(c+9)},children:e("load_more")})]})},Ze=function(){var e=j(),t=e.title,r=e.learningTracks,n=e.includeGuides,s=(0,X.$)("product_guides").t;return(0,l.jsxs)(S.H,{children:[(0,l.jsx)(ge,{className:"pt-3",children:(0,l.jsx)(Le,{})}),(0,l.jsxs)("div",{"data-search":"article-body",children:[r&&r.length>0&&(0,l.jsx)(ge,{title:"".concat(t," learning paths"),className:"border-top py-6",sectionLink:"learning-paths",description:s("learning_paths_desc"),children:(0,l.jsx)(Re,{})}),n&&(0,l.jsx)(ge,{title:"All ".concat(t," guides"),className:"border-top py-6 color-border-default",sectionLink:"all-guides",children:(0,l.jsx)(He,{})})]})]})},Be=r(4197),$e=r(8370);function qe(){!function(){var e=Array.from(document.querySelectorAll("button.js-btn-copy"));e&&e.forEach((function(e){return e.addEventListener("click",(0,s.Z)(c().mark((function t(){var r,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.dataset.clipboardText){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,navigator.clipboard.writeText(r);case 5:l=e.getAttribute("aria-label")||"",e.setAttribute("aria-label","Copied!"),setTimeout((function(){e.setAttribute("aria-label",l)}),2e3);case 8:case"end":return t.stop()}}),t)}))))}))}(),function(){var e=document.querySelector("#to-english-doc");if(e){var t=window.location.pathname.split("/");t[1]="en",e.href=t.join("/")}}(),function(){var e=document.querySelectorAll("#article-contents table code");e&&e.forEach((function(e){var t=o()(e.textContent||""),r=e.querySelector("a"),l=t.replace(d,(function(e){return e.replace(u,"$1<wbr>$2").replace(m,"$1_<wbr>").replace(h,"$1<wbr>")}));r&&1===e.childNodes.length?r.innerHTML=r.innerHTML.replace(t,l):e.innerHTML=e.innerHTML.replace(t,l)}))}()}var Ve=!0,Me=function(e){var t,r=e.mainContext,s=e.productLandingContext,a=e.productGuidesContext,c=e.tocLandingContext,i=e.articleContext,o=(0,n.useRouter)();if((0,p.useEffect)((function(){return qe(),o.events.on("routeChangeComplete",qe),function(){o.events.off("routeChangeComplete",qe)}}),[o.events]),s)t=(0,l.jsx)(x.u6.Provider,{value:s,children:(0,l.jsx)(_e,{})});else if(a)t=(0,l.jsx)(v.Provider,{value:a,children:(0,l.jsx)(Ze,{})});else if(c)t=(0,l.jsx)($e.qj.Provider,{value:c,children:(0,l.jsx)(Be.Y,{})});else{if(!i)throw new Error("No context provided to page");t=(0,l.jsx)(g.Provider,{value:i,children:(0,l.jsx)(te,{})})}return(0,l.jsx)(f.Tr.Provider,{value:r,children:t})}},4726:function(e){e.exports={fadeLeft:"GuidesHero_fadeLeft__BZJc_",fadeRight:"GuidesHero_fadeRight__GbPpK"}},7010:function(e){e.exports={fadeBottom:"LearningTrack_fadeBottom__B26I6",removeHoverEvents:"LearningTrack_removeHoverEvents__XrhTS",hashAnchor:"LearningTrack_hashAnchor__8cMnX"}},3883:function(e){e.exports={indentNested:"Minitocs_indentNested__1d725",nested:"Minitocs_nested__ViBDJ",miniToc:"Minitocs_miniToc__2ZFtg"}}}]);