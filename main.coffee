---
---

window.l = (x...) ->
  console.log x

window.loren_alt = off
window.joint_alt = off
window.sidney_alt = off

animate_ideas = ->
  return unless window.location.pathname in ["/index.html", "/"]

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


document.addEventListener "DOMContentLoaded", (event) ->

  # emojify.setConfig({"only_crawl_id": "landing"});
  # emojify.run();

  if window.location.pathname in ["/index.html", "/"]
    names = ['loren','sidney']
    for name in names
      do (name) ->
        # l 'for', name
        img = $('#' + name)
        img.mouseenter ->
          img.attr('src', "/images/" + name + "_alt.gif")
        .mouseleave ->
          img.attr('src', "/images/" + name + ".jpg")

        img.click ->
          # l 'click', name
          alt = name + '_alt'
          if window[alt]
            img.attr('src', "/images/" + name + ".jpg")
          else
            img.attr('src', "/images/" + name + "_alt.gif")
          window[alt] =  not window[alt]
          for n in names
            if n isnt name
              window["#{n}_alt"] = false

  # animate_ideas()
