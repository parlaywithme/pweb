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
