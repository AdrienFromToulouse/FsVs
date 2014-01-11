'use strict'

angular.module('fruitsandvegApp')
  .directive "istouch", ($document, $location, $parse) ->
    restrict: "A"
    link: (scope, element, attrs) ->
      ua = navigator.userAgent
      
      isTouchDevice = ua.match(/ipad|ipod|iphone/i)
      if isTouchDevice
        $( "#global" ).toggleClass( "touch", true )
      else
        $( "#global" ).toggleClass( "touch", false )
        $(".hdr-image-wrap").css("position", "fixed")
        $(".hdr-content").css("position", "fixed")

      isMobile = /Android|BlackBerry|IEMobile|Opera Mini/
      if isMobile is false
        $( "html" ).addClass( "backgroundclip" )
