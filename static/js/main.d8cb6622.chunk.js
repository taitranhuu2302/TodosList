(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{19:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n(9),a=n.n(r),o=(n(19),n(2)),i=n(3),c=n(5),l=n(4),u=n(7),d=n(6),h="LIST_ALL",j="SAVE_TASK",b="TOGGLE_FORM",p="CLOSE_FORM",m="OPEN_FORM",O="UPDATE_STATUS_TASK",f="DELETE_TASK",x="EDIT_TASK",g="FILTER_TABLE",v=function(){return{type:m}},y=function(){return{type:p}},k=function(t){return{type:x,task:t}},S=n(0),C=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onClear=function(){s.setState({name:"",status:!1})},s.onChange=function(t){var e=t.target,n=e.name,r=e.value;"status"===n&&(r="true"===e.value),s.setState(Object(u.a)({},n,r))},s.onSubmit=function(t){t.preventDefault(),s.props.onSave(s.state),s.onClear(),s.onCloseForm()},s.onCloseForm=function(){s.props.onCloseForm()},s.state={id:"",name:"",status:!1},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.itemEditing&&this.setState({id:this.props.itemEditing.id,name:this.props.itemEditing.name,status:this.props.itemEditing.status})}},{key:"componentWillReceiveProps",value:function(t){t&&t.itemEditing?this.setState({id:t.itemEditing.id,name:t.itemEditing.name,status:t.itemEditing.status}):t.itemEditing||this.setState({id:"",name:"",status:!1})}},{key:"render",value:function(){var t=this.state.id;return this.props.isDisplayForm?Object(S.jsxs)("div",{className:"panel panel-warning",children:[Object(S.jsxs)("div",{className:"panel-heading",children:[Object(S.jsx)("h3",{className:"panel-title",children:""!=t?"C\u1eadp nh\u1eadt":"Th\xeam"}),Object(S.jsx)("button",{className:"btn btn-danger",onClick:this.onCloseForm,children:"x"})]}),Object(S.jsx)("div",{className:"panel-body",children:Object(S.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"T\xean :"}),Object(S.jsx)("input",{type:"text",name:"name",onChange:this.onChange,className:"form-control",value:this.state.name})]}),Object(S.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i :"}),Object(S.jsxs)("select",{className:"form-control",name:"status",onChange:this.onChange,required:"required",value:this.state.status,children:[Object(S.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(S.jsx)("option",{value:!1,children:"\u1ea8n"})]}),Object(S.jsx)("br",{}),Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)("button",{type:"submit",className:"btn btn-warning",children:"Th\xeam"}),"\xa0",Object(S.jsx)("button",{type:"button",onClick:this.onClear,className:"btn btn-danger",children:"H\u1ee7y B\u1ecf"})]})]})})]}):""}}]),n}(s.Component),N=Object(d.b)((function(t){return{isDisplayForm:t.isDisplayForm,itemEditing:t.itemEditing}}),(function(t,e){return{onSave:function(e){t(function(t){return{type:j,task:t}}(e))},onCloseForm:function(){t(y())}}}))(C),T=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,r=e.value;s.setState(Object(u.a)({},n,r))},s.onSearch=function(){s.props.onSearch(s.state.keyword)},s.state={keyword:""},s}return Object(i.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"input-group",children:[Object(S.jsx)("input",{name:"keyword",type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",onChange:this.onChange,value:this.state.keyword}),Object(S.jsx)("span",{className:"input-group-btn",children:Object(S.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.onSearch,children:"T\xecm"})})]})}}]),n}(s.Component),E=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onClick=function(t,e){s.props.onSort(t,e)},s}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(S.jsxs)("div",{className:"dropdown",children:[Object(S.jsx)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:"S\u1eafp X\u1ebfp"}),Object(S.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",children:[Object(S.jsx)("li",{onClick:function(){return t.onClick("name",1)},className:"name"===this.props.sortBy&&1===this.props.sortValue?"bg-success text-white":"",children:Object(S.jsx)("a",{role:"button",children:"T\xean A-Z"})}),Object(S.jsx)("li",{onClick:function(){return t.onClick("name",-1)},className:"name"===this.props.sortBy&&-1===this.props.sortValue?"bg-success text-white":"",children:Object(S.jsx)("a",{role:"button",children:"T\xean Z-A"})}),Object(S.jsx)("li",{onClick:function(){return t.onClick("status",1)},className:"status"===this.props.sortBy&&1===this.props.sortValue?"bg-success text-white":"",children:Object(S.jsx)("a",{role:"button",children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"})}),Object(S.jsx)("li",{onClick:function(){return t.onClick("status",-1)},className:"status"===this.props.sortBy&&-1===this.props.sortValue?"bg-success text-white":"",children:Object(S.jsx)("a",{role:"button",children:"Tr\u1ea1ng Th\xe1i \u1ea8n"})})]})]})}}]),n}(s.Component),F=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"row mt-15",children:[Object(S.jsx)("div",{className:"col-6",children:Object(S.jsx)(T,{onSearch:this.props.onSearch})}),Object(S.jsx)("div",{className:"col-6",children:Object(S.jsx)(E,{onSort:this.props.onSort,sortBy:this.props.sortBy,sortValue:this.props.sortValue})})]})}}]),n}(s.Component),w=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).onUpdateStatus=function(){var e=t.props.task;t.props.onUpdateStatus(e.id)},t.onDelete=function(){t.props.onDeleteTask(t.props.task.id),t.props.onCloseForm()},t.onEditTask=function(){t.props.onOpenForm(),t.props.onEditTask(t.props.task)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.task,n=t.index;return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:n+1}),Object(S.jsx)("td",{children:e.name}),Object(S.jsx)("td",{className:"text-center",children:Object(S.jsx)("span",{className:!0===e.status?"p-1 text-white rounded bg-success":"p-1 text-white rounded bg-danger",onClick:this.onUpdateStatus,children:!0===e.status?"K\xedch ho\u1ea1t":"\u1ea8n"})}),Object(S.jsxs)("td",{className:"text-center",children:[Object(S.jsx)("button",{type:"button",className:"btn btn-warning",onClick:this.onEditTask,children:"S\u1eeda"}),"\xa0",Object(S.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete,children:"X\xf3a"})]})]})}}]),n}(s.Component),D=Object(d.b)((function(t){return{isDisplayForm:t.isDisplayForm}}),(function(t,e){return{onUpdateStatus:function(e){t(function(t){return{type:O,id:t}}(e))},onDeleteTask:function(e){t(function(t){return{type:f,id:t}}(e))},onCloseForm:function(){t(y())},onOpenForm:function(){t(v())},onEditTask:function(e){t(k(e))}}}))(w),_=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,r=e.value;s.setState(Object(u.a)({},n,r))},s.state={filterName:"",filterStatus:-1},s}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.tasks,e=this.state,n=e.filterName,s=e.filterStatus,r=t.map((function(t,e){return Object(S.jsx)(D,{task:t,index:e},e)}));return Object(S.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(S.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{className:"text-center",children:"STT"}),Object(S.jsx)("th",{className:"text-center",children:"T\xean"}),Object(S.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng Th\xe1i"}),Object(S.jsx)("th",{className:"text-center",children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(S.jsxs)("tbody",{children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{}),Object(S.jsx)("td",{children:Object(S.jsx)("input",{type:"text",name:"filterName",value:n,onChange:this.onChange,className:"form-control"})}),Object(S.jsx)("td",{children:Object(S.jsxs)("select",{name:"filterStatus",value:s,onChange:this.onChange,className:"form-control",children:[Object(S.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(S.jsx)("option",{value:0,children:"\u1ea8n"}),Object(S.jsx)("option",{value:1,children:"K\xedch Ho\u1ea1t"})]})}),Object(S.jsx)("td",{})]}),r]})]})})}}]),n}(s.Component),L=Object(d.b)((function(t){return{tasks:t.tasks}}),null)(_),V=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onToggleForm=function(){var t=s.props.itemEditing;t&&""!==t.id?s.props.onOpenForm():s.props.onToggleForm(),s.props.onClearTask({id:"",name:"",status:!1})},s.onCloseForm=function(){s.props.onCloseForm()},s.onOpenForm=function(){s.setState({isDisplayForm:!0})},s.findIndex=function(t){var e=s.state.tasks,n=-1;return e.forEach((function(e,s){if(e.id===t)return n=s})),n},s.onUpdate=function(t){var e=s.state,n=e.tasks,r=e.taskEditing;r=n[s.findIndex(t)];s.setState({taskEditing:r}),s.onOpenForm()},s.onFilter=function(t,e){e=parseInt(e,10),s.setState({filter:{name:t.toLowerCase(),status:e}})},s.onSearch=function(t){s.setState({keyword:t.toLowerCase()})},s.onSort=function(t,e){s.setState({sortBy:t,sortValue:e})},s.state={taskEditing:null,filter:{name:"",status:-1},keyword:"",sortBy:"name",sortValue:1},s}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.sortBy,n=t.sortValue,s=this.props.isDisplayForm;return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)("h1",{children:" Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c "})," ",Object(S.jsx)("hr",{})]}),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:s?"col-4":"",children:[Object(S.jsx)(N,{})," "]}),Object(S.jsxs)("div",{className:s?"col-8":"col-12",children:[Object(S.jsx)("button",{type:"button",onClick:this.onToggleForm,className:"btn btn-primary mb-3 me-3",children:"Th\xeam C\xf4ng Vi\u1ec7c"}),Object(S.jsx)(F,{onSearch:this.onSearch,onSort:this.onSort,sortBy:e,sortValue:n})," ",Object(S.jsx)("div",{className:"row mt-3",children:Object(S.jsx)(L,{onFilter:this.onFilter})})]})]})]})}}]),n}(s.Component),B=Object(d.b)((function(t){return{isDisplayForm:t.isDisplayForm,itemEditing:t.itemEditing}}),(function(t,e){return{onCloseForm:function(){t(y())},onToggleForm:function(){t({type:b})},onClearTask:function(e){t(k(e))},onOpenForm:function(){t(v())}}}))(V),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),r(t),a(t),o(t)}))},A=n(10),U=n(8),K=n(11),M=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},R=function(t,e){var n=-1;return t.forEach((function(t,s){if(t.id===e)return n=s})),n},J=function(){return M()+M()+"-"+M()+M()+"-"+M()},X=JSON.parse(localStorage.getItem("tasks")),H=X||[],P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return t;case j:var n={id:e.task.id,name:e.task.name,status:e.task.status};if(e.task.id)t[r=R(t,e.task.id)]=n;else n.id=J(),t.push(n);return localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);case O:var s=e.id;return t[r=R(t,s)]=Object(U.a)(Object(U.a)({},t[r]),{},{status:!t[r].status}),localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);case f:s=e.id;var r=R(t,s);return t.splice(r,1),localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);default:return t}},q=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return!t;case m:return!0;case p:return!1;default:return t}},G={id:"",name:"",status:!1},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return e.task;default:return t}},Q={name:"",status:-1},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return console.log(e),t;default:return t}},z=Object(A.a)({tasks:P,isDisplayForm:q,itemEditing:Z,filterTable:W}),Y=Object(A.b)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(S.jsx)(d.a,{store:Y,children:Object(S.jsx)(B,{})}),document.getElementById("root")),I()}},[[27,1,2]]]);
//# sourceMappingURL=main.d8cb6622.chunk.js.map