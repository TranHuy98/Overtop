//lastest news
$(document).ready(function(){
  			$('.multiple-news').slick({
  				infinite: true,
  				slidesToShow: 3,
  				slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
  				prevArrow: '.prevNews',
      		nextArrow: '.nextNews',
      		responsive: [
    	{
      		breakpoint: 992,
      		settings: {
        	slidesToShow: 2
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        	slidesToShow: 1
      		}
    	}
  		]
				});
		});
//accomodation
$(document).ready(function(){
  			$('.accommodation-slide').slick({
  				infinite: true,
  				slidesToShow: 3,
  				slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
  				prevArrow: '.prevAcc',
      		nextArrow: '.nextAcc',
      		responsive: [
    	{
      		breakpoint: 1024,
      		settings: {
        	slidesToShow: 2
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        	slidesToShow: 1
      		}
    	}
  		]
				});
		});

//banner
$(document).ready(function(){
	$('.single-background').slick({
    prevArrow: '.prevBackground',
    nextArrow: '.nextBackground',
  });
});

//label
$(document).ready(function(){
	$('.label-slide').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	responsive: [
    	{
      		breakpoint: 1024,
      		settings: {
        	slidesToShow: 2,
        	autoplaySpeed: 3000
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        	slidesToShow: 2,
        	autoplaySpeed: 2000
      		}
    	}
  		]
	});
});
//testimonial
$(document).ready(function(){
	$('.testimonial-slide').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
  		slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '.prevTes',
      nextArrow: '.nextTes',
  		responsive: [
    	{
      		breakpoint: 1024,
      		settings: {
        	arrows: false,
        	centerMode: true,
        	centerPadding: '40px',
        	slidesToShow: 5
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        	arrows: false,
        	centerMode: true,
        	centerPadding: '40px',
        	slidesToShow: 5,
      		}
    	}
  		]
	});
});

//gallery
$(document).ready(function(){
        $('.multiple-galleries').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          prevArrow: '.prevGal',
          nextArrow: '.nextGal',
          responsive: [
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 2,
          autoplaySpeed: 5000
          }
      },
      {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          autoplaySpeed: 5000
          }
      }
      ]
        });
    });
$(document).ready(function(){
  $('.prevGal').click(function(){
    $('.prevGal').attr('style','border: 1px solid #c3a774; background-color:#c3a774');
    $('.nextGal').attr('style','border: 1px solid #c3a774; background-color:white');
  });
});
$(document).ready(function(){
  $('.nextGal').click(function(){
    $('.nextGal').attr('style','border: 1px solid #c3a774; background-color:#c3a774');
    $('.prevGal').attr('style','border: 1px solid #c3a774; background-color:white');
  });
});
//date-time
$(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    });

//back to top button
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    if(pos>1000){
      $('.back-to-top').attr('style','visibility:visible;')
    }
    else{
      $('.back-to-top').attr('style','visibility:hidden;')
    }
  });
  $('.back-to-top').click(function() {
      $('html,body').animate({scrollTop: 0},1000);
   });
});

// greeting
$(document).ready(function(){
  $('.prevBackground').click(function(){
    $('.greeting .title').attr('style','top:20%; opacity:0');
    $('.greeting .title').delay(500).animate({'opacity':'1'},500);
    $('.greeting .big-title').attr('style','top:20%; opacity:0');
    $('.greeting .big-title').delay(500).animate({'opacity':'1'},500);
    $('.greeting .description').attr('style','top:20%; opacity:0');
    $('.greeting .description').delay(500).animate({'opacity':'1'},500);
    $('.greeting .slice').attr('style','top:20%; opacity:0');
    $('.greeting .slice').delay(500).animate({'opacity':'1'},500);
  });
});

$(document).ready(function(){
  $('.nextBackground').click(function(){
    $('.greeting .title').attr('style','top:20%; opacity:0');
    $('.greeting .title').delay(500).animate({'opacity':'1'},500);
    $('.greeting .big-title').attr('style','top:20%; opacity:0');
    $('.greeting .big-title').delay(500).animate({'opacity':'1'},500);
    $('.greeting .description').attr('style','top:20%; opacity:0');
    $('.greeting .description').delay(500).animate({'opacity':'1'},500);
    $('.greeting .slice').attr('style','top:20%; opacity:0');
    $('.greeting .slice').delay(500).animate({'opacity':'1'},500);
  });
});

//hidden menu
$(document).ready(function(){
  $('#open-btn').click(function(){
    $('.hidden-drop-menu').slideDown(500);
    $('#open-btn').css('display','none');
    $('#close-btn').css('display','block');
  });
});
$(document).ready(function(){
  $('#close-btn').click(function(){
    $('.hidden-drop-menu').slideUp(500);
    $('#close-btn').css('display','none'); 
    $('#open-btn').css('display','block');
  });
});

//rating
$(document).ready(function(){
  $('.counter').counterUp({
    'time': 5000,
    // 'delay': 10
  });
});

//adult
$(document).ready(function(){
  $('#drop-open').click(function(){
    $('.choices').slideDown(500);
    $('#drop-open').css('display','none');
    $('#drop-close').css('display','block');
  });
});
$(document).ready(function(){
  $('#drop-close').click(function(){
    $('.choices').slideUp(500);
    $('#drop-close').css('display','none'); 
    $('#drop-open').css('display','block');
  });
});

//adult item
$(document).ready(function(){
  $('#adult-item').click(function(){
    var num = $('#adult-item').text();
    $('#adult-number').attr('placeholder','num');
  });
});


//item-btn
$(document).ready(function(){
  $('.item-btn').hover(function(){
    $('.item-btn').css('cursor','pointer');
  });
});


//animate header
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    var hpos = $('.header').height();
    if((pos>hpos)&&(!$('.header').hasClass('fixed'))){
      $('.header').addClass('fixed');
      $('.fixed').attr('style','top:-90px; box-shadow :0px 0px 15px 0px #cccccc');
      $('.fixed').delay(300).animate({'top':'0'},500);
    }
    if((pos<=hpos)&&($('.header').hasClass('fixed'))){
      $('.header').removeClass('fixed');
    }
    if((pos<=hpos)&&(!$('.header').hasClass('fixed'))){
      $('.header').css('position','relative');
    }
  });
});

//animate hidden-menu
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    var hpos = $('.hidden-menu').height();
    if((pos>hpos)&&(!$('.hidden-menu').hasClass('fixed'))){
      $('.hidden-menu').addClass('fixed');
      $('.fixed').attr('style','top:-90px; box-shadow :0px 0px 15px 0px #cccccc');
      $('.fixed').delay(300).animate({'top':'0'},500);
    }
    if((pos<=hpos)&&($('.hidden-menu').hasClass('fixed'))){
      $('.hidden-menu').removeClass('fixed');
    }
    if((pos<=hpos)&&(!$('.hidden-menu').hasClass('fixed'))){
      $('.hidden-menu').css('position','relative');
    }
  });
});

//display popup video
$(document).ready(function(){
  $('#play-video').click(function(){
    $('#video').show();
  });
}); 


//click outer space of iframe
$(document).ready(function(){
  window.addEventListener('mouseup',function(event){
    var pvid = document.getElementById('pvid');
    var video = document.getElementById('video');
    if(event.target != pvid && event.target.parentNode != pvid){
             video.style.display = 'none';
          }
  });
});

