$(function(){
	// this hides all the scenes except the title scene when the page loads
	$('.scene, .scene-wrapper').hide();

	//creates a function that handles the scrolling. It takes whatever has been clicked as a parameter - then finds the href of that link and scrolls to it over 2 seconds.
	function scroll(anchor){
		//this is the scrolling animation - where it finds the href and scrolls to it.
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top}, 2000);

			//prevents the default jump to the next link
			event.preventDefault();

	}


	// This is the first click. It leaves the title screen and scrolls the first screen. The first audio scene is played on click.
	$('#title-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene1-wrapper').show();
		$('#scene1').show();

		//calls scrolling method
		scroll($anchor);

		//this is the audio
		$('#scene-1-audio').get(0).play();

		});

    // This is the second click. It leaves the first screen and scrolls to the top of the tower. 
	$('#scene1-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene2-wrapper').show();
		$('#scene2').show();
		
		//calls scrolling method
		scroll($anchor);

		});

	// This is the second click. It leaves the title screen and scrolls to the bottom of the tower. 
	$('#scene2-button').bind('click', function(event){
		var $anchor = $(this);
		$('#scene3-wrapper, #scene2-5-wrapper').show();
		$('#scene3, #scene2-5').show();
		
		//the scrolling
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top}, 5000);

			event.preventDefault();

		});

	//this will go to whatever next. 
	$('#scene3-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene4-wrapper').show();
		$('#scene4').show();
		
		//calls scrolling method
		scroll($anchor);
		});





});