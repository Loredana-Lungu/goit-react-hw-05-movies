"use strict";(self.webpackChunkrgoit_react_hw_05_movies=self.webpackChunkrgoit_react_hw_05_movies||[]).push([[712],{712:(e,n,s)=>{s.r(n),s.d(n,{default:()=>I});var r,t,i,o,a,c,l=s(675),h=s(467),d=s(544),u=s(43),x=s(525),v=s(722),p=s(528),j=s(464),m=j.Ay.img(r||(r=(0,p.A)(["\n    width: 200px;\n    height: auto;\n    margin: 10px 5px;\n"]))),g=j.Ay.div(t||(t=(0,p.A)(["\n  display: flex;\n  column-gap: 30px;\n  border-bottom: 1px solid black;\n"]))),f=j.Ay.div(i||(i=(0,p.A)(["\n  display: block;\n"]))),b=j.Ay.ul(o||(o=(0,p.A)(["\n  border-bottom: 1px solid black;\n"]))),y=(0,j.Ay)(x.N_)(a||(a=(0,p.A)(["\n  margin-left: 5px;\n  text-decoration: none;\n  color:rgb(105, 15, 194);;\n"]))),A=(0,j.Ay)(x.N_)(c||(c=(0,p.A)(["\n  color: rgb(105, 15, 194);\n  font-family: 'Montserrat', sans-serif;\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: rgb(85, 10, 155);\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  }\n"]))),k=s(579);const I=function(){var e,n,s,r,t,i,o,a=(0,x.g)().movieId,c=(0,u.useState)(null),p=(0,d.A)(c,2),j=p[0],I=p[1],w=(0,u.useState)(!1),G=(0,d.A)(w,2),N=G[0],Y=G[1],_=(0,x.zy)(),J=null!==(e=null===(n=_.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",z=null!==(s=null===(r=_.state)||void 0===r?void 0:r.searchResults)&&void 0!==s?s:[],M=null!==(t=null===(i=_.state)||void 0===i?void 0:i.searchQuery)&&void 0!==t?t:"";return console.log("Navigation state:",{backToHome:J,searchResults:z,searchQuery:M}),(0,u.useEffect)((function(){console.log("Fetching details for movie ID: ".concat(a));var e=function(){var e=(0,h.A)((0,l.A)().mark((function e(){var n;return(0,l.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.A.get("https://api.themoviedb.org/3/movie/".concat(a,"?language=en-US"),{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2ZlOGFkNjQ1ZjMzN2YzZmE5Y2ViOGU1YjE2NGFhNSIsIm5iZiI6MTc0MjU4MDc1My42OTYsInN1YiI6IjY3ZGRhYzExNGFhOTY2Y2U4YzY5OGE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y0B7qM1WFsNxXXBbMTipRKhc5SpJeJzhukkqrV4XfTU"),Accept:"application/json"}});case 3:n=e.sent,I(n.data),Y(N),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status?console.log("Error 404, movie not found or invalid API key: ",e.t0):(console.error("Error fetching details: ",e.t0),Y(!0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[a,N]),j&&0===(null===(o=Object.keys(j))||void 0===o?void 0:o.length)?(0,k.jsxs)("div",{children:["Sorry, this movie is not available",(0,k.jsx)(y,{to:J,children:"Go back"})]}):j?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{to:J,state:{searchResults:z,searchQuery:M},children:"Go back"}),(0,k.jsxs)(g,{children:[(0,k.jsx)(m,{src:"https://image.tmdb.org/t/p/w500/".concat(j.poster_path),alt:j.title}),(0,k.jsxs)(f,{children:[(0,k.jsx)("h1",{children:j.title}),(0,k.jsxs)("p",{children:["User score: ",10*j.vote_average,"%"]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:j.overview}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsxs)("p",{children:[" ",j.genres.map((function(e){return e.name})).join(" ")]})]})]}),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h2",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(A,{to:"cast",state:{from:J,searchResults:z,searchQuery:M},children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(A,{to:"reviews",state:{from:J,searchResults:z,searchQuery:M},children:"Reviews"})})]}),(0,k.jsx)(b,{})]}),(0,k.jsx)(x.sv,{})]}):(0,k.jsxs)("div",{children:[(0,k.jsx)(y,{to:J,children:"Go back"}),(0,k.jsx)("p",{children:"Loading..."}),(0,k.jsx)("p",{children:"This movie could not exist"})]})}}}]);
//# sourceMappingURL=712.1f29f2e2.chunk.js.map