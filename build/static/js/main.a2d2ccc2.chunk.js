(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),l=t(2),c=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){return r.a.createElement("form",{onSubmit:e.addLine},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.name,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.number,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person,t=e.filter,a=e.deleteLine;return!t||n.name.toLowerCase().includes(t.toLowerCase())?r.a.createElement("div",null,n.name,": ",n.number,r.a.createElement("button",{onClick:function(){return a(n.id)}},"delete")):null},d=function(e){return r.a.createElement("div",null,e.persons.map((function(n){return r.a.createElement(m,{key:n.name,person:n,filter:e.filter,deleteLine:e.deleteLine(n.id)})})))},f=t(3),s=t.n(f),h="https://tranquil-stream-13423.herokuapp.com/api/persons",b=function(){return s.a.get(h).then((function(e){return e.data}))},p=function(e){return s.a.post(h,e).then((function(e){return e.data}))},E=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.message;return null===n?null:n.includes("ERROR")?r.a.createElement("div",{style:{fontSize:24,color:"red",border:"red 2px solid",marginBottom:20,padding:10}},n):r.a.createElement("div",{style:{fontSize:24,color:"green",border:"green 2px solid",marginBottom:20,padding:10}},n)},C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),m=Object(l.a)(o,2),f=m[0],s=m[1],h=Object(a.useState)(""),C=Object(l.a)(h,2),O=C[0],w=C[1],j=Object(a.useState)(""),k=Object(l.a)(j,2),y=k[0],L=k[1],S=Object(a.useState)(null),N=Object(l.a)(S,2),R=N[0],T=N[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var x=function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&(v(n.id),u(t.filter((function(n){return n.id!==e}))),T("".concat(n.name," deleted from the phonebook!")),setTimeout((function(){T(null)}),2e3))},B=function(e,n){E(e,n).then((function(e){var a=t.find((function(n){return n.name===e.name}));a.number=n.number,u(t.map((function(e){return e.id===n.id?a:e}))),T(" Number changed for ".concat(a.name)),setTimeout((function(){T(null)}),2e3)})).catch((function(){T("ERROR: Couldn't find ".concat(n.name," from the server anymore.")),setTimeout((function(){T(null)}),5e3),u(t.filter((function(n){return n.id!==e})))}))};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,{message:R}),r.a.createElement(c,{filter:y,handleFilterChange:function(e){L(e.target.value)}}),r.a.createElement("h2",null,"Add a new number"),"\xa0",r.a.createElement(i,{addLine:function(e){e.preventDefault();var n={name:f,number:O};if(t.some((function(e){return e.name===f}))){if(window.confirm("".concat(f," is already added to the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===f}));B(a.id,n)}}else p(n).then((function(e){T("".concat(e.name," added to the phonebook!")),setTimeout((function(){T(null)}),2e3),u(t.concat(e)),s(""),w("")}))},handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){w(e.target.value)},name:f,number:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:t,filter:y,deleteLine:function(){return x}}))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a2d2ccc2.chunk.js.map