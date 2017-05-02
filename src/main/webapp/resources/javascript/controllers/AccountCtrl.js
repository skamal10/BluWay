	'use strict';

	app.controller('AccountCtrl', function ($scope,$http, $routeParams) {
		$scope.user={};
		
		$scope.editMode = false;
		
		$scope.makeEditable = function(){
			$scope.editMode = true;
		}
		
		$scope.setInfo = function(){
			$scope.editMode = false;
//			$http({
//		          method  : 'POST',
//		          url     : 'account/set/'+$scope.user
//		         })
//		          .success(function(data) {
//		        	  console.log("sucess")
//		          });
			
		}


	  });