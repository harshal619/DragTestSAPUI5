/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectNumber.
jQuery.sap.declare("sap.m.ObjectNumber");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ObjectNumber.
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
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Control displays number and number unit properties in the table cell.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.14.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ObjectNumber
 */
sap.ui.core.Control.extend("sap.m.ObjectNumber", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"emphasized" : {type : "boolean", group : "Appearance", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectNumber with name <code>sClassName</code> 
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
 * @name sap.m.ObjectNumber.extend
 * @function
 */


/**
 * Getter for property <code>number</code>.
 * Number field
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>number</code>
 * @public
 * @name sap.m.ObjectNumber#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setNumber
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @name sap.m.ObjectNumber#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible object number is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ObjectNumber#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setVisible
 * @function
 */


/**
 * Getter for property <code>emphasized</code>.
 * Whether the ObjectNumber should appear emphasized
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * @name sap.m.ObjectNumber#getEmphasized
 * @function
 */

/**
 * Setter for property <code>emphasized</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setEmphasized
 * @function
 */


// Start of sap/m/ObjectNumber.js
///**
// * This file defines behavior for the control,
// */
//sap.m.ObjectNumber.prototype.init = function(){
//   // do something for initialization...
//};
