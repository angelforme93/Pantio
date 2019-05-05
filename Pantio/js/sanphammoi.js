$(document).ready(function(){
    $('nav ul li').hover(function() {
	
        $(this).find('.dropdown-menu').fadeIn();
      }, function() {
        $(this).find('.dropdown-menu').fadeOut();
       
      });
})