/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.DialogRenderer");jQuery.sap.require("sap.m.BarRenderer");sap.m.DialogRenderer={};
sap.m.DialogRenderer.render=function(r,c){var C=sap.ui.getCore(),a=c.getId(),t=c.getType(),h=c._getHeader(),s=c.getSubHeader(),m=(t===sap.m.DialogType.Message),l=C.byId(c.getLeftButton()),R=C.byId(c.getRightButton());if(h){h._context="header"}if(s){s._context="header"}r.write("<div");r.writeControlData(c);r.addClass("sapMDialog");r.addClass("sapMDialog-CTX");r.addClass(sap.m.Dialog._mStateClasses[c.getState()]);if(s){r.addClass("sapMDialogWithSubHeader")}if(m){r.addClass("sapMMessageDialog")}if(!sap.m.Dialog._bOneDesign){if(jQuery.os.ios&&!h){r.addClass("sapMDialogNoHeader")}if(m){r.addClass("sapMCommonDialog")}else{if(jQuery.device.is.iphone){r.addClass("sapMDialogHidden sapMDialogIPhone")}}}else{if(jQuery.device.is.phone){r.addClass("sapMDialogPhone")}}r.writeClasses();var T=c.getTooltip_AsString();if(T){r.writeAttributeEscaped("title",T)}r.write(">");if(!sap.m.Dialog._bOneDesign){if(jQuery.os.ios){if(m){if(c.getTitle()){r.write("<header class=\"sapMDialogTitle\">");r.writeEscaped(c.getTitle());r.write("</header>")}}else{if(h){r.renderControl(h)}}}else{if(c.getIcon()||c.getTitle()){r.write("<header class=\"sapMDialogTitle\">");r.write("<h1>");if(c._iconImage){r.renderControl(c._iconImage)}r.write("<span>");r.renderControl(c._headerTitle);r.write("</span>");r.write("</h1>");r.write("</header>")}}}else{if(h){r.renderControl(h)}}if(s){r.renderControl(s.addStyleClass("sapMDialogSubHeader"))}r.write("<section id='"+a+"-cont' style='width:"+c.getContentWidth()+"'>");r.write("<div id='"+a+"-scroll' class='sapMDialogScroll'>");r.write("<div id='"+a+"-scrollCont' class='sapMDialogScrollCont'>");var b=c.getContent();for(var i=0;i<b.length;i++){r.renderControl(b[i])}r.write("</div>");r.write("</div>");r.write("</section>");if(sap.m.Dialog._bOneDesign||!jQuery.os.ios||m){r.write("<footer class='sapMDialogActions'>");if(l){r.write("<div class='sapMDialogAction'>");r.renderControl(l.addStyleClass("sapMDialogBtn",true));r.write("</div>")}if(R){r.write("<div class='sapMDialogAction'>");r.renderControl(R.addStyleClass("sapMDialogBtn",true));r.write("</div>")}r.write("</footer>")}r.write("</div>")};
