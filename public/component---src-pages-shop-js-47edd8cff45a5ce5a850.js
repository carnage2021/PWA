(self.webpackChunkindiaohyes=self.webpackChunkindiaohyes||[]).push([[690],{3658:function(e,t,a){"use strict";var n=a(7294),l=a(5444),r="inline-block px-16 py-4 bg-violet text-white rounded-xl col-span-full justify-self-center shadow-md hover:bg-violet-dark transition-colors";t.Z=function(e){return e.isLink?n.createElement(l.Link,{className:r,to:e.to||"/"},e.children):n.createElement("button",{type:e.type||"button",className:r+" "+(e.className||""),onClick:function(t){var a;return null===(a=e.onClick)||void 0===a?void 0:a.call(e,t)}},e.children)}},5480:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){return n.createElement("div",{className:"flex justify-center items-center "+e.className},n.createElement("div",{className:"animate-spin h-20 w-20 rounded-full border-8",style:{borderTopColor:"rgba(31, 41, 55, .9)"}}))}},1527:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var n=a(5861),l=a(7757),r=a.n(l),c=a(7294),s=a(5444),o=a(6263),i=a(4877),m=function(e){var t=e.data,a=e.setCart;return c.createElement("div",{className:"bg-cream flex items-center rounded-xl py-2 px-4"},c.createElement("img",{src:o.J+"/images/products/test.png",alt:"PRODUCT",className:"h-20"}),c.createElement("div",{className:"ml-4 mr-auto"},c.createElement("h3",null,t.title),c.createElement("p",{className:"text-xs mb-2"},"Great Quality"),c.createElement("p",{className:"text-sm text-violet font-semibold"},"₹",t.price)),c.createElement("button",{className:"block self-end text-2xl hover:text-violet-dark",onClick:(0,n.Z)(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/users/cart/add-to-cart/"+t._id);case 3:n=e.sent,a(n.data.data.cart),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"+"))},u=function(e){var t=e.data,a=e.id,l=e.setCart;return c.createElement("div",{className:"bg-white p-6 flex mb-4"},c.createElement("img",{src:o.J+"/images/products/test.png",alt:"CART ITEM",className:"h-20"}),c.createElement("div",{className:"flex flex-col ml-3 mr-auto"},c.createElement("h2",null,t.title),c.createElement("p",{className:"text-xs mb-auto"},"Great Quality"),c.createElement("p",{className:"text-sm text-violet font-semibold"},"₹",t.price)),c.createElement("div",{className:"flex flex-col justify-between items-center"},c.createElement("button",{className:"bg-violet h-6 w-6 text-gray-100 bg-opacity-70 rounded-md",onClick:(0,n.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/users/cart/add-to-cart/"+a);case 3:t=e.sent,l(t.data.data.cart),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"+"),c.createElement("span",null,t.quantity),c.createElement("button",{className:"bg-violet h-6 w-6 text-gray-100 bg-opacity-70 rounded-md",onClick:(0,n.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/users/cart/remove-cart-item/"+a);case 3:t=e.sent,l(t.data.data.cart),console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))},"-")))},d=a(5480),p=a(3658),f=a(5448),b=a.n(f),v=function(){var e=(0,c.useState)(),t=e[0],a=e[1],l=(0,c.useState)(),f=l[0],v=l[1],x=(0,c.useState)(!1),h=x[0],E=x[1];return(0,c.useEffect)((function(){o.Z.get("/products").then((function(e){return a(e.data.data.products)})).catch((function(e){a([]),console.log(e.response)})),o.Z.get("/users/cart").then((function(e){return v(e.data.data.cart)})).catch((function(e){v([]),console.log(e.response)}))}),[]),c.createElement("div",{className:"min-h-screen tab-land:grid-cols-none"},c.createElement("div",{className:"p-8"},c.createElement("div",{className:"flex justify-between items-center mb-6 col-span-full"},c.createElement(s.Link,{to:"/",className:"font-semibold text-xl"},"Go Home"),c.createElement("button",{className:"relative",onClick:function(){return E(!0)}},c.createElement("div",{className:"absolute w-6 h-6 rounded-full bg-violet -right-4 -top-4 text-white"},Object.entries((null==f?void 0:f.items)||{}).length||0),c.createElement(b(),null))),c.createElement("input",{type:"text",className:"w-full bg-gray-100 py-2 px-4 rounded-lg",placeholder:"Search"}),c.createElement("div",{className:"grid grid-cols-3 gap-10 mt-6 tab-port:grid-cols-2 phone:grid-cols-none"},t?t.length?t.map((function(e,t){return c.createElement(m,{key:t,data:e,setCart:v})})):c.createElement("h1",null,"No data found"):c.createElement(d.Z,{className:"col-span-full"}))),c.createElement("div",{className:"flex flex-col h-screen w-96 tab-port:w-full z-10 top-0 right-0 overflow-auto mb-auto tab-land:mb-10 bg-cream p-5 fixed "+(h?"opacity-100 visible":"opacity-0 invisible")},c.createElement("div",{className:"flex justify-between items-center mb-12"},c.createElement("button",{className:"bg-violet rounded-md text-white text-xs px-2 py-1",onClick:(0,n.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/users/cart/clear");case 3:t=e.sent,v(t.data.data.cart),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"Clear"),c.createElement("button",{className:"text-4xl",onClick:function(){return E(!1)}},"×")),c.createElement("div",{className:"mb-auto"},f?Object.entries(f.items)?Object.entries(f.items).map((function(e,t){var a=e[0],n=e[1];return c.createElement(u,{data:n,id:a,key:t,setCart:v})})):c.createElement("h1",{className:"text-center"},"Fill up your cart now!"):c.createElement(d.Z,null)),c.createElement("div",{className:"bg-white rounded-tl-2xl rounded-tr-2xl p-6 capitalize"},c.createElement("p",{className:"flex justify-between"},c.createElement("span",{className:"font-semibold"},"sub total:"),c.createElement("span",null,"₹",null==f?void 0:f.totalPrice)),c.createElement("p",{className:"flex justify-between border-b-2 pb-2 border-gray-200"},c.createElement("span",{className:"font-semibold"},"tax:"),c.createElement("span",null,"18% GST")),c.createElement("p",{className:"flex justify-between mb-8"},c.createElement("span",{className:"font-semibold"},"Grand Total:"),c.createElement("span",null,"₹",(null==f?void 0:f.totalPrice)+(null==f?void 0:f.totalPrice)/10)),c.createElement("div",{className:"text-center"},(0,i.ZP)()?c.createElement(p.Z,{isLink:!0,to:"/checkout"},"Check Out"):c.createElement(p.Z,{isLink:!0,to:"/login"},"Please login to place an order")))))}},5448:function(e,t,a){var n=a(7294);function l(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("rect",{fill:"none",height:"24",width:"24",key:0}),n.createElement("path",{d:"M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z",key:1})]))}l.defaultProps={enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-shop-js-47edd8cff45a5ce5a850.js.map