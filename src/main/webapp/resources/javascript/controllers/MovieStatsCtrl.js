'use strict';

app.controller('MovieStatsCtrl', function ($scope,$http, $routeParams) {
	$scope.view_tab= 'genre';
	$scope.selectedGenre = "Drama";
	$scope.revenue = {
			"Comedy" : 0,
			"Romance" :0,
			"Adventure" : 0,
			"Drama":  0,
			"Horror": 0,
			"Family": 0
	};
	$scope.genreTotals = {
			"Comedy" : 0,
			"Romance" :0,
			"Adventure" : 0,
			"Drama":  0,
			"Horror": 0,
			"Family": 0
			
	};
	$scope.months = [
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
	
	$scope.allGenres = ["Comedy","Romance","Adventure","Drama","Horror","Family"];
	
	$scope.selectedMonth = $scope.months[2];
	
	$scope.changeTab = function(tab) {
	    $scope.view_tab = tab;
	}
	
	$scope.getOrdersByGenre = function(){
		$http({
	        method  : 'GET',
	        url     : 'order/byGenre/'+$scope.selectedGenre
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		$scope.orders = data;
	      	  }
	        });
	}
	
	$scope.getOrdersByMovie = function(){
		$http({
	        method  : 'GET',
	        url     : 'order/byMovie/'+$scope.selectedMovie.id
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		$scope.movieOrders = data;
	      	  }
	        });
	}
	
	$scope.loadAllMovies = function(){
		$http({
	        method  : 'GET',
	        url     : 'movie/all'
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		$scope.allMovies = data;
	      		$scope.selectedMovie = $scope.allMovies[0];
	      		$scope.getOrdersByMovie();
	      	  }
	        });
	}
	
	
	$scope.getGenreRevenue = function(){
		var date = new Date(new Date().getFullYear(), $scope.selectedMonth.value, 1);
		$http({
	        method  : 'GET',
	        url     : 'movie/genre/revenue/'+date,
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		$scope.revenue = data;
	      		$scope.updateChart();
	      	  }
	        });
	}
	
	$scope.getGenreTotals = function(){
		$http({
	        method  : 'GET',
	        url     : 'movie/genre/total'
	       })
	        .success(function(data) {
	      	  if(data!=null){
	      		$scope.genreTotals = data;
	      		$scope.updateTotals();
	      	  }
	        });
	}
	
	$scope.getGenreRevenue();
	$scope.getGenreTotals();
	$scope.getOrdersByGenre();
	$scope.loadAllMovies();
	
		 $scope.myDataSource = {
	             chart: {
	                 caption: "Movie Orders By Genre",
	                 subCaption: "Total number of rentals by genre for given month",
	             },
	             data:[{
	                 label: "Comedy",
	                 value: $scope.revenue["Comedy"]
	             },
	             {
	                 label: "Romance",
	                 value: $scope.revenue["Romance"]
	             },
	             {
	                 label: "Adventure",
	                 value: $scope.revenue["Adventure"]
	             },
	             {
	                 label: "Drama",
	                 value: $scope.revenue["Drama"]
	             },
	             {
	                 label: "Horror",
	                 value: $scope.revenue["Horror"]
	             }]
	           };
		 
		 $scope.totalGenreSource = {
				    chart: {
				        caption: "Total Movies by Genre",
				        startingangle: "120",
				        showlabels: "1",
				        showlegend: "1",
				        enablemultislicing: "0",
				        slicingdistance: "15",
				        showpercentvalues: "1",
				        showpercentintooltip: "0",
				        plottooltext: "Genre : $label | Total Movies : $datavalue",
				        theme: "fint"
				    },
				    data:[{
		                 label: "Comedy",
		                 value: $scope.genreTotals["Comedy"]
		             },
		             {
		                 label: "Romance",
		                 value: $scope.genreTotals["Romance"]
		             },
		             {
		                 label: "Adventure",
		                 value: $scope.genreTotals["Adventure"]
		             },
		             {
		                 label: "Drama",
		                 value: $scope.genreTotals["Drama"]
		             },
		             {
		                 label: "Horror",
		                 value: $scope.genreTotals["Horror"]
		             }]
				}
		 
		 
			$scope.updateChart = function(){
				$scope.myDataSource.data = [{
	                 label: "Comedy",
	                 value: $scope.revenue["Comedy"]
	             },
	             {
	                 label: "Romance",
	                 value: $scope.revenue["Romance"]
	             },
	             {
	                 label: "Adventure",
	                 value: $scope.revenue["Adventure"]
	             },
	             {
	                 label: "Drama",
	                 value: $scope.revenue["Drama"]
	             },
	             {
	                 label: "Horror",
	                 value: $scope.revenue["Horror"]
	             }];
			}
		 
		 $scope.updateTotals = function(){
				$scope.totalGenreSource.data = [{
	                 label: "Comedy",
	                 value: $scope.genreTotals["Comedy"]
	             },
	             {
	                 label: "Romance",
	                 value: $scope.genreTotals["Romance"]
	             },
	             {
	                 label: "Adventure",
	                 value: $scope.genreTotals["Adventure"]
	             },
	             {
	                 label: "Drama",
	                 value: $scope.genreTotals["Drama"]
	             },
	             {
	                 label: "Horror",
	                 value: $scope.genreTotals["Horror"]
	             }];
			}
	
	
  });