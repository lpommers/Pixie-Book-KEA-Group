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
  	
  	//to call on the text
  	var story = $('#text>div');

	//shows the first button and starts blinking
	$('#scene1-action').show().pulse();

	// This is the first click. It leaves the title screen and scrolls the first screen.
	$('#scene1-action').bind('click', function(){
		var $anchor = $(this);

		//fades in the button, text, and the scene background
		$('#scene2-action').delay(5000).fadeIn(1000).pulse();
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
		$('#scene1-action').scroll(2000);


		//this is the audio
		$('#scene-1-audio').get(0).play();

		//fades out scene
		$('#title-wrapper, #title-scene').fadeOut(2000);
			
	});

    // This is the second click. It leaves the first screen and scrolls to the top of the tower. 
	$('#scene2-action').bind('click', function(){
		var $anchor = $(this);

		//changes text
			story.text('Alas she was too far away to quite make out what he would say');
		window.setTimeout(function(){story.delay(3000).text('rapunzel, rapunzel throw down your hair she thought he said your underwear')}, 3000);
		
		//fades in button and scene
		
		$('#scene2-1-wrapper, #scene2-1, #falling-objects, #scene2-2-wrapper, #scene2-2, #scene2-3-wrapper, #scene2-3, #princetower').show();
		$('#scene3-action').delay(5000).fadeIn(1000).pulse();


		$('#scene2-action').scroll(7000);

		$('#scene-3-audio').get(0).play();


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
		
	
		//fades out scene
		$('#scene1, #scene1-wrapper').delay(7000).fadeOut(2000);
	
		});

	//this is click 4, the maid falling. 
	$('#scene2-3-action').bind('click', function(){
		var $anchor = $(this);
		
		$('#scene4-action').delay(5000).fadeIn(1000).pulse();
		$('#scene3-wrapper').show();
		$('#scene3').show();
		
		//this will animate the maid to become bigger
		$('#maidfalling').delay(2000).animate({'height':'1000%','width':'auto', 'top':'-400%','left':'-150%'},10000, function(){
		$(this).fadeOut(500);
		$('#scene3').css({'backgroundColor':'white'})
	 	});
		
		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene3-action').scroll(2000);

		$('#scene2-wrapper, #scene2, #scene2-2-wrapper, #scene2-2, #scene2-3, #scene2-3-wrapper, .fallingitems').fadeOut(2000);

		
		});

	//maid and prince falling in love. 
	$('#scene4-action').bind('click', function(){
		var $anchor = $(this);

		$('#scene5-action').delay(5000).fadeIn(1000).pulse();
		$('#scene4-wrapper').show();
		$('#scene4').show();
		
		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene4-action').scroll(2000);

		$('#scene3-wrapper, #scene3').fadeOut(2000);

		
		});

	//final scene. 
	$('#scene5-action').bind('click', function(){
		var $anchor = $(this);
		
		$('#scene5-wrapper').show();
		$('#scene5').show();
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
		$('#scene5-action').scroll(2000);

		$('#scene4-wrapper, #scene4').fadeOut(2000);
		});



});