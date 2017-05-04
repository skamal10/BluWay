	'use strict';

	app.controller('LoginCtrl', function ($scope,$http, $routeParams) {
		
		$scope.signUpMode = false;
		
		$scope.signUpOff= function(){
			$scope.signUpMode = false;

		}
		
		$scope.signUpOn = function(){
			$scope.signUpMode = true;

		}
		



	  });