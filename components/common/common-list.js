(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/common-list"],{"02ac":function(t,e,n){"use strict";n.r(e);var r=n("2fa8"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"2fa8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return c(t)||o(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(c){i=!0,a=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw a}}return n}function c(t){if(Array.isArray(t))return t}function s(t,e,n,r,i,a,u){try{var o=t[a](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function u(t){s(a,r,i,u,o,"next",t)}function o(t){s(a,r,i,u,o,"throw",t)}u(void 0)})}}var l=function(){return n.e("components/common/tag-sex-age").then(n.bind(null,"ab51"))},d={components:{tagSexAge:l},props:{nonavigate:{type:Boolean,default:!1},item:Object,index:Number},computed:{getSex:function(){return this.item.sex},getAge:function(){return this.item.age}},methods:{guanzhu:function(){var e=f(r.default.mark(function e(){var n,i,u,o,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$http.post("/follow",{follow_id:this.item.userid},{token:!0,checkToken:!0,checkAuth:!0});case 3:if(n=e.sent,i=a(n,2),u=i[0],o=i[1],this.$http.errorCheck(u,o)){e.next=9;break}return e.abrupt("return");case 9:t.showToast({title:"关注成功"}),c={type:"guanzhu",userid:this.item.userid,data:!0},this.$emit("changeevent",c),t.$emit("updateData",c),e.next=18;break;case 15:return e.prev=15,e.t0=e["catch"](0),e.abrupt("return");case 18:case"end":return e.stop()}},e,this,[[0,15]])}));function n(){return e.apply(this,arguments)}return n}(),opendetail:function(){t.navigateTo({url:"../../pages/detail/detail?detailData="+JSON.stringify(this.item)}),this.User.addHistoryList(this.item)},caozuo:function(){var e=f(r.default.mark(function e(n){var i,u,o,c,s,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i="ding"===n?1:2,e.next=3,this.$http.post("/support",{post_id:this.item.id,type:i-1},{token:!0,checkToken:!0,checkAuth:!0});case 3:if(u=e.sent,o=a(u,2),c=o[0],s=o[1],this.$http.errorCheck(c,s)){e.next=9;break}return e.abrupt("return");case 9:return t.showToast({title:"顶成功"}),f={type:"support",post_id:this.item.id,do:n},this.$emit("changeevent",f),e.abrupt("return",t.$emit("updateData",f));case 13:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),openSpace:function(){this.nonavigate||t.navigateTo({url:"../../pages/user-space/user-space?userid="+this.item.userid})}}};e.default=d}).call(this,n("543d")["default"])},"469b8":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"6b03":function(t,e,n){"use strict";n.r(e);var r=n("469b8"),i=n("02ac");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("735b");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"2f43c172",null,!1,r["a"],u);e["default"]=c.exports},"735b":function(t,e,n){"use strict";var r=n("d8b2"),i=n.n(r);i.a},d8b2:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/common-list-create-component',
    {
        'components/common/common-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6b03"))
        })
    },
    [['components/common/common-list-create-component']]
]);