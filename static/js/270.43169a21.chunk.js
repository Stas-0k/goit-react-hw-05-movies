"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{687:function(e,t,r){r.d(t,{Hg:function(){return i},TP:function(){return p},tx:function(){return f},z1:function(){return o},zv:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="177f83f5259c7f846e561f4715bd03a4",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("./trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("./search/movie?api_key=".concat(s,"&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("./movie/".concat(t,"?api_key=").concat(s));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("./movie/".concat(t,"/credits?api_key=").concat(s));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("./movie/".concat(t,"/reviews?api_key=").concat(s));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},866:function(e,t,r){r(791);var n=r(643),a=r(184);t.Z=function(){return(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(n.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},270:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(687),i=r(689),o=r(791),p="reviews_reviewsCard__7Vkjr",l="reviews_authorReview__e13Qh",f="reviews_author__URyxt",v=r(866),h=r(184),d=function(){var e=(0,i.UO)().id,t=(0,o.useState)(null),r=(0,a.Z)(t,2),c=r[0],d=r[1],w=(0,o.useState)(""),x=(0,a.Z)(w,2),m=x[0],k=x[1],y=(0,o.useState)(!1),g=(0,a.Z)(y,2),_=g[0],Z=g[1];return(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,s.tx)(e);case 4:if(0===(r=t.sent).length){t.next=9;break}d(r),t.next=10;break;case 9:throw new Error("No reviews yet.");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),k(t.t0);case 15:return t.prev=15,Z(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,h.jsxs)("div",{children:[m&&(0,h.jsx)("p",{children:m.message}),_&&(0,h.jsx)(v.Z,{}),c&&c.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,h.jsxs)("ul",{className:p,children:[(0,h.jsxs)("li",{className:l,children:[(0,h.jsx)("em",{className:f,children:"Author: "}),t]}),(0,h.jsx)("li",{children:r})]},n)}))]})}}}]);
//# sourceMappingURL=270.43169a21.chunk.js.map