'use strict';


angular.
module('bluWay', []).
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