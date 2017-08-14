/* Initialization of user variables needed by the plugin */
var fadeOutSpeed = 200;
var fadeInSpeed = 200;
var imageSize = "92%";
var captions = false;

/*
closing popup function
*/
function closePopup() {
        $( "#photo" ).fadeOut(fadeOutSpeed,function() {			// fadeout the photo
            $( "#popup" ).fadeOut(fadeOutSpeed, function() {	// fadeout the the popup 
                $( "#photo" ).attr('src',"#");					// set the src for the photo to #
            });
        });
		$( ".wrap" ).show();									// show hidden main content to make scrollbar enabled
}

/*
document ready main function
*/
$( document ).ready(function() {
	var i = 0;
	
	var tn_array = $(".wrap img").map(function() {
		return $(this).attr("data-src");
	});
	
	$( "#close" ).click(closePopup);
	
    
	$( ".box" ).click(function() {
        var img = $(this).children().children(img).attr('data-src');
		
		$( ".wrap" ).hide();									// hide the main window to disable scrollbars

		$( "#photo" ).height(imageSize); 						// set photo size before show it		
		$( "#photo" ).width(imageSize);							// set photo size before show it
        $( "#photo img" ).attr('src',img);						// set photo src to the current one
        
		
		$( "#popup" ).toggle(0,function() {						// show the popup window
            $( "#photo" ).fadeIn(fadeInSpeed, function() {		// fadein the photo
                $( "#photo" ).attr('src',"#");					// set photo src attribute to "#"
			});
		});   
    });
	
	
	
	/* This function changes the current photo to the next one.
	 * by clicking on the image
	 */
	$( "#photo" ).click(function() {
		$( "#photo" ).fadeOut(fadeOutSpeed,function() {			// fadeout the current photo
			i++;
			var img = tn_array[i];
			
			$( "#photo img" ).attr('src',img);					// set the src for new photo 
			$( "#photo" ).fadeIn(fadeInSpeed);					// fadein the new photo
		});
	});
	
    
});
