"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[824],{8824:(t,e,i)=>{i.r(e),i.d(e,{ShowEval:()=>n});var s=i(78673);class n extends s.A{constructor(t){super(t),this.divid=t.orig.id,this.containerDiv=t.orig,this.containerDiv.classList.add("showEval");let e=[];for(let i of t.raw)e.push(i.replace(/\\/g,""));this.steps=e.slice(),this.currentStep=0,this.createTrace=$(t.orig).data("tracemode"),this.rb=new s.A(t),this.currentStepDiv=$("<div>").addClass("currentStepDiv"),$(this.containerDiv).append(this.currentStepDiv),this.currentStepDiv.append($("<span>").addClass("pre")),this.currentStepDiv.append($("<span>").addClass("eval")),this.currentStepDiv.append($("<span>").addClass("post")),this.currentStepDiv.append($("<div>").addClass("anno")),this.setNextButton(`#${this.divid}_nextStep`),this.setResetButton(`#${this.divid}_reset`);for(var i=0;i<this.steps.length;i++){var n=this.steps[i];let t,e;n.includes("##")?(t=n.indexOf("##"),e=n.substring(t+2,n.length)):(t=n.length,e=!1),this.steps[i]=[n.substring(0,n.indexOf("{{")),n.substring(n.indexOf("{{")+2,n.indexOf("}}{{")),n.substring(n.indexOf("}}{{")+4,n.indexOf("}}",n.indexOf("}}{{")+4)),n.substring(n.indexOf("}}",n.indexOf("}}{{")+4)+2,t)],this.steps[i].push(e)}this.reset(),this.caption="ShowEval",this.addCaption("runestone"),this.indicate_component_ready()}setNextButton(t){var e=this;$(t).click((function(){e.evaluateStep(t)}))}setResetButton(t){var e=this;$(t).click((function(){e.reset(0)}))}reset(){$(this.containerDiv).find(".previousStep").remove(),this.setStep(0),this.rb.logBookEvent({event:"showeval",act:"reset",div_id:this.containerDiv.id})}setStep(t){this.currentStep=t;let e=this.getWidth(this.steps[this.currentStep][1]);this.steps[t][4]?(this.currentStepDiv.children(".anno").html(this.steps[t][4]),this.currentStepDiv.children(".anno").show()):this.currentStepDiv.children(".anno").hide(),this.currentStepDiv.children(".eval").width(e),this.currentStepDiv.children(".pre").html(this.steps[t][0]),this.currentStepDiv.children(".eval").html(this.steps[t][1]),this.currentStepDiv.children(".post").html(this.steps[t][3])}getWidth(t){var e=$("<div>").addClass("showEval evalCont").hide().html(t);$("body").append(e);var i=e.width()+1;return e.remove(),i}createPreviousStepDiv(t){this.currentStepDiv.before($("<div>").addClass("previousStep").html(this.steps[t][0]+this.steps[t][1]+this.steps[t][3]))}evaluateStep(t,e){if(this.currentStepDiv.children(".anno").hide(),$(t).attr("disabled",!0),void 0===e&&(e=this.currentStep),this.currentStep>=this.steps.length)return void $(t).attr("disabled",!1);var i=0;this.createTrace&&(this.createPreviousStepDiv(e),this.currentStepDiv.hide(),i=200);let s=this.getWidth(this.steps[e][2]);var n=this.currentStepDiv.children(".eval"),r=this;n.css("color","red"),this.currentStepDiv.fadeTo(i,1,(function(){window.setTimeout((function(){n.fadeTo(400,0,(function(){n.animate({width:s,duration:400},(function(){n.html(r.steps[e][2]),n.fadeTo(400,1,(function(){window.setTimeout((function(){n.css("color","#333"),r.currentStep+=1,r.currentStep<r.steps.length&&r.setStep(r.currentStep),$(t).attr("disabled",!1)}),600)}))}))}))}),600)})),this.rb.logBookEvent({event:"showeval",act:"next",div_id:this.containerDiv.id})}}$(document).on("runestone:login-complete",(function(){$("[data-component=showeval]").each((function(t){var e={orig:this,useRunestoneServices:eBookConfig.useRunestoneServices};e.raw=window.raw_steps[this.id],0==$(this).closest("[data-component=timedAssessment]").length&&(window.componentMap[this.id]=new n(e))}))})),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.showeval=function(t){return new n(t)}}}]);
//# sourceMappingURL=824.js.map