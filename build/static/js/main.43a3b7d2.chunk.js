(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),l=a.n(c),i=(a(59),a(47)),o=a(3),s=(a(60),a(61),a(48)),m=a.n(s),u=a(49),d=a.n(u),p=a(11),E=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},c)},g=function(){return Object(n.useContext)(E)},h=a(30),v=a.n(h),f=v.a.initializeApp({apiKey:"AIzaSyB2j5gHT8dRjwSAq8AtgzNqnin16opaTTQ",authDomain:"clone-ac8f9.firebaseapp.com",databaseURL:"https://clone-ac8f9.firebaseio.com",projectId:"clone-ac8f9",storageBucket:"clone-ac8f9.appspot.com",messagingSenderId:"760695638884",appId:"1:760695638884:web:8b3a2cd576705b92138871",measurementId:"G-FT43PB9JD7"}).firestore(),b=v.a.auth();var O=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(){c&&b.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",c?c.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign In"))),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(77),a(78);var N=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,i=g(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,t){return r.a.createElement("p",null,"\u2b50")})))),r.a.createElement("img",{src:n,alt:"the lean startup"}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:c,rating:l}})}},"Add to Basket"))};var S=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"amazon-banner"}),r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"111",title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",price:999,image:"https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg",rating:5}),r.a.createElement(N,{id:"112",title:"HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black",price:49990,image:"https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"113",title:"Cloudstyle Men's 3-Piece 2 Buttons Slim Fit Solid Color Jacket Smart Wedding Formal Suit",price:6590,image:"https://images-na.ssl-images-amazon.com/images/I/618BjtF76sL._AC_UX342_.jpg",rating:4}),r.a.createElement(N,{id:"114",title:"Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR & AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED, Black",price:69990,image:"https://images-na.ssl-images-amazon.com/images/I/61A4tg5IFhL._AC_SL1000_.jpg",rating:4}),r.a.createElement(N,{id:"115",title:"SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4 System, 1TB Hard Drive, All the Greatest Games, TV, Music & More",price:45890,image:"https://images-na.ssl-images-amazon.com/images/I/61OL2zIliML._SL1500_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"116",title:"AmazonBasics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black",price:3999,image:"https://images-na.ssl-images-amazon.com/images/I/71i08qnZeDL._AC_SL1500_.jpg",rating:3}))))},k=a(4),y=(a(79),a(80),a(21)),j=a.n(y),C=a(34),A=a(17),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},B=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(C.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var w=function(){var e=Object(k.f)(),t=g(),a=Object(o.a)(t,2),n=a[0].basket;return a[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",n.length," items):",r.a.createElement("strong",null," ",e," ")),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:T(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to Checkout"))};a(82);var P=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,i=g(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{src:n,alt:"productImage",className:"checkoutProduct__image"}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},a),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from basket")))};var I=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg",alt:"amazon-banner"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello ",null===c||void 0===c?void 0:c.email),r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),n.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(w,null)))};a(83);var L=function(){var e=Object(k.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"amazon-logo",className:"login__logo"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-In"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text"}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{value:m,onChange:function(e){return u(e.target.value)},type:"password"}),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),b.signInWithEmailAndPassword(c,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads"),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),b.createUserWithEmailAndPassword(c,m).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},z=a(23),D=a.n(z),x=a(33),M=(a(85),a(20)),R=a(50),H=a.n(R).a.create({baseURL:"http://localhost:5001/clone-ac8f9/us-central1/api"});var U=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],c=a.basket,l=a.user,i=t[1],s=Object(k.f)(),m=Object(M.useStripe)(),u=Object(M.useElements)(),d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],h=E[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),O=b[0],N=b[1],S=Object(n.useState)(null),y=Object(o.a)(S,2),C=y[0],A=y[1],B=Object(n.useState)(!0),w=Object(o.a)(B,2),I=w[0],L=w[1],z=Object(n.useState)(!0),R=Object(o.a)(z,2),U=R[0],G=R[1];Object(n.useEffect)((function(){(function(){var e=Object(x.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H({method:"post",url:"/payments/create?total=".concat(1e3*T(c))});case 2:t=e.sent,G(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("THE SECRET IS >>>",U),console.log("\ud83d\udc71",l);var K=function(){var e=Object(x.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.next=4,m.confirmCardPayment(U,{payment_method:{card:u.getElement(M.CardElement)}}).then((function(e){var t=e.paymentIntent;f.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:c,amount:t.amount,created:t.created}),h(!0),A(null),N(!1),i({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(p.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items"),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"123 React Lane"),r.a.createElement("p",null,"Los Angeles, CA"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment__items"},c.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:K},r.a.createElement(M.CardElement,{onChange:function(e){L(e.empty),A(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:T(c),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",{disabled:O||I||_},r.a.createElement("span",null,O?r.a.createElement("p",null,"Processing"):"Buy Now"))),C&&r.a.createElement("div",null,C))))))},G=a(51),K=(a(102),a(103),a(52)),F=a.n(K);var Y=function(e){var t,a=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,F.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/1e3,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}))};var V=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],c=(a.basket,a.user),l=(t[1],Object(n.useState)([])),i=Object(o.a)(l,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){c?f.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(Y,{order:e})}))))},W=Object(G.a)("pk_test_51HPvSyCnHTQNH2YL82ZY9DeqWaUigkTuHBiaDAtyM1zqK4ZagkWBLKyvwEOW0o2F6dGkjIFI2wZdUONkeRrGouvp000xLeomii");var X=function(){var e=g(),t=Object(o.a)(e,2);Object(i.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/orders"},r.a.createElement(O,null),r.a.createElement(V,null)),r.a.createElement(k.a,{path:"/login"},r.a.createElement(L,null)),r.a.createElement(k.a,{path:"/checkout"},r.a.createElement(O,null),r.a.createElement(I,null)),r.a.createElement(k.a,{path:"/payment"},r.a.createElement(O,null),r.a.createElement(M.Elements,{stripe:W},r.a.createElement(U,null))),r.a.createElement(k.a,{path:"/"},r.a.createElement(O,null),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{initialState:{basket:[],user:null},reducer:B},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a(106)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.43a3b7d2.chunk.js.map