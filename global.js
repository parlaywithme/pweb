var playstoreBtn = document.getElementById('playstoreBtn');
var appstoreBtn = document.getElementById('appstoreBtn');

if(getMobileOperatingSystem() === 'iOS'){
  playstoreBtn.remove();
}else if(getMobileOperatingSystem() === 'Android'){
  appstoreBtn.remove();
}


function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';
  }
  else if( userAgent.match( /Android/i ) )
  {
    return 'Android';
  }
  else
  {
    return 'unknown';
  }
}

// Smooth scrolling for same page links
$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
  e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
  var target = $(this).attr("href"); //Get the target
      
  // perform animated scrolling by getting top-position of target-element and set it as scroll target
  $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
       location.hash = target;  //attach the hash (#jumptarget) to the pageurl
  });
      
  return false;
   });
});
