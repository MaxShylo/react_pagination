(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(3),r=c(1),l=(c(10),c(2)),s=c.n(l);function o(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=o(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){n(t-1)},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})})})),Object(j.jsx)("li",{className:s()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){n(t+1)},children:"\xbb"})})]})},u=o(1,42).map((function(e){return"Item ".concat(e)})),b=function(){var e=Object(r.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(5),l=Object(i.a)(n,2),s=l[0],o=l[1],b=Object(r.useState)(42),h=Object(i.a)(b,1)[0],p=u.filter((function(e,a){return a>=c*s-s&&a<=c*s-1&&e})),m="Page ".concat(c)+" (items ".concat(u.indexOf(p[0])+1)+" - ".concat(u.indexOf(p[p.length-1])+1)+" of ".concat(h,")");return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:m}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:s,onChange:function(e){o(+e.target.value),t(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h,perPage:s,currentPage:c,onPageChange:t}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1eadb85e.chunk.js.map