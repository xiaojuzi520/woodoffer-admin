(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-list"],{1973:function(e,t,a){"use strict";a.r(t);var n=a("68f4"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},"1ed0":function(e,t,a){"use strict";a.r(t);var n=a("e369"),r=a("4a93");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);var o,s=a("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"fe2ccaa4",null,!1,n["a"],o);t["default"]=u.exports},"3b0a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformObjectEmptyString=void 0;var n=a("961d"),r=function(e){return(0,n.transform)(e,(function(e,t,a){""!==t&&(e[a]=t)}),{})};t.transformObjectEmptyString=r},"4a93":function(e,t,a){"use strict";a.r(t);var n=a("f4c9"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},"68f4":function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("4160"),a("caad"),a("a15b"),a("d81d"),a("a9e3"),a("d3b7"),a("ac1f"),a("2532"),a("466d"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("5530")),o=a("961d"),s=a("74f8"),u=a("3b0a"),l=a("2f62"),c=n(a("1ed0")),d=e.database(),f=d.command,p="uni-id-users",m=d.collection(p),b={components:{editNew:c.default},data:function(){var e=this;this.$createElement;return{searchForm:{mobile:"",origin:"",product_type:""},currentTab:"2",where:{role:f.eq("user"),status:2},orderby:"register_date desc",pageOptions:{size:20,current:1},loading:!1,expData:[],expExcel:{filename:"用户列表.xls",type:"xls",json_fields:{"用户ID":"_id","用户名":"nickName","微信头像":"avatarUrl","手机号":"mobile","用户状态":"status","用户标签":"tags","期望产品类型":"product_type","申请说明":"desc","注册来源":"origin","注册IP":"register_ip","注册时间":"register_date"}},tableColumns:[{label:"用户名",prop:"nickName",width:120},{label:"微信头像",prop:"avatarUrl",width:80,render:function(e,t){var a=t.props.row;return e("el-image",{style:"width: 50px; height: 50px",attrs:{src:a.avatarUrl,fit:"fill"}})}},{label:"手机号",prop:"mobile",width:120},{label:"注册来源",prop:"origin",width:120},{label:"期望产品类型",prop:"product_type",width:120,formatter:function(e){return s.ProductTypeEnum[e.product_type]}},{label:"申请说明",prop:"desc",width:120},{label:"用户标签",width:120,formatter:function(e){return(e.tags||[]).join(",")}},{label:"用户状态",prop:"status",width:120,render:function(e,t){var a=t.props.row,n=["warning","success","danger"],r=n[a.status],i=s.UserStatusEnum[a.status];return e("el-tag",{attrs:{type:r}},[i])}},{label:"注册IP",prop:"register_ip",width:180},{label:"注册时间",prop:"register_date",width:180,formatter:function(t){return e.$formatDate(t.register_date)}},{label:"操作",width:160,align:"center",fixed:"right",render:function(t,a){var n=a.props.row,r=function(){uni.showModal({title:"审核",content:"审核说明：".concat(n.desc,", 是否通过？"),success:function(t){if(t.confirm){var a=(0,o.cloneDeep)(n);a.status=0,e.submitUpdate(a,!0)}}})},i=function(){e.editNewVisible=!0,e.$nextTick((function(){e.$refs.editForm.formData=(0,o.cloneDeep)(n)})),console.log(e.$refs)},s=2===n.status?t("el-button",{on:{click:r},attrs:{size:"mini",type:"success"}},["审核"]):null;return t("div",{class:"table-action"},[s,t("el-button",{on:{click:i},attrs:{size:"mini",type:"primary"}},["修改"])])}}],editNewVisible:!1,userCount:{0:0,1:0,2:0}}},computed:(0,i.default)({},(0,l.mapState)("user",["userInfo"])),watch:{},methods:{getUserCount:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.collection(p).aggregate().match({mobile:f.neq(null)}).group({_id:"$status",count:f.aggregate.sum(1)}).end();case 2:a=t.sent,n=a.result,0===n.code&&(r={},n.data.forEach((function(e){r[e._id]=e.count})),e.userCount=(0,i.default)((0,i.default)({},e.userCount),r),o=e.userCount[2]?"2":"0",e.handleTabChange({name:o}));case 5:case"end":return t.stop()}}),t)})))()},handleTabChange:function(e){var t=e.name;this.where.status=Number(t),this.currentTab=t,this.loadData()},getAllData:function(){var e=this;return m.where(this.where).limit(500).get({getCount:!0}).then((function(t){var a=t.result,n=a.count,r=a.data;n>500?e.$message.warning("由于数据库性能原因，导出超过500条时，建议通过控制台进行全量导出"):e.expData=e.formatExcelData(r)}))},sendNotice:function(){},submitUpdate:function(e,t){var a=this,n=e.tags,r=e.status;this.loading=!0,m.where({_id:e._id}).update({tags:n,status:r}).then((function(n){var r=t?"审核通过":"更新成功";a.$message.success(r),t&&a.$request("user/sendAuditMessage",{userId:e._id}),a.close(),t&&a.getUserCount(),a.loadData()})).finally((function(){a.loading=!1}))},close:function(){this.editNewVisible=!1},formatExcelData:function(e){var t=this;return e.map((function(e){return(0,i.default)((0,i.default)({},e),{},{status:s.UserStatusEnum[e.status],register_date:t.$formatDate(e.register_date),product_type:s.ProductTypeEnum[e.product_type],tags:(e.tags||[]).join(",")})}))},search:function(){var e=(0,i.default)((0,i.default)({},this.where),this.searchForm);this.where=(0,u.transformObjectEmptyString)(e),this.loadData()},loadData:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$nextTick((function(){e.$refs.udb.loadData({clear:t})}))},onPageChanged:function(e){this.options.pageCurrent=e.current},navigateTo:function(e,t){var a=this;uni.navigateTo({url:e,events:{refreshData:function(){a.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this.selectedItems(),t=this.userInfo._id;e.includes(t)?uni.showToast({icon:"none",title:"当前账号不能删除自己",duration:1500}):this.$refs.udb.remove(e)},parseUserStatus:function(e){return s.UserStatusEnum[e]},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this.userInfo._id;t!==e._id?this.$refs.udb.remove(e._id):uni.showToast({icon:"none",title:"不允许 admin 账号删除自己",duration:1500})}},mounted:function(){this.getUserCount()}};t.default=b}).call(this,a("a9ff")["default"])},"69ea":function(e,t,a){"use strict";var n=a("ed89"),r=a.n(n);r.a},"71c8":function(e,t,a){"use strict";a.r(t);var n=a("7f1f"),r=a("1973");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("69ea");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"318299d8",null,!1,n["a"],o);t["default"]=u.exports},"74f8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoginEnum=t.OriginTypeEnum=t.OperateEnum=t.CurrencyEnum=t.TradeTypeEnum=t.ProductTypeEnum=t.UserStatusEnum=void 0;var n=["激活","关停","待激活"];t.UserStatusEnum=n;var r=["期货","现货"];t.ProductTypeEnum=r;var i=["FOB","CIF"];t.TradeTypeEnum=i;var o=["RMB","USD","EUR"];t.CurrencyEnum=o;var s={create:"创建",update:"更新",delete:"删除"};t.OperateEnum=s;var u={mp:"微信",web:"网页"};t.OriginTypeEnum=u;var l={login:"登录",logout:"退出",register:"注册"};t.LoginEnum=l},"7f1f":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={downloadExcel:a("f17b").default,unicloudDb:a("960d").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-title"},[e._v("用户管理")]),a("v-uni-view",{staticClass:"uni-sub-title"})],1),a("v-uni-view",{staticClass:"uni-group"},[a("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.expExcel.json_fields,data:e.expData,beforeGenerate:e.getAllData,type:e.expExcel.type,name:e.expExcel.filename}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),a("v-uni-view",{staticClass:"search"},[a("el-form",{attrs:{inline:!0,model:e.searchForm}},[a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{maxlength:"11",placeholder:"手机号",clearable:!0},model:{value:e.searchForm.mobile,callback:function(t){e.$set(e.searchForm,"mobile",t)},expression:"searchForm.mobile"}})],1),a("el-form-item",{attrs:{label:"注册来源"}},[a("el-select",{attrs:{placeholder:"注册来源",clearable:!0},model:{value:e.searchForm.origin,callback:function(t){e.$set(e.searchForm,"origin",t)},expression:"searchForm.origin"}},[a("el-option",{attrs:{label:"微信",value:"mp"}}),a("el-option",{attrs:{label:"H5",value:"h5"}})],1)],1),a("el-form-item",{attrs:{label:"期望产品类型"}},[a("el-select",{attrs:{placeholder:"注册来源",clearable:!0},model:{value:e.searchForm.product_type,callback:function(t){e.$set(e.searchForm,"product_type",t)},expression:"searchForm.product_type"}},[a("el-option",{attrs:{label:"期货",value:0}}),a("el-option",{attrs:{label:"现货",value:1}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("查询")])],1)],1)],1),a("div",{staticClass:"user-tabs"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":function(t){arguments[0]=t=e.$handleEvent(t),e.handleTabChange.apply(void 0,arguments)}},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("el-tab-pane",{attrs:{name:"0"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("已激活("+e._s(e.userCount[0])+")")])]),a("el-tab-pane",{attrs:{name:"2"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("待激活("+e._s(e.userCount[2])+")")])]),a("el-tab-pane",{attrs:{name:"1"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("已停用("+e._s(e.userCount[1])+")")])])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-users",options:e.pageOptions,where:e.where,loadtime:"manual",field:"_id,nickName,username,avatarUrl,gender,register_ip,wx_openid,mobile,tags,status,\n                 register_date,product_type,desc,origin,update_date","page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.pageOptions.pageSize,"page-current":e.pageOptions.pageCurrent},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,r=t.pagination,i=t.loading;t.error;return[a("xl-table",{attrs:{"table-data":n,"table-columns":e.tableColumns,loading:i,count:r.count,"page-size":r.size,"page-no":r.current},on:{"change-page":function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}}})]}}])})],1),e.editNewVisible?a("editNew",{ref:"editForm",attrs:{loading:e.loading},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.submitUpdate.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}):e._e()],1)},i=[]},b8f0:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".user-tabs[data-v-318299d8]{padding-left:15px}",""]),e.exports=t},e369:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("xl-dialog",{ref:"dialog",attrs:{title:"更新用户信息",width:"600px",saveText:"确认",loading:e.loading},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[a("xl-form",{ref:"form",attrs:{"form-data":e.formData,"form-options":e.formOptions}})],1)},i=[]},ed89:function(e,t,a){var n=a("b8f0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("1187edab",n,!0,{sourceMap:!1,shadowMode:!1})},f4c9:function(e,t,a){"use strict";a("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("74f8"),r={name:"editNew",props:["loading"],data:function(){return{formData:{name:"",mobile:""},formOptions:[{formItem:{label:"用户名",prop:"nickName"}},{formItem:{label:"手机号",prop:"mobile"}},{formItem:{label:"申请说明",prop:"desc"}},{type:"select",formItem:{prop:"tags",label:"标签",rules:[]},attrs:{type:"multiple",filterable:!0,allowCreate:!0,defaultFirstOption:!0,default:[],options:[]}},{type:"select",formItem:{prop:"status",label:"用户状态",rules:[]},attrs:{default:"",options:n.UserStatusEnum.map((function(e,t){return{label:e,value:t}}))}}]}},methods:{submitForm:function(){var e=this;this.$refs.form.validate((function(){e.$emit("submit",e.formData)}))},close:function(){this.$emit("close")}}};t.default=r}}]);