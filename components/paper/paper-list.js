(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/paper/paper-list"],{"198c":function(e,n,t){"use strict";t.r(n);var u=t("8150"),i=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=i.a},"1e04":function(e,n,t){},"286b":function(e,n,t){"use strict";t.r(n);var u=t("4745a"),i=t("198c");for(var r in i)"default"!==r&&function(e){t.d(n,e,function(){return i[e]})}(r);t("ea49");var a,c=t("f0c5"),s=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"1646ddaf",null,!1,u["a"],a);n["default"]=s.exports},"4745a":function(e,n,t){"use strict";var u={"uni-badge":()=>t.e("components/uni-badge/uni-badge").then(t.bind(null,"44b7"))},i=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",function(){return i}),t.d(n,"c",function(){return r}),t.d(n,"a",function(){return u})},8150:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("components/uni-badge/uni-badge").then(t.bind(null,"44b7"))},i={components:{uniBadge:u},props:{item:Object,index:Number},computed:{getItemNoreadnum:function(){return this.item.noreadnum}},methods:{opendetail:function(){var e={userid:this.item.userid,username:this.item.username,userpic:this.item.userpic};this.User.navigate({url:"../../pages/user-chat/user-chat?userinfo="+JSON.stringify(e)}),this.$chat.Read(this.item)}}};n.default=i},ea49:function(e,n,t){"use strict";var u=t("1e04"),i=t.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/paper/paper-list-create-component',
    {
        'components/paper/paper-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("286b"))
        })
    },
    [['components/paper/paper-list-create-component']]
]);
