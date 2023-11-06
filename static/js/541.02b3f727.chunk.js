"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[541],{7541:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(7689),a=n(2791),i=n(3433),s=n(9439),o=n(9850),c=n(2359),u=n(4294),l=n(7621),d=n(9504),f=n(9585),p=n(3131),h=n(4554),x=n(6125),g=n(1131),Z=n(2885),v=n(8096),m=n(4925),j=n(8406),b=n(3786),k=n(3239),y=n(9209),w=(n(914),n(184));var S=function(){for(var e=a.useRef([]),t=(0,a.useState)([]),n=(0,s.Z)(t,2),r=n[0],S=n[1],C=(0,a.useState)(null),T=(0,s.Z)(C,2),R=(T[0],T[1]),L=(0,a.useState)(!1),U=(0,s.Z)(L,2),A=U[0],W=U[1],O=(0,a.useState)("folklore"),I=(0,s.Z)(O,2),N=I[0],z=(I[1],(0,a.useState)("BD")),E=(0,s.Z)(z,2),D=E[0],P=E[1],_=(0,a.useState)(""),M=(0,s.Z)(_,2),G=M[0],J=M[1],H=(0,a.useState)(!0),F=(0,s.Z)(H,2),B=F[0],K=F[1],Y=(0,a.useState)(!1),q=(0,s.Z)(Y,2),V=q[0],$=q[1],Q=(0,a.useState)(!1),X=(0,s.Z)(Q,2),ee=X[0],te=X[1],ne=(0,a.useState)([]),re=(0,s.Z)(ne,2),ae=re[0],ie=re[1],se=(0,a.useState)(null),oe=(0,s.Z)(se,2),ce=oe[0],ue=oe[1],le=a.useRef(!1),de=[],fe=0,pe=Object.entries(y.Z.languages);fe<pe.length;fe++){var he=(0,s.Z)(pe[fe],2),xe=he[0],ge=he[1];de.push({id:xe,label:ge})}de.sort((function(e,t){return e.label.localeCompare(t.label)})),(0,a.useEffect)((function(){y.Z.fetchCountries(N).then((function(e){S((0,i.Z)(e))}))}),[N]),(0,a.useEffect)((function(){D&&N&&(W(!0),$(!0),y.Z.getCategories({country:D,topic:N}).then((function(e){W(!1),ie(e)})).finally((function(e){W(!1),$(!1)})))}),[D,N]);var Ze=(0,a.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current;null!==t&&void 0!==t&&t.length&&(G?(te(!1),D&&t&&N&&(W(!0),ue(null),y.Z.submitTask({target_wiki:G,country:D,categories:t,topic_id:N,task_data:t}).then((function(e){var t=null===e||void 0===e?void 0:e.id;R(t),W(!1),K(!1),ue((0,w.jsx)(p.Z,{Server:y.Z,taskID:t,statusRef:le,setDisabled:W,targetLanguage:G}))})))):te(!0))}),[G]);return(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(f.Z,{title:"Add Task",action:(0,w.jsxs)(u.Z,{variant:"contained",color:"success",onClick:Ze,disabled:A,size:"small",children:[(0,w.jsx)(c.Z,{})," Generate"]})}),(0,w.jsxs)(d.Z,{children:[(0,w.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"left",flexDirection:"row"},children:[(0,w.jsxs)(v.Z,{sx:{width:300},size:"small",children:[(0,w.jsx)(m.Z,{children:"Country"}),(0,w.jsx)(j.Z,{fullWidth:!0,disabled:A,value:D,label:"Country",onChange:function(e){return e.target.value&&P(e.target.value)},children:r.map((function(e){return(0,w.jsx)(b.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,w.jsxs)(v.Z,{sx:{width:300,ml:.5},size:"small",children:[(0,w.jsx)(m.Z,{children:"Target Wiki"}),(0,w.jsx)(j.Z,{fullWidth:!0,disabled:A,error:ee,value:G,label:"Target Wiki",onChange:function(e){return e.target.value&&J(e.target.value)},children:de.map((function(e){return(0,w.jsx)(b.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,w.jsx)(u.Z,{variant:"contained",disabled:A,onClick:function(e){return K(!B)},size:"small",sx:{padding:1},children:B?(0,w.jsx)(Z.Z,{}):(0,w.jsx)(g.Z,{})})]}),(0,w.jsx)(x.Z,{in:B,children:V?(0,w.jsx)(k.Z,{}):(0,w.jsx)(o.Z,{disabled:A,categoryListRef:e,Server:y.Z,initialCategories:ae})}),ce]})]})},C=n(1413),T=n(4165),R=n(5861),L=n(1072),U=n(7),A=n(2460),W=n(1637),O=n(3518),I=n(1087),N=n(2419),z=function(){var e=(0,a.useState)(null),t=(0,s.Z)(e,2),n=t[0],r=t[1],i=(0,a.useState)(0),o=(0,s.Z)(i,2),c=(o[0],o[1]),u=(0,a.useState)(0),l=(0,s.Z)(u,2),d=l[0],f=l[1],p=(0,a.useState)(0),x=(0,s.Z)(p,2),g=x[0],Z=x[1],v=(0,a.useState)(!1),m=(0,s.Z)(v,2),j=m[0],b=m[1];return(0,a.useEffect)((function(){b(!0),y.Z.getMe().then((function(e){r(e.username),f(e.task_count),c(e.id),Z(e.article_count)})).finally((function(){b(!1)}))}),[]),j?(0,w.jsx)(k.Z,{}):(0,w.jsxs)(h.Z,{children:[(0,w.jsxs)("h2",{children:["Welcome, ",n]}),(0,w.jsxs)("h3",{children:["Task Count : ",d]}),(0,w.jsxs)("h3",{children:["Total Article Count : ",g]})]})},E=function(e){var t=e.id,n=function(){var e=(0,R.Z)((0,T.Z)().mark((function e(){var n,r;return(0,T.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.exportResult(t,"csv");case 2:n=e.sent,(r=document.createElement("a")).href=URL.createObjectURL(new Blob([n],{type:"text/csv"})),r.download="result.csv",r.click();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,w.jsx)(u.Z,{variant:"contained",color:"primary",onClick:n,children:(0,w.jsx)(O.Z,{})})},D=[{field:"id",headerName:"ID",maxWidth:70,flex:1},{field:"status",headerName:"Status",maxWidth:100,flex:1},{field:"country",headerName:"Country",flex:1},{field:"targetwiki",headerName:"Language",minWidth:100,flex:1},{field:"download",headerName:"Download",renderCell:function(e){return e.value}},{field:"category_count",headerName:"Category",maxWidth:100,flex:1},{field:"article_count",headerName:"Article",maxWidth:100,flex:1}],P=function(){var e=(0,a.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1],i=(0,a.useState)(!1),o=(0,s.Z)(i,2),c=o[0],u=o[1];new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"medium"});return(0,a.useEffect)((function(){u(!0),y.Z.getTasks().then((function(e){r(e.map((function(e){return(0,C.Z)((0,C.Z)({},e),{},{country:y.Z.countries[e.country]||e.country,download:"done"==e.status&&(0,w.jsx)(E,{id:e.id}),targetwiki:y.Z.languages[e.target_wiki]||e.target_wiki})})))})).finally((function(){u(!1)}))}),[]),(0,w.jsx)(L._$,{rows:n,columns:D,initialState:{pagination:{paginationModel:{pageSize:10}}},sx:{"& .MuiDataGrid-row":{cursor:"pointer",color:"white"},"& .Mui-hovered":{color:"black"},"& .Mui-selected":{color:"black"},"& .task-done":{backgroundColor:U.Z[800],color:"white"},"& .task-done:hover":{backgroundColor:U.Z[600],color:"white"},"& .task-pending":{backgroundColor:W.Z[300],color:"black"},"& .task-failed":{backgroundColor:A.Z[300]}},rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,rowSelection:!1,getRowClassName:function(e){return"task-".concat(e.row.status," .task")},loading:c})},_=function(){var e=function(){return(0,w.jsx)(I.rU,{to:"/fnf/task/create",children:(0,w.jsxs)(u.Z,{variant:"contained",color:"success",children:[(0,w.jsx)(N.Z,{})," New List"]})})};return(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(f.Z,{action:(0,w.jsx)(e,{})}),(0,w.jsxs)(d.Z,{children:[(0,w.jsx)(z,{}),(0,w.jsx)(P,{})]})]})},M=n(5527),G=n(165),J=function(){var e=(0,a.useState)([]),t=(0,s.Z)(e,2),n=(t[0],t[1],(0,a.useCallback)((function(e){window.confirm("\n        Are you want to hide your username from all the records?\n        This action is irreversible and it would:\n        - Hide your username from all the records\n        - Keep your central ID intact\n        - log you out from now. You need to login again to continue\n        ")&&y.Z.updateMe({username:"Hidden"}).then((function(e){fetch("/user/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){window.location.href="/"}))}))}),[]));return(0,w.jsx)(M.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:(0,w.jsxs)(u.Z,{variant:"contained",color:"error",size:"small",sx:{padding:1,m:1},onClick:n,children:[(0,w.jsx)(G.Z,{})," \xa0 Hide my username"]})})},H=n(890),F=n(7122),B=n(2216);function K(e){var t=e.user,n=[];return y.Z.hasAccess(t.rights,y.Z.RIGHTS.TASK)&&n.push((0,w.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"row",p:1,alignItems:"center",justifyContent:"center"},component:"fieldset",children:[(0,w.jsx)("legend",{children:"List Generation"}),(0,w.jsxs)(u.Z,{variant:"contained",color:"primary",size:"small",sx:{padding:1,m:1},component:I.rU,to:"/fnf/task/create",children:[(0,w.jsx)(N.Z,{})," \xa0 Add Task"]}),(0,w.jsxs)(u.Z,{variant:"contained",color:"secondary",size:"small",sx:{padding:1,m:1},component:I.rU,to:"/fnf/task",children:[(0,w.jsx)(c.Z,{})," \xa0 List Tasks"]})]},"task")),y.Z.hasAccess(t.rights,y.Z.RIGHTS.TOPIC)&&n.push((0,w.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"row",p:1,alignItems:"center",justifyContent:"center"},component:"fieldset",children:[(0,w.jsx)("legend",{children:"Topic Management"}),(0,w.jsxs)(u.Z,{variant:"contained",color:"primary",size:"small",sx:{padding:1,m:1},component:I.rU,to:"/fnf/topic/create",children:[(0,w.jsx)(N.Z,{})," \xa0 Create New Topic"]}),(0,w.jsxs)(u.Z,{variant:"contained",color:"secondary",size:"small",sx:{padding:1,m:1},component:I.rU,to:"/fnf/topic",children:[(0,w.jsx)(c.Z,{})," \xa0 See All Topics"]})]},"topic")),y.Z.hasAccess(t.rights,y.Z.RIGHTS.STATS)&&n.push((0,w.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"row",p:1,alignItems:"center",justifyContent:"center"},component:"fieldset",children:[(0,w.jsx)("legend",{children:"User Management"}),(0,w.jsxs)(u.Z,{variant:"contained",color:"primary",size:"small",sx:{padding:1,m:1},component:I.rU,to:"/fnf/setting",children:[(0,w.jsx)(F.Z,{})," \xa0 Settings"]}),(0,w.jsxs)(u.Z,{variant:"contained",color:"secondary",size:"small",sx:{padding:1,m:1},component:I.rU,to:"/fnf/user",children:[(0,w.jsx)(B.Z,{})," \xa0 See All Users"]})]},"user")),(0,w.jsxs)(M.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:[(0,w.jsxs)(H.Z,{variant:"title",component:"h2",sx:{textAlign:"center",m:2},children:["Welcome ",t.username,",",(0,w.jsx)("br",{})]}),(0,w.jsx)(H.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:"Introducing a powerful tool that identifies articles in the English Wikipedia that are absent from your native language Wikipedia. You can customize your selection criteria, and our tool will provide you with a table displaying the missing articles along with suggested titles. You also have the option to download the list in both CSV and wikitables formats. Explore the gap and enhance your language's Wikipedia with ease."}),(0,w.jsx)("hr",{}),n]})}var Y=(0,a.lazy)((function(){return n.e(595).then(n.bind(n,5595))})),q=(0,a.lazy)((function(){return n.e(720).then(n.bind(n,1720))})),V=(0,a.lazy)((function(){return n.e(780).then(n.bind(n,2780))})),$=(0,a.lazy)((function(){return n.e(388).then(n.bind(n,8388))})),Q=(0,a.lazy)((function(){return Promise.all([n.e(384),n.e(408)]).then(n.bind(n,4408))}));y.Z.init();var X=function(e){var t=e.user,n=(0,w.jsxs)(r.AW,{path:"topic/*",children:[(0,w.jsx)(r.AW,{path:"create",element:(0,w.jsx)(Y,{})}),(0,w.jsx)(r.AW,{path:"edit",element:(0,w.jsx)(q,{})}),(0,w.jsx)(r.AW,{path:"*",element:(0,w.jsx)(V,{})})]}),a=(0,w.jsxs)(r.AW,{path:"user/*",children:[(0,w.jsx)(r.AW,{path:"edit",element:(0,w.jsx)(Q,{user:t})}),(0,w.jsx)(r.AW,{path:"*",element:(0,w.jsx)($,{user:t})})]});return(0,w.jsxs)(r.Z5,{children:[y.Z.hasAccess(t.rights,y.Z.RIGHTS.TOPIC)&&n,y.Z.hasAccess(t.rights,y.Z.RIGHTS.GRANT)&&a,(0,w.jsxs)(r.AW,{path:"task/*",children:[(0,w.jsx)(r.AW,{path:"create",element:(0,w.jsx)(S,{})}),(0,w.jsx)(r.AW,{path:"*",element:(0,w.jsx)(_,{})})]}),(0,w.jsx)(r.AW,{path:"setting",element:(0,w.jsx)(J,{})}),(0,w.jsx)(r.AW,{path:"*",element:(0,w.jsx)(K,{user:t})})]})}},9209:function(e,t,n){var r=n(7762),a=n(4165),i=n(5861),s=n(5671),o=n(3144),c="tk-lang",u="tk-country",l=function(){function e(){(0,s.Z)(this,e)}return(0,o.Z)(e,null,[{key:"init",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.languages&&e.countries){t.next=20;break}if(localStorage.getItem(c)&&localStorage.getItem(u)){t.next=18;break}return t.t0=localStorage,t.t1=u,t.t2=JSON,t.next=7,fetch("/api/country").then((function(e){return e.json()})).then((function(e){return e.data}));case 7:return t.t3=t.sent,t.t4=t.t2.stringify.call(t.t2,t.t3),t.t0.setItem.call(t.t0,t.t1,t.t4),t.t5=localStorage,t.t6=c,t.t7=JSON,t.next=15,fetch("/api/language").then((function(e){return e.json()})).then((function(e){return e.data}));case 15:t.t8=t.sent,t.t9=t.t7.stringify.call(t.t7,t.t8),t.t5.setItem.call(t.t5,t.t6,t.t9);case 18:e.languages=JSON.parse(localStorage.getItem(c)||"{}"),e.countries=JSON.parse(localStorage.getItem(u)||"{}");case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"hasAccess",value:function(e,t){return(e&t)==t}},{key:"addSubCategories",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var i,s,o,c,u,l,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=[],s=(0,r.Z)(n),t.prev=2,s.s();case 4:if((o=s.n()).done){t.next=18;break}return c=o.value,console.info("Adding subcategories for",c.title),u=new URL("api/subcat/"+c.title,e.baseURL),t.next=10,fetch(u.toString());case 10:return l=t.sent,t.next=13,l.json();case 13:d=t.sent,i=i.concat(d.data),c.subcat=!1;case 16:t.next=4;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),s.e(t.t0);case 23:return t.prev=23,s.f(),t.finish(23);case 26:return t.abrupt("return",i);case 27:case"end":return t.stop()}}),t,null,[[2,20,23,26]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCategories",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.country,i=n.topic,s=new URL("api/topic/".concat(i.split("/")[0],"/").concat(r,"/categories"),e.baseURL),t.next=4,fetch(s.toString());case 4:return o=t.sent,t.next=7,o.json();case 7:if(!(c=t.sent).success){t.next=12;break}return t.abrupt("return",c.data);case 12:return console.log("Error",c.data),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"submitTask",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return i=t.sent,t.next=6,i.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchCountries",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n+"/country",e.baseURL),t.next=3,fetch(r.toString());case 3:return i=t.sent,t.next=6,i.json();case 6:if(!(s=t.sent).success){t.next=13;break}return o=s.data,c=o.map((function(e){return{id:e.id.split("/")[1],label:e.title}})),t.abrupt("return",c);case 13:return console.log("Error",s.data),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"exportResult",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,c=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:"json",i=new URL("api/task/".concat(n,"/export/")+r,e.baseURL),t.next=4,fetch(i.toString());case 4:return s=t.sent,t.next=7,s.json();case 7:return o=t.sent,t.abrupt("return",o.data);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTask",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task/"+n,e.baseURL),t.next=3,fetch(r.toString());case 3:return i=t.sent,t.next=6,i.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTasks",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/task",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getMe",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/user/me",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCountryMap",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/country",e.baseURL),t.next=3,fetch(n).then((function(e){return e.json()}));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"searchCategory",value:function(e,t){var n="",r=!1;function s(){return o.apply(this,arguments)}function o(){return(o=(0,i.Z)((0,a.Z)().mark((function i(){var s,o,c,u,l;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=n){a.next=2;break}return a.abrupt("return",e([]));case 2:return s=new URL("https://en.wikipedia.org/w/api.php"),o=new URLSearchParams({action:"query",format:"json",list:"prefixsearch",formatversion:"2",pssearch:n,pslimit:"10",psnamespace:"14",origin:"*"}),s.search=o.toString(),a.next=7,fetch(s.toString());case 7:return c=a.sent,a.next=10,c.json();case 10:return u=a.sent,l=u.query.prefixsearch.map((function(e){return{id:e.pageid,title:e.title}})),r=!1,t(!1),a.abrupt("return",e(l));case 15:case"end":return a.stop()}}),i)})))).apply(this,arguments)}return function(e){var a;t(!0),n=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value,0==r?(r=!0,setTimeout(s,1e3),console.log("Queued")):console.log("Already queued")}}},{key:"createTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:return i=t.sent,console.log(i),t.abrupt("return",i.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n,e.baseURL),t.next=3,fetch(r.toString()).then((function(e){return e.json()}));case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,i=n.categories,s=new URL("api/topic/"+r,e.baseURL),t.next=4,fetch(s.toString(),{method:"POST",body:JSON.stringify({categories:i}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateMe",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.username,i=n.rights,s=new URL("api/user/me",e.baseURL),t.next=4,fetch(s.toString(),{method:"POST",body:JSON.stringify({username:r,rights:i}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/user/",e.baseURL),t.next=3,fetch(n.toString()).then((function(e){return e.json()}));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"toggleAccess",value:function(e,t){return e&t?e&~t:e|t}},{key:"getUser",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/user/"+n,e.baseURL),t.next=3,fetch(r.toString()).then((function(e){return e.json()}));case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateUser",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,i=n.username,s=n.rights,o=new URL("api/user/"+r,e.baseURL),t.next=4,fetch(o.toString(),{method:"POST",body:JSON.stringify({username:i,rights:s}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return c=t.sent,t.abrupt("return",c.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"deleteTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n,e.baseURL),t.next=3,fetch(r.toString(),{method:"DELETE"}).then((function(e){return e.json()}));case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}();l.baseURL=new URL(window.location.origin),l.languages=null,l.countries=null,l.RIGHTS={TASK:1,STATS:2,CATEGORY:4,TOPIC:8,GRANT:16,REVOKE:32},t.Z=l},3131:function(e,t,n){var r=n(4165),a=n(5861),i=n(9439),s=n(3239),o=n(4294),c=n(2791),u=n(2419),l=n(7391),d=n(4554),f=n(3518),p=n(1292),h=n(7621),x=n(9585),g=n(9504),Z=n(6125),v=n(258),m=n(9209),j=n(5289),b=n(5661),k=n(9157),y=n(7123),w=n(890),S=n(1072),C=n(184),T=function(e){var t=e.open,n=e.onClose,r=e.englishTitle,a=e.suggestedTargetTitle,s=e.languageCode,u=e.action,d=c.useState(a),f=(0,i.Z)(d,2),p=f[0],h=f[1];(0,c.useEffect)((function(){h(a)}),[a]);var x={title:"",targetURL:"",buttonName:""};return"translate"==u?(x.title="Translate",x.targetURL="https://".concat(s,".wikipedia.org/w/index.php?title=Special:ContentTranslation&campaign=fnf&from=en&page=").concat(r,"&to=").concat(s,"&targettitle=").concat(p),x.buttonName="Translate"):(x.title="Create",x.targetURL="https://".concat(s,".wikipedia.org/w/index.php?title=").concat(p,"&campaign=fnf&from=en&page=").concat(r,"&to=").concat(p,"&action=edit"),x.buttonName="Create"),(0,C.jsxs)(j.Z,{open:t,onClose:n,children:[(0,C.jsx)(b.Z,{children:x.title}),(0,C.jsxs)(k.Z,{children:[(0,C.jsx)(w.Z,{variant:"body1",gutterBottom:!0,children:(0,C.jsxs)("b",{children:["English : ",(0,C.jsx)("a",{href:"https://en.wikipedia.org/wiki/"+r,target:"_blank",style:{textDecoration:"none"},children:r})]})}),(0,C.jsx)(l.Z,{id:"outlined-multiline-static",label:"Target Title",multiline:!0,value:p,fullWidth:!0,onChange:function(e){return h(e.target.value)},sx:{mt:1}})]}),(0,C.jsxs)(y.Z,{children:[(0,C.jsx)(o.Z,{sx:{mr:1},onClick:function(){return n(null)},color:"secondary",variant:"contained",size:"small",children:"Cancel"}),(0,C.jsx)(o.Z,{color:"primary",variant:"contained",component:"a",size:"small",href:x.targetURL,target:"_blank",autoFocus:!0,children:x.buttonName})]})]})},R=[{field:"id",headerName:"ID",maxWidth:70,flex:1,hideable:!1},{field:"action",headerName:"Action",flex:1,minWidth:150,hideable:!1,renderCell:function(e){return e.value}},{field:"title",headerName:"Title",flex:1,hideable:!1,minWidth:300},{field:"target",headerName:"Target",flex:1,minWidth:300}],L=function(e){var t=e.data,n=e.targetLanguage,r=(e.taskID,c.useState(null)),a=(0,i.Z)(r,2),s=a[0],l=a[1],d=c.useState(!1),f=(0,i.Z)(d,2),p=f[0],h=f[1],x=c.useState(""),g=(0,i.Z)(x,2),Z=g[0],m=g[1],j=c.useState(""),b=(0,i.Z)(j,2),k=b[0],y=b[1],w=function(e){l(e.currentTarget.dataset.action),m(e.currentTarget.dataset.src),y(e.currentTarget.dataset.target),h(!0)},L=(0,c.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e,t){return{id:t+1,title:null===e||void 0===e?void 0:e.title,wikidata:null===e||void 0===e?void 0:e.wikidata,target:null===e||void 0===e?void 0:e.target,action:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o.Z,{variant:"contained",color:"primary",size:"small","data-action":"create","data-src":null===e||void 0===e?void 0:e.title,"data-target":null===e||void 0===e?void 0:e.target,onClick:w,children:(0,C.jsx)(u.Z,{})}),(0,C.jsx)(o.Z,{variant:"contained",sx:{ml:1},color:"primary",size:"small","data-action":"translate","data-src":null===e||void 0===e?void 0:e.title,"data-target":null===e||void 0===e?void 0:e.target,onClick:w,children:(0,C.jsx)(v.Z,{})})]})}}))}),[t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(T,{open:p,action:s,onClose:function(){return h(!1)},suggestedTargetTitle:k,englishTitle:Z,languageCode:n}),(0,C.jsx)(S._$,{rows:L,columns:R,pageSize:50,rowsPerPageOptions:[50],checkboxSelection:!1,disableSelectionOnClick:!0,initialState:{pagination:{paginationModel:{pageSize:25}}},sx:{width:"100%"}})]})},U=function(e){var t=e.data;return(0,C.jsx)(l.Z,{id:"outlined-multiline-static",label:null,multiline:!0,rows:4,value:t,fullWidth:!0,onClick:function(e){return e.target.select()}})};t.Z=function(e){var t=e.taskID,n=e.statusRef,u=e.setDisabled,l=e.targetLanguage,v=c.useState([]),j=(0,i.Z)(v,2),b=j[0],k=j[1],y=c.useState(""),w=(0,i.Z)(y,2),S=w[0],T=w[1],R=c.useState(!1),A=(0,i.Z)(R,2),W=A[0],O=A[1],I=c.useState(null),N=(0,i.Z)(I,2),z=N[0],E=N[1],D=c.useState(null),P=(0,i.Z)(D,2),_=(P[0],P[1]),M=c.useState(0),G=(0,i.Z)(M,2),J=G[0],H=G[1],F=c.useState(0),B=(0,i.Z)(F,2),K=B[0],Y=B[1],q=c.useState(""),V=(0,i.Z)(q,2),$=V[0],Q=V[1],X=c.useState(0),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1],re=c.useState(!1),ae=(0,i.Z)(re,2),ie=ae[0],se=ae[1];n.current=ie;var oe=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.getTask(t);case 2:"pending"!=(n=e.sent).status?(se(!1),u(!1),H(0),"done"==n.status?le():"failed"==n.status&&alert("Task Failed")):(se(!0),u(!0),H(setTimeout(oe,1e3)),k([])),Y(n.article_count),Q(n.last_category),ne(n.category_count);case 7:case"end":return e.stop()}}),e)}))),[t]),ce=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,t){var n=document.createElement("a");n.download="results-".concat(e,".csv"),n.href=URL.createObjectURL(new Blob([t],{type:"application/csv"})),n.click(),n.remove()},z){e.next=7;break}return e.next=4,m.Z.exportResult(t,"csv");case 4:return a=e.sent,E(a),e.abrupt("return",n(t,a));case 7:return e.abrupt("return",n(t,z));case 9:case"end":return e.stop()}}),e)}))),[t]),ue=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=4;break}O(!1),e.next=13;break;case 4:if(S){e.next=12;break}return e.next=7,m.Z.exportResult(t,"wikitext");case 7:n=e.sent,O(!0),T(n),e.next=13;break;case 12:O(!0);case 13:case"end":return e.stop()}}),e)}))),[t,W]),le=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Export table called"),e.next=3,m.Z.exportResult(t,"json");case 3:n=e.sent,k(n),_(JSON.stringify(n));case 6:case"end":return e.stop()}}),e)}))),[t]);c.useEffect((function(){return oe(),function(){clearTimeout(J),H(0)}}),[t,oe]);var de=(0,C.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center","& > *":{m:1}},children:[(0,C.jsxs)(o.Z,{variant:"contained",color:"primary",onClick:ue,disabled:ie,size:"small",sx:{mr:1},children:[(0,C.jsx)(p.Z,{})," Wiki"]}),(0,C.jsxs)(o.Z,{variant:"contained",color:"primary",onClick:ce,disabled:ie,size:"small",children:[(0,C.jsx)(f.Z,{})," CSV"]})]}),fe=(0,C.jsxs)(d.Z,{sx:{fontSize:"16px"},children:["Article count : ",K,(0,C.jsx)("br",{}),"Processed Count : ",te,(0,C.jsx)("br",{}),"Last Category: ",$,(0,C.jsx)("br",{})]});return(0,C.jsxs)(h.Z,{sx:{m:"5px"},children:[(0,C.jsx)(x.Z,{action:de,title:fe}),(0,C.jsx)(g.Z,{children:ie?(0,C.jsx)(s.Z,{}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z.Z,{in:W,children:(0,C.jsx)(U,{data:S})}),b&&(0,C.jsx)(L,{data:b,targetLanguage:l,taskID:t})]})})]})}},9850:function(e,t,n){var r=n(1413),a=n(9439),i=n(5527),s=n(570),o=n(4294),c=n(493),u=n(2791),l=n(5712),d=n(2419),f=n(7391),p=n(5021),h=n(9900),x=n(7247),g=n(4721),Z=n(4554),v=n(9209),m=n(184),j=function(e){var t=e.category,n=e.onRemove,r=e.onSubCategory;return(0,m.jsxs)(p.ZP,{children:[(0,m.jsx)(h.Z,{sx:{padding:"5px"},primary:null===t||void 0===t?void 0:t.title}),(0,m.jsx)(o.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return r(null===t||void 0===t?void 0:t.id)},children:(0,m.jsx)(s.Z,{})}),(0,m.jsx)(o.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return n(null===t||void 0===t?void 0:t.id)},children:(0,m.jsx)(x.Z,{})})]})},b=function(e){var t=e.onAdd,n=e.disabled,i=u.useState(!1),s=(0,a.Z)(i,2),c=s[0],p=s[1],h=u.useState([]),x=(0,a.Z)(h,2),g=x[0],j=x[1],b=u.useState(""),k=(0,a.Z)(b,2),y=k[0],w=k[1],S=u.useCallback(v.Z.searchCategory(j,p),[]),C=u.useCallback((function(e){var n=g.find((function(e){return e.title===y}));n&&(t(n),w(""))}),[g,y]);return(0,m.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"100%"},children:[(0,m.jsx)(l.Z,{id:"new-category",options:g,disabled:n,size:"small",clearOnBlur:!0,clearOnEscape:!0,loading:c,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},sx:{width:"100%",maxWidth:"400px",marginRight:"10px",marginLeft:"10px"},renderInput:function(e){return(0,m.jsx)(f.Z,(0,r.Z)((0,r.Z)({},e),{},{disabled:n,onInput:S,onSelect:function(e){return w(e.target.value)},label:"Add Additional Category"}))}}),(0,m.jsx)(o.Z,{disabled:n,variant:"contained",color:"success",onClick:C,children:(0,m.jsx)(d.Z,{})})]})};t.Z=function(e){var t=e.categoryListRef,n=e.initialCategories,s=e.disabled,o=void 0!==s&&s,l=u.useState({}),d=(0,a.Z)(l,2),f=d[0],p=d[1],h=u.useMemo((function(){return Object.values(f)}),[f]),x=u.useCallback((function(e){e&&f[e]&&(delete f[e],p((0,r.Z)({},f)))}),[f]),Z=u.useCallback((function(e){e&&(f[e.id]||(f[e.id]=e,p((0,r.Z)({},f))))}),[f]),k=u.useCallback((function(e){console.log("onSubCategory",e);var t=f[e];t&&v.Z.addSubCategories([t]).then((function(e){e.forEach((function(e){f[e.id]=e})),p((0,r.Z)({},f))}))}),[f]);return u.useEffect((function(){t&&(t.current=h)}),[h,t]),u.useEffect((function(){null!==n&&void 0!==n&&n.length&&p(null===n||void 0===n?void 0:n.reduce((function(e,t){return e[t.id]=t,e}),{}))}),[n]),(0,m.jsxs)(i.Z,{elevation:0,children:[(0,m.jsx)(c.Z,{dense:!0,children:null===h||void 0===h?void 0:h.map((function(e,t){return(0,m.jsxs)(u.Fragment,{children:[(0,m.jsx)(j,{category:e,onRemove:x,onSubCategory:k}),(0,m.jsx)(g.Z,{})]},"cat"+t)}))}),(0,m.jsx)("br",{}),(0,m.jsx)(b,{onAdd:Z,disabled:o})]})}}}]);
//# sourceMappingURL=541.02b3f727.chunk.js.map