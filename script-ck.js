$(function(){function e(e,t){$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},t,"easeOutQuad");event.preventDefault()}function t(e,t){e.fadeIn();e.animate({top:"2000px"},t)}$(".scene, .scene-wrapper, .fallingitems, #fallingItems-wrapper").hide();$("#title-button").bind("click",function(){var t=$(this);$("#scene1-wrapper").show();$("#scene1").show();e(t,2e3);$("#scene-1-audio").get(0).play();$("#title-wrapper, #title-scene").fadeOut(2e3)});$("#scene1-button").bind("click",function(){var t=$(this);$("#scene2-wrapper").show();$("#scene2").show();$("#fallingItems-wrapper").show();e(t,2e3);$("#scene1-wrapper, #scene1").fadeOut(2e3)});$("#scene2-button").bind("click",function(){var n=$(this);$("#scene3-wrapper, #scene2-5-wrapper").show();$("#scene3, #scene2-5").show();e(n,5e3);t($("#socks"),5e3);t($("#bikini"),5e3)});$("#scene3-button").bind("click",function(){var t=$(this);$("#scene4-wrapper").show();$("#scene4").show();e(t,2e3);$("#scene2-wrapper, #scene2, #scene2-5-wrapper, #scene2-5, #scene3, #scene3-wrapper, .fallingitems").fadeOut(2e3)});$("#scene4-button").bind("click",function(){var t=$(this);$("#scene5-wrapper").show();$("#scene5").show();e(t,2e3);$("#scene4-wrapper, #scene4").fadeOut(2e3)});$("#scene5-button").bind("click",function(){var t=$(this);$("#scene6-wrapper").show();$("#scene6").show();e(t,2e3);$("#scene5-wrapper, #scene5").fadeOut(2e3)})});