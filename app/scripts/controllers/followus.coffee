'use strict'

angular.module('fruitsandvegApp')
  .controller 'FollowusCtrl', ($scope, $http, $timeout) ->

    # "https://graph.facebook.com/103759093066773|XV0Oar8t-NvjoQTbc1dtGio5m60/feed?access_token=103759093066773|XV0Oar8t-NvjoQTbc1dtGio5m60";
    $http(
      method: "GET"
      url: "https://graph.facebook.com/fruitsandveggies031/feed?access_token=103759093066773|XV0Oar8t-NvjoQTbc1dtGio5m60"
    ).success((data, status, headers, config) ->
      console.log data
      $scope.posts = data.data
      console.log  $scope.posts
    ).error (data, status, headers, config) ->
      console.log "ERROR"