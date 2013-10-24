/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ThemeCheck");jQuery.sap.require("sap.ui.base.Object");jQuery.sap.require("jquery.sap.script");(function(){sap.ui._maxThemeCheckCycles=100;sap.ui.base.Object.extend("sap.ui.core.ThemeCheck",{constructor:function(C){this._oCore=C;this._iCount=0},getInterface:function(){return this},fireThemeChangedEvent:function(o,f){c(this);var u=sap.ui._maxThemeCheckCycles>0;if(u||f){d.apply(this,[true])}if(!o&&!this._sThemeCheckId){this._oCore.fireThemeChanged({theme:this._oCore.getConfiguration().getTheme()})}}});sap.ui.core.ThemeCheck.checkStyle=function(s,l){if(typeof(s)==="string"){s=jQuery.sap.domById(s)}var S=jQuery(s);try{var r=!!s&&!!((s.sheet&&s.sheet.cssRules.length>0)||!!(s.styleSheet&&s.styleSheet.cssText.length>0)||!!(s.innerHTML&&s.innerHTML.length>0));var b=S.attr("sap-ui-ready");b=!!(b==="true"||b==="false");if(l){jQuery.sap.log.debug("ThemeCheck: Check styles '"+S.attr("id")+"': "+r+"/"+b+"/"+!!s)}return r||b}catch(e){}if(l){jQuery.sap.log.debug("ThemeCheck: Error during check styles '"+S.attr("id")+"': false/false/"+!!s)}return false};function c(t){if(t._sThemeCheckId){jQuery.sap.clearDelayedCall(t._sThemeCheckId);t._sThemeCheckId=null;t._iCount=0}};function a(t){var l=t._oCore.getLoadedLibraries();var r=true;for(var b in l){r=r&&sap.ui.core.ThemeCheck.checkStyle("sap-ui-theme-"+b,true)}if(!r){jQuery.sap.log.warning("ThemeCheck: Theme not yet applied.")}return r};function d(f){this._iCount++;var e=this._iCount>sap.ui._maxThemeCheckCycles;if(!a(this)&&!e){this._sThemeCheckId=jQuery.sap.delayedCall(2,this,d)}else if(!f){c(this);this._oCore.fireThemeChanged({theme:this._oCore.getConfiguration().getTheme()});if(e){jQuery.sap.log.warning("ThemeCheck: max. check cycles reached.")}}}})();