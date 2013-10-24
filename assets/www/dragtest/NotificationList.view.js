var notifTextLen;
sap.ui.jsview("dragtest.NotificationList", {

	getControllerName : function() {
		return "dragtest.NotificationList";
	},

	createContent : function(oController) {
 		
		

		var menupage = new sap.m.Page("notificationPage");
//		menupage.addStyleClass("#menu");
//		menupage.setShowHeader(false);
		
		var lblNotifCount = new sap.m.Label("lblNotifCount");
		lblNotifCount.setText("Notifications");
		
		var Bar = new sap.m.Bar({ 
			contentLeft: [lblNotifCount],
		});
		Bar.addStyleClass("p1_bar_gray");
		menupage.setCustomHeader(Bar);
		
                menupage.placeAt("notificationScreen");

	}

});