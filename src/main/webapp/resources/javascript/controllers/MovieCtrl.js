'use strict';

app.controller('MovieCtrl', function ($scope, $http, $rootScope,$location) {
   
$scope.topMovies = [];
$scope.isAdmin = false;
$scope.currentNavItem = 'page1';
$scope.currentUser = $rootScope.currentUser;


$('.carousel-control').click(function(e){
	  e.preventDefault();
	});


var init = function(){
	loadBestSellerList();
	loadPersonalizedList();
	loadMovieQueue();
	loadTopMovies();
	loadFavoriteGenres();
	
}

var loadBestSellerList = function(){
	$http({
        method  : 'GET',
        url     : '/movie/bestSellerList/'
       })
        .success(function(data) {
        	if(data!=null){
        		$scope.bestSellerList = data;
        	}
        });
}

var loadPersonalizedList = function(){
	$http({
        method  : 'GET',
        url     : '/movie/personalize/'+$scope.currentUser.ssn
       })
        .success(function(data) {
        	if(data!=null){
        		$scope.personalizedMovies = data;
        	}
        });
}
var loadFavoriteGenres = function(){
	$http({
        method  : 'GET',
        url     : '/movie/favoriteGenres/'+$scope.currentUser.accountId
       })
        .success(function(data) {
        	if(data!=null){
        		$scope.topGenres = data;
        	}
        });
}
// Load the featured movies --> same for all users
var loadTopMovies = function(){

	$http({
          method  : 'GET',
          url     : '/movie/homescreen'
         })
          .success(function(data) {
          		$scope.topMovies = data.slice();
          });
};
// Load the users movie queue --> ACCOUNT NUMBER IS HARD CODED NOW
var loadMovieQueue = function(){
	$http({
        method  : 'GET',
        url     : '/movie/queue/'+$scope.currentUser.accountId,
       })
        .success(function(data) {
        		$scope.movieQ = data.slice();
        });
}

$scope.display = true;
if(!$scope.currentUser){
	$location.path('/login');
}
else{
	init();
}

  });


