(this.webpackJsonpinstagroom=this.webpackJsonpinstagroom||[]).push([[0],{101:function(e,t,n){e.exports=n(180)},107:function(e,t,n){},108:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),o=n.n(c),i=(n(106),n(107),n(108),n(37)),s=n(88),l=n.n(s),u=n(186),f=n(187),d=n(188),m=n(185),p=n(184),v=m.a.Meta,h=function(){return a.a.createElement(m.a,{style:{width:300},cover:a.a.createElement("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[a.a.createElement(u.a,{key:"setting"}),a.a.createElement(f.a,{key:"edit"}),a.a.createElement(d.a,{key:"ellipsis"})]},a.a.createElement(v,{avatar:a.a.createElement(p.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"}))},b=function(e){var t,n=e.componentStack,r=e.error;return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("strong",null,"Oops! An error occured!")),a.a.createElement("p",null,"Here\u2019s what we know\u2026"),a.a.createElement("p",null,a.a.createElement("strong",null,"Error:")," ",null!==(t=null===r||void 0===r?void 0:r.toString())&&void 0!==t?t:""),a.a.createElement("p",null,a.a.createElement("strong",null,"Stacktrace:")," ",n))},w=function(){return a.a.createElement(l.a,{FallbackComponent:b},a.a.createElement(h,null))},g=new URL("https://api.flickr.com/services/feeds/photos_public.gne?format=json"),k=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.flicker})).items;return a.a.useEffect((function(){e({type:"saga/fetchPublicPhotosFeed",payload:g.toString()})}),[]),a.a.useEffect((function(){console.log({items:t})}),[t]),a.a.createElement("article",{className:"App"},a.a.createElement(w,null))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O=n(98),x=n(22),y=n(46),S=n(14),A={increment:Object(S.d)((function(e){e.count++}))},W={decrement:Object(S.d)((function(e){e.count--}))},P=Object(x.b)({name:"counter",initialState:{count:0},reducers:Object(y.a)({},A,{},W)}),C={increment:Object(S.d)((function(e,t){var n=t.payload.items;console.log({items:n}),e.items=n}))},T={decrement:Object(S.d)((function(e,t){var n=t.payload.items;e.items=n}))},L=Object(x.b)({name:"flicker",initialState:{items:[]},reducers:Object(y.a)({},C,{},T)}),R=n(13),U=P.reducer,q=P.actions,F=q.increment,H=(q.decrement,L.reducer),J=L.actions,N=J.increment,z=(J.decrement,Object(R.c)({counter:U,flicker:H})),B=n(99),M=n(15),X=n.n(M),D=n(23),G=X.a.mark(K),I=X.a.mark(Z),V=X.a.mark(ee),Y=X.a.mark(te),$=X.a.mark(ne),_=X.a.mark(re);function K(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({saga:"hello Saga!"}),e.next=3,1;case 3:case"end":return e.stop()}}),G)}var Q=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function Z(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.b)(Q,1e3);case 2:return e.next=4,Object(D.c)(F());case 4:case"end":return e.stop()}}),I)}function ee(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("saga/incrementAsync",Z);case 2:case"end":return e.stop()}}),V)}function te(e){var t;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(D.b)(fetch,e.payload);case 3:return t=n.sent,n.next=6,Object(D.c)(N(t));case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),Y,null,[[0,8]])}function ne(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("saga/fetchPublicPhotosFeed",te);case 2:case"end":return e.stop()}}),$)}function re(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([K(),ee(),ne()]);case 2:case"end":return e.stop()}}),_)}var ae=Object(B.a)(),ce=Object(x.a)({reducer:z,middleware:[].concat(Object(O.a)(Object(x.c)()),[ae])});ae.run(re),o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:ce},a.a.createElement(k,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/frontend-dev-task",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/frontend-dev-task","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[101,1,2]]]);
//# sourceMappingURL=main.fc1824e8.chunk.js.map