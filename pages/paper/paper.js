(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paper/paper"],{"3a5f":function(t,n,e){"use strict";e.r(n);var i=e("4185"),r=e("3bdd");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("7633");var o,u=e("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=s.exports},"3bdd":function(t,n,e){"use strict";e.r(n);var i=e("6cb0"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a},4185:function(t,n,e){"use strict";var i={"uni-nav-bar":()=>e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b475"))},r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"6cb0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("d86f"));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b475"))},o=function(){return e.e("components/paper/paper-list").then(e.bind(null,"286b"))},u=function(){return e.e("components/paper/paper-left-popup").then(e.bind(null,"0736"))},s=function(){return e.e("components/common/no-thing").then(e.bind(null,"0d7e"))},c={components:{paperList:o,paperLeftPopup:u,noThing:s,uniNavBar:a},data:function(){return{firstload:!1,show:!1,list:[]}},onPullDownRefresh:function(){this.getdata()},onNavigationBarButtonTap:function(t){switch(t.index){case 0:this.User.navigate({url:"../user-list/user-list"}),this.hidepopup();break;case 1:this.showpopup();break}},onShow:function(){this.getdata()},onLoad:function(){var n=this;t.$on("UserChat",function(t){var e=n.list.findIndex(function(n){return n.userid===t.from_id});if(-1!==e)return n.list[e].data=t.data,n.list[e].time=i.default.gettime.gettime(t.time),n.list[e].noreadnum++,void(n.list=n.$chat.__toFirst(n.list,e));var r=n.$chat.__format(t,{type:"chatlist"});r.time=i.default.gettime.gettime(r.time),r.noreadnum=1,n.list.unshift(r)})},methods:{clickLeft:function(){this.User.navigate({url:"../user-list/user-list"}),this.hidepopup()},clickRight:function(){this.showpopup()},addfriend:function(){this.User.navigate({url:"../search/search?searchType=user"}),this.hidepopup()},clear:function(){this.User.userinfo.id&&(t.removeStorageSync("noreadnum"+this.User.userinfo.id),t.removeStorageSync("chatlist"+this.User.userinfo.id),this.$chat.initTabbarBadge(),this.getdata(),t.showToast({title:"清除成功"})),this.hidepopup()},hidepopup:function(){this.show=!1},showpopup:function(){this.show=!0},getdata:function(){try{var n=this.User.userinfo.id;if(!n)return this.firstload=!0,t.stopPullDownRefresh();this.list=[];var e=t.getStorageSync("chatlist"+this.User.userinfo.id);e=e?JSON.parse(e):[];for(var r=0;r<e.length;r++)e[r].time=i.default.gettime.gettime(e[r].time);this.list=e,this.firstload=!0}catch(a){return t.stopPullDownRefresh()}t.stopPullDownRefresh()}}};n.default=c}).call(this,e("543d")["default"])},7633:function(t,n,e){"use strict";var i=e("c402"),r=e.n(i);r.a},c402:function(t,n,e){},d812:function(t,n,e){"use strict";(function(t){e("2b3c"),e("921b");i(e("66fd"));var n=i(e("3a5f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["d812","common/runtime","common/vendor"]]]);