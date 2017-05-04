	'use strict';

	app.controller('NavBarCtrl', function ($scope,$http, $routeParams,$location, $rootScope) {
		
		$scope.root = $rootScope;
		$scope.logout = function(){
			$http({
		          method  : 'POST',
		          url     : 'logout',
		         })
		          .success(function(data) {
		        	 $rootScope.currentUser = null;
		        	 $scope.logoutEmployee();
		          });
		}
		
		$scope.logoutEmployee = function(){
			$http({
		          method  : 'POST',
		          url     : 'employee/logout',
		         })
		          .success(function(data) {
		        	 $rootScope.currentUser = null;
		        	 $location.path('/login');
		        	 
		          });
		}

	  });
	