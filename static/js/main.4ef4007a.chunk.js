(this["webpackJsonpeta-react"]=this["webpackJsonpeta-react"]||[]).push([[0],{42:function(t,e,s){},65:function(t,e,s){"use strict";s.r(e);var n=s(16),a=s(15),o=s(13),r=s(22),c=s(21),i=s(12),l=s(0),u=s.n(l),d=s(11),p=s.n(d),h=(s(42),s(29)),j=s(105),b=s(106),f=s(107),O=s(5),v=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(t){var n;return Object(a.a)(this,s),(n=e.call(this,t)).state={showRoutes:[],showStops:[],selectedRoute:null,selectedStop:null,t:"init"},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=JSON.parse(JSON.stringify(this.props.routes));this.setState({showRoutes:t})}},{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"08"}),this.state.selectedRoute?Object(O.jsx)("p",{children:this.state.selectedRoute.route}):Object(O.jsx)("p",{children:"null"}),this.state.selectedStop?Object(O.jsx)("p",{children:this.state.selectedStop.name_tc}):Object(O.jsx)("p",{children:"null"}),Object(O.jsx)("h1",{children:this.state.t}),Object(O.jsx)(f.a,{clearOnBlur:!1,options:this.state.showRoutes,getOptionLabel:function(t){return t.orig_tc+" -> "+t.dest_tc},renderInput:function(t){return Object(O.jsx)(b.a,Object(h.a)(Object(h.a)({},t),{},{autocomplete:!1,label:"Route",variant:"outlined"}))},onChange:function(e,s){!function(e){if(e){var s=[];t.props.mappings.filter((function(t){return t.route===e.route&&t.bound===e.bound})).forEach((function(e){var n=t.props.stops.filter((function(t){return e.stop===t.stop}))[0];s.push(n)})),t.setState({showStops:s,stopValue:null,selectedStop:null,selectedRoute:e})}}(s),t.setState({t:"dsa"})},value:this.state.selectedRoute}),Object(O.jsx)(f.a,{options:this.state.showStops,getOptionLabel:function(t){return t.name_tc},renderInput:function(t){return Object(O.jsx)(b.a,Object(h.a)(Object(h.a)({},t),{},{label:"Stop",variant:"outlined"}))},onChange:function(e,s){var n;(n=s)&&t.setState({selectedStop:n})},value:this.state.selectedStop}),Object(O.jsx)(j.a,{disabled:null==this.state.selectedRoute||null==this.state.selectedStop,style:{width:"100%"},variant:"outlined",onClick:function(e){t.props.addTrack(t.state.selectedRoute,t.state.selectedStop),t.setState({selectedRoute:null,selectedStop:null})},children:"Add"})]})}}]),s}(u.a.Component),g=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(t){var n;return Object(a.a)(this,s),(n=e.call(this,t)).state={etas:[]},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=function(){fetch(t.props.track.url).then((function(t){return t.json()})).then((function(e){var s=e.data,n=[],a=Date.now();s.forEach((function(e){if(e.dir===t.props.track.bound){var s=Math.round((new Date(e.eta)-a)/1e3/60);s>=0&&n.push(s)}})),0===n.length&&n.push("no car"),t.setState({etas:n})}))};e(),setInterval((function(){e()}),1e4)}},{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{onContextMenu:function(){t.props.removeTrack(t.props.track.url)},style:{fontSize:"10px",marginBottom:"10px",borderRadius:"12px",aspectRatio:"4/1",width:"100%",maxWidth:"12cm",backgroundColor:"lightsteelblue",display:"flex",flexDirection:"row"},children:[" ",Object(O.jsx)("div",{style:{width:"20%",margin:"2.5%",backgroundColor:"lightgray",borderRadius:"50%",aspectRatio:"1/1",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)("div",{style:{padding:"10%",fontSize:"1.5em",aspectRatio:"1/1"},children:this.props.track.route})}),Object(O.jsxs)("div",{style:{width:"75%",aspectRatio:"3/1"},children:[Object(O.jsx)("div",{style:{aspectRatio:"6/1",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)("div",{style:{fontSize:"1.3em"},children:this.props.track.orig+" -> "+this.props.track.dest})}),Object(O.jsxs)("div",{style:{aspectRatio:"6/1",display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"space-around"},children:[Object(O.jsx)("div",{style:{fontSize:"1.5em"},children:this.props.track.stop}),Object(O.jsx)("div",{style:{width:"30%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:this.state.etas.map((function(t,e){return Object(O.jsx)("div",{style:{backgroundColor:"lightblue",padding:"2.5px 5px",borderRadius:"7.5px"},children:t},e)}))})]})]})]})}}]),s}(u.a.Component),k=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(t){var n;return Object(a.a)(this,s),(n=e.call(this,t)).state={},n}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",padding:"10px 0"},children:null!==this.props.tracks?this.props.tracks.map((function(e){return Object(O.jsx)(g,{track:e,removeTrack:t.props.removeTrack},e.created)})):""})}}]),s}(u.a.Component),m=s(35),x=(s(64),function(t,e,s){var n=window.localStorage,a=n.getItem(e);if(a)console.log("load "+e+" from localStorage"),t.setState(Object(i.a)({},e,JSON.parse(a)));else if(s)console.log("load "+e+" from internet"),function(t){return fetch(t).then((function(t){return t.json()}))}(s).then((function(s){var a=s.data;n.setItem(e,JSON.stringify(a)),t.setState(Object(i.a)({},e,a))}));else{console.log("store empty "+e+" to localStorage");var o=[];t.setState(Object(i.a)({},e,o)),n.setItem(e,JSON.stringify(o))}return Promise.resolve()}),S=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(t){var n;return Object(a.a)(this,s),(n=e.call(this,t)).state={routes:null,stops:null,mappings:null,tracks:null},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;x(this,"routes","https://data.etabus.gov.hk/v1/transport/kmb/route/").then((function(){t.setState({showRoutes:t.state.routes})})),x(this,"stops","https://data.etabus.gov.hk/v1/transport/kmb/stop").then((function(){t.setState({showStops:t.state.stops})})),x(this,"mappings","https://data.etabus.gov.hk/v1/transport/kmb/route-stop"),x(this,"tracks",null)}},{key:"render",value:function(){var t=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("code",{children:" Right click card to remove "}),Object(O.jsx)("br",{}),Object(O.jsx)("code",{children:" Refresh rate: 10 s "})," ",this.state.routes?Object(O.jsx)(v,{addTrack:function(e,s){if(null!==e&&null!==s){var a={created:new Date,route:e.route,orig:e.orig_tc,dest:e.dest_tc,stop:s.name_tc,bound:e.bound,url:"https://data.etabus.gov.hk/v1/transport/kmb/eta/".concat(s.stop,"/").concat(e.route,"/1")},o=!1;t.state.tracks.forEach((function(t){t.url===a.url&&t.bound===a.bound&&(o=!0)})),o?(r="track already exists",m.b.warn(r)):t.setState({tracks:[].concat(Object(n.a)(t.state.tracks),[a])},(function(){window.localStorage.setItem("tracks",JSON.stringify(t.state.tracks))}))}var r},routes:this.state.routes,stops:this.state.stops,mappings:this.state.mappings,children:" "}):"",Object(O.jsx)(k,{tracks:this.state.tracks,removeTrack:function(e){var s,n=JSON.parse(JSON.stringify(t.state.tracks));n.forEach((function(t){t.url===e&&(s=t.route,n.splice(n.indexOf(t),1))})),t.setState({tracks:n},(function(){var e;window.localStorage.setItem("tracks",JSON.stringify(t.state.tracks)),e="removed "+s+" track",m.b.info(e)}))},children:" "})," ",Object(O.jsx)(m.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),s}(u.a.Component);p.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.4ef4007a.chunk.js.map