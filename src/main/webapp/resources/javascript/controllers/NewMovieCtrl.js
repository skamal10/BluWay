'use strict';

app.controller('NewMovieCtrl', function ($scope,$http, $location) {
	$scope.movie = {};
	
	
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
		          			 $location.path('/movie/' + $scope.movieId);
		          		}
		          });
		}
		else{
			alert("INVALID!!!!");
		}
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

  });
