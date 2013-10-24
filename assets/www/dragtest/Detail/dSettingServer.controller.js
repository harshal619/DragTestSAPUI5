
sap.ui.controller("dragtest.Detail.dSettingServer", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/
	onInit: function() {
		
		//================= Loading JS =====================================
		
		
		
				  	},
		

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
*/
	onAfterRendering: function() {
		
//		$('#menu').pep({
//			debug:true,
//		  axis: 'x',
//		  stop: function(e){
//		    //if ( this.cssX < 150 )
//		    
//		    var x = this.$el.position().left;
//		    
//		    if ( x >= 100 ){
//		      this.$el.animate({ left: 200 }, 100);
//		    } else {
//		      this.$el.animate({ left: 0 }, 100);
//		      menuchk=false;
//		    }
//		  },
////		  useCSSTranslation: false,
////		  shouldEase: false,
//		  constrainTo: [false, 200, false, 0]
//		  
//		});
		

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//	onExit: function() {
//
//	}
	

	btnLogin:function(){
	
		var MenuList = sap.ui.view({id:"MenuListpage", viewName:"dragtest.MenuList", type:sap.ui.core.mvc.ViewType.JS});
		var NotificationList = sap.ui.view({id:"NotificationList", viewName:"dragtest.NotificationList", type:sap.ui.core.mvc.ViewType.JS});
		if(jQuery.device.is.tablet){
			document.getElementById('splitapp-Master').style.width = "320px";
		}
		
		 		var oSplitApp=sap.ui.getCore().byId("splitapp");
		 		var oView = sap.ui.jsview("dragtest.Master.mWorkFlow","dragtest.Master.mWorkFlow");
		 		oSplitApp.addMasterPage(oView);
//		 		oView.oController.loadContent();
		 		oSplitApp.toMaster(oView);
		 		
		 		
		 		
 			
 			

	},
	
	btnCancel:function(){
		
	},
	
	

});