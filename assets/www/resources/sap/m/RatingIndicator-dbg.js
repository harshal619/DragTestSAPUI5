/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.RatingIndicator.
jQuery.sap.declare("sap.m.RatingIndicator");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new RatingIndicator.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getMaxValue maxValue} : int (default: 5)</li>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getIconSize iconSize} : sap.ui.core.CSSSize (default: '2rem')</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getIconUnselected iconUnselected} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getVisualMode visualMode} : sap.m.RatingIndicatorVisualMode (default: sap.m.RatingIndicatorVisualMode.Half)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.RatingIndicator#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.RatingIndicator#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Is used to rate content. The amount of rating symbols can be specified, as well as the URIs to the
 * image icons which shall be used as rating symbols. When the user performs a rating, an event is fired.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.14.1
 *
 * @constructor   
 * @public
 * @since 1.14
 * @name sap.m.RatingIndicator
 */
sap.ui.core.Control.extend("sap.m.RatingIndicator", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"maxValue" : {type : "int", group : "Behavior", defaultValue : 5},
		"value" : {type : "float", group : "Behavior", defaultValue : 0, bindable : "bindable"},
		"iconSize" : {type : "sap.ui.core.CSSSize", group : "Behavior", defaultValue : '2rem'},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null},
		"iconUnselected" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null},
		"iconHovered" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null},
		"visualMode" : {type : "sap.m.RatingIndicatorVisualMode", group : "Behavior", defaultValue : sap.m.RatingIndicatorVisualMode.Half}
	},
	aggregations : {
    	"_iconsSelected" : {type : "sap.ui.core.Control", multiple : true, singularName : "_iconsSelected", visibility : "hidden"}, 
    	"_iconsUnselected" : {type : "sap.ui.core.Control", multiple : true, singularName : "_iconsUnselected", visibility : "hidden"}, 
    	"_iconsHovered" : {type : "sap.ui.core.Control", multiple : true, singularName : "_iconsHovered", visibility : "hidden"}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.RatingIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.RatingIndicator.extend
 * @function
 */

sap.m.RatingIndicator.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>visible</code>.
 * If set to invisible, the control is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.RatingIndicator#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Value "true" is required to let the user rate with this control. It is recommended to set this parameter to "false" for the "Small" size which is meant for indicating a value only
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.RatingIndicator#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setEnabled
 * @function
 */


/**
 * Getter for property <code>maxValue</code>.
 * The number of displayed rating symbols
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * @name sap.m.RatingIndicator#getMaxValue
 * @function
 */

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iMaxValue  new value for property <code>maxValue</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setMaxValue
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * The indicated value of the rating
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.m.RatingIndicator#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setValue
 * @function
 */


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#bindValue
 * @function
 */

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#unbindValue
 * @function
 */


/**
 * Getter for property <code>iconSize</code>.
 * The Size of the image or icon to be displayed in unit. Please be sure that the size is corresponding to a full pixel value as some browsers don't support subpixel calculations.
 *
 * Default value is <code>2rem</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>iconSize</code>
 * @public
 * @name sap.m.RatingIndicator#getIconSize
 * @function
 */

/**
 * Setter for property <code>iconSize</code>.
 *
 * Default value is <code>2rem</code> 
 *
 * @param {sap.ui.core.CSSSize} sIconSize  new value for property <code>iconSize</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setIconSize
 * @function
 */


/**
 * Getter for property <code>iconSelected</code>.
 * The URI to the icon font icon or image that will be displayed for selected rating symbols. A star icon will be used if the property is not set
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.m.RatingIndicator#getIconSelected
 * @function
 */

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setIconSelected
 * @function
 */


/**
 * Getter for property <code>iconUnselected</code>.
 * The URI to the icon font icon or image that will be displayed for all unselected rating symbols. A star icon will be used if the property is not set
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconUnselected</code>
 * @public
 * @name sap.m.RatingIndicator#getIconUnselected
 * @function
 */

/**
 * Setter for property <code>iconUnselected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconUnselected  new value for property <code>iconUnselected</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setIconUnselected
 * @function
 */


/**
 * Getter for property <code>iconHovered</code>.
 * The URI to the icon font icon or image that will be displayed for hovered rating symbols. A star icon will be used if the property is not set
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * @name sap.m.RatingIndicator#getIconHovered
 * @function
 */

/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setIconHovered
 * @function
 */


/**
 * Getter for property <code>visualMode</code>.
 * Defines how float values are visualized: Full, Half (see enumeration RatingIndicatorVisualMode)
 *
 * Default value is <code>Half</code>
 *
 * @return {sap.m.RatingIndicatorVisualMode} the value of property <code>visualMode</code>
 * @public
 * @name sap.m.RatingIndicator#getVisualMode
 * @function
 */

/**
 * Setter for property <code>visualMode</code>.
 *
 * Default value is <code>Half</code> 
 *
 * @param {sap.m.RatingIndicatorVisualMode} oVisualMode  new value for property <code>visualMode</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#setVisualMode
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.m.RatingIndicator#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.m.RatingIndicator#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.m.RatingIndicator#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.m.RatingIndicator#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.m.RatingIndicator#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.m.RatingIndicator#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * The event is fired when the user has done a rating. 
 *
 * @name sap.m.RatingIndicator#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.value The rated value
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.RatingIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.RatingIndicator</code>.<br/> itself. 
 *  
 * The event is fired when the user has done a rating. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.RatingIndicator</code>.<br/> itself.
 *
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.RatingIndicator</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>int</code> The rated value</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.RatingIndicator#fireChange
 * @function
 */


/**
 * This event is triggered during the dragging period, each time the rating value changes. 
 *
 * @name sap.m.RatingIndicator#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value The current value of the rating after a live change event.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.RatingIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.RatingIndicator</code>.<br/> itself. 
 *  
 * This event is triggered during the dragging period, each time the rating value changes. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.RatingIndicator</code>.<br/> itself.
 *
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.RatingIndicator</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.RatingIndicator#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the rating after a live change event.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.RatingIndicator#fireLiveChange
 * @function
 */


// Start of sap/m/RatingIndicator.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ui.core.IconPool");

/* =========================================================== */
/*           temporary flags for jslint syntax check           */
/* =========================================================== */
/*jslint nomen: false */

/* =========================================================== */
/*           begin: API methods                                */
/* =========================================================== */

/**
 * Initializes the control
 * @private
 */
sap.m.RatingIndicator.prototype.init = function () {
	// deactivate text selection on drag events
	this.allowTextSelection(false);
	this._iIconCounter = 0;
};

/**
 * Sets the rating value. The method is automatically checking whether the value is in the valid range of 0-{maxValue} and if it is a valid number
 * @param {float} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setValue = function (fValue) {
	// do not set negative values (will be returned by calculation function if there is an error)
	if (fValue < 0) {
		return this;
	}
	// check for valid numbers
	if (isNaN(fValue)) {
		jQuery.sap.log.warning('Ignored new rating value "' + fValue + '" because it is NAN');
	// check if the number is in the range 0-maxValue (only if control is rendered)
	// if control is not rendered it is handled by onBeforeRendering()
	} else if (jQuery.sap.byId(this.getId()).length && (fValue > this.getMaxValue())) {
		jQuery.sap.log.warning('Ignored new rating value "' + fValue + '" because it is out  of range (0-' + this.getMaxValue() + ')');
	} else {
		fValue = this._roundValueToVisualMode(fValue);
		this.setProperty("value", fValue, true);
		this._updateUI(fValue);
	}
	return this;
};

/**
 * Sets the selected icon without rerendering the control
 * @param {sap.ui.core/URI} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setIconSelected = function (sURI) {
	var oItems = this.getAggregation("_iconsSelected"),
		i = 0;

	if (oItems) {
		for (; i < oItems.length; i++) {
			oItems[i].setSrc(sURI);
		}
	}
	this.setProperty("iconSelected", sURI, true);	
};

/**
 * Sets the unselected icon without rerendering the control
 * @param {sap.ui.core/URI} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setIconUnselected = function (sURI) {
	var oItems = this.getAggregation("_iconsUnselected"),
		i = 0;

	if (oItems) {
		for (; i < oItems.length; i++) {
			oItems[i].setSrc(sURI);
		}
	}
	this.setProperty("iconUnselected", sURI, true);	
};

/**
 * Sets the hovered icon without rerendering the control
 * @param {sap.ui.core/URI} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setIconHovered = function (sURI) {
	var oItems = this.getAggregation("_iconsHovered"),
		i = 0;

	if(oItems) {
		for (; i < oItems.length; i++) {
			oItems[i].setSrc(sURI);
		}
	}
	this.setProperty("iconHovered", sURI, true);	
};

sap.m.RatingIndicator.prototype.onBeforeRendering = function () {
	var fVal = this.getValue();
	var iMVal = this.getMaxValue();
	if (fVal > iMVal) {
		this.setValue(iMVal);
		jQuery.sap.log.warning("Set value to maxValue because value is > maxValue (" + fVal + " > " + iMVal + ").");
	} else if (fVal < 0) {
		this.setValue(0);
		jQuery.sap.log.warning("Set value to 0 because value is < 0 (" + fVal + " < 0).");
	}
};

/**
 * Destroys the control
 * @private
 */
sap.m.RatingIndicator.prototype.exit = function() {
	delete this._iIconCounter;
	delete this._fStartValue;
};

/* =========================================================== */
/*           end: API methods                                  */
/* =========================================================== */

/* =========================================================== */
/*           begin: internal methods and properties            */
/* =========================================================== */

/**
 * Updates the controls's interface to reflect a value change of the rating
 * @param {float} fValue the rating value to be set
 * @param {boolean} bHover if this parameter is set to true, the hover mode is activated and the value is displayed with {iconHovered} instead of {iconSelected}
 * @private
 */
sap.m.RatingIndicator.prototype._updateUI = function (fValue, bHover) {
	jQuery.sap.require("sap.ui.core.theming.Parameters");
	
	// save a reference on all needed DOM elements
	var $SelectedDiv = jQuery.sap.byId(this.getId() + "-sel"),
		$UnselectedContainerDiv = jQuery.sap.byId(this.getId() + "-unsel-wrapper"),
		$HoveredDiv = jQuery.sap.byId(this.getId() + "-hov");

	var fIconPadding = parseFloat(sap.ui.core.theming.Parameters.get("sapUiRIIconPadding")) || 0,
		fIconSize = parseFloat(this.getIconSize()) || 1,
		sIconSizeMeasure = /[a-zA-Z]+/.exec(this.getIconSize()) || "rem",
		iSymbolCount = this.getMaxValue();

	//calculate the width for the selected elements and the complete width
	var iSelectedWidth = fValue * fIconSize + (Math.round(fValue) - 1) * fIconPadding;
	if (iSelectedWidth < 0) { //width should not be negative
		iSelectedWidth = 0;
	}
	var iWidth = iSymbolCount * (fIconSize + fIconPadding) - fIconPadding;
	

	// adjust unselected container with the remaining width
	$UnselectedContainerDiv.width((iWidth - iSelectedWidth) + sIconSizeMeasure);
	
	// update the DOM elements to reflect the value by setting the width of the div elements
	if (bHover) { // hide selected div & adjust hover div
		$HoveredDiv.width(iSelectedWidth + sIconSizeMeasure);
		$SelectedDiv.hide();
		$HoveredDiv.show();
	} else { // hide hovered div & adjust selected div
		$SelectedDiv.width(iSelectedWidth + sIconSizeMeasure);
		$HoveredDiv.hide();
		$SelectedDiv.show();
	}

	jQuery.sap.log.debug("Updated rating UI with value " + fValue + " and hover mode " + bHover);
};

/**
 * Load the icons/images of the rating for the different rating states
 * @param {integer} iState The icon to be returned (0 = {iconSelected},  1 = {iconUnseleced}, 2 = {iconHovered}
 * @returns {object} either an sap.m.Image or an sap.m.Icon depending on the URI of the control parameters
 * @private
 */
sap.m.RatingIndicator.prototype._getIcon = function (iState) {
	// single initialization
	var oImage = null,
		sURI = null;

	// preset the variables based on the state requested
	switch (iState) {
	case 1: // unselected
		sURI = this.getIconUnselected() || sap.ui.core.IconPool.getIconURI("favorite");
		break;
	case 2: // Hovered
		sURI = this.getIconHovered() || sap.ui.core.IconPool.getIconURI("favorite");
		break;
	case 0: // Selected
		sURI = this.getIconSelected() || sap.ui.core.IconPool.getIconURI("favorite");
		break;
	}

	if (sURI) {
		oImage = sap.ui.core.IconPool.createControlByURI( {
			id: this.getId() + "__icon" + this._iIconCounter++, 
			src: sURI,
		}, sap.m.Image);

		// store the icons in the corresponding internal aggregation
		switch (iState) {
		case 1: // unselected
			this.addAggregation("_iconsUnselected", oImage, true);
			break;
		case 2: // Hovered
			this.addAggregation("_iconsHovered", oImage, true);
			break;
		case 0: // Selected
			this.addAggregation("_iconsSelected", oImage, true);
			break;
		}	
	}

	return oImage;
};

/**
 * Calculated the selected value based on the event position of the tap/move/click event.
 * This function is called by the event handlers to determine the {value} of the rating.
 *
 * @param {jQuery.EventObject} oEvent The event object passed to the event handler
 * @returns {float} the rounded rating value based on {visualMode}
 * @private
 */
sap.m.RatingIndicator.prototype._calculateSelectedValue = function (oEvent) {
	var selectedValue = -1.0,
		percentageWidth = 0.0,
		oControlRoot = this.$(this.getId()),
		fControlPadding = (oControlRoot.innerWidth() - oControlRoot.width()) / 2,
		oEventPosition;
		
	if (oEvent.targetTouches) {
		oEventPosition = oEvent.targetTouches[0];
	} else {
		oEventPosition = oEvent;
	}

	// get the event position for tap/touch/click events
	if (!oEventPosition || !oEventPosition.pageX) { // desktop fallback
		oEventPosition = oEvent;
		if ((!oEventPosition || !oEventPosition.pageX) && oEvent.changedTouches) { // touchend fallback
			oEventPosition = oEvent.changedTouches[0];
		}
	}

	// if an event position is not present we stop
	if (!oEventPosition.pageX) { // TODO: find out why this happens
		return parseFloat(selectedValue);
	}

	// check if event is happening inside of the control area (minus padding of the control)
	if (oEventPosition.pageX < oControlRoot.offset().left) {
		selectedValue = 0;
	} else if ( (oEventPosition.pageX - oControlRoot.offset().left) >  oControlRoot.innerWidth() - fControlPadding) {
		selectedValue = this.getMaxValue();
	} else {
		// calculate the selected value based on the percentage value of the event position
		percentageWidth = (oEventPosition.pageX - oControlRoot.offset().left - fControlPadding) / oControlRoot.width();
		selectedValue = percentageWidth * this.getMaxValue();
	}

	// return rounded value based on the control's visual mode
	return this._roundValueToVisualMode(selectedValue, true);
};

/**
 * Rounds the float value according to the parameter {visualMode}:
 * - A value of "Full" will result in integer values.
 * - A value of "Half" will result in float values rounded to 0.5.
 *
 * @param {float} fValue the rating value
 * @returns {float} the rounded rating value
 * @private
 */
sap.m.RatingIndicator.prototype._roundValueToVisualMode = function (fValue, bInputMode) {
	if (bInputMode) { // we only support full selection of stars
		if (fValue < 0.25) { // to be able to also select 0 stars
			fValue = 0;
		} else if (fValue < 4.75) {
			fValue += 0.25;
		}
		fValue = Math.round(fValue); 
	} else { // for display we round to the correct behavior
		if (this.getVisualMode() === sap.m.RatingIndicatorVisualMode.Full) {
			fValue = Math.round(fValue);
		} else if (this.getVisualMode() === sap.m.RatingIndicatorVisualMode.Half) {
			fValue = Math.round(fValue * 2) / 2;
		}
	}
	return parseFloat(fValue);
};

/* =========================================================== */
/*           end: internal methods                             */
/* =========================================================== */

/* =========================================================== */
/*           begin: event handlers                             */
/* =========================================================== */

/**
 * Handle the touch start event happening on the rating.
 * The UI will be updated accordingly to show a preview of the rating value without actually setting the value.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.RatingIndicator.prototype.ontouchstart = function (oEvent) {
	if (this.getEnabled()) {
		oEvent.originalEvent._sapui_handledByControl = true;

		if (!this._touchEndProxy) {
			this._touchEndProxy = jQuery.proxy(this._ontouchend, this);
		}

		if (!this._touchMoveProxy) {
			this._touchMoveProxy = jQuery.proxy(this._ontouchmove, this);
		}
		
		// here also bound to the mouseup mousemove event to enable it working in
		// desktop browsers
		if (jQuery.support.touch){
			jQuery(window.document).bind("touchend touchcancel", this._touchEndProxy);
			jQuery(window.document).bind("touchmove", this._touchMoveProxy);
		} else {
			jQuery(window.document).bind("mouseup", this._touchEndProxy);
			jQuery(window.document).bind("mousemove", this._touchMoveProxy);
		}

		this._fStartValue = this.getValue();
		var fValue = this._calculateSelectedValue(oEvent);

		if (fValue >= 0 && fValue <= this.getMaxValue()) {
			this._updateUI(fValue, true);
			if (this._fStartValue !== fValue) {	// if the value if not the same
				this.fireLiveChange({value: fValue});
			}
		}
	}
};

/**
 * Handle the touch move event on the rating.
 * The UI will be updated accordingly to show a preview of the rating value without actually setting the value.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.RatingIndicator.prototype._ontouchmove = function (oEvent) {
	if (this.getEnabled()) {
		var fValue = this._calculateSelectedValue(oEvent);

		if (fValue >= 0 && fValue <= this.getMaxValue()) {
			this._updateUI(fValue, true);
			if (this._fStartValue !== fValue) {	// if the value if not the same
				this.fireLiveChange({value: fValue});
			}
		}
	}
};

/**
 * Handle the touch end event on the rating.
 * A change event will be fired when the touch ends, the value will be set, and the UI will be updated accordingly.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.RatingIndicator.prototype._ontouchend = function (oEvent) {
	if (this.getEnabled()) {
		var fValue = this._calculateSelectedValue(oEvent);
		this.setProperty("value", fValue, true);
		this._updateUI(fValue, false);
		if (this._fStartValue !== fValue) {	// if the value if not the same
			this.fireChange({value: fValue});
		}

		if(jQuery.support.touch){
			jQuery(window.document).unbind("touchend touchcancel", this._touchEndProxy);
			jQuery(window.document).unbind("touchmove", this._touchMoveProxy);
		}
		else{
			jQuery(window.document).unbind("mouseup", this._touchEndProxy);
			jQuery(window.document).unbind("mousemove", this._touchMoveProxy);
		}

		// remove unused properties
		delete this._fStartValue;
	}
};

/**
 * Handle the touch cancel event on the rating.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.RatingIndicator.prototype.ontouchcancel = sap.m.RatingIndicator.prototype.ontouchend;

/* =========================================================== */
/*           end: event handlers                               */
/* =========================================================== */
