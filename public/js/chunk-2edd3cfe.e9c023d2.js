(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2edd3cfe"],{"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"161a":function(t,e,n){"use strict";var r=n("2578"),i=n.n(r);i.a},2578:function(t,e,n){},3530:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("h3",{staticClass:"title"},[t._v("Admin")]),n("router-link",{staticClass:"edit",staticStyle:{"margin-left":"20px"},attrs:{to:{name:"Register"}}},[t._v("add new user")]),n("div",{staticClass:"logout"},[n("span",{on:{click:t.logout}},[n("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Logout")])])],1),n("table",{staticClass:"table is-fullwidth",attrs:{id:"mytb"}},[t._m(0),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.index},[n("td",{style:e.fullnameEng?"":"color: blue"},[t._v(t._s(e.fullnameEng?e.fullnameEng:"new user"))]),n("td",[n("span",{staticClass:"pw"},[t._v(t._s(e.genPassword))])]),n("td",[t._v(t._s(e.email))]),n("td",{staticClass:"icon-group"},[n("span",{on:{click:function(n){return t.toProfile(e._id)}}},[n("i",{staticClass:"fas fa-search"})]),n("span",{on:{click:function(n){return t.generatePassword(e._id)}}},[n("i",{staticClass:"fas fa-redo-alt"})]),n("span",{on:{click:function(n){return t.deleteUser(e._id)}}},[n("i",{staticClass:"fas fa-trash"})])])])})),0)])]),t.isLoading?n("app-loading"):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Password")]),n("th",[t._v("Email")]),n("th",{staticClass:"icon-group"},[t._v("Option")])])])}],a=(n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("3a5e")),o={components:{appLoading:a["a"]},data:function(){return{isLoading:!1,users:[]}},methods:{fetchUsers:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.$axios.get("user/get-all"));case 3:t=e.sent,this.users=t.data.users,e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},toProfile:function(t){this.$router.push({name:"Profile",params:{id:t}})},generatePassword:function(t){var e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:n.prev=0,this.$dialog.confirm("Please confirm to continue").then((function(){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,regeneratorRuntime.awrap(e.$axios.put("user/generate-password",{userId:t}));case 3:return n.next=5,regeneratorRuntime.awrap(e.fetchUsers());case 5:e.isLoading=!1;case 6:case"end":return n.stop()}}))})).catch((function(){console.log("Clicked on cancel")})),n.next=8;break;case 4:throw n.prev=4,n.t0=n["catch"](0),this.isLoading=!1,new Error(n.t0);case 8:case"end":return n.stop()}}),null,this,[[0,4]])},deleteUser:function(t){var e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:n.prev=0,this.$dialog.confirm("Please confirm to continue").then((function(){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,regeneratorRuntime.awrap(e.$axios.delete("user/delete-user",{params:{userId:t}}));case 3:return n.next=5,regeneratorRuntime.awrap(e.fetchUsers());case 5:e.isLoading=!1;case 6:case"end":return n.stop()}}))})).catch((function(){console.log("Clicked on cancel")})),n.next=8;break;case 4:throw n.prev=4,n.t0=n["catch"](0),this.isLoading=!1,new Error(n.t0);case 8:case"end":return n.stop()}}),null,this,[[0,4]])},logout:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("logout"));case 3:this.$notify({group:"foo",title:"ອອກຈາກລະບົບແລ້ວ"}),this.$router.replace({name:"login"}),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),new Error(t.t0);case 10:case"end":return t.stop()}}),null,this,[[0,7]])}},created:function(){this.fetchUsers()}},s=o,c=(n("161a"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,"2014d193",null);e["default"]=u.exports},"3a5e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("loading",{attrs:{color:"#2456e5",loader:"dots",active:t.isLoading,"is-full-page":""},on:{"update:active":function(e){t.isLoading=e}}})},i=[],a=n("9062"),o=n.n(a),s=(n("e40d"),{components:{Loading:o.a},data:function(){return{isLoading:!0}}}),c=s,u=n("2877"),l=Object(u["a"])(c,r,i,!1,null,null,null);e["a"]=l.exports},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),o=n("50c4"),s=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n){return[function(n,r){var i=c(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,a){var c=n(e,t,this,a);if(c.done)return c.value;var h=i(t),p=String(this),v="function"===typeof a;v||(a=String(a));var m=h.global;if(m){var b=h.unicode;h.lastIndex=0}var y=[];while(1){var x=l(h,p);if(null===x)break;if(y.push(x),!m)break;var w=String(x[0]);""===w&&(h.lastIndex=u(p,o(h.lastIndex),b))}for(var _="",C=0,$=0;$<y.length;$++){x=y[$];for(var E=String(x[0]),k=d(f(s(x.index),p.length),0),S=[],N=1;N<x.length;N++)S.push(g(x[N]));var L=x.groups;if(v){var R=[E].concat(S,k,p);void 0!==L&&R.push(L);var M=String(a.apply(void 0,R))}else M=r(E,p,k,S,L,a);k>=C&&(_+=p.slice(C,k)+M,C=k+E.length)}return _+p.slice(C)}];function r(t,n,r,i,o,s){var c=r+t.length,u=i.length,l=v;return void 0!==o&&(o=a(o),l=p),e.call(s,l,(function(e,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>u){var d=h(l/10);return 0===d?e:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):e}s=i[l-1]}return void 0===s?"":s}))}}))},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,n,r,i,a,o,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,r],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:this.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a=Object.assign({},e,r,{programmatic:!0}),o=new(t.extend(u))({el:document.createElement("div"),propsData:a}),s=Object.assign({},n,i);return Object.keys(s).map((function(t){o.$slots[t]=s[t]})),o}}};n(0),u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=l(t,e,n);t.$loading=r,t.prototype.$loading=r},e.default=u}]).default}))},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=void 0!==/()??/.exec("")[1],u=s||c;u&&(o=function(t){var e,n,o,u,l=this;return c&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),s&&(e=l.lastIndex),o=i.call(l,t),s&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),c&&o&&o.length>1&&a.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o}),t.exports=o},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";var r=n("9112"),i=n("6eeb"),a=n("d039"),o=n("b622"),s=n("9263"),c=o("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var f=o(t),h=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=h&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!h||!p||"replace"===t&&!u||"split"===t&&!l){var v=/./[f],g=n(f,""[t],(function(t,e,n,r,i){return e.exec===s?h&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=g[0],b=g[1];i(String.prototype,t,m),i(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)}),d&&r(RegExp.prototype[f],"sham",!0)}}},e40d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2edd3cfe.e9c023d2.js.map