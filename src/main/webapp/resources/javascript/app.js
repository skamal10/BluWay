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
	    controller:  'MovieViewCtrl'
	})
	.when('/order/:id', {
	    templateUrl: 'template/orderPage',
	    controller:  'OrderPageCtrl'
	})
	
	
	.otherwise({
	    redirectTo: '/'
	});
	 }
	 ]);

