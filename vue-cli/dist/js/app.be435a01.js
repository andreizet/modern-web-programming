(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a={app:0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"514582d0"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"b06b6936"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete i[t],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){i[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}a[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/modern-web-programming/vue-cli/dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"36be":function(t,e,n){t.exports=n.p+"img/menu.8f0c6230.svg"},4045:function(t,e,n){t.exports=n.p+"img/loading.3f18ddfe.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{id:"app"}},[r("nav",{class:t.sidebarClass,attrs:{id:"sidebar"}},[r("div",{staticClass:"sidebar-header"},[r("Logo",{attrs:{color:"#fff",margin:"ml-1"}})],1),r("ul",{staticClass:"list-unstyled components"},[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("\n                    Home\n                ")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("\n                    About\n                ")])],1)])]),r("div",{staticClass:"container p-0"},[r("nav",{staticClass:"navbar navbar-dark bg-success2"},[r("div",{staticClass:"w-100 float-left text-left"},[r("img",{staticClass:"menu-button",attrs:{alt:"Menu Switch Icon",src:n("36be"),width:"40",id:"sidebarCollapse"},on:{click:function(e){return t.ToggleSidebar()}}}),r("span",{staticClass:"align-middle",staticStyle:{"font-family":"'Shadows Into Light Two'","font-size":"30px",color:"#fff"}},[t._v("\n          Recipes Finder\n        ")])])]),r("div",[r("router-view")],1),r("div",{class:"overlay "+t.overlayCLass,attrs:{id:"overlay"},on:{click:function(e){return t.ToggleSidebar()}}})])])},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{class:t.margin},[r("router-link",{attrs:{to:"/"}},[r("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Shadows Into Light Two",rel:"stylesheet"}}),r("img",{attrs:{alt:"Vue logo",src:n("9b19"),width:"100"}}),r("h1",{class:t.margin,style:"font-family: 'Shadows Into Light Two';font-size: 22px; color:"+t.color},[t._v("\n            Recipes Finder\n        ")])])],1)},o=[],c={name:"Logo",props:{color:{type:String,default:"#000"},margin:{type:String,default:""}}},l=c,u=(n("f6fb"),n("2877")),d=Object(u["a"])(l,s,o,!1,null,"5cc2d731",null),p=d.exports,f={name:"App",data:function(){return{sidebarClass:"",overlayCLass:""}},components:{Logo:p},methods:{ToggleSidebar:function(){"active"===this.sidebarClass?this.sidebarClass="":this.sidebarClass="active","active"===this.overlayCLass?this.overlayCLass="":this.overlayCLass="active"}}},g=f,m=(n("034f"),Object(u["a"])(g,i,a,!1,null,null,null)),v=m.exports,h=n("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t.loading?r("div",{staticClass:"overlay w-100 h-100"},[r("img",{staticClass:"image-overlay",attrs:{alt:"Loading",src:n("4045")}})]):t._e(),r("h1",{staticClass:"mt-4"},[t._v("Insert ingredients")]),r("div",{staticClass:"container mt-5"},t._l(t.ingredients,function(e,i){return r("div",{key:i,staticClass:"row"},[r("div",{staticClass:"col-sm w-25"}),r("div",{staticClass:"input-group mb-3 w-50 text-center"},[r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text"},[t._v("\n                        "+t._s(i+1)+":\n                    ")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredients[i].value,expression:"ingredients[index].value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingredient"},domProps:{value:t.ingredients[i].value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.GetRecipes()},input:function(e){e.target.composing||t.$set(t.ingredients[i],"value",e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{class:"btn "+(1===t.ingredients.length?"btn-outline-dark":"btn-outline-danger"),attrs:{disabled:1===t.ingredients.length,title:1===t.ingredients.length?"Hmm, 0 ingredients recipe?":"Remove ingredient"},on:{click:function(e){return t.RemoveIngredient(i)}}},[r("img",{attrs:{alt:"Add new ingredient",src:n("e9b2"),width:"16"}})])])]),r("div",{staticClass:"col-sm  w-25"})])}),0),r("div",{staticStyle:{"text-align":"center"}},[r("button",{staticClass:"btn btn-outline-success",on:{click:function(e){return t.AddNew()}}},[r("img",{attrs:{alt:"Add new ingredient",src:n("8a37"),width:"16"}})]),r("br"),r("br"),r("button",{staticClass:"btn btn-success",attrs:{disabled:t.DisableGet()},on:{click:function(e){return t.GetRecipes()}}},[t._v("\n            Get Recipes\n        ")])])])},y=[],w=(n("ac6a"),n("f3e2"),n("6d67"),{name:"home",data:function(){return{ingredients:[{}],loading:!1}},mounted:function(){},components:{Logo:p},methods:{AddNew:function(){this.ingredients.push({})},RemoveIngredient:function(t){this.ingredients.splice(t,1)},GetRecipes:function(){var t=this;t.loading=!0;var e=this.ingredients.map(function(t){return t.value});fetch("https://www.themealdb.com/api/json/v2/1/filter.php?i="+e.join(",")+"&api_key=8673533").then(function(e){200===e.status?e.json().then(function(e){console.log(e),t.loading=!1,t.$router.push({name:"recipes",params:{recipes:e}})}):console.log("Looks like there was a problem. Status Code: "+e.status)}).catch(function(t){console.log("Fetch Error :-S",t)})},DisableGet:function(){var t=!0;return this.ingredients.forEach(function(e){e.value&&(t=!1)}),t}}}),C=w,k=(n("cccb"),Object(u["a"])(C,b,y,!1,null,null,null)),x=k.exports;r["a"].use(h["a"]);var _=new h["a"]({mode:"history",base:"/modern-web-programming/vue-cli/dist/",routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/recipes",name:"recipes",component:function(){return n.e("about").then(n.bind(null,"9637"))}}]});n("4989"),n("ab8b");r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,n){},"8a37":function(t,e,n){t.exports=n.p+"img/plus.20384c87.svg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.b64bf139.svg"},a219:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("d563"),i=n.n(r);i.a},d563:function(t,e,n){},e9b2:function(t,e,n){t.exports=n.p+"img/minus.e06ee095.svg"},f6fb:function(t,e,n){"use strict";var r=n("a219"),i=n.n(r);i.a}});
//# sourceMappingURL=app.be435a01.js.map