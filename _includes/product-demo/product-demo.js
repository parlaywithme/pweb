$(document).ready(function() {
  width = $(document.body).width();
  items = 4;

  if (width <= 1300) {
    items = 3;
  }
  if (width <= 1050) {
    items = 2;
  }
  if (width <= 660) {
    items = 1;
  }

  var carousel = $(".owl-carousel");
  
  carousel.owlCarousel({
    items : items
  });

  // todo wasn't working b/c v1.x API
  // navigation : true,
  // items: 6,
  // itemsDesktop: [1000, 2],
  // itemsDesktopSmall: false,
  // itemsTablet: false,
  // itemsMobile: [500,1]

  $('#next-screen').click(function(){
    carousel.trigger('next.owl.carousel');
  });
  $('#prev-screen').click(function(){
    carousel.trigger('prev.owl.carousel');
  });
});
