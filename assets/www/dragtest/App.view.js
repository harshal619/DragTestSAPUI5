sap.ui.jsview("dragtest.App", {

	getControllerName : function() {
		return "dragtest.App";
	},

	createContent : function(oController) {
		// create app
		this.app = new sap.m.SplitApp("splitapp",{
			//The master area needs to be closed when navigation in detail area is done.
			afterDetailNavigate: function(){
				this.hideMaster();
			},
		});
		this.app.setBackgroundImage("http://rahulv.com/templates/water/water-app/images/tile.png");
		// create the first page in both master and detail areas 
		this.app.addDetailPage(sap.ui.jsview("dragtest.Detail.dSettingServer", "dragtest.Detail.dSettingServer"));
		this.app.addMasterPage(sap.ui.jsview("dragtest.Master.m_Setting", "dragtest.Master.m_Setting"));
		
		// navigate to the first page in both master and detail areas.
		// the toMaster must be called after calling the toDetail, because both of them point to the same reference in phone and 
		// the real first page that will be shown in phone is the page in master area. 
		this.app.toDetail("dragtest.Detail.dSettingServer");
//		this.app.toMaster("workflow_integration.Master.m_Setting");
		this.app.hideMaster();
		
//		document.getElementById('splitapp-Master').style.width = "0px";
		
		// done
		return this.app;
	}

});