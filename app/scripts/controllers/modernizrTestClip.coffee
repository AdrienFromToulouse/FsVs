hasClip = Modernizr.testAllProps('backgroundClip', 'text')
if hasClip is true
  $("body").addClass("backgroundclip")
else
  console.log "clip txt eopsoyo"    
