$(function(){
	// this hides all the scenes except the title scene when the page loads
	$('.scene, .scene-wrapper, .fallingitems, #fallingItems-wrapper, #princessroom').hide();

	//creates a function that handles the scrolling. It takes two parameters. whatever has been clicked and the time it should take to scroll. - It finds the href of that link and scrolls to it over the given time.
	function scroll(anchor, time){
		//this is the scrolling animation - where it finds the href and scrolls to it.
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top}, time, 'easeOutQuad');

			//prevents the default jump to the next link
			event.preventDefault();

	}

	// a function that controls a falling item
	function fallingItems(item, time){
		item.fadeIn();
		item.animate({top: '2000px'}, time);
	}

	
	// This is the first click. It leaves the title screen and scrolls the first screen. The first audio scene is played on click.
	$('#title-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene1-wrapper').show();
		$('#scene1').show();
		$('#princessroom').show().animate({left: '1100px'}, 5000);


		//calls scrolling method
		scroll($anchor, 2000);

		//this is the audio
		$('#scene-1-audio').get(0).play();

		$('#title-wrapper, #title-scene').fadeOut(2000);
			
		});

    // This is the second click. It leaves the first screen and scrolls to the top of the tower. 
	$('#scene1-button').bind('click', function(){
		var $anchor = $(this);

		$('#scene2-wrapper').show();
		$('#scene2').show();
		$('#fallingItems-wrapper').show();

		//calls scrolling method
		scroll($anchor, 2000);

		$('#scene-2-audio').get(0).play();

		$('#scene1-wrapper, #scene1').fadeOut(2000);
		});

	// This is the second click. It leaves the title screen and scrolls to the bottom of the tower. 
	$('#scene2-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene3-wrapper, #scene2-5-wrapper').show();
		$('#scene3, #scene2-5').show();
		
		//the scrolling
		scroll($anchor,5000);


		//plays part one of the audio and then animates the falling underwear 11seconds after button has been clicked
		$('#scene-3-prince-1').get(0).play();
		fallingItems($('#underwear').delay(1100),5000);


		//plays part two of the audio after a 5.5 second delay from the click and the socks are delayed 8 seconds after the click
		setTimeout("$('#scene-3-prince-2').get(0).play()",5500);
		fallingItems($('#socks').delay(8000),5000);

		//plays part three of the audio after a 10.5 second delay and animates the cantaloupe after a 12 second delay from the

		setTimeout("$('#scene-3-prince-3').get(0).play()",10500);
		fallingItems($('#cantaloupe').delay(12000),5000);
		

	

		});

	//this will go to whatever next. 
	$('#scene3-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene4-wrapper').show();
		$('#scene4').show();
		
		//calls scrolling method
		scroll($anchor, 2000);

		$('#scene2-wrapper, #scene2, #scene2-5-wrapper, #scene2-5, #scene3, #scene3-wrapper, .fallingitems').fadeOut(2000);

		
		});

	//this will go to whatever next. 
	$('#scene4-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene5-wrapper').show();
		$('#scene5').show();
		
		//calls scrolling method
		scroll($anchor, 2000);

		$('#scene4-wrapper, #scene4').fadeOut(2000);

		
		});

	//this will go to whatever next. 
	$('#scene5-button').bind('click', function(){
		var $anchor = $(this);
		$('#scene6-wrapper').show();
		$('#scene6').show();
		
		//calls scrolling method
		scroll($anchor, 2000);

		$('#scene5-wrapper, #scene5').fadeOut(2000);
		});




	



});