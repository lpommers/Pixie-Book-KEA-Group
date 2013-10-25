$(function(){
	$('.scene').hide();

	$('div a').bind('click', function(event){
		var $anchor = $(this);

		var scene = $($(this).attr('href'));

		scene.show();


		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 2000);

			event.preventDefault();
		});





});