'use strict';

app.controller('SearchCtrl', function ($scope,$http, $routeParams, $rootScope, $location) {
	
	$scope.selectedMovie = null;
	//$scope.movies=["Titanic", "Borat"];
	var loadAllMovies = function(){

		$http({
	          method  : 'GET',
	          url     : '/movie/all'
	         })
	          .success(function(data) {
	        	  console.log("hi");
	          		$scope.movies = data.slice();
	          });
	}
	
	$scope.redirectMovie = function(){
			$location.path('movie/'+$scope.selectedMovie.id);
	}
	
	loadAllMovies();

	
	
	
});
	
	
	
	
	