(window.webpackJsonpcontac=window.webpackJsonpcontac||[]).push([[0],{42:function(e,t,a){e.exports=a(75)},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(6),p=a(7),h=a.n(p),d=a(12),b=a(41),f=a(16),v=a(13),E=a.n(v);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g=r.a.createContext(),j=function(e,t){switch(t.type){case"DELETE_CONTACT":return O({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return O({},e,{contacts:[t.payload].concat(Object(b.a)(e.contacts))});case"UPDATE_CONTACT":return O({},e,{contacts:e.contacts.map(function(e){return e.id==t.payload.id?e=t.payload:e})});default:return e}},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return j(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),N=g.Consumer,k=a(14),w=(a(64),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ShowContactInfo:!1},a.onShowClick=function(e){a.setState({ShowContactInfo:!a.state.ShowContactInfo})},a.onDeleteClick=function(){var e=Object(d.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:e.sent,a({type:"DELETE_CONTACT",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.ShowContactInfo;return r.a.createElement(N,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body m-sm-3"},r.a.createElement("h4",null,r.a.createElement("span",{className:"badge badge-pill badge-danger m-sm-3 "}," ",a," "),n,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down m-sm-3 ",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,s),className:"fas fa-times m-sm-3 ",style:{cursor:"pointer",float:"right",color:"black"}}),r.a.createElement(k.b,{to:"/editContacts/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt  m-sm-3 ",style:{cursor:"pointer",float:"right",color:"red"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email:",c),r.a.createElement("li",{className:"list-group-item"},"Phone:",o)):null)})}}]),t}(n.Component)),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,function(e){var t=e.contacts;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(w,{id:e.id,key:e.id,name:e.name,phone:e.phone,email:e.email})}))})}}]),t}(n.Component);var x=function(e){var t=e.titlePage;return r.a.createElement("nav",{className:"nav navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," home ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.b,{to:"/addcontacts",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"   Add Contact ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.b,{to:"/test",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"Test"))))))},A=a(15),P=a(40),T=a.n(P),D=function(e){var t=e.name,a=e.type,n=e.placeholder,c=e.value,o=e.label,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},o),r.a.createElement("input",{type:a,name:t,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:n,value:c,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var q=D,_=(a(34),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,r.id,c=r.name,o=r.email,l=r.phone,""!=c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!=l){e.next=8;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 8:if(""!=o){e.next=11;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,E.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:""}),a.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.OnChange=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.phone,c=t.email,o=t.errors;return r.a.createElement(N,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"add Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name ...",value:a,onChange:e.OnChange,error:o.name}),r.a.createElement(q,{label:"Eamil",name:"email",type:"email",placeholder:"Enter email ...",value:c,onChange:e.OnChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter phone ...",value:n,onChange:e.OnChange,error:o.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-light btn-block ",value:"add contact"}))))})}}]),t}(n.Component)),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!=c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!=l){e.next=8;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 8:if(""!=o){e.next=11;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:""}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.OnChange=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.phone,c=t.email,o=t.errors;return r.a.createElement(N,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"Edit Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name ...",value:a,onChange:e.OnChange,error:o.name}),r.a.createElement(q,{label:"Eamil",name:"email",type:"email",placeholder:"Enter email ...",value:c,onChange:e.OnChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter phone ...",value:n,onChange:e.OnChange,error:o.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-light btn-block ",value:"Update contact"}))))})}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App for manage contact"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}}]),t}(n.Component),L=(a(73),a(74),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"}," 404 Page not NotFound"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}),U=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component);var B=function(){return r.a.createElement(C,null,r.a.createElement(k.a,{basename:"/contact"},r.a.createElement("div",{className:"App"},r.a.createElement(x,{titlePage:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:S}),r.a.createElement(A.a,{exact:!0,path:"/addcontacts",component:_}),r.a.createElement(A.a,{exact:!0,path:"/editContacts/:id",component:I}),r.a.createElement(A.a,{exact:!0,path:"/about",component:M}),r.a.createElement(A.a,{exact:!0,path:"/test",component:U}),r.a.createElement(A.a,{component:L}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.51f4c40c.chunk.js.map