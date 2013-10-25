$(function(){
	$('.scene').hide();

	$('#title-button').bind('click', function(event){
		var $anchor = $(this);
		$('#scene1').show();

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 2000);

			event.preventDefault();

			
		});


	$('#scene1-button').bind('click', function(event){
		var $anchor = $(this);
		$('#scene2').show();

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 2000);

			event.preventDefault();
		});

	$('#scene2-button').bind('click', function(event){
		var $anchor = $(this);
		$('#scene3, #scene2-5').show();
		
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 2000);

			event.preventDefault();


		});

	$('#scene2-button').bind('click', function(event){
		var $anchor = $(this);
		$('#scene3').show();
		
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 5000);

			event.preventDefault();
		});





});