(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-init-init"],{"0ca6":function(n,t,e){"use strict";e.r(t);var i=e("7642"),s=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=s.a},"10a9":function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uniForms:e("12c0").default,uniFormsItem:e("0d07").default},s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"login-box"},[e("v-uni-view",{staticClass:"uni-header"},[e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-view",{staticClass:"uni-title"},[n._v("创建超级管理员")])],1)],1),e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{validateTrigger:"bind",rules:n.rules},on:{submit:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[e("uni-forms-item",{attrs:{"left-icon":"person",name:"username",labelWidth:"35"}},[e("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:"账户"},on:{blur:function(t){arguments[0]=t=n.$handleEvent(t),n.binddata("username",t.detail.value)}}})],1),e("uni-forms-item",{attrs:{"left-icon":"locked",name:"password",labelWidth:"35"}},[e("v-uni-input",{staticClass:"uni-input-border",attrs:{password:n.showPassword,placeholder:"密码"},on:{blur:function(t){arguments[0]=t=n.$handleEvent(t),n.binddata("password",t.detail.value)}}}),e("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[n.showPassword?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changePassword.apply(void 0,arguments)}}},[n._v("")])],1),e("uni-forms-item",{attrs:{"left-icon":"locked",name:"passwordConfirmation",labelWidth:"35",errorMessage:n.errorMessage}},[e("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:n.showPasswordAgain,placeholder:"确认密码"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.confirmForm("passwordConfirmation",t.detail.value)},blur:function(t){arguments[0]=t=n.$handleEvent(t),n.binddata("passwordConfirmation",t.detail.value)}}}),e("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[n.showPasswordAgain?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changePasswordAgain.apply(void 0,arguments)}}},[n._v("")])],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",loading:n.loading,disabled:n.loading},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submitForm.apply(void 0,arguments)}}},[n._v("创建")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}},[n._v("返回")])],1)],1)],1)],1)},a=[]},"3f38":function(n,t,e){"use strict";var i=e("b168"),s=e.n(i);s.a},4327:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"uni-page-body[data-v-2cdc8734]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;\n\t/* align-items: center; */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff;\n}.login-box[data-v-2cdc8734]{position:relative;max-width:420px;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden}.uni-button[data-v-2cdc8734]{width:184px}body.?%PAGE?%[data-v-2cdc8734]{background-color:#fff}",""]),n.exports=t},7642:function(n,t,e){"use strict";var i=e("4ea4");e("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(e("5530")),a=e("2f62"),o=i(e("7f26")),r={data:function(){return{showPassword:!0,showPasswordAgain:!0,loading:!1,errorMessage:"",formData:{username:"admin",password:""},passwordConfirmation:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:3,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},passwordConfirmation:{rules:[{required:!0,errorMessage:"请输入确认密码"},{minLength:6,errorMessage:"密码长度最小{minLength}个字符"}]}}}},mounted:function(){this.focus()},methods:(0,s.default)((0,s.default)({},(0,a.mapMutations)({setToken:function(n,t){n("user/SET_TOKEN",t)}})),{},{register:function(n){var t=this;this.$refs.passwordInput.$refs.input.blur(),this.loading=!0,this.$request("user/register",n).then((function(n){uni.showModal({title:"提示",content:n.code?n.message:"创建成功",showCancel:!1,success:function(n){n.confirm&&uni.navigateTo({url:"/pages/login/login"})}})})).catch((function(n){})).finally((function(n){t.loading=!1}))},submit:function(n){if(!this.loading){var t=n.detail,e=t.errors,i=t.value;e||(i.password===i.passwordConfirmation?this.register(i):this.errorMessage="两次输入密码不相同")}},confirmForm:function(n,t){this.binddata(n,t),this.submitForm()},submitForm:function(){this.errorMessage="",this.$refs.form.submit()},back:function(){uni.redirectTo({url:o.default.login.url})},changePassword:function(){this.showPassword=!this.showPassword},changePasswordAgain:function(){this.showPasswordAgain=!this.showPasswordAgain},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};t.default=r},b168:function(n,t,e){var i=e("4327");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var s=e("4f06").default;s("06d7bafe",i,!0,{sourceMap:!1,shadowMode:!1})},bc68:function(n,t,e){"use strict";e.r(t);var i=e("10a9"),s=e("0ca6");for(var a in s)"default"!==a&&function(n){e.d(t,n,(function(){return s[n]}))}(a);e("3f38");var o,r=e("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"2cdc8734",null,!1,i["a"],o);t["default"]=u.exports}}]);