"use strict";(self.webpackChunkrgoit_react_hw_05_movies=self.webpackChunkrgoit_react_hw_05_movies||[]).push([[527],{527:(e,r,n)=>{n.r(r),n.d(r,{default:()=>y});var t,o,a,s,c=n(675),i=n(467),u=n(544),l=n(722),h=n(43),d=n(525),p=n(528),g=n(464),f=(0,g.Ay)(d.N_)(t||(t=(0,p.A)(["\n  color: rgb(105, 15, 194);\n"]))),b=g.Ay.li(o||(o=(0,p.A)(["\n  margin-top: 7px;\n"]))),x=g.Ay.input(a||(a=(0,p.A)(["\n  width: 300px;\n  height: 40px;\n  margin-right: 10px;\n  padding: 0 10px;\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 5px;\n  font-size: 16px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  \n  &:hover {\n    border-color: rgb(105, 15, 194);\n  }\n\n  &:focus {\n    outline: none;\n    border-color: rgb(105, 15, 194);\n    box-shadow: 0 2px 5px rgba(105, 15, 194, 0.3);\n  }\n"]))),v=g.Ay.button(s||(s=(0,p.A)(["\n  width: 120px;\n  height: 40px;\n  background-color: rgb(105, 15, 194);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px; \n  cursor: pointer;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); \n\n  &:hover {\n    background-color: rgb(85, 10, 155); \n  }\n\n  &:active {\n    background-color: rgb(65, 5, 125);\n  }\n"]))),m=n(579);const y=function(){var e=(0,h.useState)(""),r=(0,u.A)(e,2),n=r[0],t=r[1],o=(0,h.useState)([]),a=(0,u.A)(o,2),s=a[0],p=a[1],g=(0,h.useState)(!1),y=(0,u.A)(g,2),A=y[0],w=y[1],_=(0,d.zy)(),k=(0,h.useRef)(null);(0,h.useEffect)((function(){var e,r;null!==(e=_.state)&&void 0!==e&&e.searchResults&&null!==(r=_.state)&&void 0!==r&&r.searchQuery&&(console.log("Restoring state:",_.state),p(_.state.searchResults),t(_.state.searchQuery))}),[_.state]),(0,h.useEffect)((function(){k.current&&k.current.focus()}),[]);var j=function(){var e=(0,i.A)((0,c.A)().mark((function e(r){var t,o;return(0,c.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log("Submitting search query:",n),e.prev=2,t="https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1&api_key=b3fe8ad645f337f3fa9ceb8e5b164aa5"),e.next=6,l.A.get(t);case 6:o=e.sent,console.log("Fetched movies:",o.data.results),p(o.data.results),w(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),console.error("Error fetching movies:",e.t0),w(!0),p([]);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(r){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[(0,m.jsxs)("form",{onSubmit:j,children:[(0,m.jsx)(x,{ref:k,type:"text",value:n,placeholder:"Search for a movie...",onChange:function(e){t(e.target.value)}}),(0,m.jsx)(v,{type:"submit",children:"Search"})]}),A&&(0,m.jsx)("div",{className:"error-message",children:"Error fetching movies. Please try again later."}),(0,m.jsx)("ul",{children:s.map((function(e){return(0,m.jsx)(b,{children:(0,m.jsx)(f,{to:"/movies/".concat(e.id),state:{from:"/movies",searchResults:s,searchQuery:n},children:e.title||e.name})},e.id)}))})]})}}}]);
//# sourceMappingURL=527.8dfd50a8.chunk.js.map