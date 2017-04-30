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
	    controller:  'GenreCtrl'
	})
	
	
	.otherwise({
	    redirectTo: '/'
	});
	 }
	 ]);

