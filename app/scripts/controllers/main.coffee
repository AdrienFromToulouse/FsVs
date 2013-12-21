'use strict'

angular.module('fruitsandvegApp')
  .controller 'MainCtrl', ($scope) ->

    console.log "Main contrl"

    tweakHdrBackground = ->
      I_WIDTH = 1200
      I_HEIGHT = 665
      windowWidth = $(window).width()
      slideHeight = $(window).height() / 100 * 90
      ratio_x = windowWidth / I_WIDTH
      ratio_y = slideHeight / I_HEIGHT
      w_biggest = ratio_x > ratio_y
      ratio = (if w_biggest then ratio_x else ratio_y)
      o =
        width: (if w_biggest then windowWidth else I_WIDTH * ratio)
        height: (if w_biggest then I_HEIGHT * ratio else slideHeight)

      $image = $(".hdr-image")
      if $image.data("align") is "left"
        o.left = -Math.abs(windowWidth - o.width) / 3
      else
        o.left = -Math.abs(windowWidth - o.width) / 1.4
        o.top = -Math.abs(slideHeight - o.height) / 2
        $(".hdr-image-wrap").css height: $(window).height() / 100 * 90
        $(".empty").css height: $(window).height() / 100 * 90
        $image.css o

    setHeight = ->
      widthBlock = $(".cell-type1").width()
      if $(window).width() > 624
        $(".content-cell").height widthBlock
      else
        $(".content-cell").css "height", "auto"


    changeHeader = ->
      bodyElement = $("body")
      window.onscroll = ->
        globalHeader = document.querySelector(".main-hdr-nav")
        scrollingElement = document.querySelector(".main")
        scrollingElementPosition = scrollingElement.offsetTop
        headerHeight = globalHeader.clientHeight
        is_background = undefined
        
        if window.pageYOffset >= scrollingElementPosition - headerHeight
          globalHeader.style.backgroundColor = "#141414"
          is_background = true
        else if window.pageYOffset < scrollingElementPosition - headerHeight
          globalHeader.style.backgroundColor = ""
          is_background = false
        $(window).resize ->
          scrollingElementPosition = $(".main").offset()
    
    #   $(".mobile-menu-link").on "click", ->
    #     if bodyElement.hasClass("opened")
    #       bodyElement.removeClass "opened"
    #       closeContacts()  if $(".b-contacts").hasClass("active")
    #     else
    #       bodyElement.addClass "opened"

    # $(window).on "scroll", ->
    #   bodyElement.removeClass "opened"

    # getScrollPosition = ->
    #   $(".main").offset()



    tweakHdrBackground()
    setHeight()

    changeHeader()

    $(window).bind "resize", tweakHdrBackground
    $(window).resize ->
      setHeight()

    