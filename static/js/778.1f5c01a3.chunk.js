"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[778],{1448:function(e,t,n){var r=n(5527),a=n(4294),s=n(165),i=n(1355),u=n(184);t.Z=function(){return(0,u.jsx)(r.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:(0,u.jsxs)(a.Z,{variant:"contained",color:"error",size:"small",sx:{padding:1,m:1},onClick:function(e){window.confirm("\n        Are you want to hide your username from all the records?\n        This action is irreversible and it would:\n        - Hide your username from all the records\n        - Keep your central ID intact\n        - log you out from now. You need to login again to continue\n        ")&&i.Z.updateMe({username:"Hidden"}).then((function(e){fetch("/user/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){window.location.href="/user/login"}))}))},children:[(0,u.jsx)(s.Z,{})," \xa0 Hide my username"]})})}},5187:function(e,t,n){var r=n(3433),a=n(9439),s=n(6691),i=n(2359),u=n(4294),o=n(7621),c=n(9504),l=n(9585),d=n(2791),f=n(9498),p=n(4554),h=n(6125),x=n(1131),Z=n(2885),v=n(8096),g=n(4925),b=n(8406),m=n(3786),j=n(3239),k=n(1355),y=n(184);t.Z=function(){for(var e=d.useRef([]),t=(0,d.useState)([]),n=(0,a.Z)(t,2),w=n[0],S=n[1],C=(0,d.useState)(null),R=(0,a.Z)(C,2),L=(R[0],R[1]),U=(0,d.useState)(!1),T=(0,a.Z)(U,2),O=T[0],W=T[1],N=(0,d.useState)("folklore"),A=(0,a.Z)(N,2),E=A[0],z=(A[1],(0,d.useState)("BD")),I=(0,a.Z)(z,2),_=I[0],D=I[1],P=(0,d.useState)(""),J=(0,a.Z)(P,2),M=J[0],B=J[1],F=(0,d.useState)(!0),q=(0,a.Z)(F,2),H=q[0],G=q[1],$=(0,d.useState)(!1),K=(0,a.Z)($,2),V=K[0],Y=K[1],Q=(0,d.useState)(!1),X=(0,a.Z)(Q,2),ee=X[0],te=X[1],ne=(0,d.useState)([]),re=(0,a.Z)(ne,2),ae=re[0],se=re[1],ie=(0,d.useState)(null),ue=(0,a.Z)(ie,2),oe=ue[0],ce=ue[1],le=d.useRef(!1),de=[],fe=0,pe=Object.entries(k.Z.languages);fe<pe.length;fe++){var he=(0,a.Z)(pe[fe],2),xe=he[0],Ze=he[1];de.push({id:xe,label:Ze})}de.sort((function(e,t){return e.label.localeCompare(t.label)})),(0,d.useEffect)((function(){k.Z.fetchCountries(E).then((function(e){S((0,r.Z)(e))}))}),[E]),(0,d.useEffect)((function(){_&&E&&(W(!0),Y(!0),k.Z.getCategories({country:_,topic:E}).then((function(e){W(!1),se(e)})).finally((function(e){W(!1),Y(!1)})))}),[_,E]);var ve=(0,d.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current;null!==t&&void 0!==t&&t.length&&(M?(te(!1),_&&t&&E&&(W(!0),ce(null),k.Z.submitTask({target_wiki:M,country:_,categories:t,topic_id:E,task_data:t}).then((function(e){var t=null===e||void 0===e?void 0:e.id;L(t),W(!1),G(!1),ce((0,y.jsx)(f.Z,{Server:k.Z,taskID:t,statusRef:le,setDisabled:W,targetWiki:M}))})))):te(!0))}),[M]);return(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(l.Z,{title:"Add Task",action:(0,y.jsxs)(u.Z,{variant:"contained",color:"success",onClick:ve,disabled:O,size:"small",children:[(0,y.jsx)(i.Z,{})," Generate"]})}),(0,y.jsxs)(c.Z,{children:[(0,y.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"left",flexDirection:"row"},children:[(0,y.jsxs)(v.Z,{sx:{width:300},size:"small",children:[(0,y.jsx)(g.Z,{children:"Country"}),(0,y.jsx)(b.Z,{fullWidth:!0,disabled:O,value:_,label:"Country",onChange:function(e){return e.target.value&&D(e.target.value)},children:w.map((function(e){return(0,y.jsx)(m.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,y.jsxs)(v.Z,{sx:{width:300,ml:.5},size:"small",children:[(0,y.jsx)(g.Z,{children:"Target Wiki"}),(0,y.jsx)(b.Z,{fullWidth:!0,disabled:O,error:ee,value:M,label:"Target Wiki",onChange:function(e){return e.target.value&&B(e.target.value)},children:de.map((function(e){return(0,y.jsx)(m.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,y.jsx)(u.Z,{variant:"contained",disabled:O,onClick:function(e){return G(!H)},size:"small",sx:{padding:1},children:H?(0,y.jsx)(Z.Z,{}):(0,y.jsx)(x.Z,{})})]}),(0,y.jsx)(h.Z,{in:H,children:V?(0,y.jsx)(j.Z,{}):(0,y.jsx)(s.Z,{disabled:O,categoryListRef:e,Server:k.Z,initialCategories:ae})}),oe]})]})}},2211:function(e,t,n){n.a(e,(async function(e,r){try{var a=n(1413),s=n(4165),i=n(5861),u=n(9439),o=n(4294),c=n(7621),l=n(9504),d=n(9585),f=n(2791),p=(n(9498),n(4554)),h=n(3239),x=n(2368),Z=n(7),v=n(2460),g=n(1637),b=n(1355),m=n(3518),j=n(1087),k=n(2419),y=n(184),w=await b.Z.getCountryMap(),S=function(){var e=(0,f.useState)(null),t=(0,u.Z)(e,2),n=t[0],r=t[1],a=(0,f.useState)(0),s=(0,u.Z)(a,2),i=(s[0],s[1]),o=(0,f.useState)(0),c=(0,u.Z)(o,2),l=c[0],d=c[1],x=(0,f.useState)(0),Z=(0,u.Z)(x,2),v=Z[0],g=Z[1],m=(0,f.useState)(!1),j=(0,u.Z)(m,2),k=j[0],w=j[1];return(0,f.useEffect)((function(){w(!0),b.Z.getMe().then((function(e){r(e.username),d(e.task_count),i(e.id),g(e.article_count)})).finally((function(){w(!1)}))}),[]),k?(0,y.jsx)(h.Z,{}):(0,y.jsxs)(p.Z,{children:[(0,y.jsxs)("h2",{children:["Welcome, ",n]}),(0,y.jsxs)("h3",{children:["Task Count : ",l]}),(0,y.jsxs)("h3",{children:["Total Article Count : ",v]})]})},C=function(e){var t=e.id,n=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.exportResult(t,"csv");case 2:n=e.sent,(r=document.createElement("a")).href=URL.createObjectURL(new Blob([n],{type:"text/csv"})),r.download="result.csv",r.click();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,y.jsx)(o.Z,{variant:"contained",color:"primary",onClick:n,children:(0,y.jsx)(m.Z,{})})},R=[{field:"id",headerName:"ID",maxWidth:70,flex:1},{field:"status",headerName:"Status",maxWidth:100,flex:1},{field:"topic_id",headerName:"Topic",flex:1},{field:"country",headerName:"Country",flex:1},{field:"category_count",headerName:"Category",maxWidth:100,flex:1},{field:"article_count",headerName:"Article",maxWidth:100,flex:1},{field:"download",headerName:"Download",renderCell:function(e){return e.value}}],L=function(){var e=(0,f.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1],s=(0,f.useState)(!1),i=(0,u.Z)(s,2),o=i[0],c=i[1],l=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"medium"});return(0,f.useEffect)((function(){c(!0),b.Z.getTasks().then((function(e){r(e.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{country:w[e.country]||e.country,created_at:l.format(new Date(e.created_at)),download:"done"==e.status&&(0,y.jsx)(C,{id:e.id})})})))})).finally((function(){c(!1)}))}),[]),(0,y.jsx)(x._$,{rows:n,columns:R,pageSize:5,sx:{"& .MuiDataGrid-row":{cursor:"pointer",color:"white"},"& .Mui-hovered":{color:"black"},"& .Mui-selected":{color:"black"},"& .task-done":{backgroundColor:Z.Z[800],color:"white"},"& .task-done:hover":{backgroundColor:Z.Z[600],color:"white"},"& .task-pending":{backgroundColor:g.Z[300],color:"black"},"& .task-failed":{backgroundColor:v.Z[300]}},rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,rowSelection:!1,getRowClassName:function(e){return"task-".concat(e.row.status," .task")},loading:o})};t.Z=function(){var e=function(){return(0,y.jsx)(j.rU,{to:"create",children:(0,y.jsxs)(o.Z,{variant:"contained",color:"success",children:[(0,y.jsx)(k.Z,{})," New"]})})};return(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(d.Z,{action:(0,y.jsx)(e,{})}),(0,y.jsxs)(l.Z,{children:[(0,y.jsx)(S,{}),(0,y.jsx)(L,{})]})]})},r()}catch(U){r(U)}}),1)},1355:function(e,t,n){var r=n(7762),a=n(4165),s=n(5861),i=n(5671),u=n(3144),o="tk-lang",c="tk-country",l=function(){function e(){(0,i.Z)(this,e)}return(0,u.Z)(e,null,[{key:"init",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.languages&&e.countries){t.next=20;break}if(localStorage.getItem(o)&&localStorage.getItem(c)){t.next=18;break}return t.t0=localStorage,t.t1=c,t.t2=JSON,t.next=7,fetch("/api/country").then((function(e){return e.json()})).then((function(e){return e.data}));case 7:return t.t3=t.sent,t.t4=t.t2.stringify.call(t.t2,t.t3),t.t0.setItem.call(t.t0,t.t1,t.t4),t.t5=localStorage,t.t6=o,t.t7=JSON,t.next=15,fetch("/api/language").then((function(e){return e.json()})).then((function(e){return e.data}));case 15:t.t8=t.sent,t.t9=t.t7.stringify.call(t.t7,t.t8),t.t5.setItem.call(t.t5,t.t6,t.t9);case 18:e.languages=JSON.parse(localStorage.getItem(o)||"{}"),e.countries=JSON.parse(localStorage.getItem(c)||"{}");case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addSubCategories",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var s,i,u,o,c,l,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=[],i=(0,r.Z)(n),t.prev=2,i.s();case 4:if((u=i.n()).done){t.next=18;break}return o=u.value,console.info("Adding subcategories for",o.title),c=new URL("api/subcat/"+o.title,e.baseURL),t.next=10,fetch(c.toString());case 10:return l=t.sent,t.next=13,l.json();case 13:d=t.sent,s=s.concat(d.data),o.subcat=!1;case 16:t.next=4;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),i.e(t.t0);case 23:return t.prev=23,i.f(),t.finish(23);case 26:return t.abrupt("return",s);case 27:case"end":return t.stop()}}),t,null,[[2,20,23,26]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCategories",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.country,s=n.topic,i=new URL("api/topic/".concat(s.split("/")[0],"/").concat(r,"/categories"),e.baseURL),t.next=4,fetch(i.toString());case 4:return u=t.sent,t.next=7,u.json();case 7:if(!(o=t.sent).success){t.next=12;break}return t.abrupt("return",o.data);case 12:return console.log("Error",o.data),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"submitTask",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return s=t.sent,t.next=6,s.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchCountries",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n+"/country",e.baseURL),t.next=3,fetch(r.toString());case 3:return s=t.sent,t.next=6,s.json();case 6:if(!(i=t.sent).success){t.next=13;break}return u=i.data,o=u.map((function(e){return{id:e.id.split("/")[1],label:e.title}})),t.abrupt("return",o);case 13:return console.log("Error",i.data),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"exportResult",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u,o=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"json",s=new URL("api/task/".concat(n,"/export/")+r,e.baseURL),t.next=4,fetch(s.toString());case 4:return i=t.sent,t.next=7,i.json();case 7:return u=t.sent,t.abrupt("return",u.data);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTask",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task/"+n,e.baseURL),t.next=3,fetch(r.toString());case 3:return s=t.sent,t.next=6,s.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTasks",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/task",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getMe",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/user/me",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCountryMap",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/country",e.baseURL),t.next=3,fetch(n).then((function(e){return e.json()}));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"searchCategory",value:function(e,t){var n="",r=!1;function i(){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)((0,a.Z)().mark((function s(){var i,u,o,c,l;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=n){a.next=2;break}return a.abrupt("return",e([]));case 2:return i=new URL("https://en.wikipedia.org/w/api.php"),u=new URLSearchParams({action:"query",format:"json",list:"prefixsearch",formatversion:"2",pssearch:n,pslimit:"10",psnamespace:"14",origin:"*"}),i.search=u.toString(),a.next=7,fetch(i.toString());case 7:return o=a.sent,a.next=10,o.json();case 10:return c=a.sent,l=c.query.prefixsearch.map((function(e){return{id:e.pageid,title:e.title}})),r=!1,t(!1),a.abrupt("return",e(l));case 15:case"end":return a.stop()}}),s)})))).apply(this,arguments)}return function(e){var a;t(!0),n=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value,0==r?(r=!0,setTimeout(i,1e3)):console.log("Already queued")}}},{key:"createTopic",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:return s=t.sent,console.log(s),t.abrupt("return",s.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTopic",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n,e.baseURL),t.next=3,fetch(r.toString()).then((function(e){return e.json()}));case 3:return s=t.sent,t.abrupt("return",s.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateTopic",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,s=n.categories,i=new URL("api/topic/"+r,e.baseURL),t.next=4,fetch(i.toString(),{method:"POST",body:JSON.stringify({categories:s}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return u=t.sent,t.abrupt("return",u.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateMe",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.username,s=n.rights,i=new URL("api/user/me",e.baseURL),t.next=4,fetch(i.toString(),{method:"POST",body:JSON.stringify({username:r,rights:s}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return u=t.sent,t.abrupt("return",u.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}();l.baseURL=new URL(window.location.origin),l.languages=null,l.countries=null,t.Z=l},9778:function(e,t,n){n.a(e,(async function(e,r){try{n.r(t);var a=n(7689),s=n(2791),i=n(5187),u=n(2211),o=n(1448),c=n(1355),l=n(184),d=e([u]);u=(d.then?(await d)():d)[0];var f=(0,s.lazy)((function(){return n.e(490).then(n.bind(n,7490))})),p=(0,s.lazy)((function(){return n.e(477).then(n.bind(n,7477))})),h=(0,s.lazy)((function(){return n.e(984).then(n.bind(n,984))}));c.Z.init();t.default=function(){var e=h,t=(0,l.jsxs)(a.AW,{path:"/topic/*",children:[(0,l.jsx)(a.AW,{path:"create",element:(0,l.jsx)(f,{})}),(0,l.jsx)(a.AW,{path:"edit",element:(0,l.jsx)(p,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(h,{})})]});return(0,l.jsxs)(a.Z5,{children:[t,(0,l.jsxs)(a.AW,{path:"task/*",children:[(0,l.jsx)(a.AW,{path:"create",element:(0,l.jsx)(i.Z,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(u.Z,{})})]}),(0,l.jsx)(a.AW,{path:"/setting",element:(0,l.jsx)(o.Z,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(e,{})})]})},r()}catch(x){r(x)}}))},9498:function(e,t,n){var r=n(9439),a=n(4165),s=n(5861),i=n(5671),u=n(3144),o=n(136),c=n(7277),l=n(3239),d=n(4294),f=n(2791),p=n(7391),h=n(4554),x=n(3518),Z=n(1292),v=n(7621),g=n(9585),b=n(9504),m=n(6125),j=n(1355),k=n(2368),y=n(184),w=[{field:"id",headerName:"ID",maxWidth:30,flex:1,hideable:!1},{field:"title",headerName:"Title",flex:1,hideable:!1},{field:"target",headerName:"Target",flex:1}],S=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.map((function(e,t){return{id:t+1,title:null===e||void 0===e?void 0:e.title,wikidata:null===e||void 0===e?void 0:e.wikidata,target:null===e||void 0===e?void 0:e.target}}));return(0,y.jsx)(k._$,{rows:n,columns:w,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,sx:{width:"100%"}})},C=function(e){var t=e.data;return(0,y.jsx)(p.Z,{id:"outlined-multiline-static",label:null,multiline:!0,rows:4,value:t,fullWidth:!0,onClick:function(e){return e.target.select()}})};f.Component;t.Z=function(e){var t=e.taskID,n=e.statusRef,i=e.setDisabled,u=f.useState([]),o=(0,r.Z)(u,2),c=o[0],p=o[1],k=f.useState(""),w=(0,r.Z)(k,2),R=w[0],L=w[1],U=f.useState(!1),T=(0,r.Z)(U,2),O=T[0],W=T[1],N=f.useState(null),A=(0,r.Z)(N,2),E=A[0],z=A[1],I=f.useState(null),_=(0,r.Z)(I,2),D=(_[0],_[1]),P=f.useState(0),J=(0,r.Z)(P,2),M=J[0],B=J[1],F=f.useState(0),q=(0,r.Z)(F,2),H=q[0],G=q[1],$=f.useState(""),K=(0,r.Z)($,2),V=K[0],Y=K[1],Q=f.useState(0),X=(0,r.Z)(Q,2),ee=X[0],te=X[1],ne=f.useState(!1),re=(0,r.Z)(ne,2),ae=re[0],se=re[1];n.current=ae;var ie=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Z.getTask(t);case 2:"pending"!=(n=e.sent).status?(se(!1),i(!1),B(0),"done"==n.status?ce():"failed"==n.status&&alert("Task Failed")):(se(!0),i(!0),B(setTimeout(ie,1e3))),G(n.article_count),Y(n.last_category),te(n.category_count);case 7:case"end":return e.stop()}}),e)}))),[t]),ue=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,t){var n=document.createElement("a");n.download="results-".concat(e,".csv"),n.href=URL.createObjectURL(new Blob([t],{type:"application/csv"})),n.click(),n.remove()},E){e.next=7;break}return e.next=4,j.Z.exportResult(t,"csv");case 4:return r=e.sent,z(r),e.abrupt("return",n(t,r));case 7:return e.abrupt("return",n(t,E));case 9:case"end":return e.stop()}}),e)}))),[t]),oe=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=4;break}W(!1),e.next=13;break;case 4:if(R){e.next=12;break}return e.next=7,j.Z.exportResult(t,"wikitext");case 7:n=e.sent,W(!0),L(n),e.next=13;break;case 12:W(!0);case 13:case"end":return e.stop()}}),e)}))),[t,O]),ce=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Z.exportResult(t,"json");case 2:n=e.sent,p(n),D(JSON.stringify(n));case 5:case"end":return e.stop()}}),e)}))),[t]);f.useEffect((function(){return ie(),function(){clearTimeout(M),B(0)}}),[t,ie]);var le=(0,y.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center","& > *":{m:1}},children:[(0,y.jsxs)(d.Z,{variant:"contained",color:"primary",onClick:oe,disabled:ae,size:"small",children:[(0,y.jsx)(Z.Z,{})," WikiText"]}),(0,y.jsxs)(d.Z,{variant:"contained",color:"primary",onClick:ue,disabled:ae,size:"small",children:[(0,y.jsx)(x.Z,{})," CSV"]})]}),de=(0,y.jsxs)(h.Z,{sx:{fontSize:"16px"},children:["Article count : ",H,(0,y.jsx)("br",{}),"Processed Count : ",ee,(0,y.jsx)("br",{}),"Last Category: ",V,(0,y.jsx)("br",{})]});return(0,y.jsxs)(v.Z,{sx:{m:"5px"},children:[(0,y.jsx)(g.Z,{action:le,title:de}),(0,y.jsx)(b.Z,{children:ae?(0,y.jsx)(l.Z,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.Z,{in:O,children:(0,y.jsx)(C,{data:R})}),(null===c||void 0===c?void 0:c.length)>0&&(0,y.jsx)(S,{data:c})]})})]})}},6691:function(e,t,n){var r=n(1413),a=n(9439),s=n(5527),i=n(570),u=n(4294),o=n(493),c=n(2791),l=n(3766),d=n(2419),f=n(7391),p=n(5021),h=n(9900),x=n(7247),Z=n(4721),v=n(4554),g=n(1355),b=n(184),m=function(e){var t=e.category,n=e.onRemove,r=e.onSubCategory;return(0,b.jsxs)(p.ZP,{children:[(0,b.jsx)(h.Z,{sx:{padding:"5px"},primary:null===t||void 0===t?void 0:t.title}),(0,b.jsx)(u.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return r(null===t||void 0===t?void 0:t.id)},children:(0,b.jsx)(i.Z,{})}),(0,b.jsx)(u.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return n(null===t||void 0===t?void 0:t.id)},children:(0,b.jsx)(x.Z,{})})]})},j=function(e){var t=e.onAdd,n=e.disabled,s=c.useState(!1),i=(0,a.Z)(s,2),o=i[0],p=i[1],h=c.useState([]),x=(0,a.Z)(h,2),Z=x[0],m=x[1],j=c.useState(""),k=(0,a.Z)(j,2),y=k[0],w=k[1],S=c.useCallback(g.Z.searchCategory(m,p),[]),C=c.useCallback((function(e){var n=Z.find((function(e){return e.title===y}));n&&(t(n),w(""))}),[Z,y]);return(0,b.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"100%"},children:[(0,b.jsx)(l.Z,{id:"new-category",options:Z,disabled:n,size:"small",clearOnBlur:!0,clearOnEscape:!0,loading:o,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},sx:{width:"100%",maxWidth:"400px",marginRight:"10px",marginLeft:"10px"},renderInput:function(e){return(0,b.jsx)(f.Z,(0,r.Z)((0,r.Z)({},e),{},{disabled:n,onInput:S,onSelect:function(e){return w(e.target.value)},label:"Add Category"}))}}),(0,b.jsx)(u.Z,{disabled:n,variant:"contained",color:"success",onClick:C,children:(0,b.jsx)(d.Z,{})})]})};t.Z=function(e){var t=e.categoryListRef,n=e.initialCategories,i=e.disabled,u=void 0!==i&&i,l=c.useState({}),d=(0,a.Z)(l,2),f=d[0],p=d[1],h=c.useMemo((function(){return Object.values(f)}),[f]),x=c.useCallback((function(e){e&&f[e]&&(delete f[e],p((0,r.Z)({},f)))}),[f]),v=c.useCallback((function(e){e&&(f[e.id]||(f[e.id]=e,p((0,r.Z)({},f))))}),[f]),k=c.useCallback((function(e){console.log("onSubCategory",e);var t=f[e];t&&g.Z.addSubCategories([t]).then((function(e){e.forEach((function(e){f[e.id]=e})),p((0,r.Z)({},f))}))}),[f]);return c.useEffect((function(){t&&(t.current=h)}),[h,t]),c.useEffect((function(){null!==n&&void 0!==n&&n.length&&p(null===n||void 0===n?void 0:n.reduce((function(e,t){return e[t.id]=t,e}),{}))}),[n]),(0,b.jsxs)(s.Z,{elevation:0,children:[(0,b.jsx)(o.Z,{dense:!0,children:null===h||void 0===h?void 0:h.map((function(e,t){return(0,b.jsxs)(c.Fragment,{children:[(0,b.jsx)(m,{category:e,onRemove:x,onSubCategory:k}),(0,b.jsx)(Z.Z,{})]},"cat"+t)}))}),(0,b.jsx)("br",{}),(0,b.jsx)(j,{onAdd:v,disabled:u})]})}}}]);
//# sourceMappingURL=778.1f5c01a3.chunk.js.map