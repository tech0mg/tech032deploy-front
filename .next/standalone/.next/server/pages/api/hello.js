"use strict";(()=>{var e={};e.id=453,e.ids=[453],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},268:(e,t,n)=>{n.r(t),n.d(t,{config:()=>d,default:()=>l,routeModule:()=>s});var r={};n.r(r),n.d(r,{default:()=>a});var o=n(1802),i=n(7153),u=n(6249);function a(e,t){if("GET"===e.method)t.status(200).json({message:"Hello World"});else if("POST"===e.method){let{input:n}=e.body;t.status(200).json({message:n})}}let l=(0,u.l)(r,"default"),d=(0,u.l)(r,"config"),s=new o.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/hello",pathname:"/api/hello",bundlePath:"",filename:""},userland:r})},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=268);module.exports=n})();