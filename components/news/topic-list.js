(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list"],{1340:function(t,e,n){"use strict";n.r(e);var i=n("8782"),a=n("b87e");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("beac");var u,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0a6424a4",null,!1,i["a"],u);e["default"]=r.exports},"62dc":function(t,e,n){},8782:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},"9cff":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{ischange:{type:Boolean,default:!1},item:Object,index:Number},methods:{opendetail:function(){if(this.ischange)return t.$emit("changeTopic",{id:this.item.id,title:this.item.title}),void t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=n}).call(this,n("543d")["default"])},b87e:function(t,e,n){"use strict";n.r(e);var i=n("9cff"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=a.a},beac:function(t,e,n){"use strict";var i=n("62dc"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1340"))
        })
    },
    [['components/news/topic-list-create-component']]
]);
