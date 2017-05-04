'use strict';

app.controller('MovieQCtrl', function ($scope,$http, $routeParams, $rootScope) {
	
	$scope.accountId= $rootScope.currentUser.accountId;
	
	var loadMovieQueue = function(){
		$http({
	        method  : 'GET',
	        url     : '/movie/queue/'+$scope.accountId,
	       })
	        .success(function(data) {
	        		$scope.movieQ = data.slice();
	        });
	}

	
	loadMovieQueue(); 
});