(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),s=a.n(i),o=(a(37),a(8)),c=a(1);a(38);var m=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"freedom is freedom to say that~"'),r.a.createElement("span",null," - George Orwell, 1984"))},l=a(15),u=a.n(l),p=a(29),v=a(10),d=a(11),g=a(13),y=a(12),f=a(30),E=a.n(f),h=a(4),_=a.n(h);a(59);function b(e){var t=e.year,a=e.title,n=e.summary,i=e.poster,s=(e.rating,e.genres);return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:i,genres:s}}},r.a.createElement("img",{src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)}))))))}b.ProTypes={year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,rating:_.a.number.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var N=b,O=(a(63),function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading .... ")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))},k=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var w=function(){return r.a.createElement(o.a,null,r.a.createElement(j,null),r.a.createElement(c.a,{path:"/",exact:!0,component:O}),r.a.createElement(c.a,{path:"/about",component:m}),r.a.createElement(c.a,{path:"/movie-detail",component:k}))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.af856a79.chunk.js.map