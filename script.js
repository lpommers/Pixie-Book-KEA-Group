$(function(){
	$('#scene2').hide();
	$('#scene3').hide();

	$('div a').bind('click', function(event){
		var $anchor = $(this);

		var scene = $($(this).attr('href'));

		scene.show();

		// $('#scene2').show();

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 2000);

			event.preventDefault();
		});



});