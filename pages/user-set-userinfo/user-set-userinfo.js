(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-userinfo/user-set-userinfo"],{"2b16":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r("a34a")),i=s(r("d86f"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return c(e)||o(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done);n=!0)if(r.push(u.value),t&&r.length===t)break}catch(o){i=!0,s=o}finally{try{n||null==a["return"]||a["return"]()}finally{if(i)throw s}}return r}function c(e){if(Array.isArray(e))return e}function f(e,t,r,n,i,s,u){try{var a=e[s](u),o=a.value}catch(c){return void r(c)}a.done?t(o):Promise.resolve(o).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var s=e.apply(t,r);function u(e){f(s,n,i,u,a,"next",e)}function a(e){f(s,n,i,u,a,"throw",e)}u(void 0)})}}var d=["不限","男","女"],l=["秘密","未婚","已婚"],p=["秘密","IT","老师"],b=function(){return Promise.all([r.e("common/vendor"),r.e("components/mpvue-citypicker/mpvueCityPicker")]).then(r.bind(null,"63df"))},m={components:{mpvueCityPicker:b},data:function(){return{sexArr:d,qgArr:l,userpic:"",username:"",sex:0,qg:0,job:"",birthday:"",cityPickerValueDefault:[0,0,1],pickerText:""}},onLoad:function(){this.userpic=this.User.userinfo.userpic,this.username=this.User.userinfo.username,this.sex=this.User.userinfo.userinfo.sex||0,this.qg=this.User.userinfo.userinfo.qg||0,this.job=this.User.userinfo.userinfo.job||"请填写",this.birthday=this.User.userinfo.userinfo.birthday||"请填写",this.pickerText=this.User.userinfo.userinfo.path||"请填写"},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.pickerText=e.label},bindDateChange:function(e){this.birthday=e.target.value},changeimg:function(){var t=h(n.default.mark(function t(){var r,i,s,a,o,c,f,h;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.chooseImage({count:1,sizeType:["compressed"]});case 2:if(r=t.sent,i=u(r,2),i[0],s=i[1],s){t.next=8;break}return t.abrupt("return");case 8:return e.showLoading({title:"上传中...",mask:!1}),t.next=11,this.$http.upload("/edituserpic",{name:"userpic",filePath:s.tempFilePaths[0],token:!0,checkToken:!0});case 11:if(a=t.sent,o=u(a,2),c=o[0],f=o[1],h=JSON.parse(f.data),!c&&!h.errorCode){t.next=20;break}return e.showToast({title:h.msg?h.msg:"上传失败",icon:"none"}),e.hideLoading(),t.abrupt("return",!1);case 20:e.hideLoading(),e.showToast({title:"修改头像成功!"}),this.userpic=h.data,this.User.userinfo.userpic=this.userpic,e.setStorageSync("userinfo",this.User.userinfo);case 25:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),changeOne:function(t){var r=this,n=[];switch(t){case"sex":n=d;break;case"qg":n=l;break;case"job":n=p;break}e.showActionSheet({itemList:n,success:function(e){switch(t){case"sex":r.sex=e.tapIndex;break;case"qg":r.qg=e.tapIndex;break;case"job":r.job=n[e.tapIndex];break}}})},submit:function(){var t=h(n.default.mark(function t(){var r,s,a,o,c;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={name:this.username,sex:this.sex,qg:this.qg,job:this.job,birthday:this.birthday,path:this.pickerText,age:i.default.gettime.getAgeByBirthday(this.birthday)},t.next=3,this.$http.post("/edituserinfo",r,{token:!0,checkToken:!0});case 3:if(s=t.sent,a=u(s,2),o=a[0],c=a[1],this.$http.errorCheck(o,c)){t.next=9;break}return t.abrupt("return");case 9:e.showToast({title:"修改成功！"}),this.User.userinfo.username=this.username,this.User.userinfo.userinfo=r,e.setStorageSync("userinfo",this.User.userinfo);case 13:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)}}};t.default=m}).call(this,r("543d")["default"])},4141:function(e,t,r){"use strict";r.r(t);var n=r("a7e0"),i=r("e4db");for(var s in i)"default"!==s&&function(e){r.d(t,e,function(){return i[e]})}(s);r("ee63");var u,a=r("f0c5"),o=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=o.exports},a7e0:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},s=[];r.d(t,"b",function(){return i}),r.d(t,"c",function(){return s}),r.d(t,"a",function(){return n})},b276:function(e,t,r){"use strict";(function(e){r("2b3c"),r("921b");n(r("66fd"));var t=n(r("4141"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},e4db:function(e,t,r){"use strict";r.r(t);var n=r("2b16"),i=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},ee63:function(e,t,r){"use strict";var n=r("f844"),i=r.n(n);i.a},f844:function(e,t,r){}},[["b276","common/runtime","common/vendor"]]]);