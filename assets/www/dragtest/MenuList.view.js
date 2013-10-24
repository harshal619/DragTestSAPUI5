var menuTextLen;
sap.ui.jsview("dragtest.MenuList", {

	getControllerName : function() {
		return "dragtest.MenuList";
	},

	createContent : function(oController) {
		
		
		var menupage = new sap.m.Page("menupage");
		menupage.addStyleClass("#menu");

				 menupage.placeAt("menu");

		 
	}

});