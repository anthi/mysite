
$(function(){
  $('#nav').click(function() {
    $(this).toggleClass('open');
  });
});

$(function(){
  $('.menu').click(function() {
    	$('.menu').removeClass('active');
  		$('.menu').removeClass('nonactive');
		$(this).addClass('active');
     
     $('.content').animate({
        scrollTop: $("#contactId").offset().top
    }, 2000);

  });
});
