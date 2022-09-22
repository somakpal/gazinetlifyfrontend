(this["webpackJsonperp-crm"]=this["webpackJsonperp-crm"]||[]).push([[16],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(0);var a=n(418),r=n(613),c=n(601),i=n(4);function o(e){e.isUpdateForm;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a.Item,{name:"code",label:"Ledger Code",rules:[{required:!0,message:"Please input Ledger Code!"}],children:Object(i.jsx)(c.a,{})}),Object(i.jsx)(r.a.Item,{name:"name",label:"Ledger Name",rules:[{required:!0,message:"Please input Ledger Name!"}],children:Object(i.jsx)(c.a,{})})]})}function s(){var e={entity:"ledger",PANEL_TITLE:"Ledger Panel",dataTableTitle:"Ledger Lists",ENTITY_NAME:"Ledger",CREATE_ENTITY:"Create Ledger",ADD_NEW_ENTITY:"Add new Ledger",UPDATE_ENTITY:"Update Ledger",DATATABLE_TITLE:"Ledgers List",readColumns:[{title:"Code",dataIndex:"code"},{title:"Name",dataIndex:"name"},{title:"Balance",dataIndex:"balance"}],dataTableColumns:[{dataIndex:"id",title:"",render:function(e){return Object(i.jsx)("a",{onClick:function(e){return e.stopPropagation()},href:"/journal/"+e,children:"Journals"})}},{title:"Code",dataIndex:"code"},{title:"Ledger",dataIndex:"name"},{dataIndex:"balance",title:"Balance",render:function(e,t){return{props:{style:{color:parseInt(e)>0?"black":"red"}},children:Object(i.jsx)("div",{children:e})}}}],searchConfig:{displayLabels:["name"],searchFields:"code,name",outputValue:"id"},entityDisplayLabels:["name"]};return Object(i.jsx)(a.a,{createForm:Object(i.jsx)(o,{}),updateForm:Object(i.jsx)(o,{isUpdateForm:!0}),config:e})}},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return B})),n.d(t,"b",(function(){return k}));var a=n(6),r=n(0),c=n(1),i="OPEN_MODAL",o="CLOSE_MODAL",s="OPEN_ADVANCED_BOX",u="CLOSE_ADVANCED_BOX",l="OPEN_EDIT_BOX",d="CLOSE_EDIT_BOX",p="OPEN_PANEL",j="CLOSE_PANEL",f="COLLAPSE_PANEL",O="OPEN_BOX",b="CLOSE_BOX",x="COLLAPSE_BOX",y="OPEN_READ_BOX",v="CLOSE_READ_BOX",h="COLLAPSE_READ_BOX",m={isModalOpen:!1,isPanelClose:!0,isBoxCollapsed:!1,isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!1};function g(e,t){switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!0});case o:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!1});case p:return Object(c.a)(Object(c.a)({},e),{},{isPanelClose:!1});case j:return Object(c.a)(Object(c.a)({},e),{},{isPanelClose:!0});case f:return Object(c.a)(Object(c.a)({},e),{},{isPanelClose:!e.isPanelClose});case O:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!0});case b:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!1});case x:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!e.isBoxCollapsed});case y:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1,isEditBoxOpen:!1,isReadBoxOpen:!0});case v:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1});case s:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isEditBoxOpen:!1,isAdvancedBoxOpen:!0});case u:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1});case l:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!0});case d:return Object(c.a)(Object(c.a)({},e),{},{isEditBoxOpen:!1});case h:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!e.isReadBoxOpen});default:throw new Error("Unhandled action type: ".concat(t.type))}}var C=function(e){return{modal:{open:function(){e({type:i})},close:function(){e({type:o})}},advancedBox:{open:function(){e({type:s})},close:function(){e({type:u})}},editBox:{open:function(){e({type:l})},close:function(){e({type:d})}},panel:{open:function(){e({type:p})},close:function(){e({type:j})},collapse:function(){e({type:f})}},collapsedBox:{open:function(){e({type:O})},close:function(){e({type:b})},collapse:function(){e({type:x})}},readBox:{open:function(){e({type:y}),console.log("readBox open")},close:function(){e({type:v}),console.log("readBox close")},collapse:function(){e({type:h})}}}},w=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},S=n(4),E=Object(r.createContext)();function B(e){var t=e.children,n=Object(r.useReducer)(g,m),c=Object(a.a)(n,2),i=c[0],o=c[1],s=Object(r.useMemo)((function(){return[i,o]}),[i]);return Object(S.jsx)(E.Provider,{value:s,children:t})}function k(){var e=Object(r.useContext)(E);if(void 0===e)throw new Error("useCrudContext must be used within a CrudContextProvider");var t=Object(a.a)(e,2),n=t[0],c=t[1];return{state:n,crudContextAction:C(c),crudContextSelector:w(n)}}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d}));var a=n(104),r=function(e){return e.crud},c=Object(a.a)([r],(function(e){return e.current})),i=Object(a.a)([r],(function(e){return e.list})),o=function(e){return Object(a.a)(i,(function(t){return t.result.items.find((function(t){return t.id===e}))}))},s=Object(a.a)([r],(function(e){return e.create})),u=Object(a.a)([r],(function(e){return e.update})),l=(Object(a.a)([r],(function(e){return e.read})),Object(a.a)([r],(function(e){return e.delete}))),d=Object(a.a)([r],(function(e){return e.search}))},350:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n(47),c=n(25),i=n.n(c),o=n(54),s=n(361),u={resetState:function(){return function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:o.g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},resetAction:function(e){var t=e.actionType;return function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:o.f,keyState:t,payload:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},currentItem:function(e){var t=e.data;return function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:o.b,payload:Object(a.a)({},t)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},currentAction:function(e){var t=e.actionType,n=e.data;return function(){var e=Object(r.a)(i.a.mark((function e(r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:o.a,keyState:t,payload:Object(a.a)({},n)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},list:function(e){var t=e.entity,n=e.options,a=void 0===n?{page:1}:n;return function(){var e=Object(r.a)(i.a.mark((function e(n){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:o.d,keyState:"list",payload:null}),e.next=3,s.a.list({entity:t,options:a});case 3:!0===(r=e.sent).success?(c={items:r.result,pagination:{current:parseInt(r.pagination.page,10),pageSize:10,showSizeChanger:!1,total:parseInt(r.pagination.count,10)}},console.log("somak RESULT BHaii.."+JSON.stringify(c)),n({type:o.e,keyState:"list",payload:c})):n({type:o.c,keyState:"list",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},create:function(e){var t=e.entity,n=e.jsonData;return function(){var e=Object(r.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:o.d,keyState:"create",payload:null}),e.next=3,s.a.create({entity:t,jsonData:n});case 3:r=e.sent,console.log("somak data result",r.result),!0===r.success?(a({type:o.b,payload:r.result}),a({type:o.e,keyState:"create",payload:r.result})):a({type:o.c,keyState:"create",payload:null});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},read:function(e){var t=e.entity,n=e.id;return function(){var e=Object(r.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:o.d,keyState:"read",payload:null}),e.next=3,s.a.read({entity:t,id:n});case 3:!0===(r=e.sent).success?(a({type:o.b,payload:r.result}),a({type:o.e,keyState:"read",payload:r.result})):a({type:o.c,keyState:"read",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},update:function(e){var t=e.entity,n=e.id,a=e.jsonData;return function(){var e=Object(r.a)(i.a.mark((function e(r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:o.d,keyState:"update",payload:null}),e.next=3,s.a.update({entity:t,id:n,jsonData:a});case 3:!0===(c=e.sent).success?(r({type:o.e,keyState:"update",payload:c.result}),r({type:o.b,payload:c.result})):r({type:o.c,keyState:"update",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},delete:function(e){var t=e.entity,n=e.id;return function(){var e=Object(r.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:o.d,keyState:"delete",payload:null}),e.next=3,s.a.delete({entity:t,id:n});case 3:!0===(r=e.sent).success?(a({type:o.e,keyState:"delete",payload:r.result}),a({type:o.e,keyState:"update",payload:null}),a({type:o.b,payload:null})):a({type:o.c,keyState:"delete",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},search:function(e){var t=e.entity,n=e.options,a=void 0===n?{}:n;return function(){var e=Object(r.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:o.d,keyState:"search",payload:null}),e.next=3,s.a.search({entity:t,options:a});case 3:!0===(r=e.sent).success?n({type:o.e,keyState:"search",payload:r.result}):n({type:o.c,keyState:"search",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return y}));var a=n(6),r=n(0),c=n(5),i=n(1),o="OPEN_MODAL",s="CLOSE_MODAL",u="OPEN_PANEL",l="CLOSE_PANEL",d={create:{isOpen:!1},update:{isOpen:!1},read:{isOpen:!1},recordPayment:{isOpen:!1},deleteModal:{isOpen:!1},dataTableList:{isOpen:!0},last:null};function p(e,t){var n=t.keyState,a=void 0===n?null:n;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{deleteModal:{isOpen:!0}});case s:return Object(i.a)(Object(i.a)({},e),{},{deleteModal:{isOpen:!1}});case u:return Object(i.a)(Object(i.a)({},d),{},Object(c.a)({dataTableList:{isOpen:!1}},a,{isOpen:!0}));case l:return Object(i.a)({},d);default:throw new Error("Unhandled action type: ".concat(t.type))}}var j=function(e){return{modal:{open:function(){e({type:o})},close:function(){e({type:s})}},readPanel:{open:function(){e({type:u,keyState:"read"})},close:function(){e({type:l})}},updatePanel:{open:function(){e({type:u,keyState:"update"})},close:function(){e({type:l})}},createPanel:{open:function(){e({type:u,keyState:"create"})},close:function(){e({type:l})}},recordPanel:{open:function(){e({type:u,keyState:"recordPayment"})},close:function(){e({type:l})}}}},f=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},O=n(4),b=Object(r.createContext)();function x(e){var t=e.children,n=Object(r.useReducer)(p,d),c=Object(a.a)(n,2),i=c[0],o=c[1],s=Object(r.useMemo)((function(){return[i,o]}),[i]);return Object(O.jsx)(b.Provider,{value:s,children:t})}function y(){var e=Object(r.useContext)(b);if(void 0===e)throw new Error("useErpContext must be used within a ErpContextProvider");var t=Object(a.a)(e,2),n=t[0],c=t[1];return{state:n,erpContextAction:j(c),erpContextSelector:f(n)}}},356:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var a=n(247),r=n(91),c=n(4);function i(e){var t=e.isLoading,n=e.children,i=Object(c.jsx)(r.a,{style:{fontSize:24},spin:!0});return Object(c.jsx)(a.a,{indicator:i,spinning:t,children:n})}},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(47),r=n(25),c=n.n(r),i=n(128),o=n.n(i),s=n(127),u=n(129),l=n(143);o.a.defaults.baseURL=s.a,o.a.defaults.withCredentials=!0;var d={create:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.jsonData,console.log("\ud83d\ude80 Create Request \ud83d\ude80 ~ file: request.js ~ line 19 ~ create: ~ jsonData",a),e.prev=2,e.next=5,o.a.post(n+"/create",a);case 5:return r=e.sent,Object(l.a)(r,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",r.data);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",Object(u.a)(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),read:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.id,e.prev=1,e.next=4,o.a.get(n+"/read/"+a);case 4:return r=e.sent,Object(l.a)(r,{notifyOnSuccess:!1,notifyOnFailed:!0}),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.id,r=t.jsonData,console.log("\ud83d\ude80 ~ file: request.js ~ line 34 ~ update: ~ id",a),console.log("\ud83d\ude80 Update Request \ud83d\ude80 ~ file: request.js ~ line 42 ~ update: ~ jsonData",r),e.prev=3,e.next=6,o.a.patch(n+"/update/"+a,r);case 6:return i=e.sent,Object(l.a)(i,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",Object(u.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.id,r=t.options,void 0===r?{}:r,e.prev=1,e.next=4,o.a.delete(n+"/delete/"+a);case 4:return i=e.sent,Object(l.a)(i,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",i.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),filter:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r,i,s,d,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.options,r=void 0===a?{}:a,e.prev=1,i=r.filter?"filter="+r.filter:"",s=r.equal?"&equal="+r.equal:"",d="?".concat(i).concat(s),e.next=7,o.a.get(n+"/filter"+d);case 7:return p=e.sent,Object(l.a)(p,{notifyOnSuccess:!1,notifyOnFailed:!1}),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r,i,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in n=t.entity,a=t.options,r=void 0===a?{}:a,e.prev=1,i="?",r)i+=s+"="+r[s]+"&";return i=i.slice(0,-1),e.next=7,o.a.get(n+"/search"+i);case 7:return d=e.sent,Object(l.a)(d,{notifyOnSuccess:!1,notifyOnFailed:!1}),e.abrupt("return",d.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),list:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r,i,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in n=t.entity,a=t.options,r=void 0===a?{}:a,e.prev=1,i="?",r)i+=s+"="+r[s]+"&";return i=i.slice(0,-1),e.next=7,o.a.get(n+"/list"+i);case 7:return d=e.sent,Object(l.a)(d,{notifyOnSuccess:!1,notifyOnFailed:!1}),e.abrupt("return",d.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.jsonData,r=t.options,void 0===r?{}:r,e.prev=1,e.next=4,o.a.post(n,a);case 4:return i=e.sent,e.abrupt("return",i.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),get:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,e.prev=1,e.next=4,o.a.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),patch:function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,a=t.jsonData,e.prev=1,e.next=4,o.a.patch(n,a);case 4:return r=e.sent,Object(l.a)(r,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Object(u.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),source:function(){var e=o.a.CancelToken.source();return e}},p=d},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(420),n(352);function a(e,t,n){return void 0===n&&(n="|"),t.split(n).map((function(t){return function(e,t){return t.split(".").reduce((function(e,t){return void 0===e||null===e?e:e[t]}),e)}(e,t)})).join(" ")}Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,r=n.length;a<r;++a){var c=n[a];if(null===e)return;if(!(c in e))return;e=e[c]}return e}},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return B}));var a=n(6),r=n(0),c=n(344),i=n(4);var o=function(e){var t=e.children;return Object(i.jsx)(c.a,{children:t})},s=n(103),u=n(326),l=n(621),d=n(610),p=n(611),j=function(e){var t=e.onChange,n=e.title;return Object(i.jsx)("div",{className:"collapseBoxHeader",onClick:t,children:n})},f=function(e){var t=e.isOpen,n=e.children,a=t?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(i.jsx)("div",{className:"TopCollapseBox",children:Object(i.jsx)("div",{style:a,children:Object(i.jsx)(d.a,{children:Object(i.jsxs)(p.a,{span:24,children:[" ",n]})})})})},O=function(e){var t=e.isOpen,n=e.children,a=t?{display:"none",opacity:0}:{display:"block",opacity:1};return Object(i.jsx)("div",{className:"BottomCollapseBox",children:Object(i.jsx)("div",{style:a,children:Object(i.jsx)(d.a,{children:Object(i.jsxs)(p.a,{span:24,children:[" ",n]})})})})};function b(e){var t=e.topContent,n=e.bottomContent,a=e.buttonTitle,r=e.isCollapsed,c=e.onCollapse,o=r?"collapsed":"";return Object(i.jsxs)("div",{className:"panelBox",children:[Object(i.jsx)(f,{isOpen:r,children:t}),Object(i.jsxs)("div",{className:"collapseBox "+o,children:[Object(i.jsx)(j,{title:a,onChange:c}),Object(i.jsx)("div",{className:"whiteBg"}),Object(i.jsx)(O,{isOpen:r,children:n})]})]})}var x=u.a.Sider;function y(e){var t=e.config,n=e.topContent,o=e.bottomContent,u=e.fixHeaderPanel,d=t.ADD_NEW_ENTITY,p=Object(c.b)(),j=p.state,f=p.crudContextAction,O=j.isPanelClose,y=j.isBoxCollapsed,v=f.panel,h=f.collapsedBox,m=Object(r.useState)(O),g=Object(a.a)(m,2),C=g[0],w=g[1],S=Object(r.useState)("-1px"),E=Object(a.a)(S,2),B=E[0],k=E[1],L=Object(r.useState)(0),A=Object(a.a)(L,2),N=A[0],T=A[1],P=Object(r.useState)("20px"),D=Object(a.a)(P,2),_=D[0],I=D[1],F=Object(s.b)(),R=F.state,M=F.appContextAction,q=R.isNavMenuClose,X=M.navMenu;Object(r.useEffect)((function(){var e=[];return O?(T(0),I("20px"),e=setTimeout((function(){k("-1px"),w(O)}),200)):(w(O),k(0),e=setTimeout((function(){T(1),I(0)}),200),q||X.close()),function(){return clearTimeout(e)}}),[O]);return Object(i.jsx)(x,{trigger:Object(i.jsx)(l.a,{className:"trigger"}),width:400,collapsible:!0,collapsed:C,collapsedWidth:"0px",onCollapse:function(){v.collapse()},className:"sidePanel",zeroWidthTriggerStyle:{right:"-50px",top:"15px"},style:{left:B},children:Object(i.jsxs)("div",{className:"sidePanelContent",style:{opacity:N,paddingTop:_},children:[u,Object(i.jsx)(b,{buttonTitle:d,isCollapsed:y,onCollapse:function(){h.collapse()},topContent:n,bottomContent:o})]})})}var v=u.a.Content,h=function(e){var t=e.children,n=Object(c.b)(),o=n.state,u=n.crudContextAction,l=Object(s.b)().state,d=o.isPanelClose,p=l.isNavMenuClose,j=u.panel,f=Object(r.useState)(d),O=Object(a.a)(f,2),b=O[0],x=O[1];return Object(r.useEffect)((function(){var e=[];return d?e=setTimeout((function(){x(d)}),200):x(d),function(){return clearTimeout(e)}}),[d]),Object(r.useEffect)((function(){p||j.close()}),[p]),Object(i.jsx)(v,{className:"whiteBox shadow",style:{padding:"50px 40px",margin:"100px auto",width:b?"100%":"830px",maxWidth:"1000px",flex:"none"},children:t})};function m(e){var t=e.children,n=e.config,a=e.sidePanelTopContent,r=e.sidePanelBottomContent,c=e.fixHeaderPanel;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o,{children:Object(i.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(i.jsx)(y,{config:n,topContent:a,bottomContent:r,fixHeaderPanel:c}),Object(i.jsx)(u.a,{children:Object(i.jsxs)(h,{children:[" ",t]})})]})})})}var g=n(353);var C=function(e){var t=e.children;return Object(i.jsx)(g.a,{children:t})},w=u.a.Content;function S(e){var t=e.children;e.config;return Object(i.jsx)(C,{children:Object(i.jsx)(u.a,{className:"site-layout",children:Object(i.jsx)(w,{className:"whiteBox shadow",style:{padding:"50px 40px",margin:"100px auto",width:"100%",maxWidth:"1100px"},children:t})})})}var E=u.a.Content;function B(e){var t=e.children;return Object(i.jsx)(u.a,{className:"site-layout",children:Object(i.jsx)(E,{style:{padding:"30px 40px",margin:"70px auto",width:"100%",maxWidth:"1100px"},children:t})})}},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(6),r=n(0),c=n(610),i=n(611),o=n(87),s=n(352),u=n.n(s),l=n(344),d=n(349),p=n(362),j=n(4);function f(e){var t=e.config.readColumns,n=Object(o.c)(d.b).result,s=Object(l.b)().state.isReadBoxOpen,f=Object(r.useState)([]),O=Object(a.a)(f,2),b=O[0],x=O[1],y=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(y.current)y.current=!1;else{var e=[];t.map((function(t){var a=t.dataIndex,r=t.title,c=t.isDate||!1,i=Object(p.a)(n,a);i=c?u()(i).format("DD/MM/YYYY"):i,e.push({propsKey:a,label:r,value:i})})),x(e)}}),[n]);var v=s?{display:"block",opacity:1}:{display:"none",opacity:0},h=b.map((function(e){return Object(j.jsxs)(c.a,{gutter:12,children:[Object(j.jsx)(i.a,{className:"gutter-row",span:8,children:Object(j.jsx)("p",{children:e.label})}),Object(j.jsx)(i.a,{className:"gutter-row",span:2,children:Object(j.jsx)("p",{children:" : "})}),Object(j.jsx)(i.a,{className:"gutter-row",span:14,children:Object(j.jsx)("p",{children:e.value})})]},e.propsKey)}));return Object(j.jsx)("div",{style:v,children:h})}},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(6),r=n(0),c=n(87),i=n(350),o=n(344),s=n(349),u=n(613),l=n(110),d=n(356),p=n(4);function j(e){var t=e.config,n=e.formElements,j=t.entity,f=Object(c.b)(),O=Object(c.c)(s.a),b=O.isLoading,x=O.isSuccess,y=Object(o.b)().crudContextAction,v=y.panel,h=y.collapsedBox,m=y.readBox,g=u.a.useForm(),C=Object(a.a)(g,1)[0];return Object(r.useEffect)((function(){x&&(m.open(),h.open(),v.open(),C.resetFields(),f(i.a.resetAction({actionType:"create"})),f(i.a.list({entity:j})))}),[x]),Object(p.jsx)(d.a,{isLoading:b,children:Object(p.jsxs)(u.a,{form:C,layout:"vertical",onFinish:function(e){console.log("\ud83d\ude80 ~ file: index.jsx ~ line 19 ~ onSubmit ~ fieldsValue",e),f(i.a.create({entity:j,jsonData:e}))},children:[n,Object(p.jsx)(u.a.Item,{children:Object(p.jsx)(l.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(1),r=n(6),c=n(0),i=n(352),o=n.n(i),s=n(87),u=n(350),l=n(344),d=n(349),p=n(613),j=n(110),f=n(356),O=n(4);function b(e){var t=e.config,n=e.formElements,i=t.entity,b=Object(s.b)(),x=Object(s.c)(d.g),y=x.current,v=x.isLoading,h=x.isSuccess,m=Object(l.b)(),g=m.state,C=m.crudContextAction,w=C.panel,S=C.collapsedBox,E=C.readBox,B=p.a.useForm(),k=Object(r.a)(B,1)[0];Object(c.useEffect)((function(){if(y){var e=Object(a.a)({},y);console.log("somak master: "+JSON.stringify(e)),e.birthday&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:o()(e.birthday)})),e.date&&(e=Object(a.a)(Object(a.a)({},e),{},{date:o()(e.date)})),e.expiredDate&&(e=Object(a.a)(Object(a.a)({},e),{},{expiredDate:o()(e.expiredDate)})),e.created&&(e=Object(a.a)(Object(a.a)({},e),{},{created:o()(e.created)})),e.updated&&(e=Object(a.a)(Object(a.a)({},e),{},{updated:o()(e.updated)})),k.setFieldsValue(e)}}),[y]),Object(c.useEffect)((function(){h&&(E.open(),S.open(),w.open(),k.resetFields(),b(u.a.resetAction({actionType:"update"})),b(u.a.list({entity:i})))}),[h]);var L=g.isEditBoxOpen?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(O.jsx)("div",{style:L,children:Object(O.jsx)(f.a,{isLoading:v,children:Object(O.jsxs)(p.a,{form:k,layout:"vertical",onFinish:function(e){console.log("\ud83d\ude80 ~ file: index.jsx ~ line 34 ~ onSubmit ~  current.id",y.id);var t=y.id;b(u.a.update({entity:i,id:t,jsonData:e}))},children:[n,Object(O.jsx)(p.a.Item,{style:{display:"inline-block",paddingRight:"5px"},children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Save"})}),Object(O.jsx)(p.a.Item,{style:{display:"inline-block",paddingLeft:"5px"},children:Object(O.jsx)(j.a,{onClick:function(){E.open()},children:"Cancel"})})]})})})}},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(6),r=n(0),c=n(616),i=n(87),o=n(350),s=n(344),u=n(349),l=n(362),d=n(4);function p(e){var t=e.config,n=t.entity,p=t.entityDisplayLabels,j=t.deleteMessage,f=void 0===j?"Do you want delete : ":j,O=t.modalTitle,b=void 0===O?"Remove Item":O,x=Object(i.b)(),y=Object(i.c)(u.c),v=y.current,h=y.isLoading,m=y.isSuccess,g=Object(s.b)(),C=g.state,w=g.crudContextAction,S=C.isModalOpen,E=w.modal,B=Object(r.useState)(""),k=Object(a.a)(B,2),L=k[0],A=k[1];Object(r.useEffect)((function(){if(m&&(E.close(),x(o.a.list({entity:n}))),v){var e=p.map((function(e){return Object(l.a)(v,e)})).join(" ");A(e)}}),[m,v]);return Object(d.jsx)(c.a,{title:b,visible:S,onOk:function(){var e=v.id;x(o.a.delete({entity:n,id:e}))},onCancel:function(){h||E.close()},confirmLoading:h,children:Object(d.jsxs)("p",{children:[f,L]})})}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(6),r=n(0),c=n(624),i=n(565),o=n(85),s=n(578),u=n(87),l=n(350),d=n(344),p=n(349),j=n(4);function f(e){var t=e.config,n=e.onRerender,f=t.entity,O=t.searchConfig,b=t.relations,x=void 0===b?"":b,y=O.displayLabels,v=O.searchFields,h=O.outputValue,m=void 0===h?"id":h,g=Object(u.b)(),C=Object(d.b)().crudContextAction,w=C.panel,S=C.collapsedBox,E=C.readBox,B=Object(u.c)(p.f),k=B.result,L=B.isLoading,A=B.isSuccess,N=Object(r.useState)([]),T=Object(a.a)(N,2),P=T[0],D=T[1],_=Object(r.useState)(void 0),I=Object(a.a)(_,2),F=I[0],R=I[1],M=Object(r.useRef)(!1),q=Object(r.useState)(!1),X=Object(a.a)(q,2),Y=X[0],U=X[1],z=Object(r.useState)(""),W=Object(a.a)(z,2),H=W[0],V=W[1],J=Object(r.useState)(""),K=Object(a.a)(J,2),$=K[0],G=K[1],Q=Object(c.a)((function(){G(H)}),500,[H]),Z=Object(a.a)(Q,2)[1],ee=function(e){return y.map((function(t){return e[t]})).join(" ")};Object(r.useEffect)((function(){if(""!=$){var e={q:$,fields:v,relations:x};g(l.a.search({entity:f,options:e}))}return function(){Z()}}),[$]);return Object(r.useEffect)((function(){M.current&&(A?D(k):(U(!1),R(void 0),D([])))}),[A,k]),Object(j.jsx)(i.a,{loading:L,showSearch:!0,allowClear:!0,placeholder:Object(j.jsx)(s.a,{style:{float:"right",padding:"8px 0"}}),defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,notFoundContent:Y?"... Searching":Object(j.jsx)(o.a,{}),value:F,onSearch:function(e){e&&""!=e&&(M.current=!0,U(!0),D([]),R(void 0),V(e))},style:{width:"100%"},onSelect:function(e){var t=k.find((function(t){return t[m]===e}));g(l.a.currentItem({data:t})),w.open(),S.open(),E.open(),n()},children:P.map((function(e){return Object(j.jsx)(i.a.Option,{value:e[m],children:ee(e)},e[m])}))})}function O(e){var t=e.config,n=Object(r.useState)([0]),c=Object(a.a)(n,2),i=c[0],o=c[1],s=function(){o([i+1])};return i.map((function(e){return Object(j.jsx)(f,{config:t,onRerender:s},e)}))}},391:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(8),r=n(0),c=n(324),i=n(617),o=n(110),s=n(612),u=n(126),l=n(87),d=n(350),p=n(349),j=n(142),f=n(4);function O(e){var t=e.config,n=e.DropDownRowMenu,O=e.AddNewItem,b=t.entity,x=t.relations,y=void 0===x?"":x,v=t.dataTableColumns,h=t.dataTableTitle;v=[].concat(Object(a.a)(v),[{title:"",render:function(e){return Object(f.jsx)(c.a,{overlay:n({row:e}),trigger:["click"],children:Object(f.jsx)(u.a,{style:{cursor:"pointer",fontSize:"24px"}})})}}]);var m=Object(l.c)(p.e),g=m.result,C=m.isLoading,w=g.pagination,S=g.items,E=Object(l.b)(),B=Object(r.useCallback)((function(e){var t={page:e.current||1,relations:y};E(d.a.list({entity:b,options:t}))}),[]);return Object(r.useEffect)((function(){var e={page:w.current||1,relations:y};E(d.a.list({entity:b,options:e}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.a,{onBack:function(){return window.history.back()},title:h,ghost:!1,extra:[Object(f.jsx)(o.a,{onClick:B,children:"Refresh"},"".concat(Object(j.a)())),Object(f.jsx)(O,{config:t},"".concat(Object(j.a)()))],style:{padding:"20px 0px"}}),Object(f.jsx)(s.a,{columns:v,rowKey:function(e){return e.id},dataSource:S,pagination:w,loading:C,onChange:B})]})}},418:function(e,t,n){"use strict";var a=n(6),r=n(0),c=n(610),i=n(611),o=n(110),s=n(622),u=n(608),l=n(620),d=n(387),p=n(388),j=n(389),f=n(385),O=n(390),b=n(87),x=n(349),y=n(350),v=n(344),h=n(368),m=n(323),g=n(606),C=n(142),w=n(391),S=n(4);function E(e){var t=e.config,n=Object(v.b)().crudContextAction,a=n.collapsedBox,r=n.panel,c=t.ADD_NEW_ENTITY;return Object(S.jsx)(o.a,{onClick:function(){r.open(),a.close()},type:"primary",children:c})}function B(e){var t=e.row,n=Object(b.b)(),a=Object(v.b)().crudContextAction,r=a.panel,c=a.collapsedBox,i=a.modal,o=a.readBox,l=a.editBox,d=Object(b.c)(Object(x.d)(t.id));return Object(S.jsxs)(m.a,{style:{width:130},children:[Object(S.jsx)(m.a.Item,{icon:Object(S.jsx)(g.a,{}),onClick:function(){n(y.a.currentItem({data:d})),r.open(),c.open(),o.open()},children:"Show"},"".concat(Object(C.a)())),Object(S.jsx)(m.a.Item,{icon:Object(S.jsx)(u.a,{}),onClick:function(){n(y.a.currentItem({data:d})),n(y.a.currentAction({actionType:"update",data:d})),l.open(),r.open(),c.open()},children:"Edit"},"".concat(Object(C.a)())),Object(S.jsx)(m.a.Item,{icon:Object(S.jsx)(s.a,{}),onClick:function(){n(y.a.currentAction({actionType:"delete",data:d})),i.open()},children:"Delete"},"".concat(Object(C.a)()))]})}function k(e){var t=e.config;return Object(S.jsx)(w.a,{config:t,DropDownRowMenu:B,AddNewItem:E})}function L(e){var t=e.config,n=e.formElements,l=Object(v.b)(),d=l.crudContextAction,j=l.state,O=t.entityDisplayLabels,h=(d.panel,d.collapsedBox,d.modal),m=(d.readBox,d.editBox),g=j.isReadBoxOpen,C=j.isEditBoxOpen,w=Object(b.c)(x.b).result,E=Object(b.b)(),B=Object(r.useState)(""),k=Object(a.a)(B,2),L=k[0],A=k[1];Object(r.useEffect)((function(){if(w){var e=O.map((function(e){return w[e]})).join(" ");A(e)}}),[w]);var N=g||C?{opacity:1}:{opacity:0};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(c.a,{style:N,children:[Object(S.jsx)(i.a,{span:13,children:Object(S.jsx)("p",{style:{marginBottom:"10px"},children:L})}),Object(S.jsxs)(i.a,{span:11,children:[Object(S.jsx)(o.a,{onClick:function(){E(y.a.currentAction({actionType:"delete",data:w})),h.open()},type:"text",icon:Object(S.jsx)(s.a,{}),size:"small",style:{float:"right",marginLeft:"5px"},children:"remove"}),Object(S.jsx)(o.a,{onClick:function(){E(y.a.currentAction({actionType:"update",data:w})),m.open()},type:"text",icon:Object(S.jsx)(u.a,{}),size:"small",style:{float:"right",marginLeft:"0px"},children:"edit"})]}),Object(S.jsx)(i.a,{span:24,children:Object(S.jsx)("div",{className:"line"})}),Object(S.jsx)("div",{className:"space10"})]}),Object(S.jsx)(f.a,{config:t}),Object(S.jsx)(p.a,{config:t,formElements:n})]})}function A(e){var t=e.config,n=Object(v.b)().crudContextAction,a=(n.panel,n.collapsedBox);n.modal,n.readBox,n.editBox;return Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)(c.a,{gutter:12,children:Object(S.jsx)(i.a,{className:"gutter-row",span:21,children:Object(S.jsx)("h1",{style:{fontSize:20,marginBottom:20},children:t.PANEL_TITLE})})}),Object(S.jsxs)(c.a,{gutter:8,children:[Object(S.jsx)(i.a,{className:"gutter-row",span:21,children:Object(S.jsx)(O.a,{config:t})}),Object(S.jsx)(i.a,{className:"gutter-row",span:3,children:Object(S.jsx)(o.a,{onClick:function(){a.close()},block:!0,icon:Object(S.jsx)(l.a,{})})})]})]})}t.a=function(e){var t=e.config,n=e.createForm,a=e.updateForm,c=Object(b.b)();return Object(r.useLayoutEffect)((function(){c(y.a.resetState())}),[]),Object(S.jsxs)(h.a,{config:t,fixHeaderPanel:Object(S.jsx)(A,{config:t}),sidePanelBottomContent:Object(S.jsx)(d.a,{config:t,formElements:n}),sidePanelTopContent:Object(S.jsx)(L,{config:t,formElements:a}),children:[Object(S.jsx)(k,{config:t}),Object(S.jsx)(j.a,{config:t})]})}}}]);
//# sourceMappingURL=Ledger.1ed8d791.chunk.js.map