'use strict'

angular.module('fruitsandvegApp',
  [ 'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'ngAnimate',
  ])
  .config ($routeProvider, $locationProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/program',
        templateUrl: 'views/program.html'
        controller: 'MainCtrl'
      .when '/gallery',
        templateUrl: 'views/gallery.html'
        controller: 'MainCtrl'
      .when '/records',
        templateUrl: 'views/records.html'
        controller: 'MainCtrl'
      .otherwise
        redirectTo: '/'


    $locationProvider.html5Mode false

    # 
    # "https://graph.facebook.com/103759093066773|XV0Oar8t-NvjoQTbc1dtGio5m60/feed?access_token=103759093066773|XV0Oar8t-NvjoQTbc1dtGio5m60";
    # 