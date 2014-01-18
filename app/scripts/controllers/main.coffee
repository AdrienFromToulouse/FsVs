'use strict'

angular.module('fruitsandvegApp')
  .controller 'MainCtrl', ($scope, $http, $timeout) ->

    isUtubeloaded = false

    loadUtubeFeed = ->

      if isUtubeloaded is false
        isUtubeloaded = true

        $http.get("https://gdata.youtube.com/feeds/api/users/FRUITSandVEGGIESza/uploads?v=2&alt=jsonc")
          .success((data, status) ->

            src = "http://www.youtube.com/embed/" + data.data.items[0].id + "?wmode=transparent&amp"

            data.data.items[0].description = data.data.items[0].description.substring(0, 60) + "..."  if data.data.items[0].description.length > 60
            data.data.items[1].description = data.data.items[1].description.substring(0, 60) + "..."  if data.data.items[1].description.length > 60
            data.data.items[2].description = data.data.items[2].description.substring(0, 60) + "..."  if data.data.items[2].description.length > 60

                        
            $("#vid1").attr "src", src
            $("#vid1").siblings().html data.data.items[0].description
            ref = "http://www.youtube.com/watch?v="+data.data.items[0].id
            $("#vid1").siblings()
              .append $("</br><a class=\"more\" style=\"float:right;padding: 0 0 0 10px;color:#D70032;text-decoration: none;\" href=" + ref + " target=\"_blank\"><span class=\"bgrd-txt-green icon icon-see-more more\"></span></a>")

            src = "http://www.youtube.com/embed/" + data.data.items[1].id + "?wmode=transparent&amp"
            $("#vid2").attr "src", src
            $("#vid2").siblings().html data.data.items[1].description
            ref = "http://www.youtube.com/watch?v=" + data.data.items[1].id
            $("#vid2").siblings()
              .append $("</br><a class=\"more\" style=\"float:right;padding: 0 0 0 10px;color:#D70032;text-decoration: none;\" href=" + ref + " target=\"_blank\"><span class=\"bgrd-txt-blue icon icon-see-more more\"></span></a>")

            src = "http://www.youtube.com/embed/" + data.data.items[2].id + "?wmode=transparent&amp"
            $("#vid3").attr "src", src
            $("#vid3").siblings().html data.data.items[2].description
            ref = "http://www.youtube.com/watch?v=" + data.data.items[2].id
            $("#vid3").siblings()
              .append $("</br><a class=\"more\" style=\"float:right;padding: 0 0 0 10px;color:#D70032;text-decoration: none;\" href=" + ref + " target=\"_blank\"><span class=\"bgrd-txt-violet icon icon-see-more more\"></span></a>")
            
          ).error (data, status) ->
            console.log "ERROR UTUBE"

    tweakHdrBackground = ->
      I_WIDTH = 1920 #1790 #1200 for an image
      I_HEIGHT = 665
      windowWidth = $(window).width()
      slideHeight = $(window).height() / 100 * 90
      ratio_x = windowWidth / I_WIDTH
      ratio_y = slideHeight / I_HEIGHT
      w_biggest = ratio_x > ratio_y
      ratio = (if w_biggest then ratio_x else ratio_y)
      o =
        width: (if w_biggest then windowWidth else I_WIDTH)# * ratio)
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

      widthBlock = $(".cell-type1-full").width()
      if $(window).width() > 624
        $(".content-cell-full").height widthBlock
      else
        $(".content-cell-full").css "height", "auto"

    changeHeader = ->
      bodyElement = $("body")
      window.onscroll = ->
        globalHeader = document.querySelector(".main-hdr-nav")
        scrollingElement = document.querySelector(".main")
        scrollingElementPosition = scrollingElement.offsetTop
        headerHeight = globalHeader.clientHeight
        isBackground = undefined
        
        if window.pageYOffset >= scrollingElementPosition - headerHeight
          globalHeader.style.backgroundColor = "#141414"
          # $(".main-hdr-nav div").addClass("logo_")
          isBackground = true
          loadUtubeFeed()
        else if window.pageYOffset < scrollingElementPosition - headerHeight
          globalHeader.style.backgroundColor = ""
          # $(".main-hdr-nav div").removeClass("logo_")
          isBackground = false
        $(window).resize ->
          scrollingElementPosition = $(".main").offset()

    tweakHdrBackground()
    setHeight()

    changeHeader()

    $(window).on "scroll", ->
      $(".main-hdr-nav").removeClass "opened"

    $(window).bind "resize", tweakHdrBackground
    $(window).resize ->
      setHeight()

    if navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      $( "html" ).removeClass( "backgroundclip" )
      # $( "html" ).addClass( "no-backgroundclip" )


    # oldIE = undefined
    # oldIE = true  if $("html").is(".no-backgroundclip")
    # if oldIE
    #   $( "html" ).removeClass( "backgroundclip" )
    #   console.log "IE"
    # else
    #   console.log "NOTIE"
