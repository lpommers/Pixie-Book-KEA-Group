$(function(){
	// this hides all the scenes except the title scene when the page loads
	$('.scene, .scene-wrapper, .fallingitems, #falling-objects, #princessroom, #screamface, #princetower, #text, .button').hide();

	//creates a function that handles the scrolling. It takes two parameters. 
	$.fn.scroll = function(time){
   		 $('html, body').stop().animate({
			scrollTop: $(this.attr('href')).offset().top}, time);

			//prevents the default jump to the next link
			event.preventDefault();
  }
  
	// a function that controls a falling item
	$.fn.fallingItems = function(time, func){
		this.fadeIn();
    	this.animate({top: '90%'}, time, func);
  	}

  	//a pulsing function that makes the next button blink
  	$.fn.pulse = function(){
    	$(this).animate({opacity: '0'}, 800, function(){
			$(this).animate({opacity: '1'}, 800);
			$(this).pulse();
		});
  	}

	//shows the first button and starts blinking
	$('#title-button').show().pulse();

	// This is the first click. It leaves the title screen and scrolls the first screen.
	$('#title-button').bind('click', function(){
		var $anchor = $(this);

		//fades in the button, text, and the scene background
		$('#scene1-button').delay(5000).fadeIn(1000).pulse();
		$('#text').fadeIn(2500);
		$('#scene1-wrapper, #scene1').show();

		//prince on horse comes in. pauses a long time. then exits at the end of the scene
		$('#prince-horse').show().delay(4000).animate({right: '1100px'}, 5000,function(){
			$(this).delay(10000).animate({right: '+=2000px'}, 8000);
		});


		//the princess' room slides in - pauses -slides out
		$('#princessroom').show().delay(8000).animate({left: '1100px'}, 5000,function(){
			$(this).delay(3000).animate({left: '0'}, 9000);
		});

		//fades in princess scream - delays - fades out
		$('#screamface').delay(13500).fadeIn(2000);
		$('#screamface').fadeOut(2000);


		//calls scrolling method
		// scroll($anchor, 2000);
		$('#title-button').scroll(2000);


		//this is the audio
		$('#scene-1-audio').get(0).play();

		//fades out scene
		$('#title-wrapper, #title-scene').fadeOut(2000);
			
	});

    // This is the second click. It leaves the first screen and scrolls to the top of the tower. 
	$('#scene1-button').bind('click', function(){
		var $anchor = $(this);

		//fades in button and scene
		
		$('#scene2-wrapper, #scene2, #falling-objects, #scene2-5-wrapper, #scene2-5, #scene3-wrapper, #scene3, #princetower').show();
		$('#scene3-button').delay(5000).fadeIn(1000).pulse();


		$('#scene1-button').scroll(7000);


		//audio plays
		$('#scene-2-audio').get(0).play();


		//plays part one of the audio and then animates the falling underwear 11seconds after button has been clicked
		$('#scene-3-prince-1').get(0).play();


		//falling items, they linked in a chain of our falling items function which is an animation


		$('#underwear1').delay(1000).fallingItems(4000);
		$('#underwear3').delay(1500).fallingItems(4000, function(){
				$('#sock1').fallingItems(4000);
				$('#sock2').delay(500).fallingItems(4000);
				$('#sock3').delay(1000).fallingItems(4000, function(){
					$('#cantaloupe').fallingItems(4000, function(){
						$('#pig').delay(13500).fallingItems(4000);
					});
				});
			});
		
		//plays part two of the audio after a 5.5 second delay from the click and the socks are delayed 8 seconds after the click
		setTimeout("$('#scene-3-prince-2').get(0).play()",5500);
		
		//plays part three of the audio after a 10.5 second delay and animates the cantaloupe after a 12 second delay from the

		setTimeout("$('#scene-3-prince-3').get(0).play()",10500);

		//fades out scene
		$('#scene1, #scene1-wrapper').delay(7000).fadeOut(2000);
	
		});

	//this is click 4, the maid falling. 
	$('#scene3-button').bind('click', function(){
		var $anchor = $(this);
		
		$('#scene4-button').delay(5000).fadeIn(1000).pulse();
		$('#scene4-wrapper').show();
		$('#scene4').show();
		
		//this will animate the maid to become bigger
		$('#maidfalling').delay(2000).animate({'height':'1000%','width':'auto', 'top':'-400%','left':'-150%'},10000, function(){
		$(this).fadeOut(500);
		$('#scene4').css({'backgroundColor':'white'})
	 	});
		
		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene3-button').scroll(2000);

		$('#scene2-wrapper, #scene2, #scene2-5-wrapper, #scene2-5, #scene3, #scene3-wrapper, .fallingitems').fadeOut(2000);

		
		});

	//maid and prince falling in love. 
	$('#scene4-button').bind('click', function(){
		var $anchor = $(this);

		$('#scene5-button').delay(5000).fadeIn(1000).pulse();
		$('#scene5-wrapper').show();
		$('#scene5').show();
		
		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene4-button').scroll(2000);

		$('#scene4-wrapper, #scene4').fadeOut(2000);

		
		});

	//final scene. 
	$('#scene5-button').bind('click', function(){
		var $anchor = $(this);
		
		$('#scene5-button').delay(5000).fadeIn(1000).pulse();
		$('#scene6-wrapper').show();
		$('#scene6').show();
		//
		var numHearts = 0;
		var makeSomeHearts = function(){
			var thisNewHeart = $('<img src="http://a13pixie12.keaweb.dk/img/hearts.png" alt="last scene">');
			var rtop = (Math.random()*600) + "px";
			var rleft = (Math.random()*600) + "px";
			//var rRot = "rotate" + (Math.random()*360) + "deg";
			thisNewHeart.css({left:rleft, top:rtop, position:"absolute"});
			$('#scene6').append(thisNewHeart);
			numHearts = numHearts + 1;
			if (numHearts < 99) {
				window.setTimeout(makeSomeHearts, 500);
			}
		};

		window.setTimeout(makeSomeHearts, 2000);		
		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene5-button').scroll(2000);

		$('#scene5-wrapper, #scene5').fadeOut(2000);
		});



});