/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SplitApp");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.SplitApp",{metadata:{publicMethods:["to","backToPage","toMaster","toDetail","backMaster","backDetail","showMaster","hideMaster","getCurrentPage","getCurrentMasterPage","getCurrentDetailPage","backToTopMaster","backToTopDetail","addPage","getMasterPage","getDetailPage","getPage"],library:"sap.m",properties:{"homeIcon":{type:"any",group:"Misc",defaultValue:null},"defaultTransitionNameDetail":{type:"string",group:"Appearance",defaultValue:"slide"},"defaultTransitionNameMaster":{type:"string",group:"Appearance",defaultValue:"slide"},"mode":{type:"sap.m.SplitAppMode",group:"Appearance",defaultValue:sap.m.SplitAppMode.ShowHideMode},"masterButtonText":{type:"string",group:"Appearance",defaultValue:null},"backgroundColor":{type:"string",group:"Appearance",defaultValue:null},"backgroundImage":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"backgroundRepeat":{type:"boolean",group:"Appearance",defaultValue:false},"backgroundOpacity":{type:"float",group:"Appearance",defaultValue:1}},aggregations:{"masterPages":{type:"sap.ui.core.Control",multiple:true,singularName:"masterPage"},"detailPages":{type:"sap.ui.core.Control",multiple:true,singularName:"detailPage"},"_navMaster":{type:"sap.m.NavContainer",multiple:false,visibility:"hidden"},"_navDetail":{type:"sap.m.NavContainer",multiple:false,visibility:"hidden"},"_navPopover":{type:"sap.m.Popover",multiple:false,visibility:"hidden"}},associations:{"initialDetail":{type:"sap.ui.core.Control",multiple:false},"initialMaster":{type:"sap.ui.core.Control",multiple:false}},events:{"orientationChange":{},"masterNavigate":{},"afterMasterNavigate":{},"masterButton":{},"beforeMasterOpen":{},"afterMasterOpen":{},"beforeMasterClose":{},"afterMasterClose":{},"detailNavigate":{},"afterDetailNavigate":{}}}});sap.m.SplitApp.M_EVENTS={'orientationChange':'orientationChange','masterNavigate':'masterNavigate','afterMasterNavigate':'afterMasterNavigate','masterButton':'masterButton','beforeMasterOpen':'beforeMasterOpen','afterMasterOpen':'afterMasterOpen','beforeMasterClose':'beforeMasterClose','afterMasterClose':'afterMasterClose','detailNavigate':'detailNavigate','afterDetailNavigate':'afterDetailNavigate'};jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.core.IconPool");
sap.m.SplitApp.prototype.init=function(){var s=this;this._isMie9=false;this._isPlatformDependent=sap.ui.core.theming.Parameters.get("sapMPlatformDependent")=="true";if(jQuery.browser.msie&&jQuery.browser.fVersion<10){this._isMie9=true}this.oCore=sap.ui.getCore();if(!jQuery.device.is.phone){this._rb=sap.ui.getCore().getLibraryResourceBundle("sap.m");this._oMasterNav=new sap.m.NavContainer(this.getId()+"-Master",{width:"",navigate:function(e){s._handleNavigationEvent(e,false,true)},afterNavigate:function(e){s._handleNavigationEvent(e,true,true)}});this._oDetailNav=new sap.m.NavContainer(this.getId()+"-Detail",{width:"",navigate:function(e){s._handleNavigationEvent(e,false,false)},afterNavigate:function(e){s._handleNavigationEvent(e,true,false)}});this.setAggregation("_navMaster",this._oMasterNav,true);this.setAggregation("_navDetail",this._oDetailNav,true);this._oShowMasterBtn=new sap.m.Button(this.getId()+"-MasterBtn",{text:(jQuery.os.ios&&this._isPlatformDependent)?this._rb.getText("SPLITAPP_NAVBUTTON_TEXT"):"",icon:!this._isPlatformDependent?sap.ui.core.IconPool.getIconURI("menu2"):"",type:(jQuery.os.ios||!this._isPlatformDependent)?sap.m.ButtonType.Default:sap.m.ButtonType.Up}).addStyleClass("sapMSplitAppMasterBtn");this._oShowMasterBtn.addDelegate({ontap:function(e){e._masterButtonClickedForSplitApp=true}});this._oPopOver=new sap.m.Popover(this.getId()+"-Popover",{placement:sap.m.PlacementType.Bottom,showHeader:false,contentWidth:"320px",contentHeight:"600px",beforeOpen:function(){s.fireBeforeMasterOpen()},beforeClose:function(){s.fireAfterMasterOpen()},afterOpen:function(){s.fireAfterMasterOpen()},afterClose:function(){s.fireAfterMasterClose()}}).addStyleClass("sapMSplitAppPopover");this.setAggregation("_navPopover",this._oPopOver,true)}else{this._oMasterNav=this._oDetailNav=new sap.m.NavContainer();this.setAggregation("_navMaster",this._oMasterNav,true)}this._oldIsLandscape=jQuery.device.is.landscape;this._bMasterisOpen=false;jQuery.sap.initMobile({viewport:!this._debugZoomAndScroll,statusBar:"default",hideBrowser:true,preventScroll:!this._debugZoomAndScroll,rootId:this.getId()})};
sap.m.SplitApp.prototype.onBeforeRendering=function(){jQuery.sap.initMobile({homeIcon:this.getHomeIcon()})};
sap.m.SplitApp.prototype.exit=function(){jQuery(window).unbind("resize",this._handleOrientationChange);if(this._oShowMasterBtn){this._oShowMasterBtn.destroy();this._oShowMasterBtn=null}};
sap.m.SplitApp.prototype.onAfterRendering=function(){var r=this.getDomRef().parentNode;if(r&&!r._sapui5_heightFixed){r._sapui5_heightFixed=true;while(r&&r!==document.documentElement){var $=jQuery(r);if($.hasClass("sapMShellContent")){break}if(!r.style.height)r.style.height="100%";r=r.parentNode}}if(!jQuery.device.is.phone){if(this._oPopOver.isOpen()){this._oPopOver.close()}jQuery(window).bind("resize",jQuery.proxy(this._handleOrientationChange,this))}if(jQuery.browser.msie){this._oMasterNav.$().append('<iframe class="sapMSplitAppMasterBlindLayer" src="about:blank"></iframe>')}};
sap.m.SplitApp.prototype.ontouchstart=function(e){if(!jQuery.device.is.phone){if(e.originalEvent&&e.originalEvent._sapui_handledByControl){this._bIgnoreSwipe=true}else{this._bIgnoreSwipe=false}}};
sap.m.SplitApp.prototype.onswiperight=function(e){if(jQuery.device.is.tablet&&this._portraitHide()&&!this._bIgnoreSwipe){if(!this._bDetailNavButton)this.showMaster()}};
sap.m.SplitApp.prototype.ontap=function(e){if(!jQuery.device.is.phone){var _=!!e._navButtonClickedForSplitApp,a=true;if(jQuery(e.target).parents(".sapMSplitAppDetail").length>0){a=false}if(!this._oldIsLandscape&&!a&&!_){if(this.getMode()=="ShowHideMode"){if(this._bMasterisOpen){this.hideMaster()}}}if(!this._oldIsLandscape&&e._masterButtonClickedForSplitApp){if(this.getMode()=="PopoverMode"){if(!this._oPopOver.oPopup.isOpen()){this._oPopOver.openBy(this._oShowMasterBtn,true)}else{this._oPopOver.close()}}else{this.showMaster()}}}};
sap.m.SplitApp.prototype.onswipeleft=function(e){if(jQuery.device.is.tablet&&this._portraitHide()&&!this._bIgnoreSwipe){this.hideMaster()}};
sap.m.SplitApp.prototype.to=function(p,t,d,T){if(this._oMasterNav.getPage(p)){this._oMasterNav.to(p,t,d,T)}else{this._oDetailNav.to(p,t,d,T)}};
sap.m.SplitApp.prototype.backToPage=function(p,b,t){if(this._oMasterNav.getPage(p)){this._oMasterNav.backToPage(p,b,t)}else{this._oDetailNav.backToPage(p,b,t)}};
sap.m.SplitApp.prototype.toMaster=function(p,t,d,T){this._oMasterNav.to(p,t,d,T)};
sap.m.SplitApp.prototype.backMaster=function(b,t){this._oMasterNav.back(b,t)};
sap.m.SplitApp.prototype.backMasterToPage=function(p,b,t){this._oMasterNav.backToPage(p,b,t)};
sap.m.SplitApp.prototype.toDetail=function(p,t,d,T){this._oDetailNav.to(p,t,d,T)};
sap.m.SplitApp.prototype.backDetail=function(b,t){this._oDetailNav.back(b,t)};
sap.m.SplitApp.prototype.backDetailToPage=function(p,b,t){this._oDetailNav.backToPage(p,b,t)};
sap.m.SplitApp.prototype.backToTopMaster=function(b,t){this._oMasterNav.backToTop(b,t)};
sap.m.SplitApp.prototype.backToTopDetail=function(b,t){this._oDetailNav.backToTop(b,t)};
sap.m.SplitApp.prototype.addMasterPage=function(p){var r=this._getRealPage(p);if(r&&r._navBtn){r._navBtn.addDelegate({ontap:function(e){e._navButtonClickedForSplitApp=true}})}this._oMasterNav.addPage(p);return this};
sap.m.SplitApp.prototype.addDetailPage=function(p){var s=this,r=this._getRealPage(p),c=this.oCore,P=r?r.getId():"";p.addDelegate({onBeforeFirstShow:function(){if(r){var n=c.byId(P+"-navButton"),i=c.byId(P+"-icon");if(!jQuery.device.is.phone){if(n){}if(i){}}}},onBeforeShow:function(){if(r){if(!jQuery.device.is.phone){if((s._portraitHide()||s._portraitPopover())&&(!s._bMasterisOpen||s._bMasterClosing)){s._setMasterButton(r,jQuery.proxy(s._setTitleVisibility,s))}else{s._setTitleVisibility(r)}}}}});if(r){r.addDelegate({onBeforeRendering:function(){if(!jQuery.device.is.phone){if(s._portraitHide()){if(!s._bMasterisOpen||s._bMasterClosing){s._setMasterButton(r)}}else if(s._portraitPopover()){s._setMasterButton(r)}else{s._removeMasterButton(r)}}}})}this._oDetailNav.addPage(p);return this};
sap.m.SplitApp.prototype.addPage=function(p,m){if(m){return this.addMasterPage(p)}else{return this.addDetailPage(p)}};
sap.m.SplitApp.prototype.showMaster=function(){var _=this._oMasterNav.$(),t=this,a=this._getRealPage(this._oDetailNav.getCurrentPage());if(this._portraitPopover()){if(!this._oPopOver.isOpen()){function b(){this._oPopOver.detachAfterOpen(b,this);this._bMasterOpening=false;this._bMasterisOpen=true;this.fireAfterMasterOpen()};this._oPopOver.attachAfterOpen(b,this);this.fireBeforeMasterOpen();this._oPopOver.openBy(this._oShowMasterBtn,true);this._bMasterOpening=true}}else{if(this._portraitHide()&&(!this._bMasterisOpen||this._bMasterClosing)){if(this._isMie9){this._oMasterNav.$().css("width","320px");_.animate({left:"+=320"},{duration:300});this._bMasterisOpen=true;t._bMasterOpening=false;this._removeMasterButton(a,jQuery.proxy(this._setTitleVisibility,this))}_.bind((jQuery.os.ios||!this._isPlatformDependent)?"webkitTransitionEnd transitionend":"webkitAnimationEnd animationend",function(){jQuery(this).unbind("webkitTransitionEnd transitionend");jQuery(this).unbind("webkitAnimationEnd animationend");t._bMasterOpening=false;t._bMasterisOpen=true;t._removeMasterButton(a,jQuery.proxy(t._setTitleVisibility,t));t.fireAfterMasterOpen()});this.fireBeforeMasterOpen();_.toggleClass("sapMSplitAppMasterVisible",true);_.toggleClass("sapMSplitAppMasterHidden",false);this._bMasterOpening=true;if(jQuery.browser.webkit){var m=this._oMasterNav;window.setTimeout(function(){m.$().css("box-shadow","none");window.setTimeout(function(){m.$().css("box-shadow","")},50)},0)}}}return this};
sap.m.SplitApp.prototype.hideMaster=function(){var _=this._oMasterNav.$(),t=this,a=t._getRealPage(t._oDetailNav.getCurrentPage());if(this._portraitPopover()){if(this._oPopOver.isOpen()){function b(){this._oPopOver.detachAfterClose(b,this);this._bMasterClosing=false;this._bMasterisOpen=false;this.fireAfterMasterClose()};this._oPopOver.attachAfterClose(b,this);this.fireBeforeMasterClose();this._oPopOver.close();this._bMasterClosing=true}}else{if(this._portraitHide()&&this._bMasterisOpen){if(this._isMie9){_.animate({left:"-=320"},{duration:300});this._bMasterisOpen=false;this._setMasterButton(a,jQuery.proxy(this._setTitleVisibility,this))}_.bind((jQuery.os.ios||!this._isPlatformDependent)?"webkitTransitionEnd transitionend":"webkitAnimationEnd animationend",function(){jQuery(this).unbind("webkitTransitionEnd transitionend");jQuery(this).unbind("webkitAnimationEnd animationend");t._bMasterClosing=false;t._bMasterisOpen=false;t._setMasterButton(a,jQuery.proxy(t._setTitleVisibility,t));t.fireAfterMasterClose()});this.fireBeforeMasterClose();_.toggleClass("sapMSplitAppMasterVisible",false);_.toggleClass("sapMSplitAppMasterHidden",true);this._bMasterClosing=true}}return this};
sap.m.SplitApp.prototype.getCurrentMasterPage=function(){return this._oMasterNav.getCurrentPage()};
sap.m.SplitApp.prototype.getCurrentDetailPage=function(){return this._oDetailNav.getCurrentPage()};
sap.m.SplitApp.prototype.getCurrentPage=function(m){if(m){return this.getCurrentMasterPage()}else{return this.getCurrentDetailPage()}};
sap.m.SplitApp.prototype.getMasterPage=function(p){return this._oMasterNav.getPage(p)};
sap.m.SplitApp.prototype.getDetailPage=function(p){return this._oDetailNav.getPage(p)};
sap.m.SplitApp.prototype.getPage=function(p,m){if(m){return this.getMasterPage(p)}else{return this.getDetailPage(p)}};
sap.m.SplitApp.prototype.setInitialMaster=function(p){this._oMasterNav.setInitialPage(p);this.setAssociation('initialMaster',p,true);return this};
sap.m.SplitApp.prototype.setInitialDetail=function(p){if(!jQuery.device.is.phone){this._oDetailNav.setInitialPage(p)}this.setAssociation('initialDetail',p,true);return this};
sap.m.SplitApp.prototype.setDefaultTransitionNameDetail=function(t){this._oDetailNav.setDefaultTransitionName(t);return this};
sap.m.SplitApp.prototype.setDefaultTransitionNameMaster=function(t){this._oMasterNav.setDefaultTransitionName(t);return this};
sap.m.SplitApp.prototype.setMasterButtonText=function(t){if((jQuery.os.ios||!this._isPlatformDependent)&&!jQuery.device.is.phone){if(!t){t=this._rb.getText("SPLITAPP_NAVBUTTON_TEXT")}this._oShowMasterBtn.setText(t)}this.setProperty("masterButtonText",t,true);return this};
sap.m.SplitApp.prototype.setMode=function(m){var o=this.getMode();if(o===m){return}this.setProperty("mode",m,true);if(!jQuery.device.is.phone&&this.getDomRef()){if(m!=="PopoverMode"&&this._oPopOver.getContent().length>0){this._updateMasterPosition("landscape")}else if(m=="PopoverMode"&&!this._oldIsLandscape&&this._oPopOver.getContent().length===0){this._updateMasterPosition("popover");this.$().toggleClass("sapMSplitAppShowHide",false);this.$().toggleClass("sapMSplitAppStretchCompress",false);this.$().toggleClass("sapMSplitAppPopover",true);this._setMasterButton(this._oDetailNav.getCurrentPage(),jQuery.proxy(this._setTitleVisibility,this))}if(m=="StretchCompressMode"){this.$().toggleClass("sapMSplitAppShowHide",false);this.$().toggleClass("sapMSplitAppPopover",false);this.$().toggleClass("sapMSplitAppStretchCompress",true);this._removeMasterButton(this._oDetailNav.getCurrentPage(),jQuery.proxy(this._setTitleVisibility,this))}if(m=="ShowHideMode"){this.$().toggleClass("sapMSplitAppPopover",false);this.$().toggleClass("sapMSplitAppStretchCompress",false);this.$().toggleClass("sapMSplitAppShowHide",true);if(!jQuery.device.is.landscape){this._setMasterButton(this._oDetailNav.getCurrentPage(),jQuery.proxy(this._setTitleVisibility,this))}}}return this};
sap.m.SplitApp.prototype.setBackgroundOpacity=function(o){if(o>1||o<0){jQuery.sap.log.warning("Invalid value "+o+" for SplitApp.setBackgroundOpacity() ignored. Valid values are: floats between 0 and 1.");return this;}jQuery.sap.byId(this.getId()+"-BG").css("opacity",o);return this.setProperty("backgroundOpacity",o,true)};
sap.m.SplitApp.prototype._handleNavigationEvent=function(e,a,m){var E=(a?"After":"")+(m?"Master":"Detail")+"Navigate";E=E.charAt(0).toLowerCase()+E.slice(1);this.fireEvent(E,e.mParameters)};
sap.m.SplitApp.prototype._handleOrientationChange=function(){var i=jQuery.device.is.landscape,_=this._oDetailNav.getCurrentPage(),m=this.getMode();if(this._oldIsLandscape!==i){this.fireOrientationChange({landscape:i});this._oldIsLandscape=i;if(!jQuery.device.is.phone){if(m==="ShowHideMode"){if(i){this.fireBeforeMasterOpen()}else{this.fireBeforeMasterClose()}}this.$().toggleClass("sapMSplitAppPortrait",!i);if(this._isMie9){if(i){this._oMasterNav.$().css("left","0");this._oMasterNav.$().css("width","")}else{this._oMasterNav.$().css("left","-320px");this._oMasterNav.$().css("width","auto")}}if(m==="ShowHideMode"||m==="PopoverMode"){if(i){this._oMasterNav.$().toggleClass("sapMSplitAppMasterVisible",false);this._oMasterNav.$().toggleClass("sapMSplitAppMasterHidden",false)}}if(m==="ShowHideMode"){if(i){this._bMasterisOpen=true;this.fireAfterMasterOpen()}else{this._bMasterisOpen=false;this.fireAfterMasterClose()}}if(this.getMode()=="PopoverMode"){if(this._oPopOver.oPopup.isOpen()){this._oPopOver.attachAfterClose(this._handlePopClose,this);this._oPopOver.close()}else{this._handlePopClose()}}_=this._getRealPage(_);if(!this._oldIsLandscape&&m!="StretchCompressMode"){this._setMasterButton(_,jQuery.proxy(this._setTitleVisibility,this))}else{this._removeMasterButton(_,jQuery.proxy(this._setTitleVisibility,this))}}}};
sap.m.SplitApp.prototype._setTitleVisibility=function(p){var r=p||this._getRealPage(this._oDetailNav.getCurrentPage()),c=this.oCore,P=r?r.getId():"";if(P){var t=c.byId(P+"-title");if(!jQuery.os.ios&&this._isPlatformDependent){if((this._portraitHide()||this._portraitPopover())&&(!this._bMasterisOpen||this._bMasterClosing)){t&&t.removeStyleClass("sapMSplitAppHiddenChild")}else{t&&t.addStyleClass("sapMSplitAppHiddenChild")}}}};
sap.m.SplitApp.prototype._handlePopClose=function(e){this._oPopOver.detachAfterClose(this._handlePopClose,this);if(this._oldIsLandscape){this._updateMasterPosition("landscape")}else{this._updateMasterPosition("popover")}};
sap.m.SplitApp.prototype._getRealPage=function(p){var r=p,c;while(r){if(r instanceof sap.m.Page){return r}if(r instanceof sap.ui.core.mvc.View){c=r.getContent();if(c.length===1){r=c[0];continue}}r=null}return r};
sap.m.SplitApp.prototype._updateMasterPosition=function(p){var t=this;if(p=="popover"){this.removeAggregation("_navMaster",this._oMasterNav,true);jQuery.sap.byId(this._oMasterNav.getId()).remove();this._oPopOver.addContent(this._oMasterNav);this._bMasterisOpen=false}if(p=="landscape"){var r=function(){t._oPopOver.removeAggregation("content",t._oMasterNav,false);t.setAggregation("_navMaster",t._oMasterNav,true);var $=jQuery.sap.byId(t.getId());if($[0]){var b=sap.ui.getCore().createRenderManager();b.renderControl(t._oMasterNav.addStyleClass("sapMSplitAppMaster"));b.flush($[0],false,0);b.destroy()}};if(this._oPopOver.isOpen()){var a=function(){this._oPopOver.detachAfterClose(a,this);this._bMasterisOpen=false;r()};this._oPopOver.attachAfterClose(a,this);this._oPopOver.close()}else{r()}}};
sap.m.SplitApp.prototype._portraitHide=function(){if(!this._oldIsLandscape&&!jQuery.device.is.phone&&this.getMode()==="ShowHideMode"){return true}else{return false}};
sap.m.SplitApp.prototype._portraitPopover=function(){if(!this._oldIsLandscape&&!jQuery.device.is.phone&&this.getMode()==="PopoverMode"){return true}else{return false}};
sap.m.SplitApp.prototype._setMasterButton=function(p,c){if(!p){return}var h=p._getAnyHeader().getContentLeft();for(var i=0;i<h.length;i++){if(h[i]instanceof sap.m.Button&&(h[i].getType()==sap.m.ButtonType.Back||(h[i].getType()==sap.m.ButtonType.Up&&h[i]!==this._oShowMasterBtn))){this._bDetailNavButton=true;return}}this._bDetailNavButton=false;this.fireMasterButton({show:true});p=this._getRealPage(p);if(p){var P=p._getAnyHeader(),C=P.getContentLeft(),I=p.getIcon();var b=false;if(C){for(var i=0;i<C.length;i++){if(C[i]===this._oShowMasterBtn){b=true}}}if(!b){this._oShowMasterBtn.removeStyleClass("sapMSplitAppMasterBtnHidden");if(!jQuery.os.ios&&I&&this._isPlatformDependent){sap.ui.getCore().byId(p.getId()+"-icon").addStyleClass("sapMSplitAppHiddenChild");this._oShowMasterBtn.setIcon(I)}if(P){P.insertContentLeft(this._oShowMasterBtn,0)}}else{if(this._isMie9){this._oShowMasterBtn.$().fadeIn()}this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnHide",false);this._oShowMasterBtn.removeStyleClass("sapMSplitAppMasterBtnHidden");this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnShow",true)}if(c){c(p)}}};
sap.m.SplitApp.prototype._removeMasterButton=function(p,c){if(!p){return}var s=this,h;this.fireMasterButton({show:false});if(!this._oShowMasterBtn.$().is(":hidden")){p=this._getRealPage(p);h=p._getAnyHeader();if(p&&h){var C=h.getContentLeft();for(var i=0;i<C.length;i++){if(C[i]===this._oShowMasterBtn){if(this._isMie9){this._oShowMasterBtn.$().fadeOut();if(c){c(p)}}this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnShow",false);this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnHide",true);this._oShowMasterBtn.$().parent().bind("webkitAnimationEnd animationend",function(){jQuery(this).unbind("webkitAnimationEnd animationend");s._oShowMasterBtn.addStyleClass("sapMSplitAppMasterBtnHidden");if(c){c(p)}});return}}}}else{if(c){c(p)}}};
sap.m.SplitApp.prototype._callMethodInManagedObject=function(f,a){var b=Array.prototype.slice.call(arguments);if(a==="masterPages"){b[1]="pages";return this._oMasterNav[f].apply(this._oMasterNav,b.slice(1))}else if(a==="detailPages"){b[1]="pages";return this._oDetailNav[f].apply(this._oDetailNav,b.slice(1))}else{return sap.ui.base.ManagedObject.prototype[f].apply(this,b.slice(1))}};
sap.m.SplitApp.prototype.validateAggregation=function(a,o,m){return this._callMethodInManagedObject("validateAggregation",a,o,m)};
sap.m.SplitApp.prototype.setAggregation=function(a,o,s){this._callMethodInManagedObject("setAggregation",a,o,s);return this};
sap.m.SplitApp.prototype.getAggregation=function(a,d){return this._callMethodInManagedObject("getAggregation",a,d)};
sap.m.SplitApp.prototype.indexOfAggregation=function(a,o){return this._callMethodInManagedObject("indexOfAggregation",a,o)};
sap.m.SplitApp.prototype.insertAggregation=function(a,o,i,s){this._callMethodInManagedObject("insertAggregation",a,o,i,s);return this};
sap.m.SplitApp.prototype.addAggregation=function(a,o,s){this._callMethodInManagedObject("addAggregation",a,o,s);return this};
sap.m.SplitApp.prototype.removeAggregation=function(a,o,s){return this._callMethodInManagedObject("removeAggregation",a,o,s)};
sap.m.SplitApp.prototype.removeAllAggregation=function(a,s){return this._callMethodInManagedObject("removeAllAggregation",a,s)};
sap.m.SplitApp.prototype.destroyAggregation=function(a,s){this._callMethodInManagedObject("destroyAggregation",a,s);return this};