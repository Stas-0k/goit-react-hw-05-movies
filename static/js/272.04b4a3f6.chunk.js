"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[272],{687:function(e,t,r){r.d(t,{Hg:function(){return o},TP:function(){return l},tx:function(){return v},z1:function(){return u},zv:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="177f83f5259c7f846e561f4715bd03a4",o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("./trending/movie/day?api_key=".concat(i,"&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("./search/movie?api_key=".concat(i,"&query=").concat(t,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("./movie/".concat(t,"?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("./movie/".concat(t,"/credits?api_key=").concat(i,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("./movie/".concat(t,"/reviews?api_key=").concat(i,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},272:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(687),o=r(791),u=r(87),l=r(689),p="movie-details_card__EfA9j",v="movie-details_cardInfo__Ww3B+",d="movie-details_back__at5VP",f="movie-details_cardContainer__bKNBD",h="movie-details_buttContainer__3YAAD",m="movie-details_castReview__e5bbp",x=r(768),_=r(184),g=function(){var e,t,r=(0,l.UO)().id,c=(0,o.useState)(631842),g=(0,a.Z)(c,2),w=g[0],k=g[1],j=null!==(e=null===(t=(0,l.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/goit-react-hw-05-movies";(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.TP)(r);case 3:t=e.sent,k(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var b=new Date(w.release_date).getFullYear(),y=Math.round(10*w.vote_average);return(0,_.jsxs)("div",{className:f,children:[(0,_.jsxs)(u.rU,{to:j,className:d,children:[(0,_.jsx)(x.ZU_,{size:30}),"Back"]}),(0,_.jsxs)("div",{className:p,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(w.poster_path),alt:w.title})," "]}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsxs)("h1",{children:[w.title," (",b,")"]}),(0,_.jsxs)("p",{children:["User score: ",y,"%"]}),(0,_.jsxs)("p",{children:["Overwiew: ",w.overview," "]}),(0,_.jsxs)("p",{children:["Genres:"," ",w.genres&&w.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)(u.rU,{to:"cast",className:m,children:"Cast"}),(0,_.jsx)(u.rU,{to:"reviews",className:m,children:"Reviews"})]}),(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading subpage..."}),children:(0,_.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=272.04b4a3f6.chunk.js.map