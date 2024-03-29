/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Slider.
jQuery.sap.declare("sap.m.Slider");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Slider.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getMin min} : float (default: 0)</li>
 * <li>{@link #getMax max} : float (default: 100)</li>
 * <li>{@link #getStep step} : float (default: 1)</li>
 * <li>{@link #getProgress progress} : boolean (default: true)</li>
 * <li>{@link #getValue value} : float (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Slider#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Slider#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A slider is a user interface control that enables the user to adjust values in a specified numerical range.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.14.1
 *
 * @constructor   
 * @public
 * @name sap.m.Slider
 */
sap.ui.core.Control.extend("sap.m.Slider", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"stepUp", "stepDown"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"min" : {type : "float", group : "Data", defaultValue : 0},
		"max" : {type : "float", group : "Data", defaultValue : 100},
		"step" : {type : "float", group : "Data", defaultValue : 1},
		"progress" : {type : "boolean", group : "Misc", defaultValue : true},
		"value" : {type : "float", group : "Data", defaultValue : 0}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Slider with name <code>sClassName</code> 
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
 * @name sap.m.Slider.extend
 * @function
 */

sap.m.Slider.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>width</code>.
 * Defines the width of the slider element, this value can be provided in %, em, px… and all possible CSS measures.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Slider#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the slider.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Slider#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Defines the visibility for the slider.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Slider#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setVisible
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Slider#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setName
 * @function
 */


/**
 * Getter for property <code>min</code>.
 * The minimum value of the slider.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>min</code>
 * @public
 * @name sap.m.Slider#getMin
 * @function
 */

/**
 * Setter for property <code>min</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fMin  new value for property <code>min</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setMin
 * @function
 */


/**
 * Getter for property <code>max</code>.
 * The maximum value of the slider.
 *
 * Default value is <code>100</code>
 *
 * @return {float} the value of property <code>max</code>
 * @public
 * @name sap.m.Slider#getMax
 * @function
 */

/**
 * Setter for property <code>max</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {float} fMax  new value for property <code>max</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setMax
 * @function
 */


/**
 * Getter for property <code>step</code>.
 * Define the size of every one step the slider takes between min and max.
 * 
 * The step needs to be a positive integer; if a negative number is provider, the default value will take place.
 * 
 * If the width of the slider converted to pixels is less than the range (max – min), the value will be rounded to multiples of the step size.
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>step</code>
 * @public
 * @name sap.m.Slider#getStep
 * @function
 */

/**
 * Setter for property <code>step</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fStep  new value for property <code>step</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setStep
 * @function
 */


/**
 * Getter for property <code>progress</code>.
 * Show a progress bar for the slider.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>progress</code>
 * @public
 * @name sap.m.Slider#getProgress
 * @function
 */

/**
 * Setter for property <code>progress</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bProgress  new value for property <code>progress</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setProgress
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Define the value of the slider. If this value is lower than the minimum permited, the minimum will be override the value, or if the value is higher than maximun, the maximum will be override the value.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.m.Slider#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setValue
 * @function
 */


/**
 * This event is triggered after the end user finishes interacting, if there is any change. 
 *
 * @name sap.m.Slider#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value The current value of the slider after a change.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Slider</code>.<br/> itself. 
 *  
 * This event is triggered after the end user finishes interacting, if there is any change. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code>.<br/> itself.
 *
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the slider after a change.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Slider#fireChange
 * @function
 */


/**
 * This event is triggered during the dragging period, each time the slider value changes. 
 *
 * @name sap.m.Slider#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value The current value of the slider after a live change.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Slider</code>.<br/> itself. 
 *  
 * This event is triggered during the dragging period, each time the slider value changes. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code>.<br/> itself.
 *
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the slider after a live change.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Slider#fireLiveChange
 * @function
 */


/**
 * Changes the slider’s value by the value given in the step attribute, multiplied by n.
 * 
 * The default value for n is 1.
 *
 * @name sap.m.Slider.prototype.stepUp
 * @function
 * @param {int} 
 *         iN
 *         The number of steps the slider goes up.

 * @type void
 * @public
 */


/**
 * Changes the slider’s value by the value given in the step attribute, multiplied by n.
 * 
 * The default value for n is 1.
 *
 * @name sap.m.Slider.prototype.stepDown
 * @function
 * @param {int} 
 *         iN
 *         The number of steps the slider goes down.

 * @type void
 * @public
 */


// Start of sap/m/Slider.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.apply(sap.m.Slider.prototype, [true]);

/* =========================================================== */
/*                   begin: lifecycle methods                  */
/* =========================================================== */

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Slider.prototype.onBeforeRendering = function() {
	var fMin = this.getMin(),
		fMax = this.getMax(),
		fStep = this.getStep(),
		bMinbiggerThanMax = false,
		bError = false;

	/*
	 *	functional dependencies:
	 *
	 *	min				-> max
	 *	max				-> min
	 *
	 *	max, min		-> step
	 *	max, min, step	-> value
	 *
	 */

	// if the minimum is lower than or equal to the maximum, log a warning
	if (fMin >= fMax) {
		bMinbiggerThanMax = true;
		bError = true;
		jQuery.sap.log.warning("Warning: " + "Property wrong min: " + fMin + " >= max: " + fMax + " on ", this);
	}

	// if the step is negative or 0, set to 1 and log a warning
	if (fStep <= 0) {
		jQuery.sap.log.warning("Warning: " + "The step could not be negative on ", this);
		fStep = 1;

		// update the step to 1 and suppress re-rendering
		this.setProperty("step", fStep, true);
	}

	// the step can't be bigger than slider range, log a warning
	if (fStep > (fMax - fMin) && !bMinbiggerThanMax) {
		bError = true;
		jQuery.sap.log.warning("Warning: " + "Property wrong step: " + fStep + " > max: " + fMax + " - " + "min: " + fMin + " on ", this);
	}

	// update the value only if there aren't errors
	if (!bError) {
		this.setValue(this.getValue());

		// this is the current % value for the slider progress bar
		this._fProgressValue = this._getPercentFromValue(this.getValue()) + "%";
	}

	// flags
	this._bProgress = this.getProgress();
	this._bInputRendered = !!this.getName();
	this._bDisabled = !this.getEnabled();
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Slider.prototype.onAfterRendering = function() {

	// slider control container jQuery reference
	this._$SliderContainer = this.$();

	// slider jQuery reference
	this._$Slider = this._$SliderContainer.children(".sapMSli");

	// progress indicator
	this._$ProgressIndicator = this._$Slider.children(".sapMSliProgress");

	// handle jQuery reference
	this._$Handle = this._$Slider.children(".sapMSliHandle");

	// native input type range jQuery reference
	this._$Input = this._$SliderContainer.children("input.sapMSliInput");

	//	after all calculations, makes the control visible
	this._$SliderContainer.css("visibility", "");
};

/* =========================================================== */
/*                   end: lifecycle methods                    */
/* =========================================================== */


/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */

/**
 * Handle the touch start event happening on the slider.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Slider.prototype.ontouchstart = function(oEvent) {
	var $Target = jQuery(oEvent.target),
		fMin = this.getMin(),
		fValue;

	//	for control who need to know if they should handle events from the slider control
	oEvent.originalEvent._sapui_handledByControl = true;

	if (oEvent.targetTouches.length > 1 || this._bDisabled) {	// suppress multiTouch events
		return;
	}

	// update the slider measures, those values may change in orientation change
	this._recalculateStyles();

	// initialization
	this._fDiffX = this._fSliderPaddingLeft;
	this._fStartValue = this.getValue();

	// add active state
	this._$Slider.addClass("sapMSliPressed");

	if ($Target.is(this._$Handle) || $Target.parent().is(this._$Handle)) {	// if the target is the slider handle

		/*
		 *	This property is needed only by the ontouchmove handle.
		 *	When a touch start event occurs, its value is calculated
		 *	by subtracting the thumb position left from the slider
		 *	control target pageX.
		 *	This is the necessary amount to be subtracted when the
		 *	ontouchmove	event handle is fired.
		 *	The result is a better dragging experience that behaves
		 *	much more in the way that the user expects.
		 */
		this._fDiffX = oEvent.targetTouches[0].pageX - this._$Handle.offset().left;
	} else {
		fValue = (((oEvent.targetTouches[0].pageX - this._fSliderPaddingLeft - this._fSliderOffsetLeft) / this._fSliderWidth) * (this.getMax() - fMin)) +  fMin;

		// update the slider value
		this.setValue(fValue);
		this.fireLiveChange({value: this.getValue()});
	}
};

/**
 * Handle the touch move event on the slider.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Slider.prototype.ontouchmove = function(oEvent) {

	if (this._bDisabled) {
		return;
	}

	var fMin = this.getMin(),
		fValue = this.getValue(),
		fNewValue = (((oEvent.targetTouches[0].pageX - this._fDiffX - this._fSliderOffsetLeft) / this._fSliderWidth) * (this.getMax() - fMin)) +  fMin;

	// validate, update the the slider value and the UI
	this.setValue(fNewValue);

	// new value validated
	fNewValue = this.getValue();

	if (fValue !== fNewValue) {
		this.fireLiveChange({value:fNewValue});
	}
};

/**
 * Handle the touch end event on the slider.
 *
 * @private
 */
sap.m.Slider.prototype.ontouchend = function() {
	var fValue = this.getValue();

	if (this._bDisabled) {
		return;
	}

	// remove active state
	this._$Slider.removeClass("sapMSliPressed");

	if (this._fStartValue !== fValue) {	// if the value if not the same
		this.fireChange({value: fValue});
	}

	// remove unused properties
	delete this._fDiffX;
	delete this._fStartValue;
};

/**
 * Handle the touch cancel event on the slider.
 *
 * @private
 */
sap.m.Slider.prototype.ontouchcancel = sap.m.Slider.prototype.ontouchend;

/* ============================================================ */
/*                      end: event handlers                  	*/
/* ============================================================ */


/* =========================================================== */
/*                      begin: internal methods                */
/* =========================================================== */

/**
 * Recalculate styles.
 *
 * @private
 */
sap.m.Slider.prototype._recalculateStyles = function() {

	// slider width
	this._fSliderWidth = this._$SliderContainer.width();

	// slider padding left
	this._fSliderPaddingLeft = parseFloat(this._$SliderContainer.css("padding-left"));

	// slider offset left
	this._fSliderOffsetLeft = this._$SliderContainer.offset().left;

	// handle width
	this._fHandleWidth = this._$Handle.width();
};

/**
 * Calculate percentage.
 *
 * @param {float} fValue the value from the slider
 * @private
 * @returns {float} percent
 */
sap.m.Slider.prototype._getPercentFromValue = function(fValue) {
	var fMin = this.getMin();

	return ((fValue - fMin) / (this.getMax() - fMin)) * 100;
};

sap.m.Slider.prototype._validateN = function(n) {
	var sTypeofN = typeof n;

	if (sTypeofN === "undefined") {
		return 1;	// default n = 1
	} else if (sTypeofN !== "number") {
		jQuery.sap.log.warning('Warning: n needs to be a number', this);
		return 0;
	} else if (Math.floor(n) === n && isFinite(n)) {
		return n;
	} else {
		jQuery.sap.log.warning('Warning: n needs to be a finite interger', this);
		return 0;
	}
};

sap.m.Slider.prototype._setValue = function(fNewValue) {
	var fMin = this.getMin(),
		fMax = this.getMax(),
		fStep = this.getStep(),
		fValue = this.getValue(),
		fModStepVal = Math.abs(fNewValue % fStep),
		fPerVal;

	// validate the new value before arithmetic calculations
	if (typeof fNewValue !== "number" || !isFinite(fNewValue)) {
		jQuery.sap.log.error("Error:", '"fNewValue" needs to be a finite number of', this);
		return this;
	}

	// round the value to the nearest step
	fNewValue = fModStepVal * 2 >= fStep ? fNewValue + fStep - fModStepVal
											: fNewValue - fModStepVal;

	// validate that the value is between maximum and minimum
	fNewValue = fNewValue > fMax ? fMax
									: fNewValue < fMin ? fMin : fNewValue;

	//	Floating-point in JavaScript are IEEE 64 bit values and has some problems with big decimals.
	//	Round the final value to 5 digits after the decimal point.
	fNewValue = Number(fNewValue.toFixed(5));

	// update the value and suppress re-rendering
	this.setProperty("value", fNewValue, true);

	// if the value is the same, suppress DOM modifications and event fire
	if (fValue === this.getValue()) {
		return this;
	}

	if (this._$SliderContainer) {	//	after re-rendering

		fPerVal = this._getPercentFromValue(fNewValue) + "%";

		if (this._bInputRendered) {

			// update the input
			this._$Input[0].setAttribute("value", fNewValue);
		}

		if (this._bProgress) {

			// update the progress indicator
			this._$ProgressIndicator[0].style.width = fPerVal;
		}

		// update the handle position
		this._$Handle[0].style.left = fPerVal;
		this._$Handle[0].title = fNewValue;

		// update the WAI-ARIA attribute values
		this._$Handle[0].setAttribute("aria-valuenow", fNewValue);
		this._$Handle[0].setAttribute("aria-valuetext", fNewValue);
	}

	return this;
};

/* =========================================================== */
/*                      end: internal methods                  */
/* =========================================================== */


/* =========================================================== */
/*                   begin: API method                         */
/* =========================================================== */

sap.m.Slider.prototype.stepUp = function(n) {
	return this.setValue(this.getValue() + (this._validateN(n) * this.getStep()));
};

sap.m.Slider.prototype.stepDown = function(n) {
	return this.setValue(this.getValue() - (this._validateN(n) * this.getStep()));
};

sap.m.Slider.prototype.setValue = function(fNewValue) {

	/*
	 * The first time when setValue() method is called, other properties may
	 * be outdated, because the invocation order is not always the same.
	 *
	 * Overwriting this prototype method with an instance method after the first call,
	 * will ensure correct calculations.
	 *
	 */
	this.setValue = this._setValue;

	// update the value and suppress re-rendering
	return this.setProperty("value", fNewValue, true);
};

/* =========================================================== */
/*                     end: API method                         */
/* =========================================================== */