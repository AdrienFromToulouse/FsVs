angular.module('fruitsandvegApp')
  .directive "fbLike", ($document, $location, $parse) ->
    restrict: 'C'
    link: (scope, element, attributes) ->
      console.log "hellooooooooooo"
      FB?.XFBML.parse(element.parent()[0])




angular.module('fruitsandvegApp')
  .directive "totoTo", ($document, $location, $parse) ->
    restrict: 'C'
    link: (scope, element, attributes) ->
      console.log "hellooooooooooo"
      console.log "hellooooooooooo"
      console.log "hellooooooooooo"
      console.log "hellooooooooooo"
