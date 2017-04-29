'use strict';

app.controller('MovieCtrl', function ($scope, $http) {
   
$scope.topMovies = [];
$scope.isAdmin = false;
$scope.currentNavItem = 'page1';
$scope.loggedInAccount = 1;

$('.carousel-control').click(function(e){
	  e.preventDefault();
	});


var init = function(){
	loadMovieQueue();
	loadTopMovies();
	loadFavoriteGenres();
}


var loadFavoriteGenres = function(){
	$http({
        method  : 'GET',
        url     : '/movie/favoriteGenres/'+$scope.loggedInAccount
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
        url     : '/movie/queue/'+$scope.loggedInAccount,
       })
        .success(function(data) {
        		$scope.movieQ = data.slice();
        });
}
var loadTopGenres = function(){
	
}
init();

$scope.display = true;

  });


