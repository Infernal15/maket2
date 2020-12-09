$(document).on('ready', function() {
	$(".center").slick({
	  dots: false,
	  infinite: true,
	  centerMode: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
  	  centerPadding: "20px",
  	  focusOnSelect: true,
  	  speed: 500
	});
  });