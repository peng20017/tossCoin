(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{3038:function(t,n,u){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},e=[];u.d(n,"b",function(){return o}),u.d(n,"c",function(){return e}),u.d(n,"a",function(){return i})},4127:function(t,n,u){"use strict";u.r(n);var i=u("5a23"),o=u.n(i);for(var e in i)"default"!==e&&function(t){u.d(n,t,function(){return i[t]})}(e);n["default"]=o.a},"4b67":function(t,n,u){"use strict";var i=u("bf1d"),o=u.n(i);o.a},"5a23":function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"抛硬币了",coinimg:"/static/coin2_front.png",coinimg2:"/static/coin2_back.png",isStatus:0}},onLoad:function(){},methods:{tossCoin:function(){var t=Math.random();this.isStatus=0;var n=this;setTimeout(function(){t<=.5?(n.isStatus=1,console.log("这是正面",n.isStatus)):(n.isStatus=2,console.log("这是反面",n.isStatus))},100)}}};n.default=i},6340:function(t,n,u){"use strict";u.r(n);var i=u("3038"),o=u("4127");for(var e in o)"default"!==e&&function(t){u.d(n,t,function(){return o[t]})}(e);u("4b67");var a,c=u("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=r.exports},bf1d:function(t,n,u){},cb9b:function(t,n,u){"use strict";(function(t){u("7329"),u("921b");i(u("66fd"));var n=i(u("6340"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,u("543d")["createPage"])}},[["cb9b","common/runtime","common/vendor"]]]);