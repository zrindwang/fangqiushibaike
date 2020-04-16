(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-space/user-space-userinfo"],{"0d93":function(e,t,n){"use strict";n.r(t);var u=n("e7ed"),r=n("c51c");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("6484");var f,o=n("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"a8cfd83c",null,!1,u["a"],f);t["default"]=c.exports},"1eef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("d86f"));function r(e){return e&&e.__esModule?e:{default:e}}var i={props:{userinfo:Object},computed:{getRegAge:function(){return this.userinfo.regtime?u.default.gettime.sumAge(this.userinfo.regtime):"未知"},getXingZuo:function(){return this.userinfo.birthday&&"未知"!=this.userinfo.birthday&&""!==this.userinfo.birthday?u.default.gettime.getHoroscope(this.userinfo.birthday):"未知"}}};t.default=i},4888:function(e,t,n){},6484:function(e,t,n){"use strict";var u=n("4888"),r=n.n(u);r.a},c51c:function(e,t,n){"use strict";n.r(t);var u=n("1eef"),r=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);t["default"]=r.a},e7ed:function(e,t,n){"use strict";var u,r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-space/user-space-userinfo-create-component',
    {
        'components/user-space/user-space-userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0d93"))
        })
    },
    [['components/user-space/user-space-userinfo-create-component']]
]);
