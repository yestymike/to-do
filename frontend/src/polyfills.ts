/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 * 
 * This file is divided into 2 sections:
 *   1. Browser polyfills (run by browsers)
 *   2. Application imports (optional higher level fixes for specific browser bugs)
 */

/**************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, zone.js will patch all possible global variables.
 * For applications that are not using Angular or weaving zone.js with WebComponents then
 * it is safe to exclude zone.js from patching unnecessary globals.
 * 
 * Recommended for:
 * - Angular applications that do not use Component Fausts or the HMR/hot loader.
 * - Applications not using Angular and not using Web Components.
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // Disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // Disable patch onProperty such as onclick
// (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames

/**************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js';

/**************************************************************************************************
 * APPLICATION IMPORTS
 */