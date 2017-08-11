/* Initialization of user variables needed by the plugin */
var fadeOutSpeed = 200;
var fadeInSpeed = 300;
var imageHeight = "78%";
var captions = false;

/*
closing popup function
*/
function closePopup() {
        $( "#photo" ).fadeOut(fadeOutSpeed,function() {
            $( "#popup" ).fadeOut(fadeOutSpeed, function() {
                $( "#photo" ).attr('src',"#");
            });
        });
		$( ".wrap" ).show();	// show hidden main content to make scrollbar enabled
}

/*
document ready main function
*/
$( document ).ready(function() {
    /*$( "#close" ).click(function() {
        $( "#photo" ).fadeOut(200,function() {
            $( "#popup" ).fadeOut(200, function() {
                $( "#photo" ).attr('src',"#");
            });
        });
    });
	$( "#popup" ).click(function() {
        $( "#photo" ).fadeOut(200,function() {
            $( "#popup" ).fadeOut(200, function() {
                $( "#photo" ).attr('src',"#");
            });
        });
    });
	*/
	$( "#close" ).click(closePopup);
	$( "#popup" ).click(closePopup);
	
    
	$( ".box" ).click(function() {
        var img = $(this).children().children(img).attr('data-src');
		$( ".wrap" ).hide();
        $( "#popup" ).fadeIn(fadeInSpeed);
		$( "#photo" ).height(imageHeight); //100determinuje weilkosc obrazka
		//$( "#photo" ).height($( window ).height()-300); //100
        $( "#photo img" ).attr('src',img);
        $( "#photo" ).fadeIn(fadeInSpeed);
    });
	
    $( window ).bind("resize", function(){
		$( "#photo" ).height(imageHeight);
        //$( "#photo" ).height($( window ).height()-300); //100
    });
});
