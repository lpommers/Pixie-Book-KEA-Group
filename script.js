$(function(){
	// this hides all the scenes except the title scene when the page loads
	$('.scene, .scene-wrapper, .fallingitems, #falling-objects, #princessroom, #screamface, #princetower, #text, .button, #princecrying').hide();

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
		$('#screamface').delay(500).animate({'marginLeft':'-1000px'},9000);


		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene1-action').scroll(2000);


		//this is the audio
		$('#scene1-audio').get(0).play();

		//fades out scene
		$('#title-wrapper, #title-scene').fadeOut(2000);
			
	});

    // This is the second click. It leaves the first screen and scrolls to the top of the tower. 
	$('#scene2-action').bind('click', function(){
		var $anchor = $(this);

		// TEXT SEQUENCES
			story.text('Alas she was too far away to quite make out what he would say');
		window.setTimeout(function(){story.text('Rapunzel, Rapunzel throw down your hair she thought he said your underwear')}, 5000);
		window.setTimeout(function(){story.append('<br><br> No Rapunzel your curly locks rapunzel threw down her dirty socks')}, 11000);
		window.setTimeout(function(){story.text('Rapunzel do you have a rope Rapunzel dropped a cantelope')}, 15500);
		window.setTimeout(function(){story.append('<br><br>It burst in pieces by his side "Oh bad catch!" Rapunzel cried')}, 20000);
		window.setTimeout(function(){story.text('Perhaps, he sighed, this is a test and bound by love he did not rest ')}, 25000);
		window.setTimeout(function(){story.append('<br><br>Okay Rapunzel how about twine she heaved out her blue ribbon swine')}, 32000);
		
		//fades in button and scene
		
		$('#scene2-1-wrapper, #scene2-1, #falling-objects, #scene2-2-wrapper, #scene2-2, #scene2-3-wrapper, #scene2-3, #princetower').show();
		$('#scene3-action').delay(5000).fadeIn(1000).pulse();


		$('#scene2-action').scroll(7000);

		$('#scene2-audio').get(0).play();



		//falling items, they linked in a chain of our falling items function which is an animation


		$('#underwear1').delay(8000).fallingItems(4000);
		$('#underwear3').delay(8500).fallingItems(4000, function(){
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
	$('#scene3-action').bind('click', function(){
		var $anchor = $(this);
	
		$('.fallingitems, #princetower').fadeOut(2000);
		
		$('#princecrying').fadeIn(1000, function(){
			$('#scene3-audio').get(0).play();
			
			// TEXT change
		story.text('At this the poor prince had a cry then cupped his hands for one last try');
		window.setTimeout(function(){story.append('<br><br>Rapunzel Rapunzel let down your braid confused Rapunzel pushed out her maid')}, 7000);	
			
		});


		//this will show and then scroll to the maid automatically 
		setTimeout("$('#scene3-wrapper, #scene3').show()", 8000);
		setTimeout("$('#scene3-action').scroll(2000)", 15000);

		//this will animate the maid to become bigger
	
		$('#maidfalling').delay(17000).animate({'height':'800%','width':'auto', 'top':'-400%','left':'-150%'},5000, function(){
		$(this).fadeOut(500);
		$('#scene3').css({'backgroundColor':'white'})
	 	});
	
		$('#scene4-action').delay(15000).fadeIn(1000).pulse();

		$('#scene2-1, #scene2-1-wrapper, #scene2-wrapper, #scene2, #scene2-2-wrapper, #scene2-2, #scene2-3, #scene2-3-wrapper, .fallingitems').delay(20000).fadeOut(2000);

		
		});

	//maid and prince falling in love. 
	$('#scene4-action').bind('click', function(){
		var $anchor = $(this);

		$('#scene5-action').delay(5000).fadeIn(1000).pulse();
		$('#scene4-wrapper').show();
		$('#scene4').show();
		
		// TEXT change
		
		story.text("The maid fell squarely on the prince quite pleased with the coincidence<br><br>then smiling said for what it's worth I'm really down to earth");
		window.setTimeout(function(){story.text('His young heart thrilled and he gave a hoot for what was more the maid was cute')}, 9000);
		
		
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
	
		// TEXT change
		
		story.text("Rapunzel watched them ride from sight I'm glad I finally heard them right<br><br>I hope if they come back for more they'll think to knock at my back door");
		window.setTimeout(function(){story.text('The maid leaned close so he could hear she whispered something in his ear<br><br>I fell for you when we first met, he nodded, how could I forget ')}, 10000);
		
		
		var numHearts = 0;
		var makeSomeHearts = function(){
			var thisNewHeart = $('<img src="http://a13pixie12.keaweb.dk/img/hearts.png" alt="last scene">');
			var rtop = (Math.random()*600) + "px";
			var rleft = (Math.random()*600) + "px";
			//var rRot = "rotate" + (Math.random()*360) + "deg";
			thisNewHeart.css({left:rleft, top:rtop, position:"absolute"});
			$('#scene5').append(thisNewHeart);
			numHearts = numHearts + 1;
			if (numHearts < 99) {
				window.setTimeout(makeSomeHearts, 500);
			}
		};

		window.setTimeout(makeSomeHearts, 2000);		
		//calls scrolling method
		// scroll($anchor, 2000);
		$('#scene5-action').scroll(2000);

		//shows the the end - replay button
		$('#end-button').show().pulse();
		$('#end-button').css({'backgroundImage':'url("http://a13pixie12.keaweb.dk/img/theend.png")', 'width':'10em', 'height':'20em'});

		$('#scene4-wrapper, #scene4').fadeOut(2000);
		});

	$('#end-button').click(function(){
		event.preventDefault();
		window.location.reload();



	});

});