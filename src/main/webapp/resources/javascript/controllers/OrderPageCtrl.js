'use strict';

app.controller('OrderPageCtrl', function ($scope,$http, $routeParams) {
	  
	$scope.accountId= $routeParams.Id;
	
	$scope.loggedInAccount = 1;
	$scope.loggedInCustomer= 111111111;
	$scope.accountId= $routeParams.accountId;
	
	
	$scope.submitRating= function(order){
		$http({
	          method  : 'POST',
	          url     : 'order/updateRating',
	          data	  : order
	         })
	         
	}
//	         
//	         $scope.submitAvgRating= function(movieId){
//		$http({
//	          method  : 'POST',
//	          url     : 'order/updateAvgRating/'+$scope.submitAvgRating,
//	          data:		 {movieId : 'movieId'}
//	        	  
//	         })
//	         
//	}
//	
//	
	
	var loadOrder = function(){
		$http({
	          method  : 'GET',
	          url     : 'order/pastOrders/1'
	         })
	         .success(function(data) {
	        	  if(data!=null){
	        	
		        		 $scope.orders = data;  
		        		 console.log($scope.orders);
		        			
		        	  }
		        
		        	  
		        	  
		          });
		
		
		$http({
	          method  : 'GET',
	          url     : '/customer/111111111'
	         })
	         .success(function(data) {
	        	  if(data!=null){
		        		 $scope.customer = data;  
		        		
		        		console.log($scope.customer);
		        	  }
		        
		        	  
		        	  
		          });
		
	
//		$http({
//	          method  : 'GET',
//	          url     : '/rental/movieRating/1'
//	         })
//	         .success(function(data) {
//	        	  if(data!=null){
//		        		 $scope.order = data;  
//		        		
//		        		console.log($scope.order);
//		        	  }
//		        
//		        	  
//		        	  
//		          });
//	         
	         
	}
	
	loadOrder();
	
});