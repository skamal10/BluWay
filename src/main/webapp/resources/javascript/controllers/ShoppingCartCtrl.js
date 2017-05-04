'use strict';

app.controller('ShoppingCartCtrl', function ($scope,$http, $routeParams, $rootScope) {
	  
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
	
	
	$scope.placeOrder = function(){
		$http({
	          method  : 'POST',
	          url     : '/order/submit',
	          data	  : $scope.accountId
	         })
		        .success(function(data) {
		        	alert("Order Submitted");
	        });
	}

	$scope.deleteFromShoppingCart = function(movie){
		
		$http({
	          method  : 'POST',
	          url     : '/movie/deleteFromShoppingCart',
	          data	  : movie
	         })
		        .success(function(data) {
	        		var index = $scope.shoppingCart.indexOf(movie);
	        		$scope.shoppingCart.splice(index,1);
	        });
		
	}
	
	
	var loadOrder = function(){
		$http({
	          method  : 'GET',
	          url     : '/movie/shoppingCart/'+$scope.accountId
	         })
	         .success(function(data) {
	        		$scope.shoppingCart = data.slice();
	       
		        			
	   	  
		          });
		
		
		$http({
	          method  : 'GET',
	          url     : '/customer/'+$scope.customerId
	         })
	         .success(function(data) {
	        	  if(data!=null){
		        		 $scope.customer = data;  
		        		
		        		console.log($scope.customer);
		        	  }
		        
		        	  
		        	  
		          });
		     
	}
	
	if($routeParams.Id){
		$scope.accountId= $routeParams.Id;
		loadCustomerByAccount();
	}
	else{
		$scope.accountId = $rootScope.currentUser.accountId;
		$scope.customerId = $rootScope.currentUser.ssn;
		loadOrder();
	}
	
	
});