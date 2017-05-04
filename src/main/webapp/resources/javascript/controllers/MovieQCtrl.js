'use strict';

app.controller('MovieQCtrl', function ($scope,$http, $routeParams, $rootScope) {
	
	$scope.accountId= $rootScope.currentUser.accountId;
	
	
	
	$scope.deleteFromQueue = function(movie){
		
		$http({
	          method  : 'POST',
	          url     : '/movie/deleteFromQueue',
	          data	  : {movieId : movie.id, accountId : $scope.accountId}
	         })
		        .success(function(data) {
	        		var index = $scope.movieQ.indexOf(movie);
	        		$scope.movieQ.splice(index,1);
	        });
		
	}
	
	
	
	
	
	var loadMovieQueue = function(){
		$http({
	        method  : 'GET',
	        url     : '/movie/queue/'+$scope.accountId
	       })
	        .success(function(data) {
	        	$scope.movieQ = data.slice();
	        });
	}

	
	loadMovieQueue(); 
});