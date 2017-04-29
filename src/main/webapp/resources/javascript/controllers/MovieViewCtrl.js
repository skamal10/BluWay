'use strict';

app.controller('MovieViewCtrl', function ($scope,$http, $routeParams) {
  
	$scope.movieId= $routeParams.movieId;

	var loadMovie = function(){

		$http({
	          method  : 'GET',
	          url     : '/movie/'+$scope.movieId,
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		  $scope.movie = data;  
	        	  }
	          });
	};
	
	loadMovie();

 });
