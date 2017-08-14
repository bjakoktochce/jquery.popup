#popup {
		position:fixed;
		top:0px; 
		left:0px;
		height:100%;
		width:100%;
		background-color:rgba(234, 234, 234);
		display:none;
		z-index:1;
	}
	#popup #close {
		position:absolute; 
		right:20px; 
		top: 20px; 
		color:#aaaaaa;
		font-size:20px;
		font-family:'Planet Light','Planet Light',sans-serif;
	}


<div id="popup">
    <div id="close">
		<a class="x" href="#">&#10006;</a>
    </div>
   
   <div id="photo" style="position:relative;top: 50%;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);">
       <img id="" src="#" style="max-width: 100%; max-height:100%;position: absolute;top: 50%;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);" />
	</div>  
	
</div>
