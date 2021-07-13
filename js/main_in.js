$(document).ready(function () {
	"use strict";
    // creat menu sidebar
    $(".menu-bar-lv-1").each(function () {
    	$(this).find(".span-lv-1").click(function () {
    		$(this).toggleClass('rotate-menu');
    		$(this).parent().find(".menu-bar-lv-2").toggle(500);
    	});
    });
    $(".menu-bar-lv-2").each(function () {
    	$(this).find(".span-lv-2").click(function () {
    		$(this).toggleClass('rotate-menu');
    		$(this).parent().find(".menu-bar-lv-3").toggle(500);
    	});
    });
    $(".shadow-open-menu").click(function () {
    	$('.menu-bar-mobile').fadeOut();
    	$(".shadow-open-menu").fadeOut();
    	$(".menu-btn-show").toggleClass("active");
    });
    $(".menu-btn-show").click(function () {
    	$(this).toggleClass("active");
    	$('.menu-bar-mobile').fadeToggle(500);
    	$(".shadow-open-menu").fadeToggle(500);
    });
    // end
});


$("#icon-search-mobile").click(function () {
	$('.search-box').toggleClass('open');
});
$(".main-menu ul li i").click(function () {
	$(this).next("ul").toggleClass('open');
});


$('.list_videos .item .img').click(function(){
	var link = $(this).find('a').attr('href');
	console.log(link);
	$('#toggle_video iframe').attr('src', link);
	$('#toggle_video').modal('show');
	return false;
});
$('.close_video a').click(function(){
	$('#toggle_video').modal('hide');
	$('#toggle_video iframe').attr('src', '');
	return false;
});



if ($(".list_recruitment .req_right").length > 0 && $(".recruitments").length > 0) {
	$('.list_recruitment .req_right').css('height',$(".recruitments").height());
}
if ($("#toggle_video").length > 0) {
	$('#toggle_video').modal({backdrop: 'static', keyboard: false,show: false});
}

$(document).ready(function(){
	if ($(window).width() < 575) {
		
	}

	$('.partners').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		navigation: true,
		dots: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	});
	
});

