'use strict';

app.controller('OrderPageCtrl', function ($scope,$http, $routeParams,$rootScope) {
	
	$scope.submitRating= function(order){
		$http({
	          method  : 'POST',
	          url     : 'order/updateRating',
	          data	  : order
	         })
	         
	}
	
	var loadCustomerByAccount = function(){
		$http({
	          method  : 'GET',
	          url     : 'customer/getCustomerByAccount/'+$scope.accountId
	         })
	         .success(function(data) {
	        	  if(data!=null){
		        		 $scope.customerId = data;
		        		 loadOrder();
		        	  }
		          });      
	}
	
	var loadOrder = function(){
		$http({
	          method  : 'GET',
	          url     : 'order/pastOrders/'+ $scope.accountId
	         })
	         .success(function(data) {
	        	  if(data!=null){
	        	
		        		 $scope.orders = data;  
		        		 console.log($scope.orders);
		        			
		        	  }
		        
		        	  
		        	  
		          });
		
		
		$http({
	          method  : 'GET',
	          url     : '/customer/'+ $scope.customerId
	         })
	         .success(function(data) {
	        	  if(data!=null){
		        		 $scope.customer = data;  
		        	  }
		        
		        	  
		        	  
		          });      
	         
	}
	
	if($routeParams.id){
		$scope.accountId = $routeParams.Id;
		loadCustomerByAccount();
		
	}
	else{
		$scope.accountId = $rootScope.currentUser.accountId;
		$scope.customerId= $rootScope.currentUser.ssn;
		loadOrder();
	}
	
	
});