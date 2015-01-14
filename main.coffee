---
---

window.l = (x...) ->
  console.log x

window.loren_alt = off
window.joint_alt = off
window.sidney_alt = off

window.alert_dev = ->
  swal "Not quite yet!", "Parlay is currently under development.", "warning"

window.onload = ->
  links = document.querySelectorAll '.download-links > a'
  if links.length is 0
    return;

  links[0].onclick = alert_dev
  links[1].onclick = alert_dev

document.addEventListener "DOMContentLoaded", (event) ->

  # emojify.setConfig({"only_crawl_id": "landing"});
  # emojify.run();

  window.drawer = document.querySelector 'core-drawer-panel'

  if window.screen.width > 640
    drawer?.setAttribute 'drawerWidth', '100%'

  # so it doesn't run at pageload
  setTimeout ->
    window.addEventListener 'core-responsive-change', (e) ->
      if e.detail.narrow
        drawer?.setAttribute 'drawerWidth', '256px'
      else
        drawer?.setAttribute 'drawerWidth', '100%'
    , 1000

  if window.location.pathname in ["/team/index.html", "/team/"]
    names = ['loren','sidney','joint']
    for name in names
      do (name) ->
        l 'for', name
        img = $('#' + name)
        img.mouseenter ->
          img.attr('src', "/images/" + name + "_alt.gif")
        .mouseleave ->
          img.attr('src', "/images/" + name + ".jpg")

        img.click ->
          l 'click', name
          alt = name + '_alt'
          if window[alt]
            img.attr('src', "/images/" + name + ".jpg")
          else
            img.attr('src', "/images/" + name + "_alt.gif")
          window[alt] =  not window[alt]
          for n in names
            if n isnt name
              window["#{n}_alt"] = false

  if window.location.pathname in ["/index.html", "/"]
    ideas = $('#ideas > li')
    ul = $('#ideas')
    ideas_top = $(ideas[0]).position().top
    idea_i = 0
    delta = 0
    interval = setInterval ->
      idea_i = (idea_i + 1) %% ideas.length
      if idea_i is 0
        delta = 0
      else
        next_top = $(ideas[idea_i]).position().top
        delta += next_top - ideas_top
      ul.animate 
        scrollTop: delta
      , 1500
    , 5000

    ul.on 'mousedown mousewheel touchstart', ->
      clearInterval interval
    

