(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Arimo:ital@1&display=swap);"]),i.push([e.id,":root {\n    --background-color: #1aa3ff;\n    --arimo-font: 'Arimo';\n}\n\nbody {\n    background-color: var(--background-color);\n    font-family: 'var(--arimo-font)', sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n}\n\n#content {\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 50vw;\n    min-width: 30vw;\n    min-height: 100vh;\n    border-radius: 5px;\n}\n\n.description-text {\n    max-width: 600px;\n\n}\n\n.title-header{\n    font-weight: bold;\n    font-size: 3rem;\n}\n\n.home-image {\n    width: 90%;\n    height: auto;\n}\n\n.btn-container {\n    margin: 20px;\n    padding: 10px;\n}\n\n.menu-selector {\n    margin: 5px;\n    padding: 10px;\n    border-radius: 12px;\n    background-color: var(--background-color);\n    border: 2px solid white;\n    color: white;\n    font-size: 20px;\n}\n\n.menu-selector:hover {\n    background-color: white;\n    color: black;\n}\n\n.beverage-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-width: 75%;\n}\n\n.beverage-header h2 #text{\n    font-weight: bold;\n    font-size: 1.2rem;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n.beverage-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 10px 90px;\n    margin: 2%;\n}\n\n.menu-image {\n    max-width: 100%;\n    height: auto;\n    border-radius: 12px;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=(()=>{const e=document.querySelector("#content");return{addHeader:()=>{let n=document.createElement("h1");n.innerText="Ratouille Restaurant",n.classList.add("title-header"),e.appendChild(n)},addImage:()=>{let n=document.createElement("img");n.src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",n.setAttribute("alt","Restaurant Image "),n.classList.add("home-image"),e.appendChild(n)},addText:()=>{let n=document.createElement("p");n.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.classList.add("description-text"),e.appendChild(n)}}})(),g=(()=>{const e=document.createElement("div");e.classList.add("btn-container");const n=document.querySelector("#content");return{createButtons:()=>{let t=document.createElement("button"),r=document.createElement("button"),a=document.createElement("button");t.innerText="Home",r.innerText="Menu",a.innerText="Contact Us",t.classList.add("menu-selector"),r.classList.add("menu-selector"),a.classList.add("menu-selector"),e.append(t),e.append(r),e.append(a),document.body.insertBefore(e,n)}}})(),v=(()=>{const e=document.querySelector("#content");function n(){const e=document.createElement("div");return e.classList.add("menu-item"),e}function t(){const e=document.createElement("p");return e.classList.add("menu-item-text"),e}function r(e,n){let t=document.createElement("img");return t.src=e,t.setAttribute("alt",n),t.classList.add("menu-image"),t}return{addMenuHeading:()=>{let n=document.createElement("h1");n.innerText="Menu Items",n.classList.add("title-header"),e.appendChild(n)},addBeverageMenu:()=>{let a=document.createElement("h2");a.classList.add("beverage-header");let o=document.createElement("div");o.classList.add("beverage-container"),a.innerText="Beverages";let i=n(),c=t();c.innerText="Chardonnay Wine";let d=r("https://cdn.pixabay.com/photo/2017/06/16/10/32/wine-2408620_960_720.jpg","Chardonnay Wine");i.appendChild(c),i.appendChild(d),o.appendChild(i);let s=n(),l=t();l.innerText="Champaigne";let u=r("https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_960_720.jpg","Champaigne");s.appendChild(l),s.appendChild(u),o.appendChild(s),a.appendChild(o),e.appendChild(a)}}})();function x(){h.addHeader(),h.addImage(),h.addText()}g.createButtons(),x(),document.querySelectorAll(".menu-selector").forEach((e=>{e.addEventListener("click",(e=>{!function(e){const n=document.querySelector("#content");"Home"===e.innerText?(n.innerHTML="",x()):"Menu"===e.innerText&&(n.innerHTML="",v.addMenuHeading(),v.addBeverageMenu())}(e.target)}))}))})()})();