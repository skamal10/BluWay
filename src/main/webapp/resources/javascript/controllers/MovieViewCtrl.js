'use strict';

app.controller('MovieViewCtrl', function ($scope,$http, $routeParams, $uibModal, $rootScope) {
  
	$scope.movieId= $routeParams.movieId;
	$scope.accountId = $rootScope.currentUser.accountId;
	$scope.access = $rootScope.currentUser.Type;
	$scope.selectedActor = undefined;
	$scope.editMode = false;
	$scope.max = 5;
	$scope.isReadonly = true;


	  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];
	
$scope.addToQueue= function(movie){
	
		$http({
	          method  : 'POST',
	          url     : '/movie/addToQueue',
	          data	  : {movieId: $scope.movieId, accountId: $scope.accountId}
	         })
	                
	}



$scope.addToCart= function(movie){
	
	$http({
          method  : 'POST',
          url     : '/movie/addToCart',
          data	  : {movieId: movie.id, accountId: $scope.accountId }
         })
                
}




	
	$scope.toggleEditMode = function(){
		$scope.editMode = !$scope.editMode;
	}

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
	
	$scope.updateMovie = function(){
		$http({
	          method  : 'POST',
	          url     : '/movie/update',
	          data	  : $scope.movie
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		  $scope.toggleEditMode();
	        	  }
	        
	        	  
	        	  
	          });
	}
	
	var loadAllActors = function(){
		$http({
	          method  : 'GET',
	          url     : '/actor/all',
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		  $scope.allActors = data;
	        	  }	  
	          });
	}
	
	$scope.addAppearance = function(){
		$http({
	          method  : 'POST',
	          url     : 'actor/addAppearance',
	          data	  : { actorId: $scope.selectedActor.id, movieId: $scope.movie.id}
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		  $scope.actors = data;
	        		  $scope.selectedActor = null;
	        	  }
	        
	        	  
	        	  
	          });
	}
	
	$scope.removeAppearance = function(actorId){
		
		$http({
	          method  : 'POST',
	          url     : 'actor/removeAppearance',
	          data	  : { actorId: actorId , movieId: $scope.movie.id}
	         })
	          .success(function(data) {
	        	  if(data!=null){
	        		  $scope.actors = data;
	        	  }
	        
	        	  
	        	  
	          });
	}
	
	 $scope.open = function (size) {
		    var modalInstance = $uibModal.open({
		      templateUrl: 'template/actorModal',
		      controller: 'ActorModalCtrl',
		      size: size,
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });

		    modalInstance.result.then(function (newActor) {
		      $scope.newActor = newActor;
		      if(validateNewActor()){
		    		addNewActor();
		    	}
		    	else{
		    		// some error message once i figure out error messages
		    	}
		    });
		  };
		  
		  var addNewActor = function(){
				 
				 $http({
			          method  : 'POST',
			          url     : 'actor/add/',
			          data	  : $scope.newActor
			         })
			          .success(function(data) {
			          		if(data!=null){
			          			//sucess message
			          		}
			          });
				 
			 }
		  
		  var addNewActor = function(){
				 
				 $http({
			          method  : 'POST',
			          url     : 'actor/add/',
			          data	  : $scope.newActor
			         })
			          .success(function(data) {
			          		if(data!=null){
			          			//sucess message
			          		}
			          });
				 
			 }
			 
			 var validateNewActor = function(){
				 
				 var actor = $scope.newActor;
				 return actor.name && actor.age && actor.gender;
			 }
	
	
	
	
	loadAllActors();
	loadMovie();

 });