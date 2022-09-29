import{a as D,c as P,b as O,n as A,V as k,d as M,u as N,e as I,f as x,r as v,h as f,w as _,o as F,_ as U}from"./vue.aa6e4883.js";import{g as q,w as z,V as C,u as H,_ as W,a as J,b as X,c as B,d as G,e as E,f as y,h as K,i as j,j as Q,k as T,l as $,m as V,n as R,o as Y,p as Z,q as ee,r as te,s as oe}from"./vuetify.9a8ab645.js";/* empty css                            */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const ne="modulepreload",re=function(t,e){return new URL(t,e).href},S={},w=function(e,o,s){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=re(n,s),n in S)return;S[n]=!0;const r=n.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const m=document.createElement("link");if(m.rel=r?"stylesheet":ne,r||(m.as="script",m.crossOrigin=""),m.href=n,document.head.appendChild(m),r)return new Promise((a,l)=>{m.addEventListener("load",a),m.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())},se={themeDark:window.matchMedia("(prefers-color-scheme: dark)").matches,locale:window.navigator.languages&&window.navigator.languages[0]||window.navigator.language},ae={themeDark:t=>t.themeDark,locale:t=>t.locale},ie={storeThemeDark(t){t.themeDark=!t.themeDark},storeLocale(t,e){t.locale=e}},ce={setThemeDark(t,e){t.commit("storeThemeDark",e)},setLocale(t,e){t.commit("storeLocale",e)}},le={namespaced:!0,state:se,getters:ae,mutations:ie,actions:ce},ue={loading:!1,progress:0,message:void 0,error:void 0},me={loading:t=>t.loading,progress:t=>t.progress,message:t=>t.message,error:t=>t.error},_e={storeLoading(t,e){t.loading=e},storeProgress(t,e){t.progress=e,t.loading=!0},storeMessage(t,e){t.message=e},storeError(t,e){t.error=e}},pe={setLoading(t,e=!1){t.commit("storeLoading",e)},setProgress(t,e=0){t.commit("storeProgress",e)},setMessage(t,e){t.commit("storeMessage",e)},setError(t,e){t.commit("storeError",e)}},de={strict:!1,state:ue,getters:me,mutations:_e,actions:pe,modules:{ConfigModule:le},plugins:[new D({key:"Vuetify",storage:window.localStorage,modules:["ConfigModule"]}).plugin]},b=P(de),fe=[{path:"/",name:"Home",component:()=>w(()=>import("./HomePage.a911a2ec.js"),["HomePage.a911a2ec.js","HomePage.758c473e.css","materialdesignicons.ad86dcb1.css","vue.aa6e4883.js","vuetify.9a8ab645.js","vuetify.e64d73e1.css"],import.meta.url)},{path:"/about",name:"About",component:()=>w(()=>import("./AboutPage.e4c8d143.js"),["AboutPage.e4c8d143.js","materialdesignicons.ad86dcb1.css","vue.aa6e4883.js","vuetify.9a8ab645.js","vuetify.e64d73e1.css"],import.meta.url)},{path:"*",name:"Error",component:()=>w(()=>import("./ErrorPage.9c4a983d.js"),["ErrorPage.9c4a983d.js","materialdesignicons.ad86dcb1.css","vue.aa6e4883.js","vuetify.9a8ab645.js","vuetify.e64d73e1.css"],import.meta.url)}],L=O({base:"./",mode:"history",scrollBehavior:async(t,e,o)=>{let s=0;return t.hash?s=t.hash:o&&(s=o.y),{x:0,y:await q(s)}},routes:fe});L.beforeEach(async(t,e,o)=>{b.dispatch("setLoading",!0),await A(),o()});L.afterEach(()=>{b.dispatch("setLoading",!1)});async function ge(){const t=document.createElement("link");t.rel="dns-prefetch",t.href="//fonts.googleapis.com",document.head.appendChild(t);const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.gstatic.com",document.head.appendChild(e);const o={google:{families:["Roboto:100,300,400,500,700,900&display=swap","Noto+Colr+Emoji+Glyf:400"]},active:()=>{sessionStorage.fonts=!0}};z.exports.load(o)}ge();const he=ve({icons:{iconfont:"mdi"},theme:{options:{themeCache:{get:t=>localStorage.getItem(JSON.stringify(t)),set:(t,e)=>{localStorage.setItem(JSON.stringify(t),e)}},customProperties:!0}}});function ve(t){return k.use(C),new C(t)}const ye=M({setup:(t,e)=>{const o=N(),s=I(),n=x(),r=H(),u=v("Vite Vuetify Application"),m=v(!1),a=v(!1),l=v(n?.name),p=f({get:()=>o.getters.message,set:c=>o.dispatch("setMessage",c)}),g=f({get:()=>o.getters.progress,set:c=>o.dispatch("setProgress",c)}),i=f({get:()=>o.getters.loading,set:c=>o.dispatch("setLoading",c)}),h=f({get:()=>o.getters["ConfigModule/themeDark"],set:c=>o.dispatch("ConfigModule/setThemeDark",c)}),d=f(()=>o.getters.error);return _(p,()=>a.value=!0),_(l,()=>a.value=!1),_(i,c=>document.body.style.cursor=c?"wait":"auto"),_(d,()=>s.push({name:"Error"})),_(h,c=>r.theme.dark=c),_(a,c=>{c||(p.value="")}),F(()=>{document.title=u.value,i.value=!1}),{vuetify:r,title:u,drawer:m,snackbar:a,snackbarText:p,progress:g,loading:i,error:d,themeDark:h}}}),ke=""+new URL("vuetify.a40b4f16.svg",import.meta.url).href;function we(t,e,o,s,n,r,u,m){var a=typeof t=="function"?t.options:t;e&&(a.render=e,a.staticRenderFns=o,a._compiled=!0),s&&(a.functional=!0),r&&(a._scopeId="data-v-"+r);var l;if(u?(l=function(i){i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!i&&typeof __VUE_SSR_CONTEXT__<"u"&&(i=__VUE_SSR_CONTEXT__),n&&n.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(u)},a._ssrRegister=l):n&&(l=m?function(){n.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(a.functional){a._injectStyles=l;var p=a.render;a.render=function(h,d){return l.call(d),p(h,d)}}else{var g=a.beforeCreate;a.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:a}}var be=function(){var e=this,o=e._self._c;return e._self._setupProxy,o(W,[o(J,{attrs:{app:""}},[o(X,{on:{click:function(s){s.stopPropagation(),e.drawer=!e.drawer}}}),o(B,[e._v(e._s(e.title))]),o(G),o(E,{attrs:{icon:""},on:{click:function(s){e.themeDark=!e.themeDark}}},[o(y,[e._v("mdi-theme-light-dark")])],1),o(K,{attrs:{active:e.loading,indeterminate:e.progress===null,value:e.progress,absolute:"",bottom:"",color:"primary accent-3"}})],1),o(j,{attrs:{app:""},model:{value:e.drawer,callback:function(s){e.drawer=s},expression:"drawer"}},[o(Q,{attrs:{link:""}},[o(T,{attrs:{to:{name:"Home"}}},[o($,[o(y,[e._v("mdi-home")])],1),o(V,[o(R,[e._v("Home")])],1)],1),o(T,{attrs:{to:{name:"About"}}},[o($,[o(y,[e._v("mdi-information")])],1),o(V,[o(R,[e._v("About")])],1)],1)],1)],1),o(Y,[o(Z,{attrs:{mode:"out-in"}},[o("router-view")],1)],1),o(ee,{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{"z-index":"999"}},[o(te,{attrs:{indeterminate:"",size:"64"}})],1),o(oe,{attrs:{app:"",timeout:"5000",transition:"scroll-y-transition"},scopedSlots:e._u([{key:"action",fn:function({attrs:s}){return[o(E,e._b({attrs:{color:"primary",icon:""},on:{click:function(n){e.snackbar=!1}}},"v-btn",s,!1),[o(y,[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(s){e.snackbar=s},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")]),o("teleport",{attrs:{to:"head"}},[o("meta",{attrs:{name:"theme-color",content:e.vuetify.theme.currentTheme.primary?.toString()}}),o("link",{attrs:{rel:"icon",href:ke,type:"image/svg+xml"}})])],1)},Le=[],Ce=we(ye,be,Le,!1,null,null,null,null);const Ee=Ce.exports;k.config.productionTip=!1;k.component("Teleport",U);const Te=new k({router:L,store:b,vuetify:he,render:t=>t(Ee)});Te.$mount("#app");export{ke as l,we as n};
