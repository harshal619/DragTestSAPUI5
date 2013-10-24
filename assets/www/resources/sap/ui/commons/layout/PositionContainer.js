/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.PositionContainer");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.layout.PositionContainer",{metadata:{publicMethods:["updatePosition"],library:"sap.ui.commons",properties:{"top":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"bottom":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"left":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"right":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"centerHorizontally":{type:"boolean",group:"Dimension",defaultValue:false},"centerVertically":{type:"boolean",group:"Dimension",defaultValue:false}},defaultAggregation:"control",aggregations:{"control":{type:"sap.ui.core.Control",multiple:false}}}});(function(){sap.ui.commons.layout.PositionContainer.prototype.setControl=function(C){c(this);if(this.getDomRef()){this.setAggregation("control",C,true);n(this,C?"CTRL_CHANGE":"CTRL_REMOVE")}else{if(this.getParent()&&this.getParent().getDomRef()){this.setAggregation("control",C,true);if(C){n(this,"CTRL_ADD")}}else{this.setAggregation("control",C)}}return this};sap.ui.commons.layout.PositionContainer.prototype.destroyControl=function(){c(this);var S=!!this.getDomRef();this.destroyAggregation("control",S);if(S){n(this,"CTRL_REMOVE")}return this};sap.ui.commons.layout.PositionContainer.prototype.setTop=function(t){s(this,"top",t,true);return this};sap.ui.commons.layout.PositionContainer.prototype.setBottom=function(B){s(this,"bottom",B,true);return this};sap.ui.commons.layout.PositionContainer.prototype.setLeft=function(l){s(this,"left",l,true);return this};sap.ui.commons.layout.PositionContainer.prototype.setRight=function(r){s(this,"right",r,true);return this};sap.ui.commons.layout.PositionContainer.prototype.setCenterHorizontally=function(C){s(this,"centerHorizontally",C,true);return this};sap.ui.commons.layout.PositionContainer.prototype.setCenterVertically=function(C){s(this,"centerVertically",C,true);return this};sap.ui.commons.layout.PositionContainer.prototype.updatePosition=function(p){if(!p){p={}}s(this,"centerHorizontally",p.centerHorizontally?p.centerHorizontally:null);s(this,"centerVertically",p.centerVertically?p.centerVertically:null);s(this,"left",p.left?p.left:null);s(this,"right",p.right?p.right:null);s(this,"top",p.top?p.top:null);var N=s(this,"bottom",p.bottom?p.bottom:null);if(N){n(this,"CTRL_POS")}};sap.ui.commons.layout.PositionContainer.prototype.getComputedPosition=function(){var t=this.getTop();var B=this.getBottom();var l=this.getLeft();var r=this.getRight();var w=null;var h=null;var C=this.getControl();if(C){if(this.getCenterHorizontally()){l="50%";r=null}else{if(!a(this,C,"width","left",l,"right",r)){r=undefined}if(!l&&!r){l="0px"}}if(this.getCenterVertically()){t="50%";B=null}else{if(!a(this,C,"height","top",t,"bottom",B)){B=undefined}if(!t&&!B){t="0px"}}w=b(C,"width");h=b(C,"height")}return{top:t,bottom:B,left:l,right:r,width:w,height:h}};sap.ui.commons.layout.PositionContainer.createPosition=function(C,p){var P=new sap.ui.commons.layout.PositionContainer();P.setControl(C);if(p){if(p.left){P.setLeft(p.left)}if(p.right){P.setRight(p.right)}if(p.top){P.setTop(p.top)}if(p.bottom){P.setBottom(p.bottom)}if(p.centerHorizontally){P.setCenterHorizontally(p.centerHorizontally)}if(p.centerVertically){P.setCenterVertically(p.centerVertically)}}return P};sap.ui.commons.layout.PositionContainer.prototype.reinitializeEventHandlers=function(C){if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}if(!C&&this.getDomRef()&&(this.getCenterHorizontally()||this.getCenterVertically())){var t=this;var o=function(){var r=jQuery(t.getDomRef());if(t.getCenterHorizontally()){r.css("margin-left","-"+r.width()/2+"px")}if(t.getCenterVertically()){r.css("margin-top","-"+r.height()/2+"px")}};this._sResizeListenerId=sap.ui.core.ResizeHandler.register(this.getDomRef(),o);o()}};sap.ui.commons.layout.PositionContainer.prototype.exit=function(p){this.reinitializeEventHandlers(true)};sap.ui.commons.layout.PositionContainer.prototype.init=function(){this._disableWidthCheck=true;this._disableHeightCheck=false};var s=function(t,p,v,N){var S=!!t.getDomRef();t.setProperty(p,v,S);if(S&&N){n(t,"CTRL_POS")}return S};var n=function(t,C){var l=t.getParent();if(l){l.contentChanged(t,C)}};var c=function(t){var C=t.getControl();if(C){sap.ui.commons.layout.AbsoluteLayout.cleanUpControl(C)}};var a=function(p,C,P,d,v,e,V){if(v&&V){var l=p.getParent();var o=g(C,P);if(o){var f=C[o._sGetter]();if(!(!f||f==""||f=="auto"||f=="inherit")){jQuery.sap.log.warning("Position "+e+"="+V+" ignored, because child control "+C.getId()+" has fixed "+P+" ("+f+").","","AbsoluteLayout '"+(l?l.getId():"_undefined")+"'");return false}}else{if((P==="width"&&!p._disableWidthCheck)||(P==="height"&&!p._disableHeightCheck)){jQuery.sap.log.warning("Position "+e+"="+V+" ignored, because child control "+C.getId()+" not resizable.","","AbsoluteLayout '"+(l?l.getId():"_undefined")+"'");return false}}}return true};var g=function(C,p){var m=C.getMetadata();m._enrichChildInfos();var P=m.getAllProperties()[p];if(P&&sap.ui.base.DataType.getType(P.type)==sap.ui.base.DataType.getType("sap.ui.core.CSSSize")){return P}return null};var b=function(C,d){var p=g(C,d);if(p){var v=C[p._sGetter]();if(v&&jQuery.sap.endsWith(v,"%")){return v}}return null}}());
