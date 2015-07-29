ua = new UAParser
os = ua.getOS().name

if os in ['iOS', 'Android']
  if os is 'Android'
    $('#apple-store').hide()
  else if os is 'iOS' 
    $('#play-store').hide()

  $('.linkTextingWidget').hide()
  # $('.download-links').insertBefore '#index-headline'
