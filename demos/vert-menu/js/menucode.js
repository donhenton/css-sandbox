 $(document).ready(function(){
     
     $(".topLevel.navBeta, .topLevel.navGamma").unbind("click").bind("click", function(evt) {
		evt.stopPropagation();
		if ($(this).hasClass("expanded")) {
			 $(this).removeClass("expanded");
		} else {
			 $(this).addClass("expanded");
		}
	});
     
     
 });
 
 
