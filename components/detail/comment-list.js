(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/detail/comment-list"],{"24f7":function(t,e,n){"use strict";n.r(e);var u=n("887d"),a=n("ea2d");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("e84a");var r,c=n("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"dc44b40a",null,!1,u["a"],r);e["default"]=o.exports},"47a4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:Number},methods:{reply:function(){this.$emit("reply",this.item.id)},openSpace:function(){t.navigateTo({url:"../../pages/user-space/user-space?userid="+this.item.userid})}}};e.default=n}).call(this,n("543d")["default"])},"887d":function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u})},d794:function(t,e,n){},e84a:function(t,e,n){"use strict";var u=n("d794"),a=n.n(u);a.a},ea2d:function(t,e,n){"use strict";n.r(e);var u=n("47a4"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/detail/comment-list-create-component',
    {
        'components/detail/comment-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("24f7"))
        })
    },
    [['components/detail/comment-list-create-component']]
]);
