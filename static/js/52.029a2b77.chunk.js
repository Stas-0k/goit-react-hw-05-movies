"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{687:function(t,e,r){r.d(e,{Hg:function(){return s},TP:function(){return p},tx:function(){return l},z1:function(){return i},zv:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="177f83f5259c7f846e561f4715bd03a4",s=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("./trending/movie/day?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("./search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("./movie/".concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("./movie/".concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("./movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},436:function(t,e,r){r.d(e,{e:function(){return u}});var n=r(87),a="movie-list_movieList__S8Wc8",c=r(184),u=function(t){var e=t.items;return(0,c.jsx)("div",{className:a,children:e.map((function(t){return(0,c.jsx)(n.rU,{to:"/movies/".concat(t.id),children:t.title},t.id)}))})}},52:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),s=r(687),i=r(436),p=r(87),f="movies_form__Pny9T",l=r(184),v=function(){var t=(0,o.useState)(""),e=(0,a.Z)(t,2),r=e[0],c=e[1],v=(0,o.useState)([]),m=(0,a.Z)(v,2),h=m[0],d=m[1],x=(0,p.lr)(),g=(0,a.Z)(x,2),k=g[0],w=g[1],y=k.get("name"),b=function(){var t=(0,n.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==r.trim()){t.next=3;break}return t.abrupt("return",alert("Enter something."));case 3:return t.next=5,(0,s.z1)(r);case 5:n=t.sent,d(n.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:b,className:f,children:[(0,l.jsx)("input",{value:y,onChange:function(t){c(t.currentTarget.value),w({name:t.target.value})},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)(i.e,{items:h})]})}}}]);
//# sourceMappingURL=52.029a2b77.chunk.js.map