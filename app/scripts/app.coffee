'use strict'

angular.module('fruitsandvegApp',
  [ 'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'ngAnimate'
  ])
  .config ($routeProvider, $locationProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/program',
        templateUrl: 'views/program.html'
        controller: 'MainCtrl'
      .otherwise
        redirectTo: '/'


    $locationProvider.html5Mode false