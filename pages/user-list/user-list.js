(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-list/user-list"],{"2b55":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n){return o(t)||u(t,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,n){var e=[],i=!0,r=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)if(e.push(s.value),n&&e.length===n)break}catch(o){r=!0,a=o}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw a}}return e}function o(t){if(Array.isArray(t))return t}function c(t,n,e,i,r,a,s){try{var u=t[a](s),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,r)}function l(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var a=t.apply(n,e);function s(t){c(a,i,r,s,u,"next",t)}function u(t){c(a,i,r,s,u,"throw",t)}s(void 0)})}}var f=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b475"))},d=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"f422"))},h=function(){return e.e("components/user-list/user-list").then(e.bind(null,"8da5"))},p=function(){return e.e("components/common/load-more").then(e.bind(null,"7cb6"))},b=function(){return e.e("components/common/no-thing").then(e.bind(null,"0d7e"))},v={components:{swiperTabHead:d,userList:h,loadMore:p,noThing:b,uniNavBar:f},computed:{getHeight:function(){}},data:function(){return{tabIndex:0,tabBars:[{name:"互关",id:"huguan",num:10},{name:"关注",id:"guanzhu",num:20},{name:"粉丝",id:"fensi",num:30}],newslist:[{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1}]}},onNavigationBarButtonTap:function(n){0==n.index&&t.navigateBack({delta:1})},onNavigationBarSearchInputClicked:function(){t.navigateTo({url:"../search/search?searchType=user"})},onShow:function(){this.__init()},methods:{clickRight:function(){t.navigateBack({delta:1})},openSearch:function(){t.navigateTo({url:"../search/search?searchType=user"})},__init:function(){this.tabBars[0].num=this.User.counts.friend_count<100?this.User.counts.friend_count:"99+",this.tabBars[1].num=this.User.counts.withfollow_count<100?this.User.counts.withfollow_count:"99+",this.tabBars[2].num=this.User.counts.withfen_count<100?this.User.counts.withfen_count:"99+",this.getList()},getUrl:function(){var t=["/friends/","/follows/","/fens/"];return t[this.tabIndex]+this.newslist[this.tabIndex].page},getList:function(){var t=l(i.default.mark(function t(){var n,e,r,s,u,o,c,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=this.tabIndex,t.next=4,this.$http.get(this.getUrl(),{},{token:!0,checkToken:!0});case 4:if(e=t.sent,r=a(e,2),s=r[0],u=r[1],this.$http.errorCheck(s,u)){t.next=11;break}return this.newslist[n].loadtext="上拉加载更多",t.abrupt("return");case 11:for(o=[],console.log(u),c=u.data.data.list,l=0;l<c.length;l++)o.push(this.__format(c[l],n));return this.newslist[n].list=this.newslist[n].page>1?this.newslist[n].list.concat(o):o,this.newslist[n].firstload=!0,this.newslist[n].loadtext=c.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 21:return t.prev=21,t.t0=t["catch"](0),t.abrupt("return");case 24:case"end":return t.stop()}},t,this,[[0,21]])}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t,n){return{id:t.userinfo.user_id,userpic:t.userpic,username:t.username,age:t.userinfo.age,sex:t.userinfo.sex,isguanzhu:2!==n}},loadmore:function(t){"上拉加载更多"===this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",this.newslist[t].page++,this.getList())},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current,this.newslist[this.tabIndex].firstload||this.getList()}}};n.default=v}).call(this,e("543d")["default"])},"4ff7":function(t,n,e){"use strict";var i={"uni-nav-bar":()=>e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b475")),"user-list":()=>e.e("components/user-list/user-list").then(e.bind(null,"8da5"))},r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"65de":function(t,n,e){"use strict";e.r(n);var i=e("2b55"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a},9367:function(t,n,e){"use strict";e.r(n);var i=e("4ff7"),r=e("65de");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);var s,u=e("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=o.exports},c684:function(t,n,e){"use strict";(function(t){e("2b3c"),e("921b");i(e("66fd"));var n=i(e("9367"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["c684","common/runtime","common/vendor"]]]);