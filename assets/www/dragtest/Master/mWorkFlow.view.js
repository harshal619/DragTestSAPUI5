sap.ui.jsview("dragtest.Master.mWorkFlow", {

	getControllerName : function() {
		return "dragtest.Master.mWorkFlow";
	},

	createContent : function(oController) {
 		
		var mWorkFlowPage = new sap.m.Page("mWorkFlowPage");
		jQuery.sap.require("dragtest.Listeners.globalOnClickListener");

		var btnMSettingNotification	=new sap.m.Button();
		btnMSettingNotification.attachPress(function(){
	        notificationClick();
	    });
		btnMSettingNotification.setIcon("dragtest/images/notification.png");
	    
		var icoMSettingMenu = new sap.ui.core.Icon({
			src : sap.ui.core.IconPool.getIconURI("menu2"), // sap.ui.core.URI
//			width : "50px", // sap.ui.core.CSSSize
//			height : "50px", // sap.ui.core.CSSSize
			color:"#ffffff",
			decorative : true, // boolean
			densityAware : true, // boolean
			press : [ menuClick]
		});

		var lblMSettingTitle=new sap.m.Label({text: "WorkFlow"});
		
		var Bar = new sap.m.Bar({ 
			contentLeft: [icoMSettingMenu],	
			contentMiddle: [lblMSettingTitle],
			contentRight:[btnMSettingNotification]
		});
		
		mWorkFlowPage.setCustomHeader(Bar);
		
	
		return mWorkFlowPage;

	}

});