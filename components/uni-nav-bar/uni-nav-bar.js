(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"0cf1":function(n,t,e){"use strict";var u=e("2456"),i=e.n(u);i.a},2456:function(n,t,e){},b475:function(n,t,e){"use strict";e.r(t);var u=e("e742"),i=e("c89f");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("0cf1");var r,c=e("f0c5"),a=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=a.exports},c89f:function(n,t,e){"use strict";e.r(t);var u=e("ce26"),i=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=i.a},ce26:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"ecfb"))},i=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"33b5"))},o={name:"uni-nav-bar",components:{uniStatusBar:u,uniIcon:i},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!0},border:{type:[String,Boolean],default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};t.default=o},e742:function(n,t,e){"use strict";var u={"uni-icon":()=>e.e("components/uni-icon/uni-icon").then(e.bind(null,"33b5"))},i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b475"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);
