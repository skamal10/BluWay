'use strict';

app.controller('NewMovieCtrl', function ($scope,$http, $location, $uibModal) {
	$scope.movie = {};
	$scope.isReadOnly = true;
	$scope.selectedActor = null;
	$scope.actors = [];
	
	
	
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
	
	$scope.submitNewMovie = function(){
		if(validateInputs()){
			$http({
		          method  : 'POST',
		          url     : 'movie/add',
		          data	  : $scope.movie
		         })
		          .success(function(data) {
		          		if(data!=null){
		          			$scope.movieId = data;
		          			 setAppearances();
		          			
		          		}
		          });
			
			
		}
		else{
			alert("INVALID!!!!");
		}
	}
	
	var setAppearances = function(){
		
		var appearances = [];
		
		for(var i=0 ; i< $scope.actors.length; i++){
			appearances.push({actorId: $scope.actors[i].id, movieId: $scope.movieId});
		}
		console.log(appearances);
		$http({
	          method  : 'POST',
	          url     : 'actor/addMultipleAppearances',
	          data	  : appearances
	         })
	        .success(function(data){
	        	$location.path('/movie/' + $scope.movieId);
			});
	}
	
	var validateInputs = function(){
		var mov = $scope.movie;
		if(!mov.name || !mov.distributionFee || isNaN(mov.distributionFee) || !mov.numCopies || !mov.type){
			return false;
		}
		else{
			return true;
		}
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
		 
		 var validateNewActor = function(){
			 
			 var actor = $scope.newActor;
			 return actor.name && actor.age && actor.gender;
		 }
		 
			$scope.addAppearance = function(){
				$scope.actors.push($scope.selectedActor);
				$scope.selectedActor = null;
			}
			
			$scope.removeAppearance = function(actor){
				var index = array.indexOf(actor);
				if (index > -1) {
				    array.splice(index, 1);
				}
			}
			
			loadAllActors();
  });
