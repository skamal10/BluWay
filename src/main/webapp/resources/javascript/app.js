'use strict';
var app = angular.module('bluWay',['ngRoute','ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/', {
	    templateUrl: 'template/homepage',
	    controller:  'MovieCtrl'
	})
	.when('/movie/:movieId', {
	    templateUrl: 'template/movieViewer',
	    controller:  'MovieViewCtrl'
	})
	.when('/genre/:type', {
	    templateUrl: 'template/genre',
	    controller:  'GenreCtrl'
	})
	.when('/order/:type', {
	    templateUrl: 'template/orderPage',
	    controller:  'OrderPageCtrl'
	})
	
	
	.otherwise({
	    redirectTo: '/'
	});
	 }
	 ]);

