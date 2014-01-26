angular.module('fruitsandvegApp')
  .directive "glPlus", ($document, $location, $parse) ->
    restrict: "A"
    link: (scope, element, attrs) ->
      gapi.plusone.go()
      console.log gapi.plusone
      console.log "TOTOTOTOTOTOONEEEEEEEEEEEEEE" 
      # gapi.plusone.render("g-plusone")