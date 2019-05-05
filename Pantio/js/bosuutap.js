$(document).ready(function(){
    $('nav ul li').hover(function() {
	
        $(this).find('.dropdown-menu').fadeIn(300);
      }, function() {
        $(this).find('.dropdown-menu').fadeOut(300);
       
      });
})