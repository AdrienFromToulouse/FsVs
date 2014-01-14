'use strict'

angular.module('fruitsandvegApp')
  .controller 'GlobalCtrl', ($scope, $location, $anchorScroll, $timeout) ->

    console.log "GLOBQL-ctrl"

    scrollReset = ->
                
      $targetBlock = $(".main")
      $headerHeight = $(".main-hdr-nav").height()
      $("html, body").animate
        scrollTop: -$($targetBlock).offset().top - $headerHeight + 1
      , 800

 
    $scope.$on "$routeChangeSuccess", ->
      $timeout(scrollReset, 700)

    $scope.$on "$locationChangeStart", (event, newUrl, currentUrl) ->
      console.log newUrl
      switch newUrl
        when "http://fruitsveggies.ntdotme.com/#/"
          (new Image()).src = 'images/cover.jpg'
        when "http://fruitsveggies.ntdotme.com/#/program"
          (new Image()).src = 'images/cover-prog.jpg'
        else
        
    $scope.getClass = (path) ->
      if $location.path() is path
        "active"
      else
        ""

    $scope.sendAnalytics = (sns) ->
       ga('send', 'event', 'button', 'click', 'share-btn', sns);