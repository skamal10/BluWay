'use strict';

app.controller('ShoppingCartCtrl', function ($scope,$http, $routeParams) {
	  
	$scope.accountId= $routeParams.Id;
	
	$scope.loggedInAccount = 1;
	$scope.loggedInCustomer= 111111111;
	$scope.accountId= $routeParams.accountId;
	
	

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
	          url     : '/movie/shoppingCart/1'
	         })
	         .success(function(data) {
	        		$scope.shoppingCart = data.slice();
	       
		        			
	   	  
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
		
	

     
	         
	}
	
	loadOrder();
	
});