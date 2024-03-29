/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.RatingIndicatorRenderer");
jQuery.sap.require("sap.ui.core.theming.Parameters");

/* =========================================================== */
/*           temporary flags for jslint syntax check           */
/* =========================================================== */
/*jslint nomen: false */

/**
 * @class RatingIndicator renderer.
 * @static
 */
sap.m.RatingIndicatorRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.RatingIndicatorRenderer.render = function (oRm, oControl) {

	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	var fRatingValue = oControl._roundValueToVisualMode(oControl.getValue()),
		fIconPadding = parseFloat(sap.ui.core.theming.Parameters.get("sapUiRIIconPadding")) || 0,
		fIconSize = parseFloat(oControl.getIconSize()) || 1,
		sIconSizeMeasure = /[a-zA-Z]+/.exec(oControl.getIconSize()) || "rem",
		iSymbolCount = oControl.getMaxValue(),
		i = 0;

	var iSelectedWidth = fRatingValue * fIconSize + (Math.round(fRatingValue) - 1) * fIconPadding;
	if (iSelectedWidth < 0) { //width should not be negative
		iSelectedWidth = 0;
	}
	var iWidth = iSymbolCount * (fIconSize + fIconPadding) - fIconPadding;
	

	// render the control container div
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.writeAttribute("style", "width: " + iWidth + sIconSizeMeasure);
	oRm.addClass("sapMRI");
	if (oControl.getEnabled()) {
		oRm.addClass("sapMPointer");
	} else {
		oRm.addClass("sapMRIDisabled");
	}
	oRm.writeClasses();
	oRm.write(">");

	// render selected items div
	oRm.write("<div class='sapMRISel'");
	oRm.writeAttribute("id", oControl.getId() + "-sel");
	oRm.writeAttribute("style", "width: " + iSelectedWidth + sIconSizeMeasure);
	oRm.write(">");
	// for defined count of icons, create selected icons with oControl._getIcon(0)
	for (i = 0; i < iSymbolCount; i++) {
		var oIconSel = oControl._getIcon(0);
		//check if icon is icon or image
		if (oIconSel instanceof sap.ui.core.Icon) {
			oIconSel.setSize(fIconSize + sIconSizeMeasure);
		} else {
			oIconSel.setWidth(fIconSize + sIconSizeMeasure);
			oIconSel.setHeight(fIconSize + sIconSizeMeasure);
		}
		oIconSel.addStyleClass("sapMRIIconSel");
		oRm.renderControl(oIconSel);
	}
	oRm.write("</div>");

	// render unselected items div (container and relative child)
	oRm.write("<div class='sapMRIUnselWrapper'");
	oRm.writeAttribute("id", oControl.getId() + "-unsel-wrapper");
	oRm.writeAttribute("style", "width: " + (iWidth - iSelectedWidth) + sIconSizeMeasure);
	oRm.write(">");
	oRm.write("<div class='sapMRIUnsel' id='" + oControl.getId() + "-unsel'>");
	// for defined count of icons, create unselected icons with oControl._getIcon(1)
	for (i = 0; i < iSymbolCount; i++) {
		var oIconUnsel = oControl._getIcon(1);
		//check if icon is icon or image
		if (oIconUnsel instanceof sap.ui.core.Icon) {
			oIconUnsel.setSize(fIconSize + sIconSizeMeasure);
		} else {
			oIconUnsel.setWidth(fIconSize + sIconSizeMeasure);
			oIconUnsel.setHeight(fIconSize + sIconSizeMeasure);
		}
		oIconUnsel.addStyleClass("sapMRIIconUnsel");
		if (fIconSize <= 1) {
			oIconUnsel.addStyleClass("sapMRIIconUnselSmall");
		}
		oRm.renderControl(oIconUnsel);
	}
	oRm.write("</div>");
	oRm.write("</div>");

	// render hovered item div
	if (oControl.getEnabled()) {
		oRm.write("<div class='sapMRIHov' id='" + oControl.getId() + "-hov'>");
		// for defined count of icons, create hovered icons with oControl._getIcon(2)
		for (i = 0; i < iSymbolCount; i++) {
			var oIconHov = oControl._getIcon(2);
			//check if icon is icon or image
			if (oIconHov instanceof sap.ui.core.Icon) {
				oIconHov.setSize(fIconSize + sIconSizeMeasure);
			} else {
				oIconHov.setWidth(fIconSize + sIconSizeMeasure);
				oIconHov.setHeight(fIconSize + sIconSizeMeasure);
			}
			oIconHov.addStyleClass("sapMRIIconHov");
			oRm.renderControl(oIconHov);
		}
		oRm.write("</div>");

		// render selector items div
		oRm.write("<div class='sapMRISelector' id='" + oControl.getId() + "-selector'>");
		oRm.write("</div>");
	}

	// close control div
	oRm.write("</div>");
};