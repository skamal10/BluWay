'use strict';

app.controller('MovieQCtrl', function ($scope,$http, $routeParams) {
	
	$scope.accountId= $routeParams.Id;
	
	
	
	$scope.deleteFromQueue = function(movie){
		
		$http({
	          method  : 'POST',
	          url     : '/movie/deleteFromQueue',
	          data	  : movie
	         })
		        .success(function(data) {
	        		var index = $scope.movieQ.indexOf(movie);
	        		$scope.movieQ.splice(index,1);
	        });
		
	}
	
	
	
	
	
	var loadMovieQueue = function(){
		$http({
	        method  : 'GET',
	        url     : 'movie/shoppingCart/1',
	       })
	        .success(function(data) {
	        		$scope.shoppingCart = data.slice();
	        });
	}

	
	loadMovieQueue(); 
});