(self.webpackChunklite=self.webpackChunklite||[]).push([[2130],{66802:(e,n,t)=>{"use strict";t.d(n,{R4:()=>i,Ue:()=>o,xG:()=>l,Hp:()=>a});var r=t(93661),i=function(e,n,t){var r,i;return"undefined"!=typeof window&&e&&n&&!!(window.ApplePaySession&&null!==(r=window.ApplePaySession)&&void 0!==r&&r.supportsVersion(t)&&null!==(i=window.ApplePaySession)&&void 0!==i&&i.canMakePayments())},o=function(e,n){var t="";switch(n){case"CA":return e===r.FM.Monthly&&(t="monthlyCad"),e===r.FM.Yearly&&(t="yearlyCad"),t;default:return t}};function l(e){var n=e.amount,t=e.currency,r=e.locale,i=e.floatingDigits,o=void 0===i?[2,2]:i,l=e.isLongFormat,a=void 0!==l&&l,s=r||"undefined"!=typeof window&&window.navigator.language||"en-US",u=t||"USD";if(!Intl)return"".concat(n," ").concat(u);try{var c=new Intl.NumberFormat(s,{style:"currency",currency:u,minimumFractionDigits:o[0],maximumFractionDigits:o[1],currencyDisplay:"narrowSymbol"}).format(n);return a?"".concat(c," ").concat(t):c}catch(e){return String(n)}}var a=function(e,n,t){var r=String(e);return t?"".concat(r," ").concat(n):r}},84683:(e,n,t)=>{"use strict";t.d(n,{d:()=>l});var r=t(319),i=t.n(r),o=t(68216),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionAvatar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}].concat(i()(o.nf.definitions))}},19308:(e,n,t)=>{"use strict";t.d(n,{b:()=>a,I:()=>s});var r=t(319),i=t.n(r),o=t(68216),l=t(98007),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat(i()(o.nf.definitions),i()(l.Os.definitions))}},76107:(e,n,t)=>{"use strict";t.d(n,{b:()=>r});var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},61279:(e,n,t)=>{"use strict";t.d(n,{DI:()=>F,nj:()=>C,oT:()=>_});var r=t(59713),i=t.n(r),o=t(63038),l=t.n(o),a=t(28655),s=t.n(a),u=t(82492),c=t.n(u),d=t(92471),m=t(21919),f=t(67294),v=t(25735),p=t(9354),b=t(75880),w=t(18627),S=t(66411),h=t(78285);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=s()(["\n  mutation fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe($userId: ID!) {\n    fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe(userId: $userId) {\n      __typename\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function k(){var e=s()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return k=function(){return e},e}function V(){var e=s()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return V=function(){return e},e}function P(){var e=s()(["\n  fragment useNewsletterV3Subscription_newsletterV3_viewerEdge on NewsletterV3 {\n    viewerEdge {\n      id\n      isSubscribed\n    }\n  }\n"]);return P=function(){return e},e}function N(){var e=s()(["\n  fragment useNewsletterV3Subscription_user on User {\n    id\n    username\n    newsletterV3 {\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return N=function(){return e},e}function O(){var e=s()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    type\n    slug\n    name\n    collection {\n      slug\n    }\n    user {\n      id\n      name\n      username\n      newsletterV3 {\n        id\n      }\n    }\n  }\n"]);return O=function(){return e},e}var F=(0,d.Ps)(O()),C=(0,d.Ps)(N(),F),M=((0,d.Ps)(P()),(0,d.Ps)(V())),D=(0,d.Ps)(k()),x=(0,d.Ps)(E(),F),_=function(e){var n=e.newsletterV3,t=e.creator,r=e.newsletterName,i=e.hideLinkInConfirmationToast,o=void 0!==i&&i,a=n||{},s=a.id,u=a.type,d=a.slug,y=a.collection,E=(null==n?void 0:n.user)||t,k=null!=r?r:null==n?void 0:n.name,V=f.useState(!1),P=l()(V,2),N=P[0],O=P[1],F=(0,p.T)({newsletterSlug:d,collectionSlug:null==y?void 0:y.slug,username:null==E?void 0:E.username}),_=F.viewerEdge,U=F.loading,I=(0,v.VB)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),T=f.useState(!1),A=l()(T,2),R=A[0],Y=A[1];f.useEffect((function(){Y(!(null==_||!_.isSubscribed))}),[null==_?void 0:_.isSubscribed]);var B=(0,w.Av)(),L=(0,S.Qi)(),j=(0,h.w)();N&&B.event("newsletterV3.subscribe.error",{newsletterV3Id:s});var G=function(e,n,t){if(t){var r={id:"User:".concat(null==E?void 0:E.id),fragment:C,fragmentName:"useNewsletterV3Subscription_user"},i=e.readFragment(r);e.writeFragment(g(g({},r),{},{data:g(g({},i),{},{newsletterV3:t})}))}if(_){var o=e.readQuery({query:p.p,variables:{newsletterSlug:d,collectionSlug:null==y?void 0:y.slug,username:null==E?void 0:E.username}}),l=c()({},o,{newsletterV3:{viewerEdge:{isSubscribed:n}}});e.writeQuery({query:p.p,variables:{newsletterSlug:d||"",collectionSlug:null==y?void 0:y.slug,username:null==E?void 0:E.username},data:l})}n&&null!=E&&E.id&&I&&(0,b.I0)(e,E.id,{isFollowing:!0})},$=(0,m.D)(M,{onCompleted:function(e){var n=e.subscribeNewsletterV3;O(!n),n&&(B.event("newsletterV3.subscribeClicked",{newsletterV3Id:s,source:L}),Y(!0))},update:function(e){G(e,!0)}}),z=l()($,1)[0],H=(0,m.D)(D,{onCompleted:function(e){var n=e.unsubscribeNewsletterV3;O(!n),n&&(Y(!1),j({duration:o?5e3:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:k||null,newsletterType:u||null,unsubscribeFn:function(){return Y(!1)},hideEmailSettingsLink:o,hideCloseButton:o}}))},update:function(e){G(e,!1)}}),W=l()(H,1)[0],Q=(0,m.D)(x,{onCompleted:function(e){var n=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;O(!n),n&&(B.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.id,source:L}),Y(!0))},update:function(e,n){var t,r=g({},null===(t=n.data)||void 0===t?void 0:t.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);G(e,!0,r)}}),K=l()(Q,1)[0];return{isSubscribed:R,hasError:N,setSubscribe:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(!1),e&&!n&&null!=t&&t.id?K({variables:{userId:null==t?void 0:t.id}}):e&&null!=n&&n.id?z({variables:{newsletterV3Id:null==n?void 0:n.id,shouldRecordConsent:r}}):null!=n&&n.id?W({variables:{newsletterV3Id:null==n?void 0:n.id}}):O(!0)},loading:U}}},93661:(e,n,t)=>{"use strict";t.d(n,{FM:()=>o,d5:()=>f,kr:()=>v,OS:()=>p});var r,i,o,l,a=t(59713),s=t.n(a),u=t(66802),c=t(25735),d=t(91157);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyCrossout="yearlyCrossout",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved",e.FiftyPercentOffOneYearDiscountPrice="FiftyPercentOffOneYearDiscountPrice",e.FiftyPercentOffOneYearDiscountCrossoutPrice="FiftyPercentOffOneYearDiscountCrossoutPrice",e.FiftyPercentOffOneYearDiscountSavedMembershipPrice="FiftyPercentOffOneYearDiscountSavedMembershipPrice"}(o||(o={})),function(e){e[e.NoDiscount=0]="NoDiscount",e[e.FiftyPercentOffOneYear=1]="FiftyPercentOffOneYear"}(l||(l={}));var m={CA:{plan:(r={},s()(r,o.Monthly,5),s()(r,o.Yearly,50),s()(r,o.YearlyCrossout,60),s()(r,o.YearlyStaff,1),s()(r,o.YearlyPriceSaved,10),s()(r,o.YearlyStaffPriceSaved,49),s()(r,o.FiftyPercentOffOneYearDiscountPrice,25),s()(r,o.FiftyPercentOffOneYearDiscountCrossoutPrice,50),s()(r,o.FiftyPercentOffOneYearDiscountSavedMembershipPrice,25),r),currency:"CAD"},US:{plan:(i={},s()(i,o.Monthly,5),s()(i,o.Yearly,50),s()(i,o.YearlyCrossout,60),s()(i,o.YearlyStaff,1),s()(i,o.YearlyPriceSaved,10),s()(i,o.YearlyStaffPriceSaved,49),s()(i,o.FiftyPercentOffOneYearDiscountPrice,25),s()(i,o.FiftyPercentOffOneYearDiscountCrossoutPrice,50),s()(i,o.FiftyPercentOffOneYearDiscountSavedMembershipPrice,25),i),currency:"USD"}},f=function(){var e=(0,d.x)(),n=e.loading,t=e.geolocation,r=!!(0,c.VB)({name:"enable_lite_canada_plan",placeholder:!1}),i=!n&&t&&t.country?t.country:"";return r&&"CA"===i?"CA":"US"},v=function(e){var n=e.membershipType,t=e.country,r=m[t],i=r.currency,l=r.plan[n||o.Yearly];if(!l)throw new Error("Unavailable membership price");return{amount:l,currency:i}},p=function(e){var n=e.membershipType,t=e.excludeCurrencySign,r=void 0!==t&&t,i=e.isLongFormat,o=void 0!==i&&i,l=f(),a=v({membershipType:n,country:l}),s=a.amount,c=a.currency;return r?(0,u.Hp)(s,c,o):(0,u.xG)({amount:s,currency:c,floatingDigits:[0,0],isLongFormat:o})}},9354:(e,n,t)=>{"use strict";t.d(n,{T:()=>s,p:()=>u});var r=t(28655),i=t.n(r),o=t(64718),l=t(92471);function a(){var e=i()(["\n  query NewsletterV3ViewerEdge($newsletterSlug: ID!, $collectionSlug: ID, $username: ID) {\n    newsletterV3(\n      newsletterSlug: $newsletterSlug\n      collectionSlug: $collectionSlug\n      username: $username\n    ) {\n      ... on NewsletterV3 {\n        id\n        viewerEdge {\n          id\n          isSubscribed\n        }\n      }\n    }\n  }\n"]);return a=function(){return e},e}var s=function(e){var n,t=e.newsletterSlug,r=void 0===t?"":t,i=e.collectionSlug,l=e.username,a=(0,o.a)(u,{variables:{newsletterSlug:r,collectionSlug:i,username:l},ssr:!1,skip:!r&&!l}),s=a.loading,c=a.error,d=a.data;return s?{loading:s}:c?{error:c}:{viewerEdge:null==d||null===(n=d.newsletterV3)||void 0===n?void 0:n.viewerEdge}},u=(0,l.Ps)(a())},24330:(e,n,t)=>{"use strict";t.d(n,{N:()=>u});var r=t(63038),i=t.n(r),o=t(67294),l=t(32317),a=t(69116),s=t(77355),u=function(e){var n=e.creator,t=e.followButtonSize,r=void 0===t?"REGULAR":t,u=e.shouldHideTooltip,c=void 0!==u&&u,d=e.post,m=e.showMembershipUpsellModal,f=e.susiEntry,v=e.isVisible,p=e.width,b=e.isSubscribeCompact,w=void 0!==b&&b,S=o.useState(!1),h=i()(S,2),y=h[0],g=h[1];return o.createElement(o.Fragment,null,o.createElement(l.Bv,{buttonSize:r,onClick:function(){n.viewerEdge.isFollowing||g(!0)},post:d,user:n,susiEntry:f,width:p}),o.createElement(s.x,{marginLeft:w?"4px":"8px"},o.createElement(a.X,{user:n,showMembershipUpsellModal:m,showPostFollowSubscribeTooltip:y&&!c,hidePostFollowSubscribeTooltip:function(){return g(!1)},isVisible:v,isCompact:w})))}},69116:(e,n,t)=>{"use strict";t.d(n,{X:()=>ae,w:()=>se});var r=t(28655),i=t.n(r),o=t(63038),l=t.n(o),a=t(92471),s=t(67294),u=t(21919),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},d=t(6443),m=t(14818),f=t(13791),v=t(77355),p=t(54945),b=t(87691),w=t(18627),S=t(66411),h=t(43487),y=t(87498),g=t(78870),E=t(50458),k="after_subscribe_membership_upsell",V=function(e){var n=e.user,t=e.isVisible,r=e.hide,i=(0,h.v9)((function(e){return e.config.authDomain})),o=(0,w.Av)(),a=(0,d.H)(),V=a.value,P=a.loading;s.useEffect((function(){var e;P||null!=V&&V.postSubscribeMembershipUpsellShownAt||(o.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:k}),O())}),[P]);var N=(0,u.D)(c,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==V?void 0:V.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),O=l()(N,1)[0];return s.createElement(S.cW,{source:{name:k}},s.createElement(f.v,{isVisible:t,hide:r,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,t;o.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:k}),t=(0,g.Rk)((0,E.c5p)(i),{subscribeToUserId:n.id,source:k}),window.location.href=t},showCancelButton:!0,isDestructiveAction:!1},s.createElement(v.x,{marginBottom:"24px"},s.createElement(m.z,{miroId:n.imageId||y.gG,alt:n.name||"",diameter:80,freezeGifs:!1})),s.createElement(v.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},s.createElement(p.H2,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),s.createElement(v.x,{marginBottom:"32px"},s.createElement(b.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",n.name," and other writers you read. Get full access to every story on Medium."))))},P=t(76107),N=t(77280),O=t(61279),F=t(93661),C=t(98863),M=t(26350),D=t(43822),x=t(47230),_=t(73917),U=t(26244),I=t(1383),T=t(14646),A=t(31889),R=t(34135),Y=t(97217),B=t(78285);function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var j=s.createElement("path",{d:"M14 7.29L15.6 9 18 6M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),G=s.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52"});const $=function(e){return s.createElement("svg",L({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),j,G)};function z(){return(z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var H=s.createElement("path",{d:"M24 13l2 2 3-3.5M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),W=s.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const Q=function(e){return s.createElement("svg",z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),H,W)};function K(){return(K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var X=s.createElement("path",{d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),q=s.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11"});const J=function(e){return s.createElement("svg",K({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),X,q)};function Z(){return(Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var ee=s.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25}),ne=s.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)"}),te=s.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),re=s.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const ie=function(e){return s.createElement("svg",Z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),ee,ne,te,re)};var oe=t(68894);function le(){var e=i()(["\n  fragment UserSubscribeButton_user on User {\n    id\n    isPartnerProgramEnrolled\n    name\n    viewerEdge {\n      id\n      isFollowing\n      isUser\n    }\n    viewerIsUser\n    newsletterV3 {\n      id\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n    ...useNewsletterV3Subscription_user\n    ...MembershipUpsellModal_user\n  }\n  ","\n  ","\n  ","\n"]);return le=function(){return e},e}var ae=function(e){var n=e.user,t=e.showMembershipUpsellModal,r=void 0!==t&&t,i=e.showPostFollowSubscribeTooltip,o=void 0!==i&&i,a=e.hidePostFollowSubscribeTooltip,u=e.isVisible,c=void 0===u||u,m=e.isCompact,f=void 0!==m&&m,p=s.useRef(null),y=(0,T.I)(),k=(0,A.F)(),P=(0,d.H)().value,L=(0,oe.O)(!1),j=l()(L,3),G=j[0],z=j[1],H=j[2],W=n.newsletterV3,K=(0,B.w)(),X=(0,w.Av)(),q=(0,S.pK)(),Z=(0,S.Qi)(),ee=(0,N.PM)(),ne=(0,O.oT)({newsletterV3:W,creator:n,newsletterName:n.name||void 0}),te=ne.isSubscribed,re=ne.hasError,le=ne.loading,ae=ne.setSubscribe,se=(0,h.v9)((function(e){return e.config.authDomain})),ue=(0,g.Rk)((0,E.c5p)(se),{subscribeToUserId:n.id,source:Z}),ce=!(null==P||!P.mediumMemberAt),de=s.useState(!1),me=l()(de,2),fe=me[0],ve=me[1],pe=s.useState(!1),be=l()(pe,2),we=be[0],Se=be[1],he=(0,S.P7)(ee||"").susiEntry,ye=void 0===he?"":he,ge=["newsletter_v3_promo","writer_subscription_landing"].includes(ye),Ee=["newsletter_v3_promo"].includes(ye),ke=(0,F.OS)({membershipType:F.FM.Monthly}),Ve=!1,Pe=function(){var e;!Ve&&c&&Ne()&&(X.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=n.newsletterV3)||void 0===e?void 0:e.id)||"",source:q}),Ve=!0)},Ne=function(){var e;if(!p.current)return!1;var n=null===(e=p.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};s.useEffect((function(){return Pe(),window&&R.V6.on("scroll",Pe),function(){R.V6.off("scroll",Pe)}}),[]),s.useEffect((function(){Pe()}),[c]);var Oe=(0,oe.O)(!1),Fe=l()(Oe,3),Ce=Fe[0],Me=Fe[1],De=Fe[2],xe=function(e,n){var t=(0,d.H)(),r=t.value,i=t.loading,o=s.useRef(null),l=!(null==r||!r.mediumMemberAt),a=(0,N.PM)(),u=(0,S.P7)(a||"").susiEntry,c=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===u?"":u);if(i)return!1;if(null!==o.current)return o.current;var m=c&&!l&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=r&&r.postSubscribeMembershipUpsellShownAt);return o.current=m,m}(n),_e=s.useState(!1),Ue=l()(_e,2),Ie=Ue[0],Te=Ue[1];s.useEffect((function(){r&&te&&!Ie&&xe?Me():De()}),[te,Ie,xe]),s.useEffect((function(){ee&&!xe&&ge&&te&&(!Ee&&Z===ye||Ee)&&K({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:n.name,newsletterType:Y.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return ae(!1)}}})}),[ee,te]),s.useEffect((function(){if(te&&we&&W){var e=!ce&&!!n.isPartnerProgramEnrolled;e&&X.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:W.id,source:Z}),ve(e),Se(!1)}}),[te,we,W]);var Ae=(0,C.f)().isWorkingPreview;if(re||n.viewerEdge.isUser&&!Ae)return null;var Re,Ye=te?"OBVIOUS":"STRONG",Be=function(e,n){return function(t){return{stroke:n?t.baseColor.background.normal:e,height:f?"23px":"36px",width:f?"23px":"36px"}}},Le=y(Be(k.accentColor.fill.normal,le)),je=y(Be(k.accentColor.background,le));Re=te?f?s.createElement($,{className:Le}):s.createElement(Q,{className:Le}):f?s.createElement(J,{className:je}):s.createElement(ie,{className:je});var Ge=s.createElement(x.z,{loading:le,buttonStyle:Ye,onClick:function(){var e;Se(!te),P?te?ae(!1):P&&P.allowEmailAddressSharingEditorWriter?ae(!0,!1):z():null!==(e=n.newsletterV3)&&void 0!==e&&e.id?X.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.newsletterV3.id,source:Z}):X.event("user.LOSubscribeClicked",{targetUserId:n.id,source:Z})},padding:"0","aria-label":"Subscribe"},Re),$e=function(){return s.createElement(v.x,{padding:"14px 12px 20px",maxWidth:"220px"},s.createElement(b.F,{tag:"div",scale:"S",color:"DARKER"},s.createElement("strong",null,"You're subscribed to ",n.name,". Become a member for more.")," Get full access to every story on Medium for ",ke," a month."),s.createElement(v.x,{paddingTop:"8px"},s.createElement(D.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:ue,width:"150px",onClick:function(){X.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:W.id,source:Z})}},s.createElement(v.x,{textAlign:"center"},s.createElement(b.F,{scale:"S",color:"WHITE"},"Become a member")))))},ze=function(){return s.createElement(v.x,{padding:"10px 12px",maxWidth:"166px"},s.createElement(b.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",n.name," publishes."))},He=function(e){var n=e.children;return s.createElement(_.J,{isVisible:!!a&&!te,hide:a,placement:"bottom",popoverRenderFn:ze,targetDistance:10,role:"tooltip"},n)},We=function(e){var n=e.children;return s.createElement(_.J,{isVisible:!le&&fe,hide:function(){return ve(!1)},placement:"bottom",popoverRenderFn:$e,targetDistance:10,role:"tooltip"},n)},Qe=function(e){var n=e.children;return s.createElement(U.$,{isVisible:!le&&!te,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:ze,role:"tooltip",targetDistance:10},n)},Ke=function(e){var n=e.children;return o&&!te?s.createElement(He,null,n):fe?s.createElement(We,null,n):s.createElement(Qe,null,n)};return s.createElement("div",{ref:p},s.createElement(Ke,null,s.createElement(v.x,null,P&&s.createElement(I.Q,{onConfirm:function(){ae(!0,!0)},isVisible:G,hide:H,titleText:"Confirm your subscription to ".concat(n.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),P?Ge:s.createElement(M.R,{operation:"register",newsletterV3:W,user:n,actionUrl:W?(0,E.Zul)(W.id):(0,E.lcz)(n.id),susiEntry:"subscribe_user"},Ge))),Ce&&s.createElement(V,{user:n,isVisible:Ce,hide:function(){Te(!0),De()}}))},se=(0,a.Ps)(le(),O.DI,O.nj,P.b)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2130.1f81326a.chunk.js.map