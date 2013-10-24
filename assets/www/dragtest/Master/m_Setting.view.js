sap.ui.jsview("dragtest.Master.m_Setting", {

	getControllerName : function() {
		return "dragtest.Master.m_Setting";
	},

	createContent : function(oController) {

var oPage = new sap.m.Page("mSettingPage");

		var btnMSettingNotification	=new sap.m.Button("btnMSettingNotification");
		btnMSettingNotification.attachPress(oController.notificationClick);
		btnMSettingNotification.setIcon("images/notification.png");

		var btnMSettingMenu=new sap.m.Button("btnMSettingMenu");
		btnMSettingMenu.attachPress(oController.btnMenuClick);
		btnMSettingMenu.setIcon("images/menu.png");	

		var lblMSettingTitle=new sap.m.Label({text: "Settings"});
		
		var Bar = new sap.m.Bar({ 
			contentLeft: [btnMSettingMenu],	
			contentMiddle: [lblMSettingTitle],
			contentRight:[btnMSettingNotification]
		});
		
		Bar.addStyleClass("myMenuNavigationBar");
		oPage.setCustomHeader(Bar);

		var mSettingVbox=new sap.m.VBox("mSettingVbox");
		mSettingVbox.addStyleClass("myGroupVBox");

//				var mSubSettingVbox=new sap.m.VBox("mSubSettingVbox");
//				mSubSettingVbox.addStyleClass("mySettingPageVBox");

		var settingList = new sap.m.List("settingList");
		settingList.setShowNoData(false);
		settingList.setWidth("100%");
//		settingList.addStyleClass("myList");
//		mSubSettingVbox.addItem(settingList);

        var settingArrayList=[];
        
        for(var i=0;i<3;i++){
        	settingArrayList[i]=new sap.m.StandardListItem("settingListArray"+i);
        	settingArrayList[i].setType(sap.m.ListType.Navigation); 
        	settingArrayList[i].attachPress(oController.mSettingListClick);
        	
        	settingList.addItem(settingArrayList[i]);
        	
        	switch (i){
        	case 0: 
            	settingArrayList[i].setTitle("Server");
        	break;
        	case 1: 
            	settingArrayList[i].setTitle("Notification");
        	break;
        	case 2: 
            	settingArrayList[i].setTitle("Logout");
            	break;
        	}
        }
        
        

        mSettingVbox.addItem(settingList);
        oPage.addContent(mSettingVbox);
        return oPage;
        
	}

});
