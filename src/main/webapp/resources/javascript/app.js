'use strict';
var app = angular.module('bluWay',['ngRoute','ngAnimate','ngMaterial', 'ui.bootstrap']);

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
	.when('/queue/:id', {
	    templateUrl: 'template/movieQ',
	    controller:  'MovieQCtrl'
	})
	.when('/genre/:type', {
	    templateUrl: 'template/genre',
	    controller:  'GenreCtrl'
	})
	.when('/actor/:actorId', {
	    templateUrl: 'template/actor',
	    controller:  'ActorCtrl'
	})
	.when('/order/:id', {
	    templateUrl: 'template/orderPage',
	    controller:  'OrderPageCtrl'
	})
	.when('/newmovie/', {
	    templateUrl: 'template/addMovie',
	    controller:  'NewMovieCtrl'
	})
	.when('/movie-stats/', {
	    templateUrl: 'template/movieStats',
	    controller:  'MovieStatsCtrl'
	})
	.when('/shoppingCart/', {
	    templateUrl: 'template/shoppingCart',
	    controller:  'ShoppingCartCtrl'
	})
	
	
	.otherwise({
	    redirectTo: '/'
	});
	 }
	 ]);

