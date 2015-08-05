
var events = ['click', 'touchend'];
var $tabContent = $('.tab-item');
var locked = false;

$(document).ready(function(){

  var $legalMenu = $('.legal-menu');
  if ($legalMenu.length === 0) {
    return;
  }

  var $leftOffset = $legalMenu.offset().left;
  
  $(window).on('scroll', function(e){
    var currentScroll = this.scrollY;

    if(currentScroll > 88 && !locked){

      locked = true;
      var $shim = $($legalMenu).clone()
        .attr('id','Shim')
        .prependTo($($legalMenu).parent()
      );

      $($legalMenu)
        .css('left', $leftOffset)
        .addClass('sticky');      
    }else if(currentScroll < 88){
      $($legalMenu).removeClass('sticky');
      $('#Shim').remove();
      locked = false;
    }
  });
});

