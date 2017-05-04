
	'use strict';

	app.controller('LoginCtrl', function ($scope,$http, $routeParams, $rootScope,$location) {
		
		$scope.signUpMode = false;
		
		$scope.signUpOff= function(){
			$scope.signUpMode = false;

		}
		
		$scope.signUpOn = function(){
			$scope.signUpMode = true;

		}
	
	$scope.login = function(){
			
		$http({
	          method  : 'POST',
	          url     : 'login',
	          data	  : $scope.account
	         })
	          .success(function(data) {
	          		if(data!=null){
	          			$rootScope.currentUser = data;
	          			$rootScope.currentUser.Type = 'Customer';
	          			$location.path('/');
	          		}
	          });
		
	}
	
	$scope.register = function(){
		$http({
	          method  : 'POST',
	          url     : 'register',
	          data	  : $scope.account
	         })
	          .success(function(data) {
	          		if(data!=null){
	          			$scope.signUpOff()
	          		}
	          });
	}



	  });
