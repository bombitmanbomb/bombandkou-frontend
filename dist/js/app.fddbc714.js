(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"7125bbf6"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d299"),n("099a"),n("0b67"),n("5f41");var r=n("7c54"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{app:"",absolute:"",color:"#fcb69f",dark:"","shrink-on-scroll":"",src:"https://www.theawl.com/wp-content/uploads/2017/09/sheet-music-277277_1280.jpg","scroll-target":"#scrolling-techniques-2"},scopedSlots:e._u([{key:"img",fn:function(t){var r=t.props;return[n("v-img",e._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",r,!1))]}}])},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(" Bomb & Kou "),n("span",{attrs:{"v-if":!e.$vuetify.breakpoint.mobile}},[e._v("Sheet Music")])]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-dots-vertical")])],1)],1),n("v-navigation-drawer",{attrs:{"clipped-left":"",fixed:"",app:""},scopedSlots:e._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:""}},[e._v("Logout")])],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list")],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},o=[],i={name:"App",components:{},data:function(){return{drawer:!1}}},c=i,u=n("040c"),s=n("8f70"),l=n.n(s),p=n("0bc3"),f=n("1583"),v=n("414e"),d=n("d9f5"),b=n("ee9c"),m=n("e98b"),h=n("003f"),g=n("5a2c"),w=n("d0d6"),_=n("102c"),y=n("4a2a"),k=n("f1d7"),j=n("7a4b"),O=Object(u["a"])(c,a,o,!1,null,null,null),V=O.exports;l()(O,{VApp:p["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:d["a"],VContainer:b["a"],VFooter:m["a"],VIcon:h["a"],VImg:g["a"],VList:w["a"],VMain:_["a"],VNavigationDrawer:y["a"],VSpacer:k["a"],VToolbarTitle:j["a"]});n("90c8");var x=n("1c7e"),P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",[e._v("Oh hi,")]),n("p",[e._v("The site is not ready yet, but will be coming soon!")])])}],T={},E=Object(u["a"])(T,P,S,!1,null,null,null),$=E.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],C={},B=Object(u["a"])(C,A,M,!1,null,null,null),L=B.exports;r["a"].use(x["a"]);var I=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:L},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],q=new x["a"]({mode:"history",base:"/",routes:I}),J=q,N=n("6392");r["a"].use(N["a"]);var D=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=n("800f");r["a"].use(F["a"]);var H=new F["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:J,store:D,vuetify:H,render:function(e){return e(V)}}).$mount("#app")}});
//# sourceMappingURL=app.fddbc714.js.map