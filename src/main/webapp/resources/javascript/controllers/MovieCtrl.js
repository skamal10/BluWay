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
	loadFavoriteGenres();
	loadTopMovies();
}


var loadFavoriteGenres = function(){
	
}

var loadTopMovies = function(){

	$http({
          method  : 'GET',
          url     : '/movie/homescreen',
         })
          .success(function(data) {
          		$scope.topMovies = data.slice();
          });
};

var loadMovieQueue = function(){
	$http({
        method  : 'GET',
        url     : '/movie/queue/'+$scope.loggedInAccount,
       })
        .success(function(data) {
        		$scope.movieQ = data.slice();
        });
}

init();

$scope.display = true;

  });


