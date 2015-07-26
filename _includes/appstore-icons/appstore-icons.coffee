playstoreBtn = document.getElementById('playstoreBtn')
appstoreBtn = document.getElementById('appstoreBtn')

if getOS is 'iOS'
  playstoreBtn.remove()
else if getOS is 'Android'
  appstoreBtn.remove()
  
getOS = () ->
  userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if userAgent.match( /iPad/i ) or
    userAgent.match( /iPhone/i ) or
    userAgent.match( /iPod/i )
       return 'iOS'
    else if userAgent.match( /Android/i )
        return 'Android'
    else
      return 'unknown'
    
  