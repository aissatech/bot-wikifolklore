"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[595],{5595:function(e,n,t){t.r(n);var i=t(1413),r=t(9439),l=t(2791),a=t(9850),o=t(9209),c=t(4294),s=t(7621),u=t(9504),d=t(9585),f=(t(3131),t(4554)),h=t(8096),Z=t(4925),v=t(8406),p=t(3786),x=t(914),j=t(184);n.default=function(){var e=(0,l.useState)([]),n=(0,r.Z)(e,2),t=n[0],b=n[1],m=(0,l.useState)(""),C=(0,r.Z)(m,2),k=C[0],y=C[1],g=(0,l.useState)("folklore"),w=(0,r.Z)(g,2),S=w[0],T=w[1],R=(0,l.useState)(!1),z=(0,r.Z)(R,2),E=z[0],I=z[1],L=(0,l.useState)(!1),W=(0,r.Z)(L,2),A=W[0],F=W[1],O=(0,l.createRef)(null);(0,l.useEffect)((function(){o.Z.fetchCountries(S).then((function(e){var n=(0,i.Z)({},o.Z.countries);e.forEach((function(e){delete n[e.id]}));var t=Object.entries(n).map((function(e){var n=(0,r.Z)(e,2);return{id:n[0],label:n[1]}}));t.sort((function(e,n){return e.label.localeCompare(n.label)})),b(t)}))}),[S]);var P=(0,l.useCallback)((function(){var e=null===O||void 0===O?void 0:O.current;null!==e&&void 0!==e&&e.length&&(k?(I(!1),F(!0),o.Z.createTopic({country:k,title:S,categories:e}).then((function(e){var n=new URL("/fnf/topic/edit",window.location.origin);n.searchParams.append("id",e.id),window.location.href=n})).finally((function(){F(!1)}))):I(!0))}),[O]);return(0,j.jsxs)(s.Z,{children:[(0,j.jsx)(d.Z,{title:"Add Topic",action:(0,j.jsx)(c.Z,{variant:"contained",color:"primary",onClick:P,children:"Create"})}),(0,j.jsxs)(u.Z,{children:[(0,j.jsxs)(f.Z,{children:[(0,j.jsxs)(h.Z,{size:"small",sx:{minWidth:250,m:1},disabled:A,children:[(0,j.jsx)(Z.Z,{id:"topic",children:"Topic"}),(0,j.jsx)(v.Z,{labelId:"topic",id:"topic",value:S,onChange:function(e){return T(e.target.value)},label:"Topic",children:(0,j.jsx)(p.Z,{value:"folklore",children:"Folklore"})})]}),(0,j.jsxs)(h.Z,{size:"small",sx:{minWidth:250,m:1},disabled:A,children:[(0,j.jsx)(Z.Z,{id:"country",children:"Country"}),(0,j.jsx)(v.Z,{labelId:"country",id:"country",error:E,value:k,onChange:function(e){return y(e.target.value)},label:"Country",children:t.map((function(e){return(0,j.jsx)(p.Z,{value:e.id,children:e.label},e.id)}))})]})]}),(0,j.jsx)(a.Z,{categoryListRef:O,disabled:A}),(0,j.jsx)(x.Z,{})]})]})}}}]);
//# sourceMappingURL=595.0c071708.chunk.js.map