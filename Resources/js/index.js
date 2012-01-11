/**
 * StoryBot
 * Copyright (c) 2012 by Storyzer Pte Ltd. All Rights Reserved.
 *
 * StoryBot uses Juicer (https://github.com/cjohansen/juicer) to combine, minify, and obfuscate
 * @depend storybot.js
 * @depend storybox.config.js
**/

/*jslint browser: true, devel: true, onevar: true, undef: true, nomen: true, eqeqeq: true, bitwise: true, regexp: true, newcap: true, immed: true */
/*global $, Titanium, Storybot, sc */

/**
 *  usually start off by setting document ready
 */
$(document).ready(function() {
		
	//Perform app initialization (ie) xAuth setup/verification & data fetch
    var tiWindow = Titanium.UI.getCurrentWindow(),
        tiPlatform = Titanium.Platform.getName().toLowerCase(),
        aboutAppceleratorDialog,
        aboutTitaniumDialog;

	// initialize the Storybot class
	Storybot.init();

		
});
