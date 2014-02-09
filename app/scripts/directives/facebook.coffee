angular.module('fruitsandvegApp')
  .directive "fbLike", ($document, $location, $parse) ->
    restrict: 'C'
    link: (scope, element, attributes) ->
      FB?.XFBML.parse(element.parent()[0])
