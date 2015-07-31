$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active');
      $($('.tab-content')[0]).addClass('is-open');

  });

  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event, index) {

  console.log('clocked', event, ' index ', index);
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


      // $($('.tab-content')[index]).addClass('is-classy');

var events = ['click', 'touchend'];

$(document).ready(function(){
//for every legal menu open the first item.
  $('.legal-menu').children('li').first().addClass('active');

for(event of events){

  $('.legal-menu').children('li').on(event, function(){
console.log(event);
  //remove active

   //assign active for clicked

   //make similar index p also active
  })
}  
//for every li, when it's clicked,
//pass the index -> the same as corresponding content div index
});