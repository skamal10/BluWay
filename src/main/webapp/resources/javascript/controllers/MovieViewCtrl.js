'use strict';

app.controller('MovieViewCtrl', function ($scope,$http, $routeParams) {
  
	$scope.movieId= $routeParams.movieId;

	 
	  $scope.max = 5;
	  $scope.isReadonly = true;


	  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];
	
//	
	
	

	var loadMovie = function(){

		$http({
	          method  : 'GET',
	          url     : '/movie/'+$scope.movieId,
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		 $scope.movie = data;  
	        		$scope.movieRating = $scope.movie.rating
	        		console.log($scope.movie);
	        	  }
	        
	        	  
	        	  
	          });
		
		
		$http({
	          method  : 'GET',
	          url     : '/actor/appeared/'+$scope.movieId,
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		 $scope.actors = data;  
	        		
	        		console.log($scope.actors);
	        	  }
	        
	        	  
	        	  
	          });
		
		
		
		
	};
	
	
	
	
	

	loadMovie();

 });