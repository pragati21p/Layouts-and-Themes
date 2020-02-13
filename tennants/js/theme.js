$(document).ready(function(){
	$(".head-space").on("click", function(){
		$(".search-div").fadeIn(200);
		$(".wrapper").addClass("wrapper-open");
	});
	$(".sort").hover(function(){
		$(this).children(".head-right-dropdown").fadeIn(200);
	}, function(){
		$(this).children(".head-right-dropdown").fadeOut(200);
	});	
	$(".hamburger").on('click',function(){
		$("body").css("overflow","hidden");
		$(".wrapper").addClass("wrapper-open");
		$( ".left-sidebar" ).addClass("main-side");
	});
	$(".new-badge").hover(function(){
		$(this).children(".add-title").fadeIn(200);
		},function(){
			$(this).children(".add-title").fadeOut(200);
	});
	$(".wrapper").click(function(){
		$("body").css("overflow","scroll");
		$( ".left-sidebar" ).removeClass("main-side");
		$(".wrapper").removeClass("wrapper-open");
		$(".search-div").fadeOut(200);
	});
	$(".card").hover(function(){
		$(this).find(".card-badge").fadeIn(200);
		},function(){
			$(this).find(".card-badge").fadeOut(200);
	});
	$(".card-badge").hover(function(){
		$(this).children(".add-title").fadeIn(200);
		},function(){
			$(this).children(".add-title").fadeOut(200);
	});
});