	'use strict';

	app.controller('AccountCtrl', function ($scope,$http, $routeParams, $rootScope) {
		$scope.user=$rootScope.currentUser;
		
		$scope.editMode = false;
		
		$scope.makeEditable = function(){
			$scope.editMode = true;
		}
		
		$scope.setInfo = function(){
			$scope.editMode = false;
			console.log($scope.user);
			$http({
		          method  : 'POST',
		          url     : 'customer/update/',
		         data	  : $scope.user
		         })
		          .success(function(data) {
		        	 
		          });
			
		}


	  });