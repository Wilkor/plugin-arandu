(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[35],{127:function(s,t,i){"use strict";i.r(t),i.d(t,"bds_input_password",(function(){return p}));var e=i(13),p=function(){function s(s){var t=this;Object(e.r)(this,s),this.openEyes=!1,this.value="",this.label="",this.inputName="",this.readonly=!1,this.helperMessage="",this.errorMessage="",this.danger=!1,this.icon="",this.disabled=!1,this.autoCapitalize="off",this.autoComplete="off",this.placeholder="",this.dataTest=null,this.toggleEyePassword=function(){t.disabled||(t.openEyes=!t.openEyes)}}return s.prototype.getAutoComplete=function(){return this.openEyes?this.autoComplete:"current-password"},s.prototype.render=function(){var s=this.openEyes?"eye-open":"eye-closed",t=this.openEyes?"text":"password",i=this.getAutoComplete();return Object(e.h)(e.H,null,Object(e.h)("bds-input",{type:t,"input-name":this.inputName,value:this.value,label:this.label,min:this.min,max:this.max,minlength:this.minlength,maxlength:this.maxlength,"helper-message":this.helperMessage,"error-message":this.errorMessage,danger:this.danger,icon:this.icon,disabled:this.disabled,readonly:this.readonly,"auto-complete":i,"auto-capitalize":this.autoCapitalize,placeholder:this.placeholder,"data-test":this.dataTest},Object(e.h)("div",{slot:"input-right",class:"input__password--icon",onClick:this.toggleEyePassword},Object(e.h)("bds-icon",{size:"small",name:s,color:"inherit"}))))},s}();p.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0.sc-bds-input-password,300.sc-bds-input-password;0.sc-bds-input-password,400.sc-bds-input-password;0.sc-bds-input-password,600.sc-bds-input-password;0.sc-bds-input-password,700.sc-bds-input-password;0.sc-bds-input-password,800.sc-bds-input-password;0.sc-bds-input-password,900.sc-bds-input-password;1.sc-bds-input-password,200.sc-bds-input-password;1.sc-bds-input-password,300.sc-bds-input-password;1.sc-bds-input-password,400.sc-bds-input-password;1.sc-bds-input-password,600.sc-bds-input-password;1.sc-bds-input-password,700.sc-bds-input-password;1.sc-bds-input-password,800.sc-bds-input-password;1.sc-bds-input-password,900&display=swap").sc-bds-input-password; .sc-bds-input-password-h{display:block}.input__password--icon.sc-bds-input-password{color:#8ca0b3;display:-ms-flexbox;display:flex}'}}]);