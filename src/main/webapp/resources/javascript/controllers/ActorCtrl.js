'use strict';

app.controller('ActorCtrl', function ($scope,$http, $routeParams) {

 
  $scope.actorId = $routeParams.actorId;
  
  $scope.max = 5;
  $scope.isReadonly = true;


  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
  
  
  
  	var loadActor = function(){
	  
	  $http({
          method  : 'GET',
          url     : 'actor/'+$scope.actorId
         })
          .success(function(data) {
          		if(data!=null){
          			$scope.actor = data;
          			$scope.actorRating = $scope.actor.rating;
          		}
          });
	  
	  
	  
  }
	
	
	var loadMoviesByActorAppearances = function(){
		$http({
	          method  : 'GET',
	          url     : 'movie/actor/'+$scope.actorId
	         })
	          .success(function(data) {
	          		if(data!=null){
	          			$scope.movies = data;
	          		}
	          });
	};
	var init = function(){
		loadActor();
		loadMoviesByActorAppearances();
	}

	init();

  });