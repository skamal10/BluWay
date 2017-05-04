'use strict';
var app = angular.module('bluWay',["ngRoute"]);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/', {
	    templateUrl: 'template/homepage',
	    controller:  'MovieCtrl'
	})
	.when('/movie/:movieId', {
	    templateUrl: 'template/test',
	    controller:  'MovieViewCtrl'
	})
	.when('/genre/:type', {
	    templateUrl: 'template/genre',
	    controller:  'MovieViewCtrl'
	})
	.when('/account', {
	    templateUrl: 'template/myAccount',
	    controller: 'AccountCtrl'
	})
	.when('/login', {
	    templateUrl: 'template/login',
		 controller: 'LoginCtrl'
	})
	
	.otherwise({
	    redirectTo: '/'
	});
	 }
	 ]);

