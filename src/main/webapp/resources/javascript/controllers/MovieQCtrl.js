'use strict';

app.controller('MovieQCtrl', function ($scope,$http, $routeParams) {
	
	$scope.accountId= $routeParams.Id;
	
	
	
	$scope.deleteFromQueue = function(movie){
		
		$http({
	          method  : 'POST',
	          url     : '/movie/deleteFromQueue',
	          data	  : movie
	         })
	           
		
	}
	
	
	
	
	
	var loadMovieQueue = function(){
		$http({
	        method  : 'GET',
	        url     : '/movie/queue/1',
	       })
	        .success(function(data) {
	        		$scope.movieQ = data.slice();
	        });
	}

	
	loadMovieQueue(); 
});