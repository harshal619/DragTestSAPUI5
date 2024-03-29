/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.SearchFieldRenderer");

/**
 * @class SearchField renderer. 
 * @static
 */
sap.m.SearchFieldRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.SearchFieldRenderer.render = function(oRenderManager, oSF){ 
	// render nothing if control is invisible
	if (!oSF.getVisible()) {
		return;
	}

	var rm = oRenderManager;
	var bShowMagnifier = oSF.getShowMagnifier();
	var sId = oSF.getId();
	var sPlaceholder = oSF.getPlaceholder();
	var sValue = oSF.getValue();

	// container
	rm.write("<div");
	rm.writeControlData(oSF);
	rm.addClass("sapMSF");
	if (bShowMagnifier) { rm.addClass("sapMSFM"); }
	if(jQuery.os.android && !(jQuery.browser.chrome)){
		if(jQuery.os.fVersion < 3){
			rm.addClass("sapMSFA2"); // specific Android 2.+ rendering
		} else if (jQuery.os.fVersion <= 4){
			rm.addClass("sapMSFA4"); // specific Android 4.0* rendering
		}
	}
	if(sValue){
		rm.addClass("sapMSFVal");
	}
	if (!oSF.getEnabled()){
		rm.addClass("sapMSFDisabled");
	}
	rm.writeClasses();
	var sTooltip = oSF.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");

	// 1. magnifier icon
	if (bShowMagnifier) { rm.write('<div class="sapMSFMG"></div>'); }
	
	// 2. Input type="search". 
	//    Enclose input into a <form> to show a correct keyboard
	//    method="post" to prevent unneeded "?" at the end of URL
	rm.write('<form method="post" action="javascript:void(0);">');
	
	// self-made placeholder
	if (!oSF._hasPlacehoder && sPlaceholder) {
		rm.write("<label ");
		rm.writeAttribute("id", sId + "-P");
		rm.writeAttribute("for", sId + "-I");
		
		rm.addClass("sapMSFPlaceholder");
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(sPlaceholder);
		rm.write("</label>");
	}
	
	rm.write('<input type="search" autocorrect="off"');
	rm.writeAttribute("id", oSF.getId() + "-I");

	rm.addClass("sapMSFI");

	if (jQuery.os.ios && jQuery.os.fVersion > 5) {
			rm.addClass("sapMSFIIos6"); // specific Ios6+ rendering
	}

	if (!oSF.getEnabled()){
		// hide the reset button even if value is not empty: user cannot press it
		rm.addClass("sapMSFIDisabled");
	}
	rm.writeClasses();

	if (!oSF.getEnabled()) { rm.writeAttribute("disabled","disabled"); }
	if (bShowMagnifier) { rm.writeAttribute("results", 0); }
	if (sPlaceholder) { rm.writeAttributeEscaped("placeholder", sPlaceholder); }
	if (oSF.getMaxLength()) { rm.writeAttribute("maxLength", oSF.getMaxLength()); }
	if (sValue) { rm.writeAttributeEscaped("value", sValue); }
	if (oSF.getWidth()) { rm.writeAttribute("style", "width:" + oSF.getWidth() + ";"); }

	rm.write("></form>");

	// 3. Reset button (transparent, lies over "X" of input, reacts on touch correctly)
	// in sap_bluecrystal: x is placed on the reset button
	if (oSF.getEnabled()) {
		rm.write("<div");
		rm.writeAttribute("id", oSF.getId() + "-reset");
		rm.addClass("sapMSFR");
		rm.writeClasses();
		rm.write("></div>");
	}
	rm.write("</div>");

};
