/**
 * StoryBot
 * Copyright (c) 2012 by Storyzer Pte Ltd. All Rights Reserved.
 *
 * StoryBot uses Juicer (https://github.com/cjohansen/juicer) to combine, minify, and obfuscate
 * @depend jquery/jquery-1.4.4.js
 * @depend jquery/jquery-ui-custom/js/jquery-ui-1.8.7.custom.min.js
 * @depend jquery/jquery.scrollTo/jquery.scrollTo.js
**/

/*jslint browser: true, devel: true, onevar: true, undef: true, nomen: true, eqeqeq: true, bitwise: true, regexp: true, newcap: true, immed: true */
/*global $, Titanium, sc, SpazAuth, SpazTwit, SPAZCORE_ACCOUNT_TWITTER, SPAZCORE_AUTHTYPE_OAUTH, SPAZCORE_SECTION_HOME, SPAZCORE_SECTION_DMS, 
SPAZCORE_SECTION_REPLIES */

var Storybot = (function() {

    //Private properties and methods
    
    //Used to verify we have an network connection before performing network related activities
    function doConnectionTest() {
        if (Titanium.Network.online === false) {
            alert('You must have an network connection to use this application! Please check your connection and try again.');
            return false;
        }
    }// end private function doConnectionTest()
    
    function countPropertiesInObject(objectToCount) {
        var prop, 
            count = 0;

        for(prop in objectToCount) {
            if (objectToCount.hasOwnProperty(prop)) {
                count++;
            }
        }

        return count;
    }// end private function countPropertiesInObject()

    //Public properties and methods
    return {
        //This method performs application initialization process (ie) OAuth setup/verification, initial data fetch, etc
        init: function() {
		
		
			
        },// end public function Storybot.init()
        
        Auth: {
            //The public auth method used to interact with our private OAuth related methods
            doAuth: function(username, password) {
                            
                            
                            
            },

            doLogout: function() {
                
            },

            getUsername: function() {
                
            }
            
        }, // end Storybot.Auth
        

        UI: {
            showLoginWindow: function() {
            }// end Storybot.UI.showLoginWindow()
                
		}, // end Storybot.UI
		
        //Object that deals with fetching remote data
        Fetcher: {

        }, // end Storybo.Fetcher
        
        //Object that deals with posting data/updates to a remote web service
        Poster: {
            //Verify we are safe to perform a remote call
            isSafeToPost: function() {
                //Methods could call doConnectionTest directly, but there may eventually be 
                //more things we want to check before making outbound calls so abstracting a bit. 
                if (doConnectionTest() === false) {
                    return false;
                } else {
                    return true;
                }
            }
            
        }// end Storybot.Poster

            
    }; // end public methods



// having the () bracket means this is Singleton class
} ()); // end class Storybot 