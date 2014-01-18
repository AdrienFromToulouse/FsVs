'use strict'

angular.module('fruitsandvegApp')
  .directive "fullpic", ($document, $location, $parse) ->
    restrict: "A"
    link: (scope, element, attrs) ->
      filter = $('#filter')
      global = $('#global')

      createBox = (oImg) ->

        # $(element).siblings().remove()
        
        box = $('#zoomimg')
        box.empty()
        
        $image = $('<img alt="" src="../images' + element.attr('data-imgsrc') + '" width="'+ oImg.width + '" height="'+ oImg.height + '">')
        
        $image.appendTo(box)
        box.css('width', $(window).width() + 'px')
        box.css('margin-top', '3%')
        box.css('margin-left', '0%')
        box.addClass 'visible'
        filter.addClass 'visible'
        
      element.click (event) ->
        event.preventDefault()
        event.stopPropagation()
        ga( 'send', 'event', 'picture', 'click', 'image', element.attr('data-imgsrc') )
    
            # $(element).after("<p class='loader'></p>")

        fullImg = new Image()
        fullImg.onload = ->
          natWidth = @width
          natHeight =  @height

          windowWidth = $(window).width() 
          windowHeight = $(window).height()

          ratioImg = @width / @height

          if ratioImg < 1
            if windowWidth < 640
              widthNew = windowWidth - 10
              heightNew = widthNew / ratioImg
            else
              heightNew = windowHeight - windowHeight / 10
              widthNew = ratioImg * heightNew
              if heightNew > windowHeight
                heightNew = windowHeight - windowHeight / 2
                widthNew = ratioImg * heightNew
          else if ratioImg > 1
            widthNew = windowWidth - windowWidth / 10
            heightNew = widthNew / ratioImg
            # the height computed is too big compare to the actual window height
            if heightNew > windowHeight
              heightNew = windowHeight - windowHeight / 5
              widthNew = ratioImg * heightNew
          else
            widthNew = windowWidth - windowWidth / 10
            heightNew = widthNew

          oImg =
            width: widthNew
            height: heightNew

          createBox (oImg)

          
        fullImg.src = "../images" + element.attr('data-imgsrc')

      $(document.body).click ->

        filter = $('#filter')
        box = $('#zoomimg')
        if box.hasClass 'visible'
          box.removeClass 'visible'
          filter.removeClass 'visible'