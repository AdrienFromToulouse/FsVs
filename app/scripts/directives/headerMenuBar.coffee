'use strict'

angular.module('fruitsandvegApp')
  .controller 'HeaderMenuBarCtrl', ($scope, $timeout) ->

    $scope.unroll = ->
      if $(".mob-menu-icon").css("display") is "block"
        $hdr = $(".main-hdr-nav")
        if $hdr.hasClass("opened")
          $hdr.removeClass "opened"
        else
          $hdr.addClass "opened"
      return
    
  .directive 'headerMenuBar', ->
    restrict: "E"
    scope: false
    templateUrl: "views/widgets/headerMenuBar.html"
    controller: "HeaderMenuBarCtrl"