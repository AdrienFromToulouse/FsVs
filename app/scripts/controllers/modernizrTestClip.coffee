Modernizr.addTest "backgroundclip", ->
  div = document.createElement("div")
  return true  if "backgroundClip" of div.style
  "Webkit Moz O ms Khtml".replace /([A-Za-z]*)/g, (val) ->
    true  if val + "BackgroundClip" of div.style