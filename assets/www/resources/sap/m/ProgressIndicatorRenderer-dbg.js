/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ProgressIndicatorRenderer");

/**
 * @class ProgressIndicator renderer.
 * @static
 */
sap.m.ProgressIndicatorRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.ProgressIndicatorRenderer.render = function(oRm, oC) {

	// return immediately if control is not visible
	if (!oC.getVisible()) {
		return;
	}

	var fWidthBar = oC.getPercentValue();
	var iWidthControl = oC.getWidth();
	var sTextValue = oC.getDisplayValue();
	var bShowText = oC.getShowValue();
	var sBarColor = oC.getBarColor();

	// write the HTML into the render manager
	//PI border
	oRm.write("<div");
	oRm.writeControlData(oC);
	oRm.addClass("sapMPI");
	if (fWidthBar > 50) {
		oRm.addClass("sapMPIValueGreaterHalf");
	}
	oRm.writeAttribute("style", "width:" + iWidthControl);

	if (oC.getEnabled()) {
		oRm.writeAttribute('tabIndex', '0');
	} else {
		oRm.addClass("sapMPIBarDisabled");
	}
	oRm.writeClasses();
	oRm.write(">"); // div element

	//PI bar
	oRm.write("<div");
	oRm.addClass("sapMPIBar");

	switch (sBarColor) {
	case "CRITICAL":
		oRm.addClass("sapMPIBarCritical");
		break;
	case "NEGATIVE":
		oRm.addClass("sapMPIBarNegative");
		break;
	case "POSITIVE":
		oRm.addClass("sapMPIBarPositive");
		break;
	case "NEUTRAL":
		oRm.addClass("sapMPIBarNeutral");
		break;
	default:
		oRm.addClass("sapMPIBarNeutral");
		break;
	}

	oRm.writeClasses();
	oRm.writeAttribute("id", oC.getId() + "-bar");
	oRm.writeAttribute("style", "width:" + fWidthBar + "%");
	oRm.write(">"); // div element

	//PI textLeft
	oRm.write("<span class='sapMPIText sapMPITextLeft' id='" + oC.getId() + "-textLeft'>");
	
	//textvalue is only showed if showValue set
	if (bShowText) {
		oRm.writeEscaped(sTextValue);
	}

	oRm.write("</span>");
	oRm.write("</div>"); // div element pi bar
	
	//PI textRight
	oRm.write("<span class='sapMPIText sapMPITextRight' id='" + oC.getId() + "-textRight'>");

	//textvalue is only showed if showValue set
	if (bShowText) {
		oRm.writeEscaped(sTextValue);
	}
	oRm.write("</span>");

	oRm.write("</div>"); //div element pi text
};
