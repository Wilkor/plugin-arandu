(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[24],{112:function(e,c,t){"use strict";t.r(c),t.d(c,"bds_checkbox",(function(){return n}));var o=t(13),i=0,n=function(){function e(e){var c=this;Object(o.r)(this,e),this.bdsChange=Object(o.c)(this,"bdsChange",7),this.bdsInput=Object(o.c)(this,"bdsInput",7),this.checked=!1,this.disabled=!1,this.onClick=function(){c.checked=!c.checked},this.refNativeInput=function(e){c.nativeInput=e},this.getStyleState=function(){return c.checked&&!c.disabled?"checkbox--selected":c.checked||c.disabled?c.checked&&c.disabled?"checkbox--selected-disabled":!c.checked&&c.disabled?"checkbox--deselected-disabled":"":"checkbox--deselected"}}return e.prototype.connectedCallback=function(){this.checkBoxId=this.refer||"bds-checkbox-".concat(i++)},e.prototype.checkedChanged=function(e){this.bdsChange.emit({checked:e})},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)},e.prototype.render=function(){var e,c=this.getStyleState();return Object(o.h)("div",{class:(e={checkbox:!0},e[c]=!0,e)},Object(o.h)("input",{type:"checkbox",ref:this.refNativeInput,id:this.checkBoxId,name:this.name,onClick:this.onClick,checked:this.checked,disabled:this.disabled}),Object(o.h)("label",{class:"checkbox__label",htmlFor:this.checkBoxId},Object(o.h)("div",{class:"checkbox__icon"},Object(o.h)("bds-icon",{class:"checkbox__icon__svg",size:"x-small",name:"true",color:"inherit"})),Object(o.h)("bds-typo",{class:"checkbox__text",variant:"fs-14",tag:"span"},this.label)))},Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),e}();n.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .checkbox{display:inline}.checkbox input[type=checkbox]{display:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox input[type=checkbox]:focus{outline:0}.checkbox__icon{background:#ffffff}.checkbox__icon:hover{border-color:#125ad5}.checkbox--selected .checkbox__icon{background-color:#3f7de8}.checkbox--selected .checkbox__icon:hover{background-color:#125ad5}.checkbox--selected-disabled .checkbox__label{cursor:not-allowed}.checkbox--selected-disabled .checkbox__icon{color:#637798;border:1px solid #637798;background-color:#e8f2ff}.checkbox--deselected .checkbox__icon__svg{display:none}.checkbox--deselected-disabled .checkbox__label{cursor:not-allowed}.checkbox--deselected-disabled .checkbox__icon{background-color:#e8f2ff;border:1px solid #637798}.checkbox--deselected-disabled .checkbox__icon__svg{display:none}.checkbox__label{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.checkbox__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18px;width:18px;border-radius:4px;color:#f8fbfb;border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.checkbox__text{margin-left:8px;color:#505f79}'}}]);