'use strict';

app.controller('AccountStatsCtrl', function ($scope,$http, $routeParams) {
	$scope.view_tab= 'subscriptions';
	$scope.months = [
		{month:"All", value: -1},
		{month:"January", value: 0},
		{month:"Feburary", value: 1},
		{month:"March", value: 2},
		{month:"April", value: 3},
		{month:"May", value: 4},
		{month:"June", value: 5},
		{month:"July", value: 6},
		{month:"August", value: 7},
		{month:"September", value: 8},
		{month:"October", value: 9},
		{month:"November", value: 10},
		{month:"Decembmer", value: 11},
	];
	
	$scope.selectedMonth = $scope.months[5];
	
	$scope.totalSubscriptions = {
			"LIMITED" : 0,
			"UNLIMITED-1" :0,
			"UNLIMITED-2" : 0,
			"UNLIMITED-3":  0
	};
	
	var getSubscriptionTypes = function(){
		$http({
	        method  : 'GET',
	        url     : 'account/subscription-types'
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		  	$scope.accountTypes = data;
	      	  }
	        });
	}
	
	$scope.getSubscriptionsByMonth = function(){
		$http({
	        method  : 'GET',
	        url     : 'account/subscription-types/'+($scope.selectedMonth.value+1)
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		  $scope.totalSubscriptions = data;
	      		  	$scope.accountTypes = data;
	      		  	$scope.accountGraph.data= [{
		                 label: "Limited",
		                 value: $scope.totalSubscriptions["LIMITED"] 
		             },
		             {
		                 label: "Unlimited-1",
		                 value: $scope.totalSubscriptions["UNLIMITED-1"]
		             },
		             {
		                 label: "Unlimited-2",
		                 value: $scope.totalSubscriptions["UNLIMITED-2"]
		             },
		             {
		                 label: "Unlimited-3",
		                 value: $scope.totalSubscriptions["UNLIMITED-3"]
		             }]
	      		  	
	      		  $scope.totalRevenue = ($scope.totalSubscriptions["LIMITED"]*10) + ($scope.totalSubscriptions["UNLIMITED-1"]*15)
						+($scope.totalSubscriptions["UNLIMITED-2"]*20) + ($scope.totalSubscriptions["UNLIMITED-3"]*25);
	      	  }
	      	  
	      	 
	      	  
	        });
	}
	
	
	
	 $scope.accountGraph = {
			    chart: {
			        caption: "New Subscriptions By Month",
			        startingangle: "120",
			        showlabels: "1",
			        showlegend: "1",
			        enablemultislicing: "0",
			        slicingdistance: "15",
			        showpercentvalues: "1",
			        showpercentintooltip: "0",
			        plottooltext: "Genre : $label | Total Subscriptions : $datavalue",
			        theme: "fint"
			    },
			    data:[{
	                 label: "Limited",
	                 value: $scope.totalSubscriptions["LIMITED"] 
	             },
	             {
	                 label: "Unlimited-1",
	                 value: $scope.totalSubscriptions["UNLIMITED-1"]
	             },
	             {
	                 label: "Unlimited-2",
	                 value: $scope.totalSubscriptions["UNLIMITED-2"]
	             },
	             {
	                 label: "Unlimited-3",
	                 value: $scope.totalSubscriptions["UNLIMITED-3"]
	             }]
			}
	
	$scope.changeTab = function(tab) {
	    $scope.view_tab = tab;
	};
	
	$scope.getSubscriptionsByMonth();
	getSubscriptionTypes();
	
});