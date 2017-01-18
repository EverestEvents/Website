$(document).ready(function (){

	var vscroll = document.body.scrollTop;    
	if (vscroll > 50){
		$('.navbar').addClass('opaque');
	}

	$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
	});
});