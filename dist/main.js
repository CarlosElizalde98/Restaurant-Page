(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Arimo:ital@1&display=swap);"]),i.push([e.id,":root {\n    --background-color: #1aa3ff;\n    --arimo-font: 'Arimo';\n}\n\nbody {\n    background-color: var(--background-color);\n    font-family: 'var(--arimo-font)', sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n}\n\n#content {\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 60vw;\n    min-width: 50vw;\n    min-height: 100vh;\n    border-radius: 5px;\n}\n\n.description-text {\n    max-width: 600px;\n\n}\n\n.title-header{\n    font-weight: bold;\n    font-size: 3rem;\n}\n\n.home-image {\n    width: 90%;\n    height: auto;\n}\n\n.btn-container {\n    margin: 20px;\n    padding: 10px;\n}\n\n.menu-selector {\n    margin: 5px;\n    padding: 10px;\n    border-radius: 12px;\n    background-color: var(--background-color);\n    border: 2px solid white;\n    color: white;\n    font-size: 20px;\n}\n\n.menu-selector:hover {\n    background-color: white;\n    color: black;\n}\n\n/* .menu-item-text {\n    margin: 0\n} */\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n}\n\n.beverage-header, .entrees-header, .dessert-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-width: 75%;\n}\n\n.beverage-header h2 #text{\n    font-weight: bold;\n    font-size: 1.2rem;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n.beverage-container {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n    grid-gap: 10px 90px;\n    margin: 2%;\n}\n\n.menu-image {\n    width: 100%;\n    height: auto;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.entrees-container {\n    display: grid;\n    align-items: start;\n    grid-template-columns: repeat(3, minmax(100px,1fr));\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 10px 30px;\n    margin: 2%;\n}\n\n.dessert-container {\n    display: grid;\n    align-items: start;\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n    grid-gap: 10px 30px;\n    margin: 2%;\n}\n\n.contact-card {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 300px;\n    padding: 12px;\n}",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var c=a(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=(()=>{const e=document.querySelector("#content");return{addHeader:()=>{let n=document.createElement("h1");n.innerText="Ratatouille Restaurant",n.classList.add("title-header"),e.appendChild(n)},addImage:()=>{let n=document.createElement("img");n.src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",n.setAttribute("alt","Restaurant Image "),n.classList.add("home-image"),e.appendChild(n)},addText:()=>{let n=document.createElement("p");n.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.classList.add("description-text"),e.appendChild(n)}}})(),g=(()=>{const e=document.createElement("div");e.classList.add("btn-container");const n=document.querySelector("#content");return{createButtons:()=>{let t=document.createElement("button"),a=document.createElement("button"),r=document.createElement("button");t.innerText="Home",a.innerText="Menu",r.innerText="Contact Us",t.classList.add("menu-selector"),a.classList.add("menu-selector"),r.classList.add("menu-selector"),e.append(t),e.append(a),e.append(r),document.body.insertBefore(e,n)}}})(),x=(()=>{const e=document.querySelector("#content");function n(){const e=document.createElement("p");return e.classList.add("menu-item-text"),e}function t(e,t,a){let r=function(){const e=document.createElement("div");return e.classList.add("menu-item"),e}(),o=n();o.innerText=a;let i=n(),d=function(e,n){let t=document.createElement("img");return t.src=e,t.setAttribute("alt",n),t.classList.add("menu-image"),t}(e,t);return r.appendChild(o),r.appendChild(d),r.appendChild(i),r}return{addMenuHeading:()=>{let n=document.createElement("h1");n.innerText="Menu Items",n.classList.add("title-header"),e.appendChild(n)},addBeverageMenu:()=>{let n=document.createElement("h2");n.classList.add("beverage-header");let a=document.createElement("div");a.classList.add("beverage-container"),n.innerText="Beverages";let r=t("https://cdn.pixabay.com/photo/2017/06/16/10/32/wine-2408620_960_720.jpg","Chardonnay Wine","Chardonnay Wine");a.appendChild(r);let o=t("https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_960_720.jpg","Champaigne","Champaigne");a.appendChild(o),n.appendChild(a),e.appendChild(n)},addEntrees:()=>{let n=document.createElement("h2");n.classList.add("entrees-header");let a=document.createElement("div");a.classList.add("entrees-container"),n.innerText="Entrées";let r=t("https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg","Salmon Mignon","Salmon Mignon");a.appendChild(r);let o=t("https://cdn.pixabay.com/photo/2020/06/19/08/27/ratatouille-5316205_960_720.jpg","Ratatouille Dish","Ratatouille");a.appendChild(o);let i=t("https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_960_720.jpg","Spaghetti Carbonara","Spaghetti Carbonara");a.appendChild(i);let d=t("https://cdn.pixabay.com/photo/2021/05/18/15/15/pasta-6263653_960_720.jpg","Linguine Pasta","Linguine Pasta");a.appendChild(d);let c=t("https://cdn.pixabay.com/photo/2020/06/07/09/57/pasta-5269699_960_720.jpg","Ravioli Dish","Ravioli");a.appendChild(c);let s=t("https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_960_720.jpg","Baguette Meal","Baguette");a.appendChild(s),n.appendChild(a),e.appendChild(n)},addDesserts:()=>{const n=document.createElement("h2");n.classList.add("dessert-header");const a=document.createElement("div");a.classList.add("dessert-container"),n.innerText="Desserts";let r=t("https://cdn.pixabay.com/photo/2017/11/11/21/05/food-2940496_960_720.jpg","Creme Brulee Dessert","Creme Brulee");a.appendChild(r);let o=t("https://cdn.pixabay.com/photo/2020/03/17/19/56/orange-souffle-cake-4941689_960_720.jpg","Souffle Dessert","Souffle");a.appendChild(o);let i=t("https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_960_720.jpg","Strawberry Eclair Dessert","Strawberry Eclair");a.appendChild(i),n.appendChild(a),e.appendChild(n)}}})(),v=(()=>{const e=document.querySelector("#content");return{addContactsHeading:()=>{const n=document.createElement("h1");n.classList.add("title-header"),n.innerText="Contact Us",e.appendChild(n)},addContacts:()=>{const n=document.createElement("div");n.classList.add("contacts-container");let t=function(e,n,t){const a=document.createElement("div");a.classList.add("contact-card");const r=document.createElement("h2");r.classList.add("contact-name"),r.innerText="Remy Ratatouille";const o=document.createElement("p");o.innerText="Chef";const i=document.createElement("p");return i.innerText="remyratatouille@example.com",a.appendChild(r),a.appendChild(o),a.appendChild(i),a}();n.appendChild(t),e.appendChild(n)}}})();function b(){f.addHeader(),f.addImage(),f.addText()}g.createButtons(),b(),document.querySelectorAll(".menu-selector").forEach((e=>{e.addEventListener("click",(e=>{!function(e){const n=document.querySelector("#content");"Home"===e.innerText?(n.innerHTML="",b()):"Menu"===e.innerText?(n.innerHTML="",x.addMenuHeading(),x.addBeverageMenu(),x.addEntrees(),x.addDesserts()):"Contact Us"===e.innerText&&(n.innerHTML="",v.addContactsHeading(),v.addContacts())}(e.target)}))}))})()})();