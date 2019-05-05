$(document).ready(function(){
        $(window).scroll(function(event) {
    var posTop=$('html,body').scrollTop();
    if(posTop > 50){
        $('.logo').css('width','35%');
        
    }
    else
    $('.logo').css('width','40%');
    
    });
})