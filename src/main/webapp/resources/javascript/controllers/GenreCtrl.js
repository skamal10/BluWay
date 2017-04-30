'use strict';

app.controller('GenreCtrl', function ($scope,$http, $routeParams) {
  
	
	var viewGenres = ["Horror","Comedy","Drama","Adventure","Romance","Family"];
	
	
	
	$scope.type= $routeParams.type;
	
	var loadMoviesByGenre = function(){

		$http({
	          method  : 'GET',
	          url     : 'movie/type/'+$scope.type
	         })
	          .success(function(data) {
	          		if(data!=null){
	          			$scope.movies = data;
	          		}
	          });
	};


  });


