(this["webpackJsonpgoodenergy-show"]=this["webpackJsonpgoodenergy-show"]||[]).push([[0],{50:function(t,e,c){},54:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c(0),r=c.n(i),a=c(19),s=c(9),o=c(23),l=c.n(o),j=(c(50),c(26)),u=c(4);function d(t){var e=t.children;return Object(n.jsx)("div",{className:"page-wrapper",children:e})}var b=c(75),h=c(79),O=c(82),f=c(83),x=c(84),p=c(78),m=c(80),g=c(81),v=c(85),k=function(t){return t>0?"\xa3".concat(t.toFixed(2)):"-"},w=Object(b.a)({table:{},cell:{minWidth:35}});var y=Object(s.b)((function(t){return{cart:t.cart}}))((function(t){var e=t.cart,c=w();return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:"till shadow--0",children:Object(n.jsx)(p.a,{component:v.a,children:Object(n.jsxs)(h.a,{className:c.table,children:[Object(n.jsx)(m.a,{children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{scope:"col",align:"center",children:"Product"}),Object(n.jsx)(x.a,{scope:"col",align:"center",className:c.cell,children:"Price"}),Object(n.jsx)(x.a,{scope:"col",align:"center",children:"Qty"}),Object(n.jsx)(x.a,{scope:"col",align:"center",classes:c.root,children:"Discount"}),Object(n.jsx)(x.a,{scope:"col",align:"center",className:c.cell,children:"Total"})]})}),Object(n.jsx)(O.a,{children:e.cart.map((function(t){return Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{scope:"row",align:"center",children:t.name}),Object(n.jsx)(x.a,{align:"center",children:k(t.price)}),Object(n.jsx)(x.a,{align:"center",children:t.quantity}),Object(n.jsx)(x.a,{align:"center",children:k(t.discount)}),Object(n.jsx)(x.a,{align:"center",children:k(t.price*t.quantity-t.discount)})]})}))}),Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{colSpan:3}),Object(n.jsx)(x.a,{size:"small",children:"Subtotal"}),Object(n.jsx)(x.a,{children:k(e.subtotal)})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{colSpan:3}),Object(n.jsx)(x.a,{size:"small",children:"Discount"}),Object(n.jsx)(x.a,{children:k(e.discount)})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{colSpan:3}),Object(n.jsx)(x.a,{size:"medium",variant:"head",children:"Total"}),Object(n.jsx)(x.a,{size:"medium",variant:"head",children:k(e.total)})]})]})]})})})})})),_=c(22);function N(t){var e=t.unavailible,c=t.stock;return Object(n.jsx)("div",{className:"availible--".concat(e?"out":"in"),children:e?"sorry, out of stock":"".concat(c," in stock")})}var C=function(t){return"\xa3 ".concat(t.toFixed(2))};function S(t){var e=t.price;return Object(n.jsx)("span",{class:"price",children:C(e)})}function T(t){var e=t.handleClick,c=t.quantity,i=t.unavailible,r=t.stock;return Object(n.jsxs)("div",{className:"btn_container",children:[Object(n.jsx)("button",{disabled:i||0===c,onClick:function(){return e(-1)},className:"button btn-quantity--minus",children:"-"}),Object(n.jsx)("span",{className:"quantity",children:c}),Object(n.jsx)("button",{disabled:i||c===r,className:" button btn-quantity--plus",onClick:function(){return e(1)},children:"+"})]})}function q(t){var e=t.handleSubmit,c=t.unavailible;return Object(n.jsx)("button",{onClick:e,disabled:c,className:"button btn-add-to-cart",children:"add to cart"})}var E=Object(s.b)((function(t,e){var c=t.items,n=t.cart;return{item:c[e.id],cart:n}}))((function(t){var e=t.item;return t.cart,Object(n.jsx)("div",{className:"offer",children:e.offer?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",children:Object(n.jsx)("path",{d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"})}),Object(n.jsx)("span",{children:e.offer?e.offer.description:null})]}):null})}));var D=Object(s.b)((function(t){return{items:t.items}}),(function(t){return{handleSubmit:function(e,c){return t(function(t,e){return{type:"ADD_TO_CART",payload:{item:t,quantity:e}}}(e,c))}}}))((function(t){var e=t.item,c=t.handleSubmit,r=Object(i.useState)(1),a=Object(_.a)(r,2),s=a[0],o=a[1],l=Object(i.useState)(!1),j=Object(_.a)(l,2),u=j[0],d=j[1];Object(i.useEffect)((function(){o(1),0===e.stock&&(d(!0),o(0))}),[e.stock]);var b=e.id%5;return Object(n.jsxs)("div",{class:"product shadow--"+b,children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsx)("img",{className:"img",alt:"Product",src:e.imgUrl}),Object(n.jsx)(N,{unavailible:u,stock:e.stock}),Object(n.jsx)(S,{price:e.price}),Object(n.jsx)(T,{stock:e.stock,quantity:s,handleClick:function(t){o(s+t)},unavailible:u}),Object(n.jsx)(q,{handleSubmit:function(){return c(e,s)},unavailible:u||0===s}),Object(n.jsx)(E,{id:e.id})]})}));var z=Object(s.b)((function(t){return{items:t.items}}))((function(t){var e=t.items;return Object(n.jsx)("section",{className:"shop",children:e.map((function(t){return Object(n.jsx)(D,{item:t})}))})}));function F(){return Object(n.jsxs)("section",{className:"message__container shadow--2",children:[Object(n.jsx)("h1",{children:"Thanks for shopping with us"}),Object(n.jsx)("h2",{children:" We hope to hear from you again soon"}),Object(n.jsxs)("div",{className:"links__container",children:[Object(n.jsxs)("p",{children:["view the sourcecode on",Object(n.jsx)("a",{href:"https://github.com/willnjl/coding-challenge-shop",target:"_blank",children:"Github."})]}),Object(n.jsx)("a",{href:"https://github.com/willnjl/coding-challenge-shop",target:"_blank",children:Object(n.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("title",{children:"GitHub icon"}),Object(n.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})]})]})}var I=Object(s.b)((function(t){return{cart:t.cart}}))((function(t){return 0===t.cart.cart.length?Object(n.jsx)("div",{disabled:!0,className:"btn-paynow",children:"checkout"}):Object(n.jsx)(j.b,{to:"/pay",className:"btn-paynow",children:"checkout"})}));var U=c(10),A=Object(U.b)(),B=Object(s.b)(null,(function(t){return{handleClick:function(){A.push("/"),t({type:"RESET"})}}}))((function(t){var e=t.handleClick;return Object(n.jsxs)("footer",{className:"footer__container",children:[Object(n.jsx)("button",{className:"button btn-start-over",onClick:e,children:"start over"}),Object(n.jsxs)("div",{className:"links__container",children:[Object(n.jsxs)("p",{children:["view the source code on",Object(n.jsx)("a",{href:"https://github.com/willnjl/coding-challenge-shop",target:"_blank",children:"Github."})]}),Object(n.jsx)("a",{href:"https://github.com/willnjl/coding-challenge-shop",target:"_blank",children:Object(n.jsxs)("svg",{viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("title",{children:"GitHub icon"}),Object(n.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})]})]})}));var P=function(){return Object(n.jsxs)(j.a,{history:A,children:[Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsxs)(d,{children:[Object(n.jsx)(z,{}),Object(n.jsx)(y,{}),Object(n.jsx)(I,{})]})}),Object(n.jsx)(u.a,{path:"/pay",children:Object(n.jsxs)(d,{children:[Object(n.jsx)(F,{}),Object(n.jsx)(y,{})]})}),Object(n.jsx)(B,{})]})},R=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),n(t),i(t),r(t),a(t)}))},G=[{id:0,name:"toilet roll",price:10.99,imgUrl:"assets/tp.jpeg",stock:0,offer:null},{id:1,name:"bread",price:1.2,imgUrl:"assets/bread.jpeg",stock:5,discount:0,offer:null},{id:2,name:"milk",price:.5,imgUrl:"assets/milk.jpeg",stock:7,offer:null},{id:3,name:"cheese",price:.9,imgUrl:"assets/cheese.jpeg",stock:6,offer:{itemId:3,description:"Two for the price of one!",discount:function(t,e){return(e-e%2)/2*t}}},{id:4,name:"soup",price:.6,imgUrl:"assets/soup.jpeg",stock:5,offer:{itemId:1,description:"Buy soup and get a bread half price!",discount:function(t,e){return t*e*.5}}},{id:5,name:"butter",price:1.2,imgUrl:"assets/butter.jpeg",stock:5,offer:{itemId:5,description:"Butter is a third off!",discount:function(t,e){return t*e/3}}}],M={cart:[],subtotal:0,discount:0,total:0},L=c(17),H=function(t,e){var c=e.item,n=e.quantity,i=Object(L.a)(t);return i[c.id].stock=i[c.id].stock+-1*n,i},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":return H(t,e.payload);default:return t}},W=c(14),X=function(t,e){var c=e.item,n=e.quantity,i=Object(L.a)(t.cart),r=t.cart.findIndex((function(t){return t.id===c.id}));if(-1===r){var a=c.id,s=c.price,o=c.name,l=c.offer;return Object(W.a)(Object(W.a)({},t),{},{cart:[].concat(Object(L.a)(i),[{id:a,name:o,price:s,quantity:n,offer:l,discount:0}])})}return i[r].quantity+=n,Object(W.a)(Object(W.a)({},t),{},{cart:i})},Q=function(t){var e=t.cart;return e.forEach((function(t){if(t.offer){var c=e.find((function(e){return e.id===t.offer.itemId}));c&&(c.discount=t.offer.discount(c.price,t.quantity))}})),Object(W.a)(Object(W.a)({},t),{},{cart:e})},V=function(t){var e=t.cart,c=e.reduce((function(t,e){return t+e.price*e.quantity}),0),n=e.reduce((function(t,e){return t+e.discount}),0),i=c-n;return Object(W.a)(Object(W.a)({},t),{},{subtotal:c,discount:n,total:i})},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":return V(Q(X(t,e.payload)));default:return t}},Y=Object(a.b)({items:J,cart:K}),Z=function(t,e){return"RESET"===e.type&&(t=void 0),Y(t,e)},$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.c,tt=Object(a.d)(Z,$());l.a.render(Object(n.jsx)(s.a,{store:tt,children:Object(n.jsx)(P,{})}),document.getElementById("root")),R()}},[[54,1,2]]]);
//# sourceMappingURL=main.f81616db.chunk.js.map