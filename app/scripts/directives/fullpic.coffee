'use strict'

angular.module('fruitsandvegApp')
  .directive "fullpic", ($document, $location, $parse) ->
    restrict: "A"
    link: (scope, element, attrs) ->
      box = $('#zoomimg')
      filter = $('#filter')
      global = $('#global')

      createBox = (oImg) ->
        box.empty()

        $image = $('<img alt="" src="../images' + element.attr('data-imgsrc') + '" width="'+ oImg.width + '" height="'+ oImg.height + '">')
        
        $image.appendTo(box)
        # # _width = global.find('.main').width() - 200
        box.css('width', oImg.width + 'px')
        box.css('margin-top', '-5%')
        box.css('margin-left', '20%')
        box.addClass 'visible'
        filter.addClass 'visible'
        
      element.click (event) ->
        event.preventDefault()
        event.stopPropagation()
        console.log "hallo!"

        fullImg = new Image()
        fullImg.onload = ->
          natWidth = @width
          natHeight =  @height

          windowWidth = $(window).width() 
          windowHeight = $(window).height()

          ratioImg = @width / @height

          if ratioImg < 1
            heightNew = windowHeight - windowHeight / 10
            widthNew = ratioImg * heightNew
            oImg =
              width: widthNew
              height: heightNew
          else if ratioImg > 1
            widthNew = windowWidth - windowWidth / 10
            heightNew = widthNew / ratioImg
            oImg =
              width: widthNew
              height: heightNew
          else
            widthNew = windowWidth - windowWidth / 10
            heightNew = widthNew
            oImg =
              width: widthNew
              height: heightNew

          createBox (oImg)
          
        fullImg.src = "../images" + element.attr('data-imgsrc')

      $(document.body).click ->
        if box.hasClass 'visible'
          box.removeClass 'visible'
          filter.removeClass 'visible'