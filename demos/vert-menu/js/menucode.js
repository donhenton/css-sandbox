 $(document).ready(function(){
     
     $(".topLevel.navBeta, .topLevel.navGamma").unbind("click").bind("click", function(evt) {
		evt.stopPropagation();
		if ($(this).hasClass("expanded")) {
			 $(this).removeClass("expanded");
		} else {
			 $(this).addClass("expanded");
		}
	});
        
        
         $(document).off('scroll.demo-ns').on('scroll.demo-ns', function () {
            var st = Number($(document).scrollTop());
               // console.log("zz "+st)
              if (st > 100) {
                 $('.sticky-header').addClass('sticky-header-gone') ;
             } else {
                 $('.sticky-header').removeClass('sticky-header-gone');
            }
//
//
//            if (st > 450 && self.enabled) {
//                $('body').addClass('lock-header-2');
//            } else {
//                $('body').removeClass('lock-header-2');
//            }
        });
     
        
        
        
        
     
     
 });
 
 
