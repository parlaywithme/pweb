// Smooth scrolling for same page links
$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
    e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
    
    var target = $(this).attr("href"); //Get the target
    
    if (location.pathname === "/" || location.pathname === "/index.html") {
      // perform animated scrolling by getting top-position of
      // target-element and set it as scroll target
      $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
        location.hash = target;  //attach the hash (#jumptarget) to the pageurl
      });
    } else {
      location.href = '/' + target;
    }
    return false;
  });
});
