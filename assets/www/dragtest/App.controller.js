jQuery.sap.require("sap.m.InstanceManager");
sap.ui.controller("dragtest.App", {
	// configuration for the folder where the views are
	// (required for lazy loading in navTo)
	VIEW_FOLDER: "dragtest",
	
	onInit : function() {},
	
	navHandler: function(channelId, eventId, data) {},
	
	navTo : function(sChannelId, sEventId, oData/*id, writeHistory, navType, viewId*/) {},
	
	toView: function(id, data){},
	
	// This is how we do the page back navigation
	navBack : function(sChannelId, sEventId, oData) {},
	
	clearTempControles : function(){}
});