(self.webpackChunklite=self.webpackChunklite||[]).push([[1465],{57682:(e,n,t)=>{"use strict";t.d(n,{BG:()=>r,ZD:()=>l,mr:()=>d});var i=t(67294),a=t(77355),r=52,l=48,o={xs:"24px",sm:"24px",md:"".concat(r,"px"),lg:"".concat(r,"px"),xl:"".concat(r,"px")},c={xs:"24px",sm:"24px",md:"".concat(l,"px"),lg:"".concat(l,"px"),xl:"".concat(l,"px")},d=function(e){var n=e.heading,t=e.navbar,r=e.marginBottom,l=e.navbarMargin,d=r?{xs:"24px",sm:"24px",md:"".concat(r,"px"),lg:"".concat(r,"px"),xl:"".concat(r,"px")}:c;return i.createElement(a.x,{marginTop:o,marginBottom:d},i.createElement(a.x,{marginBottom:l||"40px"},n),t)}},81360:(e,n,t)=>{"use strict";t.d(n,{J:()=>v});var i=t(63038),a=t.n(i),r=t(23279),l=t.n(r),o=t(67294),c=t(77355),d=t(14646),s=t(31889),u=t(34135),m=t(97),p=t(87879),k=function(){return{display:"flex",alignItems:"center",overflowX:"scroll",overflowY:"hidden",padding:"2px 0","::-webkit-scrollbar":{width:0,background:"transparent"}}},v=function(e){var n=e.children,t=e.childrenWidth,i=(0,d.I)(),r=(0,o.useState)(!1),c=a()(r,2),s=c[0],m=c[1],p=(0,o.useState)(!1),v=a()(p,2),f=v[0],x=v[1],h=(0,o.useState)(),b=a()(h,2),S=b[0],E=b[1],y=(0,o.useCallback)((function(e){e&&E(e)}),[]),N=(0,o.useCallback)((function(){S&&S.scrollWidth>S.clientWidth&&m(!0)}),[S]);(0,o.useEffect)((function(){return u.V6.on("resize",N),N(),function(){return u.V6.off("resize",N)}}),[N]);var w=(0,o.useCallback)((function(e){S&&S.scrollBy({left:e,behavior:"smooth"})}),[S]),C=(0,o.useCallback)((function(){w(100)}),[w]),F=(0,o.useCallback)((function(){w(-100)}),[w]),T=(0,o.useCallback)(l()((function(){if(S){var e=S.scrollWidth-(S.clientWidth+S.scrollLeft);m(e>0),x(S.scrollLeft>0)}}),100),[S]);return(0,o.useEffect)((function(){T()}),[T]),(0,o.useEffect)((function(){S&&t&&m(t>S.clientWidth)}),[t,null==S?void 0:S.clientWidth]),o.createElement("div",{ref:y,onScroll:T,className:i(k)},n,s&&o.createElement(g,{onClick:C,isRight:!0}),f&&o.createElement(g,{onClick:F}))},f={border:"none",padding:"0",margin:"2px",cursor:"pointer"},g=function(e){var n=e.isRight,t=e.onClick,i=(0,s.F)(),a=(0,d.I)(),r=i.backgroundColor,l=(0,p.bv)(r,0);return o.createElement(c.x,{position:"absolute",right:n?"0":void 0,left:n?void 0:"0",top:"0",bottom:"12px",paddingLeft:n?"42px":void 0,paddingRight:n?void 0:"42px",background:"linear-gradient(".concat(n?90:270,"deg, ").concat(l," 0px, ").concat(r," 50%)"),display:"flex",alignItems:"center"},o.createElement("button",{className:a(f),onClick:t,"aria-label":n?"next sections":"previous sections"},o.createElement(m.Z,{height:"26px",width:"26px",style:n?{transform:"rotate(180deg)"}:void 0,"aria-hidden":"true"})))}},42139:(e,n,t)=>{"use strict";t.d(n,{R:()=>m});var i=t(67294),a=t(77355),r=t(66411),l=t(14646),o=t(31889),c=t(63038),d=t.n(c),s=t(81360),u=t(47172),m=function(e){var n,t,c,m,p,k=e.items,v=e.isSearchPage,f=(0,l.I)(),g=(0,o.F)(),x="scroller-items",h=(n="#".concat(x),t=i.useState(),c=d()(t,2),m=c[0],p=c[1],i.useEffect((function(){var e=new ResizeObserver((function(e){var n,t,i=null===(n=e[0])||void 0===n||null===(t=n.contentRect)||void 0===t?void 0:t.width;i&&p(i)})),t=document.querySelector(n);return t&&e.observe(t),function(){e.disconnect()}}),[n]),{width:m}).width;return i.createElement(a.x,{position:"relative",height:"39px",boxShadow:"inset 0 -1px 0 ".concat(g.baseColor.border.lighter),overflow:"hidden"},i.createElement(s.J,{childrenWidth:h},i.createElement("div",{id:x,className:f({display:"flex"})},k.map((function(e,n){var t=n===k.length-1?"50px":e.marginRight,a=e.text,l=e.onClick,o=e.isActive,c=e.target,d=e.tabIndex,s=e.ariaControls,m=e.href;return i.createElement(r.cW,{source:{index:n},extendSource:!0,key:"page-navigation-tab-".concat(a,"-").concat(n)},i.createElement(u.v,{text:a,href:m,onClick:l,isActive:o,target:c,tabIndex:d,ariaControls:s,marginRight:t,isSearchPage:v}))})))))}},47172:(e,n,t)=>{"use strict";t.d(n,{v:()=>p});var i=t(67294),a=t(5977),r=t(77355),l=t(93310),o=t(87691),c=t(14646),d=t(43487),s=t(75101),u=t(42140),m=function(e){return{":hover":{color:"".concat(e.baseColor.fill.darker," !important")}}},p=function(e){var n=(0,c.I)(),t=(0,s.G)(),p=e.target,k=e.text,v=e.isSearchPage,f=e.marginRight,g=void 0===f?"32px":f,x="href"in e?e.href:void 0,h="onClick"in e?e.onClick:void 0,b="tabIndex"in e?e.tabIndex:void 0,S="ariaControls"in e?e.ariaControls:void 0,E="isActive"in e?e.isActive:t(x||""),y=(0,d.v9)((function(e){return e.navigation.currentLocation})),N=(0,a.TH)(),w=(0,u.dD)(N.search).q,C="".concat(y,"?q=").concat(w),F=v?x===C:E||t(null!=x?x:"");return i.createElement(r.x,{marginRight:g,paddingBottom:"16px",minWidth:"max-content",borderBottom:F?"BASE_DARKER":"BASE_LIGHTER"},i.createElement(l.r,{role:"tab",onClick:h,href:x,target:p,tabIndex:b,"aria-controls":S,className:n({border:"none",cursor:"pointer",padding:"0px"})},i.createElement(o.F,{scale:"M",color:F?"DARKER":"LIGHTER"},i.createElement("span",{className:n(m)},k))))}},73486:(e,n,t)=>{"use strict";t.d(n,{d:()=>le,m:()=>re});var i=t(67294),a=t(5977),r=t(937),l=t(20113),o=t(14646),c=function(e){var n=e.publisher,t=e.scale,a=void 0===t?"XS":t,r=(0,o.I)();return n.name?i.createElement(l.X6,{playwrightClassName:"pw-author-name",scale:a},i.createElement("span",{className:r({wordBreak:"break-word"})},n.name)):null},d=t(80350),s=t(63038),u=t.n(s),m=t(38460),p=t(25468),k=t(99468),v=t(319),f=t.n(v),g=t(13085),x=t(14337),h=t(54341),b=t(84683),S=t(19308),E={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat(f()(b.d.definitions),f()(S.I.definitions))},y={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FollowedEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}]}}].concat(f()(x.v.definitions),f()(h.O.definitions),f()(E.definitions))},N=([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}}]}}].concat(f()(g.b.definitions)),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFollowsListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"}}]}}]}}].concat(f()(y.definitions))}),w=t(71652),C=t(82405),F=t(77355),T=t(87691),I=function(e){var n=e.collection,t=e.buttonSize,a=e.buttonStyleFn,r=n.name,o=n.description;return i.createElement(F.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},i.createElement(F.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},i.createElement(F.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},i.createElement(l.X6,{scale:"S"},r),i.createElement(T.F,{scale:"S"},o)),i.createElement(F.x,null,i.createElement(w.v,{collection:n,link:!0}))),i.createElement(F.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},i.createElement(T.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),i.createElement(C.F,{collection:n,buttonSize:t,buttonStyleFn:a,susiEntry:"follow_card"})))},B=t(78757),R=t(30826),_=t(28695),A=t(93310),D=t(73917),L=t(42130),H=t(68894),M=function(e){return{"& path":{fill:e.baseColor.text.lighter},":hover path":{fill:e.baseColor.fill.darker},":focus path":{fill:e.baseColor.fill.darker},":hover":{background:e.baseColor.background.normal},padding:"4px",borderRadius:"6px"}},P=function(e){var n=e.popoverRenderFn,t=e.ariaId,a=e.role,r=(0,H.O)(!1),l=u()(r,4),o=l[0],c=l[2],d=l[3];return i.createElement(D.J,{ariaId:t,isVisible:o,placement:"top",targetDistance:10,role:a,popoverRenderFn:n,hide:c,hideOnOutsideClick:!0,noPortal:!0},i.createElement(A.r,{onClick:d,rules:M,"aria-controls":t,"aria-expanded":o},i.createElement(L.Z,null)))},V=function(e){return{"& p":{wordBreak:"break-all"},":hover p":{textDecoration:"underline",color:e.baseColor.text.light}}},U=function(e){var n=e.entity,t=(0,B.P)(n),a=(0,i.useCallback)((function(){return"User"===n.__typename?i.createElement(_.K,{user:n}):i.createElement(I,{collection:n,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}),[n]);return i.createElement(F.x,{tag:"li",display:"flex",justifyContent:"space-between",alignItems:"center"},i.createElement(A.r,{href:t,rules:V},i.createElement(F.x,{display:"flex",paddingRight:"10px"},i.createElement(F.x,{paddingRight:"12px"},i.createElement(R.G,{publisher:n,scale:"XXXS"})),i.createElement(T.F,{clamp:1,scale:"S",color:"LIGHTER"},n.name))),i.createElement(P,{popoverRenderFn:a,ariaId:"creatorInfoPopover-".concat(n.id),role:"dialog"}))},X=t(6443),G=t(18627),O=t(66411),W=t(18122),z=t(97217),q=t(21372),Y=function(e){var n,t=e.user,a=t.id,r=t.customStyleSheet,o=(0,X.H)().value,c=a===(null==o?void 0:o.id),d=(0,G.Av)(),s=(0,W.g)({onPresentedFn:function(){return d.event("sidebar.blogrollViewed",{viewerIsAuthor:c})}}),v=(0,m.t)(N,{ssr:!0,variables:{userId:a,limit:5}}),f=u()(v,2),g=f[0],x=f[1],h=x.called,b=x.loading,S=x.error,E=x.data,y=(E=void 0===E?{userFollows:void 0}:E).userFollows,w=(0,p.g)(t),C=w.isFollowingCountVisible,I=w.followingCount,B=(0,i.useState)(),R=u()(B,2),_=R[0],D=R[1],L=(0,i.useState)(!1),H=u()(L,2),M=H[0],P=H[1],V=(0,i.useCallback)((function(){return P(!0)}),[]),Y=(0,i.useCallback)((function(){return P(!1)}),[]);if((null==r||null===(n=r.blogroll)||void 0===n?void 0:n.visibility)===z.n$.BLOGROLL_VISIBILITY_HIDDEN)return null;if(!h)return g(),null;if(b||S||!y||!y.length||I<5)return null;var j=C?"See all (".concat((0,q.rR)(I),")"):"See all";return i.createElement(O.cW,{extendSource:!0,source:{name:"blogrolls_sidebar"}},i.createElement(F.x,{ref:s,position:"relative"},i.createElement(l.X6,{scale:"XS",tag:"span"},"Following"),i.createElement(F.x,{marginTop:"16px",marginBottom:"16px",tag:"ul"},y.map((function(e){return i.createElement(U,{key:null==e?void 0:e.id,entity:e,isTooltipActive:_===e.id,onMouseEnter:function(){return D(e.id)}})}))),i.createElement(T.F,{scale:"S"},i.createElement(A.r,{linkStyle:"SUBTLE",onClick:V},j)),i.createElement(k.A,{hide:Y,publisher:t,followingCount:I,isVisible:M})))},j=t(84739),J=t(32223),K=t(5422),Z=t(33058),$=t(64238),Q=t(25735),ee=t(14818),ne=t(24330),te=t(92661),ie=t(87498),ae=t(78870),re=88,le=function(e){var n=e.includeBlogRoll,t=e.user,l=(0,X.H)().value,o=l&&l.id===t.id,s=(0,j.B)(t),u=(0,$.o)(t),m=(0,Q.VB)({name:"enable_lite_user_settings",placeholder:!1}),p=(0,te.H2)(),k=p("ShowSettings",{}),v=(0,ae.Rk)(p("ShowSettingsTab",{setting:J.B.Account}),{},K.e),f=m?v:k,g=(0,a.TH)(),x=(0,te.$B)(g.pathname),h="ShowUserFollowers"===(null==x?void 0:x.route.name);return i.createElement(i.Fragment,null,i.createElement(A.r,{href:s},i.createElement(ee.z,{alt:t.name||"",miroId:t.imageId||ie.gG,diameter:re})),i.createElement(F.x,{marginTop:"16px"},i.createElement(A.r,{href:s},i.createElement(c,{publisher:t}))),i.createElement(F.x,{marginTop:"4px"},i.createElement(d.e,{publisher:t,disableLink:h})),i.createElement(F.x,{marginTop:"12px"},u&&i.createElement(F.x,{marginTop:"24px",marginBottom:"10px"},i.createElement(Z._,{size:"M",withText:!0})),i.createElement(r.y,{publisher:t})),o?i.createElement(F.x,{marginTop:"24px",marginBottom:"46px"},i.createElement(T.F,{scale:"S",color:"ACCENT"},i.createElement(A.r,{href:f},"Edit profile"))):i.createElement(O.cW,{source:{name:"publisher_header_actions"},extendSource:!0},i.createElement(F.x,{display:"flex",marginBottom:"40px",marginTop:"24px"},i.createElement(ne.N,{creator:t,followButtonSize:"REGULAR",susiEntry:"follow_profile",showMembershipUpsellModal:!0,width:"auto"}))),n&&!h&&i.createElement(Y,{user:t}))}},1279:(e,n,t)=>{"use strict";t.d(n,{m:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherDescription_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bio"}}]}}]}}]}},937:(e,n,t)=>{"use strict";t.d(n,{y:()=>o});var i=t(67294),a=t(14294),r=t(38882),l=t(87691),o=function(e){var n=e.publisher,t="Collection"===n.__typename?n.description:n.bio;return t?i.createElement(l.F,{scale:"M"},i.createElement(r.c.Provider,{value:!0},i.createElement(a.P,{wrapLinks:!0},t))):null}},32064:(e,n,t)=>{"use strict";t.d(n,{y:()=>r});var i=t(67294),a=t(77355),r=function(e){var n=e.children,t=e.marginTop,r=void 0===t?"40px":t,l=e.paddingBottom,o=void 0===l?"0px":l,c=e.showBorderBottom,d=void 0!==c&&c;return i.createElement(a.x,{marginTop:r,paddingBottom:o,borderBottom:d?"BASE_LIGHTER":"NONE"},n)}},986:(e,n,t)=>{"use strict";t.d(n,{c:()=>d});var i=t(67294),a=t(52439),r=t(89636),l=t(53232),o=t(77355),c=t(35010),d=function(e){var n=e.children,t=(0,i.useRef)(0),d=(0,i.useRef)(null),s=(0,i.useRef)("stickyToTop"),u=(0,i.useRef)(null),m=(0,r.v)(),p=m.fullNavbarHeight,k=m.topNavUpsellHeight,v=m.addHeightChangeHandler,f=m.removeHeightChangeHandler;return(0,c.L)((function(){var e=function(e){var n=e.currentHeight;d.current&&u.current&&("notSticky"!==s.current&&(d.current.style.top="".concat(n,"px")),u.current.style.minHeight="calc(100vh - ".concat(n,"px)"))};return v(e),function(){f(e)}}),[]),(0,c.L)((function(){var e=function(){if(d.current){var e=window.scrollY>t.current;t.current=window.scrollY;var n=window.innerHeight,i=d.current.offsetHeight-n,a=l.fp;i<=20||(e?("notSticky"===s.current&&window.scrollY>=d.current.offsetTop+i+a+k&&(s.current="stickyToBottom",d.current.style.position="sticky",d.current.style.top="".concat(-i,"px")),"stickyToTop"===s.current&&(s.current="notSticky",d.current.style.position="relative",d.current.style.top="0px",d.current.style.marginTop="0px",d.current.style.marginTop="".concat(Math.max(t.current-d.current.offsetTop,0),"px"))):("notSticky"===s.current&&window.scrollY<=d.current.offsetTop&&(s.current="stickyToTop",d.current.style.position="sticky",d.current.style.top="".concat(a+k,"px"),d.current.style.marginTop="0px"),"stickyToBottom"===s.current&&(s.current="notSticky",d.current.style.position="relative",d.current.style.top="0px",d.current.style.marginTop="0px",d.current.style.marginTop="".concat(t.current-i-d.current.offsetTop-a-k,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[k]),i.createElement(o.x,{position:"sticky",top:"".concat(p,"px"),ref:d},i.createElement(o.x,{display:"flex",flexDirection:"column",minHeight:"calc(100vh - ".concat(p,"px)"),ref:u},i.createElement(o.x,{flexGrow:"1"},n),i.createElement(a.q,{detailScale:"XS",spacing:"XS"})))}},32223:(e,n,t)=>{"use strict";t.d(n,{B:()=>i,N:()=>k});var i,a=t(67294),r=t(70405),l=t(57682),o=t(42139),c=t(35225),d=t(96370),s=t(77355),u=t(92661),m=t(43487),p=t(71341);!function(e){e.Account="account",e.Publishing="publishing",e.Notifications="notifications",e.Membership="membership",e.Security="security"}(i||(i={}));var k=function(e){var n=e.children,t=e.activeTab,k=(0,p.h)(),v=(0,u.di)("ShowSettings",{}),f=(0,u.di)("ShowSettingsTab",{setting:i.Publishing}),g=(0,u.di)("ShowSettingsTab",{setting:i.Notifications}),x=(0,u.di)("ShowSettingsTab",{setting:i.Membership}),h=(0,u.di)("ShowSettingsTab",{setting:i.Security}),b=(0,a.useMemo)((function(){return[{text:"Account",onClick:function(){return k(v)},isActive:t===i.Account},{text:"Publishing",onClick:function(){return k(f)},isActive:t===i.Publishing},{text:"Notifications",onClick:function(){return k(g)},isActive:t===i.Notifications},{text:"Membership and payment",onClick:function(){return k(x)},isActive:t===i.Membership},{text:"Security and apps",onClick:function(){return k(h)},isActive:t===i.Security}]}),[t,k]),S=(0,m.v9)((function(e){return e.config.productName})),E=(0,a.useMemo)((function(){return a.createElement(c.V,null,"Settings")}),[]);return a.createElement(d.P,{size:"app"},a.createElement(r.ql,null,a.createElement("title",null,"Settings",S?" - ".concat(S):null)),a.createElement(s.x,{paddingBottom:"32px"},a.createElement(l.mr,{heading:E,navbarMargin:{xs:"32px",sm:"32px",md:"56px",lg:"56px",xl:"56px"},navbar:a.createElement(o.R,{items:b})}),n))}},5422:(e,n,t)=>{"use strict";t.d(n,{e:()=>i});var i="#profileInformation"},35225:(e,n,t)=>{"use strict";t.d(n,{V:()=>o});var i=t(67294),a=t(77355),r=t(20113),l={xs:"M",sm:"M",md:"XL",lg:"XL",xl:"XL"},o=function(e){var n=e.children;return i.createElement(a.x,null,i.createElement(r.X6,{scale:l,tag:"h1",clamp:1},n))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1465.8116c01e.chunk.js.map