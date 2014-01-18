'use strict'

angular.module('fruitsandvegApp')
  .controller 'GlobalCtrl', ($scope, $location, $anchorScroll, $timeout) ->

    
    scrollReset = ->
                
      $targetBlock = $(".main")
      $headerHeight = $(".main-hdr-nav").height()
      $("html, body").animate
        scrollTop: -$($targetBlock).offset().top - $headerHeight + 1
      , 800

 
    $scope.$on "$routeChangeSuccess", ->
      $timeout(scrollReset, 700)

    # $scope.$on "$locationChangeStart", (event, newUrl, currentUrl) ->
    #   console.log newUrl


    (new Image()).src = 'images/cover.jpg'
    (new Image()).src = 'images/cover-prog.jpg'

    $scope.getClass = (path) ->
      if $location.path() is path
        "active"
      else
        ""

    $scope.sendAnalytics = (sns) ->
       ga('send', 'event', 'button', 'click', 'share-btn', sns);