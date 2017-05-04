'use strict';
var app = angular.module('bluWay',['ngRoute','ngAnimate','ngMaterial', 'ui.bootstrap','ng-fusioncharts']);
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
	.when('/queue/', {
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
	.when('/order/:id?', {
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

	.when('/shoppingCart/:id?', {
	    templateUrl: 'template/shoppingCart',
	    controller:  'ShoppingCartCtrl'
	})
	.when('/account-stats/', {
	    templateUrl: 'template/accountStats',
	    controller:  'AccountStatsCtrl'
	})
	.when('/login/', {
	    templateUrl: 'template/loginTest',
	    controller:  'LoginCtrl'
	})
	.when('/account', {
	    templateUrl: 'template/myAccount',
	    controller: 'AccountCtrl'
	})
	.when('/login', {
	    templateUrl: 'template/login',
		 controller: 'LoginCtrl'
	})
	.when('/employeeLogin', {
	    templateUrl: 'template/employeeLogin',
	    controller: 'EmployeeLogin'
	})
	.otherwise({
	    redirectTo: '/'
	});
	
	 }]);

app.run(function($rootScope, $http,$location) {
	if(!$rootScope.currentUser){
		$http({
	          method  : 'GET',
	          url     : 'getLoggedInUser'
	         })
	          .success(function(data) {
	          		if(data){
	          			$rootScope.currentUser = data;
	          			$rootScope.currentUser.Type = 'Customer';
	          		}
	          });
	}
});
	
	
	
	
