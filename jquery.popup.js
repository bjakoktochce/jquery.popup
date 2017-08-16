/*
 * Popup v. 1.0.0
 *
 * by Bartosz B. Jakoktochce, Copyright 2017
 *
 * Date: 2017-08-16T14:00Z
 *
 *
 *
 * 
 */

/* Initialization of user variables needed by the plugin */

var fadeOutSpeed = 200;													// speed of transition
var fadeInSpeed = 200;													// speed of transition
var speed = 200;														// speed of transition
var imageSize = "92%";													// image size on the popup
var captions = false;													// captions under img visible or not

/* Internal variables */
 
var i = 0;																// image index counter
var thumbnails;															// thumbnails array

/*
 * Document ready main function
 * this is the main part of the script
 */
$( document ).ready(function() {
	
	/* get all img in wrap and put them into array */
	
	thumbnails = $(".wrap img").map(function() {
		return $(this).attr("data-src");
	});
	
	/* close the popup when "x" is clicked */
	
	$( "#close" ).click(ClosePopup);
	
	/* what to do when the thumbnail has been clicked */
    
	$( ".box" ).click(function() {
		var img = $(this).children().children(img).attr('data-src');	// get the clicked element and send it to the
		OpenPopup(img);													// open popup
    });
		
	/* when the image on popup is clicked go to the next one */
	
	$( "#photo img" ).click(function() {								// click the current photo
		ChangePhoto(1);
	});
	
	/* when the arrow key is pressed just go forward or backward */
	
	$(document).keydown(function(e) {
			switch(e.which) {
			case 37: // left
				ChangePhoto(-1);										// previous photo
				break;

			case 38: // up
				break;

			case 39: // right
				ChangePhoto(1);											// next photo
				break;

			case 40: // down
				//ClosePopup;
				break;

			default: return; 											// exit this handler for other keys
		}
		e.preventDefault(); 											// prevent the default action (scroll / move caret)
	});

	
	/*
	 * ChangePhoto(n)
	 *
	 * arguments:
	 * 		n - determines whether go forward (1) or backward (-1)
	 * return:
	 *		none
	 */
	function ChangePhoto(n) {
		
		/* check if we're on the first image */
		
		i = i + n;
		if ( i < 0 ) {													// if we're on the 1st photo
			i = 0;														// reset the counter and
			return 0;													// do nothing - just exit the function
		}
			
		/* check if this is the last photo and go forward if it's not */
		
		if (i == thumbnails.length ) {								// if this is the last photo just close the popup
				//closePopup;											// invoke of this function doesn't work ?!?!?!? :/ check it
																		// so we have to do it manually by pasting content of this funtion below
																		
			$( "#photo" ).add( "#close" ).fadeOut(fadeOutSpeed,function() {			
				$( "#popup" ).fadeOut(fadeOutSpeed, function() {		// fadeout the the popup 
					$( "#photo" ).attr('src',"#");						// set the src for the photo to #
				});
			});
			$( "#content" ).show();	
		} else {														// if this is not the last photo load next one
			var img = thumbnails[i];					
			$( "#photo" ).fadeOut(fadeOutSpeed,function() {				// fadeout the current photo
				$( "#photo img" ).attr('src',img);						// set the src for new photo 
				$( "#photo" ).fadeIn(fadeInSpeed);						// fadein the new photo
			});
		}
	} //ChangePhoto
	
	/*
	 * OpenPopup()
	 *
	 * arguments:
	 *		img - the initial img which has been clicked
	 * return:
	 *		none
	 */
	function OpenPopup(img) {

		i = jQuery.inArray(img, thumbnails);							// get index of the clicked img
		
		$( "#content" ).hide();											// hide the main window to disable scrollbars

		$( "#photo" ).height(imageSize); 								// set photo size before show it		
		$( "#photo" ).width(imageSize);									// set photo size before show it
        $( "#photo img" ).attr('src',img);								// set photo src to the current one
        
		
		$( "#popup" ).toggle(0,function() {								// show the popup window
            $( "#photo" ).add( "#close" ).fadeIn(fadeInSpeed, function() {				// fadein the photo
                $( "#photo" ).attr('src',"#");							// set photo src attribute to "#"
			});
		});   
	} // OpenPopup
	
	/* 
	 * ClosePopup()
	 *
	 * arguments: 
	 *		none
	 * return: 
	 *		none
	 */
	function ClosePopup() {
        $( "#photo" ).add( "#close" ).fadeOut(fadeOutSpeed,function() {					// fadeout the photo
            $( "#popup" ).fadeOut(fadeOutSpeed, function() {			// fadeout the popup 
                $( "#photo" ).attr('src',"#");							// set the src for the photo to #
            });
        });
		$( "#content" ).show();											// show hidden main content to make scrollbar enabled
	} // ClosePopup
	
    
});
