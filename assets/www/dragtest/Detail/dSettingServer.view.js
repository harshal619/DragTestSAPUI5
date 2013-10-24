sap.ui.jsview("dragtest.Detail.dSettingServer", {

	getControllerName : function() {
		return "dragtest.Detail.dSettingServer";
	},

	createContent : function(oController) {
var oPage = new sap.m.Page("page",{
	enableScrolling : true,
});
 

  
		
		var lblTitle=new sap.m.Label('BarTitleSetting', {text: "poweredOne Login"});
		
		
		
		var runningOnTablet = jQuery.device.is.tablet;

		var runningOnPhone = jQuery.device.is.phone;
		var Bar = new sap.m.Bar();
		if(runningOnTablet){
			Bar = new sap.m.Bar({ 
//				contentLeft: [btnback],	
				contentMiddle: [lblTitle]
			});
			
			
		}
		if(runningOnPhone){
			Bar = new sap.m.Bar({ 
//				contentLeft: [btnback],	
				contentMiddle: [lblTitle]
			});
			
			
		}
		
		oPage.setCustomHeader(Bar);
		


		
		var oButton = new sap.m.Button({ id : this.createId("btnLogin"), text : "Login" });
		oButton.setWidth("99%");
		oButton.attachPress(oController.btnLogin);
		oPage.addContent(oButton);
		
		var oButton1 = new sap.m.Button({ id : this.createId("btnCancel"), text : "Cancel" });
		oButton1.setWidth("99%");
		oButton1.attachPress(oController.btnCancel);
		oPage.addContent(oButton1);
		        
		
		return oPage;
	}

});