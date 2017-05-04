
	'use strict';

	app.controller('LoginCtrl', function ($scope,$http, $routeParams, $rootScope,$location) {
		
		$scope.signUpMode = false;
		
		$scope.signUpOff= function(){
			$scope.signUpMode = false;

		}
		
		$scope.signUpOn = function(){
			$scope.signUpMode = true;

		}
		$scope.account = {
			 email: 'vicdu@cs.sunysb.edu',
			 password: 'testing123' 
	};
	
	$scope.login = function(){
			
		$http({
	          method  : 'POST',
	          url     : 'login',
	          data	  : $scope.account
	         })
	          .success(function(data) {
	          		if(data!=null){
	          			$rootScope.currentUser = data;
	          			$location.path('/');
	          		}
	          });
		
	}



	  });
