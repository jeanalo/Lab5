(()=>{"use strict";var n={531:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,'\n* {\n    font-family: "Poppins", sans-serif;\n    box-sizing: border-box; \n}\n\n* {\n    font-family: "Poppins", sans-serif;\n    box-sizing: border-box;\n}\n\n.product {\n    width: 25em;\n    height: 35rem;\n    background-color: #ececec;\n    padding: 1rem;\n    border-radius: 1.5rem;\n    box-shadow: \n        0 4px 8px rgba(0, 0, 0, 0.1),\n        0 2px 4px rgba(0, 0, 0, 0.06); \n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    cursor: pointer;\n    border: solid #cecece 1px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; /* Mantiene la información y el botón dentro */\n}\n\n.product:hover  {\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3),\n                0 6px 20px rgba(0, 0, 0, 0.25);\n    transform: scale(1.03);\n}\n\n.image {\n    width: 100%;\n    height: 15rem;\n    overflow: hidden;  \n    background-color: #ffffff;  \n}\n\n.image img {\n    width: 100%;  \n    height: 100%; \n    object-fit: contain;\n}\n\n.information {\n    width: 100%; \n    min-height: 18rem;\n    background-color: #babbbc;\n    padding: 0.5rem;\n    border-radius: 20px;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center; /* Alinea el contenido al centro */\n    margin-top: 0.5rem;\n}\n\n.information h3 {\n    font-weight: 500;\n    font-size: 15px;\n    text-align: center;\n    margin-top: 0;\n}\n\n.information p {\n    font-size: 11px; /* Ajuste de tamaño para evitar desbordamientos */\n   \n}\n\nbutton {\n    width: 10rem;\n    height: 2rem;\n    border-radius: 20px;\n    border: none;\n    color: white;\n    background-color: #3adae3;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    margin-top: 0.2rem;\n    cursor: pointer;\n    align-self: center; /* Asegura que el botón esté centrado dentro de la card */\n}\n\nbutton:hover {\n    background-color: #8e550f;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3),\n                0 6px 10px rgba(0, 0, 0, 0.25);\n}\n\nbutton svg {\n    color: white;\n    margin: 0;\n}\n',""]);const s=a},763:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,'\n* {\n    font-family: "Poppins", sans-serif;\n    box-sizing: border-box; \n}\n\n.product {\n    width: 25em;\n    height: 26rem;\n    background-color: #ececec;\n    padding: 1rem;\n    border-radius: 1.5rem;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),\n                0 2px 4px rgba(0, 0, 0, 0.06); \n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    cursor: pointer;\n}\n.product:hover  {\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3),\n    0 6px 20px rgba(0, 0, 0, 0.25);\n    transform: scale(1.03);\n}\n.image {\n    width: 100%;\n    height: 15rem; \n    overflow: hidden;  \n    background-color: #ffffff;  \n}\n\n.image img {\n    width: 100%;  \n    height: 100%; \n    object-fit: contain;  \n}\n\n.information {\n    width: 100%; \n    height: 9rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:#babbbc;  \n    padding: 1rem;\n    border-radius: 20px;\n    color: white;\n    align-items: center; \n    margin-top: 0.2rem;\n}\n\n.information h3 {\n    font-weight: 500;\n    font-size: 15px;\n    text-align: center;\n    margin-top: 0;\n \n}\n\n.price {\n    font-weight: 700;\n    font-size: 25px;\n    margin: 0.5rem 0; \n    text-align: center;\n}\n',""]);const s=a},335:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,".container-products {\n    display: flex;               /* Flexbox layout */\n    flex-wrap: wrap;             /* Hacer que los elementos se envuelvan automáticamente */\n    gap: 1rem;                   /* Espacio entre cada tarjeta */\n    justify-content: center;     /* Centrar los productos horizontalmente */\n    align-items: flex-start;     /* Alinear los productos en la parte superior */\n    padding: 1rem;       \n     /* Añadimos un pequeño padding */\n}\n",""]);const s=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},601:n=>{n.exports=function(n){return n[1]}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var o=e(335);let r={screen:"DASHBOARD",shoppingList:[]};const i=n=>{const t=JSON.parse(JSON.stringify(r));r=((n,t)=>{const{action:e,payload:o}=n;switch(e){case"ADDPRODUCT":return Object.assign(Object.assign({},t),{shoppingList:[...t.shoppingList,o]});case"DASHBOARD":return Object.assign(Object.assign({},t),{screen:o});default:return t}})(n,t),((n,t,e=!1)=>{const o=e?sessionStorage:localStorage,r=JSON.stringify(t);o.setItem(n,r)})("STORE",r),a.forEach((n=>n.render()))};let a=[];const s=n=>{a=[...a,n]};var c,d=e(531);!function(n){n.image="image",n.titleproduct="titleproduct",n.description="description",n.category="category",n.price="price",n.rating="rating"}(c||(c={}));class p extends HTMLElement{static get observedAttributes(){return Object.values(c)}attributeChangedCallback(n,t,e){switch(n){case c.price:this.price=e?Number(e):void 0;break;case c.rating:this.rating=e?Number(e):void 0;break;default:this[n]=e}}constructor(){super(),this.attachShadow({mode:"open"}),s(this)}connectedCallback(){this.render()}render(){var n;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n                <link rel="stylesheet" href="../src/components/product/product.css">\n                <div class="product">\n                    <div class="image">\n                        <img src="${this.image||"No Image"}">\n                    </div>\n                    <div class="information">\n                        <h3>${this.titleproduct||"No Title"}</h3>\n                        <p>Category: ${this.category||"No Category"}</p>\n                        <p>Description: ${this.description||"No Description"}</p>\n                        <p>Price: ${this.price||"No Price"}</p>\n                        <p>Rating: ${this.rating||"No Rating"}</p>\n                    </div>\n                    <button id="add-to-cart">Añadir al carrito</button>\n                </div>\n            `;const t=this.shadowRoot.querySelector("#add-to-cart");null==t||t.addEventListener("click",(()=>{i({action:"ADDPRODUCT",payload:{title:this.titleproduct,price:this.price,description:this.description,category:this.category,image:this.image,rating:this.rating}})}));const e=this.ownerDocument.createElement("style");e.innerHTML=d.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}}customElements.define("product-card",p);var h,l=e(763);!function(n){n.image="image",n.titleproduct="titleproduct",n.price="price"}(h||(h={}));class u extends HTMLElement{static get observedAttributes(){return Object.values(h)}attributeChangedCallback(n,t,e){n===h.price?this.price=e?Number(e):void 0:this[n]=e}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/shoppingCartItem/shoppingCartItem.css">\n            <div class="product">\n                <div class="image">\n                    <img src="${this.image}" || 'No Image'}">\n                </div>\n                <div class="information">\n                    <div class="details">\n                        <h3>${this.titleproduct||"No Title"}</h3>\n                        <p class="price">$${this.price||"No Price"}</p>\n                    </div>\n                </div>\n            </div>       \n                `);const t=this.ownerDocument.createElement("style");t.innerHTML=l.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(t)}}customElements.define("shopping-card",u);class g extends HTMLElement{constructor(){super(),this.products=[],this.shoppingCart=[],this.dataProducts=[],this.attachShadow({mode:"open"}),s(this)}connectedCallback(){return n=this,t=void 0,o=function*(){var n,t,e,o;this.dataProducts=yield(n=void 0,t=void 0,e=void 0,o=function*(){try{return yield fetch("https://fakestoreapi.com/products").then((n=>n.json()))}catch(n){console.error(n)}},new(e||(e=Promise))((function(r,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}c((o=o.apply(n,t||[])).next())}))),this.createCardsProduct(),this.createCardsShoppingItem(),this.render()},new((e=void 0)||(e=Promise))((function(r,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}c((o=o.apply(n,t||[])).next())}));var n,t,e,o}createCardsProduct(){this.dataProducts.forEach((n=>{const t=this.ownerDocument.createElement("product-card");t.setAttribute(c.image,n.image),t.setAttribute(c.titleproduct,n.title),t.setAttribute(c.description,n.description),t.setAttribute(c.category,n.category),t.setAttribute(c.price,n.price),t.setAttribute(c.rating,n.rating.rate),this.products.push(t)}))}createCardsShoppingItem(){r.shoppingList.forEach((n=>{const t=this.ownerDocument.createElement("shopping-card");t.setAttribute(h.image,n.image),t.setAttribute(h.titleproduct,n.title),t.setAttribute(h.price,n.price),this.shoppingCart.push(t)}))}render(){var n,t,e;if(this.shadowRoot){this.shadowRoot.innerHTML='\n\t\t\t<link rel="stylesheet" href="../src/index.css">\n\t\t   <h1>Store Products</h1>\n\t\t   <hr>\n\t\t   <div class="container-products"></div>\n\t\t   \n\t\t   <h1>Added to cart</h1>\n\t\t   <hr>\n\t\t   <div class="container-shopping"></div>\n\t\t   ';const e=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".container-products");this.products.forEach((n=>{null==e||e.appendChild(n)}));const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".container-shopping");this.shoppingCart.forEach((n=>{null==o||o.appendChild(n)}))}const r=this.ownerDocument.createElement("style");r.innerHTML=o.A,null===(e=this.shadowRoot)||void 0===e||e.appendChild(r)}}customElements.define("app-dashboard",g);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),s(this)}connectedCallback(){this.render()}render(){var n;if(this.shadowRoot&&(this.shadowRoot.innerHTML=""),"DASHBOARD"===r.screen){const t=this.ownerDocument.createElement("app-dashboard");null===(n=this.shadowRoot)||void 0===n||n.appendChild(t)}}}customElements.define("app-container",m)})();