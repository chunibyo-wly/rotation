(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"3ed0":function(e,t,n){"use strict";n("ec4d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("cube")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}})},s=[],c=n("5a89"),u=n("ef20"),l=n("4721"),d={name:"Home",data:function(){return{camera:null,scene:null,renderer:null,mesh:null}},methods:{init:function(){var e=document.getElementById("container");this.camera=new c["h"](70,e.clientWidth/e.clientHeight,.01,10),this.camera.position.z=1,this.scene=new c["j"];var t=new c["b"](.2,.2,.2),n=new c["g"];this.mesh=new c["f"](t,n),this.scene.add(this.mesh);var r=new c["d"](1,10);r.rotation.x=Math.PI/2;var i=new c["a"](1);this.scene.add(r,i),this.renderer=new c["o"]({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.stats=new u["a"],e.appendChild(this.stats.dom);var a=new l["a"](this.camera,this.renderer.domElement);a.minDistance=.2},animate:function(){requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.stats.begin(),this.renderer.render(this.scene,this.camera),this.stats.end()}},mounted:function(){this.init(),this.animate()}},f=d,h=(n("3ed0"),n("2877")),p=Object(h["a"])(f,o,s,!1,null,"feaf619c",null),m=p.exports,v={name:"App",components:{Cube:m}},b=v,w=(n("034f"),Object(h["a"])(b,i,a,!1,null,null,null)),y=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){},ec4d:function(e,t,n){}});
//# sourceMappingURL=app.7ec01d19.js.map