'use strict';


angular.
module('bluWay', ['ngMaterial']).
  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl:'index.jsp',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });